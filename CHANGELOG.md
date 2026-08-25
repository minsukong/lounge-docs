# 변경 기록

이 문서는 Lounge Front-end 가이드와 AI 참고 문서의 주요 변경 이유와 범위를 기록합니다.

## 기록 방식

- 새로운 변경 내역은 이 안내 바로 아래에 추가합니다.
- 가장 최근 변경 내역이 위에 오도록 날짜 내림차순으로 정리합니다.
- 저장소를 옮겨도 기록을 유지할 수 있도록 commit hash와 저장소별 식별자는 작성하지 않습니다.
- 변경한 파일 목록만 나열하지 않고 변경 목적, 주요 내용, 미확정 항목과 검증 결과를 함께 기록합니다.
- 같은 작업에서 Markdown과 HTML을 함께 수정했다면 하나의 변경 항목으로 기록합니다.

## 2026-08-26 — AI 협업 Front-end 성장 과정 실무 기준 보강

### 변경 목적

- 교육 문서를 기초 용어 소개가 아니라 AI와 함께 실제 Front-end 기능을 설계, 구현, 검증하고 병합할 수 있는 판단 기준으로 강화했습니다.
- 새로 추가된 API 요청 계층, 세션·회원 경계와 API Mock 가이드를 성장 과정에 연결했습니다.
- 쉬운 설명보다 실행 원리, 실패 조건, 상태 수명과 교체 경계를 정확히 이해하는 것을 과정 완료 기준으로 삼았습니다.

### 주요 변경

- [`draft.md`](./ai_frontend_growth_guide/draft.md)와 [`index.html`](./ai_frontend_growth_guide/index.html)
  - JavaScript 비동기 실행, Closure, 요청 취소와 자원 정리를 추가했습니다.
  - TypeScript 판별 가능한 Union, 누락 없는 분기, Runtime 검증과 생성 타입의 한계를 보강했습니다.
  - React 상태 보존, Effect 경쟁 상태, Next.js Hydration과 Server·Client 경계를 확장했습니다.
  - API 미확정 상태에서 Parser, Fixture와 Mock Handler로 기능을 진행하고 계약 확정 뒤 함께 교체하는 기준을 추가했습니다.
  - AI의 조사 범위, 변경 파일, 추측과 일정 산정 확장을 통제하는 요청 기준을 추가했습니다.
  - 용어 이해가 아니라 실제 기능의 병합 여부를 판단하는 프로젝트 투입 완료 기준을 추가했습니다.
- [`curriculum.html`](./ai_frontend_growth_guide/curriculum.html)
  - 12단계의 설명과 공통 완료 기준을 보강된 실무 수준에 맞춰 갱신했습니다.
- `ai_frontend_growth_guide/`의 12개 단계 문서
  - 각 단계에 실행 원리, 자주 발생하는 실패 조건과 AI 결과 검토 기준을 추가했습니다.
  - API 단계에 공통 요청 계층, `204`, JSON 오류, Timeout, 취소, Parser와 `401` 처리 기준을 반영했습니다.
  - 상태 단계에 세션·회원 분리, Query Key, Mutation 이후 일관성과 사용자 전환 시 상태 정리를 반영했습니다.
  - 테스트 단계에 MSW 요청 경계, 실패 시나리오와 증거 기반 디버깅을 반영했습니다.
  - 통합 단계에 Mock 기반 개발에서 실제 API 계약으로 전환하는 과제와 완료 기준을 추가했습니다.
  - Bridge 예시가 검증 없이 Generic 반환 타입을 신뢰하지 않도록 `unknown` 경계로 수정했습니다.

### 미확정 상태 유지

- API Path, Method, 응답 필드, 인증 저장 방식, 세션 갱신과 Cache 정책을 새 기준에서 확정하지 않았습니다.
- MSW와 공통 요청 구현은 실제 애플리케이션의 설치 package와 기존 구조를 확인한 뒤 적용하도록 유지했습니다.
- Backend, App, 보안 정책과 개발 일정은 Front-end 교육 문서가 대신 결정하지 않습니다.

### 검증

- 성장 과정의 모든 HTML에서 Section, Heading, Code Block과 닫는 태그 수를 확인했습니다.
- 수정된 HTML의 내부 링크와 공통 자산 경로가 실제 파일로 연결되는지 확인했습니다.
- `text`가 아닌 코드 블록에 정적 `hljs-*` 구문 강조가 유지되는지 확인했습니다.
- 기존 `401 = 세션 만료` 단정과 검증되지 않은 Bridge Generic 반환 예시를 제거했습니다.

## 2026-08-26 — Front-end 공통 소스와 AI 작업 기준 정비

- 작업 기간: 2026-08-25 ~ 2026-08-26

### 변경 목적

- 기획, 디자인과 API가 확정되기 전에도 한 명의 Front-end 개발자가 공통 기반과 화면 개발을 준비할 수 있게 합니다.
- API가 확정되지 않은 상태에서 endpoint, 인증 방식과 서버 응답을 임의로 확정하지 않습니다.
- 사람용 상세 가이드와 AI용 요약·작업 진입점을 분리하고, AI가 작업과 관련된 문서만 선택해서 읽게 합니다.
- 단일 파일이나 지정 폴더 리뷰가 전체 프로젝트 조사와 구현 계획으로 확대되지 않게 합니다.

### 1. Cline 리뷰 범위 제한 규칙 추가

[`review-scope.md`](./.clinerules/review-scope.md)를 추가했습니다.

- 사용자가 지정한 파일과 폴더만 검토합니다.
- 단일 파일 리뷰에서는 코드베이스 전체 검색과 연관 파일 추적을 하지 않습니다.
- 단순 리뷰를 백엔드, 보안, 인프라와 전체 구현 계획으로 확대하지 않습니다.
- 구현 요청이 없는 리뷰는 읽기 전용으로 처리합니다.
- 근거가 확인된 결과만 제한된 개수로 답하고 일정·공수 추정을 만들지 않습니다.

### 2. API 요청 기반 가이드 추가

[`network.md`](./reference/front-end/docs/common-source/network.md)와 [`network.html`](./reference/front-end/docs/common-source/network.html)을 추가했습니다.

- `HttpError`와 공통 `request` 함수의 최소 책임을 정의했습니다.
- 응답 본문을 한 번만 읽고 성공과 오류에서 같은 값을 사용하도록 했습니다.
- `204`, 빈 본문, JSON이 아닌 응답과 요청 취소 신호를 처리하도록 했습니다.
- 외부 응답을 기능별 parser로 검증하고 `response.json() as Type` 사용을 피하도록 했습니다.
- API URL, 인증 전달 방식, timeout과 공통 응답 형식은 미확정 항목으로 남겼습니다.

### 3. 세션과 회원 데이터 경계 가이드 추가

[`session.md`](./reference/front-end/docs/common-source/session.md)와 [`session.html`](./reference/front-end/docs/common-source/session.html)을 추가했습니다.

- 로그인 확인 중, 비로그인, 로그인과 확인 실패 상태를 구분했습니다.
- 세션에는 최소 사용자 식별 정보만 두고 회원 프로필·설정·업무 데이터와 분리했습니다.
- 세션 응답도 runtime parser를 통과하도록 했습니다.
- 로그아웃 후 이전 사용자의 Query Cache를 정리하도록 했습니다.
- 모든 `401`을 즉시 전역 로그아웃으로 처리하지 않고 실제 API 계약을 확인하도록 했습니다.
- Cookie, token, 로그인 화면, 만료·갱신과 이동 route는 확정하지 않았습니다.

### 4. MSW 기반 API Mock 가이드 추가

[`api-mocking.md`](./reference/front-end/docs/common-source/api-mocking.md)와 [`api-mocking.html`](./reference/front-end/docs/common-source/api-mocking.html)을 추가했습니다.

- Backend가 준비되기 전에도 실제 `fetch` 경계를 사용하는 화면과 테스트를 작성할 수 있게 했습니다.
- 브라우저와 Vitest가 fixture와 handler를 공유하는 구조를 제시했습니다.
- 비로그인, 권한 부족, 입력 오류, 서버 오류, 지연, 취소와 빈 응답 상태를 재현하도록 했습니다.
- 테스트가 API 함수와 parser를 Mock으로 우회하지 않도록 했습니다.
- Mock endpoint와 fixture는 확정된 서버 계약이 아니라 교체 가능한 Front-end 가정임을 명시했습니다.
- Production에서는 Mock이 시작되지 않도록 했습니다.

### 5. 기존 공통 소스 가이드 연결 보강

`reference/front-end/docs/common-source/`의 기존 Markdown과 HTML을 함께 갱신했습니다.

#### 진입점과 준비 상태

- [`index.md`](./reference/front-end/docs/common-source/index.md) · [`index.html`](./reference/front-end/docs/common-source/index.html)
  - 신규 3개 문서의 역할, 적용 순서와 권장 파일 구조를 추가했습니다.
  - 공통 요청 함수, 응답 parser, 세션 경계와 Mock 적용 흐름을 연결했습니다.
- [`briefing.md`](./reference/front-end/docs/common-source/briefing.md) · [`briefing.html`](./reference/front-end/docs/common-source/briefing.html)
  - API 요청 기반, 세션 경계와 API Mock의 준비 수준 및 실제 저장소 적용 순서를 반영했습니다.
- [`catalog.md`](./reference/front-end/docs/common-source/catalog.md) · [`catalog.html`](./reference/front-end/docs/common-source/catalog.html)
  - `HttpError`, `request`, 세션, MSW, 필요한 package와 도입 조건을 추가했습니다.
  - API 연결 정책, 세션 계약과 Mock 활성화 위치를 미확정 항목으로 구분했습니다.

#### 구현 예시

- [`typescript.md`](./reference/front-end/docs/common-source/typescript.md) · [`typescript.html`](./reference/front-end/docs/common-source/typescript.html)
  - 직접 `fetch`하는 예시를 공통 `request`와 기능별 parser를 사용하는 구조로 변경했습니다.
- [`react.md`](./reference/front-end/docs/common-source/react.md) · [`react.html`](./reference/front-end/docs/common-source/react.html)
  - 세션 Query도 기존 `AppProviders`와 QueryClient를 공유하고 별도 전역 회원 Context를 만들지 않도록 했습니다.
- [`test.md`](./reference/front-end/docs/common-source/test.md) · [`test.html`](./reference/front-end/docs/common-source/test.html)
  - MSW lifecycle을 기존 테스트 setup에 병합하는 기준을 추가했습니다.
  - API 모듈 전체 Mock으로 요청 함수와 parser를 우회하는 테스트를 피하도록 했습니다.
- [`tailwind.md`](./reference/front-end/docs/common-source/tailwind.md) · [`tailwind.html`](./reference/front-end/docs/common-source/tailwind.html)
  - WebView viewport, `viewport-fit=cover`, `dvh`, Safe Area와 키보드 상태 확인 기준을 추가했습니다.
- [`recipes.md`](./reference/front-end/docs/common-source/recipes.md) · [`recipes.html`](./reference/front-end/docs/common-source/recipes.html)
  - 프로필 예시를 공통 `request`, parser, TanStack Query와 MSW 테스트까지 연결했습니다.
  - endpoint를 `/api/members/me`로 통일했습니다.
  - API 모듈 직접 Mock을 MSW handler 교체 방식으로 변경했습니다.

### 6. 사람용·AI용 문서 진입점 동기화

- [`README.md`](./README.md)
  - 실제 `reference/front-end/docs/` 경로를 명확하게 표시했습니다.
  - `network`, `session`, `api-mocking` HTML 링크를 추가했습니다.
- [`reference/front-end/README.md`](./reference/front-end/README.md)
  - 폴더 구조와 작업별 문서 표에 신규 3개 문서를 추가했습니다.
- [`reference/front-end/AGENTS.md`](./reference/front-end/AGENTS.md)
  - AI가 API 요청, 세션, API Mock 작업에 필요한 문서만 선택하도록 작업별 진입 경로와 문서 트리를 갱신했습니다.
- [`docs/ai/common-source.md`](./reference/front-end/docs/ai/common-source.md)
  - 공통 소스 작업에서 신규 가이드를 선택하는 기준을 추가했습니다.
- [`docs/ai/quality.md`](./reference/front-end/docs/ai/quality.md)
  - MSW를 필수 도구가 아닌, Backend 미완성 상태의 화면 개발과 API 경계 테스트를 위한 선택 도구로 정리했습니다.

`AGENTS.html`과 `docs/ai/common-source.html`, `docs/ai/quality.html`은 해당 Markdown을 동적으로 읽으므로 별도 본문을 복제하지 않았습니다.

### 7. 상위 Front-end·APP·테스트 가이드 정합성 수정

- [`frontend_guide/index.html`](./frontend_guide/index.html)
  - 인증 계약 확정 전에는 세션 경계 가이드를 참고하도록 연결했습니다.
  - API 요청 기반과 MSW 상세 예시를 관련 내용 가까이에 연결했습니다.
  - MSW와 Playwright의 사용 목적을 구분했습니다.
- [`test_guide/index.html`](./test_guide/index.html)
  - Backend가 준비되기 전에도 필요하면 MSW를 선택적으로 사용할 수 있게 했습니다.
  - API fixture와 Bridge fixture의 확정 시점을 분리했습니다.
  - MSW와 Playwright를 같은 시점에 도입해야 하는 도구처럼 설명하지 않도록 수정했습니다.
- [`app/app.html`](./app/app.html)
  - WebView 로그인, 서버 세션과 Secure·HttpOnly Cookie를 확정된 인증 방식처럼 표현하던 부분을 수정했습니다.
  - 서버 또는 승인된 인증 시스템이 자격 증명과 권한을 최종 검증한다는 원칙만 유지했습니다.
  - 로그인 위치, Cookie/token, Native 참여 범위, 세션 생성·갱신·폐기 방식은 미확정으로 구분했습니다.
  - 기존 Cookie 기반 로그인 다이어그램과 저장 기준은 채택 시 참고할 조건부 예시로 변경했습니다.
  - `401`을 무조건 서버 세션 만료로 처리하지 않고 API 계약에 따라 의미를 구분하도록 했습니다.

### 8. 이번 변경으로 통일한 기준

- API path, method, 응답 필드와 오류 형식은 확정 전 예시로만 사용합니다.
- 인증 방식과 저장 위치를 Front-end 문서에서 임의로 확정하지 않습니다.
- 서버 데이터는 TanStack Query로 관리하고 별도 전역 상태에 복제하지 않습니다.
- 세션과 회원 상세 데이터는 변경 이유와 수명주기가 다르므로 분리합니다.
- 공통 요청 함수는 전송과 기본 오류 변환만 담당하고 기능별 응답은 기능 가까이에서 검증합니다.
- API Mock은 실제 API 함수와 parser를 그대로 통과하며 Production 동작에는 포함하지 않습니다.
- 실제 애플리케이션이 생성된 뒤에는 설치된 package와 기존 source가 문서 예시보다 우선합니다.
- 사람은 상세 HTML을 보고, AI는 `AGENTS.md`에서 시작해 현재 작업에 필요한 요약과 상세 문서만 읽습니다.

### 9. 아직 확정하지 않은 항목

- 화면 목록, 사용자 흐름, 디자인과 반응형 세부 기준
- API origin, endpoint, method, 요청·응답과 공통 오류 계약
- 로그인 주체, 인증 제공자·프로토콜, Cookie/token과 세션 수명주기
- Query Key, retry, cache, invalidation과 hydration 정책
- MSW 활성화 환경변수와 실제 애플리케이션 bootstrap 위치
- Native Bridge 계약과 인증 흐름에서의 Native 역할
- 실제 package 버전, CI 범위와 배포 환경별 설정

확정된 항목은 관련 가이드의 `TBD`, parser, fixture, handler와 예시 경로에 함께 반영합니다.

### 10. 검증 결과

- 신규 3개 문서와 기존 공통 소스 문서의 Markdown·HTML 내용을 동기화했습니다.
- HTML 코드 블록의 표시 코드와 Markdown 원문이 일치하는지 확인했습니다.
- TypeScript, TSX, JavaScript와 JSON 코드 블록에 정적 Highlight.js 토큰이 적용된 것을 확인했습니다.
- 수정된 문서의 내부 링크가 실제 파일로 연결되는지 확인했습니다.
- 수정한 HTML의 주요 Section, Table, Figure와 목록 태그 구조를 확인했습니다.
- 확정형 Cookie·서버 세션 문장이 조건부 예시 밖에 남아 있지 않은지 확인했습니다.
- 공통 소스 HTML을 Desktop 너비에서 확인했으며 새 문서 3종은 Mobile 너비에서도 확인했습니다.
