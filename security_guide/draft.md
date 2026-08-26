# Front-End 보안과 개인정보 가이드

## 1. 문서 목적과 적용 범위

이 문서는 Lounge Front-end와 WebView 화면을 구현하고 검토할 때 적용할 보안·개인정보 기준 원본입니다. UI에서 값을 숨기는 수준이 아니라 외부 입력이 들어와 화면, 네트워크, 저장소, 로그와 Native Bridge를 통과하는 전체 흐름을 확인합니다.

구체적인 인증 제공자, Cookie 또는 token 방식, CSP 값, 허용 Origin, Redirect URI, 개인정보 분류와 보존 기간은 아직 확정하지 않습니다. 해당 결정은 Backend·App·배포·보안 담당 기준과 함께 확정합니다.

> 브라우저와 WebView의 코드는 사용자가 확인하고 변조할 수 있습니다. Client 검증은 사용자 경험과 조기 오류 발견을 위한 것이며 인증, 권한과 업무 규칙의 최종 통제를 대신하지 않습니다.

## 2. 책임과 신뢰 경계

이 절의 Backend, Native App과 배포 관련 항목은 Front-end가 안전한 연동을 위해 확인해야 할 외부 책임입니다. 현재 프로젝트에서 해당 구현과 운영 방식이 확정됐다는 뜻이 아니며, 실제 담당 주체, 제공 범위와 계약은 승인되기 전까지 `TBD`입니다.

### Front-end

- 외부 값을 신뢰하지 않고 API·Storage·URL·Bridge 경계에서 검증합니다.
- React의 기본 Escape를 유지하고 위험한 DOM·HTML 실행 경계를 제한합니다.
- 자격 증명과 개인정보를 URL, Client 저장소, Bridge와 로그에 불필요하게 복제하지 않습니다.
- 권한 없는 행동을 UI에서 제한하되 서버 권한 검증이 존재한다고 가정하지 않습니다.
- 오류를 사용자 행동으로 변환하면서 서버 원문과 내부 정보를 노출하지 않습니다.

### Backend

- 인증, 권한, 소유권, 업무 규칙과 데이터 접근을 최종 검증합니다.
- Cookie·token, CSRF, CORS, 보안 Header와 세션 폐기 정책을 확정합니다.
- 업로드 파일의 실제 형식, 크기와 저장 위치를 다시 검증합니다.

### Native App

- OS 권한, 보안 저장소, WebView 설정과 승인된 Bridge Method를 관리합니다.
- WebView Origin, Method, 입력과 응답 대상을 검증합니다.
- Web에 필요한 최소 결과만 반환하고 범용 JavaScript 실행 통로를 만들지 않습니다.

## 3. 외부 입력과 XSS

API 응답, 사용자 입력, URL Query·Fragment, Storage, Markdown·HTML, 외부 SDK와 Bridge 응답은 모두 신뢰할 수 없는 값입니다. TypeScript 타입 선언은 Runtime 안전을 보장하지 않으므로 경계에서 `unknown`으로 받고 형태와 의미를 확인합니다.

### 기본 출력

- 일반 문자열은 JSX 표현식으로 렌더링하여 React의 기본 Escape를 유지합니다.
- `innerHTML`, `outerHTML`, `document.write`, `eval`과 문자열 기반 코드 실행을 사용하지 않습니다.
- 동적으로 HTML을 만들기 위해 문자열을 이어 붙이지 않습니다.
- 입력 검증만으로 XSS를 해결했다고 판단하지 않습니다. 출력 위치가 HTML, URL, JavaScript 또는 CSS인지에 맞는 방어가 필요합니다.

### HTML과 Markdown

- 제품 요구가 없으면 사용자 또는 서버가 제공한 HTML을 실행 가능한 HTML로 렌더링하지 않습니다.
- `dangerouslySetInnerHTML`이 필요하면 승인된 Sanitizer, 허용 Tag·Attribute, URL Scheme과 Sanitizer 적용 위치를 먼저 정합니다.
- Sanitizing한 결과를 다시 수정하거나 다른 라이브러리가 위험한 DOM으로 변환하지 않는지 확인합니다.
- Sanitizer는 보안 의존성이므로 Version과 보안 업데이트를 관리합니다.

### URL 검증

```ts
const allowedExternalHosts = new Set(["support.example.com"])

export function parseExternalUrl(value: unknown): URL | null {
  if (typeof value !== "string") return null

  try {
    const url = new URL(value)
    if (url.protocol !== "https:") return null
    if (!allowedExternalHosts.has(url.hostname)) return null
    return url
  } catch {
    return null
  }
}
```

허용 Host는 예시이며 실제 서비스·배포 기준이 확정되면 교체합니다. 문자열 Prefix 비교로 Host를 검증하지 않고 URL Parser로 Protocol과 Host를 분리합니다. `javascript:`, 임의 `data:` URL과 확인되지 않은 Custom Scheme을 실행하지 않습니다.

## 4. 인증, 권한과 세션

### 인증과 권한 구분

- 인증은 현재 사용자가 누구인지 확인하는 과정입니다.
- 권한은 그 사용자가 특정 데이터와 행동을 사용할 수 있는지 판단하는 과정입니다.
- Menu, Button과 Route를 숨기는 것은 UX 처리이며 서버 권한 검증이 아닙니다.
- 객체 ID, 회원 ID와 역할 값은 Client에서 변경될 수 있으므로 Backend가 소유권과 권한을 다시 확인합니다.

### 자격 증명과 세션

- 인증 token을 `localStorage`, `sessionStorage`, IndexedDB, URL 또는 일반 Zustand Persist에 저장하는 예시를 미리 제공하지 않습니다.
- Cookie 인증이면 `HttpOnly`, `Secure`, `SameSite`, Domain과 Path 정책을 Backend·배포 기준으로 결정합니다.
- Native 보안 저장소를 사용하더라도 Bridge로 token을 화면 JavaScript에 전달하지 않습니다.
- 모든 `401`을 즉시 로그아웃으로 바꾸지 않고 세션 조회, 만료, 갱신 실패와 기능 API 계약을 구분합니다.
- `403`은 인증 여부와 별개의 권한 실패로 처리합니다.
- 로그아웃과 사용자 전환 후 이전 사용자의 Query Cache, Persist 상태와 화면 입력을 정리합니다.

### CSRF와 CORS

- Cookie가 자동으로 포함되는 인증 방식에서는 상태 변경 요청의 CSRF 방어가 필요합니다.
- `SameSite`만으로 충분하다고 가정하지 않고 CSRF Token, Origin·Referer 검증 또는 채택한 방식을 Backend와 확정합니다.
- `GET` 요청으로 서버 상태를 변경하지 않습니다.
- CORS는 브라우저의 응답 접근 정책이며 인증과 권한 검증을 대신하지 않습니다.
- Credential 요청의 허용 Origin을 와일드카드나 사용자 입력으로 반사하지 않습니다.

## 5. 환경변수, 저장소와 개인정보

### 환경변수와 Secret

- `NEXT_PUBLIC_` 변수와 Client Component가 참조하는 값은 브라우저에 공개되는 설정으로 취급합니다.
- API Secret, Signing Key, Private token과 서버 자격 증명을 Client Bundle, Source Map, 정적 파일과 Build 로그에 포함하지 않습니다.
- 환경변수 이름이 Secret처럼 보여도 Client에 포함되면 보호되지 않습니다.
- `next.config`의 Client Bundle 포함 설정과 동적 환경값 처리 방식은 실제 Next.js 구성에서 확인합니다.

### Client 저장소

- 저장이 필요하기 전에 데이터 수명, 사용자 전환, 삭제 조건과 노출 영향을 정의합니다.
- 비밀번호, 인증번호, 카드정보, 인증 token과 불필요한 개인정보를 Web Storage와 Persist Store에 보관하지 않습니다.
- Query Cache와 메모리 상태도 같은 사용자가 계속 사용한다는 가정 아래의 임시 저장소이므로 로그아웃 경계를 확인합니다.
- Offline 데이터는 승인된 범위, 만료, 암호화 책임과 서버 재검증 규칙이 정해진 뒤 저장합니다.

### 로그, 분석과 오류 수집

- Access·Refresh token, Session ID, Cookie, 비밀번호, 인증번호, 카드정보와 민감 개인정보를 기록하지 않습니다.
- 요청·응답 객체 전체, Form 값 전체와 Bridge Payload 전체를 편의상 전송하지 않습니다.
- 사용자 식별이 필요하면 승인된 가명 식별자와 최소 진단 Code를 사용합니다.
- 오류 수집 SDK의 Breadcrumb, Replay, Network Capture와 입력 Masking 설정을 실제 도입 시 검토합니다.
- 사용자에게는 필요한 행동을 안내하고 Stack Trace, 내부 경로와 서버 오류 원문은 노출하지 않습니다.

## 6. 네트워크, CSP와 외부 리소스

- Production 통신은 HTTPS를 사용하고 Mixed Content를 허용하지 않습니다.
- API Base URL, 인증 Header와 Cookie 전달 방식은 공통 요청 경계에서 관리하되 기능별 권한 판단을 공통 Wrapper가 추측하지 않습니다.
- 외부 Script, iframe, Image와 연결 Origin은 실제 사용처를 기준으로 최소화합니다.
- CSP는 XSS의 유일한 방어가 아니라 추가 방어 계층입니다.
- 실제 CSP는 배포 구조와 Third-party Script가 확인된 뒤 Nonce 또는 Hash 기반 정책을 검토하고 `Content-Security-Policy-Report-Only`로 영향부터 확인합니다.
- `unsafe-inline`, `unsafe-eval`과 넓은 Origin 허용을 오류 해결 목적으로 추가하지 않습니다.
- `frame-ancestors`, `object-src`, `base-uri`, `connect-src`, `img-src` 등 필요한 Directive는 Hosting·Backend 기준과 함께 결정합니다.

`TBD`: CSP, CORS, Cookie, 보안 Header와 허용 Origin의 실제 값은 배포·인증 구성이 확정된 뒤 결정합니다.

## 7. 이동, WebView Bridge와 파일

### 이동과 Redirect

- `returnUrl`, Redirect와 Deep Link는 허용 Route·Origin·Scheme을 검증합니다.
- 사용자 입력을 그대로 `window.location`, `router.push`, `open` 또는 Native Deep Link에 전달하지 않습니다.
- 새 창으로 외부 페이지를 열 때 Opener 제어와 실제 Link 정책을 확인합니다.

### WebView Bridge

- 화면 컴포넌트는 Native 전역 객체를 직접 호출하지 않고 Adapter를 사용합니다.
- Method, Params, 응답 식별자, Version과 결과를 Runtime에 검증합니다.
- 사용자 취소, 권한 거부, 미지원, Timeout과 시스템 오류를 구분합니다.
- 요청 ID, 중복 실행과 응답 순서를 관리하고 민감정보를 메시지와 로그에 넣지 않습니다.
- 임의 Method명이나 JavaScript 문자열을 실행하는 범용 Bridge를 만들지 않습니다.

### 파일 업로드와 다운로드

- Client의 확장자, MIME과 크기 검사는 UX이며 Backend 검증을 대신하지 않습니다.
- 허용 형식과 크기는 Allowlist로 관리하고 서버가 실제 Content와 저장 이름을 다시 확인합니다.
- 사용자 입력으로 서버 파일 경로나 다운로드 대상을 직접 만들지 않습니다.
- 다운로드·미리보기·외부 열기는 Content-Type, 파일명, Origin과 WebView 처리 방식을 확인합니다.

## 8. 의존성과 공급망

- 새 package는 기존 코드로 해결할 수 없는 실제 필요, 유지보수 상태, 배포 크기와 권한을 확인한 뒤 추가합니다.
- Lock File을 함께 관리하고 CI에서는 재현 가능한 설치 방식을 사용합니다.
- `npm audit` 결과는 Severity만 보고 자동 수정하지 않고 실제 사용 경로, 수정 Version과 Breaking Change를 검토합니다.
- `npm audit fix --force`처럼 큰 Version 변경을 자동 적용하지 않습니다.
- 설치 Script, 출처가 불분명한 package와 Copy한 코드는 실행 전에 검토합니다.
- 보안상 중요한 Sanitizer, 인증 SDK와 WebView package는 업데이트 기준과 Owner를 정합니다.

### React와 Next.js 보안 업데이트

- React와 Next.js는 프로젝트 생성 시점의 최신 안정 Version을 사용합니다.
- `package.json`의 선언만 보지 않고 Lock File, 실제 설치 Version과 배포된 Version이 일치하는지 확인합니다.
- React와 Next.js 공식 보안 공지를 지속해서 확인하고, Release 또는 배포 전에는 현재 사용 Version에 적용되는 공지가 없는지 다시 확인합니다.
- RCE, 인증 우회와 정보 노출처럼 영향이 큰 취약점은 일반 기능 작업보다 우선하여 최신 지원 보안 Version으로 업데이트하고 검증 후 재배포합니다.
- WAF, 입력 검증, CSP와 코드 리뷰는 추가 방어 계층이며 취약한 Framework package의 공식 Patch를 대신하지 않습니다.
- 취약한 Version이 외부에 노출됐을 가능성이 있으면 Patch와 재배포만으로 종료하지 않고 로그와 노출 범위를 확인하며 환경변수, API Key, Session Secret 등 자격 증명 교체 필요성을 검토합니다.

React2Shell은 React Server Components의 취약점과 Next.js App Router에 미친 영향을 보여주는 대표 사례입니다. 이 문서는 시간이 지나면 낡는 영향 Version 목록을 고정하지 않으며, 실제 대응 시 React와 Next.js 공식 보안 공지에서 현재 영향 범위와 최신 수정 Version을 확인합니다.

## 9. 검증과 사고 대응

### 변경 위험별 확인

- Typecheck와 Lint: 잘못된 타입 경계, 위험 API와 규칙 위반
- Unit Test: URL·Parser·Masking 같은 순수 보안 경계
- Component Test: 권한별 UI, 오류 노출과 사용자 행동
- Request Mock Test: `401`, `403`, 잘못된 응답, CSRF 오류와 Cache 정리
- 실제 브라우저·WebView: CSP, Cookie, Redirect, Focus, Bridge와 Network Payload
- Backend·App 통합: 권한 우회, 사용자 전환, 중복 요청과 실제 저장소

보안 검사는 기능 완료 뒤 한 번만 수행하지 않습니다. 인증·권한·외부 입력·파일·Bridge·개인정보 흐름이 바뀌면 해당 경계를 다시 검토합니다.

보안 문제가 의심되면 민감정보를 채팅, Issue와 일반 로그에 복사하지 않습니다. 재현 조건, 영향 범위, 노출된 데이터 종류와 임시 완화 상태를 최소 정보로 기록하고 프로젝트의 보고 절차를 따릅니다.

## 10. AI 작업 기준

AI는 보안 정책을 확정하거나 “안전하다”고 단정하지 않습니다.

```text
이 변경을 Front-End 보안 기준으로 검토해줘.

- 외부 입력이 들어오는 경계와 Runtime 검증
- HTML, URL, Redirect와 실행 가능한 문자열
- 인증과 권한의 최종 책임
- Cookie, token, Client 저장소와 사용자 전환
- 로그, 분석, 오류 수집의 민감정보
- Client Bundle의 환경변수와 Secret
- Bridge, 파일과 외부 리소스의 허용 범위
- 새 의존성과 실행한 보안 검증

확인된 코드와 설정을 근거로 작성하고, Backend·App·배포 계약이
필요한 내용은 임의로 확정하지 말고 TBD로 분리해줘.
```

### 병합 전 확인

- React Escape를 우회하거나 신뢰하지 않은 HTML을 실행하지 않는가?
- URL, Redirect, Deep Link와 외부 리소스가 허용 범위를 확인하는가?
- UI 숨김을 서버 권한 검증으로 오해하지 않는가?
- 자격 증명과 개인정보가 URL, 저장소, Bundle, Bridge와 로그에 남지 않는가?
- Cookie 인증에서 CSRF와 Credential CORS 정책을 확인했는가?
- 로그아웃과 사용자 전환 뒤 이전 사용자 데이터가 남지 않는가?
- Client와 Native 입력 검사가 Backend 검증을 대신하지 않는가?
- CSP와 보안 Header의 실제 적용 여부를 설명과 구분했는가?
- 새 package의 필요성과 Audit 결과를 검토했는가?
- React·Next.js 공식 보안 공지와 실제 설치·배포 Version을 확인했는가?
- 수행한 검사와 수행하지 못한 통합·보안 검증을 구분했는가?

## 11. 참고 기준

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [MDN Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)
- [MDN Secure Cookie Configuration](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/Cookies)
- [Next.js Environment Variables](https://nextjs.org/docs/pages/guides/environment-variables)
- [React Security Advisories](https://github.com/facebook/react/security/advisories)
- [Next.js Security Advisories](https://github.com/vercel/next.js/security/advisories)
- [npm Security Documentation](https://docs.npmjs.com/packages-and-modules/securing-your-code/)
