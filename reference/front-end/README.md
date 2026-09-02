# Lounge Front-end 참고 소스

이 폴더는 `lounge-docs`의 상세 가이드를 **실제 구현에 옮길 수 있는 AI 지침 + 파일 단위 예시**로 정리한 임시 참고 위치입니다. 실제 애플리케이션은 통합 Front-end 저장소의 `apps/app-webview`에 추후 생성하며, 이 폴더의 `AGENTS.md`와 `docs/`는 새 저장소의 루트 구조로 이동합니다.

> 통합 전 기준 원본은 현재 `lounge-docs`의 상세 가이드입니다. 통합 후에는 상세 HTML 가이드를 포함한 모든 문서를 같은 저장소의 `docs/`에서 관리합니다.

## 통합 후 목표 구조

```text
front-end-repository/
├── AGENTS.md
├── README.md
├── apps/
│   └── app-webview/
│       ├── AGENTS.md
│       ├── .storybook/
│       ├── components.json
│       ├── postcss.config.mjs
│       ├── vitest.config.ts
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

현재 `reference/front-end`는 최종 경로가 아닙니다. 실제 이동 시 `AGENTS.md`는 저장소 루트로, `docs/ai`와 `docs/common-source`는 저장소 루트의 동일 경로로 옮기고, 현재 루트에 흩어진 상세 가이드와 자산은 `docs/guides`와 `docs/assets`로 옮깁니다. 별도 `common_docs` 폴더는 만들지 않습니다.

### 상세 가이드 이동 기준

| 현재 위치 | 통합 후 위치 |
| --- | --- |
| `briefing/` | `docs/guides/briefing/` |
| `frontend_guide/` | `docs/guides/frontend/` |
| `monorepo/` | `docs/guides/architecture/` |
| `app/` | `docs/guides/app/`과 `docs/guides/platform/webview/` |
| `ui_guide/` | `docs/guides/ui/` |
| `storybook_guide/` | `docs/guides/storybook/` |
| `test_guide/` | `docs/guides/testing/` |
| `lint_guide/` | `docs/guides/lint/` |
| `security_guide/` | `docs/guides/security/` |
| `performance_guide/` | `docs/guides/performance/` |
| `browser_support_guide/` | `docs/guides/browser-support/` |
| `typescript_guide/` | `docs/guides/typescript/` |
| `i18n_guide/` | `docs/guides/i18n/` |
| `ai_frontend_growth_guide/` | `docs/guides/learning/ai-frontend-growth/` |
| `search/` | `docs/search/` |
| `init/` | `docs/templates/` |
| `assets/` | `docs/assets/` |
| `reference/front-end/docs/ai/` | `docs/ai/` |
| `reference/front-end/docs/common-source/` | `docs/common-source/` |

### 새 브랜치에서 통합을 시작하는 순서

1. 실제 Front-end 저장소의 새 브랜치를 만들고 위 목표 폴더만 먼저 준비합니다.
2. 현재 `reference/front-end/AGENTS.md`를 저장소 루트 `AGENTS.md`의 기준으로 옮깁니다.
3. 현재 문서 작성용 루트 `AGENTS.md`를 `docs/AGENTS.md`의 기준으로 옮깁니다.
4. HTML 상세 가이드와 원본을 위 이동 기준에 따라 `docs/guides/`로 옮깁니다.
5. HTML 공통 자산을 `docs/assets/`로 옮기고 CSS, JavaScript, 이미지의 상대 경로를 갱신합니다.
6. AI 요약과 공통 소스 문서를 각각 `docs/ai/`와 `docs/common-source/`로 옮깁니다.
7. `docs/index.html`과 루트 `README.md`에서 모든 가이드에 접근할 수 있게 연결합니다.
8. `reference/front-end`, 기존 루트 가이드 폴더와 별도 `common_docs` 경로가 남지 않았는지 확인합니다.
9. 내부 링크, Markdown·HTML 보기, Mermaid, Desktop·Mobile 표시를 검증한 뒤 `apps/app-webview` 공통 소스 구현을 시작합니다.

## 현재 임시 폴더 구조

```text
reference/front-end/
├── AGENTS.md          # 저장소 전체 AI 작업 진입점 (여기서 시작)
├── AGENTS.html        # 같은 내용의 HTML 보기
├── README.md          # 이 파일
└── docs/
    ├── ai/            # 작업별 핵심 판단 요약 (AI가 먼저 읽는 층)
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
    └── common-source/ # 파일 단위 예시 코드와 적용 절차
        ├── index.md
        ├── tailwind.md
        ├── react.md
        ├── typescript.md
        ├── network.md
        ├── session.md
        ├── test.md
        ├── storybook.md
        ├── api-mocking.md
        ├── recipes.md
        ├── catalog.md
        └── briefing.md
```

각 문서에는 `.md`(문서 원본)와 `.html`(사람이 읽기 위한 보기)이 쌍으로 존재합니다.

## 문서 계층

```text
AGENTS.md            # 전체 원칙 + 작업별 문서 선택
└── docs/ai/*.md      # 현재 작업에 필요한 핵심 판단 요약
    └── docs/common-source/*.md  # 실제 파일에 가까운 구현 예시와 적용 절차
        └── apps/app-webview/*   # 저장소 생성 후 확인된 실제 소스와 설정
```

처음부터 모든 문서를 읽지 않고, 현재 작업과 직접 관련된 `docs/ai/` 요약만 읽고, 세부 기준이 필요할 때 `docs/common-source/`나 상세 HTML 가이드로 이동합니다. 통합 전에는 현재 `lounge-docs` 경로를 사용하고 통합 후에는 같은 저장소의 `docs/guides/`를 사용합니다.

## 작업별 문서

### docs/ai/ — 작업별 핵심 요약

| 필요한 작업                    | 문서               | 내용                                                      |
| ------------------------------ | ------------------ | --------------------------------------------------------- |
| 프로젝트 구조, 기능, 상태 관리 | `project.md`       | 앱 범위, 기술 스택, 디렉터리 구조와 상태 배치 원칙        |
| UI, 컴포넌트, 스타일 구현      | `ui.md`            | React·TypeScript 출력, Tailwind CSS, 재사용과 접근성 기준 |
| 디자인 토큰, 스타일 값 연결    | `design-tokens.md` | 의미 기반 토큰, shadcn/ui, Figma Variables, Tokens Studio |
| Figma 화면을 앱 코드로 구현    | `figma.md`         | 구현 전 조사, 기존 코드 매핑, React 구현과 품질 확인      |
| Component·Feature·Screen Story 작성·점검 | `storybook.md` | 작성 대상, 실제 상태·Viewport, Figma Embed, 반자동 운영과 완료 기준 |
| TypeScript, Lint, Test, Build  | `quality.md`       | 검사 도구 역할, 테스트 범위와 기본 검증 명령              |
| 네트워크 지연, 비동기 UI, 성능 | `performance.md`   | Loading·Timeout·Offline, 요청 안전성과 저속 환경 검증     |
| 인증·권한, 개인정보와 보안 검토 | `security.md`      | XSS, URL, 저장소, Cookie·CSRF, Secret, Bridge와 의존성 기준 |
| 공통 설정·컴포넌트·유틸리티    | `common-source.md` | 공통 소스 상세 가이드 진입점과 적용 기준                  |
| Ollama, Continue, 로컬 LLM     | `local-llm.md`     | 로컬 모델에 맡길 범위, 검토 방식, 외부 모델 전환 기준     |

> UI 작업은 `ui.md` + `design-tokens.md`, Figma 구현은 `figma.md` + `ui.md` + `design-tokens.md`를 함께 읽습니다. 공통 컴포넌트, 독립 검수 가치가 있는 Feature 또는 사용자 노출 Screen을 생성하거나 공개 API, 주요 상태와 화면 구조를 변경하면 `storybook.md`도 확인합니다. API·Query·비동기 UI와 성능 작업은 `performance.md`를, 인증·권한·외부 입력·개인정보·저장소·Bridge가 포함된 작업은 `security.md`를 추가로 확인합니다.

### docs/common-source/ — 파일 단위 구현 예시

| 필요한 작업                     | 문서            | 확인할 파일과 코드                                                  |
| ------------------------------- | --------------- | ------------------------------------------------------------------- |
| 문서 범위와 적용 순서           | `index.md`      | 문서별 역할, 권장 파일 구조, 적용 순서, 완료 기준                   |
| Tailwind CSS + shadcn/ui 설정   | `tailwind.md`   | `globals.css`, `components.json`, `postcss.config.mjs`, `cn`        |
| React Provider, 폼 동작         | `react.md`      | `get-query-client.ts`, `providers.tsx`, `SubmitButton`, `FormField` |
| TypeScript 설정, 외부 입력 검증 | `typescript.md` | compiler 설정, type guard, 오류 변환, union 분기 검사               |
| API 요청과 응답 검증            | `network.md`    | `HttpError`, 공통 요청 함수, 기능별 parser                          |
| 로그인 상태와 회원 데이터 경계  | `session.md`    | 세션 model·parser·Query, 로그아웃 cache 초기화                      |
| 테스트 환경 구성                | `test.md`       | Vitest, Testing Library, `renderWithProviders`                      |
| Storybook 구성과 Story 작성     | `storybook.md`  | `.storybook`, `*.stories.tsx`, Autodocs와 정적 Build                |
| 계약 확정 후 API Mock 판단      | `api-mocking.md` | Backend 환경 우선, Front-end 범위·책임과 선택 도구 기준             |
| 공통 소스를 기능에 연결         | `recipes.md`    | 조회·검증·수정·상태·테스트를 연결한 프로필 예시                     |
| 적용 조건, package, 미확정      | `catalog.md`    | 파일별 도입 조건, 함께 적용할 코드, package, TBD 목록               |
| 준비 수준, 적용 순서            | `briefing.md`   | 활용 범위, 한계, 저장소 생성 후 적용 순서와 검토 시점               |

## 기술 스택 기준

- Next.js 16 App Router · React 19 · TypeScript
- Tailwind CSS 4 · shadcn/ui(`base-nova`)
- TanStack Query
- 스타일은 `src/app/globals.css`의 의미 기반 토큰(`bg-background`, `text-foreground`, `border-border` 등)

## 기본 검증

변경 범위에 맞춰 다음 순서로 확인합니다.

```bash
npm run typecheck
npm run lint
npm run test
```

Story를 추가하거나 변경한 작업에서는 실제 `package.json`에 정의된 Storybook 정적 Build 명령도 실행합니다.

병합·통합 영향이 있는 변경에서는 `npm run build`도 확인합니다.
