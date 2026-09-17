# WebView 외부 결제 Native 연동 핵심 규칙

> 기준 원본: [WebView 외부 결제 안정화 가이드](../guides/platform/webview/external_payment.html)
>
> 이 문서는 AI 코딩용 요약입니다. 결제사 URL 규격, 앱 복귀 설정 또는 플랫폼별 세부 판단이 필요하면 기준 원본과 실제 프로젝트 설정을 확인합니다.

## 작업 전 확인

- 이 프로젝트의 외부 결제 방식은 WebView로 확정되어 있습니다.
- 결제사 Native SDK와 Native SDK용 `payment.open` 흐름은 적용하지 않습니다.
- `apps/mobile`의 실제 WebView, Platform Channel, Android Manifest와 iOS URL Types 설정을 먼저 확인합니다.
- 실제 소스에서 확인되지 않은 Channel, Method, Payload, Scheme과 오류 계약을 추측하지 않습니다.
- 결제사에서 사용하는 Intent, Custom Scheme, Return URL과 Redirect 규격을 Web·결제 담당자에게 확인합니다.
- Backend의 역할, 처리 범위와 API 계약은 전체 `TBD`입니다. 결제 요청 생성, 검증, Callback, 상태 조회와 멱등성을 임의로 설계하지 않습니다.

## 현재 확정 범위

- 외부 결제 화면, 결제사 연동 설정, 결제 요청, Return URL과 결과 화면은 WebView에서 처리합니다.
- Flutter는 WebView Navigation에서 외부 앱 URL을 감지해 Android·iOS Native에 중계합니다.
- Android Native는 허용된 Intent와 Custom Scheme을 검증하고 OS에 외부 앱 실행을 요청합니다.
- iOS Native는 허용된 Custom Scheme 또는 HTTPS URL을 검증하고 OS에 외부 앱 실행을 요청합니다.
- 서비스 앱 복귀 Scheme은 Android·iOS 앱 설정에 등록합니다.
- Flutter는 앱 복귀 시 기존 WebView를 재개하거나 Web·App이 합의한 복구 Route 진입을 조정합니다.
- Native와 Flutter는 결제 성공 여부를 판단하거나 결제 상태를 관리하지 않습니다.
- 외부 앱 실행 성공, Native Callback 또는 앱 복귀 자체를 결제 성공으로 해석하지 않습니다.

## Native 처리 원칙

- WebView가 감지한 외부 URL은 Flutter를 거쳐 Native에 전달합니다.
- Native는 Scheme, Host, Package와 Fallback URL이 허용 범위에 포함되는지 검증합니다.
- 허용된 요청은 원본 URL을 임의로 변경하지 않고 실행합니다.
- 허용되지 않은 요청은 일부 값만 제거해 실행하지 않고 요청 전체를 거부합니다.
- 결제 URL의 Query와 Extra는 업무 의미를 알 수 없으므로 임의로 삭제하거나 재구성하지 않습니다.
- 앱 미설치, 허용되지 않은 URL과 OS 실행 실패를 구분할 수 있도록 처리합니다.
- 앱 종료, Timeout 또는 Channel 연결 해제를 이유로 결제를 자동 실행하거나 재시도하지 않습니다.
- Flutter Engine 또는 WebView가 준비되지 않은 Cold Start 복귀도 별도 확인합니다.
- 복귀 이벤트는 Flutter와 WebView가 준비된 뒤 전달하며 구체적인 보관 방식은 실제 앱 구조를 확인해 결정합니다.

## 플랫폼별 확인 사항

### Android

- `intent:` URL은 Android Native에서 분석하고 실행합니다.
- 앱 설치 여부를 `PackageManager`로 사전 조회하는 경우에만 Package Visibility 설정을 검토합니다.
- 사전 조회 없이 `startActivity()`를 호출하는 경우 `ActivityNotFoundException`을 처리합니다.
- `shouldOverrideUrlLoading`이 모든 Navigation에서 호출된다고 가정하지 않습니다.
- POST 요청은 `shouldOverrideUrlLoading`으로 처리되지 않을 수 있으므로 결제사 이동 방식을 실제 WebView에서 확인합니다.
- Manifest의 Package Query, Intent Filter와 복귀 Scheme은 확정된 값만 등록합니다.

### iOS

- 외부 앱 실행에는 플랫폼의 URL 열기 기능을 사용합니다.
- `canOpenURL`로 설치 여부를 조회해야 하는 Scheme만 `LSApplicationQueriesSchemes` 등록을 검토합니다.
- `LSApplicationQueriesSchemes`를 외부 URL 실행 허용 목록으로 대신 사용하지 않습니다.
- 서비스 앱 복귀 Scheme은 확정된 값만 URL Types에 등록합니다.
- 앱이 실행 중인 복귀와 Cold Start 복귀를 각각 확인합니다.

## Flutter 처리 시 문제 판단

- 문제의 원인을 Flutter Framework 자체로 단정하지 않습니다.
- 범용 플러그인이 Android Intent의 Package, Fallback URL 또는 Extra를 완전하게 지원하는지 확인합니다.
- 플러그인이 Android·iOS의 서로 다른 오류를 하나의 예외로 축약하는지 확인합니다.
- Flutter의 `inactive` 또는 `paused` 상태만으로 성공, 실패, 취소와 단순 앱 전환을 구분하지 않습니다.
- Cold Start 또는 Flutter Engine 재생성 과정에서 복귀 정보가 유실되는지 확인합니다.
- 결제사 URL과 Scheme을 Web과 Flutter에서 중복 관리하지 않습니다.
- WebView Navigation, 사용 중인 플러그인, 앱 설정, 수명주기와 결제사 URL 규격을 계층별로 확인합니다.
- 플러그인이 요구사항을 충족하고 실제 기기에서 검증되었다면 Native 분리를 목적으로 불필요하게 교체하지 않습니다.

## 금지 사항

- 결제사 설정과 결제 업무 규칙을 Native에 중복 구현하지 않습니다.
- WebView에서 전달된 임의의 Intent 또는 Scheme을 검증 없이 실행하지 않습니다.
- Native 실행 Callback이나 앱 복귀 이벤트를 결제 성공으로 변환하지 않습니다.
- Backend endpoint, method, status, 요청·응답 필드와 Callback 처리 방식을 임의로 만들지 않습니다.
- 실제 앱을 확인하지 않고 Platform Channel 이름, Payload와 오류 코드를 확정하지 않습니다.
- 결제 URL의 Query를 Native에서 임의로 제거하거나 변경하지 않습니다.
- 카드번호, CVC, 인증번호, Session Token과 결제사 Secret을 URL, Platform Channel, WebView Bridge 또는 로그에 넣지 않습니다.
- 결제 실패나 결과 미확정을 이유로 새 결제를 자동 실행하지 않습니다.

## 미확정 항목

다음 항목은 실제 앱 설정과 담당자 협의 후 확정합니다.

- Platform Channel과 Method 이름
- Flutter에서 Native로 전달할 Payload
- 허용할 Scheme, Host, Package와 Fallback URL
- Android와 iOS에 등록할 서비스 앱 복귀 Scheme
- 앱 미설치와 외부 앱 실행 실패 오류 계약
- 실행 중 WebView 재개 방식
- Cold Start 복귀 정보의 보관과 전달 방식
- Cold Start에서 진입할 Web 복구 Route
- 중복 Callback과 중복 실행 처리 기준
- 결제사 Return URL, Redirect와 결과 Parameter
- Backend 역할과 전체 API·검증·Callback·상태 계약
- 결제 완료, 실패, 취소와 미확정 상태의 판정 주체

## 검증과 완료 보고

- Android와 iOS 실제 기기에서 확인합니다.
- 결제 앱 설치와 미설치 상태를 각각 확인합니다.
- 정상 실행, 실행 실패와 허용되지 않은 URL을 확인합니다.
- 결제사가 제공하는 성공, 실패, 취소와 사용자 이탈 복귀 시나리오를 확인합니다.
- 백그라운드 복귀와 Cold Start 복귀를 구분해 확인합니다.
- 빠른 중복 Tap, 중복 Callback과 WebView 재생성을 확인합니다.
- 로그에 결제 URL과 민감정보가 노출되지 않는지 확인합니다.
- 결제사 Navigation과 Redirect가 실제 WebView Callback 범위에서 처리되는지 확인합니다.
- 완료 보고에는 확인한 실제 소스와 설정, 수행한 실제 기기 검증, 미확정 계약과 수행하지 못한 검증을 남깁니다.
- 검토하지 않은 Backend와 결제사 설정까지 문제가 없다고 단정하지 않습니다.
