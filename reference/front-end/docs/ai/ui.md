# UI 구현 핵심 규칙

> 기준 원본: `lounge-docs/frontend_guide/index.html`, `lounge-docs/ui_guide/react_code_exports.html`, `lounge-docs/ui_guide/design_tokens.html`
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 기본 출력

- UI는 React 함수 컴포넌트와 TypeScript TSX로 작성합니다.
- Next.js App Router의 Server Component를 기본으로 두고, 상태·이벤트·브라우저 API가 필요할 때만 Client Component로 전환합니다.
- 스타일은 Tailwind CSS 4 유틸리티를 기본으로 작성합니다.
- 조건부 클래스는 기존 `@/lib/utils`의 `cn`을 사용합니다.

## 토큰과 컴포넌트

- 토큰의 종류와 연결 방식은 `docs/ai/design-tokens.md`를 함께 확인합니다.
- 먼저 `src/app/globals.css`의 토큰과 `src/components/ui`의 기존 컴포넌트를 확인합니다.
- 색상, 배경, 테두리와 상태는 의미 기반 토큰을 우선합니다.
- Figma의 원시 색상값을 JSX에 그대로 복사하지 않습니다.
- Tailwind 임의 값은 프로젝트 토큰으로 표현하기 어려운 실제 요구가 있을 때만 사용합니다.
- shadcn/ui는 수정 가능한 프로젝트 소유 코드로 취급하되 모든 기능 UI를 불필요한 공통 wrapper로 감싸지 않습니다.
- 반복과 변경 가능성이 확인되기 전에 variant 계층을 미리 만들지 않습니다.

## 구조와 접근성

- Figma의 Frame과 Group 수를 React 컴포넌트 수로 옮기지 않습니다.
- 의미에 맞는 HTML 요소를 사용하고 클릭 가능한 비대화형 요소를 만들지 않습니다.
- 입력에는 label, 이미지에는 필요한 대체 텍스트, 아이콘 버튼에는 접근 가능한 이름을 제공합니다.
- shadcn/ui가 제공하는 키보드, 포커스와 ARIA 구조를 깨뜨리지 않습니다.
- Figma에 정의되지 않은 반응형 동작이나 상호작용을 추측해서 확대하지 않습니다.
