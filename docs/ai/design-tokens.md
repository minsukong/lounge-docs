# 디자인 토큰 핵심 규칙

> 기준 원본: [디자인 토큰 가이드](../guides/ui/design_tokens.html)

## 현재 기준

- shadcn/ui `base-nova`, neutral, Lucide와 CSS 변수 방식을 사용합니다. 기본 컴포넌트와 의미 토큰을 디자인·개발이 함께 사용합니다.
- 단일 원본은 `tokens/shadcn/neutral.tokens.json`입니다. 공식 neutral light·dark 의미 색상 31개와 radius 0.625rem을 담습니다. 기존 Figma 팔레트·lounge-* 변수·샘플 토큰은 삭제했습니다.
- `front-end/`에서 `npm run tokens:sync`로 `packages/ui/src/theme-tokens.css`와 Storybook용 `src/dev/colors/theme-tokens.ts`를 생성하고 `npm run tokens:check`로 검사합니다. 생성 파일은 직접 수정하지 않습니다.
- 공통 `styles.css`가 생성 테마를 가져오므로 앱과 Storybook이 같은 값을 사용합니다. Safari 15에는 sRGB 대체값, 지원 브라우저에는 공식 OKLCH 값을 적용합니다.
- 간격과 글자 크기는 Tailwind 기본 체계를 사용합니다. 폰트는 Tailwind 기본 sans 스택이며 별도 브랜드 폰트를 추가하지 않습니다. radius는 공식 sm·md·lg·xl·2xl·3xl·4xl 배율로 연결합니다.

## 이름과 사용

- Figma도 `primary`, `primary-foreground`, `background`처럼 같은 의미 토큰명을 사용합니다. CSS용 `--`와 Tailwind용 `bg-`·`text-`는 Figma 역할 이름에 붙이지 않습니다.
- `Button`의 종류 `default`와 색상 역할 `primary`를 구분합니다. variant·size는 현재 컴포넌트 이름을 그대로 사용합니다.
- 화면 스타일은 의미 토큰을 사용하고 별도 브랜드 색상·중복 CSS 체계를 만들지 않습니다. chart·sidebar 토큰도 공식 기본값에 포함하되 해당 UI에서 사용합니다.
- 새로운 서비스 역할·컴포넌트 확장은 실제 요구가 있을 때 함께 결정합니다. 토큰 변경은 JSON 원본과 Figma를 맞춘 뒤 생성·검사하고 관련 컴포넌트와 Story를 확인합니다.
- Figma와 Tokens Studio는 이 원본의 이름·값을 기준으로 구성합니다. 원본 JSON은 수동 변경과 생성 결과를 재현하는 기준이며 Figma 자동 동기화가 완료됐다는 뜻은 아닙니다.

디자인팀 전달 기준은 [shadcn 기반 디자인 작업 기준](../../work/design_tobe.md)을 따릅니다.
