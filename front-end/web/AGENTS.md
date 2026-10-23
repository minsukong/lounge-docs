# web 작업 지침

PC·모바일 브라우저와 Flutter 앱 내부 WebView에서 함께 실행되는 단일 Next.js 웹 애플리케이션입니다. 앱 초기 구성·라우트 추가·개발용 preview·Storybook 설정·빌드·배포 설정 변경 전에는 [공용 배포 경계 필수 기준](../../docs/guides/architecture/build-boundary.md)과 [이 앱의 빌드 안내](BUILD.md)를 반드시 확인합니다. 실제 앱은 일반 라우트, 개발 화면은 `src/dev/`·`src/app/preview/`의 `*.dev.*`, Storybook은 별도 검수 환경으로 관리하며 제품 배포 대상은 `dist/runtime/`입니다.

## 구현 기준

- 이 폴더는 브라우저와 앱 내부 WebView에서 실행되는 웹 화면의 실제 소스입니다. FO 웹(PC WEB·반응형 홈페이지)의 기존 홈페이지 https://theloungemembers.com/renew/ 는 콘텐츠·서비스 안내의 참고 자료이며, 회원·주문·결제 등 리뉴얼 기능은 승인된 기획과 IA를 확인합니다. 저장소 루트 `AGENTS.md`와 이 폴더의 현재 소스·설정 파일을 먼저 확인합니다. `docs/ai/` 문서는 실제 소스만으로 판단하기 어렵거나 작업에 세부 기준이 필요할 때 관련 문서만 선택해서 읽습니다.
- package, script, 설정, import 경로와 설치 버전은 이 앱에 존재하는 실제 파일과 잠금 파일을 기준으로 사용하며, 확인되지 않은 구성을 추측하지 않습니다.
- Next.js 16 App Router, React 19, TypeScript 6, Tailwind CSS 4와 shadcn/ui `base-nova`를 프로젝트 기술 기준으로 사용합니다.
- 화면 너비에 따른 반응형 배치(PC·모바일)와 앱 실행 환경 판별은 별개의 기준입니다. PC 메뉴·반응형 배치는 화면 크기에 따라 결정되고, 앱 헤더·하단 메뉴·Safe Area·키보드 대응과 Native 기능은 앱 환경 판별에 따라 결정됩니다.
- 앱 환경은 Bridge로 전달되는 환경 값을 기준으로 판별합니다. 앱 환경으로 확인된 경우에만 합의된 Native 기능을 사용하고, UI 노출뿐 아니라 실제 Native 기능 실행 지점에서도 사용 가능 여부를 확인합니다. 앱이 아닌 것으로 판별되면 일반 웹 브라우저 환경으로 처리하며 Native 영역과 Bridge 기능을 사용하지 않습니다. Bridge 값 수신 전의 초기 상태와 일반 웹으로 판별된 상태를 구분하고, 값이 없다는 이유나 임의의 시간 제한으로 일반 웹을 확정하지 않습니다. 환경 값의 이름·형식·전달 방식·수신 시점·실패 처리와 Native 기능별 지원 계약은 `TBD`이며, 미정 Bridge command, 전역 객체, 메시지 handler와 parser를 추측해서 구현하지 않습니다. 카메라·OCR·권한 요청 등 Native 의존 기능의 일반 웹 대체 동작과 안내는 업무 정책 확정 전까지 `TBD`로 둡니다. 클라이언트의 앱 환경 값은 UI와 기능 실행 경로를 선택하는 기준이며 서버 인증·권한 검증을 대신하지 않습니다.
- 공통 CSS 하한은 Safari 15입니다. 이번 FO 공통 구현 초안에서는 실기기 검증을 완료 조건으로 요구하지 않습니다. 미검증 결과를 실제 지원 환경의 검증 완료로 표시하지 않습니다.
- 하나의 디자인 시스템을 사용합니다. 공통 스타일·디자인 토큰·기본 UI는 `../packages/ui/`의 단일 소스로 공유하고 공통 Storybook도 해당 패키지의 `.storybook/`에서 관리합니다. 공통 UI는 `@lounge/ui/*`로 가져오고 패키지의 기존 구현을 재사용하며 앱 내부 복제본을 추가하지 않습니다. 페이지·라우트·레이아웃·환경별 동작과 Native 연동은 이 앱에서 관리합니다.
- 화면·Feature 작성과 확장에는 [TSX 구조 기준](../../docs/guides/frontend/component-structure.md)을 적용합니다. 화면은 주요 영역과 표시 흐름을 조합하고, 필요한 데이터·변환·상태 처리·UI는 기능 가까이에서 분리합니다. 상태 소유권과 Server/Client 경계, 제품/개발 코드 경계를 유지합니다.
- 공통 UI, 독립 검수 가치가 있는 Feature와 사용자 노출 Screen은 Storybook 대상을 함께 확인합니다.
- 기획과 승인된 Backend·Native 계약이 없는 API, 인증, 세션, Bridge, fixture와 Mock은 구현하지 않습니다. 공개 페이지와 개인·회원 페이지의 검색 노출·metadata 기준은 승인 전까지 현재 noindex를 유지하며 일괄 해제하지 않습니다.
- 실제 반복과 같은 변경 이유가 확인되기 전에는 Wrapper, Adapter, 공통 Store와 package를 선행하지 않습니다.

## 검증

실제로 정의된 script만 실행합니다. 기본 확인 순서는 typecheck, lint, test이며 Story 변경은 Storybook 정적 build, 통합 영향은 production build를 추가합니다. 필요한 script가 없으면 존재하는 것처럼 추측하지 않고 확인 결과를 보고합니다.

Production build와 배포 Artifact에는 이 앱의 source와 런타임에 필요한 자산만 포함합니다. 저장소의 `docs/`를 Build 입력, 정적 자산 또는 배포 결과물로 복사하지 않습니다.
