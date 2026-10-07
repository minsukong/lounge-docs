---
name: lounge-review
description: 더라운지 변경을 저장소 규칙과 작업 명세 두 관점으로 검토한다. 코드·문서 diff 리뷰나 구현 완료 검토에 사용한다.
---

# lounge-review

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## 작업

변경 대상·비교 기준·작업 카드·명세·관련 AGENTS.md를 확인한다. 작업 중 변경이면 staged·unstaged·untracked를 구분하고 새 파일도 리뷰한다. branch 리뷰는 제공된 실제 base·merge-base를 확인한다.
- 규칙 관점: 저장소 지침·실제 기존 패턴·상태 책임·계약·접근성·검증 기준과 비교한다.
- 명세 관점: 카드의 허용 범위·완료 조건·플랫폼·실패/취소 처리와 비교한다. 누락·오구현·요청 외 확장을 찾는다.
- API·Bridge 영향이 있으면 해당 계약 근거와 미실행 실기기 검증을 확인한다.
- 근거가 확인되는 결함을 파일·위치·영향·수정 방향으로 보고한다. 추상화 취향을 규칙 위반처럼 보고하지 않는다.
- 명세나 계약이 없으면 해당 검토 불가·TBD를 보고하며 추측으로 통과시키지 않는다.
두 관점을 분리하고 실행한 검사·미실행·잔여 차단을 보고한다. 리뷰 요청만으로 수정·commit·게시하지 않는다. 병렬 에이전트가 없어도 두 관점을 순차 검토할 수 있다.

## 출처와 적용 의도

[code-review](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md)의 역할을 참고해 더라운지에 맞게 재작성한 스킬이다. 저장소 규칙 적합성과 요청 명세 충족을 두 관점으로 나누어 검토한다. API·Bridge·실기기 검증 경계를 추가하고, 병렬 에이전트 없이 순차 검토할 수 있게 한다. 명세가 없으면 해당 검토 한계를 남긴다.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
