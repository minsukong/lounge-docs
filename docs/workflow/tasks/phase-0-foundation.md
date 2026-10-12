# TASK-P0-FOUNDATION-001: Phase 0 실행 기반과 공통 UI 초안

## 범위와 착수 근거

| 항목 | 내용 |
| --- | --- |
| 종류 | Infrastructure / UI |
| Phase·플랫폼 | Phase 0 / App-WebView |
| 코드 위치 | `front-end/webview/` |
| 브랜치 | `phase-0-foundation` |
| 담당 | 이번 구현: Codex, 검수·합의 담당: TBD |
| 진행 상태 | Review — 코드 초안 작성, Storybook 일부 표시 확인, 전체 검증 미실행 |
| Ready | Ready-UI — 사용자 요청에 따른 선행 구현·검수용 기본 화면 |
| API·Bridge | 이번 UI 초안에는 N/A. 실제 서비스 연동 계약은 TBD |
| 테스트 데이터 | None. 입력과 상태 선택은 지역 UI이며 API Mock·업무 fixture 없음 |
| 근거 | [선행 개발 범위](../available-work.html), [Phase 0 후보](../progress.md), [React Code Exports](../../guides/ui/react_code_exports.html), [앱 WebView 가이드](../../guides/platform/webview/app_webview_guide.html) |

사용자는 별도 브랜치에서 Phase 0을 먼저 만들어 코드와 구현 가능 범위를 확인하도록 요청했고, 이후 검증 실행은 생략하고 우선 코드 작성하도록 지시했습니다. 그 범위에서 기술 기반과 기본 UI를 작성합니다. 확정되지 않은 디자인·메뉴를 실제 서비스 사양으로 표시하지 않습니다.

## 구현한 코드

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

| 후보 | 이번 작성 범위 | 남은 범위 |
| --- | --- | --- |
| CMM 공통 셸 | 검수용 헤더·하단 탐색 구조 | 서비스 GNB·메뉴·회원별 노출·배너 정책 |
| ETC 에러·로딩 | 404, 라우트 오류 경계, Skeleton·공통 상태 | 실제 오류 계약·운영 오류 처리 |
| STU 설정 | 색상 모드 미리보기 | 실제 설정 정책·Native 연동·저장 |
| INFRA-01 | App Router 기본 라우트 | 보호 라우트·인증 계약 |
| INFRA-02 | viewport·Safe Area·가변 화면 높이 기본 스타일 | 실기기 키보드·회전·Native 컨테이너 확인 |
| INFRA-03 | 기본 UI·Dialog·Sheet 초안 | 실제 디자인 토큰·기기 검수 |
| INFRA-04 | Loading·Empty·Error 표현 | 실제 데이터 상태와 오류 경계 통합 |
| INFRA-05 | 미착수 | 인증 책임이 정해진 후 auth store 판단 |
| INFRA-06 | 미착수 | API 계약·실제 조회 책임에 맞춘 client·Query 도입 |
| INFRA-07 | 공통 폼 사용 예와 입력 확인 | 실제 업무별 입력 규칙 |
| INFRA-08 | 인라인 오류·Dialog 기본 구조 | 실제 오류 분기·Toast 사용처 |
| INFRA-09 | 브라우저 연결 안내·오프라인 상태 표현 | 요청 재시도·캐시·복구 정책 |

이 후보들은 실제 실행 결과를 확인하지 않았으므로 완료로 표시하지 않습니다.

## 결정과 미확정 항목

- 이번 UI는 기본 neutral 검수 스타일이며 브랜드 디자인은 Candidate. Tokens Studio 원본은 변경하지 않음.
- Tailwind 4 유지, Android SDK 24 이상 대상 System WebView·iOS 15 이상 WKWebView의 실제 사용 기능 지원 기준을 유지. 프레임워크의 공식 완전 호환 버전으로 앱 최소 OS를 올리지 않음.
- 회원·주문·결제·Native 성공을 모방하는 API나 상태 모델은 작성하지 않음. 사용자 허용 Mock의 업무 범위는 후속 작업에서 정함.
- 타입·린트·테스트·빌드·브라우저 및 실기기 결과는 이번 요청에 따라 Not Run.
- 패키지 설치 시 개발 도구 계열 전이 의존성 취약점 경고가 있었음. 업데이트와 실제 영향 검토는 검증 재개 시 필요.

## 검증 계획과 결과

| 검사 | 실행 명령·절차 | 결과 |
| --- | --- | --- |
| 타입 | `npm run typecheck` | Not Run — 사용자 요청 |
| 린트 | `npm run lint` | Pass — 문서 기준 반영 후 오류·경고 0개 |
| 폼 행동 테스트 | `npm run test` | Not Run — 테스트 소스만 작성 |
| Storybook | `npm run build-storybook` | Not Run — 설정·Story만 작성 |
| 앱 빌드 | `npm run build` | Pass — 개발 화면 제외 및 실행 파일 패키징 확인 |
| 브라우저·실기기 | 모바일·데스크톱, iOS WKWebView·Android System WebView | Not Run — 사용자 요청 |
| diff 검사·리뷰 | 타입·런타임·문서 기준·접근성·변경 범위 | Not Run — 사용자 요청 |

## 재개

1. `front-end/webview/`에서 설치 후 typecheck → lint → test → Storybook build → production build를 실행하고 실제 오류부터 수정.
2. `/components`에서 입력 오류·초기화·다이얼로그 포커스·Escape·하단 시트·모바일 키보드를 확인.
3. 최소 지원 실제 WebView에서 생성 CSS·핵심 동작·화면 회전·안전 영역·큰 글자를 확인.
4. 실제 디자인을 연결하고 서비스 셸과 API·인증·Native 항목은 각각 범위와 가정을 정해 후속 카드로 진행.

코드는 작업 브랜치의 미커밋 변경으로 제공하며 이번 작업에서 커밋·푸시·병합·배포하지 않습니다.

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
