# 세션과 회원 경계 구현 예시

## 적용 목적

인증 API와 회원 정보가 확정되기 전에도 화면이 로그인 확인 중, 비로그인과 로그인 상태를 일관되게 처리하도록 프론트엔드 경계를 제공합니다. 세션은 현재 사용자를 식별하는 최소 상태이고, 회원 프로필과 권한 전체를 담는 전역 객체가 아닙니다.

이 문서는 다음 내용을 확정하지 않습니다.

- 로그인 수단과 인증 화면
- Cookie 또는 token 저장 방식
- 세션 API path와 응답 필드
- 회원 등급, 역할과 권한 체계
- 로그인 만료 시간과 갱신 방식
- 로그인·로그아웃 후 이동할 route

## 적용할 파일

```text
src/features/session/
├─ api/
│  ├─ parse-session.ts
│  └─ session-api.ts
├─ model/session.ts
└─ queries/session-queries.ts
```

회원 상세 조회와 수정은 `features/member` 또는 실제 업무 기능에 둡니다. 세션 query에는 앱 전체에서 로그인 상태를 판단하는 데 필요한 최소 정보만 유지합니다.

## 세션 상태 모델

### `src/features/session/model/session.ts`

```ts
export type SessionUser = {
  id: string
  displayName: string
}

export type Session =
  | { status: "anonymous" }
  | { status: "authenticated"; user: SessionUser }
```

`loading`은 서버 데이터가 아니라 Query의 요청 상태로 표현합니다. `SessionUser` 필드는 참고 구현을 위한 최소 예시이며 실제 식별자와 표시 정보가 확정되면 parser, fixture와 함께 교체합니다.

세션에 회원 프로필의 모든 입력값, 알림 설정과 업무 데이터를 추가하지 않습니다. 로그인 여부와 관계없이 별도로 갱신되는 데이터는 회원 query에서 관리합니다.

## 세션 응답 검증

### `src/features/session/api/parse-session.ts`

```ts
import type { Session } from "@/features/session/model/session"
import { hasOwn, isRecord } from "@/lib/type-guards"

export function parseSession(value: unknown): Session {
  if (!isRecord(value) || !hasOwn(value, "authenticated")) {
    throw new Error("세션 응답 형식이 올바르지 않습니다.")
  }

  if (value.authenticated === false) {
    return { status: "anonymous" }
  }

  if (
    value.authenticated !== true ||
    !hasOwn(value, "user") ||
    !isRecord(value.user) ||
    typeof value.user.id !== "string" ||
    typeof value.user.displayName !== "string"
  ) {
    throw new Error("로그인 사용자 형식이 올바르지 않습니다.")
  }

  return {
    status: "authenticated",
    user: {
      id: value.user.id,
      displayName: value.user.displayName,
    },
  }
}
```

응답 검증은 실제 세션 계약이 정해지면 교체합니다. `response.json() as Session`처럼 외부 값을 바로 단언하지 않습니다.

## 세션 API

### `src/features/session/api/session-api.ts`

```ts
import { parseSession } from "@/features/session/api/parse-session"
import type { Session } from "@/features/session/model/session"
import { request } from "@/lib/http/request"

export function getSession(signal?: AbortSignal): Promise<Session> {
  return request("/api/session", {
    signal,
    parse: parseSession,
  })
}

export function logout(): Promise<void> {
  return request<void>("/api/session", {
    method: "DELETE",
  })
}
```

`/api/session`, method와 응답 형식은 교체 지점입니다. Cookie 삭제, token 폐기와 서버 세션 종료 방식은 프론트엔드에서 추측하지 않습니다.

## 세션 Query와 로그아웃

### `src/features/session/queries/session-queries.ts`

```ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getSession, logout } from "@/features/session/api/session-api"

export const sessionQueryKey = ["session"] as const

export function useSessionQuery() {
  return useQuery({
    queryKey: sessionQueryKey,
    queryFn: ({ signal }) => getSession(signal),
  })
}

export function useLogoutMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear()
    },
  })
}
```

로그아웃 성공 후 이전 사용자의 캐시가 남지 않도록 QueryClient의 연결된 cache를 비웁니다. 실제 앱에 공개 데이터 cache가 많아지면 전체 `clear` 대신 사용자 범위 query만 제거하는 기준을 정합니다.

로그아웃 뒤 route 이동과 완료 문구는 mutation hook에 고정하지 않고 실제 화면 흐름에서 처리합니다.

## 화면에서 상태 처리

```tsx
import { useSessionQuery } from "@/features/session/queries/session-queries"

export function AccountSummary() {
  const sessionQuery = useSessionQuery()

  if (sessionQuery.isPending) return <p>로그인 상태를 확인하고 있습니다.</p>
  if (sessionQuery.isError) return <p role="alert">로그인 상태를 확인하지 못했습니다.</p>
  if (sessionQuery.data.status === "anonymous") return <p>로그인이 필요합니다.</p>

  return <p>{sessionQuery.data.user.displayName}</p>
}
```

네트워크 실패와 비로그인을 같은 상태로 취급하지 않습니다. 세션 확인 실패가 곧 로그아웃을 의미하도록 만들면 일시적인 네트워크 오류에서 로그인 화면이 흔들릴 수 있습니다.

## 401 처리 기준

모든 `401`에서 즉시 전역 logout을 실행하는 코드는 API와 갱신 정책이 정해지기 전에는 추가하지 않습니다.

- 세션 조회 API가 비로그인을 `401`로 표현한다면 `getSession`에서만 `anonymous`로 변환합니다.
- 다른 기능 API의 `401`은 세션 만료, 권한 부족 또는 token 갱신 실패 중 무엇인지 계약을 확인합니다.
- 같은 응답이 반복될 때만 공통 interceptor 또는 전역 처리 경계를 검토합니다.
- `403`은 로그인 여부와 별개의 권한 실패로 처리합니다.

`TBD`: 세션 만료, token 갱신과 재요청 정책은 인증 계약이 확정된 뒤 추가합니다.

## 회원 기능과의 구분

세션과 회원 기능은 변경 이유가 다릅니다.

- 세션: 현재 로그인 여부, 최소 사용자 식별 정보와 로그아웃
- 회원: 프로필 조회·수정, 약관 상태, 설정과 실제 업무 데이터
- 권한: route와 행동을 허용하는 제품 정책

회원 API가 정해지면 `features/member/api`, `model`, `queries`, `components`에서 시작합니다. 세션 사용자와 회원 상세 응답이 실제로 같은 계약일 때만 type과 parser를 공유합니다.

## 저장 위치 기준

자격 증명, 개인정보, Client 저장소와 사용자 전환의 상세 기준은 [Front-End 보안과 개인정보 가이드](../../../../security_guide/index.html)를 함께 확인합니다.

- 인증 token을 localStorage에 저장하는 예시를 미리 제공하지 않습니다.
- WebView native storage를 사용할 경우 Bridge 계약과 초기화 순서를 먼저 확인합니다.
- 브라우저 Cookie를 사용할 경우 JavaScript 접근 여부, SameSite, Secure와 domain 정책을 backend·배포 기준과 함께 결정합니다.
- 화면 편의를 위한 회원 데이터 cache와 인증 자격 증명의 저장 위치를 같은 것으로 취급하지 않습니다.

## 적용 확인

- 로딩, 비로그인, 로그인과 확인 실패를 구분합니다.
- 세션에는 회원 상세 업무 데이터를 넣지 않습니다.
- 외부 세션 응답을 runtime에 검증합니다.
- logout 뒤 이전 사용자 cache가 남지 않습니다.
- `401`과 `403`을 같은 방식으로 처리하지 않습니다.
- 인증 저장 방식과 route를 확정된 값처럼 작성하지 않습니다.
