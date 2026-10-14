# website

FO 반응형 홈페이지의 Next.js 16 App Router 실행 기반입니다. 공통 UI와 스타일은 `@lounge/ui/*`를 사용합니다. 기존 홈페이지 https://theloungemembers.com/renew/ 는 콘텐츠 참고 자료이며 실제 업무 화면은 별도 구현합니다.

의존성 설치는 `front-end/`에서 `npm ci`로 수행합니다. 이 폴더에서는 `npm run dev`로 실행하고 http://127.0.0.1:3001/preview 에서 공통 입력·버튼·다이얼로그·Sheet·화면 상태·색상 모드를 확인합니다. preview는 개발 전용이며 운영에 포함되지 않습니다.

`npm run typecheck`, `npm run lint`, `npm run build`를 사용할 수 있습니다. 공통 Storybook은 `front-end/`에서 `npm run storybook`으로 실행합니다. 앱별 배포 방법은 [빌드 안내](BUILD.md), 전체 workspace 명령은 [Front-end README](../README.md)를 확인합니다.

운영 `/`는 준비 안내 화면이며 회원·주문·결제·API·Native 연동은 구현하지 않았습니다. 스타일은 기존 neutral 초안입니다. 타입·린트·운영 빌드·배포 결과물 단독 실행과 preview의 모바일·데스크톱 표시를 확인했습니다. 실기기 검증은 이번 초안 범위에 포함하지 않습니다.
