# Storybook 작업 핵심 규칙

> 기준 원본: [Storybook 운영 가이드](../guides/storybook/index.html)
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 목적

Storybook은 공통 컴포넌트만 제작하거나 전시하는 곳이 아닙니다. 실제 코드로 구현된 Component, Feature와 사용자에게 노출되는 Screen을 한곳에서 탐색하고, Application 전체를 실행하지 않아도 주요 UI 상태를 고정된 조건으로 재현·검수하는 환경입니다.

Storybook은 실제 Routing, Backend 연동과 권한, Native App 기능, 배포 환경과 전체 E2E를 대신하지 않습니다. 이 경계는 실제 Application과 통합 Test에서 별도로 확인합니다.

## 작업 시점

- 공통 컴포넌트를 새로 만들거나 공개 Props와 variant를 변경하면 실제 구현과 Story를 같은 변경에서 작성하거나 갱신합니다.
- 사용자에게 노출되는 Feature 또는 Screen을 새로 만들거나 UI 구조와 주요 상태를 변경하면 대표 Story를 같은 변경에서 작성하거나 갱신합니다.
- Loading, Empty, Error, 권한 거부, Offline, 긴 문구, 다국어와 Viewport처럼 실제 환경에서 반복 재현하기 어려운 상태는 Story 대상을 우선 검토합니다.
- 내부 구현만 바뀌고 사용자가 보는 상태와 동작이 달라지지 않으면 불필요하게 Story를 다시 만들지 않습니다.

## 작성 대상

- `apps/app-webview/src/components/ui`와 실제 공유되는 `packages/ui`의 공통 UI
- 상태 전환과 사용자 Interaction을 독립적으로 검수할 가치가 있는 Feature
- 라우터를 통해 사용자에게 제공되는 Page와 Screen UI
- Desktop, Tablet과 Mobile에서 배치가 달라지는 주요 화면
- 진입 조건 때문에 실제 환경에서 확인하기 어려운 예외 상태와 회귀 위험 UI

단순 Page Wrapper, 타입·상수·utility·helper·export 전용 파일, 동일 Screen Story로 대표할 수 있는 Route와 과도한 Mock이 필요한 내부 구현은 제외할 수 있습니다. 사용자에게 노출되는 Page는 Route 파일 자체가 아니라 실제 화면 UI를 담당하는 컴포넌트 Story로 대표할 수 있습니다. 제외 대상과 사유를 남깁니다.

## 작성 원칙

- 사이드바에서 `Components`, `Features`, `Screens`를 구분하고 라우터 주소를 몰라도 UI의 목적과 상태를 찾을 수 있게 이름을 작성합니다.
- 각 Story에는 필요에 따라 Figma 파일, Frame 또는 Prototype URL을 연결합니다. 특정 Frame을 표시할 때는 선택한 Frame의 링크를 사용합니다.
- Figma에는 연결되는 Story 이름 또는 접근 가능한 Storybook URL을 기록할 수 있습니다.
- 실제 export, Props, 기능 상태와 화면 구조를 기준으로 작성하며 존재하지 않는 상태를 추측하지 않습니다.
- Component는 실제 variant와 소유 상태를, Feature와 Screen은 기본 상태, 주요 예외 상태와 지원 Viewport를 표현합니다.
- Args, Decorator, Fixture와 Mock은 같은 상태를 반복 재현하는 최소 범위로 사용합니다.
- API Fixture와 Mock은 승인된 계약 이후에만 작성하며 실제 Backend, 인증, Cookie, CORS와 데이터 정합성 검증을 대신하지 않습니다.
- Storybook만을 위한 제품 Props, variant, Wrapper와 Mock 전용 구조를 추가하지 않습니다.
- 중요한 사용자 동작은 재현 가능한 경우 Play 또는 프로젝트에서 합의한 Story Test로 확인합니다.
- Storybook의 `Design` 탭에서 연결된 Figma Embed를 확인합니다.
- Autodocs는 실제 타입과 Story에서 생성하고 Props 목록을 별도 문서에 중복 작성하지 않습니다.
- Story 파일은 실제 Component, Feature 또는 Screen UI 구현 가까이에 둡니다.

## 완료 확인

- 전역 스타일, Semantic Token, Font와 필요한 Provider가 실제 Application과 같은지 확인합니다.
- 대표 Screen과 실제 지원 상태 및 Viewport를 Storybook 사이드바에서 찾을 수 있는지 확인합니다.
- Keyboard, 접근 가능한 이름, Interaction과 시각 결과 중 해당 UI에 필요한 항목을 검수합니다.
- Storybook 정적 Build와 프로젝트에 합의된 Story 렌더링, Interaction, 접근성 또는 시각 회귀 검사를 실행합니다.
- 실제 Application에서도 Routing, Backend, Native 연결과 전체 사용자 흐름을 별도로 확인합니다.
- 완료 보고에 작성·갱신한 Story, 재현 상태, 사용한 Mock 경계, 검사 결과와 재현하지 못한 환경 의존성을 포함합니다.
- 누락 점검에서는 모든 `.tsx` 파일을 자동 등록하지 않고 공통 UI와 사용자 노출 Route·Page·Screen을 함께 조사해 대상, 근거와 제외 사유를 먼저 보고한 뒤 승인된 항목만 수정합니다.
