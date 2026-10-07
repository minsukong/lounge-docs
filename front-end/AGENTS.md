# front-end 작업 지침

## 범위

- `front-end/`는 Lounge 프로젝트의 모든 웹 Front-end를 관리합니다.
  - `webview/` — Flutter 하이브리드 앱에서 WebView로 실행되는 웹 화면의 실제 소스
  - FO 웹(PC WEB·반응형 홈페이지), PO(파트너오피스), OO(현장운영시스템) — 구체적인 영역 구성·담당은 IA와 작업 카드에서 확인
- Front-end 구현은 이 저장소에서 진행합니다. Flutter Native 앱 소스는 별도 위치에서 관리하며, WebView 화면과는 합의된 Bridge 계약으로 연결합니다.
- `webview/`에 아직 package와 설정이 없습니다. 첫 착수 시 이 위치에 앱을 만들고, 존재하지 않는 script·설정·package는 추측하지 않습니다.
- 저장소 루트 `AGENTS.md`와 이 폴더의 현재 소스·설정 파일을 먼저 확인합니다. `docs/ai/` 문서는 실제 소스만으로 판단하기 어렵거나 작업에 세부 기준이 필요할 때 관련 문서만 선택해서 읽습니다.

## 공통 기준

- package, script, 설정, import 경로와 설치 버전은 실제 파일과 잠금 파일을 기준으로 사용하며, 확인되지 않은 구성을 추측하지 않습니다.
- 공통 CSS 하한은 Safari 15이며, 핵심 흐름을 Safari 15에서 실제 검증합니다. 반응형 웹도 동일한 CSS 하한을 적용합니다.
- 기획과 승인된 Backend·Native 계약이 없는 API, 인증, 세션, fixture와 Mock은 구현하지 않습니다.
- 실제 반복과 같은 변경 이유가 확인되기 전에는 Wrapper, Adapter, 공통 Store와 package를 선행하지 않습니다.

## 영역별 지침

- `webview/` 작업: `front-end/webview/AGENTS.md`를 따릅니다.
- FO 웹·PO·OO 영역은 해당 폴더가 생성된 뒤 전용 지침을 추가합니다.

## 검증

실제 정의된 script만 실행합니다. 기본 확인 순서는 typecheck, lint, test이며 Story 변경은 Storybook 정적 build, 통합 영향은 production build를 추가합니다. 필요한 script가 없으면 존재하는 것처럼 추측하지 않고 확인 결과를 보고합니다.

Production build와 배포 Artifact에는 해당 영역의 source와 런타임에 필요한 자산만 포함합니다. 저장소의 `docs/`를 Build 입력, 정적 자산 또는 배포 결과물로 복사하지 않습니다.