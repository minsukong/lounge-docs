# 테스트 공통 설정과 구현 예시

## 적용 목적

Vitest와 React Testing Library로 Client Component를 사용자 관점에서 검증할 수 있는 최소 환경입니다. Query 컴포넌트도 실제 `QueryClientProvider` 아래에서 렌더링하며, 각 테스트는 독립된 QueryClient를 사용합니다.

```text
apps/app-webview/
├── vitest.config.ts
└── src/test/
    ├── render-with-providers.tsx
    └── setup.ts
```

개발 의존성은 `vitest`, `jsdom`, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`입니다. 기존 테스트 실행 도구가 있으면 중복 설치하지 않고 설정과 렌더링 함수를 병합합니다.

## 1단계: Vitest 설정

### `apps/app-webview/vitest.config.ts`

```ts
import path from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

const appRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(appRoot, "src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    restoreMocks: true,
    clearMocks: true,
  },
})
```

기존 Vite alias 플러그인이나 workspace 공통 설정이 있다면 alias를 중복 선언하지 않습니다. Server Component와 Next route 통합을 억지로 jsdom에서 실행하지 않고, 순수 함수나 Client Component 단위만 이 환경에서 검증합니다.

## 2단계: DOM matcher와 정리

### `src/test/setup.ts`

```ts
import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

afterEach(() => {
  cleanup()
})
```

Vitest 설정 또는 현재 Testing Library 버전이 자동 정리를 제공하더라도 명시적 setup 하나로 팀의 실행 환경을 고정할 수 있습니다. 기존 전역 mock이 있다면 이 파일에서 테스트 분리에 필요한 항목만 추가합니다.

API 함수와 parser까지 통과하는 테스트가 생기면 [API Mock 구현 예시](./api-mocking.md)의 MSW server lifecycle을 이 파일에 병합합니다. 별도의 setup 파일을 중복 등록하지 않고 기존 `afterEach`에서 `cleanup()`과 `server.resetHandlers()`를 함께 실행합니다. API를 호출하지 않는 컴포넌트 테스트만 있다면 MSW를 미리 추가하지 않습니다.

## 3단계: Provider가 필요한 컴포넌트 렌더링

### `src/test/render-with-providers.tsx`

```tsx
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import {
  render,
  type RenderOptions,
} from "@testing-library/react"
import type { ReactElement, ReactNode } from "react"

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  })
}

type RenderWithProvidersOptions = Omit<RenderOptions, "wrapper"> & {
  queryClient?: QueryClient
}

export function renderWithProviders(
  ui: ReactElement,
  {
    queryClient = createTestQueryClient(),
    ...renderOptions
  }: RenderWithProvidersOptions = {},
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  }

  return {
    queryClient,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}
```

운영 QueryClient를 재사용하지 않는 이유는 테스트 간 캐시와 재시도를 분리하기 위해서입니다. Redux, Router, Theme Provider 등이 실제로 생기면 테스트용 Wrapper에 필요한 Provider만 추가합니다.

## Query 컴포넌트 테스트 예시

### `src/features/example/greeting.tsx`

```tsx
"use client"

import { useQuery } from "@tanstack/react-query"

type GreetingProps = {
  loadGreeting: () => Promise<string>
}

export function Greeting({ loadGreeting }: GreetingProps) {
  const query = useQuery({
    queryKey: ["greeting"],
    queryFn: loadGreeting,
  })

  if (query.isPending) return <p>불러오는 중</p>
  if (query.isError) return <p role="alert">불러오지 못했습니다.</p>

  return <p>{query.data}</p>
}
```

### `greeting.test.tsx`

```tsx
import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Greeting } from "@/features/example/greeting"
import { renderWithProviders } from "@/test/render-with-providers"

describe("Greeting", () => {
  it("조회가 끝나면 받은 내용을 표시한다", async () => {
    const loadGreeting = vi.fn().mockResolvedValue("안녕하세요")

    renderWithProviders(<Greeting loadGreeting={loadGreeting} />)

    expect(screen.getByText("불러오는 중")).toBeInTheDocument()
    expect(await screen.findByText("안녕하세요")).toBeInTheDocument()
    expect(loadGreeting).toHaveBeenCalledTimes(1)
  })

  it("조회가 실패하면 오류 상태를 표시한다", async () => {
    const loadGreeting = vi.fn().mockRejectedValue(new Error("network"))

    renderWithProviders(<Greeting loadGreeting={loadGreeting} />)

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "불러오지 못했습니다.",
    )
  })
})
```

Query 라이브러리 내부 캐시 구현을 검사하지 않고 로딩, 성공, 오류 상태에서 사용자가 보는 결과만 확인합니다.

## 실제 폼 상호작용 테스트

React 문서의 `ProfileNameForm`처럼 저장 함수를 전달받는 컴포넌트는 network mock 없이 제출 동작을 검증할 수 있습니다.

```tsx
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { ProfileNameForm } from "@/features/profile/profile-name-form"

describe("ProfileNameForm", () => {
  it("공백을 제거한 이름을 저장 함수에 전달한다", async () => {
    const user = userEvent.setup()
    const onSave = vi.fn().mockResolvedValue(undefined)

    render(<ProfileNameForm initialName="기존 이름" onSave={onSave} />)

    const input = screen.getByRole("textbox", { name: "이름" })
    await user.clear(input)
    await user.type(input, "  새 이름  ")
    await user.click(screen.getByRole("button", { name: "저장" }))

    expect(onSave).toHaveBeenCalledWith("새 이름")
  })
})
```

프로젝트가 모든 컴포넌트 테스트에 Provider 포함 렌더링 함수를 쓰기로 했다면 `renderWithProviders`로 통일합니다.

화면이 실제 기능 API를 호출하는 통합 예시는 [공통 소스 통합 사용 예시](./recipes.md)처럼 MSW handler로 응답을 제어합니다. 단순 폼처럼 network 경계가 책임이 아닌 테스트는 함수를 prop으로 전달해 더 작게 검증합니다.

## 테스트 대상을 고르는 기준

| 우선 테스트 | 이유 |
| --- | --- |
| 응답 검증과 입력값 검증의 실패 분기 | 외부 입력 오류가 화면 전체에 전파될 수 있음 |
| submit·취소·재시도 같은 사용자 동작 | 회귀 시 실제 업무 흐름이 막힘 |
| 로딩·빈 결과·오류·성공 전환 | 비동기 화면의 핵심 동작 |
| label·설명·오류의 접근성 연결 | 시각 확인만으로 놓치기 쉬움 |

다음은 기본적으로 테스트하지 않습니다.

- Tailwind class 문자열 전체와 pixel 배치
- shadcn/Base UI가 이미 보장하는 내부 DOM과 keyboard 구현
- Lucide SVG path
- 단순히 prop을 그대로 출력하는 표시 컴포넌트
- 구현 함수 이름, state 변수와 hook 호출 횟수
- `fetch`를 우회하도록 API 모듈 전체를 Mock한 통합 테스트

## 실행과 실패 해석

```text
npm run typecheck
npm run lint
npm run test
```

alias 오류는 `vitest.config.ts`와 실제 `tsconfig` 경로가 같은지 확인합니다. `document is not defined`는 jsdom 환경 연결을, jest-dom matcher 오류는 setup 파일 로딩을 확인합니다. Query 테스트가 오래 멈추면 테스트 QueryClient의 재시도 설정과 종료되지 않은 timer를 먼저 확인합니다.

MSW를 연결한 테스트에서 처리되지 않은 요청 오류가 발생하면 handler의 path와 method가 기능 API와 같은지 확인합니다. 테스트가 종료되지 않으면 무한 지연 handler, 남은 timer와 `server.close()` 실행 여부를 확인합니다.
