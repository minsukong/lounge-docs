# 공통 UI 작업 지침

- 웹 애플리케이션이 사용하는 스타일·토큰·기본 UI와 Story는 이 패키지에서 단일 관리합니다. 앱의 라우트·API·인증·Native 연동과 앱 환경 판별에 의존하지 않습니다.
- 공통 토큰은 `tokens/shadcn/neutral.tokens.json`의 공식 neutral 기본값을 단일 원본으로 사용합니다. `front-end/`에서 `npm run tokens:sync`로 theme-tokens.css와 개발 참조를 생성하고 `npm run tokens:check`로 검사합니다. 생성 파일은 직접 수정하지 않습니다. 기존 Figma 팔레트와 lounge-* 색상 체계는 사용하지 않습니다.
- 패키지 내부 import는 상대 경로, 앱의 공개 import는 `@lounge/ui/*` export를 사용합니다. 공개 UI·상태 변경에는 관련 Story를 함께 확인합니다.
- Storybook은 이 패키지에서 실행하며 앱별 Feature·Screen Story도 한곳에서 검수합니다. Story·테스트·검수 설정은 제품 빌드에서 제외합니다.
- 타입·린트·테스트·Storybook 빌드 및 `web/` 앱의 운영 빌드를 확인합니다. 이번 초안에서는 실기기 검증을 요구하지 않습니다.

- `src/dev/`와 `@lounge/ui/preview*`는 개발용 예제입니다. 제품에서 가져오지 않으며 앱의 운영 파일 추적·패키징·CSS 입력에서 제외합니다.
