# Lounge Front-end 참고 소스

이 폴더는 `lounge-docs`의 상세 가이드를 **실제 구현에 옮길 수 있는 AI 지침 + 파일 단위 예시**로 정리한 참고 소스입니다. 실제 애플리케이션은 `apps/app-webview`에 추후 생성 예정이며, 이 폴더는 그 전에 구현 기준과 참고 코드를 선행 작성해 놓는 역할을 합니다.

> 기준 원본은 형제 폴더 `lounge-docs`(상위 Front-end 가이드)입니다. 두 내용이 충돌하면 `lounge-docs`를 따릅니다.

## 폴더 구조

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
    │   ├── quality.md
    │   ├── common-source.md
    │   └── local-llm.md
    └── common-source/ # 파일 단위 예시 코드와 적용 절차
        ├── index.md
        ├── tailwind.md
        ├── react.md
        ├── typescript.md
        ├── test.md
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

처음부터 모든 문서를 읽지 않고, 현재 작업과 직접 관련된 `docs/ai/` 요약만 읽고, 세부 기준이 필요할 때 `docs/common-source/`나 `lounge-docs`의 상세 HTML 가이드로 이동합니다.

## 작업별 문서

### docs/ai/ — 작업별 핵심 요약

| 필요한 작업                    | 문서               | 내용                                                      |
| ------------------------------ | ------------------ | --------------------------------------------------------- |
| 프로젝트 구조, 기능, 상태 관리 | `project.md`       | 앱 범위, 기술 스택, 디렉터리 구조와 상태 배치 원칙        |
| UI, 컴포넌트, 스타일 구현      | `ui.md`            | React·TypeScript 출력, Tailwind CSS, 재사용과 접근성 기준 |
| 디자인 토큰, 스타일 값 연결    | `design-tokens.md` | 의미 기반 토큰, shadcn/ui, Figma Variables, Tokens Studio |
| Figma 화면을 앱 코드로 구현    | `figma.md`         | 구현 전 조사, 기존 코드 매핑, React 구현과 품질 확인      |
| TypeScript, Lint, Test, Build  | `quality.md`       | 검사 도구 역할, 테스트 범위와 기본 검증 명령              |
| 공통 설정·컴포넌트·유틸리티    | `common-source.md` | 공통 소스 상세 가이드 진입점과 적용 기준                  |
| Ollama, Continue, 로컬 LLM     | `local-llm.md`     | 로컬 모델에 맡길 범위, 검토 방식, 외부 모델 전환 기준     |

> UI 작업은 `ui.md` + `design-tokens.md`, Figma 구현은 `figma.md` + `ui.md` + `design-tokens.md`를 함께 읽습니다.

### docs/common-source/ — 파일 단위 구현 예시

| 필요한 작업                     | 문서            | 확인할 파일과 코드                                                  |
| ------------------------------- | --------------- | ------------------------------------------------------------------- |
| 문서 범위와 적용 순서           | `index.md`      | 문서별 역할, 권장 파일 구조, 적용 순서, 완료 기준                   |
| Tailwind CSS + shadcn/ui 설정   | `tailwind.md`   | `globals.css`, `components.json`, `postcss.config.mjs`, `cn`        |
| React Provider, 폼 동작         | `react.md`      | `get-query-client.ts`, `providers.tsx`, `SubmitButton`, `FormField` |
| TypeScript 설정, 외부 입력 검증 | `typescript.md` | compiler 설정, type guard, 오류 변환, union 분기 검사               |
| 테스트 환경 구성                | `test.md`       | Vitest, Testing Library, `renderWithProviders`                      |
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

병합·통합 영향이 있는 변경에서는 `npm run build`도 확인합니다.
