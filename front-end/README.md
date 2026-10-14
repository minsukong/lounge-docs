# front-end

Lounge 프로젝트의 모든 웹 Front-end를 관리하는 폴더입니다.

- `webview/` — Flutter 하이브리드 앱에서 WebView로 실행되는 웹 화면의 실제 소스
- `website/` — FO 웹(PC WEB·반응형 홈페이지). [기존 홈페이지](https://theloungemembers.com/renew/)를 참고
- `packages/ui/` — WebView와 website가 함께 사용하는 공통 스타일·토큰·기본 UI·Storybook
- PO(파트너오피스), OO(현장운영시스템) — 구체적인 영역 구성·담당은 IA와 작업 카드에서 확인

Front-end 애플리케이션의 package, 설정과 source는 각 앱 폴더에서 관리합니다. `webview/`와 `website/`에는 Next.js 실행 기반과 개발용 preview가 있습니다. 공통 UI는 `packages/ui/`로 이전했습니다. 의존성·잠금 파일은 이 폴더의 npm workspace에서 함께 관리합니다. Flutter Native 앱은 별도 위치에서 관리합니다.

WebView와 website는 동일한 기술 스택과 하나의 디자인 시스템을 사용하고, 공통 스타일·토큰·기본 UI를 `packages/ui/`의 단일 소스로 공유합니다. 공통 UI Storybook도 이 패키지를 기준으로 관리합니다. 두 앱은 `@lounge/ui/*` 공개 export로 같은 컴포넌트와 스타일을 사용합니다. 페이지·라우트·앱별 레이아웃·Native 연동은 각 앱에서 관리합니다. [공통 기반 기준](../docs/ai/project.md#webview와-website의-공통-기반)에서 범위를 확인합니다.

이번 FO 공통 구현 초안의 완료 조건에서는 실기기 검증을 제외합니다.
## 실행

Node.js 22.12 이상에서 이 폴더를 기준으로 의존성을 설치합니다.

```bash
npm ci
npm run dev:webview
npm run dev:website
npm run storybook
```

각 개발 서버는 별도 터미널에서 실행합니다. WebView preview는 http://127.0.0.1:3000/preview, 홈페이지 preview는 http://127.0.0.1:3001/preview, 공통 Storybook은 http://127.0.0.1:6006 입니다.

```bash
npm run typecheck
npm run lint
npm run test
npm run build-storybook
npm run build:webview
npm run build:website
```

앱별 폴더에서도 `npm run dev`, `npm run build`, `npm run start`를 사용할 수 있습니다. 배포 대상은 각각 `webview/dist/runtime/`, `website/dist/runtime/`이며 개발용 preview·Storybook은 포함하지 않습니다.

## 작업 시작과 검증

기술 구현 기준은 개발 가이드에서 확인하고, 이번 작업의 근거·허용 범위·착수 조건·결과 기록은 workflow에 연결합니다. skills는 요청에 맞는 확인·판단·구현·리뷰 방법을 제공하며, 필요한 항목만 선택합니다.

- 팀 공용 절차: [업무 지침 안내](../docs/workflow/index.html)
- 구현 준비: [현재 기준 작업 가능한 내용](../docs/workflow/available-work.html)
- AI 요청별 문서·스킬 선택: [AI 작업 진입](../docs/workflow/AGENTS.md)
- 스킬 연결과 사용: [공용 스킬 안내](../docs/workflow/skills/AGENTS.md)
