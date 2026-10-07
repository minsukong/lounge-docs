---
name: lounge-api-review
description: 더라운지 API 계약의 FE 영향과 누락을 검토한다. API 문서 협의·계약 변경·연동 착수 전에 사용한다.
---

# lounge-api-review

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## 작업

docs/workflow/contract-review.md의 API 부분과 승인 계약, 관련 카드만 읽는다.
입출력 의미·필수/null·enum·검증, 인증·권한·만료, 업무 오류·전송 오류, 목록·금액·시간의 의미, 필요한 재시도·중복 제출, Query 캐시·로그아웃, 소비자·버전·배포 순서를 관련 범위에서 검토한다.
- 계약 문서에 없는 endpoint·DTO·parser를 생성해 계약으로 제시하지 않는다.
- 프론트 판단과 BE·운영 승인 항목을 구분한다. API Agreed와 mock 전략은 별도다.
- 계약 전 mock·fixture·handler는 만들지 않는다. 합의된 계약이 있어도 mock 도입·재현 범위·관리 책임이 결정되지 않았다면 질문으로 남긴다.
- 결제·주문 변경이면 실패·중복·복귀 후 상태 조회가 실제 계약에 정의됐는지 확인하며 정책을 대신 정하지 않는다.
결과는 합의 근거 / 누락·충돌 / FE 영향 / 담당별 질문 / 이번 카드의 차단 여부다. 리뷰가 계약 승인으로 바뀌지 않게 한다.

## 출처와 적용 의도

더라운지에서 추가한 프로젝트 지침이며 Matt 원본 스킬의 1:1 이식이 아니다. 실제 API 계약의 누락·충돌과 FE 영향을 검토한다. 서버 계약을 FE의 추측으로 대체하지 않기 위해.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
