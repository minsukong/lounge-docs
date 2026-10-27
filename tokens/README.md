# 디자인 토큰

`shadcn/neutral.tokens.json`은 shadcn 공식 neutral light·dark 의미 색상 31개와 기본 radius(0.625rem)의 단일 원본입니다. Figma에서도 같은 이름과 값을 사용합니다. 별도의 브랜드 팔레트는 두지 않습니다.

`front-end/`에서 `npm run tokens:sync`를 실행하면 `packages/ui/src/theme-tokens.css`와 Storybook용 `src/dev/colors/theme-tokens.ts`를 생성합니다. `npm run tokens:check`는 쓰기 없이 최신 여부를 확인합니다.

색상 CSS는 Safari 15용 sRGB 대체값을 먼저 선언하고 지원 환경에서 공식 OKLCH 값으로 덮어씁니다. Figma는 원본 OKLCH 값을 기준으로 합니다. 간격은 Tailwind 기본 0.25rem 단위, 글자와 폰트는 Tailwind 기본 체계, radius는 shadcn 배율을 사용합니다.

공식 컴포넌트는 `https://ui.shadcn.com/r/styles/base-nova/{name}.json`, 테마는 [공식 Theming](https://ui.shadcn.com/docs/theming)을 2026-10-27에 확인했습니다. 컴포넌트 import·Lucide 아이콘·한국어 닫기 문구는 프로젝트에 맞게 연결했고, Textarea는 지원 환경에 맞춰 일반 크기 조절을 사용합니다. 토큰 이름과 Nova의 크기·종류는 유지합니다.
