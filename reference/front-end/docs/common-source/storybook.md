# Storybook 적용 가이드

## 사용 조건

실제 `apps/app-webview`가 생성되고 설치된 Next.js, React, Node.js와 Build 설정을 확인할 수 있을 때 적용합니다. Framework와 Addon 버전, Package Manager 및 Script 이름은 `package.json`과 Lock File을 기준으로 결정합니다.

Storybook은 작은 공통 UI에서 도입을 시작할 수 있지만 운영 범위는 컴포넌트에 한정하지 않습니다. Component, Feature와 사용자에게 노출되는 Screen을 탐색하고 주요 상태를 독립적으로 재현·검수하는 UI 환경으로 확대합니다. 여러 Application에서 실제 공유되는 구성과 운영 필요성이 확인된 뒤 별도 Storybook Application 또는 공통 구성을 검토합니다.

## 적용 위치

```text
apps/app-webview/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── src/
    ├── components/
    │   └── ui/
    ├── features/
    └── app/ 또는 screens/
```

- `.storybook/main.ts`에는 Component, Feature와 Screen의 실제 Story 검색 범위 및 설치된 Framework·Addon 설정을 둡니다.
- `.storybook/preview.ts`에는 `globals.css`, Theme, Font와 실제 렌더링에 필요한 최소 Provider를 연결합니다.
- Story 파일은 실제 Component, Feature 또는 Screen UI 구현 가까이에 둡니다.
- 전체 Application을 흉내 내기 위한 과도한 Provider와 Mock은 만들지 않습니다.

## 구현 순서

1. 실제 Application의 Package, import alias, 전역 스타일, Provider와 Route 구조를 확인합니다.
2. 공통 UI, Feature, 사용자 노출 Route·Page·Screen과 기존 Story를 조사합니다.
3. Story 등록 대상, 대표 상태, Viewport, 근거와 제외 사유를 먼저 정리합니다.
4. 승인된 대상에 실제 Props, 기능 상태와 화면 입력을 사용하는 Story를 작성합니다.
5. Args, Decorator, Fixture와 Mock으로 같은 상태를 반복 재현할 최소 경계를 구성합니다.
6. 필요한 Story에 Figma 파일, Frame 또는 Prototype URL을 연결합니다.
7. Autodocs에서 컴포넌트 공개 API를 확인하고 Screen은 이름, 대표 상태와 Viewport 중심으로 설명합니다.
8. Storybook 정적 Build와 합의된 렌더링·접근성·Interaction·시각 회귀 검사를 실행합니다.
9. 실제 Application에서도 Routing, Backend, Native 연결과 전체 사용자 흐름을 별도로 확인합니다.

## UI 개발과 검수 경로

```text
Figma와 요구 상태 확인
→ 기존 Component · Feature · Screen과 Story 조사
→ 실제 Application Source 구현
→ 대표 상태 Story 작성 또는 갱신
→ Storybook에서 상태 · Viewport · 접근성 · Interaction 검수
→ 실제 Application 통합 검증
→ 전체 검사와 Build
```

공통 컴포넌트는 실제 구현과 Story를 같은 변경에서 작성합니다. Feature와 Screen은 재사용 여부와 관계없이 사용자가 보는 상태를 독립적으로 재현·검수할 가치가 있으면 Story 대상으로 검토합니다. Route 파일이 데이터 조회와 조합만 담당하면 실제 화면 UI를 담당하는 컴포넌트의 Story로 대표할 수 있습니다.

## Story 작성 기준

- 사이드바 상위 분류는 최소한 `Components`, `Features`, `Screens`를 구분합니다.
- 특정 Figma Frame을 표시하려면 선택한 Frame의 링크를 사용합니다. 이 URL에는 해당 Frame의 `node-id`가 포함됩니다.
- Component Story는 실제 공개 Props, variant와 소유 상태를 사용합니다.
- Feature와 Screen Story는 기본 상태와 실제 제품이 지원하는 Loading, Empty, Error, 권한, 완료 상태 및 Viewport를 필요한 만큼 분리합니다.
- 데이터, Route Parameter와 Provider는 같은 결과를 반복 재현할 수 있는 최소 범위로 제공합니다.
- API Fixture와 Mock은 승인된 계약 이후에만 작성하며 계약을 정의하거나 실제 연동 검증을 대신하지 않습니다.
- 실제 결제, 인증, Backend 처리와 Native 기능을 Storybook 안에서 완료된 것처럼 모사하지 않습니다.
- Storybook을 위해 제품에 필요하지 않은 Props, variant, Wrapper 또는 Mock 전용 구조를 추가하지 않습니다.
- 단순 Page Wrapper, 타입·상수·utility·helper, 동일 Screen Story로 대표되는 Route와 과도한 Mock이 필요한 내부 구현은 제외할 수 있으며 사유를 남깁니다.
- 중요한 사용자 Interaction은 안정적으로 재현할 수 있을 때 Play 또는 프로젝트에서 합의한 Story Test로 확인합니다.
- Storybook의 `Design` 탭에서 연결된 Figma Embed를 확인합니다.

```ts
export const PaymentFailed = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/FILE_KEY/...?node-id=120-480',
    },
  },
};
```

## 완료 기준

```text
[ ] Component, Feature와 사용자 노출 Screen의 Story 대상 및 제외 사유를 확인했다.
[ ] Story가 실제 export, Props, 화면 입력과 승인된 계약을 사용한다.
[ ] 기본 상태와 실제 지원하는 주요 상태 및 Viewport를 확인할 수 있다.
[ ] 전역 스타일, Semantic Token, Font와 필요한 Provider가 Application과 일치한다.
[ ] Storybook을 위한 불필요한 제품 코드와 과도한 Mock이 없다.
[ ] 컴포넌트 공개 API는 Autodocs에서 확인할 수 있다.
[ ] Storybook 정적 Build와 합의된 검사를 통과한다.
[ ] 실제 Application에서 Routing, Backend, Native 연결과 전체 흐름을 별도로 확인했다.
```

정확한 설치 명령과 Script 이름은 실제 저장소 생성 후 확정합니다. 존재하지 않는 Package나 명령을 문서 예시만 보고 추가하지 않습니다.
