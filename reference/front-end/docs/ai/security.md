# Front-End 보안과 개인정보 핵심 규칙

> 기준 원본: [Front-End 보안과 개인정보 가이드](../../../../security_guide/index.html)
>
> 이 문서는 AI 코딩용 요약입니다. 인증, 배포, WebView 또는 개인정보의 세부 판단이 필요하면 기준 원본과 실제 프로젝트 설정을 확인합니다.

## 작업 전 확인

- 사용자 요청에 인증, 회원, 권한, 외부 HTML·URL, 파일, WebView Bridge, 저장소, 로그, 분석 SDK, 환경변수 또는 새 package가 포함되는지 확인합니다.
- 관련 실제 소스와 설치 package를 먼저 확인합니다.
- API·인증·CSP·Cookie·Origin과 개인정보 정책이 없으면 임의로 확정하지 않고 `TBD`로 분리합니다.
- Front-end 보안 작업을 Backend, App과 인프라 전체 구현 계획으로 확대하지 않습니다.
- 이 문서의 Backend·Native App·배포 책임은 Front-end가 확인해야 할 외부 보안 조건입니다. 실제 구현 여부, 담당 주체와 제공 범위는 승인되기 전까지 `TBD`이며 완료된 것으로 표현하지 않습니다.

## 필수 원칙

- Browser와 WebView Client는 신뢰 경계가 아닙니다. 인증, 권한, 소유권과 업무 규칙은 Backend가 최종 검증합니다.
- API, URL, Storage, 외부 SDK와 Bridge 응답은 `unknown`에서 Runtime 검증합니다.
- 일반 문자열은 JSX로 렌더링하고 `dangerouslySetInnerHTML`, `innerHTML`, `eval`, 문자열 기반 Script 실행을 추가하지 않습니다.
- 사용자 또는 서버 HTML이 반드시 필요할 때만 승인된 Sanitizer와 허용 Tag·Attribute·URL Scheme을 결정합니다.
- URL, Redirect와 Deep Link는 URL Parser와 허용 Origin·Host·Scheme·Route로 검증합니다.
- 인증 token, Session ID, 비밀번호, 인증번호, 카드정보와 불필요한 개인정보를 URL, Web Storage, Persist Store, Bridge와 로그에 넣지 않습니다.
- `NEXT_PUBLIC_` 값과 Client Bundle에 들어간 환경값은 공개 정보로 취급합니다.
- UI에서 숨긴 Menu, Button과 Route를 권한 통제로 표현하지 않습니다.
- 모든 `401`을 즉시 로그아웃으로 처리하지 않고 `403`과 구분합니다.
- 로그아웃과 사용자 전환 뒤 이전 사용자의 Query Cache와 Persist 상태를 정리합니다.
- Cookie 인증이면 CSRF, SameSite, Secure, HttpOnly, Domain, CORS와 Origin 검증 계약을 확인합니다.
- Client의 파일 형식·크기 검사는 UX이며 Backend 검증을 대신하지 않습니다.
- Bridge는 승인된 Method만 Adapter로 노출하고 입력·응답·Version·요청 ID를 검증합니다.
- CSP는 추가 방어 계층이며 XSS 방어를 대신하지 않습니다. 실제 값은 배포 구조 확정 뒤 결정합니다.

## React와 Next.js 보안 업데이트

- 프로젝트 생성 시 React와 Next.js의 최신 안정 Version을 사용합니다.
- `package.json`, Lock File, 실제 설치 Version과 배포 Version을 함께 확인합니다.
- React와 Next.js 공식 보안 공지를 확인하고 RCE, 인증 우회와 정보 노출 같은 고위험 취약점은 최신 지원 보안 Version으로 업데이트한 뒤 검증하고 재배포합니다.
- WAF, 입력 검증과 CSP가 Framework의 공식 Patch를 대신한다고 판단하지 않습니다.
- 취약한 Version이 외부에 노출됐다면 로그와 영향 범위를 확인하고 환경변수, API Key와 Session Secret 교체 필요성을 보고합니다.
- React2Shell은 React Server Components와 Next.js App Router의 Framework 취약점 대응 사례로만 사용합니다. 고정된 과거 Version 목록을 신뢰하지 않고 공식 공지의 현재 영향 범위와 수정 Version을 확인합니다.

## 코드 리뷰에서 찾을 패턴

- `dangerouslySetInnerHTML`, `innerHTML`, `outerHTML`, `document.write`, `eval`
- 검증되지 않은 값을 `href`, `src`, `window.location`, `router.push`, `open`과 Deep Link에 전달
- `response.json() as Type`, Bridge Generic 반환과 Storage 값 단언
- `localStorage`, `sessionStorage`, IndexedDB와 Zustand Persist의 자격 증명·개인정보
- `NEXT_PUBLIC_`, `next.config`와 Client Component의 Secret
- 요청·응답, Form, Header, Cookie와 Bridge Payload 전체 로그
- Client 역할값만 확인하는 권한 분기
- 모든 `401` 전역 logout, `401`과 `403` 동일 처리
- 로그아웃 후 사용자 범위 Cache 미정리
- 범용 Bridge Method 또는 JavaScript 문자열 실행
- 사용자 입력 파일명·경로와 Client MIME만 신뢰하는 업로드
- 이유 없이 추가된 package, Lock File 누락과 Audit 무시
- React·Next.js 공식 보안 공지 미확인, 선언·설치·배포 Version 불일치와 Patch 없는 임시 완화
- CSP 오류 해결을 위한 `unsafe-inline`, `unsafe-eval`과 넓은 Origin 허용

## 변경 후 보고

- 확인한 보안 경계와 근거가 된 파일
- 변경된 데이터 흐름과 저장 위치
- Backend·App·배포 담당자에게 확인할 계약
- 실행한 Typecheck, Lint, Test, Build와 실제 Browser·WebView 확인
- 수행하지 못한 보안·통합 검증과 남은 위험

문제가 없다고 단정하지 않습니다. 검토 범위 밖의 설정과 서버 검증은 확인하지 못한 항목으로 남깁니다.
