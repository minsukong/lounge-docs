---
name: lounge-bridge-review
description: Flutter와 WebView의 Native Bridge 책임·계약·검증을 검토한다. 인증·PG·딥링크·권한·뒤로가기 등 Native 경계 변경에 사용한다.
---

# lounge-bridge-review

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## 작업

docs/workflow/contract-review.md의 Bridge 부분을 읽고 실제 Native·Web 구현 또는 합의 계약을 확인한다.
- APP IA는 대부분 WebView이며 Native는 현재 원본 View가 Native인 항목으로 구분한다. 파일 제목·FO 접두어로 전체 APP을 Native로 분류하지 않는다. 화면 구현 구분과 필요한 Native 지원·Bridge 계약은 별도로 확인한다.
- 명령·payload·응답·버전·요청 연결·준비 상태·timeout·취소·중복 callback 중 필요한 계약을 확인한다.
- Android/iOS 차이와 웹 브라우저 제외·대체 동작을 승인 근거로 확인한다.
- 뒤로가기·권한 거부·외부 앱/PG 복귀·딥링크·세션 갱신은 이번 기능의 실제 흐름으로 검토한다.
- 합의 없는 전역 객체·command·token 전달·fallback을 발명하지 않는다. 기존 adapter의 실제 사용처를 확인하고 화면에 플랫폼 객체를 흩뿌리지 않는다.
- 실기기 확인 범위·앱/OS 버전·재현 결과를 기록한다. unit test나 Story로 Native 통합이 검증됐다고 하지 않는다.
결과는 책임 경계 / 계약 근거 / 누락·플랫폼 차이 / 차단 범위 / 실기기 확인 또는 미실행이다.

## 출처와 적용 의도

더라운지에서 추가한 프로젝트 지침이며 Matt 원본 스킬의 1:1 이식이 아니다. Flutter와 WebView의 책임·메시지 계약·기기 검증을 확인한다. 하이브리드 앱의 Native 경계를 웹 화면 구현만으로 완료 처리하지 않기 위해.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
