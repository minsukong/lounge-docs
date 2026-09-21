# WebView 외부 결제 작업 핵심 규칙

> 기준 원본: [WebView 외부 결제 안정화 가이드](../guides/platform/webview/app_external_payment.html)
>
> 이 문서는 AI 코딩용 요약입니다. 결제사 URL 규격, 앱 설정 또는 복귀 흐름의 세부 판단이 필요하면 기준 원본과 실제 프로젝트 설정을 확인합니다.

## 적용 범위

다음 작업에서 이 문서를 확인합니다.

- WebView 외부결제 연동
- 결제 앱 또는 인증 앱 실행
- Android Intent와 Custom Scheme 처리
- iOS Custom Scheme과 외부 URL 처리
- 결제 후 서비스 앱 복귀
- Flutter WebView Navigation Delegate 처리
- 외부결제 중 앱 수명주기와 Cold Start 대응
- 외부 앱 실행 실패와 앱 미설치 처리

## 현재 확정 사항

- 외부 결제는 WebView 방식으로 처리합니다.
- 결제사 Native SDK는 사용하지 않습니다.
- Native SDK용 `payment.open` 흐름은 적용하지 않습니다.
- 외부 결제 화면과 결제사 연동 설정은 Web이 소유합니다.
- 결제 요청, Return URL과 결과 화면은 Web에서 처리합니다.
- Flutter는 WebView에서 발생한 외부 앱 URL을 감지해 Native에 전달합니다.
- Android와 iOS Native는 허용된 외부 앱을 실행하는 OS 연동을 담당합니다.
- 서비스 앱으로 돌아오기 위한 Scheme은 Native 앱 설정에 등록합니다.
- Native와 Flutter는 결제 결과를 판정하거나 결제 상태를 관리하지 않습니다.

## 작업 전 확인

- `apps/mobile`의 실제 WebView 구현과 사용 중인 Flutter package를 확인합니다.
- 실제 Navigation Delegate와 Platform Channel 구성을 확인합니다.
- Android Manifest의 Intent Filter와 Package Query를 확인합니다.
- iOS URL Types와 `LSApplicationQueriesSchemes`를 확인합니다.
- 결제사에서 제공한 Intent, Scheme, Return URL과 Redirect 규격을 확인합니다.
- Web에서 전달하는 외부 URL 형식을 확인합니다.
- 실제 소스와 협의에서 확인되지 않은 Method, Payload, Scheme과 오류 코드를 추측하지 않습니다.

## 처리 책임

### Web

- 결제사 연동 설정
- 외부 결제 화면과 사용자 흐름
- 결제 요청
- 외부 앱 URL 발생
- Return URL과 결과 Parameter 처리
- 앱 복귀 후 표시할 화면

Backend와 연결되는 요청 및 결과 확인 방식은 아직 확정하지 않습니다.

### Flutter

- WebView Navigation에서 외부 앱 URL 감지
- 외부 URL을 Android·iOS Native에 중계
- 앱 복귀 후 기존 WebView 재개
- Cold Start에서 협의된 Web 복구 Route 진입 조정

Flutter에서 결제사별 업무 규칙과 결과 판정을 구현하지 않습니다.

### Android Native

- 허용된 Android Intent 분석
- 허용된 Custom Scheme 검증
- OS에 외부 앱 실행 요청
- 앱 미설치와 실행 실패 처리
- 서비스 앱 복귀 Scheme 등록
- 복귀 이벤트를 Flutter에 전달

### iOS Native

- 허용된 Custom Scheme 또는 HTTPS URL 검증
- OS에 외부 앱 실행 요청
- 앱 미설치와 실행 실패 처리
- 서비스 앱 복귀 Scheme 등록
- 복귀 이벤트를 Flutter에 전달

## 외부 URL 처리 원칙

- WebView에서 감지한 외부 URL은 Flutter를 거쳐 Native에 전달합니다.
- Native는 Scheme, Host, Package와 Fallback URL을 허용 목록과 비교합니다.
- 허용된 요청은 원본 URL을 임의로 변경하지 않고 실행합니다.
- 허용되지 않은 요청은 일부 값만 제거해 실행하지 않고 요청 전체를 거부합니다.
- 결제 URL의 Query와 Intent Extra를 임의로 삭제하거나 재구성하지 않습니다.
- 앱 미설치, 허용되지 않은 URL과 OS 실행 실패를 구분합니다.
- 결제사 URL과 Scheme을 Web과 Flutter 양쪽에서 중복 관리하지 않습니다.

## Android 확인 사항

- `intent:` URL은 Android Native에서 분석합니다.
- 앱 설치 여부를 `PackageManager`로 사전 조회하는 경우에만 Package Visibility 설정을 검토합니다.
- 사전 조회 없이 `startActivity()`를 호출하면 `ActivityNotFoundException`을 처리합니다.
- `shouldOverrideUrlLoading`이 모든 Navigation에서 호출된다고 가정하지 않습니다.
- POST 요청은 `shouldOverrideUrlLoading`으로 처리되지 않을 수 있습니다.
- 결제사별 Navigation과 Redirect 방식을 실제 Android WebView에서 확인합니다.
- Manifest에는 확정된 Package Query, Intent Filter와 복귀 Scheme만 등록합니다.

## iOS 확인 사항

- 외부 URL은 iOS의 URL 열기 기능을 통해 실행합니다.
- `canOpenURL`로 설치 여부를 조회할 Scheme만 `LSApplicationQueriesSchemes` 등록을 검토합니다.
- `LSApplicationQueriesSchemes`를 외부 URL 실행 허용 목록으로 사용하지 않습니다.
- URL Types에는 확정된 서비스 앱 복귀 Scheme만 등록합니다.
- 앱이 실행 중인 복귀와 Cold Start 복귀를 각각 확인합니다.

## 앱 복귀와 결제 결과

- 외부 앱 실행 성공은 결제 성공을 의미하지 않습니다.
- Native 실행 Callback은 결제 결과가 아닙니다.
- 서비스 앱으로 돌아온 사실만으로 성공, 실패 또는 취소를 판단하지 않습니다.
- Flutter의 `inactive`, `paused`와 `resumed` 상태만으로 결제 결과를 구분하지 않습니다.
- Native와 Flutter는 결제사가 전달한 결과값을 임의로 해석하지 않습니다.
- 복귀 후 Web이 결과를 확인하는 방식은 Web·결제사 계약에 맞춰 처리합니다.
- Backend를 통한 결과 확인 여부와 규격은 전체 `TBD`입니다.
- 결과가 확인되지 않았다는 이유로 결제를 자동 재실행하지 않습니다.

## Cold Start와 수명주기

- 앱이 실행 중인 복귀와 프로세스가 종료된 Cold Start를 구분합니다.
- Flutter Engine과 WebView가 준비되기 전에 복귀 정보가 유실되지 않는지 확인합니다.
- 실행 중인 WebView가 있으면 기존 결제 화면 재개를 우선합니다.
- 기존 WebView가 없을 때 사용할 Web 복구 Route는 Web·App 협의 후 확정합니다.
- 복귀 이벤트의 보관 위치와 Flutter 전달 시점은 실제 앱 구조를 확인해 결정합니다.
- 중복 복귀 이벤트와 빠른 중복 Tap을 별도로 확인합니다.

## 보안 원칙

- WebView에서 전달된 임의 Intent 또는 Scheme을 검증 없이 실행하지 않습니다.
- URL Parser와 허용 Scheme, Host, Package를 사용해 검증합니다.
- 카드번호, CVC, 인증번호와 결제사 Secret을 URL이나 Platform Channel로 전달하지 않습니다.
- Session Token과 민감한 결제 Parameter를 로그에 남기지 않습니다.
- 결제 URL 전체를 로그로 출력하지 않습니다.
- 디버깅에 필요한 URL을 기록해야 한다면 민감한 Query와 Extra를 마스킹합니다.
- Fallback URL도 별도의 허용 범위로 검증합니다.

## 금지 사항

- 결제사 설정과 결제 업무 규칙을 Native에 중복 구현하지 않습니다.
- Native Callback을 결제 성공 Callback으로 변환하지 않습니다.
- 앱 복귀 이벤트를 결제 성공 또는 실패 상태로 변환하지 않습니다.
- URL의 Query와 Intent Extra를 임의로 제거하거나 수정하지 않습니다.
- 실제 앱을 확인하지 않고 Platform Channel 계약을 확정하지 않습니다.
- 결제 실패, Timeout 또는 결과 미확정을 이유로 새 결제를 자동 실행하지 않습니다.
- Backend endpoint, method, status, 요청·응답 필드와 상태값을 임의로 만들지 않습니다.

## 미확정 항목

다음 항목은 실제 앱 확인과 담당자 협의 후 확정합니다.

- Platform Channel과 Method 이름
- Flutter에서 Native로 전달할 Payload
- Native에서 Flutter로 반환할 오류 계약
- 허용 Scheme, Host, Package와 Fallback URL
- Android Package Query와 Intent Filter
- iOS URL Types와 조회 대상 Scheme
- 서비스 앱 복귀 Scheme
- 앱 미설치 시 Web 대체 화면
- 실행 중 WebView 재개 방식
- Cold Start 복귀 이벤트의 보관과 전달 방식
- Cold Start에서 사용할 Web 복구 Route
- 중복 Callback과 중복 결제 실행 처리 기준
- 결제사 Return URL, Redirect와 결과 Parameter
- Backend 역할과 API·검증·Callback·상태 계약
- 결제 성공, 실패, 취소와 미확정 상태의 판정 주체

## 검증과 완료 보고

- Android와 iOS 실제 기기에서 확인합니다.
- 결제 앱 설치와 미설치 상태를 각각 확인합니다.
- 정상 실행, 실행 실패와 허용되지 않은 URL을 확인합니다.
- 결제사가 제공하는 성공, 실패, 취소와 사용자 이탈 흐름을 확인합니다.
- 백그라운드 복귀와 Cold Start 복귀를 구분해 확인합니다.
- 빠른 중복 Tap과 중복 복귀 이벤트를 확인합니다.
- Flutter Engine과 WebView 재생성 상황을 확인합니다.
- 결제사별 Navigation과 Redirect가 WebView에서 감지되는지 확인합니다.
- 로그에 결제 URL과 민감정보가 노출되지 않는지 확인합니다.
- 완료 보고에는 확인한 실제 소스, 앱 설정, 실제 기기 검증과 남은 `TBD`를 기록합니다.
- 검토하지 않은 Backend와 결제사 관리자 설정까지 문제가 없다고 단정하지 않습니다.
