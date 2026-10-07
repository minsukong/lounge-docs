# [TBD] 전체 시스템 아키텍처

> 예상 시나리오 기반. 확정 전 참고용. 웹 소스는 front-end/, 앱 WebView는 front-end/webview/에서 관리하고 Flutter Native 소스만 별도 위치에 있습니다. Backend·인프라·통신 경로의 표시는 합의된 계약을 대신하지 않습니다.

## 시스템 구성

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TB
  accTitle: 더라운지 시스템 3.0 전체 아키텍처 (예상)
  accDescr: Flutter Native 앱과 WebView Front-end가 API Gateway를 통해 Backend에 접근하고, Backend가 외부 파트너·PG·플랫폼과 연계하는 예상 구조입니다. 웹 영역은 FO 웹, PO, OO로 구분하며 연결 계약은 미정입니다.
  
  subgraph CLIENT["클라이언트"]
    NATIVE["Flutter Native 앱<br/>(기기 기능, Bridge 제공)"]
    WEBVIEW["Next.js WebView<br/>(서비스 화면, 업무 흐름)"]
    BROWSER["FO 웹 (PC WEB·반응형 홈페이지)"]
    PARTNER["PO (파트너오피스)"]
    ONSITE["OO (현장운영시스템)"]
  end

  subgraph GATEWAY["API Gateway (Kong 3.14)"]
    KW["Kong Gateway<br/>Rate Limiting, Routing"]
  end

  subgraph BACKEND["Backend (Spring Boot 4.1)"]
    V3["V3 API<br/>/api/v3/*"]
    INAPP["IN-APP API<br/>/in-app/* (micronaut)"]
    ADMIN["ADMIN API<br/>/api/admin/*"]
    V2["V2 API<br/>/api/v2/* (레거시)"]
    AIRSTAR["AIRSTAR API<br/>/api/airstar/*"]
  end

  subgraph INFRA["인프라"]
    PG[("PostgreSQL 17")]
    REDIS[("Valkey 9.1")]
    KAFKA["Apache Kafka 3.9"]
    KEYCLOAK["Keycloak 26<br/>(인증/인가)"]
  end

  subgraph EXTERNAL["외부 시스템"]
    DP["드래곤패스"]
    NOL["놀유니버스 (NOL)"]
    BAYCON["베이콘 (One SIM)"]
    KCP["KCP / KICC (PG)"]
    FBND["인천공항 F&B<br/>(에어스타)"]
    CARD["제휴카드사<br/>(모시러/잇차)"]
  end

  BO["백오피스 (BO)<br/>Thymeleaf SSR + React<br/>[Backend 담당]"]

  WEBVIEW -- "Bridge" --> NATIVE
  NATIVE -- "HTTPS" --> KW
  BROWSER -- "HTTPS (예상)" --> KW
  PARTNER -. "연결 계약 TBD" .-> KW
  ONSITE -. "연결 계약 TBD" .-> KW
  BO -- "HTTPS" --> KW

  KW --> V3
  KW --> INAPP
  KW --> ADMIN
  KW --> V2
  KW --> AIRSTAR

  V3 --> PG
  V3 --> REDIS
  INAPP --> PG
  INAPP --> REDIS
  INAPP --> KAFKA
  ADMIN --> PG
  V2 --> PG
  AIRSTAR --> PG

  V3 <--> BAYCON
  V2 <--> DP
  V2 <--> NOL
  V2 <--> CARD
  INAPP <--> KCP
  AIRSTAR <--> FBND

  V3 --> KEYCLOAK
  INAPP --> KEYCLOAK
  ADMIN --> KEYCLOAK
  </div>
  <figcaption>API Gateway(Kong)를 통해 모든 클라이언트 요청이 Backend로 라우팅되고, Backend가 외부 시스템과 직접 연동하는 구조입니다.</figcaption>
</figure>

## 레이어별 책임

| 레이어 | 책임 | Front-end 관련? |
|--------|------|----------------|
| **Flutter Native** | 기기 기능, WebView 로드, Bridge 제공, 서명 생성 | ✅ Bridge 통신 |
| **Next.js WebView** | 서비스 화면, 사용자 입력, API 호출 | ✅ **우리** |
| **FO 웹(PC WEB·반응형 홈페이지)** | 사용자 웹. AS-IS 홈페이지 참고 | 스택·WebView 공유 범위 TBD |
| **PO(파트너오피스)** | 파트너 업무 영역 | 세부 범위·담당·계약 TBD |
| **OO(현장운영시스템)** | 현장 운영 영역 | 세부 범위·담당·계약 TBD |
| **Kong Gateway** | 라우팅, Rate Limit, SSL Termin | ❌ (Infra) |
| **V3 API** | 앱 표준 API (라운지, 쿠폰, 티켓, eSIM) | ✅ 직접 호출 |
| **IN-APP API** | 앱 전용 (회원, 카드, 알림, 사용처) | ✅ 직접 호출 |
| **ADMIN API** | 백오피스 운영 관리 | ⚠️ BO 담당 |
| **V2 API** | 파트너 계약 API | ❌ Backend-to-Backend |
| **Airstar API** | 인천공항 F&B 연동 | ❌ Backend-to-Backend |

## 환경

| 환경 | API Host | 비고 |
|------|----------|------|
| 운영 | `https://api.theloungemembers.com` | |
| 개발 | `https://dev-api.theloungemembers.com` | 일부 work-dev / dev.theloungemembers.com |