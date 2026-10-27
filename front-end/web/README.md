# web

PC·모바일 브라우저와 Flutter 앱 내부 WebView에서 함께 실행되는 단일 Next.js 웹 애플리케이션의 소스입니다. 과거 `webview/`와 `website/`로 분리돼 있던 앱은 하나의 앱으로 통합됐으며, 통합 근거와 검증 기록은 [웹 애플리케이션 통합 작업 카드](../../docs/workflow/tasks/phase-0-web-integration.md)에 있습니다.

이 앱의 페이지·라우트·환경별 동작·검수 화면을 관리합니다. 공통 UI·스타일·유틸리티는 `../packages/ui/`의 단일 소스로 유지하며 `@lounge/ui/*`로 가져옵니다. Flutter Native 앱은 별도 위치에서 관리합니다.

## 공통 디자인 기준

공통 UI와 스타일은 `@lounge/ui/*`를 사용합니다. 공식 shadcn `base-nova`·neutral 의미 토큰이 기본값이며 `../`에서 `npm run tokens:sync`와 `npm run tokens:check`를 실행합니다.

## 실행

Node.js 22.12 이상에서 의존성 설치는 `front-end/`의 `npm ci`로 수행합니다. 잠금 파일은 `front-end/package-lock.json` 하나로 관리합니다. Next.js와 eslint-config-next는 Storybook App Router 호환성을 위해 16.2.12로 고정했습니다. workspace 루트의 Storybook 의존성도 같은 Next.js를 사용합니다.

이 앱 폴더에서는 `npm run dev`를 실행합니다. 앱은 http://127.0.0.1:3000, 검수 화면은 http://127.0.0.1:3000/preview 입니다. Storybook은 `front-end/`에서 `npm run storybook`으로 실행하며 http://127.0.0.1:6006 에서 공통 UI와 앱의 Story를 확인합니다.

## Phase 0에서 작성한 범위

- `/`: 앱 기본 진입 화면
- `/preview`: 개발 전용 공통 기반 검수 시작 화면
- `/preview/components`: Button, Input, Textarea, Checkbox, Badge, Card, Dialog, 하단 Sheet, React Hook Form·Zod 입력 확인
- `/preview/states`: 로딩, 빈 화면, 오류, 연결 끊김 표시와 재시도 버튼 미리보기
- `/preview/settings`: 현재 화면의 밝은 모드·어두운 모드 전환
- 공통 헤더·하단 탐색, 본문 바로가기, 404, 라우트 오류 경계, 로딩 화면
- viewport·Safe Area 기본 스타일, 실제 브라우저 online/offline 이벤트에 따른 안내
- Components·Features·Screens Story와 폼 행동 테스트 소스

이 화면의 메뉴와 폼은 기반 검수용이며 확정된 서비스 메뉴나 회원가입 정책이 아닙니다. 폼은 입력 형식만 확인하고 전송하지 않습니다. 화면 상태 선택은 지역 UI 미리보기이며 API Mock이 아닙니다. 인증·세션·토큰 저장, 실제 API, Native Bridge, 업무 데이터와 보호 라우트는 미구현입니다.

공통 스타일은 `../packages/ui/src/styles.css`에 있으며 공식 shadcn base-nova·neutral 기본값을 사용합니다. 원본은 `tokens/shadcn/neutral.tokens.json`이고 기존 Figma 팔레트와 별도 색상 변수는 삭제했습니다. 앱 최소 지원 범위는 `app_webview_guide.html` 4·5번 섹션과 `react_code_exports.html`의 프로젝트 기준을 따릅니다. 최신 CSS 표현은 기본 스타일로 대체했지만 iOS 15 WKWebView·Android System WebView 호환 결과는 미검증입니다.

## 추후 검증 명령

```bash
npm run typecheck
npm run lint
npm run test
npm run build-storybook --prefix ..
npm run build
```

공통 UI 이전 후 전체 타입·린트·폼 테스트 2개·공통 Storybook 정적 빌드·운영 빌드와 배포 결과물 단독 실행을 확인했습니다. 운영의 `/preview`는 404로 제외되며 홈페이지 preview의 모바일·데스크톱 배치를 확인했습니다. 실제 서비스 연동과 실기기는 검증하지 않았으며 이번 초안 완료 조건에서 실기기 검증은 제외합니다.

작업 범위와 재개 기록은 [공통 UI 이전 작업 카드](../../docs/workflow/tasks/common-ui-workspaces.md)와 [웹 애플리케이션 통합 작업 카드](../../docs/workflow/tasks/phase-0-web-integration.md)에 있습니다. 앱과 Storybook은 `docs/`를 제품 자산으로 복사하지 않습니다.

## 기본 영역

```text
web/
├── AGENTS.md
├── README.md
└── src/
    ├── app/
    ├── dev/
    ├── lib/
    └── test/
```
## 작업 시작과 검증

기술 구현 기준은 개발 가이드에서 확인하고, 이번 작업의 근거·허용 범위·착수 조건·결과 기록은 workflow에 연결합니다. skills는 요청에 맞는 확인·판단·구현·리뷰 방법을 제공하며, 필요한 항목만 선택합니다.

- 팀 공용 절차: [업무 지침 안내](../../docs/workflow/index.html)
- 구현 준비: [현재 기준 작업 가능한 내용](../../docs/workflow/available-work.html)
- AI 요청별 문서·스킬 선택: [AI 작업 진입](../../docs/workflow/AGENTS.md)
- 스킬 연결과 사용: [공용 스킬 안내](../../docs/workflow/skills/AGENTS.md)

## 린트 정책

[린트 적용 기준](LINT.md)에 검사 범위, 접근성 규칙과 수동 검수 경계를 기록했습니다. `npm run lint`는 오류를, `npm run lint:strict`는 오류와 경고를 실패 조건으로 사용합니다.

## 앱 전용 운영 빌드

`npm run build`는 앱 전용 운영 결과물을 생성하며, 배포 폴더는 `dist/runtime/`입니다. 개발 화면은 `/preview`에서만 사용하고 운영 라우트에서 제외합니다. [앱 빌드와 배포 범위](BUILD.md)를 따릅니다.
