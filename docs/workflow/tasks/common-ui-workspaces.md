# TASK-P0-SHARED-UI-001: 공통 UI 이전과 website 실행 기반

## 범위와 착수 근거

- 상태: Done — 요청한 공통 소스 이전·website 기반·preview 범위 완료. 실제 서비스 기능·연동·출시와 구분합니다.
- Ready: Ready-UI. 공통 UI를 단일 관리하고 두 앱이 사용하도록 이전하며 website에 Next.js 기반과 간단한 개발용 preview를 구성하라는 요청에 따릅니다.
- 위치: `front-end/packages/ui/`, `front-end/webview/`, `front-end/website/`, `front-end/scripts/`.
- API·인증·Native 계약: 이번 범위에는 N/A. 정책·업무 데이터·네트워크 Mock은 추가하지 않습니다.

## 구현과 구조

- npm workspace·공용 잠금 파일과 `@lounge/ui` 공개 export를 구성했습니다. 공통 UI 11종·스타일·유틸리티·공통 Story를 WebView에서 이전했습니다. 기본 색상은 기존 neutral 초안이며 생성 토큰은 변경하지 않았습니다.
- WebView의 개발 화면과 폼 상태는 기존 앱에 유지하고 공통 import만 변경했습니다. website에는 App Router·메타데이터·오류/로딩·운영 진입 안내와 개발 전용 preview를 구성했습니다.
- website preview는 입력·버튼·다이얼로그·Sheet·화면 상태·색상 모드를 조합합니다. 상태는 해당 개발 화면의 지역 UI이며 실제 업무 성공이나 API 응답을 모방하지 않습니다. 화면 구현은 200줄 미만으로 단일 검수 책임을 유지합니다.
- 공통 Storybook에서 UI와 두 앱의 Feature·Screen Story를 수집합니다. Next.js 16.2.12를 앱과 workspace 검수 도구에 동일하게 고정해 App Router 호환 오류를 해결했습니다.
- 두 앱의 tracing·Turbopack 루트는 `front-end/`입니다. 공용 패키징 스크립트가 앱별 standalone 실행 경로와 정적 자산을 보존하며 `dist/runtime/server.js`를 진입점으로 제공합니다. 개발 라우트·Story·테스트·문서는 운영에서 제외합니다.

## 검증 결과

| 검사 | 결과 |
| --- | --- |
| 세 workspace 타입·린트 | Pass |
| 공통 패키지 폼 행동 테스트 (`@lounge/ui`) | Pass — 2개 |
| 공통 Storybook 정적 빌드 | Pass — Vite의 use client 처리·청크 크기 경고는 검수 번들에 남음 |
| Storybook 브라우저 표시 | Pass — WebView Components·website Desktop Story 확인 |
| 두 앱 운영 빌드·패키징 | Pass — `/`와 기본 404만 생성 |
| 배포 결과물 단독 실행 | Pass — 각 앱 홈·CSS 200, `/preview` 404 |
| 운영 파일 제외 검사 | Pass — 문서·Story·테스트·Storybook·검수 도구 파일 미검출 |
| 홈페이지 preview | Pass — 모바일 390·데스크톱 표시, 버튼·다이얼로그 열기·Escape 닫기 |
| 실제 서비스 연동·실기기 | N/A — 이번 초안 범위에서 제외 |

## 실행과 후속 범위

- 설치는 `front-end/`에서 `npm ci`. 개발 실행은 `npm run dev:webview`, `npm run dev:website`, `npm run storybook`을 각 터미널에서 수행합니다.
- 공통 컴포넌트와 개발 예제의 행동 테스트는 `packages/ui`에서 실행하고, 루트 `npm run test`는 테스트가 정의된 workspace만 실행합니다. 앱 화면과 Native 연동 테스트는 각 앱에 둡니다. `next-env.d.ts`는 Next.js 생성물로 Git에서 제외하며, 타입 검사 전에 `next typegen`으로 생성합니다.
- 실제 회원·주문·결제·Native 기능과 승인 디자인 적용은 별도 작업입니다. commit·push·배포는 수행하지 않았습니다.

## preview 본문 정리

- 두 앱의 `/preview`에서 같은 개발용 Foundation 본문을 사용합니다. 공통 폼·오버레이·상태 예제는 `packages/ui/src/dev/`로 이전했고 WebView의 전용 화면은 해당 예제를 가져오는 진입점으로 유지합니다.
- 헤더와 하단 탐색은 WebView, 홈페이지의 헤더·푸터는 website에 유지합니다. 헤더 다크모드와 WebView 설정 화면은 같은 문서의 테마 상태를 사용하며 Portal에도 적용합니다.
- 공통 개발 예제의 운영 import를 린트로 금지하고 파일 추적·패키징에서 제외했습니다. 타입·린트·폼 테스트 2개·두 앱 운영 빌드·Storybook 빌드와 브라우저 동작을 확인했습니다.
