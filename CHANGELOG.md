# 변경 기록

이 문서는 Lounge Front-end 가이드와 AI 참고 문서의 주요 변경 이유와 범위를 기록합니다.

## 기록 방식

- 새로운 변경 내역은 이 안내 바로 아래에 추가합니다.
- 가장 최근 변경 내역이 위에 오도록 날짜 내림차순으로 정리합니다.
- 같은 날짜의 변경은 날짜 제목을 반복하지 않고 하나의 날짜 아래에 작업별 수정 내역을 이어서 기록합니다.
- 저장소를 옮겨도 기록을 유지할 수 있도록 commit hash와 저장소별 식별자는 작성하지 않습니다.
- 변경한 파일 목록만 나열하지 않고 변경 목적, 주요 내용, 미확정 항목과 검증 결과를 함께 기록합니다.
- 같은 작업에서 Markdown과 HTML을 함께 수정했다면 하나의 변경 항목으로 기록합니다.

## 2026-08-26

### Chrome 네트워크 검증 절차와 Front-end Mock 사용 기준 보완

#### 변경 목적

- Backend가 별도의 지연·오류 재현 환경을 제공한다는 보장이 없는 프로젝트 여건에서도 Front-end가 느린 네트워크와 Offline UX를 직접 검증할 수 있게 했습니다.
- API 계약을 Front-end가 선행 정의하지 않는 원칙은 유지하면서, 계약 확정 후 MSW 같은 도구를 Front-end 테스트 범위에서 현실적으로 선택할 수 있도록 기준을 조정했습니다.

#### 주요 변경

- 성능 가이드에 Chrome 개발자 도구의 `Network`, `Disable cache`, 저속 Profile과 `Offline` 전환을 이용한 단계별 검증 절차를 추가했습니다.
- 저속 전송 환경은 Chrome Network Throttling으로, 특정 API의 처리 지연·오류·응답 순서 역전은 실제 환경 또는 승인된 계약 기반의 Front-end 재현 도구로 확인하도록 역할을 구분했습니다.
- Backend의 테스트 환경 제공이나 Mock 도구 승인 자체를 필수 전제로 두지 않고, Front-end 책임자 또는 프로젝트 담당자와 사용 범위·관리 책임·폐기 조건을 정한 뒤 Backend에 공유하도록 변경했습니다.
- Root·Front-end 지침, AI 요약, 성장·테스트 가이드와 API Mock 판단 문서의 관련 표현을 같은 기준으로 맞췄습니다.

#### 유지한 제한

- 기획과 Backend API 계약 확정 전에는 endpoint, method, status, 요청·응답 필드, parser, fixture와 handler를 만들지 않습니다.
- MSW와 기타 Mock은 실제 Backend 계약 준수, 인증, CORS, 데이터 정합성과 운영 네트워크 검증을 대신하지 않습니다.

#### 검증

- Markdown과 HTML의 Chrome 검증 절차, Mock 적용 조건과 관련 문서 표현을 확인했습니다.
- 계약 확정 전 Mock 금지와 Swagger/OpenAPI 미가정 원칙이 유지되는지 확인했습니다.

### API 계약 확정 전 선행 구현 제한과 Mock 기준 조정

#### 변경 목적

- 기획과 Backend API 계약이 확정되지 않은 현재 단계에서 Front-end가 endpoint, 응답 구조와 Mock 계약을 먼저 만드는 것으로 해석될 수 있는 기준을 제거했습니다.
- Backend가 제공할 Swagger 또는 OpenAPI를 미리 가정하지 않고, 실제로 전달되고 승인된 계약과 개발 환경을 기준으로 구현하도록 책임을 명확히 했습니다.
- 네트워크 지연 대응 원칙은 유지하되 재현 도구와 API 계약은 Front-end가 단독으로 결정하지 않게 했습니다.

#### 주요 변경

- Root와 Front-end AI 지침에 계약 확정 전 API 함수, parser, fixture, handler와 Mock을 구현하지 않는 원칙을 추가했습니다.
- API 요청 기반 문서는 Backend가 승인한 계약과 개발 환경이 전달된 뒤 적용하는 참고 구현으로 변경했습니다.
- API Mock 문서에서 선행 MSW 구현 코드와 임시 endpoint·fixture를 제거하고, 실제 Backend 환경 우선과 양측 담당자 합의를 확인하는 도입 판단 기준으로 교체했습니다.
- 성능 가이드와 AI 요약에서 API 지연·오류 재현은 Backend 개발·테스트 환경을 우선하고 Mock 도구는 합의 후 선택하도록 변경했습니다.
- 공통 소스 진입점·브리핑·카탈로그·테스트, Front-End·Test 가이드와 성장 과정의 Mock 선행 개발 내용을 같은 기준으로 수정했습니다.
- API 미확정 단계에서는 사용자 흐름, 필요한 화면 상태, Backend 확인 질문과 `TBD`만 정리하고 구현은 계약 승인 후 시작하도록 통일했습니다.

#### 미확정 상태 유지

- API 문서 형식, endpoint, method, status, 요청·응답 필드, 인증, 오류, timeout과 재시도 정책을 확정하지 않았습니다.
- API Mock 도구, 대상 상태, 기준 데이터, 관리 책임과 폐기 시점은 실제 필요가 확인되고 Front-end·Backend 담당자가 합의한 뒤 결정합니다.

#### 검증

- MSW가 프로젝트 기본 도구이거나 Backend 미완성 상태의 우회 구현처럼 남아 있는지 관련 사람용·AI용 문서를 확인했습니다.
- Markdown과 HTML의 계약 우선순위, Mock 도입 조건과 주요 내부 링크를 확인했습니다.
- 과거 변경 기록은 당시 작업 이력으로 유지하고 이번 변경에서 현재 적용 기준을 명시했습니다.

### Front-End 네트워크 지연 대응 및 성능 검증 가이드 초안 추가

#### 변경 목적

- 느린 네트워크, API 응답 지연과 연결 중단 상황에서 Front-end가 화면 상태, 사용자 입력과 요청 안전성을 유지하는 기준을 마련했습니다.
- 기존 문서에 나뉘어 있던 로딩·오류·빈 상태, 요청 취소, 중복 방지와 Offline 원칙을 실제 검증 흐름으로 연결했습니다.

#### 주요 변경

- [`performance_guide/draft.md`](./performance_guide/draft.md)를 추가했습니다.
- AI 코딩용 요약인 [`performance.md`](./reference/front-end/docs/ai/performance.md)와 HTML 보기를 추가했습니다.
- 최초 로딩, 기존 데이터 갱신, 변경 중, 지연, Timeout, Offline과 오류 상태를 구분했습니다.
- Skeleton, Spinner, Progress와 Toast는 기존 shadcn/ui 및 프로젝트 컴포넌트를 우선 사용하고 목적에 따라 선택하도록 했습니다.
- Timeout 값과 재시도 정책은 shadcn/ui가 아닌 API·Backend·제품 UX 계약에서 결정하도록 책임을 분리했습니다.
- 요청 취소, 응답 순서 역전, 중복 제출, 사용자 입력 보존과 연결 복구 기준을 추가했습니다.
- Network Throttling, Backend가 제공하거나 합의한 지연 환경과 연결 중단 테스트의 목적을 구분했습니다.
- Core Web Vitals, 전송량과 Bundle 확인은 네트워크 지연 대응 이후의 성능 회귀 검증으로 연결했습니다.
- Front-end AI 진입점, 참고 소스 README, UI·품질·공통 소스 요약에서 API·Query·비동기 UI와 성능 작업 시 새 AI 문서를 선택하도록 연결했습니다.

#### 미확정 상태 유지

- Skeleton 상세 디자인과 표시 시점, API별 Timeout, 재시도 횟수, Offline 지원 범위와 성능 Budget은 실제 화면·API·운영 환경 확정 후 결정하도록 남겼습니다.
- CDN, 데이터베이스 Cache, API Gateway, 서버 Transaction과 운영 도구는 Front-end 초안에서 확정하지 않았습니다.

#### 검증

- 기존 Front-End 개발 가이드, API 요청 기반, API Mock 도입 판단과 테스트 문서의 확정 원칙에 모순되지 않는지 확인했습니다.
- shadcn/ui는 로딩·진행·피드백 UI 기준으로만 연결하고 통신 정책을 대신하지 않도록 구분했습니다.
- AI 요약의 Markdown·HTML 연결, 진입 문서의 내부 링크와 Mermaid 작업 분기를 확인했습니다.
- 사람용 상세 가이드는 HTML 적용 전 단계이므로 `performance_guide/index.html`과 공통 가이드 목록 링크를 추가하지 않았습니다.

### 로컬 LLM 실사용 평가와 모델 선택 원칙 추가

#### 변경 목적

- 로컬 LLM을 파라미터 수나 출시 시점만으로 선택하지 않고 실제 업무 적합성을 기준으로 비교하도록 했습니다.
- Cline과 Hermes에서 확인한 모델별 강점과 한계를 다음 모델 선택 및 재검증에 활용할 수 있게 했습니다.

#### 주요 변경

- [`react_code_exports.html`](./ui_guide/react_code_exports.html)의 로컬 LLM 테스트 항목에 동일한 실제 업무 프롬프트를 사용하는 비교 원칙을 추가했습니다.
- Gemma4는 커뮤니케이션, Soul 준수, 문서 리뷰와 범용 Agent 작업에 강점이 있었던 모델로 정리했습니다.
- Qwen3.8 27B는 느리고 커뮤니케이션이 상대적으로 약하지만 Cline 코딩 작업에 강점이 있었으며, Hermes에서는 과도한 Reasoning과 출력 불안정이 관찰된 모델로 정리했습니다.
- GPT-OSS는 Hermes에서 안정적이고 Qwen3.8보다 범용성이 좋아 보였지만 코딩 우위는 아직 확인되지 않은 모델로 정리했습니다.
- 모델 평가는 고정된 종합 순위가 아니라 현재 환경의 업무별 관찰값이며, 모델이나 실행 도구가 바뀌면 같은 테스트를 다시 수행하도록 명시했습니다.

#### 검증

- 기존 5.4 절의 테스트 환경과 권장 사양을 변경하지 않고 모델 선택 기준을 앞부분에 추가했습니다.
- 확인되지 않은 GPT-OSS의 코딩 우위를 확정적인 사실로 표현하지 않았습니다.

### React·Next.js Framework 보안 업데이트 원칙 보강

#### 변경 목적

- 프로젝트 생성 시 최신 안정 Version을 사용하더라도 개발·운영 중 발표되는 Framework 취약점에 계속 대응하도록 기준을 명확히 했습니다.
- React2Shell 같은 개별 취약점의 오래된 Version 목록을 고정하지 않고 공식 보안 공지를 현재 판단 기준으로 사용하게 했습니다.

#### 주요 변경

- 보안 가이드에 React·Next.js 공식 공지 확인, 선언·설치·배포 Version 비교와 고위험 취약점 우선 대응 기준을 추가했습니다.
- WAF, 입력 검증과 CSP가 취약 package의 공식 Patch를 대신할 수 없음을 명시했습니다.
- 외부에 노출된 취약 Version은 Patch·재배포와 함께 로그, 영향 범위와 자격 증명 교체 필요성을 검토하도록 했습니다.
- AI 보안 요약과 성장 가이드에 같은 판단 기준을 압축하고 React2Shell을 Framework 취약점 대응의 대표 사례로 연결했습니다.

#### 검증

- 사람용 Markdown·HTML, AI용 요약과 성장 가이드에 동일한 운영 원칙이 반영됐는지 확인했습니다.
- 특정 과거 Patch Version을 고정하지 않고 React와 Next.js 공식 Security Advisories를 기준으로 연결했습니다.

### Front-End 보안과 개인정보 기준 추가

#### 변경 목적

- 성장 가이드에 포함된 보안 학습 기준을 실제 구현과 리뷰에서 사용할 수 있는 전체 가이드 기준 원본으로 연결했습니다.
- 사람용 상세 문서와 AI용 압축 지침을 분리하여 AI가 모든 문서를 읽지 않고도 보안 관련 작업에서 필요한 기준을 선택하게 했습니다.
- 기존 Front-End, APP, Monorepo와 공통 소스 문서에 흩어진 보안 내용을 유지하면서 세부 판단의 단일 기준을 추가했습니다.

#### 주요 변경

- [`security_guide/index.html`](./security_guide/index.html)과 [`security_guide/draft.md`](./security_guide/draft.md)를 추가했습니다.
  - Client 신뢰 경계, 외부 입력과 XSS, URL·Redirect, 인증·권한과 세션을 정리했습니다.
  - Cookie·CSRF·CORS, 환경변수·Secret, Client 저장소, 개인정보와 로그 기준을 추가했습니다.
  - CSP, 외부 리소스, WebView Bridge, 파일, 의존성과 공급망 검토 기준을 추가했습니다.
  - 변경 위험별 검증, 사고 기록과 AI 보안 리뷰 요청·병합 체크리스트를 추가했습니다.
- [`security.md`](./reference/front-end/docs/ai/security.md)와 [`security.html`](./reference/front-end/docs/ai/security.html)을 추가했습니다.
  - AI가 보안 관련 작업 전에 확인할 필수 원칙과 위험 코드 패턴을 압축했습니다.
  - 확인된 코드와 미확정 Backend·App·배포 계약을 분리해 보고하도록 했습니다.
- [`13-frontend-security-and-privacy.html`](./ai_frontend_growth_guide/13-frontend-security-and-privacy.html)을 성장 과정에 추가했습니다.
  - 12단계에서 완성한 기능을 대상으로 입력, 출력, 저장, 전달과 사용자 전환 경계를 추적합니다.
  - 보안 용어 암기보다 AI의 구현에서 위험을 발견하고 병합 여부를 판단하는 것을 완료 기준으로 정의했습니다.
- 성장 가이드의 원본·HTML·교육 과정과 12단계 이동 링크를 13단계에 연결했습니다.
- Root README, Front-End·APP·Monorepo 가이드, Front-end AI 진입점·README·품질·공통 소스 요약에 보안 기준 링크를 추가했습니다.

#### 미확정 상태 유지

- 인증 제공자, Cookie 또는 token 방식, CSRF 구현, CSP Directive 값, CORS와 허용 Origin을 확정하지 않았습니다.
- Redirect URI, 개인정보 분류·보존 기간, 파일 허용 형식과 외부 Script 목록을 실제 제품·배포 계약 전까지 교체 항목으로 유지했습니다.
- Front-end 문서가 Backend 권한 검증, Native 보안 저장소와 조직의 보안 정책을 대신하지 않도록 책임을 구분했습니다.

#### 검증

- OWASP XSS·CSRF·Logging, MDN CSP·Cookie, Next.js 환경변수와 npm 보안 문서를 기준으로 핵심 원칙을 확인했습니다.
- 신규·연결 HTML의 Section, Heading, Code Block과 닫는 태그 구조를 확인했습니다.
- Markdown과 HTML의 내부 링크, 공통 자산 경로와 정적 코드 하이라이트를 확인했습니다.
- Monorepo의 보안 링크가 환경·Secret 영역에 배치됐는지 확인했습니다.

### AI 협업 Front-end 성장 과정 실무 기준 보강

#### 변경 목적

- 교육 문서를 기초 용어 소개가 아니라 AI와 함께 실제 Front-end 기능을 설계, 구현, 검증하고 병합할 수 있는 판단 기준으로 강화했습니다.
- 새로 추가된 API 요청 계층, 세션·회원 경계와 API Mock 가이드를 성장 과정에 연결했습니다.
- 쉬운 설명보다 실행 원리, 실패 조건, 상태 수명과 교체 경계를 정확히 이해하는 것을 과정 완료 기준으로 삼았습니다.

#### 주요 변경

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

#### 미확정 상태 유지

- API Path, Method, 응답 필드, 인증 저장 방식, 세션 갱신과 Cache 정책을 새 기준에서 확정하지 않았습니다.
- MSW와 공통 요청 구현은 실제 애플리케이션의 설치 package와 기존 구조를 확인한 뒤 적용하도록 유지했습니다.
- Backend, App, 보안 정책과 개발 일정은 Front-end 교육 문서가 대신 결정하지 않습니다.

#### 검증

- 성장 과정의 모든 HTML에서 Section, Heading, Code Block과 닫는 태그 수를 확인했습니다.
- 수정된 HTML의 내부 링크와 공통 자산 경로가 실제 파일로 연결되는지 확인했습니다.
- `text`가 아닌 코드 블록에 정적 `hljs-*` 구문 강조가 유지되는지 확인했습니다.
- 기존 `401 = 세션 만료` 단정과 검증되지 않은 Bridge Generic 반환 예시를 제거했습니다.

### Front-end 공통 소스와 AI 작업 기준 정비

- 작업 기간: 2026-08-25 ~ 2026-08-26

#### 변경 목적

- 기획, 디자인과 API가 확정되기 전에도 한 명의 Front-end 개발자가 공통 기반과 화면 개발을 준비할 수 있게 합니다.
- API가 확정되지 않은 상태에서 endpoint, 인증 방식과 서버 응답을 임의로 확정하지 않습니다.
- 사람용 상세 가이드와 AI용 요약·작업 진입점을 분리하고, AI가 작업과 관련된 문서만 선택해서 읽게 합니다.
- 단일 파일이나 지정 폴더 리뷰가 전체 프로젝트 조사와 구현 계획으로 확대되지 않게 합니다.

#### 1. Cline 리뷰 범위 제한 규칙 추가

[`review-scope.md`](./.clinerules/review-scope.md)를 추가했습니다.

- 사용자가 지정한 파일과 폴더만 검토합니다.
- 단일 파일 리뷰에서는 코드베이스 전체 검색과 연관 파일 추적을 하지 않습니다.
- 단순 리뷰를 백엔드, 보안, 인프라와 전체 구현 계획으로 확대하지 않습니다.
- 구현 요청이 없는 리뷰는 읽기 전용으로 처리합니다.
- 근거가 확인된 결과만 제한된 개수로 답하고 일정·공수 추정을 만들지 않습니다.

#### 2. API 요청 기반 가이드 추가

[`network.md`](./reference/front-end/docs/common-source/network.md)와 [`network.html`](./reference/front-end/docs/common-source/network.html)을 추가했습니다.

- `HttpError`와 공통 `request` 함수의 최소 책임을 정의했습니다.
- 응답 본문을 한 번만 읽고 성공과 오류에서 같은 값을 사용하도록 했습니다.
- `204`, 빈 본문, JSON이 아닌 응답과 요청 취소 신호를 처리하도록 했습니다.
- 외부 응답을 기능별 parser로 검증하고 `response.json() as Type` 사용을 피하도록 했습니다.
- API URL, 인증 전달 방식, timeout과 공통 응답 형식은 미확정 항목으로 남겼습니다.

#### 3. 세션과 회원 데이터 경계 가이드 추가

[`session.md`](./reference/front-end/docs/common-source/session.md)와 [`session.html`](./reference/front-end/docs/common-source/session.html)을 추가했습니다.

- 로그인 확인 중, 비로그인, 로그인과 확인 실패 상태를 구분했습니다.
- 세션에는 최소 사용자 식별 정보만 두고 회원 프로필·설정·업무 데이터와 분리했습니다.
- 세션 응답도 runtime parser를 통과하도록 했습니다.
- 로그아웃 후 이전 사용자의 Query Cache를 정리하도록 했습니다.
- 모든 `401`을 즉시 전역 로그아웃으로 처리하지 않고 실제 API 계약을 확인하도록 했습니다.
- Cookie, token, 로그인 화면, 만료·갱신과 이동 route는 확정하지 않았습니다.

#### 4. MSW 기반 API Mock 가이드 추가

[`api-mocking.md`](./reference/front-end/docs/common-source/api-mocking.md)와 [`api-mocking.html`](./reference/front-end/docs/common-source/api-mocking.html)을 추가했습니다.

- Backend가 준비되기 전에도 실제 `fetch` 경계를 사용하는 화면과 테스트를 작성할 수 있게 했습니다.
- 브라우저와 Vitest가 fixture와 handler를 공유하는 구조를 제시했습니다.
- 비로그인, 권한 부족, 입력 오류, 서버 오류, 지연, 취소와 빈 응답 상태를 재현하도록 했습니다.
- 테스트가 API 함수와 parser를 Mock으로 우회하지 않도록 했습니다.
- Mock endpoint와 fixture는 확정된 서버 계약이 아니라 교체 가능한 Front-end 가정임을 명시했습니다.
- Production에서는 Mock이 시작되지 않도록 했습니다.

#### 5. 기존 공통 소스 가이드 연결 보강

`reference/front-end/docs/common-source/`의 기존 Markdown과 HTML을 함께 갱신했습니다.

##### 진입점과 준비 상태

- [`index.md`](./reference/front-end/docs/common-source/index.md) · [`index.html`](./reference/front-end/docs/common-source/index.html)
  - 신규 3개 문서의 역할, 적용 순서와 권장 파일 구조를 추가했습니다.
  - 공통 요청 함수, 응답 parser, 세션 경계와 Mock 적용 흐름을 연결했습니다.
- [`briefing.md`](./reference/front-end/docs/common-source/briefing.md) · [`briefing.html`](./reference/front-end/docs/common-source/briefing.html)
  - API 요청 기반, 세션 경계와 API Mock의 준비 수준 및 실제 저장소 적용 순서를 반영했습니다.
- [`catalog.md`](./reference/front-end/docs/common-source/catalog.md) · [`catalog.html`](./reference/front-end/docs/common-source/catalog.html)
  - `HttpError`, `request`, 세션, MSW, 필요한 package와 도입 조건을 추가했습니다.
  - API 연결 정책, 세션 계약과 Mock 활성화 위치를 미확정 항목으로 구분했습니다.

##### 구현 예시

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

#### 6. 사람용·AI용 문서 진입점 동기화

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

#### 7. 상위 Front-end·APP·테스트 가이드 정합성 수정

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

#### 8. 이번 변경으로 통일한 기준

- API path, method, 응답 필드와 오류 형식은 확정 전 예시로만 사용합니다.
- 인증 방식과 저장 위치를 Front-end 문서에서 임의로 확정하지 않습니다.
- 서버 데이터는 TanStack Query로 관리하고 별도 전역 상태에 복제하지 않습니다.
- 세션과 회원 상세 데이터는 변경 이유와 수명주기가 다르므로 분리합니다.
- 공통 요청 함수는 전송과 기본 오류 변환만 담당하고 기능별 응답은 기능 가까이에서 검증합니다.
- API Mock은 실제 API 함수와 parser를 그대로 통과하며 Production 동작에는 포함하지 않습니다.
- 실제 애플리케이션이 생성된 뒤에는 설치된 package와 기존 source가 문서 예시보다 우선합니다.
- 사람은 상세 HTML을 보고, AI는 `AGENTS.md`에서 시작해 현재 작업에 필요한 요약과 상세 문서만 읽습니다.

#### 9. 아직 확정하지 않은 항목

- 화면 목록, 사용자 흐름, 디자인과 반응형 세부 기준
- API origin, endpoint, method, 요청·응답과 공통 오류 계약
- 로그인 주체, 인증 제공자·프로토콜, Cookie/token과 세션 수명주기
- Query Key, retry, cache, invalidation과 hydration 정책
- MSW 활성화 환경변수와 실제 애플리케이션 bootstrap 위치
- Native Bridge 계약과 인증 흐름에서의 Native 역할
- 실제 package 버전, CI 범위와 배포 환경별 설정

확정된 항목은 관련 가이드의 `TBD`, parser, fixture, handler와 예시 경로에 함께 반영합니다.

#### 10. 검증 결과

- 신규 3개 문서와 기존 공통 소스 문서의 Markdown·HTML 내용을 동기화했습니다.
- HTML 코드 블록의 표시 코드와 Markdown 원문이 일치하는지 확인했습니다.
- TypeScript, TSX, JavaScript와 JSON 코드 블록에 정적 Highlight.js 토큰이 적용된 것을 확인했습니다.
- 수정된 문서의 내부 링크가 실제 파일로 연결되는지 확인했습니다.
- 수정한 HTML의 주요 Section, Table, Figure와 목록 태그 구조를 확인했습니다.
- 확정형 Cookie·서버 세션 문장이 조건부 예시 밖에 남아 있지 않은지 확인했습니다.
- 공통 소스 HTML을 Desktop 너비에서 확인했으며 새 문서 3종은 Mobile 너비에서도 확인했습니다.


