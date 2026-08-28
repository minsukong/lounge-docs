# Storybook 작업 핵심 규칙

> 기준 원본: `lounge-docs/storybook_guide/index.html`
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 작업 시점

- 공통·재사용 컴포넌트를 새로 만들면 실제 컴포넌트와 Story를 같은 변경에서 작성합니다.
- 공개 Props, variant 또는 사용자가 확인하는 주요 상태가 바뀌면 기존 Story도 갱신합니다.
- Button처럼 공통 컴포넌트임이 확실하면 임의의 페이지에서 먼저 만들지 않고 컴포넌트와 Story를 함께 작성해 Storybook에서 검수한 뒤 화면에서 사용합니다.
- 재사용 여부가 불확실한 UI는 기능 가까이에서 먼저 구현하고 실제 반복이 확인될 때 Story를 추가합니다.

## 작성 대상

- `apps/app-webview/src/components/ui`의 애플리케이션 공통 UI
- 여러 애플리케이션에서 실제로 공유되는 `packages/ui`의 UI
- 여러 화면에서 반복되고 독립적으로 상태를 확인할 가치가 있는 feature 컴포넌트

페이지 전체, 한 번만 쓰는 단순 레이아웃, 타입·상수·utility·helper·export 전용 파일과 과도한 Mock이 필요한 내부 구현에는 Story를 강제하지 않습니다.

## 작성 원칙

- 실제 export와 TypeScript Props를 기준으로 작성합니다.
- 기본 상태와 실제로 지원하는 variant, size, disabled, loading, error와 empty 상태만 표현합니다.
- 존재하지 않는 상태를 추측하거나 Storybook만을 위한 제품 Props, variant, Wrapper와 Mock을 추가하지 않습니다.
- Autodocs는 실제 타입과 Story에서 생성하고 Props 목록을 별도 문서에 중복 작성하지 않습니다.
- Story 파일은 실제 컴포넌트 가까이에 둡니다.

## 완료 확인

- Storybook의 전역 스타일, Semantic Token, Font와 필요한 Provider가 실제 애플리케이션과 같은지 확인합니다.
- Storybook 정적 Build와 프로젝트에 합의된 검사를 실행합니다.
- 완료 보고에 작성하거나 갱신한 Story, 표현한 상태, 검사 결과와 재현하지 못한 환경 의존성을 포함합니다.
- 누락 점검에서는 모든 `.tsx` 파일을 자동 등록하지 않고 대상, 근거와 제외 사유를 먼저 보고한 뒤 승인된 항목만 수정합니다.
