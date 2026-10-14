# [TBD] Front-end 워크스페이스 내부 구조

> 2026-10-14 기준 실제 npm workspace 구성(`webview` · `website` · `packages/ui`)을 반영합니다.
> 기능 화면과 API·Bridge 연동은 아직 미구현이므로 해당 부분은 **TBD**로 남깁니다.

## 내부 아키텍처

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TB
  accTitle: front-end 워크스페이스 내부 구조 (webview 기준)
  accDescr: Next.js App Router 기반 WebView 애플리케이션과 packages/ui 공통 UI 패키지, API/유틸리티, 테스트로 구성됩니다.
  
  subgraph APP["src/app/ (App Router)"]
    LAYOUT["layout.tsx<br/>- 전역 Provider<br/>- viewport (safe area)<br/>- globals.css"]
    PAGES["페이지/라우트<br/>- /<br/>- /lounge/[id]<br/>- /ticket<br/>- /esim<br/>- /settings"]
    LAYOUT --> PAGES
  end

  subgraph SHARED["packages/ui (@lounge/ui) — 두 앱 공통"]
    UI["src/components/ (shadcn/ui)<br/>- button, input, dialog<br/>- card, select, label<br/>- icon (Lucide)"]
    TOKENS["styles · tokens<br/>- 의미 기반 디자인 토큰"]
    UTEST["src/test/ · src/dev/<br/>- 공통 UI 행동 테스트·예제"]
  end

  subgraph COMPONENTS["src/components/ (webview 전용)"]
    FEATURES["features/ (기능 컴포넌트)<br/>- lounge/<br/>- ticket/<br/>- esim/<br/>- payment/"]
    COMMON["공통 (webview 전용)<br/>- loading-skeleton<br/>- error-boundary<br/>- empty-state"]
  end

  subgraph LIB["src/lib/ (유틸리티·어댑터)"]
    QUERY["API/Query<br/>- api-client.ts (fetch + 서명)<br/>- parsers/ (v3, inapp, admin)<br/>- error-codes.ts"]
    BRIDGE["Bridge<br/>- adapter.ts<br/>- types.ts<br/>- detect.ts"]
    UTILS["유틸리티<br/>- utils.ts (cn)<br/>- formatters.ts"]
  end

  subgraph STORIES["packages/ui/.storybook/ (공통)"]
    SB_MAIN["main.ts<br/>(glob, addons, framework)<br/>- webview·website Story 함께 검수"]
    SB_PREVIEW["preview.ts<br/>(globals.css, providers,<br/>viewport mobile)"]
  end

  subgraph TEST["src/test/ (앱) · packages/ui/src/test/ (공통)"]
    SETUP["test setup<br/>(vitest, testing-library)"]
    MOCKS["Mock Bridge<br/>(스토어리/테스트용)"]
  end

  PAGES --> COMPONENTS
  PAGES --> SHARED
  PAGES --> LIB
  COMPONENTS --> SHARED
  COMPONENTS --> LIB
  STORIES -- "렌더링" --> UI
  TEST -- "테스트" --> LIB
  UTEST -- "테스트" --> UI
  </div>
  <figcaption>앱은 화면과 기능만 담당하고, shadcn/ui 원형·디자인 토큰·Storybook·공통 테스트는 packages/ui에서 두 앱에 공유합니다. Bridge adapter와 API 파서는 앱에 남습니다.</figcaption>
</figure>

## 데이터 흐름

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart LR
  accTitle: 데이터 흐름 (API 호출 → UI 렌더링)
  accDescr: 사용자 상호작용이 API 호출을 트리거하고, 응답이 파서로 처리되어 UI 상태에 반영됩니다.
  
  USER["사용자 입력/액션"]
  FORM["폼/버튼 컴포넌트"]
  MUTATION["useMutation / useQuery"]
  SIGNS["서명 생성<br/>(Bridge via device_sn)"]
  FETCH["fetch (API Gateway)"]
  PARSE["레이어별 Parser<br/>(v3 / inapp / admin)"]
  CACHE["Query Cache<br/>(TanStack Query)"]
  UI["UI 렌더링<br/>(컴포넌트 상태 갱신)"]
  
  USER --> FORM
  FORM --> MUTATION
  MUTATION --> SIGNS
  SIGNS --> FETCH
  FETCH --> PARSE
  PARSE --> CACHE
  CACHE --> UI
  
  UI -. "새 요청" .-> MUTATION
  </div>
  <figcaption>서명 생성 → API 호출 → 파싱 → 캐시 → 렌더링 순으로 데이터가 흐릅니다.</figcaption>
</figure>

## 의존성 관계

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TB
  accTitle: 모듈 의존성 방향
  accDescr: 의존성은 위에서 아래로만 흐릅니다. 하위 모듈이 상위 모듈을 역참조하는 것은 금지입니다.
  
  APP["src/app/ (페이지/레이아웃)"]
  FEAT["src/components/features/ (기능)"]
  UI["@lounge/ui<br/>(packages/ui/src/components)"]
  LIB["src/lib/ (API, Bridge, Utils)"]
  EXT["외부 (React, Next.js, Tailwind, TanStack Query)"]
  
  APP --> FEAT
  APP --> UI
  APP --> LIB
  FEAT --> UI
  FEAT --> LIB
  UI --> EXT
  LIB --> EXT
  
  style EXT fill:#f9f9f9,stroke:#ccc
  </div>
  <figcaption>의존 방향: app → components → @lounge/ui · lib → external. 공통 패키지는 앱 경로를 import하지 않으며 린트로 차단합니다. 역참조 금지.</figcaption>
</figure>

## 기술 스택 (Front-end)

| 기술 | 버전 | 용도 |
|------|------|------|
| npm workspace | — | `front-end/` 단일 잠금 파일 · `@lounge/ui` 공통 패키지 공유 |

| Next.js | 16 (App Router) | SSR/SSG, 라우팅 (webview · website 각각, 단일 workspace에서 실행) |
| React | 19 | UI 렌더링 |
| TypeScript | 6 | 타입 안전성 |
| Tailwind CSS | 4.1+ | 스타일링 (Semantic Tokens) |
| shadcn/ui | base-nova | UI 컴포넌트 — `packages/ui`에서 두 앱에 공유 |
| TanStack Query | — | 서버 상태 관리 |
| Zustand | — | Client 상태 (필요 시) |
| Lucide React | — | 아이콘 |
| Vitest + Testing Library | — | 테스트 — 공통은 `packages/ui`, 앱 화면은 각 앱 |
| Storybook | — | UI 검수/문서화 — `packages/ui/.storybook` 단일 소스 |

## 브라우저 하한

| 브라우저 | 버전 | 비고 |
|-----------|------|------|
| **Safari** | **15** (iOS 15 WKWebView) | **MUST** — CSS 하한 |
| Chrome (Android) | WebView 기본 | 기기 의존 |
| Firefox | — | 확인 필요 |

> Safari 15 미지원 CSS 기능은 호환 Utility나 기존 프로젝트 패턴으로 대체합니다.