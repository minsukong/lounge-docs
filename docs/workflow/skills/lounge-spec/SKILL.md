---
name: lounge-spec
description: 합의된 내용을 더라운지 기능 명세로 정리한다. 여러 세션·카드에 걸치는 기능을 문서화할 때 사용한다.
---

# lounge-spec

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## 작업

docs/workflow/spec-template.md를 사용한다. 기존 대화·승인된 기획·계약·결정에서 명세를 작성하며 새 인터뷰나 새 정책 결정을 섞지 않는다.
- 사용자 목표·이번 범위·플랫폼 책임·근거를 먼저 기록한다.
- 적용되는 성공·실패·취소·뒤로가기·재진입·로딩·빈 상태를 기술한다.
- IA 후보와 승인된 동작, UI 모델과 API 계약을 구분한다. 근거 없는 항목은 TBD와 결정 ID로 남긴다.
- 모듈·상태 책임·재사용 방향과 관찰 가능한 검증 경계를 설명한다. 실제 파일·라인은 작업 시 최신 코드로 확인한다.
- 작은 수정은 카드 하나로 처리하며 불필요한 장문 명세를 만들지 않는다.
명세 요청 범위에서 specs/에 작성한다. 전체 기능에 Ready를 자동 부여하거나 Issue 게시·코드 구현으로 이어가지 않는다.
