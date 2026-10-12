# webview

Flutter 앱에서 WebView로 실행되는 웹 화면의 소스를 두는 폴더입니다.

이 폴더의 package, 설정과 source를 여기서 관리합니다. `phase-0-foundation` 브랜치에서 Next.js 앱과 공통 기반 검수 화면을 작성했습니다. 초안 작성 시 전체 검증은 사용자 요청에 따라 생략했습니다. 이후 Storybook 라우터 오류를 수정하고 Button 기본 Story와 Foundation의 공통 UI 화면 표시를 확인했습니다. 린트와 앱 전용 운영 빌드·운영 타입 검사는 통과했습니다. 전체 typecheck·테스트·Storybook 정적 빌드·실기기 검증은 미실행입니다. Flutter Native 앱은 별도 위치에서 관리합니다.

## 실행

Node.js 22.12 이상에서 이 폴더를 열고 실행합니다. 의존성 버전은 `package-lock.json`에 고정합니다. Next.js 16.4의 라우터 구조와 Storybook 10.6.1의 가상 라우터가 맞지 않아 Next.js와 eslint-config-next를 16.2.12로 고정했습니다.

```bash
npm ci
npm run dev
```

앱 주소는 `http://127.0.0.1:3000`입니다. Storybook은 별도 터미널에서 `npm run storybook`으로 열며 주소는 `http://127.0.0.1:6006`입니다.

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

스타일은 shadcn `base-nova`에서 출발한 임시 neutral 기본값입니다. `tokens/tokens.json`은 수정하지 않았으며 Tokens Studio와 실제 화면의 승인된 연결은 이후 적용합니다. 앱 최소 지원 범위는 `app_webview_guide.html` 4·5번 섹션과 `react_code_exports.html`의 프로젝트 기준을 따릅니다. 최신 CSS 표현은 기본 스타일로 대체했지만 iOS 15 WKWebView·Android System WebView 호환 결과는 미검증입니다.

## 추후 검증 명령

```bash
npm run typecheck
npm run lint
npm run test
npm run build-storybook
npm run build
```

위 명령 중 린트와 운영 빌드는 통과했습니다. 운영 빌드의 타입 검사도 통과했습니다. 전체 typecheck·테스트·Storybook 정적 빌드·실기기 검증은 미실행입니다. 설치 중 개발 도구의 전이 의존성 취약점 경고가 있었으며, 검증 재개 시 업데이트 범위도 확인해야 합니다. 실제 기기의 키보드·Safe Area·포커스·화면 복귀·글자 확대는 별도 검증이 필요합니다.

작업 범위와 재개 기록은 [Phase 0 작업 카드](../../docs/workflow/tasks/phase-0-foundation.md)에 있습니다. 앱과 Storybook은 `docs/`를 제품 자산으로 복사하지 않습니다.

## 기본 영역

```text
webview/
├── AGENTS.md
├── README.md
├── .storybook/
└── src/
    ├── app/
    ├── components/ui/
    ├── features/
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
