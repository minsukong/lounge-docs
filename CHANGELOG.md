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

### 네트워크 지연·Offline 검증과 API Mock 기준 정리

- 문서의 독자 수준을 성능 전문가가 아닌 시니어 Front-end 개발자로 맞추고, “느림”의 원인 구분과 실제 기능에 필요한 항목만 적용한다는 읽기 기준을 추가했습니다.
- Skeleton·Spinner·Progress·Toast, Cache·Background 갱신·Optimistic Update, Query Key, 멱등성, Timeout·Retry, Offline Queue와 Network Throttling 용어를 처음 나오는 문맥에서 설명했습니다.
- Core Web Vitals, LCP·CLS·INP, Bundle·Chunk·Main Thread, Lighthouse, 성능 회귀와 성능 Budget의 의미와 측정 목적을 보강했습니다.
- 이 저장소는 Front-end 가이드이며 Front-end가 독립적으로 결정할 수 있는 구현·검증 원칙만 현재 기준으로 확정합니다. 기획, 업무 규칙, API·인증·데이터 계약, Backend 제공 환경, Native App 책임과 배포·운영처럼 다른 담당 영역이 필요한 내용은 승인 전까지 미확정으로 유지합니다.
- 보안 문서에 적힌 Backend·Native App·배포 책임은 Front-end가 확인해야 할 외부 조건이며, 현재 프로젝트에서 구현이나 제공이 확정됐다는 의미가 아님을 명시했습니다.
- [`performance_guide/draft.md`](./performance_guide/draft.md)와 [`performance_guide/index.html`](./performance_guide/index.html)에 느린 네트워크, API 응답 지연, Timeout, Offline과 연결 복구 시 Front-end 처리 기준을 추가했습니다.
- 최초 로딩과 기존 데이터 갱신을 구분하고 Skeleton, Spinner, Progress와 Toast는 설치된 shadcn/ui 및 프로젝트 컴포넌트를 우선 사용하도록 했습니다.
- Chrome 개발자 도구의 `Network`, `Disable cache`, 저속 Profile과 `Offline` 전환을 이용한 단계별 검증 절차를 추가했습니다.
- Chrome Network Throttling은 Bundle·이미지·폰트·API를 포함한 저속 전송 환경 확인에 사용합니다.
- 특정 API의 처리 지연, 오류와 응답 순서 역전은 사용할 수 있는 Backend 환경 또는 승인된 계약에서 파생한 Front-end 재현 도구로 확인합니다.
- Backend가 별도의 지연·오류 환경을 제공하거나 Mock 사용을 승인할 것이라고 전제하지 않습니다.
- API 계약 확정 후 실제 환경으로 필요한 상태를 반복 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 범위·관리 책임·폐기 조건을 정한 뒤 MSW 같은 도구를 선택할 수 있습니다. 이 도구가 API 계약을 대신하지 않는다는 점은 Backend에 공유합니다.
- MSW는 실제 Backend의 계약 준수, 인증, Cookie, CORS, 데이터 정합성과 운영 네트워크 검증을 대신하지 않으며 Production 실행과 Bundle에 포함하지 않습니다.
- 사람용 가이드, AI 요약, 성장·테스트 가이드와 공통 소스 문서에서 MSW를 Backend 승인 사항처럼 표현한 문구를 제거하고, 승인된 계약 이후 Front-end 테스트 범위에서 선택하는 도구로 기준을 맞췄습니다.
- 오프라인 지원 범위를 확정 요구처럼 표현하지 않고 미확정 정책으로 정리했으며, 성능 가이드의 검증 항목은 실제 기능과 위험에 따라 선택하는 후보임을 명시했습니다.
- 최종 Markdown을 프로젝트 HTML 템플릿 구조로 변환하고 Root README에서 사람용 가이드로 연결했습니다.

#### API 확정 전 제한

- 기획과 Backend API 계약 확정 전에는 endpoint, method, status, 요청·응답 필드, parser, fixture, handler와 Mock을 선행 구현하지 않습니다.
- Swagger 또는 OpenAPI 제공을 미리 가정하지 않고 Backend가 실제로 전달하고 승인한 계약 형식을 기준으로 사용합니다.
- API 미확정 단계에서는 사용자 흐름, 필요한 화면 상태, 확인 질문과 `TBD`만 정리합니다.
- API별 Timeout, 재시도 횟수, Offline 지원 범위, Skeleton 상세 디자인과 성능 Budget은 실제 화면·API·운영 환경을 확인한 뒤 결정합니다.

#### 주요 문서

- [`performance_guide/draft.md`](./performance_guide/draft.md) · [`performance_guide/index.html`](./performance_guide/index.html)
- [`performance.md`](./reference/front-end/docs/ai/performance.md)
- [`api-mocking.md`](./reference/front-end/docs/common-source/api-mocking.md) · [`api-mocking.html`](./reference/front-end/docs/common-source/api-mocking.html)
- [`network.md`](./reference/front-end/docs/common-source/network.md) · [`network.html`](./reference/front-end/docs/common-source/network.html)

### 로컬 LLM 실사용 평가와 모델 선택 원칙 추가

- [`react_code_exports.html`](./ui_guide/react_code_exports.html)에 파라미터 수나 출시 시점보다 동일한 실제 업무 프롬프트의 결과를 비교하는 원칙을 추가했습니다.
- Gemma4는 커뮤니케이션과 Soul 준수가 뛰어나며 문서 리뷰, 프로젝트 전체 맥락 파악과 범용 Agent 작업을 안정적으로 수행하는 모델로 평가했습니다.
- Qwen 계열은 Cline 코딩 작업에는 강점이 있지만 Hermes에서는 과도한 Reasoning과 출력 불안정이 관찰되어, 코드 구현·수정·리팩터링 용도로만 사용하도록 범위를 명시했습니다.
- 모델 평가는 고정된 종합 순위가 아니라 현재 환경의 업무별 관찰값이며 모델이나 실행 도구가 바뀌면 같은 테스트를 다시 수행합니다.

### React·Next.js Framework 보안 업데이트 원칙 보강

- React·Next.js 공식 Security Advisory를 기준으로 선언·설치·배포 Version을 비교하고 고위험 취약점을 우선 대응하도록 했습니다.
- WAF, 입력 검증과 CSP가 취약 package의 공식 Patch를 대신하지 않음을 명시했습니다.
- 외부에 노출된 취약 Version은 Patch·재배포와 함께 로그, 영향 범위와 자격 증명 교체 필요성을 검토하도록 했습니다.
- 특정 과거 Patch Version을 고정하지 않고 React2Shell은 Framework 취약점 대응 사례로만 연결했습니다.

### Front-end 보안과 개인정보 기준 추가

- 문서의 독자 수준을 보안 전문가가 아닌 시니어 Front-end 개발자로 명확히 맞추고, 각 보안 기준에서 의미·확인 범위·Front-end 행동을 함께 이해할 수 있도록 설명을 보강했습니다.
- “신뢰하지 않는다”는 값의 사용 금지가 아니라 저장·전달 당시의 상태를 단정하지 않고 위험도에 맞게 확인한다는 뜻으로 정의했으며, Storage는 UI 설정과 권한·사용자 데이터의 검증 수준을 구분했습니다.
- 보안 용어를 삭제하거나 지나치게 단순화하지 않고, XSS, Sanitizer, Tag·Attribute, URL Scheme, CSRF, CORS, Origin, CSP, Client Bundle, Source Map과 공급망 보안이 처음 나오는 위치에 한글 의미와 원어 설명을 추가했습니다.
- 아직 정하지 않은 Sanitizer 도구와 HTML 허용 범위는 승인된 것처럼 표현하지 않고 미정 상태로 바로잡았습니다.
- [`security_guide/index.html`](./security_guide/index.html)과 [`security_guide/draft.md`](./security_guide/draft.md)를 추가했습니다.
- Client 신뢰 경계, XSS, URL·Redirect, 인증·권한, Cookie·CSRF·CORS, Secret, 저장소, 개인정보·로그, CSP, WebView Bridge와 공급망 기준을 정리했습니다.
- AI용 요약인 [`security.md`](./reference/front-end/docs/ai/security.md)와 [`security.html`](./reference/front-end/docs/ai/security.html)을 추가했습니다.
- 성장 과정에 [`13-frontend-security-and-privacy.html`](./ai_frontend_growth_guide/13-frontend-security-and-privacy.html)을 연결했습니다.
- 인증 제공자, Cookie 또는 token 방식, CSRF 구현, CSP 값, 허용 Origin, 개인정보 보존 기간과 외부 Script 목록은 확정하지 않았습니다.

### AI 협업 Front-end 성장 과정 실무 기준 보강

- JavaScript 비동기 실행과 Closure, 요청 취소, TypeScript Union과 Runtime 검증, React 상태 보존, Effect 경쟁 상태와 Next.js Hydration 기준을 보강했습니다.
- API 단계는 승인된 계약이 전달된 뒤 공통 요청 계층과 parser를 적용하고, 계약 전에는 API와 Mock 구현을 선행하지 않도록 최신 기준으로 수정했습니다.
- 테스트 단계는 사용할 수 있는 Backend 환경과 필요한 경우 승인된 계약 기반의 Front-end Mock을 구분하도록 했습니다.
- AI의 조사 범위, 변경 파일, 추측과 일정 산정 확장을 통제하고 실제 기능의 병합 여부를 판단하는 것을 완료 기준으로 삼았습니다.
- API path, 인증 저장 방식, 세션 갱신, Cache 정책과 실제 package는 미확정 상태로 유지했습니다.

### Front-end 공통 소스와 AI 작업 기준 정비

- [API 요청 기반](./reference/front-end/docs/common-source/network.md)에 `HttpError`, 공통 `request`, 빈 본문·JSON 오류·취소 신호와 기능별 parser 경계를 정리했습니다.
- [세션과 회원 경계](./reference/front-end/docs/common-source/session.md)에 로그인 확인 중·비로그인·로그인·확인 실패 구분과 사용자 전환 시 Cache 정리 기준을 추가했습니다.
- [API Mock 도입 판단 기준](./reference/front-end/docs/common-source/api-mocking.md)은 Backend 준비 전 임시 API를 만드는 가이드가 아니라, 승인된 API 계약 이후 지연·오류 상태를 반복 검증할 도구의 선택 기준으로 최신화했습니다.
- 공통 소스 진입점·브리핑·카탈로그·테스트·통합 예시와 Front-End·Test 가이드의 설명을 같은 기준으로 연결했습니다.
- 인증 방식, API origin·endpoint·응답·오류 계약, Query 정책, Native Bridge와 CI 범위는 확정하지 않았습니다.
- 사람은 상세 가이드를 보고 AI는 `AGENTS.md`에서 시작해 현재 작업에 필요한 문서만 선택하도록 진입 경로를 정리했습니다.

### 검증

- 관련 Markdown과 HTML의 현재 API 계약·Mock·네트워크 기준이 일치하는지 확인했습니다.
- 계약 확정 전 Mock 선행 구현과 `401 = 세션 만료` 같은 확정 표현이 현재 기준에 남지 않도록 정리했습니다.
- 수정한 HTML의 Section·Heading·닫는 태그, 내부 링크와 코드 블록 구조를 확인했습니다.
- Git diff 형식 검사를 통과했으며 Windows 환경의 LF/CRLF 변환 안내 외 오류는 없습니다.
