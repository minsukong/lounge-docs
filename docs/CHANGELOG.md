# 변경 기록

이 문서는 Lounge Front-end 가이드와 AI 참고 문서의 주요 변경 이유와 범위를 기록합니다.

## 기록 방식

- 새로운 변경 내역은 이 안내 바로 아래에 추가합니다.
- 가장 최근 변경 내역이 위에 오도록 날짜 내림차순으로 정리합니다.
- 같은 날짜의 변경은 날짜 제목을 반복하지 않고 하나의 날짜 아래에 작업별 수정 내역을 이어서 기록합니다.
- 저장소를 옮겨도 기록을 유지할 수 있도록 commit hash와 저장소별 식별자는 작성하지 않습니다.
- 변경한 파일 목록만 나열하지 않고 변경 목적, 주요 내용, 미확정 항목과 검증 결과를 함께 기록합니다.
- 같은 작업에서 Markdown과 HTML을 함께 수정했다면 하나의 변경 항목으로 기록합니다.

## 2026-09-02

### 실제 Front-end 프로젝트 폴더 구조로 통합

- `actual-project-structure` 브랜치에서 애플리케이션과 가이드를 함께 운영하는 실제 저장소 구조로 전환했습니다.
- 모든 상세 HTML 가이드, AI 요약, 공통 소스 기준, 검색, 템플릿과 문서 자산을 `docs/` 아래로 이동하고 내부 상대 경로를 새 위치에 맞게 갱신했습니다.
- 저장소 Root `AGENTS.md`는 구현 지침, `docs/AGENTS.md`는 문서 작성 지침, `apps/app-webview/AGENTS.md`는 WebView 앱 전용 지침을 담당하도록 분리했습니다.
- 애플리케이션 source와 설정은 `apps/app-webview`, 모든 구현·검토 문서는 `docs`에서 관리하도록 기준을 통일했습니다.
- 저장소 생성 전·앱 초기화 후·빈 골격 같은 과도기 설명과 현재 존재하지 않는 복수 앱·공통 package 목표 구조를 제거하고, 실제 파일과 승인된 계약만 판단 근거로 사용하도록 문서를 정리했습니다.
- 애플리케이션 Build와 배포 범위를 `apps/app-webview`로 한정하고 `docs/`의 가이드, 검색과 문서 자산은 제품 Bundle·정적 자산·배포 Artifact에서 제외하도록 기준을 추가했습니다.
- GitLab Pages의 문서 전용 CI Job, 게시 범위, Access Control과 Confluence iframe 검증 기준을 저장소 구조 가이드의 운영 원칙으로 추가했습니다.
- `docs/guides` 전체 35개 HTML에서 351개 검색 Section을 다시 생성하고, HTML·Markdown 99개의 로컬 링크와 문서 JavaScript 문법을 확인했습니다.

### Front-end 및 Flutter APP 구축 일정 산정 보고서 연결

- [`Front-end 구축 일정 산정 보고서`](./guides/planning/web.html)는 반응형 웹사이트 약 225개 화면 및 상태와 앱 WebView 166개 대응 범위를 기준으로 산정했습니다.
- Front-end는 시니어 2명 중 1명이 PL과 개발을 겸하는 구성에서 90~115근무일, 약 4.5~5.75개월로 정리했습니다.
- [`Flutter APP 구축 일정 산정 보고서`](./guides/planning/app.html)는 미들급 Flutter 개발자 1명이 AI를 적극 활용하는 조건에서 기능 구현 95~120근무일, 통합 QA와 출시 준비까지 120~155근무일로 정리했습니다.
- 두 일정은 기획·디자인·승인된 API 계약과 WebView Bridge 정보가 기능 개발 순서에 맞춰 제공되는 조건의 추정치이며, 미확정 사항과 반복 변경은 별도 일정 위험으로 구분했습니다.
- Root README의 공통 가이드 목록과 예정 문서 위치 표에서 두 일정 보고서를 바로 열 수 있도록 연결했습니다.
- HTML 문서 구조와 README 내부 링크가 실제 파일 경로와 일치하는지 확인했습니다.

## 2026-08-31

### Tailwind CSS v4 유지 및 구형 브라우저 지원 기준 변경

- Tailwind CSS v4의 공식 완전 호환 버전을 프로젝트의 일괄 최소 버전으로 사용하던 기준을 제거하고, Safari 15와 주요 구형 브라우저에서 실제 사용 CSS와 Utility를 검증하는 정책으로 변경했습니다.
- 공통 CSS 하한을 Safari 15에서 지원되는 기능 범위로 정하고 iOS·iPadOS 및 WebView 최소 기준을 15 이상으로 통일했습니다.
- Chrome·Edge·Firefox·Samsung Internet은 Safari 15에 특정 제품 버전을 기계적으로 대응시키지 않고, 지원 대상 구형 버전에서 실제 사용하는 Tailwind Utility와 핵심 기능을 검증하도록 변경했습니다.
- 지원 환경에서 동작하지 않는 최신 CSS 기능은 사용하지 않거나 대체하며, Tailwind CSS v4.1 이상의 검증 버전을 잠금 파일에 고정하도록 정리했습니다.
- WebView 개요·개발 가이드, 브라우저 지원 가이드, 구축 브리핑과 발표 페이지를 함께 수정하고 문서 검색 인덱스를 다시 생성했습니다.
- 실제 AI 작업 진입점인 `reference/front-end/AGENTS.md`, UI·Figma 작업 요약과 React Code Exports 검수 기준에도 Safari 15 공통 CSS 하한과 구형 브라우저 검증 규칙을 추가했습니다.
- AI가 복사하는 Tailwind 공통 소스 예시의 토큰 색상과 WebView 높이도 Safari 15 호환 값으로 변경했습니다.

## 2026-08-28

### Front-end 구축 브리핑 문서와 PC 발표 페이지 추가

- 오늘 정리한 Figma 구현 설명, AI의 기존 Component 탐색, Storybook 우선 개발과 반자동 운영, Tailwind CSS v4 기반 Browser 지원, 반응형 구간과 중앙 검색 운영을 하나의 브리핑으로 연결했습니다.
- 일반 [`브리핑 문서`](./guides/briefing/index.html)는 공통 가이드 템플릿을 사용하고, Figma → AI → Storybook → 프로젝트 → 운영의 순환을 접근성 설명이 포함된 Mermaid로 정리했습니다.
- 별도 [`PC 발표 페이지`](./guides/briefing/presentation.html)는 1440~1600px 콘텐츠 폭과 전면 장면을 사용하며, 대형 타이포그래피, 개발 도구 Panel, Storybook 상태 Canvas, Browser·Viewport 시각화와 운영 순환도를 추가했습니다.
- 발표 페이지는 외부 CDN이나 Animation Library 없이 독립 실행되며 Scroll Snap, 장면 노출 효과, 진행률, 우측 장면 Navigation과 방향키·Page Up/Down 이동을 제공합니다.
- Archify는 핵심 Workflow를 별도 검증 산출물로 확장할 수 있도록 후보로 남기고, 현재 발표 페이지에서는 동일한 내용을 가벼운 자체 Workflow로 표현했습니다.
- HTML 구조, JavaScript 문법과 자산 경로를 확인했으며, 1440×900 화면에서 표지와 핵심 Workflow를 시각 검증하고 일반 문서의 Mermaid 렌더링과 Console 오류가 없음을 확인했습니다.

### 반응형 웹 브라우저 지원 기준과 가이드 검색 추가

- Tailwind CSS v4의 공식 핵심 호환 조건을 기준으로 Chrome·Edge 111 이상, Safari 16.4 이상, Firefox 128 이상과 Samsung Internet 23 이상을 최소 지원 버전으로 정리했습니다.
- PC, 태블릿과 모바일의 브라우저 지원 표를 분리하고 Whale, 360 Safe, UC와 QQ처럼 제품 버전과 Chromium 엔진 버전의 대응이 일정하지 않은 브라우저는 Chromium 111 이상 엔진을 탑재한 최신 안정 버전에서 호환성을 확인하도록 구분했습니다.
- 한국·중국·일본·미국과 전 세계의 2026년 7월 StatCounter 브라우저 제품군 점유율을 브라우저 선정의 보조 근거로 추가하고, 제품군 점유율을 특정 최소 버전 이상의 정확한 사용자 비율로 해석하지 않도록 제한을 명시했습니다.
- 현대 브라우저의 자동 업데이트가 최소 버전 기준의 현실성을 높이지만, 기업 관리 정책, 장기 미재시작과 구형 OS에서는 업데이트가 지연될 수 있으므로 실제 운영 사용자 버전을 확인하도록 했습니다.
- 반응형 화면을 물리 해상도가 아닌 CSS viewport 기준으로 Mobile 320–767px, Tablet 768–1023px, PC 1024px 이상으로 구분하고 Tailwind CSS의 `md` 768px, `lg` 1024px 경계와 대표 검증 너비를 추가했습니다.
- 화면 구간은 기존 가이드와 같은 Mermaid 구조로 시각화하고 767·768px 및 1023·1024px 경계값, 세로·가로 전환, 확대와 넓은 화면 검증 항목을 정리했습니다.
- [`반응형 웹 브라우저 지원 가이드`](./guides/browser-support/index.html)와 초안 [`draft.md`](./guides/browser-support/draft.md)를 추가하고 Root README에서 연결했습니다.

#### 전체 가이드 검색

- 기존 가이드에 검색 UI를 반복 삽입하지 않고 중앙 [`가이드 검색`](./search/index.html) 페이지 한 곳에서 주요 가이드의 문서명, 목차와 본문을 검색하도록 구성했습니다.
- 검색 대상은 업무 가이드로 한정하고 교육용 `ai_frontend_growth_guide`, `reference` 복제 문서, 작성용 `init`, README, 변경 로그와 검색 페이지 자체를 제외했습니다.
- 검색 결과는 관련 문서의 `h2` 목차로 직접 이동하며 Tailwind, Storybook, Figma, 브라우저, WebView, TypeScript, 테스트, 보안, 다국어와 성능 추천 검색어를 제공합니다.
- 의존성이나 검색 서버 없이 파일을 직접 열어도 동작하도록 [`build-search-index.mjs`](./search/build-search-index.mjs)가 전체 HTML에서 정적 색인을 생성하게 했습니다.
- 가이드 변경 후 `node .\search\build-search-index.mjs`를 실행하면 [`search-data.js`](./assets/js/search-data.js)가 갱신되며, 생성 파일을 직접 수정하지 않도록 검색 페이지에 운영 방법을 기록했습니다.
- 검색 전용 스타일과 브라우저 실행 코드는 각각 [`search.css`](./assets/style/search.css), [`search.js`](./assets/js/search.js)로 공통 자산 폴더에서 관리하고 색인 생성 스크립트만 검색 페이지 가까이에 유지했습니다.

#### 검증

- 브라우저 지원 가이드 HTML의 Section, 표, Mermaid 접근성 설명과 공통 자산 경로를 확인했습니다.
- 검색 색인에서 16개 가이드 HTML의 177개 목차가 생성되는 것을 확인했습니다.
- 모든 추천 검색어에 결과가 존재하고 교육용 커리큘럼, `reference`와 검색 페이지 자체가 색인에서 제외되는 것을 확인했습니다.
- 검색 HTML과 JavaScript 문법, CSS·검색 코드·검색 데이터 경로를 확인했습니다.
- 로컬 파일 URL은 브라우저 자동 검수 환경의 보안 정책으로 열 수 없어 최종 시각 검증은 수행하지 않았습니다.

### Figma 기반 UI 구현과 Storybook 반자동 운영 연결

- Figma 디자인을 Cline의 로컬 LLM, Codex, Claude Code 등 AI 코딩 도구로 React와 Tailwind CSS 4 코드에 옮기되, 생성 결과를 완성 코드가 아닌 구현 초안으로 검수하는 흐름을 정리했습니다.
- Code Connect를 도입하기 전에는 Figma Main Component의 Description과 Dev resource에 실제 코드 컴포넌트 이름, import 경로, 주요 Props, variant와 사용 설명을 기록해 AI의 추측 범위를 줄이도록 했습니다.
- AI는 Figma 설명을 참고한 뒤 실제 프로젝트 파일에서 named export, Props, variant와 사용처를 다시 확인하고 기존 shadcn/ui 및 프로젝트 컴포넌트를 우선 사용하도록 기준을 보강했습니다.
- Storybook을 공통·재사용 UI 컴포넌트의 독립 개발, 공개 API 확인, 주요 상태 검수와 문서화를 위한 기본 운영 도구로 도입했습니다.
- Button처럼 공통 컴포넌트임이 확실하면 실제 컴포넌트와 Story를 함께 작성해 Storybook에서 먼저 검수한 뒤 화면에 사용하고, 재사용 여부가 불확실하면 기능 가까이에서 구현한 후 실제 반복이 확인될 때 Story를 추가하도록 두 가지 개발 경로를 구분했습니다.
- 모든 `.tsx` 파일에 Story를 생성하지 않고 공통 UI, 실제 공유 UI와 독립 검증 가치가 있는 feature 컴포넌트만 대상으로 삼으며, 페이지·단순 레이아웃·도우미 파일과 과도한 Mock이 필요한 내부 구현은 기본 대상에서 제외했습니다.
- Story 작성과 갱신, 누락·불일치 조사 및 정적 Build는 AI가 우선 수행할 수 있고, 프론트엔드 개발자가 등록 대상, 실제 상태, Figma 일치 여부, 접근성과 결과를 검수하는 반자동 운영 기준을 마련했습니다.
- 최초 구축, 일상적인 컴포넌트 변경과 정기 누락 점검에 사용할 수 있는 도구 독립적인 AI 요청 예시를 추가했습니다.
- 기존 Front-End 가이드의 “Storybook은 기본 도구에 포함하지 않는다”는 정책을 제거하고 React Code Exports, Storybook, 프로젝트 구조, UI, Figma와 품질 문서의 흐름을 같은 기준으로 연결했습니다.

#### 실제 프로젝트용 참고 구조

- 실제 업무용 [`AGENTS.md`](../AGENTS.md)에 Figma 구현 전 확인, 기존 컴포넌트 재사용과 Storybook 반자동 운영 규칙을 추가했습니다.
- AI가 Storybook 작업 전에 읽는 [`storybook.md`](./ai/storybook.md)와 실제 `.storybook`, `*.stories.tsx`, Autodocs 및 정적 Build 적용 절차를 설명하는 [`common-source/storybook.md`](./common-source/storybook.md)를 추가했습니다.
- `reference/front-end`의 README, AI 문서 선택 흐름, 프로젝트 구조, UI·Figma·품질 요약과 공통 소스 목록에 Storybook 진입점을 연결했습니다.
- 실제 애플리케이션이 생성되면 `apps/app-webview/.storybook`에 실행 설정을 두고 Story는 실제 컴포넌트 가까이에 배치합니다. Framework, Addon, package와 Script 이름은 실제 `package.json`과 Lock File을 확인한 뒤 확정합니다.
- 여러 애플리케이션에서 의미와 변경 이유가 같은 재사용이 확인되기 전에는 별도 Storybook 애플리케이션이나 `packages/ui` 구성을 미리 만들지 않습니다.

#### 주요 문서

- [`Storybook 운영 가이드`](./guides/storybook/index.html) · [`초안`](./guides/storybook/draft.md)
- [`React Code Exports 가이드`](./guides/ui/react_code_exports.html)
- [`Front-End 개발 가이드`](./guides/frontend/index.html)
- [`Storybook AI 요약`](./ai/storybook.md) · [`HTML`](./ai/storybook.html)
- [`Storybook 적용 가이드`](./common-source/storybook.md) · [`HTML`](./common-source/storybook.html)

#### 검증

- 기존 Storybook 미도입 정책이 관련 Markdown과 HTML에 남아 있지 않은지 확인했습니다.
- `reference/front-end/docs/ai`와 `docs/common-source`의 Markdown·HTML 파일 쌍, 새 내부 링크와 Storybook 문서 진입점을 확인했습니다.
- 수정한 주요 HTML의 문법과 Section, Code Block 및 닫는 태그 구조를 확인했습니다.
- 실제 package와 애플리케이션이 아직 생성되지 않아 Storybook 설치, 정적 Build와 브라우저 시각 검증은 수행하지 않았습니다.

## 2026-08-26

### 네트워크 지연·Offline 검증과 API Mock 기준 정리

- 문서의 독자 수준을 성능 전문가가 아닌 시니어 Front-end 개발자로 맞추고, “느림”의 원인 구분과 실제 기능에 필요한 항목만 적용한다는 읽기 기준을 추가했습니다.
- Skeleton·Spinner·Progress·Toast, Cache·Background 갱신·Optimistic Update, Query Key, 멱등성, Timeout·Retry, Offline Queue와 Network Throttling 용어를 처음 나오는 문맥에서 설명했습니다.
- Core Web Vitals, LCP·CLS·INP, Bundle·Chunk·Main Thread, Lighthouse, 성능 회귀와 성능 Budget의 의미와 측정 목적을 보강했습니다.
- 이 저장소는 Front-end 가이드이며 Front-end가 독립적으로 결정할 수 있는 구현·검증 원칙만 현재 기준으로 확정합니다. 기획, 업무 규칙, API·인증·데이터 계약, Backend 제공 환경, Native App 책임과 배포·운영처럼 다른 담당 영역이 필요한 내용은 승인 전까지 미확정으로 유지합니다.
- 보안 문서에 적힌 Backend·Native App·배포 책임은 Front-end가 확인해야 할 외부 조건이며, 현재 프로젝트에서 구현이나 제공이 확정됐다는 의미가 아님을 명시했습니다.
- [`performance_guide/draft.md`](./guides/performance/draft.md)와 [`performance_guide/index.html`](./guides/performance/index.html)에 느린 네트워크, API 응답 지연, Timeout, Offline과 연결 복구 시 Front-end 처리 기준을 추가했습니다.
- 최초 로딩과 기존 데이터 갱신을 구분하고 Skeleton, Spinner, Progress와 Toast는 설치된 shadcn/ui 및 프로젝트 컴포넌트를 우선 사용하도록 했습니다.
- Chrome 개발자 도구의 `Network`, `Disable cache`, 저속 Profile과 `Offline` 전환을 이용한 단계별 검증 절차를 추가했습니다.
- Chrome Network Throttling은 Bundle·이미지·폰트·API를 포함한 저속 전송 환경 확인에 사용합니다.
- 특정 API의 처리 지연, 오류와 응답 순서 역전은 사용할 수 있는 Backend 환경 또는 승인된 계약에서 파생한 Front-end 재현 도구로 확인합니다.
- Backend가 별도의 지연·오류 환경을 제공하거나 Mock 사용을 승인할 것이라고 전제하지 않습니다.
- API 계약 확정 후 실제 환경으로 필요한 상태를 반복 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 범위·관리 책임·폐기 조건을 정한 뒤 MSW 같은 도구를 선택할 수 있습니다. 이 도구가 API 계약을 대신하지 않는다는 점은 Backend에 공유합니다.
- MSW는 실제 Backend의 계약 준수, 인증, Cookie, CORS, 데이터 정합성과 운영 네트워크 검증을 대신하지 않으며 Production 실행과 Bundle에 포함하지 않습니다.
- 사람용 가이드, AI 요약, 성장·테스트 가이드와 공통 소스 문서에서 MSW를 Backend 승인 사항처럼 표현한 문구를 제거하고, 승인된 계약 이후 Front-end 테스트 범위에서 선택하는 도구로 기준을 맞췄습니다.
- 오프라인 지원 범위를 확정 요구처럼 표현하지 않고 미확정 정책으로 정리했으며, 성능 가이드의 검증 항목은 실제 기능과 위험에 따라 선택하는 후보임을 명시했습니다.
- 최종 Markdown을 프로젝트 HTML 템플릿 구조로 변환하고 Root README에서 사람용 가이드로 연결했습니다.

#### API 확정 전 제한

- 기획과 Backend API 계약 확정 전에는 endpoint, method, status, 요청·응답 필드, parser, fixture, handler와 Mock을 선행 구현하지 않습니다.
- Swagger 또는 OpenAPI 제공을 미리 가정하지 않고 Backend가 실제로 전달하고 승인한 계약 형식을 기준으로 사용합니다.
- API 미확정 단계에서는 사용자 흐름, 필요한 화면 상태, 확인 질문과 `TBD`만 정리합니다.
- API별 Timeout, 재시도 횟수, Offline 지원 범위, Skeleton 상세 디자인과 성능 Budget은 실제 화면·API·운영 환경을 확인한 뒤 결정합니다.

#### 주요 문서

- [`performance_guide/draft.md`](./guides/performance/draft.md) · [`performance_guide/index.html`](./guides/performance/index.html)
- [`performance.md`](./ai/performance.md)
- [`api-mocking.md`](./common-source/api-mocking.md) · [`api-mocking.html`](./common-source/api-mocking.html)
- [`network.md`](./common-source/network.md) · [`network.html`](./common-source/network.html)

### 로컬 LLM 실사용 평가와 모델 선택 원칙 추가

- [`react_code_exports.html`](./guides/ui/react_code_exports.html)에 파라미터 수나 출시 시점보다 동일한 실제 업무 프롬프트의 결과를 비교하는 원칙을 추가했습니다.
- Gemma4는 커뮤니케이션과 Soul 준수가 뛰어나며 문서 리뷰, 프로젝트 전체 맥락 파악과 범용 Agent 작업을 안정적으로 수행하는 모델로 평가했습니다.
- Qwen 계열은 Cline 코딩 작업에는 강점이 있지만 Hermes에서는 과도한 Reasoning과 출력 불안정이 관찰되어, 코드 구현·수정·리팩터링 용도로만 사용하도록 범위를 명시했습니다.
- 모델 평가는 고정된 종합 순위가 아니라 현재 환경의 업무별 관찰값이며 모델이나 실행 도구가 바뀌면 같은 테스트를 다시 수행합니다.

### React·Next.js Framework 보안 업데이트 원칙 보강

- React·Next.js 공식 Security Advisory를 기준으로 선언·설치·배포 Version을 비교하고 고위험 취약점을 우선 대응하도록 했습니다.
- WAF, 입력 검증과 CSP가 취약 package의 공식 Patch를 대신하지 않음을 명시했습니다.
- 외부에 노출된 취약 Version은 Patch·재배포와 함께 로그, 영향 범위와 자격 증명 교체 필요성을 검토하도록 했습니다.
- 특정 과거 Patch Version을 고정하지 않고 React2Shell은 Framework 취약점 대응 사례로만 연결했습니다.

### npm 공급망 침해 예방과 대응 보강

- Axios는 현재 프로젝트 사용 기술이 아닌 실제 사고 사례로만 제시하고, 공식 Registry에도 탈취된 배포 권한으로 악성 Version이 올라갈 수 있음을 설명했습니다.
- package와 Lock File 변경 검토, 재현 가능한 설치, 설치 Script·공식 공지·서명과 Provenance 확인 및 `npm audit`의 탐지 한계를 추가했습니다.
- 악성 package 설치 시 단순 Version 교체로 끝내지 않고 개발 PC·CI Runner 격리, 자격 증명 교체, 깨끗한 환경에서 재빌드, 영향 로그와 배포 Artifact 확인을 수행하도록 보강했습니다.
- 초기 도입은 최신 안정 Version을 자동 채택하지 않고 공식 지원·보안 공지·호환성을 검토한 뒤 고정하며, 취약점 대응은 현재 사용 계열의 공식 수정 Version을 우선 적용하도록 기준을 명확히 했습니다.

### Front-end 보안과 개인정보 기준 추가

- 문서의 독자 수준을 보안 전문가가 아닌 시니어 Front-end 개발자로 명확히 맞추고, 각 보안 기준에서 의미·확인 범위·Front-end 행동을 함께 이해할 수 있도록 설명을 보강했습니다.
- “신뢰하지 않는다”는 값의 사용 금지가 아니라 저장·전달 당시의 상태를 단정하지 않고 위험도에 맞게 확인한다는 뜻으로 정의했으며, Storage는 UI 설정과 권한·사용자 데이터의 검증 수준을 구분했습니다.
- 보안 용어를 삭제하거나 지나치게 단순화하지 않고, XSS, Sanitizer, Tag·Attribute, URL Scheme, CSRF, CORS, Origin, CSP, Client Bundle, Source Map과 공급망 보안이 처음 나오는 위치에 한글 의미와 원어 설명을 추가했습니다.
- 아직 정하지 않은 Sanitizer 도구와 HTML 허용 범위는 승인된 것처럼 표현하지 않고 미정 상태로 바로잡았습니다.
- [`security_guide/index.html`](./guides/security/index.html)과 [`security_guide/draft.md`](./guides/security/draft.md)를 추가했습니다.
- Client 신뢰 경계, XSS, URL·Redirect, 인증·권한, Cookie·CSRF·CORS, Secret, 저장소, 개인정보·로그, CSP, WebView Bridge와 공급망 기준을 정리했습니다.
- AI용 요약인 [`security.md`](./ai/security.md)와 [`security.html`](./ai/security.html)을 추가했습니다.
- 성장 과정에 [`13-frontend-security-and-privacy.html`](./guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html)을 연결했습니다.
- 인증 제공자, Cookie 또는 token 방식, CSRF 구현, CSP 값, 허용 Origin, 개인정보 보존 기간과 외부 Script 목록은 확정하지 않았습니다.

### AI 협업 Front-end 성장 과정 실무 기준 보강

- JavaScript 비동기 실행과 Closure, 요청 취소, TypeScript Union과 Runtime 검증, React 상태 보존, Effect 경쟁 상태와 Next.js Hydration 기준을 보강했습니다.
- API 단계는 승인된 계약이 전달된 뒤 공통 요청 계층과 parser를 적용하고, 계약 전에는 API와 Mock 구현을 선행하지 않도록 최신 기준으로 수정했습니다.
- 테스트 단계는 사용할 수 있는 Backend 환경과 필요한 경우 승인된 계약 기반의 Front-end Mock을 구분하도록 했습니다.
- AI의 조사 범위, 변경 파일, 추측과 일정 산정 확장을 통제하고 실제 기능의 병합 여부를 판단하는 것을 완료 기준으로 삼았습니다.
- API path, 인증 저장 방식, 세션 갱신, Cache 정책과 실제 package는 미확정 상태로 유지했습니다.

### Front-end 공통 소스와 AI 작업 기준 정비

- [API 요청 기반](./common-source/network.md)에 `HttpError`, 공통 `request`, 빈 본문·JSON 오류·취소 신호와 기능별 parser 경계를 정리했습니다.
- [세션과 회원 경계](./common-source/session.md)에 로그인 확인 중·비로그인·로그인·확인 실패 구분과 사용자 전환 시 Cache 정리 기준을 추가했습니다.
- [API Mock 도입 판단 기준](./common-source/api-mocking.md)은 Backend 준비 전 임시 API를 만드는 가이드가 아니라, 승인된 API 계약 이후 지연·오류 상태를 반복 검증할 도구의 선택 기준으로 최신화했습니다.
- 공통 소스 진입점·브리핑·카탈로그·테스트·통합 예시와 Front-End·Test 가이드의 설명을 같은 기준으로 연결했습니다.
- 인증 방식, API origin·endpoint·응답·오류 계약, Query 정책, Native Bridge와 CI 범위는 확정하지 않았습니다.
- 사람은 상세 가이드를 보고 AI는 `AGENTS.md`에서 시작해 현재 작업에 필요한 문서만 선택하도록 진입 경로를 정리했습니다.

### 검증

- 관련 Markdown과 HTML의 현재 API 계약·Mock·네트워크 기준이 일치하는지 확인했습니다.
- 계약 확정 전 Mock 선행 구현과 `401 = 세션 만료` 같은 확정 표현이 현재 기준에 남지 않도록 정리했습니다.
- 수정한 HTML의 Section·Heading·닫는 태그, 내부 링크와 코드 블록 구조를 확인했습니다.
- Git diff 형식 검사를 통과했으며 Windows 환경의 LF/CRLF 변환 안내 외 오류는 없습니다.
