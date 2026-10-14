# website 작업 지침

## 범위

- 이 폴더는 FO 웹(PC WEB·반응형 홈페이지)의 소스 위치입니다. 기존 홈페이지는 https://theloungemembers.com/renew/ 이며 콘텐츠·서비스 안내를 참고합니다. 회원·주문·결제 등 리뉴얼 기능은 승인된 기획과 IA를 확인합니다.
- 저장소 루트와 `front-end/AGENTS.md`를 함께 적용합니다. 이 폴더에는 Next.js 실행 기반과 개발용 `/preview`가 있습니다. 실제 업무 화면과 서비스 연동은 승인된 범위에서 별도로 구현합니다.

## 공통 기반

- WebView와 동일한 Next.js 16 App Router, React 19, TypeScript 6, Tailwind CSS 4, shadcn/ui 기반을 사용합니다. 실제 설치 버전과 script는 구성 시 실제 파일로 확인합니다. 상태·폼 도구는 필요한 책임에 맞게 사용합니다.
- 하나의 디자인 시스템을 사용합니다. 공통 스타일·디자인 토큰·기본 UI는 `../packages/ui/`에서 단일 소스로 공유하고 공통 UI Storybook도 해당 패키지를 기준으로 관리합니다. 상세 기준과 현재 구현 상태는 [프로젝트 핵심 정보](../../docs/ai/project.md#webview와-website의-공통-기반)를 확인합니다.
- 공통 UI는 `@lounge/ui/*`로 가져오고 `../packages/ui/src/components/`의 기존 구현·스타일·Story를 확인합니다. 홈페이지용 복제본을 만들지 않습니다. 생성된 토큰은 직접 수정하지 않습니다.
- 페이지·라우트·PC 메뉴·반응형 배치는 이 앱에서 관리합니다. 공통 UI에 홈페이지 전용 라우팅·인증·API 또는 Native Bridge 의존성을 넣지 않습니다.
- 초기 구성·라우트·preview·Storybook·빌드·배포 설정 변경 전에는 [공용 배포 경계](../../docs/guides/architecture/build-boundary.md)를 적용합니다. 공통 패키지를 사용하더라도 앱과 개발·검수 결과물을 구분하고 배포 경로는 실제 설정으로 확인합니다. 초기 빌드 구성은 [website 빌드 기준](BUILD.md)을 함께 확인합니다.

## 검증

- 공통 CSS 하한은 Safari 15입니다. 이번 FO 공통 구현 초안의 완료 조건에서는 실기기 검증을 제외합니다. 지원 환경 기준은 유지하며 미검증을 검증 완료로 기록하지 않습니다.
- 실제 정의된 script만 실행합니다. 타입·린트·해당 테스트를 확인하고 Story 변경은 Storybook 정적 빌드, 통합 영향은 앱 운영 빌드를 추가합니다. 브라우저 검수에서는 모바일·데스크톱 배치와 주요 입력·포커스 동작을 확인합니다.
- 제품 배포에는 실제 앱과 필요한 공통 UI 런타임·자산만 포함합니다. 문서·Story·테스트·개발용 preview는 제외합니다.
