# TypeScript 공통 설정과 검사 함수

## 적용 범위

TypeScript 공통 코드는 모든 타입을 `types.ts`에 모으는 작업이 아닙니다. 이 문서는 저장소의 검사 강도를 맞추는 설정과 외부의 `unknown` 값을 안전하게 확인할 때 반복해서 쓰는 작은 함수를 제공합니다. API 응답 타입과 화면 데이터 모델은 해당 기능에서 관리합니다.

```text
실제 저장소
├── tsconfig.base.json
└── apps/app-webview/
    ├── tsconfig.json
    └── src/lib/
        ├── errors.ts
        ├── exhaustiveness.ts
        └── type-guards.ts
```

## 구현 예시 1: 저장소 공통 컴파일러 설정

### `tsconfig.base.json`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2022",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "useUnknownInCatchVariables": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```

### `apps/app-webview/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

기존 `tsconfig`를 통째로 교체하지 않습니다. Next.js가 생성한 값, 다른 workspace의 target과 CI 명령을 비교해 공통으로 올릴 옵션만 루트에 둡니다. `exactOptionalPropertyTypes`처럼 기존 오류가 많이 발생할 수 있는 옵션은 현재 오류 수와 library 호환성을 확인한 뒤 별도 작업으로 적용합니다.

## 구현 예시 2: 외부 입력을 확인하는 공통 함수

### `src/lib/type-guards.ts`

```ts
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

export function hasOwn<Key extends PropertyKey>(
  value: object,
  key: Key,
): value is object & Record<Key, unknown> {
  return Object.prototype.hasOwnProperty.call(value, key)
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}
```

이 함수는 `JSON.parse`, `response.json()`, WebView Bridge, storage, `postMessage`와 외부 SDK 결과를 처음 검사할 때 사용합니다. 객체 여부를 확인했다고 전체 응답 형식이 검증된 것은 아닙니다. 상세 필드는 해당 API나 Bridge의 응답 검증 함수에서 확인합니다.

### 실제 응답 검증에서 사용

다음 파일은 공통 폴더가 아니라 프로필 기능 가까이에 둡니다. 공통 검사 함수를 어떻게 조합하는지 보여 주는 완성 예시입니다.

### `src/features/profile/model/profile.ts`

```ts
export type Profile = {
  id: string
  displayName: string
  introduction: string | null
}
```

### `src/features/profile/api/parse-profile.ts`

```ts
import type { Profile } from "@/features/profile/model/profile"
import { hasOwn, isNonEmptyString, isRecord } from "@/lib/type-guards"

export class InvalidProfileResponseError extends Error {
  constructor() {
    super("프로필 응답 형식이 올바르지 않습니다.")
    this.name = "InvalidProfileResponseError"
  }
}

export function parseProfile(value: unknown): Profile {
  if (
    !isRecord(value) ||
    !hasOwn(value, "id") ||
    !isNonEmptyString(value.id) ||
    !hasOwn(value, "displayName") ||
    !isNonEmptyString(value.displayName) ||
    !hasOwn(value, "introduction") ||
    !(typeof value.introduction === "string" || value.introduction === null)
  ) {
    throw new InvalidProfileResponseError()
  }

  return {
    id: value.id,
    displayName: value.displayName,
    introduction: value.introduction,
  }
}
```

### 요청 함수에서 검증 함수 호출

```ts
import { parseProfile } from "@/features/profile/api/parse-profile"
import type { Profile } from "@/features/profile/model/profile"
import { request } from "@/lib/http/request"

export function getProfile(signal?: AbortSignal): Promise<Profile> {
  return request("/api/members/me", {
    signal,
    parse: parseProfile,
  })
}
```

공통 요청 함수는 [API 요청 기반 구현 예시](./network.md)의 본문 읽기와 HTTP 오류 처리를 담당하고, 기능별 parser는 성공 응답을 `unknown`에서 확인합니다. `/api/members/me`, 응답 필드와 오류 형식은 교체 지점입니다. 실제 backend 계약이 정해지면 기능 API, parser 테스트와 Mock fixture를 함께 갱신하며 `response.json() as Profile`처럼 검증 없이 단언하지 않습니다.

### 응답 검증 테스트

```ts
import { describe, expect, it } from "vitest"
import {
  InvalidProfileResponseError,
  parseProfile,
} from "@/features/profile/api/parse-profile"

describe("parseProfile", () => {
  it("검증된 응답을 화면 model로 반환한다", () => {
    expect(
      parseProfile({
        id: "user-1",
        displayName: "라운지 사용자",
        introduction: null,
      }),
    ).toEqual({
      id: "user-1",
      displayName: "라운지 사용자",
      introduction: null,
    })
  })

  it.each([
    null,
    [],
    {},
    { id: "", displayName: "사용자", introduction: null },
    { id: "user-1", displayName: 10, introduction: null },
    { id: "user-1", displayName: "사용자" },
  ])("잘못된 응답 %j를 거부한다", (value) => {
    expect(() => parseProfile(value)).toThrow(InvalidProfileResponseError)
  })
})
```

## 구현 예시 3: catch 값을 사용자 문구로 변환

`useUnknownInCatchVariables`가 켜져 있으면 catch 값은 바로 `.message`에 접근할 수 없습니다. 모든 오류를 `Error`로 단언하는 대신 기본 문구를 명시합니다.

### `src/lib/errors.ts`

```ts
export function getErrorMessage(
  error: unknown,
  fallback = "요청을 처리하지 못했습니다.",
) {
  if (error instanceof Error && error.message.trim()) {
    return error.message
  }

  if (typeof error === "string" && error.trim()) {
    return error
  }

  return fallback
}
```

### mutation에서 사용

```tsx
const mutation = useMutation({
  mutationFn: updateProfile,
  onError(error) {
    setErrorMessage(getErrorMessage(error, "프로필을 저장하지 못했습니다."))
  },
})
```

서버 오류 코드를 사용자 문구로 바꾸는 정책이 생기면 이 공통 함수에 업무 분기를 넣지 않고 해당 기능의 오류 변환 함수를 별도로 둡니다.

## 구현 예시 4: union 분기 누락 검사

### `src/lib/exhaustiveness.ts`

```ts
export function assertNever(value: never, message = "처리하지 않은 상태입니다."): never {
  throw new Error(`${message} ${String(value)}`)
}
```

### 화면 상태 분기에서 사용

```tsx
import { assertNever } from "@/lib/exhaustiveness"

type ViewState =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "ready"; count: number }
  | { status: "error"; message: string }

export function ResultSummary({ state }: { state: ViewState }) {
  switch (state.status) {
    case "loading":
      return <p>불러오는 중</p>
    case "empty":
      return <p>결과가 없습니다.</p>
    case "ready":
      return <p>{state.count}개의 결과</p>
    case "error":
      return <p role="alert">{state.message}</p>
    default:
      return assertNever(state)
  }
}
```

새 status를 union에 추가하고 switch 처리를 빼먹으면 typecheck에서 `never` 인자 오류가 발생합니다. 단순 boolean 둘세 개로 불가능한 상태 조합을 만드는 대신 서로 배타적인 union을 사용합니다.

## 컴포넌트 prop은 원본에서 추론

```ts
import type { ComponentProps, ReactNode } from "react"
import { Button } from "@/components/ui/button"

export type SubmitButtonProps = Omit<
  ComponentProps<typeof Button>,
  "type"
> & {
  pending?: boolean
  pendingContent?: ReactNode
}
```

원본 Button prop을 복사한 interface는 Button이 바뀔 때 어긋납니다. 감싸는 컴포넌트가 직접 정하는 prop만 `Omit`하고 표준 prop, event, `className`, ARIA prop은 원본에서 이어받습니다.

## 타입 배치 기준

```text
src/features/profile/
├── api/
│   ├── get-profile.ts
│   └── parse-profile.ts
├── components/profile-form.tsx
└── model/profile.ts
```

- 한 컴포넌트만 쓰는 props는 같은 파일에 둡니다.
- API 입력·응답, 데이터 모델, form 입력은 변경 이유가 다르면 분리합니다.
- 전역 `types.ts`, `Nullable<T>`, `Maybe<T>` 같은 의미 없는 모음을 만들지 않습니다.
- 작성 중인 form을 `Partial<Profile>`로 표현하지 말고 실제 form 입력 type을 선언합니다.
- 외부 입력은 `any`가 아니라 `unknown`에서 좁힙니다.

## 검증

```text
npm run typecheck
npm run lint
npm run test
```

타입 단언으로 오류를 숨기지 않았는지, 응답 검증의 실패 경우가 테스트에 있는지, 새 union 항목이 모든 `switch`에서 처리되는지를 함께 확인합니다.
