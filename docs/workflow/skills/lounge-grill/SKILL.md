---
name: lounge-grill
description: 기획·IA의 애매한 요구사항을 질문과 결정 기록으로 정리한다. 더라운지 기능의 정책·용어·담당이 불명확할 때 사용한다.
---

# lounge-grill

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## docs 적용

이번 작업에 해당하는 항목만 읽고 아래 기준을 판단에 적용한다. 아래 상대 링크는 공용 원본 SKILL.md 위치 기준이며, 내보낸 복사본에서는 시작 위치에서 찾은 문서 저장소의 `docs/workflow/skills/[스킬 이름]/`를 기준으로 해석한다.

- 서비스 범위·용어·플랫폼 담당이 쟁점이면 [프로젝트 핵심 정보](../../../ai/project.md)와 지정된 기획 자료를 확인해, 이미 정해진 범위와 새로 결정할 질문을 구분한다.
- 화면·폼·상태 흐름을 질문할 때는 [UI 기준](../../../ai/ui.md)·[접근성 기준](../../../ai/accessibility.md)을 확인한다. 로딩·실패·재시도·오프라인이 관련되면 [네트워크·성능 기준](../../../ai/performance.md)으로 빠진 상황을 찾는다.
- 인증·개인정보·외부 URL이 관련되면 [보안 기준](../../../ai/security.md), 앱·웹 책임이면 [WebView 개요](../../../guides/platform/webview/app_webview_overview.html), 외부 결제이면 [외부 결제 기준](../../../ai/app_external_payment.md)을 확인해 담당별 질문을 구분한다.
- 결과에 답의 근거가 된 문서·항목과 남은 결정 ID를 연결한다. 기술 가이드의 예시를 업무 정책이나 합의된 계약으로 사용하지 않는다.

## 작업

1. 관련 IA의 파일·원본 행·화면 ID, 요청과 승인 근거를 읽는다. 기존 코드가 있다면 현재 동작과 차이만 확인한다.
2. 확인된 내용, 후보, 모순, 미정을 구분한다. 착수를 막는 핵심 질문부터 제시한다. 자료에 이미 답이 있는 질문은 반복하지 않는다.
3. 질문마다 실제 상황과 선택지를 제시한다. 예: 탈퇴 시 미사용 이용권이 있는 상황의 담당 결정은 무엇인가. 사례는 질문이며 정책 제안의 확정 근거가 아니다.
4. 사용자 답이 어느 범위를 결정하고 어떤 BE·Native·운영 협의가 남는지 구분한다.
5. 문서 정리 요청이 있으면 docs/workflow/decisions.md에 질문·책임자·근거·적용 범위·해소 조건을 기록한다. 합의된 용어만 용어집에, 대안의 이유가 필요한 큰 결정만 ADR에 남긴다.
6. Figma(기획서) 보완 코멘트를 작성·게시할 때는 [프론트·백엔드 공통 코멘트 양식](../../decisions.md#comment-template)을 사용한다. 기존 답·중복 질문을 확인하고 결정할 내용과 기획서 반영 요청·개발 영향을 구체화한다. 초안 요청은 게시로 확대하지 않고, 게시 요청은 실제 도구·권한과 결과 ID·링크로 확인한다. 답변 후 DEC·관련 카드·기획서 반영 여부를 갱신한다.
결과는 확인된 사실 / 결정된 내용 / 남은 질문 / 시작 가능한 부분으로 보고한다. 질문을 정리했다는 이유로 실제 구현을 시작하지 않는다.

## 출처와 적용 의도

[grill-with-docs](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md) · [domain-modeling](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md)의 역할을 참고해 더라운지에 맞게 재작성한 스킬이다. 질문으로 요구와 용어를 구체화하고 결정 이유를 남긴다. IA 파일·행·ID, 정책 결정자와 BE·Native 협의 범위를 연결한다. 합의된 용어와 필요한 큰 결정만 기록한다.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
