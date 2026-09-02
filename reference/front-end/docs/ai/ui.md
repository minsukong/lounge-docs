# UI 구현 핵심 규칙

> 기준 원본: `lounge-docs/frontend_guide/index.html`, `lounge-docs/ui_guide/react_code_exports.html`, `lounge-docs/ui_guide/design_tokens.html`, `lounge-docs/app/webView/webView_guide.html`, `lounge-docs/storybook_guide/index.html`
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 기본 출력

- UI는 React 함수 컴포넌트와 TypeScript TSX로 작성합니다.
- Next.js App Router의 Server Component를 기본으로 두고, 상태·이벤트·브라우저 API가 필요할 때만 Client Component로 전환합니다.
- 스타일은 Tailwind CSS 4 유틸리티를 기본으로 작성합니다.
- 공통 CSS 하한은 Safari 15입니다. Safari 15에서 지원되지 않는 최신 CSS 기반 Utility는 사용하지 않고 호환 가능한 기본 Utility나 기존 프로젝트 패턴으로 대체합니다.
- Android와 다른 브라우저는 Safari 15에 특정 제품 버전을 대응시키지 않고 지원 대상 구형 버전에서 실제 사용하는 Utility와 핵심 기능을 확인합니다.
- 조건부 클래스는 기존 `@/lib/utils`의 `cn`을 사용합니다.

## Safari 15 지원 목적과 범위

- Safari 15 지원은 10년 이상 운영된 기존 앱의 장기 이용자와 구형 기기 사용자를 신규 앱으로 안전하게 이전하기 위한 프로젝트 정책입니다. 일반적인 신규 프로젝트의 권장 최소 버전이나 Tailwind CSS 4의 공식 완전 호환 범위로 해석하지 않습니다.
- AI는 shadcn/ui, Base UI 또는 Tailwind CSS의 최신 공식 요구사항만을 근거로 iOS 최소 버전을 올리거나 Safari 15 대응을 제거하지 않습니다.
- Safari 15에서는 최신 환경과 픽셀 단위로 같은 시각 효과보다 로그인, 예약, 결제, 이용권, 안내, 입력과 이동 같은 핵심 정보와 업무 흐름을 완료할 수 있는지를 우선합니다.
- 지원되지 않는 시각 효과는 호환 가능한 기본 Utility와 기존 프로젝트 패턴으로 대체합니다. 대체가 어려우면 핵심 정보와 상호작용을 유지하는 점진적 저하를 적용하고 차이를 완료 보고에 남깁니다.
- Dialog, Select, Popover, Drawer처럼 Portal, 포커스, 스크롤, 터치와 모바일 키보드가 결합되는 shadcn/ui 컴포넌트는 iOS 15 WKWebView의 실제 사용자 흐름에서 확인합니다. 라이브러리 이름이나 단위 테스트 통과만으로 호환된다고 판단하지 않습니다.
- Safari 15 지원 종료와 최소 OS 상향은 실제 OS별 활성 사용자, 오류율과 고객지원 영향을 근거로 App·기획·QA 담당자가 승인한 뒤 적용합니다. AI는 재검토 시점이나 종료 비율을 임의로 확정하지 않습니다.

## 토큰과 컴포넌트

- 토큰의 종류와 연결 방식은 `docs/ai/design-tokens.md`를 함께 확인합니다.
- 먼저 `src/app/globals.css`의 토큰과 `src/components/ui`의 기존 컴포넌트를 확인합니다.
- 색상, 배경, 테두리와 상태는 의미 기반 토큰을 우선합니다.
- Figma의 원시 색상값을 JSX에 그대로 복사하지 않습니다.
- Tailwind 임의 값은 프로젝트 토큰으로 표현하기 어려운 실제 요구가 있을 때만 사용합니다.
- shadcn/ui는 수정 가능한 프로젝트 소유 코드로 취급하되 모든 기능 UI를 불필요한 공통 wrapper로 감싸지 않습니다.
- 반복과 변경 가능성이 확인되기 전에 variant 계층을 미리 만들지 않습니다.
- 공통 컴포넌트, 독립 검수 가치가 있는 Feature 또는 사용자에게 노출되는 Screen을 만들거나 공개 Props, 주요 상태와 화면 구조를 변경하면 `storybook.md`를 확인해 Story를 같은 변경에서 작성하거나 갱신합니다.

## 구조와 접근성

- Figma의 Frame과 Group 수를 React 컴포넌트 수로 옮기지 않습니다.
- 의미에 맞는 HTML 요소를 사용하고 클릭 가능한 비대화형 요소를 만들지 않습니다.
- 입력에는 label, 이미지에는 필요한 대체 텍스트, 아이콘 버튼에는 접근 가능한 이름을 제공합니다.
- shadcn/ui가 제공하는 키보드, 포커스와 ARIA 구조를 깨뜨리지 않습니다.
- Figma에 정의되지 않은 반응형 동작이나 상호작용을 추측해서 확대하지 않습니다.
- `field-sizing`, `@starting-style`, `text-wrap: balance/pretty`, 최신 `:has()`·container query·mask 등에 핵심 UI를 의존시키지 않습니다.

## 비동기 UI

- Loading, Skeleton, Spinner, Progress, Timeout, Offline과 갱신 상태가 포함된 UI는 `performance.md`를 함께 확인합니다.
- 프로젝트에 설치된 shadcn/ui 컴포넌트와 Motion을 새 구현보다 우선합니다.
- 최초 로딩과 기존 데이터를 유지한 갱신을 같은 화면으로 처리하지 않습니다.
- 네트워크 지연과 오류 때문에 사용자 입력을 불필요하게 제거하지 않습니다.
