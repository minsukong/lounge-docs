# [TBD] 인터페이스 설계서 v0.8.1 — Front-end 요약

> ⚠️ **본 문서는 확정 문서가 아닙니다.** 원본: `docs/documents/더라운지시스템 3.0_인터페이스설계서_v0.8.1_내부 확인용.docx`
> Front-end 개발을 위한 요약·정리본이며, 모든 내용은 Backend 확인 및 기획 승인 전까지 **참고용**입니다.

---

## 🎯 한줄 요약

> 8개 API 레이어, 총 193건. **Front-end는 V3(자체앱) + ADMIN(백오피스) + IN-APP(micronaut, 신규)** 세 레이어와 통신합니다. V2 계열(파트너 연동)과 Airstar는 Backend-to-Backend 연동이라 Front-end 직접 호출 대상이 아닙니다.

---

## 📡 Front-end가 통신하는 API 레이어

| 레이어 | Base URL | Front-end 용도 |
|--------|----------|----------------|
| **V3** (자체앱) | `/api/v3/*` | 앱 웹뷰에서 호출 (라운지/쿠폰/티켓/eSIM) |
| **ADMIN** (백오피스) | `/api/admin/*` | BO 관리자 콘솔 |
| **IN-APP** (micronaut) | `/in-app/*` | 앱 전용 (약관/권한/게시판/카드/알림/이용권/회원/사용처) |

| 레이어 | Base URL | Front-end 용도 |
|--------|----------|----------------|
| V2 (파트너) | `/api/v2/*` | ❌ Partner-to-Server 연동. Front-end 미사용 |
| Airstar | `/api/airstar/*` | ❌ 외부 시스템 연동. Front-end 미사용 |

**호스트:**

| 환경 | URL |
|------|-----|
| 운영 | `https://api.theloungemembers.com` |
| 개발 | `https://dev-api.theloungemembers.com` |

> 비고: v2 예약/가격 연동, in-app, admin 등 일부는 `work-dev` / `dev.theloungemembers.com` 호스트에서도 동작 중.

---

## 🔐 인증 방식 (Front-end 관련)

| 레이어 | 인증 방식 | Front-end 관점 |
|--------|-----------|----------------|
| **V3 자체앱** | `X-TL-Signature` = MD5(device_sn + rfc1738(body)), User-Agent에 `device_sn=...` 포함 | Native Bridge에서 device_sn을 얻어와서 서명 생성 (TBD: 직접 vs Bridge) |
| **V3 파트너 HMAC** | `X-TL-HMAC-Signature` = HMAC-SHA256(rawBody, secretKey) | ❌ 파트너 전용. Front-end 무관 |
| **ADMIN** | `X-ADMIN-SALT`(±600초) + `X-ADMIN-AUTH: Bearer <sha256(salt+SECRET)>` + 관리자 세션/권한 게이트 | BO 웹에서 헤더 생성 후 호출 |
| **IN-APP** | `X-Timestamp`(±300초) + `X-Signature` = base64(HMAC-SHA256(`{ts}\n{METHOD}\n{PATH}\n{body}`, secret)) | 앱 전용. Token 기반 |


---

## 📦 응답 포맷 (레이어별)

> ⚠️ **레이어마다 응답 구조가 다릅니다.** Front-end에서 API 호출 시 해당 레이어의 포맷을 그대로 따라야 합니다. **3개의 response parser**가 필요합니다.

### V3 (자체 앱)

```json
// 성공
{ "success": true, "status": 200, "message": "ok", "data": { ... } }

// 실패
{ "success": false, "status": 400, "error": { "code": "E0101", "detail": "필수 파라미터가 누락되었습니다." } }
```

- `callback` 파라미터가 있으면 JSONP (`callback({...});`) 로 감싸 반환

### ADMIN (백오피스)

```json
// 성공
{ "result": "success", "message": "Success", "data": { ... } }

// 실패
{ "result": "fail", "message": "<메시지>", "errorCode": "ERR_000" }
```

### IN-APP (micronaut)

```json
{ "status": "SUCCESS" | "FAIL", "message": "<메시지>", ... }
```
HTTP 200 / 400 / 401 / 500

### V2 (참고용 — Front-end 미사용)

```json
{
  "response": {
    "action_result": "success" | "failure",
    "action_result_reason": "<메시지>",
    "error_sub_code": "F0xxx"
  },
  "content": { ... }
}
```

### Airstar (참고용 — Front-end 미사용)

```json
// 성공: 컨트롤러 반환 배열을 그대로 JSON 직렬화
// 실패
{ "code": "9999" | "0404", "message": "<메시지>", "requestId": "", "resource": [] }
```

---

## 🚦 에러코드

### V3 에러코드 (Front-end에서 직접 처리 대상)

| 코드 | 의미 | Front-end 처리 방향 |
|------|------|---------------------|
| E0101 | 필수 파라미터가 누락되었습니다. | 입력 검증 보완 |
| E0105 | 전달인자 값이 올바르지 않습니다. | 입력 유효성 |
| E0107 | **앱을 업그레이드한 후 이용해 주세요.** | ⚠️ 앱 업데이트 유도 화면 |
| E0113 | 일시적 오류가 발생했습니다. 관리자에게 문의바랍니다. | 사용자 안내 |
| E0114 | 쿠폰 등록에 실패했습니다. | 에러 메시지 |
| E0120 | 사용자 요청을 성공적으로 수행하지 못했습니다. | 일반적인 에러 |
| E0801 | 존재하지 않는 이용권(쿠폰)입니다. | 상태별 UI |
| E0802 | 존재하지 않는 이용권(바우처)입니다. | 상태별 UI |
| E0803 | 존재하지 않거나 판매중인 상품이 아닙니다. | 상태별 UI |
| E0804 | 상품이 존재하지 않습니다. | 상태별 UI |
| E0805 | 사용자 요청으로 취소된 이용권입니다. | 상태별 UI |
| E0806 | 존재하지 않는 라운지입니다. | 상태별 UI |
| E1001 | 정의되지 않은 JSON 타입입니다. | 개발 이슈 |
| E1002 | API 통신 오류가 발생되었습니다. | 재시도/알림 |
| E1003 | API 재시도 횟수를 초과했습니다. | 안내 |
| E1004 | 요청 서명이 일치하지 않습니다. | ⚠️ 인증/서명 문제 |

### V2 실패 서브코드 (Front-end 무관, 참고)

| 코드 / 상수 | 의미 |
|-------------|------|
| F0999 (SUB_SERVER_MAINTENANCE) | 서버 점검 중 |
| SUB_VALUE_IS_INVALID | 전달인자 값 오류 |
| SUB_VOUCHER_NOT_EXIST | 이용권/쿠폰 미존재 |
| SUB_VOUCHER_USED / BEEN_USED | 이미 사용된 이용권 |
| SUB_VOUCHER_EXPIRED | 유효기간 만료 |
| SUB_VOUCHER_REFUNDED | 결제 취소된 쿠폰 |
| SUB_COUPON_SAME_NUMBER | 중복 쿠폰 번호 |
| SUB_COUPON_GIFT | 증정 진행 중인 쿠폰 |

### HTTP 상태코드 규약 (공통)

| 코드 | 의미 |
|------|------|
| 400 | 파라미터/유효성 오류 |
| 401 | 인증 실패 |
| 403 | 권한 없음 |
| 404 | 리소스 없음 |
| 409 | 상태 충돌 |
| 410 | 만료/취소된 리소스 |
| 429 | 요청 제한 초과 |
| 500 | 서버 오류 |
| 503 | 일시 장애 |

---

## 📑 API 그룹별 Front-end 관련 요약

### V3 — 33건 (자체 앱 웹뷰가 호출)

| 모듈 | Endpoints | Front-end 화면 |
|------|-----------|----------------|
| `info/coupon` | 상품 정보 조회 | 상품 상세 |
| `info/lounge` | 라운지 정보 조회/검색 | 라운지 목록/상세 |
| `ticket/view` | 이용권 조회/상세 | 마이페이지, 사용권 |
| `one-sim` | eSIM 발급/충전/조회/웹훅 (10건) | eSIM 관리 화면 |
| `welcome` | 앱 시작/운영 공지 | 앱 진입 화면 |
| `dev` | 개발 전용 | — |

### ADMIN — 33건 (백오피스 BO)

| 모듈 | Endpoints | BO 화면 |
|------|-----------|---------|
| `menu/menu` | 메뉴 CRUD, 순서, 권한 (6건) | 메뉴 관리 |
| `menu/menu-permission` | 권한 목록/등록/삭제 (3건) | 메뉴 권한 |
| `push/message-template` | 템플릿 CRUD, 토글, 테스트발송 (6건) | 푸시 관리 |
| `lounge/japan-dining` | 매핑, 순서, 토글, 접두문자 (6건) | 일본 다이닝 관리 |
| `sale-channel/auth-code` | 사용 기록, 엑셀 (2건) | 판매채널 관리 |
| `lounge-coupon/coupon-constraint` | 제약 조건 CRUD (7건) | 쿠폰 제약 |
| `esim/one-sim-issue` | 발급 내역, 통계 (3건) | eSIM 관리 |

### IN-APP (micronaut) — 66건 (자체 앱, 신규)

| 구분 | 건수 | Front-end 화면 |
|------|------|----------------|
| 약관(동의) | 2 | 약관 동의 화면 |
| 권한 (토큰, KCB/카카오뱅크 인증) | 10 | 로그인/회원가입 |
| 게시판 (FAQ, 1:1 문의) | 5 | 고객센터 |
| 카드 (등록/결제/삭제) | 7 | 카드 관리, 결제 |
| 알림 | 3 | 알림 |
| 이용권 | 6 | 이용권 관리 |
| 회원 (가입/조회/탈퇴) | 9 | 계정 관리 |
| 사용처 (검색/상세/이미지) | 15 | 라운지/다이닝 검색 |
| 테스트 | 10 | 개발 전용 |

> ⚠️ **IN-APP 66건 상세 요청·응답 명세는 아직 0건 기재.** Backend 확인 후 순차 보완 예정.

---

## 🏗️ 연계 대상 시스템

| 구분 | 시스템 | 연계 목적 | 관련 API |
|------|--------|-----------|----------|
| 제휴 파트너 | 드래곤패스 (DragonPass) | 쿠폰 발행·조회·사용·취소, 카드 혜택/결제 | V2, V2(DP) |
| 제휴 파트너 | 놀유니버스 (NOL) Channel Hub | 예약/취소, 가격·옵션 | V2(NOL) |
| 제휴 파트너 | 모시러/잇차 등 제휴카드사 | BIN 인증형 카드 발권·결제 | V2(card) |
| 제휴 파트너 | 공항리무진 단말 (가온/KSNET) | 카드 결제내역 통지 | V2(airport_limousine) |
| PG사 | KICC / KCP | 인앱결제 카드 등록, 발급/취소 | IN-APP, V2(card) |
| 외부 플랫폼 | 베이콘 (BayCon) One SIM | eSIM 충전/발급/취소, 사용량 웹훅 | V3(one-sim) |
| 외부 플랫폼 | 인천공항 F&B 플러스 (에어스타) | 주문/결제/정산 | Airstar |
| 내부 시스템 | 본사 백오피스 (Admin Console) | 메뉴/권한/푸시/다이닝/판매채널 | ADMIN |
| 자체 채널 | 더라운지 모바일 앱 | 조회/이용권/결제 | V3, IN-APP(micronaut) |

---

## 🔑 Front-end 핵심 체크포인트

| # | 항목 | 상태 | Front-end 영향 |
|---|------|------|----------------|
| 1 | **서명 생성 주체** (V3/IN-APP) | 🔴 TBD | WebView 직접 vs Bridge 통한 Native 서명 — 결정 필요 |
| 2 | **레이어별 응답 파서** | ✅ 확정 | V3/ADMIN/IN-APP 각각 다른 포맷 → 3개 parser |
| 3 | **에러 코드 매핑** | ✅ V3/HTTP 확정 | IN-APP/ADMIN 에러코드 체계는 제한적 |
| 4 | **IN-APP 66건 상세 명세** | 🔴 TBD | "순차 보완 필요" — 구현 전 Backend 확인 필수 |
| 5 | **V2(DP) 11건** | ⚪ Front-end 무관 | Backend-to-Backend |
| 6 | **다국어 (한/영/일/중)** | 🔴 TBD | 적용 범위·수준 — 에러 메시지, UI 문구 |
| 7 | **호스트 URL** | ✅ 확정 | 운영/개발 URL 설정 |
| 8 | **서버 점검 시간 응답** | ⚪ v2: F0999 / v3: TBD | 점검 모드 = BO 관리 (앱 점검 모드) |
| 9 | **ADMIN SECRET_KEY 전달** | 🔴 TBD | 하드코딩? 환경 설정? Bridge? |
| 10 | **IN-APP 토큰 수명/갱신** | 🔴 TBD | refresh 토큰 주기 |

---

## 📋 Front-end 바로 활용 vs TBD

### ✅ 바로 사용 가능

- 호스트 URL (운영/개발)
- V3 / ADMIN / IN-APP 응답 포맷
- V3 에러코드 매핑 (E0101~E1004)
- API endpoint 목록 (V3 33건, ADMIN 33건)
- HTTP 상태코드 규약
- IN-APP endpoint 목록 (66건 — 명세는 미기재)

### 🔴 TBD / 확인 필요

| 항목 | 필요 결정 | 담당 |
|------|-----------|------|
| 서명 생성 주체 | WebView 직접 / Native Bridge | Front-end + Flutter |
| IN-APP 66건 명세 | 요청·응답 필드, 에러 코드 | Backend |
| ADMIN SECRET_KEY | 전달 방식 (환경설정? Bridge?) | Front-end + Backend |
| IN-APP 토큰 | 발급/갱신/만료 주기 | Backend |
| 다국어 적용 범위 | 에러 메시지·UI 문구, 적용 수준 | Front-end + 기획 |
| eSIM 웹훅 처리 | Front-end 수신 vs Backend 처리 | Front-end + Backend |
| V3 JSONP | Front-end에서 사용 여부 (거의 불필요) | Front-end |
| 서버 점검 모드 | BO에서 ON/OFF → 앱에 전달 방식 | Front-end + BO |

---

## 📐 라우팅 규칙 (참고)

### V3

```
/api/v3/{module}/{controller}/{action}
→ controller/{module}/{Pascal(controller)}Controller.php
→ {Ucfirst(HttpMethod)}{Pascal(action)}()
```
- action 미지정 시 `index`
- kebab-case → PascalCase: `japan-dining-city` → `JapanDiningCity`

### ADMIN

```
/api/admin/{module}/{controller}/{action}
→ controller/{module}/{Pascal(controller)}Controller.php
→ {Ucfirst(HttpMethod)}{Pascal(action)}()
```

---

## 📎 원본 문서

- **파일**: `docs/documents/더라운지시스템 3.0_인터페이스설계서_v0.8.1_내부 확인용.docx`
- **버전**: v0.8.1
- **상태**: 내부 확인용 (100% 확정 아님)
- **총 분량**: 70쪽, 193개 인터페이스