# API 요청 기반 구현 예시

## 적용 목적

API 경로, 인증 방식과 공통 응답 형식이 확정되기 전에도 화면과 기능 코드를 같은 요청 경계 위에서 작성할 수 있도록 최소 HTTP 기반을 제공합니다. 이 문서의 코드는 서버 응답 형식을 임의로 통일하지 않고, 기능별 응답 검증 함수를 요청 코드에 연결합니다.

다음 조건에서 적용합니다.

- 둘 이상의 기능이 `fetch`의 상태 확인, JSON 읽기와 오류 변환을 반복합니다.
- API가 미확정이어도 Mock 응답으로 화면 개발과 테스트를 시작해야 합니다.
- 실제 계약이 정해졌을 때 기능 코드를 모두 고치지 않고 요청 경계만 교체해야 합니다.

다음 내용은 확정하지 않습니다.

- API 기본 URL과 version 경로
- Cookie, access token 또는 WebView Bridge를 사용하는 인증 방식
- 서버의 공통 성공·오류 응답 형식
- 공통 timeout 값과 재시도 정책

## 적용할 파일

```text
src/
├─ lib/http/
│  ├─ http-error.ts
│  └─ request.ts
└─ features/
   └─ profile/api/
      ├─ parse-profile.ts
      └─ profile-api.ts
```

`request`는 HTTP 전송 책임만 가집니다. API별 path, method, 입력 type과 응답 검증은 기능 폴더에 둡니다.

## HTTP 오류

### `src/lib/http/http-error.ts`

```ts
export class HttpError extends Error {
  readonly status: number
  readonly body: unknown

  constructor(status: number, body: unknown) {
    super(`HTTP request failed with status ${status}`)
    this.name = "HttpError"
    this.status = status
    this.body = body
  }
}

export function isHttpError(error: unknown): error is HttpError {
  return error instanceof HttpError
}
```

`HttpError`는 상태 코드와 읽을 수 있었던 응답 본문만 보존합니다. 서버의 `code`, `message`, `details` 구조가 확정되기 전에는 선택 속성이 많은 공통 오류 type을 만들지 않습니다.

## 공통 요청 함수

### `src/lib/http/request.ts`

```ts
import { HttpError } from "@/lib/http/http-error"

type ResponseParser<T> = (value: unknown) => T

type RequestOptions<T> = Omit<RequestInit, "body"> & {
  body?: unknown
  parse?: ResponseParser<T>
}

async function readResponseBody(response: Response): Promise<unknown> {
  if (response.status === 204) return undefined

  const text = await response.text()
  if (!text) return undefined

  const contentType = response.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) return text

  try {
    return JSON.parse(text) as unknown
  } catch {
    return text
  }
}

export async function request<T>(
  path: string,
  options: RequestOptions<T> = {},
): Promise<T> {
  const { body: input, headers: inputHeaders, parse, ...init } = options
  const headers = new Headers(inputHeaders)

  const body = input === undefined ? undefined : JSON.stringify(input)
  if (body !== undefined && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json")
  }

  const response = await fetch(path, {
    ...init,
    headers,
    body,
  })
  const value = await readResponseBody(response)

  if (!response.ok) {
    throw new HttpError(response.status, value)
  }

  return parse ? parse(value) : (value as T)
}
```

본문을 한 번만 읽은 뒤 성공과 오류에서 같은 값을 사용합니다. `204 No Content`와 빈 본문도 JSON으로 강제 변환하지 않습니다. 기능별 parser가 있으면 성공 본문을 `unknown`에서 검증하고, parser가 없는 요청은 응답 형식이 없는 logout 같은 호출에만 제한합니다.

## 기능 API에서 사용

### `src/features/profile/api/profile-api.ts`

```ts
import { parseProfile } from "@/features/profile/api/parse-profile"
import type {
  Profile,
  UpdateProfileInput,
} from "@/features/profile/model/profile"
import { request } from "@/lib/http/request"

export function getProfile(signal?: AbortSignal): Promise<Profile> {
  return request("/api/members/me", {
    signal,
    parse: parseProfile,
  })
}

export function updateProfile(input: UpdateProfileInput): Promise<Profile> {
  return request("/api/members/me", {
    method: "PATCH",
    body: input,
    parse: parseProfile,
  })
}
```

Query가 전달한 `AbortSignal`을 그대로 `fetch`까지 연결합니다. path, method와 요청 본문은 API 계약이 확정되면 기능 API에서 바꾸고, 공통 요청 함수는 바꾸지 않습니다.

## 인증과 기본 URL 연결 기준

인증 방식이 확정되기 전에는 localStorage token, 임의의 Authorization header 또는 Cookie 이름을 예제에 넣지 않습니다.

- 같은 origin의 Cookie 인증이면 브라우저 기본 동작을 우선하고 필요한 경우에만 `credentials`를 명시합니다.
- 다른 origin을 호출하면 CORS와 Cookie 정책을 backend 계약과 함께 확인합니다.
- token header가 필요하면 token을 직접 읽는 코드를 `request`에 넣지 않고, 인증 상태의 소유 위치가 확정된 뒤 header를 만드는 경계를 연결합니다.
- Server Component와 Client Component의 기본 URL이 다르면 runtime 환경별 URL 결정 함수를 별도로 둡니다.

`TBD`: API origin, 인증 전달 방식과 환경변수 이름은 backend·배포 구성이 확정된 뒤 결정합니다.

## Timeout과 오류 문구

timeout 값은 API 특성과 UX 정책 없이 공통 숫자로 고정하지 않습니다. timeout이 필요한 API가 확인되면 호출자가 전달한 `AbortSignal`과 timeout signal을 결합하는 방식을 적용하고 지원 runtime을 확인합니다.

`HttpError`는 사용자 문구를 결정하지 않습니다. 화면에서는 상태 코드와 업무 흐름에 맞는 문구를 선택하고, 로깅과 관측 도구 연결도 별도 정책이 확정된 뒤 추가합니다.

## 적용 확인

- 기능 API가 직접 `response.ok`와 `response.json()` 처리를 반복하지 않습니다.
- 성공 응답은 기능별 parser로 검증합니다.
- 오류 응답의 상태 코드와 본문을 잃지 않습니다.
- `204`와 빈 응답을 정상 처리합니다.
- Query의 취소 signal이 `fetch`까지 전달됩니다.
- 인증, URL과 timeout의 미확정 값이 확정된 기준처럼 들어가지 않습니다.
