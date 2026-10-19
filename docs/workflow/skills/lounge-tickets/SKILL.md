---
name: lounge-tickets
description: 더라운지 명세를 검증 가능한 작은 작업 카드와 선행 조건으로 분해한다. FE·BE·Native 의존성이나 작업 순서를 정할 때 사용한다.
---

# lounge-tickets

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## docs 적용

이번 작업에 해당하는 항목만 읽고 아래 기준을 판단에 적용한다. 아래 상대 링크는 공용 원본 SKILL.md 위치 기준이며, 내보낸 복사본에서는 시작 위치에서 찾은 문서 저장소의 `docs/workflow/skills/[스킬 이름]/`를 기준으로 해석한다.

- 플랫폼별 담당·공유 기반 분해에는 [프로젝트 핵심 정보](../../../ai/project.md)를 사용한다. 실제 코드·사용처와 비교해 공통 UI와 앱별 작업의 책임을 나눈다.
- UI 카드는 [UI 기준](../../../ai/ui.md)·[접근성 기준](../../../ai/accessibility.md)·[Storybook 기준](../../../ai/storybook.md), 비동기 카드는 [네트워크·성능 기준](../../../ai/performance.md)으로 구현과 검수 범위를 함께 잡는다.
- 인증·API·Native 경계는 해당하는 [보안 기준](../../../ai/security.md)·[네트워크 참고 구현](../../../common-source/network.md)·[WebView 가이드](../../../guides/platform/webview/app_webview_guide.html)로 필요한 협의와 검증을 찾는다. 참고 구현을 합의된 계약이나 실제 선행 작업으로 간주하지 않는다.
- [품질 기준](../../../ai/quality.md)으로 카드별 검증 방법을 정하고, 각 카드의 적용 문서·항목을 완료 조건·검증 계획에 연결한다. 문서 목록만으로 별도 카드나 의존성을 만들지 않는다.

## 작업

docs/workflow/task-card.md와 명세를 읽는다.
1. 각 카드가 끝났을 때 확인할 사용자 결과를 정한다. 단순 파일·레이어 개수로 분해하지 않는다.
2. 완성 흐름은 FE·BE·Native 작업을 연결하되 FE에게 다른 팀의 구현을 맡기지 않는다. 계약이 미정이면 독립 UI 범위와 후속 연동 범위를 별도 카드로 구분한다.
3. 선행 카드가 실제로 착수를 막는 이유와 해소 증거를 쓴다. 단순 관련 항목은 Related로 연결한다. 순환 의존성·없는 카드·전체 기반 카드에 대한 과도한 의존을 확인한다.
4. 하나의 작은 맥락에서 완료할 크기로 분해하고 실제 책임자를 기록한다. IA 화면 ID와 고유 작업 ID를 구분한다.
5. 분해 요청이면 카드 문서를 작성할 수 있다. 착수 Ready는 별도 근거로 판단한다. 명세가 있으니 모두 Ready라고 하지 않는다.
결과에 카드별 결과·Blocked by·담당·Ready와 착수 가능한 후보를 보고한다. 외부 tracker 게시와 구현은 사용자의 요청 범위에서만 수행한다.

## 출처와 적용 의도

[to-tickets](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md)의 역할을 참고해 더라운지에 맞게 재작성한 스킬이다. 검수 가능한 작은 결과와 실제 blocking dependency를 기준으로 작업을 나눈다. FE·BE·Native 책임을 연결하고, 계약 미정 시 독립 UI와 후속 통합을 별도 카드로 구분한다. Ready는 따로 판단한다.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
