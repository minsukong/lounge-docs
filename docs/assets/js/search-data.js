window.LOUNGE_GUIDE_SEARCH_INDEX = [
  {
    "document": "1. JavaScript 기초",
    "section": "꼭 알아야 할 내용",
    "excerpt": "값과 참조 문자열·숫자·불리언은 값으로 다루고, 객체와 배열은 같은 참조를 공유할 수 있습니다. React 상태에서는 기존 객체를 직접 수정하지 않고 새 객체나 배열을 만듭니다. 배열 변환 map 은 각 값을 변환하고, filter 는 조건에 맞는 값만 남기며, find 는 첫 번째 값을 찾습니다. 화면에 표시할 파생 목록은 원본과 조건에서 계산합니다. 비동기 처리 async 함수는 Prom…",
    "content": "2. 꼭 알아야 할 내용 값과 참조 문자열·숫자·불리언은 값으로 다루고, 객체와 배열은 같은 참조를 공유할 수 있습니다. React 상태에서는 기존 객체를 직접 수정하지 않고 새 객체나 배열을 만듭니다. 배열 변환 map 은 각 값을 변환하고, filter 는 조건에 맞는 값만 남기며, find 는 첫 번째 값을 찾습니다. 화면에 표시할 파생 목록은 원본과 조건에서 계산합니다. 비동기 처리 async 함수는 Promise를 반환합니다. await 성공 결과뿐 아니라 HTTP 실패, 네트워크 오류와 취소도 고려합니다. 실행 순서와 오래된 값 동기 코드, Microtask와 Timer의 실행 순서를 구분하고 비동기 Callback이 생성될 때 주변 값을 기억하는 Closure를 이해합니다. 요청이 끝났을 때 화면이나 선택한 사용자가 이미 바뀌었을 수 있으므로, 응답 도착 순서가 실행 시작 순서와 같다고 가정하지 않습니다. 얕은 복사와 변경 영향 Spread는 한 단계만 복사합니다. 중첩 객체를 복사한 뒤 내부 값을 직접 변경하면 이전 값과 참조를 공유할 수 있습니다. AI가 불변성을 지킨다고 설명하더라도 실제로 변경된 깊이와 참조를 확인합니다. 요청 수명과 정리 AbortController 와 AbortSignal 은 더 이상 필요하지 않은 요청을 취소하는 경계입니다. 취소를 일반 장애와 같은 사용자 오류로 표시하지 않으며, Timer·Event Listener·구독은 생성한 위치와 대응되는 정리 경로를 가집니다.",
    "url": "./../guides/learning/ai-frontend-growth/01-javascript-foundations.html#section-2"
  },
  {
    "document": "1. JavaScript 기초",
    "section": "마스터 실습과 증거",
    "excerpt": "검색 자동완성에 Debounce, 취소, 최신 응답 판별과 Cleanup을 적용합니다. 빠른 입력, 느린 응답, 화면 이탈, 네트워크 오류를 각각 재현합니다. 실행 순서 타임라인, 실패 원인, 선택한 해결 방식과 대안의 차이를 기록합니다. Timer, Listener와 요청이 남지 않는지 테스트합니다. 통과 기준: 정상 결과만 보여주는 것으로 부족합니다. 오래된 결과가 화면을 덮는 정확한 순…",
    "content": "7. 마스터 실습과 증거 검색 자동완성에 Debounce, 취소, 최신 응답 판별과 Cleanup을 적용합니다. 빠른 입력, 느린 응답, 화면 이탈, 네트워크 오류를 각각 재현합니다. 실행 순서 타임라인, 실패 원인, 선택한 해결 방식과 대안의 차이를 기록합니다. Timer, Listener와 요청이 남지 않는지 테스트합니다. 통과 기준: 정상 결과만 보여주는 것으로 부족합니다. 오래된 결과가 화면을 덮는 정확한 순서를 설명하고, 취소와 실패를 구분하며, 중첩 참조 공유와 자원 누수를 코드에서 찾아낼 수 있어야 합니다. 1. JavaScript 기초",
    "url": "./../guides/learning/ai-frontend-growth/01-javascript-foundations.html#section-7"
  },
  {
    "document": "1. JavaScript 기초",
    "section": "실행 원리까지 이해하기",
    "excerpt": "Call Stack, Task와 Microtask JavaScript는 현재 Call Stack의 동기 코드를 먼저 끝낸 뒤 Promise 반응인 Microtask를 처리하고, 그 다음 Timer 같은 Task를 처리합니다. 따라서 코드의 줄 순서와 완료 순서는 같지 않을 수 있습니다. 직접 실행 순서를 종이에 예측한 뒤 Console 결과와 비교하고, 예측이 틀렸다면 어떤 Queue를 놓쳤…",
    "content": "6. 실행 원리까지 이해하기 Call Stack, Task와 Microtask JavaScript는 현재 Call Stack의 동기 코드를 먼저 끝낸 뒤 Promise 반응인 Microtask를 처리하고, 그 다음 Timer 같은 Task를 처리합니다. 따라서 코드의 줄 순서와 완료 순서는 같지 않을 수 있습니다. 직접 실행 순서를 종이에 예측한 뒤 Console 결과와 비교하고, 예측이 틀렸다면 어떤 Queue를 놓쳤는지 설명합니다. console.log(\"A\"); setTimeout(() => console.log(\"B\"), 0); Promise.resolve().then(() => console.log(\"C\")); console.log(\"D\"); // A, D, C, B 경쟁 상태를 재현하고 해결하기 검색어 A 요청 뒤 B 요청을 보냈는데 A가 늦게 도착하면 오래된 결과가 최신 화면을 덮을 수 있습니다. 지연 시간을 의도적으로 바꿔 버그를 재현한 뒤, AbortController 로 이전 요청을 취소하는 방법과 요청 식별자로 최신 응답만 반영하는 방법을 각각 구현합니다. 취소는 사용자에게 장애 메시지로 표시하지 않습니다. 참조 공유를 눈으로 확인하기 Spread는 한 단계만 복사합니다. 중첩 객체를 수정하기 전후에 Object.is 로 각 깊이의 참조를 비교합니다. 어떤 객체가 새로 만들어졌고 무엇이 공유되는지 설명하지 못하면 불변성을 이해한 것으로 보지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/01-javascript-foundations.html#section-6"
  },
  {
    "document": "1. JavaScript 기초",
    "section": "완료 확인",
    "excerpt": "map , filter 와 find 의 차이를 설명할 수 있습니다. 기존 객체를 직접 수정한 코드를 찾을 수 있습니다. async 함수의 성공과 실패 경로를 구분할 수 있습니다. 비동기 응답 순서가 달라질 때 오래된 결과가 화면을 덮는 문제를 발견할 수 있습니다. Closure, 얕은 복사와 정리되지 않은 외부 작업이 만드는 버그를 설명할 수 있습니다. 교육 과정으로 · 2단계 TypeScr…",
    "content": "5. 완료 확인 map , filter 와 find 의 차이를 설명할 수 있습니다. 기존 객체를 직접 수정한 코드를 찾을 수 있습니다. async 함수의 성공과 실패 경로를 구분할 수 있습니다. 비동기 응답 순서가 달라질 때 오래된 결과가 화면을 덮는 문제를 발견할 수 있습니다. Closure, 얕은 복사와 정리되지 않은 외부 작업이 만드는 버그를 설명할 수 있습니다. 교육 과정으로 · 2단계 TypeScript 기본으로",
    "url": "./../guides/learning/ai-frontend-growth/01-javascript-foundations.html#section-5"
  },
  {
    "document": "1. JavaScript 기초",
    "section": "코드 읽기",
    "excerpt": "const availableTickets = tickets. filter ( ( ticket ) => ticket.status === \"available\" , ); async function loadTickets ( ) { const response = await fetch ( \"/api/tickets\" ); if (!response.ok) throw new Error ( \"이용권을 불러오지…",
    "content": "3. 코드 읽기 const availableTickets = tickets. filter ( ( ticket ) => ticket.status === \"available\" , ); async function loadTickets ( ) { const response = await fetch ( \"/api/tickets\" ); if (!response.ok) throw new Error ( \"이용권을 불러오지 못했습니다.\" ); return response. json (); } availableTickets 는 별도 상태가 아니라 원본 배열에서 계산한 값입니다. 요청 함수는 실패를 숨기지 않고 호출자가 처리할 수 있게 전달합니다.",
    "url": "./../guides/learning/ai-frontend-growth/01-javascript-foundations.html#section-3"
  },
  {
    "document": "1. JavaScript 기초",
    "section": "학습 목표",
    "excerpt": "교육 과정 · 다음: TypeScript 기본 const 와 let 의 값 변경 범위를 구분합니다. 객체와 배열을 직접 변경하지 않고 새 값으로 변환합니다. 함수의 입력, 출력과 비동기 실패 경로를 설명합니다.",
    "content": "1. 학습 목표 교육 과정 · 다음: TypeScript 기본 const 와 let 의 값 변경 범위를 구분합니다. 객체와 배열을 직접 변경하지 않고 새 값으로 변환합니다. 함수의 입력, 출력과 비동기 실패 경로를 설명합니다.",
    "url": "./../guides/learning/ai-frontend-growth/01-javascript-foundations.html#section-1"
  },
  {
    "document": "1. JavaScript 기초",
    "section": "AI와 함께 연습",
    "excerpt": "AI에게 배열 변환과 비동기 요청이 포함된 짧은 예제를 만들게 합니다. 각 함수의 입력, 반환값과 실패 가능성을 먼저 설명해 달라고 요청합니다. 원본 객체를 직접 변경하는 부분과 처리되지 않은 Promise를 찾아 달라고 요청합니다. 직접 요구를 하나 바꾸고 AI가 수정한 Diff를 확인합니다. 이 JavaScript 코드에서 값의 입력과 출력, 배열 변환, 비동기 실패 경로를 설명해줘. 바…",
    "content": "4. AI와 함께 연습 AI에게 배열 변환과 비동기 요청이 포함된 짧은 예제를 만들게 합니다. 각 함수의 입력, 반환값과 실패 가능성을 먼저 설명해 달라고 요청합니다. 원본 객체를 직접 변경하는 부분과 처리되지 않은 Promise를 찾아 달라고 요청합니다. 직접 요구를 하나 바꾸고 AI가 수정한 Diff를 확인합니다. 이 JavaScript 코드에서 값의 입력과 출력, 배열 변환, 비동기 실패 경로를 설명해줘. 바로 수정하지 말고 원본 값을 직접 변경하는 부분과 처리되지 않은 Promise부터 찾아줘.",
    "url": "./../guides/learning/ai-frontend-growth/01-javascript-foundations.html#section-4"
  },
  {
    "document": "10. WebView Bridge와 보안",
    "section": "계약과 보안 질문",
    "excerpt": "지원 Method, 입력, 성공 결과와 오류 형식은 무엇인가? 사용자 취소, 권한 거부, 미지원과 Timeout을 어떻게 구분하는가? 최소 App Version과 하위 호환 범위는 무엇인가? 로그에 남길 진단 코드와 제거할 민감정보는 무엇인가? 로그아웃과 사용자 전환 때 Cookie, Query Cache와 UI 상태를 어떻게 정리하는가? 이 Native 기능에 필요한 Bridge 계약 질문…",
    "content": "4. 계약과 보안 질문 지원 Method, 입력, 성공 결과와 오류 형식은 무엇인가? 사용자 취소, 권한 거부, 미지원과 Timeout을 어떻게 구분하는가? 최소 App Version과 하위 호환 범위는 무엇인가? 로그에 남길 진단 코드와 제거할 민감정보는 무엇인가? 로그아웃과 사용자 전환 때 Cookie, Query Cache와 UI 상태를 어떻게 정리하는가? 이 Native 기능에 필요한 Bridge 계약 질문을 정리해줘. 화면·Adapter·Native·Backend 책임을 나누고 취소·권한 거부·미지원·Timeout을 구분해줘. 실제 계약이 없는 필드명과 전역 객체명은 확정하지 마.",
    "url": "./../guides/learning/ai-frontend-growth/10-webview-bridge-and-security.html#section-4"
  },
  {
    "document": "10. WebView Bridge와 보안",
    "section": "꼭 알아야 할 경계",
    "excerpt": "영역 책임 WebView 서비스 UI, 사용자 입력과 업무 흐름 Bridge Adapter 지원 여부, 입력·응답 검증과 Promise 연결 Flutter Native OS 권한, 카메라·위치·파일과 기기 기능 Backend 인증, 권한과 업무 데이터의 최종 판단 Bridge는 인증 토큰 전달 수단이 아닙니다. Native 호출은 사용자 동작으로 시작하고 취소, 권한 거부, 미지원과 시스템…",
    "content": "2. 꼭 알아야 할 경계 영역 책임 WebView 서비스 UI, 사용자 입력과 업무 흐름 Bridge Adapter 지원 여부, 입력·응답 검증과 Promise 연결 Flutter Native OS 권한, 카메라·위치·파일과 기기 기능 Backend 인증, 권한과 업무 데이터의 최종 판단 Bridge는 인증 토큰 전달 수단이 아닙니다. Native 호출은 사용자 동작으로 시작하고 취소, 권한 거부, 미지원과 시스템 오류를 구분합니다. 입력과 응답 검증 Bridge TypeScript 선언은 실제 Native 응답을 보장하지 않습니다. Adapter에서 지원 Version, 응답 식별자와 Payload를 Runtime에 확인하고 화면에는 검증된 결과나 구분 가능한 오류만 반환합니다. 요청 수명과 중복 실행 Bridge 요청이 여러 개 동시에 발생할 수 있으면 요청과 응답을 연결할 식별자, Timeout과 중복 실행 정책이 필요합니다. 결제·예약처럼 결과가 중복 반영될 수 있는 동작은 화면 버튼 비활성화만으로 안전하다고 판단하지 않고 Native와 Backend의 멱등성 계약을 확인합니다. 노출 가능한 최소 표면 필요한 Method만 Adapter로 공개하고 임의 Method명이나 JavaScript 실행 문자열을 전달하는 범용 통로를 만들지 않습니다. URL, 로그, 오류 메시지와 분석 Event에 민감정보가 섞이지 않는지 데이터 흐름 전체를 확인합니다.",
    "url": "./../guides/learning/ai-frontend-growth/10-webview-bridge-and-security.html#section-2"
  },
  {
    "document": "10. WebView Bridge와 보안",
    "section": "마스터 실습과 증거",
    "excerpt": "카메라 또는 파일 선택 Capability를 타입 안전 Adapter로 구현합니다. Bridge 없음, 지원하지 않는 Version, 잘못된 Payload, Timeout, 중복 응답과 사용자 취소를 주입합니다. Web fallback과 App 담당자에게 확인할 계약 질문을 함께 제출합니다. 통과 기준: 화면과 Native 구현의 결합을 Adapter에서 차단하고, 입력·응답·오류·Versi…",
    "content": "7. 마스터 실습과 증거 카메라 또는 파일 선택 Capability를 타입 안전 Adapter로 구현합니다. Bridge 없음, 지원하지 않는 Version, 잘못된 Payload, Timeout, 중복 응답과 사용자 취소를 주입합니다. Web fallback과 App 담당자에게 확인할 계약 질문을 함께 제출합니다. 통과 기준: 화면과 Native 구현의 결합을 Adapter에서 차단하고, 입력·응답·오류·Version·요청 수명을 계약으로 설명할 수 있어야 합니다. 10. WebView Bridge와 보안",
    "url": "./../guides/learning/ai-frontend-growth/10-webview-bridge-and-security.html#section-7"
  },
  {
    "document": "10. WebView Bridge와 보안",
    "section": "완료 확인",
    "excerpt": "Native 기능이 필요한 이유와 Web 구현 범위를 설명할 수 있습니다. Bridge 미지원 환경을 안전한 실패 상태로 처리할 수 있습니다. URL, Storage, Bridge와 로그에 포함하면 안 되는 값을 구분할 수 있습니다. Bridge 응답 검증, 요청 식별, Timeout과 중복 실행 정책을 계약 질문으로 만들 수 있습니다. 화면이 Native 전역 객체와 범용 실행 통로에 직접…",
    "content": "5. 완료 확인 Native 기능이 필요한 이유와 Web 구현 범위를 설명할 수 있습니다. Bridge 미지원 환경을 안전한 실패 상태로 처리할 수 있습니다. URL, Storage, Bridge와 로그에 포함하면 안 되는 값을 구분할 수 있습니다. Bridge 응답 검증, 요청 식별, Timeout과 중복 실행 정책을 계약 질문으로 만들 수 있습니다. 화면이 Native 전역 객체와 범용 실행 통로에 직접 의존하는 코드를 발견할 수 있습니다. 이전 단계 · 11단계 테스트와 디버깅으로",
    "url": "./../guides/learning/ai-frontend-growth/10-webview-bridge-and-security.html#section-5"
  },
  {
    "document": "10. WebView Bridge와 보안",
    "section": "코드 읽기",
    "excerpt": "type NativeCapability = \"location\" | \"qrScan\" ; interface NativeBridge { isAvailable(capability: NativeCapability): boolean ; request(capability: NativeCapability, params?: unknown ): Promise < unknown >; } 화면은 Android·i…",
    "content": "3. 코드 읽기 type NativeCapability = \"location\" | \"qrScan\" ; interface NativeBridge { isAvailable(capability: NativeCapability): boolean ; request(capability: NativeCapability, params?: unknown ): Promise < unknown >; } 화면은 Android·iOS 전역 객체 대신 Adapter만 사용합니다. 외부 응답은 unknown 으로 받고 기능별 Parser가 확인하며, 호출자가 지정한 Generic 타입으로 검증을 건너뛰지 않습니다. 실제 채널명, Method, Version, Timeout과 오류 형식은 App 담당자와 확정한 계약으로 교체합니다.",
    "url": "./../guides/learning/ai-frontend-growth/10-webview-bridge-and-security.html#section-3"
  },
  {
    "document": "10. WebView Bridge와 보안",
    "section": "학습 목표",
    "excerpt": "이전: 서버·클라이언트 상태 · 교육 과정 · 다음: 테스트와 디버깅 WebView, Native, Bridge와 Backend의 책임을 구분합니다. 화면 컴포넌트에서 플랫폼 전역 객체를 직접 호출하지 않습니다. 인증 토큰, 카드정보와 개인정보를 URL·Bridge·로그에 포함하지 않습니다.",
    "content": "1. 학습 목표 이전: 서버·클라이언트 상태 · 교육 과정 · 다음: 테스트와 디버깅 WebView, Native, Bridge와 Backend의 책임을 구분합니다. 화면 컴포넌트에서 플랫폼 전역 객체를 직접 호출하지 않습니다. 인증 토큰, 카드정보와 개인정보를 URL·Bridge·로그에 포함하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/10-webview-bridge-and-security.html#section-1"
  },
  {
    "document": "10. WebView Bridge와 보안",
    "section": "Bridge 프로토콜 심화",
    "excerpt": "Capability별 타입 연결 하나의 request(method: string, payload: unknown) 를 화면에 노출하지 않습니다. Capability Map으로 Method마다 입력, 성공 결과와 오류를 연결하고 Adapter 내부에서 Runtime 검증합니다. 화면은 Android·iOS 전역 객체와 Payload 형식을 알지 않습니다. Version과 수명 App Versi…",
    "content": "6. Bridge 프로토콜 심화 Capability별 타입 연결 하나의 request(method: string, payload: unknown) 를 화면에 노출하지 않습니다. Capability Map으로 Method마다 입력, 성공 결과와 오류를 연결하고 Adapter 내부에서 Runtime 검증합니다. 화면은 Android·iOS 전역 객체와 Payload 형식을 알지 않습니다. Version과 수명 App Version, 지원 Capability, 요청 식별자, Timeout, 중복 응답, 화면 이탈과 App Background 전환을 계약에 포함합니다. 응답이 늦게 도착했을 때 이미 제거된 화면이나 다른 사용자 상태를 변경하지 않게 합니다. 최소 노출과 Origin WebView에 필요한 기능만 노출하고 호출 가능한 Origin과 Navigation 정책을 App 담당자와 합의합니다. 문자열 실행, 범용 파일 접근, 토큰 전체 반환처럼 권한이 큰 기능을 편의를 위해 공개하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/10-webview-bridge-and-security.html#section-6"
  },
  {
    "document": "11. 테스트와 디버깅",
    "section": "검사 선택",
    "excerpt": "기획과 Backend API 계약이 확정되기 전에는 API Mock을 만들지 않습니다. 계약 확정 후 사용할 수 있는 Backend 환경에서 필요한 상태를 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 테스트 범위·관리 책임을 정한 뒤 API Mock 도입 판단 기준 을 확인합니다. 검사 확인 범위 Typecheck 타입과 모듈 경계 오류 Lint Hook, 비동기 패턴과…",
    "content": "2. 검사 선택 기획과 Backend API 계약이 확정되기 전에는 API Mock을 만들지 않습니다. 계약 확정 후 사용할 수 있는 Backend 환경에서 필요한 상태를 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 테스트 범위·관리 책임을 정한 뒤 API Mock 도입 판단 기준 을 확인합니다. 검사 확인 범위 Typecheck 타입과 모듈 경계 오류 Lint Hook, 비동기 패턴과 정적으로 찾을 수 있는 접근성 오류 Test 입력, 상태 변화, 오류 처리와 사용자에게 보이는 결과 Build 병합·통합 시 Production 구성과 전체 연결 기본 순서는 Typecheck → Lint → Test입니다. 테스트 도구와 스크립트는 실제 앱의 설치 상태를 확인하며, 문서의 후보 도구가 설치된 것처럼 가정하지 않습니다. 가장 작은 신뢰 가능한 경계를 테스트 순수 변환과 승인된 계약의 Parser는 입력·출력을 직접 테스트하고, 컴포넌트는 사용자 역할·이름·행동과 결과를 확인합니다. API 요청 경계는 실제 Backend 환경에서 먼저 검증하고, 선택한 Mock 도구가 있더라도 실제 연동 검증을 대신하지 않습니다. Mock은 Front-end 테스트 범위에서 선택한다 Fixture와 Handler는 승인된 API 계약에서 파생하며 Front-end가 계약보다 먼저 만들지 않습니다. 별도 Mock이 필요하면 Front-end 책임자 또는 프로젝트 담당자가 대상 상태, 관리 책임과 폐기 시점을 정합니다. API 동작과 기준 데이터는 Backend가 승인한 계약이 전달되기 전까지 TBD 로 남기고, Mock이 계약을 바꾸지 않는 테스트 도구임을 Backend에 공유합니다. 재현에서 원인까지 증거를 연결 오류 문구만 보고 코드를 바꾸지 않습니다. 사용자 입력, Route, 요청 Payload, 응답 Status·본문, Parser 결과, Query 상태와 렌더링 결과를 순서대로 좁힙니다. AI의 원인 후보마다 확인할 관찰값을 요구하고 확인되지 않은 후보를 사실처럼 기록하지 않습니다. 테스트 통과의 한계 단위·컴포넌트 테스트는 실제 브라우저 Layout, Focus, WebView Bridge와 배포 설정을 보장하지 않습니다. 변경 위험에 따라 실제 화면, 모바일 너비, 키보드, Network와 WebView 기기 동작을 별도로 확인합니다.",
    "url": "./../guides/learning/ai-frontend-growth/11-testing-and-debugging.html#section-2"
  },
  {
    "document": "11. 테스트와 디버깅",
    "section": "디버깅과 AI 협업",
    "excerpt": "재현 조건, 기대 결과와 실제 결과를 분리합니다. 오류 메시지를 없애기 전에 처음 잘못된 데이터나 상태가 생긴 지점을 찾습니다. AI에게 원인 후보와 확인 순서를 요청하고 하나씩 검증합니다. 버그 수정 후 위험이 크면 회귀 Test나 명시적 검수 항목을 남깁니다. 이 오류를 바로 수정하지 말고 재현 조건, 기대 결과와 실제 결과를 정리해줘. 원인 후보를 가능성 순으로 제시하고 각 후보를 확인…",
    "content": "4. 디버깅과 AI 협업 재현 조건, 기대 결과와 실제 결과를 분리합니다. 오류 메시지를 없애기 전에 처음 잘못된 데이터나 상태가 생긴 지점을 찾습니다. AI에게 원인 후보와 확인 순서를 요청하고 하나씩 검증합니다. 버그 수정 후 위험이 크면 회귀 Test나 명시적 검수 항목을 남깁니다. 이 오류를 바로 수정하지 말고 재현 조건, 기대 결과와 실제 결과를 정리해줘. 원인 후보를 가능성 순으로 제시하고 각 후보를 확인할 가장 작은 방법을 알려줘. 수정 후 필요한 회귀 테스트도 사용자 동작 기준으로 제안해줘.",
    "url": "./../guides/learning/ai-frontend-growth/11-testing-and-debugging.html#section-4"
  },
  {
    "document": "11. 테스트와 디버깅",
    "section": "마스터 실습과 증거",
    "excerpt": "간헐적으로 이전 사용자 데이터가 보이는 결함을 진단합니다. 최소 재현, 시간순 증거, 세 가지 가설과 반증, Root Cause, 수정 전후 테스트를 제출합니다. 테스트가 잡지 못하는 실제 환경 위험도 별도로 적습니다. 통과 기준: 테스트 개수가 아니라 위험과 검증 경계의 연결을 설명하고, 증상 패치가 아니라 원인을 좁혀 재발 방지까지 제안할 수 있어야 합니다. 11. 테스트와 디버깅",
    "content": "7. 마스터 실습과 증거 간헐적으로 이전 사용자 데이터가 보이는 결함을 진단합니다. 최소 재현, 시간순 증거, 세 가지 가설과 반증, Root Cause, 수정 전후 테스트를 제출합니다. 테스트가 잡지 못하는 실제 환경 위험도 별도로 적습니다. 통과 기준: 테스트 개수가 아니라 위험과 검증 경계의 연결을 설명하고, 증상 패치가 아니라 원인을 좁혀 재발 방지까지 제안할 수 있어야 합니다. 11. 테스트와 디버깅",
    "url": "./../guides/learning/ai-frontend-growth/11-testing-and-debugging.html#section-7"
  },
  {
    "document": "11. 테스트와 디버깅",
    "section": "완료 확인",
    "excerpt": "검사 하나가 통과해도 다른 검사를 대체하지 못하는 이유를 설명할 수 있습니다. 위험도가 높은 로직과 사용자 흐름을 우선 테스트할 수 있습니다. Lint Disable, Test Skip과 무조건 재시도로 오류를 숨기지 않습니다. Parser·컴포넌트·요청 경계 중 어떤 수준을 테스트해야 하는지 선택할 수 있습니다. 실제 Backend 환경을 우선하고 필요한 경우에만 Front-end 범위에서…",
    "content": "5. 완료 확인 검사 하나가 통과해도 다른 검사를 대체하지 못하는 이유를 설명할 수 있습니다. 위험도가 높은 로직과 사용자 흐름을 우선 테스트할 수 있습니다. Lint Disable, Test Skip과 무조건 재시도로 오류를 숨기지 않습니다. Parser·컴포넌트·요청 경계 중 어떤 수준을 테스트해야 하는지 선택할 수 있습니다. 실제 Backend 환경을 우선하고 필요한 경우에만 Front-end 범위에서 선택한 Mock 도구의 범위와 한계를 설명할 수 있습니다. 입력부터 화면 결과까지 증거를 따라가며 AI의 원인 추측을 검증할 수 있습니다. 이전 단계 · 12단계 기능 통합과 리뷰로",
    "url": "./../guides/learning/ai-frontend-growth/11-testing-and-debugging.html#section-5"
  },
  {
    "document": "11. 테스트와 디버깅",
    "section": "위험 기반 검증과 원인 추적",
    "excerpt": "테스트 수준 선택 Pure Function은 Unit, 컴포넌트 상호작용은 Integration, 실제 사용자 핵심 경로는 End-to-End (E2E) Test 가 적합할 수 있습니다. 모든 테스트를 같은 비율로 만들지 말고 실패 가능성, 사용자 영향과 탐지 난이도로 우선순위를 정합니다. Mock의 신뢰 한계 Mock은 Front-end 분기를 재현하지만 실제 API, 브라우저 Layout…",
    "content": "6. 위험 기반 검증과 원인 추적 테스트 수준 선택 Pure Function은 Unit, 컴포넌트 상호작용은 Integration, 실제 사용자 핵심 경로는 End-to-End (E2E) Test 가 적합할 수 있습니다. 모든 테스트를 같은 비율로 만들지 말고 실패 가능성, 사용자 영향과 탐지 난이도로 우선순위를 정합니다. Mock의 신뢰 한계 Mock은 Front-end 분기를 재현하지만 실제 API, 브라우저 Layout, 인증 Cookie, CORS, WebView와 배포 구성을 보장하지 않습니다. 실제 계약과 다른 Mock이 테스트를 통과시키는 위험을 막기 위해 출처와 관리 책임을 기록합니다. 증거 기반 디버깅 재현 조건을 고정하고 관찰 사실과 가설을 분리합니다. Network Timing, Console Stack, React State, 서버 요청 식별자를 시간 순서로 연결한 뒤 가장 작은 반증 실험을 수행합니다. 수정 전 실패하는 회귀 테스트를 먼저 만들 수 있는지 검토합니다.",
    "url": "./../guides/learning/ai-frontend-growth/11-testing-and-debugging.html#section-6"
  },
  {
    "document": "11. 테스트와 디버깅",
    "section": "코드 읽기",
    "excerpt": "const user = userEvent. setup (); render ( < ReservationForm /> ); await user. type ( screen. getByLabelText ( \"예약자 이름\" ), \"홍길동\" , ); await user. click ( screen. getByRole ( \"button\" , { name: \"예약하기\" }), ); 역할과 Label로 요소…",
    "content": "3. 코드 읽기 const user = userEvent. setup (); render ( < ReservationForm /> ); await user. type ( screen. getByLabelText ( \"예약자 이름\" ), \"홍길동\" , ); await user. click ( screen. getByRole ( \"button\" , { name: \"예약하기\" }), ); 역할과 Label로 요소를 찾으면 접근 가능한 사용 방식과 가까운 테스트가 됩니다. 내부 State, Tailwind 클래스와 라이브러리 자체 동작은 기본 검증 대상이 아닙니다.",
    "url": "./../guides/learning/ai-frontend-growth/11-testing-and-debugging.html#section-3"
  },
  {
    "document": "11. 테스트와 디버깅",
    "section": "학습 목표",
    "excerpt": "이전: WebView Bridge와 보안 · 교육 과정 · 다음: 기능 통합과 리뷰 Typecheck, Lint, Test와 Build의 역할을 구분합니다. 구현 세부사항보다 사용자 동작과 결과를 테스트합니다. AI에게 바로 수정시키기 전에 오류 원인과 영향 범위를 확인합니다.",
    "content": "1. 학습 목표 이전: WebView Bridge와 보안 · 교육 과정 · 다음: 기능 통합과 리뷰 Typecheck, Lint, Test와 Build의 역할을 구분합니다. 구현 세부사항보다 사용자 동작과 결과를 테스트합니다. AI에게 바로 수정시키기 전에 오류 원인과 영향 범위를 확인합니다.",
    "url": "./../guides/learning/ai-frontend-growth/11-testing-and-debugging.html#section-1"
  },
  {
    "document": "12. 기능 통합과 리뷰",
    "section": "기능 통합 단계 완료 기준",
    "excerpt": "다음 내용을 AI의 도움을 받아도 좋지만 최종적으로 개발자가 설명하고 승인할 수 있어야 합니다. 이 기능의 사용자 목표와 실패 경로 컴포넌트와 파일을 나눈 이유 각 State의 소유자와 선택한 도구 외부 입력을 검증하는 경계 담당자와 확인한 계약과 아직 미확정인 항목 자동 검사와 직접 확인한 결과 다음 변경에서 주의해야 할 회귀 위험 API 미확정 상태에서 정리한 Backend 질문과 남아…",
    "content": "5. 기능 통합 단계 완료 기준 다음 내용을 AI의 도움을 받아도 좋지만 최종적으로 개발자가 설명하고 승인할 수 있어야 합니다. 이 기능의 사용자 목표와 실패 경로 컴포넌트와 파일을 나눈 이유 각 State의 소유자와 선택한 도구 외부 입력을 검증하는 경계 담당자와 확인한 계약과 아직 미확정인 항목 자동 검사와 직접 확인한 결과 다음 변경에서 주의해야 할 회귀 위험 API 미확정 상태에서 정리한 Backend 질문과 남아 있는 TBD 로그아웃·사용자 전환 때 제거해야 할 사용자 범위 상태 자동 검사와 실제 화면·Network·WebView 검증이 각각 보장하는 범위 기능 통합 단계 완료는 AI 없이 모든 코드를 작성하는 상태가 아닙니다. AI에게 더 정확한 맥락을 제공하고 잘못된 가정과 구현을 발견하며 제품과 기술 결정에 책임질 수 있는 상태입니다. 이전 단계 · 13단계 Front-End 보안과 개인정보로 · AI 협업 성장 가이드",
    "url": "./../guides/learning/ai-frontend-growth/12-feature-integration-and-review.html#section-5"
  },
  {
    "document": "12. 기능 통합과 리뷰",
    "section": "마스터 통과 심사",
    "excerpt": "학습자는 30분 동안 설계를 설명하고, 리뷰어가 넣은 새로운 요구와 실패 조건 하나를 작은 변경으로 반영합니다. 이어서 알 수 없는 오류 하나를 증거로 진단하고 Rollback 또는 안전한 배포 범위를 제안합니다. 통과 기준: 기능 동작뿐 아니라 결정 이유, 위험, 미확정 사항, 검증 한계를 설명하고 AI가 만든 잘못된 가정과 과도한 구조를 스스로 수정해야 합니다. 12. 기능 통합과 리뷰",
    "content": "7. 마스터 통과 심사 학습자는 30분 동안 설계를 설명하고, 리뷰어가 넣은 새로운 요구와 실패 조건 하나를 작은 변경으로 반영합니다. 이어서 알 수 없는 오류 하나를 증거로 진단하고 Rollback 또는 안전한 배포 범위를 제안합니다. 통과 기준: 기능 동작뿐 아니라 결정 이유, 위험, 미확정 사항, 검증 한계를 설명하고 AI가 만든 잘못된 가정과 과도한 구조를 스스로 수정해야 합니다. 12. 기능 통합과 리뷰",
    "url": "./../guides/learning/ai-frontend-growth/12-feature-integration-and-review.html#section-7"
  },
  {
    "document": "12. 기능 통합과 리뷰",
    "section": "병합 전 리뷰",
    "excerpt": "요청하지 않은 기능, 상태, package와 공통화를 추가하지 않았는가? 타입 오류를 any , 근거 없는 as , ! 와 검사 비활성화로 숨기지 않았는가? 서버, 폼과 UI 상태의 소유자가 구분되어 있는가? API·Bridge 계약의 미확정 사항을 코드로 고정하지 않았는가? 로딩, 빈 값, 오류, 취소와 중복 제출을 필요한 범위에서 처리했는가? 의미 있는 HTML, 토큰, 키보드와 Focu…",
    "content": "4. 병합 전 리뷰 요청하지 않은 기능, 상태, package와 공통화를 추가하지 않았는가? 타입 오류를 any , 근거 없는 as , ! 와 검사 비활성화로 숨기지 않았는가? 서버, 폼과 UI 상태의 소유자가 구분되어 있는가? API·Bridge 계약의 미확정 사항을 코드로 고정하지 않았는가? 로딩, 빈 값, 오류, 취소와 중복 제출을 필요한 범위에서 처리했는가? 의미 있는 HTML, 토큰, 키보드와 Focus를 유지하는가? 변경 위험에 맞는 Test와 실제 화면 검증 근거가 있는가? 기획과 API 계약 확정 전에 Request·Response와 Mock 구현을 선행하지 않았는가? API 함수와 Parser가 Backend가 승인한 계약에서 작성되었는가? AI가 조사 범위를 벗어난 파일, 새 계층과 일정 계획을 임의로 확장하지 않았는가?",
    "url": "./../guides/learning/ai-frontend-growth/12-feature-integration-and-review.html#section-4"
  },
  {
    "document": "12. 기능 통합과 리뷰",
    "section": "종합 기능 실습",
    "excerpt": "조회·편집·권한·오류가 있는 하나의 기능을 선택합니다. 사용자 흐름, 상태 전이, 미확정 계약 질문을 먼저 작성하고 승인된 범위만 구현합니다. 정적 UI, 입력, 검증, API 또는 Bridge, 실패 상태, 테스트 순으로 작은 Diff를 쌓습니다. 필수 제출물 정상·로딩·빈 값·오류·취소·중복 실행 상태표 상태 소유권, 컴포넌트 책임과 Server·Client 경계 기록 승인된 계약과 코드…",
    "content": "6. 종합 기능 실습 조회·편집·권한·오류가 있는 하나의 기능을 선택합니다. 사용자 흐름, 상태 전이, 미확정 계약 질문을 먼저 작성하고 승인된 범위만 구현합니다. 정적 UI, 입력, 검증, API 또는 Bridge, 실패 상태, 테스트 순으로 작은 Diff를 쌓습니다. 필수 제출물 정상·로딩·빈 값·오류·취소·중복 실행 상태표 상태 소유권, 컴포넌트 책임과 Server·Client 경계 기록 승인된 계약과 코드 필드의 추적표, 남은 TBD 타입·Parser·요청 또는 Bridge Adapter와 실패 테스트 키보드·반응형·실제 환경 수동 검수 결과 AI에게 맡긴 작업, 거절한 제안과 개발자가 직접 결정한 내용 리뷰 우선순위 Blocker는 데이터 노출, 권한 우회, 계약 추측, 사용자 흐름 손상과 복구 불가능한 변경입니다. 그 다음 정확성, 회귀, 접근성, 성능, 유지보수 비용 순으로 봅니다. 취향 차이와 출시를 막아야 하는 문제를 구분합니다.",
    "url": "./../guides/learning/ai-frontend-growth/12-feature-integration-and-review.html#section-6"
  },
  {
    "document": "12. 기능 통합과 리뷰",
    "section": "통합 목표",
    "excerpt": "이전: 테스트와 디버깅 · 교육 과정 · 다음: Front-End 보안과 개인정보 사용자 행동과 완료 조건을 구현 전에 정의합니다. 상태, 타입, API·Bridge 계약과 실패 경로를 연결합니다. AI의 Diff와 실제 검사 결과를 검토해 병합 여부를 판단합니다.",
    "content": "1. 통합 목표 이전: 테스트와 디버깅 · 교육 과정 · 다음: Front-End 보안과 개인정보 사용자 행동과 완료 조건을 구현 전에 정의합니다. 상태, 타입, API·Bridge 계약과 실패 경로를 연결합니다. AI의 Diff와 실제 검사 결과를 검토해 병합 여부를 판단합니다.",
    "url": "./../guides/learning/ai-frontend-growth/12-feature-integration-and-review.html#section-1"
  },
  {
    "document": "12. 기능 통합과 리뷰",
    "section": "통합 실습 기능",
    "excerpt": "실제 프로젝트에서 작은 기능 하나를 선택합니다. 예를 들어 이용권 목록 조회와 필터, 예약자 정보 입력 또는 지원 여부를 포함한 QR 스캔 진입처럼 하나의 사용자 목표가 분명한 기능이 적절합니다. 기능 전체를 한 번에 생성하지 않고 다음 순서로 진행합니다. 사용자 행동, 정상·로딩·빈 값·오류·취소 상태 정의 기존 소스, 컴포넌트, 토큰과 설치 package 조사 Backend 또는 App…",
    "content": "2. 통합 실습 기능 실제 프로젝트에서 작은 기능 하나를 선택합니다. 예를 들어 이용권 목록 조회와 필터, 예약자 정보 입력 또는 지원 여부를 포함한 QR 스캔 진입처럼 하나의 사용자 목표가 분명한 기능이 적절합니다. 기능 전체를 한 번에 생성하지 않고 다음 순서로 진행합니다. 사용자 행동, 정상·로딩·빈 값·오류·취소 상태 정의 기존 소스, 컴포넌트, 토큰과 설치 package 조사 Backend 또는 App 계약 확인과 미확정 항목 분리 Props, 외부 입력과 State 소유자 설계 정적 UI → 상호작용 → 데이터 연결 → 오류 상태 순서 구현 위험 기반 Test, Typecheck, Lint와 실제 WebView 확인 API가 확정되지 않은 기능의 진행 기준 기획 흐름과 Backend API 계약이 확정되지 않았다면 Request·Response 가정, Runtime Parser, Fixture와 Handler를 구현하지 않습니다. 현재 확인된 사용자 행동, 필요한 화면 상태와 Backend 질문을 정리하고 endpoint, method, status, 필드와 인증 방식은 TBD 로 남깁니다. Backend가 승인한 계약과 사용할 수 있는 개발 환경이 전달되면 Path·Method·Status에 맞춰 기능 API와 Parser를 처음 작성합니다. 실제 환경에서 재현하기 어려운 상태가 확인된 경우에만 Front-end 책임자 또는 프로젝트 담당자가 Front-end 테스트 범위와 관리 책임을 정해 Mock 도구를 검토합니다. Backend가 제공해야 하는 환경과 API 동작은 확인되기 전까지 TBD 로 유지합니다. 세션에서 회원 기능까지의 통합 과제 세션 확인 중, 비로그인, 로그인과 확인 실패를 구분합니다. 로그인 사용자만 회원 Query를 실행하고 세션과 회원 모델을 분리합니다. 회원 조회·수정의 성공, 필드 오류, 권한 실패와 네트워크 오류를 사용할 수 있는 Backend 환경과 필요한 경우 승인된 계약 기반의 Front-end 재현 도구에서 확인합니다. 수정 성공 후 Cache 반영과 오류 후 입력 보존을 확인합니다. 로그아웃과 사용자 전환 뒤 이전 사용자 데이터가 남지 않는지 확인합니다. 계약 확정 후 구현 기준은 요청 계층 과 세션과 회원 경계 를 사용합니다. 실제 환경에서 별도 재현 도구가 필요한 경우 API Mock 도입 판단 기준 을 확인합니다.",
    "url": "./../guides/learning/ai-frontend-growth/12-feature-integration-and-review.html#section-2"
  },
  {
    "document": "12. 기능 통합과 리뷰",
    "section": "AI 작업 요청",
    "excerpt": "이 기능을 프로젝트 가이드와 기존 소스를 기준으로 조사해줘. 바로 구현하지 말고 사용자 행동, 화면 상태, 상태 소유자, 필요한 타입, API·Bridge 계약 질문, 재사용 코드와 작은 구현 단계를 먼저 정리해줘. 확인되지 않은 요구는 추측하지 말고 별도로 표시해줘. 합의 후에는 한 단계씩 구현하고 각 단계마다 변경 이유와 검사 결과를 설명해줘. AI의 설명은 실제 명령 결과나 브라우저 검…",
    "content": "3. AI 작업 요청 이 기능을 프로젝트 가이드와 기존 소스를 기준으로 조사해줘. 바로 구현하지 말고 사용자 행동, 화면 상태, 상태 소유자, 필요한 타입, API·Bridge 계약 질문, 재사용 코드와 작은 구현 단계를 먼저 정리해줘. 확인되지 않은 요구는 추측하지 말고 별도로 표시해줘. 합의 후에는 한 단계씩 구현하고 각 단계마다 변경 이유와 검사 결과를 설명해줘. AI의 설명은 실제 명령 결과나 브라우저 검증을 대신하지 않습니다. 확인하지 못한 항목은 완료 결과에 남깁니다.",
    "url": "./../guides/learning/ai-frontend-growth/12-feature-integration-and-review.html#section-3"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "과정 완료 기준",
    "excerpt": "신뢰하지 않는 입력과 위험한 출력 지점을 코드에서 찾을 수 있습니다. 인증, 권한과 UI 제한의 책임을 구분할 수 있습니다. 자격 증명과 개인정보의 저장·전달·삭제 경로를 설명할 수 있습니다. Client 검증, 자동 Test와 서버·기기 통합 검증의 한계를 설명할 수 있습니다. React·Next.js의 공식 보안 공지를 기준으로 실제 설치·배포 Version의 영향 여부와 필요한 대응을…",
    "content": "6. 과정 완료 기준 신뢰하지 않는 입력과 위험한 출력 지점을 코드에서 찾을 수 있습니다. 인증, 권한과 UI 제한의 책임을 구분할 수 있습니다. 자격 증명과 개인정보의 저장·전달·삭제 경로를 설명할 수 있습니다. Client 검증, 자동 Test와 서버·기기 통합 검증의 한계를 설명할 수 있습니다. React·Next.js의 공식 보안 공지를 기준으로 실제 설치·배포 Version의 영향 여부와 필요한 대응을 판단할 수 있습니다. AI의 “안전하다”는 설명을 근거 없이 승인하지 않고 확인할 파일과 설정을 지정할 수 있습니다. 확인된 문제, 미확정 계약과 검증하지 못한 위험을 구분해 병합 여부를 판단할 수 있습니다. 이전 단계 · 교육 과정 다시 보기 · Front-End 보안 기준 확인",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-6"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "기능 단위 보안 리뷰",
    "excerpt": "모든 보안 항목을 기능마다 기계적으로 적용하지 않습니다. 먼저 해당 기능에 실제로 존재하는 입력·출력·저장·전달 경계를 찾고, 영향이 있는 항목만 다음 순서로 확인합니다. 기능이 받는 값을 API, 사용자 입력, URL, Storage, SDK와 Bridge로 나눕니다. 각 값이 검증되고 변환되는 파일과 최종 출력·저장·전달 위치를 연결합니다. 인증, 권한, CSRF, CORS, Cookie…",
    "content": "4. 기능 단위 보안 리뷰 모든 보안 항목을 기능마다 기계적으로 적용하지 않습니다. 먼저 해당 기능에 실제로 존재하는 입력·출력·저장·전달 경계를 찾고, 영향이 있는 항목만 다음 순서로 확인합니다. 기능이 받는 값을 API, 사용자 입력, URL, Storage, SDK와 Bridge로 나눕니다. 각 값이 검증되고 변환되는 파일과 최종 출력·저장·전달 위치를 연결합니다. 인증, 권한, CSRF, CORS, Cookie와 세션 정책 중 확인된 계약만 표시합니다. 사용자 전환, 오류, 취소, 중복 실행과 오래된 응답에서 남는 데이터를 확인합니다. Client Bundle, Source Map, Network, 로그와 분석 도구에서 노출되는 값을 확인합니다. React·Next.js 공식 보안 공지와 Lock File, 실제 설치·배포 Version을 비교하고 고위험 취약점의 Patch·재배포 여부를 확인합니다. 자동 Test와 실제 Browser·WebView·Backend 통합 검증의 범위를 구분합니다. 이 기능을 Front-End 보안 기준으로 검토해줘. 먼저 외부 입력 → 검증 → 화면·저장·전달의 데이터 흐름을 작성해줘. 그다음 XSS, URL·Redirect, 인증·권한, Cookie·CSRF, Client 저장소, 환경변수·Secret, 로그·개인정보, Bridge·파일과 새 의존성을 검토해줘. 확인한 파일과 설정을 근거로 작성하고 Backend·App·배포 계약은 추측하지 마. 수정은 요청하지 않았으므로 문제와 확인 방법만 제시해줘.",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-4"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "반드시 이해할 보안 경계",
    "excerpt": "보안 경계는 값이나 실행 책임이 한 영역에서 다른 영역으로 넘어가는 지점입니다. API 응답이 Front-end로 들어올 때, URL 값을 화면 상태로 사용할 때, Browser 저장값을 다시 읽을 때와 WebView가 Native App 기능을 호출할 때가 대표적인 예입니다. “Client를 신뢰하지 않는다”는 Browser와 WebView의 값을 사용하지 말라는 뜻이 아닙니다. 사용자가…",
    "content": "2. 반드시 이해할 보안 경계 보안 경계는 값이나 실행 책임이 한 영역에서 다른 영역으로 넘어가는 지점입니다. API 응답이 Front-end로 들어올 때, URL 값을 화면 상태로 사용할 때, Browser 저장값을 다시 읽을 때와 WebView가 Native App 기능을 호출할 때가 대표적인 예입니다. “Client를 신뢰하지 않는다”는 Browser와 WebView의 값을 사용하지 말라는 뜻이 아닙니다. 사용자가 값을 확인·변경할 수 있고 이전 Version의 값이 남을 수도 있으므로, 그 값만으로 권한이나 중요한 업무 결과를 확정하지 않는다는 뜻입니다. 경계 개발자가 판단할 내용 입력 API, URL, Storage, 외부 SDK와 Bridge 응답을 어디에서 Runtime 검증하는가? 출력 React Escape를 유지하는가? HTML, URL, Script와 CSS의 위험한 실행 경계가 있는가? 인증·권한 UI 제한과 Backend 최종 검증을 구분하는가? 401 과 403 의 의미를 단정하지 않는가? 저장 자격 증명, 개인정보, Query Cache와 Persist 상태의 수명과 삭제 조건은 무엇인가? 전달 URL, Network, Redirect, Deep Link, Bridge, 분석과 로그에 어떤 값이 포함되는가? 실행 환경 Front-end가 사용하는 공개 환경값과 외부 Resource는 무엇인가? Backend·배포·보안 담당이 CSP와 허용 Origin을 어디에 적용하는가? 공급망 새 package가 필요한가? Lock File, 실제 설치·배포 Version, 공식 보안 공지와 업데이트 책임을 확인했는가? TypeScript 타입과 Runtime 검증 TypeScript 타입은 개발 중 코드의 실수를 줄여주지만 실행 중 들어온 API·Storage·Bridge 응답을 자동으로 검사하지 않습니다. 아래처럼 응답을 바로 단정하면 서버 변경, 오래된 저장값 또는 잘못된 외부 응답이 타입 검사 없이 화면으로 들어옵니다. type User = { id: string ; name: string } // 타입 선언만으로 실제 응답 형태가 보장되지는 않습니다. const user = ( await response. json ()) as User 승인된 API 계약이 전달된 뒤 Front-end 요청 경계에서 실제 값의 형태와 필수 항목을 확인하고, 검증 실패를 정상적인 오류 상태로 처리합니다. 사용할 Schema 도구와 Parser 구현은 API 계약이 확정되기 전에 만들지 않습니다. React 기본 출력과 XSS React는 JSX 표현식의 일반 문자열을 Escape(HTML 코드를 실행하지 않고 글자로 표시하는 처리)합니다. 따라서 {userInput} 처럼 출력하는 기본 경로는 유지합니다. 반면 dangerouslySetInnerHTML , 문자열로 만든 HTML, 검증하지 않은 외부 URL처럼 기본 보호를 우회하는 지점은 별도로 검토해야 합니다. XSS(Cross-Site Scripting)는 외부에서 들어온 문자열이 화면에서 Script처럼 실행되는 공격입니다. CSP(Content Security Policy)는 실행 가능한 리소스를 제한하는 추가 방어 수단이지만, 위험한 HTML 출력 자체를 안전하게 바꾸지는 않습니다. 화면 제한과 실제 권한 Menu나 Button을 숨기는 것은 사용할 수 없는 기능을 보여주지 않는 사용자 경험 처리입니다. 사용자는 Client 코드와 요청값을 변경할 수 있으므로, 숨긴 Button의 API를 직접 호출하는 것까지 막지는 못합니다. Front-end는 화면 상태를 올바르게 표현하고, 데이터 접근·소유권·업무 규칙의 최종 판단은 승인된 Backend 계약에서 처리되는지 확인합니다. Storage와 공개되는 Client 값 localStorage , sessionStorage , IndexedDB와 Persist 상태는 사용자가 열람·수정할 수 있고 로그아웃 뒤에도 남을 수 있습니다. Theme나 접힘 상태처럼 영향이 작은 값은 허용값과 기본값을 확인하여 사용할 수 있지만, role: \"admin\" 같은 저장값만으로 권한을 부여해서는 안 됩니다. NEXT_PUBLIC_ 환경변수와 Client Component에 포함된 값은 최종적으로 Browser에 전달됩니다. 이름에 SECRET 이나 KEY 가 들어가도 보호되지 않으므로 서버 자격 증명과 Private Key를 넣지 않습니다. 의존성과 공급망 package를 하나 설치하면 직접 선택한 코드뿐 아니라 하위 의존성과 설치 Script도 함께 실행될 수 있습니다. 유명 package와 공식 Registry도 계정이나 배포 권한이 침해되면 악성 Version이 게시될 수 있으므로, 필요성·Lock File 변경·공식 보안 공지와 실제 설치 Version을 함께 확인합니다. 최신 Version을 무조건 설치하는 것과 오래된 Version을 계속 유지하는 것 모두 기준이 아닙니다. 초기 도입은 공식 지원·보안 공지·호환성을 검토한 안정 Version을 고정하고, 고위험 취약점이 확인되면 현재 사용 계열의 공식 수정 Version을 우선 적용합니다.",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-2"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "보안 마스터 실습과 Fail Gate",
    "excerpt": "12단계에서 완성한 기능의 데이터 흐름도를 만들고 XSS, CSRF, 권한, 사용자 간 캐시 격리, Storage, Bridge, 로그와 Dependency 위험을 검토합니다. Front-end에서 해결할 항목과 Backend·App·배포 담당자에게 확인할 항목을 분리합니다. 즉시 미통과: 사용자 간 데이터 노출, Client만의 권한 검증, 인증정보의 URL·로그 저장, 신뢰하지 않은 HT…",
    "content": "8. 보안 마스터 실습과 Fail Gate 12단계에서 완성한 기능의 데이터 흐름도를 만들고 XSS, CSRF, 권한, 사용자 간 캐시 격리, Storage, Bridge, 로그와 Dependency 위험을 검토합니다. Front-end에서 해결할 항목과 Backend·App·배포 담당자에게 확인할 항목을 분리합니다. 즉시 미통과: 사용자 간 데이터 노출, Client만의 권한 검증, 인증정보의 URL·로그 저장, 신뢰하지 않은 HTML 실행, 계약이 없는 보안 정책의 임의 확정이 하나라도 남으면 다른 점수와 관계없이 과정을 완료할 수 없습니다. 최종 통과 기준: 위협을 과장하거나 축소하지 않고 실제 데이터 흐름과 공격 조건을 근거로 우선순위를 정하며, 방어의 한계와 담당자별 책임을 설명할 수 있어야 합니다. 13. Front-End 보안과 개인정보",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-8"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "위협 모델과 방어 심화",
    "excerpt": "데이터 흐름과 신뢰 경계 사용자 입력, URL, API, Storage, 외부 Software Development Kit (SDK), Analytics와 Bridge 사이에서 데이터가 어디로 이동하고 저장되는지 그립니다. 각 경계에서 공격자 능력, 보호 대상, 검증 책임과 로그 노출을 기록합니다. 브라우저 보안 약어 이해 Cross-Origin Resource Sharing (CORS) :…",
    "content": "7. 위협 모델과 방어 심화 데이터 흐름과 신뢰 경계 사용자 입력, URL, API, Storage, 외부 Software Development Kit (SDK), Analytics와 Bridge 사이에서 데이터가 어디로 이동하고 저장되는지 그립니다. 각 경계에서 공격자 능력, 보호 대상, 검증 책임과 로그 노출을 기록합니다. 브라우저 보안 약어 이해 Cross-Origin Resource Sharing (CORS) : 서버가 허용한 다른 Origin의 응답을 브라우저가 읽도록 제어합니다. 인증·권한 기능은 아닙니다. Content Security Policy (CSP) : 브라우저가 로드·실행할 리소스를 제한해 공격 영향을 줄입니다. Cross-Site Request Forgery (CSRF) : 로그인된 브라우저가 원치 않는 상태 변경 요청을 보내게 하는 공격입니다. Cross-Site Scripting (XSS) : 신뢰할 수 없는 Script가 페이지에서 실행되는 공격입니다. CORS를 느슨하게 하는 것으로 CSRF를 해결하거나, CSP 하나로 XSS가 완전히 사라진다고 설명하면 통과하지 않습니다. Cookie 인증의 SameSite·CSRF 방어와 Backend 권한 검증은 실제 배포 계약으로 확인합니다. 개인정보 최소화와 공급망 필요한 데이터만 요청·표시·저장하고 URL, Client Log, 오류 추적과 Analytics에 식별자가 남지 않는지 확인합니다. 새 Dependency는 필요성, 유지보수 상태, License, Lock File 변화, 알려진 취약점과 제거 비용을 검토합니다.",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-7"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "통합 실습",
    "excerpt": "12단계에서 완성한 기능을 그대로 사용해 보안 리뷰를 수행합니다. 새 기능을 만들기보다 이미 구현한 세션·회원 조회·수정 또는 Bridge 기능의 데이터 흐름을 추적합니다. 실습 결과는 Front-end에서 바로 수정할 항목 , Backend·App·배포 담당과 확인할 항목 , 현재 계약이 없어 판단할 수 없는 TBD 로 나눕니다. 확인되지 않은 인증·Cookie·CSP·API 방식을 실습…",
    "content": "5. 통합 실습 12단계에서 완성한 기능을 그대로 사용해 보안 리뷰를 수행합니다. 새 기능을 만들기보다 이미 구현한 세션·회원 조회·수정 또는 Bridge 기능의 데이터 흐름을 추적합니다. 실습 결과는 Front-end에서 바로 수정할 항목 , Backend·App·배포 담당과 확인할 항목 , 현재 계약이 없어 판단할 수 없는 TBD 로 나눕니다. 확인되지 않은 인증·Cookie·CSP·API 방식을 실습 과정에서 임의로 확정하지 않습니다. 외부 응답 Parser와 잘못된 응답 테스트 권한 없는 사용자와 다른 사용자 식별자 처리 로그아웃 후 Cache·Persist·폼 입력 정리 민감정보가 URL, 로그, Mock Fixture와 오류 화면에 없는지 확인 Redirect·외부 URL 또는 Bridge Method의 허용 범위 확인 확인하지 못한 Backend·App·CSP·Cookie 계약 목록 작성 React2Shell을 사례로 공식 공지 확인, 영향 Version 판별, Patch·재배포와 자격 증명 교체 판단 연습",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-5"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "학습 목표",
    "excerpt": "이전: 기능 통합과 리뷰 · 교육 과정 · 보안 기준 원본 Browser와 WebView Client가 신뢰 경계가 아닌 이유를 설명합니다. 외부 입력에서 화면, URL, 저장소, 로그와 Bridge까지 데이터 흐름을 추적합니다. AI가 만든 코드의 XSS, 권한 오해, Secret·개인정보 노출과 사용자 전환 위험을 발견합니다. Front-end가 처리할 항목과 Backend·App·배포…",
    "content": "1. 학습 목표 이전: 기능 통합과 리뷰 · 교육 과정 · 보안 기준 원본 Browser와 WebView Client가 신뢰 경계가 아닌 이유를 설명합니다. 외부 입력에서 화면, URL, 저장소, 로그와 Bridge까지 데이터 흐름을 추적합니다. AI가 만든 코드의 XSS, 권한 오해, Secret·개인정보 노출과 사용자 전환 위험을 발견합니다. Front-end가 처리할 항목과 Backend·App·배포 계약이 필요한 항목을 구분합니다.",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-1"
  },
  {
    "document": "13. Front-End 보안과 개인정보",
    "section": "흔한 잘못된 판단",
    "excerpt": "아래 항목은 도구나 기능 자체가 잘못됐다는 뜻이 아닙니다. 한 가지 보호 장치가 다른 보안 책임까지 해결한다고 확대 해석하는 것이 문제입니다. TypeScript 타입이 있으므로 API와 Bridge 응답도 안전하다고 판단합니다. React가 기본 Escape하므로 dangerouslySetInnerHTML 과 동적 URL도 자동으로 안전하다고 생각합니다. Menu와 Button을 숨겼으므로…",
    "content": "3. 흔한 잘못된 판단 아래 항목은 도구나 기능 자체가 잘못됐다는 뜻이 아닙니다. 한 가지 보호 장치가 다른 보안 책임까지 해결한다고 확대 해석하는 것이 문제입니다. TypeScript 타입이 있으므로 API와 Bridge 응답도 안전하다고 판단합니다. React가 기본 Escape하므로 dangerouslySetInnerHTML 과 동적 URL도 자동으로 안전하다고 생각합니다. Menu와 Button을 숨겼으므로 권한이 통제됐다고 표현합니다. 환경변수 이름에 Secret이 들어가면 Client에서도 보호된다고 생각합니다. Cookie의 SameSite 만으로 모든 CSRF가 해결됐다고 단정합니다. Client의 MIME·확장자 검사만으로 업로드 파일이 안전하다고 판단합니다. CSP를 추가했으므로 XSS 원인을 수정하지 않아도 된다고 생각합니다. npm audit fix --force 를 검토 없이 실행해 취약점과 Breaking Change가 모두 해결됐다고 판단합니다. 프로젝트 생성 때 최신 Version을 설치했으므로 이후 React·Next.js 보안 공지를 확인하지 않아도 된다고 생각합니다. WAF, 입력 검증이나 CSP를 적용했으므로 취약한 Framework package를 업데이트하지 않아도 된다고 판단합니다.",
    "url": "./../guides/learning/ai-frontend-growth/13-frontend-security-and-privacy.html#section-3"
  },
  {
    "document": "2. TypeScript 기본",
    "section": "꼭 알아야 할 내용",
    "excerpt": "추론 우선 초기값만으로 명확한 지역 변수와 간단한 반환 타입은 TypeScript에 맡깁니다. Props, 함수 입력과 모듈 경계처럼 사용법을 결정하는 값은 타입으로 표현합니다. 가능한 값 제한 상태가 몇 가지로 정해져 있으면 넓은 string 보다 Literal Union을 사용합니다. 불가능한 값이 컴파일 단계에서 들어오지 못하게 하는 것이 목적입니다. null 처리 null 과 unde…",
    "content": "2. 꼭 알아야 할 내용 추론 우선 초기값만으로 명확한 지역 변수와 간단한 반환 타입은 TypeScript에 맡깁니다. Props, 함수 입력과 모듈 경계처럼 사용법을 결정하는 값은 타입으로 표현합니다. 가능한 값 제한 상태가 몇 가지로 정해져 있으면 넓은 string 보다 Literal Union을 사용합니다. 불가능한 값이 컴파일 단계에서 들어오지 못하게 하는 것이 목적입니다. null 처리 null 과 undefined 가능성을 조건문으로 확인합니다. ! 로 검사를 건너뛰면 실제 실행 오류 가능성은 사라지지 않습니다. 상태를 판별 가능한 Union으로 표현 isLoading , isError , data? 처럼 서로 모순될 수 있는 속성을 늘어놓기보다 상태를 구분하는 Literal 속성을 둡니다. 각 분기에서 필요한 값만 가지게 하여 로딩인데 데이터가 있는 것 같은 불가능한 조합을 타입 단계에서 제거합니다. 누락 없는 분기 switch 의 마지막에서 never 를 확인하면 새 상태가 추가됐을 때 빠진 UI 처리를 발견할 수 있습니다. 기본값으로 조용히 흡수하면 제품 상태가 추가되어도 기존 화면으로 잘못 표시될 수 있습니다. 타입 보존 도구의 목적 satisfies 는 값의 구체적인 추론을 유지하면서 요구 형태를 검사할 때 사용합니다. Generic은 입력과 출력의 실제 관계가 있을 때만 사용하며, 타입을 고급스럽게 보이게 하려는 Wrapper에는 추가하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/02-typescript-basics.html#section-2"
  },
  {
    "document": "2. TypeScript 기본",
    "section": "마스터 실습과 증거",
    "excerpt": "결제 또는 예약 상태를 최소 여섯 상태의 판별 가능한 Union으로 모델링합니다. 새 상태 하나를 추가해 누락된 UI, Analytics와 버튼 정책이 모두 컴파일 단계에서 발견되는지 확인합니다. 잘못된 as , ! , 선택 속성 남용이 숨기는 버그도 한 개씩 재현합니다. 통과 기준: 타입 오류를 없애는 것이 아니라 도메인의 가능한 값과 전이를 정확히 표현하고, 타입 검사와 실행 중 검증의…",
    "content": "7. 마스터 실습과 증거 결제 또는 예약 상태를 최소 여섯 상태의 판별 가능한 Union으로 모델링합니다. 새 상태 하나를 추가해 누락된 UI, Analytics와 버튼 정책이 모두 컴파일 단계에서 발견되는지 확인합니다. 잘못된 as , ! , 선택 속성 남용이 숨기는 버그도 한 개씩 재현합니다. 통과 기준: 타입 오류를 없애는 것이 아니라 도메인의 가능한 값과 전이를 정확히 표현하고, 타입 검사와 실행 중 검증의 책임 차이를 자신의 말로 설명할 수 있어야 합니다. 2. TypeScript 기본",
    "url": "./../guides/learning/ai-frontend-growth/02-typescript-basics.html#section-7"
  },
  {
    "document": "2. TypeScript 기본",
    "section": "완료 확인",
    "excerpt": "추론 가능한 값에 타입을 반복하지 않는 이유를 설명할 수 있습니다. string 과 Literal Union 중 적절한 방식을 선택할 수 있습니다. any , as 와 ! 가 오류를 숨길 수 있음을 설명할 수 있습니다. 판별 가능한 Union과 누락 없는 분기로 불가능한 상태를 제거할 수 있습니다. satisfies , Generic과 타입 단언을 각각 어떤 근거로 선택하는지 설명할 수 있습…",
    "content": "5. 완료 확인 추론 가능한 값에 타입을 반복하지 않는 이유를 설명할 수 있습니다. string 과 Literal Union 중 적절한 방식을 선택할 수 있습니다. any , as 와 ! 가 오류를 숨길 수 있음을 설명할 수 있습니다. 판별 가능한 Union과 누락 없는 분기로 불가능한 상태를 제거할 수 있습니다. satisfies , Generic과 타입 단언을 각각 어떤 근거로 선택하는지 설명할 수 있습니다. 이전 단계 · 3단계 TypeScript 경계로",
    "url": "./../guides/learning/ai-frontend-growth/02-typescript-basics.html#section-5"
  },
  {
    "document": "2. TypeScript 기본",
    "section": "코드 읽기",
    "excerpt": "type TicketStatus = | \"available\" | \"used\" | \"expired\" ; function getStatusLabel ( status: TicketStatus ) { if (status === \"available\" ) return \"사용 가능\" ; if (status === \"used\" ) return \"사용 완료\" ; return \"기간 만료\" ; } 함수 안에서…",
    "content": "3. 코드 읽기 type TicketStatus = | \"available\" | \"used\" | \"expired\" ; function getStatusLabel ( status: TicketStatus ) { if (status === \"available\" ) return \"사용 가능\" ; if (status === \"used\" ) return \"사용 완료\" ; return \"기간 만료\" ; } 함수 안에서 조건을 확인할 때 TypeScript가 가능한 타입을 좁힙니다. 문자열 오타와 처리하지 않은 새 상태를 더 일찍 발견할 수 있습니다.",
    "url": "./../guides/learning/ai-frontend-growth/02-typescript-basics.html#section-3"
  },
  {
    "document": "2. TypeScript 기본",
    "section": "타입을 설계 도구로 사용하기",
    "excerpt": "불가능한 상태를 표현하지 않기 isLoading , error , data 를 독립 속성으로 두면 로딩 중인데 데이터와 오류가 동시에 존재하는 조합이 생깁니다. status 를 판별자로 갖는 Union으로 상태별 필수 값을 묶고, UI가 허용된 상태만 받게 합니다. 누락 없는 분기 function assertNever(value: never): never { throw new Error(`처…",
    "content": "6. 타입을 설계 도구로 사용하기 불가능한 상태를 표현하지 않기 isLoading , error , data 를 독립 속성으로 두면 로딩 중인데 데이터와 오류가 동시에 존재하는 조합이 생깁니다. status 를 판별자로 갖는 Union으로 상태별 필수 값을 묶고, UI가 허용된 상태만 받게 합니다. 누락 없는 분기 function assertNever(value: never): never { throw new Error(`처리하지 않은 상태: ${JSON.stringify(value)}`); } function getLabel(state: ViewState) { switch (state.status) { case \"idle\": return \"대기\"; case \"loading\": return \"불러오는 중\"; case \"success\": return `${state.items.length}개`; case \"error\": return state.message; default: return assertNever(state); } } 새 상태가 추가되면 default 의 값이 더 이상 never 가 아니므로 컴파일 오류가 발생해야 합니다. 아무 값이나 반환하는 기본 분기는 누락을 숨깁니다. satisfies 와 Generic의 경계 satisfies 는 값의 구체적인 Literal 정보를 보존하면서 목표 형태를 검사할 때 사용합니다. Generic은 입력과 출력 사이의 실제 관계를 표현할 때만 도입합니다. 타입 매개변수가 한 번만 등장하거나 호출자가 의미 있는 제약을 얻지 못한다면 평범한 타입이 더 명확합니다.",
    "url": "./../guides/learning/ai-frontend-growth/02-typescript-basics.html#section-6"
  },
  {
    "document": "2. TypeScript 기본",
    "section": "학습 목표",
    "excerpt": "이전: JavaScript 기초 · 교육 과정 · 다음: TypeScript 경계 TypeScript의 추론에 맡길 타입과 직접 표현할 계약을 구분합니다. 정해진 값은 Literal Union으로 제한합니다. 조건문으로 Union을 안전하게 Narrowing합니다.",
    "content": "1. 학습 목표 이전: JavaScript 기초 · 교육 과정 · 다음: TypeScript 경계 TypeScript의 추론에 맡길 타입과 직접 표현할 계약을 구분합니다. 정해진 값은 Literal Union으로 제한합니다. 조건문으로 Union을 안전하게 Narrowing합니다.",
    "url": "./../guides/learning/ai-frontend-growth/02-typescript-basics.html#section-1"
  },
  {
    "document": "2. TypeScript 기본",
    "section": "AI와 함께 연습",
    "excerpt": "AI에게 Boolean 여러 개로 만든 상태를 판별 가능한 Union으로 바꾸게 합니다. 추론 가능한 중복 타입과 지나치게 넓은 string 을 찾게 합니다. any , 근거 없는 as 와 ! 를 사용하지 않는 대안을 설명하게 합니다. 이 타입이 실제 가능한 상태만 표현하는지 검토해줘. 중복 Boolean과 Optional 속성 때문에 불가능한 조합이 생기는지, Union과 Narrowing…",
    "content": "4. AI와 함께 연습 AI에게 Boolean 여러 개로 만든 상태를 판별 가능한 Union으로 바꾸게 합니다. 추론 가능한 중복 타입과 지나치게 넓은 string 을 찾게 합니다. any , 근거 없는 as 와 ! 를 사용하지 않는 대안을 설명하게 합니다. 이 타입이 실제 가능한 상태만 표현하는지 검토해줘. 중복 Boolean과 Optional 속성 때문에 불가능한 조합이 생기는지, Union과 Narrowing으로 더 단순하게 만들 수 있는지 먼저 설명해줘.",
    "url": "./../guides/learning/ai-frontend-growth/02-typescript-basics.html#section-4"
  },
  {
    "document": "3. TypeScript 경계",
    "section": "꼭 알아야 할 내용",
    "excerpt": "타입이 필요한 경계 컴포넌트 Props, 공개 함수, API·폼·Bridge 입출력처럼 모듈을 통과하는 값은 타입을 정의합니다. 한 컴포넌트에서만 쓰는 짧은 Props 타입은 같은 파일에서 시작합니다. 외부 값은 실행 중에도 확인 TypeScript 타입은 실행 시 사라집니다. JSON 파싱, Storage, 사용자 입력과 Bridge 응답처럼 형태를 신뢰할 수 없는 값은 unknown 으로…",
    "content": "2. 꼭 알아야 할 내용 타입이 필요한 경계 컴포넌트 Props, 공개 함수, API·폼·Bridge 입출력처럼 모듈을 통과하는 값은 타입을 정의합니다. 한 컴포넌트에서만 쓰는 짧은 Props 타입은 같은 파일에서 시작합니다. 외부 값은 실행 중에도 확인 TypeScript 타입은 실행 시 사라집니다. JSON 파싱, Storage, 사용자 입력과 Bridge 응답처럼 형태를 신뢰할 수 없는 값은 unknown 으로 받고 필요한 속성을 확인합니다. 계약과 화면 타입 API 응답과 화면 모델의 의미와 변경 주기가 다르면 분리합니다. 아직 API Schema와 생성 방식이 확정되지 않았다면 임의의 공통 타입 체계를 만들지 않습니다. 검증은 경계에서 한 번 수행 응답을 사용하는 컴포넌트마다 Optional Chaining으로 방어하지 않습니다. API, Storage 또는 Bridge Adapter가 외부 값을 검증하고 내부에는 확인된 타입만 반환합니다. 검증 실패는 빈 값으로 숨기지 않고 계약 불일치로 식별할 수 있어야 합니다. 형태 검증과 의미 검증 속성이 존재하고 문자열이라는 확인만으로 업무상 유효한 값이 되지는 않습니다. 날짜 형식, 허용 상태, 식별자와 nullable 의미는 확정 계약에 맞춰 검증합니다. 계약이 미확정이면 Parser와 Fixture가 임시 가정임을 분명히 남깁니다. 생성 타입의 한계 OpenAPI 등에서 타입을 생성해도 실제 네트워크 응답을 Runtime에 자동 검증하는 것은 아닙니다. 생성 타입, Runtime Schema와 수동 Guard 중 무엇을 사용할지는 계약 원본과 도구가 확정된 뒤 정하되, 외부 값을 근거 없이 단언하지 않는 원칙은 유지합니다.",
    "url": "./../guides/learning/ai-frontend-growth/03-typescript-boundaries.html#section-2"
  },
  {
    "document": "3. TypeScript 경계",
    "section": "마스터 실습과 증거",
    "excerpt": "승인된 정상 응답, 필드 누락, 알 수 없는 Enum, 잘못된 날짜, 빈 본문, JSON이 아닌 본문을 Fixture로 만들고 Parser를 검증합니다. API 계약이 승인되지 않았다면 Parser를 만들지 말고 요청·응답·오류 질문서와 TBD 만 제출합니다. 통과 기준: 외부 unknown 이 안전한 내부 모델이 되는 단일 경계를 찾을 수 있고, 형태 검증·의미 검증·정규화·오류 표시의 책…",
    "content": "7. 마스터 실습과 증거 승인된 정상 응답, 필드 누락, 알 수 없는 Enum, 잘못된 날짜, 빈 본문, JSON이 아닌 본문을 Fixture로 만들고 Parser를 검증합니다. API 계약이 승인되지 않았다면 Parser를 만들지 말고 요청·응답·오류 질문서와 TBD 만 제출합니다. 통과 기준: 외부 unknown 이 안전한 내부 모델이 되는 단일 경계를 찾을 수 있고, 형태 검증·의미 검증·정규화·오류 표시의 책임을 분리할 수 있어야 합니다. 3. TypeScript 경계",
    "url": "./../guides/learning/ai-frontend-growth/03-typescript-boundaries.html#section-7"
  },
  {
    "document": "3. TypeScript 경계",
    "section": "신뢰 경계 설계",
    "excerpt": "형태, 의미와 정규화의 순서 외부 값은 먼저 객체인지, 필요한 필드가 있는지, 필드 타입이 맞는지 확인합니다. 그 다음 날짜 범위, 허용 상태, 필드 사이의 관계 같은 도메인 의미를 검증합니다. 마지막으로 화면이 사용할 내부 모델로 정규화합니다. 검증과 변환이 여러 컴포넌트에 흩어지면 서로 다른 규칙이 생깁니다. 오류도 계약의 일부 Parser는 단순히 true 나 false 만 반환하지 않…",
    "content": "6. 신뢰 경계 설계 형태, 의미와 정규화의 순서 외부 값은 먼저 객체인지, 필요한 필드가 있는지, 필드 타입이 맞는지 확인합니다. 그 다음 날짜 범위, 허용 상태, 필드 사이의 관계 같은 도메인 의미를 검증합니다. 마지막으로 화면이 사용할 내부 모델로 정규화합니다. 검증과 변환이 여러 컴포넌트에 흩어지면 서로 다른 규칙이 생깁니다. 오류도 계약의 일부 Parser는 단순히 true 나 false 만 반환하지 않고 필요한 경우 어느 경계에서 어떤 입력이 거부되었는지 구조화된 오류를 제공합니다. 단, 원본 개인정보나 전체 응답을 사용자 메시지와 로그에 그대로 노출하지 않습니다. 생성 타입이 보장하지 않는 것 OpenAPI 같은 명세에서 생성한 타입은 명세와 코드의 정적 연결을 돕지만 실제 서버가 명세를 지킨다는 사실, 오래된 앱의 Bridge 응답, Local Storage 값과 URL 입력을 보장하지 않습니다. 경계별 실제 신뢰 수준을 표로 작성합니다.",
    "url": "./../guides/learning/ai-frontend-growth/03-typescript-boundaries.html#section-6"
  },
  {
    "document": "3. TypeScript 경계",
    "section": "완료 확인",
    "excerpt": "Props 타입이 컴포넌트 사용법을 표현하는지 검토할 수 있습니다. 타입 선언만으로 외부 응답이 안전해지지 않는 이유를 설명할 수 있습니다. Runtime Guard가 필요한 경계를 선택할 수 있습니다. 형태가 잘못된 응답과 업무상 빈 응답을 서로 다른 실패로 처리할 수 있습니다. 생성된 타입이 Runtime 검증을 대신하지 못하는 이유를 설명할 수 있습니다. 이전 단계 · 4단계 React…",
    "content": "5. 완료 확인 Props 타입이 컴포넌트 사용법을 표현하는지 검토할 수 있습니다. 타입 선언만으로 외부 응답이 안전해지지 않는 이유를 설명할 수 있습니다. Runtime Guard가 필요한 경계를 선택할 수 있습니다. 형태가 잘못된 응답과 업무상 빈 응답을 서로 다른 실패로 처리할 수 있습니다. 생성된 타입이 Runtime 검증을 대신하지 못하는 이유를 설명할 수 있습니다. 이전 단계 · 4단계 React 컴포넌트와 상태로",
    "url": "./../guides/learning/ai-frontend-growth/03-typescript-boundaries.html#section-5"
  },
  {
    "document": "3. TypeScript 경계",
    "section": "코드 읽기",
    "excerpt": "type Ticket = { id: string ; status: \"available\" | \"used\" ; }; function isTicket ( value: unknown ): value is Ticket { if ( typeof value !== \"object\" || value === null ) return false ; if (!( \"id\" in value) || typeof val…",
    "content": "3. 코드 읽기 type Ticket = { id: string ; status: \"available\" | \"used\" ; }; function isTicket ( value: unknown ): value is Ticket { if ( typeof value !== \"object\" || value === null ) return false ; if (!( \"id\" in value) || typeof value.id !== \"string\" ) return false ; return ( \"status\" in value && (value.status === \"available\" || value.status === \"used\" ) ); } Type Guard는 외부 값을 실제로 확인한 뒤 해당 분기 안에서 구체적인 타입으로 사용할 수 있게 합니다. 실제 계약이 확정되면 필드별 검증 범위를 계약에 맞춥니다.",
    "url": "./../guides/learning/ai-frontend-growth/03-typescript-boundaries.html#section-3"
  },
  {
    "document": "3. TypeScript 경계",
    "section": "학습 목표",
    "excerpt": "이전: TypeScript 기본 · 교육 과정 · 다음: React 컴포넌트와 상태 Props와 함수 입력을 사용자의 의도가 드러나는 타입으로 표현합니다. TypeScript 타입 선언과 Runtime 검증의 차이를 설명합니다. 외부 입력의 unknown 을 확인한 뒤 사용합니다.",
    "content": "1. 학습 목표 이전: TypeScript 기본 · 교육 과정 · 다음: React 컴포넌트와 상태 Props와 함수 입력을 사용자의 의도가 드러나는 타입으로 표현합니다. TypeScript 타입 선언과 Runtime 검증의 차이를 설명합니다. 외부 입력의 unknown 을 확인한 뒤 사용합니다.",
    "url": "./../guides/learning/ai-frontend-growth/03-typescript-boundaries.html#section-1"
  },
  {
    "document": "3. TypeScript 경계",
    "section": "AI와 함께 연습",
    "excerpt": "화면 하나의 Props와 외부 응답 경계를 AI에게 찾게 합니다. 타입 선언만 있고 Runtime 검증이 필요한 입력을 구분하게 합니다. 기능 전용 타입을 공통 폴더로 너무 일찍 이동하지 않았는지 검토하게 합니다. 이 코드에서 모듈 경계를 통과하는 값을 찾아줘. TypeScript 타입만 있으면 충분한 값과 Runtime 검증이 필요한 값을 구분하고, 근거 없는 타입 단언 없이 처리하는 방법…",
    "content": "4. AI와 함께 연습 화면 하나의 Props와 외부 응답 경계를 AI에게 찾게 합니다. 타입 선언만 있고 Runtime 검증이 필요한 입력을 구분하게 합니다. 기능 전용 타입을 공통 폴더로 너무 일찍 이동하지 않았는지 검토하게 합니다. 이 코드에서 모듈 경계를 통과하는 값을 찾아줘. TypeScript 타입만 있으면 충분한 값과 Runtime 검증이 필요한 값을 구분하고, 근거 없는 타입 단언 없이 처리하는 방법을 설명해줘.",
    "url": "./../guides/learning/ai-frontend-growth/03-typescript-boundaries.html#section-4"
  },
  {
    "document": "4. React 컴포넌트와 상태",
    "section": "꼭 알아야 할 내용",
    "excerpt": "컴포넌트 분리 파일 길이나 Figma Frame 수가 아니라 독립적인 책임, 상태 소유권, 재사용 범위와 변경 이유로 나눕니다. 단순한 컴포넌트는 한 파일로 시작합니다. 최소 State 시간에 따라 바뀌고 다른 값에서 계산할 수 없는 값만 State로 저장합니다. 목록 개수, 필터 결과와 표시 문구처럼 Props와 State에서 계산할 수 있는 값은 중복 저장하지 않습니다. 상태 끌어올리기…",
    "content": "2. 꼭 알아야 할 내용 컴포넌트 분리 파일 길이나 Figma Frame 수가 아니라 독립적인 책임, 상태 소유권, 재사용 범위와 변경 이유로 나눕니다. 단순한 컴포넌트는 한 파일로 시작합니다. 최소 State 시간에 따라 바뀌고 다른 값에서 계산할 수 없는 값만 State로 저장합니다. 목록 개수, 필터 결과와 표시 문구처럼 Props와 State에서 계산할 수 있는 값은 중복 저장하지 않습니다. 상태 끌어올리기 여러 자식이 같은 상태를 사용하면 가장 가까운 공통 부모가 상태를 소유하고 필요한 값과 동작을 Props로 전달합니다. 렌더링과 상태 보존 React는 컴포넌트가 트리의 같은 위치에 있는 동안 상태를 보존합니다. 조건부 렌더링으로 위치가 바뀌거나 key 가 달라지면 상태가 초기화될 수 있습니다. 목록의 배열 순서를 key 로 사용하면 삽입·정렬 때 다른 항목의 입력 상태가 재사용될 수 있습니다. 제어 주체를 하나로 유지 같은 값을 부모 Props와 자식 State에 동시에 두면 어느 쪽이 기준인지 불명확해집니다. 외부에서 제어할 값인지 컴포넌트 내부에서만 유지할 값인지 결정하고, Props를 State로 복사하는 코드는 명시적인 초기화 요구가 있을 때만 사용합니다. 공유 범위와 Context Props 전달이 있다는 이유만으로 Context나 전역 Store를 만들지 않습니다. 변경 빈도, 구독 범위와 테스트 영향을 확인하고, 실제로 멀리 떨어진 여러 소비자가 같은 클라이언트 상태를 사용할 때만 공유 경계를 검토합니다.",
    "url": "./../guides/learning/ai-frontend-growth/04-react-components-and-state.html#section-2"
  },
  {
    "document": "4. React 컴포넌트와 상태",
    "section": "마스터 실습과 증거",
    "excerpt": "검색·필터·선택·인라인 편집이 있는 목록을 구현합니다. 먼저 값별 소유자와 수명을 표로 작성하고, Props 복사·Index Key·중복 파생 State가 있는 결함 버전을 리뷰합니다. React DevTools로 불필요한 렌더를 관찰하되 측정 없이 Memoization을 추가하지 않습니다. 통과 기준: 각 State가 왜 그 컴포넌트에 있으며 언제 보존·초기화되는지 설명하고, Context…",
    "content": "7. 마스터 실습과 증거 검색·필터·선택·인라인 편집이 있는 목록을 구현합니다. 먼저 값별 소유자와 수명을 표로 작성하고, Props 복사·Index Key·중복 파생 State가 있는 결함 버전을 리뷰합니다. React DevTools로 불필요한 렌더를 관찰하되 측정 없이 Memoization을 추가하지 않습니다. 통과 기준: 각 State가 왜 그 컴포넌트에 있으며 언제 보존·초기화되는지 설명하고, Context나 전역 Store가 필요한 실제 공유 범위를 증명할 수 있어야 합니다. 4. React 컴포넌트와 상태",
    "url": "./../guides/learning/ai-frontend-growth/04-react-components-and-state.html#section-7"
  },
  {
    "document": "4. React 컴포넌트와 상태",
    "section": "상태와 책임을 설계하기",
    "excerpt": "상태 인벤토리 구현 전에 모든 값을 원본 상태, 파생 값, 서버 상태, URL 상태, 폼 초안과 일시적 UI 상태로 분류합니다. 다른 값에서 계산할 수 있다면 State에 저장하지 않습니다. URL로 공유하거나 새로고침 뒤 복원해야 하는 선택값은 지역 State보다 URL이 적합할 수 있습니다. 상태 보존은 위치와 Key로 결정된다 조건문 모양이 아니라 렌더 트리의 같은 위치와 같은 Key인…",
    "content": "6. 상태와 책임을 설계하기 상태 인벤토리 구현 전에 모든 값을 원본 상태, 파생 값, 서버 상태, URL 상태, 폼 초안과 일시적 UI 상태로 분류합니다. 다른 값에서 계산할 수 있다면 State에 저장하지 않습니다. URL로 공유하거나 새로고침 뒤 복원해야 하는 선택값은 지역 State보다 URL이 적합할 수 있습니다. 상태 보존은 위치와 Key로 결정된다 조건문 모양이 아니라 렌더 트리의 같은 위치와 같은 Key인지가 State 보존을 결정합니다. 사용자나 편집 대상이 바뀔 때 State가 유지되어야 하는지 초기화되어야 하는지 먼저 정하고 Key를 그 정책에 맞게 사용합니다. 컴포넌트 분리의 판단 기준 줄 수가 아니라 변경 이유, 상태 소유권, 재사용되는 행동과 독립 검증 가능성으로 분리합니다. 실제 반복이 없는 범용 Wrapper와 지나치게 많은 Boolean Props는 책임이 불분명하다는 신호입니다.",
    "url": "./../guides/learning/ai-frontend-growth/04-react-components-and-state.html#section-6"
  },
  {
    "document": "4. React 컴포넌트와 상태",
    "section": "완료 확인",
    "excerpt": "State가 아닌 계산 가능한 값을 찾을 수 있습니다. 상태 소유자를 선택한 이유를 설명할 수 있습니다. 컴포넌트를 합치거나 나눌 근거를 책임으로 설명할 수 있습니다. key 와 트리 위치가 상태 보존에 미치는 영향을 설명할 수 있습니다. Props, 지역 State, Context와 전역 Store 중 상태의 제어 주체를 선택할 수 있습니다. 이전 단계 · 5단계 React Effect와…",
    "content": "5. 완료 확인 State가 아닌 계산 가능한 값을 찾을 수 있습니다. 상태 소유자를 선택한 이유를 설명할 수 있습니다. 컴포넌트를 합치거나 나눌 근거를 책임으로 설명할 수 있습니다. key 와 트리 위치가 상태 보존에 미치는 영향을 설명할 수 있습니다. Props, 지역 State, Context와 전역 Store 중 상태의 제어 주체를 선택할 수 있습니다. 이전 단계 · 5단계 React Effect와 폼으로",
    "url": "./../guides/learning/ai-frontend-growth/04-react-components-and-state.html#section-5"
  },
  {
    "document": "4. React 컴포넌트와 상태",
    "section": "코드 읽기",
    "excerpt": "function TicketList ( { tickets }: TicketListProps ) { const [filter, setFilter] = useState < TicketFilter >( \"all\" ); const visibleTickets = tickets. filter ( ( ticket ) => filter === \"all\" || ticket.status === filter,…",
    "content": "3. 코드 읽기 function TicketList ( { tickets }: TicketListProps ) { const [filter, setFilter] = useState < TicketFilter >( \"all\" ); const visibleTickets = tickets. filter ( ( ticket ) => filter === \"all\" || ticket.status === filter, ); return < TicketResults tickets = {visibleTickets} /> ; } visibleTickets 는 기존 데이터와 필터에서 계산되므로 State가 아닙니다. 필터를 바꾸면 렌더링 중 다시 계산됩니다.",
    "url": "./../guides/learning/ai-frontend-growth/04-react-components-and-state.html#section-3"
  },
  {
    "document": "4. React 컴포넌트와 상태",
    "section": "학습 목표",
    "excerpt": "이전: TypeScript 경계 · 교육 과정 · 다음: React Effect와 폼 Props와 State의 책임을 구분합니다. 최소한의 State만 저장하고 파생 값은 계산합니다. 상태를 사용하는 가장 가까운 공통 부모를 소유자로 선택합니다.",
    "content": "1. 학습 목표 이전: TypeScript 경계 · 교육 과정 · 다음: React Effect와 폼 Props와 State의 책임을 구분합니다. 최소한의 State만 저장하고 파생 값은 계산합니다. 상태를 사용하는 가장 가까운 공통 부모를 소유자로 선택합니다.",
    "url": "./../guides/learning/ai-frontend-growth/04-react-components-and-state.html#section-1"
  },
  {
    "document": "4. React 컴포넌트와 상태",
    "section": "AI와 함께 연습",
    "excerpt": "Figma 화면 하나에서 사용자 행동과 바뀌는 값만 먼저 나열하게 합니다. 각 State의 소유자와 파생 값을 AI에게 표로 정리하게 합니다. 컴포넌트 분리가 Figma 계층을 그대로 옮긴 것인지 검토하게 합니다. 이 화면의 값을 Props, State와 파생 값으로 나눠줘. 각 State를 누가 사용하고 변경하는지 확인해 가장 가까운 소유자를 제안하고, Figma 레이어 수가 아니라 책임으…",
    "content": "4. AI와 함께 연습 Figma 화면 하나에서 사용자 행동과 바뀌는 값만 먼저 나열하게 합니다. 각 State의 소유자와 파생 값을 AI에게 표로 정리하게 합니다. 컴포넌트 분리가 Figma 계층을 그대로 옮긴 것인지 검토하게 합니다. 이 화면의 값을 Props, State와 파생 값으로 나눠줘. 각 State를 누가 사용하고 변경하는지 확인해 가장 가까운 소유자를 제안하고, Figma 레이어 수가 아니라 책임으로 컴포넌트를 나눠줘.",
    "url": "./../guides/learning/ai-frontend-growth/04-react-components-and-state.html#section-4"
  },
  {
    "document": "5. React Effect와 폼",
    "section": "꼭 알아야 할 내용",
    "excerpt": "Event 우선 버튼 클릭이나 폼 제출 때문에 실행되는 코드는 Event Handler에 둡니다. State가 바뀔 때 다른 State를 맞추기 위한 Effect는 파생 값이나 Event로 바꿀 수 있는지 먼저 확인합니다. Effect의 역할 Effect는 브라우저 API, 외부 위젯, 구독처럼 React 밖의 시스템과 화면 상태를 동기화할 때 사용합니다. 의존성 경고를 없애기 위해 동작을…",
    "content": "2. 꼭 알아야 할 내용 Event 우선 버튼 클릭이나 폼 제출 때문에 실행되는 코드는 Event Handler에 둡니다. State가 바뀔 때 다른 State를 맞추기 위한 Effect는 파생 값이나 Event로 바꿀 수 있는지 먼저 확인합니다. Effect의 역할 Effect는 브라우저 API, 외부 위젯, 구독처럼 React 밖의 시스템과 화면 상태를 동기화할 때 사용합니다. 의존성 경고를 없애기 위해 동작을 임의로 바꾸거나 규칙을 끄지 않습니다. 폼 책임 React Hook Form은 입력·제출 상태를 관리할 필요가 있는 폼에서 사용합니다. 필드 검증, 서버 업무 오류와 네트워크 오류는 같은 의미로 처리하지 않습니다. Effect 수명과 경쟁 상태 Effect가 요청, 구독, Timer 또는 Event Listener를 시작하면 의존성이 바뀌거나 컴포넌트가 사라질 때 이전 작업을 정리해야 합니다. 늦게 도착한 이전 요청이 최신 결과를 덮지 않도록 취소하거나 결과의 유효성을 확인합니다. 오래된 Closure와 의존성 Effect와 Callback은 생성된 렌더링의 값을 기억합니다. 의존성을 임의로 빼거나 Lint 규칙을 끄면 최신 Props와 State를 보지 못할 수 있습니다. 실행 횟수를 줄이기 전에 Effect가 정말 필요한지, 사용하는 값과 다시 동기화할 조건이 무엇인지 확인합니다. 폼과 서버 Mutation 연결 폼은 입력과 클라이언트 검증을, Mutation은 요청의 진행·성공·실패를 소유합니다. 서버의 필드 오류는 해당 입력에 연결하고, 업무 오류와 일시적 네트워크 오류는 사용자가 취할 수 있는 행동에 맞춰 구분합니다. 성공 후 초기화와 이동 시점은 사용자 흐름으로 결정합니다.",
    "url": "./../guides/learning/ai-frontend-growth/05-react-effects-and-forms.html#section-2"
  },
  {
    "document": "5. React Effect와 폼",
    "section": "마스터 실습과 증거",
    "excerpt": "회원 정보 수정 폼에 동기 검증, 서버 오류 매핑, 제출 취소와 중복 제출 방지를 구현합니다. 느린 응답 중 사용자를 전환하고, 이전 응답이 새 사용자의 폼을 덮지 않는지 테스트합니다. 각 Effect가 동기화하는 외부 시스템을 한 문장으로 설명합니다. 통과 기준: Event와 Effect를 구분하고, 오래된 Closure·누락 Dependency·경쟁 상태를 재현하며, UI 초안과 서버의…",
    "content": "7. 마스터 실습과 증거 회원 정보 수정 폼에 동기 검증, 서버 오류 매핑, 제출 취소와 중복 제출 방지를 구현합니다. 느린 응답 중 사용자를 전환하고, 이전 응답이 새 사용자의 폼을 덮지 않는지 테스트합니다. 각 Effect가 동기화하는 외부 시스템을 한 문장으로 설명합니다. 통과 기준: Event와 Effect를 구분하고, 오래된 Closure·누락 Dependency·경쟁 상태를 재현하며, UI 초안과 서버의 최종 진실이 충돌할 때 복구 정책을 설명할 수 있어야 합니다. 5. React Effect와 폼",
    "url": "./../guides/learning/ai-frontend-growth/05-react-effects-and-forms.html#section-7"
  },
  {
    "document": "5. React Effect와 폼",
    "section": "완료 확인",
    "excerpt": "Event와 Effect의 차이를 실제 코드로 설명할 수 있습니다. 폼 값과 서버 상태를 같은 Store에 넣지 않는 이유를 설명할 수 있습니다. 필드 오류, 업무 오류와 네트워크 오류를 구분할 수 있습니다. Effect의 시작과 정리 경로, 의존성과 경쟁 상태를 검토할 수 있습니다. 폼 상태와 Mutation 상태를 중복 저장하지 않고 성공·실패 UX를 연결할 수 있습니다. 이전 단계 ·…",
    "content": "5. 완료 확인 Event와 Effect의 차이를 실제 코드로 설명할 수 있습니다. 폼 값과 서버 상태를 같은 Store에 넣지 않는 이유를 설명할 수 있습니다. 필드 오류, 업무 오류와 네트워크 오류를 구분할 수 있습니다. Effect의 시작과 정리 경로, 의존성과 경쟁 상태를 검토할 수 있습니다. 폼 상태와 Mutation 상태를 중복 저장하지 않고 성공·실패 UX를 연결할 수 있습니다. 이전 단계 · 6단계 Next.js App Router로",
    "url": "./../guides/learning/ai-frontend-growth/05-react-effects-and-forms.html#section-5"
  },
  {
    "document": "5. React Effect와 폼",
    "section": "코드 읽기",
    "excerpt": "async function handleSubmit ( values: ReservationValues ) { if (isSubmitting) return ; setIsSubmitting ( true ); try { await saveReservation (values); } finally { setIsSubmitting ( false ); } } 제출은 사용자 Event에서 시작하며 중복 실행…",
    "content": "3. 코드 읽기 async function handleSubmit ( values: ReservationValues ) { if (isSubmitting) return ; setIsSubmitting ( true ); try { await saveReservation (values); } finally { setIsSubmitting ( false ); } } 제출은 사용자 Event에서 시작하며 중복 실행을 막습니다. 실제 구현에서는 성공, 필드 오류, 업무 오류와 네트워크 오류에 맞는 화면 결과를 연결합니다.",
    "url": "./../guides/learning/ai-frontend-growth/05-react-effects-and-forms.html#section-3"
  },
  {
    "document": "5. React Effect와 폼",
    "section": "학습 목표",
    "excerpt": "이전: React 컴포넌트와 상태 · 교육 과정 · 다음: Next.js App Router 사용자 Event와 외부 시스템 동기화를 위한 Effect를 구분합니다. 입력 값, 필드 오류, 제출 상태와 서버 오류를 구분합니다. 제출 중 중복 요청을 막고 사용자에게 진행 상태를 제공합니다.",
    "content": "1. 학습 목표 이전: React 컴포넌트와 상태 · 교육 과정 · 다음: Next.js App Router 사용자 Event와 외부 시스템 동기화를 위한 Effect를 구분합니다. 입력 값, 필드 오류, 제출 상태와 서버 오류를 구분합니다. 제출 중 중복 요청을 막고 사용자에게 진행 상태를 제공합니다.",
    "url": "./../guides/learning/ai-frontend-growth/05-react-effects-and-forms.html#section-1"
  },
  {
    "document": "5. React Effect와 폼",
    "section": "AI와 함께 연습",
    "excerpt": "기존 useEffect 마다 어떤 외부 시스템과 동기화하는지 AI에게 설명하게 합니다. 폼의 입력·제출·성공·실패 상태를 먼저 나열하게 합니다. 중복 제출과 서버 오류 원문 노출 여부를 검토하게 합니다. 이 컴포넌트의 useEffect마다 동기화하는 외부 시스템을 설명해줘. Event나 렌더링 중 계산으로 바꿀 수 있는 Effect를 구분하고, 폼 제출의 중복 실행과 오류 상태도 함께 검토해…",
    "content": "4. AI와 함께 연습 기존 useEffect 마다 어떤 외부 시스템과 동기화하는지 AI에게 설명하게 합니다. 폼의 입력·제출·성공·실패 상태를 먼저 나열하게 합니다. 중복 제출과 서버 오류 원문 노출 여부를 검토하게 합니다. 이 컴포넌트의 useEffect마다 동기화하는 외부 시스템을 설명해줘. Event나 렌더링 중 계산으로 바꿀 수 있는 Effect를 구분하고, 폼 제출의 중복 실행과 오류 상태도 함께 검토해줘.",
    "url": "./../guides/learning/ai-frontend-growth/05-react-effects-and-forms.html#section-4"
  },
  {
    "document": "5. React Effect와 폼",
    "section": "Effect와 폼의 수명 설계",
    "excerpt": "Effect 제거 검토 Effect를 작성하기 전에 렌더 중 계산, 사용자 Event, State 초기값, Key를 통한 초기화로 해결할 수 있는지 확인합니다. 다른 State를 맞추기 위한 Effect는 중간의 잘못된 화면과 추가 렌더를 만들기 쉽습니다. Setup과 Cleanup의 대칭 구독, Timer, Event Listener와 요청은 생성에 대응하는 정리 경로가 있어야 합니다. D…",
    "content": "6. Effect와 폼의 수명 설계 Effect 제거 검토 Effect를 작성하기 전에 렌더 중 계산, 사용자 Event, State 초기값, Key를 통한 초기화로 해결할 수 있는지 확인합니다. 다른 State를 맞추기 위한 Effect는 중간의 잘못된 화면과 추가 렌더를 만들기 쉽습니다. Setup과 Cleanup의 대칭 구독, Timer, Event Listener와 요청은 생성에 대응하는 정리 경로가 있어야 합니다. Dependency가 바뀌는 순간 이전 Effect의 Cleanup이 먼저 실행된다는 점을 이용해 사용자 전환과 화면 이탈에서 오래된 작업을 종료합니다. 폼의 상태 전이 폼을 단순 Boolean 모음으로 다루지 말고 편집 전, 편집 중, 검증 실패, 제출 중, 성공, 서버 거부, 취소 상태로 모델링합니다. 제출 중 중복 실행, 서버 필드 오류, 전체 오류, 응답 전 이탈과 서버 값 변경을 포함합니다.",
    "url": "./../guides/learning/ai-frontend-growth/05-react-effects-and-forms.html#section-6"
  },
  {
    "document": "6. Next.js App Router",
    "section": "꼭 알아야 할 내용",
    "excerpt": "App Router 파일 page 는 Route의 화면, layout 은 하위 Route가 공유하는 UI를 담당합니다. 예약 파일과 실제 배치는 설치된 Next.js 문서와 앱 내부 기준을 확인합니다. Server 기본 상태, Event, Effect와 브라우저 API가 필요하지 않은 컴포넌트는 Server Component로 유지합니다. \"use client\" 는 필요한 Client 경계의…",
    "content": "2. 꼭 알아야 할 내용 App Router 파일 page 는 Route의 화면, layout 은 하위 Route가 공유하는 UI를 담당합니다. 예약 파일과 실제 배치는 설치된 Next.js 문서와 앱 내부 기준을 확인합니다. Server 기본 상태, Event, Effect와 브라우저 API가 필요하지 않은 컴포넌트는 Server Component로 유지합니다. \"use client\" 는 필요한 Client 경계의 시작을 의미합니다. 미확정 정책 SSR·SSG·ISR, 캐싱, Route Handler와 Server Action의 세부 정책은 화면과 API 구조가 확정되기 전까지 AI가 임의로 정하지 않습니다. Server·Client 경계의 데이터 제약 Server Component에서 Client Component로 전달하는 Props는 직렬화 가능한 값이어야 합니다. Browser API, Client Hook과 Event Handler는 Server에서 실행할 수 없고, 서버 전용 비밀값과 모듈이 Client Bundle로 넘어가지 않도록 Import 경계를 확인합니다. Hydration과 첫 화면 일치 서버가 만든 HTML과 브라우저의 첫 렌더링 결과가 달라지면 Hydration 문제가 생깁니다. 렌더링 중 window , 현재 시각, 무작위 값과 Client Storage를 직접 읽어 첫 결과를 바꾸지 않습니다. Client에서만 알 수 있는 값은 명시적인 대기 상태와 동기화 경계를 둡니다. Route 상태와 오류 경계 공유·복원해야 하는 검색과 필터는 URL 상태를 우선 검토합니다. Route의 Loading·Error·Not Found와 컴포넌트 내부의 Query 상태가 각각 어떤 실패를 담당하는지 정하고, 같은 오류를 여러 경계에서 중복 처리하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/06-nextjs-app-router.html#section-2"
  },
  {
    "document": "6. Next.js App Router",
    "section": "렌더링과 실행 경계 심화",
    "excerpt": "요구에서 경계를 선택하기 상태와 Event Handler, Browser API가 필요한 가장 작은 부분만 Client Component로 둡니다. 데이터 접근, 비밀값, 권한에 따른 서버 결정은 Server 경계에 남깁니다. Server Component와 Client Component는 반드시 별도 파일 예시로 작성하고 use client 가 파일 최상단 경계라는 점을 확인합니다. 렌더링…",
    "content": "6. 렌더링과 실행 경계 심화 요구에서 경계를 선택하기 상태와 Event Handler, Browser API가 필요한 가장 작은 부분만 Client Component로 둡니다. 데이터 접근, 비밀값, 권한에 따른 서버 결정은 Server 경계에 남깁니다. Server Component와 Client Component는 반드시 별도 파일 예시로 작성하고 use client 가 파일 최상단 경계라는 점을 확인합니다. 렌더링 전략 Server-Side Rendering (SSR) 은 요청마다 HTML을 만들고, Static Site Generation (SSG) 은 빌드 시 미리 만들며, Incremental Static Regeneration (ISR) 은 정적 결과를 재검증합니다. 이름을 외우기보다 개인화 여부, 신선도, 캐시 격리, 배포 환경을 기준으로 선택합니다. Hydration 실패 분석 시간, 난수, Browser 전용 값과 서버·클라이언트의 다른 데이터가 첫 렌더에 들어가면 Hydration이 불일치할 수 있습니다. 경고를 숨기지 말고 서버 HTML과 첫 Client 결과가 달라진 최초 지점을 찾습니다.",
    "url": "./../guides/learning/ai-frontend-growth/06-nextjs-app-router.html#section-6"
  },
  {
    "document": "6. Next.js App Router",
    "section": "마스터 실습과 증거",
    "excerpt": "공개 콘텐츠, 로그인 사용자 정보, 상호작용 폼이 함께 있는 Route를 설계합니다. 파일별 실행 위치, 직렬화 경계, 캐시·신선도 정책을 표로 제출하고 서버 전용 모듈이 Client Bundle에 들어가지 않는지 확인합니다. 통과 기준: 습관적으로 전체 화면에 use client 를 붙이지 않고, 로딩·오류·Not Found 책임과 사용자별 데이터 격리를 포함한 경계 선택을 설명할 수 있어…",
    "content": "7. 마스터 실습과 증거 공개 콘텐츠, 로그인 사용자 정보, 상호작용 폼이 함께 있는 Route를 설계합니다. 파일별 실행 위치, 직렬화 경계, 캐시·신선도 정책을 표로 제출하고 서버 전용 모듈이 Client Bundle에 들어가지 않는지 확인합니다. 통과 기준: 습관적으로 전체 화면에 use client 를 붙이지 않고, 로딩·오류·Not Found 책임과 사용자별 데이터 격리를 포함한 경계 선택을 설명할 수 있어야 합니다. 6. Next.js App Router",
    "url": "./../guides/learning/ai-frontend-growth/06-nextjs-app-router.html#section-7"
  },
  {
    "document": "6. Next.js App Router",
    "section": "완료 확인",
    "excerpt": "Route와 Layout의 책임을 설명할 수 있습니다. Client Component가 필요한 이유를 구체적으로 말할 수 있습니다. 확정된 App Router 규칙과 미확정 렌더링 정책을 구분할 수 있습니다. Hydration 불일치와 Client Bundle로 서버 전용 코드가 유입되는 위험을 찾을 수 있습니다. URL, Route 경계와 컴포넌트 상태의 책임을 구분할 수 있습니다. 이전…",
    "content": "5. 완료 확인 Route와 Layout의 책임을 설명할 수 있습니다. Client Component가 필요한 이유를 구체적으로 말할 수 있습니다. 확정된 App Router 규칙과 미확정 렌더링 정책을 구분할 수 있습니다. Hydration 불일치와 Client Bundle로 서버 전용 코드가 유입되는 위험을 찾을 수 있습니다. URL, Route 경계와 컴포넌트 상태의 책임을 구분할 수 있습니다. 이전 단계 · 7단계 Tailwind UI와 접근성으로",
    "url": "./../guides/learning/ai-frontend-growth/06-nextjs-app-router.html#section-5"
  },
  {
    "document": "6. Next.js App Router",
    "section": "코드 읽기",
    "excerpt": "// page.tsx · Server Component export default function TicketPage ( ) { return < TicketFilter /> ; } // TicketFilter.tsx · 상태와 Event가 필요한 Client 경계 \"use client\" ; export function TicketFilter ( ) { const [filter, setFilt…",
    "content": "3. 코드 읽기 // page.tsx · Server Component export default function TicketPage ( ) { return < TicketFilter /> ; } // TicketFilter.tsx · 상태와 Event가 필요한 Client 경계 \"use client\" ; export function TicketFilter ( ) { const [filter, setFilter] = useState ( \"all\" ); return < FilterButtons value = {filter} onValueChange = {setFilter} /> ; } Route 전체를 Client로 바꾸지 않고 상호작용이 시작되는 작은 컴포넌트를 경계로 둡니다.",
    "url": "./../guides/learning/ai-frontend-growth/06-nextjs-app-router.html#section-3"
  },
  {
    "document": "6. Next.js App Router",
    "section": "학습 목표",
    "excerpt": "이전: React Effect와 폼 · 교육 과정 · 다음: Tailwind UI와 접근성 page , layout , Loading과 Error 경계의 역할을 구분합니다. Server Component를 기본으로 두고 Client 전환 이유를 설명합니다. 브라우저 API와 Client State가 필요한 작은 경계만 분리합니다.",
    "content": "1. 학습 목표 이전: React Effect와 폼 · 교육 과정 · 다음: Tailwind UI와 접근성 page , layout , Loading과 Error 경계의 역할을 구분합니다. Server Component를 기본으로 두고 Client 전환 이유를 설명합니다. 브라우저 API와 Client State가 필요한 작은 경계만 분리합니다.",
    "url": "./../guides/learning/ai-frontend-growth/06-nextjs-app-router.html#section-1"
  },
  {
    "document": "6. Next.js App Router",
    "section": "AI와 함께 연습",
    "excerpt": "화면의 각 컴포넌트가 상태, Event 또는 브라우저 API를 사용하는지 표시하게 합니다. Client 전환이 필요한 가장 작은 경계를 제안하게 합니다. 현재 프로젝트에서 확정되지 않은 캐싱과 데이터 패칭 가정을 따로 적게 합니다. 이 화면에서 Server Component를 기본으로 유지하고, 상태·Event·브라우저 API가 필요한 가장 작은 Client 경계를 찾아줘. 캐싱과 데이터 패…",
    "content": "4. AI와 함께 연습 화면의 각 컴포넌트가 상태, Event 또는 브라우저 API를 사용하는지 표시하게 합니다. Client 전환이 필요한 가장 작은 경계를 제안하게 합니다. 현재 프로젝트에서 확정되지 않은 캐싱과 데이터 패칭 가정을 따로 적게 합니다. 이 화면에서 Server Component를 기본으로 유지하고, 상태·Event·브라우저 API가 필요한 가장 작은 Client 경계를 찾아줘. 캐싱과 데이터 패칭 정책은 추측하지 말고 확인 항목으로 분리해줘.",
    "url": "./../guides/learning/ai-frontend-growth/06-nextjs-app-router.html#section-4"
  },
  {
    "document": "7. Tailwind UI와 접근성",
    "section": "꼭 알아야 할 내용",
    "excerpt": "토큰 우선 bg-background , text-foreground , border-border 처럼 목적이 드러나는 토큰을 원시 색상보다 우선합니다. 성공·경고·안내 색상이 확정되기 전에는 임의의 색을 제품 의미로 고정하지 않습니다. 기존 UI 우선 src/components/ui 의 shadcn/ui와 프로젝트 컴포넌트를 먼저 확인합니다. 한 화면의 차이는 className 과 cn 으로…",
    "content": "2. 꼭 알아야 할 내용 토큰 우선 bg-background , text-foreground , border-border 처럼 목적이 드러나는 토큰을 원시 색상보다 우선합니다. 성공·경고·안내 색상이 확정되기 전에는 임의의 색을 제품 의미로 고정하지 않습니다. 기존 UI 우선 src/components/ui 의 shadcn/ui와 프로젝트 컴포넌트를 먼저 확인합니다. 한 화면의 차이는 className 과 cn 으로 시작하고 반복이 확인된 뒤 Variant를 추가합니다. 접근성 이동은 Link, 실행은 Button을 사용합니다. 입력에는 Label, 아이콘 Button에는 접근 가능한 이름을 제공하고 Focus 표시와 shadcn/ui의 키보드·ARIA 동작을 유지합니다. 레이아웃은 고정 화면이 아니라 제약으로 구현 디자인 한 장의 좌표를 복사하지 않고 최소·최대 너비, 줄바꿈, Overflow, Safe Area와 터치 영역을 확인합니다. 긴 한국어·영문, 빈 데이터, 작은 화면, 확대와 키보드 표시 상태에서도 핵심 행동이 가려지지 않아야 합니다. 오류와 상태 전달 색상만으로 상태를 구분하지 않습니다. 입력 오류는 설명 문구를 해당 입력과 연결하고, 비동기 오류와 완료 안내는 필요한 경우 role=\"alert\" 또는 Live Region을 사용하되 반복 안내가 발생하지 않는지 확인합니다. Focus 흐름 Dialog·Drawer가 열리고 닫힐 때 Focus 이동과 복귀를 확인합니다. DOM 순서와 시각 순서를 다르게 만드는 CSS를 피하고, 숨겨진 요소가 Tab 순서에 남지 않게 합니다. shadcn/ui의 기본 ARIA와 키보드 동작을 스타일링 과정에서 제거하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/07-tailwind-ui-accessibility.html#section-2"
  },
  {
    "document": "7. Tailwind UI와 접근성",
    "section": "마스터 실습과 증거",
    "excerpt": "복합 폼과 Dialog를 마우스 없이 완료합니다. 320px·200% 확대·긴 문구·고대비 모드에서 검수하고 자동 검사와 수동 키보드 결과를 별도로 기록합니다. 색상만 제거해도 상태가 구분되는지 확인합니다. 통과 기준: 특정 Figma 좌표를 복사하지 않고 Layout 제약을 설명하며, 키보드·Focus·이름·오류 관계를 실제 동작으로 증명해야 합니다. 7. Tailwind UI와 접근성",
    "content": "7. 마스터 실습과 증거 복합 폼과 Dialog를 마우스 없이 완료합니다. 320px·200% 확대·긴 문구·고대비 모드에서 검수하고 자동 검사와 수동 키보드 결과를 별도로 기록합니다. 색상만 제거해도 상태가 구분되는지 확인합니다. 통과 기준: 특정 Figma 좌표를 복사하지 않고 Layout 제약을 설명하며, 키보드·Focus·이름·오류 관계를 실제 동작으로 증명해야 합니다. 7. Tailwind UI와 접근성",
    "url": "./../guides/learning/ai-frontend-growth/07-tailwind-ui-accessibility.html#section-7"
  },
  {
    "document": "7. Tailwind UI와 접근성",
    "section": "완료 확인",
    "excerpt": "Tailwind 클래스가 표현하는 CSS Layout을 설명할 수 있습니다. Semantic Token과 원시 색상의 차이를 설명할 수 있습니다. 자동 Lint가 찾지 못하는 Focus와 실제 키보드 문제를 직접 확인할 수 있습니다. 긴 문구, 확대, Safe Area와 작은 화면에서 레이아웃 제약을 검증할 수 있습니다. 입력 오류, 비동기 상태와 Focus 이동이 보조 기술에 전달되는지 확…",
    "content": "5. 완료 확인 Tailwind 클래스가 표현하는 CSS Layout을 설명할 수 있습니다. Semantic Token과 원시 색상의 차이를 설명할 수 있습니다. 자동 Lint가 찾지 못하는 Focus와 실제 키보드 문제를 직접 확인할 수 있습니다. 긴 문구, 확대, Safe Area와 작은 화면에서 레이아웃 제약을 검증할 수 있습니다. 입력 오류, 비동기 상태와 Focus 이동이 보조 기술에 전달되는지 확인할 수 있습니다. 이전 단계 · 8단계 API 계약과 오류로",
    "url": "./../guides/learning/ai-frontend-growth/07-tailwind-ui-accessibility.html#section-5"
  },
  {
    "document": "7. Tailwind UI와 접근성",
    "section": "제약 기반 UI와 접근성 심화",
    "excerpt": "반응형은 Breakpoint 목록이 아니다 320px 너비, 긴 한국어·영어 문구, 200% 확대, 모바일 키보드, Safe Area와 가로·세로 전환을 입력 조건으로 봅니다. 고정 높이와 무분별한 overflow-hidden 으로 문제를 감추지 않습니다. 접근 가능한 이름과 관계 Label, 설명, 오류와 입력의 관계를 의미 있는 HTML과 aria-describedby 로 연결합니다. A…",
    "content": "6. 제약 기반 UI와 접근성 심화 반응형은 Breakpoint 목록이 아니다 320px 너비, 긴 한국어·영어 문구, 200% 확대, 모바일 키보드, Safe Area와 가로·세로 전환을 입력 조건으로 봅니다. 고정 높이와 무분별한 overflow-hidden 으로 문제를 감추지 않습니다. 접근 가능한 이름과 관계 Label, 설명, 오류와 입력의 관계를 의미 있는 HTML과 aria-describedby 로 연결합니다. ARIA는 올바른 기본 요소가 없을 때 보완하며, Button을 Div로 다시 만들기 위한 도구가 아닙니다. Web Content Accessibility Guidelines (WCAG) 를 추가 기준으로 사용합니다. Focus는 사용자 흐름이다 Dialog가 열리면 적절한 시작점으로 이동하고, 닫히면 호출한 요소로 돌아와야 합니다. 오류 발생 시 첫 오류로 무조건 이동시키기보다 현재 작업과 오류 요약 방식에 맞는 정책을 정합니다. 동적 완료·오류는 필요한 경우 Live Region으로 전달합니다.",
    "url": "./../guides/learning/ai-frontend-growth/07-tailwind-ui-accessibility.html#section-6"
  },
  {
    "document": "7. Tailwind UI와 접근성",
    "section": "코드 읽기",
    "excerpt": "export function TicketCard ( { title, onOpen }: TicketCardProps ) { return ( < article className = \"rounded-lg border border-border bg-card p-4 text-card-foreground\" > < h2 > {title} </ h2 > < Button type = \"button\" onCl…",
    "content": "3. 코드 읽기 export function TicketCard ( { title, onOpen }: TicketCardProps ) { return ( < article className = \"rounded-lg border border-border bg-card p-4 text-card-foreground\" > < h2 > {title} </ h2 > < Button type = \"button\" onClick = {onOpen} > 상세 보기 </ Button > </ article > ); } 색상은 역할 기반 토큰을 사용하고 실행 동작은 Button으로 제공합니다. 화면이 맞아 보여도 긴 문구, 모바일 너비, 키보드와 Focus를 별도로 확인합니다.",
    "url": "./../guides/learning/ai-frontend-growth/07-tailwind-ui-accessibility.html#section-3"
  },
  {
    "document": "7. Tailwind UI와 접근성",
    "section": "학습 목표",
    "excerpt": "이전: Next.js App Router · 교육 과정 · 다음: API 계약과 오류 Tailwind Utility가 표현하는 CSS Layout과 반응형 동작을 설명합니다. 원시 색상보다 의미 기반 토큰과 기존 shadcn/ui를 우선합니다. 의미 있는 HTML, Label, 키보드와 Focus를 확인합니다.",
    "content": "1. 학습 목표 이전: Next.js App Router · 교육 과정 · 다음: API 계약과 오류 Tailwind Utility가 표현하는 CSS Layout과 반응형 동작을 설명합니다. 원시 색상보다 의미 기반 토큰과 기존 shadcn/ui를 우선합니다. 의미 있는 HTML, Label, 키보드와 Focus를 확인합니다.",
    "url": "./../guides/learning/ai-frontend-growth/07-tailwind-ui-accessibility.html#section-1"
  },
  {
    "document": "7. Tailwind UI와 접근성",
    "section": "AI와 함께 연습",
    "excerpt": "AI에게 Figma 값과 기존 토큰·컴포넌트의 매핑을 먼저 조사하게 합니다. 원시 색상, 임의 값과 의미 없는 클릭 요소를 검토하게 합니다. 모바일 너비, 긴 문구, 오류 상태와 키보드 동작을 확인하게 합니다. 이 UI에서 기존 shadcn/ui와 의미 기반 토큰을 먼저 찾아줘. 원시 색상, 불필요한 임의 값, div 클릭, Label·Focus·접근 가능한 이름 누락을 검토하고 모바일 너비…",
    "content": "4. AI와 함께 연습 AI에게 Figma 값과 기존 토큰·컴포넌트의 매핑을 먼저 조사하게 합니다. 원시 색상, 임의 값과 의미 없는 클릭 요소를 검토하게 합니다. 모바일 너비, 긴 문구, 오류 상태와 키보드 동작을 확인하게 합니다. 이 UI에서 기존 shadcn/ui와 의미 기반 토큰을 먼저 찾아줘. 원시 색상, 불필요한 임의 값, div 클릭, Label·Focus·접근 가능한 이름 누락을 검토하고 모바일 너비에서 확인할 항목도 정리해줘.",
    "url": "./../guides/learning/ai-frontend-growth/07-tailwind-ui-accessibility.html#section-4"
  },
  {
    "document": "8. API 계약과 오류",
    "section": "계약과 실패 모델 심화",
    "excerpt": "HTTP 응답은 Status와 본문의 조합 Hypertext Transfer Protocol (HTTP) 응답은 성공 여부만으로 JSON 본문을 보장하지 않습니다. 204, 빈 본문, JSON이 아닌 오류 본문과 잘못된 Content-Type을 구분합니다. Parsing 실패를 서버가 보낸 도메인 오류로 오인하지 않습니다. 재시도는 안전성 결정이다 Timeout과 네트워크 단절 뒤 서버가 요…",
    "content": "6. 계약과 실패 모델 심화 HTTP 응답은 Status와 본문의 조합 Hypertext Transfer Protocol (HTTP) 응답은 성공 여부만으로 JSON 본문을 보장하지 않습니다. 204, 빈 본문, JSON이 아닌 오류 본문과 잘못된 Content-Type을 구분합니다. Parsing 실패를 서버가 보낸 도메인 오류로 오인하지 않습니다. 재시도는 안전성 결정이다 Timeout과 네트워크 단절 뒤 서버가 요청을 처리했는지 알 수 없을 수 있습니다. 조회와 멱등성이 보장된 요청, 결제·예약처럼 중복 실행 위험이 있는 Mutation의 재시도 정책을 다르게 정합니다. 지수 Backoff와 사용자 취소, Offline 복구도 계약에 포함합니다. 브라우저 보안 경계 Cross-Origin Resource Sharing (CORS) 는 서버가 허용한 다른 Origin의 응답을 브라우저가 읽을 수 있게 하는 HTTP 헤더 기반 메커니즘입니다. Front-end에서 우회 옵션을 넣는 문제가 아니며, 인증과 권한을 대신하지도 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/08-api-contracts-and-errors.html#section-6"
  },
  {
    "document": "8. API 계약과 오류",
    "section": "구현 전 계약 확인",
    "excerpt": "요청 계층의 책임과 교체 지점은 API 요청 계층 구현 가이드 를 기준으로 확인합니다. 문서의 URL, 인증 방식과 오류 형태는 참고 구현이며 실제 계약이 아닙니다. 영역 확인할 내용 데이터 필드 이름, 타입, 필수 여부, nullable과 목록의 빈 결과 형식 날짜·시간대, 금액·통화, 정렬과 페이지네이션 권한 인증 주체, 역할별 접근과 401·403 처리 오류 업무 오류 코드, 사용자 표…",
    "content": "2. 구현 전 계약 확인 요청 계층의 책임과 교체 지점은 API 요청 계층 구현 가이드 를 기준으로 확인합니다. 문서의 URL, 인증 방식과 오류 형태는 참고 구현이며 실제 계약이 아닙니다. 영역 확인할 내용 데이터 필드 이름, 타입, 필수 여부, nullable과 목록의 빈 결과 형식 날짜·시간대, 금액·통화, 정렬과 페이지네이션 권한 인증 주체, 역할별 접근과 401·403 처리 오류 업무 오류 코드, 사용자 표시 문구와 재시도 가능 여부 변경 Schema 원본, Type 생성 방식과 하위 호환 정책 문서와 실제 응답이 다르면 AI가 임의로 한쪽에 맞추지 않고 Backend 담당자에게 차이를 확인합니다. 공통 요청 계층의 책임 공통 요청 함수는 Base URL 결합, Header, 응답 본문 처리, Timeout·취소와 공통 오류 형태처럼 전송 계층의 반복만 담당합니다. 업무별 Endpoint, 응답 Parser, Query Key와 사용자 문구는 기능 가까이에 둡니다. 모든 API를 하나의 거대한 Service Class나 Generic Wrapper에 넣지 않습니다. 응답 본문과 Status를 함께 해석 response.ok 만 확인하거나 모든 성공 응답에 json() 을 호출하지 않습니다. 204 , 비어 있는 본문, JSON이 아닌 오류 응답과 잘못된 Content-Type을 구분합니다. 외부 JSON은 unknown 으로 받아 기능 Parser를 통과시킨 뒤 화면에 전달합니다. 오류의 계층 요청 취소, Timeout, 오프라인·네트워크 실패, HTTP 오류, 업무 오류와 응답 형식 오류는 원인과 사용자 행동이 다릅니다. 공통 계층은 진단 가능한 형태를 제공하고, 재시도·재로그인·입력 수정 같은 UX는 기능과 확정 계약에서 결정합니다. 401을 단정하지 않기 모든 401 을 즉시 로그아웃으로 바꾸지 않습니다. 세션 조회의 비로그인 표현, Token 갱신 실패와 기능 API의 인증 만료가 같은지 확인합니다. 403 은 로그인 여부와 별개의 권한 실패로 다룹니다.",
    "url": "./../guides/learning/ai-frontend-growth/08-api-contracts-and-errors.html#section-2"
  },
  {
    "document": "8. API 계약과 오류",
    "section": "마스터 실습과 증거",
    "excerpt": "승인된 계약 하나를 Status·본문·Parser·화면 상태·재시도 정책으로 연결합니다. 204, 400, 401, 403, 404, 409, 429, 500, Timeout, Offline과 취소를 주입하고 사용자 메시지, 로그, 재시도 가능 여부를 표로 제출합니다. 통과 기준: 네트워크 오류, HTTP 오류, Parsing 오류, 도메인 오류와 취소를 구분하며 미확정 계약을 코드로 추측하…",
    "content": "7. 마스터 실습과 증거 승인된 계약 하나를 Status·본문·Parser·화면 상태·재시도 정책으로 연결합니다. 204, 400, 401, 403, 404, 409, 429, 500, Timeout, Offline과 취소를 주입하고 사용자 메시지, 로그, 재시도 가능 여부를 표로 제출합니다. 통과 기준: 네트워크 오류, HTTP 오류, Parsing 오류, 도메인 오류와 취소를 구분하며 미확정 계약을 코드로 추측하지 않아야 합니다. 8. API 계약과 오류",
    "url": "./../guides/learning/ai-frontend-growth/08-api-contracts-and-errors.html#section-7"
  },
  {
    "document": "8. API 계약과 오류",
    "section": "완료 확인",
    "excerpt": "API 구현 전에 nullable과 오류 계약을 질문할 수 있습니다. 사용자에게 필요한 오류 상태를 구분할 수 있습니다. 서버 오류 원문과 Stack Trace를 그대로 노출하면 안 되는 이유를 설명할 수 있습니다. 204 , JSON 오류, Timeout, 취소와 응답 검증 실패를 구분할 수 있습니다. 공통 요청 계층과 기능별 API·Parser의 책임을 나누고 과도한 Wrapper를 거부…",
    "content": "5. 완료 확인 API 구현 전에 nullable과 오류 계약을 질문할 수 있습니다. 사용자에게 필요한 오류 상태를 구분할 수 있습니다. 서버 오류 원문과 Stack Trace를 그대로 노출하면 안 되는 이유를 설명할 수 있습니다. 204 , JSON 오류, Timeout, 취소와 응답 검증 실패를 구분할 수 있습니다. 공통 요청 계층과 기능별 API·Parser의 책임을 나누고 과도한 Wrapper를 거부할 수 있습니다. API 미확정 상태에서 구현을 선행하지 않고 Backend 확인 질문과 TBD 를 정리한 뒤 승인된 계약으로 구현을 시작할 수 있습니다. 이전 단계 · 9단계 서버·클라이언트 상태로",
    "url": "./../guides/learning/ai-frontend-growth/08-api-contracts-and-errors.html#section-5"
  },
  {
    "document": "8. API 계약과 오류",
    "section": "코드 읽기",
    "excerpt": "async function requestTickets ( signal: AbortSignal ) { const response = await fetch ( \"/api/tickets\" , { signal }); if (!response.ok) { throw new RequestFailedError (response.status); } const data: unknown = await respo…",
    "content": "3. 코드 읽기 async function requestTickets ( signal: AbortSignal ) { const response = await fetch ( \"/api/tickets\" , { signal }); if (!response.ok) { throw new RequestFailedError (response.status); } const data: unknown = await response. json (); return parseTickets (data); } 요청 함수는 HTTP Status를 보존하고 외부 JSON을 Parser로 검증합니다. 401 이 세션 만료인지 이 함수에서 단정하지 않으며, 실제 오류 Class와 공통 응답 구조는 API 계약이 확정된 뒤 적용합니다.",
    "url": "./../guides/learning/ai-frontend-growth/08-api-contracts-and-errors.html#section-3"
  },
  {
    "document": "8. API 계약과 오류",
    "section": "학습 목표",
    "excerpt": "이전: Tailwind UI와 접근성 · 교육 과정 · 다음: 서버·클라이언트 상태 요청·응답 필드, nullable, 날짜·금액과 오류 계약을 질문합니다. HTTP 오류, 업무 오류, 인증 만료와 네트워크 오류를 구분합니다. 서버 오류 원문과 민감정보를 사용자나 로그에 노출하지 않습니다.",
    "content": "1. 학습 목표 이전: Tailwind UI와 접근성 · 교육 과정 · 다음: 서버·클라이언트 상태 요청·응답 필드, nullable, 날짜·금액과 오류 계약을 질문합니다. HTTP 오류, 업무 오류, 인증 만료와 네트워크 오류를 구분합니다. 서버 오류 원문과 민감정보를 사용자나 로그에 노출하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/08-api-contracts-and-errors.html#section-1"
  },
  {
    "document": "8. API 계약과 오류",
    "section": "AI와 함께 연습",
    "excerpt": "AI에게 화면에 필요한 데이터에서 Backend 질문 목록을 만들게 합니다. 확인된 계약과 가정한 필드를 분리하게 합니다. 성공, 빈 값, 업무 오류, 인증 만료, Timeout과 오프라인 화면을 제안하게 합니다. 이 화면을 구현하기 전에 Backend에 확인할 API 계약 질문을 만들어줘. 확인된 사실과 추측을 분리하고, 성공·빈 값·업무 오류·401·Timeout·오프라인을 화면에서 어떻…",
    "content": "4. AI와 함께 연습 AI에게 화면에 필요한 데이터에서 Backend 질문 목록을 만들게 합니다. 확인된 계약과 가정한 필드를 분리하게 합니다. 성공, 빈 값, 업무 오류, 인증 만료, Timeout과 오프라인 화면을 제안하게 합니다. 이 화면을 구현하기 전에 Backend에 확인할 API 계약 질문을 만들어줘. 확인된 사실과 추측을 분리하고, 성공·빈 값·업무 오류·401·Timeout·오프라인을 화면에서 어떻게 구분할지 제안해줘. 계약은 임의로 확정하지 마.",
    "url": "./../guides/learning/ai-frontend-growth/08-api-contracts-and-errors.html#section-4"
  },
  {
    "document": "9. 서버·클라이언트 상태",
    "section": "마스터 실습과 증거",
    "excerpt": "두 사용자와 두 필터가 있는 조회·수정 흐름을 구현합니다. Query Key 충돌, 낙관적 갱신 실패, 사용자 전환 중 늦은 응답을 의도적으로 재현하고 수정합니다. 캐시 Inspector와 테스트로 이전 사용자 데이터가 남지 않음을 확인합니다. 통과 기준: 지역·폼·URL·서버·세션 상태를 구분하고, 데이터별 소유자·신선도·정리 시점을 설명하며 서버 데이터를 전역 Store에 불필요하게 복제…",
    "content": "7. 마스터 실습과 증거 두 사용자와 두 필터가 있는 조회·수정 흐름을 구현합니다. Query Key 충돌, 낙관적 갱신 실패, 사용자 전환 중 늦은 응답을 의도적으로 재현하고 수정합니다. 캐시 Inspector와 테스트로 이전 사용자 데이터가 남지 않음을 확인합니다. 통과 기준: 지역·폼·URL·서버·세션 상태를 구분하고, 데이터별 소유자·신선도·정리 시점을 설명하며 서버 데이터를 전역 Store에 불필요하게 복제하지 않아야 합니다. 9. 서버·클라이언트 상태",
    "url": "./../guides/learning/ai-frontend-growth/09-server-and-client-state.html#section-7"
  },
  {
    "document": "9. 서버·클라이언트 상태",
    "section": "상태 도구 선택",
    "excerpt": "로그인 상태와 회원 데이터의 경계, 로그아웃 후 정리 기준은 세션과 회원 경계 구현 가이드 를 함께 확인합니다. 상태 기본 선택 한 컴포넌트 또는 가까운 트리의 UI React 지역 상태 주소로 공유·복원할 검색과 필터 URL 상태 검토 입력, 필드 오류와 제출 React Hook Form 서버에서 조회·변경하는 데이터 TanStack Query 서로 떨어진 UI가 공유하는 클라이언트 상태…",
    "content": "2. 상태 도구 선택 로그인 상태와 회원 데이터의 경계, 로그아웃 후 정리 기준은 세션과 회원 경계 구현 가이드 를 함께 확인합니다. 상태 기본 선택 한 컴포넌트 또는 가까운 트리의 UI React 지역 상태 주소로 공유·복원할 검색과 필터 URL 상태 검토 입력, 필드 오류와 제출 React Hook Form 서버에서 조회·변경하는 데이터 TanStack Query 서로 떨어진 UI가 공유하는 클라이언트 상태 Zustand 검토 서버 상태, 폼 상태와 UI 상태를 양방향으로 복제하면 동기화 규칙과 버그가 늘어납니다. 기존 방식으로 충분하면 새 Store를 만들지 않습니다. 세션은 회원 전체가 아니다 세션에는 로그인 여부와 앱 전체에서 필요한 최소 사용자 식별 정보만 둡니다. 프로필, 약관, 알림 설정과 업무 데이터는 별도 회원 Query가 소유합니다. 세션 확인 중, 비로그인, 로그인과 확인 실패를 서로 다른 상태로 처리합니다. Query Key와 캐시 수명 Query Key에는 결과를 바꾸는 입력을 포함하고, 동일한 의미의 데이터는 동일한 Key 규칙을 사용합니다. staleTime , 재시도와 재조회 정책은 화면 편의로 임의 설정하지 않고 데이터의 변경 빈도, 오류 비용과 제품 요구로 결정합니다. Mutation 이후 일관성 Mutation 성공 후 관련 Query를 무효화할지, 응답으로 Cache를 갱신할지, 낙관적 갱신할지 선택합니다. 낙관적 갱신은 실패 시 되돌릴 수 있고 충돌 규칙이 명확할 때만 사용합니다. 화면마다 수동으로 같은 서버 데이터를 고치지 않습니다. 사용자 경계에서 정리 로그아웃과 사용자 전환 때 이전 사용자의 Query Cache, 공유 UI 상태와 Persist 데이터를 구분해 정리합니다. 공개 Cache까지 무조건 모두 지울지, 사용자 범위 Key만 제거할지는 실제 데이터 분류가 생긴 뒤 결정합니다. 인증 자격 증명 저장소를 UI Store와 같은 것으로 취급하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/09-server-and-client-state.html#section-2"
  },
  {
    "document": "9. 서버·클라이언트 상태",
    "section": "완료 확인",
    "excerpt": "상태 도구를 소유자와 수명으로 선택할 수 있습니다. TanStack Query 데이터와 Zustand 상태를 구분할 수 있습니다. Persist가 필요한 실제 요구와 보안 위험을 설명할 수 있습니다. 세션 확인 실패와 비로그인을 구분하고 회원 상세 데이터를 세션에 넣지 않을 수 있습니다. Query Key, 무효화, Cache 갱신과 낙관적 갱신의 선택 근거를 설명할 수 있습니다. 로그아웃·…",
    "content": "5. 완료 확인 상태 도구를 소유자와 수명으로 선택할 수 있습니다. TanStack Query 데이터와 Zustand 상태를 구분할 수 있습니다. Persist가 필요한 실제 요구와 보안 위험을 설명할 수 있습니다. 세션 확인 실패와 비로그인을 구분하고 회원 상세 데이터를 세션에 넣지 않을 수 있습니다. Query Key, 무효화, Cache 갱신과 낙관적 갱신의 선택 근거를 설명할 수 있습니다. 로그아웃·사용자 전환 때 제거해야 할 사용자 범위 상태를 추적할 수 있습니다. 이전 단계 · 10단계 WebView Bridge와 보안으로",
    "url": "./../guides/learning/ai-frontend-growth/09-server-and-client-state.html#section-5"
  },
  {
    "document": "9. 서버·클라이언트 상태",
    "section": "캐시 일관성과 사용자 격리",
    "excerpt": "Query Key는 데이터의 주소 응답을 바꾸는 사용자, 필터, 정렬, 페이지와 권한 범위가 Query Key에 포함되어야 합니다. 화면 이름만 넣으면 서로 다른 데이터가 같은 캐시를 공유할 수 있습니다. Key를 문자열 조각으로 흩뿌리지 말고 Factory로 중앙화해 무효화 범위를 검토합니다. Mutation 이후 전략 무조건 전체 무효화하지 않습니다. 서버 응답으로 정확히 갱신, 관련 Q…",
    "content": "6. 캐시 일관성과 사용자 격리 Query Key는 데이터의 주소 응답을 바꾸는 사용자, 필터, 정렬, 페이지와 권한 범위가 Query Key에 포함되어야 합니다. 화면 이름만 넣으면 서로 다른 데이터가 같은 캐시를 공유할 수 있습니다. Key를 문자열 조각으로 흩뿌리지 말고 Factory로 중앙화해 무효화 범위를 검토합니다. Mutation 이후 전략 무조건 전체 무효화하지 않습니다. 서버 응답으로 정확히 갱신, 관련 Query 무효화, 낙관적 갱신과 Rollback 중 제품 요구와 실패 비용에 맞게 선택합니다. 동시에 실행된 Mutation의 완료 순서가 UI 일관성에 미치는 영향도 확인합니다. 세션 전환은 보안 경계 로그아웃, 계정 전환과 권한 변경 때 메모리 캐시, Persist Store, 폼 초안과 진행 중 요청 중 무엇을 취소·삭제·재조회할지 표로 만듭니다. 이전 사용자 데이터가 잠깐 보이는 것도 개인정보 노출입니다.",
    "url": "./../guides/learning/ai-frontend-growth/09-server-and-client-state.html#section-6"
  },
  {
    "document": "9. 서버·클라이언트 상태",
    "section": "코드 읽기",
    "excerpt": "const ticketQuery = useQuery ({ queryKey: [ \"tickets\" , memberId], queryFn: ({ signal }) => requestTickets (memberId, signal), }); if (ticketQuery.isPending) return < LoadingState /> ; if (ticketQuery.isError) return < E…",
    "content": "3. 코드 읽기 const ticketQuery = useQuery ({ queryKey: [ \"tickets\" , memberId], queryFn: ({ signal }) => requestTickets (memberId, signal), }); if (ticketQuery.isPending) return < LoadingState /> ; if (ticketQuery.isError) return < ErrorState /> ; if (ticketQuery.data.length === 0 ) return < EmptyState /> ; Query가 서버 데이터와 요청 상태를 소유합니다. 같은 데이터를 Zustand나 별도 State에 복사하지 않고 화면은 Query 결과를 렌더링합니다. Query Key와 캐시 정책은 실제 요구가 확정된 뒤 정합니다.",
    "url": "./../guides/learning/ai-frontend-growth/09-server-and-client-state.html#section-3"
  },
  {
    "document": "9. 서버·클라이언트 상태",
    "section": "학습 목표",
    "excerpt": "이전: API 계약과 오류 · 교육 과정 · 다음: WebView Bridge와 보안 지역 UI, URL, 폼, 서버와 공유 클라이언트 상태를 구분합니다. 서버 데이터를 TanStack Query 밖의 Store에 복제하지 않습니다. React로 해결되지 않는 공유 UI 상태에만 Zustand를 검토합니다.",
    "content": "1. 학습 목표 이전: API 계약과 오류 · 교육 과정 · 다음: WebView Bridge와 보안 지역 UI, URL, 폼, 서버와 공유 클라이언트 상태를 구분합니다. 서버 데이터를 TanStack Query 밖의 Store에 복제하지 않습니다. React로 해결되지 않는 공유 UI 상태에만 Zustand를 검토합니다.",
    "url": "./../guides/learning/ai-frontend-growth/09-server-and-client-state.html#section-1"
  },
  {
    "document": "9. 서버·클라이언트 상태",
    "section": "AI와 함께 연습",
    "excerpt": "화면의 모든 상태를 소유자와 수명 기준으로 분류하게 합니다. 서버 데이터가 Zustand나 지역 State에 복제됐는지 찾게 합니다. 로그아웃과 사용자 전환 때 초기화할 캐시와 UI 상태를 구분하게 합니다. 이 기능의 상태를 지역 UI, URL, 폼, 서버, 공유 클라이언트 상태로 분류해줘. 현재 도구가 적절한 이유를 설명하고, 서버 데이터나 파생 값이 다른 Store에 중복 저장된 부분과…",
    "content": "4. AI와 함께 연습 화면의 모든 상태를 소유자와 수명 기준으로 분류하게 합니다. 서버 데이터가 Zustand나 지역 State에 복제됐는지 찾게 합니다. 로그아웃과 사용자 전환 때 초기화할 캐시와 UI 상태를 구분하게 합니다. 이 기능의 상태를 지역 UI, URL, 폼, 서버, 공유 클라이언트 상태로 분류해줘. 현재 도구가 적절한 이유를 설명하고, 서버 데이터나 파생 값이 다른 Store에 중복 저장된 부분과 사용자 전환 시 초기화할 항목을 찾아줘.",
    "url": "./../guides/learning/ai-frontend-growth/09-server-and-client-state.html#section-4"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "단계별 예상 일정",
    "excerpt": "아래 기간을 합산한 전체 예상치는 120~155근무일입니다. flowchart TB accTitle: Flutter APP 구축 단계 accDescr: 범위와 계약을 확인하고 앱 기반 및 WebView 구조를 구축한 뒤 Native 기능을 구현하고 실기기 통합 검증과 출시 준비를 수행하는 흐름입니다. A[\"범위 · 계약 확인\"] --> B[\"Architecture · 환경 · CI\"] B -…",
    "content": "9. 단계별 예상 일정 아래 기간을 합산한 전체 예상치는 120~155근무일입니다. flowchart TB accTitle: Flutter APP 구축 단계 accDescr: 범위와 계약을 확인하고 앱 기반 및 WebView 구조를 구축한 뒤 Native 기능을 구현하고 실기기 통합 검증과 출시 준비를 수행하는 흐름입니다. A[\"범위 · 계약 확인\"] --> B[\"Architecture · 환경 · CI\"] B --> C[\"앱 Shell · WebView · Bridge\"] C --> D[\"회원 · 인증 · 계정\"] D --> E[\"메인 · 월렛 · 여정\"] E --> F[\"공항안내 · 설정 · 공통\"] F --> G[\"Push · Deep Link · QR · 결제 전환\"] G --> H[\"Android · iOS 통합 QA\"] H --> I[\"테스트 배포 · 안정화\"] Flutter APP 구현부터 출시 준비까지의 순차 단계 단계 주요 작업 예상 기간 산정 이유 범위·계약 확인 Native/WebView, API, 인증과 Bridge 계약 7~10근무일 초기 계약 오류가 전체 재작업으로 연결됨 앱 기반 구축 Architecture, 상태, Flavor, 환경과 CI 12~15근무일 전체 기능이 공유하는 기반과 플랫폼 설정 필요 앱 Shell·WebView Navigation, WebView Controller와 Bridge 기본 구조 12~16근무일 Native와 WebView의 신뢰 경계 및 이동 정책 구현 회원·인증 로그인, 가입, 소셜 연결, 본인인증과 계정 관리 25~30근무일 Native 60개 중 회원 영역이 39개이며 상태 분기가 많음 메인·월렛·여정 홈, 카드, 추천, 이용권, QR와 여정 상태 15~20근무일 로그인·권한·이용 상태와 Native 기능이 연결됨 공항안내·설정·공통 항공편, 공항 정보, 알림, GNB와 설정 10~14근무일 TBD 항공편과 설정 범위 확인 필요 Native 기능 연동 Push, Deep Link, QR, 권한과 결제 화면 전환 12~16근무일 OS와 외부 서비스별 성공·실패 흐름 검증 필요 통합·실기기 QA Android·iOS, 인증, WebView, 결제 복귀와 오류 15~20근무일 개발 환경만으로 확인할 수 없는 플랫폼 차이 존재 출시 준비·안정화 Signing, TestFlight, Play 테스트 배포와 결함 수정 12~15근무일 동일 Artifact의 QA 및 출시 가능 상태 확인 기능 구현 완료는 약 95~120근무일 , 통합 QA와 출시 준비까지는 120~155근무일 로 구분합니다. App Store와 Google Play의 외부 심사 대기는 개발 근무일에 포함하지 않습니다. 심사와 보완 요청에 따라 5~10달력일 이상 이 별도로 필요할 수 있습니다.",
    "url": "./../guides/planning/app.html#section-9"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "문서 목적과 산정 기준",
    "excerpt": "이 문서는 앱 개발자와 APP 구축 일정을 검토하기 위한 산정 자료입니다. 특정 착수일이나 완료일을 전제로 하지 않으며, 실제 개발 범위와 책임이 현재 가정과 일치하는지 확인한 뒤 일정을 조정합니다. 개발자 구성: 미들급 Flutter 개발자 1명 AI 활용: 반복 구현, Test, 오류 분석과 문서화에 적극 활용 구축 조건: 기존 구현을 전제로 하지 않는 신규 구축 기간 단위: 1개월을 2…",
    "content": "1. 문서 목적과 산정 기준 이 문서는 앱 개발자와 APP 구축 일정을 검토하기 위한 산정 자료입니다. 특정 착수일이나 완료일을 전제로 하지 않으며, 실제 개발 범위와 책임이 현재 가정과 일치하는지 확인한 뒤 일정을 조정합니다. 개발자 구성: 미들급 Flutter 개발자 1명 AI 활용: 반복 구현, Test, 오류 분석과 문서화에 적극 활용 구축 조건: 기존 구현을 전제로 하지 않는 신규 구축 기간 단위: 1개월을 20근무일로 환산 포함 범위: 구현, 연동, 실기기 QA와 출시 준비 주 5일 근무의 월평균 평일은 약 21.7일입니다. 공휴일, 연차, 회사 휴무일과 전사 일정 등을 고려해 과도하게 낙관적인 환산을 피하기 위해 1개월을 20근무일 로 계산합니다. 실제 착수일이 정해지면 해당 기간의 달력을 기준으로 다시 계산해야 합니다.",
    "url": "./../guides/planning/app.html#section-1"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "미들급 개발자 1명 전제",
    "excerpt": "미들급 개발자는 일반적인 Flutter 화면과 API 연동을 독립적으로 구현하고, 문서화된 Platform API와 Package를 적용할 수 있는 수준으로 가정합니다. Flutter·Dart 기본 구조와 상태 관리 경험 Android·iOS Build 및 기본 Signing 경험 REST API, 인증 상태와 오류 처리 경험 WebView, Push, Deep Link와 권한 기능의 구현…",
    "content": "6. 미들급 개발자 1명 전제 미들급 개발자는 일반적인 Flutter 화면과 API 연동을 독립적으로 구현하고, 문서화된 Platform API와 Package를 적용할 수 있는 수준으로 가정합니다. Flutter·Dart 기본 구조와 상태 관리 경험 Android·iOS Build 및 기본 Signing 경험 REST API, 인증 상태와 오류 처리 경험 WebView, Push, Deep Link와 권한 기능의 구현 또는 학습 가능 AI 생성 코드를 검토하고 실제 프로젝트 기준으로 수정할 수 있는 수준 앱 개발자가 PL 업무, 운영 대응 또는 다른 프로젝트를 병행하면 실제 개발 가동률이 낮아집니다. 이 경우 10~20근무일을 추가해야 합니다. 별도 앱 개발자의 상호 Review가 없는 1명 구성에서는 Architecture, 플랫폼별 문제, 보안과 출시 판단이 모두 한 사람에게 집중됩니다. 이 부담을 일정과 안정화 기간에 반영했습니다.",
    "url": "./../guides/planning/app.html#section-6"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "산정 결과 요약",
    "excerpt": "구분 예상 기간 포함 범위 기능 구현 완료 95~120근무일 Native 기능 및 주요 연동 구현 통합 QA·출시 준비 완료 120~155근무일 실기기 QA, 테스트 배포와 안정화 포함 외부 Store 심사 5~10달력일 이상 개발 근무일과 별도인 외부 대기 기본 산정값은 미들급 Flutter 개발자 1명이 AI를 적극적으로 활용하고, 기능 개발에 충분히 참여하는 조건에서 120~155근무일…",
    "content": "14. 산정 결과 요약 구분 예상 기간 포함 범위 기능 구현 완료 95~120근무일 Native 기능 및 주요 연동 구현 통합 QA·출시 준비 완료 120~155근무일 실기기 QA, 테스트 배포와 안정화 포함 외부 Store 심사 5~10달력일 이상 개발 근무일과 별도인 외부 대기 기본 산정값은 미들급 Flutter 개발자 1명이 AI를 적극적으로 활용하고, 기능 개발에 충분히 참여하는 조건에서 120~155근무일, 약 6~7.75개월 입니다. WebView 화면 구현은 Front-end 일정에 포함되며 앱 일정에는 중복 계산하지 않습니다. 다만 전체 출시 시점은 Front-end의 WebView 제공, Backend API, Bridge 계약과 앱 통합 QA가 모두 완료되는 시점으로 결정됩니다. 더라운지 Flutter APP 구축 일정 산정 보고서",
    "url": "./../guides/planning/app.html#section-14"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "산정 자료",
    "excerpt": "더라운지 3.0 FO APP IA : Native와 WebView 화면 구분 및 기능 범위 APP 개발 표준 : Flutter Architecture, WebView Bridge, Native 기능, 품질과 배포 책임 IA의 화면 수만으로 일정을 계산하지 않고, 앱 Shell, 인증, WebView, 기기 기능, Android·iOS 검증과 배포 작업을 함께 반영했습니다.",
    "content": "2. 산정 자료 더라운지 3.0 FO APP IA : Native와 WebView 화면 구분 및 기능 범위 APP 개발 표준 : Flutter Architecture, WebView Bridge, Native 기능, 품질과 배포 책임 IA의 화면 수만으로 일정을 계산하지 않고, 앱 Shell, 인증, WebView, 기기 기능, Android·iOS 검증과 배포 작업을 함께 반영했습니다.",
    "url": "./../guides/planning/app.html#section-2"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "앱 개발자 확인 요청 사항",
    "excerpt": "아래 항목은 일정 확정 전에 앱 개발자가 현재 가정과 차이가 있는지 확인할 내용입니다. APP IA의 Native 60개가 실제 Flutter 직접 구현 범위와 일치하는가? 재사용할 기존 Flutter 프로젝트, 공통 Package 또는 화면이 있는가? MVVM, Riverpod, Flavor와 CI 환경이 이미 구성되어 있는가? 로그인·소셜 로그인·본인인증에 사용할 SDK와 Redirect…",
    "content": "13. 앱 개발자 확인 요청 사항 아래 항목은 일정 확정 전에 앱 개발자가 현재 가정과 차이가 있는지 확인할 내용입니다. APP IA의 Native 60개가 실제 Flutter 직접 구현 범위와 일치하는가? 재사용할 기존 Flutter 프로젝트, 공통 Package 또는 화면이 있는가? MVVM, Riverpod, Flavor와 CI 환경이 이미 구성되어 있는가? 로그인·소셜 로그인·본인인증에 사용할 SDK와 Redirect 방식이 확정됐는가? WebView Container와 Bridge를 Flutter 개발자가 모두 담당하는가? Push, Deep Link, QR·Barcode와 Camera가 최초 출시 범위인가? 결제는 외부 Web 결제인가, 별도 Native SDK가 필요한가? 이용권과 월렛의 Offline 저장 및 사용 범위가 있는가? Android·iOS 최소 지원 Version과 대상 기기가 확정됐는가? Firebase, Signing, Store와 QA 기기 접근 권한이 준비되어 있는가? 별도 QA 담당자 또는 기획·디자인 검수 지원이 있는가? PL, 회의, 운영 대응 또는 다른 프로젝트를 병행하는가? 위 답변에 따라 기능 범위, 재사용 가능성, 개발 가동률과 외부 연동 위험을 반영하여 일정을 다시 계산합니다.",
    "url": "./../guides/planning/app.html#section-13"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "완료 기준",
    "excerpt": "APP IA의 Native 대상 화면과 주요 상태가 구현되어 있습니다. 승인된 API와 인증 계약의 정상 및 주요 오류 흐름이 동작합니다. WebView Origin, Navigation과 Bridge 허용 정책이 검증되었습니다. Push, Deep Link, QR, 권한과 외부 앱 복귀가 실기기에서 동작합니다. 결제 성공, 실패, 취소, 중복 방지와 주문 상태 재조회가 확인되었습니다. An…",
    "content": "12. 완료 기준 APP IA의 Native 대상 화면과 주요 상태가 구현되어 있습니다. 승인된 API와 인증 계약의 정상 및 주요 오류 흐름이 동작합니다. WebView Origin, Navigation과 Bridge 허용 정책이 검증되었습니다. Push, Deep Link, QR, 권한과 외부 앱 복귀가 실기기에서 동작합니다. 결제 성공, 실패, 취소, 중복 방지와 주문 상태 재조회가 확인되었습니다. Android와 iOS의 주요 지원 Version 및 기기에서 검증되었습니다. Unit·Widget·Integration 및 수동 회귀 Test가 완료되었습니다. QA용 Android·iOS Artifact가 동일한 승인 소스에서 생성되었습니다. 치명적 또는 주요 결함이 해결되고 테스트 배포가 완료되었습니다.",
    "url": "./../guides/planning/app.html#section-12"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "일정이 성립하기 위한 전제 조건",
    "excerpt": "UI/UX 디자인이 기능 개발 순서에 맞춰 확정되어 제공됩니다. Backend가 승인된 API 계약, 인증 방식과 오류 규칙을 제공합니다. Front-end가 WebView URL과 Bridge 요청·응답 계약을 함께 확정합니다. 소셜 로그인, 본인인증과 결제 연동 방식이 기능 착수 전에 확정됩니다. Firebase, Push, Signing과 Store 계정 접근 권한이 제공됩니다. And…",
    "content": "10. 일정이 성립하기 위한 전제 조건 UI/UX 디자인이 기능 개발 순서에 맞춰 확정되어 제공됩니다. Backend가 승인된 API 계약, 인증 방식과 오류 규칙을 제공합니다. Front-end가 WebView URL과 Bridge 요청·응답 계약을 함께 확정합니다. 소셜 로그인, 본인인증과 결제 연동 방식이 기능 착수 전에 확정됩니다. Firebase, Push, Signing과 Store 계정 접근 권한이 제공됩니다. Android·iOS 실기기와 QA 환경을 기능 완료 시점에 사용할 수 있습니다. 완료된 기능의 대규모 재설계가 반복되지 않습니다. 앱 개발자가 근무시간의 약 80% 이상을 개발과 검증에 사용할 수 있습니다.",
    "url": "./../guides/planning/app.html#section-10"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "제외 및 별도 담당 범위",
    "excerpt": "WebView 166개 화면의 React·Next.js 구현 Backend API, Database와 인증 Server 구현 결제 승인, 검증, Webhook, 정산과 Server 취소 처리 Back Office와 운영자 화면 구축 UI/UX 기획 및 디자인 제작 자체 번역문과 운영 콘텐츠 제작 제외 범위도 앱 일정의 의존 항목입니다. WebView URL, Bridge 계약, 인증 정책,…",
    "content": "5. 제외 및 별도 담당 범위 WebView 166개 화면의 React·Next.js 구현 Backend API, Database와 인증 Server 구현 결제 승인, 검증, Webhook, 정산과 Server 취소 처리 Back Office와 운영자 화면 구축 UI/UX 기획 및 디자인 제작 자체 번역문과 운영 콘텐츠 제작 제외 범위도 앱 일정의 의존 항목입니다. WebView URL, Bridge 계약, 인증 정책, API 오류 형식과 결제 복귀 규칙이 늦게 확정되면 Flutter 구현에 재작업이 발생합니다.",
    "url": "./../guides/planning/app.html#section-5"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "주요 일정 위험",
    "excerpt": "위험 요소 예상 영향 이유 PL·운영·다른 프로젝트 병행 10~20근무일 증가 1명 구성에서 개발 가동률 감소가 핵심 경로에 직접 반영 Bridge 계약 지연 또는 변경 5~10근무일 증가 WebView Navigation과 Native 기능 호출을 재작업 소셜 로그인·본인인증 정책 변경 5~10근무일 증가 외부 SDK, Redirect와 Session 흐름을 다시 검증 Native 결제 S…",
    "content": "11. 주요 일정 위험 위험 요소 예상 영향 이유 PL·운영·다른 프로젝트 병행 10~20근무일 증가 1명 구성에서 개발 가동률 감소가 핵심 경로에 직접 반영 Bridge 계약 지연 또는 변경 5~10근무일 증가 WebView Navigation과 Native 기능 호출을 재작업 소셜 로그인·본인인증 정책 변경 5~10근무일 증가 외부 SDK, Redirect와 Session 흐름을 다시 검증 Native 결제 SDK 추가 5~10근무일 증가 플랫폼별 결제·복귀·중복 실행 검증 추가 항공편·설정 기능 확정 지연 5~10근무일 증가 TBD IA에 범위 확인 항목이 존재 별도 QA 지원 없음 10~15근무일 증가 개발자가 구현과 전체 회귀 검증을 순차 수행 Store·Signing 계정 제공 지연 지연 기간만큼 직접 영향 테스트 배포와 출시 가능 상태를 확인할 수 없음 앱 개발자 휴가·이탈·병목 해당 기간 이상 직접 영향 Architecture와 Native 기능을 대체할 인력이 없음 위험이 동시에 발생하면 단순 합산하지 않고 변경 범위와 핵심 경로를 다시 산정해야 합니다.",
    "url": "./../guides/planning/app.html#section-11"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "AI 적극 활용 기준",
    "excerpt": "다음 작업에서 AI를 일상적인 개발 도구로 사용하는 것을 전제로 합니다. Flutter Widget과 반복 화면 초안 생성 Model, DTO와 API Client 코드 초안 Riverpod 상태와 Form Validation 초안 Android·iOS 설정 확인과 오류 원인 분석 Unit·Widget Test Case와 Mock 초안 공통 Component 변환과 반복 Refactoring…",
    "content": "7. AI 적극 활용 기준 다음 작업에서 AI를 일상적인 개발 도구로 사용하는 것을 전제로 합니다. Flutter Widget과 반복 화면 초안 생성 Model, DTO와 API Client 코드 초안 Riverpod 상태와 Form Validation 초안 Android·iOS 설정 확인과 오류 원인 분석 Unit·Widget Test Case와 Mock 초안 공통 Component 변환과 반복 Refactoring CI 설정, 배포 Check List와 기술 문서 작성 본 일정에는 약 15~25%의 AI 활용 단축 효과 를 이미 반영했습니다. 미들급 개발자는 생성 속도뿐 아니라 결과를 검토하고 수정하는 시간이 필요하므로 단순 코드 생성량만으로 더 큰 단축률을 적용하지 않습니다. 조건 예상 기간 설명 AI 활용이 제한적 145~190근무일 반복 구현과 Test 작성의 수작업 비중이 큼 AI 적극 활용 120~155근무일 본 보고서의 기본 산정값 모든 계약이 착수 전 확정된 이상적 조건 110~135근무일 대기와 재작업이 거의 없는 경우",
    "url": "./../guides/planning/app.html#section-7"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "AI로 크게 줄이기 어려운 작업",
    "excerpt": "Android·iOS 실제 기기에서 발생하는 플랫폼별 문제 소셜 로그인, 본인인증과 외부 앱 복귀 결제 실패, 중복 실행 방지와 주문 상태 재확인 WebView Origin, Redirect와 Bridge 보안 검증 Push, Deep Link, Camera, QR와 OS 권한 처리 Signing, 인증서, TestFlight와 Google Play 배포 기획·디자인·Backend·Front…",
    "content": "8. AI로 크게 줄이기 어려운 작업 Android·iOS 실제 기기에서 발생하는 플랫폼별 문제 소셜 로그인, 본인인증과 외부 앱 복귀 결제 실패, 중복 실행 방지와 주문 상태 재확인 WebView Origin, Redirect와 Bridge 보안 검증 Push, Deep Link, Camera, QR와 OS 권한 처리 Signing, 인증서, TestFlight와 Google Play 배포 기획·디자인·Backend·Front-end 담당자와의 계약 협의 AI가 코드를 생성해도 실제 계정, 인증서, 외부 서비스와 실기기에서 성공·실패 흐름을 확인해야 합니다. 따라서 AI 적극 활용이 실환경 검증을 대체하지 않습니다.",
    "url": "./../guides/planning/app.html#section-8"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "APP IA 범위 분석",
    "excerpt": "APP IA의 226개 화면 및 상태 중 Native 60개가 Flutter 직접 구현 범위 입니다. WebView 166개의 웹 화면 구현은 Front-end 담당이므로 앱 일정에 중복 계산하지 않습니다. 구분 항목 수 앱 개발 일정 반영 Native 60 Flutter 화면 및 Native 상태 구현 WebView 166 화면 구현은 제외하고 Container·Bridge·Navigati…",
    "content": "3. APP IA 범위 분석 APP IA의 226개 화면 및 상태 중 Native 60개가 Flutter 직접 구현 범위 입니다. WebView 166개의 웹 화면 구현은 Front-end 담당이므로 앱 일정에 중복 계산하지 않습니다. 구분 항목 수 앱 개발 일정 반영 Native 60 Flutter 화면 및 Native 상태 구현 WebView 166 화면 구현은 제외하고 Container·Bridge·Navigation 연동만 포함 합계 226 APP IA 전체 항목 Native 기능 영역 기능 영역 화면·상태 수 주요 내용 회원 39 로그인, 가입, 본인인증, 계정, 월렛, QR와 여정 메인 9 로그인 상태별 홈, 제휴카드, 추천과 개인화 공항안내 7 항공편 검색, 공항 현황과 안내 정보 공통 3 알림과 로그인 상태별 전체 메뉴 설정 1 앱 사용자 설정 기타 1 Loading 상태 합계 60 Flutter Native 직접 구현 범위 Native 화면 유형 유형 항목 수 산정 시 고려 사항 Page 46 전체 화면과 Navigation 상태 Layer 6 Dialog, Bottom Sheet와 선택 상태 Tab 4 탭별 데이터와 상태 변경 Content 3 홈과 화면 일부의 독립 상태 미분류 1 구현 유형 확인 필요 합계 60 IA 화면 ID 기준",
    "url": "./../guides/planning/app.html#section-3"
  },
  {
    "document": "더라운지 Flutter APP 구축 일정 산정 보고서",
    "section": "Flutter 앱 개발 포함 범위",
    "excerpt": "Flutter 프로젝트, Architecture와 공통 Navigation 구조 개발·QA·운영 Flavor 및 환경 설정 Native 60개 화면 및 상태 로그인, 소셜 연결, 본인인증과 Session 상태 WebView Container, 허용 Origin과 Navigation 통제 WebView Bridge 요청·응답, 권한, 오류와 Version 처리 Push, Deep Link와 앱…",
    "content": "4. Flutter 앱 개발 포함 범위 Flutter 프로젝트, Architecture와 공통 Navigation 구조 개발·QA·운영 Flavor 및 환경 설정 Native 60개 화면 및 상태 로그인, 소셜 연결, 본인인증과 Session 상태 WebView Container, 허용 Origin과 Navigation 통제 WebView Bridge 요청·응답, 권한, 오류와 Version 처리 Push, Deep Link와 앱 내부 Route 연결 Camera·QR·Barcode, 권한과 Native 저장소 연동 외부 인증·결제 화면 전환과 앱 복귀 Android·iOS 실기기 검증과 플랫폼별 수정 Unit·Widget·Integration Test와 주요 회귀 Test Signing, TestFlight와 Google Play 테스트 배포 준비",
    "url": "./../guides/planning/app.html#section-4"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "개발자 숙련도 전제",
    "excerpt": "본 보고서는 일반적인 실무 시니어 2명 이 투입되고, 그중 1명이 PL과 Front-end 개발을 겸하는 구성 을 기준으로 합니다. PL 겸 개발자는 근무시간의 약 60~70%를 구현·협의·Review·Test에 사용할 수 있고, 나머지 시니어는 근무시간의 약 90%를 개발 업무에 사용할 수 있다는 전제입니다. PL 업무 비중이 40%를 넘거나 다른 프로젝트를 병행하면 10~20근무일 이상이…",
    "content": "9. 개발자 숙련도 전제 본 보고서는 일반적인 실무 시니어 2명 이 투입되고, 그중 1명이 PL과 Front-end 개발을 겸하는 구성 을 기준으로 합니다. PL 겸 개발자는 근무시간의 약 60~70%를 구현·협의·Review·Test에 사용할 수 있고, 나머지 시니어는 근무시간의 약 90%를 개발 업무에 사용할 수 있다는 전제입니다. PL 업무 비중이 40%를 넘거나 다른 프로젝트를 병행하면 10~20근무일 이상이 추가될 수 있습니다. 시니어는 소수의 최상위 개발자나 해당 서비스 경험자가 아니라, 다음 업무를 독립적으로 완료할 수 있는 일반적인 실무 시니어를 의미합니다. React, Next.js와 TypeScript 기반 서비스 구축 경험 반응형 웹, 상태 관리, Form과 API 연동 구조의 설계 및 구현 로그인, 회원, 상품과 주문처럼 여러 상태가 연결되는 기능의 독립적 구현 공통 Component의 재사용 범위 판단과 과도한 추상화 방지 결제 또는 WebView 계약과 문서를 기준으로 한 연동 구현 AI 생성 코드의 오류, 보안 문제와 불필요한 복잡도 검토 및 수정 기획, 디자인, Backend와 구현 조건 및 예외 상황 협의 구현, Code Review, 테스트와 결함 수정까지의 완료 책임 두 시니어 모두 담당 기능의 분석, 구현, Test와 결함 수정을 독립적으로 완료할 수 있어야 합니다. PL 겸 개발자는 전체 우선순위와 계약 협의, 공통 Architecture와 통합 판단을 담당하고, 개발 시니어는 주요 기능 묶음을 독립적으로 맡아 병렬 구현합니다. PL 겸 개발 시니어와 개발 시니어 역할 구분 업무 PL 겸 개발 시니어 개발 시니어 공통 Architecture와 규칙 최종 결정 및 핵심 구현 검토 참여 및 기능 적용 인증·Session·권한 계약 협의 및 최종 검증 기능 묶음 독립 구현 주문·결제·금액 정책 협의 및 고위험 흐름 담당 주문·결제 기능 병렬 구현 및 상호 Review WebView Bridge Flutter 담당자와 계약 및 통합 판단 연결 화면 구현과 실제 환경 검증 일반 목록·상세·Layer 우선순위와 공통 기준 관리 주요 기능 묶음 독립 구현 반응형·접근성·Storybook 기준 수립 및 최종 검증 기능별 적용 및 상호 Review API 연동 계약 확인과 공통 Client 승인된 계약 기반 기능 연동 통합 QA 우선순위, 대외 협의와 완료 판단 재현, 수정과 회귀 확인 두 명 모두 시니어이므로 인증, 주문·결제, 일반 화면과 Test를 기능 단위로 나눠 병렬 진행할 수 있습니다. 다만 PL 겸 개발자는 일정 관리, 기획·디자인·Backend·앱 담당자 협의, 작업 분배와 최종 Review도 수행하므로 개발자 2명이 모든 시간을 구현에 사용하는 경우와 같은 속도를 전제하지 않습니다.",
    "url": "./../guides/planning/web.html#section-9"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "결제 기능 산정 기준",
    "excerpt": "Backend가 결제 Server를 구현하더라도 Front-end에는 다음 작업이 남습니다. 장바구니 상품, 수량과 금액 표시 주문서 입력, 약관 동의와 필수값 검증 쿠폰, 포인트, 제휴 혜택과 최종 결제 금액 표시 결제수단 선택과 결제창 또는 PG SDK 호출 외부 결제창, Redirect와 앱 복귀 처리 결제 진행 중 중복 요청 방지 성공, 실패, 사용자 취소, 시간 초과와 재시도 처리…",
    "content": "7. 결제 기능 산정 기준 Backend가 결제 Server를 구현하더라도 Front-end에는 다음 작업이 남습니다. 장바구니 상품, 수량과 금액 표시 주문서 입력, 약관 동의와 필수값 검증 쿠폰, 포인트, 제휴 혜택과 최종 결제 금액 표시 결제수단 선택과 결제창 또는 PG SDK 호출 외부 결제창, Redirect와 앱 복귀 처리 결제 진행 중 중복 요청 방지 성공, 실패, 사용자 취소, 시간 초과와 재시도 처리 주문 완료, 주문 상태, 영수증과 취소 결과 표시 앱 WebView에서 외부 Browser 또는 Native 결제 화면으로 전환 결제는 화면 수보다 상태 조합과 실환경 검증 비용이 큽니다. 성공뿐 아니라 실패 후 복구, 중복 결제 방지, 앱 복귀와 주문 상태 재조회까지 검증해야 합니다. 본 일정에는 Backend가 결제 승인과 검증을 담당하고, Front-end가 승인된 계약을 기준으로 결제 UI와 Client 흐름을 구현하는 범위를 포함합니다. PG사의 별도 Front-end SDK, 인증 심사 또는 복잡한 앱 복귀 규칙이 추가되면 5~10근무일이 추가 될 수 있습니다.",
    "url": "./../guides/planning/web.html#section-7"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "구축 범위 요약",
    "excerpt": "앱 내 WebView 앱 IA에는 총 226개의 화면 및 상태가 정의되어 있습니다. 구분 항목 수 Front-end 범위 설명 WebView 166 포함 웹 기술로 구현하며 Flutter App 안에서 표시 Native 60 앱 구현에서는 제외 Flutter 개발자가 구현하는 Native 화면 합계 226 166개 대상 앱 IA 전체 항목 수 Native 60개는 앱 구현 기준으로 Front…",
    "content": "3. 구축 범위 요약 앱 내 WebView 앱 IA에는 총 226개의 화면 및 상태가 정의되어 있습니다. 구분 항목 수 Front-end 범위 설명 WebView 166 포함 웹 기술로 구현하며 Flutter App 안에서 표시 Native 60 앱 구현에서는 제외 Flutter 개발자가 구현하는 Native 화면 합계 226 166개 대상 앱 IA 전체 항목 수 Native 60개는 앱 구현 기준으로 Front-end 범위에서 제외 합니다. 다만 이 중 상당수는 반응형 웹사이트에서는 웹 화면으로 제공되므로, 웹사이트 구축 범위에서는 Front-end가 구현해야 합니다. 반응형 웹사이트 반응형 웹사이트 IA에는 화면 ID가 부여된 225개의 화면 및 상태 가 정의되어 있습니다. 유형 항목 수 산정 시 고려 사항 Page 164 독립 경로 또는 전체 화면 단위 구현 Layer 41 Modal, Bottom Sheet, Popup 등의 상태 구현 Tab 12 동일 화면 안에서 데이터와 상태가 변경되는 탭 구성 Link 4 외부 또는 내부 연결과 접근 조건 처리 Content 4 페이지 일부에 포함되는 독립 콘텐츠 상태 합계 225 IA에 정의된 전체 화면 및 상태 225개를 서로 다른 신규 페이지 225개로 해석하지는 않습니다. 목록, 상세, 입력, 완료와 확인 Layer는 공통 패턴을 재사용할 수 있습니다. 반대로 하나의 화면 ID에도 정상, 빈 데이터, 오류, 로딩, 권한 제한과 결제 실패 등 여러 상태가 포함될 수 있으므로 화면 수만으로 일정을 축소해서도 안 됩니다.",
    "url": "./../guides/planning/web.html#section-3"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "기능 영역별 규모",
    "excerpt": "반응형 웹사이트 화면 및 상태를 표준 모듈 기준으로 분류했습니다. 기능 영역 항목 수 주요 복잡도 회원 70 로그인, 가입, 본인인증, 계정 관리, 월렛과 개인화 상태 주문 40 장바구니, 주문서, 결제, 선물, 취소와 교환 사용처 34 카테고리, 검색, 목록, 상세와 관심 상태 상품 24 상품 목록, 상세, 옵션, 구매 조건과 사용자 입력 공통 14 GNB, Footer, 알림, 약관, 다…",
    "content": "4. 기능 영역별 규모 반응형 웹사이트 화면 및 상태를 표준 모듈 기준으로 분류했습니다. 기능 영역 항목 수 주요 복잡도 회원 70 로그인, 가입, 본인인증, 계정 관리, 월렛과 개인화 상태 주문 40 장바구니, 주문서, 결제, 선물, 취소와 교환 사용처 34 카테고리, 검색, 목록, 상세와 관심 상태 상품 24 상품 목록, 상세, 옵션, 구매 조건과 사용자 입력 공통 14 GNB, Footer, 알림, 약관, 다국어와 공통 이동 메인 12 로그인 상태별 홈, 추천, 월렛과 개인화 콘텐츠 제휴카드 7 카드 목록, 상세, 등록과 혜택 상태 공항안내 7 항공편과 공항 정보 조회 프로모션 6 프로모션, 이벤트, 당첨자와 참여 상태 고객센터 4 공지, FAQ, 문의와 답변 확인 쿠폰 3 보유, 다운로드와 적용 가능 상태 기타 3 오류와 로딩 화면 설정 1 사용자 설정 합계 225 화면 ID 기준 회원과 주문 관련 항목은 110개로 전체의 약 절반 입니다. 이 영역은 단순 정보 노출보다 인증, 사용자 입력, 데이터 검증, 권한, 결제 결과와 상태 전이가 많아 전체 일정의 핵심 경로가 됩니다.",
    "url": "./../guides/planning/web.html#section-4"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "단계별 예상 일정",
    "excerpt": "각 단계의 기간은 작업 규모와 역할 분담을 설명하기 위한 값입니다. 공통 Component 재사용과 두 시니어의 병렬 작업이 있으므로 행별 기간을 단순 합산하지 않습니다. flowchart TB accTitle: PL 겸 개발 시니어와 개발 시니어의 병렬 작업 및 통합 흐름 accDescr: PL 겸 개발 시니어가 범위와 공통 기반을 조율하면서 고위험 기능을 구현하고, 개발 시니어가 주요 기…",
    "content": "12. 단계별 예상 일정 각 단계의 기간은 작업 규모와 역할 분담을 설명하기 위한 값입니다. 공통 Component 재사용과 두 시니어의 병렬 작업이 있으므로 행별 기간을 단순 합산하지 않습니다. flowchart TB accTitle: PL 겸 개발 시니어와 개발 시니어의 병렬 작업 및 통합 흐름 accDescr: PL 겸 개발 시니어가 범위와 공통 기반을 조율하면서 고위험 기능을 구현하고, 개발 시니어가 주요 기능을 병렬 구현한 뒤 상호 리뷰와 통합 검증을 거쳐 안정화하는 흐름입니다. A[\"범위와 계약 확인\"] --> B[\"공통 기반 구축\"] B --> C[\"PL 겸 개발 · 협의 · 고위험 기능\"] B --> D[\"개발 시니어 · 주요 기능 병렬 구현\"] C --> E[\"상호 Review · 기능 통합\"] D --> E E --> F[\"통합 QA · UAT\"] F --> G[\"결함 수정 · 안정화\"] PL 겸 개발 시니어와 개발 시니어의 병렬 작업 및 통합 흐름 단계 주요 작업 예상 기간 역할 분담과 산정 이유 범위 및 계약 확인 IA, 화면 상태, API와 WebView 계약 확인 5~8근무일 PL 겸 개발자가 협의를 주도하고 개발 시니어가 구현 가능성과 누락 상태를 함께 검토 공통 기반 구축 구조, Token, Layout, API Client와 인증 상태 8~12근무일 PL 겸 개발자가 기준을 확정하고 개발 시니어가 공통 UI와 Client 구현을 병렬 수행 회원·공통·메인 로그인, 가입, 계정, 월렛, 홈과 Navigation 17~22근무일 인증 흐름과 일반 화면을 나눠 두 시니어가 병렬 구현하고 상호 Review 상품·사용처·검색 목록, 상세, Filter, 관심, 카드와 공항안내 17~22근무일 기능 묶음과 목록·상세 패턴을 분담해 병렬 구현 주문·결제 장바구니, 주문서, 쿠폰, 결제, 선물과 취소 17~22근무일 PL 겸 개발자가 정책과 고위험 흐름을 맡고 개발 시니어가 주문 기능을 병렬 구현 기타 기능 프로모션, 고객센터, 설정과 오류 화면 7~10근무일 확정된 공통 패턴을 두 시니어의 담당 기능에 나눠 적용 WebView 통합 인증 전달, 외부 이동, 앱 복귀와 Bridge 확인 7~10근무일 PL 겸 개발자가 계약과 통합을 맡고 개발 시니어가 연결 화면과 회귀 Test를 담당 통합 QA 및 안정화 반응형, 접근성, 성능, 결제, UAT와 회귀 Test 12~16근무일 PL 겸 개발자가 우선순위와 완료를 판단하고 개발 시니어가 수정·회귀 확인을 병렬 수행 시니어 2명 중 1명이 PL과 개발을 겸하는 구성은 전체 90~115근무일, 약 4.5~5.75개월 입니다.",
    "url": "./../guides/planning/web.html#section-12"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "두 구축 범위를 합산하지 않는 이유",
    "excerpt": "앱 IA와 웹사이트 IA에서 동일한 화면 ID가 212개 확인됩니다. 공통 영역 일부는 문서에서 화면 ID 체계가 다르게 부여되어 있어 실제 기능 수준의 중복도는 화면 ID 일치 비율보다 높습니다. 앱의 WebView 166개는 대부분 반응형 웹사이트 기능의 Mobile Web 표현과 같습니다. 하나의 공통 Front-end 코드베이스에서 반응형 웹과 WebView 모드를 함께 지원하면 다음…",
    "content": "5. 두 구축 범위를 합산하지 않는 이유 앱 IA와 웹사이트 IA에서 동일한 화면 ID가 212개 확인됩니다. 공통 영역 일부는 문서에서 화면 ID 체계가 다르게 부여되어 있어 실제 기능 수준의 중복도는 화면 ID 일치 비율보다 높습니다. 앱의 WebView 166개는 대부분 반응형 웹사이트 기능의 Mobile Web 표현과 같습니다. 하나의 공통 Front-end 코드베이스에서 반응형 웹과 WebView 모드를 함께 지원하면 다음을 재사용할 수 있습니다. 도메인 모델과 TypeScript Type API Client와 Server 상태 처리 Form 검증과 오류 메시지 상품, 사용처, 주문과 회원 관련 UI Component Loading, Empty, Error와 권한 제한 상태 단위 테스트와 주요 사용자 흐름 테스트 따라서 166 + 225 = 391 개의 신규 화면으로 계산하지 않습니다. 약 225개의 공통 웹 화면 및 상태 를 구현하고, 그중 앱에 제공되는 166개 에 WebView 실행 환경 대응을 추가하는 방식으로 산정합니다. 반응형 웹과 앱 WebView를 별도 저장소와 별도 Component로 중복 구현하면 재사용 효과가 사라져 전체 일정이 약 20~30% 증가 할 수 있습니다.",
    "url": "./../guides/planning/web.html#section-5"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "문서 목적과 기간 기준",
    "excerpt": "이 문서는 더라운지 3.0의 앱 내 WebView 영역과 반응형 웹사이트 구축 범위를 기준으로 Front-end 개발 일정을 산정하기 위한 보고서입니다. AI를 개발 과정에 적극적으로 활용하고, Backend와 Flutter App 개발은 별도 담당자가 병행하는 조건으로 산정합니다. 특정 착수일이나 완료일은 전제로 하지 않습니다. 기간은 근무일과 개월 수로 표시하며, 기획·디자인·API 계약…",
    "content": "1. 문서 목적과 기간 기준 이 문서는 더라운지 3.0의 앱 내 WebView 영역과 반응형 웹사이트 구축 범위를 기준으로 Front-end 개발 일정을 산정하기 위한 보고서입니다. AI를 개발 과정에 적극적으로 활용하고, Backend와 Flutter App 개발은 별도 담당자가 병행하는 조건으로 산정합니다. 특정 착수일이나 완료일은 전제로 하지 않습니다. 기간은 근무일과 개월 수로 표시하며, 기획·디자인·API 계약이 기능 개발 순서에 맞춰 제공되는 시점부터 계산합니다. 1개월을 20근무일로 계산하는 이유 주 5일 근무를 기준으로 연간 평일은 약 261일이며, 월평균으로 환산하면 약 21.7일 입니다. 여기에서 공휴일, 연차, 회사 휴무일과 전사 일정처럼 실제 개발에 사용할 수 없는 날을 고려하면 월평균 실근무 가능일은 약 19~20일이 됩니다. 과도하게 낙관적인 환산을 피하고 인원별 안을 같은 기준으로 비교하기 위해 20근무일을 1개월의 기준값 으로 사용합니다. 20근무일은 특정 월의 실제 근무일이 아닙니다. 실제 착수 시점이 정해지면 해당 기간의 공휴일, 조직별 휴가와 회사 휴무일을 반영해 달력 일정을 다시 계산해야 합니다. 문서의 화면은 Page뿐 아니라 Layer, Tab, Link와 Content 상태를 포함합니다. 예상 기간에는 구현, 연동, 테스트와 안정화가 포함됩니다. 팀별 기간은 팀 전체 합산 공수가 아니라 착수부터 안정화까지의 기간입니다.",
    "url": "./../guides/planning/web.html#section-1"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "산정 결과 요약",
    "excerpt": "시니어 2명 중 1명이 PL과 개발을 겸하는 구성의 전체 구축 기간은 약 4.5~5.75개월 로 예상합니다. Front-end 구축 범위는 반응형 웹사이트 약 225개 화면 및 상태를 중심으로 구현하고, 그중 166개를 앱 WebView에서도 사용할 수 있도록 대응 하는 구조입니다. 앱 IA의 Native 60개는 Flutter 개발자가 담당 합니다. 구성 예상 근무일 예상 개월 시니어 2명…",
    "content": "16. 산정 결과 요약 시니어 2명 중 1명이 PL과 개발을 겸하는 구성의 전체 구축 기간은 약 4.5~5.75개월 로 예상합니다. Front-end 구축 범위는 반응형 웹사이트 약 225개 화면 및 상태를 중심으로 구현하고, 그중 166개를 앱 WebView에서도 사용할 수 있도록 대응 하는 구조입니다. 앱 IA의 Native 60개는 Flutter 개발자가 담당 합니다. 구성 예상 근무일 예상 개월 시니어 2명 1명은 PL 겸 개발 90~115근무일 약 4.5~5.75개월 두 시니어가 인증, 회원, 상품, 주문·결제와 일반 화면을 기능 단위로 나눠 병렬 구현할 수 있어 기존보다 핵심 기능의 분담 범위가 넓습니다. 다만 PL 겸 개발자는 일정 관리, 대외 협의, 작업 분배와 최종 Review도 담당하므로 두 명 모두가 개발에 전념하는 구성과 동일한 속도로 계산하지 않습니다. 이 일정은 기획, 디자인과 승인된 API 계약이 기능 개발 순서에 맞춰 제공되는 조건에서 성립합니다. PL 업무가 예상보다 커지거나 요구사항 변경과 확인 대기가 반복되면 개발 인원이 두 명이어도 일정이 직접 증가합니다. 더라운지 Front-end 구축 일정 산정 보고서",
    "url": "./../guides/planning/web.html#section-16"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "산정 자료와 대상",
    "excerpt": "산정에는 다음 두 IA를 사용했습니다. 더라운지 3.0 FO APP IA : 앱에서 Native와 WebView로 제공할 화면 정의 더라운지 3.0 FO IA(PC WEB) : PC와 Mobile Web을 포함한 반응형 웹사이트 화면 정의 두 IA는 같은 Front Office 서비스를 서로 다른 실행 환경에서 정의합니다. 따라서 화면 수를 단순 합산하지 않고, 공통 기능의 재사용 여부와 앱…",
    "content": "2. 산정 자료와 대상 산정에는 다음 두 IA를 사용했습니다. 더라운지 3.0 FO APP IA : 앱에서 Native와 WebView로 제공할 화면 정의 더라운지 3.0 FO IA(PC WEB) : PC와 Mobile Web을 포함한 반응형 웹사이트 화면 정의 두 IA는 같은 Front Office 서비스를 서로 다른 실행 환경에서 정의합니다. 따라서 화면 수를 단순 합산하지 않고, 공통 기능의 재사용 여부와 앱 전용 처리를 구분하여 산정했습니다.",
    "url": "./../guides/planning/web.html#section-2"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "실제 투입 구성의 예상 일정",
    "excerpt": "구성 예상 근무일 개월 환산 일정 특성 시니어 2명 1명은 PL 겸 개발 90~115근무일 약 4.5~5.75개월 두 시니어가 주요 기능을 병렬 구현하되, 1명은 PL 업무로 개발 가용시간이 제한됨 근무일은 팀 전체 합산 공수가 아니라 착수부터 안정화 완료까지의 예상 기간입니다. 기획·디자인·API 계약이 기능 개발 순서에 맞춰 확정되고 두 시니어가 다른 프로젝트를 병행하지 않는 조건 을 적…",
    "content": "11. 실제 투입 구성의 예상 일정 구성 예상 근무일 개월 환산 일정 특성 시니어 2명 1명은 PL 겸 개발 90~115근무일 약 4.5~5.75개월 두 시니어가 주요 기능을 병렬 구현하되, 1명은 PL 업무로 개발 가용시간이 제한됨 근무일은 팀 전체 합산 공수가 아니라 착수부터 안정화 완료까지의 예상 기간입니다. 기획·디자인·API 계약이 기능 개발 순서에 맞춰 확정되고 두 시니어가 다른 프로젝트를 병행하지 않는 조건 을 적용합니다. 시니어가 두 명이어도 기간이 절반으로 줄지 않는 이유는 다음과 같습니다. PL 겸 개발자는 협의, 일정 관리, 작업 분배와 최종 Review를 함께 수행합니다. Architecture, API 계약과 공통 기반은 병렬 구현 전에 확정해야 합니다. 병렬 개발 후 Code Review, 충돌 해결, 기능 통합과 회귀 Test가 필요합니다. 기획·디자인·Backend와 Flutter App의 확인 대기 시간은 인원 증가로 줄지 않습니다.",
    "url": "./../guides/planning/web.html#section-11"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "완료 기준",
    "excerpt": "IA에 포함된 Front-end 대상 화면과 상태가 구현되어 있습니다. 승인된 API 계약을 기준으로 정상 및 주요 오류 흐름이 동작합니다. 결제 성공, 실패, 취소, 재시도와 주문 상태 재조회가 검증되었습니다. PC와 Mobile Web의 주요 해상도에서 Layout이 정상입니다. 앱 WebView의 로그인 상태, 이동, 외부 화면과 앱 복귀가 검증되었습니다. Loading, Empty,…",
    "content": "15. 완료 기준 IA에 포함된 Front-end 대상 화면과 상태가 구현되어 있습니다. 승인된 API 계약을 기준으로 정상 및 주요 오류 흐름이 동작합니다. 결제 성공, 실패, 취소, 재시도와 주문 상태 재조회가 검증되었습니다. PC와 Mobile Web의 주요 해상도에서 Layout이 정상입니다. 앱 WebView의 로그인 상태, 이동, 외부 화면과 앱 복귀가 검증되었습니다. Loading, Empty, Error와 접근 제한 상태가 확인되었습니다. 주요 기능의 자동화 테스트와 수동 회귀 테스트가 완료되었습니다. 치명적 또는 주요 결함이 해결되고 UAT 확인이 완료되었습니다.",
    "url": "./../guides/planning/web.html#section-15"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "일정 산정 방식",
    "excerpt": "화면 수에 고정 단가를 곱하지 않고 다음 요소를 함께 고려했습니다. 공통 Layout과 Component의 최초 구축 비용 동일 패턴 화면의 재사용 효과 회원, 주문과 결제처럼 상태가 복잡한 기능의 추가 비용 반응형 웹과 앱 WebView의 환경 차이 Backend API와 Flutter Bridge 통합 비용 자동화 테스트, 실제 기기 검증과 UAT 수정 비용 여러 개발자의 병렬 작업에서…",
    "content": "10. 일정 산정 방식 화면 수에 고정 단가를 곱하지 않고 다음 요소를 함께 고려했습니다. 공통 Layout과 Component의 최초 구축 비용 동일 패턴 화면의 재사용 효과 회원, 주문과 결제처럼 상태가 복잡한 기능의 추가 비용 반응형 웹과 앱 WebView의 환경 차이 Backend API와 Flutter Bridge 통합 비용 자동화 테스트, 실제 기기 검증과 UAT 수정 비용 여러 개발자의 병렬 작업에서 발생하는 협업 및 통합 비용 개발자를 두 배 투입해도 일정이 정확히 절반으로 줄지는 않습니다. 공통 구조와 API 계약은 선행 작업이 필요하고, 병렬 개발 후 Code Review, 충돌 해결, 통합 테스트와 회귀 테스트가 증가하기 때문입니다.",
    "url": "./../guides/planning/web.html#section-10"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "일정이 성립하기 위한 전제 조건",
    "excerpt": "UI/UX 디자인이 기능 개발 순서에 맞춰 확정되어 제공됩니다. Backend가 승인된 API 계약, 인증 방식과 오류 규칙을 제공합니다. Front-end와 Backend가 기능 단위로 병렬 개발할 수 있습니다. 결제 방식과 PG 연동 책임 범위가 주문 기능 착수 전에 확정됩니다. Flutter 개발자가 WebView Bridge와 앱 전환 규칙을 함께 정의합니다. 반응형 웹과 WebVie…",
    "content": "13. 일정이 성립하기 위한 전제 조건 UI/UX 디자인이 기능 개발 순서에 맞춰 확정되어 제공됩니다. Backend가 승인된 API 계약, 인증 방식과 오류 규칙을 제공합니다. Front-end와 Backend가 기능 단위로 병렬 개발할 수 있습니다. 결제 방식과 PG 연동 책임 범위가 주문 기능 착수 전에 확정됩니다. Flutter 개발자가 WebView Bridge와 앱 전환 규칙을 함께 정의합니다. 반응형 웹과 WebView가 하나의 코드베이스와 공통 Component를 사용합니다. 완료된 기능의 대규모 재설계를 포함하는 기획 변경이 반복되지 않습니다. QA와 UAT 담당자가 기능 완료 시점에 맞춰 검증할 수 있습니다. PL 겸 개발 시니어는 근무시간의 약 60~70%를 구현, 협의, Review와 Test에 사용할 수 있습니다. 개발 시니어는 다른 프로젝트를 병행하지 않고 담당 기능을 독립적으로 구현하며 상호 Review에 참여할 수 있습니다. 조건이 충족되지 않으면 개발자가 대기하거나 완료된 기능을 다시 수정해야 하므로, AI 활용 여부와 관계없이 일정이 증가합니다.",
    "url": "./../guides/planning/web.html#section-13"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "주요 일정 위험과 추가 기간",
    "excerpt": "위험 요소 예상 영향 이유 PL 업무가 전제보다 많거나 다른 프로젝트까지 병행 10~20근무일 증가 PL 겸 개발자의 구현·Review 시간이 줄고 주요 의사결정이 병목 개발 시니어가 주요 기능을 독립적으로 완료하기 어려움 10~20근무일 증가 PL 겸 개발자의 작업 분해, 상세 Review와 재작업이 증가 두 시니어 중 1명의 휴가·이탈·장기 병목 발생 해당 기간 이상 직접 영향 남은 1명…",
    "content": "14. 주요 일정 위험과 추가 기간 위험 요소 예상 영향 이유 PL 업무가 전제보다 많거나 다른 프로젝트까지 병행 10~20근무일 증가 PL 겸 개발자의 구현·Review 시간이 줄고 주요 의사결정이 병목 개발 시니어가 주요 기능을 독립적으로 완료하기 어려움 10~20근무일 증가 PL 겸 개발자의 작업 분해, 상세 Review와 재작업이 증가 두 시니어 중 1명의 휴가·이탈·장기 병목 발생 해당 기간 이상 직접 영향 남은 1명에게 PL, 구현, Review와 QA가 동시에 집중 별도 QA 지원 없이 개발자가 전체 검증 수행 10~15근무일 증가 구현과 회귀 Test를 순차 수행해야 함 반응형 웹과 WebView를 별도 코드베이스로 구현 전체 일정 20~30% 증가 화면, API, 상태와 테스트를 중복 관리 API 계약이 구현 도중 반복 변경 10~20근무일 이상 증가 가능 Type, Form, 오류 처리와 테스트를 함께 수정 완료된 화면의 디자인 반복 변경 변경 범위에 따라 10~20% 증가 Component와 반응형 Layout의 회귀 수정 발생 PG SDK 또는 복잡한 앱 복귀 처리 추가 5~10근무일 증가 결제사 환경과 실제 앱에서 별도 검증 WebView Bridge 계약 지연 5~10근무일 증가 인증, Navigation과 외부 화면 전환 검증 지연 다국어 전체 적용 및 번역 QA 추가 10~15% 증가 가능 문구 길이, Layout, 날짜·금액과 Locale 검증 실제 기기 또는 QA 환경 제공 지연 지연 기간만큼 완료 시점 영향 WebView와 결제는 개발 환경만으로 완료 검증이 어려움 구형 Browser까지 지원 범위 확대 5~15근무일 증가 Polyfill, Layout 보정과 별도 회귀 테스트 필요 여러 위험이 동시에 발생하면 영향 범위가 겹칠 수 있으므로 추가 기간을 단순 합산하지 않고 변경 범위를 다시 산정해야 합니다.",
    "url": "./../guides/planning/web.html#section-14"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "AI 활용 방식과 일정 반영",
    "excerpt": "AI로 단축할 수 있는 작업 Page와 Component 기본 구조 생성 TypeScript Type과 API 호출 코드 초안 작성 반복되는 목록, 상세, Form과 Layer 변형 구현 Design Token 적용과 반응형 Style 초안 작성 Form Schema와 Validation 코드 생성 Mock Data, 테스트 Case와 Storybook Story 초안 작성 반복 Refact…",
    "content": "8. AI 활용 방식과 일정 반영 AI로 단축할 수 있는 작업 Page와 Component 기본 구조 생성 TypeScript Type과 API 호출 코드 초안 작성 반복되는 목록, 상세, Form과 Layer 변형 구현 Design Token 적용과 반응형 Style 초안 작성 Form Schema와 Validation 코드 생성 Mock Data, 테스트 Case와 Storybook Story 초안 작성 반복 Refactoring과 정적 분석 오류 수정 문서화와 Code Review Check List 작성 규칙이 명확하고 반복적인 영역에서는 기존 수작업 방식보다 약 20~30%의 구현 시간 단축 을 기대할 수 있습니다. 아래 일정에는 이 단축 효과를 이미 반영했습니다. AI만으로 줄이기 어려운 작업 미확정 기획과 업무 규칙 결정 디자인과 실제 구현 결과의 최종 판단 Backend API 계약과 예외 정책 협의 로그인, 본인인증과 결제의 실환경 검증 Flutter App과 WebView 사이의 동작 확인 실제 기기, Browser와 해상도별 QA 운영 담당자의 UAT와 수정 사항 반영 인증, 결제, 개인정보와 주문 상태 코드는 개발자 검토와 실환경 테스트가 필요합니다. AI 활용만으로 40~50% 이상 단축된다고 가정하면 검증 기간을 과소평가할 위험이 있습니다.",
    "url": "./../guides/planning/web.html#section-8"
  },
  {
    "document": "더라운지 Front-end 구축 일정 산정 보고서",
    "section": "Front-end 업무 범위",
    "excerpt": "포함 범위 반응형 웹사이트의 PC 및 Mobile Web UI 구현 앱 IA에서 WebView로 구분된 화면 구현 공통 Layout, Component, Design Token과 Form 체계 구성 로그인 상태, 권한과 사용자별 화면 분기 Backend API 연동과 요청·응답 상태 처리 장바구니, 주문서와 결제 전후 Front-end 흐름 Flutter App과 WebView 사이의 이동,…",
    "content": "6. Front-end 업무 범위 포함 범위 반응형 웹사이트의 PC 및 Mobile Web UI 구현 앱 IA에서 WebView로 구분된 화면 구현 공통 Layout, Component, Design Token과 Form 체계 구성 로그인 상태, 권한과 사용자별 화면 분기 Backend API 연동과 요청·응답 상태 처리 장바구니, 주문서와 결제 전후 Front-end 흐름 Flutter App과 WebView 사이의 이동, 인증 상태와 Bridge 연동 Loading, Empty, Error, 재시도와 접근 제한 상태 주요 기능의 단위 및 통합 테스트 반응형, 주요 Browser, WebView, 접근성과 기본 성능 검증 통합 QA와 UAT에서 확인된 Front-end 결함 수정 제외 범위 앱 IA에서 Native로 구분된 60개 화면의 Flutter 구현 Backend API, Database, 인증 Server와 주문·결제 Server 구현 결제 승인, 검증, Webhook, 정산과 Backend 취소 처리 Back Office와 운영자 화면 구축 UI/UX 기획 및 디자인 제작 자체 앱 심사와 Store 배포 업무 번역문 작성과 운영 콘텐츠 제작 제외 범위가 Front-end와 무관하다는 의미는 아닙니다. API 계약, 인증 정책, 결제 방식과 WebView Bridge는 Front-end 구현의 선행 조건이며, 담당 팀 간 협의가 지연되면 Front-end 일정에도 영향을 줍니다.",
    "url": "./../guides/planning/web.html#section-6"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "리뷰 체크리스트",
    "excerpt": "새 토큰이 실제로 반복되는 디자인 결정인가? Base Token과 Semantic Token의 역할이 구분되어 있는가? 컴포넌트에서 원시 색상과 임의 값을 불필요하게 사용하지 않았는가? Figma Variables와 globals.css 의 이름 및 값이 일치하는가? shadcn/ui의 기존 Semantic Token과 접근성 동작을 유지하는가? 사용하지 않는 Component Token과…",
    "content": "9. 리뷰 체크리스트 새 토큰이 실제로 반복되는 디자인 결정인가? Base Token과 Semantic Token의 역할이 구분되어 있는가? 컴포넌트에서 원시 색상과 임의 값을 불필요하게 사용하지 않았는가? Figma Variables와 globals.css 의 이름 및 값이 일치하는가? shadcn/ui의 기존 Semantic Token과 접근성 동작을 유지하는가? 사용하지 않는 Component Token과 자동화 구조를 미리 추가하지 않았는가? 미확정된 브랜드, 상태와 다크 모드 값을 확정된 기준처럼 사용하지 않았는가? 디자인 토큰 가이드",
    "url": "./../guides/ui/design_tokens.html#section-9"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "목적과 범위",
    "excerpt": "이 문서는 디자인 값의 이름, 사용 범위와 코드 연결 방식을 정의합니다. Figma 화면을 React 코드로 변환하는 절차는 React Code Exports 가이드 를 따릅니다. 디자인 토큰은 반복되는 모든 숫자가 아니라 합의된 디자인 결정입니다. 화면 코드에서는 원시 값보다 의미 기반 토큰을 우선합니다. 실제 사용처가 없는 토큰과 컴포넌트별 토큰을 미리 만들지 않습니다. Tokens St…",
    "content": "1. 목적과 범위 이 문서는 디자인 값의 이름, 사용 범위와 코드 연결 방식을 정의합니다. Figma 화면을 React 코드로 변환하는 절차는 React Code Exports 가이드 를 따릅니다. 디자인 토큰은 반복되는 모든 숫자가 아니라 합의된 디자인 결정입니다. 화면 코드에서는 원시 값보다 의미 기반 토큰을 우선합니다. 실제 사용처가 없는 토큰과 컴포넌트별 토큰을 미리 만들지 않습니다. Tokens Studio 무료 기능 안에서 유지할 수 있는 구조로 시작합니다.",
    "url": "./../guides/ui/design_tokens.html#section-1"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "변경과 동기화",
    "excerpt": "변경할 토큰의 사용 목적과 영향을 확인합니다. Tokens Studio의 Base Token과 Semantic Token 참조를 수정합니다. Figma Variables 또는 Styles를 다시 내보내고 주요 컴포넌트를 확인합니다. globals.css 의 실제 값과 @theme inline 연결을 갱신합니다. 기존 shadcn/ui와 기능 화면에서 대비, 상태와 반응형 결과를 확인합니다.…",
    "content": "8. 변경과 동기화 변경할 토큰의 사용 목적과 영향을 확인합니다. Tokens Studio의 Base Token과 Semantic Token 참조를 수정합니다. Figma Variables 또는 Styles를 다시 내보내고 주요 컴포넌트를 확인합니다. globals.css 의 실제 값과 @theme inline 연결을 갱신합니다. 기존 shadcn/ui와 기능 화면에서 대비, 상태와 반응형 결과를 확인합니다. 관련 AI 요약 문서와 가이드 내용이 달라졌는지 확인합니다. 토큰 이름 변경은 단순한 값 변경보다 영향이 큽니다. 기존 Tailwind 클래스와 Figma Variable 사용처를 먼저 찾고 한 변경에서 함께 수정합니다.",
    "url": "./../guides/ui/design_tokens.html#section-8"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "토큰 분류와 이름",
    "excerpt": "4.1 Base Token Base Token은 실제 값의 재료입니다. Tokens Studio에서는 base Token Set으로 관리하고, 의미를 가진 화면 코드에서 직접 사용하는 것은 지양합니다. 분류 이름 적용 기준 Color color.neutral.* , color.brand.* 실제 팔레트가 확정된 범위만 작성 Spacing spacing.1 , spacing.2 , spacin…",
    "content": "4. 토큰 분류와 이름 4.1 Base Token Base Token은 실제 값의 재료입니다. Tokens Studio에서는 base Token Set으로 관리하고, 의미를 가진 화면 코드에서 직접 사용하는 것은 지양합니다. 분류 이름 적용 기준 Color color.neutral.* , color.brand.* 실제 팔레트가 확정된 범위만 작성 Spacing spacing.1 , spacing.2 , spacing.3 , spacing.4 , spacing.6 , spacing.8 , spacing.10 , spacing.12 Tailwind 기본 간격과 맞춘 4px 배수의 실제 사용 값 Radius radius.sm , radius.md , radius.lg , radius.xl 현재 --radius 기준과 일치 Typography font.sans , font.heading , font.mono 확정된 font family만 관리 Tailwind가 이미 제공하는 모든 간격, 글자 크기와 그림자를 Tokens Studio에 다시 만들지 않습니다. Figma와 코드가 함께 사용해야 하는 값만 관리합니다. 4.2 Semantic Token Semantic Token은 값이 아니라 사용 목적을 표현하며 semantic Token Set으로 관리합니다. 화면 코드와 shadcn/ui는 이 이름을 기본 계약으로 사용합니다. 범위 현재 사용 토큰 화면 background , foreground Surface card , card-foreground , popover , popover-foreground Action primary , primary-foreground , secondary , secondary-foreground 보조 상태 muted , muted-foreground , accent , accent-foreground 오류와 입력 destructive , border , input , ring sidebar-* 와 chart-* 는 해당 UI가 실제로 사용될 때 유지합니다. 성공, 경고와 안내 색상은 디자인과 사용 의미가 확정되기 전까지 Tailwind의 green , yellow , blue 계열로 임의 생성하지 않습니다. TBD : 브랜드 팔레트, 성공·경고·안내 토큰과 프로젝트 typography 단계는 디자인 확정 후 Base Token과 Semantic Token에 각각 반영합니다. 4.3 Component Token Button이나 Card별 토큰은 기본적으로 만들지 않습니다. Semantic Token과 shadcn/ui variant로 표현하기 어렵고 같은 변경 이유가 반복될 때만 추가합니다.",
    "url": "./../guides/ui/design_tokens.html#section-4"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "토큰 연결 구조",
    "excerpt": "Tokens Studio와 Figma는 디자인 값을 관리하고, 코드에서는 승인된 값을 CSS Variables와 Tailwind 유틸리티로 사용합니다. 무료 운영에서는 자동 변환을 전제로 하지 않고 변경 시 두 영역을 함께 확인합니다. flowchart LR accTitle: 디자인 토큰을 Figma와 React 코드에 연결하는 구조 accDescr: Tokens Studio의 base와 s…",
    "content": "3. 토큰 연결 구조 Tokens Studio와 Figma는 디자인 값을 관리하고, 코드에서는 승인된 값을 CSS Variables와 Tailwind 유틸리티로 사용합니다. 무료 운영에서는 자동 변환을 전제로 하지 않고 변경 시 두 영역을 함께 확인합니다. flowchart LR accTitle: 디자인 토큰을 Figma와 React 코드에 연결하는 구조 accDescr: Tokens Studio의 base와 semantic Token Set을 Figma Variables에 반영하고, 승인된 값을 globals.css의 CSS Variables와 Tailwind theme variable로 연결하여 shadcn UI와 기능 컴포넌트에서 사용합니다. A[\"Tokens Studio · base / semantic\"] --> B[\"Figma Variables / Styles\"] A --> C[\"승인된 토큰 값 확인\"] C --> D[\"globals.css · :root / .dark\"] D --> E[\"Tailwind CSS 4 · @theme inline\"] E --> F[\"bg-background · text-foreground 등\"] F --> G[\"shadcn/ui와 기능 컴포넌트\"] Tokens Studio에서 Tailwind CSS 4 코드까지의 연결 가이드의 기준 원본은 이 문서이며, 현재 코드에서 실제 적용되는 값의 기준은 globals.css 입니다. 두 값이 다르면 어느 한쪽을 임의로 덮어쓰지 않고 변경 의도와 영향 범위를 먼저 확인합니다.",
    "url": "./../guides/ui/design_tokens.html#section-3"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "현재 프로젝트 기준",
    "excerpt": "애플리케이션은 React 19, Tailwind CSS 4와 shadcn/ui를 사용합니다. 정확한 버전과 기술 책임은 Front-End 개발 가이드 와 프로젝트 Lock File을 기준으로 합니다. 파일 또는 도구 현재 역할 Tokens Studio Token Set 작성과 Figma Variables·Styles 반영 Figma Variables 디자인에서 색상, 간격과 크기를 재사용 c…",
    "content": "2. 현재 프로젝트 기준 애플리케이션은 React 19, Tailwind CSS 4와 shadcn/ui를 사용합니다. 정확한 버전과 기술 책임은 Front-End 개발 가이드 와 프로젝트 Lock File을 기준으로 합니다. 파일 또는 도구 현재 역할 Tokens Studio Token Set 작성과 Figma Variables·Styles 반영 Figma Variables 디자인에서 색상, 간격과 크기를 재사용 components.json shadcn/ui의 CSS Variables 사용과 Tailwind CSS 경로 설정 src/app/globals.css 실제 CSS 값과 Tailwind theme variable 연결 src/components/ui 프로젝트가 소유하고 수정하는 shadcn/ui 컴포넌트 현재 components.json 은 cssVariables 를 사용하고, Tailwind CSS 4 기준으로 별도 tailwind.config 경로를 두지 않습니다. globals.css 는 :root 와 .dark 의 값을 @theme inline 으로 연결합니다. shadcn/ui 설정은 base-nova style, neutral base color와 Lucide icon을 사용합니다. 이 설정은 새로 추가되는 컴포넌트 코드에 영향을 주므로 개별 화면 작업에서 임의로 변경하지 않습니다.",
    "url": "./../guides/ui/design_tokens.html#section-2"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "Figma Variables 적용",
    "excerpt": "색상, 간격과 크기는 반복되는 화면별 값보다 Variable을 우선합니다. Auto Layout의 간격은 승인된 spacing 값에 맞춥니다. Semantic Token은 실제 사용 목적이 드러나는 이름으로 연결합니다. 공통 컴포넌트 인스턴스는 Variables와 함께 유지합니다. Tokens Studio에서 지원하지 않는 타입은 억지로 Variable로 변환하지 않습니다. 무료 Token…",
    "content": "6. Figma Variables 적용 색상, 간격과 크기는 반복되는 화면별 값보다 Variable을 우선합니다. Auto Layout의 간격은 승인된 spacing 값에 맞춥니다. Semantic Token은 실제 사용 목적이 드러나는 이름으로 연결합니다. 공통 컴포넌트 인스턴스는 Variables와 함께 유지합니다. Tokens Studio에서 지원하지 않는 타입은 억지로 Variable로 변환하지 않습니다. 무료 Token Set 내보내기에서는 Mode를 만들 수 없으므로, 현재 코드의 .dark 값은 Figma와 자동 동기화되는 것으로 간주하지 않습니다. TBD : 다크 모드가 제품 요구사항으로 확정되면 Figma Mode 관리와 코드 동기화 방식을 별도로 결정합니다.",
    "url": "./../guides/ui/design_tokens.html#section-6"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "Tailwind CSS 4와 shadcn/ui 연결",
    "excerpt": "7.1 Tailwind CSS 4 연결 실제 색상값은 :root 와 .dark 에 정의하고, Tailwind 유틸리티로 노출할 이름은 최상위 @theme inline 에서 연결합니다. Tailwind CSS의 theme variable은 사용할 유틸리티 API를 결정합니다. 자세한 동작은 Tailwind CSS Theme Variables 를 확인합니다. @theme inline { --co…",
    "content": "7. Tailwind CSS 4와 shadcn/ui 연결 7.1 Tailwind CSS 4 연결 실제 색상값은 :root 와 .dark 에 정의하고, Tailwind 유틸리티로 노출할 이름은 최상위 @theme inline 에서 연결합니다. Tailwind CSS의 theme variable은 사용할 유틸리티 API를 결정합니다. 자세한 동작은 Tailwind CSS Theme Variables 를 확인합니다. @theme inline { --color-background : var (--background); --color-foreground : var (--foreground); --color-primary : var (--primary); --color-primary-foreground : var (--primary-foreground); --color-border : var (--border); --radius-lg : var (--radius); } Semantic Token CSS Variable Tailwind 사용 background --background bg-background foreground --foreground text-foreground primary --primary bg-primary , text-primary border --border border-border ring --ring ring-ring 7.2 shadcn/ui 관리 shadcn/ui 컴포넌트의 기본 Semantic Token 계약을 우선 유지합니다. 새 컴포넌트를 추가하기 전에 src/components/ui 의 기존 구현을 확인합니다. CLI로 추가한 코드는 외부 패키지의 숨은 구현이 아니라 프로젝트가 소유하고 검수하는 코드로 취급합니다. 기능 의미가 있는 조합은 shadcn/ui 원형을 억지로 확장하지 않고 해당 기능 가까이에 둡니다. variant는 실제로 반복되는 상태가 확인될 때 추가하고 조건부 class는 기존 cn 을 사용합니다. 공통 UI 수정 시 기존 사용처와 키보드, 포커스 및 ARIA 동작을 함께 확인합니다. CLI로 컴포넌트를 덮어쓰기 전에 프로젝트 수정 내용을 확인합니다. 같은 역할의 스타일을 Tailwind 클래스와 별도 CSS에 중복 작성하지 않습니다.",
    "url": "./../guides/ui/design_tokens.html#section-7"
  },
  {
    "document": "디자인 토큰 가이드",
    "section": "Tokens Studio 무료 운영",
    "excerpt": "무료 라이선스에서는 Token Set을 Figma의 Variables와 Styles로 내보낼 수 있습니다. Token Set마다 Variable Collection이 생성되며, Collection 안의 Mode 생성과 다른 Figma 파일의 Variable 참조는 지원되지 않습니다. 자세한 범위는 Tokens Studio Token Set 내보내기 를 확인합니다. base 와 semantic…",
    "content": "5. Tokens Studio 무료 운영 무료 라이선스에서는 Token Set을 Figma의 Variables와 Styles로 내보낼 수 있습니다. Token Set마다 Variable Collection이 생성되며, Collection 안의 Mode 생성과 다른 Figma 파일의 Variable 참조는 지원되지 않습니다. 자세한 범위는 Tokens Studio Token Set 내보내기 를 확인합니다. base 와 semantic 두 Token Set으로 시작합니다. semantic 은 base 값을 참조합니다. 무료 범위에서 Theme와 여러 Mode를 자동 생성하는 흐름을 전제로 하지 않습니다. Token 이름과 타입을 바꿀 때 Figma 사용처와 코드 영향을 함께 확인합니다. 여러 Token Set과 Mode가 실제로 필요해진 뒤 유료 기능이나 자동화를 검토합니다. TBD : Tokens Studio JSON을 저장소에서 관리할 경로와 동기화 방식은 첫 프로젝트 토큰 값이 승인된 뒤 결정합니다. 값이 확정되기 전에는 빈 토큰 파일이나 변환 파이프라인을 만들지 않습니다.",
    "url": "./../guides/ui/design_tokens.html#section-5"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "업데이트와 배포",
    "excerpt": "변경 내용 일반적인 배포 범위 확인 사항 웹 화면의 문구·디자인·업무 흐름 웹 서비스 배포 기존 App과의 호환성 새로운 App 기능 호출 웹과 App 동시 검토 구버전 App의 처리 방법 Bridge 통신 규격 변경 웹과 App 배포 버전 호환성과 배포 순서 운영체제 권한·Native 기능 변경 App 심사와 배포 Android·iOS 정책과 사용자 안내",
    "content": "8. 업데이트와 배포 변경 내용 일반적인 배포 범위 확인 사항 웹 화면의 문구·디자인·업무 흐름 웹 서비스 배포 기존 App과의 호환성 새로운 App 기능 호출 웹과 App 동시 검토 구버전 App의 처리 방법 Bridge 통신 규격 변경 웹과 App 배포 버전 호환성과 배포 순서 운영체제 권한·Native 기능 변경 App 심사와 배포 Android·iOS 정책과 사용자 안내",
    "url": "./../guides/platform/webview/webView_overview.html#section-8"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "이 문서에서 알 수 있는 것",
    "excerpt": "WebView가 무엇인지, 일반 브라우저와 어떤 차이가 있는지, 모바일 앱에서 어떤 역할을 담당하는지 설명합니다. 구현과 설정 방법은 Flutter WebView 설정 가이드 에서 확인합니다. 이 문서의 대상 주요 확인 내용 기획자·운영 담당자 WebView의 역할, 제약, 업데이트와 장애 대응 범위 프로젝트 관리자 App·Web·Backend의 책임과 사전 결정 항목 신규 참여자 서비스가…",
    "content": "1. 이 문서에서 알 수 있는 것 WebView가 무엇인지, 일반 브라우저와 어떤 차이가 있는지, 모바일 앱에서 어떤 역할을 담당하는지 설명합니다. 구현과 설정 방법은 Flutter WebView 설정 가이드 에서 확인합니다. 이 문서의 대상 주요 확인 내용 기획자·운영 담당자 WebView의 역할, 제약, 업데이트와 장애 대응 범위 프로젝트 관리자 App·Web·Backend의 책임과 사전 결정 항목 신규 참여자 서비스가 모바일 앱 안에서 동작하는 전체 구조",
    "url": "./../guides/platform/webview/webView_overview.html#section-1"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "일반 브라우저와의 차이",
    "excerpt": "구분 일반 브라우저 앱 내부 WebView 실행 위치 Chrome·Safari 같은 별도 앱 모바일 앱 화면 내부 주소 이동 사용자가 자유롭게 주소 입력 앱이 허용한 주소와 이동 정책 적용 기기 기능 브라우저가 제공하는 범위에서 사용 App과 연결해 카메라·위치 등 사용 가능 업데이트 브라우저와 웹 서비스가 각각 업데이트 웹 화면과 App 기능의 변경 범위에 따라 달라짐 문제 확인 웹 서비스…",
    "content": "3. 일반 브라우저와의 차이 구분 일반 브라우저 앱 내부 WebView 실행 위치 Chrome·Safari 같은 별도 앱 모바일 앱 화면 내부 주소 이동 사용자가 자유롭게 주소 입력 앱이 허용한 주소와 이동 정책 적용 기기 기능 브라우저가 제공하는 범위에서 사용 App과 연결해 카메라·위치 등 사용 가능 업데이트 브라우저와 웹 서비스가 각각 업데이트 웹 화면과 App 기능의 변경 범위에 따라 달라짐 문제 확인 웹 서비스와 브라우저 중심으로 확인 App·Web·Backend·운영체제를 함께 확인",
    "url": "./../guides/platform/webview/webView_overview.html#section-3"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "자주 묻는 질문",
    "excerpt": "WebView는 일반 모바일 웹과 같은가요? 같은 웹 기술을 사용하지만 앱 내부에서 실행되므로 주소 이동, 로그인, 파일, 권한과 새 창 처리 방식이 일반 브라우저와 다를 수 있습니다. 웹 화면을 수정하면 App을 다시 배포해야 하나요? 웹 화면과 업무 흐름만 변경하고 기존 App 기능을 그대로 사용한다면 웹 배포만으로 반영할 수 있습니다. 새로운 Native 기능이나 Bridge 계약을 추…",
    "content": "11. 자주 묻는 질문 WebView는 일반 모바일 웹과 같은가요? 같은 웹 기술을 사용하지만 앱 내부에서 실행되므로 주소 이동, 로그인, 파일, 권한과 새 창 처리 방식이 일반 브라우저와 다를 수 있습니다. 웹 화면을 수정하면 App을 다시 배포해야 하나요? 웹 화면과 업무 흐름만 변경하고 기존 App 기능을 그대로 사용한다면 웹 배포만으로 반영할 수 있습니다. 새로운 Native 기능이나 Bridge 계약을 추가하면 App 업데이트가 필요할 수 있습니다. Chrome에서 동작하면 Android WebView에서도 동작하나요? 항상 같지는 않습니다. 같은 Chromium 계열이어도 설치된 System WebView 버전과 앱 실행 환경이 다르므로 실제 지원 기기에서 확인해야 합니다. Safari에서 동작하면 iOS WebView에서도 동작하나요? Safari와 WKWebView는 WebKit을 공유하지만 제공 기능과 실행 조건에 차이가 있을 수 있으므로 실제 앱에서 검증해야 합니다. WebView에서 결제와 로그인을 처리해도 되나요? 가능하지만 인증정보 보호, 쿠키, 외부 앱 이동, 결제 결과 검증과 오류 복구 정책을 먼저 정해야 합니다. 권한과 거래 결과의 최종 판단은 서버가 수행해야 합니다. 모바일 앱 WebView 개요",
    "url": "./../guides/platform/webview/webView_overview.html#section-11"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "장애가 발생했을 때 확인할 영역",
    "excerpt": "현상 우선 확인 영역 주요 확인 내용 웹 화면이 열리지 않음 Web·네트워크·App 서비스 URL, 서버 상태, 인터넷 권한과 인증서 로그인이 유지되지 않음 인증·Web·App 쿠키, 세션 만료와 로그아웃 처리 카메라·위치가 동작하지 않음 App·운영체제 사용자 권한, App 설정과 Bridge 요청 일부 기기에서만 화면이 다름 Web·운영체제 Android System WebView 또는…",
    "content": "9. 장애가 발생했을 때 확인할 영역 현상 우선 확인 영역 주요 확인 내용 웹 화면이 열리지 않음 Web·네트워크·App 서비스 URL, 서버 상태, 인터넷 권한과 인증서 로그인이 유지되지 않음 인증·Web·App 쿠키, 세션 만료와 로그아웃 처리 카메라·위치가 동작하지 않음 App·운영체제 사용자 권한, App 설정과 Bridge 요청 일부 기기에서만 화면이 다름 Web·운영체제 Android System WebView 또는 iOS 버전 차이 결제·예약 결과가 다름 Backend·Web 서버의 최종 처리 결과와 화면 갱신",
    "url": "./../guides/platform/webview/webView_overview.html#section-9"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "지원 환경",
    "excerpt": "신규 모바일 프로젝트는 다음 환경을 기준으로 검토합니다. 플랫폼 최소 환경 확인 기준 Android Android SDK 24 이상 지원 대상 System WebView에서 프로젝트 사용 CSS와 핵심 기능 iOS iOS 15 이상 iOS 15 이상에서 제공되는 WKWebView Tailwind CSS v4의 공식 최소 브라우저 버전을 WebView의 일괄 차단 기준으로 사용하지 않습니다.…",
    "content": "6. 지원 환경 신규 모바일 프로젝트는 다음 환경을 기준으로 검토합니다. 플랫폼 최소 환경 확인 기준 Android Android SDK 24 이상 지원 대상 System WebView에서 프로젝트 사용 CSS와 핵심 기능 iOS iOS 15 이상 iOS 15 이상에서 제공되는 WKWebView Tailwind CSS v4의 공식 최소 브라우저 버전을 WebView의 일괄 차단 기준으로 사용하지 않습니다. Safari 15와 지원 대상 구형 WebView에서 프로젝트가 실제 사용하는 CSS와 주요 기능이 정상 동작하는지 확인합니다. 공통 CSS 하한은 Safari 15에서 지원되는 기능 범위로 정합니다. Android는 Safari 15에 특정 Chromium 버전을 대응시키지 않고 지원 대상 System WebView에서 실제 사용하는 Tailwind Utility와 핵심 기능을 검증합니다. 최소 기준을 정한 근거 주요 서비스 국가는 한국·중국·일본·미국이며 그 밖의 국가는 글로벌 기준으로 검토합니다. 2026년 7월 StatCounter 모바일 트래픽에서 Android와 iOS의 비중은 한국 65.39%·34.60%, 중국 70.37%·29.51%, 일본 36.41%·63.59%, 미국 40.39%·59.58%, 전 세계 68.36%·31.60%입니다. 따라서 Android 중심 국가와 iOS 중심 국가를 모두 지원해야 하며, 한 국가의 통계만으로 전체 지원 범위를 판단하지 않습니다. 한국 모바일 OS 점유율 중국 모바일 OS 점유율 일본 모바일 OS 점유율 미국 모바일 OS 점유율 전 세계 모바일 OS 점유율 Google이 2025년 12월 공개한 Android 배포 데이터에서 API 21~23의 합계는 0.8%이므로 API 24 이상은 약 99.2%입니다. 이 수치는 Google의 Android 활성 기기 분포이며 중국 시장 또는 이 서비스의 실제 고객 분포와 같다고 보지 않습니다. Google Android 버전 배포 원본 데이터 에서 조사일과 API별 비율을 확인합니다. Apple이 2026년 6월 7일 App Store에서 거래한 기기를 집계한 결과 전체 iPhone의 79%가 iOS 26을 사용합니다. 이 값만으로 iOS 15 이상 전체 비율이나 실제 서비스의 지원 도달률을 계산하지 않습니다. 자세한 내용은 Apple iOS 사용 현황 에서 확인합니다. 공개 점유율은 기준 선정의 참고 자료입니다. 출시 후에는 국가·OS·Android WebView 엔진별 실제 활성 사용자 분포와 오류율을 우선 근거로 사용합니다.",
    "url": "./../guides/platform/webview/webView_overview.html#section-6"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "프로젝트 시작 전에 결정할 항목",
    "excerpt": "항목 결정할 내용 주요 참여자 지원 환경 최소 Android·iOS 버전과 검증 기기 기획·App·QA 접속 범위 시작 주소, 허용 사이트와 외부 앱 이동 기획·Web·App·보안 로그인 로그인 방식, 유지 시간과 로그아웃 처리 기획·Backend·Web·App 기기 기능 카메라, 위치, 파일과 알림 사용 범위 기획·Web·App 오류 처리 로딩, 실패, 재시도와 사용자 안내 방식 기획·디자…",
    "content": "10. 프로젝트 시작 전에 결정할 항목 항목 결정할 내용 주요 참여자 지원 환경 최소 Android·iOS 버전과 검증 기기 기획·App·QA 접속 범위 시작 주소, 허용 사이트와 외부 앱 이동 기획·Web·App·보안 로그인 로그인 방식, 유지 시간과 로그아웃 처리 기획·Backend·Web·App 기기 기능 카메라, 위치, 파일과 알림 사용 범위 기획·Web·App 오류 처리 로딩, 실패, 재시도와 사용자 안내 방식 기획·디자인·Web·App 배포 웹과 App의 배포 순서 및 구버전 호환 정책 PM·Web·App·운영",
    "url": "./../guides/platform/webview/webView_overview.html#section-10"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "할 수 있는 것과 별도 검토가 필요한 것",
    "excerpt": "구분 내용 기본 제공 가능 웹 페이지 표시, 화면 이동, 로그인 화면과 서비스 정보 표시 App 연동 필요 카메라, QR, 위치, Push, 생체인증과 기기 파일 사용 정책 결정 필요 로그인 유지, 외부 앱 이동, 다운로드와 새 창 처리 보안 검토 필요 결제, 개인정보, 인증정보, 알 수 없는 외부 사이트 표시 App 연동이 필요한 기능은 웹 화면만 수정해서 추가할 수 없습니다. App과 W…",
    "content": "7. 할 수 있는 것과 별도 검토가 필요한 것 구분 내용 기본 제공 가능 웹 페이지 표시, 화면 이동, 로그인 화면과 서비스 정보 표시 App 연동 필요 카메라, QR, 위치, Push, 생체인증과 기기 파일 사용 정책 결정 필요 로그인 유지, 외부 앱 이동, 다운로드와 새 창 처리 보안 검토 필요 결제, 개인정보, 인증정보, 알 수 없는 외부 사이트 표시 App 연동이 필요한 기능은 웹 화면만 수정해서 추가할 수 없습니다. App과 Web 사이의 통신 규격을 정하고 Android·iOS 앱을 함께 개발·배포해야 할 수 있습니다.",
    "url": "./../guides/platform/webview/webView_overview.html#section-7"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "App·WebView·서버의 역할",
    "excerpt": "영역 주요 역할 대표 사례 Flutter App 앱 실행, 운영체제 권한과 기기 기능 처리 Push, 카메라, 위치, 파일, 생체인증 WebView 화면 서비스 화면과 사용자 업무 흐름 제공 라운지 안내, 이용권, 예약, 결제 화면 Bridge WebView와 App 사이의 승인된 요청 전달 QR 스캔 요청과 결과 전달 Backend 인증, 권한과 업무 데이터의 최종 판단 사용자 권한, 예약…",
    "content": "5. App·WebView·서버의 역할 영역 주요 역할 대표 사례 Flutter App 앱 실행, 운영체제 권한과 기기 기능 처리 Push, 카메라, 위치, 파일, 생체인증 WebView 화면 서비스 화면과 사용자 업무 흐름 제공 라운지 안내, 이용권, 예약, 결제 화면 Bridge WebView와 App 사이의 승인된 요청 전달 QR 스캔 요청과 결과 전달 Backend 인증, 권한과 업무 데이터의 최종 판단 사용자 권한, 예약 상태, 결제 결과 WebView 화면에 표시된 값만으로 사용자의 권한이나 결제 성공 여부를 확정하지 않습니다. 중요한 판단은 Backend가 수행합니다.",
    "url": "./../guides/platform/webview/webView_overview.html#section-5"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "WebView란 무엇인가",
    "excerpt": "WebView는 모바일 앱 화면 안에서 웹 페이지를 보여주는 기능입니다. 사용자는 별도의 브라우저 앱으로 이동하지 않고 웹으로 만든 서비스 화면을 이용할 수 있습니다. WebView는 Chrome이나 Safari 앱을 그대로 넣은 것이 아닙니다. Android와 iOS가 앱에 제공하는 전용 웹 표시 기능을 사용합니다. 환경 사용하는 기능 쉬운 설명 Android Android System W…",
    "content": "2. WebView란 무엇인가 WebView는 모바일 앱 화면 안에서 웹 페이지를 보여주는 기능입니다. 사용자는 별도의 브라우저 앱으로 이동하지 않고 웹으로 만든 서비스 화면을 이용할 수 있습니다. WebView는 Chrome이나 Safari 앱을 그대로 넣은 것이 아닙니다. Android와 iOS가 앱에 제공하는 전용 웹 표시 기능을 사용합니다. 환경 사용하는 기능 쉬운 설명 Android Android System WebView Android가 앱 내부 웹 화면을 위해 제공하는 기능 iOS WKWebView iOS가 앱 내부 웹 화면을 위해 제공하는 기능",
    "url": "./../guides/platform/webview/webView_overview.html#section-2"
  },
  {
    "document": "모바일 앱 WebView 개요",
    "section": "WebView를 사용하는 이유",
    "excerpt": "Android와 iOS에서 동일한 서비스 화면과 업무 흐름을 제공할 수 있습니다. 웹 화면만 변경할 때 App 전체를 다시 배포하지 않아도 될 수 있습니다. 기존 웹 기술과 개발 인력을 활용할 수 있습니다. 필요한 경우 App의 카메라·위치·파일 기능과 연결할 수 있습니다. 모든 화면을 WebView로 만드는 것이 항상 유리한 것은 아닙니다. 앱 시작, Push, 생체인증, 보안 저장소와 운…",
    "content": "4. WebView를 사용하는 이유 Android와 iOS에서 동일한 서비스 화면과 업무 흐름을 제공할 수 있습니다. 웹 화면만 변경할 때 App 전체를 다시 배포하지 않아도 될 수 있습니다. 기존 웹 기술과 개발 인력을 활용할 수 있습니다. 필요한 경우 App의 카메라·위치·파일 기능과 연결할 수 있습니다. 모든 화면을 WebView로 만드는 것이 항상 유리한 것은 아닙니다. 앱 시작, Push, 생체인증, 보안 저장소와 운영체제 권한처럼 App이 직접 처리해야 하는 기능은 Flutter Native 영역에 둡니다.",
    "url": "./../guides/platform/webview/webView_overview.html#section-4"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "근거 갱신",
    "excerpt": "출시 전에는 StatCounter의 최근 3개월 추세와 실제 기기 검증 결과를 함께 확인합니다. 출시 후에는 당사 서비스의 국가·기기·브라우저·버전별 활성 사용자 비율을 우선합니다. 자동 업데이트를 전제로 사용자 버전을 추정하지 않고 실제 운영 데이터에서 최소 버전 미만 사용자를 확인합니다. 최소 버전 미만 사용자 비율, 오류율과 고객 문의를 확인해 지원 기준을 조정합니다. 점유율 자료에는…",
    "content": "8. 근거 갱신 출시 전에는 StatCounter의 최근 3개월 추세와 실제 기기 검증 결과를 함께 확인합니다. 출시 후에는 당사 서비스의 국가·기기·브라우저·버전별 활성 사용자 비율을 우선합니다. 자동 업데이트를 전제로 사용자 버전을 추정하지 않고 실제 운영 데이터에서 최소 버전 미만 사용자를 확인합니다. 최소 버전 미만 사용자 비율, 오류율과 고객 문의를 확인해 지원 기준을 조정합니다. 점유율 자료에는 출처와 기준 월을 기록하고 분기마다 다시 확인합니다. 최소 버전 변경 시 Tailwind CSS, 사용 Web API와 주요 국가 사용자 비율을 함께 검토합니다.",
    "url": "./../guides/browser-support/index.html#section-8"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "기기 구분별 필수 검증 환경",
    "excerpt": "구분 최소 버전 검증 최신 버전 검증 국가별 추가 검증 PC Safari 15, Chrome·Edge·Firefox 지원 대상 구형 버전 각 브라우저 최신 안정 버전 한국 Whale, 중국 360 Safe·UC·QQ 구형·최신 버전 태블릿 iPadOS Safari 15, Android 주요 브라우저 지원 대상 구형 버전 iPadOS·Android 주요 브라우저 최신 안정 버전 주요 서비스 국…",
    "content": "6. 기기 구분별 필수 검증 환경 구분 최소 버전 검증 최신 버전 검증 국가별 추가 검증 PC Safari 15, Chrome·Edge·Firefox 지원 대상 구형 버전 각 브라우저 최신 안정 버전 한국 Whale, 중국 360 Safe·UC·QQ 구형·최신 버전 태블릿 iPadOS Safari 15, Android 주요 브라우저 지원 대상 구형 버전 iPadOS·Android 주요 브라우저 최신 안정 버전 주요 서비스 국가에서 비중이 높은 실제 태블릿 1종 이상 모바일 iOS Safari 15, Android 주요 브라우저 지원 대상 구형 버전 iOS·Android 주요 브라우저 최신 안정 버전 한국·중국·일본·미국의 주요 실제 단말 반응형 검증은 최소 버전 검증과 별개로 수행합니다. 프로젝트가 확정한 breakpoint의 경계값 전후, 세로·가로 화면, 확대와 글자 크기 변화에서 레이아웃을 확인합니다. 기기 이름만으로 Desktop, Tablet, Mobile 레이아웃을 고정하지 않습니다.",
    "url": "./../guides/browser-support/index.html#section-6"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "기본 지원 원칙",
    "excerpt": "Tailwind CSS v4를 유지하면서 Safari 15와 같은 구형 브라우저도 지원합니다. Tailwind CSS v4의 공식 완전 호환 버전을 프로젝트의 일괄 최소 버전으로 사용하지 않습니다. 프로젝트에서 사용하는 CSS와 Utility의 실제 동작을 지원 판단 기준으로 사용합니다. 지원 대상 구형 브라우저에서 동작하지 않는 최신 CSS 기능은 사용하지 않거나 대체합니다. 같은 Chro…",
    "content": "2. 기본 지원 원칙 Tailwind CSS v4를 유지하면서 Safari 15와 같은 구형 브라우저도 지원합니다. Tailwind CSS v4의 공식 완전 호환 버전을 프로젝트의 일괄 최소 버전으로 사용하지 않습니다. 프로젝트에서 사용하는 CSS와 Utility의 실제 동작을 지원 판단 기준으로 사용합니다. 지원 대상 구형 브라우저에서 동작하지 않는 최신 CSS 기능은 사용하지 않거나 대체합니다. 같은 Chromium 계열도 엔진 반영 시점이 다를 수 있으므로 주요 브라우저를 각각 확인합니다. 최소 버전과 최신 안정 버전에서 레이아웃과 핵심 기능을 확인합니다. Internet Explorer는 지원하지 않습니다. 공통 CSS 하한은 Safari 15에서 지원되는 기능 범위로 정합니다. Android와 다른 Chromium·Firefox 계열은 Safari 버전과 특정 제품 버전을 기계적으로 대응시키지 않고, 이 공통 CSS 범위와 실제 사용하는 Tailwind Utility 및 핵심 기능이 지원 대상 구형 버전에서 동작하는지 확인합니다. 자동 업데이트를 고려한 기준 Chrome, Edge와 Firefox 같은 현대 브라우저는 기본적으로 백그라운드에서 새 버전을 확인하고 자동 업데이트합니다. 모바일 브라우저도 일반적으로 앱 스토어의 자동 업데이트 설정을 따릅니다. Safari는 브라우저만 독립적으로 갱신하기보다 macOS, iOS와 iPadOS의 시스템 업데이트를 통해 함께 갱신됩니다. 자동 업데이트가 모든 사용자의 최신 버전을 보장하지는 않습니다. 따라서 최신 버전 사용을 전제로 지원 범위를 정하지 않고 Safari 15와 같은 최소 지원 환경을 직접 검증합니다. 브라우저를 오랫동안 재시작하지 않은 경우, 저장 공간이나 네트워크가 부족한 경우, 구형 OS가 최신 브라우저를 지원하지 않는 경우와 회사·학교 관리 정책으로 버전이 고정된 경우에는 업데이트가 지연되거나 중단될 수 있습니다. 자동 업데이트는 최소 버전 선택의 현실성 근거로 사용하되, 최소 버전 검증과 운영 사용자 버전 확인을 생략하는 근거로 사용하지 않습니다. 자세한 내용은 Google Chrome 업데이트 안내 , Chrome Enterprise 업데이트 관리 , Microsoft Edge 채널 안내 와 Apple Safari 업데이트 안내 를 참고합니다. Tailwind CSS v4는 유지하되 검증된 v4.1 이상의 버전을 잠금 파일에 고정합니다. 기본적인 Utility를 중심으로 사용하고 Safari 15와 지원 대상 구형 브라우저에서 동작하지 않는 최신 CSS 기능은 사용하지 않거나 대체합니다. 핵심 정보, 입력, 이동과 업무 기능은 최소 지원 환경에서 정상 동작해야 합니다. Tailwind의 공식 완전 호환 범위는 참고 기준으로 사용합니다. 자세한 내용은 Tailwind CSS 공식 호환성 문서 와 Tailwind CSS v4 업그레이드 가이드 에서 확인합니다.",
    "url": "./../guides/browser-support/index.html#section-2"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "문서 목적과 적용 범위",
    "excerpt": "이 문서는 회사 웹사이트의 PC, 태블릿, 모바일 브라우저 최소 지원 기준과 그 근거를 정리합니다. 브라우저 지원은 화면 크기가 아니라 렌더링 엔진과 브라우저 버전을 기준으로 판단합니다. PC, 태블릿, 모바일 구분은 필수 검증 환경을 정하는 데 사용합니다. 결제, 제휴카드, 인증과 외부 앱 연결의 기능별 정책은 이 문서의 범위에 포함하지 않습니다.",
    "content": "1. 문서 목적과 적용 범위 이 문서는 회사 웹사이트의 PC, 태블릿, 모바일 브라우저 최소 지원 기준과 그 근거를 정리합니다. 브라우저 지원은 화면 크기가 아니라 렌더링 엔진과 브라우저 버전을 기준으로 판단합니다. PC, 태블릿, 모바일 구분은 필수 검증 환경을 정하는 데 사용합니다. 결제, 제휴카드, 인증과 외부 앱 연결의 기능별 정책은 이 문서의 범위에 포함하지 않습니다.",
    "url": "./../guides/browser-support/index.html#section-1"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "반응형 화면 너비 기준",
    "excerpt": "반응형 구분은 기기의 물리 해상도나 제품 이름이 아니라 브라우저의 CSS pixel 기준 viewport 너비 로 판단합니다. 고해상도 기기도 Device Pixel Ratio에 따라 CSS viewport가 작게 계산될 수 있으므로 하드웨어 해상도를 breakpoint로 사용하지 않습니다. 구분 Viewport 너비 Tailwind CSS v4 기준 대표 검증 너비 Mobile 320~76…",
    "content": "4. 반응형 화면 너비 기준 반응형 구분은 기기의 물리 해상도나 제품 이름이 아니라 브라우저의 CSS pixel 기준 viewport 너비 로 판단합니다. 고해상도 기기도 Device Pixel Ratio에 따라 CSS viewport가 작게 계산될 수 있으므로 하드웨어 해상도를 breakpoint로 사용하지 않습니다. 구분 Viewport 너비 Tailwind CSS v4 기준 대표 검증 너비 Mobile 320~767px 기본 구간, sm 640px 포함 320, 360, 390, 430px Tablet 768~1023px md 768px 이상 768, 820px PC 1024px 이상 lg 1024px 이상 1024, 1280, 1440, 1920px sm , md , lg 는 특정 기기 이름이 아니라 최소 너비 조건입니다. 1024px 태블릿 가로 화면에는 PC 구간이, 좁게 조절한 PC 브라우저에는 Tablet 또는 Mobile 구간이 적용될 수 있습니다. flowchart LR accTitle: 반응형 웹 화면 구간과 breakpoint 전환 accDescr: Mobile 320에서 767픽셀 구간이 768픽셀 경계에서 Tablet로 전환되고, Tablet 768에서 1023픽셀 구간이 1024픽셀 경계에서 PC로 전환됩니다. M[\"Mobile · 320~767px · 대표 390px\"] -->|\"768px · md\"| T[\"Tablet · 768~1023px · 대표 768px\"] T -->|\"1024px · lg\"| P[\"PC · 1024px 이상 · 대표 1440px\"] CSS viewport 너비에 따른 반응형 화면 구간 전환 다이어그램 설명: 기본 화면은 Mobile 구간에서 시작하며 768px부터 Tablet, 1024px부터 PC 구간의 레이아웃이 적용됩니다. 노드 크기는 실제 viewport 비율을 의미하지 않으며, 화살표의 768px과 1024px이 반드시 함께 검증할 전환 경계입니다. 경계값 검증 Mobile과 Tablet 전환은 767px과 768px을 함께 확인합니다. Tablet과 PC 전환은 1023px과 1024px을 함께 확인합니다. 320px 미만에서도 핵심 콘텐츠가 잘리거나 조작 불가능해지지 않는지 확인합니다. 1920px보다 넓은 화면에서는 콘텐츠 최대 너비, 여백과 긴 행 길이를 확인합니다. 세로·가로 전환, 브라우저 확대와 OS 글자 크기 변경 시 가로 스크롤과 UI 겹침을 확인합니다. 기본 breakpoint는 Tailwind CSS 반응형 디자인 문서 를 따릅니다. 프로젝트에서 breakpoint를 변경하면 디자인 토큰, Figma와 이 문서의 구간을 함께 변경합니다.",
    "url": "./../guides/browser-support/index.html#section-4"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "우선 확정 항목",
    "excerpt": "다음 운영 기준은 프로젝트 담당자가 합의한 뒤 확정합니다. 브라우저 최소 버전 미만 사용자를 허용할 비율 국가별 실제 검증 기기와 브라우저 목록 Whale, 360 Safe, UC와 QQ의 정식 지원 또는 호환 확인 범위 브라우저 업데이트 안내 방식 운영 데이터 기준의 재검토 주기와 승인 담당자 반응형 웹 브라우저 지원 가이드",
    "content": "9. 우선 확정 항목 다음 운영 기준은 프로젝트 담당자가 합의한 뒤 확정합니다. 브라우저 최소 버전 미만 사용자를 허용할 비율 국가별 실제 검증 기기와 브라우저 목록 Whale, 360 Safe, UC와 QQ의 정식 지원 또는 호환 확인 범위 브라우저 업데이트 안내 방식 운영 데이터 기준의 재검토 주기와 승인 담당자 반응형 웹 브라우저 지원 가이드",
    "url": "./../guides/browser-support/index.html#section-9"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "점유율을 근거로 한 브라우저 선정",
    "excerpt": "아래 수치는 StatCounter의 2026년 7월 PC·모바일·태블릿 통합 웹 사용량 기준입니다. 설치 대수나 당사 고객 수가 아니며, 국가별 우선 검증 제품군을 정하는 보조 근거로 사용합니다. 지역 주요 브라우저 점유율 표시 제품군 합계 근거 한국 Chrome 57.99%, Safari 11.76%, Samsung Internet 10.40%, Edge 8.99%, Whale 8.37%,…",
    "content": "5. 점유율을 근거로 한 브라우저 선정 아래 수치는 StatCounter의 2026년 7월 PC·모바일·태블릿 통합 웹 사용량 기준입니다. 설치 대수나 당사 고객 수가 아니며, 국가별 우선 검증 제품군을 정하는 보조 근거로 사용합니다. 지역 주요 브라우저 점유율 표시 제품군 합계 근거 한국 Chrome 57.99%, Safari 11.76%, Samsung Internet 10.40%, Edge 8.99%, Whale 8.37%, Firefox 0.83% 98.34% StatCounter 한국 중국 Chrome 51.59%, Edge 16.35%, Safari 14.44%, 360 Safe 4.88%, UC 4.85%, QQ 3.69% 95.80% StatCounter 중국 일본 Chrome 55.96%, Safari 23.21%, Edge 14.42%, Firefox 2.84%, Brave 1.12%, Samsung Internet 0.70% 98.25% StatCounter 일본 미국 Chrome 51.55%, Safari 29.83%, Edge 7.14%, Firefox 6.78%, Samsung Internet 1.69%, Brave 1.10% 98.09% StatCounter 미국 전 세계 Chrome 68.25%, Safari 16.48%, Edge 5.34%, Firefox 3.34%, Samsung Internet 2.06%, Opera 1.88% 97.35% StatCounter 전 세계 이 점유율은 브라우저 제품군의 비중이며 프로젝트 최소 버전 이상 사용자의 정확한 비율이 아닙니다. 공개된 일부 상위 버전만 합산해 최소 버전 지원률로 표현하지 않습니다. 한국은 Safari, Samsung Internet과 Whale을 함께 확인합니다. 일본과 미국은 Safari 비중이 높으므로 Apple 기기의 Safari 검증을 Chromium 검증으로 대체하지 않습니다. 중국은 360 Safe, UC와 QQ의 최신 안정 버전을 별도로 확인합니다.",
    "url": "./../guides/browser-support/index.html#section-5"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "지원과 호환 확인의 구분",
    "excerpt": "정식 지원: 최소 버전 이상이며 출시 전 필수 검증 환경에 포함하고 문제 발생 시 수정합니다. 호환 확인: Whale, 360 Safe, UC, QQ 등의 최신 안정 버전에서 주요 흐름을 확인하되 모든 제품 버전을 보장하지 않습니다. 미지원: 최소 버전보다 낮은 브라우저와 Internet Explorer는 정상 동작을 보장하지 않고 업데이트를 안내합니다.",
    "content": "7. 지원과 호환 확인의 구분 정식 지원: 최소 버전 이상이며 출시 전 필수 검증 환경에 포함하고 문제 발생 시 수정합니다. 호환 확인: Whale, 360 Safe, UC, QQ 등의 최신 안정 버전에서 주요 흐름을 확인하되 모든 제품 버전을 보장하지 않습니다. 미지원: 최소 버전보다 낮은 브라우저와 Internet Explorer는 정상 동작을 보장하지 않고 업데이트를 안내합니다.",
    "url": "./../guides/browser-support/index.html#section-7"
  },
  {
    "document": "반응형 웹 브라우저 지원 가이드",
    "section": "최소 지원 버전",
    "excerpt": "PC 운영체제 브라우저 최소 버전 적용 기준 Windows Chrome 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Windows Edge 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Windows Firefox 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 macOS Safa…",
    "content": "3. 최소 지원 버전 PC 운영체제 브라우저 최소 버전 적용 기준 Windows Chrome 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Windows Edge 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Windows Firefox 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 macOS Safari 15 이상 프로젝트의 WebKit 최소 지원 기준 macOS Chrome 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 macOS Edge 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 macOS Firefox 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Whale, 360 Safe, UC와 QQ 등은 특정 Chromium 엔진 버전만으로 차단하지 않습니다. 제품 버전과 엔진 버전의 대응이 일정하지 않으므로 국가별 주요 구형 버전과 최신 안정 버전에서 핵심 흐름을 각각 확인합니다. 태블릿 운영체제 브라우저 최소 버전 적용 기준 iPadOS Safari 15 이상 프로젝트의 WebKit 최소 지원 기준 Android Chrome 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Android Samsung Internet 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Android Edge 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Android Firefox 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 모바일 운영체제 브라우저 최소 버전 적용 기준 iOS Safari 15 이상 프로젝트의 WebKit 최소 지원 기준 Android Chrome 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Android Samsung Internet 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Android Edge 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 Android Firefox 지원 대상 구형 버전 Safari 15 공통 CSS 기준과 프로젝트 사용 기능 검증 iOS와 iPadOS의 Chrome, Edge, Firefox 등은 브라우저 이름과 별개로 해당 OS의 WebKit 영향을 받습니다. iOS·iPadOS 15와 최신 버전에서 각 주요 브라우저를 확인합니다. 브라우저 제품 버전과 엔진 버전은 Samsung Developer User-Agent 안내 등 각 제품의 공식 자료에서 확인합니다. 버전 정보만으로 지원 여부를 확정하지 않고 실제 사용 기능을 함께 검증합니다.",
    "url": "./../guides/browser-support/index.html#section-3"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "개발자와 AI의 역할 분담",
    "excerpt": "역할은 누가 코드를 더 많이 작성하는지가 아니라 누가 사실을 확인하고 최종 결정을 책임지는지를 기준으로 나눕니다. 구분 주요 책임 완료 조건 AI에 위임 기존 가이드와 소스 조사, 반복적인 TSX·Tailwind 작성, 타입과 테스트 초안, 오류 분석, 접근성 및 중복 검토 근거가 된 기존 소스와 확인하지 못한 내용을 구분해 제시 함께 결정 상태 소유자, Server·Client 경계, 컴포…",
    "content": "3. 개발자와 AI의 역할 분담 역할은 누가 코드를 더 많이 작성하는지가 아니라 누가 사실을 확인하고 최종 결정을 책임지는지를 기준으로 나눕니다. 구분 주요 책임 완료 조건 AI에 위임 기존 가이드와 소스 조사, 반복적인 TSX·Tailwind 작성, 타입과 테스트 초안, 오류 분석, 접근성 및 중복 검토 근거가 된 기존 소스와 확인하지 못한 내용을 구분해 제시 함께 결정 상태 소유자, Server·Client 경계, 컴포넌트 분리, API 연결, 공통화, 새 의존성, 오류 UX 선택지와 영향 범위를 비교한 뒤 개발자가 결정 개발자가 책임 사용자 요구, UI 흐름, Backend·App 계약, 미확정 사항 승인, 실제 WebView 동작과 병합 여부 주요 동작과 결정 이유를 개발자가 설명하고 검증 AI에 위임할 수 있는 작업 관련 가이드, 기존 컴포넌트와 설치 package 조사 반복적인 JSX, Tailwind utility와 기본 접근성 속성 작성 컴포넌트 props, API 응답과 폼 입력 타입의 초안 작성 로딩, 오류, 빈 값과 완료 상태 구현 TypeScript, Lint, Test와 Build 오류의 원인 분석 핵심 사용자 동작을 기준으로 한 테스트 초안 작성 변경 코드의 중복, 과도한 상태와 접근성 누락 검토 함께 판단할 작업 어떤 데이터가 상태이고 어디에서 소유할지 결정 Server Component와 Client Component의 경계 결정 API 응답 타입과 화면 전용 타입의 분리 여부 결정 TanStack Query, React Hook Form과 Zustand의 실제 필요 여부 결정 반복 코드를 공통 컴포넌트 또는 package로 이동할지 결정 새 package를 도입할지 기존 코드로 해결할지 결정 개발자가 직접 확인할 작업 화면과 사용자 흐름이 실제 요구와 일치하는지 확인 긴 문구, 빈 데이터, 오류와 중복 입력에서 UI가 자연스러운지 확인 Backend API와 App Bridge 계약이 담당자 합의 내용과 일치하는지 확인 모바일 WebView와 지원 환경에서 주요 동작을 직접 확인 AI가 추측한 내용을 제품 기준으로 승인하지 않았는지 확인",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-3"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "기능 단위 AI 협업 흐름",
    "excerpt": "AI와의 협업은 큰 기능 전체를 한 번에 생성하는 방식보다 조사, 결정, 작은 구현, 검증과 복기의 순환으로 진행합니다. 4.1 사용자 행동 정의 기능을 구현하기 전에 사용자가 무엇을 하고 어떤 결과를 보아야 하는지 한두 문장으로 작성합니다. Figma 화면만 있는 경우에도 클릭, 입력, 제출, 취소와 이동 동작을 별도로 확인합니다. 정상 상태뿐 아니라 필요한 로딩, 빈 값, 오류, 완료와…",
    "content": "4. 기능 단위 AI 협업 흐름 AI와의 협업은 큰 기능 전체를 한 번에 생성하는 방식보다 조사, 결정, 작은 구현, 검증과 복기의 순환으로 진행합니다. 4.1 사용자 행동 정의 기능을 구현하기 전에 사용자가 무엇을 하고 어떤 결과를 보아야 하는지 한두 문장으로 작성합니다. Figma 화면만 있는 경우에도 클릭, 입력, 제출, 취소와 이동 동작을 별도로 확인합니다. 정상 상태뿐 아니라 필요한 로딩, 빈 값, 오류, 완료와 중복 실행 상태를 함께 나열합니다. Figma와 요구사항에 없는 동작을 AI가 임의로 확대하지 않습니다. 4.2 기존 기준 조사 AI가 현재 작업과 관련된 가이드, 기존 컴포넌트, 토큰, 유틸리티와 설치 package를 먼저 조사하도록 합니다. 조사 결과에는 다음 내용을 포함합니다. 재사용할 수 있는 기존 코드 변경할 파일과 각 파일의 책임 필요한 상태와 타입 확인된 프로젝트 규칙 구현 전에 담당자에게 확인할 미확정 사항 실제 애플리케이션 소스가 있으면 문서 예시보다 설치된 package와 기존 구현을 먼저 확인합니다. 4.3 구현 방향 결정 코드를 작성하기 전에 AI가 상태의 소유자, 컴포넌트 책임, 외부 계약과 검증 방법을 제안하도록 합니다. 여러 구현 방식이 가능한 경우 선택지별 장점, 비용과 변경 영향을 비교합니다. 개발자가 이해하지 못한 구조는 선택하지 않고 더 단순한 구현 또는 추가 설명을 요청합니다. 4.4 작은 단위 구현 기능은 다음처럼 독립적으로 확인할 수 있는 작은 단계로 나눕니다. 정적 UI와 의미 있는 HTML 사용자 입력과 가까운 UI 상태 타입과 입력 검증 API 또는 Bridge 연결 로딩, 오류, 빈 값과 완료 상태 위험도에 맞는 테스트 각 단계가 동작하는 것을 확인한 뒤 다음 단계로 이동합니다. 한 번에 많은 파일을 생성하면 AI가 변경 이유와 기존 구조를 놓치기 쉬우므로 변경 범위를 다시 줄입니다. 4.5 설명과 검증 각 구현 단계가 끝나면 AI는 다음 내용을 짧게 설명합니다. 가장 중요한 설계 결정과 이유 개발자가 알아야 할 TypeScript 또는 React 개념 가정하거나 확인하지 못한 부분 실패할 수 있는 경로와 확인 방법 설명은 한 단계에서 새로운 핵심 개념 세 개 이하로 제한합니다. 모든 코드 줄을 설명하기보다 이후에 같은 판단을 다시 할 수 있도록 상태, 타입과 경계에 집중합니다. 구현 후에는 변경 범위에 맞춰 Typecheck, Lint와 Test를 확인합니다. 병합 또는 통합 영향이 있으면 Production Build도 확인하고, 자동 검사와 별도로 실제 화면과 WebView 동작을 확인합니다. 4.6 기능 복기 기능이 끝나면 AI가 다음 내용을 기록하도록 합니다. 사용한 TypeScript 개념 한 가지 사용한 React 또는 Next.js 개념 한 가지 발생한 오류와 원인 다음 기능에서 개발자가 먼저 판단할 항목 다시 확인할 실제 프로젝트 파일 별도 학습 자료를 넓게 수집하기보다 현재 기능에서 반복해서 나타난 개념을 우선 복기합니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-4"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "기능 완료와 성장 점검",
    "excerpt": "기능 완료 확인 사용자 행동과 UI 결과가 요구사항과 일치하는가? 정상, 로딩, 빈 값, 오류, 취소와 중복 실행 상태를 필요한 범위에서 처리했는가? 상태의 소유자와 사용한 도구의 이유를 설명할 수 있는가? API와 Bridge 계약에서 확인된 내용과 미확정 내용을 구분했는가? AI가 추가한 package, 공통화와 추상화가 실제로 필요한가? TypeScript 오류를 any , 타입 단언…",
    "content": "9. 기능 완료와 성장 점검 기능 완료 확인 사용자 행동과 UI 결과가 요구사항과 일치하는가? 정상, 로딩, 빈 값, 오류, 취소와 중복 실행 상태를 필요한 범위에서 처리했는가? 상태의 소유자와 사용한 도구의 이유를 설명할 수 있는가? API와 Bridge 계약에서 확인된 내용과 미확정 내용을 구분했는가? AI가 추가한 package, 공통화와 추상화가 실제로 필요한가? TypeScript 오류를 any , 타입 단언 또는 non-null assertion으로 숨기지 않았는가? 의미 있는 HTML, Label, 키보드와 Focus 동작을 확인했는가? 변경 위험에 맞는 Typecheck, Lint, Test와 실제 화면 검증을 수행했는가? 성장 확인 기능 또는 주요 변경이 끝난 뒤 다음 질문에 답합니다. AI가 구현하기 전에 필요한 상태와 실패 경로를 예상했는가? AI의 선택지 중 하나를 이유와 함께 선택했는가? 설명 없이 받아들인 핵심 코드가 남아 있는가? 발생한 오류의 원인을 이전보다 빠르게 찾았는가? Backend 또는 App 담당자에게 더 구체적인 계약 질문을 할 수 있었는가? 다음 기능에서 먼저 판단할 수 있는 항목이 하나 이상 생겼는가? 모든 질문에 답하지 못해도 실패로 간주하지 않습니다. 반복해서 답하지 못하는 항목을 다음 기능의 학습 주제로 선택합니다. 프로젝트 투입 완료 기준 이 과정을 끝냈다는 것은 용어를 읽어본 상태가 아니라, 실제 기능을 다음 흐름으로 완성할 수 있는 상태를 의미합니다. 요구와 디자인에서 사용자 행동, 상태와 미확정 항목을 추출합니다. 기존 가이드와 소스에서 재사용할 코드와 변경 경계를 찾습니다. AI가 제안한 상태 소유자, 타입, Client 경계와 추상화의 필요성을 검토합니다. API 미확정 상태에서는 확인 질문과 TBD 만 정리하고 승인된 계약이 전달된 뒤 API 함수와 Parser를 구현합니다. 세션·회원·서버·폼·UI 상태의 수명과 사용자 전환 시 정리 범위를 추적합니다. Typecheck, Lint, Test, Build와 실제 화면·Network·WebView 검증의 보장 범위를 구분합니다. AI가 만든 Diff에서 요청 범위 초과, 근거 없는 가정, 보안상 위험과 회귀 가능성을 발견합니다. 확인된 사실, 미확정 계약과 수행하지 못한 검증을 구분해 병합 여부를 결정합니다. 위 항목을 AI의 도움을 받아 수행해도 됩니다. 다만 어떤 근거로 구현을 선택했고 무엇을 아직 신뢰할 수 없는지는 개발자가 설명할 수 있어야 합니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-9"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "문서 목적과 적용 범위",
    "excerpt": "이 문서는 한 명의 Front-end 개발자가 여러 Backend·App 개발자와 협업하는 환경에서 AI에게 구현을 적극적으로 맡기면서도 설계, 검토와 문제 해결 역량을 점진적으로 키우기 위한 기준을 제공합니다. 모든 코드를 직접 작성하는 것을 성장 기준으로 삼지 않습니다. 개발자는 제품 요구, UI 흐름, 상태와 계약을 판단하고 AI가 만든 결과를 검증할 수 있어야 합니다. 구체적인 기술과…",
    "content": "1. 문서 목적과 적용 범위 이 문서는 한 명의 Front-end 개발자가 여러 Backend·App 개발자와 협업하는 환경에서 AI에게 구현을 적극적으로 맡기면서도 설계, 검토와 문제 해결 역량을 점진적으로 키우기 위한 기준을 제공합니다. 모든 코드를 직접 작성하는 것을 성장 기준으로 삼지 않습니다. 개발자는 제품 요구, UI 흐름, 상태와 계약을 판단하고 AI가 만든 결과를 검증할 수 있어야 합니다. 구체적인 기술과 구현 기준은 Front-End 개발 가이드 를 따릅니다. TypeScript 작성 기준과 테스트 범위는 각각 TypeScript 가이드 와 테스트 가이드 를 함께 확인합니다. Front-end의 외부 입력 처리, 개인정보 노출 방지, Client 저장소, Bridge Adapter와 의존성 보안 및 인증·권한·CSP 연동 시 책임 구분은 Front-End 보안과 개인정보 가이드 를 따릅니다. Backend·Native App·배포·보안 정책을 Front-end가 대신 구현한다는 의미가 아닙니다. API 요청 계층과 세션·회원 경계는 기획 흐름과 Backend API 계약이 확정된 뒤 각각 API 요청 계층 , 세션과 회원 경계 가이드를 기준으로 학습합니다. 계약 확정 전에는 Backend 확인 질문과 TBD 만 정리하며, API Mock 은 승인된 계약 이후 실제 환경에서 필요한 상태를 반복 재현하기 어려울 때 Front-end 테스트 범위와 관리 책임을 정해 선택적으로 검토합니다. AI는 구현 속도를 높이는 협업 도구입니다. AI를 많이 사용하는 것 자체는 문제가 아니지만, 확인되지 않은 제품 계약과 기술 결정을 AI의 추측으로 확정하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-1"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "성장의 기준",
    "excerpt": "숙련도는 직접 입력한 코드의 양이 아니라 다음 판단을 스스로 내리고 설명할 수 있는지로 확인합니다. 사용자 요구를 화면과 동작으로 구체화할 수 있는가? 데이터가 React 지역 상태, URL, 폼 상태, 서버 상태 또는 공유 클라이언트 상태 중 어디에 있어야 하는지 판단할 수 있는가? 컴포넌트와 파일을 나눈 이유를 책임과 변경 범위로 설명할 수 있는가? API와 WebView Bridge의…",
    "content": "2. 성장의 기준 숙련도는 직접 입력한 코드의 양이 아니라 다음 판단을 스스로 내리고 설명할 수 있는지로 확인합니다. 사용자 요구를 화면과 동작으로 구체화할 수 있는가? 데이터가 React 지역 상태, URL, 폼 상태, 서버 상태 또는 공유 클라이언트 상태 중 어디에 있어야 하는지 판단할 수 있는가? 컴포넌트와 파일을 나눈 이유를 책임과 변경 범위로 설명할 수 있는가? API와 WebView Bridge의 입력, 출력, 오류와 미확정 항목을 구분할 수 있는가? TypeScript 오류를 숨기지 않고 발생 원인과 안전한 처리 방법을 확인할 수 있는가? AI가 만든 코드의 과도한 상태, 추상화, 의존성과 보안 문제를 발견할 수 있는가? 변경 위험에 맞는 Typecheck, Lint, Test와 실제 화면 검증 범위를 선택할 수 있는가? 처음에는 AI의 설명과 제안에 의존할 수 있습니다. 프로젝트가 진행될수록 개발자가 요구와 제약을 먼저 정의하고 AI의 구현을 검토하는 비중을 높입니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-2"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "순차 교육 과정",
    "excerpt": "JavaScript와 TypeScript 기초부터 React, Next.js, API, WebView, 테스트, 기능 통합과 보안 리뷰까지 번호 순서대로 학습할 수 있는 교육 문서를 제공합니다. AI 협업 Front-End 교육 과정 시작하기 AI 협업 기반 Front-End 성장 가이드",
    "content": "11. 순차 교육 과정 JavaScript와 TypeScript 기초부터 React, Next.js, API, WebView, 테스트, 기능 통합과 보안 리뷰까지 번호 순서대로 학습할 수 있는 교육 문서를 제공합니다. AI 협업 Front-End 교육 과정 시작하기 AI 협업 기반 Front-End 성장 가이드",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-11"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "점진적 성장 단계",
    "excerpt": "기간이나 작성한 코드의 양으로 단계를 나누지 않습니다. AI와 협업하면서 개발자가 맡을 수 있는 판단의 범위로 현재 단계를 확인합니다. 단계 개발자의 역할 AI의 역할 다음 단계 기준 1. 이해하며 따라가기 화면 확인, 질문, 미확정 요구 구분 조사, 구현안과 코드 작성, 개념 설명 상태와 타입이 필요한 이유를 설명할 수 있음 2. 선택하기 AI가 제시한 선택지 비교, 사용자 동작과 오류 상…",
    "content": "5. 점진적 성장 단계 기간이나 작성한 코드의 양으로 단계를 나누지 않습니다. AI와 협업하면서 개발자가 맡을 수 있는 판단의 범위로 현재 단계를 확인합니다. 단계 개발자의 역할 AI의 역할 다음 단계 기준 1. 이해하며 따라가기 화면 확인, 질문, 미확정 요구 구분 조사, 구현안과 코드 작성, 개념 설명 상태와 타입이 필요한 이유를 설명할 수 있음 2. 선택하기 AI가 제시한 선택지 비교, 사용자 동작과 오류 상태 결정 선택지와 영향 분석, 작은 단위 구현 지역·서버·폼·공유 상태를 구분할 수 있음 3. 먼저 정의하기 요구, 상태, 계약과 완료 조건을 먼저 정리 설계 검토, 구현, 테스트와 오류 분석 구현 전에 변경 파일과 주요 위험을 예상할 수 있음 4. 검토하고 책임지기 구조와 계약 결정, AI 코드 리뷰, 병합 판단 반복 구현, 대안 탐색, 회귀 검토 AI의 잘못된 가정이나 과도한 구조를 수정할 수 있음 단계가 올라가도 AI 사용량을 줄일 필요는 없습니다. 개발자가 더 많은 코드를 직접 작성하는 대신 더 정확한 맥락과 제약을 제공하고, AI의 결과를 더 깊게 검토하도록 역할을 바꿉니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-5"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "프로젝트에서 우선 학습할 영역",
    "excerpt": "학습 순서는 실제 기능에서 필요한 개념을 우선합니다. 고급 문법이나 전체 Framework 기능을 미리 학습하지 않습니다. 6.1 JavaScript와 TypeScript 다음 항목을 실제 props, API 응답, 폼과 오류 처리에 연결해 익힙니다. 객체, 배열, 함수, module과 async · await 타입 추론, 함수 입력과 출력, 객체 타입 선택적 속성, null 과 undefi…",
    "content": "6. 프로젝트에서 우선 학습할 영역 학습 순서는 실제 기능에서 필요한 개념을 우선합니다. 고급 문법이나 전체 Framework 기능을 미리 학습하지 않습니다. 6.1 JavaScript와 TypeScript 다음 항목을 실제 props, API 응답, 폼과 오류 처리에 연결해 익힙니다. 객체, 배열, 함수, module과 async · await 타입 추론, 함수 입력과 출력, 객체 타입 선택적 속성, null 과 undefined Union, Literal Type과 Narrowing 외부 입력을 unknown 으로 받고 확인하는 Runtime Guard 비동기 실행 순서, Closure와 오래된 값이 만드는 오류 요청 취소, Timer·구독·Event Listener의 수명과 정리 판별 가능한 Union, 누락 없는 분기와 satisfies 얕은 복사, 참조 공유와 React 변경 감지의 관계 복잡한 Generic, Conditional Type과 타입 수준 추상화는 실제 필요가 확인된 뒤 학습합니다. 타입 오류를 any , 과도한 as 또는 non-null assertion으로 없애는 것을 해결로 간주하지 않습니다. 6.2 React 상태와 데이터 흐름 UI를 상태의 조합으로 설명하는 연습을 우선합니다. props와 state의 차이 계산할 수 있는 값을 중복 state로 저장하지 않는 방법 상태를 사용하는 가장 가까운 공통 소유자 사용자 Event와 외부 시스템 동기화를 위한 Effect의 차이 상태의 보존과 초기화 조건 key 와 컴포넌트 위치가 상태 보존에 미치는 영향 Effect 의존성, 오래된 Closure, Cleanup과 요청 경쟁 상태 제어·비제어 입력과 Props를 State로 복사할 때 생기는 동기화 문제 Context와 전역 Store가 실제로 필요한 공유 범위 useEffect 로 다른 state를 맞추는 코드가 생기면 렌더링 중 계산하거나 사용자 Event에서 처리할 수 있는지 먼저 검토합니다. 6.3 Next.js와 외부 경계 첫 기능에서는 Route, Layout과 Server·Client Component의 기본 차이를 익힙니다. 데이터 연결 단계에서는 API 요청, 오류 경계, 캐시와 인증 책임을 기능 요구에 맞춰 추가합니다. WebView 화면은 Android·iOS 전역 객체를 직접 사용하지 않고 타입이 정의된 Bridge adapter를 통해 Native 기능을 요청합니다. Bridge가 없거나 지원하지 않는 환경도 실패 상태로 처리합니다. Server·Client Component 사이에는 직렬화 가능한 값만 전달하고 서버 전용 비밀값과 모듈이 Client Bundle에 포함되지 않는지 확인합니다. Hydration 첫 결과, URL 상태, Route Loading·Error와 컴포넌트 Query 상태의 책임도 구분합니다. 6.4 Tailwind CSS와 접근성 Tailwind utility를 사용할 때 해당 CSS의 Layout, 크기, Overflow와 반응형 동작을 함께 확인합니다. 원시 색상값보다 프로젝트의 의미 기반 토큰과 기존 shadcn/ui 컴포넌트를 우선합니다. AI가 만든 화면은 의미 있는 HTML, Label, 키보드, Focus, 접근 가능한 이름과 필요한 대체 텍스트를 별도로 검토합니다. 시각적으로 같다는 이유만으로 구현 완료로 판단하지 않습니다. 한 장의 디자인 좌표만 맞추지 않고 긴 문구, 빈 값, 확대, 모바일 너비, Safe Area, Overflow와 터치 영역을 확인합니다. 입력 오류와 비동기 상태는 색상뿐 아니라 문구와 접근성 관계로 전달하고 Dialog·Drawer의 Focus 이동과 복귀를 실제 키보드로 검증합니다. 6.5 테스트와 디버깅 모든 컴포넌트를 형식적으로 테스트하지 않습니다. 폼 검증, 조건 분기, API 성공·실패, 중복 제출과 핵심 사용자 흐름처럼 오류 영향이 큰 동작을 먼저 테스트합니다. AI에게 오류를 바로 수정하도록 요청하기 전에 원인, 영향을 받는 범위와 가능한 해결 방법을 설명하도록 합니다. 수정 후에는 같은 문제가 다시 발생하지 않도록 필요한 테스트 또는 검수 항목을 남깁니다. Parser는 승인된 계약의 입력과 출력을 직접 검증하고, 컴포넌트는 사용자 행동과 보이는 결과를 검증합니다. 계약 확정 후 사용할 수 있는 Backend 환경에서 필요한 상태를 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 범위·관리 책임을 정한 Mock 도구를 테스트에 사용할 수 있습니다. 자동 Test가 실제 API, Layout, Focus, WebView와 배포 구성을 보장한다고 가정하지 않습니다. 6.6 API 미확정 상태에서의 진행 기준 기획 흐름과 Backend API 계약이 확정되지 않았다면 요청 함수, Runtime Parser, Fixture와 Mock Handler를 구현하지 않습니다. Swagger 또는 OpenAPI 제공을 미리 가정하지 않고, 현재 단계에서는 다음 Backend 확인 질문과 화면 상태 목록만 정리합니다. 사용자 행동과 필요한 화면 상태가 무엇인지 확인합니다. Backend가 제공할 기능, 권한과 데이터 소유 경계를 질문합니다. endpoint, method, status, 요청·응답 필드, 인증과 오류 계약을 TBD 로 남깁니다. 계약이 승인된 뒤 Path·Method·Status에 맞춰 API 함수와 Parser를 처음 작성합니다. 실제 환경에서 재현하기 어려운 테스트 상태가 확인되면 Front-end 책임자 또는 프로젝트 담당자가 Front-end 테스트 범위와 관리 책임을 정해 Mock 도구를 검토합니다. API 동작과 기준 데이터는 승인된 계약이 전달되기 전까지 TBD 로 둡니다. Backend가 없다는 이유만으로 Front-end가 임시 API 계약과 Mock 서버를 먼저 만들지 않습니다. 6.7 Front-End 보안과 개인정보 보안은 별도 담당자가 마지막에 확인하는 부가 작업이 아니라 기능의 입력, 출력, 저장과 전달 경계를 설계하는 기준입니다. API, URL, Storage, 외부 SDK와 Bridge 응답을 신뢰하지 않습니다. React의 기본 Escape를 유지하고 HTML·URL·Script 실행 경계를 검토합니다. UI 제한과 Backend의 인증·권한 최종 검증을 구분합니다. 자격 증명과 개인정보가 Client Bundle, URL, 저장소, Bridge, 로그와 분석 도구에 남지 않게 합니다. Cookie 인증의 CSRF·CORS·SameSite와 CSP 실제 값은 Backend·배포 계약으로 확인합니다. Client 파일 검증과 Native 검증이 Backend 검증을 대신하지 않는다는 점을 설명할 수 있어야 합니다. 새 package의 필요성, Lock File, Audit 결과와 업데이트 책임을 확인합니다. 기능 통합이 끝나면 13단계 Front-End 보안과 개인정보 에서 동일 기능의 데이터 흐름과 미확정 보안 계약을 검토합니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-6"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "피해야 할 AI 협업 방식",
    "excerpt": "기능 전체를 한 번에 생성하고 실제 동작과 변경 파일을 확인하지 않는 방식 AI가 제안했다는 이유만으로 새 상태 관리 도구, package 또는 공통 계층을 추가하는 방식 TypeScript 오류를 any , as , ! 또는 검사 비활성화로만 제거하는 방식 API 문서, 실제 응답과 담당자 합의가 다른데 AI의 추측으로 계약을 확정하는 방식 UI가 Figma와 비슷하다는 이유로 접근성, 오…",
    "content": "10. 피해야 할 AI 협업 방식 기능 전체를 한 번에 생성하고 실제 동작과 변경 파일을 확인하지 않는 방식 AI가 제안했다는 이유만으로 새 상태 관리 도구, package 또는 공통 계층을 추가하는 방식 TypeScript 오류를 any , as , ! 또는 검사 비활성화로만 제거하는 방식 API 문서, 실제 응답과 담당자 합의가 다른데 AI의 추측으로 계약을 확정하는 방식 UI가 Figma와 비슷하다는 이유로 접근성, 오류 상태와 반응형 동작을 생략하는 방식 생성된 테스트의 의미를 확인하지 않고 테스트 통과만 완료 기준으로 삼는 방식 AI 사용량을 줄이거나 모든 코드를 직접 입력하는 것을 성장 목표로 삼는 방식 AI 협업의 목표는 개발자가 반복 코드를 더 많이 작성하는 것이 아닙니다. 프로젝트가 진행될수록 더 정확한 요구와 제약을 제공하고, AI의 가정과 구현을 검토하며, 제품과 기술 결정에 책임질 수 있는 범위를 넓히는 것을 목표로 합니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-10"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "AI 요청과 검토 기준",
    "excerpt": "7.1 기능 시작 요청 이 기능을 프로젝트 가이드와 기존 소스를 기준으로 검토해줘. 바로 코드를 작성하지 말고 먼저 다음을 정리해줘. 1. 재사용할 기존 컴포넌트와 코드 2. 사용자 행동과 필요한 화면 상태 3. 지역 상태, 서버 상태, 폼 상태와 공유 상태의 구분 4. 확인이 필요한 API 또는 App Bridge 계약 5. 작은 단위로 나눈 구현 계획 6. 내가 이해해야 할 TypeScr…",
    "content": "7. AI 요청과 검토 기준 7.1 기능 시작 요청 이 기능을 프로젝트 가이드와 기존 소스를 기준으로 검토해줘. 바로 코드를 작성하지 말고 먼저 다음을 정리해줘. 1. 재사용할 기존 컴포넌트와 코드 2. 사용자 행동과 필요한 화면 상태 3. 지역 상태, 서버 상태, 폼 상태와 공유 상태의 구분 4. 확인이 필요한 API 또는 App Bridge 계약 5. 작은 단위로 나눈 구현 계획 6. 내가 이해해야 할 TypeScript와 React 개념 확인되지 않은 요구는 추측해서 구현하지 말고 별도로 표시해줘. 7.2 단계별 구현 요청 합의한 계획에서 이번 단계만 구현해줘. 기존 컴포넌트와 토큰을 우선 사용하고 요청하지 않은 기능, 상태, 공통화와 package는 추가하지 마. 구현 후에는 다음을 알려줘. - 변경한 동작과 파일 - 가장 중요한 설계 결정 - 내가 알아야 할 개념 세 개 이하 - 확인하지 못한 사항 - 실행한 검사와 결과 7.3 완료 전 리뷰 요청 이 기능을 병합 전 기준으로 검토해줘. - 불필요한 any, as와 non-null assertion - 과도한 useEffect와 중복 상태 - 서버 데이터를 클라이언트 store에 복제한 부분 - 실제 반복이 없는 공통화와 wrapper - 접근성 누락 - 로딩, 오류, 빈 값, 취소와 중복 제출 누락 - 확인되지 않은 API·Bridge 계약의 추측 - 위험도에 비해 부족하거나 불필요한 테스트 - 프로젝트 가이드와 다른 부분 문제가 없다고 단정하기 전에 Typecheck, Lint와 Test 결과를 확인하고, 통합 영향이 있으면 Build 확인이 필요한지도 판단해줘. 7.4 AI 작업 범위 통제 AI의 조사와 구현 범위는 작업 정확도의 일부입니다. 관련 파일을 찾는 데 필요한 최소 탐색은 허용하되, 요청하지 않은 전체 프로젝트 리뷰, Backend 구현, 보안 체계 확정과 일정 산정으로 확대하지 않습니다. 시작 전에 대상 폴더, 변경 가능한 파일과 읽기만 가능한 기준 문서를 지정합니다. AI가 추가 파일이 필요하다고 판단하면 수정하기 전에 이유와 후보를 보고하게 합니다. 한 단계에서 변경할 동작과 파일 수를 작게 제한하고 완료 후 Diff를 확인합니다. 근거가 된 파일과 명령 결과, 확인하지 못한 내용과 추측을 분리하게 합니다. 계획이 요청 범위를 벗어나면 구현을 중단하고 원래 사용자 목표로 되돌립니다. 대상 기능과 직접 관련된 파일만 조사해줘. 전체 프로젝트 리뷰, Backend 구현, 보안 정책 확정과 일정 산정으로 범위를 확대하지 마. 수정이 필요한 파일을 먼저 제시하고 승인된 단계만 변경해줘. 추가 범위가 필요하면 작업하지 말고 이유와 파일 후보만 알려줘.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-7"
  },
  {
    "document": "AI 협업 기반 Front-End 성장 가이드",
    "section": "Backend·App 개발자와의 계약 확인",
    "excerpt": "AI는 계약 초안과 질문을 정리할 수 있지만 실제 제품 계약을 확정하지 않습니다. Backend API 기능 구현 전에 다음 내용을 담당자와 확인합니다. 요청과 응답 필드, 필수 여부와 nullable 여부 날짜, 시간, 통화와 금액 형식 인증과 권한 처리 주체 업무 오류 코드와 사용자 표시 가능 메시지 페이지네이션, 정렬과 중복 요청 처리 계약 변경과 하위 호환 방식 API 문서와 실제 응…",
    "content": "8. Backend·App 개발자와의 계약 확인 AI는 계약 초안과 질문을 정리할 수 있지만 실제 제품 계약을 확정하지 않습니다. Backend API 기능 구현 전에 다음 내용을 담당자와 확인합니다. 요청과 응답 필드, 필수 여부와 nullable 여부 날짜, 시간, 통화와 금액 형식 인증과 권한 처리 주체 업무 오류 코드와 사용자 표시 가능 메시지 페이지네이션, 정렬과 중복 요청 처리 계약 변경과 하위 호환 방식 API 문서와 실제 응답이 다르면 AI가 임의로 한쪽에 맞추지 않고 Backend 담당자에게 차이를 확인합니다. App Bridge Native 기능을 연결할 때 다음 내용을 App 담당자와 확인합니다. Method와 지원 기능 입력, 성공 결과와 오류 형식 사용자 취소, 권한 거부와 미지원 상태 Bridge와 App의 최소 지원 Version Timeout, 중복 요청과 응답 식별 방식 민감정보와 로그에 포함할 수 없는 값 Bridge 계약이 확정되기 전에는 전역 객체명이나 메시지 필드를 제품 기준으로 고정하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/index.html#section-8"
  },
  {
    "document": "AI 협업 Front-End 교육 과정",
    "section": "공통 완료 기준",
    "excerpt": "핵심 개념을 자신의 말로 설명할 수 있습니다. AI가 만든 코드에서 해당 단계의 위험을 찾을 수 있습니다. Lounge 프로젝트의 작은 기능에 적용할 수 있습니다. 확인된 기준과 미확정 계약을 구분할 수 있습니다. 실행한 검사와 직접 확인한 항목을 구분해 설명할 수 있습니다. AI의 조사 범위, 변경 파일과 추측을 통제하고 Diff를 근거로 승인할 수 있습니다. API가 확정되지 않았을 때…",
    "content": "6. 공통 완료 기준 핵심 개념을 자신의 말로 설명할 수 있습니다. AI가 만든 코드에서 해당 단계의 위험을 찾을 수 있습니다. Lounge 프로젝트의 작은 기능에 적용할 수 있습니다. 확인된 기준과 미확정 계약을 구분할 수 있습니다. 실행한 검사와 직접 확인한 항목을 구분해 설명할 수 있습니다. AI의 조사 범위, 변경 파일과 추측을 통제하고 Diff를 근거로 승인할 수 있습니다. API가 확정되지 않았을 때 구현을 선행하지 않고 Backend 확인 질문과 TBD 를 정리할 수 있습니다. API 확정 뒤 화면을 다시 만들지 않고 계약 경계와 테스트를 함께 교체할 수 있습니다. 세션·회원·서버·폼·UI 상태의 소유자와 사용자 전환 시 정리 범위를 설명할 수 있습니다. 외부 입력, 인증·권한, Client 저장소, 개인정보와 Bridge의 보안 경계를 검토할 수 있습니다. 1단계 JavaScript 기초 시작하기 AI 협업 Front-End 교육 과정",
    "url": "./../guides/learning/ai-frontend-growth/curriculum.html#section-6"
  },
  {
    "document": "AI 협업 Front-End 교육 과정",
    "section": "과정 사용 방법",
    "excerpt": "이 과정은 모든 코드를 직접 입력하는 교육이 아닙니다. AI가 조사와 구현을 수행하고, 개발자는 요구·상태·계약을 결정하며 결과를 검증하는 방식으로 진행합니다. 협업 원칙은 AI 협업 기반 Front-End 성장 가이드 를 따릅니다. 각 단계의 완료 기준을 설명하고 적용할 수 있을 때 다음 문서로 이동합니다. 읽은 문서 수나 학습 시간만으로 완료를 판단하지 않습니다. 쉬운 설명만 이해하는 것…",
    "content": "1. 과정 사용 방법 이 과정은 모든 코드를 직접 입력하는 교육이 아닙니다. AI가 조사와 구현을 수행하고, 개발자는 요구·상태·계약을 결정하며 결과를 검증하는 방식으로 진행합니다. 협업 원칙은 AI 협업 기반 Front-End 성장 가이드 를 따릅니다. 각 단계의 완료 기준을 설명하고 적용할 수 있을 때 다음 문서로 이동합니다. 읽은 문서 수나 학습 시간만으로 완료를 판단하지 않습니다. 쉬운 설명만 이해하는 것을 목표로 하지 않습니다. 각 단계의 실행 원리, 실패 조건과 교체 경계를 이해하고 AI의 구현이 그 기준을 지켰는지 판단할 수 있어야 합니다. 모르는 문법은 AI에게 설명받아도 되지만 이해하지 못한 핵심 결정은 승인하지 않습니다.",
    "url": "./../guides/learning/ai-frontend-growth/curriculum.html#section-1"
  },
  {
    "document": "AI 협업 Front-End 교육 과정",
    "section": "기초 언어",
    "excerpt": "JavaScript 기초 — 값과 참조, Closure, 비동기 순서, 취소와 자원 정리 TypeScript 기본 — 추론, 판별 가능한 Union, 누락 없는 분기와 타입 보존 TypeScript 경계 — Props, 외부 입력, 형태·의미 검증과 생성 타입의 한계 이 구간을 마치면 AI가 만든 타입의 역할과 타입 오류의 원인을 설명할 수 있어야 합니다.",
    "content": "2. 기초 언어 JavaScript 기초 — 값과 참조, Closure, 비동기 순서, 취소와 자원 정리 TypeScript 기본 — 추론, 판별 가능한 Union, 누락 없는 분기와 타입 보존 TypeScript 경계 — Props, 외부 입력, 형태·의미 검증과 생성 타입의 한계 이 구간을 마치면 AI가 만든 타입의 역할과 타입 오류의 원인을 설명할 수 있어야 합니다.",
    "url": "./../guides/learning/ai-frontend-growth/curriculum.html#section-2"
  },
  {
    "document": "AI 협업 Front-End 교육 과정",
    "section": "실제 서비스 연결",
    "excerpt": "API 계약과 오류 — 공통 요청 계층, Runtime Parser, 응답·오류·취소 분류 서버·클라이언트 상태 — Query 수명, Mutation 일관성, 세션·회원과 사용자 전환 WebView Bridge와 보안 — Native 경계, 응답 검증, 요청 수명과 최소 노출 이 구간을 마치면 Backend·App 담당자에게 필요한 계약 질문을 하고, API 미확정 상태에서는 구현을 선행하지…",
    "content": "4. 실제 서비스 연결 API 계약과 오류 — 공통 요청 계층, Runtime Parser, 응답·오류·취소 분류 서버·클라이언트 상태 — Query 수명, Mutation 일관성, 세션·회원과 사용자 전환 WebView Bridge와 보안 — Native 경계, 응답 검증, 요청 수명과 최소 노출 이 구간을 마치면 Backend·App 담당자에게 필요한 계약 질문을 하고, API 미확정 상태에서는 구현을 선행하지 않은 채 TBD 를 관리하며, 계약 확정 후 세션과 사용자별 상태의 수명을 설계할 수 있어야 합니다.",
    "url": "./../guides/learning/ai-frontend-growth/curriculum.html#section-4"
  },
  {
    "document": "AI 협업 Front-End 교육 과정",
    "section": "품질과 독립적인 판단",
    "excerpt": "테스트와 디버깅 — 테스트 경계, Backend 환경 우선과 증거 기반 원인 추적 기능 통합과 리뷰 — 승인된 계약에서 구현과 검증까지 하나의 기능 완성 Front-End 보안과 개인정보 — 완성한 기능의 신뢰 경계, 개인정보와 보안 위험 검토 마지막 구간에서는 AI의 구현을 그대로 승인하지 않고 기능·회귀·보안 위험과 변경 영향을 검토해 병합 여부를 판단합니다.",
    "content": "5. 품질과 독립적인 판단 테스트와 디버깅 — 테스트 경계, Backend 환경 우선과 증거 기반 원인 추적 기능 통합과 리뷰 — 승인된 계약에서 구현과 검증까지 하나의 기능 완성 Front-End 보안과 개인정보 — 완성한 기능의 신뢰 경계, 개인정보와 보안 위험 검토 마지막 구간에서는 AI의 구현을 그대로 승인하지 않고 기능·회귀·보안 위험과 변경 영향을 검토해 병합 여부를 판단합니다.",
    "url": "./../guides/learning/ai-frontend-growth/curriculum.html#section-5"
  },
  {
    "document": "AI 협업 Front-End 교육 과정",
    "section": "React와 화면 구현",
    "excerpt": "React 컴포넌트와 상태 — 책임, 상태 소유자, 렌더링 위치·Key와 상태 보존 React Effect와 폼 — Effect 수명·경쟁 상태, 입력과 Mutation 흐름 Next.js App Router — Route, Server·Client 경계, Hydration과 오류 책임 Tailwind UI와 접근성 — 토큰, Layout 제약, 상태 전달과 Focus 흐름 이 구간을 마치면…",
    "content": "3. React와 화면 구현 React 컴포넌트와 상태 — 책임, 상태 소유자, 렌더링 위치·Key와 상태 보존 React Effect와 폼 — Effect 수명·경쟁 상태, 입력과 Mutation 흐름 Next.js App Router — Route, Server·Client 경계, Hydration과 오류 책임 Tailwind UI와 접근성 — 토큰, Layout 제약, 상태 전달과 Focus 흐름 이 구간을 마치면 화면을 시각적 레이어가 아니라 사용자 동작과 상태의 조합으로 설계할 수 있어야 합니다.",
    "url": "./../guides/learning/ai-frontend-growth/curriculum.html#section-3"
  },
  {
    "document": "APP 개발 표준",
    "section": "테스트 및 품질 관리 방향",
    "excerpt": "캐시 관리 방향 데이터는 공개·사용자별·민감 정보로 분류하고 저장 위치와 만료 시간을 명시합니다. Native 영속 캐시의 범위는 TBD 이며, 승인 전에는 채택한 인증 방식에 필요한 장기 자격 증명과 비민감 앱 설정만 저장합니다. 오프라인 기능을 채택하면 데이터 등급·TTL·필요한 암호화와 로그아웃·사용자 전환 시 삭제 기준을 먼저 확정합니다. 개인정보·예약·결제 응답은 서버에서 Cache…",
    "content": "4. 테스트 및 품질 관리 방향 캐시 관리 방향 데이터는 공개·사용자별·민감 정보로 분류하고 저장 위치와 만료 시간을 명시합니다. Native 영속 캐시의 범위는 TBD 이며, 승인 전에는 채택한 인증 방식에 필요한 장기 자격 증명과 비민감 앱 설정만 저장합니다. 오프라인 기능을 채택하면 데이터 등급·TTL·필요한 암호화와 로그아웃·사용자 전환 시 삭제 기준을 먼저 확정합니다. 개인정보·예약·결제 응답은 서버에서 Cache-Control: no-store 를 적용합니다. 상태 관리 방안 Flutter 영역은 Riverpod으로 계층과 기능의 역할을 분리합니다. WebView 서비스 영역은 TanStack Query로 서버 상태를 관리하고, Zustand로 전역 UI와 클라이언트 상태를 관리합니다. Query Key에는 사용자 식별 범위를 포함하고 로그아웃·계정 전환 시 Query Cache와 사용자 상태를 초기화합니다. WebView 상태 도구의 선택은 Front-End 개발 가이드 를 따르고, 공유 UI 상태의 Store·Selector·초기화 기준은 Zustand UI 상태 관리 가이드 를 따릅니다. 성능 최적화 메모리 화면 종료 시 Controller 및 리소스 해제 이미지 캐시 관리 불필요한 객체 생성 최소화 네트워크 API 중복 호출 방지 Pagination 적용 필요한 시점에만 데이터 조회(Lazy Loading) 인증 상태 확인과 갱신 요청의 불필요한 중복 방지 Mutation 자동 재시도 금지 또는 서버 Idempotency Key 적용 WebView 동일 사용자·동일 신뢰 Origin 범위에서만 WebView 재사용 JavaScript Bridge 호출 최소화 필요한 경우에만 Reload 로그아웃·계정 전환 시 Cookie, DOM Storage, History와 민감 캐시 정리 UI const Widget 적극 활용 Riverpod Provider 분리를 통한 불필요한 Rebuild 최소화 테스트 및 품질 관리 테스트 Unit Test Widget Test Integration Test 인증: 채택한 인증 정책의 Callback·만료·폐기·갱신, 로그아웃, 계정 전환, 오프라인 상태 WebView: HTTP·유사 도메인·비표준 Port·Redirect·iframe·XSS 기반 Bridge 호출 차단 Bridge: 잘못된 JSON·타입·크기, 중복 Request ID, Rate Limit, 권한 거부, Timeout과 결제 중복 실행 Deep Link·Push: 만료·필수 필드·비허용 Route·로그인 우회와, 서명을 채택한 경우 위조 서명 품질 관리 Flutter Lint 및 Dart Format 적용 Firebase Crashlytics 연동 전 개인정보·토큰·URL Query 제거 Release Build 사전 QA Android/iOS 실기기 테스트 주요 OS 버전별 호환성 검증 SAST, Dependency·Secret Scan 및 보안 회귀 테스트",
    "url": "./../guides/app/app.html#section-4"
  },
  {
    "document": "APP 개발 표준",
    "section": "APP 내 네비게이션",
    "excerpt": "Flutter의 GoRouter 를 사용하여 화면 이동을 관리합니다. 앱 시작 시 Native Splash에서 버전·점검·인증 상태를 확인합니다. 승인된 인증 시스템에서 유효한 상태를 확인하고, 비로그인 또는 만료 상태의 이동 경로는 확정된 로그인 흐름을 따릅니다. 카메라, 사진 선택, 권한, 설정 등 Native 기능은 GoRouter 를 통해 화면으로 이동합니다. 작업 완료 후 필요한 최…",
    "content": "3. APP 내 네비게이션 Flutter의 GoRouter 를 사용하여 화면 이동을 관리합니다. 앱 시작 시 Native Splash에서 버전·점검·인증 상태를 확인합니다. 승인된 인증 시스템에서 유효한 상태를 확인하고, 비로그인 또는 만료 상태의 이동 경로는 확정된 로그인 흐름을 따릅니다. 카메라, 사진 선택, 권한, 설정 등 Native 기능은 GoRouter 를 통해 화면으로 이동합니다. 작업 완료 후 필요한 최소 결과만 WebView로 전달하고, 민감한 임시 파일은 사용 직후 삭제한 뒤 기존 화면으로 복귀합니다. 뒤로가기는 Native 화면에서 Native Navigation을 우선 처리하고, WebView 화면에서는 Web History를 우선 적용합니다. Deep Link와 Push는 임의 URL을 직접 열지 않습니다. Native가 Scheme, Host, Port, Path, 필수 필드, 만료와 로그인 필요 여부를 확인한 뒤 내부 Route로 변환합니다. 서명 검증은 서명 정책을 채택한 경우 적용합니다. 로그인 전 보호 Route 진입은 요청 Route를 안전한 내부 값으로 보관하고, 로그인 완료 후 한 번만 이동합니다. 외부에서 전달된 Return URL을 그대로 사용하지 않습니다. Navigation은 명시적인 Route ID와 허용된 파라미터로 관리합니다. 외부 입력 URL은 Route로 변환하기 전에 반드시 검증합니다. 인증 및 WebView 세션 설계 기준 자격 증명의 발급·검증·폐기와 권한의 최종 판단은 서버가 담당합니다. 로그인 화면의 위치, 인증 프로토콜, Native 참여 범위와 WebView의 인증 상태 전달 방식은 아직 확정하지 않습니다. 앱은 자격 증명이나 인증 상태를 임의로 생성·판단하지 않고 승인된 인증 시스템의 응답을 기준으로 처리합니다. TBD Cookie, token 또는 별도 세션 교환 방식 중 무엇을 사용할지와 로그인·로그아웃·만료·사용자 전환 시 정리할 데이터는 인증·API·배포 구조가 확정된 뒤 반영합니다. 인증 설계 결정 항목 로그인 주체·화면, 인증 제공자·프로토콜과 재인증·계정 복구 요구사항 인증 상태의 단일 기준, 만료·연장 조건과 동시 로그인 허용 범위 WebView 인증 상태 생성·전달 방식과 Cookie 또는 token의 저장·전송 정책 갱신·폐기·로그아웃·계정 전환 시 Native와 WebView 데이터를 정리하는 방법 인증 상태와 권한의 최종 기준은 승인된 서버 또는 인증 시스템으로 유지합니다. 비밀번호, token과 세션 식별자는 URL, Bridge, Analytics, 로그에 노출하지 않습니다. Cookie 기반 WebView 인증을 채택한 경우의 흐름 아래 흐름은 WebView 로그인과 서버 관리 Cookie 세션을 채택했을 때의 참고 구조입니다. 현재 확정된 로그인 또는 세션 계약이 아닙니다. Native Splash → Main WebView 또는 로그인 화면 진입 → 사용자가 WebView 로그인 화면에 자격 증명 입력 → HTTPS로 서버에 로그인 요청 → 서버가 자격 증명과 계정 상태 검증 → Secure·HttpOnly 세션 Cookie 발급 → 권한 확인 후 Main 화면 표시 Native는 WebView의 화면 전환과 수명주기를 관리하지만 자격 증명이나 세션 값을 직접 취급하지 않습니다. 보호된 요청마다 서버가 세션과 권한을 검증하며, 만료된 경우 로그인 화면으로 이동합니다. sequenceDiagram accTitle: Cookie 기반 WebView 인증 참고 흐름 accDescr: Cookie 기반 WebView 인증을 채택한 경우 사용자가 WebView에서 인증하고 서버가 보안 Cookie 세션을 발급하는 참고 흐름입니다. participant U as 사용자 participant N as Flutter Native participant BE as Backend participant W as WebView N->>W: 로그인 또는 Main URL 진입 W-->>U: WebView 로그인 화면 표시 U->>W: 자격 증명 입력 W->>BE: HTTPS 로그인 요청 BE->>BE: 자격 증명·계정 상태 검증 BE-->>W: Secure · HttpOnly Session Cookie W->>BE: 보호된 화면 요청 BE->>BE: 세션·권한 검증 BE-->>W: Main 화면 응답 W-->>U: Main 화면 표시 Cookie 기반 WebView 인증을 채택한 경우의 참고 흐름 다이어그램 설명: Cookie 기반 인증을 채택한다면 Flutter Native는 로그인 또는 Main URL을 WebView에 표시하지만 사용자의 자격 증명을 직접 읽거나 저장하지 않습니다. 사용자가 WebView에서 로그인하면 Backend가 자격 증명과 계정 상태를 검증하고 Secure·HttpOnly Cookie를 발급합니다. 이후 보호된 화면을 요청할 때마다 Backend가 세션과 권한을 다시 확인하며, 검증을 통과한 경우에만 Main 화면을 반환합니다. 인증 수단별 저장 기준 (조건부 MUST) 항목 저장 위치 필수 기준 로그인 자격 증명 저장 금지 HTTPS 요청에만 사용하고 Native·WebView·로그에 저장 금지 WebView Cookie Session을 채택한 경우 서버 관리 + Cookie Secure; HttpOnly 필수. SameSite·Domain·Path와 Prefix는 승인된 사이트·Redirect 구조에 맞춰 결정 UI 설정 Shared Preferences 비민감 값만 저장하고 인증 정보 저장 금지 갱신·만료·로그아웃 기준 채택한 인증 수단의 만료·연장 정책을 일관되게 적용하고, 갱신 실패 후 이동할 화면은 승인된 인증 흐름에 맞춥니다. Splash의 로그인 상태는 저장값 존재 여부만으로 확정하지 않고 만료, 서버 폐기, 계정 상태와 승인된 인증 시스템의 확인 결과를 사용합니다. 로그아웃 시 채택한 인증 자격 증명·WebView 인증 상태·Push 사용자 연결을 폐기하고, 실제로 사용한 Cookie·DOM Storage, 사용자별 Query Cache, 클라이언트 상태와 민감 임시 파일을 정책에 따라 삭제합니다. 로그아웃·계정 전환 후 뒤로가기로 보호 페이지가 다시 보이지 않도록 WebView History를 초기화하고 로그인 Route로 교체합니다. 인증 응답과 개인정보 화면의 캐시 정책, 로그아웃 응답의 Clear-Site-Data 적용 여부는 인증·배포 구조와 브라우저 지원 범위를 확인해 결정합니다. 인증 계약 확정 전에는 상태 모델과 회원 데이터를 분리한다는 Front-end 원칙만 검토하고 구현은 선행하지 않습니다. 계약 확정 후 구현할 때 세션과 회원 경계 구현 예시 를 참고합니다. WebView Bridge 설계 기준 WebView와 Flutter 사이는 승인된 단일 채널로 통신하고 요청과 응답을 연결할 고유 ID를 사용합니다. 채널 이름·JSON 규격·Method·오류 코드와 실행 제한은 구현 전에 계약으로 확정해야 합니다. 아래 AppBridge 규격은 EXAMPLE 이며, TBD 항목입니다. Bridge는 신뢰된 HTTPS Main Frame에서만 활성화하고 인증·결제 사업자 등 제3자 페이지에서는 제거하거나 비활성화합니다. 처리 흐름 WebView → AppBridge.postMessage(JSON Request) → Flutter 요청 검증 및 Native 기능 실행 → window.AppBridgeResponse(Base64-encoded JSON Response) → WebView Promise 완료 코드 요약: WebView의 비동기 요청을 Flutter가 실행하고, 동일한 요청 ID를 가진 응답으로 Promise를 완료하는 전체 Bridge 흐름입니다. 응답 JSON을 runJavaScript() 의 문자열 인자로 전달할 때 따옴표·줄바꿈·한글 등으로 인한 이스케이프 오류를 줄이기 위해 UTF-8 Base64로 인코딩합니다. Base64는 암호화나 위변조 방지 수단이 아니며, 데이터 크기가 증가하므로 작은 JSON 응답에만 사용합니다. WebView가 직접 메시지 전달 API를 제공한다면 생략할 수 있습니다. sequenceDiagram accTitle: WebView Bridge 요청과 응답 처리 흐름 accDescr: WebView가 고유 요청 ID를 포함한 메시지를 보내고 Flutter가 검증 및 Native 기능 실행 후 같은 ID로 응답하여 Promise를 완료하는 과정입니다. participant UI as WebView UI participant AB as AppBridge participant F as Flutter participant OS as OS / Device UI->>AB: 사용자 동작으로 기능 요청 AB->>F: JSON Request · requestId F->>F: Origin, Method, Params, 권한 검증 F->>OS: 승인된 Native 기능 실행 OS-->>F: 처리 결과 F-->>AB: Base64 JSON Response · 동일 requestId AB-->>UI: Promise 성공 / 취소 / 오류 완료 WebView–Flutter Bridge 요청·응답 과정 다이어그램 설명: WebView의 사용자 동작으로 시작된 요청에는 고유한 requestId 가 포함됩니다. Flutter는 Origin, Method, Params, 권한과 호출 제한을 검증한 뒤 승인된 OS 기능만 실행하고, 같은 requestId 를 담은 응답을 돌려줍니다. WebView는 이 ID로 대기 중인 Promise를 찾아 성공·취소·오류 중 하나로 종료합니다. Base64는 JSON을 안전하게 문자열로 전달하기 위한 인코딩일 뿐 암호화 수단은 아닙니다. 요청 규격 (초안) 필드 타입 필수 설명 version string Y Bridge 규격 버전. 예시 값은 1.0 requestId string Y 요청과 응답을 연결하는 UUID method string Y 허용 목록에 등록된 Native 기능 이름 params object Y Method별 입력값. 입력값이 없으면 빈 객체 사용 { \"version\" : \"1.0\" , \"requestId\" : \"550e8400-e29b-41d4-a716-446655440000\" , \"method\" : \"location.getCurrentPosition\" , \"params\" : { \"accuracy\" : \"balanced\" } } 코드 요약: 현재 위치를 요청하는 표준 Bridge 메시지 예시입니다. requestId 로 이후 Native 응답을 식별합니다. 응답 규격 (초안) 필드 타입 설명 version string 요청과 동일한 Bridge 규격 버전 requestId string 원본 요청의 UUID ok boolean 성공 여부 data object | null 성공 결과 error object | null 실패 시 오류 코드와 사용자 메시지 { \"version\" : \"1.0\" , \"requestId\" : \"550e8400-e29b-41d4-a716-446655440000\" , \"ok\" : true , \"data\" : { \"latitude\" : 37.4602 , \"longitude\" : 126.4407 }, \"error\" : null } 코드 요약: Native에서 위치 조회를 완료한 뒤 WebView로 반환하는 성공 응답 예시입니다. 허용 Method (초안) Method 설명 주요 결과 qr.scan 이용권 등록용 QR 스캔 스캔 문자열 location.getCurrentPosition 현재 위치 권한 요청 및 좌표 조회 위도·경도 photo.pick 사진 선택 또는 촬영 업로드 가능한 임시 파일 정보 file.download 파일 다운로드와 열기 다운로드 상태 app.openSettings OS 앱 설정 화면 열기 실행 여부 app.getInfo 앱 버전·OS·환경 정보 조회 앱 및 기기 정보 external.openUrl 허용된 외부 URL 또는 지도 앱 열기 실행 여부 payment.open Native 결제 SDK가 필요한 경우에만 사용 결제 식별자와 처리 결과 공통 오류 코드 (초안) 오류 코드 설명 처리 기준 INVALID_REQUEST 필수 필드 또는 입력값 오류 요청을 실행하지 않고 즉시 실패 응답 UNSUPPORTED_METHOD 허용되지 않은 Method 호출 차단 및 보안 로그 기록 UNTRUSTED_ORIGIN 허용되지 않은 Origin 또는 Frame의 호출 즉시 차단하고 원문 없이 보안 Event만 기록 DUPLICATE_REQUEST 처리 중이거나 최근 완료된 Request ID 재사용 재실행하지 않고 기존 처리 결과를 서버에서 확인 RATE_LIMITED 허용 호출 빈도 또는 동시 실행 수 초과 잠시 후 재시도하되 자동 반복 호출 금지 UNAUTHORIZED 로그인 또는 Method 실행 권한 없음 보호 Route를 유지하고 필요한 경우 재인증 PERMISSION_DENIED 사용자가 기기 권한을 거부 안내 후 필요한 경우 설정 화면 이동 제공 USER_CANCELLED 스캔·사진 선택·결제를 사용자가 취소 오류 팝업 없이 기존 화면 유지 TIMEOUT 정해진 시간 내 응답 없음 중복 요청을 막고 재시도 가능 상태 제공 INTERNAL_ERROR Native 처리 중 예외 발생 사용자용 메시지와 진단용 로그를 분리 WebView 요청 코드 (참고 구현 · EXAMPLE · TypeScript) // WebView 코드에서 사용할 수 있는 Native 기능 이름을 컴파일 단계에서 제한합니다. // 단, 브라우저 입력은 조작될 수 있으므로 Flutter에서도 같은 허용 목록을 다시 검사해야 합니다. type BridgeMethod = | 'qr.scan' | 'location.getCurrentPosition' | 'photo.pick' | 'file.download' | 'app.openSettings' | 'app.getInfo' | 'external.openUrl' | 'payment.open' ; // 모든 Native 응답이 따르는 공통 Envelope입니다. // T는 Method별 성공 데이터 타입이며, 실제 사용 전에는 별도의 Runtime Schema 검증이 필요합니다. interface BridgeResponse<T> { // version은 앱과 웹이 같은 Bridge 계약을 해석하는지 확인하는 값입니다. version : '1.0' ; // requestId는 동시에 실행된 여러 요청 중 원래 Promise를 찾는 상관관계 ID입니다. requestId : string ; // ok=true이면 data를, ok=false이면 error를 사용합니다. 두 필드를 동시에 신뢰하지 않습니다. ok : boolean ; data : T | null ; error : { code : string ; message : string } | null ; } // 응답이 도착할 때까지 Promise 종료 함수와 Timeout 핸들을 보관합니다. // 응답·Timeout·전송 실패 중 먼저 발생한 경로가 이 항목을 제거해야 메모리 누수가 없습니다. interface PendingRequest { resolve : ( value : unknown ) => void ; reject : ( reason : Error ) => void ; timer : ReturnType <typeof setTimeout>; } // Timeout과 최대 동시 요청 수는 코드에 흩어 두지 않고 승인된 환경 정책에서 주입합니다. const bridgePolicy = loadApprovedBridgePolicy (); // Flutter가 신뢰된 WebView Main Frame의 window 객체에 주입하는 API를 TypeScript에 선언합니다. // 일반 브라우저나 Bridge가 비활성화된 페이지에서는 존재하지 않으므로 선택 속성으로 둡니다. declare global { interface Window { AppBridge?: { postMessage : ( message : string ) => void ; }; AppBridgeResponse?: ( encodedResponse : string ) => void ; } } // requestId별 대기 상태를 저장해 순서가 뒤바뀐 응답도 올바른 Promise에 연결합니다. const pendingRequests = new Map < string , PendingRequest>(); // 웹 서비스가 Native 기능을 일반 비동기 함수처럼 호출하도록 감싸는 공통 진입점입니다. export function callNative<T>( method : BridgeMethod, params : Record < string , unknown > = {}, ): Promise <T> { // 충돌 가능성이 낮은 UUID v4를 생성하여 이 호출과 Native 응답을 연결합니다. const requestId = crypto. randomUUID (); const bridge = window. AppBridge ; // 외부 브라우저, 제3자 페이지, 초기화 전 상태에서는 Bridge가 없을 수 있습니다. if (!bridge) { return Promise . reject ( new Error ( 'Native Bridge를 사용할 수 없습니다.' )); } // 과도한 동시 호출이 OS 권한 창이나 Native 작업을 중첩시키지 않도록 조기에 차단합니다. if (pendingRequests. size >= bridgePolicy. maxConcurrentRequests ) { return Promise . reject ( new Error ( '동시에 처리할 수 있는 요청 수를 초과했습니다.' )); } return new Promise <T>((resolve, reject) => { // 제한 시간 안에 응답이 없으면 Map에서 먼저 제거한 뒤 Promise를 실패시킵니다. // 이후 늦게 도착한 응답은 대기 항목을 찾지 못하므로 실행 결과에 다시 반영되지 않습니다. const timer = setTimeout (() => { pendingRequests. delete (requestId); reject ( new Error ( 'Native 요청 시간이 초과되었습니다.' )); }, bridgePolicy. requestTimeoutMs ); // postMessage보다 먼저 등록해야 Native가 즉시 응답해도 응답을 놓치지 않습니다. pendingRequests. set (requestId, { resolve : resolve as ( value : unknown ) => void , reject, timer, }); // 이 Payload에는 인증 토큰을 넣지 않으며 Native가 Method별 Params를 다시 검증합니다. // 직렬화나 채널 호출이 동기적으로 실패하면 Timer와 Map을 함께 정리합니다. try { bridge. postMessage ( JSON . stringify ({ version : '1.0' , requestId, method, params, }), ); } catch { clearTimeout (timer); pendingRequests. delete (requestId); reject ( new Error ( 'Native 요청을 전송하지 못했습니다.' )); } }); } 코드 요약: WebView에서 Native 기능을 Promise 방식으로 호출하는 공통 TypeScript 모듈입니다. 요청 ID, Timeout 및 Bridge 미지원 상황을 함께 처리합니다. WebView 응답 처리 코드 (참고 구현 · EXAMPLE · TypeScript) // Native 경계를 넘어온 값에는 TypeScript 타입이 적용되지 않으므로 Runtime에서 기본 구조를 확인합니다. // 이 함수는 공통 Envelope만 검사하며 data의 상세 구조는 요청 Method별 Schema로 추가 검증합니다. function isBridgeResponse ( value : unknown ): value is BridgeResponse< unknown > { if (!value || typeof value !== 'object' ) return false ; const response = value as Record < string , unknown >; return response. version === '1.0' && typeof response. requestId === 'string' && typeof response. ok === 'boolean' && 'data' in response && 'error' in response; } // Flutter가 runJavaScript()로 호출하는 단일 응답 진입점입니다. window. AppBridgeResponse = ( encodedResponse : string ): void => { let parsed : unknown ; try { // atob() 결과는 UTF-8 문자열이 아니라 Byte열이므로 먼저 Uint8Array로 복원합니다. const bytes = Uint8Array . from ( atob (encodedResponse), (character) => character. charCodeAt ( 0 ), ); // fatal=true는 잘못된 UTF-8을 대체 문자로 숨기지 않고 예외로 처리하게 합니다. const json = new TextDecoder ( 'utf-8' , { fatal : true }). decode (bytes); parsed = JSON . parse (json); } catch { // 원문 응답은 로그에 남기지 않고 진단 Counter만 증가시킵니다. recordBridgeDiagnostic ( 'INVALID_RESPONSE_ENCODING' ); return ; } // JSON 파싱 성공과 계약 준수는 별개이므로 필수 필드와 타입을 한 번 더 확인합니다. if (! isBridgeResponse (parsed)) { recordBridgeDiagnostic ( 'INVALID_RESPONSE_SCHEMA' ); return ; } // 알 수 없는 ID는 Timeout 이후의 지연 응답, 중복 응답 또는 위조 응답일 수 있어 무시합니다. const pending = pendingRequests. get (parsed. requestId ); if (!pending) return ; // Promise를 완료하기 전에 Timer와 Map을 제거하여 같은 ID가 두 번 처리되지 않게 합니다. clearTimeout (pending. timer ); pendingRequests. delete (parsed. requestId ); // 성공 data는 이 지점 이후 호출한 Method에 대응하는 Runtime Schema로 검증하는 것이 안전합니다. if (parsed. ok ) { pending. resolve (parsed. data ); return ; } // Native의 내부 예외 원문 대신 사용자 노출용으로 정제된 메시지만 사용합니다. const message = parsed. error && typeof parsed. error === 'object' && 'message' in parsed. error && typeof parsed. error . message === 'string' ? parsed. error . message : 'Native 기능 실행에 실패했습니다.' ; pending. reject ( new Error (message)); }; 코드 요약: Flutter가 반환한 Base64 응답을 해석하고 원래 요청의 Promise를 성공 또는 실패 상태로 종료하는 WebView 응답 처리기입니다. Flutter Bridge 처리 코드 (참고 구현 · EXAMPLE · Dart) // WebView가 임의의 Native API를 호출하지 못하도록 공개 Method를 명시적으로 제한합니다. // TypeScript의 BridgeMethod와 별개로 신뢰 경계인 Native에서 반드시 다시 검사합니다. const allowedMethods = { 'qr.scan' , 'location.getCurrentPosition' , 'photo.pick' , 'file.download' , 'app.openSettings' , 'app.getInfo' , 'external.openUrl' , 'payment.open' , }; // 메시지 크기와 Replay 차단 시간은 성능·보안 테스트를 거친 정책에서 주입합니다. final bridgePolicy = loadApprovedBridgePolicy (); final maxBridgeMessageBytes = bridgePolicy. maxMessageBytes ; final replayWindow = bridgePolicy. replayWindow ; // active는 실행 중 중복을, recent는 완료 직후 같은 ID의 재전송을 차단합니다. final activeRequestIds = < String >{}; final recentRequestIds = < String , DateTime >{}; // 예시는 Web Crypto API가 만드는 UUID v4 형식만 상관관계 ID로 허용합니다. final requestIdPattern = RegExp ( r '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-' r '[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$' , ); Future < void > handleBridgeMessage (JavaScriptMessage message) async { // 형식 검증 전에는 신뢰할 requestId가 없으므로 안전한 기본값으로 시작합니다. String requestId = '' ; try { // URL 문자열만 믿지 않고 플랫폼 Adapter에서 발신 Main Frame과 Security Origin을 확인합니다. if (! await bridgeOriginPolicy. isTrustedMainFrame ()) { throw const BridgeValidationException ( 'UNTRUSTED_ORIGIN' ); } // JSON 파싱 전에 UTF-8 Byte 크기를 제한해 큰 입력으로 인한 메모리·CPU 소모를 줄입니다. if (utf8. encode (message. message ). length > maxBridgeMessageBytes) { throw const BridgeValidationException ( 'MESSAGE_TOO_LARGE' ); } // 최상위 JSON은 필드 이름이 있는 객체여야 하며 배열·문자열·숫자는 거부합니다. final decoded = jsonDecode (message. message ); if (decoded is ! Map < String , dynamic >) { throw const BridgeValidationException ( 'INVALID_REQUEST' ); } // dynamic 값을 바로 형변환하지 않고 각 필드의 Runtime 타입을 아래에서 확인합니다. final requestIdValue = decoded[ 'requestId' ]; final version = decoded[ 'version' ]; final method = decoded[ 'method' ]; final paramsValue = decoded[ 'params' ]; // 지원 버전, UUID 형식, Method 타입, Params 객체 여부를 하나의 공통 계약으로 검증합니다. if (requestIdValue is ! String || !requestIdPattern. hasMatch (requestIdValue) || version != '1.0' || method is ! String || paramsValue is ! Map < String , dynamic >) { throw const BridgeValidationException ( 'INVALID_REQUEST' ); } // 이 시점부터 오류 응답을 원래 WebView Promise와 안전하게 연결할 수 있습니다. requestId = requestIdValue; // 알 수 없는 Method는 서비스 객체에 도달하기 전에 차단합니다. if (!allowedMethods. contains (method)) { throw const BridgeValidationException ( 'UNSUPPORTED_METHOD' ); } // Replay 차단 기간이 지난 완료 ID를 먼저 제거하여 저장 공간이 계속 늘지 않게 합니다. final now = DateTime . now (). toUtc (); recentRequestIds. removeWhere ( (_, completedAt) => now. difference (completedAt) > replayWindow, ); // 실행 중이거나 최근 완료된 ID라면 동일 Native 동작이 다시 수행되지 않도록 거부합니다. if (activeRequestIds. contains (requestId) || recentRequestIds. containsKey (requestId)) { throw const BridgeValidationException ( 'DUPLICATE_REQUEST' ); } // 첫 await 전에 ID를 선점해야 거의 동시에 도착한 중복 메시지도 차단됩니다. activeRequestIds. add (requestId); try { // 1) Method별 필드·길이·URL·MIME·값 범위를 검증하고 불필요한 필드는 제거합니다. final params = validateBridgeParams (method, paramsValue); // 2) Method별 호출 빈도와 동시 실행 한도를 확인해 남용을 방지합니다. await bridgeRateLimiter. check (method); // 3) 로그인·권한·사용자 Gesture 등 현재 실행 조건을 Native에서 다시 확인합니다. await bridgeAuthorizationPolicy. check (method, params); // 모든 공통 검증을 통과한 요청만 대응하는 최소 권한 Service로 전달합니다. final data = switch (method) { 'qr.scan' => await qrService. scan (), 'location.getCurrentPosition' => await locationService. getCurrentPosition (params), 'photo.pick' => await photoService. pick (params), 'file.download' => await fileService. downloadAllowedFile (params), 'app.openSettings' => await appService. openSettings (), 'app.getInfo' => await appService. getMinimalInfo (), 'external.openUrl' => await appService. openAllowedUrl (params), 'payment.open' => await paymentService. openIdempotently (params), _ => throw const BridgeValidationException ( 'UNSUPPORTED_METHOD' ), }; // 성공 여부와 관계없이 요청과 같은 requestId를 돌려 WebView의 Promise를 완료합니다. await sendBridgeResponse (requestId, data); } finally { // Service 예외가 발생해도 실행 중 표시는 해제하고 완료 ID는 Replay 목록에 남깁니다. activeRequestIds. remove (requestId); recentRequestIds[requestId] = DateTime . now (). toUtc (); } } on BridgeValidationException catch (error) { // 검증 실패는 내부 상세를 숨기고 계약에 정의된 안전한 오류 코드로 변환합니다. await sendBridgeError ( requestId, error. code , '요청을 처리할 수 없습니다.' , ); } on PermissionDeniedException { // 권한 거부는 설정 안내가 가능하도록 시스템 장애와 다른 코드로 반환합니다. await sendBridgeError ( requestId, 'PERMISSION_DENIED' , '필요한 권한이 허용되지 않았습니다.' , ); } on UserCancelledException { // 사용자 취소는 정상적인 종료 흐름이므로 일반 오류 팝업과 구분할 수 있게 합니다. await sendBridgeError ( requestId, 'USER_CANCELLED' , '사용자가 작업을 취소했습니다.' , ); } catch (error) { // 예상하지 못한 예외는 공통 코드로 축약하여 구현 세부가 WebView에 노출되지 않게 합니다. // 운영 로그에는 분류 코드와 별도 추적 ID만 남기고 원문·Params·Stack은 기록하지 않습니다. securityLogger. recordBridgeFailure ( code : 'INTERNAL_ERROR' ); await sendBridgeError ( requestId, 'INTERNAL_ERROR' , '기능 실행 중 오류가 발생했습니다.' , ); } } // 성공 응답은 data만 채우고 error를 null로 두어 Envelope의 상호 배타 규칙을 지킵니다. Future < void > sendBridgeResponse ( String requestId, Object ? data) async { await dispatchBridgeResponse ({ 'version' : '1.0' , 'requestId' : requestId, 'ok' : true , 'data' : data, 'error' : null , }); } // 실패 응답은 data를 null로 두고 승인된 코드와 사용자 메시지만 전달합니다. Future < void > sendBridgeError ( String requestId, String code, String message, ) async { await dispatchBridgeResponse ({ 'version' : '1.0' , 'requestId' : requestId, 'ok' : false , 'data' : null , 'error' : { 'code' : code, 'message' : message}, }); } // Base64는 따옴표·줄바꿈·한글이 JavaScript 문자열을 깨뜨리지 않게 하는 전송용 인코딩입니다. // 암호화나 서명이 아니므로 민감정보를 담지 않으며 응답 크기 제한도 별도로 적용해야 합니다. Future < void > dispatchBridgeResponse ( Map < String , Object ?> response, ) async { // JSON → UTF-8 Byte → Base64 순서로 변환해야 WebView에서 한글을 정확히 복원할 수 있습니다. final encoded = base64Encode (utf8. encode ( jsonEncode (response))); // 선택 호출(?.)로 페이지 전환 중 Handler가 제거된 경우에도 JavaScript 오류를 피합니다. await webViewController. runJavaScript ( \"window.AppBridgeResponse?.('$encoded');\" , ); } 코드 요약: Origin·크기·형식·Method·Params·권한·호출 빈도와 중복 ID를 검증한 후 Native 기능으로 분기하는 기준 예시입니다. bridgeOriginPolicy , validateBridgeParams 와 각 Service는 프로젝트에서 구체 구현하고 보안 테스트 대상에 포함합니다. Flutter WebView 채널 등록 (참고 구현 · EXAMPLE) // 예시 도메인을 그대로 사용하지 말고 환경별로 승인된 정확한 Origin과 Path를 주입합니다. // Origin은 Scheme·Host·Port의 조합이므로 Host 문자열만 비교하는 것보다 안전합니다. const trustedOrigins = { 'https://app.example.com' , }; const trustedPathPrefixes = { '/app' , }; bool isTrustedServiceUri ( Uri uri) { // '/app' 자체와 '/app/...'만 허용해 '/application' 같은 유사 Prefix가 통과하지 않게 합니다. final trustedPath = trustedPathPrefixes. any ( (prefix) => uri. path == prefix || uri. path . startsWith ( '$prefix/' ), ); // HTTPS, 사용자 정보 미포함, 정확한 Origin, 허용 Path를 모두 만족해야 신뢰합니다. // userInfo를 금지하면 https://trusted.example@evil.example 형태의 혼동을 줄일 수 있습니다. return uri. scheme == 'https' && uri. userInfo . isEmpty && trustedOrigins. contains (uri. origin ) && trustedPath; } // JavaScript는 Bridge에 필요하지만, 아래 NavigationDelegate로 이동 가능한 문서를 제한합니다. final controller = WebViewController () .. setJavaScriptMode (JavaScriptMode. unrestricted ) .. setNavigationDelegate ( NavigationDelegate ( // 최초 이동뿐 아니라 링크·Redirect 등 이후 Main Frame 이동도 같은 정책으로 검사합니다. onNavigationRequest : (request) { final uri = Uri . tryParse (request. url ); if (uri == null || ! isTrustedServiceUri (uri)) { // 신뢰되지 않은 페이지는 Bridge가 연결된 WebView에서 열지 않습니다. return NavigationDecision. prevent ; } return NavigationDecision. navigate ; }, ), ); // 최초 URL·Deep Link·Push URL도 NavigationDelegate에 도달하기 전에 동일 정책으로 선검증합니다. Future < void > loadTrustedServiceUrl ( String rawUrl) async { final uri = Uri . tryParse (rawUrl); if (uri == null || ! isTrustedServiceUri (uri)) { throw const FormatException ( 'Untrusted WebView URL' ); } // 기존 채널을 먼저 제거해 중복 Handler나 이전 페이지의 연결이 남지 않게 합니다. await controller. removeJavaScriptChannel ( 'AppBridge' ); // 검증을 통과한 서비스 페이지를 로드하는 경우에만 채널을 새로 등록합니다. await controller. addJavaScriptChannel ( 'AppBridge' , onMessageReceived : handleBridgeMessage, ); await controller. loadRequest (uri); } Future < void > disableBridge () async { // 제3자 인증·광고·결제 페이지로 전환하기 전에 호출하여 Native 기능 노출을 끊습니다. await controller. removeJavaScriptChannel ( 'AppBridge' ); } 코드 요약: HTTPS Scheme·Host·Port와 허용 Path를 모두 통과한 Main Frame을 로드할 때만 AppBridge 를 연결하는 예시입니다. 제3자 인증·광고·결제 페이지는 채널이 없는 별도 WebView 또는 OS 브라우저로 열고, 플랫폼 Adapter에서 메시지의 Main Frame·Security Origin도 확인해야 합니다. 예시 도메인과 Path는 실제 허용 목록이 아닙니다. Bridge 보안 및 운영 기준 최초 URL, Redirect, 새 창, Deep Link와 Push URL 모두 HTTPS Scheme, 정확한 Host·Port와 허용 Path를 검증합니다. 문자열 contains , startsWith 만으로 도메인을 판별하지 않습니다. Bridge 메시지는 신뢰된 Main Frame과 Security Origin에서 온 경우에만 처리합니다. 제3자 iframe, 로그인·광고·결제 사업자 페이지에서는 채널을 제거하며 가능하면 별도 WebView 또는 OS 브라우저를 사용합니다. Native는 allowedMethods 뿐 아니라 Method별 JSON Schema, 타입, 길이, URL, MIME, 파일 크기와 값 범위를 실행 전에 검증합니다. 알 수 없는 필드와 과도하게 큰 메시지는 거부합니다. Access Token, 카드번호, 인증번호 등 민감정보를 Bridge 요청·응답 및 로그에 포함하지 않습니다. 동일 requestId 의 중복 실행을 방지하고 요청별 Timeout을 적용합니다. 완료된 ID도 짧은 시간 보관해 Replay를 차단하고, payment.open 은 서버 Idempotency Key로 중복 결제를 추가 방지합니다. Method별 호출 빈도와 동시 실행 수를 제한합니다. 위치·사진·QR·설정·결제 기능은 사용자 Gesture와 현재 로그인·권한 상태를 Native에서 다시 확인합니다. file.download 와 external.openUrl 은 승인된 HTTPS Origin·Path·MIME·파일 크기만 허용하고, 파일명에서 경로 문자를 제거하며 실행 가능한 파일을 자동으로 열지 않습니다. 사용자 취소와 권한 거부를 시스템 오류와 구분하며 내부 예외 정보와 Stack Trace는 WebView로 전달하지 않습니다. Bridge 규격을 변경할 때는 version 을 올리고 이전 앱 버전과의 호환성을 유지합니다. QR·위치·결제 등 사용자 동작이 필요한 기능은 백그라운드나 페이지 로드 시 자동 실행하지 않습니다. Base64는 JSON을 JavaScript 문자열로 전달하기 위한 인코딩일 뿐 기밀성·무결성 보호가 아닙니다. 민감정보를 응답에 넣지 않고 TLS와 Origin 검증을 별도로 적용합니다. Android는 Cleartext Traffic과 불필요한 File/Content Access를 비활성화하고, iOS는 허용된 Navigation과 Security Origin을 검사합니다. 운영 빌드에서는 WebView 디버깅을 비활성화합니다.",
    "url": "./../guides/app/app.html#section-3"
  },
  {
    "document": "APP 개발 표준",
    "section": "Architecture",
    "excerpt": "목적 유지보수성과 확장성을 고려하여 Flutter 영역에는 MVVM 기반 Clean Architecture를 적용하고, 서비스 업무 화면은 WebView 기반 웹 애플리케이션으로 분리합니다. 인증과 권한의 최종 판단은 클라이언트가 아니라 서버에서 수행합니다. 적용 기술 Architecture: MVVM State Management: Riverpod Navigation: GoRouter Pa…",
    "content": "1. Architecture 목적 유지보수성과 확장성을 고려하여 Flutter 영역에는 MVVM 기반 Clean Architecture를 적용하고, 서비스 업무 화면은 WebView 기반 웹 애플리케이션으로 분리합니다. 인증과 권한의 최종 판단은 클라이언트가 아니라 서버에서 수행합니다. 적용 기술 Architecture: MVVM State Management: Riverpod Navigation: GoRouter Pattern: Repository Pattern Dependency Injection: Riverpod Provider Architecture Flow Presentation (UI) → ViewModel → UseCase → Repository → DataSource (Remote / Local) 코드 요약: Flutter Native 요청이 UI에서 데이터 소스까지 전달되는 Clean Architecture의 기본 의존 흐름입니다. flowchart LR accTitle: Flutter Native Clean Architecture 의존 흐름 accDescr: UI 요청이 ViewModel, UseCase, Repository를 거쳐 Remote 또는 Local DataSource로 전달되는 구조입니다. UI[\"Presentation · UI\"] --> VM[\"ViewModel\"] VM --> UC[\"UseCase\"] UC --> RP[\"Repository\"] RP --> DS{\"DataSource 선택\"} DS -->|\"서버 통신\"| RM[\"Remote DataSource\"] DS -->|\"승인된 로컬 데이터\"| LC[\"Local DataSource\"] Flutter Native 계층별 의존 흐름 다이어그램 설명: 사용자 동작은 UI에서 시작해 ViewModel의 화면 상태 처리, UseCase의 업무 규칙, Repository의 데이터 접근 추상화를 차례로 거칩니다. Repository는 요청 목적과 승인된 캐시 정책에 따라 Remote 또는 Local DataSource를 선택합니다. 이 구조에서는 UI가 서버나 로컬 저장소를 직접 참조하지 않으므로 각 계층을 독립적으로 교체하고 테스트할 수 있습니다. Native / WebView 역할 구분 원칙 Flutter는 앱 실행, 인증 조정, 보안 저장소와 기기 기능을 담당하고, 예약·결제·콘텐츠 등 서비스 업무 화면은 WebView에서 제공합니다. Native 기능이 필요한 경우에만 최소 범위의 승인된 JavaScript Bridge를 호출합니다. Bridge는 인증 토큰 전달 수단으로 사용하지 않습니다. flowchart LR accTitle: Native와 WebView의 역할 및 통신 경계 accDescr: 사용자는 WebView의 서비스 화면을 이용하며, 서버 데이터는 Backend에서 처리하고 기기 기능은 Bridge를 거쳐 Flutter Native와 OS에서 처리합니다. U([사용자]) --> W[\"WebView · 서비스 화면과 업무 로직\"] W -->|\"서버 데이터\"| S[\"Backend · 인증, 권한, 업무 데이터\"] W -->|\"기기 기능 요청\"| B[\"승인된 JavaScript Bridge\"] B --> N[\"Flutter Native · 인증 조정과 기기 기능\"] N --> O[\"OS / Device · 권한, 카메라, 위치, Push\"] O -.->|\"처리 결과\"| N N -.->|\"최소 결과\"| B B -.->|\"화면 반영\"| W Native–WebView 역할과 통신 경계 다이어그램 설명: 사용자는 WebView에서 서비스 화면과 업무 기능을 이용하고, 인증·권한·업무 데이터의 최종 처리는 Backend가 담당합니다. 카메라·위치·알림처럼 기기 접근이 필요한 요청만 승인된 Bridge를 거쳐 Flutter Native와 OS로 전달됩니다. 처리 후에는 화면에 필요한 최소 결과만 역방향으로 반환하며, 인증 토큰이나 불필요한 기기 정보는 Bridge를 통과시키지 않습니다. Native Flutter·OS·기기 기능 WebView 서비스 화면·웹 업무 로직 서버 인증 인증·세션·권한 검증 기능 영역 구현 영역 적용 기준 앱 실행·Splash Native 앱 초기화, 버전·점검 상태 확인 후 로컬 인증 값의 존재만 믿지 않고 채택한 인증 수단의 만료·폐기·계정 상태를 서버와 확인 로그인·로그아웃 WebView 서버 인증 승인된 로그인 흐름에 따라 Native와 WebView의 역할을 나눕니다. 서버 또는 인증 시스템이 자격 증명과 권한을 최종 검증하며, 인증 상태의 전달·저장·폐기는 확정된 계약을 따릅니다. 공항·라운지 안내 WebView 검색, 상세 정보, 이용 조건 및 BO 연계 콘텐츠 제공 라운지 예약·변경·취소 WebView 서비스 업무 로직과 서버 상태를 웹에서 통합 관리 제휴카드 조회·결제 WebView Native SDK 일반 웹 결제를 우선 적용하고 결제사 Native SDK가 필요한 단계만 Flutter에서 처리 이용권·예약 내역 WebView 서버 데이터를 기준으로 조회하고 웹에서 화면 상태 관리 이용권 QR 표시 WebView 서버에서 발급된 QR 또는 바코드를 웹 화면에 표시 이용권 등록용 QR 촬영 Native WebView Native에서 카메라 권한과 QR 스캔을 처리하고 스캔 결과만 WebView에 반환 현재 위치·주변 라운지 Native WebView Native에서 위치 권한과 좌표를 처리하고 웹에서 주변 공항·라운지 조회 사진 선택·촬영 Native WebView Native가 기기 앨범·카메라와 임시 파일을 처리하고 WebView가 업로드 요청과 서비스 데이터 연결을 담당 Push·Deep Link Native WebView Native에서 필수 필드·형식·만료·로그인 상태를 확인하고 허용된 Route만 WebView에 표시. 서명을 채택한 경우 승인된 정책으로 검증하며 임의 URL은 직접 로드하지 않음 파일 다운로드·열기 Native WebView WebView가 다운로드를 요청하고 Native가 검증·저장·열기를 수행하는 구성을 권장합니다. 최종 구현 범위는 TBD 공지·이벤트·배너 WebView BO에서 등록한 콘텐츠를 앱 업데이트 없이 반영 점검·강제 업데이트 Native WebView 장애 상황에서도 점검 안내와 스토어 이동 제공 권한·앱 설정 Native 카메라·위치·알림 권한 및 OS 설정 화면 연결 사용자 화면과 서비스 정책은 WebView에 구현하고, 기기 권한·OS 연동이 필요한 기능만 Native로 분리합니다. 비밀번호, 세션 식별자, 카드번호와 인증번호는 URL, WebView JavaScript, Bridge, 로그에 노출하지 않습니다.",
    "url": "./../guides/app/app.html#section-1"
  },
  {
    "document": "APP 개발 표준",
    "section": "BO에서 제공하는 APP 관리 기능",
    "excerpt": "아래 기능은 BO 범위 후보입니다. 실제 제공 기능과 우선순위, 운영 권한은 서비스·운영·개발 담당자가 합의한 뒤 확정합니다. TBD 기능 설명 공지 팝업 BO에서 등록·수정·삭제하고 앱 실행 시 또는 특정 화면에서 노출 이벤트 팝업 기간 설정, 이미지 및 링크 관리 인트로 이미지 및 노출 기간 관리 점검 모드 BO에서 점검 여부 설정 시 앱에서 점검 화면 표시 업데이트 안내 최신 버전 안내…",
    "content": "6. BO에서 제공하는 APP 관리 기능 아래 기능은 BO 범위 후보입니다. 실제 제공 기능과 우선순위, 운영 권한은 서비스·운영·개발 담당자가 합의한 뒤 확정합니다. TBD 기능 설명 공지 팝업 BO에서 등록·수정·삭제하고 앱 실행 시 또는 특정 화면에서 노출 이벤트 팝업 기간 설정, 이미지 및 링크 관리 인트로 이미지 및 노출 기간 관리 점검 모드 BO에서 점검 여부 설정 시 앱에서 점검 화면 표시 업데이트 안내 최신 버전 안내 팝업 강제 업데이트 최소 지원 버전 미만은 앱 사용 차단 후 스토어로 이동 앱 버전 관리 현재 버전, 최소 지원 버전, 최신 버전 관리 배너 관리 메인 배너, 링크, 노출 기간 관리 공지사항 BO에서 등록한 공지 조회 BO 보안 및 검수 기준 관리자 계정은 역할 기반 최소 권한, MFA와 세션 만료를 적용합니다. 접근 IP 제한은 운영 환경과 위협 모델을 검토해 적용 여부를 결정합니다. 등록·수정·삭제·승인·배포 이력을 관리자와 변경 전후 값 기준으로 감사 기록합니다. HTML 입력은 원칙적으로 금지하고 불가피한 경우 서버 Allowlist Sanitizer를 적용합니다. 이미지와 파일은 MIME·확장자·크기·악성코드를 검사합니다. 링크는 승인된 HTTPS Origin과 Path만 허용하고 앱에서는 다시 Route Allowlist를 검증합니다. javascript: , data: , 임의 Custom Scheme은 차단합니다. 운영 반영 전 미리보기를 제공하고, 승인·Rollback 절차는 변경 영향도와 운영 체계를 기준으로 확정합니다. TBD",
    "url": "./../guides/app/app.html#section-6"
  },
  {
    "document": "APP 개발 표준",
    "section": "Build Environment",
    "excerpt": "Flutter Flavor dev · qa · prod 는 기본 예시입니다. 실제 환경 수와 이름, 승격 순서는 인프라·릴리스 정책과 함께 확정합니다. TBD 환경 설명 qa 검증 dev 개발 prod 운영 환경별 관리 항목 API Endpoint, 인증 Issuer·Client ID·Redirect URI와 WebView Origin Allowlist Firebase Project, Pus…",
    "content": "12. Build Environment Flutter Flavor dev · qa · prod 는 기본 예시입니다. 실제 환경 수와 이름, 승격 순서는 인프라·릴리스 정책과 함께 확정합니다. TBD 환경 설명 qa 검증 dev 개발 prod 운영 환경별 관리 항목 API Endpoint, 인증 Issuer·Client ID·Redirect URI와 WebView Origin Allowlist Firebase Project, Push Sender와 Crash 수집 정책 App Name 및 App Icon Signing Key와 배포 자격 증명은 CI Secret Manager에서 분리 관리 개발·QA 앱은 운영 API·운영 인증 Client·운영 Push Topic 접근 금지 운영 빌드 Debug, WebView Inspection, Test 계정과 Mock Endpoint 비활성화 웹 애플리케이션 환경 웹사이트, WebView, 카드사 인앱과 백오피스는 애플리케이션별로 dev · qa · prod 환경과 배포 권한을 분리합니다. Host, Cookie 범위, CORS·CSP, 인증 Redirect URI와 Origin Allowlist는 서비스·제휴사·환경별 승인 값으로 관리합니다. 브라우저에 노출되는 공개 설정과 서버·CI에서만 사용하는 Secret을 구분하고, Artifact·환경 설정·승인 이력을 애플리케이션별로 추적합니다.",
    "url": "./../guides/app/app.html#section-12"
  },
  {
    "document": "APP 개발 표준",
    "section": "CI/CD",
    "excerpt": "목적 Flutter 앱은 Codemagic 을 활용하여 빌드, 테스트 및 배포 과정을 자동화합니다. 웹사이트, WebView, 카드사 인앱과 백오피스는 각 애플리케이션의 독립 Pipeline으로 배포하며, 배포 플랫폼과 도구는 인프라 환경을 확인한 뒤 확정합니다. TBD flowchart TD accTitle: Flutter APP CI 및 CD 배포 흐름 accDescr: 소스 변경이 Co…",
    "content": "7. CI/CD 목적 Flutter 앱은 Codemagic 을 활용하여 빌드, 테스트 및 배포 과정을 자동화합니다. 웹사이트, WebView, 카드사 인앱과 백오피스는 각 애플리케이션의 독립 Pipeline으로 배포하며, 배포 플랫폼과 도구는 인프라 환경을 확인한 뒤 확정합니다. TBD flowchart TD accTitle: Flutter APP CI 및 CD 배포 흐름 accDescr: 소스 변경이 Codemagic의 환경 구성, 정적 분석, 테스트와 보안 검사를 거쳐 Android와 iOS 빌드 및 QA 배포 후 수동 승인으로 운영에 배포되는 흐름입니다. C([소스 변경]) --> CI[\"Codemagic CI\"] CI --> Q[\"Dependency 설치 · Code Generation · 품질 검사\"] Q --> G{\"품질 기준 통과?\"} G -->|\"아니요\"| F[\"파이프라인 중단 · 수정\"] F -.-> C G -->|\"예\"| B[\"Android / iOS Build\"] B --> QA[\"QA · App Distribution · TestFlight\"] QA --> A{\"운영 승인?\"} A -->|\"거절\"| F A -->|\"승인\"| P[\"Production · 수동 배포\"] Codemagic 기반 Flutter APP CI/CD 흐름 다이어그램 설명: Pull Request가 생성되면 Codemagic이 Lint, Test, 보안 점검과 Build를 순서대로 실행합니다. 실패하면 개발 단계로 돌아가 수정하고, 모두 통과하면 검증된 Artifact를 TestFlight 또는 Internal Track에 배포하여 QA를 진행합니다. QA와 운영 승인을 모두 통과한 동일 Artifact만 Production에 수동 배포함으로써 검증되지 않은 빌드의 운영 반영을 방지합니다. Flutter CI (Continuous Integration) 소스 코드 변경 시 자동으로 빌드 및 검증을 수행하여 코드 품질을 유지합니다. 수행 항목 승인된 Flutter SDK 환경 구성 및 Lock File 기반 Dependency 설치 Code Generation 및 Static Analysis Unit·Widget·Integration 및 인증·Bridge 보안 회귀 테스트 SAST, Dependency 취약점, License 및 Secret Scan Android/iOS Build 검증 내용 Build 성공 여부 정적 분석 및 테스트 결과 코드 생성 오류 여부 금지된 Cleartext URL, 임의 WebView Origin과 운영 Debug 설정 여부 서명 파일·Token·환경 Secret의 저장소 및 Build Log 노출 여부 Flutter CD (Continuous Delivery / Deployment) QA 환경은 검증 완료 후 자동 배포할 수 있으며, 운영 배포는 승인된 Artifact와 변경 이력, 보안 점검 결과를 기준으로 수동 승인을 거칩니다. QA QA Flavor Build Firebase App Distribution 배포 TestFlight 배포 Production Production Flavor Build 서명·권한·난독화·Debug 비활성화 및 Artifact 무결성 검증 승인자 분리, 단계적 배포와 즉시 Rollback 계획 확인 Google Play Console 배포 App Store Connect(TestFlight/App Store) 배포 저장소 CI/CD 기준 변경 경로와 의존 관계를 기준으로 영향받는 애플리케이션과 공통 패키지의 Lint·Test·Build만 실행합니다. 공통 계약이나 패키지를 변경하면 이를 사용하는 모든 애플리케이션의 회귀 테스트를 필수로 수행합니다. 웹 애플리케이션은 Pipeline, Artifact, 환경 설정, 승인과 Rollback 이력을 각각 분리하고, 동일 Commit에서 생성된 결과도 애플리케이션별로 식별할 수 있어야 합니다.",
    "url": "./../guides/app/app.html#section-7"
  },
  {
    "document": "APP 개발 표준",
    "section": "Coding Convention",
    "excerpt": "네이밍 대상 규칙 예시 Class PascalCase UserProfile Method lowerCamelCase loadUserProfile() Variable lowerCamelCase userProfile Constant lowerCamelCase defaultTimeout 개발 규칙 Effective Dart 준수 Null Safety 적용 const 적극 사용 Widget 단일 책임…",
    "content": "8. Coding Convention 네이밍 대상 규칙 예시 Class PascalCase UserProfile Method lowerCamelCase loadUserProfile() Variable lowerCamelCase userProfile Constant lowerCamelCase defaultTimeout 개발 규칙 Effective Dart 준수 Null Safety 적용 const 적극 사용 Widget 단일 책임 원칙 적용 공통 Widget 재사용 외부 입력은 타입·길이·범위·형식을 경계 계층에서 검증 dynamic , 강제 형변환과 Null 강제 해제는 경계 코드에서 지양 Repository Interface는 Domain에, 구현체와 DataSource는 Data에 배치 Token·Cookie·인증 Code·개인정보·카드정보를 로그와 예외 메시지에 포함 금지 보안 관련 상수와 허용 목록은 단일 정책 모듈에서 관리하고 테스트로 고정",
    "url": "./../guides/app/app.html#section-8"
  },
  {
    "document": "APP 개발 표준",
    "section": "Dependencies",
    "excerpt": "목적 검증된 오픈소스 라이브러리를 활용하되 버전은 Lock File로 고정하고, 자동 취약점 점검과 정기 업데이트 절차를 적용합니다. 아래 항목은 확정된 기술 스택이며, 정확한 패키지 버전은 Web Workspace와 Flutter 등 각 Toolchain의 Lock File 및 승인된 기준 버전을 따릅니다. 분류 Library 용도 State flutter_riverpod 상태 관리 Net…",
    "content": "2. Dependencies 목적 검증된 오픈소스 라이브러리를 활용하되 버전은 Lock File로 고정하고, 자동 취약점 점검과 정기 업데이트 절차를 적용합니다. 아래 항목은 확정된 기술 스택이며, 정확한 패키지 버전은 Web Workspace와 Flutter 등 각 Toolchain의 Lock File 및 승인된 기준 버전을 따릅니다. 분류 Library 용도 State flutter_riverpod 상태 관리 Network dio REST API Navigation go_router 라우팅 Immutable Model freezed Model 생성 JSON json_serializable JSON Parsing Secure Storage flutter_secure_storage 민감한 Native 전용 값을 저장해야 할 때만 사용. WebView 로그인 자격 증명과 세션 정보 저장 금지 Logger logger 개인정보·토큰을 제거한 구조화 로그. 운영 Stack Trace 출력 금지 Local Storage shared_preferences 비민감 설정값 저장. 토큰·세션·개인정보 저장 금지 SQLite sqflite 오프라인 범위를 승인한 경우에만 비민감 데이터·캐시 저장. 사용자 전환 시 정리 Permission permission_handler 권한 관리 통합 Crash Firebase Crashlytics 개인정보·토큰을 제거한 Crash 수집 및 분석 WebView 서비스 기술 스택 아래 기술은 WebView에서 제공하는 예약·결제·공항 및 라운지 안내 등 서비스 영역에 적용하는 확정 기술 스택입니다. 버전은 Lock File로 고정하고 호환성과 보안 업데이트를 검증한 뒤 변경합니다. 분류 기술 적용 범위 UI Framework React 19.x 컴포넌트 기반 사용자 인터페이스 Web Framework Next.js 16.x 라우팅, 렌더링 및 웹 애플리케이션 구성 Language TypeScript 6.x 정적 타입 기반 개발 Style Tailwind CSS 4.x 디자인 토큰 및 UI 스타일 구성 Server State TanStack Query 5.x API 데이터 조회, 캐시 및 동기화 Client State Zustand 전역 UI 및 클라이언트 상태 관리 Form React Hook Form 7.x 폼 상태와 유효성 검사 연동 UI Component shadcn/ui 공통 컴포넌트 또는 프로젝트 지정 UI 라이브러리",
    "url": "./../guides/app/app.html#section-2"
  },
  {
    "document": "APP 개발 표준",
    "section": "Error Handling",
    "excerpt": "API Dio Interceptor에서 Trace ID, Timeout과 표준 오류 형식을 공통 처리 401의 비로그인·만료·갱신 실패 의미를 API 계약에 따라 구분하고 승인된 인증 흐름으로 이동 403은 권한 부족으로 처리하며 세션 갱신을 반복하지 않음 429는 Retry-After 를 존중하고 Exponential Backoff 적용 조회 요청만 제한적으로 자동 재시도하고 Mutatio…",
    "content": "10. Error Handling API Dio Interceptor에서 Trace ID, Timeout과 표준 오류 형식을 공통 처리 401의 비로그인·만료·갱신 실패 의미를 API 계약에 따라 구분하고 승인된 인증 흐름으로 이동 403은 권한 부족으로 처리하며 세션 갱신을 반복하지 않음 429는 Retry-After 를 존중하고 Exponential Backoff 적용 조회 요청만 제한적으로 자동 재시도하고 Mutation은 Idempotency 보장 시에만 재시도 서버 오류 원문과 Stack Trace를 사용자 또는 WebView에 노출하지 않음 UI 사용자 친화적인 오류 메시지 제공 오프라인·Timeout·권한 거부·사용자 취소·인증 만료를 구분 안전한 작업만 명시적인 사용자 동작으로 재시도 중복 Tap과 중복 결제를 방지하고 처리 중 상태를 명확히 표시 진단용 Trace ID만 제공하고 내부 Endpoint·Payload·예외 내용은 숨김 Bridge 승인된 오류 코드를 사용하고 알 수 없는 예외는 INTERNAL_ERROR 로 변환 Timeout 후 도착한 응답은 폐기하고 완료된 Request ID를 다시 실행하지 않음 오류 로그에는 Method 분류와 Trace ID만 남기고 Params 원문은 기록하지 않음",
    "url": "./../guides/app/app.html#section-10"
  },
  {
    "document": "APP 개발 표준",
    "section": "Git Strategy",
    "excerpt": "아래 Branch 구성은 Git Flow 기반의 EXAMPLE 입니다. 릴리스 빈도와 팀 규모에 따라 GitHub Flow 또는 Trunk-based 방식을 함께 비교하고 표준을 확정합니다. TBD Branch 설명 main 운영 develop 개발 feature/* 기능 개발 release/* QA hotfix/* 긴급 수정 Merge 기준 main 과 develop 직접 Push 금지 및…",
    "content": "9. Git Strategy 아래 Branch 구성은 Git Flow 기반의 EXAMPLE 입니다. 릴리스 빈도와 팀 규모에 따라 GitHub Flow 또는 Trunk-based 방식을 함께 비교하고 표준을 확정합니다. TBD Branch 설명 main 운영 develop 개발 feature/* 기능 개발 release/* QA hotfix/* 긴급 수정 Merge 기준 main 과 develop 직접 Push 금지 및 Branch 보호 적용 Pull Request 검토, 필수 CI, 보안 점검과 승인 완료 후 Merge 운영 배포는 <app-name>/v<version> 형식의 앱별 Tag와 Release Note를 남기고 해당 Artifact와 연결 Secret 노출 Commit은 삭제만 하지 않고 즉시 자격 증명을 폐기·교체",
    "url": "./../guides/app/app.html#section-9"
  },
  {
    "document": "APP 개발 표준",
    "section": "Native 기능 연동 범위",
    "excerpt": "이 절은 WebView가 요청하는 기기 기능의 Bridge 연동 범위를 설명합니다. 권한 요청과 OS 연동은 Flutter에서 처리하고 업무 결과만 WebView로 반환합니다. 인증·세션은 3절의 별도 흐름으로 처리하며 Bridge Method로 제공하거나 자격 증명을 Bridge로 전달하지 않습니다. 기능 Native 처리 WebView 처리 QR 스캔 카메라 권한, 스캐너 화면, QR 문…",
    "content": "5. Native 기능 연동 범위 이 절은 WebView가 요청하는 기기 기능의 Bridge 연동 범위를 설명합니다. 권한 요청과 OS 연동은 Flutter에서 처리하고 업무 결과만 WebView로 반환합니다. 인증·세션은 3절의 별도 흐름으로 처리하며 Bridge Method로 제공하거나 자격 증명을 Bridge로 전달하지 않습니다. 기능 Native 처리 WebView 처리 QR 스캔 카메라 권한, 스캐너 화면, QR 문자열 추출 이용권 검증·등록 및 처리 결과 표시 위치 권한 요청과 현재 좌표 획득 주변 공항·라운지 조회 및 안내 사진 카메라·앨범 실행과 임시 파일 생성 업로드 요청과 서비스 데이터 연결 Push 기기 Token 관리, Payload 필수 필드·만료·Route·로그인 상태 검증. 서명을 채택한 경우 승인된 정책으로 추가 검증 Native가 승인한 내부 Route와 허용 파라미터만 표시 파일 다운로드 허용 Origin·MIME·크기·파일명 검증, 안전한 임시 저장, 공유 및 외부 앱 실행 전 사용자 확인 서버에서 단기 다운로드 권한 발급 및 다운로드 상태 표시 결제 SDK 결제사가 Native SDK를 요구하는 경우 사용자 Gesture 후 실행 서버에서 결제 요청 생성, Idempotency Key 적용, 서버 Callback 또는 조회 API로 최종 완료 검증 후 예약 결과 표시",
    "url": "./../guides/app/app.html#section-5"
  },
  {
    "document": "APP 개발 표준",
    "section": "Project Structure",
    "excerpt": "WebView Front-end source와 설정은 apps/app-webview , 구현과 검토 문서는 docs 에서 관리합니다. API와 Bridge는 승인된 계약과 실제 사용처를 기준으로 앱 내부에 연결합니다. 저장소 구조 <repository-root>/ ├── AGENTS.md # 저장소 전체 구현 지침 ├── apps/ │ └── app-webview/ # 앱 내 Next.js…",
    "content": "13. Project Structure WebView Front-end source와 설정은 apps/app-webview , 구현과 검토 문서는 docs 에서 관리합니다. API와 Bridge는 승인된 계약과 실제 사용처를 기준으로 앱 내부에 연결합니다. 저장소 구조 <repository-root>/ ├── AGENTS.md # 저장소 전체 구현 지침 ├── apps/ │ └── app-webview/ # 앱 내 Next.js WebView │ ├── AGENTS.md # 앱 전용 구현 지침 │ ├── .storybook/ # Storybook 설정 │ └── src/ # 애플리케이션 source ├── docs/ # 상세 가이드와 AI 작업 기준 └── README.md 코드 요약: 애플리케이션 코드는 실제 사용처 가까이에 두고 변경 범위에 따라 Lint·Test·Storybook·Build를 수행합니다. 존재하지 않는 package, 공통 영역과 계약 구조는 추측하지 않습니다. Next.js WebView · apps/app-webview src/ # Next.js WebView 애플리케이션 소스 Root ├── app/ # App Router의 Route, Layout과 전역 Provider 구성 │ ├── <route>/ # URL별 Page, Loading, Error 등 Route Segment │ ├── globals.css # Tailwind CSS 진입점과 최소 전역 스타일 │ ├── layout.tsx # 공통 문서 구조와 Root Layout │ └── providers.tsx # TanStack Query 등 Client Provider 조립 ├── components/ # 여러 Route와 Feature에서 재사용하는 UI │ ├── common/ # WebView 공통 Layout과 조합형 컴포넌트 │ └── ui/ # shadcn/ui 원형과 공통 UI 컴포넌트 ├── features/ # 예약, 라운지 등 업무 기능별 Module 모음 │ └── <feature>/ # 하나의 사용자 업무 흐름을 구성하는 기능 단위 │ ├── api/ # 기능별 Query, Mutation과 API 호출 정의 │ ├── components/ # 해당 Feature 내부에서만 사용하는 UI │ ├── forms/ # Form Schema, Validation과 입력 변환 │ ├── hooks/ # 기능별 TanStack Query 및 상태 연동 Hook │ └── types/ # 기능 전용 Type과 View Model 정의 ├── lib/ # Framework·서비스 연동을 위한 공통 Adapter │ ├── api/ # 공통 API Client의 환경·인증·오류 정책 연결 │ ├── bridge/ # Native Bridge 요청·응답 검증과 호출 Adapter │ └── utils/ # 기능에 종속되지 않는 순수 Utility 함수 └── stores/ # Zustand 기반 전역 UI·클라이언트 상태 코드 요약: Next.js App Router는 app/ 에서 관리하고 Tailwind CSS 4의 전역 진입점은 app/globals.css 에 둡니다. components/ui 에는 shadcn/ui 원형과 공통 컴포넌트를 둡니다. lib/api 는 승인된 API 계약을 환경·인증 정책과 연결하고, features/*/api 와 hooks 에는 기능별 TanStack Query 연동을 배치합니다. stores 에는 Zustand 상태를 둡니다. 앱 내부 구성 기준 영역 Directory 설명 WebView apps/app-webview/src/app Next.js Route, Layout, Provider와 Tailwind 전역 스타일 WebView apps/app-webview/src/components shadcn/ui 원형과 공통 WebView UI 컴포넌트 WebView apps/app-webview/src/features 서비스 기능별 UI, React Hook Form, API, TanStack Query Hook과 Type WebView apps/app-webview/src/lib/bridge 공통 Bridge 계약을 사용하는 WebView 전용 검증과 호출 Adapter WebView apps/app-webview/src/stores Zustand 기반 전역 UI·클라이언트 상태 저장소 운영 및 배포 기준 각 애플리케이션은 배포 Pipeline, 환경 변수, Version과 Rollback 단위를 분리하며 관계없는 영역을 항상 함께 배포하지 않습니다. 변경된 애플리케이션과 해당 애플리케이션이 사용하는 공통 패키지만 빌드·테스트하되, 공통 패키지 변경 시 모든 영향 범위의 회귀 테스트를 수행합니다. API Endpoint, 인증 Client, WebView Origin Allowlist와 배포 Secret은 서비스·제휴사·환경별로 분리하고 저장소에 포함하지 않습니다. 배포 시점이 다른 Native 앱과 WebView가 함께 동작할 수 있도록 Bridge와 API 계약은 하위 호환성을 유지하고, Breaking Change는 Version을 올려 단계적으로 전환합니다. 카드사 인앱과 백오피스의 인증·권한·보안 정책은 각 채널에서 구현하며, 공통화가 검증된 UI·Type·Utility만 공유 패키지로 이동합니다. APP 개발 표준",
    "url": "./../guides/app/app.html#section-13"
  },
  {
    "document": "APP 개발 표준",
    "section": "Security",
    "excerpt": "인증 및 세션 승인된 인증 시스템이 자격 증명·계정 상태와 권한을 최종 검증 Cookie 기반 세션을 채택하면 HttpOnly·Secure를 적용하고 SameSite·Domain·Path는 사이트와 Redirect 구조에 맞춰 결정 채택한 인증 상태의 갱신·폐기와 완전한 로그아웃을 지원하고 사용자 전환 시 실제 사용한 Cookie, token과 관련 WebView 데이터 정리 Cookie 기…",
    "content": "11. Security 인증 및 세션 승인된 인증 시스템이 자격 증명·계정 상태와 권한을 최종 검증 Cookie 기반 세션을 채택하면 HttpOnly·Secure를 적용하고 SameSite·Domain·Path는 사이트와 Redirect 구조에 맞춰 결정 채택한 인증 상태의 갱신·폐기와 완전한 로그아웃을 지원하고 사용자 전환 시 실제 사용한 Cookie, token과 관련 WebView 데이터 정리 Cookie 기반 인증의 상태 변경 요청은 CSRF Token과 Origin/Referer 검증 등 승인된 CSRF 방어 적용 Native와 WebView에 인증 상태가 함께 존재하면 서버 수명주기와 로그아웃을 하나의 기준으로 통합 비밀번호 변경, 계정 복구, 고위험 결제 등 중요 작업 전 재인증 통신 및 WebView TLS 기반 HTTPS만 사용하고 Android Cleartext Traffic 비활성화 Scheme·Host·Port로 구성된 정확한 Origin Allowlist와 허용 Path 정책 적용 서버에서 CSP, HSTS, 안전한 Cookie와 민감 응답 no-store 적용 Bridge Origin·Main Frame·입력 Schema·권한·Rate Limit·Replay 검증 불필요한 File/Content Access와 운영 WebView Debugging 비활성화 데이터 및 운영 환경별 Secret 분리 및 소스 코드·앱 Bundle·Web JavaScript 하드코딩 금지 Signing Key와 CI Secret은 전용 Secret Manager에서 최소 권한으로 관리 개인정보 최소 수집, 보존 기간과 삭제 정책 적용 및 로그 Redaction Root/Jailbreak 탐지는 위협 모델상 필요한 경우 보조 신호로만 사용하고 서버 권한 검증을 대체하지 않음 정기 위협 모델링, Dependency 점검, 침투 테스트와 사고 대응 절차 운영 참고 보안 기준 OWASP Mobile Application Security Android WebView Unsafe URI Loading",
    "url": "./../guides/app/app.html#section-11"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "기본 구현",
    "excerpt": "WebViewController 에서 동작을 설정한 뒤 WebViewWidget 에 전달합니다. 아래 URL과 이동 정책은 실제 프로젝트 계약으로 교체해야 합니다. import 'package:flutter/material.dart' ; import 'package:webview_flutter/webview_flutter.dart' ; class WebViewPage extends State…",
    "content": "9. 기본 구현 WebViewController 에서 동작을 설정한 뒤 WebViewWidget 에 전달합니다. 아래 URL과 이동 정책은 실제 프로젝트 계약으로 교체해야 합니다. import 'package:flutter/material.dart' ; import 'package:webview_flutter/webview_flutter.dart' ; class WebViewPage extends StatefulWidget { const WebViewPage ({ super .key}); @override State < WebViewPage > createState () => _WebViewPageState (); } class _WebViewPageState extends State < WebViewPage > { late final WebViewController _controller; @override void initState () { super .initState(); _controller = WebViewController () ..setJavaScriptMode( JavaScriptMode .unrestricted) ..setNavigationDelegate( NavigationDelegate ( onPageStarted: ( String url) {}, onPageFinished: ( String url) {}, onHttpError: ( HttpResponseError error) {}, onWebResourceError: ( WebResourceError error) {}, onNavigationRequest: ( NavigationRequest request) { final Uri ? uri = Uri .tryParse(request.url); if (uri == null || uri.scheme != 'https' ) { return NavigationDecision .prevent; } return NavigationDecision .navigate; }, ), ) ..loadRequest( Uri .parse( 'https://example.com' )); } @override Widget build ( BuildContext context) { return Scaffold ( body: SafeArea ( child: WebViewWidget (controller: _controller), ), ); } } JavaScript는 서비스 동작에 필요한 경우에만 활성화합니다. 신뢰할 수 없는 외부 페이지를 표시하면서 JavaScript를 무조건 허용하지 않습니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-9"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "디버깅과 호환성 검증",
    "excerpt": "디버깅 Android는 Chrome DevTools의 원격 디버깅, iOS는 Safari Web Inspector로 WebView 콘텐츠를 확인합니다. WebView 디버깅 기능은 개발 빌드에서만 활성화하고 운영 빌드에서는 비활성화합니다. 플랫폼 검증 환경 플랫폼 필수 검증 환경 주요 확인 항목 Android 주요 국가의 Android SDK 24 이상에서 구형·대표·최신 System Web…",
    "content": "12. 디버깅과 호환성 검증 디버깅 Android는 Chrome DevTools의 원격 디버깅, iOS는 Safari Web Inspector로 WebView 콘텐츠를 확인합니다. WebView 디버깅 기능은 개발 빌드에서만 활성화하고 운영 빌드에서는 비활성화합니다. 플랫폼 검증 환경 플랫폼 필수 검증 환경 주요 확인 항목 Android 주요 국가의 Android SDK 24 이상에서 구형·대표·최신 System WebView 화면 복귀, 키보드, 권한, 파일 선택, Tailwind 렌더링과 엔진별 차이 iOS iOS 15와 최신 iOS의 WKWebView 화면 복귀, 키보드, 권한, 파일 선택과 WebKit 차이 공통 검증 항목 페이지 로딩, 재시도와 네트워크 단절·지연 로그인, 로그아웃, 쿠키와 세션 유지 JavaScript Bridge와 허용되지 않은 요청 차단 외부 URL, Custom Scheme와 뒤로 가기 HTTP·SSL 오류와 사용자 안내 Safe Area, 화면 회전, 접근성 글자 크기와 다크 모드 메모리 사용량과 화면 종료 후 리소스 해제 한국·중국·일본·미국의 주요 단말과 중국 제조사별 WebView 차이 선택한 최신 Tailwind Utility의 기능 저하와 대체 표현",
    "url": "./../guides/platform/webview/webView_guide.html#section-12"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "문서 목적과 적용 범위",
    "excerpt": "이 문서는 Flutter의 공식 WebView 플러그인인 webview_flutter 를 사용하는 Android 및 iOS 애플리케이션에 적용합니다. WebView 시작 URL, 인증 방식, JavaScript Bridge 계약, 허용 도메인과 외부 앱 호출 정책은 프로젝트 담당자가 합의한 뒤 확정합니다. WebView의 개념과 담당 영역을 먼저 확인하려면 모바일 앱 WebView 개요 를…",
    "content": "1. 문서 목적과 적용 범위 이 문서는 Flutter의 공식 WebView 플러그인인 webview_flutter 를 사용하는 Android 및 iOS 애플리케이션에 적용합니다. WebView 시작 URL, 인증 방식, JavaScript Bridge 계약, 허용 도메인과 외부 앱 호출 정책은 프로젝트 담당자가 합의한 뒤 확정합니다. WebView의 개념과 담당 영역을 먼저 확인하려면 모바일 앱 WebView 개요 를 참고합니다. Native와 WebView의 역할, 인증·세션 및 Bridge의 상위 기준은 APP 개발 표준 을 함께 적용합니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-1"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "세션, 오류와 보안",
    "excerpt": "쿠키와 세션 로그인 쿠키의 생성 주체, Domain·Path·Secure·SameSite 속성, 로그아웃 시 삭제 범위와 앱 재실행 시 세션 유지 정책을 사전에 합의합니다. 인증 토큰은 URL Query Parameter에 포함하지 않습니다. 오류 상태 최초 로딩과 정상 표시 네트워크 연결 실패와 HTTP 오류 SSL 또는 인증서 오류 허용되지 않은 URL 이동 세션 만료와 콘텐츠 렌더링 실…",
    "content": "11. 세션, 오류와 보안 쿠키와 세션 로그인 쿠키의 생성 주체, Domain·Path·Secure·SameSite 속성, 로그아웃 시 삭제 범위와 앱 재실행 시 세션 유지 정책을 사전에 합의합니다. 인증 토큰은 URL Query Parameter에 포함하지 않습니다. 오류 상태 최초 로딩과 정상 표시 네트워크 연결 실패와 HTTP 오류 SSL 또는 인증서 오류 허용되지 않은 URL 이동 세션 만료와 콘텐츠 렌더링 실패 오류가 발생해도 빈 화면만 표시하지 않고 오류 안내, 재시도와 화면 종료 방법을 제공합니다. SSL 인증서 오류를 무시하고 연결을 계속하지 않습니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-11"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "우선 결정 항목",
    "excerpt": "다음 항목은 실제 애플리케이션 요구사항과 담당자 합의 후 확정합니다. 항목 결정할 내용 SDK와 패키지 Flutter·Dart 버전과 고정할 webview_flutter 버전 접속 범위 시작 URL, 허용 도메인과 외부 앱 호출 정책 인증 쿠키와 세션 생성·유지·삭제 정책 Bridge 채널명, 요청·응답·오류 계약과 허용 기능 기기 기능 파일, 카메라, 위치, 마이크와 다운로드 범위 사용자…",
    "content": "13. 우선 결정 항목 다음 항목은 실제 애플리케이션 요구사항과 담당자 합의 후 확정합니다. 항목 결정할 내용 SDK와 패키지 Flutter·Dart 버전과 고정할 webview_flutter 버전 접속 범위 시작 URL, 허용 도메인과 외부 앱 호출 정책 인증 쿠키와 세션 생성·유지·삭제 정책 Bridge 채널명, 요청·응답·오류 계약과 허용 기능 기기 기능 파일, 카메라, 위치, 마이크와 다운로드 범위 사용자 경험 로딩, 오류, 재시도, 세션 만료와 종료 화면 지원 범위 핵심 국가별 허용할 미지원 사용자 비율과 기준 재검토 주기 Flutter WebView 설정 가이드",
    "url": "./../guides/platform/webview/webView_guide.html#section-13"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "지원 환경과 WebView 엔진",
    "excerpt": "webview_flutter 는 Chrome 또는 Safari 앱을 직접 실행하지 않고 운영체제가 제공하는 WebView 엔진을 Flutter 화면 안에 표시합니다. 구분 최소 지원 환경 사용 엔진 적용 기준 Flutter 프로젝트 승인 버전 해당 없음 SDK 버전과 지원 플랫폼 범위를 함께 고정 Dart 3.10 이상 해당 없음 webview_flutter 4.14.1 요구사항 Androi…",
    "content": "3. 지원 환경과 WebView 엔진 webview_flutter 는 Chrome 또는 Safari 앱을 직접 실행하지 않고 운영체제가 제공하는 WebView 엔진을 Flutter 화면 안에 표시합니다. 구분 최소 지원 환경 사용 엔진 적용 기준 Flutter 프로젝트 승인 버전 해당 없음 SDK 버전과 지원 플랫폼 범위를 함께 고정 Dart 3.10 이상 해당 없음 webview_flutter 4.14.1 요구사항 Android Android SDK 24 이상 Android System WebView 지원 대상 System WebView에서 프로젝트 사용 CSS를 검증 iOS iOS 15 이상 WKWebView iOS 15 WKWebView에서 프로젝트 사용 CSS와 핵심 기능을 검증 플러그인 최소 조건과 프로젝트 기준 webview_flutter 4.14.1 의 패키지 문서에는 iOS 13 이상으로 표시되어 있고 최신 Flutter SDK의 공식 지원 범위는 iOS 15 이상입니다. 이 프로젝트는 Tailwind CSS v4를 유지하면서 iOS 15 이상을 최소 지원 버전으로 설정합니다. Tailwind CSS v4의 공식 완전 호환 기준보다 낮은 환경에서는 프로젝트가 실제 사용하는 CSS와 Utility를 기준으로 검증하며, 지원되지 않는 최신 CSS 기능은 사용하지 않거나 대체 표현을 제공합니다. Flutter SDK가 현재 지원하는 운영체제 범위는 Flutter 공식 지원 플랫폼 문서 를 기준으로 확인합니다. 프로젝트 설정값 설정 항목 적용값 설정 위치 확인 사항 Android minSdk 24 이상 android/app/build.gradle.kts 기존 값이 더 높으면 유지 iOS Deployment Target 15 이상 Xcode Runner Target Podfile 설정과 동일하게 유지 iOS Platform 15 이상 ios/Podfile Xcode Deployment Target과 동일하게 유지 WebView 패키지 4.14.1 pubspec.yaml pubspec.lock 에서 실제 선택 버전 확인",
    "url": "./../guides/platform/webview/webView_guide.html#section-3"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "패키지 선정과 버전 기준",
    "excerpt": "Flutter 공식 플러그인인 webview_flutter 를 사용합니다. 문서 작성 시 확인한 최신 안정 버전은 4.14.1 입니다. dependencies : webview_flutter : ^4.14.1 최신 버전을 자동으로 사용하는 규칙으로 해석하지 않습니다. 실제 프로젝트의 Flutter·Dart SDK와 호환성을 확인하고 승인된 버전을 pubspec.lock 에 고정합니다. 패키지…",
    "content": "2. 패키지 선정과 버전 기준 Flutter 공식 플러그인인 webview_flutter 를 사용합니다. 문서 작성 시 확인한 최신 안정 버전은 4.14.1 입니다. dependencies : webview_flutter : ^4.14.1 최신 버전을 자동으로 사용하는 규칙으로 해석하지 않습니다. 실제 프로젝트의 Flutter·Dart SDK와 호환성을 확인하고 승인된 버전을 pubspec.lock 에 고정합니다. 패키지 버전과 플랫폼별 요구사항은 webview_flutter 공식 패키지 문서 와 공식 버전 목록 에서 확인합니다. 패키지 역할 추가 방법 webview_flutter 공통 WebView Controller와 Widget API 기본 의존성으로 추가 webview_flutter_android Android 전용 WebView 구현과 기능 기본적으로 자동 포함, 전용 API를 직접 Import할 때 명시 webview_flutter_wkwebview iOS 전용 WKWebView 구현과 기능 기본적으로 자동 포함, 전용 API를 직접 Import할 때 명시",
    "url": "./../guides/platform/webview/webView_guide.html#section-2"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "패키지 설치",
    "excerpt": "프로젝트 루트에서 패키지를 추가하고 선택된 버전을 확인합니다. flutter pub add webview_flutter flutter pub get 설치 결과는 pubspec.yaml 과 pubspec.lock 을 함께 확인합니다. 플랫폼 전용 API를 직접 사용하지 않으면 구현 패키지를 별도로 추가하지 않습니다.",
    "content": "6. 패키지 설치 프로젝트 루트에서 패키지를 추가하고 선택된 버전을 확인합니다. flutter pub add webview_flutter flutter pub get 설치 결과는 pubspec.yaml 과 pubspec.lock 을 함께 확인합니다. 플랫폼 전용 API를 직접 사용하지 않으면 구현 패키지를 별도로 추가하지 않습니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-6"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "Android 설정",
    "excerpt": "최소 SDK Android의 minSdk 를 24 이상으로 설정합니다. android { defaultConfig { minSdk = 24 } } Android System WebView 버전 minSdk 는 Android 앱의 실행 가능 버전만 결정하며 System WebView 버전을 보장하지 않습니다. WebView 버전만으로 Tailwind CSS v4 화면의 지원 여부를 차단하지 않…",
    "content": "7. Android 설정 최소 SDK Android의 minSdk 를 24 이상으로 설정합니다. android { defaultConfig { minSdk = 24 } } Android System WebView 버전 minSdk 는 Android 앱의 실행 가능 버전만 결정하며 System WebView 버전을 보장하지 않습니다. WebView 버전만으로 Tailwind CSS v4 화면의 지원 여부를 차단하지 않고, 프로젝트가 실제 사용하는 CSS와 Utility의 동작 여부를 기준으로 판단합니다. 핵심 기능에 영향을 주는 호환성 문제가 확인된 경우에만 업데이트 안내 또는 대체 화면을 제공합니다. 실제 WebView 제공 패키지와 버전은 AndroidX WebKit의 WebViewCompat.getCurrentWebViewPackage() 로 확인할 수 있습니다. 자세한 방법은 Android WebView Version API 문서 를 참고합니다. 인터넷 권한 외부 웹 페이지를 표시하려면 인터넷 권한을 선언합니다. < uses-permission android:name = \"android.permission.INTERNET\" /> HTTP 통신 WebView 콘텐츠는 HTTPS를 사용합니다. 개발 환경에서 HTTP가 불가피한 경우에도 전체 통신을 허용하지 않고 Network Security Configuration으로 필요한 개발 도메인만 제한적으로 허용합니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-7"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "Chrome과 Safari 호환성 기준",
    "excerpt": "플랫폼 피해야 할 표기 권장 표기 Android 특정 Chromium 버전만 일괄 지원 Android SDK 24 이상과 대상 System WebView에서 사용 기능 검증 iOS Tailwind 공식 브라우저 기준을 앱 최소 OS로 그대로 적용 iOS 15 이상 WKWebView에서 프로젝트 사용 기능 지원 공통 최신 브라우저 지원 지원 OS와 WebView 엔진에서 프로젝트 사용 기능을…",
    "content": "4. Chrome과 Safari 호환성 기준 플랫폼 피해야 할 표기 권장 표기 Android 특정 Chromium 버전만 일괄 지원 Android SDK 24 이상과 대상 System WebView에서 사용 기능 검증 iOS Tailwind 공식 브라우저 기준을 앱 최소 OS로 그대로 적용 iOS 15 이상 WKWebView에서 프로젝트 사용 기능 지원 공통 최신 브라우저 지원 지원 OS와 WebView 엔진에서 프로젝트 사용 기능을 검증 Android System WebView는 Chromium 기반이지만 Chrome 앱과 업데이트 상태가 다를 수 있습니다. WKWebView와 Safari도 WebKit을 공유하지만 실행 환경과 제공 기능이 완전히 같지는 않습니다. JavaScript, CSS 또는 Web API의 지원 여부가 중요하면 최소·최신 지원 OS의 실제 WebView에서 기능 단위로 검증합니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-4"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "iOS 설정",
    "excerpt": "Deployment Target Xcode의 Runner Target과 ios/Podfile 을 모두 iOS 15 이상으로 설정합니다. platform :ios , '15.0' App Transport Security HTTPS 사용을 원칙으로 합니다. HTTP 연결이 필요해도 NSAllowsArbitraryLoads 로 모든 연결을 허용하지 않고 필요한 개발 도메인만 예외로 등록합니다. 카…",
    "content": "8. iOS 설정 Deployment Target Xcode의 Runner Target과 ios/Podfile 을 모두 iOS 15 이상으로 설정합니다. platform :ios , '15.0' App Transport Security HTTPS 사용을 원칙으로 합니다. HTTP 연결이 필요해도 NSAllowsArbitraryLoads 로 모든 연결을 허용하지 않고 필요한 개발 도메인만 예외로 등록합니다. 카메라, 마이크 또는 위치정보를 사용하는 경우에는 실제 사용하는 기능에 해당하는 목적 문구를 Info.plist 에 등록합니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-8"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "Tailwind CSS v4 호환성",
    "excerpt": "WebView에서 표시하는 웹 서비스는 Tailwind CSS v4를 유지합니다. 브라우저 지원 범위는 Tailwind의 공식 완전 호환 버전을 앱의 최소 버전으로 그대로 적용하지 않고, 프로젝트가 실제 사용하는 CSS와 Utility가 정상 동작하는지를 기준으로 정합니다. Safari 15와 구형 WebView를 지원해야 하므로 지원 범위를 벗어나는 최신 CSS 기능은 사용하지 않거나 대체…",
    "content": "5. Tailwind CSS v4 호환성 WebView에서 표시하는 웹 서비스는 Tailwind CSS v4를 유지합니다. 브라우저 지원 범위는 Tailwind의 공식 완전 호환 버전을 앱의 최소 버전으로 그대로 적용하지 않고, 프로젝트가 실제 사용하는 CSS와 Utility가 정상 동작하는지를 기준으로 정합니다. Safari 15와 구형 WebView를 지원해야 하므로 지원 범위를 벗어나는 최신 CSS 기능은 사용하지 않거나 대체합니다. 공통 CSS 하한은 Safari 15에서 지원되는 기능 범위로 정합니다. Android System WebView는 Safari 15에 특정 Chromium 버전을 기계적으로 대응시키지 않고, 지원 대상 구형 WebView에서 실제 사용하는 Utility와 핵심 기능을 검증합니다. 구분 최소 환경 적용 방법 Flutter 앱 실행 Android SDK 24 이상 지원 대상 System WebView에서 핵심 화면과 사용 CSS를 검증 Flutter 앱 실행 iOS 15 이상 Safari 15 계열 WKWebView에서 핵심 화면과 사용 CSS를 검증 Tailwind CSS v4 프로젝트 지원 대상 WebView 특정 Chromium 버전보다 실제 사용 Utility의 동작 여부로 판단 Tailwind CSS v4 Safari 15 이상 iOS 15 이상의 WKWebView에서 제한된 Utility 범위를 검증 이 프로젝트는 Tailwind CSS v4를 유지하면서 Safari 15와 구형 WebView를 지원합니다. Tailwind의 공식 완전 호환 버전은 참고 기준으로 사용하고, 앱의 최소 지원 범위는 프로젝트가 실제 사용하는 CSS와 Utility의 검증 결과로 정합니다. Android WebView 검증 기준 Android System WebView는 제조사, OS와 업데이트 경로에 따라 버전이 다를 수 있으므로 특정 Chromium 버전을 일괄적인 진입 조건으로 사용하지 않습니다. 지원 대상 기기에서 프로젝트가 사용하는 레이아웃, 색상, 그림자, 변환, 반응형 화면과 상호작용을 확인하고 핵심 기능이 동작하면 지원 대상으로 판단합니다. CSS와 Utility 사용 기준 CSS와 Tailwind Utility는 최신 기능 사용을 전제로 선정하지 않습니다. 기본 레이아웃, 간격, 크기, 색상, 타이포그래피와 반응형 기능처럼 지원 대상 브라우저에서 검증된 기능을 우선 사용합니다. 프로젝트에서 사용하는 Utility와 Web API는 최소 지원 Android System WebView와 iOS 15 WKWebView에서 실제로 확인합니다. field-sizing: content , @starting-style , text-wrap: balance 처럼 Safari 15 또는 지원 대상 구형 WebView에서 동작하지 않는 기능은 사용하지 않습니다. 부득이하게 필요한 경우에는 지원 여부를 확인하고, 지원하지 않는 환경에서도 핵심 정보와 기능을 사용할 수 있는 대체 표현을 함께 제공합니다. Tailwind CSS v4가 생성하는 CSS에도 브라우저별 차이가 있을 수 있으므로 Tailwind CSS v4.1 이상을 사용하고 검증한 버전을 잠금 파일에 고정합니다. 프레임워크의 공식 완전 호환 범위와 별개로 Safari 15 및 지원 대상 구형 WebView에서 핵심 정보, 입력, 이동과 업무 기능이 정상 동작해야 합니다. 시각 효과의 차이는 핵심 기능을 방해하지 않는 범위에서 허용합니다. 주요 서비스 국가와 공개 점유율 주요 서비스 국가는 한국·중국·일본·미국이며 그 밖의 국가는 글로벌 통계로 보완합니다. 아래 수치는 2026년 7월 StatCounter 모바일 트래픽 기준입니다. 실제 설치 사용자 수가 아니므로 출시 전 판단의 보조 근거로만 사용합니다. 지역 Android iOS 근거 한국 65.39% 34.60% StatCounter 한국 중국 70.37% 29.51% StatCounter 중국 일본 36.41% 63.59% StatCounter 일본 미국 40.39% 59.58% StatCounter 미국 전 세계 68.36% 31.60% StatCounter 전 세계 최소 OS 기준의 도달 범위 2025년 12월 갱신된 Google Android 배포 원본 데이터에서 API 21은 0.1%, API 22는 0.3%, API 23은 0.4%입니다. 따라서 API 24 이상은 약 99.2%입니다. 이 수치는 Google의 Android 활성 기기 기준이며 Google Android 버전 배포 원본 데이터 를 근거로 계산합니다. 국가별 고객 비율이나 프로젝트에서 사용하는 CSS의 호환 비율을 의미하지 않습니다. 2026년 6월 7일 Apple 공식 집계에서 전체 iPhone의 79%가 iOS 26을 사용합니다. 이 값만으로 iOS 15 이상 전체 비율이나 실제 서비스의 지원 도달률을 계산하지 않습니다. 집계 대상과 기준일은 Apple App Store 지원 페이지 에서 확인합니다. 국가별 버전 분포는 한국 Android , 중국 Android , 일본 Android , 미국 Android 와 한국 iOS , 중국 iOS , 일본 iOS , 미국 iOS 에서 확인합니다. 공개 페이지에 표시된 일부 상위 버전만 합산해 전체 지원률처럼 사용하지 않습니다. 중국 Android 검증 중국은 Android 비중이 70.37%이지만 Google Play 기반 WebView 업데이트를 모든 기기의 공통 조건으로 가정하지 않습니다. 제조사·OS·WebView 제공 패키지 조합에 따라 엔진과 업데이트 경로가 다를 수 있으므로 중국 대상 주요 제조사의 실제 기기에서 WebView 패키지와 버전, Tailwind CSS v4 핵심 화면을 검증합니다. 버전 문자열만으로 판단하기 어려운 환경에서는 프로젝트가 실제 사용하는 CSS 기능을 기능 단위로 확인합니다. 기능 검사에 통과하지 못한 기기는 업데이트 또는 지원 환경 안내 대상이며, 구체적인 진입 제한 정책은 App·기획·QA 담당자가 합의합니다. 근거 갱신과 승인 출시 전에는 공개 통계와 주요 국가의 실제 기기 검증 결과를 함께 사용합니다. 출시 후에는 국가·OS·WebView 엔진별 활성 사용자와 오류율을 우선 근거로 사용합니다. 핵심 국가별 허용할 미지원 사용자 비율과 재검토 주기는 프로젝트 담당자가 확정합니다. 점유율 수치에는 출처와 기준 월을 남기고 검토 시 최신 자료로 갱신합니다. 공식 문서 Tailwind CSS 공식 호환성 문서 : v4의 최소 브라우저 버전과 최신 CSS 기능 사용 기준 Tailwind CSS v4 공식 업그레이드 가이드 : v4의 공식 브라우저 요구사항과 프로젝트 호환 정책 검토 자료 Android 공식 WebView 관리 문서 : Android WebView 버전과 패키지 확인 방법 Apple WKWebView 공식 문서 : iOS 앱 내부 웹 콘텐츠 표시 API",
    "url": "./../guides/platform/webview/webView_guide.html#section-5"
  },
  {
    "document": "Flutter WebView 설정 가이드",
    "section": "URL 이동과 JavaScript Bridge",
    "excerpt": "URL 이동 제어 허용 여부를 URL 문자열의 부분 일치로 판단하지 않습니다. URL을 Uri 로 파싱하고 scheme과 host를 정확히 비교합니다. WebView 내부 이동 허용 도메인 외부 브라우저로 전달할 URL 전화, 이메일, 지도 앱 및 Custom Scheme 호출 Intent URL, 새 창, 팝업과 파일 다운로드 처리 위 정책은 앱과 웹 담당자가 승인한 뒤 구현합니다. Jav…",
    "content": "10. URL 이동과 JavaScript Bridge URL 이동 제어 허용 여부를 URL 문자열의 부분 일치로 판단하지 않습니다. URL을 Uri 로 파싱하고 scheme과 host를 정확히 비교합니다. WebView 내부 이동 허용 도메인 외부 브라우저로 전달할 URL 전화, 이메일, 지도 앱 및 Custom Scheme 호출 Intent URL, 새 창, 팝업과 파일 다운로드 처리 위 정책은 앱과 웹 담당자가 승인한 뒤 구현합니다. JavaScript Bridge Bridge 메시지는 신뢰할 수 없는 입력으로 취급합니다. 허용된 도메인과 명령인지 확인하고, 요청 필드와 값의 형식을 검증한 뒤 Native 기능을 실행합니다. Bridge를 인증 토큰 전달 수단으로 사용하지 않습니다. 임의 코드나 전달받은 함수를 실행하지 않습니다. 토큰, 비밀번호와 개인정보를 URL·메시지·로그에 남기지 않습니다. Bridge 이름, 요청·응답 및 오류 규격은 승인된 계약으로 관리합니다.",
    "url": "./../guides/platform/webview/webView_guide.html#section-10"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "문서 목적",
    "excerpt": "현재 확정된 기술과 영역별 책임, 구현 기준을 공유합니다. 정해지지 않은 설계를 미리 고정하지 않고, 변경과 유지보수가 쉬운 구현을 위한 최소 기준만 제공합니다. 1.1 핵심 원칙 작게 시작하고, 실제 반복이나 복잡성이 확인될 때 구조를 확장합니다. 특정 기능에만 필요한 코드는 해당 기능 가까이에 둡니다. 여러 기능에서 실제로 재사용되고 변경 이유도 같을 때만 공통화합니다. 미확정 사항을 임…",
    "content": "1. 문서 목적 현재 확정된 기술과 영역별 책임, 구현 기준을 공유합니다. 정해지지 않은 설계를 미리 고정하지 않고, 변경과 유지보수가 쉬운 구현을 위한 최소 기준만 제공합니다. 1.1 핵심 원칙 작게 시작하고, 실제 반복이나 복잡성이 확인될 때 구조를 확장합니다. 특정 기능에만 필요한 코드는 해당 기능 가까이에 둡니다. 여러 기능에서 실제로 재사용되고 변경 이유도 같을 때만 공통화합니다. 미확정 사항을 임의로 결정하거나 확정된 규칙처럼 구현하지 않습니다. 서버 상태, 폼 상태, 지역 UI 상태, 공유 클라이언트 상태의 책임을 구분합니다. 민감정보를 URL, WebView JavaScript, Bridge 메시지 또는 로그에 노출하지 않습니다. 1.2 표기 규칙 표기 의미 적용 방법 TBD 결정이 필요한 항목 추측해 고정하지 않고 담당자 합의 후 갱신합니다. EXAMPLE 이해를 위한 예시 프로젝트 상황에 맞게 변경할 수 있습니다. 확정된 내용은 별도 표시 없이 일반 문장으로 작성합니다. 결정이 필요하거나 예시임을 밝혀야 할 때만 TBD 또는 EXAMPLE 을 사용합니다.",
    "url": "./../guides/frontend/index.html#section-1"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "미확정 항목 목록",
    "excerpt": "아래 항목은 합의 전까지 구현 표준으로 간주하지 않습니다. 서비스와 화면 IA, 주요 사용자 흐름과 라우트 그룹 브랜드 사이트와 WebView 서비스의 배포 단위 웹사이트, 카드사 인앱과 백오피스의 Framework 및 최종 프로젝트 분리 범위 WebView 화면의 일반 모바일 브라우저 직접 접근 지원 여부 브랜드 사이트의 SEO 및 렌더링 요구 일반 사용자·직원 역할과 세부 권한 정책 렌더…",
    "content": "13. 미확정 항목 목록 아래 항목은 합의 전까지 구현 표준으로 간주하지 않습니다. 서비스와 화면 IA, 주요 사용자 흐름과 라우트 그룹 브랜드 사이트와 WebView 서비스의 배포 단위 웹사이트, 카드사 인앱과 백오피스의 Framework 및 최종 프로젝트 분리 범위 WebView 화면의 일반 모바일 브라우저 직접 접근 지원 여부 브랜드 사이트의 SEO 및 렌더링 요구 일반 사용자·직원 역할과 세부 권한 정책 렌더링과 API Server Component와 Client Component의 구분 기준 SSR, SSG, ISR, 캐싱과 revalidation 정책 브라우저의 백엔드 직접 호출, Next.js BFF, Route Handler 또는 Server Action 사용 범위 API 공통 응답, 오류 형식, 타입 생성과 OpenAPI 연계 인증과 오프라인 일반·소셜 로그인 제공자와 프로토콜 인증 상태의 단일 기준과 Native 인증 API 호출 범위 WebView 세션과 Cookie 정책 이용권 및 인증 관련 Native 저장 대상과 수명 오프라인 이용권의 조회·표시·사용·동기화 범위 UI와 상태 Figma 토큰, breakpoint와 컴포넌트 variant 상세 SCSS 도입 여부와 예외 범위 공통 loading, error, empty, toast, dialog와 confirm UX TanStack Query 상세 정책 Zustand store 분리와 persist 정책 폼 스키마 검증 도구와 서버 오류 매핑 앱 연동 Bridge 채널, 메시지, Method, 오류와 버전 계약 Bridge timeout, 중복 요청, 호환성과 앱 최소 버전 정책 결제, 파일, 위치, QR 및 사진 기능의 세부 Native-Web 책임 Push·Deep Link의 허용 Route와 파라미터 개발과 품질 Web Workspace, 패키지 관리자와 Task Runner의 최종 제품 공통 패키지의 실제 생성 시점, 공개 API와 의존성 경계 배럴 파일 및 import 경계 자동 검사 테스트·mock·formatting 도구와 커버리지 기준 Git 브랜치 전략, 웹 애플리케이션별 CI/CD 품질 게이트·배포 플랫폼과 승인 절차 오류 수집, 로깅, 분석 및 모니터링 도구 Front-End 개발 가이드",
    "url": "./../guides/frontend/index.html#section-13"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "상태 및 데이터 관리",
    "excerpt": "flowchart TD accTitle: Front-End 상태 관리 도구 선택 흐름 accDescr: 상태의 성격과 소유 범위에 따라 React 지역 상태, URL, React Hook Form, TanStack Query 또는 Zustand를 선택합니다. A([상태가 필요함]) --> B{상태의 성격은?} B -->|\"서버에서 조회·변경\"| Q[\"TanStack Query\"] B -->|…",
    "content": "7. 상태 및 데이터 관리 flowchart TD accTitle: Front-End 상태 관리 도구 선택 흐름 accDescr: 상태의 성격과 소유 범위에 따라 React 지역 상태, URL, React Hook Form, TanStack Query 또는 Zustand를 선택합니다. A([상태가 필요함]) --> B{상태의 성격은?} B -->|\"서버에서 조회·변경\"| Q[\"TanStack Query\"] B -->|\"폼 입력·제출\"| F[\"React Hook Form\"] B -->|\"주소로 공유·복원\"| U[\"URL 상태 검토\"] B -->|\"클라이언트 UI 상태\"| C{공유 범위는?} C -->|\"가까운 컴포넌트 트리\"| R[\"React 지역 상태\"] C -->|\"여러 영역에서 공유\"| Z{다른 방식으로 표현 가능한가?} Z -->|\"아니요\"| S[\"Zustand\"] Z -->|\"예\"| D[\"가장 단순한 기존 방식 사용\"] 상태의 소유자와 수명에 따른 도구 선택 상태 도구를 먼저 선택하지 말고 상태의 소유자와 수명을 먼저 판단합니다. 상태 종류 기본 책임 한 컴포넌트 또는 가까운 트리의 UI 상태 React 지역 상태 주소로 공유·복원할 필요가 있는 상태 URL 상태 검토 폼 입력과 제출 상태 React Hook Form 서버에서 조회·변경하는 데이터 TanStack Query 위 방식으로 표현하기 어렵고 여러 영역이 공유하는 클라이언트 상태 Zustand 7.1 TanStack Query 서버와 통신해 얻는 클라이언트 측 서버 상태는 TanStack Query로 관리합니다. 서버 데이터를 Zustand 또는 별도 전역 객체에 복제하지 않습니다. 조회 화면은 필요한 loading, error, empty 상태를 고려합니다. 표현 방식은 공통 UX가 확정되기 전까지 기능에 맞게 단순하게 구현합니다. 결제, 이용권 사용, 예약 변경처럼 중복 실행 위험이 있는 요청은 UI에서 진행 상태를 표시하고 중복 제출을 막습니다. 로그아웃 또는 계정 전환 시 사용자별 Query Cache가 이전 사용자에게 노출되지 않도록 정리합니다. TBD Query Key 상세 구조, 전역 staleTime , retry, invalidation, prefetch, hydration, Server Component와의 책임 및 오프라인 mutation 정책은 실제 데이터 요구와 운영 환경이 확인된 후 결정합니다. Backend가 승인한 API 계약과 개발 환경이 제공된 뒤 공통 요청 함수와 응답 검증 경계는 API 요청 기반 구현 예시 를 참고해 구현합니다. 계약 확정 전에는 endpoint, method, status, 요청·응답 필드와 parser를 선행 작성하지 않습니다. 7.2 Zustand Zustand는 서버 상태가 아닌 공유 클라이언트 상태에만 사용합니다. 단일 컴포넌트나 가까운 컴포넌트 트리에서 해결되는 상태를 store로 올리지 않습니다. 상태가 실제로 생기기 전에 기능별 store나 store 폴더를 만들지 않습니다. 사용자 전환 시 남아서는 안 되는 상태는 명시적으로 초기화합니다. 도메인별 store는 하나의 거대한 store보다 기능 경계를 이해하기 쉬울 수 있지만, store 수와 중복 초기화 코드가 늘어날 수 있습니다. 실제 공유 상태가 생긴 뒤 관련 상태와 변경 이유를 기준으로 나눕니다. TBD Store 분리 단위, Persist 허용 범위와 Selector의 최종 규칙은 실제 상태 요구가 확인된 후 Zustand UI 상태 관리 가이드 에서 확정합니다. 7.3 React Hook Form 입력과 제출을 하나의 폼으로 다루는 화면은 React Hook Form을 기본으로 사용합니다. 입력 컴포넌트의 표시 책임과 폼의 제출·업무 로직을 분리합니다. 제출 중 중복 요청을 막고 사용자에게 진행 상태를 제공합니다. 필드 오류, 서버의 업무 오류, 공통 네트워크 오류를 같은 의미로 처리하지 않습니다. Controller 는 외부 controlled 컴포넌트처럼 실제로 필요한 경우에만 사용합니다. React Hook Form은 폼 상태 도구이며 모든 검증 규칙을 대신 정의하지 않습니다. TBD Zod 등 스키마 검증 도구, 서버 오류 매핑 형식, 공통 Form Field의 범위와 API 요청 타입 연결 방식은 실제 폼과 API 구조가 확인된 후 결정합니다.",
    "url": "./../guides/frontend/index.html#section-7"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "서비스 및 Native-WebView 역할",
    "excerpt": "flowchart LR accTitle: Native와 WebView의 역할 및 통신 흐름 accDescr: 사용자는 WebView의 서비스 화면을 이용하며, 서버 데이터는 Backend API에서 처리하고 기기 기능은 Bridge를 거쳐 Flutter Native와 OS에서 처리합니다. U([사용자]) --> W[\"Next.js WebView · 서비스 UI와 업무 흐름\"] W -->|\"서…",
    "content": "2. 서비스 및 Native-WebView 역할 flowchart LR accTitle: Native와 WebView의 역할 및 통신 흐름 accDescr: 사용자는 WebView의 서비스 화면을 이용하며, 서버 데이터는 Backend API에서 처리하고 기기 기능은 Bridge를 거쳐 Flutter Native와 OS에서 처리합니다. U([사용자]) --> W[\"Next.js WebView · 서비스 UI와 업무 흐름\"] W -->|\"서버 데이터\"| S[\"Backend API · 권한과 데이터의 최종 기준\"] W -->|\"기기 기능 요청\"| B[\"Bridge Adapter · 승인된 기능만 호출\"] B --> N[\"Flutter Native · 권한과 기기 기능\"] N --> O[\"OS / Device · 카메라, 위치, Push\"] O -.->|\"처리 결과\"| N N -.->|\"성공·취소·오류\"| B B -.->|\"화면 반영\"| W Native–WebView 역할과 데이터 흐름 서비스 화면과 빠르게 변경되는 업무 기능은 웹으로 통합하고, OS 권한과 기기 기능은 Flutter Native가 담당합니다. 두 영역 사이의 통신은 Bridge 규격을 승인된 WebView Bridge 계약으로 정의하며 필요한 최소 정보만 주고받습니다. 영역 주요 책임 Flutter Native 앱 실행과 초기화, 기기 권한, Push와 Deep Link, 카메라·QR·위치·파일 등 OS 기능, 필요한 경우의 보안 저장소와 인증 조정 Next.js WebView 공항·라운지 안내, 이용권·예약·결제 등 서비스 화면과 업무 흐름, 서버 데이터 표시와 사용자 입력 Bridge 승인된 Native 기능 요청과 결과 전달을 위한 경계 서버 자격 증명 검증, 권한 판단, 결제·예약·이용권 상태의 최종 기준 사용자 화면과 서비스 업무 규칙은 WebView에 구현하고, OS 또는 기기 기능이 필요한 경우에만 Native 기능을 사용합니다. 인증과 권한의 최종 판단은 클라이언트가 아니라 서버가 수행합니다. Bridge를 인증 토큰 전달 수단으로 사용하지 않습니다. Native 화면에서는 Native Navigation을, WebView 화면에서는 Web History를 우선 처리합니다. 웹 화면 또는 웹 업무 로직만 변경할 때는 앱 빌드 없이 배포할 수 있는 경계를 유지합니다. Native 기능이나 Bridge 계약이 변경되면 앱 호환성과 배포가 함께 검토되어야 합니다. Front-end의 외부 입력, XSS, URL·Redirect, Client 저장소, 개인정보, 파일과 의존성 처리 및 CSP 연동 검증은 Front-End 보안과 개인정보 가이드 를 따릅니다. CSP Header와 서버 보안 정책의 결정·적용은 Backend·배포·보안 담당의 책임입니다. TBD 로그인 주체와 인증 프로토콜, WebView 세션 생성 방식, 결제 단계별 Native-Web 책임, 직접 브라우저 접근 지원 범위는 확정 후 반영합니다. 인증 계약 확정 전에는 로그인 상태와 회원 데이터를 분리한다는 Front-end 원칙만 검토하고 구현은 선행하지 않습니다. 계약 확정 후 구현할 때 세션과 회원 경계 구현 예시 를 참고합니다.",
    "url": "./../guides/frontend/index.html#section-2"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "오프라인 및 로컬 데이터",
    "excerpt": "flowchart TD accTitle: 온라인 및 오프라인 화면 처리 흐름 accDescr: 네트워크 상태와 승인된 캐시의 존재 여부에 따라 최신 데이터 또는 저장 데이터를 표시하고, 서버 통신이 필요한 작업을 제한한 뒤 연결 복구 시 갱신합니다. A([화면 진입]) --> B{네트워크 연결 확인} B -->|\"예\"| C[\"서버에서 최신 데이터 조회\"] C --> D[\"Query Cache…",
    "content": "9. 오프라인 및 로컬 데이터 flowchart TD accTitle: 온라인 및 오프라인 화면 처리 흐름 accDescr: 네트워크 상태와 승인된 캐시의 존재 여부에 따라 최신 데이터 또는 저장 데이터를 표시하고, 서버 통신이 필요한 작업을 제한한 뒤 연결 복구 시 갱신합니다. A([화면 진입]) --> B{네트워크 연결 확인} B -->|\"예\"| C[\"서버에서 최신 데이터 조회\"] C --> D[\"Query Cache 갱신\"] D --> E[\"최신 화면 표시\"] B -->|\"아니요\"| F{승인된 저장 데이터 확인} F -->|\"예\"| G[\"저장 데이터 표시 + 오프라인 안내\"] F -->|\"아니요\"| H[\"오프라인 사용 불가 안내\"] G --> I{서버 확인이 필요한 작업 확인} I -->|\"예\"| J[\"기능 제한 + 연결 필요 안내\"] I -->|\"아니요\"| K[\"허용된 로컬 기능 계속 사용\"] J -.->|\"연결 복구\"| C K -.->|\"연결 복구\"| C 네트워크 상태에 따른 화면과 기능 처리 오프라인 지원 여부와 대상 화면은 아직 확정하지 않습니다. 지원하기로 한 화면에서는 기존 데이터와 입력 보존, 기능 제한과 연결 복구 동작을 검토합니다. 이용권의 단순 조회와 실제 사용 처리는 보안·중복 사용·동기화 요구가 다르므로 같은 기능으로 간주하지 않습니다. Web localStorage , sessionStorage , IndexedDB 등에는 인증 토큰, 카드정보 또는 불필요한 개인정보를 저장하지 않습니다. 장기 자격 증명을 Native가 보유하는 방식이 확정된 경우 승인된 보안 저장소를 사용합니다. Access Token의 영속 저장은 하지 않습니다. 로그아웃과 계정 전환 시 WebView의 사용자별 Query Cache, 클라이언트 상태와 저장 데이터를 정리합니다. 오프라인 데이터는 오래된 정보일 수 있음을 사용자에게 알리고, 서버 연결이 필요한 작업은 명확히 제한합니다. TBD 오프라인에서 제공할 화면, 이용권 조회·표시·사용 범위, Native 영속 캐시 대상, TTL, 암호화, 네트워크 복구 후 동기화, 충돌과 중복 사용 방지 정책은 서비스·보안 정책 확정 후 결정합니다.",
    "url": "./../guides/frontend/index.html#section-9"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "접근성 기본",
    "excerpt": "현재 목표는 인증 획득 자체가 아니라, 추후 접근성 검수를 확장할 수 있는 기본 구조를 유지하는 것입니다. 동작 요소는 가능한 한 의미에 맞는 HTML 요소를 사용합니다. 클릭 동작에 div 대신 button 또는 a 를 사용합니다. 입력 요소에는 연결된 label 또는 동등한 접근 가능한 이름을 제공합니다. 주요 기능은 키보드로 사용할 수 있어야 합니다. 포커스 표시를 이유 없이 제거하지…",
    "content": "10. 접근성 기본 현재 목표는 인증 획득 자체가 아니라, 추후 접근성 검수를 확장할 수 있는 기본 구조를 유지하는 것입니다. 동작 요소는 가능한 한 의미에 맞는 HTML 요소를 사용합니다. 클릭 동작에 div 대신 button 또는 a 를 사용합니다. 입력 요소에는 연결된 label 또는 동등한 접근 가능한 이름을 제공합니다. 주요 기능은 키보드로 사용할 수 있어야 합니다. 포커스 표시를 이유 없이 제거하지 않습니다. 의미 있는 이미지에는 적절한 대체 텍스트를 제공하고, 장식 이미지는 보조기술이 무시하도록 처리합니다. 색상만으로 상태나 오류를 전달하지 않습니다. shadcn/ui가 제공하는 키보드, 포커스 및 ARIA 구조를 임의로 깨뜨리지 않습니다. Dialog, Sheet 등 레이어 UI는 열림·닫힘 시 포커스 이동과 복귀를 확인합니다. TBD WCAG 목표 수준, 색상 대비 수치 검수, 스크린리더 테스트 범위와 접근성 인증 일정은 별도 품질 계획에서 확정합니다.",
    "url": "./../guides/frontend/index.html#section-10"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "코드 리뷰 기본 확인사항",
    "excerpt": "상태가 올바른 소유자에게 있는가? 서버 데이터를 Zustand에 복제하지 않았는가? 단순한 코드를 불필요하게 여러 파일이나 계층으로 나누지 않았는가? 실제 반복이 없는 공통화나 wrapper를 만들지 않았는가? 기능 컴포넌트가 Native Bridge 전역 객체를 직접 호출하지 않는가? 민감정보가 URL, 저장소, Bridge 또는 로그에 포함되지 않는가? loading, error, emp…",
    "content": "12. 코드 리뷰 기본 확인사항 상태가 올바른 소유자에게 있는가? 서버 데이터를 Zustand에 복제하지 않았는가? 단순한 코드를 불필요하게 여러 파일이나 계층으로 나누지 않았는가? 실제 반복이 없는 공통화나 wrapper를 만들지 않았는가? 기능 컴포넌트가 Native Bridge 전역 객체를 직접 호출하지 않는가? 민감정보가 URL, 저장소, Bridge 또는 로그에 포함되지 않는가? loading, error, empty, 사용자 취소와 중복 제출을 필요한 수준에서 처리했는가? 의미 있는 HTML, label, 키보드와 포커스 기본 동작을 유지하는가? Figma 또는 AI export 코드를 토큰과 프로젝트 구조에 맞게 정리했는가? 변경 위험에 맞는 테스트 또는 검수 근거가 있는가?",
    "url": "./../guides/frontend/index.html#section-12"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "테스트 및 품질 관리",
    "excerpt": "테스트는 파일 수나 커버리지 수치를 채우기 위해 작성하지 않습니다. 오류가 발생했을 때 사용자·금액·권한·데이터에 미치는 위험과 변경 빈도를 기준으로 우선순위를 정합니다. 11.1 Lint와 Test의 역할 Lint는 코드를 실행하지 않고 잘못된 작성 패턴을 찾으며, Test는 코드를 실행해 실제 결과가 의도대로 나오는지 확인합니다. 두 검사는 서로 대체하지 않습니다. 구분 Lint Test…",
    "content": "11. 테스트 및 품질 관리 테스트는 파일 수나 커버리지 수치를 채우기 위해 작성하지 않습니다. 오류가 발생했을 때 사용자·금액·권한·데이터에 미치는 위험과 변경 빈도를 기준으로 우선순위를 정합니다. 11.1 Lint와 Test의 역할 Lint는 코드를 실행하지 않고 잘못된 작성 패턴을 찾으며, Test는 코드를 실행해 실제 결과가 의도대로 나오는지 확인합니다. 두 검사는 서로 대체하지 않습니다. 구분 Lint Test 확인 대상 코드 작성 방식과 정적으로 판단할 수 있는 오류 기능을 실행했을 때 나타나는 동작과 결과 코드 실행 실행하지 않음 실행함 대표 확인 항목 Hook 사용, ARIA 속성, label 연결과 키보드 지원 화면 표시, 사용자 입력, 상태 변경과 오류 처리 기본 명령 npm run lint 현재 미설치 · 후보 명령 npm run test 예를 들어 Lint는 클릭 요소에 필요한 키보드 지원이 빠진 코드를 찾을 수 있지만, 클릭 후 예약이 실제로 완료되는지는 판단할 수 없습니다. 해당 동작은 Test에서 사용자 입력과 화면 결과를 실행해 확인합니다. 반대로 Test를 작성하지 않은 코드까지 자동으로 검사하지는 않으므로 Lint도 함께 실행해야 합니다. 기본 검증 순서는 TypeScript 검사 → Lint → Test 이며, 병합 또는 통합 영향이 있는 변경에서는 production build를 추가로 확인합니다. 애플리케이션 Build 범위는 apps/app-webview 이며 docs/ 는 제품 Bundle, 정적 자산과 배포 Artifact에 포함하지 않습니다. 세부 기준은 Front-End Lint 가이드 와 Front-End 테스트 가이드 를 따릅니다. 11.2 우선 테스트 대상 금액 계산, 이용 조건, 유효기간처럼 오류 영향이 큰 순수 로직 일반 사용자와 직원의 권한 분기 결제·예약·이용권 사용의 중복 실행 방지 Bridge의 핵심 요청·응답 변환과 미지원 환경 처리 폼의 중요한 검증과 제출 흐름 여러 기능에서 반복 사용되는 공통 UI의 주요 동작 IA와 흐름이 확정된 뒤의 핵심 사용자 E2E 시나리오 11.3 강제 대상이 아닌 것 단순 표시 컴포넌트마다 작성하는 형식적인 테스트 Tailwind 클래스 문자열과 내부 구현 세부사항 모든 hook, variant, adapter에 대한 일괄 테스트 라이브러리 자체 동작을 다시 검증하는 테스트 근거 없이 정한 커버리지 백분율 11.4 기본 품질 기준 병합 전 프로젝트가 정한 TypeScript 검사, lint와 production build를 통과합니다. 기능 변경 시 영향 범위와 주요 실패 경로를 확인합니다. 공통 계약이나 패키지 변경 시 이를 사용하는 모든 애플리케이션의 회귀 테스트를 수행합니다. 결제·예약·이용권·권한·Bridge처럼 위험도가 높은 변경에는 해당 위험을 검증하는 테스트 또는 명시적인 검수 기록이 있어야 합니다. AI 생성 코드도 사람이 작성한 코드와 같은 리뷰와 검증 기준을 적용합니다. Storybook은 공통 컴포넌트뿐 아니라 기능 조합과 사용자에게 노출되는 화면 UI를 탐색하고 독립적으로 렌더링하여 주요 상태, Viewport, 접근성과 Interaction을 확인하는 UI 개발·검수 환경으로 사용합니다. 실제 Routing, Backend 연동, Native 기능과 전체 E2E 검증은 애플리케이션 환경에서 별도로 수행합니다. Story 작성 대상과 반자동 운영 기준은 Storybook 운영 가이드 를 따릅니다. 도구 후보는 단위·컴포넌트 테스트에 Vitest와 React Testing Library, E2E에 Playwright입니다. API Mock은 기획과 Backend 계약이 확정된 뒤 사용할 수 있는 실제 환경에서 필요한 상태를 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 테스트 범위와 관리 책임을 정한 뒤 검토합니다. Mock 도구 도입 판단은 API Mock 도입 판단 기준 을 확인합니다. Swagger 또는 OpenAPI 제공을 미리 가정하거나 Front-end가 endpoint와 fixture를 먼저 만들지 않습니다. TBD 테스트 도구의 최종 조합, E2E 실행 환경, API mocking 방식, 커버리지 기준, formatter, pre-commit 검사와 CI 품질 게이트는 개발·배포 환경 확정 후 결정합니다.",
    "url": "./../guides/frontend/index.html#section-11"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "프로젝트 및 파일 구조",
    "excerpt": "웹사이트, Flutter 앱, 앱 내 WebView, 카드사 인앱 서비스와 백오피스 등 WebView 애플리케이션과 구현 문서는 하나의 저장소에서 관리합니다. 배포 가능한 애플리케이션은 apps , Web 공통 코드는 packages , 언어에 종속되지 않는 API·Bridge 규격은 contracts 에서 관리합니다. 이 문서에서 Front-end 또는 Web은 주로 apps/app-web…",
    "content": "4. 프로젝트 및 파일 구조 웹사이트, Flutter 앱, 앱 내 WebView, 카드사 인앱 서비스와 백오피스 등 WebView 애플리케이션과 구현 문서는 하나의 저장소에서 관리합니다. 배포 가능한 애플리케이션은 apps , Web 공통 코드는 packages , 언어에 종속되지 않는 API·Bridge 규격은 contracts 에서 관리합니다. 이 문서에서 Front-end 또는 Web은 주로 apps/app-webview 구현 영역을 의미합니다. 전체 저장소 구조와 운영 원칙은 Front-End 저장소 구조 기준 을 단일 기준으로 사용합니다. 이 절은 apps/app-webview 의 상세 배치 기준을 보완하며, 내용이 충돌하면 공통 기준을 우선합니다. 4.1 배치 원칙 라우트, 레이아웃 및 Next.js 예약 파일은 apps/app-webview/src/app 에서 관리합니다. 특정 기능에서만 쓰는 UI, API 연동, 폼, 훅과 타입은 해당 기능 가까이에 둡니다. 여러 기능에서 실제로 공유하는 UI 원형과 WebView 전용 조합은 apps/app-webview/src/components/ui 에서 관리합니다. 비슷해 보인다는 이유만으로 코드를 공통 영역이나 공통 패키지로 이동하지 않습니다. 사용하지 않는 빈 폴더, store, hook, wrapper 또는 패키지를 미리 만들지 않습니다. <repository-root>/ ├── AGENTS.md # 저장소 전체 구현 지침 ├── apps/ │ └── app-webview/ # 앱 내 Next.js WebView │ └── src/ │ ├── app/ # Routes, Layouts, Providers │ ├── components/ # 공통 UI와 WebView 전용 UI 조합 │ ├── features/ # 서비스 기능별 구현 │ └── lib/ # API·Bridge 등 앱 기반 코드 ├── docs/ # 상세 가이드와 AI 작업 기준 └── README.md 하나의 기능이 커진 뒤에만 다음처럼 내부 책임을 나눌 수 있습니다. src/features/ticket/ ├── api/ ├── components/ ├── forms/ └── types.ts 4.2 컴포넌트와 파일 분리 단순한 컴포넌트는 한 파일로 시작합니다. 파일 길이 자체보다 책임의 분리 필요성, 변경 빈도, 재사용 범위를 기준으로 파일을 나눕니다. 타입, variant, hook 또는 테스트 파일은 실제 분리 이유가 있을 때만 만듭니다. 모든 컴포넌트에 동일한 폴더·파일 세트를 강제하지 않습니다. Button/ ├── Button.tsx ├── Button.types.ts # 외부 공개 타입이 커졌을 때 ├── Button.variants.ts # variant 조합이 복잡해졌을 때 └── Button.test.tsx # 위험도상 테스트가 필요할 때 4.3 공통화 판단 공통화는 코드 모양이 아니라 책임과 변경 이유를 기준으로 합니다. 다음 질문에 모두 답할 수 있을 때 공통화를 검토합니다. 둘 이상의 실제 사용처가 있는가? 사용처들의 의미와 변경 이유가 같은가? 공통화 후 API가 원래 구현보다 이해하기 쉬운가? 특정 기능의 예외를 props나 조건문으로 계속 추가하지 않아도 되는가? 4.4 저장소 운영 기준 각 애플리케이션은 Pipeline, 환경 설정, Version과 Rollback 단위를 분리하며 관계없는 영역을 항상 함께 배포하지 않습니다. 변경 경로와 의존 관계를 기준으로 영향받는 애플리케이션과 패키지를 빌드·테스트합니다. 공통 계약이나 패키지 변경 시 모든 사용처의 회귀 테스트를 수행합니다. Web Workspace와 Flutter는 Toolchain별 Lock File과 빌드 도구를 각각 관리합니다. 환경 변수, 인증 Client, Origin Allowlist와 배포 Secret은 애플리케이션·제휴사·환경별로 분리합니다. 운영 배포는 <app-name>/v<version> 형식의 앱별 Tag와 Release Note로 Artifact를 식별합니다.",
    "url": "./../guides/frontend/index.html#section-4"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "확정 기술 스택과 책임",
    "excerpt": "아래 기술 스택은 apps/app-webview 에 적용합니다. 웹사이트, 카드사 인앱과 백오피스에는 각 프로젝트의 Framework가 확정된 경우에만 동일하게 적용합니다. 정확한 패키지 버전은 Web Workspace와 Flutter 등 각 Toolchain의 Lock File을 기준으로 합니다. 구분 기술 기본 책임 Framework Next.js 16.x App Router 라우팅, 레…",
    "content": "3. 확정 기술 스택과 책임 아래 기술 스택은 apps/app-webview 에 적용합니다. 웹사이트, 카드사 인앱과 백오피스에는 각 프로젝트의 Framework가 확정된 경우에만 동일하게 적용합니다. 정확한 패키지 버전은 Web Workspace와 Flutter 등 각 Toolchain의 Lock File을 기준으로 합니다. 구분 기술 기본 책임 Framework Next.js 16.x App Router 라우팅, 레이아웃, 렌더링과 웹 애플리케이션 구성 UI React 19.x 컴포넌트 기반 UI 구성 Language TypeScript 6.x 컴포넌트, API, 폼과 외부 경계의 타입 안전성 Styling Tailwind CSS 4.x 기본 스타일과 디자인 토큰 적용 Server State TanStack Query 5.x 서버 데이터 조회, 캐시, 동기화와 비동기 상태 Client State Zustand 필요한 공유 UI·클라이언트 상태 Form React Hook Form 7.x 폼 값, 입력 상태, 제출 상태와 오류 연결 UI Component shadcn/ui 프로젝트가 소유하고 수정하는 UI 원형의 출발점 각 기술은 위 책임 안에서 필요한 경우에만 사용합니다. 서버에서 받은 데이터를 Zustand에 복제하지 않습니다. 한 컴포넌트 또는 가까운 하위 트리에서만 쓰는 UI 상태는 우선 React 지역 상태로 관리합니다. 설치된 버전과 호환성을 확인하지 않은 코드 또는 AI 생성 코드를 그대로 병합하지 않습니다. TBD Server Component와 Client Component의 세부 경계, SSR·SSG·ISR, 캐싱 및 데이터 패칭 정책은 화면과 API 구조가 확정된 후 결정합니다.",
    "url": "./../guides/frontend/index.html#section-3"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "TypeScript 및 Import",
    "excerpt": "5.1 TypeScript 애플리케이션 코드는 TypeScript로 작성합니다. 컴포넌트 props, API 경계, 폼 입력, Bridge 입출력처럼 모듈 경계를 통과하는 값은 타입을 정의합니다. 외부 입력은 타입 선언만 신뢰하지 않고 실제 실행 시점에도 필요한 검증을 거칩니다. any , 과도한 타입 단언, 불필요한 제네릭 추상화는 피합니다. 불가피한 경우 범위를 경계 모듈 안으로 제한합니…",
    "content": "5. TypeScript 및 Import 5.1 TypeScript 애플리케이션 코드는 TypeScript로 작성합니다. 컴포넌트 props, API 경계, 폼 입력, Bridge 입출력처럼 모듈 경계를 통과하는 값은 타입을 정의합니다. 외부 입력은 타입 선언만 신뢰하지 않고 실제 실행 시점에도 필요한 검증을 거칩니다. any , 과도한 타입 단언, 불필요한 제네릭 추상화는 피합니다. 불가피한 경우 범위를 경계 모듈 안으로 제한합니다. API 타입과 화면 전용 타입을 무조건 하나로 통합하지 않습니다. 의미와 변경 주기가 다르면 분리합니다. 한 파일에서만 쓰는 짧은 props 타입은 같은 파일에 두고, 여러 모듈이 사용하는 공개 타입만 별도 파일로 분리합니다. 타입의 배치, React Props와 공통 타입의 구체적인 작성 기준은 TypeScript 가이드 를 따릅니다. 5.2 Import alias와 배럴 파일 @ 는 src 경로를 가리키는 import alias로 사용합니다. 순환 참조를 만들거나 내부 구현을 무분별하게 노출하는 import 구조를 만들지 않습니다. 가까운 파일은 상대 경로를, 기능 또는 공통 영역을 가로지르는 import는 @/ alias를 사용할 수 있습니다. import { cn } from '@/lib/utils' ; import { TicketCard } from './TicketCard' ; index.ts 는 모든 폴더에 만들지 않습니다. 외부에 제공할 공개 API가 안정된 기능 또는 컴포넌트 폴더에서만 선택적으로 사용하고, 저장소 전체를 다시 내보내는 대형 배럴 파일은 피합니다. TBD 배럴 파일의 허용 범위와 lint 기반 import 경계 검사는 실제 모듈 구조가 생긴 후 확정합니다.",
    "url": "./../guides/frontend/index.html#section-5"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "UI, Figma, shadcn/ui 및 Tailwind CSS",
    "excerpt": "6.1 Figma와 디자인 시스템 Figma의 색상, 타이포그래피, 간격과 컴포넌트 상태를 디자인 토큰 기준으로 관리하고, 구현에서는 합의된 Tailwind 토큰에 연결합니다. Figma와 코드의 이름 또는 값이 다르면 임의로 한쪽을 정답으로 간주하지 않고 차이를 확인합니다. AI 또는 Figma export 결과는 초안으로 취급합니다. 프로젝트의 컴포넌트 구조, 토큰, 접근성, 반응형 범위…",
    "content": "6. UI, Figma, shadcn/ui 및 Tailwind CSS 6.1 Figma와 디자인 시스템 Figma의 색상, 타이포그래피, 간격과 컴포넌트 상태를 디자인 토큰 기준으로 관리하고, 구현에서는 합의된 Tailwind 토큰에 연결합니다. Figma와 코드의 이름 또는 값이 다르면 임의로 한쪽을 정답으로 간주하지 않고 차이를 확인합니다. AI 또는 Figma export 결과는 초안으로 취급합니다. 프로젝트의 컴포넌트 구조, 토큰, 접근성, 반응형 범위와 중복 코드를 검토한 뒤 사용합니다. 화면마다 같은 색상·간격 값을 임의의 숫자로 반복하지 않습니다. 아직 토큰이 없으면 임시 값임을 드러내고 토큰 확정 후 정리합니다. Figma 화면을 React 코드로 옮기는 작업 흐름과 완료 기준은 React Code Exports 가이드 를 따릅니다. TBD 최종 토큰 이름, breakpoint, 타이포그래피 단계, 컴포넌트 variant와 Figma-Code 동기화 방식은 디자인 시스템 확정 후 반영합니다. 6.2 shadcn/ui shadcn/ui는 수정 가능한 프로젝트 소유 코드로 관리합니다. 공통 UI를 수정할 때 기존 사용처와 키보드·포커스·ARIA 동작을 함께 확인합니다. 모든 기능 UI를 공통 shadcn wrapper로 감싸지 않습니다. 반복과 변경 이유가 확인된 경우에만 공통 API를 만듭니다. 6.3 Tailwind CSS 일반적인 컴포넌트 스타일은 Tailwind CSS를 기본으로 작성합니다. 조건부 클래스 병합은 프로젝트의 cn 유틸리티와 tailwind-merge 를 사용합니다. 명확한 variant를 가진 공통 UI는 필요할 때 class-variance-authority 를 사용할 수 있습니다. 단순 컴포넌트에 variant 계층을 미리 만들지 않습니다. 동일한 역할의 스타일을 Tailwind와 별도 스타일 파일에 중복 작성하지 않습니다. 임의 값은 디자인 토큰으로 표현하기 어려운 실제 요구가 있을 때만 사용합니다. 단순한 조건은 cn 으로 처리하고, 크기·색상·상태 조합이 여러 사용처에서 반복될 때만 cva 로 옮깁니다. SCSS는 기본 작성 방식에 포함하지 않습니다. TBD 기존 자산 연동, 복잡한 외부 스타일 덮어쓰기 또는 Tailwind로 표현하기 어려운 요구가 확인되면 SCSS의 도입 범위와 책임을 별도로 결정합니다. 6.4 반응형 범위 브랜드 사이트는 반응형 웹을 기준으로 구현합니다. Flutter 앱 내부 WebView 서비스는 합의된 모바일 앱 환경을 우선합니다. TBD 지원 화면 크기, orientation, WebView 안전 영역, 브랜드 사이트 breakpoint와 데스크톱 상세 기준은 디자인 확정 후 정합니다.",
    "url": "./../guides/frontend/index.html#section-6"
  },
  {
    "document": "Front-End 개발 가이드",
    "section": "Web 측 Bridge 최소 원칙",
    "excerpt": "sequenceDiagram accTitle: WebView와 Native의 Bridge 요청 및 응답 흐름 accDescr: 화면 컴포넌트가 Bridge adapter를 통해 Native 기능을 요청하고, Native와 OS가 검증 및 실행한 결과를 Promise로 반환하는 과정입니다. participant UI as WebView UI participant BA as Bridge Adap…",
    "content": "8. Web 측 Bridge 최소 원칙 sequenceDiagram accTitle: WebView와 Native의 Bridge 요청 및 응답 흐름 accDescr: 화면 컴포넌트가 Bridge adapter를 통해 Native 기능을 요청하고, Native와 OS가 검증 및 실행한 결과를 Promise로 반환하는 과정입니다. participant UI as WebView UI participant BA as Bridge Adapter participant N as Flutter Native participant OS as OS / Device UI->>BA: 사용자 동작으로 기능 요청 BA->>BA: 지원 여부와 입력 확인 BA->>N: 승인된 Method 전달 N->>N: 권한과 요청 검증 N->>OS: 기기 기능 실행 OS-->>N: 처리 결과 N-->>BA: 성공 / 취소 / 오류 BA-->>UI: Promise 완료 및 화면 반영 Bridge adapter를 통한 요청·응답 과정 Bridge의 메시지 형식과 Method 목록은 아직 확정하지 않습니다. 웹 코드는 Android·iOS의 전역 객체 차이를 화면 컴포넌트에 노출하지 않는 것을 우선합니다. 화면과 기능 컴포넌트에서 window.AppBridge , window.webkit 등 플랫폼 객체를 직접 호출하지 않습니다. Native 호출은 하나의 웹 측 Bridge adapter를 통해 수행합니다. Bridge 입력과 반환값은 기능별 TypeScript 타입으로 표현하고, 외부 응답은 필요한 검증을 거칩니다. 일반 브라우저, 테스트 또는 미지원 앱 버전처럼 Bridge가 없는 환경을 안전하게 처리합니다. 사용자 취소, 권한 거부, 미지원 기능과 시스템 오류를 구분합니다. Access Token, Refresh Token, 인증 코드, 카드번호, 인증번호와 개인정보를 Bridge 메시지나 로그에 포함하지 않습니다. Native 기능 호출은 사용자 동작에 의해 시작하며, 페이지 로드만으로 카메라·위치·결제 등을 자동 실행하지 않습니다. 앱이 지원한다고 확인된 허용 기능만 호출합니다. 웹 측 adapter는 Promise 기반 API와 요청 식별자를 사용해 비동기 요청과 응답을 연결할 수 있습니다. 실제 전역 객체명, 필드명과 오류 형식은 계약 확정 후 적용합니다. type NativeCapability = 'location' | 'qrScan' ; interface NativeBridge { isAvailable ( capability : NativeCapability ): boolean ; request<T>( capability : NativeCapability , params ?: unknown ): Promise <T>; } TBD 채널 이름, 메시지 규격, requestId , Bridge 버전, 허용 Method, 오류 코드, timeout, 중복 요청과 호환성 정책은 Flutter·Android·iOS·Web 담당자가 합의한 Bridge 계약에서 확정합니다.",
    "url": "./../guides/frontend/index.html#section-8"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "관련 기준",
    "excerpt": "API 요청, 오류 본문, 응답 검증과 취소 신호 연결은 API 요청 기반 구현 예시 를 따릅니다. 서버 데이터와 Query 상태 관리는 Front-End 개발 가이드 를 따릅니다. API 지연과 오류 재현에 별도 도구가 필요하면 API Mock 도입 판단 기준 을 확인합니다. 승인된 API 계약을 기준으로 Front-end 책임자 또는 프로젝트 담당자와 테스트 범위·관리 책임을 정하고 Ba…",
    "content": "16. 관련 기준 API 요청, 오류 본문, 응답 검증과 취소 신호 연결은 API 요청 기반 구현 예시 를 따릅니다. 서버 데이터와 Query 상태 관리는 Front-End 개발 가이드 를 따릅니다. API 지연과 오류 재현에 별도 도구가 필요하면 API Mock 도입 판단 기준 을 확인합니다. 승인된 API 계약을 기준으로 Front-end 책임자 또는 프로젝트 담당자와 테스트 범위·관리 책임을 정하고 Backend에는 계약을 대신하지 않는 도구임을 공유합니다. 사용자 관점의 상태 전환 검증은 테스트 공통 설정과 구현 예시 와 테스트 가이드 를 따릅니다. Skeleton, Spinner, Progress와 Toast UI는 shadcn/ui Components 를 참고하되 실제 프로젝트에 설치된 소스와 디자인 토큰을 우선합니다. Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "url": "./../guides/performance/index.html#section-16"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "네트워크 지연 중 처리",
    "excerpt": "6.1 최초 조회 화면 표시를 위해 반드시 필요한 요청과 나중에 실행할 요청을 구분합니다. 서로 독립적인 필수 요청을 근거 없이 순차 실행하지 않습니다. 부가 데이터와 무거운 리소스가 핵심 콘텐츠 표시를 막지 않게 합니다. 최초 요청이 실패해도 사용자가 이전 화면으로 이동하거나 다시 시도할 수 있어야 합니다. 6.2 기존 데이터 갱신 Cache는 이전 요청 결과를 잠시 보관해 같은 데이터를…",
    "content": "6. 네트워크 지연 중 처리 6.1 최초 조회 화면 표시를 위해 반드시 필요한 요청과 나중에 실행할 요청을 구분합니다. 서로 독립적인 필수 요청을 근거 없이 순차 실행하지 않습니다. 부가 데이터와 무거운 리소스가 핵심 콘텐츠 표시를 막지 않게 합니다. 최초 요청이 실패해도 사용자가 이전 화면으로 이동하거나 다시 시도할 수 있어야 합니다. 6.2 기존 데이터 갱신 Cache는 이전 요청 결과를 잠시 보관해 같은 데이터를 즉시 다시 사용할 수 있게 하는 저장 영역입니다. Background 갱신은 기존 화면을 유지한 채 뒤에서 최신 데이터를 다시 요청하는 방식입니다. Cache에 사용할 수 있는 데이터가 있으면 기존 화면을 유지하면서 최신 데이터를 확인합니다. 오래된 데이터일 수 있다면 갱신 중 또는 마지막 확인 상태를 필요한 수준에서 알립니다. 재조회가 실패해도 기존 데이터가 여전히 사용 가능한지 업무 기준에 따라 판단하고, 무조건 빈 화면으로 바꾸지 않습니다. 사용자나 계정이 변경되면 이전 사용자의 Cache를 표시하지 않습니다. 6.3 저장과 제출 요청이 진행되는 동안 같은 동작의 연속 실행을 막습니다. 네트워크 오류가 발생해도 사용자가 입력한 값을 가능한 범위에서 보존합니다. 서버 처리 결과가 불명확한 상태에서 성공 또는 실패를 추측하지 않습니다. 결제, 예약, 이용권 사용과 같은 요청은 서버의 중복 방지 계약이 확인되지 않으면 자동 재시도하지 않습니다. Optimistic Update(낙관적 갱신)는 서버 응답을 기다리기 전에 성공한 것처럼 화면을 먼저 바꾸는 방식입니다. 실패 시 되돌리기와 서버 정합성 기준이 확인된 기능에서만 적용합니다.",
    "url": "./../guides/performance/index.html#section-6"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "로딩 UI 선택 기준",
    "excerpt": "프로젝트에 이미 설치된 shadcn/ui 컴포넌트와 프로젝트 UI 컴포넌트를 새 구현보다 우선합니다. shadcn/ui의 Skeleton , Spinner, Progress와 Toast 계열은 표시 목적에 맞게 선택하고 모든 로딩 상태에 하나의 컴포넌트를 일괄 적용하지 않습니다. Skeleton은 최종 콘텐츠가 들어갈 자리를 미리 보여주는 임시 화면입니다. Spinner는 작업이 진행 중임을…",
    "content": "5. 로딩 UI 선택 기준 프로젝트에 이미 설치된 shadcn/ui 컴포넌트와 프로젝트 UI 컴포넌트를 새 구현보다 우선합니다. shadcn/ui의 Skeleton , Spinner, Progress와 Toast 계열은 표시 목적에 맞게 선택하고 모든 로딩 상태에 하나의 컴포넌트를 일괄 적용하지 않습니다. Skeleton은 최종 콘텐츠가 들어갈 자리를 미리 보여주는 임시 화면입니다. Spinner는 작업이 진행 중임을 회전 표시 등으로 알리는 상태입니다. Progress는 완료 정도를 막대나 수치로 보여주는 표시입니다. Toast는 현재 화면을 가리지 않고 잠시 나타났다 사라지는 알림입니다. 5.1 Skeleton Skeleton은 최초 로딩에서 최종 콘텐츠의 구조와 차지할 공간을 예측할 수 있을 때 사용합니다. 실제 콘텐츠와 비슷한 영역을 확보하여 로딩 완료 시 레이아웃 이동을 줄입니다. 화면의 모든 문장과 아이콘을 그대로 복제하지 않고 주요 구조만 표현합니다. 기존 데이터가 있는 백그라운드 갱신에서는 화면 전체를 Skeleton으로 되돌리지 않습니다. 결과가 비어 있는 경우 Skeleton을 계속 표시하지 않고 Empty 상태로 전환합니다. Skeleton 모양, 개수와 표시 시점은 실제 화면 디자인과 설치된 shadcn/ui 소스를 기준으로 결정합니다. 5.2 Spinner와 부분 진행 상태 Spinner는 저장 버튼, 입력 검증과 작은 영역처럼 진행 위치가 명확한 작업에 사용합니다. Spinner만 표시하지 않고 가능한 경우 저장 중 , 불러오는 중 처럼 작업 의미를 함께 전달합니다. 관련 없는 화면 전체를 차단하지 않습니다. 저장 또는 제출 중에는 같은 동작의 중복 실행을 막되 사용자가 취소하거나 다른 영역을 사용할 수 있는지는 업무 특성에 따라 결정합니다. 5.3 Progress 진행률을 실제로 계산할 수 있는 업로드, 다운로드와 단계 작업에서는 Progress 사용을 검토합니다. 실제 진행률을 알 수 없는 일반 API 요청에 임의의 백분율을 표시하지 않습니다. 5.4 Toast와 오류 표시 Toast는 화면 전환 후의 완료 안내나 현재 작업을 가리지 않는 보조 피드백에 사용합니다. 사용자가 내용을 읽고 재시도해야 하는 Timeout, Offline과 입력 오류를 사라지는 Toast에만 의존하지 않습니다. 5.5 Motion과 접근성 로딩과 상태 전환 Motion은 설치된 shadcn/ui 컴포넌트의 기본 동작과 프로젝트 토큰을 우선합니다. 같은 목적의 Animation을 화면마다 새로 만들지 않습니다. Motion은 로딩, 전환과 상태 변화를 보여주는 움직임 전체를 뜻합니다. aria-live 는 변경된 문구를 보조기술에 알리고, aria-busy 는 해당 영역이 갱신 중임을 전달하며, role=\"status\" 는 현재 진행 상태를 알리는 영역임을 나타냅니다. Motion이 없어도 상태 의미를 이해할 수 있어야 합니다. 반복 Animation은 콘텐츠 확인과 입력을 방해하지 않아야 합니다. 사용자의 Motion 감소 설정을 존중합니다. 로딩과 갱신 상태는 필요한 경우 role=\"status\" , aria-live 또는 aria-busy 처럼 의미에 맞는 접근성 정보를 제공합니다.",
    "url": "./../guides/performance/index.html#section-5"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "리뷰 체크리스트",
    "excerpt": "상태와 UI 최초 로딩과 기존 데이터 갱신을 구분했는가? 로딩, Empty, Timeout, Offline과 오류가 같은 상태로 처리되지 않는가? Skeleton, Spinner, Progress와 Toast를 목적에 맞게 선택했는가? 기존 shadcn/ui와 프로젝트 컴포넌트를 우선 사용했는가? 로딩과 Motion이 접근성과 사용자 입력을 방해하지 않는가? 요청 안전성 필요 없어진 요청의…",
    "content": "15. 리뷰 체크리스트 상태와 UI 최초 로딩과 기존 데이터 갱신을 구분했는가? 로딩, Empty, Timeout, Offline과 오류가 같은 상태로 처리되지 않는가? Skeleton, Spinner, Progress와 Toast를 목적에 맞게 선택했는가? 기존 shadcn/ui와 프로젝트 컴포넌트를 우선 사용했는가? 로딩과 Motion이 접근성과 사용자 입력을 방해하지 않는가? 요청 안전성 필요 없어진 요청의 취소 신호가 실제 fetch 까지 전달되는가? 늦게 도착한 이전 응답이 최신 화면을 덮어쓰지 않는가? 중복 제출을 줄이고 서버의 중복 처리 계약도 확인했는가? Timeout과 사용자 취소를 구분하는가? 변경 요청을 안전성 확인 없이 자동 재시도하지 않는가? 사용자 상태와 복구 느린 요청과 실패 때문에 사용자 입력이 사라지지 않는가? 기존 데이터를 유지할 수 있는 갱신에서 화면을 비우지 않는가? 실패 후 사용자가 재시도, 취소 또는 이전 화면 이동을 할 수 있는가? 연결 복구 후 필요한 요청만 다시 실행하는가? 다른 사용자의 Cache와 저장 데이터가 노출되지 않는가? 검증 근거 정상, 저속, API 지연과 연결 중단 환경을 구분해 확인했는가? 사용할 수 있는 Backend 환경을 먼저 확인하고, Mock 도구의 Front-end 테스트 범위와 관리 책임을 프로젝트 내부에서 정했는가? 변경 전후를 같은 조건에서 비교했는가? 미확정 Timeout, 재시도와 성능 기준을 임의로 확정하지 않았는가?",
    "url": "./../guides/performance/index.html#section-15"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "문서 목적",
    "excerpt": "이 문서는 네트워크 응답이 느리거나 요청 도중 연결이 끊기는 환경에서도 Front-end가 사용자 입력, 화면 상태와 요청의 안전성을 유지하기 위한 판단 기준을 제공합니다. 빠른 개발 환경에서 정상 응답만 확인하는 것으로 작업을 완료하지 않습니다. 정상 네트워크, 저속 네트워크, 서버 응답 지연과 연결 중단 조건에서 화면이 어떤 상태를 보여주고 사용자가 어떻게 복구할 수 있는지 함께 검증합니…",
    "content": "1. 문서 목적 이 문서는 네트워크 응답이 느리거나 요청 도중 연결이 끊기는 환경에서도 Front-end가 사용자 입력, 화면 상태와 요청의 안전성을 유지하기 위한 판단 기준을 제공합니다. 빠른 개발 환경에서 정상 응답만 확인하는 것으로 작업을 완료하지 않습니다. 정상 네트워크, 저속 네트워크, 서버 응답 지연과 연결 중단 조건에서 화면이 어떤 상태를 보여주고 사용자가 어떻게 복구할 수 있는지 함께 검증합니다. Core Web Vitals, 번들 크기와 렌더링 성능도 확인하지만 이 문서의 우선 대상은 네트워크 지연 시 Front-end의 처리와 사용자 경험 입니다. 이 문서를 읽는 기준 이 문서의 “느림”은 하나의 원인만 뜻하지 않습니다. 네트워크 전송이 느린 경우, 서버 응답이 늦는 경우, 큰 JavaScript나 이미지 때문에 화면 표시가 늦는 경우를 구분해 확인합니다. 모든 화면에 Skeleton, Timeout, 재시도와 Offline 기능을 전부 구현하라는 뜻이 아닙니다. 실제 기능에 존재하는 위험과 사용자 영향에 해당하는 항목만 적용합니다. Front-end가 독립적으로 정할 수 있는 로딩 표현, 입력 보존과 브라우저 검증 방법은 현재 기준으로 사용합니다. API 처리 시간, 멱등성, Offline 업무 범위와 성능 합격 수치처럼 다른 담당 영역이나 제품 결정이 필요한 내용은 TBD 입니다. 용어는 처음 나오는 위치에서 의미를 설명합니다. 같은 용어가 다시 나오면 앞에서 정의한 의미로 사용합니다.",
    "url": "./../guides/performance/index.html#section-1"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "성능 측정과 회귀 확인",
    "excerpt": "대표 화면과 핵심 사용자 흐름을 같은 기기, 같은 Build와 같은 네트워크 조건에서 변경 전후로 비교합니다. 성능 회귀(Performance Regression)는 변경 전보다 화면 표시나 입력 반응이 느려지는 문제입니다. 같은 조건에서 변경 전후를 비교해야 코드 변경의 영향을 구분할 수 있습니다. Core Web Vitals(사용자가 체감하는 웹 성능을 나타내는 Google의 핵심 지표)…",
    "content": "13. 성능 측정과 회귀 확인 대표 화면과 핵심 사용자 흐름을 같은 기기, 같은 Build와 같은 네트워크 조건에서 변경 전후로 비교합니다. 성능 회귀(Performance Regression)는 변경 전보다 화면 표시나 입력 반응이 느려지는 문제입니다. 같은 조건에서 변경 전후를 비교해야 코드 변경의 영향을 구분할 수 있습니다. Core Web Vitals(사용자가 체감하는 웹 성능을 나타내는 Google의 핵심 지표)의 LCP, CLS와 INP 초기 요청 수와 전송량 JavaScript Bundle과 화면별 Chunk 크기 주요 이미지, 폰트와 외부 Script의 로딩 순서 긴 Main Thread 작업과 입력 반응 지연 최초 로딩과 기존 데이터 갱신의 체감 차이 LCP(Largest Contentful Paint)는 화면의 주요 콘텐츠가 표시되는 시간, CLS(Cumulative Layout Shift)는 로딩 중 화면 요소가 예상치 않게 이동한 정도, INP(Interaction to Next Paint)는 클릭·입력 후 화면이 반응하기까지의 시간을 나타냅니다. JavaScript Chunk는 화면이나 기능별로 나눠 불러오는 Bundle 조각이고, Main Thread는 브라우저가 JavaScript 실행과 화면 계산을 처리하는 주 작업 흐름입니다. Lighthouse는 브라우저에서 성능·접근성 등을 점검하는 도구입니다. 단일 종합 점수만으로 합격 여부를 결정하지 않고 측정 환경, 대상 화면, 변경 전후 값과 느려진 원인을 함께 기록합니다. 미확정 정책 대표 기기와 브라우저 정상 및 저속 네트워크 Profile 화면별 성능 Budget과 허용 회귀 범위 운영 환경의 실제 사용자 성능 측정 도구 CI에서 자동 검사할 성능 항목과 실패 기준 위 항목은 실제 애플리케이션, 사용자 환경과 배포 구성이 확인된 뒤 확정합니다. 성능 Budget은 화면 표시 시간, Bundle 크기와 전송량 등에 미리 정하는 허용 한도입니다. CI(Continuous Integration)는 변경된 코드를 자동 검사하는 과정이며, 어떤 수치를 실패로 처리할지는 현재 미정입니다.",
    "url": "./../guides/performance/index.html#section-13"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "작업 및 검증 흐름",
    "excerpt": "기능에서 필요한 조회와 변경 요청을 구분합니다. 최초 로딩, 갱신, 성공, Empty, Timeout, Offline과 오류 상태를 정의합니다. 설치된 shadcn/ui와 기존 프로젝트 컴포넌트에서 표시 방식을 선택합니다. 해당 위험이 있는 기능에서 취소, 순서 역전, 중복 실행과 입력 보존을 검토하고 필요한 항목만 구현합니다. 계약 확정 후 사용할 수 있는 Backend 환경과 필요한 경우…",
    "content": "14. 작업 및 검증 흐름 기능에서 필요한 조회와 변경 요청을 구분합니다. 최초 로딩, 갱신, 성공, Empty, Timeout, Offline과 오류 상태를 정의합니다. 설치된 shadcn/ui와 기존 프로젝트 컴포넌트에서 표시 방식을 선택합니다. 해당 위험이 있는 기능에서 취소, 순서 역전, 중복 실행과 입력 보존을 검토하고 필요한 항목만 구현합니다. 계약 확정 후 사용할 수 있는 Backend 환경과 필요한 경우 승인된 계약 기반의 Front-end 재현 도구에서 정상 응답과 API 지연을 확인합니다. 실제 Network Throttling과 연결 중단 환경에서 대표 화면을 확인합니다. 변경 전후 성능과 실패 복구 결과를 기록합니다. Lint, Type Check, Test와 Build 결과를 함께 확인한 뒤 사람이 승인합니다.",
    "url": "./../guides/performance/index.html#section-14"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "적용 범위와 책임",
    "excerpt": "이 문서는 다음 작업에 적용합니다. 화면 최초 진입과 데이터 조회 검색, 필터와 페이지 이동에 따른 연속 요청 폼 저장, 예약, 이용권 사용과 결제처럼 중복 실행 위험이 있는 요청 이미지, 폰트와 외부 Script를 포함한 초기 리소스 로딩 Web과 WebView의 저속, 불안정 및 연결 중단 환경 로딩, 갱신, 빈 결과, Timeout, Offline과 오류 상태 검증 Front-end는…",
    "content": "2. 적용 범위와 책임 이 문서는 다음 작업에 적용합니다. 화면 최초 진입과 데이터 조회 검색, 필터와 페이지 이동에 따른 연속 요청 폼 저장, 예약, 이용권 사용과 결제처럼 중복 실행 위험이 있는 요청 이미지, 폰트와 외부 Script를 포함한 초기 리소스 로딩 Web과 WebView의 저속, 불안정 및 연결 중단 환경 로딩, 갱신, 빈 결과, Timeout, Offline과 오류 상태 검증 Front-end는 요청 상태를 구분하고, 사용자 입력을 보존하며, 불필요한 요청을 취소하고, 중복 실행을 줄이며, 사용자가 실패에서 복구할 수 있는 화면을 제공합니다. 권한, 데이터 정합성(여러 요청과 저장 결과가 서로 모순되지 않는 상태), 중복 처리와 멱등성은 서버 계약에서 보장되어야 하는 영역입니다. 멱등성(Idempotency)은 같은 요청이 여러 번 전달돼도 결과가 한 번 처리한 것과 같도록 만드는 성질입니다. 실제 지원 방식은 아직 미정이며, UI에서 버튼을 비활성화하는 것만으로 지원되고 있다고 가정하지 않습니다. 기획 흐름과 Backend API 계약이 확정되기 전에는 endpoint, method, status, 요청·응답 필드, parser, fixture, handler와 Mock을 구현하지 않습니다. 이 단계에서는 필요한 화면 상태와 Backend 확인 질문만 정리하고, 담당자가 승인한 계약과 개발 환경이 전달된 뒤 네트워크 코드를 구현합니다. Swagger 또는 OpenAPI 제공도 확정 전에는 가정하지 않습니다. 데이터베이스 Query Cache, CDN 구성, API Gateway, 서버 Transaction과 운영 도구 선정은 이 문서에서 확정하지 않습니다.",
    "url": "./../guides/performance/index.html#section-2"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "지연 예방과 전송 성능",
    "excerpt": "네트워크 지연을 UI로 가리는 것만으로 완료하지 않습니다. 초기 화면에 필요하지 않은 전송과 실행을 줄여 사용자가 기다리는 원인도 함께 확인합니다. Bundle은 브라우저에 전달되는 JavaScript 묶음이고, 지연 로딩(Lazy Loading)은 화면에 당장 필요하지 않은 코드나 이미지를 나중에 불러오는 방식입니다. CDN(Content Delivery Network)은 이미지와 정적 파…",
    "content": "10. 지연 예방과 전송 성능 네트워크 지연을 UI로 가리는 것만으로 완료하지 않습니다. 초기 화면에 필요하지 않은 전송과 실행을 줄여 사용자가 기다리는 원인도 함께 확인합니다. Bundle은 브라우저에 전달되는 JavaScript 묶음이고, 지연 로딩(Lazy Loading)은 화면에 당장 필요하지 않은 코드나 이미지를 나중에 불러오는 방식입니다. CDN(Content Delivery Network)은 이미지와 정적 파일을 사용자와 가까운 서버에서 전달하는 구성입니다. 실제 CDN과 API 구조는 이 Front-end 가이드에서 확정하지 않습니다. 초기 화면의 필수 데이터와 후순위 데이터를 구분합니다. 요청 수, 전송량과 같은 데이터의 중복 요청을 확인합니다. 화면에 필요한 필드와 리소스만 요청하되 API 방식을 Front-end 문서에서 임의로 변경하지 않습니다. 이미지 크기와 표시 크기를 맞추고 화면 밖 리소스의 지연 로딩을 검토합니다. 폰트와 외부 Script가 핵심 콘텐츠 표시를 막는지 확인합니다. 새 package를 추가할 때 초기 Bundle과 Client 실행 비용을 확인합니다. Cache는 데이터 수명, 사용자 경계와 무효화 조건이 확인된 데이터에만 적용합니다.",
    "url": "./../guides/performance/index.html#section-10"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "취소, 순서 역전과 중복 요청",
    "excerpt": "7.1 필요 없어진 요청 취소 화면 이동, 검색어 변경과 필터 변경으로 결과가 더 이상 필요하지 않으면 요청 취소 신호를 실제 fetch 까지 전달합니다. 공통 요청 함수의 기본 연결은 API 요청 기반 구현 예시 를 따릅니다. 요청 취소는 사용자에게 보여줄 서버 오류와 구분합니다. 취소된 이전 요청 때문에 현재 화면에 오류 메시지를 표시하지 않습니다. 7.2 응답 순서 역전 방지 검색어 A…",
    "content": "7. 취소, 순서 역전과 중복 요청 7.1 필요 없어진 요청 취소 화면 이동, 검색어 변경과 필터 변경으로 결과가 더 이상 필요하지 않으면 요청 취소 신호를 실제 fetch 까지 전달합니다. 공통 요청 함수의 기본 연결은 API 요청 기반 구현 예시 를 따릅니다. 요청 취소는 사용자에게 보여줄 서버 오류와 구분합니다. 취소된 이전 요청 때문에 현재 화면에 오류 메시지를 표시하지 않습니다. 7.2 응답 순서 역전 방지 검색어 A 요청 뒤에 검색어 B 요청을 보냈는데 A 가 나중에 도착할 수 있습니다. 화면은 최신 검색 조건과 Query Key에 해당하는 결과만 반영해야 합니다. Query Key는 조회 결과를 구분하는 식별값입니다. 검색어, 필터, 페이지와 사용자처럼 결과를 바꾸는 조건이 빠지면 서로 다른 요청이 같은 Cache 데이터로 취급될 수 있습니다. 요청 조건을 Query Key에 포함합니다. 조건이 변경되면 이전 요청을 취소하거나 결과 적용 대상을 확인합니다. 전역 Loading Boolean 하나로 여러 요청의 상태를 함께 관리하지 않습니다. 7.3 중복 요청 방지 동일한 조회를 여러 컴포넌트가 따로 요청하지 않도록 Query Cache와 기존 데이터 경계를 우선 확인합니다. 버튼 비활성화와 진행 상태로 의도하지 않은 연속 제출을 줄입니다. Client의 중복 방지만 믿지 않고 변경 API의 멱등성 또는 중복 처리 계약을 Backend와 확인합니다.",
    "url": "./../guides/performance/index.html#section-7"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "테스트 환경 구분",
    "excerpt": "대역폭(Bandwidth)은 일정 시간에 전송할 수 있는 데이터 양이고, 지연시간(Latency)은 요청이 오가는 데 걸리는 시간입니다. Network Throttling은 브라우저 개발자 도구에서 대역폭과 지연시간을 제한해 느린 연결을 재현하는 기능입니다. 서버가 내부 처리 때문에 늦게 응답하는 상황과는 원인이 다릅니다. 테스트 환경 재현 대상 확인 내용 정상 네트워크 일반 개발 환경 정상…",
    "content": "11. 테스트 환경 구분 대역폭(Bandwidth)은 일정 시간에 전송할 수 있는 데이터 양이고, 지연시간(Latency)은 요청이 오가는 데 걸리는 시간입니다. Network Throttling은 브라우저 개발자 도구에서 대역폭과 지연시간을 제한해 느린 연결을 재현하는 기능입니다. 서버가 내부 처리 때문에 늦게 응답하는 상황과는 원인이 다릅니다. 테스트 환경 재현 대상 확인 내용 정상 네트워크 일반 개발 환경 정상 기능과 기준 측정값 네트워크 제한 낮은 대역폭과 높은 지연 Bundle, 이미지와 API를 포함한 실제 전송 지연 API 응답 지연 실제 Backend 환경 또는 승인된 계약 기반의 Front-end 재현 도구 로딩 UI, 입력 보존, 취소와 Timeout 처리 연결 중단 요청 전 또는 요청 도중 Offline 오류 구분, 화면 유지와 복구 동작 불안정 연결 실패와 복구 반복 재시도, 중복 요청과 재연결 갱신 브라우저의 Network Throttling은 대역폭과 지연을 포함한 전송 환경을 확인하는 데 사용합니다. API 처리 지연과 오류 상태는 사용할 수 있는 Backend 개발·테스트 환경이 있다면 먼저 확인하되, 별도 재현 환경이 제공된다고 가정하지 않습니다. 승인된 API 계약이 있고 실제 환경에서 필요한 상태를 반복 재현하기 어렵다면 MSW(Mock Service Worker, 브라우저 요청 경계에서 테스트 응답을 재현하는 도구) 같은 방식을 Front-end 테스트 범위에서 선택할 수 있습니다. 도입 범위와 관리 책임은 Front-end 책임자 또는 프로젝트 담당자와 정하고 Backend에는 계약을 대신하지 않는 도구임을 공유하며, 실제 Backend 연동 검증을 대신하지 않습니다. Chrome에서 저속 네트워크와 Offline 확인 확인할 화면을 연 뒤 Chrome 개발자 도구의 Network 탭으로 이동합니다. 캐시 영향을 줄이기 위해 개발자 도구가 열린 상태에서 Disable cache 를 선택합니다. Throttling 목록에서 제공되는 저속 Profile을 선택합니다. Chrome 버전에 따라 Profile 이름이 다를 수 있으므로 팀에서 선택한 Profile 이름과 조건을 결과에 기록합니다. 페이지를 새로고침하고 최초 로딩, Skeleton 또는 Spinner, 이미지·폰트, API 완료 순서와 Layout 이동을 확인합니다. 기존 데이터가 있는 화면에서는 다시 조회해 전체 화면이 불필요하게 초기화되지 않는지 확인합니다. Throttling을 Offline 으로 바꿔 화면 진입 전 연결 없음과 요청 도중 연결 중단을 각각 확인합니다. 다시 Online 으로 전환해 입력값과 기존 화면이 보존되는지, 재시도 또는 자동 갱신이 중복 요청 없이 복구되는지 확인합니다. 저속 Profile은 실제 서버 처리 지연과 같지 않습니다. Chrome Throttling은 전송 환경 검증에 사용하고, 특정 API의 긴 처리·오류·응답 순서 역전은 실제 환경 또는 승인된 계약에서 파생한 Front-end 재현 도구로 별도 확인합니다.",
    "url": "./../guides/performance/index.html#section-11"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "핵심 원칙",
    "excerpt": "사용자의 네트워크가 항상 빠르고 안정적이라고 가정하지 않습니다. 로딩 때문에 기존 데이터, 사용자 입력과 완료된 작업을 불필요하게 제거하지 않습니다. 최초 로딩과 기존 데이터를 유지한 갱신을 같은 화면으로 처리하지 않습니다. 로딩, 성공, 빈 결과, 오류, Timeout과 Offline을 서로 다른 상태로 구분합니다. 사용자가 더 이상 필요로 하지 않는 요청은 가능한 범위에서 취소합니다. 늦…",
    "content": "3. 핵심 원칙 사용자의 네트워크가 항상 빠르고 안정적이라고 가정하지 않습니다. 로딩 때문에 기존 데이터, 사용자 입력과 완료된 작업을 불필요하게 제거하지 않습니다. 최초 로딩과 기존 데이터를 유지한 갱신을 같은 화면으로 처리하지 않습니다. 로딩, 성공, 빈 결과, 오류, Timeout과 Offline을 서로 다른 상태로 구분합니다. 사용자가 더 이상 필요로 하지 않는 요청은 가능한 범위에서 취소합니다. 늦게 도착한 이전 응답이 최신 화면을 덮어쓰지 않게 합니다. 조회와 변경 요청의 재시도 정책을 구분합니다. 정상 환경뿐 아니라 저속과 연결 중단 환경의 검증 결과를 작업 근거로 남깁니다.",
    "url": "./../guides/performance/index.html#section-3"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "화면 상태 구분",
    "excerpt": "화면 상태는 HTTP Status Code를 그대로 보여주는 분류가 아니라 사용자가 현재 상황과 다음 행동을 이해하도록 만드는 UI 상태입니다. 예를 들어 요청이 성공했더라도 결과가 없으면 Empty, 연결이 끊겼다면 Offline, 정해진 대기 시간을 넘겨 요청을 종료했다면 Timeout으로 구분합니다. 상태 의미 Front-end 기본 처리 최초 로딩 표시할 기존 데이터 없이 첫 요청 진…",
    "content": "4. 화면 상태 구분 화면 상태는 HTTP Status Code를 그대로 보여주는 분류가 아니라 사용자가 현재 상황과 다음 행동을 이해하도록 만드는 UI 상태입니다. 예를 들어 요청이 성공했더라도 결과가 없으면 Empty, 연결이 끊겼다면 Offline, 정해진 대기 시간을 넘겨 요청을 종료했다면 Timeout으로 구분합니다. 상태 의미 Front-end 기본 처리 최초 로딩 표시할 기존 데이터 없이 첫 요청 진행 화면 구조와 작업 특성에 맞는 로딩 UI 제공 갱신 중 기존 데이터를 표시한 상태에서 재조회 기존 데이터를 유지하고 갱신 중임을 필요한 수준에서 표시 변경 중 저장, 제출 또는 삭제 요청 진행 관련 영역에 진행 상태를 표시하고 중복 실행 방지 성공 요청과 응답 검증 완료 최신 결과를 표시하고 필요한 후속 상태 정리 빈 결과 요청은 성공했으나 표시할 데이터가 없음 로딩을 끝내고 기능에 맞는 Empty 상태 표시 지연 요청은 진행 중이지만 평소보다 오래 걸림 작업 진행 여부와 사용 가능한 다른 동작을 안내 Timeout 정해진 대기 한도를 초과해 요청 종료 실패를 알리고 안전한 경우 재시도 동작 제공 Offline 연결이 없거나 요청 도중 연결 상실 기존 상태를 보존하고 연결 필요 여부와 복구 동작 안내 오류 서버, 권한, 입력 또는 응답 검증 실패 오류 의미에 맞는 문구와 가능한 복구 동작 제공 브라우저의 연결 상태만으로 실제 API 통신 가능 여부를 확정하지 않습니다. 연결 표시가 Online이어도 서버, DNS, Proxy 또는 WebView 환경 때문에 요청은 실패할 수 있으므로 실제 요청 결과를 기준으로 화면 상태를 결정합니다.",
    "url": "./../guides/performance/index.html#section-4"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "화면 유형별 검증 후보",
    "excerpt": "아래 항목은 모든 화면의 확정 요구가 아닙니다. 실제 기능과 위험에 해당하는 시나리오만 선택해 검증합니다. 조회 화면 저속 네트워크에서 최초 화면에 진입합니다. 기존 데이터가 있는 상태에서 재조회합니다. 검색어와 필터를 빠르게 연속 변경합니다. 이전 요청이 최신 요청보다 늦게 도착하게 합니다. 결과 없음과 응답 지연을 구분합니다. 요청 도중 화면을 이동합니다. 변경 화면 저장 또는 제출 버튼…",
    "content": "12. 화면 유형별 검증 후보 아래 항목은 모든 화면의 확정 요구가 아닙니다. 실제 기능과 위험에 해당하는 시나리오만 선택해 검증합니다. 조회 화면 저속 네트워크에서 최초 화면에 진입합니다. 기존 데이터가 있는 상태에서 재조회합니다. 검색어와 필터를 빠르게 연속 변경합니다. 이전 요청이 최신 요청보다 늦게 도착하게 합니다. 결과 없음과 응답 지연을 구분합니다. 요청 도중 화면을 이동합니다. 변경 화면 저장 또는 제출 버튼을 연속으로 실행합니다. 작성 중인 상태에서 요청을 실패시킵니다. 요청 도중 연결을 끊습니다. Timeout 뒤 같은 요청을 다시 실행합니다. 서버 처리가 완료되었지만 응답만 받지 못한 상황을 검토합니다. 연결 복구 화면 진입 전부터 Offline인 상황을 확인합니다. 화면 사용 중 Offline으로 전환합니다. 연결 복구 후 현재 화면의 데이터가 필요한 범위에서 갱신되는지 확인합니다. 다른 사용자로 전환한 뒤 이전 Cache가 노출되지 않는지 확인합니다.",
    "url": "./../guides/performance/index.html#section-12"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "Offline과 연결 복구",
    "excerpt": "Offline은 브라우저가 연결 없음으로 판단했거나 실제 요청이 네트워크 문제로 실패한 상태입니다. navigator.onLine 같은 연결 표시만으로 서버 접속 가능 여부를 확정하지 않고 실제 요청 결과도 함께 봅니다. Offline 전환 시 현재 화면과 작성 중인 입력을 가능한 범위에서 보존합니다. 서버 확인이 필요한 기능은 사용할 수 없는 이유와 필요한 복구 동작을 안내합니다. 승인된…",
    "content": "9. Offline과 연결 복구 Offline은 브라우저가 연결 없음으로 판단했거나 실제 요청이 네트워크 문제로 실패한 상태입니다. navigator.onLine 같은 연결 표시만으로 서버 접속 가능 여부를 확정하지 않고 실제 요청 결과도 함께 봅니다. Offline 전환 시 현재 화면과 작성 중인 입력을 가능한 범위에서 보존합니다. 서버 확인이 필요한 기능은 사용할 수 없는 이유와 필요한 복구 동작을 안내합니다. 승인된 Cache가 있으면 오래된 정보일 수 있음을 구분하여 표시합니다. 연결 복구 후 모든 요청을 동시에 다시 실행하지 않고 현재 화면에 필요한 데이터부터 갱신합니다. Offline 중 변경 요청을 Queue(나중에 처리할 작업 대기열)에 저장해 연결 복구 후 전송하는 기능은 중복, 순서, 보안과 충돌 해결 정책이 확정된 경우에만 도입합니다. Offline에서 제공할 화면, 저장 대상, 데이터 수명, 재연결 동기화와 충돌 처리 정책은 실제 서비스 및 보안 기준 확정 후 결정합니다.",
    "url": "./../guides/performance/index.html#section-9"
  },
  {
    "document": "Front-End 네트워크 지연 대응 및 성능 검증 가이드",
    "section": "Timeout과 재시도",
    "excerpt": "Timeout은 화면을 바꾸는 컴포넌트가 아니라 요청을 종료할지 판단하는 통신 정책입니다. shadcn/ui는 Timeout 이후 상태와 복구 동작을 표시하는 데 사용하고 Timeout 값 자체를 결정하지 않습니다. Timeout은 정해진 대기 시간을 넘긴 요청을 Client가 더 기다리지 않고 종료하는 판단입니다. 서버 작업까지 취소됐다는 뜻은 아니므로 저장·결제 같은 변경 요청은 Time…",
    "content": "8. Timeout과 재시도 Timeout은 화면을 바꾸는 컴포넌트가 아니라 요청을 종료할지 판단하는 통신 정책입니다. shadcn/ui는 Timeout 이후 상태와 복구 동작을 표시하는 데 사용하고 Timeout 값 자체를 결정하지 않습니다. Timeout은 정해진 대기 시간을 넘긴 요청을 Client가 더 기다리지 않고 종료하는 판단입니다. 서버 작업까지 취소됐다는 뜻은 아니므로 저장·결제 같은 변경 요청은 Timeout 이후에도 서버에서 완료됐을 가능성을 고려합니다. 재시도(Retry)는 실패한 요청을 다시 보내는 동작입니다. 모든 API에 하나의 Timeout 숫자를 근거 없이 적용하지 않습니다. 요청 특성, 정상 처리 시간과 사용자가 기다릴 수 있는 시간을 기준으로 결정합니다. Timeout 발생 시 실제 서버 처리가 끝났을 가능성이 있는 변경 요청은 결과를 단정하지 않습니다. Timeout과 사용자가 직접 취소한 요청을 구분합니다. 조회 요청은 제한된 재시도를 검토할 수 있지만 무한 재시도하지 않습니다. 변경 요청은 멱등성과 중복 처리 계약이 확인된 경우에만 자동 재시도를 검토합니다. 재시도 중에도 사용자가 현재 상태와 중단 방법을 이해할 수 있어야 합니다. 미확정 정책 API 유형별 Timeout 값 조회 요청의 재시도 횟수와 간격 재연결 시 자동 재조회 범위 변경 요청의 멱등성 Key와 중복 응답 처리 장시간 작업의 취소 API와 진행 상태 조회 방식 위 항목은 실제 API, Backend 처리 시간과 제품 UX가 확인된 뒤 확정합니다.",
    "url": "./../guides/performance/index.html#section-8"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "개발과 배포 흐름",
    "excerpt": "다국어 작업은 추출, 번역, 검증과 컴파일 단계를 분리합니다. { \"scripts\" : { \"i18n:extract\" : \"lingui extract\" , \"i18n:watch\" : \"lingui extract --watch\" , \"i18n:translate\" : \"tsx scripts/translate.ts\" , \"i18n:check\" : \"tsx scripts/check-i18n.ts\"…",
    "content": "10. 개발과 배포 흐름 다국어 작업은 추출, 번역, 검증과 컴파일 단계를 분리합니다. { \"scripts\" : { \"i18n:extract\" : \"lingui extract\" , \"i18n:watch\" : \"lingui extract --watch\" , \"i18n:translate\" : \"tsx scripts/translate.ts\" , \"i18n:check\" : \"tsx scripts/check-i18n.ts\" , \"i18n:compile\" : \"lingui compile --typescript\" , \"i18n:update\" : \"pnpm i18n:extract && pnpm i18n:translate && pnpm i18n:check && pnpm i18n:compile\" } } 개발자는 문구 작업을 마친 뒤 pnpm i18n:update 한 번으로 추출, 자동 번역, 검증과 컴파일을 순서대로 실행합니다. 파일 저장마다 LLM을 호출하지 않으며 i18n:watch 는 JSON 추출만 자동으로 수행합니다. 코드에 한국어 메시지를 작성하거나 수정합니다. i18n:extract 로 카탈로그를 갱신합니다. i18n:translate 로 누락 번역을 생성합니다. 생성된 Diff와 고위험 문구를 검토합니다. i18n:check 로 구조와 변수를 검증합니다. i18n:compile 로 실행 카탈로그를 생성합니다. TypeScript 검사, Lint, Test와 Build를 실행합니다. 로컬 LLM은 개발자 장비의 선택적 생성 도구입니다. CI와 운영 Build가 로컬 Ollama의 실행 여부에 의존하지 않도록 합니다. 개발자 장비 pnpm i18n:update → 번역 JSON Diff 검토 → JSON과 소스 코드 커밋 CI 및 배포 pnpm i18n:check → pnpm i18n:compile → TypeScript 검사, Lint, Test와 Build Flutter 앱의 검증은 Web 번역 카탈로그 생성과 분리합니다. Flutter CI는 패키지 설치, 정적 검사, 테스트와 플랫폼 Build를 수행하고 Bridge capability 및 번역 요청·응답 계약을 대표 기기에서 확인합니다. Flutter 앱 flutter pub get → flutter analyze → flutter test → Android App Bundle Build → iOS No-Codesign Build → Flutter–WebView Bridge 통합 검사 CI에서는 자동 번역을 실행하지 않고 다음 상태를 검사합니다. 소스에서 추출한 메시지와 카탈로그가 동기화되어 있는가? 지원 언어에 누락 번역이 있는가? 모든 카탈로그의 ID와 원문 연결이 유효한가? 원문과 번역의 변수, ICU 선택문과 요소 자리표시자가 일치하는가? 실행용 카탈로그가 정상적으로 컴파일되는가? Flutter와 WebView의 locale 및 기기 번역 계약이 호환되는가? 누락 번역이 있으면 CI가 임의로 번역하지 않고 실패 원인을 표시합니다. 개발자가 로컬 번역 명령을 실행하고 결과를 검토한 뒤 반영합니다.",
    "url": "./../guides/i18n/index.html#section-10"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "검증 기준",
    "excerpt": "번역 완료 여부는 JSON 파싱 성공만으로 판단하지 않습니다. 카탈로그 구조 모든 대상 언어에 원본과 같은 메시지 ID가 존재합니다. translation 은 문자열이며 예상하지 않은 객체나 배열을 허용하지 않습니다. 원본 카탈로그에 없는 ID를 대상 카탈로그에 임의로 추가하지 않습니다. 생성 중 오류가 발생하면 일부 결과만 저장하지 않습니다. 메시지 보존 {name} , {count} 등…",
    "content": "11. 검증 기준 번역 완료 여부는 JSON 파싱 성공만으로 판단하지 않습니다. 카탈로그 구조 모든 대상 언어에 원본과 같은 메시지 ID가 존재합니다. translation 은 문자열이며 예상하지 않은 객체나 배열을 허용하지 않습니다. 원본 카탈로그에 없는 ID를 대상 카탈로그에 임의로 추가하지 않습니다. 생성 중 오류가 발생하면 일부 결과만 저장하지 않습니다. 메시지 보존 {name} , {count} 등 변수 이름과 집합이 원문과 같습니다. ICU plural , select , selectOrdinal 구조가 컴파일됩니다. React 요소 자리표시자가 누락되거나 중복되지 않습니다. URL, 이메일, 코드, 제품명과 번역 금지 용어가 정책대로 유지됩니다. 줄바꿈과 공백이 UI 의미를 갖는 경우 번역에서도 보존합니다. 실행 동작 지원 언어별 대표 화면을 렌더링할 수 있습니다. 지원하지 않는 디바이스 locale은 영어로 정규화됩니다. 중국어 간체와 일본어 번역 누락 시 영어 fallback이 표시됩니다. 영어 번역도 누락된 경우 한국어 원문이 표시됩니다. 앱 설정에서 선택한 언어가 디바이스 언어보다 우선합니다. Server와 Client가 다른 언어로 렌더링해 hydration 불일치를 만들지 않습니다. 날짜, 시간, 숫자와 통화도 선택한 locale로 포맷합니다. Flutter 기기 번역 지원 기기에서는 Flutter capability를 받은 뒤에만 번역 UI가 표시됩니다. 미지원 플랫폼·언어와 Bridge가 없는 일반 브라우저에서는 원문을 표시합니다. 모델 다운로드, 오프라인과 번역 실패가 리뷰·게시글 열람을 막지 않습니다. 한국어·영어·일본어·중국어 간 대표 문장을 실제 Android와 iOS 기기에서 확인합니다. 콘텐츠 수정 후 이전 버전의 기기 캐시가 사용되지 않습니다. Flutter 앱과 WebView의 요청 ID, timeout, 취소와 오류 코드가 일치합니다. 번역 품질 리뷰 짧고 문맥이 불분명한 메시지에는 설명 또는 context가 있습니다. 동일 업무 용어가 화면마다 다르게 번역되지 않습니다. 버튼, 제목과 본문이 대상 언어의 모바일 UI 문체에 맞습니다. 번역 후 길이가 늘어난 상태에서도 주요 화면이 깨지지 않습니다. 고위험 문구는 별도 검토 근거가 있습니다.",
    "url": "./../guides/i18n/index.html#section-11"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "동적 콘텐츠와 기기 번역",
    "excerpt": "Lingui와 로컬 Ollama 번역은 서비스가 의미를 관리하고 배포 전에 확정할 수 있는 정적 문구에 적용합니다. 리뷰, 댓글과 게시글처럼 실행 중 계속 생성되는 사용자 콘텐츠는 별도 JSON으로 추출하지 않습니다. 사용자가 번역을 요청한 경우 Next.js WebView가 Flutter 앱의 온디바이스 번역 기능을 Bridge로 호출합니다. 서비스가 의미를 책임지는 문구는 배포 전에 번역…",
    "content": "9. 동적 콘텐츠와 기기 번역 Lingui와 로컬 Ollama 번역은 서비스가 의미를 관리하고 배포 전에 확정할 수 있는 정적 문구에 적용합니다. 리뷰, 댓글과 게시글처럼 실행 중 계속 생성되는 사용자 콘텐츠는 별도 JSON으로 추출하지 않습니다. 사용자가 번역을 요청한 경우 Next.js WebView가 Flutter 앱의 온디바이스 번역 기능을 Bridge로 호출합니다. 서비스가 의미를 책임지는 문구는 배포 전에 번역하고, 사용자가 작성한 문구는 필요한 순간 기기에서 번역합니다. 9.1 콘텐츠 분류 콘텐츠 예시 처리 방식 서비스 정적 문구 버튼, 메뉴, 화면 제목, 안내와 오류 문구 Lingui 추출 후 로컬 LLM으로 번역하고 배포 백엔드 시스템 메시지 주문 상태, 처리 결과와 오류 완성 문장 대신 메시지 코드와 변수를 전달하고 프론트에서 Lingui 적용 사용자 작성 콘텐츠 리뷰, 댓글, 게시글, 채팅과 사용자 소개 원문을 기본 표시하고 요청 시 기기에서 번역 고유 식별값 닉네임, 브랜드명, 모델 번호, URL과 코드 원문 유지 운영·고위험 콘텐츠 공지, 약관, 결제, 환불과 개인정보 문구 언어별 검수본을 관리하며 기기 번역을 확정 문구로 사용하지 않음 9.2 실행 흐름 리뷰·댓글 원문 표시 → 사용자가 ‘번역 보기’ 선택 → WebView가 현재 화면에 필요한 문자열을 Flutter Bridge로 전달 → Flutter가 기기에 설치된 번역 모델로 처리 → WebView가 번역 결과와 ‘기기에서 번역됨’을 표시 → 같은 콘텐츠는 기기 캐시에서 재사용 번역 기능 미지원·모델 미설치·실패 → 원문을 유지하고 다시 시도할 수 있게 표시 전체 목록을 한 번에 번역하지 않습니다. 사용자가 번역을 요청했거나 자동 번역 설정을 켠 경우에도 현재 화면에 보이는 항목만 작은 배치로 처리합니다. 원문 보기 기능을 항상 제공하고 번역 결과임을 화면에 표시합니다. 9.3 Flutter 구성과 지원 기준 Android와 iOS의 동작을 통일하기 위해 Flutter에서 ML Kit 온디바이스 번역을 호출합니다. WebView 연결은 Flutter 공식 webview_flutter , 번역은 Native ML Kit을 Platform Channel로 연결하는 google_mlkit_translation 을 시작 후보로 사용합니다. 번역 패키지는 Google 공식 Flutter 패키지가 아니므로 실제 앱에서 빌드와 대표 언어 조합을 검증한 뒤 Lock File에 반영합니다. 항목 적용 시작 권장값 확인 기준 Flutter·Dart Flutter 3.44 이상 · Dart 3.12 이상 google_mlkit_translation 0.15.1 의 Dart 요구사항 WebView webview_flutter 4.14.1 JavaScript Channel과 결과 콜백 동작 기기 번역 google_mlkit_translation 0.15.1 한국어·영어·일본어·중국어 번역과 모델 관리 iOS Deployment Target 15.5 이상 · 64-bit · Xcode 16 이상 Podfile, Runner Target과 실제 빌드 설정을 동일하게 유지 Android minSdk 24 · targetSdk 35+ · compileSdk 36+ Flutter 지원 범위, ML Kit와 Google Play 정책 dependencies : webview_flutter : ^4.14.1 google_mlkit_translation : ^0.15.1 위 버전은 적용을 시작하기 위한 기준입니다. 실제 도입 시 최신 Flutter Stable, 패키지 변경 기록과 각 스토어 정책을 다시 확인하고 검증된 버전을 pubspec.lock 으로 고정합니다. Flutter 공식 WebView 패키지 Flutter ML Kit 번역 패키지 Flutter 지원 플랫폼 ML Kit 온디바이스 번역 Google Play Target API 정책 ML Kit 번역 표시·사용 지침 9.4 Flutter Bridge와 capability 계약 WebView는 OS 버전이나 설치된 번역 모델을 직접 판단하지 않습니다. Flutter가 플랫폼, 언어 조합과 모델 상태를 확인해 capability로 전달하고, WebView는 available 상태에 따라 번역 UI를 노출합니다. type DeviceTranslationStatus = | 'available' | 'modelDownloadRequired' | 'downloading' | 'unsupportedPlatform' | 'unsupportedLanguage' | 'offline' | 'failed' ; type ContentTranslationRequest = { requestId : string ; id : string ; text : string ; sourceLocale ?: string ; targetLocale : SupportedLocale ; sourceVersion : string ; }; declare global { interface Window { LoungeTranslate ?: { postMessage (message: string ): void }; loungeCapabilities ?: { deviceTranslation : { available : boolean ; status : DeviceTranslationStatus ; supportedLocales : SupportedLocale []; }; }; } } const canTranslate = window. loungeCapabilities ?. deviceTranslation . available === true ; if (canTranslate) { window. LoungeTranslate ?. postMessage ( JSON . stringify ({ type : 'translate' , payload : request }), ); } final controller = WebViewController () .. setJavaScriptMode ( JavaScriptMode .unrestricted) .. addJavaScriptChannel ( 'LoungeTranslate' , onMessageReceived : handleTranslationMessage, ); Flutter는 JavaScript Channel로 받은 요청을 검증하고 ML Kit으로 번역한 뒤 runJavaScript 로 요청 ID와 결과를 반환합니다. 사용자 콘텐츠를 JavaScript 문자열에 직접 보간하지 않고 JSON으로 직렬화하며, 요청 크기, timeout, 취소와 중복 응답은 Bridge 공통 계약으로 관리합니다. 상태 WebView 처리 available 번역 보기 또는 자동 번역 기능 제공 modelDownloadRequired 모델 다운로드 크기와 네트워크 사용을 안내한 뒤 동의 시 진행 downloading 진행 상태를 표시하고 중복 요청 방지 unsupportedPlatform · unsupportedLanguage 번역 UI를 숨기고 원문 표시 offline · failed 원문을 유지하고 필요한 경우 다시 시도 제공 기기 번역은 선택 기능입니다. 지원되지 않는 기기, 언어 조합이나 모델 상태 때문에 리뷰와 게시글 열람이 실패해서는 안 됩니다. 단, 패키지가 요구하는 최소 OS보다 낮은 기기는 번역 기능만 비활성화되는 것이 아니라 앱 설치 대상에서 제외됩니다. 더 낮은 OS에서도 앱 자체를 제공해야 한다면 패키지 도입 전에 별도 Native 구현 또는 지원 정책을 결정합니다. 일반 모바일 WebView에서 브라우저의 페이지 번역 기능을 코드로 강제 실행하는 방식은 공통 기능으로 사용하지 않습니다. Chrome Translator API 역시 모바일을 지원하지 않으므로 WebView 번역 계약으로 전제하지 않습니다. Chrome Translator API 제약 을 함께 확인합니다. 9.5 캐시와 안전 기준 같은 콘텐츠를 반복 번역하지 않도록 결과를 기기에 저장합니다. 캐시 키는 콘텐츠 ID, 원문 버전과 대상 언어를 조합합니다. 원문이 수정되면 버전이 달라지므로 이전 번역을 자동으로 재사용하지 않습니다. const cacheKey = [ 'ugc-translation' , item. id , item. updatedAt , targetLocale, ]. join ( ':' ); 여러 항목과 긴 문장을 저장할 수 있도록 IndexedDB를 우선 검토합니다. Flutter가 관리하는 번역 모델은 언어별 약 30MB이므로 요청된 언어만 내려받습니다. 번역 모델 최초 다운로드에는 네트워크·저장 공간 안내와 진행 상태를 제공합니다. 지원 여부, 모델 준비 상태와 실패 결과를 구분하고 원문을 fallback으로 사용합니다. 번역된 사용자 콘텐츠도 신뢰할 수 없는 입력으로 취급하고 HTML로 직접 삽입하지 않습니다. 기기 번역은 일상적인 사용자 콘텐츠에만 사용하고 법률·결제 문구에는 사용하지 않습니다. 자동 번역 설정은 선택 사항이며 기본값과 데이터·배터리 정책은 제품 요구로 확정합니다.",
    "url": "./../guides/i18n/index.html#section-9"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "로컬 LLM 번역",
    "excerpt": "로컬 LLM 번역기는 추출 도구를 대체하지 않습니다. 추출된 카탈로그에서 번역이 비어 있거나 원문이 바뀐 항목을 찾아 대상 언어의 translation 만 생성합니다. 7.1 누락 번역 선별 scripts/translate.ts 는 대상 언어 카탈로그의 translation 이 비어 있는 항목만 선택합니다. 자동 ID를 기본으로 사용하면 한국어 원문이 바뀔 때 새 ID가 만들어지므로 새 번역…",
    "content": "7. 로컬 LLM 번역 로컬 LLM 번역기는 추출 도구를 대체하지 않습니다. 추출된 카탈로그에서 번역이 비어 있거나 원문이 바뀐 항목을 찾아 대상 언어의 translation 만 생성합니다. 7.1 누락 번역 선별 scripts/translate.ts 는 대상 언어 카탈로그의 translation 이 비어 있는 항목만 선택합니다. 자동 ID를 기본으로 사용하면 한국어 원문이 바뀔 때 새 ID가 만들어지므로 새 번역 대상으로 구분할 수 있습니다. interface CatalogEntry { message : string ; translation : string ; description ?: string ; origin ?: Array <[ string , number ]>; } type Catalog = Record < string , CatalogEntry >; function findMissingTranslations (catalog: Catalog ) { return Object . entries (catalog) . filter (([, entry]) => entry.translation. trim () === '' ) . map (([id, entry]) => ({ id, source : entry.message, description : entry.description, origin : entry.origin, })); } 비어 있는 번역만 생성하고 기존 번역은 보존합니다. 원문 변경으로 새 ID가 생기면 새 항목으로 번역합니다. 명시적 ID의 원문 변경은 별도 원문 Hash로 감지합니다. 전체 재번역은 개발자가 명시적으로 --force 를 전달한 경우에만 허용합니다. 7.2 Ollama 연결과 구조화 응답 Ollama Endpoint와 모델 이름은 코드에 고정하지 않고 환경 변수로 전달합니다. Endpoint 기본값은 개발자 장비의 로컬 API로 제한합니다. 기본 모델은 qwen3.5:4b 를 권장합니다. 약 4.66B 파라미터, 3.4GB 크기의 양자화 모델로 201개 언어권을 지원하여 한·중·일·영 UI 문구 번역과 JSON 형식 준수 사이의 균형이 좋습니다. 구분 모델 대략적인 크기 적용 기준 기본 권장 qwen3.5:4b 3.4GB 속도·번역 품질·구조화 응답의 균형이 필요한 기본 개발 환경 최소 사양 qwen3:1.7b 1.4GB 메모리가 제한된 장비. 짧은 문구 위주로 사용하고 검수를 강화 품질 우선 qwen3.5:9b 6.6GB 긴 안내문, 미묘한 어조 등에서 4B 결과가 부족할 때 선택 위 크기는 Ollama에 표시되는 모델 파일 기준이며 실제 실행 메모리와는 다를 수 있습니다. 팀의 일반 개발 장비에서 동일한 샘플 문구를 번역해 속도, 변수 보존, 용어 일관성을 확인한 뒤 모델 태그를 고정합니다. Qwen 3.5 모델 정보 와 Qwen 3 모델 정보 를 기준으로 크기와 지원 범위를 확인합니다. # 최초 한 번 모델을 내려받습니다. ollama pull qwen3.5:4b const OLLAMA_URL = process.env. OLLAMA_URL ?? 'http://127.0.0.1:11434' ; const OLLAMA_MODEL = process.env. OLLAMA_MODEL ?? 'qwen3.5:4b' ; 번역 전용 translategemma:4b 도 3.3GB급 후보지만, 이 가이드는 번역과 함께 ID 대응, JSON Schema, 변수 보존을 한 번에 요구합니다. 따라서 기본값으로 바로 교체하지 않고 같은 검증 문구로 비교한 뒤 채택합니다. 모델에는 자유 형식 텍스트가 아니라 JSON Schema를 전달합니다. 응답은 요청한 ID, 원문과 번역만 포함하며 추가 필드를 허용하지 않습니다. Ollama의 구조화 출력 은 format 에 JSON Schema를 전달해 응답 형식을 제한합니다. const translationSchema = { type : 'object' , properties : { translations : { type : 'array' , items : { type : 'object' , properties : { id : { type : 'string' }, source : { type : 'string' }, translation : { type : 'string' }, }, required : [ 'id' , 'source' , 'translation' ], additionalProperties : false , }, }, }, required : [ 'translations' ], additionalProperties : false , }; 요청은 Streaming을 끄고 낮은 temperature를 사용합니다. HTTP 실패, JSON 파싱 실패 또는 Schema 불일치는 번역 실패로 처리합니다. async function requestTranslations ( locale: 'zh-CN' | 'ja' | 'en' , messages: unknown [], ) { const response = await fetch ( `${OLLAMA_URL}/api/chat` , { method : 'POST' , headers : { 'Content-Type' : 'application/json' }, body : JSON . stringify ({ model : OLLAMA_MODEL , stream : false , format : translationSchema, options : { temperature : 0 }, messages : [ { role : 'system' , content : createSystemPrompt (locale) }, { role : 'user' , content : JSON . stringify ({ messages }) }, ], }), }); if (!response.ok) { throw new Error ( `Ollama 요청 실패: ${response.status}` ); } const result = await response. json (); return JSON . parse (result.message.content); } { \"translations\" : [ { \"id\" : \"F2kQpA\" , \"source\" : \"{name}님, 환영합니다\" , \"translation\" : \"Welcome, {name}\" } ] } 7.3 프롬프트와 용어집 프롬프트에는 서비스 문맥과 보존 규칙을 포함합니다. 대상 언어만 바꾸고 ID, 원문과 자리표시자는 입력값을 그대로 반환하도록 지시합니다. function createSystemPrompt (locale: string ) { return ` 당신은 모바일 라운지 서비스의 UI 번역기입니다. 원본 언어: 한국어 대상 언어: ${locale} 번역 기준: - 모바일 UI에 맞게 짧고 자연스럽게 번역합니다. - 제품명과 고유명사는 원문을 유지합니다. - {name}, {count} 같은 변수는 변경하지 않습니다. - ICU plural/select 문법과 React 요소 자리표시자를 변경하지 않습니다. - id와 source는 입력값을 그대로 반환합니다. - 중국어는 간체를 사용합니다. - 번역 외의 설명을 반환하지 않습니다. ` ; } 번역 프롬프트에는 최소한 다음 정보를 포함합니다. 서비스와 화면의 성격 원본 언어와 대상 언어 모바일 UI 문체와 존댓말 기준 제품명, 업무 용어와 번역하지 않을 문자열 메시지 설명과 사용 위치 보존할 변수, ICU 문법과 React 요소 자리표시자 번역 외의 설명을 반환하지 않는 출력 규칙 서비스 용어는 별도 용어집으로 관리하고 모든 언어 요청에 함께 전달합니다. 용어집은 제품명과 업무 용어의 번역을 일관되게 유지하는 기준이며 모델의 기존 지식보다 우선합니다. { \"라운지\" : { \"en\" : \"Lounge\" , \"zh-CN\" : \"贵宾休息室\" , \"ja\" : \"ラウンジ\" }, \"이용권\" : { \"en\" : \"Pass\" , \"zh-CN\" : \"使用券\" , \"ja\" : \"利用券\" } } 7.4 배치 처리와 검증 로컬 모델에는 언어별로 작은 배치를 순차 전송합니다. 한 배치의 모든 항목이 검증을 통과한 경우에만 메모리의 카탈로그에 병합하고, 전체 처리가 끝난 뒤 파일을 한 번 저장합니다. const targetLocales = [ 'zh-CN' , 'ja' , 'en' ] as const ; const batchSize = 30 ; for ( const locale of targetLocales) { const catalog = await readCatalog (locale); const missing = findMissingTranslations (catalog); for ( const batch of chunk (missing, batchSize)) { const result = await requestTranslations (locale, batch); validateTranslations (batch, result.translations); mergeTranslations (catalog, result.translations); } await writeCatalog (locale, catalog); } LLM 결과는 다음 조건을 모두 통과해야 저장합니다. 요청한 ID가 모두 있고 요청하지 않은 ID가 없는가? 응답의 source가 요청한 한국어 원문과 같은가? translation이 비어 있지 않은가? {name} , {count} 등 변수 집합이 같은가? ICU 문법과 React 요소 자리표시자가 유지됐는가? 제품명과 번역 금지 용어가 용어집 기준과 일치하는가? function extractVariables (message: string ) { return [...message. matchAll ( /\\{([a-zA-Z_][\\w]*)(?:,|\\})/g )] . map ((match) => match[ 1 ]) . sort (); } function validateVariables (source: string , translation: string ) { const sourceVariables = extractVariables (source); const translatedVariables = extractVariables (translation); if ( JSON . stringify (sourceVariables) !== JSON . stringify (translatedVariables)) { throw new Error ( `번역 변수 불일치: ${source}` ); } } 정규식 검사는 기본 변수 누락을 빠르게 찾기 위한 검사입니다. ICU 전체 문법은 마지막에 lingui compile --strict 로 다시 검증합니다. 한 항목이라도 실패하면 해당 배치를 저장하지 않고 명령을 오류로 종료합니다.",
    "url": "./../guides/i18n/index.html#section-7"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "문서 목적",
    "excerpt": "이 문서는 Native 앱이 호스팅하는 apps/app-webview 에서 개발자가 한국어 문구를 소스 코드에 작성하고, 추출된 메시지를 로컬 LLM으로 번역한 뒤, 실행 환경의 언어에 맞는 번역을 표시하는 기준을 정의합니다. 다국어 처리는 메시지 작성, 번역 생성과 실행 중 언어 선택을 분리합니다. 로컬 LLM은 개발 과정에서 번역 카탈로그를 만드는 데만 사용하고 사용자 요청을 처리하는 실…",
    "content": "1. 문서 목적 이 문서는 Native 앱이 호스팅하는 apps/app-webview 에서 개발자가 한국어 문구를 소스 코드에 작성하고, 추출된 메시지를 로컬 LLM으로 번역한 뒤, 실행 환경의 언어에 맞는 번역을 표시하는 기준을 정의합니다. 다국어 처리는 메시지 작성, 번역 생성과 실행 중 언어 선택을 분리합니다. 로컬 LLM은 개발 과정에서 번역 카탈로그를 만드는 데만 사용하고 사용자 요청을 처리하는 실행 경로에서는 호출하지 않습니다. Flutter 앱은 앱 언어 저장, 디바이스 locale 확인과 온디바이스 번역을 담당합니다. Next.js WebView는 Lingui 카탈로그 로드, 번역 UI와 원문 fallback을 담당하며 두 영역의 요청과 응답은 승인된 WebView Bridge 계약으로 연결합니다. 전체 저장소 구조와 공통화 기준은 Front-End 저장소 구조 기준 을 우선합니다. Next.js WebView의 구현 기준은 Front-End 개발 가이드 를 함께 따릅니다.",
    "url": "./../guides/i18n/index.html#section-1"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "실행 언어 결정",
    "excerpt": "실행 언어는 다음 우선순위로 결정합니다. 사용자가 앱 설정에서 직접 선택하고 저장한 언어 Flutter 앱이 WebView 초기 요청에 전달한 앱 또는 디바이스 언어 HTTP Accept-Language 브라우저의 navigator.languages 영어 언어 코드는 BCP 47 형식으로 받은 뒤 프로젝트가 지원하는 언어로 정규화합니다. const supportedLocales = [ 'ko…",
    "content": "8. 실행 언어 결정 실행 언어는 다음 우선순위로 결정합니다. 사용자가 앱 설정에서 직접 선택하고 저장한 언어 Flutter 앱이 WebView 초기 요청에 전달한 앱 또는 디바이스 언어 HTTP Accept-Language 브라우저의 navigator.languages 영어 언어 코드는 BCP 47 형식으로 받은 뒤 프로젝트가 지원하는 언어로 정규화합니다. const supportedLocales = [ 'ko' , 'zh-CN' , 'ja' , 'en' ] as const ; type SupportedLocale = ( typeof supportedLocales)[ number ]; export function normalizeLocale (locale: string ): SupportedLocale { const normalized = locale. toLowerCase (); if (normalized === 'ko' || normalized. startsWith ( 'ko-' )) return 'ko' ; if (normalized === 'ja' || normalized. startsWith ( 'ja-' )) return 'ja' ; if ( normalized === 'zh' || normalized. startsWith ( 'zh-cn' ) || normalized. startsWith ( 'zh-hans' ) || normalized. startsWith ( 'zh-sg' ) ) { return 'zh-CN' ; } return 'en' ; } 앱 설정에서 사용자가 선택한 언어는 디바이스 언어보다 우선합니다. Flutter 앱을 선택값의 기준 저장소로 사용하고, WebView에서 언어를 변경하면 Bridge로 Flutter에 저장을 요청한 뒤 해당 카탈로그를 다시 로드합니다. 저장된 앱 설정값이 없을 때만 디바이스 언어를 사용합니다. zh-CN , zh-Hans 와 zh-SG 는 중국어 간체로 연결합니다. 현재 지원하지 않는 중국어 번체( zh-TW , zh-HK , zh-Hant )와 그 밖의 언어는 영어로 연결합니다. 첫 화면이 fallback 언어로 표시된 뒤 선택 언어로 바뀌는 현상을 피하려면 최초 문서 요청 전에 언어를 결정해야 합니다. Flutter가 초기 WebView 요청에 전달할 Header, URL 또는 Cookie와, 실행 중 변경에 사용할 Bridge 계약을 Flutter와 Web 담당자가 합의한 뒤 적용합니다. 일반 브라우저 접근을 지원하면 Accept-Language 를 우선 사용하고 navigator.languages 는 보조 수단으로 사용합니다. locale은 지원 목록으로 검증하며 임의 문자열을 import 경로에 연결하지 않습니다. const loaders = { ko : () => import ( '@/locales/ko/messages' ), 'zh-CN' : () => import ( '@/locales/zh-CN/messages' ), ja : () => import ( '@/locales/ja/messages' ), en : () => import ( '@/locales/en/messages' ), } satisfies Record < SupportedLocale , () => Promise < unknown >>;",
    "url": "./../guides/i18n/index.html#section-8"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "완료 확인사항",
    "excerpt": "한국어 원문을 코드 가까이에서 찾고 수정할 수 있는가? 메시지 추출이 기존 번역을 보존하면서 새 항목을 병합하는가? 자동 ID 변경 조건과 context 사용 기준을 이해할 수 있는가? 로컬 LLM이 누락 번역만 생성하고 기존 번역을 보호하는가? 변수, ICU 문법과 React 요소가 자동 검증되는가? CI와 운영 Build가 로컬 LLM 없이 실행되는가? 첫 화면부터 선택된 locale이…",
    "content": "14. 완료 확인사항 한국어 원문을 코드 가까이에서 찾고 수정할 수 있는가? 메시지 추출이 기존 번역을 보존하면서 새 항목을 병합하는가? 자동 ID 변경 조건과 context 사용 기준을 이해할 수 있는가? 로컬 LLM이 누락 번역만 생성하고 기존 번역을 보호하는가? 변수, ICU 문법과 React 요소가 자동 검증되는가? CI와 운영 Build가 로컬 LLM 없이 실행되는가? 첫 화면부터 선택된 locale이 일관되게 적용되는가? 앱에서 선택한 언어가 디바이스 언어보다 우선하는가? Flutter가 앱 언어를 저장하고 WebView에 일관되게 전달하는가? 미지원 locale은 영어로, 영어 누락은 한국어 원문으로 대체되는가? 정적 UI 문구와 사용자 작성 콘텐츠의 번역 경로가 분리되어 있는가? WebView가 OS 문자열 대신 Flutter capability로 번역 기능을 노출하는가? 기기 번역이 실패하거나 지원되지 않을 때 원문을 표시하는가? 최소 OS와 SDK 설정이 Flutter·ML Kit·스토어 요구사항을 만족하는가? 콘텐츠 수정 시 기기에 저장된 이전 번역을 재사용하지 않는가? 고위험 문구에 별도 검토 근거가 남는가? Front-End 다국어 및 로컬 LLM 번역 가이드",
    "url": "./../guides/i18n/index.html#section-14"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "자동 생성 ID 원리",
    "excerpt": "명시적인 id 가 없는 메시지는 정규화된 원본 메시지와 context 를 기준으로 짧은 해시 ID를 생성합니다. 원본 JSX <Trans>{name}님, 환영합니다</Trans> 정규화된 메시지 {name}님, 환영합니다 ID 입력 정규화된 메시지 + context 생성 결과 F2kQpA 같은 원문과 같은 context 는 같은 ID를 사용합니다. 같은 메시지가 여러 파일에 있어도 하나의 번…",
    "content": "5. 자동 생성 ID 원리 명시적인 id 가 없는 메시지는 정규화된 원본 메시지와 context 를 기준으로 짧은 해시 ID를 생성합니다. 원본 JSX <Trans>{name}님, 환영합니다</Trans> 정규화된 메시지 {name}님, 환영합니다 ID 입력 정규화된 메시지 + context 생성 결과 F2kQpA 같은 원문과 같은 context 는 같은 ID를 사용합니다. 같은 메시지가 여러 파일에 있어도 하나의 번역으로 병합됩니다. 파일 경로나 줄 번호는 사용 위치 정보이며 ID의 의미로 사용하지 않습니다. 띄어쓰기, 문장부호, 변수 또는 React 요소 구조가 바뀌면 새 ID가 만들어질 수 있습니다. context 가 다르면 원문이 같아도 다른 ID를 만듭니다. 원문 변경으로 새 ID가 생긴 항목은 새 번역 대상으로 처리합니다. 자동 ID를 기본으로 사용합니다. 외부 시스템이 특정 키를 참조하거나 원문 변경과 관계없이 식별자를 유지해야 하는 실제 요구가 있으면 명시적 ID를 검토할 수 있습니다. < Trans id = \"auth.login.submit\" > 로그인 </ Trans > 명시적 ID는 이름 관리와 중복 방지 책임이 개발자에게 생기므로 모든 메시지에 일괄 적용하지 않습니다.",
    "url": "./../guides/i18n/index.html#section-5"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "적용 범위와 핵심 원칙",
    "excerpt": "한국어를 원본 언어로 사용하고 한국어, 중국어 간체, 일본어와 영어를 제공하는 Flutter 앱과 그 안의 Next.js WebView 애플리케이션에 적용합니다. 개발자는 번역 키를 먼저 만들지 않고 한국어 메시지를 코드에 작성합니다. 추출 도구가 정적으로 확인할 수 있는 메시지만 번역 대상으로 사용합니다. 자동 생성 ID와 원문, 번역 및 사용 위치를 언어별 카탈로그에서 관리합니다. 로컬…",
    "content": "2. 적용 범위와 핵심 원칙 한국어를 원본 언어로 사용하고 한국어, 중국어 간체, 일본어와 영어를 제공하는 Flutter 앱과 그 안의 Next.js WebView 애플리케이션에 적용합니다. 개발자는 번역 키를 먼저 만들지 않고 한국어 메시지를 코드에 작성합니다. 추출 도구가 정적으로 확인할 수 있는 메시지만 번역 대상으로 사용합니다. 자동 생성 ID와 원문, 번역 및 사용 위치를 언어별 카탈로그에서 관리합니다. 로컬 LLM은 비어 있거나 원문이 변경된 번역만 생성합니다. 번역 카탈로그는 소스 코드와 함께 검토하고 저장소에 반영합니다. 실행 중에는 준비된 카탈로그만 읽으며 LLM을 호출하지 않습니다. 앱 언어 선택값과 기기 기능 지원 여부는 Flutter 앱을 기준으로 판단합니다. WebView는 OS 버전을 추측하지 않고 Flutter Bridge의 capability를 사용합니다. 리뷰, 댓글과 게시글처럼 사용자가 작성한 콘텐츠는 Lingui 카탈로그에 포함하지 않고, 사용자가 요청한 경우에만 기기에서 번역합니다. 기기 번역이 지원되지 않거나 실패하면 기능만 비활성화하고 원문을 표시합니다. 사용자명, 브랜드명, 모델 번호와 코드 등 고유 식별값은 번역하지 않습니다. 지원 언어는 한국어( ko ), 중국어 간체( zh-CN ), 일본어( ja )와 영어( en )입니다. 지원하지 않는 디바이스 언어는 영어로 표시합니다. 중국어 간체 또는 일본어 번역이 누락되면 영어를 사용하고, 영어도 누락된 경우 한국어 원문을 사용합니다. 변수, ICU 문법과 React 요소 자리표시자는 번역 전후에 유지합니다. 자동 번역 결과는 번역 후보입니다. 결제, 환불, 개인정보, 약관, 이용 조건처럼 의미 오류의 영향이 큰 문구는 별도 검토 없이 확정 문구로 사용하지 않습니다.",
    "url": "./../guides/i18n/index.html#section-2"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "적용 전 결정 항목",
    "excerpt": "아래 항목은 실제 애플리케이션과 제품 요구가 확인된 후 확정합니다. 중국어 번체를 별도 지원할지 여부 Lingui 도입 여부와 실제 설치 버전 JSON 카탈로그의 정확한 경로와 컴파일 결과 위치 로컬 LLM 제품, 모델 태그, 장비별 실행 기준과 배치 크기 서비스 용어집의 소유자, 파일 형식과 변경 승인 절차 고위험 문구의 검토 담당자와 승인 기록 방식 Flutter가 WebView에 loc…",
    "content": "13. 적용 전 결정 항목 아래 항목은 실제 애플리케이션과 제품 요구가 확인된 후 확정합니다. 중국어 번체를 별도 지원할지 여부 Lingui 도입 여부와 실제 설치 버전 JSON 카탈로그의 정확한 경로와 컴파일 결과 위치 로컬 LLM 제품, 모델 태그, 장비별 실행 기준과 배치 크기 서비스 용어집의 소유자, 파일 형식과 변경 승인 절차 고위험 문구의 검토 담당자와 승인 기록 방식 Flutter가 WebView에 locale을 전달할 Header, URL, Cookie와 Bridge 계약 앱 언어 선택값의 Flutter 저장 위치와 Flutter-Web 동기화 계약 Flutter·Dart, webview_flutter 와 번역 패키지의 실제 고정 버전 iOS Deployment Target, Xcode, Android minSdk·targetSdk·compileSdk 기준 최소 OS 미만 기기의 앱 지원 여부와 동적 번역 제공 범위 WebView-Flutter 번역 Bridge의 capability, 요청 크기, 배치, 취소와 오류 계약 번역 모델 다운로드 안내, 자동 번역 기본값과 기기 캐시 보존 기간 온디바이스 번역 SDK의 표시·고지 요건과 개인정보 안내 일반 브라우저 직접 접근 여부와 locale route 정책 누락 번역을 CI 오류로 처리할 시점과 배포 품질 Gate",
    "url": "./../guides/i18n/index.html#section-13"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "처리 흐름과 책임",
    "excerpt": "flowchart LR accTitle: 한국어 메시지에서 다국어 화면까지의 처리 흐름 accDescr: React 코드에 작성한 한국어 메시지를 추출해 언어별 JSON을 갱신하고, 로컬 LLM 번역과 구조 검증 및 컴파일을 거쳐 앱 설정 또는 디바이스 언어에 맞는 화면을 표시합니다. A[\"1. 한국어 메시지 작성 React 코드\"] --> B[\"2. 카탈로그 생성 메시지 추출 · 언어별 J…",
    "content": "3. 처리 흐름과 책임 flowchart LR accTitle: 한국어 메시지에서 다국어 화면까지의 처리 흐름 accDescr: React 코드에 작성한 한국어 메시지를 추출해 언어별 JSON을 갱신하고, 로컬 LLM 번역과 구조 검증 및 컴파일을 거쳐 앱 설정 또는 디바이스 언어에 맞는 화면을 표시합니다. A[\"1. 한국어 메시지 작성 React 코드\"] --> B[\"2. 카탈로그 생성 메시지 추출 · 언어별 JSON 갱신\"] B --> C[\"3. 로컬 번역 누락 번역 · 구조 검증 · 컴파일\"] C --> D[\"4. 런타임 적용 Flutter 앱 언어 · 번역 화면\"] 서비스가 관리하는 정적 UI 문구의 작성부터 화면 표시까지의 처리 과정 단계 책임 메시지 작성 개발자가 한국어 원문과 필요한 문맥을 코드에 작성 추출 소스 파일을 검색하고 자동 ID와 카탈로그를 생성·병합 번역 로컬 LLM이 누락 항목만 대상 언어로 변환 검증 키, 변수, ICU 문법, 태그와 JSON 구조를 코드로 검사 컴파일 번역 카탈로그를 애플리케이션이 읽을 수 있는 형식으로 변환 언어 선택 Flutter가 앱 설정과 디바이스 언어를 지원 언어에 매핑해 WebView에 전달 실행 선택한 카탈로그를 로드하고 영어 fallback 적용",
    "url": "./../guides/i18n/index.html#section-3"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "카탈로그 위치와 자동 생성",
    "excerpt": "언어 카탈로그는 사용하는 애플리케이션 가까이에 둡니다. 아래 경로는 apps/app-webview 의 기존 구조와 설치 package를 확인해 적용하는 참고 구성입니다. apps/app-webview/ ├── lingui.config.ts ├── scripts/ │ ├── translate.ts │ └── check-i18n.ts └── src/ └── locales/ ├── ko/ │ ├─…",
    "content": "6. 카탈로그 위치와 자동 생성 언어 카탈로그는 사용하는 애플리케이션 가까이에 둡니다. 아래 경로는 apps/app-webview 의 기존 구조와 설치 package를 확인해 적용하는 참고 구성입니다. apps/app-webview/ ├── lingui.config.ts ├── scripts/ │ ├── translate.ts │ └── check-i18n.ts └── src/ └── locales/ ├── ko/ │ ├── messages.json │ └── messages.ts ├── zh-CN/ │ ├── messages.json │ └── messages.ts ├── ja/ │ ├── messages.json │ └── messages.ts └── en/ ├── messages.json └── messages.ts messages.json 은 원문, 번역과 문맥을 보존하는 검토 대상입니다. messages.ts 는 실행을 위해 컴파일한 생성 파일입니다. scripts/translate.ts 는 로컬 LLM 호출과 번역 병합을 담당합니다. scripts/check-i18n.ts 는 카탈로그와 변수 보존 규칙을 검증합니다. 여러 애플리케이션이 같은 번역 정책을 실제로 공유하기 전에는 공통 패키지로 이동하지 않습니다. Lingui JSON의 lingui 스타일은 원문, 번역, 설명과 사용 위치를 함께 저장할 수 있어 로컬 LLM에 문맥을 전달하기 쉽습니다. { \"F2kQpA\" : { \"translation\" : \"Welcome, {name}\" , \"message\" : \"{name}님, 환영합니다\" , \"description\" : \"홈 화면의 사용자 인사말\" , \"origin\" : [[ \"src/components/WelcomeMessage.tsx\" , 8 ]] } } 다음 설정은 카탈로그 위치와 지원 언어를 설명하는 참고 구현입니다. import { defineConfig } from '@lingui/cli' ; import { formatter } from '@lingui/format-json' ; export default defineConfig ({ sourceLocale : 'ko' , locales : [ 'ko' , 'zh-CN' , 'ja' , 'en' ], fallbackLocales : { 'zh-CN' : [ 'en' , 'ko' ], ja : [ 'en' , 'ko' ], en : 'ko' , }, catalogs : [ { path : '<rootDir>/src/locales/{locale}/messages' , include : [ '<rootDir>/src' ], }, ], format : formatter ({ style : 'lingui' , origins : true , indentation : 2 , }), compileNamespace : 'es' , }); {locale} 는 언어 코드로 치환됩니다. 중국어는 중국 본토에서 사용하는 간체 카탈로그인 zh-CN 을 기준으로 합니다. 정확한 패키지 버전은 실제 애플리케이션의 Lock File을 확인한 뒤 확정합니다. JSON 자동 생성과 갱신 i18n:extract 를 실행하면 소스 코드의 번역 메시지를 검색합니다. 설정한 locale의 디렉터리나 messages.json 이 없으면 만들고, 이미 있으면 기존 번역을 보존하면서 새 메시지를 병합합니다. 코드에 <Trans>로그인</Trans> 추가 → i18n:extract 실행 → ko, zh-CN, ja, en의 messages.json 생성 또는 갱신 → 같은 자동 ID를 네 카탈로그에 추가 → 한국어 원문 기록 → 대상 언어 translation은 빈 값으로 유지 같은 원문과 context 는 기존 ID와 번역을 유지합니다. 새 원문은 네 언어 카탈로그에 같은 새 ID로 추가합니다. 원문을 수정하면 새 ID가 만들어지고 새 번역 대상으로 처리합니다. 파일만 이동하면 ID는 유지되고 사용 위치 정보가 갱신됩니다. 삭제된 메시지는 obsolete 상태로 남긴 뒤 정리 명령에서 제거할 수 있습니다. 소스 파일을 저장하는 것만으로 JSON이 항상 생성되는 것은 아닙니다. 개발 중 i18n:watch 를 실행하면 파일 변경을 감지해 자동 추출하고, 그 외 환경에서는 i18n:extract 를 명시적으로 실행합니다.",
    "url": "./../guides/i18n/index.html#section-6"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "코드에서 메시지 작성",
    "excerpt": "번역할 JSX 문구는 메시지 추출 도구가 인식하는 정적 표현으로 작성합니다. 아래 코드는 Lingui Macro를 사용하는 참고 구현입니다. import { Trans } from '@lingui/react/macro' ; export function LoginButton () { return ( < button type = \"button\" > < Trans > 로그인 </ Trans > <…",
    "content": "4. 코드에서 메시지 작성 번역할 JSX 문구는 메시지 추출 도구가 인식하는 정적 표현으로 작성합니다. 아래 코드는 Lingui Macro를 사용하는 참고 구현입니다. import { Trans } from '@lingui/react/macro' ; export function LoginButton () { return ( < button type = \"button\" > < Trans > 로그인 </ Trans > </ button > ); } 동적 값은 메시지 안의 변수로 전달합니다. interface WelcomeMessageProps { name : string ; } export function WelcomeMessage ({ name }: WelcomeMessageProps ) { return < p >< Trans > {name}님, 환영합니다 </ Trans ></ p > ; } 번역 품질에 필요한 설명은 메시지 가까이에 둡니다. 같은 한국어가 문맥에 따라 다르게 번역되어야 하면 context 를 지정합니다. < Trans comment = \"로그인 화면의 제출 버튼\" > 로그인 </ Trans > < Trans context = \"dialog-confirm\" > 확인 </ Trans > < Trans context = \"identity-verification\" > 확인 </ Trans > 메시지는 추출기가 정적으로 읽을 수 있어야 합니다. 변수에 저장한 일반 문자열을 나중에 번역 함수에 넘기는 패턴은 사용하지 않습니다. // 추출기가 label의 실제 값을 확인할 수 없습니다. const label = getLoginLabel (); return < button > {label} </ button > ; 서버에서 받은 사용자 콘텐츠, 상품명과 API 오류 문구를 자동으로 UI 번역 메시지로 간주하지 않습니다. 서버 콘텐츠의 다국어 계약은 UI 카탈로그와 별도로 정의합니다.",
    "url": "./../guides/i18n/index.html#section-4"
  },
  {
    "document": "Front-End 다국어 및 로컬 LLM 번역 가이드",
    "section": "피해야 할 구현",
    "excerpt": "React 렌더링 중 Ollama 또는 외부 번역 API를 호출하지 않습니다. 사용자 입력이나 서버 응답을 개발용 Ollama로 실행 중 번역하지 않습니다. 모바일 WebView에서 브라우저 페이지 번역 기능을 강제 호출할 수 있다고 전제하지 않습니다. WebView의 User-Agent나 OS 버전 문자열만으로 기기 번역 지원 여부를 판단하지 않습니다. Flutter Bridge가 존재한다…",
    "content": "12. 피해야 할 구현 React 렌더링 중 Ollama 또는 외부 번역 API를 호출하지 않습니다. 사용자 입력이나 서버 응답을 개발용 Ollama로 실행 중 번역하지 않습니다. 모바일 WebView에서 브라우저 페이지 번역 기능을 강제 호출할 수 있다고 전제하지 않습니다. WebView의 User-Agent나 OS 버전 문자열만으로 기기 번역 지원 여부를 판단하지 않습니다. Flutter Bridge가 존재한다는 이유만으로 모델과 언어 조합까지 지원된다고 가정하지 않습니다. 번역 결과나 사용자 원문을 이스케이프 없이 runJavaScript 에 연결하지 않습니다. 화면에 보이지 않는 사용자 콘텐츠까지 미리 전부 기기 번역하지 않습니다. 번역되지 않은 문장을 숨기기 위해 빈 문자열을 사용하지 않습니다. 원본 변수와 태그를 프롬프트 지시만으로 보호했다고 판단하지 않습니다. 번역 파일의 기존 값을 매 실행마다 전체 덮어쓰기 하지 않습니다. 디바이스 locale을 검증 없이 동적 import에 사용하지 않습니다. 실제 공통 사용처가 없는데 다국어 코드를 공통 패키지로 이동하지 않습니다. 생성된 실행 카탈로그를 사람이 직접 수정하지 않습니다.",
    "url": "./../guides/i18n/index.html#section-12"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "검증과 사고 대응",
    "excerpt": "변경 위험별 확인 아래 검사는 서로 대체하지 않습니다. Typecheck와 Lint는 코드 작성 단계의 문제를 찾고, Test는 정해진 입력의 동작을 확인하며, 실제 Browser·WebView·Backend 연동 검증은 환경 설정과 시스템 사이의 문제를 확인합니다. 검증 확인할 보안 경계 Typecheck·Lint 잘못된 타입 경계, 위험 API와 정적 규칙 위반 Unit Test URL·…",
    "content": "9. 검증과 사고 대응 변경 위험별 확인 아래 검사는 서로 대체하지 않습니다. Typecheck와 Lint는 코드 작성 단계의 문제를 찾고, Test는 정해진 입력의 동작을 확인하며, 실제 Browser·WebView·Backend 연동 검증은 환경 설정과 시스템 사이의 문제를 확인합니다. 검증 확인할 보안 경계 Typecheck·Lint 잘못된 타입 경계, 위험 API와 정적 규칙 위반 Unit Test URL·Parser·Masking 같은 순수 보안 경계 Component Test 권한별 UI, 오류 노출과 사용자 행동 Request Mock Test 401 , 403 , 잘못된 응답, CSRF 오류와 Cache 정리 Browser·WebView CSP, Cookie, Redirect, Bridge와 실제 Network Payload Backend·App 통합 권한 우회, 사용자 전환, 중복 요청과 실제 저장소 보안 검사는 기능 완료 뒤 한 번만 수행하지 않습니다. 인증·권한·외부 입력·파일·Bridge·개인정보 흐름이 바뀌면 해당 경계를 다시 검토합니다. 보안 문제가 의심되면 민감정보를 채팅, Issue와 일반 로그에 복사하지 않습니다. 재현 조건, 영향 범위, 노출된 데이터 종류와 임시 완화 상태를 최소 정보로 기록하고 프로젝트의 보고 절차를 따릅니다.",
    "url": "./../guides/security/index.html#section-9"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "네트워크, CSP: 콘텐츠 보안 정책과 외부 리소스",
    "excerpt": "CSP(Content Security Policy)는 브라우저에서 실행하거나 불러올 수 있는 Script, Image, iframe과 연결 대상을 제한하는 정책입니다. 실제 허용 값은 배포 구조와 외부 서비스가 정해진 뒤 Backend·배포·보안 담당 기준과 함께 확정합니다. Mixed Content는 HTTPS 페이지에서 HTTP 리소스를 불러오는 상태입니다. Nonce는 요청마다 발급하는…",
    "content": "6. 네트워크, CSP: 콘텐츠 보안 정책과 외부 리소스 CSP(Content Security Policy)는 브라우저에서 실행하거나 불러올 수 있는 Script, Image, iframe과 연결 대상을 제한하는 정책입니다. 실제 허용 값은 배포 구조와 외부 서비스가 정해진 뒤 Backend·배포·보안 담당 기준과 함께 확정합니다. Mixed Content는 HTTPS 페이지에서 HTTP 리소스를 불러오는 상태입니다. Nonce는 요청마다 발급하는 일회성 허용값이고 Hash는 Script 내용의 해시가 일치할 때만 실행을 허용하는 방식입니다. Content-Security-Policy-Report-Only 는 차단하지 않고 위반 내용만 보고하여 적용 영향을 먼저 확인하는 설정입니다. Production 통신은 HTTPS를 사용하고 Mixed Content를 허용하지 않습니다. API Base URL, 인증 Header와 Cookie 전달 방식은 공통 요청 경계에서 관리하되 기능별 권한 판단을 공통 Wrapper가 추측하지 않습니다. 외부 Script, iframe, Image와 연결 Origin은 실제 사용처를 기준으로 최소화합니다. CSP는 XSS의 유일한 방어가 아니라 추가 방어 계층입니다. 실제 CSP는 배포 구조와 Third-party Script가 확인된 뒤 Nonce 또는 Hash 기반 정책을 검토하고 Content-Security-Policy-Report-Only 로 영향부터 확인합니다. unsafe-inline , unsafe-eval 과 넓은 Origin 허용을 오류 해결 목적으로 추가하지 않습니다. Directive(지시어)는 CSP에서 리소스 종류별 허용 범위를 정하는 항목입니다. frame-ancestors 는 이 화면을 iframe으로 포함할 수 있는 출처, connect-src 는 API 연결 대상, img-src 는 이미지 출처 등을 제한합니다. 필요한 Directive는 Hosting·Backend 기준과 함께 결정합니다. TBD : CSP, CORS, Cookie, 보안 Header와 허용 Origin의 실제 값은 배포·인증 구성이 확정된 뒤 결정합니다.",
    "url": "./../guides/security/index.html#section-6"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "문서 목적과 적용 범위",
    "excerpt": "이 문서는 Lounge Front-end와 WebView 화면을 구현하고 검토할 때 적용할 보안·개인정보 기준 원본입니다. Front-end가 직접 구현할 방어적 처리뿐 아니라 Backend·Native App·배포·보안 담당자에게 받아야 할 계약과 Front-end의 연동 검증 범위도 함께 구분합니다. UI에서 값을 숨기는 수준이 아니라 외부 입력이 화면, 네트워크, 저장소, 로그와 Nat…",
    "content": "1. 문서 목적과 적용 범위 이 문서는 Lounge Front-end와 WebView 화면을 구현하고 검토할 때 적용할 보안·개인정보 기준 원본입니다. Front-end가 직접 구현할 방어적 처리뿐 아니라 Backend·Native App·배포·보안 담당자에게 받아야 할 계약과 Front-end의 연동 검증 범위도 함께 구분합니다. UI에서 값을 숨기는 수준이 아니라 외부 입력이 화면, 네트워크, 저장소, 로그와 Native Bridge를 통과하는 전체 흐름을 확인합니다. 구체적인 인증 제공자, Cookie 또는 token 방식, CSP 값, 허용 Origin, Redirect URI, 개인정보 분류와 보존 기간은 아직 확정하지 않습니다. 해당 결정은 Backend·App·배포·보안 담당 기준과 함께 확정합니다. 브라우저와 WebView의 코드는 사용자가 확인하고 변조할 수 있습니다. Client 검증은 사용자 경험과 조기 오류 발견을 위한 것이며 인증, 권한과 업무 규칙의 최종 통제를 대신하지 않습니다. 이 문서를 읽는 기준 “신뢰하지 않는다”는 해당 값을 사용하지 말라는 뜻이 아닙니다. 값이 저장하거나 전달한 당시와 같다고 단정하지 말고, 사용 목적과 위험도에 맞게 확인한다는 뜻입니다. 화면 테마나 접힘 상태처럼 영향이 작은 값은 허용 값과 기본값만 확인해도 됩니다. 권한, 금액, 사용자 식별자와 이동 URL처럼 영향이 큰 값은 형식뿐 아니라 허용 범위와 서버 계약도 확인합니다. “확인합니다”와 “검토합니다”는 모든 기능에 같은 보안 도구를 적용하라는 뜻이 아닙니다. 해당 기능에 실제로 존재하는 입력·저장·통신 경계만 확인합니다. Backend·Native App·배포 영역의 내용은 Front-end가 연동 전에 확인할 조건입니다. 현재 프로젝트에서 이미 구현됐다는 의미가 아니며 실제 방식과 제공 범위는 TBD 입니다.",
    "url": "./../guides/security/index.html#section-1"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "외부 입력과 XSS",
    "excerpt": "API 응답, 사용자 입력, URL Query(주소의 ? 뒤 값)·Fragment(주소의 # 뒤 값), Storage(브라우저 저장소), Markdown·HTML, 외부 SDK(Software Development Kit)와 Bridge(Web와 Native App 사이의 통신 연결) 응답은 저장하거나 전달한 당시의 값이 그대로 유지됐다고 단정하지 않습니다. TypeScript 타입 선언은…",
    "content": "3. 외부 입력과 XSS API 응답, 사용자 입력, URL Query(주소의 ? 뒤 값)·Fragment(주소의 # 뒤 값), Storage(브라우저 저장소), Markdown·HTML, 외부 SDK(Software Development Kit)와 Bridge(Web와 Native App 사이의 통신 연결) 응답은 저장하거나 전달한 당시의 값이 그대로 유지됐다고 단정하지 않습니다. TypeScript 타입 선언은 실행 시점(Runtime)의 안전을 보장하지 않으므로 경계에서 unknown 으로 받고 형태와 의미를 확인합니다. Storage도 사용 금지 대상은 아닙니다. localStorage , sessionStorage 와 IndexedDB 값은 사용자가 개발자 도구에서 바꾸거나 이전 앱 버전의 값이 남을 수 있습니다. 테마처럼 영향이 작은 값은 허용 목록과 기본값을 확인하고, 사용자 정보·권한·이용 상태는 Storage 값만으로 판단하지 않고 승인된 서버 계약으로 다시 확인합니다. 기본 출력 일반 문자열은 JSX 표현식으로 렌더링하여 React의 기본 Escape(HTML 코드를 실행하지 않고 글자로 표시하는 처리)를 유지합니다. innerHTML , outerHTML , document.write , eval 과 문자열 기반 코드 실행을 사용하지 않습니다. 동적으로 HTML을 만들기 위해 문자열을 이어 붙이지 않습니다. 입력 검증만으로 XSS를 해결했다고 판단하지 않습니다. 출력 위치가 HTML, URL, JavaScript 또는 CSS인지에 맞는 방어가 필요합니다. HTML과 Markdown 제품 요구가 없으면 사용자 또는 서버가 제공한 HTML을 실행 가능한 HTML로 렌더링하지 않습니다. dangerouslySetInnerHTML 이 필요하면 Sanitizer(위험한 HTML을 제거하는 정화 도구), 허용 Tag(HTML 요소)·Attribute(요소 속성), URL Scheme( https: , mailto: 처럼 주소의 처리 방식을 나타내는 앞부분)과 Sanitizer 적용 위치를 먼저 정합니다. 사용할 도구와 허용 범위는 현재 미정입니다. Sanitizing(HTML 정화 처리)한 결과를 다시 수정하거나 다른 라이브러리가 위험한 DOM(Document Object Model, 브라우저가 해석한 화면 구조)으로 변환하지 않는지 확인합니다. Sanitizer는 보안에 영향을 주는 의존성이므로 Version과 보안 업데이트를 관리합니다. URL 검증 const allowedExternalHosts = new Set ([ \"support.example.com\" ]) export function parseExternalUrl ( value: unknown ): URL | null { if ( typeof value !== \"string\" ) return null try { const url = new URL (value) if (url.protocol !== \"https:\" ) return null if (!allowedExternalHosts. has (url.hostname)) return null return url } catch { return null } } 허용 Host(접속 대상 도메인)는 예시이며 실제 서비스·배포 기준이 확정되면 교체합니다. 문자열 Prefix(앞부분) 비교로 주소를 판단하지 않고 URL Parser(주소 분석 기능)로 Protocol( https: 같은 통신 방식)과 Host를 분리합니다. javascript: , 임의 data: URL과 확인되지 않은 Custom Scheme(App 전용 주소 형식)을 실행하지 않습니다.",
    "url": "./../guides/security/index.html#section-3"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "의존성과 공급망",
    "excerpt": "공급망 보안(Supply Chain Security)은 직접 작성한 코드뿐 아니라 npm package, 설치 Script와 외부에서 가져온 코드가 안전한지도 확인하는 활동입니다. Lock File은 설치할 package의 정확한 Version과 의존 관계를 기록합니다. Severity는 취약점의 심각도, Breaking Change는 기존 코드와 호환되지 않는 변경, Owner는 해당 의존…",
    "content": "8. 의존성과 공급망 공급망 보안(Supply Chain Security)은 직접 작성한 코드뿐 아니라 npm package, 설치 Script와 외부에서 가져온 코드가 안전한지도 확인하는 활동입니다. Lock File은 설치할 package의 정확한 Version과 의존 관계를 기록합니다. Severity는 취약점의 심각도, Breaking Change는 기존 코드와 호환되지 않는 변경, Owner는 해당 의존성을 계속 관리할 담당자를 뜻합니다. 새 package는 기존 코드로 해결할 수 없는 실제 필요, 유지보수 상태, 배포 크기와 권한을 확인한 뒤 추가합니다. Lock File을 함께 관리하고 CI에서는 재현 가능한 설치 방식을 사용합니다. npm audit 결과는 Severity만 보고 자동 수정하지 않고 실제 사용 경로, 수정 Version과 Breaking Change를 검토합니다. npm audit fix --force 처럼 큰 Version 변경을 자동 적용하지 않습니다. 설치 Script, 출처가 불분명한 package와 Copy한 코드는 실행 전에 검토합니다. 보안상 중요한 Sanitizer, 인증 SDK와 WebView package는 업데이트 기준과 Owner를 정합니다. 공급망 침해 사례 정상적인 package도 관리자 계정이나 배포 권한이 탈취되면 공격자가 악성 Version을 공식 Registry에 게시할 수 있습니다. 2026년 Axios npm 공급망 침해에서는 탈취된 관리자 계정으로 악성 Version과 하위 의존성이 약 3시간 동안 배포됐습니다. Axios는 현재 프로젝트의 사용 기술이 아니며, 이 사례는 유명 package와 공식 Registry도 무조건 신뢰할 수 없다는 점을 설명하기 위한 예시입니다. 실제 사고 내용은 Axios 공식 사후 보고서 에서 확인합니다. 예방과 탐지 필요하지 않은 package는 추가하지 않습니다. 직접 의존성 하나를 추가하면 하위 의존성과 설치 Script도 함께 신뢰해야 합니다. 의존성 업데이트 PR은 package.json 뿐 아니라 Lock File의 Version, 새 하위 의존성, 출처와 설치 Script 변경을 함께 검토합니다. 최신 Version을 자동 병합하지 않고 공식 Release·Security Advisory와 유지보수 상태를 확인합니다. CI는 승인된 Lock File을 변경하지 않는 npm ci 등 재현 가능한 설치를 사용합니다. 지원되는 package는 Registry 서명과 Provenance(어떤 소스와 배포 과정에서 package가 만들어졌는지 확인하는 출처 증명)를 npm audit signatures 등으로 확인합니다. 서명이 유효해도 코드의 안전성까지 보장하는 것은 아닙니다. npm audit , 의존성 알림과 보안 공지를 함께 확인합니다. 공개되기 전의 공격이나 정상 배포 권한을 이용한 악성 Version은 npm audit 만으로 즉시 발견하지 못할 수 있습니다. 악성 package를 설치한 경우 package.json 만 보지 않고 Lock File과 실제 설치 트리에서 영향 Version과 새 하위 의존성을 확인합니다. 설치 Script가 실행됐거나 악성 코드 실행 가능성을 배제할 수 없으면 단순한 package 교체가 아니라 개발 PC·CI Runner의 침해 사고로 취급하고 네트워크 연결과 추가 사용을 중지합니다. 영향받지 않은 별도 환경에서 npm, Git, CI/CD, Cloud와 배포에 사용한 Token·Secret·Key를 폐기·교체합니다. 문제 Version, node_modules , package Cache와 해당 환경에서 만든 Build Artifact를 신뢰하지 않습니다. 승인된 안전 Version과 Lock File을 기준으로 깨끗한 PC 또는 새 CI Runner에서 다시 설치·검증·빌드합니다. 영향 시간의 설치·CI·배포·로그와 외부 통신 기록을 확인하고, 감염 가능 환경에서 생성한 배포 Artifact는 폐기 후 재배포합니다. Front-end 담당자가 임의로 사고 종료를 판단하지 않고 프로젝트 책임자와 공유하여 계정·배포·인프라 영향 범위와 추가 조치를 결정합니다. React와 Next.js 보안 업데이트 RCE(Remote Code Execution)는 공격자가 원격에서 서버나 실행 환경에 임의 코드를 실행하는 취약점입니다. WAF(Web Application Firewall)는 악성 요청을 차단하는 보조 장치이며, Patch는 취약점을 수정한 공식 업데이트입니다. React와 Next.js는 프로젝트 생성 시점에 공식 지원 상태, 보안 공지와 프로젝트 호환성을 확인한 최신 안정 Version을 후보로 선택하고, 검증 후 Lock File로 고정합니다. package.json 의 선언만 보지 않고 Lock File, 실제 설치 Version과 배포된 Version이 일치하는지 확인합니다. React와 Next.js 공식 보안 공지를 지속해서 확인하고, Release 또는 배포 전에는 현재 사용 Version에 적용되는 공지가 없는지 다시 확인합니다. RCE, 인증 우회와 정보 노출처럼 영향이 큰 취약점은 일반 기능 작업보다 우선하여 현재 사용 계열에서 취약점이 수정된 공식 지원 Version으로 업데이트하고 검증 후 재배포합니다. 현재 계열에 수정 Version이 없으면 상위 Version 전환과 영향을 검토합니다. WAF, 입력 검증, CSP와 코드 리뷰는 추가 방어 계층이며 취약한 Framework package의 공식 Patch를 대신하지 않습니다. 취약한 Version이 외부에 노출됐을 가능성이 있으면 Patch와 재배포만으로 종료하지 않고 로그와 노출 범위를 확인하며 환경변수, API Key, Session Secret 등 자격 증명 교체 필요성을 검토합니다. React2Shell은 React Server Components의 취약점과 Next.js App Router에 미친 영향을 보여주는 대표 사례입니다. 이 문서는 시간이 지나면 낡는 영향 Version 목록을 고정하지 않으며, 실제 대응 시 React와 Next.js 공식 보안 공지에서 현재 영향 범위와 최신 수정 Version을 확인합니다.",
    "url": "./../guides/security/index.html#section-8"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "이동, WebView Bridge와 파일",
    "excerpt": "이동과 Redirect Redirect는 다른 주소로 이동시키는 동작이고 Deep Link는 앱의 특정 화면을 여는 주소입니다. Opener는 새 창을 연 기존 페이지에 접근할 수 있는 브라우저 연결입니다. 외부 이동은 사용자가 전달한 주소를 그대로 실행하지 않고 허용된 목적지만 통과시킵니다. returnUrl , Redirect와 Deep Link는 허용 Route·Origin·Scheme…",
    "content": "7. 이동, WebView Bridge와 파일 이동과 Redirect Redirect는 다른 주소로 이동시키는 동작이고 Deep Link는 앱의 특정 화면을 여는 주소입니다. Opener는 새 창을 연 기존 페이지에 접근할 수 있는 브라우저 연결입니다. 외부 이동은 사용자가 전달한 주소를 그대로 실행하지 않고 허용된 목적지만 통과시킵니다. returnUrl , Redirect와 Deep Link는 허용 Route·Origin·Scheme을 검증합니다. 사용자 입력을 그대로 window.location , router.push , open 또는 Native Deep Link에 전달하지 않습니다. 새 창으로 외부 페이지를 열 때 Opener 제어와 실제 Link 정책을 확인합니다. WebView Bridge Adapter는 화면 코드가 Android·iOS별 전역 객체를 직접 다루지 않도록 호출 방식을 한곳에 감싸는 계층입니다. Params는 호출 입력값, 요청 ID는 비동기 응답을 원래 요청과 연결하는 식별자입니다. 화면 컴포넌트는 Native 전역 객체를 직접 호출하지 않고 Adapter를 사용합니다. Method, Params, 응답 식별자, Version과 결과를 Runtime에 검증합니다. 사용자 취소, 권한 거부, 미지원, Timeout과 시스템 오류를 구분합니다. 요청 ID, 중복 실행과 응답 순서를 관리하고 민감정보를 메시지와 로그에 넣지 않습니다. 임의 Method명이나 JavaScript 문자열을 실행하는 범용 Bridge를 만들지 않습니다. 파일 업로드와 다운로드 MIME Type은 파일 내용의 종류를 나타내는 값이고 Allowlist는 허용한 형식만 통과시키는 목록입니다. 확장자와 MIME 값도 조작될 수 있으므로 Front-end 검사는 빠른 안내를 위한 UX이며 실제 파일 검증 완료를 의미하지 않습니다. Client의 확장자, MIME과 크기 검사는 UX이며 Backend 검증을 대신하지 않습니다. 허용 형식과 크기는 Allowlist로 관리하고 서버가 실제 Content와 저장 이름을 다시 확인합니다. 사용자 입력으로 서버 파일 경로나 다운로드 대상을 직접 만들지 않습니다. 다운로드·미리보기·외부 열기는 Content-Type, 파일명, Origin과 WebView 처리 방식을 확인합니다.",
    "url": "./../guides/security/index.html#section-7"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "인증, 권한과 세션",
    "excerpt": "인증(Authentication), 권한 부여(Authorization)와 세션(Session)은 서로 다른 개념입니다. Front-end는 로그인 상태와 사용 가능한 UI를 표현하지만, 실제 데이터 접근을 허용할지는 서버 계약에서 최종 판단해야 합니다. 인증과 권한 구분 인증은 현재 사용자가 누구인지 확인하는 과정입니다. 권한은 그 사용자가 특정 데이터와 행동을 사용할 수 있는지 판단하는…",
    "content": "4. 인증, 권한과 세션 인증(Authentication), 권한 부여(Authorization)와 세션(Session)은 서로 다른 개념입니다. Front-end는 로그인 상태와 사용 가능한 UI를 표현하지만, 실제 데이터 접근을 허용할지는 서버 계약에서 최종 판단해야 합니다. 인증과 권한 구분 인증은 현재 사용자가 누구인지 확인하는 과정입니다. 권한은 그 사용자가 특정 데이터와 행동을 사용할 수 있는지 판단하는 과정입니다. Menu, Button과 Route를 숨기는 것은 UX 처리이며 서버 권한 검증이 아닙니다. 객체 ID, 회원 ID와 역할 값은 Client에서 변경될 수 있으므로 Backend가 소유권과 권한을 다시 확인합니다. 자격 증명과 세션 자격 증명(Credential)은 사용자를 증명하는 Cookie, token과 인증 코드 등을 말합니다. 세션은 로그인한 사용자의 상태를 일정 기간 이어가는 방식입니다. 어떤 방식을 사용할지는 아직 확정하지 않습니다. 인증 token을 localStorage , sessionStorage , IndexedDB, URL 또는 일반 Zustand Persist에 저장하는 예시를 미리 제공하지 않습니다. Cookie 인증이면 HttpOnly (JavaScript에서 Cookie를 읽지 못하게 함), Secure (HTTPS에서만 전송), SameSite (다른 사이트에서 시작한 요청의 Cookie 전송 제한), Domain과 Path 정책을 Backend·배포 기준으로 결정합니다. Native 보안 저장소를 사용하더라도 Bridge로 token을 화면 JavaScript에 전달하지 않습니다. 모든 401 을 즉시 로그아웃으로 바꾸지 않고 세션 조회, 만료, 갱신 실패와 기능 API 계약을 구분합니다. 403 은 인증 여부와 별개의 권한 실패로 처리합니다. 로그아웃과 사용자 전환 후 이전 사용자의 Query Cache, Persist 상태와 화면 입력을 정리합니다. CSRF: 사이트 간 요청 위조와 CORS: 교차 출처 리소스 공유 CSRF(Cross-Site Request Forgery)는 로그인된 사용자의 브라우저를 이용해 사용자가 원하지 않은 요청을 보내게 하는 공격입니다. CORS(Cross-Origin Resource Sharing)는 다른 Origin(Protocol·Host·Port로 구분되는 출처)의 응답을 브라우저가 읽도록 허용할 범위를 정하는 정책입니다. Front-end에서 임의의 CORS Header를 추가한다고 문제가 해결되지는 않습니다. Front-end는 요청 Origin과 Cookie 포함 여부를 확인하고 승인된 계약에 맞춰 요청 설정과 오류 처리를 연결합니다. 실제 허용 Origin과 CSRF 방어는 Backend·배포·보안 담당이 서버 환경에 적용합니다. Cookie가 자동으로 포함되는 인증 방식에서는 상태 변경 요청의 CSRF 방어가 필요합니다. SameSite 만으로 충분하다고 가정하지 않고 CSRF Token, Origin·Referer 검증 또는 채택한 방식을 Backend와 확정합니다. GET 요청으로 서버 상태를 변경하지 않습니다. CORS는 브라우저의 응답 접근 정책이며 인증과 권한 검증을 대신하지 않습니다. Credential 요청의 허용 Origin을 와일드카드나 사용자 입력으로 반사하지 않습니다.",
    "url": "./../guides/security/index.html#section-4"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "참고 기준",
    "excerpt": "OWASP XSS Prevention Cheat Sheet OWASP CSRF Prevention Cheat Sheet OWASP Logging Cheat Sheet MDN Content Security Policy MDN Secure Cookie Configuration Next.js Environment Variables React Security Advisories Next.js Sec…",
    "content": "11. 참고 기준 OWASP XSS Prevention Cheat Sheet OWASP CSRF Prevention Cheat Sheet OWASP Logging Cheat Sheet MDN Content Security Policy MDN Secure Cookie Configuration Next.js Environment Variables React Security Advisories Next.js Security Advisories npm Security Documentation Front-End 보안과 개인정보 가이드",
    "url": "./../guides/security/index.html#section-11"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "책임과 신뢰 경계",
    "excerpt": "이 절의 Backend, Native App과 배포 관련 항목은 Front-end가 안전한 연동을 위해 확인해야 할 외부 책임입니다. 현재 프로젝트에서 해당 구현과 운영 방식이 확정됐다는 뜻이 아니며, 실제 담당 주체, 제공 범위와 계약은 승인되기 전까지 TBD 입니다. 신뢰 경계(Trust Boundary)는 값이나 실행 책임이 한 영역에서 다른 영역으로 넘어가는 지점입니다. 예를 들어 A…",
    "content": "2. 책임과 신뢰 경계 이 절의 Backend, Native App과 배포 관련 항목은 Front-end가 안전한 연동을 위해 확인해야 할 외부 책임입니다. 현재 프로젝트에서 해당 구현과 운영 방식이 확정됐다는 뜻이 아니며, 실제 담당 주체, 제공 범위와 계약은 승인되기 전까지 TBD 입니다. 신뢰 경계(Trust Boundary)는 값이나 실행 책임이 한 영역에서 다른 영역으로 넘어가는 지점입니다. 예를 들어 API 응답이 Front-end로 들어오는 순간, URL 값으로 화면 상태를 만들 때, WebView가 Native App 기능을 호출할 때가 신뢰 경계입니다. Front-end는 이 경계에서 입력 형식과 실패 가능성을 확인합니다. 영역 주요 보안 책임 Front-end 외부 값 검증, 안전한 출력, 최소 저장, 오류·로그 노출 방지와 사용자 상태 정리 Backend 인증, 권한, 소유권, 업무 규칙, 데이터 접근과 업로드의 최종 검증 Native App OS 권한, 보안 저장소, WebView 설정과 승인된 Bridge Method 관리 배포·보안 기준 Cookie·token, CSRF, CORS, CSP, 보안 Header, Secret과 허용 Origin 정책 Front-end는 권한 없는 행동을 UI에서 제한할 수 있지만 이를 권한 통제로 간주하지 않습니다. 실제 접근은 Backend가 인증·권한·소유권을 다시 검증해야 합니다. Native는 Web에 필요한 최소 결과만 반환하고 범용 JavaScript 실행 통로를 만들지 않습니다.",
    "url": "./../guides/security/index.html#section-2"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "환경변수, 저장소와 개인정보",
    "excerpt": "환경변수와 Secret NEXT_PUBLIC_ 변수와 Client Component가 참조하는 값은 브라우저에 공개되는 설정으로 취급합니다. API Secret, Signing Key, Private token과 서버 자격 증명을 Client Bundle(브라우저에 전달되는 JavaScript 파일), Source Map(배포 코드를 원본 소스와 연결하는 파일), 정적 파일과 Build 로그…",
    "content": "5. 환경변수, 저장소와 개인정보 환경변수와 Secret NEXT_PUBLIC_ 변수와 Client Component가 참조하는 값은 브라우저에 공개되는 설정으로 취급합니다. API Secret, Signing Key, Private token과 서버 자격 증명을 Client Bundle(브라우저에 전달되는 JavaScript 파일), Source Map(배포 코드를 원본 소스와 연결하는 파일), 정적 파일과 Build 로그에 포함하지 않습니다. 환경변수 이름이 Secret처럼 보여도 Client에 포함되면 보호되지 않습니다. next.config 의 Client Bundle 포함 설정과 동적 환경값 처리 방식은 실제 Next.js 구성에서 확인합니다. Client 저장소 Client 저장소는 브라우저와 WebView 내부에 값을 남기는 공간입니다. 편리하지만 사용자가 열람·수정할 수 있고 로그아웃 후에도 남을 수 있으므로, 보안 저장소나 서버 데이터베이스와 같은 신뢰 수준으로 취급하지 않습니다. 저장이 필요하기 전에 데이터 수명, 사용자 전환, 삭제 조건과 노출 영향을 정의합니다. 비밀번호, 인증번호, 카드정보, 인증 token과 불필요한 개인정보를 Web Storage와 Persist Store에 보관하지 않습니다. Query Cache와 메모리 상태도 같은 사용자가 계속 사용한다는 가정 아래의 임시 저장소이므로 로그아웃 경계를 확인합니다. Offline 데이터는 승인된 범위, 만료, 암호화 책임과 서버 재검증 규칙이 정해진 뒤 저장합니다. 로그, 분석과 오류 수집 Breadcrumb는 오류 발생 전 사용자의 이동·클릭 기록, Replay는 화면 사용 과정을 재현한 기록, Network Capture는 요청·응답 정보 수집, Masking은 입력값이나 개인정보를 가리는 처리입니다. 오류 분석에는 유용하지만 설정에 따라 개인정보가 외부 도구로 전송될 수 있습니다. Access·Refresh token, Session ID, Cookie, 비밀번호, 인증번호, 카드정보와 민감 개인정보를 기록하지 않습니다. 요청·응답 객체 전체, Form 값 전체와 Bridge Payload 전체를 편의상 전송하지 않습니다. 사용자 식별이 필요하면 승인된 가명 식별자와 최소 진단 Code를 사용합니다. 오류 수집 SDK의 Breadcrumb, Replay, Network Capture와 입력 Masking 설정을 실제 도입 시 검토합니다. 사용자에게는 필요한 행동을 안내하고 Stack Trace, 내부 경로와 서버 오류 원문은 노출하지 않습니다.",
    "url": "./../guides/security/index.html#section-5"
  },
  {
    "document": "Front-End 보안과 개인정보 가이드",
    "section": "AI 작업과 병합 기준",
    "excerpt": "AI는 보안 정책을 확정하거나 “안전하다”고 단정하지 않습니다. 이 변경을 Front-End 보안 기준으로 검토해줘. - 외부 입력이 들어오는 경계와 Runtime 검증 - HTML, URL, Redirect와 실행 가능한 문자열 - 인증과 권한의 최종 책임 - Cookie, token, Client 저장소와 사용자 전환 - 로그, 분석, 오류 수집의 민감정보 - Client Bundle의…",
    "content": "10. AI 작업과 병합 기준 AI는 보안 정책을 확정하거나 “안전하다”고 단정하지 않습니다. 이 변경을 Front-End 보안 기준으로 검토해줘. - 외부 입력이 들어오는 경계와 Runtime 검증 - HTML, URL, Redirect와 실행 가능한 문자열 - 인증과 권한의 최종 책임 - Cookie, token, Client 저장소와 사용자 전환 - 로그, 분석, 오류 수집의 민감정보 - Client Bundle의 환경변수와 Secret - Bridge, 파일과 외부 리소스의 허용 범위 - 새 의존성과 실행한 보안 검증 확인된 코드와 설정을 근거로 작성하고, Backend·App·배포 계약이 필요한 내용은 임의로 확정하지 말고 TBD로 분리해줘. 병합 전 확인 React Escape를 우회하거나 신뢰하지 않은 HTML을 실행하지 않는가? URL, Redirect, Deep Link와 외부 리소스가 허용 범위를 확인하는가? UI 숨김을 서버 권한 검증으로 오해하지 않는가? 자격 증명과 개인정보가 URL, 저장소, Bundle, Bridge와 로그에 남지 않는가? Cookie 인증에서 CSRF와 Credential CORS 정책을 확인했는가? 로그아웃과 사용자 전환 뒤 이전 사용자 데이터가 남지 않는가? Client와 Native 입력 검사가 Backend 검증을 대신하지 않는가? CSP와 보안 Header의 실제 적용 여부를 설명과 구분했는가? 새 package의 필요성과 Audit 결과를 검토했는가? React·Next.js 공식 보안 공지와 실제 설치·배포 Version을 확인했는가? 수행한 검사와 수행하지 못한 통합·보안 검증을 구분했는가?",
    "url": "./../guides/security/index.html#section-10"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "공통화와 계약 관리",
    "excerpt": "특정 기능이나 애플리케이션에서만 사용하는 코드는 해당 영역 가까이에 둡니다. 둘 이상의 실제 사용처가 있고 의미와 변경 이유가 같을 때만 앱 내부 공통 영역으로 이동합니다. 공통 UI와 WebView 전용 조합은 역할에 따라 apps/app-webview/src/components 에서 관리합니다. API와 Bridge Type 또는 Adapter는 승인된 계약과 실제 사용처 가까이에 두며…",
    "content": "4. 공통화와 계약 관리 특정 기능이나 애플리케이션에서만 사용하는 코드는 해당 영역 가까이에 둡니다. 둘 이상의 실제 사용처가 있고 의미와 변경 이유가 같을 때만 앱 내부 공통 영역으로 이동합니다. 공통 UI와 WebView 전용 조합은 역할에 따라 apps/app-webview/src/components 에서 관리합니다. API와 Bridge Type 또는 Adapter는 승인된 계약과 실제 사용처 가까이에 두며 확인되지 않은 계약 구조를 만들지 않습니다. 생성된 Type과 Client를 수동으로 서로 다르게 수정하지 않으며 계약 변경과 생성 결과를 하나의 변경으로 검증합니다. Native 앱과 WebView는 배포 시점이 다르므로 Bridge와 API 계약의 하위 호환성을 유지하고, Breaking Change는 Version을 올려 단계적으로 전환합니다.",
    "url": "./../guides/architecture/index.html#section-4"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "변경 기준과 미확정 항목",
    "excerpt": "구조 변경 기준 새 애플리케이션을 추가할 때 Owner, 배포 단위, 환경, 권한과 Rollback 책임을 함께 정의합니다. 새 공통 패키지를 추가할 때 실제 사용처, 공개 API, 의존 방향과 변경 책임을 확인합니다. 계약을 변경할 때 영향을 받는 TypeScript·Dart 생성 결과, Adapter와 출시된 앱 Version을 함께 검토합니다. 우선 결정 항목 실제 package에 사용…",
    "content": "8. 변경 기준과 미확정 항목 구조 변경 기준 새 애플리케이션을 추가할 때 Owner, 배포 단위, 환경, 권한과 Rollback 책임을 함께 정의합니다. 새 공통 패키지를 추가할 때 실제 사용처, 공개 API, 의존 방향과 변경 책임을 확인합니다. 계약을 변경할 때 영향을 받는 TypeScript·Dart 생성 결과, Adapter와 출시된 앱 Version을 함께 검토합니다. 우선 결정 항목 실제 package에 사용할 패키지 관리자와 실행 Script 승인된 Backend API와 Native Bridge 계약 배포 플랫폼과 CI/CD 품질 Gate Front-End 저장소 구조 기준",
    "url": "./../guides/architecture/index.html#section-8"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "저장소 구조",
    "excerpt": "<repository-root>/ ├── AGENTS.md # 저장소 전체 구현 지침 ├── README.md # 프로젝트 진입점 ├── apps/ │ └── app-webview/ # 앱 내 Next.js WebView Front-end │ ├── AGENTS.md # 앱 전용 구현 지침 │ ├── .storybook/ # Storybook 설정 │ └── src/ # 애플리케이션 sour…",
    "content": "2. 저장소 구조 <repository-root>/ ├── AGENTS.md # 저장소 전체 구현 지침 ├── README.md # 프로젝트 진입점 ├── apps/ │ └── app-webview/ # 앱 내 Next.js WebView Front-end │ ├── AGENTS.md # 앱 전용 구현 지침 │ ├── .storybook/ # Storybook 설정 │ └── src/ # 애플리케이션 source └── docs/ ├── AGENTS.md # 문서 작성 지침 ├── guides/ # 상세 가이드 ├── ai/ # AI 작업별 요약 └── common-source/ # 파일 단위 구현 기준 애플리케이션 범위 Directory 역할 기술·분리 상태 apps/app-webview 앱 내 Front-end 서비스 화면과 업무 흐름 Next.js·React·TypeScript",
    "url": "./../guides/architecture/index.html#section-2"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "적용 범위와 표기",
    "excerpt": "이 저장소의 WebView Front-end 애플리케이션과 구현 문서를 함께 관리합니다. 이 문서의 <repository-root> 는 현재 저장소 루트를 의미합니다. 표시 의미 적용 방법 MUST 확정 원칙 구현, 검수와 배포에서 반드시 준수 TBD 결정 필요 담당자 합의와 승인 후 이 문서에 반영 EXAMPLE 참고 예시 프로젝트 조건에 맞게 변경 가능",
    "content": "1. 적용 범위와 표기 이 저장소의 WebView Front-end 애플리케이션과 구현 문서를 함께 관리합니다. 이 문서의 <repository-root> 는 현재 저장소 루트를 의미합니다. 표시 의미 적용 방법 MUST 확정 원칙 구현, 검수와 배포에서 반드시 준수 TBD 결정 필요 담당자 합의와 승인 후 이 문서에 반영 EXAMPLE 참고 예시 프로젝트 조건에 맞게 변경 가능",
    "url": "./../guides/architecture/index.html#section-1"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "환경과 Secret",
    "excerpt": "dev · qa · prod 환경과 배포 권한은 애플리케이션별로 분리합니다. API Endpoint와 공개 Client 설정은 승인된 환경값으로 연결합니다. Cookie 범위, CORS·CSP, Redirect URI와 Origin Allowlist는 Backend·배포·보안 담당이 서비스·제휴사·환경별로 승인하고 Server·CDN·Hosting에 적용합니다. 브라우저에 노출 가능한 공개…",
    "content": "7. 환경과 Secret dev · qa · prod 환경과 배포 권한은 애플리케이션별로 분리합니다. API Endpoint와 공개 Client 설정은 승인된 환경값으로 연결합니다. Cookie 범위, CORS·CSP, Redirect URI와 Origin Allowlist는 Backend·배포·보안 담당이 서비스·제휴사·환경별로 승인하고 Server·CDN·Hosting에 적용합니다. 브라우저에 노출 가능한 공개 설정과 서버·CI에서만 사용하는 Secret을 구분합니다. Signing Key, Token과 배포 자격 증명은 저장소, 앱 Bundle, Web JavaScript와 Build Log에 포함하지 않습니다. MUST Client 공개 설정, 자격 증명 노출 방지, 공급망과 CSP·CORS 연동 검증은 Front-End 보안과 개인정보 가이드 의 책임 구분을 함께 확인합니다. CSP·CORS 정책과 Header의 결정·적용은 Backend·배포·보안 담당이 수행합니다.",
    "url": "./../guides/architecture/index.html#section-7"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "CI/CD와 Release",
    "excerpt": "6.1 애플리케이션 Build와 배포 애플리케이션 Pipeline, Artifact, 환경 설정, Version, 승인과 Rollback은 apps/app-webview 를 기준으로 관리합니다. 변경 경로와 의존 관계를 기준으로 apps/app-webview 의 Lint·Test·Build를 수행합니다. 공통 계약이나 앱 기반 코드를 변경하면 영향을 받는 기능의 회귀 테스트를 수행합니다. d…",
    "content": "6. CI/CD와 Release 6.1 애플리케이션 Build와 배포 애플리케이션 Pipeline, Artifact, 환경 설정, Version, 승인과 Rollback은 apps/app-webview 를 기준으로 관리합니다. 변경 경로와 의존 관계를 기준으로 apps/app-webview 의 Lint·Test·Build를 수행합니다. 공통 계약이나 앱 기반 코드를 변경하면 영향을 받는 기능의 회귀 테스트를 수행합니다. docs/ 는 개발·검토용 문서이며 애플리케이션 Build 입력, 제품 Bundle, 정적 자산과 배포 Artifact에 포함하지 않습니다. 문서 검색 데이터 생성과 링크·HTML 검사는 애플리케이션 Build와 분리한 문서 변경 검증으로 실행합니다. 운영 배포는 Version Tag와 Release Note를 남기고 해당 Artifact와 연결합니다. 배포 플랫폼과 품질 Gate는 실제 인프라와 CI 설정을 기준으로 확인합니다. 6.2 문서 게시와 GitLab Pages 애플리케이션 Build와 문서 게시를 서로 다른 CI Job으로 운영합니다. 애플리케이션 Job은 apps/app-webview 만 Build하고, Pages Job은 문서 검증을 통과한 docs/ 만 정적 사이트로 게시합니다. Pages 게시를 애플리케이션 Build나 Production 배포의 일부로 취급하지 않습니다. flowchart TB accTitle: 애플리케이션 Build와 문서 게시 Pipeline 분리 accDescr: 저장소 변경은 애플리케이션 검증과 문서 검증으로 나뉘며 애플리케이션은 제품 Artifact로 배포하고 문서는 GitLab Pages로 게시해 Confluence iframe에서 조회합니다. A[\"저장소 변경\"] --> B[\"Application Job apps/app-webview\"] A --> C[\"Documentation Job docs\"] B --> D[\"Typecheck · Lint · Test · Build\"] D --> E[\"제품 Artifact 배포\"] C --> F[\"검색 데이터 · 링크 · HTML 검증\"] F --> G[\"GitLab Pages 게시\"] G --> H[\"Confluence iframe 조회\"] 제품 Artifact와 문서 사이트는 같은 저장소를 사용하되 Build 입력과 배포 경로를 분리합니다. GitLab Pages Job은 다음 형태를 기준으로 구성합니다. deploy-docs: image: node:22-alpine stage: deploy script: - node docs/search/build-search-index.mjs pages: publish: docs rules: - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH' changes: - docs/**/* 실제 Job 이름, Stage, Container Image, Runner와 Rules 문법은 저장소의 GitLab Version과 기존 .gitlab-ci.yml 을 기준으로 확인합니다. 기본 브랜치의 문서 변경만 게시하고 Application 변경만 있는 Pipeline에서 Pages Job을 불필요하게 실행하지 않습니다. 전체 docs/ 를 게시하면 ai , common-source , Markdown 초안과 구현 예시도 URL로 접근할 수 있으므로 Pages 공개 범위와 저장소 보안 등급을 일치시킵니다. 일부 문서만 게시할 경우 허용 목록으로 별도 게시 Directory를 만들고, 제외된 파일을 가리키는 Navigation과 상대 링크가 없는지 검사합니다. 문서 source와 생성된 검색 데이터의 불일치를 막기 위해 Pages 게시 전에 검색 데이터 생성과 로컬 링크 검사를 실행합니다. 6.3 Confluence iframe과 접근 제어 Confluence iframe은 GitLab Pages의 docs/index.html 에 해당하는 HTTPS 주소를 진입점으로 사용합니다. 사내 문서는 GitLab Pages Access Control과 프로젝트 권한으로 열람 범위를 제한하고, 공개 Pages에는 내부 계약, AI 지침, 개인정보와 Secret을 게시하지 않습니다. Private Pages의 로그인 Redirect와 Session Cookie가 Confluence iframe 안에서 유지되는지 실제 사내 Browser 정책으로 확인합니다. 제3자 Cookie 제한으로 인증이 반복되면 iframe 대신 새 창 링크나 승인된 사내 문서 Hosting 방식을 사용합니다. Pages 응답의 X-Frame-Options 와 Content-Security-Policy: frame-ancestors 가 Confluence Origin을 차단하지 않는지 Browser Network 도구로 확인합니다. iframe에서 메뉴 이동, 검색, 코드 접기, Desktop·Mobile 너비, 로그인 만료와 권한 없는 사용자의 오류 화면을 확인한 뒤 문서 URL을 공유합니다. 설정 문법과 보안 동작은 GitLab Pages , GitLab Pages Access Control 과 Confluence iframe Macro 공식 문서를 기준으로 확인합니다.",
    "url": "./../guides/architecture/index.html#section-6"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "Directory 책임",
    "excerpt": "영역 책임 금지 사항 apps 독립적으로 빌드·테스트·배포 가능한 애플리케이션 다른 앱의 내부 소스 경로를 직접 Import하지 않음 docs 상세 가이드, AI 요약과 파일 단위 구현 기준 애플리케이션 source와 package 설정을 포함하지 않음",
    "content": "3. Directory 책임 영역 책임 금지 사항 apps 독립적으로 빌드·테스트·배포 가능한 애플리케이션 다른 앱의 내부 소스 경로를 직접 Import하지 않음 docs 상세 가이드, AI 요약과 파일 단위 구현 기준 애플리케이션 source와 package 설정을 포함하지 않음",
    "url": "./../guides/architecture/index.html#section-3"
  },
  {
    "document": "Front-End 저장소 구조 기준",
    "section": "Workspace와 의존성",
    "excerpt": "Web 프로젝트는 하나의 Workspace에서 공통 작업과 의존성 정책을 관리합니다. Flutter는 같은 저장소에 두되 Dart 의존성, Lock File과 빌드 도구를 Flutter Toolchain 기준으로 관리합니다. Web Workspace와 Flutter 등 각 Toolchain의 Lock File을 변경 사항과 함께 검토하고 CI에서 고정 설치합니다. Workspace, 패키지…",
    "content": "5. Workspace와 의존성 Web 프로젝트는 하나의 Workspace에서 공통 작업과 의존성 정책을 관리합니다. Flutter는 같은 저장소에 두되 Dart 의존성, Lock File과 빌드 도구를 Flutter Toolchain 기준으로 관리합니다. Web Workspace와 Flutter 등 각 Toolchain의 Lock File을 변경 사항과 함께 검토하고 CI에서 고정 설치합니다. Workspace, 패키지 관리자와 Task Runner 제품은 CI·배포 플랫폼을 확인한 뒤 확정합니다. TBD",
    "url": "./../guides/architecture/index.html#section-5"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "도구와 명령 후보",
    "excerpt": "현재 프로젝트에 다음 도구는 설치되어 있지 않습니다. 단위·컴포넌트: Vitest, React Testing Library, @testing-library/user-event , @testing-library/jest-dom E2E: Playwright API Mock: 프로젝트 기본 도구가 아니며 승인된 계약 이후 Front-end 테스트 필요에 따라 후보를 결정 npm run test n…",
    "content": "7. 도구와 명령 후보 현재 프로젝트에 다음 도구는 설치되어 있지 않습니다. 단위·컴포넌트: Vitest, React Testing Library, @testing-library/user-event , @testing-library/jest-dom E2E: Playwright API Mock: 프로젝트 기본 도구가 아니며 승인된 계약 이후 Front-end 테스트 필요에 따라 후보를 결정 npm run test npm run test:watch npm run test:e2e 도구와 명령은 후보이며 한꺼번에 모두 도입하지 않습니다. 단위·컴포넌트 테스트부터 시작하고 실제 필요가 생길 때 E2E와 API Mock을 추가합니다.",
    "url": "./../guides/testing/index.html#section-7"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "리뷰 체크리스트",
    "excerpt": "변경 위험에 맞는 테스트 수준을 선택했는가? 사용자에게 보이는 동작과 결과를 검증했는가? 영향이 큰 오류·취소·중복 실행을 확인했는가? 테스트가 실행 순서와 외부 상태에 의존하지 않는가? Mock이 실제 계약 오류를 숨기지 않는가? 실제 개인정보와 운영 Secret을 사용하지 않았는가? 테스트하지 못한 위험을 변경 설명에 남겼는가? 도입 순서 단위·컴포넌트 테스트 도구를 비교하고 프로젝트 기…",
    "content": "9. 리뷰 체크리스트 변경 위험에 맞는 테스트 수준을 선택했는가? 사용자에게 보이는 동작과 결과를 검증했는가? 영향이 큰 오류·취소·중복 실행을 확인했는가? 테스트가 실행 순서와 외부 상태에 의존하지 않는가? Mock이 실제 계약 오류를 숨기지 않는가? 실제 개인정보와 운영 Secret을 사용하지 않았는가? 테스트하지 못한 위험을 변경 설명에 남겼는가? 도입 순서 단위·컴포넌트 테스트 도구를 비교하고 프로젝트 기준을 확정합니다. 오류 영향이 큰 순수 로직이나 핵심 컴포넌트부터 시작합니다. 반복되는 설정이 확인된 경우에만 공통 테스트 도구를 만듭니다. 승인된 API 계약과 사용할 수 있는 Backend 환경으로 재현하기 어려운 상태가 확인되면 Front-end 책임자 또는 프로젝트 담당자가 Front-end 테스트 범위와 관리 책임을 정해 API Mock을 검토하고, 여러 시스템 경계를 통과하는 핵심 흐름이 생기면 Playwright를 검토합니다. 실행 시간과 안정성을 확인한 뒤 CI 범위를 확정합니다. Front-End 테스트 가이드",
    "url": "./../guides/testing/index.html#section-9"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "목적과 현재 상태",
    "excerpt": "이 문서는 Front-End 변경으로 발생할 수 있는 주요 회귀를 효율적으로 확인하기 위한 테스트 기준을 정리합니다. 테스트 개수나 커버리지 수치 자체를 목표로 삼지 않습니다. 오류가 발생했을 때 사용자, 금액, 권한과 데이터에 미치는 영향이 큰 동작부터 검증합니다. 현재 프로젝트에는 테스트 도구와 test 스크립트가 없습니다. 도구, 명령과 CI 기준은 실제 테스트 환경을 구성할 때 확정합…",
    "content": "1. 목적과 현재 상태 이 문서는 Front-End 변경으로 발생할 수 있는 주요 회귀를 효율적으로 확인하기 위한 테스트 기준을 정리합니다. 테스트 개수나 커버리지 수치 자체를 목표로 삼지 않습니다. 오류가 발생했을 때 사용자, 금액, 권한과 데이터에 미치는 영향이 큰 동작부터 검증합니다. 현재 프로젝트에는 테스트 도구와 test 스크립트가 없습니다. 도구, 명령과 CI 기준은 실제 테스트 환경을 구성할 때 확정합니다.",
    "url": "./../guides/testing/index.html#section-1"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "우선 테스트 대상",
    "excerpt": "금액, 이용 조건과 유효기간 등 핵심 계산 사용자 권한과 상태에 따른 기능 분기 결제, 예약과 이용권 사용의 중복 실행 방지 폼의 주요 검증, 제출과 서버 오류 연결 TanStack Query의 로딩, 빈 결과와 오류 상태 Bridge의 요청·응답 변환과 미지원 환경 처리 여러 화면에서 사용하는 공통 UI의 주요 동작 서비스 흐름이 확정된 핵심 E2E 시나리오 단순 표시, Tailwind 클…",
    "content": "3. 우선 테스트 대상 금액, 이용 조건과 유효기간 등 핵심 계산 사용자 권한과 상태에 따른 기능 분기 결제, 예약과 이용권 사용의 중복 실행 방지 폼의 주요 검증, 제출과 서버 오류 연결 TanStack Query의 로딩, 빈 결과와 오류 상태 Bridge의 요청·응답 변환과 미지원 환경 처리 여러 화면에서 사용하는 공통 UI의 주요 동작 서비스 흐름이 확정된 핵심 E2E 시나리오 단순 표시, Tailwind 클래스 문자열과 라이브러리 내부 동작은 기본 테스트 대상이 아닙니다.",
    "url": "./../guides/testing/index.html#section-3"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "작성 기준",
    "excerpt": "테스트는 대상 코드 가까이에 둡니다. 조건과 기대 결과가 드러나는 테스트 이름을 사용합니다. 반복되는 설정이 확인된 경우에만 공통 wrapper와 fixture를 만듭니다. Zustand store나 QueryClient는 테스트별 상태가 섞이지 않도록 초기화합니다. role과 label로 찾기 어려울 때만 data-testid 를 사용합니다. it ( \"필수 약관에 동의하지 않으면 예약 요…",
    "content": "6. 작성 기준 테스트는 대상 코드 가까이에 둡니다. 조건과 기대 결과가 드러나는 테스트 이름을 사용합니다. 반복되는 설정이 확인된 경우에만 공통 wrapper와 fixture를 만듭니다. Zustand store나 QueryClient는 테스트별 상태가 섞이지 않도록 초기화합니다. role과 label로 찾기 어려울 때만 data-testid 를 사용합니다. it ( \"필수 약관에 동의하지 않으면 예약 요청을 보내지 않는다\" , async () => { // 사용자 동작과 화면 결과를 검증합니다. }); TBD 테스트 파일명과 배치 경로는 실제 테스트 환경을 구성할 때 확정합니다.",
    "url": "./../guides/testing/index.html#section-6"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "적용 원칙",
    "excerpt": "구현 세부사항보다 사용자가 확인할 수 있는 결과를 검증합니다. 정상 흐름과 함께 영향이 큰 오류·취소·중복 실행을 확인합니다. 라이브러리 자체 동작보다 프로젝트가 추가한 로직과 연결을 검증합니다. 버그를 수정할 때는 가능한 범위에서 회귀 테스트를 추가합니다. 모든 컴포넌트와 Hook에 형식적인 테스트를 만들지 않습니다.",
    "content": "2. 적용 원칙 구현 세부사항보다 사용자가 확인할 수 있는 결과를 검증합니다. 정상 흐름과 함께 영향이 큰 오류·취소·중복 실행을 확인합니다. 라이브러리 자체 동작보다 프로젝트가 추가한 로직과 연결을 검증합니다. 버그를 수정할 때는 가능한 범위에서 회귀 테스트를 추가합니다. 모든 컴포넌트와 Hook에 형식적인 테스트를 만들지 않습니다.",
    "url": "./../guides/testing/index.html#section-2"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "테스트 수준 선택",
    "excerpt": "4.1 단위 테스트 입력과 출력이 명확한 계산, 권한 판정, 데이터 변환과 오류 매핑에 사용합니다. 외부 상태 없이 빠르게 실행할 수 있는 로직을 우선합니다. 4.2 컴포넌트 테스트 입력, 클릭과 키보드 조작이 화면 결과로 이어지는 동작을 검증합니다. role과 label 등 접근 가능한 방식으로 요소를 찾습니다. 내부 state나 CSS class보다 화면에 표시되는 결과를 확인합니다. 비…",
    "content": "4. 테스트 수준 선택 4.1 단위 테스트 입력과 출력이 명확한 계산, 권한 판정, 데이터 변환과 오류 매핑에 사용합니다. 외부 상태 없이 빠르게 실행할 수 있는 로직을 우선합니다. 4.2 컴포넌트 테스트 입력, 클릭과 키보드 조작이 화면 결과로 이어지는 동작을 검증합니다. role과 label 등 접근 가능한 방식으로 요소를 찾습니다. 내부 state나 CSS class보다 화면에 표시되는 결과를 확인합니다. 비동기 결과는 임의의 시간 지연 없이 기다립니다. const user = userEvent. setup (); render ( < ReservationForm /> ); await user. type (screen. getByLabelText ( \"예약자 이름\" ), \"홍길동\" ); await user. click (screen. getByRole ( \"button\" , { name : \"예약하기\" })); expect ( await screen. findByText ( \"예약이 완료되었습니다.\" )) . toBeInTheDocument (); 4.3 E2E 테스트 실제 라우팅과 여러 시스템 경계를 함께 확인해야 하는 핵심 사용자 흐름에만 사용합니다. 모든 화면을 E2E로 반복 검증하지 않습니다.",
    "url": "./../guides/testing/index.html#section-4"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "CI와 완료 기준",
    "excerpt": "테스트 환경과 CI 구성이 확정되면 관련 테스트를 PR 필수 검사 후보로 적용합니다. 공통 계약이나 패키지 변경 시 영향받는 사용처를 함께 확인합니다. 실패한 테스트를 skip하거나 재시도 횟수만 늘려 우회하지 않습니다. 커버리지는 누락 지점을 찾는 참고 자료로 사용하며 근거 없는 전체 백분율을 목표로 삼지 않습니다. TBD CI 실행 범위, E2E 환경과 커버리지 기준은 배포 환경이 정해진…",
    "content": "8. CI와 완료 기준 테스트 환경과 CI 구성이 확정되면 관련 테스트를 PR 필수 검사 후보로 적용합니다. 공통 계약이나 패키지 변경 시 영향받는 사용처를 함께 확인합니다. 실패한 테스트를 skip하거나 재시도 횟수만 늘려 우회하지 않습니다. 커버리지는 누락 지점을 찾는 참고 자료로 사용하며 근거 없는 전체 백분율을 목표로 삼지 않습니다. TBD CI 실행 범위, E2E 환경과 커버리지 기준은 배포 환경이 정해진 뒤 확정합니다.",
    "url": "./../guides/testing/index.html#section-8"
  },
  {
    "document": "Front-End 테스트 가이드",
    "section": "Mock과 테스트 데이터",
    "excerpt": "네트워크와 Bridge는 필요한 경계에서만 대체합니다. 성공뿐 아니라 기능상 중요한 업무 오류, 취소와 미지원 결과를 준비합니다. 테스트는 실행 순서와 이전 테스트 결과에 의존하지 않습니다. 토큰, 카드번호와 개인정보 같은 실제 운영 데이터를 사용하지 않습니다. 과도한 Mock으로 실제 연결 오류를 숨기지 않습니다. 기획과 Backend API 계약이 확정되기 전에는 API Mock, fix…",
    "content": "5. Mock과 테스트 데이터 네트워크와 Bridge는 필요한 경계에서만 대체합니다. 성공뿐 아니라 기능상 중요한 업무 오류, 취소와 미지원 결과를 준비합니다. 테스트는 실행 순서와 이전 테스트 결과에 의존하지 않습니다. 토큰, 카드번호와 개인정보 같은 실제 운영 데이터를 사용하지 않습니다. 과도한 Mock으로 실제 연결 오류를 숨기지 않습니다. 기획과 Backend API 계약이 확정되기 전에는 API Mock, fixture와 handler를 만들지 않습니다. 계약 확정 후 사용할 수 있는 Backend 환경에서 필요한 상태를 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 테스트 범위와 관리 책임을 정한 뒤 API Mock 도입 판단 기준 을 확인합니다. TBD Bridge Mock의 공통 fixture와 실제 API 계약 기반 fixture의 공유 범위는 구현 대상이 확인된 뒤 결정합니다.",
    "url": "./../guides/testing/index.html#section-5"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "디자인 토큰",
    "excerpt": "컴포넌트에서는 원시 색상이나 임의 색상값보다 프로젝트의 의미 기반 Tailwind 토큰을 사용합니다. // 권장 < div className = \"border-border bg-card text-card-foreground\" /> // 지양 < div className = \"border-gray-200 bg-[#ffffff] text-gray-900\" /> 현재는 코드 리뷰에서 확인합니다.…",
    "content": "5. 디자인 토큰 컴포넌트에서는 원시 색상이나 임의 색상값보다 프로젝트의 의미 기반 Tailwind 토큰을 사용합니다. // 권장 < div className = \"border-border bg-card text-card-foreground\" /> // 지양 < div className = \"border-gray-200 bg-[#ffffff] text-gray-900\" /> 현재는 코드 리뷰에서 확인합니다. 동적 class와 예외를 안정적으로 구분할 수 없는 단순 문자열 검색은 CI 차단 규칙으로 사용하지 않습니다. TBD 같은 위반이 반복되면 허용 토큰과 예외 정책을 먼저 정한 뒤 자동 검사를 검토합니다.",
    "url": "./../guides/lint/index.html#section-5"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "리뷰 체크리스트",
    "excerpt": "npm run typecheck 와 npm run lint 를 통과했는가? lint 오류를 disable 주석으로 우회하지 않았는가? Promise의 성공과 실패 처리 방식이 명확한가? label, 키보드 조작과 포커스 구조가 올바른가? 프로젝트 디자인 토큰을 사용했는가? 자동 검사로 확인하지 못한 위험을 변경 설명에 남겼는가? 도입 순서 현재 Next.js 설정의 실제 오류와 경고를 확인합…",
    "content": "8. 리뷰 체크리스트 npm run typecheck 와 npm run lint 를 통과했는가? lint 오류를 disable 주석으로 우회하지 않았는가? Promise의 성공과 실패 처리 방식이 명확한가? label, 키보드 조작과 포커스 구조가 올바른가? 프로젝트 디자인 토큰을 사용했는가? 자동 검사로 확인하지 못한 위험을 변경 설명에 남겼는가? 도입 순서 현재 Next.js 설정의 실제 오류와 경고를 확인합니다. 필요한 접근성 규칙만 오류로 승격합니다. no-floating-promises 의 실행 시간과 기존 코드 영향을 확인합니다. 합의된 규칙만 CI 필수 검사로 연결합니다.",
    "url": "./../guides/lint/index.html#section-8"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "목적과 범위",
    "excerpt": "이 문서는 사람이 작성한 코드와 LLM이 생성한 코드에 같은 정적 검사 기준을 적용하기 위한 핵심 원칙을 정리합니다. lint가 접근성, 화면 구조와 디자인 의도를 모두 판단할 수는 없습니다. 자동으로 확실하게 판단할 수 있는 항목만 lint로 강제하고 나머지는 코드 리뷰와 테스트에서 확인합니다. 현재 프로젝트 기준 현재 apps/app-webview/eslint.config.mjs 는 ES…",
    "content": "1. 목적과 범위 이 문서는 사람이 작성한 코드와 LLM이 생성한 코드에 같은 정적 검사 기준을 적용하기 위한 핵심 원칙을 정리합니다. lint가 접근성, 화면 구조와 디자인 의도를 모두 판단할 수는 없습니다. 자동으로 확실하게 판단할 수 있는 항목만 lint로 강제하고 나머지는 코드 리뷰와 테스트에서 확인합니다. 현재 프로젝트 기준 현재 apps/app-webview/eslint.config.mjs 는 ESLint 9 Flat Config, eslint-config-next/core-web-vitals 와 eslint-config-next/typescript 를 사용하며 빌드 결과물과 next-env.d.ts 를 제외합니다. npm run typecheck npm run lint npm run build 로컬 변경 중에는 typecheck 와 lint 를 우선 실행합니다. production build는 병합 또는 통합 검증이 필요할 때 별도로 실행합니다.",
    "url": "./../guides/lint/index.html#section-1"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "적용 범위와 예외",
    "excerpt": "애플리케이션의 TypeScript와 TSX 파일을 기본 검사 대상으로 둡니다. 테스트, 설정과 생성 코드에는 같은 규칙을 일괄 적용하지 않습니다. TBD 파일 유형별 검사 범위와 완화 규칙은 실제 파일이 생긴 뒤 확정합니다. eslint-disable 이 꼭 필요한 경우 규칙 이름과 사유를 남기고 최소 범위에만 적용합니다. 파일 전체 비활성화와 규칙 이름이 없는 비활성화는 사용하지 않습니다.",
    "content": "6. 적용 범위와 예외 애플리케이션의 TypeScript와 TSX 파일을 기본 검사 대상으로 둡니다. 테스트, 설정과 생성 코드에는 같은 규칙을 일괄 적용하지 않습니다. TBD 파일 유형별 검사 범위와 완화 규칙은 실제 파일이 생긴 뒤 확정합니다. eslint-disable 이 꼭 필요한 경우 규칙 이름과 사유를 남기고 최소 범위에만 적용합니다. 파일 전체 비활성화와 규칙 이름이 없는 비활성화는 사용하지 않습니다.",
    "url": "./../guides/lint/index.html#section-6"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "적용 원칙",
    "excerpt": "코드 오류를 정적으로 확실하게 판단할 수 있는 규칙만 오류로 둡니다. 새 규칙은 기존 코드 영향과 실행 시간을 확인한 뒤 적용합니다. eslint-disable 로 오류를 먼저 우회하지 않습니다. 자동 수정 후에는 Diff를 확인하고 typecheck 와 lint 를 다시 실행합니다. 사용되지 않는 disable 지시문은 경고 이상으로 유지합니다.",
    "content": "2. 적용 원칙 코드 오류를 정적으로 확실하게 판단할 수 있는 규칙만 오류로 둡니다. 새 규칙은 기존 코드 영향과 실행 시간을 확인한 뒤 적용합니다. eslint-disable 로 오류를 먼저 우회하지 않습니다. 자동 수정 후에는 Diff를 확인하고 typecheck 와 lint 를 다시 실행합니다. 사용되지 않는 disable 지시문은 경고 이상으로 유지합니다.",
    "url": "./../guides/lint/index.html#section-2"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "접근성 규칙",
    "excerpt": "현재 Next.js 설정에 포함된 규칙 중 다음 항목을 우선 오류 후보로 검토합니다. 검사 목적 규칙 올바른 aria-* 속성명 jsx-a11y/aria-props role의 필수 ARIA 속성 jsx-a11y/role-has-required-aria-props label과 입력 요소 연결 jsx-a11y/label-has-associated-control 이미지 대체 텍스트 jsx-a11y…",
    "content": "3. 접근성 규칙 현재 Next.js 설정에 포함된 규칙 중 다음 항목을 우선 오류 후보로 검토합니다. 검사 목적 규칙 올바른 aria-* 속성명 jsx-a11y/aria-props role의 필수 ARIA 속성 jsx-a11y/role-has-required-aria-props label과 입력 요소 연결 jsx-a11y/label-has-associated-control 이미지 대체 텍스트 jsx-a11y/alt-text 클릭 요소의 키보드 지원 jsx-a11y/click-events-have-key-events ARIA를 추가하기 전에 목적에 맞는 HTML 요소를 먼저 사용합니다. // 권장 < button type = \"button\" onClick = {openDialog} > 상세 보기 </ button > // 지양 < div onClick = {openDialog} > 상세 보기 </ div > lint는 ID 연결, 제목 구조, 포커스 이동과 실제 키보드 사용성을 완전히 보장하지 못합니다. 해당 항목은 코드 리뷰나 관련 테스트에서 확인합니다.",
    "url": "./../guides/lint/index.html#section-3"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "참고 자료",
    "excerpt": "Next.js ESLint 설정 typescript-eslint no-floating-promises eslint-plugin-jsx-a11y Front-End Lint 가이드",
    "content": "9. 참고 자료 Next.js ESLint 설정 typescript-eslint no-floating-promises eslint-plugin-jsx-a11y Front-End Lint 가이드",
    "url": "./../guides/lint/index.html#section-9"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "CI 적용 기준",
    "excerpt": "CI 구성이 확정되면 typecheck 와 lint 를 PR 필수 검사 후보로 적용합니다. 새 규칙은 기존 오류 수와 실행 시간을 확인한 뒤 CI 차단 조건으로 전환합니다. warning 허용 여부와 저장소 검사 범위는 실제 CI 설정을 기준으로 확인합니다. LLM이 생성한 코드도 같은 기준을 적용합니다. 모델의 설명을 검증 결과로 간주하지 않고 실제 명령 결과를 확인합니다.",
    "content": "7. CI 적용 기준 CI 구성이 확정되면 typecheck 와 lint 를 PR 필수 검사 후보로 적용합니다. 새 규칙은 기존 오류 수와 실행 시간을 확인한 뒤 CI 차단 조건으로 전환합니다. warning 허용 여부와 저장소 검사 범위는 실제 CI 설정을 기준으로 확인합니다. LLM이 생성한 코드도 같은 기준을 적용합니다. 모델의 설명을 검증 결과로 간주하지 않고 실제 명령 결과를 확인합니다.",
    "url": "./../guides/lint/index.html#section-7"
  },
  {
    "document": "Front-End Lint 가이드",
    "section": "TypeScript와 비동기 코드",
    "excerpt": "typecheck 는 타입 오류를 검사하고 ESLint는 잘못된 코드 패턴을 검사합니다. 둘 중 하나만 통과했다고 검증이 끝난 것은 아닙니다. API와 Bridge 요청의 실패가 사라지지 않도록 @typescript-eslint/no-floating-promises 를 type-aware lint의 첫 도입 후보로 검토합니다. // 지양: Promise 실패가 처리되지 않습니다. saveRe…",
    "content": "4. TypeScript와 비동기 코드 typecheck 는 타입 오류를 검사하고 ESLint는 잘못된 코드 패턴을 검사합니다. 둘 중 하나만 통과했다고 검증이 끝난 것은 아닙니다. API와 Bridge 요청의 실패가 사라지지 않도록 @typescript-eslint/no-floating-promises 를 type-aware lint의 첫 도입 후보로 검토합니다. // 지양: Promise 실패가 처리되지 않습니다. saveReservation (); // 권장 await saveReservation (); void sendAnalytics (). catch (reportError); void 는 오류 처리를 대신하지 않습니다. 함수 내부에서 실패를 처리하거나 catch 를 연결한 경우에만 사용합니다. TBD type-aware lint 실행 시간과 기존 코드 영향을 확인한 뒤 no-floating-promises 도입 여부를 확정합니다. React Hooks react-hooks/rules-of-hooks : 오류 react-hooks/exhaustive-deps : 경고 exhaustive-deps 의 오류 승격은 기존 코드 영향을 확인한 뒤 결정합니다. 경고를 없애기 위해 Effect 동작을 임의로 바꾸거나 disable 주석을 먼저 추가하지 않습니다.",
    "url": "./../guides/lint/index.html#section-4"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "구현과 검증을 같은 작업으로 봅니다.",
    "excerpt": "영역 핵심 확인 완료 근거 접근성 Semantic HTML · Keyboard · Focus · 이름 · Contrast 주요 사용자 흐름 직접 확인 Test 업무 규칙 · 상태 전환 · 오류 매핑 · Adapter 위험과 회귀 가능성 중심 정적 검사 TypeScript · Lint · 실제 설정 프로젝트 명령 성공 Build Storybook · Application 정적 Build와 통합…",
    "content": "구현과 검증을 같은 작업으로 봅니다. 영역 핵심 확인 완료 근거 접근성 Semantic HTML · Keyboard · Focus · 이름 · Contrast 주요 사용자 흐름 직접 확인 Test 업무 규칙 · 상태 전환 · 오류 매핑 · Adapter 위험과 회귀 가능성 중심 정적 검사 TypeScript · Lint · 실제 설정 프로젝트 명령 성공 Build Storybook · Application 정적 Build와 통합 결과 완료 보고 재사용 · 신규 UI · 미검증 환경 · TBD 검사 결과와 한계 명시 13–15 · GUIDE OPERATION",
    "url": "./../guides/briefing/presentation.html#section-12"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "기능 하나도 준비부터 완료 보고까지 연결합니다.",
    "excerpt": "01 준비 기획 · Figma · AGENTS.md 확인 02 탐색과 설계 기존 UI · Token · 상태 책임 · 예외 03 구현 Component · Story · 기능 코드 04 적용과 검증 화면 · 접근성 · 다국어 · 보안 · Test · Build 05 완료 보고 재사용 · 신규 구현 · 검사 결과 · 미확정 승인된 API 계약이 없다면 Endpoint, Parser, Fixtu…",
    "content": "기능 하나도 준비부터 완료 보고까지 연결합니다. 01 준비 기획 · Figma · AGENTS.md 확인 02 탐색과 설계 기존 UI · Token · 상태 책임 · 예외 03 구현 Component · Story · 기능 코드 04 적용과 검증 화면 · 접근성 · 다국어 · 보안 · Test · Build 05 완료 보고 재사용 · 신규 구현 · 검사 결과 · 미확정 승인된 API 계약이 없다면 Endpoint, Parser, Fixture와 Mock Handler를 임의로 만들지 않고 TBD 로 남깁니다. 04 · UI × FIGMA",
    "url": "./../guides/briefing/presentation.html#section-3"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "기존 Component와 Semantic Token을 우선합니다.",
    "excerpt": "기존 Props와 Variant 확인 한 기능의 조합은 기능 가까이에 배치 실제 반복과 변경 이유가 같을 때 공통화 Storybook만을 위한 API는 추가하지 않음 Figma · Main Component Continue PATH components/ui/Button.tsx PROPS variant · size · loading STATES default · disabled · loadin…",
    "content": "기존 Component와 Semantic Token을 우선합니다. 기존 Props와 Variant 확인 한 기능의 조합은 기능 가까이에 배치 실제 반복과 변경 이유가 같을 때 공통화 Storybook만을 위한 API는 추가하지 않음 Figma · Main Component Continue PATH components/ui/Button.tsx PROPS variant · size · loading STATES default · disabled · loading RULE 실제 Source에서 API 재확인 Implementation import { Button } from '@/components/ui/Button' <Button loading={isPending}> Continue </Button> 05 · STORYBOOK × FIGMA",
    "url": "./../guides/briefing/presentation.html#section-4"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "미확정 항목은 구현이 아니라 TBD로 관리합니다.",
    "excerpt": "PRODUCT 화면과 API 업무 규칙 · 사용자 문구 · Endpoint · Field · 오류 PLATFORM 인증과 Bridge Cookie · Token · Session · Native Method · 메시지 OPERATIONS 배포와 보안 모니터링 · 장애 대응 · CSP · CORS · 개인정보 보존 QUALITY 도구와 Locale Storybook · Schema · Retr…",
    "content": "미확정 항목은 구현이 아니라 TBD로 관리합니다. PRODUCT 화면과 API 업무 규칙 · 사용자 문구 · Endpoint · Field · 오류 PLATFORM 인증과 Bridge Cookie · Token · Session · Native Method · 메시지 OPERATIONS 배포와 보안 모니터링 · 장애 대응 · CSP · CORS · 개인정보 보존 QUALITY 도구와 Locale Storybook · Schema · Retry · Store · 번역 검수 · 통화 예시를 실제 계약처럼 구현하지 않습니다. 필요한 담당자와 입력 자료를 확인한 뒤 확정합니다. 19 · THE PRINCIPLE",
    "url": "./../guides/briefing/presentation.html#section-15"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "번역은 문구 치환이 아니라 실행 환경 전체의 품질입니다.",
    "excerpt": "MESSAGE Key와 문맥 UI 문구를 코드에서 분리하고 변수·복수형·성별·문맥을 보존합니다. RUNTIME Locale과 Fallback 언어 선택, 기본 언어, 누락 메시지와 시간대·통화 규칙을 확인합니다. LAYOUT & A11Y 긴 문구와 읽기 늘어난 문구, 줄바꿈, Focus, 접근 가능한 이름과 실제 발음을 검증합니다. 로컬 LLM 번역은 초안입니다. 중요 문구는 담당자 검수와…",
    "content": "번역은 문구 치환이 아니라 실행 환경 전체의 품질입니다. MESSAGE Key와 문맥 UI 문구를 코드에서 분리하고 변수·복수형·성별·문맥을 보존합니다. RUNTIME Locale과 Fallback 언어 선택, 기본 언어, 누락 메시지와 시간대·통화 규칙을 확인합니다. LAYOUT & A11Y 긴 문구와 읽기 늘어난 문구, 줄바꿈, Focus, 접근 가능한 이름과 실제 발음을 검증합니다. 로컬 LLM 번역은 초안입니다. 중요 문구는 담당자 검수와 승인 절차가 필요하며 동적 콘텐츠의 기기 번역 범위도 별도 계약으로 둡니다. 11 · SECURITY & PRIVACY",
    "url": "./../guides/briefing/presentation.html#section-10"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "사람과 AI가 바뀌어도 같은 기준으로 구축합니다.",
    "excerpt": "BUILD 구축 구조 프로젝트 · Component · 상태 · API · WebView · Storybook · Test · Build VERIFY 사용 환경 OS · Browser · 반응형 · 다국어 · 접근성 · 보안 · 개인정보 OPERATE 가이드 운영 사람용 원본 · AI용 요약 · 실제 프로젝트 · 변경 동기화 설치 Package, 기존 Source와 승인된 프로젝트 계약을 일…",
    "content": "사람과 AI가 바뀌어도 같은 기준으로 구축합니다. BUILD 구축 구조 프로젝트 · Component · 상태 · API · WebView · Storybook · Test · Build VERIFY 사용 환경 OS · Browser · 반응형 · 다국어 · 접근성 · 보안 · 개인정보 OPERATE 가이드 운영 사람용 원본 · AI용 요약 · 실제 프로젝트 · 변경 동기화 설치 Package, 기존 Source와 승인된 프로젝트 계약을 일반 예시보다 우선합니다. 02 · REPOSITORY",
    "url": "./../guides/briefing/presentation.html#section-1"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "상태의 성격에 따라 소유 도구를 구분합니다.",
    "excerpt": "LOCAL UI React State 열림 · 선택 등 가까운 UI RESTORABLE URL / Route 검색 조건 · Tab · Page FORM React Hook Form 입력 · 검증 · 제출 SERVER TanStack Query Cache · 갱신 · 실패 SHARED CLIENT Zustand 여러 화면의 UI 상태 서버 데이터를 Zustand에 복제하지 않습니다. Form…",
    "content": "상태의 성격에 따라 소유 도구를 구분합니다. LOCAL UI React State 열림 · 선택 등 가까운 UI RESTORABLE URL / Route 검색 조건 · Tab · Page FORM React Hook Form 입력 · 검증 · 제출 SERVER TanStack Query Cache · 갱신 · 실패 SHARED CLIENT Zustand 여러 화면의 UI 상태 서버 데이터를 Zustand에 복제하지 않습니다. Form 도구도 Backend 업무 규칙과 검증을 대신하지 않습니다. 07 · API & ASYNC UI",
    "url": "./../guides/briefing/presentation.html#section-6"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "원본, AI 요약과 실제 Source의 우선순위를 지킵니다.",
    "excerpt": "01 Project AGENTS.md 실제 프로젝트 공통 규칙 02 docs/ai 요약 작업 종류별 필요한 기준 03 설정과 Source package.json · Export · 사용처 04 사람용 원본 세부 판단과 공통 기준 05 승인된 계약 기획 · Backend · Native · 배포 사람용 원본에서 기준을 먼저 확정한 뒤 AGENTS.md, AI 요약, Common Source와…",
    "content": "원본, AI 요약과 실제 Source의 우선순위를 지킵니다. 01 Project AGENTS.md 실제 프로젝트 공통 규칙 02 docs/ai 요약 작업 종류별 필요한 기준 03 설정과 Source package.json · Export · 사용처 04 사람용 원본 세부 판단과 공통 기준 05 승인된 계약 기획 · Backend · Native · 배포 사람용 원본에서 기준을 먼저 확정한 뒤 AGENTS.md, AI 요약, Common Source와 실제 프로젝트에 동기화합니다. AI에는 작업에 필요한 요약과 Source만 제공합니다. 16–17 · OWNERSHIP & CHANGE",
    "url": "./../guides/briefing/presentation.html#section-13"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "자동화는 반복을 줄이고, 담당자는 계약과 품질을 결정합니다.",
    "excerpt": "담당 주요 책임 변경 시 연결 Front-end 화면 · 상태 · UI · 접근성 · 반응형 · Test 코드 ↔ Story ↔ 가이드 Designer 시각 기준과 Figma 구현 설명 Component 경로 · Props · Variant Backend / Security API · 인증 · 권한 · 보안 정책 계약 ↔ Adapter ↔ Test Flutter Bridge · OS 권한 ·…",
    "content": "자동화는 반복을 줄이고, 담당자는 계약과 품질을 결정합니다. 담당 주요 책임 변경 시 연결 Front-end 화면 · 상태 · UI · 접근성 · 반응형 · Test 코드 ↔ Story ↔ 가이드 Designer 시각 기준과 Figma 구현 설명 Component 경로 · Props · Variant Backend / Security API · 인증 · 권한 · 보안 정책 계약 ↔ Adapter ↔ Test Flutter Bridge · OS 권한 · Native 동작 Method ↔ 메시지 ↔ 실제 기기 AI / Reviewer 탐색·초안·반복 검사 / 최종 검토 후보 발견 ↔ 사람의 판단 Token, Browser·OS, Locale, Package, 개인정보 SDK가 바뀌면 관련 화면·Story·문서·검증 기준을 함께 확인합니다. 18 · OPEN CONTRACTS",
    "url": "./../guides/briefing/presentation.html#section-14"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "정상 응답뿐 아니라 기다림과 실패도 설계합니다.",
    "excerpt": "LOADING 조회와 갱신 최초 Loading과 기존 데이터를 유지하는 갱신을 구분합니다. EMPTY / ERROR 결과와 재시도 빈 결과와 사용자가 복구할 수 있는 오류를 표현합니다. SLOW / OFFLINE 지연과 단절 중복 제출을 막고 연결 복구 뒤 갱신합니다. CONTRACT 승인된 계약 응답을 방어적으로 확인하되 권한과 업무 규칙은 Backend가 강제합니다. Timeout과 Re…",
    "content": "정상 응답뿐 아니라 기다림과 실패도 설계합니다. LOADING 조회와 갱신 최초 Loading과 기존 데이터를 유지하는 갱신을 구분합니다. EMPTY / ERROR 결과와 재시도 빈 결과와 사용자가 복구할 수 있는 오류를 표현합니다. SLOW / OFFLINE 지연과 단절 중복 제출을 막고 연결 복구 뒤 갱신합니다. CONTRACT 승인된 계약 응답을 방어적으로 확인하되 권한과 업무 규칙은 Backend가 강제합니다. Timeout과 Retry는 요청 종류, 멱등성과 업무 위험도에 따라 결정합니다. 결제·예약은 Front-end 재시도만으로 안전하지 않습니다. 08 · WEBVIEW BOUNDARY",
    "url": "./../guides/briefing/presentation.html#section-7"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "AI가 구현과 반복 검사를 돕고, 가이드와 개발자가 범위·계약·품질을 통제합니다.",
    "excerpt": "기존 구현을 먼저 찾습니다 기능 가까이에서 작게 시작합니다 검증 근거가 생기면 공통화합니다 변경된 연결 관계를 함께 갱신합니다 전체 브리핑 문서 보기 ↗ ↑ ↓ · PAGE UP / DOWN",
    "content": "AI가 구현과 반복 검사를 돕고, 가이드와 개발자가 범위·계약·품질을 통제합니다. 기존 구현을 먼저 찾습니다 기능 가까이에서 작게 시작합니다 검증 근거가 생기면 공통화합니다 변경된 연결 관계를 함께 갱신합니다 전체 브리핑 문서 보기 ↗ ↑ ↓ · PAGE UP / DOWN",
    "url": "./../guides/briefing/presentation.html#section-16"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "Application 가까이에서 작게 시작합니다.",
    "excerpt": "WebView Source와 공통 UI는 실제 사용처 가까이에서 관리합니다. apps/ └─ app-webview/ WebView 서비스 화면 └─ src/ ├─ app/ Route와 Layout ├─ components/ 공통 UI ├─ features/ 업무 기능 └─ lib/ 기반 코드 공통화는 실제 반복과 동일한 변경 이유가 확인된 코드에만 적용합니다. 03 · CORE WORKFLO…",
    "content": "Application 가까이에서 작게 시작합니다. WebView Source와 공통 UI는 실제 사용처 가까이에서 관리합니다. apps/ └─ app-webview/ WebView 서비스 화면 └─ src/ ├─ app/ Route와 Layout ├─ components/ 공통 UI ├─ features/ 업무 기능 └─ lib/ 기반 코드 공통화는 실제 반복과 동일한 변경 이유가 확인된 코드에만 적용합니다. 03 · CORE WORKFLOW",
    "url": "./../guides/briefing/presentation.html#section-2"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "Browser와 반응형은 경계값까지 검증합니다.",
    "excerpt": "공통 CSS 하한은 Safari 15로 두고 Android와 다른 Browser는 지원 대상 구형 버전의 실제 동작을 확인합니다. Chrome / Edge Legacy QA Safari 15+ Firefox Legacy QA Samsung Internet Legacy QA Mobile 320–767 Tablet 768–1023 PC 1024+ 767·768px, 1023·1024px을 함께…",
    "content": "Browser와 반응형은 경계값까지 검증합니다. 공통 CSS 하한은 Safari 15로 두고 Android와 다른 Browser는 지원 대상 구형 버전의 실제 동작을 확인합니다. Chrome / Edge Legacy QA Safari 15+ Firefox Legacy QA Samsung Internet Legacy QA Mobile 320–767 Tablet 768–1023 PC 1024+ 767·768px, 1023·1024px을 함께 확인하고 지원되지 않는 최신 CSS는 사용하지 않거나 대체합니다. 10 · INTERNATIONALIZATION",
    "url": "./../guides/briefing/presentation.html#section-9"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "Client 검증은 UX이고, 신뢰 경계는 서버에 있습니다.",
    "excerpt": "INPUT / OUTPUT 안전한 출력 외부 입력을 신뢰하지 않고 HTML, URL과 파일 출력을 방어합니다. AUTH 사용자 전환 권한은 서버가 재검증하고 Cache와 화면 잔존 데이터를 정리합니다. STORAGE Secret과 Log 민감정보를 Client 저장소, Bundle과 Log에 남기지 않습니다. SUPPLY CHAIN Bridge와 의존성 Origin, 외부 리소스, SDK와…",
    "content": "Client 검증은 UX이고, 신뢰 경계는 서버에 있습니다. INPUT / OUTPUT 안전한 출력 외부 입력을 신뢰하지 않고 HTML, URL과 파일 출력을 방어합니다. AUTH 사용자 전환 권한은 서버가 재검증하고 Cache와 화면 잔존 데이터를 정리합니다. STORAGE Secret과 Log 민감정보를 Client 저장소, Bundle과 Log에 남기지 않습니다. SUPPLY CHAIN Bridge와 의존성 Origin, 외부 리소스, SDK와 Package 변경 영향을 검토합니다. CSRF, CORS, CSP, 보안 Header, Server Secret과 허용 Origin은 담당 조직이 확정하고 적용 결과를 함께 확인합니다. 12 · ACCESSIBILITY & QUALITY GATE",
    "url": "./../guides/briefing/presentation.html#section-11"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "Native 기능은 승인된 Bridge로만 연결합니다.",
    "excerpt": "화면 Component가 Flutter 객체와 OS별 메시지를 직접 다루지 않도록 Promise 기반 Adapter를 둡니다. ADAPTER 일관된 호출 경계 요청 ID · Method · Parameter · 결과를 한곳에서 처리합니다. CONTRACT 구현 전 합의 허용 Origin과 Method 성공·취소·권한 거부·Timeout 중복 요청과 화면 종료 iOS·Android 지원 범위…",
    "content": "Native 기능은 승인된 Bridge로만 연결합니다. 화면 Component가 Flutter 객체와 OS별 메시지를 직접 다루지 않도록 Promise 기반 Adapter를 둡니다. ADAPTER 일관된 호출 경계 요청 ID · Method · Parameter · 결과를 한곳에서 처리합니다. CONTRACT 구현 전 합의 허용 Origin과 Method 성공·취소·권한 거부·Timeout 중복 요청과 화면 종료 iOS·Android 지원 범위 09 · SUPPORT BASELINE",
    "url": "./../guides/briefing/presentation.html#section-8"
  },
  {
    "document": "Lounge Front-end 구축 가이드 · Presentation",
    "section": "Story에서 연결된 Figma Frame을 확인합니다.",
    "excerpt": "공식 Addon 데모에서 구현 Story는 위 Canvas에, 연결된 Figma Embed는 아래 Design 탭에 표시됩니다. @storybook/addon-designs 공식 Embed Frame 데모 캡처 공식 데모 흐름 Story 선택 → Design 탭 → Figma Embed 확인 06 · STATE OWNERSHIP",
    "content": "Story에서 연결된 Figma Frame을 확인합니다. 공식 Addon 데모에서 구현 Story는 위 Canvas에, 연결된 Figma Embed는 아래 Design 탭에 표시됩니다. @storybook/addon-designs 공식 Embed Frame 데모 캡처 공식 데모 흐름 Story 선택 → Design 탭 → Figma Embed 확인 06 · STATE OWNERSHIP",
    "url": "./../guides/briefing/presentation.html#section-5"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "개발자와 관련 담당자의 책임",
    "excerpt": "담당 현재 책임 Front-end 개발자 사람용 가이드, 화면·상태·Component, 접근성, 반응형, 안전한 출력, Client 저장소와 민감정보 노출 방지, Test와 Storybook Designer 또는 편집 권한 보유자 Figma 시각 기준과 구현 설명 입력·갱신 Backend 담당자 API 요청 검증, 인증, 권한, Session, 업무 데이터와 오류 계약의 강제 적용 Flutt…",
    "content": "16. 개발자와 관련 담당자의 책임 담당 현재 책임 Front-end 개발자 사람용 가이드, 화면·상태·Component, 접근성, 반응형, 안전한 출력, Client 저장소와 민감정보 노출 방지, Test와 Storybook Designer 또는 편집 권한 보유자 Figma 시각 기준과 구현 설명 입력·갱신 Backend 담당자 API 요청 검증, 인증, 권한, Session, 업무 데이터와 오류 계약의 강제 적용 Flutter 담당자 Bridge Method, 메시지, OS 권한과 Native 동작 계약 승인 Backend·배포·보안 담당 CSRF, CORS, CSP, 보안 Header, Server Secret과 허용 Origin 정책의 확정 및 적용 AI 코딩 도구 기존 구현 탐색, 코드·Story 초안, 반복 검사와 결과 정리 Reviewer 요구사항, 구조, 공개 API, 예외 상태, 보안 영향과 검증 결과 Front-end가 독립적으로 결정할 수 없는 계약은 임의로 확정하지 않습니다. 담당자가 승인한 계약을 실제 코드와 관련 가이드에 함께 반영합니다.",
    "url": "./../guides/briefing/index.html#section-16"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "구축 대상과 저장소 구조",
    "excerpt": "WebView 서비스 화면과 업무 흐름은 apps/app-webview 에 구현합니다. apps/ └── app-webview/ # App에서 사용하는 WebView 서비스 화면 Application 가까이에서 시작합니다 apps/app-webview 안에서는 Routing과 화면 진입점, 기능 코드와 WebView 전용 UI를 가까운 위치에서 관리합니다. App-WebView 한 곳에서만…",
    "content": "2. 구축 대상과 저장소 구조 WebView 서비스 화면과 업무 흐름은 apps/app-webview 에 구현합니다. apps/ └── app-webview/ # App에서 사용하는 WebView 서비스 화면 Application 가까이에서 시작합니다 apps/app-webview 안에서는 Routing과 화면 진입점, 기능 코드와 WebView 전용 UI를 가까운 위치에서 관리합니다. App-WebView 한 곳에서만 사용하는 shadcn/ui 원형과 Wrapper는 apps/app-webview/src/components/ui 에 둡니다. 검증된 구현만 공통으로 관리합니다 여러 기능에서 실제로 재사용되고 의미와 변경 이유가 같은 UI만 src/components/ui 에서 공통으로 관리합니다. 한 화면에서만 사용하는 Wrapper, 공통화 가능성을 예상한 Type과 Adapter는 미리 만들지 않습니다. apps/ 와 docs/ 의 최상위 분리는 실제 프로젝트 기준입니다. 앱 내부 Package 경계와 Build 구성은 실제 사용처와 현재 설정을 기준으로 판단합니다. 상세 기준: 저장소 경계와 공통화 기준은 Front-End 저장소 구조 기준 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-2"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "기능 하나를 구현하는 기본 순서",
    "excerpt": "기획과 Figma에서 화면 목적, 상태, 입력과 사용자 동작을 확인합니다. 실제 프로젝트의 AGENTS.md 와 작업 종류에 해당하는 AI 요약을 확인합니다. Figma Component Description에 연결된 파일 이름과 경로를 확인합니다. 실제 Source에서 Export, Props, Variant와 사용처를 다시 확인합니다. 기존 Layout, Semantic Token, sh…",
    "content": "3. 기능 하나를 구현하는 기본 순서 기획과 Figma에서 화면 목적, 상태, 입력과 사용자 동작을 확인합니다. 실제 프로젝트의 AGENTS.md 와 작업 종류에 해당하는 AI 요약을 확인합니다. Figma Component Description에 연결된 파일 이름과 경로를 확인합니다. 실제 Source에서 Export, Props, Variant와 사용처를 다시 확인합니다. 기존 Layout, Semantic Token, shadcn/ui와 프로젝트 Component로 표현할 범위를 판단합니다. 서버 데이터, Form, 화면 내부 상태와 공유 Client 상태의 소유 도구를 구분합니다. Loading, Empty, Error, 느린 응답과 연결 끊김 상태를 함께 설계합니다. 독립적으로 재현·검토할 가치가 있는 Component, 기능 조합이나 화면 상태라면 실제 구현과 Story를 같은 변경에서 작성합니다. 화면에 적용하고 접근성, 반응형, 상태 전환과 주요 사용자 동작을 확인합니다. 프로젝트에 실제로 구성된 TypeScript, Lint, Test, Storybook Build와 Application Build를 실행합니다. 재사용·신규 Component, 추가·변경한 Story와 재현 상태, 검증 결과와 확인하지 못한 항목을 완료 보고에 남깁니다. 위 순서는 준비, 탐색과 설계, 구현, 적용과 검증, 완료 보고의 다섯 단계로 이해할 수 있습니다. flowchart TD accTitle: Front-end 기능 하나를 구현하는 다섯 단계 accDescr: 기획과 Figma 확인 및 기존 소스 탐색으로 준비한 뒤 상태와 예외를 설계하고, 컴포넌트와 기능 코드 및 필요한 Story를 구현해 화면에 적용하며, 품질 검사와 완료 보고로 작업을 마칩니다. A[\"1. 준비 기획 · Figma · AGENTS.md 확인\"] --> B[\"2. 탐색과 설계 기존 Component · Token · 상태 책임 · 예외 상태\"] B --> C[\"3. 구현 Component · 기능 코드 · 재현할 Story\"] C --> D[\"4. 적용과 검증 화면 · 접근성 · 다국어 · 보안 · 반응형 · Test · Build\"] D --> E[\"5. 완료 보고 재사용 · 신규 구현 · 검사 결과 · 미확정 항목\"] 기능 확인부터 구현, 품질 검증과 완료 보고까지의 실무 흐름 준비 단계에서는 요구사항과 기존 구현을 찾고, 탐색과 설계 단계에서는 새로 만들 범위와 상태 소유를 결정합니다. 구현 후 실제 화면에 적용하여 품질 기준을 확인하고, 검증하지 못한 환경과 남은 계약까지 완료 보고에 포함합니다. API 계약이 아직 승인되지 않았다면 임의의 Endpoint, Parser, Fixture와 Mock Handler를 먼저 만들지 않습니다. 필요한 계약을 TBD 로 남기고 승인된 형식을 받은 뒤 연결합니다. 상세 기준: 파일 배치, 기술 스택, 상태와 검증의 전체 기준은 Front-End 개발 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-3"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "다국어와 번역 운영",
    "excerpt": "서비스가 의미를 책임지는 UI 문구는 한국어 원문으로 작성하고 Build 전에 번역 카탈로그로 추출·검수합니다. 기본 지원 언어는 한국어 ko , 중국어 간체 zh-CN , 일본어 ja 와 영어 en 입니다. UI 메시지 작성과 추출 번역 Key를 먼저 만들지 않고 추출 가능한 정적 한국어 메시지를 작성합니다. 같은 문구의 의미가 다르면 메시지 가까이에 Context를 기록합니다. 문자열 조…",
    "content": "10. 다국어와 번역 운영 서비스가 의미를 책임지는 UI 문구는 한국어 원문으로 작성하고 Build 전에 번역 카탈로그로 추출·검수합니다. 기본 지원 언어는 한국어 ko , 중국어 간체 zh-CN , 일본어 ja 와 영어 en 입니다. UI 메시지 작성과 추출 번역 Key를 먼저 만들지 않고 추출 가능한 정적 한국어 메시지를 작성합니다. 같은 문구의 의미가 다르면 메시지 가까이에 Context를 기록합니다. 문자열 조각을 이어 붙이지 않고 변수, ICU 문법과 React 자리표시자를 보존합니다. 사용자명, 브랜드명, 모델 번호와 Code는 번역 대상에서 분리합니다. 사용자 콘텐츠와 API 오류 문구를 자동으로 UI 카탈로그에 넣지 않습니다. 로컬 LLM 번역 로컬 LLM은 개발 과정에서 카탈로그의 비어 있거나 원문이 변경된 항목만 번역합니다. 실행 중인 사용자 화면에서는 LLM을 호출하지 않습니다. 메시지 ID와 결과 ID가 일치하는지 확인합니다. 변수, ICU 문법과 React 자리표시자를 검증합니다. 제품명과 번역 금지 용어를 용어집과 비교합니다. JSON Schema와 카탈로그 Compile 검사를 통과한 결과만 병합합니다. 결제, 환불, 개인정보, 약관과 이용 제한 문구는 담당자가 직접 검수합니다. 실행 언어와 Fallback Flutter App은 App 언어와 Device Locale을 관리하고 Next.js WebView는 지원 Locale 검증, 카탈로그 Load와 UI 표시를 담당합니다. 중국어·일본어 번역이 없으면 영어를 사용하고 영어도 없으면 한국어 원문을 표시합니다. 날짜, 시간, 숫자와 통화는 문자열을 직접 조합하지 않고 Locale과 통화 Code를 기준으로 Formatting합니다. 기준 시간대, 통화 반올림과 가격 표시 규칙은 업무 계약이 정해진 뒤 적용합니다. Layout과 접근성 번역 문구가 한국어보다 길어질 수 있으므로 Button, Tab, Form Label, 오류 메시지, Dialog와 Table에서 긴 영어·중국어·일본어 문구를 확인합니다. 고정 너비와 한 줄 표시를 기본으로 가정하지 않습니다. 줄바꿈, 말줄임, 화면 확대, 최소 터치 영역과 가로 Overflow를 지원 Viewport에서 확인합니다. 접근 가능한 이름과 Screen Reader 안내도 같은 번역 카탈로그에서 관리합니다. 동적 콘텐츠와 기기 번역 사용자 게시물과 후기 같은 동적 콘텐츠는 원문을 기본 표시하고 사용자가 요청했을 때만 Flutter의 번역 Capability를 확인해 기기 번역을 사용할 수 있습니다. 미지원 또는 실패 시 번역 기능만 비활성화하고 원문을 표시합니다. 번역 결과임을 표시하고 원문 보기 기능을 제공합니다. 현재 화면에 필요한 콘텐츠만 작은 단위로 요청합니다. 번역 결과도 외부 입력으로 취급하며 HTML로 직접 삽입하지 않습니다. 법률, 결제와 정책 문구에는 기기 번역을 확정 문구로 사용하지 않습니다. 다국어 완료 Checklist 새 문구가 추출 가능한 정적 형태인가? 지원 Locale 카탈로그와 Fallback이 갱신됐는가? 변수, ICU, 자리표시자와 Compile 검사를 통과했는가? 중요 업무 문구를 담당자가 검수했는가? 긴 문구, 접근성 이름과 주요 Viewport를 확인했는가? 실행 중 LLM 호출이나 승인되지 않은 외부 전송이 없는가? 상세 기준: Lingui 메시지 작성, 카탈로그, 로컬 LLM 번역, Flutter 기기 번역과 검증 코드는 Front-End 다국어 및 로컬 LLM 번역 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-10"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "보안과 개인정보 기준",
    "excerpt": "외부 입력과 출력 API 응답, 사용자 입력, URL, Storage, HTML·Markdown, 외부 SDK와 Bridge 응답을 신뢰하지 않는 값으로 취급합니다. Front-end는 화면 출력과 Client 동작에 필요한 형태를 방어적으로 확인하고 출력 위치에 맞는 XSS 방어를 적용합니다. Backend의 요청 검증, 권한과 업무 규칙 검증은 별도로 수행합니다. 외부 URL과 Redir…",
    "content": "11. 보안과 개인정보 기준 외부 입력과 출력 API 응답, 사용자 입력, URL, Storage, HTML·Markdown, 외부 SDK와 Bridge 응답을 신뢰하지 않는 값으로 취급합니다. Front-end는 화면 출력과 Client 동작에 필요한 형태를 방어적으로 확인하고 출력 위치에 맞는 XSS 방어를 적용합니다. Backend의 요청 검증, 권한과 업무 규칙 검증은 별도로 수행합니다. 외부 URL과 Redirect는 Protocol과 Host를 확인하며 사용자 값을 그대로 href , src 와 Redirect에 연결하지 않습니다. 인증, 권한과 사용자 전환 Front-end의 UI 제한을 권한 검증으로 간주하지 않습니다. 인증 Token을 Web Storage, URL이나 일반 Zustand Persist에 저장하는 예시를 만들지 않습니다. 로그아웃과 사용자 전환 시 이전 사용자의 Query Cache, Persist 상태와 Form 입력을 정리합니다. 저장소, 로그와 Secret 비밀번호, 인증번호, 카드정보, 인증 Token과 불필요한 개인정보를 Client 저장소에 보관하지 않습니다. Token, Cookie, Form 전체 값, API 전체 응답과 Bridge Payload 전체를 Log나 분석 도구로 보내지 않습니다. API Secret, Signing Key와 서버 자격 증명을 Client Bundle, Source Map, 정적 파일과 Build Log에 포함하지 않습니다. Bridge, 외부 리소스와 의존성 Flutter Native App은 WebView Origin과 Bridge Method를 허용 목록으로 제한합니다. Front-end Adapter는 승인된 Method만 노출하고 임의 JavaScript 실행 기능을 제공하지 않습니다. CSP, 보안 Header와 허용 Origin은 Backend·배포·보안 담당자가 확정하고 Server·CDN·Hosting에 적용하며 Front-end는 필요한 Resource와 Browser 적용 결과를 확인합니다. 새 Package는 필요성, Owner, License, Version, 하위 의존성, 설치 Script와 취약점을 확인하고 Lock File 변경도 Review합니다. 보안 완료 보고 새 데이터 흐름과 신뢰 경계 Runtime 검증과 허용 목록 위치 저장소, Cache와 사용자 전환 시 정리 방식 로그와 분석 도구에 전달되는 정보 새 의존성과 Lock File 변경 확인한 Browser·WebView Network Payload와 남은 계약 상세 기준: XSS, 인증·권한, Client 저장소, 개인정보, CSP, Bridge와 공급망 대응은 Front-End 보안과 개인정보 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-11"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "브리핑 목적",
    "excerpt": "이 문서는 Lounge Front-end를 실제로 구축하고 운영할 개발자에게 현재 정리된 기술 기준, 작업 순서와 완료 판단 기준을 설명합니다. 특정 화면의 상세 기획이나 API 계약을 확정하는 문서가 아닙니다. 코드를 어디에 배치하고, 기존 Component를 어떻게 찾으며, 서버 상태와 Client 상태를 어떻게 구분하고, 어떤 검증을 거쳐 작업을 완료할 것인지 공유합니다. 개발자나 AI…",
    "content": "1. 브리핑 목적 이 문서는 Lounge Front-end를 실제로 구축하고 운영할 개발자에게 현재 정리된 기술 기준, 작업 순서와 완료 판단 기준을 설명합니다. 특정 화면의 상세 기획이나 API 계약을 확정하는 문서가 아닙니다. 코드를 어디에 배치하고, 기존 Component를 어떻게 찾으며, 서버 상태와 Client 상태를 어떻게 구분하고, 어떤 검증을 거쳐 작업을 완료할 것인지 공유합니다. 개발자나 AI 도구가 바뀌어도 같은 기준으로 구현하고 검토하는 것이 목표입니다. 설치된 Package, 기존 Source와 승인된 프로젝트 계약을 가이드의 일반 예시보다 우선합니다. 한눈에 보는 전체 가이드 지도 전체 가이드는 코드를 만드는 기준, 실제 서비스 환경을 만족하는 기준, 그 기준을 사람과 AI가 계속 유지하는 방법의 세 영역으로 구성됩니다. flowchart TD accTitle: Lounge Front-end 가이드의 세 가지 영역 accDescr: 전체 가이드는 코드를 어떻게 만들지 설명하는 구축 구조, 어디에서 안전하게 동작해야 하는지 설명하는 사용 환경, 사람과 AI가 기준을 유지하는 방법을 설명하는 가이드 운영으로 나뉩니다. ROOT[\"Lounge Front-end 구축 가이드\"] ROOT --> A[\"1. 구축 구조 프로젝트 · Component · 상태 · API · WebView Storybook · Test · Build\"] A -->|\"구현한 결과를 검증\"| B[\"2. 사용 환경 OS · Browser · 반응형 다국어 · 접근성 · 보안 · 개인정보\"] B -->|\"검증 기준을 계속 유지\"| C[\"3. 가이드 운영 사람용 원본 · AI용 요약 · Common Source 실제 프로젝트 적용 · 변경 동기화\"] 구현 방법, 서비스 환경 검증과 가이드 운영으로 구분한 전체 문서 구조 구축 구조 는 개발자가 코드를 어디에 두고 어떤 순서로 구현·검증할지 설명합니다. 사용 환경 은 구현 결과가 지원 기기, 언어와 보안 조건에서 실제로 서비스 가능한지 확인합니다. 가이드 운영 은 확정된 기준을 사람용 원본, AI 요약과 실제 프로젝트 사이에서 계속 일치시키는 방법을 설명합니다. 코드를 만드는 것에서 끝나지 않고, 실제 환경에서 검증한 뒤 그 기준을 사람과 AI가 계속 유지하도록 연결한 구조입니다.",
    "url": "./../guides/briefing/index.html#section-1"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "사람이 보는 가이드 사용 방식",
    "excerpt": "작업 사람용 원본 확인 내용 저장소와 앱 경계 저장소 구조 기준 app-webview, docs와 공통화 일반 화면과 상태 Front-End 개발 가이드 배치, 상태 소유, Bridge와 품질 Figma UI React Code Exports·디자인 토큰 기존 UI, Token과 완료 기준 UI 개발과 상태 검증 Storybook 운영 가이드 Component·기능·화면 상태의 재현, Int…",
    "content": "14. 사람이 보는 가이드 사용 방식 작업 사람용 원본 확인 내용 저장소와 앱 경계 저장소 구조 기준 app-webview, docs와 공통화 일반 화면과 상태 Front-End 개발 가이드 배치, 상태 소유, Bridge와 품질 Figma UI React Code Exports·디자인 토큰 기존 UI, Token과 완료 기준 UI 개발과 상태 검증 Storybook 운영 가이드 Component·기능·화면 상태의 재현, Interaction, 접근성, 시각 검토와 반자동 점검 품질 TypeScript·Lint·Test 가이드 Type 경계, 정적 검사와 Test 범위 성능 성능 검증 가이드 Loading, Timeout, Retry와 측정 보안 보안과 개인정보 가이드 입력, 인증, 저장소, 로그와 공급망 App 연동 APP 개발 표준·WebView 가이드 OS, Bridge 계약과 실제 기기 다국어 다국어·번역 가이드 Key, Layout, Locale과 검수 호환성 Browser 지원 가이드 최소 Version, Viewport와 경계값 중앙 검색에서 기능이나 위험 Keyword를 검색합니다. 원본 가이드의 적용 범위와 미확정 항목을 확인합니다. 실제 Source와 설치 Package가 예시와 같은지 비교합니다. 다른 담당자 계약은 구현 전에 질문과 TBD 로 분리합니다. 구현과 Review에서 완료 기준을 Checklist로 사용합니다. 반복되는 문제와 실제 차이를 근거로 가이드를 갱신합니다. 가이드 목록: 전체 사람용 문서의 진입점은 Lounge DOCS README , Keyword 검색은 가이드 검색 을 사용합니다.",
    "url": "./../guides/briefing/index.html#section-14"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "상태와 데이터의 책임",
    "excerpt": "상태 종류 기본 도구 적용 기준 한 Component 내부 UI 상태 React 지역 상태 열림, 선택처럼 가까운 UI에서만 사용 공유·복원할 화면 상태 URL Search Params 또는 Route 검색 조건, Tab과 Page 입력, 검증과 제출 React Hook Form 하나의 Form 단위 상태와 오류 서버에서 조회·변경 TanStack Query Cache, 갱신, 실패와 재시도…",
    "content": "6. 상태와 데이터의 책임 상태 종류 기본 도구 적용 기준 한 Component 내부 UI 상태 React 지역 상태 열림, 선택처럼 가까운 UI에서만 사용 공유·복원할 화면 상태 URL Search Params 또는 Route 검색 조건, Tab과 Page 입력, 검증과 제출 React Hook Form 하나의 Form 단위 상태와 오류 서버에서 조회·변경 TanStack Query Cache, 갱신, 실패와 재시도 여러 화면의 Client 상태 Zustand 서버 원본이 아닌 공유 UI 상태 서버에서 받은 데이터를 Zustand에 복제하지 않습니다. 서버 상태는 TanStack Query Cache와 무효화 정책으로 관리합니다. Zustand는 여러 화면이 공유하는 Client 상태가 실제로 확인됐을 때 사용합니다. React Hook Form은 Form 상태 도구이며 업무 규칙과 Backend 검증을 대신하지 않습니다. Schema 검증 도구와 서버 오류 매핑은 실제 계약이 정해진 뒤 확정합니다. 상세 기준: 전체 상태 소유 기준은 Front-End 개발 가이드의 상태 및 데이터 관리 , Zustand의 Store 분리와 Persist 기준은 Zustand UI 상태 관리 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-6"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "서버 통신과 비동기 화면",
    "excerpt": "승인된 API 계약을 받은 뒤 공통 요청 함수와 기능별 응답 검증 경계를 연결합니다. Front-end는 API 응답을 화면에 사용하기 전에 필요한 형태를 방어적으로 확인합니다. 요청 검증, 권한과 업무 규칙은 Backend가 다시 검증하며 Front-end Type과 검증 결과를 신뢰 근거로 사용하지 않습니다. 최초 조회 Loading과 기존 데이터를 유지한 갱신 상태 결과가 없는 Empt…",
    "content": "7. 서버 통신과 비동기 화면 승인된 API 계약을 받은 뒤 공통 요청 함수와 기능별 응답 검증 경계를 연결합니다. Front-end는 API 응답을 화면에 사용하기 전에 필요한 형태를 방어적으로 확인합니다. 요청 검증, 권한과 업무 규칙은 Backend가 다시 검증하며 Front-end Type과 검증 결과를 신뢰 근거로 사용하지 않습니다. 최초 조회 Loading과 기존 데이터를 유지한 갱신 상태 결과가 없는 Empty 상태 사용자 재시도가 가능한 Error 상태 느린 응답 중 중복 제출 방지와 진행 안내 연결 끊김과 복구 후 갱신 모든 요청에 같은 Timeout과 Retry를 적용하지 않습니다. 조회와 변경 요청, 멱등성과 업무 위험도를 기준으로 결정합니다. 결제·예약처럼 중복 실행 위험이 있는 작업은 Front-end 재시도만으로 안전하다고 판단하지 않습니다. 승인된 계약이 있고 실제 환경에서 오류 상태를 반복 재현하기 어렵다면 MSW를 선택적으로 검토합니다. MSW는 API 계약을 임의로 만드는 도구가 아닙니다. 상세 기준: 느린 Network, Loading, Timeout, Retry, Offline과 측정 방법은 네트워크 지연 대응 및 성능 검증 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-7"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "실제 프로젝트 구조와 문서 계층",
    "excerpt": "이 저장소는 WebView 애플리케이션과 구현 가이드를 함께 관리합니다. 실제 Source는 apps/app-webview , 모든 가이드는 docs 에 두며 별도 가이드 저장소나 복제된 reference 문서를 운영하지 않습니다. <repository-root>/ ├── AGENTS.md # 저장소 전체 AI 구현 규칙 ├── README.md # 프로젝트 진입점 ├── apps/ │ └─…",
    "content": "13. 실제 프로젝트 구조와 문서 계층 이 저장소는 WebView 애플리케이션과 구현 가이드를 함께 관리합니다. 실제 Source는 apps/app-webview , 모든 가이드는 docs 에 두며 별도 가이드 저장소나 복제된 reference 문서를 운영하지 않습니다. <repository-root>/ ├── AGENTS.md # 저장소 전체 AI 구현 규칙 ├── README.md # 프로젝트 진입점 ├── apps/ │ └── app-webview/ │ ├── AGENTS.md # WebView 앱 전용 규칙 │ ├── .storybook/ # Storybook 설정 │ └── src/ # 실제 Application Source └── docs/ ├── AGENTS.md # 문서 작성과 검증 규칙 ├── README.md # 전체 가이드 목록 ├── index.html # 사람이 보는 문서 진입점 ├── search/ # 상세 가이드 중앙 검색 ├── assets/ # 문서 공통 Style·Script·Image ├── templates/ # HTML 가이드 템플릿 ├── guides/ # 주제별 상세 HTML 가이드와 초안 ├── ai/ # 작업별 짧은 AI 요약 └── common-source/ # 조건부 참고 구현 문서별 역할 Root AGENTS.md 는 실제 Application 구현 규칙과 작업별 문서 선택을 담당합니다. apps/app-webview/AGENTS.md 는 실제 package·source 기준과 WebView 앱에만 필요한 추가 규칙을 관리합니다. docs/guides 는 사람이 기술 기준, 적용 조건, 예외와 Review 근거를 확인하는 원본입니다. docs/ai 는 작업별 요약이고 docs/common-source 는 실제 사용처, 설치 Package와 승인된 계약을 확인한 뒤 필요한 부분만 비교·병합하는 참고 구현입니다. flowchart TD accTitle: 실제 프로젝트에서 문서와 소스를 사용하는 흐름 accDescr: 저장소 루트 지침에서 시작해 앱의 실제 설정과 작업별 AI 요약을 확인하고, 필요한 상세 가이드와 공통 소스 적용 기준을 읽은 뒤 구현과 검증을 수행하며 변경된 기준을 문서에 동기화합니다. A[\"Root AGENTS.md\"] --> B[\"apps/app-webview AGENTS · Package · Source\"] B --> C[\"docs/ai 작업별 요약\"] C --> D[\"docs/guides 또는 docs/common-source 필요한 세부 기준\"] D --> E[\"Source 구현과 Storybook · 품질 검증\"] E --> F[\"구조·규칙 변경 시 관련 docs 동기화\"] 실제 프로젝트에서 지침과 가이드를 확인하고 Source와 문서를 함께 관리하는 흐름 문서 확인 우선순위 flowchart TD accTitle: 실제 업무에서 문서를 확인하는 우선순위 accDescr: 작업자는 실제 프로젝트 AGENTS 문서에서 시작해 작업별 AI 요약과 기존 소스를 확인하고, 세부 판단에는 사람용 원본 가이드와 승인된 담당자 계약을 사용합니다. A[\"실제 프로젝트 AGENTS.md\"] --> B[\"작업별 docs/ai 요약\"] B --> C[\"package.json · 설정 · 기존 Source\"] C --> D[\"사람용 원본 가이드\"] D --> E[\"승인된 기획 · Backend · Native · 배포 계약\"] 실제 프로젝트 규칙에서 원본 가이드와 승인된 계약까지 확인하는 흐름 검색과 동기화 중앙 검색은 docs/guides 의 사람이 읽는 상세 가이드를 대상으로 합니다. docs/ai 와 docs/common-source 는 중복 검색 결과를 막기 위해 상세 가이드 검색 대상과 분리합니다. 문서 진입점: 필요한 원본 문서는 가이드 검색 에서 찾고, 실제 프로젝트에 적용할 AI 문서 계층은 프로젝트 구조 AI 요약 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-13"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "운영 시 유지할 연결 관계",
    "excerpt": "Component 경로·이름 변경 → Import, Figma Description과 관련 문서 Props·Variant 변경 → 사용처, Story와 Figma 상태 Token 변경 → 실제 화면, Storybook과 Theme Browser·OS 변경 → Tailwind 요구사항, 점유율과 실제 기기 공통 Component 또는 중요 기능·화면 상태 추가 → Story 등록과 AI 누락…",
    "content": "17. 운영 시 유지할 연결 관계 Component 경로·이름 변경 → Import, Figma Description과 관련 문서 Props·Variant 변경 → 사용처, Story와 Figma 상태 Token 변경 → 실제 화면, Storybook과 Theme Browser·OS 변경 → Tailwind 요구사항, 점유율과 실제 기기 공통 Component 또는 중요 기능·화면 상태 추가 → Story 등록과 AI 누락 점검 가이드 변경 → 중앙 검색 Index 재생성 API·Bridge 계약 변경 → Adapter, 상태, Test와 담당 문서 인증·개인정보·SDK 변경 → 저장 위치, Log, Network와 보안 가이드 Package 변경 → Lock File, 하위 의존성, 보안 공지와 Owner UI 문구·Locale 변경 → 메시지 추출, 카탈로그, Fallback과 긴 문구 AI가 불일치 후보를 찾을 수 있지만 최종 변경 여부와 영향 범위는 개발자가 판단합니다.",
    "url": "./../guides/briefing/index.html#section-17"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "이 가이드로 구축할 때의 최종 원칙",
    "excerpt": "이 Section은 앞의 구현 단계를 다시 설명하는 곳이 아닙니다. 실무자가 여러 상세 가이드를 적용할 때 마지막까지 유지해야 할 판단 원칙을 정리합니다. 기존 구현을 먼저 찾습니다 새 Component와 구조를 만들기 전에 Figma 설명, 실제 Source, Storybook과 디자인 토큰을 확인합니다. 기존 구현으로 표현할 수 없는 경우에만 새 코드를 만들고 그 이유를 남깁니다. 구현과…",
    "content": "19. 이 가이드로 구축할 때의 최종 원칙 이 Section은 앞의 구현 단계를 다시 설명하는 곳이 아닙니다. 실무자가 여러 상세 가이드를 적용할 때 마지막까지 유지해야 할 판단 원칙을 정리합니다. 기존 구현을 먼저 찾습니다 새 Component와 구조를 만들기 전에 Figma 설명, 실제 Source, Storybook과 디자인 토큰을 확인합니다. 기존 구현으로 표현할 수 없는 경우에만 새 코드를 만들고 그 이유를 남깁니다. 구현과 검증을 같은 작업으로 봅니다 정상 화면만 보이면 완료된 것이 아닙니다. 예외 상태, 다국어, 접근성, Front-end 보안, 반응형, Browser, Test와 Build 중 해당 기능에 필요한 검증까지 같은 변경에서 확인합니다. Backend·Native App·배포 정책은 Front-end가 대신 구현하지 않고 해당 담당자의 계약과 적용 결과를 확인합니다. 운영 중에도 기준을 연결합니다 코드가 바뀌면 Story, Figma 설명과 관련 가이드도 함께 확인합니다. AI는 탐색, 초안과 반복 검사를 돕지만 공개 API, 계약, 위험과 최종 품질은 개발자와 담당자가 판단합니다. 처음부터 복잡한 공통 구조를 만드는 것이 목표가 아닙니다. 기존 구현을 우선 사용하고 기능 가까이에서 작게 시작하며 실제 반복과 검증 근거가 생겼을 때 공통화합니다. AI가 구현과 반복 검사를 돕고, 가이드와 개발자가 범위·계약·품질을 통제합니다. Lounge Front-end 구축 가이드 브리핑",
    "url": "./../guides/briefing/index.html#section-19"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "접근성, 테스트와 품질 Gate",
    "excerpt": "구현 중 함께 확인할 접근성 Semantic HTML과 Heading 구조 Keyboard 사용과 식별 가능한 Focus Input Label, 오류 메시지와 접근 가능한 이름 Dialog와 동적 UI의 Focus 이동 색상에만 의존하지 않는 상태 표현 긴 문구, 확대와 다국어에서 유지되는 Layout 기본 검증 순서는 TypeScript 검사 → Lint → Test 입니다. Story 변…",
    "content": "12. 접근성, 테스트와 품질 Gate 구현 중 함께 확인할 접근성 Semantic HTML과 Heading 구조 Keyboard 사용과 식별 가능한 Focus Input Label, 오류 메시지와 접근 가능한 이름 Dialog와 동적 UI의 Focus 이동 색상에만 의존하지 않는 상태 표현 긴 문구, 확대와 다국어에서 유지되는 Layout 기본 검증 순서는 TypeScript 검사 → Lint → Test 입니다. Story 변경에는 Storybook 정적 Build를 추가하고 실제 구성에 Build가 있으면 Application Build도 확인합니다. 우선 Test 대상 중요한 Form 검증과 제출 서버 성공·실패와 재시도 상태 권한 거부와 Bridge 오류 중요한 업무 분기와 회귀 위험 Interaction 작업 완료 Checklist 정상·예외 상태를 구현했는가? 기존 Component와 Token을 우선 사용했는가? 새 공통 Component와 독립 재현 가치가 있는 기능·화면 상태에 Story가 있는가? Keyboard, Focus와 접근 가능한 이름을 확인했는가? 지원 Browser와 필요한 Viewport에서 확인했는가? 실제로 구성된 검사가 통과했는가? 확인하지 못한 환경과 미확정 계약을 보고했는가? 상세 기준: Type 경계는 TypeScript 가이드 , 정적 검사는 Lint 가이드 , Test 대상과 제외 기준은 테스트 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-12"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "현재 확정하지 않은 내용",
    "excerpt": "화면별 업무 규칙과 사용자 문구 API Endpoint, Method, Field와 오류 계약 인증, Cookie, Token과 Session Backend 개발·테스트 환경 Flutter Bridge Method와 메시지 배포, 모니터링, 장애 대응과 Release 승인 CSP, CORS, Origin과 개인정보 보존 기능별 Timeout, Retry와 Offline Storybook Ve…",
    "content": "18. 현재 확정하지 않은 내용 화면별 업무 규칙과 사용자 문구 API Endpoint, Method, Field와 오류 계약 인증, Cookie, Token과 Session Backend 개발·테스트 환경 Flutter Bridge Method와 메시지 배포, 모니터링, 장애 대응과 Release 승인 CSP, CORS, Origin과 개인정보 보존 기능별 Timeout, Retry와 Offline Storybook Version, Framework, Addon과 CI 명령 Schema 검증과 서버 오류 매핑 Zustand Store와 Persist 범위 Locale별 중요 문구의 검수 담당자와 승인 절차 시간대, 통화, 반올림과 가격 표시 규칙 동적 콘텐츠 기기 번역 범위와 기본 설정 미확정 항목의 예시를 실제 계약처럼 구현하지 않습니다. 필요한 담당자와 입력 자료를 확인한 뒤 확정합니다.",
    "url": "./../guides/briefing/index.html#section-18"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "AI 코딩 도구 사용 방식",
    "excerpt": "Cline, Claude Code, Codex와 로컬 LLM의 공통 규칙은 실제 프로젝트 AGENTS.md 에서 관리합니다. 도구 전용 설정에는 그 도구에서만 필요한 동작만 둡니다. 저장소의 AGENTS.md 작업별 docs/ai/* 설치 Package와 기존 Source 필요할 때 사람용 원본 Figma 설명과 실제 API의 일치 여부 AI에 전체 가이드를 한꺼번에 제공하지 않고 작업에 필…",
    "content": "15. AI 코딩 도구 사용 방식 Cline, Claude Code, Codex와 로컬 LLM의 공통 규칙은 실제 프로젝트 AGENTS.md 에서 관리합니다. 도구 전용 설정에는 그 도구에서만 필요한 동작만 둡니다. 저장소의 AGENTS.md 작업별 docs/ai/* 설치 Package와 기존 Source 필요할 때 사람용 원본 Figma 설명과 실제 API의 일치 여부 AI에 전체 가이드를 한꺼번에 제공하지 않고 작업에 필요한 요약과 Source만 읽게 합니다. 생성 결과는 구현 초안이며 불필요한 추상화와 Props, 누락된 상태와 기존 구조 충돌을 개발자가 검토합니다. AI 작업 완료 보고 수정한 기능과 파일 재사용한 기존 Component 신규 Component와 생성 이유 사용한 Semantic Token 추가·변경한 Story와 상태 실행한 검사와 결과 재현하지 못한 환경 남은 TBD 와 담당자 결정 실제 프로젝트 기준: AI가 처음 읽을 공통 규칙은 저장소 Root AGENTS.md , 품질 작업별 요약은 AI 품질 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-15"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "Browser, OS와 반응형 기준",
    "excerpt": "Browser 기본 검토 기준 Chrome·Edge 지원 대상 구형 버전 Safari 15 이상 Firefox 지원 대상 구형 버전 Samsung Internet 지원 대상 구형 버전 Tailwind CSS v4를 유지하고 공통 CSS 하한은 Safari 15에서 지원되는 기능 범위로 정합니다. Android와 다른 Browser는 특정 제품 버전을 기계적으로 대응시키지 않고 주요 구형·최신…",
    "content": "9. Browser, OS와 반응형 기준 Browser 기본 검토 기준 Chrome·Edge 지원 대상 구형 버전 Safari 15 이상 Firefox 지원 대상 구형 버전 Samsung Internet 지원 대상 구형 버전 Tailwind CSS v4를 유지하고 공통 CSS 하한은 Safari 15에서 지원되는 기능 범위로 정합니다. Android와 다른 Browser는 특정 제품 버전을 기계적으로 대응시키지 않고 주요 구형·최신 버전에서 실제 사용하는 Utility와 핵심 기능을 확인합니다. 지원되지 않는 최신 CSS 기능은 사용하지 않거나 대체합니다. 구간 CSS Viewport 주요 확인 Mobile 320~767px 입력, 터치, 긴 문구와 Overflow Tablet 768~1023px 열 전환, 방향과 밀도 PC 1024px 이상 최대 너비와 다단 Layout 767·768px, 1023·1024px 경계값을 함께 검증합니다. 지원 Browser에서 사용할 수 없는 CSS는 피하거나 동등한 Fallback을 제공합니다. 상세 기준: 국가별 점유율 근거, 자동 업데이트 예외와 대표 검증 너비는 반응형 웹 Browser 지원 가이드 , App WebView 최소 OS 근거는 WebView 지원 환경 개요 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-9"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "Storybook을 이용한 UI 개발과 검증",
    "excerpt": "Storybook은 공통 Component만 만들거나 전시하는 공간이 아닙니다. Application 전체를 실행하지 않고도 Component, 기능 조합과 의미 있는 화면 상태를 격리해 재현하고, 구현·디자인 Review, 접근성, Interaction과 시각 회귀 검증에 사용하는 UI 개발 환경입니다. @storybook/addon-designs 공식 Embed Frame 데모 의 Sto…",
    "content": "5. Storybook을 이용한 UI 개발과 검증 Storybook은 공통 Component만 만들거나 전시하는 공간이 아닙니다. Application 전체를 실행하지 않고도 Component, 기능 조합과 의미 있는 화면 상태를 격리해 재현하고, 구현·디자인 Review, 접근성, Interaction과 시각 회귀 검증에 사용하는 UI 개발 환경입니다. @storybook/addon-designs 공식 Embed Frame 데모 의 Story와 Design 탭 각 Story에는 Figma 파일, Frame 또는 Prototype URL을 연결할 수 있습니다. 특정 Frame 링크에는 해당 Frame의 node-id 가 포함되며 Storybook의 Design 탭에서 Embed 결과를 확인합니다. Story 작성 대상을 선택합니다 Story는 파일 종류가 아니라 독립 재현과 검토 가치로 판단합니다. 다음 대상은 Story 작성을 우선 검토합니다. 여러 화면에서 사용하는 공통 Component와 주요 Variant Form, 검색 조건, Dialog와 단계형 흐름처럼 상태 전환이 중요한 기능 조합 Loading, Empty, Error, 권한 거부, Offline과 긴 응답처럼 실제 환경에서 반복 재현하기 어려운 화면 상태 긴 문구, 다국어, 좁은 Viewport, Theme과 접근성 검토가 필요한 Layout 또는 화면 구간 과거 장애나 회귀 위험이 있어 고정된 재현 조건이 필요한 UI 단순 Page Wrapper, Router만 연결하는 진입점, Story 안에서 실제 서비스와 동일하게 만들 수 없는 Backend 통합은 대상에서 제외할 수 있습니다. 화면 전체를 Story로 만들기 위해 업무 로직을 복제하지 않습니다. Component와 기능 상태를 구현하는 경우 실제 Component, 기능 조합 또는 화면 구간을 Application Source에 구현합니다. 같은 변경에서 검토할 상태를 Story로 구성합니다. Args, Decorator와 승인된 Mock 경계를 사용해 입력, Context, Viewport와 서버 상태를 제어합니다. Default, Disabled, Loading, Empty, Error, 긴 문구, 다국어와 필요한 화면 크기를 확인합니다. Play 또는 합의된 Test로 Keyboard Focus, 접근 가능한 이름과 주요 사용자 Interaction을 확인합니다. 디자인 검토와 시각 회귀 기준이 필요한 상태는 고정된 데이터와 결정적인 결과를 유지합니다. Storybook에서 검증한 구현을 실제 화면에 적용하고 Application 통합 검증을 별도로 수행합니다. Storybook이 대신하지 않는 검증 Storybook은 실제 Routing, Backend 권한과 업무 규칙, WebView Bridge, 배포 환경, 실제 Browser Network와 전체 사용자 여정을 보장하지 않습니다. Story의 Mock은 승인된 계약을 재현하는 검증 도구이며 API 계약을 새로 정의하는 근거가 아닙니다. 이 항목은 Application Test, 통합 Test, E2E와 실제 기기 검증으로 확인합니다. AI를 이용한 반자동 운영 공통 UI, 기능 조합과 중요 화면 상태를 비교하여 Story 누락 후보를 찾습니다. 기존 형식에 맞춰 Story 초안을 작성합니다. Props, Context, Mock 계약과 상태 변경에 따른 갱신 후보를 찾습니다. Storybook 정적 Build, Story 렌더링, Interaction, 접근성과 시각 회귀 중 합의된 검사를 실행합니다. 추가한 Story, 재현한 상태, 사용한 Mock 경계와 실패 항목을 정리합니다. 개발자는 Story 대상, 실제 지원 상태와 계약, Figma 일치 여부, 접근성, Interaction과 Application 통합 결과를 검토합니다. Storybook 정적 Build를 필수 검사로 사용하고 Story 렌더링, Interaction, 접근성과 시각 회귀 검사는 실제 package와 Workflow에 구성된 범위에서 실행합니다. 상세 기준: Story 작성 대상, AI 요청 예시, 누락 점검과 완료 조건은 Storybook 운영 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-5"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "UI 구현과 Figma 연결",
    "excerpt": "디자인 토큰과 기존 Component를 우선합니다 색상, 글자, 간격, Radius와 상태 표현은 Figma 값이나 임의의 Tailwind Utility를 화면마다 복사하지 않고 프로젝트의 Semantic Token을 우선 사용합니다. Button, Input과 Dialog가 이미 존재하면 새 JSX를 작성하지 않고 기존 공개 API로 구현합니다. shadcn/ui는 외부 Package의 완…",
    "content": "4. UI 구현과 Figma 연결 디자인 토큰과 기존 Component를 우선합니다 색상, 글자, 간격, Radius와 상태 표현은 Figma 값이나 임의의 Tailwind Utility를 화면마다 복사하지 않고 프로젝트의 Semantic Token을 우선 사용합니다. Button, Input과 Dialog가 이미 존재하면 새 JSX를 작성하지 않고 기존 공개 API로 구현합니다. shadcn/ui는 외부 Package의 완성품이 아니라 프로젝트가 소유하고 수정하는 Component Source로 취급합니다. 기존 Props와 Variant로 표현 가능한지 확인합니다. 기존 Component의 의미를 해치지 않는 확장인지 검토합니다. 한 기능에만 필요한 조합이면 기능 가까이에 둡니다. 여러 화면에서 의미와 변경 이유가 같을 때 공통 Component로 승격합니다. Storybook만을 위한 Props, Variant와 Wrapper를 추가하지 않습니다. Figma Main Component에 구현 정보를 남깁니다 실제 Component 이름과 파일 또는 Import 경로 주요 Props와 Variant 지원 상태와 사용 제한 대체하거나 우선 사용해야 하는 기존 Component 접근 가능한 Source 또는 Storybook Dev resource 구축 기간에는 디자인 편집 권한이 있는 담당자가 정보를 작성합니다. 운영 단계에는 Front-end 개발자가 경로, Props나 지원 상태를 변경했을 때 Figma 설명도 함께 갱신합니다. Code Connect 없이도 이 정보로 개발자와 AI의 탐색을 도울 수 있지만, Figma 설명만으로 실제 API를 보장하지 않으므로 Source를 반드시 다시 확인합니다. 상세 기준: Figma에서 React 코드로 옮기는 순서와 기존 Component 탐색은 React Code Exports 가이드 , Semantic Token 구성은 디자인 토큰 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-4"
  },
  {
    "document": "Lounge Front-end 구축 가이드 브리핑",
    "section": "WebView와 Native App 경계",
    "excerpt": "서비스 업무 화면은 WebView에서 제공하고 Camera, 위치, Push와 Device 권한처럼 Native 기능이 필요한 경우에만 승인된 JavaScript Bridge를 호출합니다. 화면 Component가 Flutter 객체와 OS별 메시지를 직접 다루지 않도록 Bridge Adapter를 둡니다. Adapter는 요청 ID, Method, Parameter와 결과를 일관되게 처리하…",
    "content": "8. WebView와 Native App 경계 서비스 업무 화면은 WebView에서 제공하고 Camera, 위치, Push와 Device 권한처럼 Native 기능이 필요한 경우에만 승인된 JavaScript Bridge를 호출합니다. 화면 Component가 Flutter 객체와 OS별 메시지를 직접 다루지 않도록 Bridge Adapter를 둡니다. Adapter는 요청 ID, Method, Parameter와 결과를 일관되게 처리하고 화면에는 Promise 기반의 최소 API를 제공합니다. Bridge 구현 전에 필요한 계약 Flutter Native App이 검증할 허용 Origin과 호출 가능한 Method Request와 Response 메시지 형식 성공, 취소, 권한 거부, Timeout과 오류 구분 중복 요청과 화면 종료 시 처리 iOS와 Android 지원 범위 Bridge는 인증 Token 전달이나 Backend 권한 검증 우회 수단으로 사용하지 않습니다. 상세 기준: Native와 WebView의 전체 책임은 APP 개발 표준 , Bridge 계약과 구현 흐름은 WebView 개발 가이드 에서 확인합니다.",
    "url": "./../guides/briefing/index.html#section-8"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "기본 변환 흐름",
    "excerpt": "flowchart LR accTitle: Figma 디자인을 React 코드로 변환하는 기본 흐름 accDescr: 구현 범위를 지정하고 Figma 구조와 프로젝트 소스를 함께 확인한 뒤 기존 컴포넌트와 토큰을 우선 적용하여 코드를 생성하고 프론트엔드 개발자가 검수합니다. A[\"구현 범위 지정\"] --> B[\"Figma 구조와 화면 의도 확인\"] B --> C[\"기존 컴포넌트와 토큰 매핑\"]…",
    "content": "4. 기본 변환 흐름 flowchart LR accTitle: Figma 디자인을 React 코드로 변환하는 기본 흐름 accDescr: 구현 범위를 지정하고 Figma 구조와 프로젝트 소스를 함께 확인한 뒤 기존 컴포넌트와 토큰을 우선 적용하여 코드를 생성하고 프론트엔드 개발자가 검수합니다. A[\"구현 범위 지정\"] --> B[\"Figma 구조와 화면 의도 확인\"] B --> C[\"기존 컴포넌트와 토큰 매핑\"] C --> D[\"React와 Tailwind CSS 초안 생성\"] D --> E[\"화면 비교와 품질 검수\"] E --> F[\"공통 컴포넌트 Story 작성 또는 갱신\"] F --> G[\"프론트엔드 승인\"] React Code Exports 기본 흐름 구현할 Figma 화면 또는 영역을 지정합니다. Figma의 컴포넌트, Auto Layout, Variables와 화면 의도를 확인합니다. 기존 shadcn/ui 및 프로젝트 컴포넌트와 토큰을 우선 적용합니다. 기존 요소로 표현할 수 없는 부분만 새로 작성합니다. 생성 화면을 Figma와 비교하고 프로젝트 품질 기준으로 검수합니다. 새로 만들거나 공개 API를 변경한 공통·재사용 컴포넌트는 Story를 함께 작성하거나 갱신하고 정적 Storybook 빌드로 확인합니다. 4.1 Code Connect 도입 시 장점 영역 장점 기존 컴포넌트 재사용 Figma 컴포넌트를 실제 코드의 컴포넌트 이름과 경로에 연결하여 AI의 임의 구현과 중복 생성을 줄일 수 있습니다. 속성과 variant 매핑 Figma의 variant, 상태와 텍스트 속성을 React props에 연결하여 디자인 의도가 코드에 더 일관되게 반영됩니다. AI 컨텍스트 보강 컴포넌트 사용법과 프로젝트 지침을 Figma MCP에 함께 제공하여 코드 생성 시 추측해야 하는 범위를 줄입니다. 화면 간 일관성 같은 Figma 컴포넌트가 여러 화면에서 동일한 코드 컴포넌트로 해석되도록 도와줍니다. 검수 비용 절감 잘못된 import, 불필요한 새 컴포넌트와 속성 누락을 줄여 프론트엔드 개발자의 반복 정리 작업을 줄일 수 있습니다. TBD Code Connect는 Figma Organization 또는 Enterprise 플랜 비용, 좌석과 권한, 저장소 연결 정책을 검토한 후 도입 여부를 결정합니다. 도입 전에도 위 흐름이 동작하도록 운영합니다. 4.2 Code Connect 미도입 시 기존 컴포넌트 연결 Code Connect를 도입하기 전에는 Figma의 공통 컴포넌트에 실제 코드 컴포넌트 정보를 기록하고, Cline이 구현 전에 프로젝트 소스를 검색하도록 하여 기존 컴포넌트를 우선 사용합니다. 이 방식은 Code Connect의 자동 매핑을 대체하지 않지만, 컴포넌트 이름과 import 경로를 추측하는 범위를 줄이기 위한 기본 운영 방식입니다. 작성 대상과 내용 모든 Frame과 내부 레이어에 정보를 작성하지 않습니다. Button, Input, Dialog, Card와 같이 실제 React 컴포넌트에 대응하는 Figma Main Component 또는 Component Set을 대상으로 합니다. 코드의 컴포넌트 이름과 named export 프로젝트에서 사용하는 import 경로 주요 Props와 variant 컴포넌트의 사용 목적과 중요한 제약 가능한 경우 실제 코드 또는 컴포넌트 문서의 Dev resource 링크 Code component: Button Import: @/components/ui/button Props: variant, size, disabled Usage: 일반적인 사용자 action에 사용 Source: Dev resource 참고 로컬 절대 경로는 다른 작업자가 사용할 수 없으므로 기록하지 않습니다. import alias, 저장소 상대 경로 또는 팀이 접근할 수 있는 소스 링크를 사용합니다. Figma와 코드의 variant 이름이 다르면 대응 관계를 설명에 함께 기록합니다. 아직 구현이나 경로가 확정되지 않은 항목은 추측하지 않고 Code mapping: TBD 로 표시합니다. Figma 작성 방법 컴포넌트 라이브러리의 원본 Figma 파일을 엽니다. Instance가 아니라 Main Component, Component Set 또는 설명이 필요한 개별 Variant를 선택합니다. Design Mode의 Component configuration에서 Description을 열고 코드 컴포넌트 정보를 입력합니다. 실제 코드나 문서 URL이 있으면 Documentation link 또는 Dev Mode의 Dev resource로 연결합니다. 공통 링크는 개별 Instance가 아니라 Main Component에 연결하여 모든 Instance에서 같은 정보를 확인할 수 있게 합니다. 라이브러리로 운영하는 경우 변경 내용을 검토한 뒤 Publish합니다. Description을 수정하려면 원본 Figma Design 파일의 편집 권한이 필요합니다. Dev Mode에서는 Description과 연결된 리소스를 확인하고, 권한이 허용된 경우 실제 코드나 문서의 Dev resource를 추가합니다. 구축과 운영 책임 구축 기간에는 Figma Design 편집 권한이 있는 담당자가 구현된 공통 컴포넌트의 이름, import 경로와 사용 설명을 원본 컴포넌트에 작성합니다. 프론트엔드 개발자는 실제 코드의 export, Props, variant와 소스 링크가 정확한지 확인합니다. 운영 이후 프론트엔드 개발자는 Dev Mode를 기본으로 사용합니다. Description 변경이 필요한 경우 회사의 좌석 관리 정책에 따라 해당 개발자에게 일시적으로 Figma Design 편집 권한을 부여합니다. Figma 계정과 로그인 정보는 공유하지 않으며, 관리자 기능으로 개인 계정의 좌석과 권한을 변경합니다. 컴포넌트 이름, 경로 또는 공개 API가 변경되면 코드와 Figma 설명을 함께 갱신합니다. Cline 구현 기준 선택된 Figma 요소가 공통 컴포넌트 Instance인지 확인합니다. Description과 Dev resource에서 코드 컴포넌트 정보를 확인합니다. 안내된 경로의 실제 파일을 읽어 export, Props와 variant를 검증합니다. 현재 기능과 apps/app-webview/src/components/ui 에서 기존 사용 예시를 검색합니다. 확인된 컴포넌트를 import하여 사용하고, 존재하지 않는 경로나 API는 추측하지 않습니다. 기존 컴포넌트로 표현할 수 없는 부분만 새로 작성하고 그 이유를 변경 설명에 남깁니다.",
    "url": "./../guides/ui/react_code_exports.html#section-4"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "문서 목적",
    "excerpt": "Figma 디자인을 React와 Tailwind CSS 코드로 변환할 때 필요한 역할, 작업 흐름과 검수 기준을 공유합니다. 자동 생성 결과는 구현 초안으로 사용하며, 최종 구조와 품질은 프론트엔드 개발자가 검수합니다. 이 문서는 디자이너, 프론트엔드 개발자와 AI 코드 작업자를 대상으로 하며, 프론트엔드 개발자가 운영합니다. 1.1 핵심 원칙 기존 컴포넌트와 디자인 토큰을 새 코드보다 우선…",
    "content": "1. 문서 목적 Figma 디자인을 React와 Tailwind CSS 코드로 변환할 때 필요한 역할, 작업 흐름과 검수 기준을 공유합니다. 자동 생성 결과는 구현 초안으로 사용하며, 최종 구조와 품질은 프론트엔드 개발자가 검수합니다. 이 문서는 디자이너, 프론트엔드 개발자와 AI 코드 작업자를 대상으로 하며, 프론트엔드 개발자가 운영합니다. 1.1 핵심 원칙 기존 컴포넌트와 디자인 토큰을 새 코드보다 우선합니다. Figma 또는 AI export 결과를 완성 코드로 간주하지 않습니다. 파일과 컴포넌트는 시각적 레이어가 아니라 책임과 재사용 범위를 기준으로 나눕니다. 불명확한 동작이나 데이터 의미를 임의로 확정하지 않습니다.",
    "url": "./../guides/ui/react_code_exports.html#section-1"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "역할과 책임",
    "excerpt": "담당 주요 책임 디자이너 공통 컴포넌트, Auto Layout, Variables와 Styles를 우선 사용합니다. 코드 구조를 고려해 모든 레이어 이름을 정리할 책임은 지지 않습니다. AI 코드 작업자 Figma와 프로젝트 소스를 함께 분석하고, 기존 컴포넌트와 토큰을 우선한 구현 초안을 제공합니다. 프론트엔드 개발자 변환 범위를 정하고 구조, 접근성, 반응형 동작과 중복을 검수하며 예외와…",
    "content": "3. 역할과 책임 담당 주요 책임 디자이너 공통 컴포넌트, Auto Layout, Variables와 Styles를 우선 사용합니다. 코드 구조를 고려해 모든 레이어 이름을 정리할 책임은 지지 않습니다. AI 코드 작업자 Figma와 프로젝트 소스를 함께 분석하고, 기존 컴포넌트와 토큰을 우선한 구현 초안을 제공합니다. 프론트엔드 개발자 변환 범위를 정하고 구조, 접근성, 반응형 동작과 중복을 검수하며 예외와 최종 결과를 승인합니다.",
    "url": "./../guides/ui/react_code_exports.html#section-3"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "완료 기준",
    "excerpt": "기존 컴포넌트와 디자인 토큰을 우선 사용했는가? 화면의 주요 구조와 상태가 Figma 의도와 일치하는가? 의미 있는 HTML과 키보드·포커스 기본 동작을 유지하는가? 모바일 및 필요한 반응형 범위를 확인했는가? Safari 15와 지원 대상 구형 브라우저에서 핵심 정보, 입력, 이동과 상태 표현이 정상 동작하는가? field-sizing , @starting-style , text-wrap:…",
    "content": "9. 완료 기준 기존 컴포넌트와 디자인 토큰을 우선 사용했는가? 화면의 주요 구조와 상태가 Figma 의도와 일치하는가? 의미 있는 HTML과 키보드·포커스 기본 동작을 유지하는가? 모바일 및 필요한 반응형 범위를 확인했는가? Safari 15와 지원 대상 구형 브라우저에서 핵심 정보, 입력, 이동과 상태 표현이 정상 동작하는가? field-sizing , @starting-style , text-wrap: balance/pretty , 최신 :has() , container query와 mask 등에 핵심 UI가 의존하지 않는가? 불필요한 공통화와 파일 분리가 없는가? 공통·재사용 컴포넌트를 새로 만들거나 공개 API를 변경했다면 Story를 작성 또는 갱신했는가? 해당되는 경우 정적 Storybook 빌드를 통과하는가? TypeScript 검사, lint와 production build를 통과하는가? AI 또는 Figma에서 생성한 코드는 사람이 작성한 코드와 같은 리뷰와 검증 기준을 적용합니다. React Code Exports 가이드",
    "url": "./../guides/ui/react_code_exports.html#section-9"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "적용 기술과 기준 문서",
    "excerpt": "정확한 패키지 버전은 프로젝트의 Lock File을 기준으로 하며, 기술별 책임과 상세 구현 원칙은 Front-End 개발 가이드 를 따릅니다. 생성된 컴포넌트의 Props와 UI 타입 작성은 TypeScript 가이드 를 따릅니다. Tokens Studio, Figma Variables, shadcn/ui와 Tailwind CSS 4 사이의 토큰 이름과 연결 방식은 디자인 토큰 가이드 를…",
    "content": "2. 적용 기술과 기준 문서 정확한 패키지 버전은 프로젝트의 Lock File을 기준으로 하며, 기술별 책임과 상세 구현 원칙은 Front-End 개발 가이드 를 따릅니다. 생성된 컴포넌트의 Props와 UI 타입 작성은 TypeScript 가이드 를 따릅니다. Tokens Studio, Figma Variables, shadcn/ui와 Tailwind CSS 4 사이의 토큰 이름과 연결 방식은 디자인 토큰 가이드 를 따릅니다. 구현한 공통 컴포넌트의 사용법, 상태와 변경 사항을 관리하는 방법은 Storybook 운영 가이드 를 따릅니다. Storybook은 Code Connect를 대체하지 않지만, 개발자와 AI가 실제 컴포넌트의 공개 API와 사용 예시를 확인하는 기준 문서로 사용합니다. 영역 기술 이 문서에서의 역할 Application Next.js, React, TypeScript 화면 구성, 컴포넌트와 타입 안전성 Styling Tailwind CSS 디자인 토큰과 기본 스타일 적용 UI Component shadcn/ui 프로젝트가 소유하는 UI 원형 Design Figma Dev Mode, Tokens Studio 디자인 구조와 토큰 전달",
    "url": "./../guides/ui/react_code_exports.html#section-2"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "컴포넌트와 파일 분리",
    "excerpt": "파일은 Figma의 Frame이나 Group 수, JSX 길이 또는 Tailwind 클래스 수가 아니라 역할, 상태 소유권, 재사용 범위와 변경 이유를 기준으로 나눕니다. 사용 범위 기본 배치 한 부모에서만 사용하는 단순 UI 부모 컴포넌트 파일 특정 기능에서 사용하는 UI 해당 feature 내부 하나의 애플리케이션에서 반복되는 UI 애플리케이션 공통 컴포넌트 영역 여러 애플리케이션에서 의…",
    "content": "8. 컴포넌트와 파일 분리 파일은 Figma의 Frame이나 Group 수, JSX 길이 또는 Tailwind 클래스 수가 아니라 역할, 상태 소유권, 재사용 범위와 변경 이유를 기준으로 나눕니다. 사용 범위 기본 배치 한 부모에서만 사용하는 단순 UI 부모 컴포넌트 파일 특정 기능에서 사용하는 UI 해당 feature 내부 하나의 애플리케이션에서 반복되는 UI 애플리케이션 공통 컴포넌트 영역 여러 애플리케이션에서 의미와 변경 이유가 같은 UI 공통 UI 패키지 단순한 화면은 적은 파일로 시작합니다. 독립적인 동작, 상태, 주요 조건 분기 또는 실제 재사용이 확인될 때 컴포넌트를 분리합니다. 필요가 확인되지 않은 wrapper, hook, store, variant 또는 별도 타입 파일을 미리 만들지 않습니다. 8.1 Storybook 등록 기준 Storybook은 공통 컴포넌트의 목록만 관리하는 문서가 아니라 실제 코드로 구현된 Component, Feature와 Screen을 한곳에서 탐색하고, Application 전체를 실행하지 않아도 주요 UI 상태를 반복 재현·검수하는 개발 환경으로 운영합니다. AI 도구는 Story 초안 작성, UI 전체의 누락 점검과 검사 실행을 지원할 수 있지만 등록 대상, 상태, Mock 계약과 실제 결과의 정확성은 프론트엔드 개발자가 검수합니다. @storybook/addon-designs 공식 Embed Frame 데모 의 실제 화면 Story에는 Figma 파일, Frame 또는 Prototype URL을 연결할 수 있습니다. 특정 Frame을 표시할 때는 선택한 Frame의 링크를 복사해 사용하며, Storybook의 Design 탭에서 Embed 결과를 확인합니다. apps/app-webview/src/components/ui , 독립적으로 검수할 가치가 있는 Feature와 사용자에게 노출되는 주요 Screen을 등록 대상으로 검토합니다. 실제 export와 Props를 기준으로 기본 상태, variant, size, disabled, loading, error와 empty 중 구현된 상태만 Story로 작성합니다. Screen Story는 Loading, Empty, Error, 권한, 긴 문구, 다국어와 지원 Viewport처럼 실제 환경에서 반복 재현하기 어려운 상태를 최소 Fixture와 승인된 Mock 경계로 고정합니다. 공개 Props, Feature 상태, Screen 구조 또는 사용자가 보는 시각적 결과를 변경한 작업에서는 관련 Story도 같은 변경에 포함합니다. 단순 Page Wrapper, 타입·상수·도우미 파일, 동일 Screen으로 대표할 수 있는 Route와 과도한 Mock이 필요한 내부 구현은 제외할 수 있으며 대상과 사유를 남깁니다. Storybook을 위해 제품 코드에 사용하지 않는 Props, variant, wrapper나 Mock 전용 구조를 추가하지 않습니다. Mock은 승인된 계약을 재현할 뿐 실제 Backend 계약과 통합 검증을 대신하지 않습니다. AI 누락 점검은 컴포넌트 파일 수만 비교하지 않고 공통 UI, 사용자 노출 Route·Page·Screen, 주요 상태와 Viewport를 함께 조사하여 대상, 근거와 제외 사유를 먼저 확인한 뒤 필요한 Story만 추가합니다.",
    "url": "./../guides/ui/react_code_exports.html#section-8"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "토큰과 컴포넌트 사용",
    "excerpt": "Tokens Studio와 Figma Variables의 디자인 결정을 프로젝트의 Tailwind 토큰에 연결하고, shadcn/ui를 수정 가능한 UI 원형으로 사용합니다. 토큰 분류, 이름과 설정의 상세 기준은 디자인 토큰 가이드 를 따릅니다. 7.1 토큰 적용 순서 먼저 globals.css 의 Semantic Token과 기존 Tailwind 유틸리티를 확인합니다. background…",
    "content": "7. 토큰과 컴포넌트 사용 Tokens Studio와 Figma Variables의 디자인 결정을 프로젝트의 Tailwind 토큰에 연결하고, shadcn/ui를 수정 가능한 UI 원형으로 사용합니다. 토큰 분류, 이름과 설정의 상세 기준은 디자인 토큰 가이드 를 따릅니다. 7.1 토큰 적용 순서 먼저 globals.css 의 Semantic Token과 기존 Tailwind 유틸리티를 확인합니다. background , foreground , primary , muted , border 처럼 사용 목적이 드러나는 토큰을 원시 색상보다 우선합니다. 성공, 경고와 안내 색상이 확정되지 않은 상태에서 green , yellow , blue 계열을 임의로 추가하지 않습니다. Tailwind 기본 간격으로 표현되는 값을 화면별 CSS Variable로 다시 만들지 않습니다. 7.2 shadcn/ui와 기능 컴포넌트 기존 컴포넌트가 있으면 동일한 요소를 새로 생성하지 않습니다. app-webview에서만 사용하는 shadcn/ui 원형과 Wrapper는 apps/app-webview/src/components/ui 에서 관리합니다. 기존 컴포넌트를 사용할 때 파일명만으로 판단하지 않고 실제 named export, Props, variant와 import alias를 확인합니다. 디자인과 코드의 이름 또는 값이 다르면 한쪽을 임의로 정답으로 간주하지 않고 차이를 확인합니다. 예약, 이용권, 라운지와 같이 업무 의미를 포함한 컴포넌트는 해당 기능 가까이에 둡니다. 공통 UI를 수정할 때 기존 사용처와 키보드, 포커스 및 ARIA 동작을 함께 확인합니다.",
    "url": "./../guides/ui/react_code_exports.html#section-7"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "Figma 해석 기준",
    "excerpt": "의미 있는 레이어 이름은 코드 생성 정확도를 높이기 위한 권장사항이며 필수 조건은 아닙니다. 기본 이름이 남아 있더라도 시각적 구조, 텍스트, 컴포넌트 정보와 프로젝트 소스를 함께 분석해 구현합니다. 디자이너에게 개발 구조에 맞춘 전체 레이어 정리를 요구하지 않습니다. 색상, 간격과 크기는 레이어 이름보다 Variables와 Auto Layout을 우선 기준으로 사용합니다. 공통 컴포넌트 인…",
    "content": "6. Figma 해석 기준 의미 있는 레이어 이름은 코드 생성 정확도를 높이기 위한 권장사항이며 필수 조건은 아닙니다. 기본 이름이 남아 있더라도 시각적 구조, 텍스트, 컴포넌트 정보와 프로젝트 소스를 함께 분석해 구현합니다. 디자이너에게 개발 구조에 맞춘 전체 레이어 정리를 요구하지 않습니다. 색상, 간격과 크기는 레이어 이름보다 Variables와 Auto Layout을 우선 기준으로 사용합니다. 공통 컴포넌트 인스턴스는 가능한 한 유지하고 같은 요소를 새로 만들지 않습니다. 동작, 데이터 의미 또는 반응형 규칙이 불명확하면 프론트엔드 개발자가 설명을 추가하거나 담당자에게 확인합니다.",
    "url": "./../guides/ui/react_code_exports.html#section-6"
  },
  {
    "document": "React Code Exports 가이드",
    "section": "VS Code, Cline 및 로컬 LLM을 이용한 구현",
    "excerpt": "VS Code에서 Cline과 Ollama 기반 로컬 LLM을 사용해 React와 Tailwind CSS 구현 초안을 작성할 수 있습니다. 이 가이드의 기본 로컬 모델은 qwen3.8:27b-mtp-q4_K_M 입니다. 생성된 코드의 구조와 품질을 최종 판단하는 주체는 프론트엔드 개발자입니다. 사람과 LLM이 작성한 코드의 공통 품질 기준은 Front-End Lint 가이드 를 따릅니다. 5…",
    "content": "5. VS Code, Cline 및 로컬 LLM을 이용한 구현 VS Code에서 Cline과 Ollama 기반 로컬 LLM을 사용해 React와 Tailwind CSS 구현 초안을 작성할 수 있습니다. 이 가이드의 기본 로컬 모델은 qwen3.8:27b-mtp-q4_K_M 입니다. 생성된 코드의 구조와 품질을 최종 판단하는 주체는 프론트엔드 개발자입니다. 사람과 LLM이 작성한 코드의 공통 품질 기준은 Front-End Lint 가이드 를 따릅니다. 5.1 도구와 책임 VS Code는 소스 편집, Diff 확인과 검증 명령 실행에 사용합니다. Cline은 프로젝트 컨텍스트와 Figma 정보를 바탕으로 코드를 생성하고 수정합니다. Ollama는 qwen3.8:27b-mtp-q4_K_M 모델을 로컬에서 실행합니다. 파일 변경과 명령 실행 전후에 범위와 결과를 사람이 확인합니다. 5.2 Ollama와 Qwen 설치 Ollama를 설치한 뒤 Ollama 표시 기준 약 18GB인 MTP Q4_K_M 기본 모델을 다음 명령으로 내려받고 실행 여부를 확인합니다. ollama pull qwen3.8:27b-mtp-q4_K_M ollama list ollama run qwen3.8:27b-mtp-q4_K_M 5.3 Cline 설정 VS Code에 Cline 확장을 설치한 뒤 Cline의 API 설정으로 이동합니다. API Provider 에서 Ollama 를 선택하고, Ollama의 기본 주소와 사용할 모델을 지정합니다. Cline 설정에서 API Configuration 을 엽니다. API Provider 에서 Ollama 를 선택합니다. Base URL은 http://localhost:11434 로 설정합니다. Model에서 qwen3.8:27b-mtp-q4_K_M 를 선택합니다. Model Context Window 는 속도와 프로젝트 문맥의 균형을 고려해 64K 로 설정합니다. 숫자를 직접 입력하는 화면에서는 65536 을 입력합니다. Context Window를 변경한 뒤 설정을 저장하고 새 작업에서 선택한 모델과 컨텍스트 크기가 적용되었는지 확인합니다. 128K는 대규모 저장소나 매우 긴 대화를 한 번에 유지해야 할 때만 선택적으로 사용합니다. 이 경우 Cline 화면에서는 130K(128K 토큰) 로 설정하고, 숫자를 직접 입력하는 화면에서는 131072 를 입력합니다. 초기 컨텍스트 사용량 동일하거나 유사한 Cline 및 MCP 구성에서 Figma Desktop MCP와 Tavily MCP를 활성화하고, 새 채팅에 안녕 처럼 짧은 메시지를 입력했을 때 다음과 같은 초기 컨텍스트 사용량이 관찰되었습니다. 일반 qwen3.8:27b : 약 18.2K — 기존 테스트 관찰값 qwen3.8:27b-mtp-q4_K_M : 약 7~8K — 사용자 실측값 이는 사용자 메시지 자체의 크기뿐 아니라 Cline이 Agent 작업을 시작하기 위해 미리 전달하는 기본 컨텍스트가 함께 계산된 결과입니다. 초기 컨텍스트에는 일반적으로 다음 정보가 포함됩니다. Cline의 시스템 지침과 도구 사용 규칙 파일 읽기, 수정, 명령 실행과 브라우저 등 기본 도구 정의 Figma와 Tavily MCP가 제공하는 도구 이름, 설명 및 입력 구조 Cline Rules, 작업 환경과 모델에 전달되는 기타 기본 정보 따라서 MCP 서버와 도구를 많이 활성화할수록 실제 대화를 시작하기 전의 컨텍스트 사용량도 커질 수 있습니다. 위의 18.2K와 7~8K는 각 테스트 환경에서 관찰된 값입니다. MTP의 주된 목적은 출력 생성 가속이며, MTP 자체가 Cline의 시스템 및 MCP 컨텍스트 토큰을 원리적으로 줄인다고 단정할 수 없습니다. 모델과 토크나이저, 도구 스키마 처리 방식, Cline 버전, 활성 도구, MCP 서버 및 프로젝트 설정 차이에 따라 값이 달라질 수 있습니다. 64K 설정에서는 이 초기 사용량을 제외한 나머지 공간에 대화, 파일 내용과 도구 실행 결과가 누적되므로 한 채팅에는 하나의 작업 목표만 유지하고 필요하면 새 채팅으로 분리합니다. 자세한 컨텍스트 구성은 Cline Task Management 를 참고합니다. /newtask 로 작업 이어가기 /newtask 는 현재 채팅을 단순히 종료하는 명령이 아니라, 지금까지의 핵심 내용을 정리해 깨끗한 컨텍스트의 새 Task로 전달하는 작업 인계 기능입니다. 컨텍스트가 많이 찼지만 동일한 목표를 계속 진행해야 하거나, 조사와 계획을 마치고 구현 단계로 전환할 때 사용합니다. 채팅 입력창에 /newtask 를 입력합니다. Cline이 현재 대화에서 인계할 내용을 요약해 제안합니다. 목표, 완료 작업, 관련 파일과 다음 단계가 정확한지 확인합니다. 누락되거나 잘못 요약된 내용을 직접 보완한 뒤 새 Task 생성을 승인합니다. 새 Task에서 요약된 컨텍스트를 기준으로 작업을 계속합니다. 새 Task를 시작하기 전에 인계 요약에 다음 항목이 포함되었는지 확인합니다. 최종 목표와 현재 작업 범위 이미 결정한 구현 방향과 변경하면 안 되는 제약 조건 완료한 작업, 수정한 파일과 현재 검증 결과 해결되지 않은 문제, 확인이 필요한 항목과 다음 작업 순서 새 Task에는 전체 대화와 모든 도구 출력이 그대로 복사되지 않습니다. Figma와 Tavily MCP 연결 설정은 계속 사용할 수 있지만, 이전 검색 결과나 Figma 분석 내용은 인계 요약에 포함되어야 새 Task가 알 수 있습니다. 따라서 중요한 결정과 근거가 빠지지 않았는지 확인한 뒤 전환합니다. 주요 슬래시 명령 명령 기능 권장 사용 시점 /newtask 현재 작업의 핵심 내용을 요약해 새 Task로 인계 컨텍스트가 많이 찼거나 작업 단계를 전환할 때 /smol 핵심 내용을 유지하면서 현재 대화 기록을 압축 같은 Task를 유지하면서 컨텍스트 공간만 확보할 때 /newrule 반복해서 적용할 프로젝트 또는 개인 규칙 생성 같은 코딩 기준이나 금지사항을 매번 설명하고 있을 때 /deep-planning 코드베이스를 조사하고 상세 구현 계획과 후속 Task 생성 여러 영역에 영향을 주는 복잡한 기능이나 구조 변경 전 /explain-changes Git Diff의 변경 내용을 설명하며 VS Code에서만 사용 가능 미커밋 변경, 커밋 또는 브랜치 차이를 검토할 때 /reportbug Cline 진단 정보를 포함해 문제 보고 준비 Cline 자체 오류, 비정상 종료 또는 반복되는 오동작을 보고할 때 현재 설치 버전에서 지원되는 명령은 채팅 입력창에 / 를 입력해 확인합니다. 명령 상세와 변경 사항은 Cline Using Commands 를 참고합니다. 5.4 로컬 LLM 테스트 및 권장 사양 아래 기준은 Ollama 표시 기준 약 18GB인 qwen3.8:27b-mtp-q4_K_M 모델을 Ollama와 Cline에서 사용하는 환경을 전제로 합니다. 모델 선택 원칙과 실사용 평가 로컬 LLM은 파라미터 수나 출시 시점만으로 우열을 판단하지 않습니다. 프로젝트 가이드 리뷰, 실제 코드 구현, 리팩터링과 범용 Agent 작업처럼 실제로 맡길 업무의 동일한 프롬프트를 각 모델에 적용하고 결과 품질, 응답 속도, 지시 준수, 커뮤니케이션과 출력 안정성을 함께 비교합니다. Gemma4 : 커뮤니케이션과 Soul 준수가 뛰어나고, 문서 리뷰뿐 아니라 프로젝트 전체 맥락과 의도를 파악하는 능력이 우수했습니다. 범용 Agent 작업을 안정적으로 맡길 수 있는 모델로 평가합니다. Qwen 계열 : 응답이 느리고 커뮤니케이션은 상대적으로 약하지만 Cline 코딩 작업에서는 강점이 있었습니다. Hermes에서는 과도한 Reasoning과 출력 불안정이 관찰되었으므로, 범용 Agent나 문서 리뷰에는 사용하지 않고 Cline 기반 코드 구현·수정·리팩터링 용도로만 사용합니다. 위 평가는 현재 테스트 환경에서 관찰한 업무별 특성이며 고정된 종합 순위가 아닙니다. 모델이나 실행 도구가 변경되면 같은 실제 업무 테스트를 다시 수행한 뒤 용도별 기본 모델을 결정합니다. 테스트 환경 구분 테스트 사양 CPU AMD Ryzen 9 7950X3D GPU NVIDIA GeForce RTX 4090 24GB 메모리 DDR5 96GB 저장 장치 NVMe Gen4 SSD 1TB 모델 qwen3.8:27b-mtp-q4_K_M , 약 18GB 테스트 결과 : 약 18GB MTP Q4_K_M 모델과 128K 토큰 컨텍스트를 사용한 고사양 환경에서는 응답 속도와 추론 품질이 모두 실사용 가능한 수준이었습니다. 다만 64K보다 응답이 느려질 수 있으므로 일반 개발 PC와 반복 작업에서는 64K를 기본값으로 권장합니다. 위 장비는 검증 결과가 좋은 고사양 테스트 환경이며 모든 개발 PC의 필수 사양은 아닙니다. 로컬 LLM에서는 GPU 연산 성능뿐 아니라 모델과 컨텍스트를 처리할 수 있는 VRAM 용량이 중요합니다. 개발 PC 권장 기준 사용 범위 GPU 시스템 메모리 CPU 운영 기준 64K 기본 권장 VRAM 24GB 64GB 최신 8코어 이상 Cline을 이용한 일반적인 코딩 작업의 기본 권장선 64K 여유 구성 VRAM 24GB 64~96GB 최신 12코어급 권장 개발 서버와 다른 작업 도구를 함께 사용할 때 여유 확보 실행 가능한 최소 VRAM 16GB 64GB 최신 12코어급 모델 일부가 CPU로 이동하여 응답 속도가 크게 느려질 수 있음 비용과 성능의 균형을 고려하면 RTX 3090 24GB, 시스템 메모리 64GB, 최신 8~12코어 CPU와 NVMe SSD 1TB 구성을 권장합니다. RTX 3090은 RTX 4090보다 연산 속도는 낮지만 VRAM이 동일하게 24GB이므로 약 18GB 모델의 64K 컨텍스트를 사용하는 개발 PC에 적합합니다. 64K는 일반적인 코드 조사, Figma 화면 구현과 웹검색 결과 정리에 필요한 문맥을 확보하면서 128K보다 빠르게 작업하기 위한 기본값입니다. 다른 GPU 사용 프로그램을 최소화하고 ollama ps 에서 모델이 가능한 한 100% GPU 로 적재되었는지 확인합니다. 세부 내용은 Ollama Context length 와 Ollama FAQ 를 참고합니다. 5.5 Figma Desktop MCP 설정 Figma Desktop에서 선택한 레이어 또는 프레임 정보를 Cline에 전달하려면 Cline의 MCP 설정에 다음 서버를 등록합니다. { \"mcpServers\": { \"figma-desktop\": { \"type\": \"streamableHttp\", \"url\": \"http://127.0.0.1:3845/mcp\", \"disabled\": false, \"autoApprove\": [] } } } Figma Desktop에서 코드로 변환할 레이어 또는 프레임을 선택한 뒤 Cline에 다음과 같이 명령합니다. 현재 figma에서 선택된 레이어(프레임) 정보/코딩 이 명령을 사용하면 현재 Figma에서 선택된 부분의 정보를 읽어 해당 영역의 소스 코드를 생성할 수 있습니다. 선택 대상과 프로젝트의 기존 컴포넌트, 디자인 토큰 및 구현 규칙을 함께 확인한 뒤 결과를 적용합니다. 5.6 Cline 웹검색과 Tavily MCP Cline 기본 브라우저 도구 Cline은 기본 브라우저 도구를 사용해 웹페이지를 열고, 화면을 탐색하고, 검색 사이트의 결과와 문서 내용을 확인할 수 있습니다. 별도의 검색 API 가입 없이 사용할 수 있지만 웹사이트 화면을 직접 조작하는 방식이므로 검색 결과 수집과 여러 출처 비교에는 시간이 더 걸릴 수 있습니다. 브라우저 사용은 Cline의 승인 설정에서 허용해야 합니다. 특정 URL의 공식 문서를 읽거나 구현 화면을 확인하는 작업에는 기본 브라우저를 사용하고, 최신 자료를 여러 출처에서 검색하고 정리하는 작업에는 Tavily MCP를 사용합니다. Tavily MCP 설정 Tavily는 AI Agent용 웹검색 서비스로, 검색 결과와 관련 페이지 내용을 Cline이 처리하기 쉬운 형태로 제공합니다. 기존 MCP 설정의 mcpServers 에 다음 항목을 추가합니다. \"tavily\": { \"type\": \"streamableHttp\", \"url\": \"https://mcp.tavily.com/mcp/\", \"headers\": { \"Authorization\": \"Bearer YOUR_TAVILY_API_KEY\" }, \"disabled\": false, \"autoApprove\": [] } YOUR_TAVILY_API_KEY 는 Tavily에서 발급받은 키로 교체합니다. API 키가 포함된 설정 파일은 저장소에 커밋하지 않습니다. 처음에는 autoApprove 를 비워 두고 검색 도구 호출 내용을 확인한 뒤 승인합니다. 무료 및 유료 사용 구분 구분 제공량 또는 비용 사용 기준 Researcher 무료 매월 1,000 API 크레딧, 카드 등록 불필요 개인 개발과 필요한 공식 문서 검색에 기본 사용 기본 검색 요청 1회당 1크레딧 무료 범위에서 우선 사용 고급 검색 요청 1회당 2크레딧 기본 검색 결과가 부족할 때만 사용 Pay As You Go 크레딧당 미화 0.008달러 무료 제공량을 초과하고 사용량이 일정하지 않을 때 선택 월간 유료 플랜 월 30달러·4,000크레딧부터 사용량별 단계 제공 팀에서 반복적으로 많은 검색을 수행할 때 검토 이 가이드에서는 무료 Researcher 플랜을 기준으로 기본 검색을 우선 사용합니다. 사이트 전체 탐색이나 대규모 Research 요청은 크레딧을 빠르게 소비할 수 있으므로 필요한 공식 문서와 최신 정보 확인 범위로 제한합니다. 가격과 크레딧 정책은 변경될 수 있으므로 Tavily Credits & Pricing 에서 현재 기준을 확인합니다. Tavily를 사용해 관련 기술의 최신 공식 문서를 검색하고, 핵심 내용과 출처 URL을 함께 정리해줘. 5.7 React Code Exports 작업 흐름 Figma에서 구현할 레이어 또는 프레임을 선택합니다. Cline에 현재 figma에서 선택된 레이어(프레임) 정보/코딩 이라고 요청합니다. 코드를 작성하기 전에 현재 기능과 애플리케이션의 공통 UI에서 같은 역할의 기존 컴포넌트를 검색합니다. 사용할 컴포넌트의 실제 파일, export, Props, variant와 기존 사용 예시를 확인합니다. 존재하지 않는 import 경로, Props, variant 또는 토큰은 추측하지 않습니다. globals.css 의 Semantic Token과 기존 Tailwind 사용 방식을 확인합니다. 공통 CSS 하한은 Safari 15로 적용합니다. Figma 표현에 최신 CSS가 필요해 보이더라도 Safari 15에서 지원되지 않는 Tailwind Utility는 사용하지 않고 호환 가능한 기본 Utility나 기존 프로젝트 패턴으로 대체합니다. 기존 요소를 우선 재사용하고 불명확한 동작이나 데이터는 담당자에게 확인합니다. 생성된 Diff를 검토하고 승인한 범위만 반영합니다. typecheck , lint 와 필요한 production build를 실행합니다. 구현 화면을 Figma와 비교하고 차이를 수정합니다. 5.8 검수 기준 Figma에서 의도한 레이어 또는 프레임을 정확히 선택했는가? 기존 컴포넌트와 디자인 토큰을 우선 사용했는가? 기존 컴포넌트의 실제 파일, export, Props와 variant를 확인했는가? 기존 컴포넌트로 표현할 수 있는 요소를 native JSX와 Tailwind로 중복 구현하지 않았는가? 생성된 import가 실제 경로와 export를 가리키는지 TypeScript 검사로 확인했는가? 작업 범위를 벗어난 파일, 의존성 또는 설정을 변경하지 않았는가? Safari 15에서 지원되지 않는 최신 CSS 기반 Utility에 핵심 UI를 의존시키지 않았는가? Android와 다른 브라우저에 임의의 대응 버전을 지정하지 않고 프로젝트가 정한 구형 검증 환경에서 실제 사용 Utility와 핵심 기능을 확인했는가? 확인되지 않은 API, 상태 관리 구조 또는 공통화를 추가하지 않았는가? 최종 Diff를 사람이 검토했는가? typecheck , lint 와 필요한 build를 통과했는가? LLM과 Agent는 구현 속도를 높이는 작업 도구이며 승인 주체가 아닙니다. 생성된 코드는 사람이 작성한 코드와 같은 리뷰 및 검증 기준을 적용합니다.",
    "url": "./../guides/ui/react_code_exports.html#section-5"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "기본 구성",
    "excerpt": "Storybook은 먼저 apps/app-webview 에서 작은 범위로 도입합니다. 여러 애플리케이션에서 실제 공유되는 UI와 운영 필요성이 확인된 뒤 별도 Storybook Application 또는 공통 구성을 검토합니다. Next.js 프로젝트에서는 설치된 Next.js, React, Node.js와 Build 설정을 확인한 뒤 호환되는 Storybook Framework를 선택합니다…",
    "content": "4. 기본 구성 Storybook은 먼저 apps/app-webview 에서 작은 범위로 도입합니다. 여러 애플리케이션에서 실제 공유되는 UI와 운영 필요성이 확인된 뒤 별도 Storybook Application 또는 공통 구성을 검토합니다. Next.js 프로젝트에서는 설치된 Next.js, React, Node.js와 Build 설정을 확인한 뒤 호환되는 Storybook Framework를 선택합니다. 특별한 Webpack 또는 Babel 제약이 없다면 공식 문서에서 권장하는 Next.js Vite Framework를 우선 검토합니다. 기본 기능은 다음 범위로 제한합니다. Component Story Format 기반 Story Controls와 Autodocs 접근성 검사 Desktop, Tablet과 Mobile 화면 확인을 위한 Viewport Storybook 정적 Build 실제 필요가 확인된 상호작용 테스트 유료 호스팅과 시각적 회귀 서비스는 기본 구성에 포함하지 않습니다. 팀 외부 공유, Pull Request 단위 시각 비교와 변경 승인 흐름이 실제로 필요해진 뒤 별도로 검토합니다. 자세한 설치 기준은 Storybook 설치 문서 와 Next.js Vite Framework 문서 , 페이지 구성 문서 와 Story 분류 문서 를 확인합니다.",
    "url": "./../guides/storybook/index.html#section-4"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "목적과 범위",
    "excerpt": "Storybook은 공통 UI 컴포넌트와 사용자에게 노출되는 화면 UI를 한곳에서 탐색하고 검수하기 위해 사용합니다. 라우터 주소를 모르더라도 사이드바의 화면 이름과 상태를 통해 필요한 UI를 찾고, 실제 애플리케이션을 모두 실행하지 않아도 컴포넌트와 화면을 독립적으로 확인할 수 있게 합니다. Story 작성과 갱신은 AI 코딩 도구가 우선 수행하고 프론트엔드 개발자가 대상, 상태와 결과를…",
    "content": "1. 목적과 범위 Storybook은 공통 UI 컴포넌트와 사용자에게 노출되는 화면 UI를 한곳에서 탐색하고 검수하기 위해 사용합니다. 라우터 주소를 모르더라도 사이드바의 화면 이름과 상태를 통해 필요한 UI를 찾고, 실제 애플리케이션을 모두 실행하지 않아도 컴포넌트와 화면을 독립적으로 확인할 수 있게 합니다. Story 작성과 갱신은 AI 코딩 도구가 우선 수행하고 프론트엔드 개발자가 대상, 상태와 결과를 검수하는 반자동 운영을 기본으로 합니다. Storybook을 별도의 문서 작성 업무로 운영하지 않습니다. 컴포넌트와 화면 UI 생성·변경 작업의 일부로 Story를 함께 관리하며, 자동 검사로 코드와 Story의 불일치를 확인합니다. Storybook은 UI 카탈로그와 독립 렌더링 환경입니다. 실제 라우팅, Backend 연동, Native App 연결과 전체 업무 흐름의 최종 검증은 실제 애플리케이션 환경에서 수행합니다. 정확한 Storybook 버전, Framework와 Addon 구성은 실제 애플리케이션의 package.json 과 Lock File을 기준으로 결정합니다. 실제 설정과 CI에서 확인되지 않은 구성을 설치 또는 적용된 것으로 간주하지 않습니다.",
    "url": "./../guides/storybook/index.html#section-1"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "애플리케이션 스타일 연결",
    "excerpt": "Storybook은 실제 애플리케이션과 같은 기준으로 컴포넌트와 화면 UI를 렌더링해야 합니다. globals.css 와 Tailwind CSS 4 설정을 연결합니다. Semantic Token과 CSS Variable을 애플리케이션과 동일하게 사용합니다. 프로젝트의 import alias를 유지합니다. 실제 렌더링에 필요한 Font와 전역 Provider만 연결합니다. Router, Que…",
    "content": "5. 애플리케이션 스타일 연결 Storybook은 실제 애플리케이션과 같은 기준으로 컴포넌트와 화면 UI를 렌더링해야 합니다. globals.css 와 Tailwind CSS 4 설정을 연결합니다. Semantic Token과 CSS Variable을 애플리케이션과 동일하게 사용합니다. 프로젝트의 import alias를 유지합니다. 실제 렌더링에 필요한 Font와 전역 Provider만 연결합니다. Router, Query, Theme 또는 Form Context는 해당 컴포넌트나 화면에 필요한 최소 범위로 제공합니다. Page 또는 Screen Story의 Route Parameter와 화면 입력값은 Story 안에서 재현 가능하게 고정합니다. API 응답을 재현해야 한다면 승인된 계약이 전달된 이후에만 해당 화면에 필요한 최소 Fixture 또는 Mock을 사용합니다. 전체 애플리케이션 환경을 재현하기 위한 과도한 Mock과 Provider를 만들지 않습니다. Storybook과 실제 화면의 스타일이 다르면 Story를 임의로 보정하지 않고 전역 스타일, Token, Provider와 Build 설정의 차이를 먼저 확인합니다.",
    "url": "./../guides/storybook/index.html#section-5"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "역할",
    "excerpt": "담당 주요 책임 AI 코딩 도구 기존 컴포넌트·화면과 Story 조사, Story 초안 생성과 갱신, Autodocs 연결, 검사 실행 및 오류 수정 프론트엔드 개발자 Story 작성 대상 승인, 화면 분류와 제품에 필요한 상태 판단, Figma 비교, 반응형·접근성·상호작용 검수 CI 합의된 컴포넌트와 화면의 Story 누락 검사, Storybook 정적 Build와 합의된 테스트 실행 C…",
    "content": "2. 역할 담당 주요 책임 AI 코딩 도구 기존 컴포넌트·화면과 Story 조사, Story 초안 생성과 갱신, Autodocs 연결, 검사 실행 및 오류 수정 프론트엔드 개발자 Story 작성 대상 승인, 화면 분류와 제품에 필요한 상태 판단, Figma 비교, 반응형·접근성·상호작용 검수 CI 합의된 컴포넌트와 화면의 Story 누락 검사, Storybook 정적 Build와 합의된 테스트 실행 Cline, Claude Code와 Codex 중 어떤 도구를 사용하더라도 동일한 기준을 적용합니다. 도구 공통 규칙은 저장소 루트 AGENTS.md 를 기준으로 관리하고 특정 도구 전용 설정에는 공통 규칙을 복제하지 않습니다.",
    "url": "./../guides/storybook/index.html#section-2"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "완료 기준",
    "excerpt": "Story가 실제 컴포넌트의 export, Props와 variant를 사용하는가? 사용자에게 노출되는 화면을 라우터 주소 없이 Storybook 사이드바에서 찾을 수 있는가? 각 화면의 기본 상태와 실제로 지원하는 주요 상태 및 Viewport를 확인할 수 있는가? 기본 상태와 제품에서 실제로 지원하는 주요 상태가 포함되어 있는가? Story를 위해 불필요한 제품 Props, variant…",
    "content": "11. 완료 기준 Story가 실제 컴포넌트의 export, Props와 variant를 사용하는가? 사용자에게 노출되는 화면을 라우터 주소 없이 Storybook 사이드바에서 찾을 수 있는가? 각 화면의 기본 상태와 실제로 지원하는 주요 상태 및 Viewport를 확인할 수 있는가? 기본 상태와 제품에서 실제로 지원하는 주요 상태가 포함되어 있는가? Story를 위해 불필요한 제품 Props, variant 또는 Mock을 추가하지 않았는가? Tailwind CSS, Semantic Token, Font와 필요한 Provider가 실제 애플리케이션과 일치하는가? Autodocs에서 공개 API를 확인할 수 있는가? Storybook 정적 Build와 합의된 검사를 통과하는가? Figma, Story와 실제 코드가 충돌하는 경우 차이를 확인하고 함께 갱신했는가? AI가 만든 결과를 프론트엔드 개발자가 검수했는가? Storybook과 AI 코딩 도구는 컴포넌트와 화면 UI의 발견, 검수와 유지보수 비용을 줄이는 작업 도구입니다. 생성된 Story는 사람이 작성한 코드와 같은 리뷰 및 검증 기준을 적용합니다. Storybook 운영 가이드",
    "url": "./../guides/storybook/index.html#section-11"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "자동 검사와 CI",
    "excerpt": "AI 지침은 작업 방식을 안내하고 자동 검사는 결과를 확인합니다. Cline, Claude Code, Codex 또는 사람이 직접 작업하더라도 동일한 검사를 적용합니다. TypeScript 검사 → Lint → Storybook 정적 Build → 합의된 Story 테스트 → 필요한 Production Build 처음에는 Storybook 정적 Build를 필수 검사로 사용합니다. 파일럿이…",
    "content": "10. 자동 검사와 CI AI 지침은 작업 방식을 안내하고 자동 검사는 결과를 확인합니다. Cline, Claude Code, Codex 또는 사람이 직접 작업하더라도 동일한 검사를 적용합니다. TypeScript 검사 → Lint → Storybook 정적 Build → 합의된 Story 테스트 → 필요한 Production Build 처음에는 Storybook 정적 Build를 필수 검사로 사용합니다. 파일럿이 안정된 뒤 Story 렌더링, 상호작용과 접근성 검사를 CI 필수 항목으로 승격합니다. Story 누락을 자동 검사할 때 모든 .tsx 파일을 일괄 대상으로 간주하지 않습니다. 컴포넌트는 파일 규칙과 공개 export 목록을 기준으로 확인하고, 화면은 사용자 노출 Route·Page·Screen 목록과 합의된 제외 사유를 기준으로 확인합니다.",
    "url": "./../guides/storybook/index.html#section-10"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "AI를 이용한 반자동 운영",
    "excerpt": "9.1 최초 도입 최초 도입 시 AI 코딩 도구가 지정된 공통 UI 경로와 사용자 노출 Route·Page·Screen을 조사해 다음 내용을 먼저 보고합니다. 확인 항목 내용 UI 대상 실제 export된 컴포넌트 또는 사용자에게 노출되는 화면 이름 구분 Component, Feature 또는 Screen Story 상태 Story 존재, 누락 또는 실제 코드와 불일치 작성 필요성 Story…",
    "content": "9. AI를 이용한 반자동 운영 9.1 최초 도입 최초 도입 시 AI 코딩 도구가 지정된 공통 UI 경로와 사용자 노출 Route·Page·Screen을 조사해 다음 내용을 먼저 보고합니다. 확인 항목 내용 UI 대상 실제 export된 컴포넌트 또는 사용자에게 노출되는 화면 이름 구분 Component, Feature 또는 Screen Story 상태 Story 존재, 누락 또는 실제 코드와 불일치 작성 필요성 Story 작성 대상 여부와 근거 주요 상태 실제 Props, variant, 화면 상태와 Viewport 제외 사유 화면이 없는 Route, 동일 UI 중복, helper 또는 내부 구현 등 목록을 사람이 검토한 뒤 승인된 대상만 Story로 작성합니다. 모든 .tsx 파일을 등록하지는 않지만 사용자에게 노출되는 페이지와 화면은 기본 등록 대상으로 분류합니다. Button, Input, Card, Dialog와 Badge처럼 단순하고 반복 사용되는 공통 UI와 대표 화면 몇 개로 파일럿을 진행합니다. Story 작성, 사이드바 탐색과 Build 결과를 확인한 뒤 나머지 사용자 화면으로 확대합니다. 9.2 일상적인 변경 flowchart TB accTitle: AI를 이용한 Storybook 반자동 운영 흐름 accDescr: UI 컴포넌트나 화면을 생성하거나 변경하면 AI가 기존 Story와 사용처를 확인하고 Story를 갱신한 뒤 자동 검사와 프론트엔드 개발자 검수를 거칩니다. A[\"UI 생성·변경\"] --> B[\"AI가 Story와 사용처 확인\"] B --> C[\"Story 생성 또는 갱신\"] C --> D[\"상태·Viewport 확인\"] D --> E[\"Storybook Build와 검사\"] E --> F[\"프론트엔드 개발자 검수\"] Story 생성·갱신과 검증 흐름 공통 컴포넌트를 새로 만들면 같은 변경에서 Story를 작성합니다. 사용자에게 노출되는 화면을 새로 만들거나 화면 구조를 변경하면 같은 변경에서 Screen Story를 작성하거나 갱신합니다. 공개 Props 또는 variant를 변경하면 기존 Story도 함께 갱신합니다. 컴포넌트 내부 구현만 바뀌고 공개 상태가 달라지지 않으면 불필요하게 Story를 다시 작성하지 않습니다. 완료 보고에는 추가하거나 변경한 Story, 표현한 상태, 검사 결과와 재현하지 못한 환경 의존성을 포함합니다. 9.3 정기 점검 필요할 때 AI 코딩 도구로 컴포넌트·사용자 화면과 Story의 누락 및 불일치를 조사합니다. 먼저 목록과 근거를 보고하고 승인된 항목만 수정합니다. Story가 필요한 공통 컴포넌트에 Story가 없는가? 사용자에게 노출되는 페이지 또는 화면을 Storybook 사이드바에서 찾을 수 없는가? 화면 이름과 분류만으로 목적을 이해할 수 있는가? 주요 화면의 실제 지원 Viewport와 상태가 빠져 있는가? 삭제되거나 이름이 바뀐 Props와 variant가 Story에 남아 있는가? Story가 존재하지 않는 export나 import 경로를 사용하는가? 실제로 지원하지 않는 상태를 문서화하고 있는가? Storybook 렌더링을 위해 불필요한 제품 코드를 변경했는가? 9.4 AI 요청 예시 다음 요청은 Cline, Claude Code, Codex 등 사용하는 AI 코딩 도구와 관계없이 활용할 수 있습니다. 실제 경로와 프로젝트 검사 명령은 저장소 기준에 맞게 적용합니다. 최초 구축 또는 범위 확대 지정된 공통 UI 경로와 사용자에게 노출되는 Route, Page, Screen 및 기존 Story를 조사해 줘. 각 컴포넌트의 실제 export, 공개 Props와 variant를 확인하고, 각 사용자 화면의 이름, 대표 상태, Viewport와 코드 위치를 확인해 줘. Storybook 등록 대상과 제외 대상을 근거 및 제외 사유와 함께 먼저 보고해 줘. 모든 .tsx 파일을 등록 대상으로 간주하지 말고, 사용자에게 노출되는 화면은 기본 등록 대상으로 분류해 줘. 라우트 파일이 데이터와 조합만 담당하면 실제 화면 UI를 담당하는 컴포넌트를 찾아 대표 Story 대상으로 제안해 줘. 내가 목록을 확인한 뒤 승인한 대상에 대해서만 프로젝트의 기존 Story 형식에 맞춰 작성하고 정적 Storybook Build까지 확인해 줘. 일상적인 UI 변경 이번 변경에서 새로 생성되거나 공개 API가 변경된 공통 컴포넌트와 새로 추가되거나 UI 구조가 변경된 사용자 화면을 확인해 줘. 관련 기존 Story와 실제 사용처를 먼저 확인하고 필요한 Story만 작성하거나 갱신해 줘. 실제 export, Props와 variant만 사용하고 존재하지 않는 상태를 추측하지 마. 컴포넌트는 기본 상태와 실제 variant를, 화면은 대표 상태와 지원 Viewport를 표현하고, 라우터 주소를 몰라도 사이드바에서 목적을 이해하고 찾을 수 있게 분류해 줘. Storybook을 위해 제품 코드에 불필요한 Props, variant, wrapper 또는 Mock을 추가하지 마. 작업 후 정적 Storybook Build와 프로젝트에서 합의된 검사를 실행하고, 변경한 Story, 표현한 상태와 검사 결과를 보고해 줘. 정기 누락 및 불일치 점검 공통 UI 경로, 사용자 노출 Route·Page·Screen과 Storybook Story를 비교해 누락과 불일치를 점검해 줘. Story가 없는 모든 파일을 자동으로 등록하지 말고, 등록 대상, 판단 근거와 제외 사유를 먼저 보고해 줘. 사용자에게 노출되는 화면이 사이드바에서 빠졌거나 화면 이름과 분류만으로 찾기 어려운 경우도 보고해 줘. 삭제되거나 변경된 Props와 variant, 잘못된 import와 export, 빠진 화면 상태와 Viewport, 실제로 지원하지 않는 상태 및 Storybook만을 위한 제품 코드 변경도 확인해 줘. 내가 승인한 항목만 수정하고 정적 Storybook Build와 관련 검사를 실행한 뒤 결과를 보고해 줘.",
    "url": "./../guides/storybook/index.html#section-9"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "Autodocs와 UI 카탈로그",
    "excerpt": "Autodocs를 사용해 Story와 TypeScript 정보에서 컴포넌트 문서를 생성합니다. Props 전체 목록을 별도 Markdown 문서에 중복 작성하지 않습니다. Storybook은 다음 질문의 기준으로 사용합니다. 어떤 공통 컴포넌트가 있는가? 컴포넌트가 어떤 Props와 variant를 제공하는가? 기본 상태와 주요 예외 상태가 어떻게 보이는가? 컴포넌트를 독립적으로 렌더링하고…",
    "content": "7. Autodocs와 UI 카탈로그 Autodocs를 사용해 Story와 TypeScript 정보에서 컴포넌트 문서를 생성합니다. Props 전체 목록을 별도 Markdown 문서에 중복 작성하지 않습니다. Storybook은 다음 질문의 기준으로 사용합니다. 어떤 공통 컴포넌트가 있는가? 컴포넌트가 어떤 Props와 variant를 제공하는가? 기본 상태와 주요 예외 상태가 어떻게 보이는가? 컴포넌트를 독립적으로 렌더링하고 조작할 수 있는가? 어떤 사용자 화면이 있으며 화면별 대표 상태는 무엇인가? 라우터 주소를 몰라도 화면 이름과 서비스 영역으로 UI를 찾을 수 있는가? 화면이 Desktop, Tablet과 Mobile에서 어떻게 보이는가? Autodocs는 주로 컴포넌트의 공개 API를 설명하는 데 사용합니다. Page와 Screen Story는 화면 이름, 대표 상태, Viewport와 필요한 짧은 설명을 중심으로 구성합니다. 업무 목적, 사용 금지 조건이나 접근성 제약처럼 코드와 타입에서 알 수 없는 내용만 추가하고, 자세한 동작은 실제 코드와 사용처를 기준으로 합니다. Autodocs 설정은 Storybook Autodocs 문서 를 따릅니다.",
    "url": "./../guides/storybook/index.html#section-7"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "Figma와 Storybook의 역할",
    "excerpt": "Figma는 컴포넌트와 화면의 시각적 기준 및 디자인 의도를 제공하고 Storybook은 실제 코드로 구현된 컴포넌트와 화면의 렌더링 상태를 제공합니다. @storybook/addon-designs 공식 Embed Frame 데모 의 Story와 Design 패널 검수자는 라우터 주소나 개발용 진입 조건을 알지 못해도 Storybook 사이드바에서 서비스 영역, 화면 이름과 상태를 선택하고…",
    "content": "8. Figma와 Storybook의 역할 Figma는 컴포넌트와 화면의 시각적 기준 및 디자인 의도를 제공하고 Storybook은 실제 코드로 구현된 컴포넌트와 화면의 렌더링 상태를 제공합니다. @storybook/addon-designs 공식 Embed Frame 데모 의 Story와 Design 패널 검수자는 라우터 주소나 개발용 진입 조건을 알지 못해도 Storybook 사이드바에서 서비스 영역, 화면 이름과 상태를 선택하고 실제 구현과 디자인 기준을 함께 확인할 수 있습니다. Figma Main Component의 Description에는 코드 컴포넌트 이름, import 경로와 주요 Props를 기록합니다. 실제 코드 또는 Storybook에 접근할 수 있는 URL이 있으면 Main Component의 Dev resource로 연결합니다. 외부 Storybook URL이 없으면 컴포넌트 이름과 Story title을 기록하고 실제 소스 링크를 우선 연결합니다. Figma Description, Story와 실제 코드가 다르면 실제 코드와 변경 의도를 확인한 뒤 함께 갱신합니다. Figma의 주요 Screen에는 연결되는 Story 이름을 기록하고, 접근 가능한 Storybook URL이 있으면 Dev resource로 연결합니다. Story에는 Figma 파일, Frame 또는 Prototype URL을 연결할 수 있습니다. 특정 Frame을 표시하려면 Figma에서 선택한 Frame의 링크를 복사해 사용합니다. 이 URL에는 해당 Frame의 node-id 가 포함됩니다. Storybook의 Design 탭에서 연결된 Figma Embed를 확인합니다. export const PaymentFailed = { parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/FILE_KEY/...?node-id=120-480', }, }, }; 위 화면은 @storybook/addon-designs 공식 데모를 직접 캡처한 예시입니다. 실제 표시 결과는 Storybook과 Addon 버전, 패널 크기, Figma 파일 권한에 따라 달라질 수 있습니다. Storybook은 Code Connect를 대체하지 않지만 AI 코딩 도구와 개발자가 기존 컴포넌트의 API와 전체 화면 상태를 찾는 실행 가능한 UI 기준으로 사용합니다.",
    "url": "./../guides/storybook/index.html#section-8"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "Story 작성 기준",
    "excerpt": "Story 파일은 컴포넌트 또는 화면 UI 구현 가까이에 둡니다. button.tsx button.stories.tsx 컴포넌트 Story는 실제 컴포넌트의 공개 API를 기준으로 작성합니다. 기본 상태를 작성합니다. 실제로 지원하는 주요 variant와 size를 작성합니다. disabled , loading , error , empty 처럼 컴포넌트가 실제로 소유하는 상태만 작성합니다.…",
    "content": "6. Story 작성 기준 Story 파일은 컴포넌트 또는 화면 UI 구현 가까이에 둡니다. button.tsx button.stories.tsx 컴포넌트 Story는 실제 컴포넌트의 공개 API를 기준으로 작성합니다. 기본 상태를 작성합니다. 실제로 지원하는 주요 variant와 size를 작성합니다. disabled , loading , error , empty 처럼 컴포넌트가 실제로 소유하는 상태만 작성합니다. 중요한 사용자 상호작용은 재현 가능한 경우에만 작성합니다. 존재하지 않는 Props와 상태를 추측하지 않습니다. 내부 구현 세부사항보다 사용자가 선택할 수 있는 공개 API를 보여줍니다. 테스트를 통과시키기 위해 Story를 삭제하거나 검사 대상에서 임의로 제외하지 않습니다. Page와 Screen Story는 다음 기준으로 작성합니다. 라우터 주소를 몰라도 화면의 목적을 알 수 있는 이름을 사용합니다. 기본 화면을 작성하고 실제 제품이 지원하는 loading, empty, error, 권한과 완료 상태를 필요한 만큼 분리합니다. 실제 지원 범위에 맞춰 Desktop, Tablet과 Mobile Viewport에서 레이아웃을 확인합니다. 데이터, Route Parameter와 Provider는 같은 상태를 반복 재현할 수 있는 최소 범위로 제공합니다. 실제 결제, 인증, Backend 처리와 Native App 기능을 Storybook 안에서 완료된 것처럼 모사하지 않습니다. 여러 Route가 동일한 화면을 사용하면 Story를 중복하지 않고 화면 상태 또는 입력값으로 구분합니다. Story의 title , 이름과 분류는 UI의 실제 사용 범위를 드러내야 합니다. UI 원형, 애플리케이션 공통 조합, feature 컴포넌트와 화면이 같은 분류에 무질서하게 섞이지 않도록 합니다.",
    "url": "./../guides/storybook/index.html#section-6"
  },
  {
    "document": "Storybook 운영 가이드",
    "section": "Story 작성 대상과 분류",
    "excerpt": "다음 UI를 Story 작성 대상으로 합니다. apps/app-webview/src/components/ui 의 공통 UI 여러 화면에서 반복되며 독립적으로 상태를 확인할 가치가 있는 feature 컴포넌트 공개 Props, variant 또는 상호작용 상태를 가진 컴포넌트 라우터를 통해 사용자에게 제공되는 페이지와 화면 UI Desktop, Tablet과 Mobile에서 배치가 달라지는 주…",
    "content": "3. Story 작성 대상과 분류 다음 UI를 Story 작성 대상으로 합니다. apps/app-webview/src/components/ui 의 공통 UI 여러 화면에서 반복되며 독립적으로 상태를 확인할 가치가 있는 feature 컴포넌트 공개 Props, variant 또는 상호작용 상태를 가진 컴포넌트 라우터를 통해 사용자에게 제공되는 페이지와 화면 UI Desktop, Tablet과 Mobile에서 배치가 달라지는 주요 화면 실제 화면에서 진입 조건 때문에 확인하기 어려운 loading, empty, error와 권한 상태 사용자에게 노출되는 페이지와 화면은 최소 하나의 대표 Story를 갖는 것을 기본으로 합니다. 라우트 파일이 데이터 조회와 조합만 담당한다면 라우트 파일 자체를 억지로 렌더링하지 않고, 실제 화면 UI를 담당하는 컴포넌트의 Story로 해당 페이지를 대표할 수 있습니다. 다음 항목은 화면 UI가 없거나 동일한 UI를 중복하므로 제외할 수 있습니다. 제외할 때는 대상과 사유를 남깁니다. 한 부모에서만 사용하는 단순 UI와 레이아웃 타입, 상수, utility, helper와 export 전용 파일 API Route, Route Handler, Redirect 전용 Route와 Metadata 파일 경로 Parameter만 다르고 화면 구조와 상태가 동일해 기존 Screen Story로 대표할 수 있는 Route 독립 렌더링을 위해 과도한 Mock이 필요한 내부 구현 실제 재사용이나 독립 검증 필요성이 확인되지 않은 Wrapper Storybook을 위해 사용하지 않는 Props, variant 또는 상태를 새로 만들지 않습니다. Storybook 사이드바는 라우터 경로가 아니라 사람이 이해할 수 있는 UI 이름을 기준으로 구성합니다. 상위 분류는 최소한 Components , Features , Screens 를 구분하고, Screen은 서비스 영역, 화면 이름과 상태가 드러나도록 작성합니다. 실제 분류명은 프로젝트의 정보 구조가 확정된 뒤 일관되게 적용합니다.",
    "url": "./../guides/storybook/index.html#section-3"
  },
  {
    "document": "TypeScript 가이드",
    "section": "문서 목적",
    "excerpt": "이 문서는 Front-End 프로젝트에서 TypeScript와 React를 간결하고 일관되게 사용하는 기준을 제공합니다. 문법이나 상세 설계를 모두 설명하지 않고, 코드 작성과 리뷰에 자주 필요한 규칙을 예시 중심으로 정리합니다. 전체 구조는 Front-End 저장소 구조 기준 , Front-End 기술과 책임은 Front-End 개발 가이드 를 참고합니다. 현재 폴더 구조는 확정안이 아니므…",
    "content": "1. 문서 목적 이 문서는 Front-End 프로젝트에서 TypeScript와 React를 간결하고 일관되게 사용하는 기준을 제공합니다. 문법이나 상세 설계를 모두 설명하지 않고, 코드 작성과 리뷰에 자주 필요한 규칙을 예시 중심으로 정리합니다. 전체 구조는 Front-End 저장소 구조 기준 , Front-End 기술과 책임은 Front-End 개발 가이드 를 참고합니다. 현재 폴더 구조는 확정안이 아니므로 이 문서에서 별도 경로를 고정하지 않습니다. API 계약, 데이터 모델 계층, Runtime Schema와 상태 관리 도구의 상세 규칙은 현재 범위에 포함하지 않으며, 각 설계가 확정된 후 기준을 정합니다.",
    "url": "./../guides/typescript/index.html#section-1"
  },
  {
    "document": "TypeScript 가이드",
    "section": "추후 확정 항목",
    "excerpt": "공통 tsconfig 의 세부 Compiler Option 파일명과 타입명 세부 Convention 배럴 파일과 모듈 경계의 자동 검사 범위 TypeScript 가이드",
    "content": "9. 추후 확정 항목 공통 tsconfig 의 세부 Compiler Option 파일명과 타입명 세부 Convention 배럴 파일과 모듈 경계의 자동 검사 범위 TypeScript 가이드",
    "url": "./../guides/typescript/index.html#section-9"
  },
  {
    "document": "TypeScript 가이드",
    "section": "코드 리뷰 체크리스트",
    "excerpt": "타입이 코드의 의미를 더 명확하게 만드는가? 추론 가능한 타입을 불필요하게 반복하지 않았는가? 기능 전용 타입이 너무 일찍 공통화되지 않았는가? Props와 콜백 이름이 사용 의도를 표현하는가? 기존 shadcn/ui 컴포넌트를 불필요한 Wrapper로 다시 감싸지 않았는가? shadcn/ui 수정 후 키보드·포커스·ARIA 동작을 유지하는가? any , 타입 단언과 Non-null 단언을…",
    "content": "8. 코드 리뷰 체크리스트 타입이 코드의 의미를 더 명확하게 만드는가? 추론 가능한 타입을 불필요하게 반복하지 않았는가? 기능 전용 타입이 너무 일찍 공통화되지 않았는가? Props와 콜백 이름이 사용 의도를 표현하는가? 기존 shadcn/ui 컴포넌트를 불필요한 Wrapper로 다시 감싸지 않았는가? shadcn/ui 수정 후 키보드·포커스·ARIA 동작을 유지하는가? any , 타입 단언과 Non-null 단언을 줄일 수 없는가? Generic과 Utility Type이 원래 코드보다 이해하기 쉬운가? 사용처가 없는 타입 파일이나 Wrapper를 미리 만들지 않았는가?",
    "url": "./../guides/typescript/index.html#section-8"
  },
  {
    "document": "TypeScript 가이드",
    "section": "타입 작성과 배치",
    "excerpt": "3.1 추론 우선 값과 반환 타입이 명확하면 중복해서 작성하지 않습니다. // 권장 const title = \"라운지 이용권\" ; function formatCount ( count : number ) { return ` ${count} 건` ; } // 불필요한 중복 const title : string = \"라운지 이용권\" ; function formatCount ( count : num…",
    "content": "3. 타입 작성과 배치 3.1 추론 우선 값과 반환 타입이 명확하면 중복해서 작성하지 않습니다. // 권장 const title = \"라운지 이용권\" ; function formatCount ( count : number ) { return ` ${count} 건` ; } // 불필요한 중복 const title : string = \"라운지 이용권\" ; function formatCount ( count : number ): string { return ` ${count} 건` ; } 공개 함수의 반환 구조가 복잡하거나 변경 영향을 명확히 보여야 하면 반환 타입을 작성할 수 있습니다. type TicketSummary = { availableCount : number ; usedCount : number ; }; export function summarizeTickets ( ): TicketSummary { return { availableCount : 2 , usedCount : 1 , }; } 3.2 사용하는 곳 가까이에서 시작 한 컴포넌트에서만 사용하는 Props는 같은 파일에 둡니다. type TicketCardProps = { title : string ; onSelect : () => void ; }; export function TicketCard ( { title, onSelect }: TicketCardProps ) { return < button onClick = {onSelect} > {title} </ button > ; } 타입 파일과 공통 폴더는 미리 만들지 않습니다. 실제로 여러 파일에서 같은 의미로 사용되고, 별도 관리가 더 이해하기 쉬울 때 분리합니다. 3.3 공통화 기준 다음 조건을 만족할 때 공통 타입으로 분리합니다. 둘 이상의 실제 사용처가 있습니다. 사용처에서 의미와 변경 이유가 같습니다. 공통화 후 코드가 더 짧고 이해하기 쉽습니다. 기능별 예외를 계속 추가하지 않아도 됩니다. // 권장: 여러 선택 UI에서 같은 의미로 사용하는 타입 export type SelectOption <T extends string = string > = { label : string ; value : T; }; // 피해야 함: 관련 없는 타입을 한곳에 모음 type CommonType = { id ?: string ; label ?: string ; status ?: string ; metadata ?: unknown ; };",
    "url": "./../guides/typescript/index.html#section-3"
  },
  {
    "document": "TypeScript 가이드",
    "section": "타입 표현 방법",
    "excerpt": "4.1 정해진 값은 Union으로 제한 가능한 값이 정해져 있으면 넓은 string 보다 Literal Union을 사용합니다. type TicketStatus = \"available\" | \"used\" | \"expired\" ; type TicketBadgeProps = { status : TicketStatus ; }; 4.2 함께 존재할 수 없는 상태 구분 상태에 따라 필요한 값이 다르면…",
    "content": "4. 타입 표현 방법 4.1 정해진 값은 Union으로 제한 가능한 값이 정해져 있으면 넓은 string 보다 Literal Union을 사용합니다. type TicketStatus = \"available\" | \"used\" | \"expired\" ; type TicketBadgeProps = { status : TicketStatus ; }; 4.2 함께 존재할 수 없는 상태 구분 상태에 따라 필요한 값이 다르면 Optional 속성을 나열하기보다 판별 가능한 Union을 사용합니다. type SubmitState = | { status : \"idle\" } | { status : \"submitting\" } | { status : \"success\" } | { status : \"error\" ; message : string }; // 피해야 함: 불가능한 조합도 허용함 type SubmitState = { loading ?: boolean ; success ?: boolean ; errorMessage ?: string ; }; 4.3 작은 타입 조합 실제로 반복되는 속성만 작은 단위로 분리해 조합합니다. type Labeled = { label : string ; }; type Selectable = { selected : boolean ; onSelect : () => void ; }; type FilterItemProps = Labeled & Selectable ; 하나의 사용처만 있거나 조합 후 의미가 더 어려워지면 하나의 타입으로 작성합니다. 4.4 type 과 interface Union, Utility Type과 함수 타입은 type 을 사용합니다. 객체 형태는 type 과 interface 모두 사용할 수 있습니다. 동일한 역할에 두 방식을 섞기보다 주변 코드와 일관성을 유지합니다.",
    "url": "./../guides/typescript/index.html#section-4"
  },
  {
    "document": "TypeScript 가이드",
    "section": "피해야 할 타입 사용",
    "excerpt": "6.1 any 보다 unknown 형태를 알 수 없는 값은 unknown 으로 받고 사용 전에 확인합니다. function getErrorMessage ( error : unknown ) { if (error instanceof Error ) return error. message ; return \"알 수 없는 오류가 발생했습니다.\" ; } 모든 API 응답을 unknown 으로 다시 검증한…",
    "content": "6. 피해야 할 타입 사용 6.1 any 보다 unknown 형태를 알 수 없는 값은 unknown 으로 받고 사용 전에 확인합니다. function getErrorMessage ( error : unknown ) { if (error instanceof Error ) return error. message ; return \"알 수 없는 오류가 발생했습니다.\" ; } 모든 API 응답을 unknown 으로 다시 검증한다는 의미는 아닙니다. 사용자 입력, JSON 파싱, Storage와 Bridge처럼 실제로 형태를 신뢰할 수 없는 경계에 적용합니다. 6.2 타입 단언 최소화 다음 문법은 타입 오류를 숨기는 용도로 사용하지 않습니다. any 근거 없는 as Non-null 단언 ! @ts-ignore // 피해야 함 type User = { name : string ; }; const user = value as User ; const name = user!. name ; 불가피한 예외는 영향 범위를 좁히고 이유와 제거 조건을 남깁니다. 6.3 불필요한 Generic 방지 Generic은 입력과 출력의 타입 관계를 유지할 때 사용합니다. function first<T>( items : readonly T[]) { return items[ 0 ]; } // 피해야 함 type User = { name : string ; }; function getUserName<T extends User >( user : T) { return user. name ; } // 권장 function getUserName ( user : User ) { return user. name ; }",
    "url": "./../guides/typescript/index.html#section-6"
  },
  {
    "document": "TypeScript 가이드",
    "section": "핵심 원칙",
    "excerpt": "추론 가능한 타입은 TypeScript에 맡깁니다. Props, 함수 입력과 모듈 경계처럼 중요한 계약은 타입으로 표현합니다. 타입은 사용하는 코드 가까이에서 시작합니다. 의미와 변경 이유가 같은 사용처가 생겼을 때만 공통화합니다. 작은 타입을 조합하고, 사용처가 없는 추상화는 만들지 않습니다. any , 근거 없는 타입 단언과 불필요한 Generic을 피합니다.",
    "content": "2. 핵심 원칙 추론 가능한 타입은 TypeScript에 맡깁니다. Props, 함수 입력과 모듈 경계처럼 중요한 계약은 타입으로 표현합니다. 타입은 사용하는 코드 가까이에서 시작합니다. 의미와 변경 이유가 같은 사용처가 생겼을 때만 공통화합니다. 작은 타입을 조합하고, 사용처가 없는 추상화는 만들지 않습니다. any , 근거 없는 타입 단언과 불필요한 Generic을 피합니다.",
    "url": "./../guides/typescript/index.html#section-2"
  },
  {
    "document": "TypeScript 가이드",
    "section": "Import와 공개 타입",
    "excerpt": "타입만 가져올 때는 import type 을 사용합니다. import type { Ticket } from \"./ticket.types\" ; 가까운 파일은 상대 경로를 사용하고, 기능 또는 공통 영역을 가로지를 때 @/ alias를 사용할 수 있습니다. index.ts 는 안정된 공개 API가 있는 영역에서만 선택적으로 사용합니다. 모든 타입을 다시 내보내는 대형 배럴 파일은 만들지 않습니다…",
    "content": "7. Import와 공개 타입 타입만 가져올 때는 import type 을 사용합니다. import type { Ticket } from \"./ticket.types\" ; 가까운 파일은 상대 경로를 사용하고, 기능 또는 공통 영역을 가로지를 때 @/ alias를 사용할 수 있습니다. index.ts 는 안정된 공개 API가 있는 영역에서만 선택적으로 사용합니다. 모든 타입을 다시 내보내는 대형 배럴 파일은 만들지 않습니다.",
    "url": "./../guides/typescript/index.html#section-7"
  },
  {
    "document": "TypeScript 가이드",
    "section": "React에서 타입 활용",
    "excerpt": "5.1 Props는 컴포넌트의 사용법을 표현 Props 이름은 DOM 동작보다 사용자의 의도를 나타냅니다. type ReservationCardProps = { title : string ; onConfirm : () => void ; onCancel : () => void ; }; // 피해야 함 type ReservationCardProps = { text : string ; handle…",
    "content": "5. React에서 타입 활용 5.1 Props는 컴포넌트의 사용법을 표현 Props 이름은 DOM 동작보다 사용자의 의도를 나타냅니다. type ReservationCardProps = { title : string ; onConfirm : () => void ; onCancel : () => void ; }; // 피해야 함 type ReservationCardProps = { text : string ; handleButtonClick : ( value : unknown ) => void ; }; 5.2 DOM Event보다 필요한 값을 전달 공통 입력 컴포넌트는 DOM Event를 외부로 그대로 전달하지 않고 사용처가 필요한 값을 전달합니다. type SearchInputProps = { value : string ; onValueChange : ( value : string ) => void ; }; export function SearchInput ( { value, onValueChange }: SearchInputProps ) { return ( < input type = \"search\" value = {value} onChange = {(event) => onValueChange(event.currentTarget.value)} /> ); } const [keyword, setKeyword] = useState ( \"\" ); < SearchInput value = {keyword} onValueChange = {setKeyword} /> ; 5.3 shadcn/ui 사용 shadcn/ui는 외부 라이브러리를 감싸서 사용하는 방식이 아니라, 프로젝트가 생성된 컴포넌트 소스를 소유하고 수정하는 방식으로 사용합니다. 설치된 컴포넌트와 Props를 먼저 그대로 사용합니다. 프로젝트 전체에 적용할 디자인과 동작은 해당 UI 원형에서 수정합니다. 특정 기능의 조합과 업무 동작은 기능 코드 가까이에 둡니다. 단순히 이름이나 스타일을 바꾸기 위한 공통 Wrapper는 만들지 않습니다. 수정할 때 기존 사용처와 키보드·포커스·ARIA 동작을 함께 확인합니다. import { Button } from \"@/components/ui/button\" ; export function TicketActions ( ) { return ( < div > < Button variant = \"outline\" > 취소 </ Button > < Button > 예약하기 </ Button > </ div > ); } 컴포넌트 Props가 필요하면 같은 타입을 다시 작성하지 않고 실제 컴포넌트에서 가져옵니다. import type { ComponentProps } from \"react\" ; import { Button } from \"@/components/ui/button\" ; type SubmitButtonProps = Omit < ComponentProps < typeof Button >, \"type\" > & { isSubmitting ?: boolean ; }; export function SubmitButton ( { isSubmitting = false , disabled, children, ...buttonProps }: SubmitButtonProps ) { return ( < Button { ...buttonProps } type = \"submit\" disabled = {disabled || isSubmitting } aria-busy = {isSubmitting} > {isSubmitting ? \"처리 중\" : children} </ Button > ); } SubmitButton 처럼 반복되는 동작이 있을 때만 Wrapper로 분리합니다. 한 화면에서만 필요하면 기존 Button 을 직접 사용합니다. // 피해야 함: 기존 Props를 다시 정의하는 의미 없는 Wrapper type CommonButtonProps = { text : string ; color ?: string ; onClick ?: () => void ; }; Variant가 프로젝트 전체에서 반복되면 Wrapper를 추가하기보다 shadcn/ui 컴포넌트의 원본 Variant를 확장합니다. 한 화면의 스타일 차이는 className 과 cn 으로 처리하고, 반복되는 Variant 조합이 확인된 경우에만 cva 로 이동합니다. Dialog, Select와 같은 복합 컴포넌트는 설치된 구현과 공식 문서의 구성 순서를 따릅니다. 이동은 Link, 실행은 Button처럼 HTML 의미를 유지하며, 링크를 버튼처럼 표시해야 할 때는 설치한 shadcn/ui 구현이 제공하는 조합 방식이나 스타일 Helper를 사용합니다. 참고: shadcn/ui 공식 문서 5.4 공통 타입을 React에서 사용 공통 타입은 컴포넌트의 구체적인 사용법을 단순하게 만들 때 사용합니다. type SelectFieldProps <T extends string > = { options : readonly SelectOption <T>[]; value : T; onValueChange : ( value : T ) => void ; }; export function SelectField <T extends string >({ options, value, onValueChange, }: SelectFieldProps <T>) { return ( < select value = {value} onChange = {(event) => { const selected = options.find( (option) => option.value === event.currentTarget.value, ); if (selected) onValueChange(selected.value); }} > {options.map((option) => ( < option key = {option.value} value = {option.value} > {option.label} </ option > ))} </ select > ); } type TicketFilter = \"all\" | \"available\" | \"used\" ; const ticketFilterOptions : readonly SelectOption < TicketFilter >[] = [ { label : \"전체\" , value : \"all\" }, { label : \"사용 가능\" , value : \"available\" }, { label : \"사용 완료\" , value : \"used\" }, ]; const [filter, setFilter] = useState< TicketFilter >( \"all\" ); < SelectField options = {ticketFilterOptions} value = {filter} onValueChange = {setFilter} /> ; Generic이 단순한 Props보다 이해하기 어렵거나 하나의 사용처에만 필요하면 구체적인 타입을 사용합니다.",
    "url": "./../guides/typescript/index.html#section-5"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "문서 목적",
    "excerpt": "이 문서는 여러 UI 영역에서 공유하는 클라이언트 상태를 Zustand로 간결하게 관리하는 기준을 제공합니다. Zustand를 모든 상태의 기본 도구로 사용하지 않고, React 지역 상태만으로 관리하기 어려운 UI 상태에 선택적으로 사용합니다. 서버 상태는 TanStack Query, 폼 입력과 제출 상태는 React Hook Form, 주소로 공유하거나 복원할 상태는 URL을 우선 검토합…",
    "content": "1. 문서 목적 이 문서는 여러 UI 영역에서 공유하는 클라이언트 상태를 Zustand로 간결하게 관리하는 기준을 제공합니다. Zustand를 모든 상태의 기본 도구로 사용하지 않고, React 지역 상태만으로 관리하기 어려운 UI 상태에 선택적으로 사용합니다. 서버 상태는 TanStack Query, 폼 입력과 제출 상태는 React Hook Form, 주소로 공유하거나 복원할 상태는 URL을 우선 검토합니다. 전체 상태 도구 선택 기준은 Front-End 개발 가이드 를 따릅니다. Store와 React Props의 타입 작성은 TypeScript 가이드 를 따릅니다.",
    "url": "./../guides/ui/zustand.html#section-1"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "참고 문서",
    "excerpt": "Zustand 공식 소개 Zustand TypeScript 가이드 Zustand Next.js 가이드 useShallow 가이드 Store Reset 가이드 Persist Middleware Zustand UI 상태 관리 가이드",
    "content": "13. 참고 문서 Zustand 공식 소개 Zustand TypeScript 가이드 Zustand Next.js 가이드 useShallow 가이드 Store Reset 가이드 Persist Middleware Zustand UI 상태 관리 가이드",
    "url": "./../guides/ui/zustand.html#section-13"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "추후 확정 항목",
    "excerpt": "Store 분리 단위와 파일명 Convention App Router의 Provider 및 요청별 Store 적용 범위 Persist 허용 대상과 Hydration 처리 방식 Devtools 적용 환경과 Middleware 사용 기준 Selector 공통화와 테스트 범위",
    "content": "12. 추후 확정 항목 Store 분리 단위와 파일명 Convention App Router의 Provider 및 요청별 Store 적용 범위 Persist 허용 대상과 Hydration 처리 방식 Devtools 적용 환경과 Middleware 사용 기준 Selector 공통화와 테스트 범위",
    "url": "./../guides/ui/zustand.html#section-12"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "코드 리뷰 체크리스트",
    "excerpt": "React 지역 상태로 충분한데 Zustand를 사용하지 않았는가? 서버·폼·URL 상태를 Store에 복제하지 않았는가? 컴포넌트가 필요한 값과 Action만 Selector로 구독하는가? 상태 변경 Action의 이름이 의도를 표현하는가? 기존 상태에서 계산할 수 있는 값을 중복 저장하지 않았는가? 하나의 Store에 변경 이유가 다른 상태가 섞이지 않았는가? 사용자 전환이나 기능 종료…",
    "content": "11. 코드 리뷰 체크리스트 React 지역 상태로 충분한데 Zustand를 사용하지 않았는가? 서버·폼·URL 상태를 Store에 복제하지 않았는가? 컴포넌트가 필요한 값과 Action만 Selector로 구독하는가? 상태 변경 Action의 이름이 의도를 표현하는가? 기존 상태에서 계산할 수 있는 값을 중복 저장하지 않았는가? 하나의 Store에 변경 이유가 다른 상태가 섞이지 않았는가? 사용자 전환이나 기능 종료 시 필요한 상태를 초기화하는가? Persist가 실제 요구보다 넓게 적용되지 않았는가? shadcn/ui의 접근성과 기본 동작을 유지하는가?",
    "url": "./../guides/ui/zustand.html#section-11"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "피해야 할 패턴",
    "excerpt": "// 서버 데이터를 Zustand에 복제 const useTicketStore = create ( () => ({ tickets : [], isLoading : false , })); // 모든 UI 상태를 하나의 Store에 추가 type GlobalUiStore = { menuOpen : boolean ; dialogOpen : boolean ; formValues : Record < s…",
    "content": "10. 피해야 할 패턴 // 서버 데이터를 Zustand에 복제 const useTicketStore = create ( () => ({ tickets : [], isLoading : false , })); // 모든 UI 상태를 하나의 Store에 추가 type GlobalUiStore = { menuOpen : boolean ; dialogOpen : boolean ; formValues : Record < string , unknown >; tickets : unknown []; }; // 컴포넌트가 Store 전체를 구독 const state = useOverlayStore (); 다음 패턴도 피합니다. Store 외부에서 setState 를 반복 호출해 상태 변경 경로를 숨기는 방식 단순 상태에 Slice, Middleware와 Selector Factory를 미리 추가하는 방식 모든 Store에 Persist와 Devtools를 일괄 적용하는 방식 UI 상태를 URL, Query Cache 또는 Form 상태와 양방향으로 중복 동기화하는 방식",
    "url": "./../guides/ui/zustand.html#section-10"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "핵심 원칙",
    "excerpt": "React 지역 상태로 해결되지 않을 때 Store를 만듭니다. Store는 UI 책임과 수명이 같은 상태만 포함합니다. 컴포넌트는 필요한 상태와 Action만 Selector로 구독합니다. 상태 변경은 의미가 드러나는 Action으로 표현합니다. 서버 상태와 폼 상태를 Zustand에 복제하지 않습니다. 사용자 전환이나 화면 종료 시 남으면 안 되는 상태는 초기화합니다. Persist와 M…",
    "content": "3. 핵심 원칙 React 지역 상태로 해결되지 않을 때 Store를 만듭니다. Store는 UI 책임과 수명이 같은 상태만 포함합니다. 컴포넌트는 필요한 상태와 Action만 Selector로 구독합니다. 상태 변경은 의미가 드러나는 Action으로 표현합니다. 서버 상태와 폼 상태를 Zustand에 복제하지 않습니다. 사용자 전환이나 화면 종료 시 남으면 안 되는 상태는 초기화합니다. Persist와 Middleware는 실제 요구가 확인된 후 추가합니다.",
    "url": "./../guides/ui/zustand.html#section-3"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "Next.js App Router 기준",
    "excerpt": "Zustand Store를 사용하는 컴포넌트는 Client Component로 작성합니다. React Server Component에서 Store를 읽거나 수정하지 않습니다. 초기 상태는 서버와 클라이언트에서 다르게 계산하지 않습니다. 요청 또는 사용자별 데이터를 전역 Module Store에 저장하지 않습니다. TBD App Router에서 Store를 Module Hook으로 사용할 범위…",
    "content": "8. Next.js App Router 기준 Zustand Store를 사용하는 컴포넌트는 Client Component로 작성합니다. React Server Component에서 Store를 읽거나 수정하지 않습니다. 초기 상태는 서버와 클라이언트에서 다르게 계산하지 않습니다. 요청 또는 사용자별 데이터를 전역 Module Store에 저장하지 않습니다. TBD App Router에서 Store를 Module Hook으로 사용할 범위와 요청별 Provider를 적용할 범위는 SSR·Hydration 및 Layout 경계가 확정된 후 결정합니다.",
    "url": "./../guides/ui/zustand.html#section-8"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "Persist 사용",
    "excerpt": "UI 상태는 새로고침 시 초기화되는 것을 기본으로 합니다. 단순한 메뉴·Dialog·Toast 상태를 Persist하지 않습니다. 인증 토큰, 결제 정보와 개인정보를 Persist Store에 저장하지 않습니다. Persist가 필요하면 저장할 필드만 선택합니다. 저장 구조가 변경될 가능성이 있으면 Version과 Migration을 함께 검토합니다. Hydration 전후의 화면 차이로 인…",
    "content": "9. Persist 사용 UI 상태는 새로고침 시 초기화되는 것을 기본으로 합니다. 단순한 메뉴·Dialog·Toast 상태를 Persist하지 않습니다. 인증 토큰, 결제 정보와 개인정보를 Persist Store에 저장하지 않습니다. Persist가 필요하면 저장할 필드만 선택합니다. 저장 구조가 변경될 가능성이 있으면 Version과 Migration을 함께 검토합니다. Hydration 전후의 화면 차이로 인한 UI 깜빡임과 오류를 확인합니다. TBD Persist 허용 대상, Storage, Key 이름, Version, Migration과 Hydration 처리 기준은 실제 유지 요구가 확인된 후 결정합니다.",
    "url": "./../guides/ui/zustand.html#section-9"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "React에서 Store 사용",
    "excerpt": "5.1 필요한 값만 구독 컴포넌트는 Store 전체가 아니라 사용하는 값만 구독합니다. \"use client\" ; import { Button } from \"@/components/ui/button\" ; import { useNavigationUiStore } from \"./navigation-ui.store\" ; export function MobileMenuButton ( ) { cons…",
    "content": "5. React에서 Store 사용 5.1 필요한 값만 구독 컴포넌트는 Store 전체가 아니라 사용하는 값만 구독합니다. \"use client\" ; import { Button } from \"@/components/ui/button\" ; import { useNavigationUiStore } from \"./navigation-ui.store\" ; export function MobileMenuButton ( ) { const isOpen = useNavigationUiStore ( ( state ) => state. isMobileMenuOpen ); const toggleMenu = useNavigationUiStore ( ( state ) => state. toggleMobileMenu ); return ( < Button type = \"button\" variant = \"outline\" aria-expanded = {isOpen} onClick = {toggleMenu} > 메뉴 </ Button > ); } // 피해야 함: Store의 모든 변경을 구독함 const store = useNavigationUiStore (); 5.2 여러 값을 함께 선택 여러 값을 객체로 묶어 선택해야 할 때는 실제 렌더링 문제가 있는 경우 useShallow 를 사용합니다. import { useShallow } from \"zustand/react/shallow\" ; const { isOpen, closeMenu } = useNavigationUiStore ( useShallow ( ( state ) => ({ isOpen : state. isMobileMenuOpen , closeMenu : state. closeMobileMenu , })), ); 값을 하나씩 선택하는 코드가 충분히 명확하면 useShallow 를 미리 적용하지 않습니다. 5.3 파생 값은 Selector에서 계산 기존 상태에서 계산할 수 있는 값은 Store에 중복 저장하지 않습니다. const isNavigationVisible = useNavigationUiStore ( ( state ) => state. isMobileMenuOpen , ); // 피해야 함: 같은 의미를 가진 값을 함께 저장함 type NavigationUiState = { isMobileMenuOpen : boolean ; isNavigationVisible : boolean ; };",
    "url": "./../guides/ui/zustand.html#section-5"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "shadcn/ui와 함께 사용",
    "excerpt": "Dialog가 한 컴포넌트 안에서 열리고 닫히면 React 지역 상태를 사용합니다. 서로 떨어진 여러 컴포넌트가 같은 Dialog를 열거나 닫아야 할 때만 Zustand를 검토합니다. import { create } from \"zustand\" ; type DialogName = \"ticket-detail\" | \"reservation-cancel\" ; type OverlayStore = { a…",
    "content": "6. shadcn/ui와 함께 사용 Dialog가 한 컴포넌트 안에서 열리고 닫히면 React 지역 상태를 사용합니다. 서로 떨어진 여러 컴포넌트가 같은 Dialog를 열거나 닫아야 할 때만 Zustand를 검토합니다. import { create } from \"zustand\" ; type DialogName = \"ticket-detail\" | \"reservation-cancel\" ; type OverlayStore = { activeDialog : DialogName | null ; openDialog : ( dialog : DialogName ) => void ; closeDialog : () => void ; }; export const useOverlayStore = create< OverlayStore >()( ( set ) => ({ activeDialog : null , openDialog : ( activeDialog ) => set ({ activeDialog }), closeDialog : () => set ({ activeDialog : null }), })); Dialog를 여는 컴포넌트는 Action만 구독합니다. import { Button } from \"@/components/ui/button\" ; import { useOverlayStore } from \"./overlay.store\" ; export function TicketDetailButton ( ) { const openDialog = useOverlayStore ( ( state ) => state. openDialog ); return ( < Button onClick = {() => openDialog(\"ticket-detail\")}> 이용권 상세 </ Button > ); } Dialog 컴포넌트는 자신의 열림 상태와 닫기 Action만 구독합니다. import { Dialog , DialogContent , DialogHeader , DialogTitle , } from \"@/components/ui/dialog\" ; import { useOverlayStore } from \"./overlay.store\" ; export function TicketDetailDialog ( ) { const isOpen = useOverlayStore ( ( state ) => state. activeDialog === \"ticket-detail\" , ); const closeDialog = useOverlayStore ( ( state ) => state. closeDialog ); return ( < Dialog open = {isOpen} onOpenChange = {(open) => { if (!open) closeDialog(); }} > < DialogContent > < DialogHeader > < DialogTitle > 이용권 상세 </ DialogTitle > </ DialogHeader > </ DialogContent > </ Dialog > ); } shadcn/ui의 Focus, Keyboard와 ARIA 동작은 유지하고, Zustand는 open 상태와 Action의 공유에만 사용합니다.",
    "url": "./../guides/ui/zustand.html#section-6"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "Store 분리와 초기화",
    "excerpt": "모든 UI 상태를 하나의 거대한 Store에 넣지 않습니다. Store 이름은 useNavigationUiStore , useOverlayStore 처럼 책임을 드러냅니다. 상태의 사용처와 수명이 같을 때만 같은 Store에 둡니다. 사용처가 생기기 전에 Store 파일이나 폴더를 미리 만들지 않습니다. 로그아웃, 사용자 전환 또는 기능 종료 시 남으면 안 되는 상태는 Reset Action…",
    "content": "7. Store 분리와 초기화 모든 UI 상태를 하나의 거대한 Store에 넣지 않습니다. Store 이름은 useNavigationUiStore , useOverlayStore 처럼 책임을 드러냅니다. 상태의 사용처와 수명이 같을 때만 같은 Store에 둡니다. 사용처가 생기기 전에 Store 파일이나 폴더를 미리 만들지 않습니다. 로그아웃, 사용자 전환 또는 기능 종료 시 남으면 안 되는 상태는 Reset Action으로 초기화합니다. TBD Store의 최종 분리 단위와 파일 배치는 실제 UI 구조와 공유 상태가 확인된 후 결정합니다.",
    "url": "./../guides/ui/zustand.html#section-7"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "Store 작성",
    "excerpt": "\"use client\" ; import { create } from \"zustand\" ; type NavigationUiState = { isMobileMenuOpen : boolean ; }; type NavigationUiActions = { openMobileMenu : () => void ; closeMobileMenu : () => void ; toggleMobileMenu : ()…",
    "content": "4. Store 작성 \"use client\" ; import { create } from \"zustand\" ; type NavigationUiState = { isMobileMenuOpen : boolean ; }; type NavigationUiActions = { openMobileMenu : () => void ; closeMobileMenu : () => void ; toggleMobileMenu : () => void ; resetNavigationUi : () => void ; }; type NavigationUiStore = NavigationUiState & NavigationUiActions ; const initialState : NavigationUiState = { isMobileMenuOpen : false , }; export const useNavigationUiStore = create< NavigationUiStore >()( ( set ) => ({ ...initialState, openMobileMenu : () => set ({ isMobileMenuOpen : true }), closeMobileMenu : () => set ({ isMobileMenuOpen : false }), toggleMobileMenu : () => set ( ( state ) => ({ isMobileMenuOpen : !state. isMobileMenuOpen })), resetNavigationUi : () => set (initialState), })); 이 예시는 요청별 데이터를 포함하지 않는 Client UI Store를 가정합니다. Next.js의 최종 Store 생성 범위는 8장의 TBD 기준을 따릅니다. Action은 setOpen(value) 처럼 구현 세부사항만 드러내기보다 openMobileMenu , closeMobileMenu 처럼 사용자 동작과 의도를 표현합니다.",
    "url": "./../guides/ui/zustand.html#section-4"
  },
  {
    "document": "Zustand UI 상태 관리 가이드",
    "section": "Zustand 사용 기준",
    "excerpt": "상태 도구보다 상태의 소유자와 수명을 먼저 판단합니다. 상태 기본 선택 한 컴포넌트 또는 가까운 트리의 UI 상태 React 지역 상태 주소로 공유·복원할 상태 URL 상태 검토 폼 입력과 제출 상태 React Hook Form 서버에서 조회·변경하는 데이터 TanStack Query 서로 떨어진 여러 UI가 공유하는 클라이언트 상태 Zustand Zustand를 검토하는 경우 Header와…",
    "content": "2. Zustand 사용 기준 상태 도구보다 상태의 소유자와 수명을 먼저 판단합니다. 상태 기본 선택 한 컴포넌트 또는 가까운 트리의 UI 상태 React 지역 상태 주소로 공유·복원할 상태 URL 상태 검토 폼 입력과 제출 상태 React Hook Form 서버에서 조회·변경하는 데이터 TanStack Query 서로 떨어진 여러 UI가 공유하는 클라이언트 상태 Zustand Zustand를 검토하는 경우 Header와 Sidebar가 공유하는 메뉴 열림 상태 서로 떨어진 컴포넌트가 제어하는 공통 Dialog 상태 여러 UI 영역이 함께 사용하는 일시적인 화면 모드 Zustand에 저장하지 않는 상태 TanStack Query가 관리하는 서버 데이터와 요청 상태 React Hook Form이 관리하는 폼 값과 필드 오류 URL로 공유하거나 복원해야 하는 검색·필터 조건 한 컴포넌트 안에서 끝나는 Toggle과 Dialog 상태 기존 상태에서 계산할 수 있는 파생 값",
    "url": "./../guides/ui/zustand.html#section-2"
  }
];
