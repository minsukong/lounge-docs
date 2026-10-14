# 공통 UI

`@lounge/ui`는 WebView와 website가 함께 사용하는 스타일·기본 컴포넌트 패키지입니다.

```tsx
import { Button } from "@lounge/ui/button";
import "@lounge/ui/styles.css";
```

공통 UI는 이곳에서 수정하고 앱별 페이지·라우트·레이아웃은 해당 앱에서 관리합니다. 스타일은 기존 neutral 초안이며 생성 토큰은 변경하지 않았습니다.

의존성 설치는 `front-end/`에서 `npm ci`로 수행합니다. 이 폴더에서는 `npm run storybook`, `npm run build-storybook`, `npm run typecheck`, `npm run lint`, `npm run test`를 사용할 수 있습니다. Storybook은 http://127.0.0.1:6006 이며 공통 UI와 두 앱의 개발 화면 Story를 함께 탐색합니다. 공통 컴포넌트와 개발 예제의 행동 테스트는 이 패키지의 `src/**`에 두고, 앱 화면·Native 연동 테스트는 해당 앱에 둡니다.

공통 개발 예제와 테마 전환은 `src/dev/`에 있으며 `@lounge/ui/preview*`는 개발용 화면에서만 가져옵니다. 두 앱 preview의 본문은 같은 예제를 사용하고, 앱별 헤더·하단 탐색·푸터는 각 앱이 소유합니다. 예제 소스·전용 스타일은 운영 빌드에 포함하지 않습니다.
