# Lounge Front-end AI 지침

이 문서는 Front-end 저장소 루트의 AI 작업 진입점입니다. 긴 가이드를 처음부터 모두 읽지 말고 실제 소스와 현재 작업에 해당하는 `docs/ai/` 문서를 먼저 확인합니다.

## 프로젝트 기준

- 이 저장소는 WebView Front-end 애플리케이션과 구현·검토 문서를 함께 관리하는 실제 프로젝트입니다. Front-end가 독립적으로 결정할 수 있는 UI, 상태 처리, 접근성, 브라우저 검증과 Front-end 테스트 원칙만 현재 기준으로 확정합니다.
- 기획, 업무 규칙, API·인증·데이터 계약, Backend 제공 환경, Native App 책임, 배포·운영처럼 다른 담당자 또는 전체 프로젝트 협의가 필요한 내용은 승인되기 전까지 모두 미확정으로 취급합니다.
- Front-end 기술이라도 실제 애플리케이션의 package, 구성과 사용처가 확인되어야 하는 선택은 후보 또는 `TBD`로 남깁니다.
- 실제 애플리케이션 위치는 `apps/app-webview`입니다. package, 설정과 source는 해당 폴더의 실제 파일을 기준으로 판단합니다.
- 화면 코드는 React 19와 TypeScript로 작성합니다.
- 스타일은 Tailwind CSS 4와 `src/app/globals.css`의 의미 기반 토큰을 사용합니다.
- Tailwind CSS는 검증된 v4.1 이상의 버전을 잠금 파일에 고정하고 공통 CSS 하한은 Safari 15에서 지원되는 기능 범위로 둡니다.
- Safari 15 지원은 일반적인 신규 프로젝트의 기본값이 아니라 10년 이상 운영된 기존 앱의 장기 이용자와 구형 기기 사용자를 신규 앱에서 배제하지 않기 위한 이전 정책입니다. AI는 최신 기술 스택이나 공식 브라우저 지원 범위만을 근거로 최소 버전을 임의로 올리지 않습니다.
- Safari 15에서는 최신 환경과 픽셀 단위로 동일한 시각 효과보다 로그인, 예약, 결제, 이용권, 안내, 입력과 이동 같은 핵심 정보와 업무 흐름의 완료를 우선합니다. 지원되지 않는 시각 효과는 핵심 기능을 방해하지 않는 범위에서 호환 표현으로 대체하거나 점진적으로 저하합니다.
- Safari 15 지원 종료나 최소 OS 상향은 AI가 결정하지 않습니다. 출시 후 실제 OS별 활성 사용자, 오류율과 고객지원 영향을 근거로 App·기획·QA 담당자가 승인한 경우에만 관련 기준과 설정을 함께 변경합니다.
- Next.js 16 App Router 규칙은 `apps/app-webview/AGENTS.md`, 실제 package와 설치된 Next.js 문서를 따릅니다.
- 기존 `src/components/ui`의 shadcn/ui와 프로젝트 컴포넌트를 새 코드보다 우선합니다.
- 요청하지 않은 기능, 상태, 공통화 또는 패키지를 미리 추가하지 않습니다.
- 기획 흐름과 Backend API 계약이 확정되기 전에는 endpoint, method, status, 요청·응답 필드, API 함수, parser, fixture, handler와 Mock을 구현하지 않습니다. Backend 확인 질문과 `TBD`만 남깁니다.
- Swagger 또는 OpenAPI 제공을 미리 가정하지 않고 Backend 담당자가 실제로 전달하고 승인한 계약을 기준으로 구현합니다.
- MSW는 기본 도구가 아닙니다. 승인된 API 계약을 기준으로 실제 Backend 환경에서 필요한 지연·오류 상태를 반복 재현하기 어렵다면 Front-end 테스트 범위에서 선택적으로 검토합니다. Backend의 별도 재현 환경 제공을 전제로 두지 않으며, 도입 범위와 관리 책임은 Front-end 책임자 또는 프로젝트 담당자와 정하고 Backend에 공유합니다.
- AI는 Backend의 인증·권한·업무 규칙·요청 검증, 배포·보안 담당의 CORS·CSP·보안 Header·Secret 정책, Native App의 WebView Origin·Bridge Method 통제를 Front-end 코드로 대신 구현하거나 임의로 확정하지 않습니다. Front-end에는 방어적 입력·응답 처리와 승인된 계약의 연동·검증만 구현하고 나머지는 담당자 확인 사항 또는 `TBD`로 남깁니다.

## 저장소 구조와 문서 운영

애플리케이션 소스는 `apps/`, 모든 가이드는 `docs/`에서 관리합니다. 이 배치는 실제 프로젝트의 기준 구조이며 별도 문서 저장소나 `reference/front-end`, `common_docs` 중간 계층을 사용하지 않습니다.

```text
<repository-root>/
├── AGENTS.md
├── AGENTS.html
├── README.md
├── apps/
│   ├── mobile/                  # Flutter Native 앱
│   └── app-webview/
│       ├── AGENTS.md
│       ├── README.md
│       ├── .storybook/
│       └── src/
└── docs/
    ├── AGENTS.md
    ├── README.md
    ├── CHANGELOG.md
    ├── index.html
    ├── search/                     # 전체 가이드 검색
    ├── templates/                  # HTML 가이드 작성 템플릿
    ├── assets/                     # HTML 공통 스타일·스크립트·이미지
    ├── guides/                     # 상세 HTML 가이드와 필요한 원본
    │   ├── briefing/
    │   ├── frontend/
    │   ├── architecture/
    │   ├── app/
    │   ├── platform/webview/
    │   ├── ui/
    │   ├── storybook/
    │   ├── testing/
    │   ├── lint/
    │   ├── security/
    │   ├── performance/
    │   ├── browser-support/
    │   ├── typescript/
    │   ├── i18n/
    │   ├── planning/
    │   └── learning/ai-frontend-growth/
    ├── ai/                         # 작업별 AI 요약
    │   ├── project.md
    │   ├── ui.md
    │   ├── design-tokens.md
    │   ├── figma.md
    │   ├── storybook.md
    │   ├── quality.md
    │   ├── performance.md
    │   ├── security.md
    │   ├── common-source.md
    │   └── local-llm.md
    └── common-source/              # 파일 단위 구현 기준
        ├── index.md
        ├── briefing.md
        ├── catalog.md
        ├── tailwind.md
        ├── react.md
        ├── typescript.md
        ├── test.md
        ├── storybook.md
        ├── network.md
        ├── session.md
        ├── api-mocking.md
        └── recipes.md
```

- 저장소 루트 `AGENTS.md`는 실제 구현 전체 규칙과 작업별 문서 선택을 담당합니다.
- `docs/AGENTS.md`는 HTML 템플릿, Markdown·HTML 동기화, 링크와 공통 자산 검증 등 문서 작성 규칙을 담당합니다.
- `docs/guides/`는 Front-end, 저장소 구조, UI, WebView, Storybook, Test, Lint, Security, Performance 등 사람이 읽는 상세 가이드와 필요한 원본을 주제별로 관리합니다.
- `docs/assets/`는 상세 HTML 가이드가 사용하는 공통 스타일, JavaScript, 이미지와 디자인 자산을 관리합니다.
- 실제 `.ts`, `.tsx`, CSS와 package 설정은 `apps/app-webview/`에 두며 `docs/`에는 넣지 않습니다.
- 앱 package, 내부 source와 Storybook 설정은 `apps/app-webview`의 실제 파일을 기준으로 확인하며 존재하지 않는 설정이나 의존성을 문서만 보고 추측하지 않습니다.
- 애플리케이션 Build와 배포 범위는 `apps/app-webview/`로 한정합니다. `docs/`는 제품 Bundle, 정적 자산, Build 입력과 배포 Artifact에 포함하거나 애플리케이션의 `public` 경로로 복사하지 않습니다.
- 문서 검색 데이터 생성, 링크와 HTML 검사는 문서 변경 검증이며 애플리케이션 Build Pipeline과 분리합니다.

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TB
  accTitle: 실제 Front-end 저장소의 문서와 소스 구조
  accDescr: 저장소 루트에는 전체 구현 지침이 있고, apps에는 WebView 애플리케이션 소스와 Storybook이 있으며, docs에는 문서 작성 규칙, 상세 HTML 가이드, AI 요약, 공통 소스 구현 기준과 문서 자산이 배치됩니다.
  R["Front-end 저장소"] --> RA["AGENTS.md<br/>전체 구현 지침"]
  R --> RM["README.md"]
  R --> APPS["apps/"]
  R --> DOCS["docs/"]
  APPS --> APP["app-webview/"]
  APPS --> MOBILE["mobile/<br/>Flutter Native 앱"]
  APP --> AA["AGENTS.md<br/>앱 전용 지침"]
  APP --> SB[".storybook/"]
  APP --> SRC["src/<br/>실제 애플리케이션 소스"]
  DOCS --> DA["AGENTS.md<br/>문서 작성 규칙"]
  DOCS --> DI["index.html<br/>가이드 진입점"]
  DOCS --> AS["assets/<br/>스타일·스크립트·이미지"]
  DOCS --> GD["guides/<br/>상세 HTML 가이드"]
  DOCS --> AI["ai/<br/>AI 작업별 요약"]
  DOCS --> CS["common-source/<br/>파일 단위 구현 기준"]
  </div>
  <figcaption>실제 프로젝트에서는 애플리케이션 소스와 모든 가이드를 한 저장소에 두되, 소스는 apps에, 문서는 docs에 분리합니다.</figcaption>
</figure>

### 문서 운영 흐름

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TB
  accTitle: 실제 프로젝트에서 가이드와 소스를 확인하고 갱신하는 흐름
  accDescr: 작업 요청을 받으면 루트 지침과 실제 앱 설정을 먼저 확인하고 작업별 AI 요약, 공통 소스 기준 또는 상세 가이드를 필요한 만큼 읽은 뒤 앱 소스를 구현하고 Storybook과 품질 검사를 수행하며 필요하면 관련 문서를 함께 갱신합니다.
  A([작업 요청]) --> B["루트 AGENTS.md"]
  B --> C["apps/app-webview의 AGENTS.md<br/>package와 기존 source 확인"]
  C --> D["docs/ai의 작업별 요약 선택"]
  D --> E{"세부 구현 또는 배경이 필요한가?"}
  E -->|"파일 단위 적용 기준"| F["docs/common-source"]
  E -->|"정책·배경·상세 기준"| G["docs/guides의 HTML 가이드"]
  E -->|"요약으로 충분"| H["apps/app-webview에 구현"]
  F --> H
  G --> H
  H --> I["Storybook · typecheck · lint · test · build"]
  I --> J{"구조·규칙·공개 API가 바뀌었는가?"}
  J -->|"예"| K["관련 docs와 실제 source 함께 갱신"]
  J -->|"아니오"| L([작업 완료])
  K --> L
  </div>
  <figcaption>상세 가이드를 매번 모두 읽지 않고 실제 소스와 작업별 요약에서 시작해 필요한 문서만 단계적으로 확인합니다.</figcaption>
</figure>

## AI 생성 코드 기준

- Figma나 화면 설명에서 코드를 만들 때 React 함수 컴포넌트와 TSX로 구현합니다.
- 일반적인 UI 스타일은 Tailwind CSS 4 유틸리티로 작성합니다.
- Safari 15 또는 지원 대상 구형 브라우저에서 동작하지 않는 최신 CSS 기반 Utility는 사용하지 않습니다. 필요한 표현은 Safari 15 호환 Utility나 기존 프로젝트 패턴으로 대체합니다.
- Android와 Chromium·Firefox 계열은 Safari 15에 특정 제품 버전을 기계적으로 대응시키지 않고, 지원 대상 구형 버전에서 실제 사용하는 Utility와 핵심 기능을 검증합니다.
- 별도 CSS 파일, CSS Module, CSS-in-JS 또는 인라인 `style`은 기존 코드나 명확한 요구가 있을 때만 사용합니다.
- 원시 색상값보다 `bg-background`, `text-foreground`, `border-border` 같은 프로젝트 토큰을 사용합니다.
- 단순 정적 HTML 결과로 끝내지 말고 현재 Next.js 애플리케이션에 동작하는 컴포넌트로 구현합니다.
- Figma export와 AI 생성 결과는 초안으로 보고 구조, 토큰, 접근성 및 반응형 동작을 검토합니다.

### Figma UI 구현 전 확인

- 코드를 작성하기 전에 선택된 Figma 요소가 공통 컴포넌트 Instance인지 확인합니다.
- Figma Main Component의 Description과 Dev resource에 코드 컴포넌트 이름, import 경로 또는 소스 링크가 있으면 먼저 확인합니다.
- Figma에 기록된 정보만으로 구현하지 않고 안내된 실제 코드 파일을 읽어 named export, Props와 variant를 검증합니다.
- 다음 순서로 같은 역할의 기존 구현과 사용 예시를 검색합니다.
  1. 현재 feature 내부 컴포넌트
  2. 현재 application의 `src/components/ui`
- `globals.css`의 Semantic Token과 기존 Tailwind 사용 방식을 확인합니다.

### 기존 UI 컴포넌트 사용

- 같은 역할의 기존 컴포넌트가 있으면 새 컴포넌트나 native JSX로 중복 구현하지 않습니다.
- import 경로, export, Props, variant와 디자인 토큰을 추측하지 않습니다.
- Figma Description과 실제 코드가 다르면 어느 한쪽을 임의로 정답으로 간주하지 않고 차이를 사용자에게 알립니다.
- app-webview에서만 사용하는 shadcn/ui 원형과 Wrapper는 `apps/app-webview/src/components/ui`에 둡니다.
- 여러 기능에서 실제로 재사용되고 의미와 변경 이유가 같은 UI 원형만 `apps/app-webview/src/components/ui`에서 공통으로 관리합니다.
- 예약, 이용권, 라운지처럼 업무 의미가 있는 컴포넌트는 해당 feature 가까이에 둡니다.
- 기존 컴포넌트로 표현할 수 없는 부분만 새로 작성하고 완료 보고에 그 이유를 남깁니다.

### UI 구현 검증과 완료 보고

- 변경 후 프로젝트에 정의된 TypeScript 검사와 lint를 실행합니다.
- 필요한 경우 production build를 실행합니다.
- UI 변경은 Safari 15와 프로젝트가 정한 Android·Chromium·Firefox 구형 검증 환경에서 핵심 정보, 입력, 이동과 상호작용이 동작하는지 확인합니다.
- 완료 보고에는 사용한 최신 CSS 기능이 없음을 확인한 결과 또는 불가피하게 사용한 기능의 호환 대체와 검증 결과를 포함합니다.
- 완료 보고에 재사용한 기존 컴포넌트, 새로 만든 컴포넌트, 사용한 Semantic Token과 검증 결과를 포함합니다.

### Storybook 반자동 운영

- 공통 UI 컴포넌트, 독립 검수 가치가 있는 Feature 또는 사용자에게 노출되는 Screen을 새로 만들면 같은 변경에서 Story를 작성하거나 대표 Story 대상을 확인합니다.
- 공개 Props, variant, Feature 상태, Screen 구조 또는 사용자가 보는 결과를 변경하면 실제 코드와 사용처를 확인하고 관련 Story도 함께 갱신합니다.
- Story는 실제 export, TypeScript Props, 화면 입력과 승인된 계약을 기준으로 작성하며 존재하지 않는 상태를 추측하지 않습니다.
- Component는 실제 variant와 소유 상태를, Feature와 Screen은 기본 상태와 실제로 지원하는 loading, empty, error, 권한 상태 및 Viewport를 필요한 만큼 작성합니다.
- 타입, utility, helper, export 전용 파일, 단순 Page Wrapper, 동일 Screen Story로 대표할 수 있는 Route와 과도한 Mock이 필요한 내부 구현에는 Story를 강제하지 않습니다. 제외 대상과 사유를 남깁니다.
- Storybook을 위해 사용하지 않는 제품 Props, variant, Wrapper 또는 Mock을 추가하지 않습니다.
- Story 누락과 실제 코드 불일치를 점검할 때 공통 UI와 사용자 노출 Route·Page·Screen을 함께 조사하고 대상, 근거와 제외 사유를 먼저 보고한 뒤 승인된 항목만 수정합니다.
- 완료 전에 Storybook 정적 Build와 프로젝트에 합의된 Story 검사를 실행합니다.
- 완료 보고에 추가하거나 수정한 Story, 표현한 주요 상태, 검증 결과와 재현하지 못한 환경 의존성을 포함합니다.

## AI 문서 확인 흐름

AI는 작업을 시작할 때 이 `AGENTS.md`를 먼저 읽습니다. 이후 작업 종류를 판단해 필요한 `docs/ai/` 요약만 확인하고, 요약만으로 세부 기준을 판단하기 어려울 때 연결된 상세 가이드로 이동합니다.

### 작업별 AI 요약 문서

| 필요한 작업 | 확인할 문서 | 문서 내용 |
| --- | --- | --- |
| 프로젝트 구조, 기능과 상태 관리 기준 확인 | [Markdown](./docs/ai/project.md) · [HTML](./docs/ai/project.html) | 앱 범위, 기술 스택, 디렉터리 구조와 상태 배치 원칙 |
| UI, 컴포넌트와 스타일 구현 | [Markdown](./docs/ai/ui.md) · [HTML](./docs/ai/ui.html) | React·TypeScript 출력, Tailwind CSS, 컴포넌트 재사용과 접근성 기준 |
| 디자인 토큰과 스타일 값 연결 | [Markdown](./docs/ai/design-tokens.md) · [HTML](./docs/ai/design-tokens.html) | 의미 기반 토큰, shadcn/ui 설정, Figma Variables와 Tokens Studio 기준 |
| Figma 화면을 애플리케이션 코드로 구현 | [Markdown](./docs/ai/figma.md) · [HTML](./docs/ai/figma.html) | 구현 전 조사, 기존 코드 매핑, React 구현과 시각·품질 확인 흐름 |
| Storybook Story 작성과 누락 점검 | [Markdown](./docs/ai/storybook.md) · [HTML](./docs/ai/storybook.html) | 작성 시점과 대상, 실제 상태, 반자동 운영과 완료 기준 |
| TypeScript, Lint, Test와 Build 품질 확인 | [Markdown](./docs/ai/quality.md) · [HTML](./docs/ai/quality.html) | 검사 도구의 역할, 테스트 범위와 기본 검증 명령 |
| 네트워크 지연, 비동기 UI와 성능 검증 | [Markdown](./docs/ai/performance.md) · [HTML](./docs/ai/performance.html) | Loading·Timeout·Offline 처리, 요청 안전성과 저속 네트워크 검증 |
| 인증·권한, 외부 입력, 개인정보와 보안 검토 | [Markdown](./docs/ai/security.md) · [HTML](./docs/ai/security.html) | XSS, URL, Client 저장소, Cookie·CSRF, Secret, Bridge, 파일과 의존성 기준 |
| 공통 설정, 컴포넌트와 유틸리티 가이드 작성 | [Markdown](./docs/ai/common-source.md) · [HTML](./docs/ai/common-source.html) | 공통 소스 상세 가이드 진입점, 작성 원칙과 실제 저장소 적용 기준 |
| Ollama, Continue와 로컬 LLM 활용 | [Markdown](./docs/ai/local-llm.md) · [HTML](./docs/ai/local-llm.html) | 로컬 모델에 맡길 범위, 검토 방식과 외부 모델 전환 기준 |

### 문서 계층과 적용 기준

```text
AGENTS.md
└─ 프로젝트 전체 원칙과 작업별 문서 선택
   └─ docs/ai/*.md
      └─ 현재 작업에 필요한 핵심 판단 요약
         └─ docs/common-source/*.md
            └─ 실제 파일에 가까운 구현 예시와 적용 절차
               └─ apps/app-webview/*
                   └─ 확인된 실제 소스와 설정
```

이 계층은 문서를 확인하는 흐름입니다. 설치된 package, 기존 source와 app 내부 `AGENTS.md`를 먼저 확인하고, `docs/common-source/`의 코드를 그대로 덮어쓰지 않고 비교·병합합니다. 예시의 API, 브랜드 값, 업무 문구와 상태 정책은 확정된 제품 계약으로 교체합니다.

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TD
  accTitle: AI의 Front-end 가이드 확인 흐름
  accDescr: AI는 작업 요청을 받으면 AGENTS.md를 먼저 읽고 작업 종류에 맞는 docs/ai 요약 문서를 선택한 뒤, 세부 기준이 필요할 때만 연결된 상세 가이드를 확인합니다.
  A([작업 요청]) --> B["AGENTS.md 먼저 읽기"]
  B --> C{"어떤 작업인가?"}
  C -->|"프로젝트 구조·기능·상태"| P["docs/ai/project.md"]
  C -->|"UI·컴포넌트·스타일"| U["docs/ai/ui.md + design-tokens.md"]
  C -->|"Figma 구현"| F["docs/ai/figma.md + ui.md + design-tokens.md"]
  C -->|"Story 작성·점검"| SB["docs/ai/storybook.md"]
  C -->|"Lint·Test·품질"| Q["docs/ai/quality.md"]
  C -->|"네트워크 지연·비동기 UI·성능"| N["docs/ai/performance.md"]
  C -->|"인증·권한·외부 입력·보안"| S["docs/ai/security.md"]
  C -->|"공통 소스·설정·유틸리티"| CS["docs/ai/common-source.md"]
  C -->|"Ollama·Continue·로컬 LLM"| L["docs/ai/local-llm.md"]
  P -->|"세부 기준이 필요할 때"| PH["docs/guides/frontend + architecture"]
  U -->|"세부 기준이 필요할 때"| UH["docs/guides/frontend + ui"]
  F -->|"세부 기준이 필요할 때"| FH["react_code_exports.html + design_tokens.html"]
  SB -->|"세부 기준이 필요할 때"| SBH["docs/guides/storybook + common-source/storybook.md"]
  Q -->|"세부 기준이 필요할 때"| QH["docs/guides/lint + testing"]
  N -->|"세부 기준이 필요할 때"| NH["docs/guides/performance + 승인된 API 계약"]
  S -->|"세부 기준이 필요할 때"| SH["docs/guides/security + 실제 인증·배포 설정"]
  CS --> CSS["apps/app-webview의 기존 소스와 설치 package 확인"]
  CSS -->|"구현 기준 확인"| CSH["docs/common-source 실전 가이드 확인"]
  L -->|"세부 기준이 필요할 때"| LH["react_code_exports.html"]
  </div>
  <figcaption>AGENTS.md에서 작업별 요약과 상세 가이드로 이동하는 흐름</figcaption>
</figure>

처음부터 모든 문서를 컨텍스트에 넣지 않습니다. 현재 작업과 직접 관련된 요약 문서만 읽고, 구현 판단의 배경이나 구체적인 예시가 필요한 경우에만 다음 상세 가이드를 확인합니다.

- 프로젝트 구조와 공통 기준: [Front-End 개발 가이드](./docs/guides/frontend/index.html), [Front-End 저장소 구조 기준](./docs/guides/architecture/index.html)
- UI와 Figma 구현: [React Code Exports 가이드](./docs/guides/ui/react_code_exports.html), [디자인 토큰 가이드](./docs/guides/ui/design_tokens.html)
- Storybook 운영: [Storybook 운영 가이드](./docs/guides/storybook/index.html), [Storybook 적용 가이드](./docs/common-source/storybook.md)
- 품질 확인: [Lint 가이드](./docs/guides/lint/index.html), [Test 가이드](./docs/guides/testing/index.html)
- 네트워크 지연과 성능: [네트워크 지연 대응 및 성능 검증 가이드](./docs/guides/performance/draft.md)
- 보안과 개인정보: [Front-End 보안과 개인정보 가이드](./docs/guides/security/index.html)
- 공통 소스 구현: [공통 소스 가이드](./docs/common-source/index.md), [API 요청 기반](./docs/common-source/network.md), [세션 경계](./docs/common-source/session.md), [API Mock](./docs/common-source/api-mocking.md), [테스트 공통 소스](./docs/common-source/test.md), [Storybook 적용](./docs/common-source/storybook.md), [통합 사용 예시](./docs/common-source/recipes.md), [공통 소스 카탈로그](./docs/common-source/catalog.md)

### 공통 소스 구현 문서

`docs/common-source/`는 작업 지침을 반복하는 문서가 아니라 실제 저장소에 적용할 파일 단위 예시, 적용 조건과 교체 지점을 제공합니다. 공통 소스 작업에서는 먼저 진입 문서를 확인하고 현재 작업 영역에 해당하는 문서만 추가로 읽습니다.

| 필요한 작업 | 확인할 문서 | 문서 내용 |
| --- | --- | --- |
| 공통 소스 문서의 범위와 적용 순서 확인 | [Markdown](./docs/common-source/index.md) · [HTML](./docs/common-source/index.html) | 문서별 역할, 권장 파일 구조, 적용 순서와 완료 기준 |
| Tailwind CSS와 shadcn/ui 공통 설정 | [Markdown](./docs/common-source/tailwind.md) · [HTML](./docs/common-source/tailwind.html) | PostCSS, `components.json`, 디자인 토큰, `globals.css`와 `cn` 구현 예시 |
| React Provider와 반복되는 폼 동작 구현 | [Markdown](./docs/common-source/react.md) · [HTML](./docs/common-source/react.html) | QueryClient 생명주기, Provider, `SubmitButton`과 `FormField` 구현 예시 |
| TypeScript 설정과 외부 입력 검증 | [Markdown](./docs/common-source/typescript.md) · [HTML](./docs/common-source/typescript.html) | 공통 compiler 설정, type guard, 오류 변환과 union 분기 검사 예시 |
| API 요청과 기능별 응답 검증 연결 | [Markdown](./docs/common-source/network.md) · [HTML](./docs/common-source/network.html) | HTTP 오류, 공통 요청 함수와 기능별 parser 연결 예시 |
| 로그인 상태와 회원 데이터 경계 | [Markdown](./docs/common-source/session.md) · [HTML](./docs/common-source/session.html) | 세션 model·parser·Query와 로그아웃 cache 초기화 기준 |
| Client Component와 Query 테스트 환경 구성 | [Markdown](./docs/common-source/test.md) · [HTML](./docs/common-source/test.html) | Vitest, Testing Library, 공통 렌더링 함수와 사용자 동작 테스트 예시 |
| Component·Feature·Screen Storybook 구성과 검수 | [Markdown](./docs/common-source/storybook.md) · [HTML](./docs/common-source/storybook.html) | `.storybook`, Story 배치, 상태·Viewport, Figma Embed와 정적 Build 적용 기준 |
| 계약 확정 후 API Mock 필요성 판단 | [Markdown](./docs/common-source/api-mocking.md) · [HTML](./docs/common-source/api-mocking.html) | Backend 환경 우선, Front-end 범위·책임과 선택 도구 기준 |
| 공통 소스를 한 기능에 연결 | [Markdown](./docs/common-source/recipes.md) · [HTML](./docs/common-source/recipes.html) | 프로필 조회·검증·수정·상태 처리와 테스트를 연결한 통합 예시 |
| 적용 조건, package와 미확정 항목 확인 | [Markdown](./docs/common-source/catalog.md) · [HTML](./docs/common-source/catalog.html) | 파일별 도입 조건, 함께 적용할 코드, 필요한 package, TBD와 검증 목록 |
| 공통 소스 적용 범위와 순서 확인 | [Markdown](./docs/common-source/briefing.md) · [HTML](./docs/common-source/briefing.html) | 가이드의 활용 범위, 한계, 실제 적용 순서와 검증 기준 |

## 작업별 필수 문서

```text
docs/
├─ ai/
│  ├─ project.md        # 프로젝트 구조, 기능 및 상태 작업
│  ├─ ui.md             # UI, 컴포넌트 및 스타일 작업
│  ├─ design-tokens.md  # 디자인 토큰 및 스타일 기준
│  ├─ figma.md          # Figma URL 및 디자인 구현 작업
│  ├─ storybook.md      # Story 작성, 갱신과 누락 점검
│  ├─ quality.md        # Lint, Test 및 품질 확인
│  ├─ performance.md    # 네트워크 지연, 비동기 UI 및 성능 검증
│  ├─ security.md       # 인증·권한, 외부 입력, 개인정보 및 보안 검토
│  ├─ common-source.md  # 공통 소스 가이드 작업 진입점
│  └─ local-llm.md      # Ollama, Continue 및 로컬 LLM 작업
└─ common-source/
   ├─ index.md          # 가이드 범위와 적용 절차
   ├─ tailwind.md       # Tailwind CSS 기반 구현 가이드
   ├─ react.md          # React 공통 소스 구현 가이드
   ├─ typescript.md     # TypeScript 설정과 유틸리티 가이드
   ├─ network.md        # API 요청과 응답 검증 경계 가이드
   ├─ session.md        # 세션과 회원 데이터 경계 가이드
   ├─ test.md           # Vitest와 Testing Library 공통 테스트 가이드
   ├─ storybook.md      # Storybook 구성과 Story 적용 가이드
   ├─ api-mocking.md    # 계약 확정 후 API Mock 도입 판단 기준
   ├─ recipes.md        # 공통 소스를 연결한 기능 단위 통합 예시
   ├─ catalog.md        # 구현 항목과 도입 조건 체크리스트
   └─ briefing.md       # 적용 범위와 검증 순서
```

- UI 작업에서는 `docs/ai/ui.md`와 `docs/ai/design-tokens.md`를 함께 읽습니다.
- Figma 구현 작업에서는 `docs/ai/figma.md`, `docs/ai/ui.md`, `docs/ai/design-tokens.md`를 함께 읽습니다.
- 공통 컴포넌트, 독립 검수 가치가 있는 Feature 또는 사용자 노출 Screen을 생성하거나 공개 Props, 주요 상태와 화면 구조를 변경하는 작업에서는 `docs/ai/storybook.md`를 함께 읽습니다.
- API, Query, Loading, Timeout, Offline, 이미지·폰트 로딩 또는 성능에 영향을 주는 작업에서는 `docs/ai/performance.md`를 함께 읽습니다.
- 인증·권한, 외부 HTML·URL, 개인정보, Client 저장소, Bridge, 파일 또는 새 의존성이 포함된 작업에서는 `docs/ai/security.md`를 함께 읽습니다.
- 공통 소스 작업에서는 `docs/ai/common-source.md`를 먼저 읽고 작업 영역에 해당하는 `docs/common-source/` 상세 가이드와 카탈로그를 확인합니다.
- `apps/app-webview`의 기존 소스와 설치 package를 먼저 조사합니다. 실제 파일에서 확인되지 않은 구성은 문서의 예시만으로 구현되었거나 검증된 것처럼 표현하지 않습니다.

현재 작업과 관련 없는 문서는 읽지 않습니다. 문서에 없는 요구는 기존 소스와 사용자 요청을 우선 확인하고 임의로 확대하지 않습니다.

## 가이드 원본과 동기화

- 상세 가이드의 기준 원본은 이 저장소의 `docs/guides/`입니다. `docs/ai/`는 코딩에 필요한 핵심 결정만 담은 요약이며, 충돌하면 상세 가이드와 실제 소스를 함께 확인합니다.
- 상세 가이드 변경이 구현 규칙에 영향을 주면 관련 `docs/ai/` 문서를 함께 갱신합니다. 배경 설명, 설치 과정과 긴 검증 결과를 `docs/ai/`에 중복 복사하지 않습니다.
- `docs/common-source/*.md`는 실제 사용처와 설치 package를 확인해 선별 적용하는 구현 기준과 참고 코드입니다. 같은 이름의 HTML은 사람이 읽기 위한 보기입니다.
- `docs/`에는 실제 애플리케이션 `.ts`, `.tsx`, CSS 또는 package 설정 파일을 추가하지 않습니다.
- 실제 앱 저장소의 경로와 공개 API가 확정되거나 바뀌면 `docs/common-source/catalog.md`와 관련 가이드를 실제 상태에 맞게 갱신합니다.

## 기본 확인

변경 범위에 맞춰 다음 순서로 확인합니다.

```bash
npm run typecheck
npm run lint
npm run test
```

Story를 추가하거나 변경한 작업에서는 실제 `package.json`에 정의된 Storybook 정적 Build 명령도 실행합니다. Script가 아직 없으면 존재하는 것처럼 추측하지 않고 미구성 상태를 보고합니다.

병합 또는 통합 영향이 있는 변경에서는 `apps/app-webview`의 실제 package에 정의된 `npm run build`도 확인합니다. 이 Build에는 `docs/`를 포함하지 않습니다.
