# Storybook 적용 가이드

## 사용 조건

실제 `apps/app-webview`가 생성되고 설치된 Next.js, React, Node.js와 Build 설정을 확인할 수 있을 때 적용합니다. Framework와 Addon 버전, package manager 및 Script 이름은 `package.json`과 Lock File을 기준으로 결정합니다.

Storybook은 먼저 `apps/app-webview`의 공통 UI에서 작은 범위로 도입합니다. Button, Input, Card, Dialog와 Badge처럼 반복 사용되고 독립적으로 상태를 확인할 수 있는 컴포넌트부터 적용합니다.

## 적용 위치

```text
apps/app-webview/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
└── src/
    ├── components/ui/
    │   ├── button.tsx
    │   └── button.stories.tsx
    └── features/
        └── example/components/
            ├── example-card.tsx
            └── example-card.stories.tsx
```

- `.storybook/main.ts`에는 실제 Story 검색 범위와 설치된 Framework 및 Addon 설정을 둡니다.
- `.storybook/preview.ts`에는 `globals.css`, Theme, Font와 실제 렌더링에 필요한 최소 Provider를 연결합니다.
- Story 파일은 실제 컴포넌트 가까이에 둡니다.
- 전체 애플리케이션을 흉내 내기 위한 과도한 Provider와 Mock은 만들지 않습니다.

## 구현 순서

1. 실제 애플리케이션의 package, import alias, 전역 스타일과 Provider를 확인합니다.
2. 공통 UI 경로의 export와 기존 Story를 조사합니다.
3. Story 등록 대상, 근거와 제외 사유를 먼저 정리합니다.
4. 승인된 컴포넌트에 실제 Props와 variant를 사용하는 Story를 작성합니다.
5. Autodocs에서 공개 API와 설명을 확인합니다.
6. Storybook 정적 Build와 합의된 접근성·상호작용 검사를 실행합니다.
7. 실제 화면에서도 같은 컴포넌트를 사용하고 스타일 및 동작 차이를 확인합니다.

## 컴포넌트 개발 경로

공통 컴포넌트임이 확실하면 실제 컴포넌트와 Story를 동시에 작성합니다.

```text
Figma Main Component와 설명 확인
→ 실제 공통 컴포넌트 작성
→ Story 작성
→ Storybook에서 주요 상태 검수
→ 실제 화면에서 사용
→ 전체 검사와 Build
```

재사용 여부가 불확실하면 기능 가까이에서 작게 구현합니다. 실제 반복과 동일한 변경 이유가 확인된 뒤 공통 위치로 분리하고 Story를 작성합니다.

## Story 작성 기준

- 기본 상태를 작성합니다.
- 실제로 지원하는 주요 variant와 size를 작성합니다.
- disabled, loading, error와 empty 중 컴포넌트가 실제로 소유하는 상태만 작성합니다.
- Storybook을 위해 제품에 필요하지 않은 Props, variant, Wrapper 또는 Mock을 추가하지 않습니다.
- 페이지 전체, 한 번만 쓰는 단순 레이아웃과 내부 구현에는 Story를 강제하지 않습니다.
- 상호작용 검사는 사용자가 확인하는 동작이 있고 안정적으로 재현할 수 있을 때 추가합니다.

## 완료 기준

```text
[ ] Story가 실제 export와 TypeScript Props를 사용한다.
[ ] 기본 상태와 실제 지원하는 주요 상태를 확인할 수 있다.
[ ] 전역 스타일, Semantic Token, Font와 필요한 Provider가 앱과 일치한다.
[ ] Storybook을 위한 불필요한 제품 코드가 없다.
[ ] Autodocs에서 공개 API를 확인할 수 있다.
[ ] 프로젝트에 정의된 Storybook 정적 Build와 합의된 검사를 통과한다.
[ ] 실제 화면에서도 같은 컴포넌트를 사용한다.
```

정확한 설치 명령과 Script 이름은 실제 저장소 생성 후 확정합니다. 존재하지 않는 package나 명령을 문서 예시만 보고 추가하지 않습니다.
