# React 공통 코드 구현 예시

## 적용할 파일

이 문서는 앱 전체에 필요한 QueryClient·Provider와 폼에서 반복되는 접근성·제출 처리 중 동작을 완성된 파일 단위로 제공합니다.

```text
apps/app-webview/src/
├── app/
│   ├── layout.tsx
│   └── providers.tsx
├── components/common/
│   ├── form-field.tsx
│   └── submit-button.tsx
└── lib/query/get-query-client.ts
```

Provider는 TanStack Query를 실제로 쓰는 시점에 적용합니다. `SubmitButton`과 `FormField`는 같은 동작이 둘 이상의 폼에서 반복되기 전까지 기능 폴더에 두어도 됩니다.

## 구현 예시 1: QueryClient 생명주기

### 사용 조건

- Server Component가 있는 Next.js App Router 애플리케이션입니다.
- Client Component에서 TanStack Query를 사용합니다.
- 서버 요청 사이에는 캐시가 섞이지 않고 브라우저에서는 같은 QueryClient를 재사용해야 합니다.

필요 패키지는 `@tanstack/react-query`입니다.

### `src/lib/query/get-query-client.ts`

```ts
import { isServer, QueryClient } from "@tanstack/react-query"

function createQueryClient() {
  return new QueryClient()
}

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  if (isServer) {
    return createQueryClient()
  }

  if (!browserQueryClient) {
    browserQueryClient = createQueryClient()
  }

  return browserQueryClient
}
```

서버에서는 요청마다 새 QueryClient를 만들고 브라우저에서는 모듈 범위의 QueryClient를 재사용합니다. 서버와 브라우저에서 무조건 하나의 `new QueryClient()`를 공유하면 SSR 요청 사이에 캐시가 섞일 수 있습니다.

### `src/app/providers.tsx`

```tsx
"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import type { PropsWithChildren } from "react"
import { getQueryClient } from "@/lib/query/get-query-client"

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={getQueryClient()}>
      {children}
    </QueryClientProvider>
  )
}
```

### `src/app/layout.tsx` 연결

```tsx
import type { ReactNode } from "react"
import { AppProviders } from "@/app/providers"
import "@/app/globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
```

최상위 layout은 Server Component로 유지하고 Provider만 Client Component로 둡니다. Query Devtools처럼 개발에서만 필요한 도구와 특정 화면 경로만 쓰는 Context는 이 Provider에 무조건 넣지 않습니다.

[세션과 회원 경계 구현 예시](./session.md)의 세션 Query도 같은 `AppProviders` 아래에서 실행합니다. 세션을 사용한다는 이유로 별도의 QueryClient나 전역 회원 Context를 추가하지 않고, 로그아웃 뒤 cache 초기화 범위만 실제 공개 데이터와 사용자 데이터 구성에 맞춰 결정합니다.

### 미확정 항목

`staleTime`은 조회 결과를 다시 확인하지 않고 최신으로 보는 시간이고, `gcTime`은 화면에서 더 이상 쓰지 않는 캐시를 메모리에 남겨 두는 시간입니다. 두 값과 `retry`, `refetchOnWindowFocus`, 전역 오류 처리는 API 특성과 UX 정책에 맞춰 결정합니다. 정책이 확정되면 `createQueryClient`의 `defaultOptions`에 명시하고, 확정 전에는 임의의 숫자나 전역 toast를 넣지 않습니다.

## 구현 예시 2: 중복 제출을 막는 `SubmitButton`

### 사용 조건

여러 폼에서 submit type, 처리 중 중복 제출 방지와 진행 상태 문구를 같은 방식으로 제공할 때 사용합니다. API 호출, 성공 알림, 화면 이동과 오류 문구는 이 컴포넌트에 넣지 않습니다.

먼저 필요한 코드는 shadcn `Button`과 `Spinner`입니다. `Spinner`가 없다면 registry에서 추가하거나 프로젝트의 기존 진행 표시 컴포넌트로 import만 교체합니다.

### `src/components/common/submit-button.tsx`

```tsx
import type { ComponentProps, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export type SubmitButtonProps = Omit<
  ComponentProps<typeof Button>,
  "type"
> & {
  pending?: boolean
  pendingContent?: ReactNode
}

export function SubmitButton({
  children,
  disabled,
  pending = false,
  pendingContent,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      {...props}
      type="submit"
      aria-busy={pending || undefined}
      disabled={disabled || pending}
    >
      {pending ? (
        <>
          <Spinner data-icon="inline-start" aria-hidden="true" />
          {pendingContent ?? children}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
```

`type`은 이 컴포넌트가 정한 동작이므로 호출자가 바꿀 수 없습니다. 일반 클릭, 링크, 취소 동작에는 원래 `Button`을 사용합니다. `pendingContent`에는 `저장 중`처럼 사용자가 상태를 알 수 있는 문구를 전달합니다.

### `src/features/profile/profile-name-form.tsx`

```tsx
"use client"

import { type FormEvent, useState } from "react"
import { SubmitButton } from "@/components/common/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type ProfileNameFormProps = {
  initialName: string
  onSave: (name: string) => Promise<void>
}

export function ProfileNameForm({
  initialName,
  onSave,
}: ProfileNameFormProps) {
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()

    if (!name || pending) return

    setPending(true)
    try {
      await onSave(name)
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="profile-name">이름</Label>
        <Input
          id="profile-name"
          name="name"
          defaultValue={initialName}
          autoComplete="name"
          required
        />
      </div>

      <SubmitButton pending={pending} pendingContent="저장 중">
        저장
      </SubmitButton>
    </form>
  )
}
```

`onSave`를 prop으로 받으므로 이 폼은 fetch, mutation 라이브러리, API 경로에 묶이지 않습니다. 실제 기능에서는 TanStack Mutation 함수를 전달할 수 있습니다.

## 구현 예시 3: label·도움말·오류를 연결하는 `FormField`

### 사용 조건

Input, Select, Textarea 종류와 관계없이 label, 설명, 오류 ID를 같은 규칙으로 연결해야 할 때 사용합니다. 컴포넌트가 입력 요소를 직접 만들지 않고 렌더링 함수로 필요한 접근성 속성만 전달합니다.

### `src/components/common/form-field.tsx`

```tsx
import type { ComponentProps, ReactNode } from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type FieldControlProps = {
  id: string
  "aria-describedby"?: string
  "aria-invalid"?: true
}

export type FormFieldProps = Omit<ComponentProps<"div">, "children"> & {
  id: string
  label: ReactNode
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  children: (props: FieldControlProps) => ReactNode
}

export function FormField({
  id,
  label,
  hint,
  error,
  required = false,
  children,
  className,
  ...props
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined

  return (
    <div className={cn("grid gap-1.5", className)} {...props}>
      <Label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </Label>

      {children({
        id,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
      })}

      {hint ? (
        <p id={hintId} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
```

### Input과 Textarea에서 사용

```tsx
import { FormField } from "@/components/common/form-field"
import { Input } from "@/components/ui/input"

<FormField
  id="display-name"
  label="표시 이름"
  hint="2자 이상 입력하세요."
  error={errors.displayName}
  required
>
  {(controlProps) => (
    <Input
      {...controlProps}
      name="displayName"
      autoComplete="name"
      required
    />
  )}
</FormField>
```

```tsx
<FormField id="introduction" label="소개" hint="최대 200자">
  {(controlProps) => (
    <textarea
      {...controlProps}
      name="introduction"
      maxLength={200}
      className="min-h-24 rounded-md border border-input bg-background px-3 py-2"
    />
  )}
</FormField>
```

required 표시는 시각적 보조일 뿐이므로 실제 입력 요소에도 `required` 또는 `aria-required`를 전달합니다. 오류 문구를 만드는 입력값 검증은 각 기능에서 처리합니다.

## 공통 컴포넌트 동작 테스트

### `src/components/common/submit-button.test.tsx`

```tsx
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { SubmitButton } from "@/components/common/submit-button"

describe("SubmitButton", () => {
  it("pending 동안 중복 제출을 막고 진행 상태를 알린다", () => {
    render(
      <SubmitButton pending pendingContent="저장 중">
        저장
      </SubmitButton>,
    )

    const button = screen.getByRole("button", { name: "저장 중" })

    expect(button).toBeDisabled()
    expect(button).toHaveAttribute("type", "submit")
    expect(button).toHaveAttribute("aria-busy", "true")
  })
})
```

### `src/components/common/form-field.test.tsx`

```tsx
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { FormField } from "@/components/common/form-field"

describe("FormField", () => {
  it("label, 도움말과 오류를 control에 연결한다", () => {
    render(
      <FormField
        id="name"
        label="이름"
        hint="2자 이상 입력하세요."
        error="이름을 확인하세요."
      >
        {(props) => <input {...props} />}
      </FormField>,
    )

    const input = screen.getByRole("textbox", { name: "이름" })

    expect(input).toHaveAccessibleDescription(
      "2자 이상 입력하세요. 이름을 확인하세요.",
    )
    expect(input).toHaveAttribute("aria-invalid", "true")
    expect(screen.getByRole("alert")).toHaveTextContent("이름을 확인하세요.")
  })
})
```

클래스 문자열, shadcn 내부 DOM, 아이콘 path는 테스트하지 않습니다. 이 프로젝트가 추가한 제출 동작과 접근성 연결만 확인합니다.

## 공통 폴더로 옮기지 않는 경우

- 컴포넌트 안에서 API 요청, router 이동, 알림 문구를 결정합니다.
- `compact`, `profile`, `ticket`, `darkCard`처럼 화면마다 다른 참·거짓 prop이 늘어납니다.
- 한 사용처를 맞추기 위해 다른 사용처가 쓰지 않는 함수가 필수가 됩니다.
- Next.js의 `loading.tsx`, `error.tsx` 또는 shadcn 기본 UI 컴포넌트와 같은 기능을 다시 만듭니다.

이 경우 컴포넌트를 더 일반화하지 말고 해당 기능 폴더에 둡니다.
