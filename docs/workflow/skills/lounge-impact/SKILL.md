---
name: lounge-impact
description: 더라운지 기능 변경의 화면·계약·상태·플랫폼 영향을 분석한다. 공통 UI·인증·API·회원·결제 변경 전에 사용한다.
---

# lounge-impact

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## docs 적용

이번 작업에 해당하는 항목만 읽고 아래 기준을 판단에 적용한다. 아래 상대 링크는 공용 원본 SKILL.md 위치 기준이며, 내보낸 복사본에서는 시작 위치에서 찾은 문서 저장소의 `docs/workflow/skills/[스킬 이름]/`를 기준으로 해석한다.

- 플랫폼·공통 UI·상태 소유권 영향은 [프로젝트 핵심 정보](../../../ai/project.md)·[UI 기준](../../../ai/ui.md)을 실제 import·소비자와 비교한다. 문서의 공유 계획만으로 실제 공유 구현이라고 판단하지 않는다.
- 공통 UI·토큰 변경은 [디자인 토큰 기준](../../../ai/design-tokens.md)·[접근성 기준](../../../ai/accessibility.md)·[Storybook 기준](../../../ai/storybook.md)으로 영향받는 화면·상태·검수 대상을 찾는다.
- API·세션·인증 변경은 해당하는 [네트워크 참고 구현](../../../common-source/network.md)·[세션 참고 구현](../../../common-source/session.md)·[보안 기준](../../../ai/security.md)·[네트워크·성능 기준](../../../ai/performance.md)으로 캐시·로그아웃·실패·복구 영향을 추적한다.
- Native·외부 결제 변경은 [WebView 가이드](../../../guides/platform/webview/app_webview_guide.html)·[외부 결제 기준](../../../ai/app_external_payment.md), 빌드·라우트·검수 설정 변경은 [빌드 경계 기준](../../../guides/architecture/build-boundary.md)으로 경계를 확인한다.
- [품질 기준](../../../ai/quality.md)으로 영향에 맞는 검증을 연결하고, 결과에 실제 소비자 근거와 적용 문서·항목·갱신 대상을 함께 남긴다.

## 작업

관련 카드와 요청한 변경, 실제 호출자·공유 상태·라우트·계약을 필요한 범위에서 탐색한다.
- 직접 변경과 실제 소비자 영향을 구분한다. IA에 같은 이름이 있다고 공유 구현이라고 단정하지 않는다.
- UI·폼·Query key/무효화·Store·인증·API·Bridge·WebView/웹 차이 중 실제 관련 항목을 확인한다.
- 규칙과 기획·계약의 충돌이 있으면 근거와 영향받는 부분을 적는다.
- 문서·카드·Story·테스트·실기기 검증에 갱신이 필요한 항목을 연결한다.
- 아키텍처 개선은 반복된 변경 비용이나 확인된 결함이 있을 때 별도 후보로 제시한다. 미리 공통화·package·adapter를 만들지 않는다.
결과는 영향 대상 / 근거 / 변경 필요 / 검증 / 담당·차단 조건이다. 영향 분석 요청만으로 코드나 전체 구조를 수정하지 않는다.

## 출처와 적용 의도

더라운지에서 추가한 프로젝트 지침이며 Matt 원본 스킬의 1:1 이식이 아니다. 변경이 실제 소비자·상태·계약·플랫폼에 미치는 영향을 확인한다. 공통 변경의 누락을 줄이되 사전 추상화로 작업 범위를 늘리지 않기 위해.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
