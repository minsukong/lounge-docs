# 공통 소스 통합 사용 예시

## 예시의 목적

이 문서는 앞의 공통 소스를 한 기능에서 어떻게 연결하는지 보여 줍니다. 프로필 조회와 표시 이름 수정 흐름을 예로 들어 QueryClient·Provider, 공통 요청 함수, 실행 시 응답 검증, `FormField`, `SubmitButton`, 오류 변환과 API Mock을 함께 사용합니다.

프로필 API 경로와 응답 필드는 아직 프로젝트 계약으로 확정된 값이 아닙니다. 아래 코드는 구조와 연결 방법을 그대로 활용하고, **API 경로·요청 본문·응답 검증·업무 문구**를 실제 계약으로 교체하는 구현 예시입니다.

## 완성 후 파일 구조

```text
apps/app-webview/src/
├── app/profile/page.tsx
└── features/profile/
    ├── api/
    │   ├── parse-profile.ts
    │   └── profile-api.ts
    ├── components/profile-screen.tsx
    ├── model/profile.ts
    ├── queries/profile-queries.ts
    └── profile-screen.test.tsx
```

먼저 `AppProviders`, `request`, `FormField`, `SubmitButton`, `getErrorMessage`, `renderWithProviders`가 준비되어 있어야 합니다. 조회부터 수정까지의 테스트에는 [API Mock 구현 예시](./api-mocking.md)의 MSW server와 기본 handler도 연결합니다.

## 1단계: 데이터 모델과 API 응답 검증

### `src/features/profile/model/profile.ts`

```ts
export type Profile = {
  id: string
  displayName: string
  introduction: string | null
}

export type UpdateProfileInput = {
  displayName: string
}
```

### `src/features/profile/api/parse-profile.ts`

```ts
import type { Profile } from "@/features/profile/model/profile"
import { hasOwn, isNonEmptyString, isRecord } from "@/lib/type-guards"

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
    throw new Error("프로필 응답 형식이 올바르지 않습니다.")
  }

  return {
    id: value.id,
    displayName: value.displayName,
    introduction: value.introduction,
  }
}
```

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

export function updateProfile(
  input: UpdateProfileInput,
): Promise<Profile> {
  return request("/api/members/me", {
    method: "PATCH",
    body: input,
    parse: parseProfile,
  })
}
```

조회와 수정은 [API 요청 기반 구현 예시](./network.md)의 전송 경계를 공유하고, 성공 본문은 모두 `parseProfile`로 검증합니다. `/api/members/me`, 인증 header, 기본 URL과 공통 오류 형식은 교체 지점이며 실제 계약이 정해지면 기능 API, parser와 Mock handler를 함께 바꿉니다.

## 2단계: 조회·수정 Hook

### `src/features/profile/queries/profile-queries.ts`

```ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  getProfile,
  updateProfile,
} from "@/features/profile/api/profile-api"

export const profileQueryKey = ["profile", "me"] as const

export function useProfileQuery() {
  return useQuery({
    queryKey: profileQueryKey,
    queryFn: ({ signal }) => getProfile(signal),
  })
}

export function useUpdateProfileMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProfile,
    onSuccess(profile) {
      queryClient.setQueryData(profileQueryKey, profile)
    },
  })
}
```

`queryKey`를 컴포넌트마다 문자열로 작성하지 않습니다. 수정 응답이 최신 프로필 전체를 돌려준다는 예시 형식이므로 캐시를 직접 갱신했습니다. 실제 응답이 일부 필드만 반환하면 `invalidateQueries` 등 실제 응답 형식에 맞는 방법으로 바꿉니다.

## 3단계: 로딩·오류·완료 화면과 수정 폼

### `src/features/profile/components/profile-screen.tsx`

```tsx
"use client"

import { type FormEvent, useState } from "react"
import { FormField } from "@/components/common/form-field"
import { SubmitButton } from "@/components/common/submit-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Profile } from "@/features/profile/model/profile"
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/features/profile/queries/profile-queries"
import { getErrorMessage } from "@/lib/errors"

export function ProfileScreen() {
  const profileQuery = useProfileQuery()

  if (profileQuery.isPending) {
    return <p aria-live="polite">프로필을 불러오는 중입니다.</p>
  }

  if (profileQuery.isError) {
    return (
      <section className="grid gap-3" role="alert">
        <p>{getErrorMessage(profileQuery.error, "프로필을 불러오지 못했습니다.")}</p>
        <Button type="button" variant="secondary" onClick={() => profileQuery.refetch()}>
          다시 시도
        </Button>
      </section>
    )
  }

  return <ProfileForm profile={profileQuery.data} />
}

function ProfileForm({ profile }: { profile: Profile }) {
  const mutation = useUpdateProfileMutation()
  const [nameError, setNameError] = useState<string>()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const displayName = String(formData.get("displayName") ?? "").trim()

    if (displayName.length < 2) {
      setNameError("표시 이름은 2자 이상 입력하세요.")
      return
    }

    setNameError(undefined)
    await mutation.mutateAsync({ displayName }).catch(() => undefined)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg border bg-card p-4 text-card-foreground"
    >
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">프로필</h1>
        <p className="text-sm text-muted-foreground">
          앱에 표시할 이름을 관리합니다.
        </p>
      </div>

      <FormField
        id="display-name"
        label="표시 이름"
        hint="2자 이상 입력하세요."
        error={nameError}
        required
      >
        {(controlProps) => (
          <Input
            {...controlProps}
            name="displayName"
            defaultValue={profile.displayName}
            autoComplete="name"
            required
          />
        )}
      </FormField>

      {mutation.isError ? (
        <p role="alert" className="text-sm text-destructive">
          {getErrorMessage(mutation.error, "프로필을 저장하지 못했습니다.")}
        </p>
      ) : null}

      {mutation.isSuccess ? (
        <p role="status" className="text-sm text-muted-foreground">
          저장했습니다.
        </p>
      ) : null}

      <SubmitButton
        pending={mutation.isPending}
        pendingContent="저장 중"
      >
        저장
      </SubmitButton>
    </form>
  )
}
```

화면 상태와 업무 문구는 프로필 기능에서 관리합니다. `SubmitButton`은 저장 API를 모르고, `FormField`는 프로필 입력값 검증을 모릅니다. 공통 컴포넌트에는 반복 동작만 두고 업무 규칙은 각 기능에 두는 구조입니다.

## 4단계: App Router 페이지 연결

### `src/app/profile/page.tsx`

```tsx
import { ProfileScreen } from "@/features/profile/components/profile-screen"

export default function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-xl px-4 py-6">
      <ProfileScreen />
    </main>
  )
}
```

`page.tsx`는 Server Component로 유지됩니다. 실제 서비스에서 서버 사전 조회와 hydration을 적용한다면 QueryClient 생성, `dehydrate`, `HydrationBoundary`를 route 요구에 맞춰 추가합니다. 모든 route에 미리 적용하지 않습니다.

## 5단계: 조회부터 수정까지 테스트

### `src/features/profile/profile-screen.test.tsx`

```tsx
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { http, HttpResponse } from "msw"
import { describe, expect, it, vi } from "vitest"
import { ProfileScreen } from "@/features/profile/components/profile-screen"
import { server } from "@/mocks/server"
import { renderWithProviders } from "@/test/render-with-providers"

describe("ProfileScreen", () => {
  it("조회한 이름을 수정하고 저장 완료를 표시한다", async () => {
    const user = userEvent.setup()
    const updateRequest = vi.fn()

    server.use(
      http.patch("/api/members/me", async ({ request }) => {
        const body = await request.json()
        updateRequest(body)

        return HttpResponse.json({
          id: "member-1",
          displayName: "새 이름",
          introduction: null,
        })
      }),
    )

    renderWithProviders(<ProfileScreen />)

    const input = await screen.findByRole("textbox", { name: /표시 이름/ })
    await user.clear(input)
    await user.type(input, "새 이름")
    await user.click(screen.getByRole("button", { name: "저장" }))

    expect(updateRequest).toHaveBeenCalledTimes(1)
    expect(updateRequest).toHaveBeenCalledWith({
      displayName: "새 이름",
    })
    expect(await screen.findByRole("status")).toHaveTextContent("저장했습니다.")
  })

  it("짧은 이름은 API를 호출하지 않고 오류를 연결한다", async () => {
    const user = userEvent.setup()
    const updateRequest = vi.fn()

    server.use(
      http.patch("/api/members/me", () => {
        updateRequest()
        return HttpResponse.json({})
      }),
    )

    renderWithProviders(<ProfileScreen />)

    const input = await screen.findByRole("textbox", { name: /표시 이름/ })
    await user.clear(input)
    await user.type(input, "한")
    await user.click(screen.getByRole("button", { name: "저장" }))

    expect(input).toHaveAccessibleDescription(
      "2자 이상 입력하세요. 표시 이름은 2자 이상 입력하세요.",
    )
    expect(updateRequest).not.toHaveBeenCalled()
  })
})
```

API 모듈을 `vi.mock`으로 교체하지 않으므로 `request`, HTTP 응답 읽기와 `parseProfile`까지 실제 경계를 통과합니다. 테스트마다 필요한 응답만 `server.use`로 덮어쓰고 공통 setup의 `server.resetHandlers()`가 다음 테스트 전에 기본 handler로 되돌립니다.

## 실제 프로젝트에서 반드시 교체할 곳

| 교체 지점 | 예제 값 | 실제 적용 기준 |
| --- | --- | --- |
| API 경로 | `/api/members/me` | backend 또는 BFF 계약 |
| method·요청 본문 | `PATCH`, `{ displayName }` | 수정 API 명세 |
| 응답 필드 | `id`, `displayName`, `introduction` | 실제 응답 형식 |
| 인증·오류 | 공통 `request`와 `HttpError` | 인증 전달과 실제 공통 오류 형식 |
| 캐시 갱신 | 수정 응답을 `setQueryData` | 실제 수정 응답 범위 |
| 입력값 검증 | 2자 이상 | 기획·서버 검증 규칙 |
| 성공·오류 문구 | 문서의 한국어 문구 | UX writing 기준 |
| route | `/profile` | 실제 App Router 구조 |

교체 후에는 응답 검증 테스트 데이터, MSW fixture·handler, mutation 요청 검증과 화면 문구 테스트를 같은 작업에서 갱신합니다.
