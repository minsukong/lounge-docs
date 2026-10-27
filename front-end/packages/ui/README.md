# @lounge/ui

브라우저와 Flutter 앱 WebView가 함께 사용하는 shadcn/ui Base UI + Nova 공통 패키지입니다. 공식 neutral light·dark 토큰과 기본 컴포넌트 크기를 사용합니다.

```tsx
import { Button } from "@lounge/ui/button";
import "@lounge/ui/styles.css";
```

토큰 원본은 `../../../tokens/shadcn/neutral.tokens.json`입니다. `front-end/`에서 `npm run tokens:sync`와 `npm run tokens:check`를 실행합니다. 생성 파일을 직접 고치지 않습니다. 기존 자체 팔레트와 lounge-* 색상 변수는 제거했습니다.

버튼 크기는 xs 24px·sm 28px·default 32px·lg 36px이며 아이콘 전용 크기도 동일한 단계입니다(기본 글자 크기 16px 기준). 터치 화면에서 필요한 조작 영역은 사용처에서 확보하며 기본 시각 크기를 전역 CSS로 덮어쓰지 않습니다.

Storybook은 `npm run storybook`으로 실행합니다. `Foundations/Colors`에서 의미 토큰 31개와 radius 단계를, `Components/Button`에서 종류와 크기를 확인합니다. 상단 테마 메뉴는 포털로 열리는 Dialog·Sheet에도 적용됩니다.

공통 UI·Storybook·폼 테스트는 이 패키지에서, 실제 라우트·페이지·Native 연동은 `web/`에서 관리합니다. `src/dev/`와 `@lounge/ui/preview*`는 개발용이며 운영 제품에서 가져오지 않습니다. 타입·린트·테스트·Storybook 및 웹 운영 빌드를 검증합니다.
