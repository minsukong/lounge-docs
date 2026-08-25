# API Mock 구현 예시

## 적용 목적

API와 기획이 확정되기 전에도 실제 `fetch` 경계를 사용하는 화면 개발과 테스트를 진행하도록 Mock Service Worker 기반 예시를 제공합니다. Mock은 서버 계약의 확정본이 아니라 프론트엔드가 현재 가정한 시나리오이며, 계약이 바뀌면 fixture와 handler를 함께 교체합니다.

다음 조건에서 적용합니다.

- backend가 없거나 endpoint가 준비되지 않아도 화면 상태를 개발해야 합니다.
- 로딩, 비로그인, 권한 실패와 서버 오류를 반복해서 재현해야 합니다.
- 테스트가 API 함수를 직접 Mock하지 않고 실제 요청·응답 파싱 경계를 통과해야 합니다.

필요 package는 `msw`입니다. 실제 설치 버전과 기존 Mock 도구를 확인한 뒤 개발 의존성으로 추가합니다.

## 적용할 파일

```text
src/mocks/
├─ browser.ts
├─ server.ts
├─ handlers.ts
└─ fixtures/
   ├─ member.ts
   └─ session.ts
```

handler는 API별 업무 코드 가까이에 둘 수도 있습니다. handler와 fixture가 많아지기 전에는 환경별 폴더와 추상화 계층을 추가하지 않습니다.

## Fixture

### `src/mocks/fixtures/session.ts`

```ts
export const authenticatedSessionFixture = {
  authenticated: true,
  user: {
    id: "member-1",
    displayName: "라운지 사용자",
  },
} as const

export const anonymousSessionFixture = {
  authenticated: false,
} as const
```

### `src/mocks/fixtures/member.ts`

```ts
export const memberFixture = {
  id: "member-1",
  displayName: "라운지 사용자",
  introduction: "프로필 소개",
} as const
```

Fixture 값은 디자인과 API 계약이 아니라 화면 상태를 확인하기 위한 데이터입니다. 필드가 확정되면 parser의 테스트 데이터와 함께 갱신합니다.

## 기본 Handler

### `src/mocks/handlers.ts`

```ts
import { delay, http, HttpResponse } from "msw"
import { memberFixture } from "@/mocks/fixtures/member"
import { authenticatedSessionFixture } from "@/mocks/fixtures/session"

export const handlers = [
  http.get("/api/session", () => {
    return HttpResponse.json(authenticatedSessionFixture)
  }),

  http.delete("/api/session", () => {
    return new HttpResponse(null, { status: 204 })
  }),

  http.get("/api/members/me", async () => {
    await delay(300)
    return HttpResponse.json(memberFixture)
  }),

  http.patch("/api/members/me", async ({ request }) => {
    const body = (await request.json()) as { displayName?: unknown }

    if (typeof body.displayName !== "string" || body.displayName.length < 2) {
      return HttpResponse.json(
        { message: "입력값을 확인해 주세요." },
        { status: 400 },
      )
    }

    return HttpResponse.json({
      ...memberFixture,
      displayName: body.displayName,
    })
  }),
]
```

`/api/session`, `/api/members/me`, 응답 필드와 오류 본문은 모두 교체 지점입니다. Mock handler가 실제 계약보다 먼저 작성되었음을 API 명세로 오해하지 않습니다.

## 브라우저와 테스트에서 Handler 공유

### `src/mocks/browser.ts`

```ts
import { setupWorker } from "msw/browser"
import { handlers } from "@/mocks/handlers"

export const worker = setupWorker(...handlers)
```

### `src/mocks/server.ts`

```ts
import { setupServer } from "msw/node"
import { handlers } from "@/mocks/handlers"

export const server = setupServer(...handlers)
```

브라우저 Mock은 개발 환경에서만 시작하고 production bundle과 실행 흐름에 포함하지 않습니다. Next.js App Router에서 Mock을 시작하는 위치는 실제 Client·Server 요청 위치와 설치된 MSW 버전을 확인해 결정합니다.

`TBD`: 개발 Mock 활성화 환경변수 이름과 시작 위치는 실제 애플리케이션 bootstrap 구조가 생긴 뒤 결정합니다.

## Vitest 연결

기존 `src/test/setup.ts`에 server lifecycle을 연결합니다.

```ts
import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterAll, afterEach, beforeAll } from "vitest"
import { server } from "@/mocks/server"

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" })
})

afterEach(() => {
  cleanup()
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
```

테스트에서는 처리하지 않은 요청을 오류로 만들어 예상하지 않은 실제 네트워크 접근을 막습니다. 각 테스트 뒤 handler를 초기화하여 다른 테스트의 상태가 섞이지 않게 합니다.

## 상태별 Handler 교체

테스트 안에서 필요한 상태만 덮어씁니다.

```ts
import { delay, http, HttpResponse } from "msw"
import { server } from "@/mocks/server"

server.use(
  http.get("/api/session", () => {
    return HttpResponse.json({ authenticated: false })
  }),
)

server.use(
  http.get("/api/members/me", () => {
    return HttpResponse.json(
      { message: "로그인이 필요합니다." },
      { status: 401 },
    )
  }),
)

server.use(
  http.get("/api/members/me", async () => {
    await delay("infinite")
    return HttpResponse.json({})
  }),
)
```

한 테스트에서는 하나의 상태만 교체합니다. 인증 없음, 권한 부족, 서버 오류와 지연을 하나의 거대한 scenario handler로 묶지 않습니다.

## 먼저 준비할 시나리오

- 세션 확인 중
- 비로그인
- 로그인 사용자
- 회원 정보 조회 성공
- 입력값 오류 `400`
- 인증 만료 `401`
- 권한 부족 `403`
- 서버 오류 `500`
- 응답 지연과 요청 취소
- 빈 응답 `204`

화면이 아직 없는 시나리오까지 미리 만들지 않습니다. 세션과 첫 회원 화면에서 실제로 사용하는 상태부터 추가합니다.

## API 확정 후 교체 기준

1. 실제 API 명세의 path, method와 status를 handler에 반영합니다.
2. parser 테스트와 fixture 필드를 함께 갱신합니다.
3. 화면이 Mock 전용 필드나 문구에 의존하지 않는지 확인합니다.
4. 실제 개발 서버 사용 시 브라우저 Mock을 비활성화합니다.
5. 통합 테스트가 처리되지 않은 실제 네트워크 요청을 만들지 않는지 확인합니다.

Mock을 제거한 뒤 화면 코드를 다시 작성해야 한다면 API 경계가 분리되지 않은 것입니다. 화면은 같은 Query와 API 함수를 사용하고 Mock 활성화 여부만 달라야 합니다.

## 적용 확인

- 개발과 테스트가 같은 기본 handler를 사용합니다.
- 테스트별 handler가 다음 테스트에 남지 않습니다.
- 처리되지 않은 테스트 요청은 즉시 실패합니다.
- API 함수와 parser를 우회하지 않습니다.
- Mock 응답을 확정된 backend 계약으로 표현하지 않습니다.
- production에서 Mock이 시작되지 않습니다.
