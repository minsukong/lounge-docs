# 공통 소스 가이드 작업 규칙

> 상세 가이드: `docs/common-source/`

현재 실제 Front-end 애플리케이션 저장소는 생성 전입니다. 현재 `reference/front-end/docs`는 문서 선행 작성용 임시 위치이며, 실제 저장소를 만드는 새 브랜치에서는 모든 가이드를 저장소 루트의 `docs/`로 통합하고 애플리케이션 공통 소스는 `apps/app-webview`에 구현합니다.

## 작업 전 확인

- `apps/app-webview`가 존재하면 기존 파일과 설치 package를 먼저 확인합니다. 아직 존재하지 않으면 이 확인을 생략하고 참고 구현의 교체 지점을 명확히 작성합니다.
- Tailwind와 shadcn 작업은 `docs/common-source/tailwind.md`를 읽습니다.
- React component와 Provider 작업은 `docs/common-source/react.md`를 읽습니다.
- TypeScript 설정과 runtime guard 작업은 `docs/common-source/typescript.md`를 읽습니다.
- API 요청 함수와 기능별 응답 검증 작업은 `docs/common-source/network.md`를 읽습니다.
- 네트워크 지연, Loading, Timeout, 재시도, Offline 또는 성능 검증이 포함되면 `docs/ai/performance.md`를 함께 읽습니다.
- 기획 흐름과 Backend API 계약이 확정되기 전에는 API 요청 함수, parser, fixture, handler와 Mock을 구현하지 않습니다. Backend 확인 질문과 `TBD`만 정리합니다.
- 로그인 상태, 로그아웃과 회원 데이터 경계 작업은 `docs/common-source/session.md`를 읽습니다.
- Vitest와 Testing Library 공통 환경 작업은 `docs/common-source/test.md`를 읽습니다.
- 계약 확정 후 사용할 수 있는 Backend 환경만으로 필요한 상태 재현이 어렵고 Front-end 테스트용 Mock의 범위와 관리 책임을 프로젝트 내부에서 정했을 때 `docs/common-source/api-mocking.md`를 읽습니다.
- 인증·권한, 외부 HTML·URL, 개인정보, Client 저장소, Bridge와 파일 경계가 포함되면 `docs/ai/security.md`와 상세 보안 가이드를 함께 읽습니다.
- 공통 소스를 기능 단위로 연결하는 방법은 `docs/common-source/recipes.md`를 읽습니다.
- `docs/common-source/catalog.md`는 실제 source 목록이 아니라 조사·구현 체크리스트로 사용합니다.

## 문서 작성 원칙

- 코드 블록은 언어를 표시하고 현재 프로젝트 stack에 맞는 완성된 참고 구현을 제공합니다.
- 참고 코드를 실제 저장소에 적용한 것처럼 표현하지 않습니다.
- 실제 파일 경로, export와 사용처는 실제 저장소가 생성되고 확인된 뒤에만 적용 완료 상태로 단정합니다.
- 기존 source가 있으면 새 파일 생성보다 비교·병합 기준을 설명합니다.
- 브랜드 값, API/Bridge 계약, Query 정책과 Zustand persist를 추측해 확정하지 않습니다.
- shadcn 또는 설치 library가 제공하는 책임을 다시 구현하도록 안내하지 않습니다.

## 가이드와 실제 소스의 관계

1. 실제 저장소 생성 전에는 이 가이드가 선행 구현 기준입니다.
2. 가이드 예시는 권장 구현안이며 실제 저장소에 적용할 때 설치 버전, 기존 구조와 제품 계약의 차이를 검토합니다.
3. 실제 source가 생성된 이후에는 실제 source가 기준이며, 구조와 API가 확정되거나 바뀌면 가이드를 함께 갱신합니다.
4. 통합 전 `lounge-docs`, 통합 후 `docs/` 아래에는 `.ts`, `.tsx`, `globals.css`, package 설정 같은 앱 source를 추가하지 않습니다.
5. 통합 후 상세 HTML은 `docs/guides/`, AI 요약은 `docs/ai/`, 공통 소스 구현 기준은 `docs/common-source/`, 공통 문서 자산은 `docs/assets/`에서 관리합니다.

## 완료 확인

- Markdown과 HTML 내용이 동일합니다.
- 모든 코드 블록에 `css`, `tsx`, `ts`, `json`, `js`, `text` 등 언어가 지정되어 있습니다.
- HTML은 기존 정적 `hljs-*` span 방식으로 하이라이트됩니다.
- 실제 적용 여부와 참고 구현을 명확히 구분합니다.
- 관련 없는 실제 애플리케이션 파일은 수정하지 않습니다.
