# [TBD] Front-end (app-webview) 내부 구조

> 예상 시나리오 기반. 실제 구현 시 디렉터리가 추가·변경될 수 있습니다.

## 내부 아키텍처

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TB
  accTitle: app-webview 내부 구조 (예상)
  accDescr: Next.js App Router 기반의 WebView 애플리케이션으로, 라우트/레이아웃, UI 컴포넌트, API/유틸리티, 테스트로 구성됩니다.
  
  subgraph APP["src/app/ (App Router)"]
    LAYOUT["layout.tsx<br/>- 전역 Provider<br/>- viewport (safe area)<br/>- globals.css"]
    PAGES["페이지/라우트<br/>- /<br/>- /lounge/[id]<br/>- /ticket<br/>- /esim<br/>- /settings"]
    LAYOUT --> PAGES
  end

  subgraph COMPONENTS["src/components/"]
    UI["ui/ (shadcn/ui)<br/>- button, input, dialog<br/>- card, select, label<br/>- icon (Lucide)"]
    FEATURES["features/ (기능 컴포넌트)<br/>- lounge/<br/>- ticket/<br/>- esim/<br/>- payment/"]
    COMMON["공통 (app-webview 전용)<br/>- loading-skeleton<br/>- error-boundary<br/>- empty-state"]
  end

  subgraph LIB["src/lib/ (유틸리티·어댑터)"]
    QUERY["API/Query<br/>- api-client.ts (fetch + 서명)<br/>- parsers/ (v3, inapp, admin)<br/>- error-codes.ts"]
    BRIDGE["Bridge<br/>- adapter.ts<br/>- types.ts<br/>- detect.ts"]
    UTILS["유틸리티<br/>- utils.ts (cn)<br/>- formatters.ts"]
  end

  subgraph STORIES[".storybook/"]
    SB_MAIN["main.ts<br/>(glob, addons, framework)"]
    SB_PREVIEW["preview.ts<br/>(globals.css, providers,<br/>viewport mobile)"]
  end

  subgraph TEST["src/test/"]
    SETUP["test setup<br/>(vitest, testing-library)"]
    MOCKS["Mock Bridge<br/>(스토어리/테스트용)"]
  end

  PAGES --> COMPONENTS
  PAGES --> LIB
  COMPONENTS --> LIB
  STORIES -- "렌더링" --> COMPONENTS
  TEST -- "테스트" --> LIB
  </div>
  <figcaption>Next.js App Router 구조에 shadcn/ui, Bridge adapter, API 파서를 조합한 WebView 전용 프론트엔드 애플리케이션입니다.</figcaption>
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
  UI["src/components/ui/ (UI 원형)"]
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
  <figcaption>의존 방향: app → components → lib → external. 역참조 금지.</figcaption>
</figure>

## 기술 스택 (Front-end)

| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 16 (App Router) | SSR/SSG, 라우팅 |
| React | 19 | UI 렌더링 |
| TypeScript | 6 | 타입 안전성 |
| Tailwind CSS | 4.1+ | 스타일링 (Semantic Tokens) |
| shadcn/ui | base-nova | UI 컴포넌트 |
| TanStack Query | — | 서버 상태 관리 |
| Zustand | — | Client 상태 (필요 시) |
| Lucide React | — | 아이콘 |
| Vitest + Testing Library | — | 테스트 |
| Storybook | — | UI 검수/문서화 |

## 브라우저 하한

| 브라우저 | 버전 | 비고 |
|-----------|------|------|
| **Safari** | **15** (iOS 15 WKWebView) | **MUST** — CSS 하한 |
| Chrome (Android) | WebView 기본 | 기기 의존 |
| Firefox | — | 확인 필요 |

> Safari 15 미지원 CSS 기능은 호환 Utility나 기존 프로젝트 패턴으로 대체합니다.