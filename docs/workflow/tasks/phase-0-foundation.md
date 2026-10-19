# TASK-P0-FOUNDATION-001: Phase 0 실행 기반과 공통 UI 초안

## 범위와 착수 근거

| 항목 | 내용 |
| --- | --- |
| 종류 | Infrastructure / UI |
| Phase·플랫폼 | Phase 0 / App-WebView |
| 코드 위치 | 초기 앱: `front-end/webview/`. 후속 공통 UI: `front-end/packages/ui/`, 홈페이지: `front-end/website/` |
| 초기 작업 브랜치 | `phase-0-foundation` — 당시 이력이며 현재 체크아웃 상태를 뜻하지 않음 |
| 담당 | 이번 구현: Codex, 검수·합의 담당: TBD |
| 진행 상태 | Review — 초기 카드 상태 유지. 실행 기반·공통 UI 이전과 후속 검증은 아래 완료 카드에 기록. Phase 0 전체는 미완료 |
| Ready | Ready-UI — 사용자 요청에 따른 선행 구현·검수용 기본 화면 |
| API·Bridge | 이번 UI 초안에는 N/A. 실제 서비스 연동 계약은 TBD |
| 테스트 데이터 | None. 입력과 상태 선택은 지역 UI이며 API Mock·업무 fixture 없음 |
| 근거 | [선행 개발 범위](../available-work.html), [Phase 0 후보](../progress.md), [React Code Exports](../../guides/ui/react_code_exports.html), [앱 WebView 가이드](../../guides/platform/webview/app_webview_guide.html) |

사용자는 별도 브랜치에서 Phase 0을 먼저 만들어 코드와 구현 가능 범위를 확인하도록 요청했고, 이후 검증 실행은 생략하고 우선 코드 작성하도록 지시했습니다. 그 범위에서 기술 기반과 기본 UI를 작성합니다. 확정되지 않은 디자인·메뉴를 실제 서비스 사양으로 표시하지 않습니다.

## 현재 상태와 후속 완료 범위

**Phase 0 전체는 완료되지 않았습니다.** 초기 WebView 기반과 공통 UI 초안이 작성됐고, [공통 UI 이전과 website 실행 기반 카드](common-ui-workspaces.md)의 한정된 범위는 Done입니다. 이 카드의 Review와 후속 카드의 Done, Phase 0 전체 완료는 별도로 판단합니다.

- 현재 공통 UI·스타일·Storybook·개발 예제는 `front-end/packages/ui/`에서 관리하고 WebView와 홈페이지가 사용합니다. 설치·공용 잠금 파일은 `front-end/` 기준입니다.
- 검수 화면은 `/preview`와 그 하위 개발 전용 경로에 있습니다. 초기 `/components`·`/states`·`/settings` 경로 설명은 아래 구현 이력이며 현재 서비스 라우트가 아닙니다. 운영 홈은 준비 안내 화면입니다.
- 후속 카드에는 세 workspace 타입·린트, 공통 폼 테스트 2개, Storybook·두 앱 운영 빌드·패키징·일부 브라우저 확인의 통과 기록이 있습니다. 이번 문서 갱신에서 앱 검사를 다시 실행한 결과는 아닙니다.
- 실제 서비스 셸·메뉴·설정·승인 디자인, 보호 라우트·인증 상태·API client·Query Provider, 업무 오류·재시도·캐시·복구와 Native 연동은 남아 있습니다. 실기기 키보드·회전·Safe Area 등은 미검증입니다.

## 적용 docs와 판단 근거

- [프로젝트 핵심 정보](../../ai/project.md): WebView·홈페이지·공통 UI의 위치와 책임을 현재 소스와 비교했습니다.
- [UI 기준](../../ai/ui.md)·[Storybook 기준](../../ai/storybook.md): 개발 예제·공통 UI 초안과 실제 서비스 화면·승인 디자인을 구분합니다.
- [품질 기준](../../ai/quality.md)·[빌드 경계 기준](../../guides/architecture/build-boundary.md): 후속 검증 기록의 범위와 운영·검수 경계를 구분하고, 과거 Pass를 이번 실행이나 서비스·실기기 검증으로 확대하지 않습니다.
- 근거 기록: [후속 완료 카드](common-ui-workspaces.md). 현재 위치·명령은 [workspace 설정](../../../front-end/package.json), 운영 진입 화면은 [WebView 홈 소스](../../../front-end/webview/src/app/page.tsx)와 대조했습니다.

## 초기 구현 이력

아래는 최초 작성 당시의 범위와 검증 상태입니다. 현재 위치와 후속 검증 결과는 위 요약과 아래 검증 표를 우선합니다.

- Next.js 16 App Router, React 19, TypeScript 6, Tailwind CSS 4 앱 구성과 잠금 파일.
- shadcn `base-nova`에서 생성한 기본 컴포넌트와 프로젝트용 수정: Button, Input, Textarea, Checkbox, Label, Card, Badge, Skeleton, Dialog, Sheet.
- 기존 `cn` 유틸리티 경로를 공통으로 사용. 자동 생성된 컨테이너 쿼리·`:has()`·`field-sizing`·색상 혼합·최신 변환 의존 표현을 기본 표현으로 축소.
- 공통 헤더·하단 검수 탐색·본문 바로가기, viewport·Safe Area 스타일, 404·error·loading 라우트.
- `/`, `/components`, `/states`, `/settings` 검수용 화면. 이 주소와 메뉴는 실제 서비스 IA 라우트가 아님.
- React Hook Form·Zod 폼: 필수 입력·오류 연결·첫 오류 포커스·초기화. 확인 결과는 로컬에서만 표시.
- Base UI Dialog·하단 Sheet를 통한 확인·취소·닫기. 포커스와 Escape 처리는 라이브러리 기반으로 작성했으며 실제 동작은 미검증.
- 브라우저 연결 상태 안내, 로딩·빈 화면·오류·연결 끊김 미리보기, 현재 페이지의 색상 모드 전환.
- Components·Features·Screens Story, 모바일 390·320 및 데스크톱 viewport 설정, 폼 행동 테스트 소스.

## Phase 0 후보와의 관계

| 후보 | 현재까지 확인된 기반·초안 | 남은 범위 |
| --- | --- | --- |
| CMM 공통 셸 | 검수용 헤더·하단 탐색 구조 | 서비스 GNB·메뉴·회원별 노출·배너 정책 |
| ETC 에러·로딩 | 404, 라우트 오류 경계, Skeleton·공통 상태 | 실제 오류 계약·운영 오류 처리 |
| STU 설정 | 색상 모드 미리보기 | 실제 설정 정책·Native 연동·저장 |
| INFRA-01 | App Router 기본 라우트 | 보호 라우트·인증 계약 |
| INFRA-02 | viewport·Safe Area·가변 화면 높이 기본 스타일 | 실기기 키보드·회전·Native 컨테이너 확인 |
| INFRA-03 | 공통 패키지의 기본 UI·Dialog·Sheet와 Storybook, 일부 브라우저 확인 | 승인 디자인·토큰 적용과 대상 기기 검수 |
| INFRA-04 | Loading·Empty·Error 표현 | 실제 데이터 상태와 오류 경계 통합 |
| INFRA-05 | 미착수 | 인증 책임이 정해진 후 auth store 판단 |
| INFRA-06 | 미착수 | API 계약·실제 조회 책임에 맞춘 client·Query 도입 |
| INFRA-07 | 공통 폼 예제와 행동 테스트 2개 통과 기록 | 실제 업무별 입력 규칙·화면 적용과 검증 |
| INFRA-08 | 인라인 오류·Dialog 기본 구조 | 실제 오류 분기·Toast 사용처 |
| INFRA-09 | 브라우저 연결 안내·오프라인 상태 표현 | 요청 재시도·캐시·복구 정책 |

일부 기반의 실행·검증 기록은 후속 카드에 있지만 위 후보의 서비스 범위와 완료 조건은 모두 충족되지 않았습니다. 후보 전체를 완료로 표시하지 않습니다. INFRA-05·06은 계약과 실제 사용처를 확인한 뒤 필요한 구현 범위를 정합니다.

## 결정과 미확정 항목

- 이번 UI는 기본 neutral 검수 스타일이며 브랜드 디자인은 Candidate. Tokens Studio 원본은 변경하지 않음.
- Tailwind 4 유지, Android SDK 24 이상 대상 System WebView·iOS 15 이상 WKWebView의 실제 사용 기능 지원 기준을 유지. 프레임워크의 공식 완전 호환 버전으로 앱 최소 OS를 올리지 않음.
- 회원·주문·결제·Native 성공을 모방하는 API나 상태 모델은 작성하지 않음. 사용자 허용 Mock의 업무 범위는 후속 작업에서 정함.
- 초기 작성 때는 사용자 요청으로 실행 검증을 생략했습니다. 이후 타입·린트·테스트·빌드와 일부 브라우저 확인이 수행됐으며 아래에 근거를 연결합니다. 실제 서비스 연동·실기기는 여전히 미검증입니다.
- 패키지 설치 시 개발 도구 계열 전이 의존성 취약점 경고가 있었음. 업데이트와 실제 영향 검토는 검증 재개 시 필요.

## 검증 계획과 결과

아래 Pass는 [후속 카드의 검증 결과](common-ui-workspaces.md#검증-결과)를 인용한 기록입니다. 이번 상태 갱신에서는 문서·현재 소스·설정만 대조했으며 앱 명령은 재실행하지 않았습니다. 명령은 `front-end/` 기준입니다.

| 검사 | 현재 명령·확인 범위 | 기록된 결과와 한계 |
| --- | --- | --- |
| 타입 | `npm run typecheck` | Pass 기록 — 세 workspace |
| 린트 | `npm run lint` | Pass 기록 — 세 workspace |
| 폼 행동 테스트 | `npm run test` | Pass 기록 — 공통 UI 폼 2개. 앱 화면·업무·Native 테스트 완료를 뜻하지 않음 |
| Storybook | `npm run build-storybook` | Pass 기록 — 공통 Storybook 정적 빌드. 검수 번들 경고는 후속 카드 참조 |
| 앱 빌드 | `npm run build:webview`, `npm run build:website` | Pass 기록 — 두 앱 운영 빌드·패키징·단독 실행·운영 제외 검사 |
| 브라우저 | Storybook과 홈페이지 preview | Pass 기록 — 지정 Story, 모바일 390·데스크톱, 다이얼로그 열기·Escape 닫기. 전체 화면·접근성·최소 지원 환경 검증은 아님 |
| 실제 서비스 연동 | 인증·API·Bridge·업무 흐름 | Not Run — 미구현·미정 계약을 포함하며 후속 카드의 초안 범위에서는 제외 |
| 실기기 | iOS WKWebView·Android System WebView, 키보드·회전·Safe Area·큰 글자 | Not Run — 완료 근거 없음 |
| 초기 카드의 최종 리뷰 | 허용 범위·완료 조건·적용 기준과 결과 대조 | Not Run — 최종 리뷰 완료 근거 없음. Review 유지 |

## 재개

1. 이 초기 카드와 [후속 완료 카드](common-ui-workspaces.md)를 함께 보고 초기 카드의 남은 리뷰·완료 조건을 정리합니다. 후속 검증이 기록됐다는 이유로 Phase 0 전체를 Done으로 바꾸지 않습니다.
2. [Phase 0 진행 현황](../progress.md#phase-0-선행-구현-작업)에서 남은 목표를 선택하고 담당·디자인·정책·계약 근거와 독립 착수 가능 범위를 확인해 필요한 후속 카드를 작성합니다. 미정 계약을 추측해 auth store·API client·Query Provider를 미리 만들지 않습니다.
3. 검수는 현재 `/preview`·Storybook을 기준으로 필요한 화면·상태를 선택합니다. 앱 소스나 설정이 달라졌을 때 실제 변경에 필요한 타입·린트·테스트·빌드를 실행하고 최신 결과를 해당 카드에 남깁니다.
4. 실제 서비스·Native 통합 단계에는 지원 WebView의 키보드·회전·안전 영역·큰 글자와 계약 흐름의 검증 범위·담당을 정하고, 확인하지 않은 항목을 완료로 기록하지 않습니다.

초기 제공 당시에는 커밋·푸시·병합·배포를 수행하지 않았습니다. 이 기록은 현재 Git·게시 상태를 보증하지 않습니다. 이번 갱신은 상태 문서만 수정합니다.

## 후속 작업 이전의 상세 이력

이하 Not Run·미실행 표기는 각 작업 당시의 기록입니다. 현재까지의 검증 요약은 위 표와 후속 카드를 참고합니다.

## Storybook 오류 수정 기록

- 재현: Button 기본 Story에서도 `Cannot read properties of undefined (reading 'data')` 발생.
- 원인: Next.js 16.4의 `useRouter`는 LayoutRouterContext의 `parentRenderTree.data`를 읽지만 Storybook 10.6.1의 가상 App Router에는 해당 필드가 없음.
- 수정: 프로젝트의 Next.js 16 기준을 유지하며 Next.js·eslint-config-next를 16.2.12로 고정. 패키지 잠금 파일 갱신.
- 확인: Storybook을 재시작한 뒤 Button 기본 Story와 Screens/Foundation의 Components 화면이 오류 없이 표시됨. 전체 테스트·빌드·실기기 검증은 실행하지 않음.

## 문서 기준 린트 반영 기록

- 사용자 요청으로 Lint 가이드와 접근성 가이드를 읽고 ESLint Flat Config에 반영.
- 앱 사용처에서 ARIA 속성·값·role, role 필수 속성, 대체 텍스트, Label의 htmlFor, 클릭 키보드 지원, 포커스·tabIndex·HTML 언어를 검사.
- Link·Button·Label·Input·Textarea를 HTML 의미로 매핑. Story·테스트·설정·UI primitive에는 Next.js 기본 규칙을 유지.
- Hooks 호출 규칙은 오류, 의존성은 경고. 불필요한 disable 지시문은 오류.
- `lint`는 오류만 실패 처리하고, `lint:strict`는 경고까지 실패 처리. CI는 추가하지 않음.
- 적용 전 결과: PostCSS 익명 기본 export 경고 1개. 이름이 있는 설정 변수로 수정해 해소.
- 적용 후 `npm run lint`: 오류 0개, 경고 0개. 명령 실행 약 3.5초.
- 파일을 만들지 않는 lintText 예제로 ARIA·Label·키보드·대체 텍스트 오류 검출과 적용 범위 분리를 확인.
- 색상 대비·실제 포커스·낭독·터치 크기·WebView는 수동 확인 대상. no-floating-promises는 실제 비동기 연동과 실행 영향 확인 후 도입 후보로 유지.
- 타입·테스트·Storybook 정적 빌드·앱 빌드는 이번 린트 설정 작업에서 실행하지 않음.

## 앱 전용 운영 빌드 기록

- 사용자 요청에 따라 검수 화면을 `src/dev/`와 `/preview`의 개발 전용 라우트로 이동. Story는 실제 검수용 컴포넌트 가까이에 유지.
- 운영 타입 설정·CSS 검색 범위·파일 추적·배포 패키징에서 개발 자료를 제외. 앱 코드의 개발용 import 경계를 린트로 검사.
- 운영 빌드 및 운영 타입 검사 통과. 실제 앱 라우트는 `/`와 기본 404이며 검수 라우트는 생성되지 않음.
- `dist/runtime/`를 배포 대상으로 생성. 개발 문서·AGENTS·Story·테스트·Storybook·Vitest·Testing Library 패키지 파일 미검출.
- 현재 실제 서비스 기능이 없어 앱 진입 화면은 준비 안내만 제공. 개발 검수 화면과 Storybook은 계속 사용 가능.
- 전체 테스트·실기기·서비스 연동 검증은 미실행.
