# front-end

Lounge 프로젝트의 모든 웹 Front-end를 관리하는 폴더입니다.

- `web/` — PC·모바일 브라우저와 Flutter 앱 내부 WebView에서 함께 실행되는 단일 Next.js 웹 애플리케이션
- `packages/ui/` — 웹 애플리케이션이 사용하는 공통 스타일·토큰·기본 UI·Storybook
- PO(파트너오피스), OO(현장운영시스템) — 구체적인 영역 구성·담당은 IA와 작업 카드에서 확인

Front-end 애플리케이션의 package, 설정과 source는 각 폴더에서 관리합니다. `web/`에는 Next.js 실행 기반과 개발용 preview가 있습니다. 공통 UI는 `packages/ui/`의 독립 패키지로 유지하며, 의존성·잠금 파일은 이 폴더의 npm workspace에서 함께 관리합니다. Flutter Native 앱은 별도 위치에서 관리합니다.

과거 `webview/`와 `website/`로 분리돼 있던 두 웹 애플리케이션은 하나의 `web/` 앱으로 통합됐습니다. 화면 너비에 따른 반응형 배치와 앱 실행 환경 판별은 별개의 기준이며, 환경 판별과 Native 기능 사용 기준은 [프로젝트 핵심 정보](../docs/ai/project.md)와 [통합 작업 카드](../docs/workflow/tasks/phase-0-web-integration.md)를 확인합니다.

웹 애플리케이션과 UI 패키지는 동일한 기술 스택과 하나의 디자인 시스템을 사용하고, 공통 스타일·토큰·기본 UI를 `packages/ui/`의 단일 소스로 공유합니다. 공통 UI Storybook도 이 패키지를 기준으로 관리합니다. 앱은 `@lounge/ui/*` 공개 export로 같은 컴포넌트와 스타일을 사용합니다. 페이지·라우트·레이아웃·환경별 동작·Native 연동은 `web/`에서 관리합니다. [공통 기반 기준](../docs/ai/project.md#웹-애플리케이션과-ui-패키지의-공통-기반)에서 범위를 확인합니다.

이번 FO 공통 구현 초안의 완료 조건에서는 실기기 검증을 제외합니다.
## 디자인 기준

공통 UI는 shadcn/ui `base-nova`, 색상은 공식 neutral 기본 테마를 사용합니다. 디자인팀도 같은 컴포넌트·variant·size·의미 토큰명을 사용합니다. 토큰 원본은 `../tokens/shadcn/neutral.tokens.json`이며 `npm run tokens:sync`로 생성하고 `npm run tokens:check`로 검사합니다.

## 실행

Node.js 22.12 이상에서 이 폴더를 기준으로 의존성을 설치합니다.

```bash
npm ci
npm run dev
npm run storybook
```

각 개발 서버는 별도 터미널에서 실행합니다. 웹 앱은 http://127.0.0.1:3000, 개발용 preview는 http://127.0.0.1:3000/preview, 공통 Storybook은 http://127.0.0.1:6006 입니다.

```bash
npm run typecheck
npm run lint
npm run test
npm run build-storybook
npm run build
```

`web/` 폴더에서도 `npm run dev`, `npm run build`, `npm run start`를 사용할 수 있습니다. 배포 대상은 `web/dist/runtime/`이며 개발용 preview·Storybook은 포함하지 않습니다.

## 작업 시작과 검증

기술 구현 기준은 개발 가이드에서 확인하고, 이번 작업의 근거·허용 범위·착수 조건·결과 기록은 workflow에 연결합니다. skills는 요청에 맞는 확인·판단·구현·리뷰 방법을 제공하며, 필요한 항목만 선택합니다.

- 팀 공용 절차: [업무 지침 안내](../docs/workflow/index.html)
- 구현 준비: [현재 기준 작업 가능한 내용](../docs/workflow/available-work.html)
- AI 요청별 문서·스킬 선택: [AI 작업 진입](../docs/workflow/AGENTS.md)
- 스킬 연결과 사용: [공용 스킬 안내](../docs/workflow/skills/AGENTS.md)
