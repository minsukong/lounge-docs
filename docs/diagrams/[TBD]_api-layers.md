# [TBD] API 레이어 통신 구조

> 예상 시나리오 기반. 인증 방식과 응답 포맷은 인터페이스 설계서 v0.8.1 기준.

## Front-end가 통신하는 API 레이어

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart LR
  accTitle: Front-end API 통신 구조 (3개 레이어, 3개 Parser)
  accDescr: Front-end는 V3, IN-APP, ADMIN 세 레이어와 통신하며 각 레이어마다 인증 방식과 응답 포맷이 달라 3개의 응답 파서가 필요합니다.
  
  FE["Front-end<br/>(app-webview / BO)"]

  subgraph PARSERS["Response Parsers (3개)"]
    P1["V3 Parser<br/>success/status/data"]
    P2["IN-APP Parser<br/>status(SUCCESS/FAIL)/message"]
    P3["ADMIN Parser<br/>result/message/data"]
  end

  subgraph AUTH["인증 헤더 생성"]
    A1["V3 서명<br/>X-TL-Signature<br/>= MD5(device_sn + body)"]
    A2["IN-APP 서명<br/>X-Signature<br/>= HMAC-SHA256(ts+method+path+body)"]
    A3["ADMIN 서명<br/>X-ADMIN-SALT + X-ADMIN-AUTH<br/>= Bearer sha256(salt+SECRET)"]
  end

  subgraph APIS["API 레이어"]
    V3API["V3<br/>/api/v3/*<br/>33건"]
    INAPPAPI["IN-APP<br/>/in-app/*<br/>66건"]
    ADMINAPI["ADMIN<br/>/api/admin/*<br/>33건"]
  end

  FE --> A1 & A2 & A3
  A1 --> V3API
  A2 --> INAPPAPI
  A3 --> ADMINAPI
  V3API --> P1
  INAPPAPI --> P2
  ADMINAPI --> P3
  P1 & P2 & P3 --> FE
  </div>
  <figcaption>각 레이어마다 다른 인증 헤더를 생성하고, 응답도 서로 다른 포맷으로 옵니다. Front-end는 레이어별 파서로 응답을 해석합니다.</figcaption>
</figure>

## 인증 방식 비교

| 항목 | V3 (자체앱) | IN-APP (micronaut) | ADMIN (BO) |
|------|-------------|--------------------|------------| 
| **서명 알고리즘** | MD5 | HMAC-SHA256 | SHA-256 |
| **서명 입력** | device_sn + rfc1738(body) | `{ts}\n{METHOD}\n{PATH}\n{body}` | salt + SECRET_KEY |
| **헤더** | `X-TL-Signature` | `X-Timestamp` + `X-Signature` | `X-ADMIN-SALT` + `X-ADMIN-AUTH` |
| **유효 시간** | — | ±300초 | ±600초 |
| **추가 인증** | User-Agent에 device_sn | 서비스 토큰 (JWT?) | 관리자 세션 + 메뉴 권한 게이트 |
| **TBD** | 서명 생성 주체 (WebView 직접 vs Bridge) | 토큰 수명/갱신 주기 | SECRET_KEY 전달 방식 |

## 응답 포맷

```typescript
// V3 Parser
interface V3Response<T> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
  error?: { code: string; detail: string };
}

// IN-APP Parser
interface InAppResponse<T> {
  status: "SUCCESS" | "FAIL";
  message: string;
  data?: T;
}

// ADMIN Parser
interface AdminResponse<T> {
  result: "success" | "fail";
  message: string;
  data?: T;
  errorCode?: string;
}
```

## Front-end API 호출 흐름

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
sequenceDiagram
  accTitle: API 호출 순서 (예상)
  accDescr: 컴포넌트가 API를 호출하면 인증 헤더를 생성하고 요청을 보내며, 응답은 레이어별 파서로 처리됩니다.
  
  participant C as 컴포넌트
  participant Q as Query/Hook
  participant SIG as 서명 Adapter
  participant API as API (Gateway)
  participant P as Parser
  
  C->>Q: useQuery / useMutation
  Q->>SIG: 서명 생성 요청
  Note over SIG: TBD: WebView 직접 or Bridge
  SIG-->>Q: 인증 헤더 생성 완료
  Q->>API: fetch(url, { headers })
  API-->>Q: raw response (JSON)
  Q->>P: parse(response, layer)
  P-->>Q: typed data
  Q-->>C: data / error / status
  </div>
  <figcaption>서명 생성 주체(WebView 직접 or Native Bridge)는 TBD입니다. 현재는 Bridge를 통한 방식이 유력합니다.</figcaption>
</figure>

## 실제 구현 후 검증 범위

현재 다이어그램은 예상 시나리오이며 API 연결과 통신 성공을 검증한 결과가 아닙니다. 승인된 계약과 실제 소스가 준비되면 정적 구조 검증과 실행 검증을 구분해 적용합니다.

| 구분 | 확인할 내용 | 다이어그램 표시 |
|------|-------------|-----------------|
| 정적 구조 검증 | 컴포넌트, Query/Hook, API Client, Parser와 실제 import·호출 관계 | 실제로 확인된 노드와 연결만 표시 |
| 계약 검증 | 요청·응답 parser와 승인된 API 계약의 일치 여부 | 검증한 API 노드에 PASS 또는 FAIL 표시 |
| 통합 테스트 | 승인된 테스트 환경의 응답 코드, timeout, 인증과 오류 처리 | 실제로 호출한 API 노드 또는 연결에 PASS, FAIL, SKIP 표시 |
| 브라우저·WebView 검증 | CORS, Cookie, Origin, Native Bridge와 실제 WebView 동작 | 해당 환경의 실행 근거가 있을 때만 상태 표시 |

Archify는 실제 코드 관계를 분석하지만 API 서버의 응답 성공을 코드만으로 판단하지 않습니다. API 실행 결과는 프로젝트 또는 CI의 health check와 integration test가 생성한 결과를 읽어 연결하는 방식을 우선합니다. 운영 API는 임의로 호출하지 않으며 테스트 주소, 인증 정보와 실행 범위는 담당자 승인 후 확정합니다.

## Front-end 미통신 레이어 (참고)

| 레이어 | Base URL | 이유 |
|--------|----------|------|
| V2 (파트너) | `/api/v2/*` | Partner-to-Server 연동 (Backend가 호출) |
| V2 (NOL) | `/api/v2/coupon/bookings` | NOL Channel Hub 전용 |
| V2 (DP) | `/api/v2/dp/*` | 드래곤패스 전용 |
| Airstar | `/api/airstar/*` | 인천공항 F&B 연동 |
