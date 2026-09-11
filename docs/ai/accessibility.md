# 접근성 핵심 규칙

> 기준 원본: [UI 접근성 준수 가이드](../guides/ui/accessibility.html), [디자인 토큰 가이드](../guides/ui/design_tokens.html), [Lint 가이드](../guides/lint/index.html)
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 기본 원칙

- 접근성은 WCAG 2.1 AA 수준을 목표로 합니다.
- HTML 원어의 의미를 우선 사용하며, ARIA는 HTML이 표현할 수 없을 때만 추가합니다.
- 색상에만 의존하지 않고 텍스트, 아이콘, 속성으로 중복 전달합니다.
- Safari 15에서 동작하지 않는 ARIA 속성이나 CSS는 기존 프로젝트 패턴으로 대체합니다.

## 색상과 대비

- 본문 텍스트(16px 미만)는 4.5:1, 대형 텍스트(18px 이상)와 UI 컴포넌트 경계는 3:1 이상입니다.
- 원시 색상값으로 대비를 조정하지 않고 `globals.css`의 Semantic Token을 사용합니다.
- 오류, 완료, 비활성 상태를 표시할 때 색상뿐 아니라 텍스트와 속성으로 중복 전달합니다.

## 키보드 접근성

- 모든 상호작용 원소를 `Tab`/`Shift+Tab`으로 순차적으로 도달할 수 있습니다.
- 포커스 링은 `outline` 또는 `box-shadow`로 표시하며 `outline: none`으로 제거하지 않습니다.
- 포커스 순서는 화면의 시각적 읽기 순서와 일치합니다.
- `Escape` 키로 Dialog, Dropdown, Popover를 닫을 수 있습니다.
- Dialog 열림 시 포커스는 Dialog 내부로 이동하고, 닫힘 시 열린 원소로 복귀합니다.

## 스크린 리더와 ARIA

- `aria-label`: 텍스트가 없는 원소(아이콘 버튼)에 이름을 부여합니다.
- `aria-describedby`: 오류 메시지나 설명을 필드에 연결합니다.
- `aria-invalid`: 입력 오류 상태를 표시합니다.
- `aria-hidden="true"`: 장식적 아이콘을 스크린 리더에서 제외합니다.
- `aria-live="polite"`: 동적 변경을 스크린 리더에 전달합니다.
- `role="alert"`: 오류 메시지를 즉시 낭독합니다.
- Landmark 구조(`main`, `nav`, `header`, `footer`)를 사용합니다.
- ARIA 네 가지 규칙을 따릅니다: (1) ARIA 불필요 시 사용 안 함, (2) 표준 속성만 사용, (3) 기능적으로 올바르게 사용, (4) ARIA로 네이티브 위젯 대체 금지.

## 폼 접근성

- 모든 `input`, `select`, `textarea`에 `label htmlFor`를 연결합니다.
- `placeholder`는 힌트만 사용하며 라벨의 대체로 사용하지 않습니다.
- 필수 필드는 `required` + `aria-required="true"` + 시각적 `*` 표시를 함께 사용합니다.
- 오류는 `aria-invalid="true"` + `aria-describedby`로 연결합니다.
- 올바른 `type` 속성(`email`, `tel`, `number`)을 사용합니다.

## Dialog와 오버레이

- `role="dialog"` 또는 `role="alertdialog"`를 사용합니다.
- `aria-modal="true"`와 `aria-labelledby`를 함께 사용합니다.
- 포커스 트랩: 열림 시 내부 이동, `Tab`/`Shift+Tab` 순환, 닫힘 시 복귀.
- shadcn/ui Dialog(Radix UI 기반)가 기본 제공하므로 커스텀 Dialog에서만 수동 구현합니다.
- `Escape` 키로 닫을 수 있습니다.

## 애니메이션과 모션

- `@media (prefers-reduced-motion: reduce)` 안에서 장식적 애니메이션을 제거합니다.
- Tailwind CSS 4의 `motion-reduce:` variant를 사용합니다.
- 기능적 애니메이션(로딩 표시자)은 유지하되 강도를 낮춥니다.
- 3초 이내에 3회 이상 깜빡이는 콘텐츠는 사용하지 않습니다. (WCAG 2.3.1)

## 터치와 반응형

- 모든 터치 가능한 원소의 최소 크기는 44×44pt입니다.
- 인접한 터치 원소 사이 간격은 최소 8pt 이상입니다.
- `px` 단위로 고정하지 않고 `rem` 또는 `em`을 사용합니다.
- 200% 텍스트 확대 시에도 모든 기능을 사용할 수 있어야 합니다.

## 자동화 검사

- `eslint-plugin-jsx-a11y` 규칙으로 자동화 가능한 항목을 검사합니다.
- Lint가 발견하지 못하는 항목(스크린 리더, 대비, 모션, 터치)은 수작업으로 검증합니다.
- VoiceOver(iOS)와 TalkBack(Android)으로 핵심 업무 시나리오를 수행합니다.

## 확장 검토

- Accessibility Mark(KACA) 취득 시 시나리오 기반 수작업 검증 보고서를 작성합니다.
- `axe-core` 자동화 검사를 CI/CD에 통합합니다.
- `prefers-reduced-motion`과 `prefers-contrast` 설정에 대한 동작을 검증합니다.