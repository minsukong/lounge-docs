---
name: lounge-spec
description: 합의된 내용을 더라운지 기능 명세로 정리한다. 여러 세션·카드에 걸치는 기능을 문서화할 때 사용한다.
---

# lounge-spec

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## docs 적용

이번 작업에 해당하는 항목만 읽고 아래 기준을 판단에 적용한다. 아래 상대 링크는 공용 원본 SKILL.md 위치 기준이며, 내보낸 복사본에서는 시작 위치에서 찾은 문서 저장소의 `docs/workflow/skills/[스킬 이름]/`를 기준으로 해석한다.

- 범위·플랫폼·공통 기반을 정리할 때 [프로젝트 핵심 정보](../../../ai/project.md)를 확인해 이번 기능의 책임과 제외 범위에 반영한다.
- 화면·폼 명세에는 [UI 기준](../../../ai/ui.md)·[접근성 기준](../../../ai/accessibility.md)을, 비동기 흐름에는 [네트워크·성능 기준](../../../ai/performance.md)을 적용해 관찰 가능한 상태·실패·복구 조건을 적는다.
- 인증·외부 입력은 [보안 기준](../../../ai/security.md), Native 경계는 [WebView 가이드](../../../guides/platform/webview/app_webview_guide.html), 외부 결제는 [외부 결제 기준](../../../ai/app_external_payment.md)으로 책임·계약 확인 항목을 정리한다.
- 완료 조건에는 [품질 기준](../../../ai/quality.md)과 해당 UI의 [Storybook 기준](../../../ai/storybook.md)을 사용해 검증 경계를 정한다. 적용한 문서·항목을 명세의 구현 판단·완료 조건에 연결하고, 가이드 예시와 승인된 동작·계약을 구분한다.

## 작업

docs/workflow/spec-template.md를 사용한다. 기존 대화·승인된 기획·계약·결정에서 명세를 작성하며 새 인터뷰나 새 정책 결정을 섞지 않는다.
- 사용자 목표·이번 범위·플랫폼 책임·근거를 먼저 기록한다.
- 적용되는 성공·실패·취소·뒤로가기·재진입·로딩·빈 상태를 기술한다.
- IA 후보와 승인된 동작, UI 모델과 API 계약을 구분한다. 근거 없는 항목은 TBD와 결정 ID로 남긴다.
- 모듈·상태 책임·재사용 방향과 관찰 가능한 검증 경계를 설명한다. 실제 파일·라인은 작업 시 최신 코드로 확인한다.
- 작은 수정은 카드 하나로 처리하며 불필요한 장문 명세를 만들지 않는다.
명세 요청 범위에서 specs/에 작성한다. 전체 기능에 Ready를 자동 부여하거나 Issue 게시·코드 구현으로 이어가지 않는다.

## 출처와 적용 의도

[to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md)의 역할을 참고해 더라운지에 맞게 재작성한 스킬이다. 이미 논의한 사용자 목표·범위·구현 및 검증 결정을 명세로 정리한다. 프로젝트 명세 양식과 로컬 기록을 사용한다. 미정 계약은 TBD로 남기며 명세 작성만으로 Ready·게시·구현을 부여하지 않는다.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
