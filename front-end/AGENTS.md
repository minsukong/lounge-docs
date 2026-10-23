# front-end 작업 지침

## 범위

- `front-end/`는 Lounge 프로젝트의 모든 웹 Front-end를 관리합니다.
  - `web/` — PC·모바일 브라우저와 Flutter 앱 내부 WebView에서 함께 실행되는 단일 Next.js 웹 애플리케이션의 실제 소스
  - `packages/ui/` — 웹 애플리케이션이 사용하는 공통 스타일·토큰·기본 UI·Storybook의 실제 소스
  - PO(파트너오피스), OO(현장운영시스템) — 구체적인 영역 구성·담당은 IA와 작업 카드에서 확인
- Front-end 구현은 이 저장소에서 진행합니다. Flutter Native 앱 소스는 별도 위치에서 관리하며, WebView 화면과는 합의된 Bridge 계약으로 연결합니다.
- `web/`의 실제 package·잠금 파일·설정을 먼저 확인합니다. 새 앱의 초기 구성이나 라우트·개발 검수·빌드 설정 변경 전에는 [앱·개발 화면·배포 경계 필수 기준](../docs/guides/architecture/build-boundary.md)을 반드시 적용합니다. 존재하지 않는 script·설정·package는 추측하지 않습니다.
- 저장소 루트 `AGENTS.md`와 이 폴더의 현재 소스·설정 파일을 먼저 확인합니다. `docs/ai/` 문서는 실제 소스만으로 판단하기 어렵거나 작업에 세부 기준이 필요할 때 관련 문서만 선택해서 읽습니다.

## 공통 기준

- package, script, 설정, import 경로와 설치 버전은 실제 파일과 잠금 파일을 기준으로 사용하며, 확인되지 않은 구성을 추측하지 않습니다.
- 공통 요소·디자인 시스템·공통 컴포넌트는 하나로 관리합니다. 앱별 중복 구현으로 수정·동작·검수 결과가 달라지지 않도록 단일 소스를 사용합니다. 웹 애플리케이션과 UI 패키지는 동일한 기술 스택과 하나의 디자인 시스템을 사용합니다. 공통 스타일·디자인 토큰·기본 UI는 `packages/ui/`의 단일 소스로 연결하며, 공통 UI Storybook은 이 패키지를 기준으로 관리합니다. 현재 구현 여부와 이전 범위는 실제 소스를 확인합니다.
- 페이지·라우트·레이아웃·환경별 동작과 Native 연동은 `web/`에서 관리합니다. 기본 UI를 앱에 복사하거나 환경별 분기를 공통 컴포넌트에 누적하지 않습니다. 앱 환경과 일반 웹 환경의 판별, 반응형 배치와의 구분과 Native 기능 사용 기준은 [프로젝트 핵심 정보](../docs/ai/project.md)의 환경 판별 기준을 따릅니다.
- 공통 CSS 하한은 Safari 15이며 반응형 웹도 동일하게 적용합니다. 이번 FO 공통 구현 초안의 완료 조건에서는 실기기 검증을 제외합니다. 코드·빌드 및 브라우저 검수 결과와 실기기 미검증을 구분해 기록합니다.
- 기획과 승인된 Backend·Native 계약이 없는 API, 인증, 세션, fixture와 Mock은 구현하지 않습니다.
- 실제 반복과 같은 변경 이유가 확인되기 전에는 Wrapper, Adapter, 공통 Store와 package를 선행하지 않습니다.

## 영역별 지침

- `web/` 작업: `front-end/web/AGENTS.md`를 따릅니다. FO 웹의 기존 홈페이지 https://theloungemembers.com/renew/ 는 콘텐츠·서비스 안내의 참고 자료입니다.
- PO·OO 영역은 해당 폴더가 생성된 뒤 전용 지침을 추가합니다.

## 검증

실제 정의된 script만 실행합니다. 기본 확인 순서는 typecheck, lint, test이며 Story 변경은 Storybook 정적 build, 통합 영향은 production build를 추가합니다. 필요한 script가 없으면 존재하는 것처럼 추측하지 않고 확인 결과를 보고합니다.

웹 애플리케이션의 빌드 입력에는 `web/`과 공통 패키지를 함께 포함합니다. package 연결·공통 CSS 검색·외부 소스 추적과 standalone 실행 경로를 [공용 빌드 기준](../docs/guides/architecture/build-boundary.md#공통-ui를-사용하는-앱의-빌드)에 따라 확인하며, 공통 패키지의 Story·테스트·검수 설정도 제품 결과물에서 제외합니다.

Production build와 배포 Artifact에는 해당 영역의 source와 런타임에 필요한 자산만 포함합니다. 저장소의 `docs/`를 Build 입력, 정적 자산 또는 배포 결과물로 복사하지 않습니다.