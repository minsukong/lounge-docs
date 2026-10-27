# 디자인 토큰 핵심 규칙

> 기준 원본: [디자인 토큰 가이드](../guides/ui/design_tokens.html)
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 현재 연결

- 원시 색상은 전달받은 `tokens/figma/color/light.tokens.json`·`dark.tokens.json` 원본에서 `front-end/scripts/sync-color-tokens.mjs`로 생성합니다. `front-end/`에서 `npm run tokens:colors`를 실행하며 결과는 공통 `src/color-tokens.css`와 개발 색상표 데이터입니다.
- 공통 `front-end/packages/ui/src/styles.css`가 생성 CSS를 가져오므로 통합 웹 앱과 Storybook이 같은 `--lounge-*` 색상과 Tailwind의 `lounge-*` 색상 유틸리티를 사용합니다. light·dark를 별도로 생성하며 현재 원시 팔레트의 표시 색상은 같습니다. 의미 테마의 light·dark 값은 서로 다르며 최종 dark 디자인이 확정된 상태는 아닙니다.
- 버튼·본문·배경의 의미 토큰은 아직 `styles.css`의 neutral 초안입니다. 전달한 파일은 원시 팔레트이므로 용도별 매핑을 확인하기 전 primary·background 등에 임의로 대응시키지 않습니다. 폰트·간격·라운드는 이번 색상 export에 포함되지 않았습니다.
- Tailwind CSS 4 유틸리티 이름은 `@theme inline`에서 CSS Variables에 연결합니다.
- shadcn/ui는 `components.json`의 `base-nova`, neutral base color, Lucide와 `cssVariables: true` 설정을 사용합니다.
- Tailwind CSS 4에서는 별도 `tailwind.config` 파일을 만들지 않습니다.

## 디자인과 공유하는 이름

- 디자인은 프로젝트의 `base-nova` 컴포넌트와 의미 토큰 체계에서 시작합니다. [디자인 공유 문서](../../work/design_tobe.md)의 이름 대응을 따릅니다.
- Figma도 `primary`, `primary-foreground`, `background` 등 코드와 같은 의미 토큰명을 사용합니다. CSS의 `--`, Tailwind의 `bg-`·`text-`는 구현 문법이므로 Figma 역할 이름에 붙이지 않습니다.
- `Button`의 종류 `default`와 색상 역할 `primary`를 구분합니다. 기존 variant·size 이름을 먼저 공유하고 새로운 이름은 함께 정합니다.
- 원시 팔레트 경로 `Brand/blue500`과 의미 토큰 `primary`는 다른 계층입니다. 색상 연결과 추가 토큰의 이름은 디자인·개발이 합의합니다.
- 현재 자동 생성은 원시 색상에 한정됩니다. 의미 색상·폰트·간격·라운드의 확정과 코드 반영은 디자인 이후 별도 작업이며, 이번 문서 변경으로 생성 파일을 수정하지 않습니다.

## 사용 규칙

- `background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring` 토큰을 원시 색상보다 우선합니다.
- `sidebar-*`와 `chart-*`는 해당 UI에서 실제로 사용할 때만 사용합니다.
- 브랜드, 성공, 경고와 안내 색상이 확정되지 않았다면 `green-*`, `yellow-*`, `blue-*` 등의 색상을 임의로 의미 토큰처럼 사용하지 않습니다.
- Tailwind 기본 간격으로 표현되는 값을 화면별 CSS Variable로 다시 만들지 않습니다.
- Component Token은 Semantic Token과 shadcn/ui variant로 해결되지 않는 반복 요구가 확인된 뒤 추가합니다.
- shadcn/ui 컴포넌트를 추가하기 전에 `front-end/packages/ui/src/components`를 확인하고, 기능 조합은 해당 기능 가까이에 둡니다.
- CLI로 추가된 컴포넌트는 프로젝트 소유 코드로 검수하며 기존 수정을 확인하지 않고 덮어쓰지 않습니다.

## Figma와 Tokens Studio

- Tokens Studio는 `base`와 `semantic` Token Set으로 시작합니다.
- Figma에서는 반복되는 색상, 간격과 크기에 Variables를 우선 적용합니다.
- 무료 Token Set 내보내기는 여러 Mode를 만들지 못하므로 `.dark` 값과 자동 동기화된다고 가정하지 않습니다.
- Figma와 코드 값이 다르면 임의로 덮어쓰지 않고 변경 의도와 영향 범위를 확인합니다.
