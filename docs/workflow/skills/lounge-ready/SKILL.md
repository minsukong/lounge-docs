---
name: lounge-ready
description: 더라운지 작업 카드의 UI·연동 착수 가능 여부를 판단한다. 작업 시작 전이나 계약 변경 뒤 Ready 체크에 사용한다.
---

# lounge-ready

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## docs 적용

이번 작업에 해당하는 항목만 읽고 아래 기준을 판단에 적용한다. 아래 상대 링크는 공용 원본 SKILL.md 위치 기준이며, 내보낸 복사본에서는 시작 위치에서 찾은 문서 저장소의 `docs/workflow/skills/[스킬 이름]/`를 기준으로 해석한다.

- 범위·담당·코드 위치 판단에는 [프로젝트 핵심 정보](../../../ai/project.md)를 실제 카드·소스와 비교한다.
- UI 착수는 [UI 기준](../../../ai/ui.md)·[접근성 기준](../../../ai/accessibility.md), UI 검수는 [Storybook 기준](../../../ai/storybook.md)·[품질 기준](../../../ai/quality.md)으로 이번 범위를 독립적으로 검증할 수 있는지 확인한다.
- API·인증·비동기 작업은 [보안 기준](../../../ai/security.md)·[네트워크·성능 기준](../../../ai/performance.md), Native 연동은 [WebView 가이드](../../../guides/platform/webview/app_webview_guide.html), 외부 결제는 [외부 결제 기준](../../../ai/app_external_payment.md)에서 필요한 계약·환경·검증 조건을 찾아 실제 증거와 대조한다.
- 앱·라우트·검수·빌드·배포 설정 작업이면 [빌드 경계 기준](../../../guides/architecture/build-boundary.md)을 확인한다. 판정 근거에 적용 문서·항목과 확보된 증거를 연결한다. 가이드가 존재한다는 이유만으로 계약·환경·검증이 준비됐다고 판정하지 않는다.

## 작업

docs/workflow/README.md의 Ready 정의와 작업 카드를 읽는다.
- 범위·완료 조건·출처·플랫폼 담당·실제 코드 위치·검증 방법을 확인한다.
- 이번 목표에 필요한 정책·API·인증·Bridge만 검사한다. 카드와 무관한 프로젝트 전체 미정 항목을 blocker로 만들지 않는다.
- API 또는 Bridge가 Agreed라면 책임자·문서·버전·적용 범위의 증거를 확인한다.
- UI만 독립적으로 검증할 수 있으면 Ready-UI로 판정하고 제외된 연동을 명시한다. 업무 성공을 흉내내는 fake API를 만들지 않는다.
- 필요한 모든 계약과 선행 조건이 해소되면 Ready-Integration, 목표 달성에 필수인 결정이 남으면 Blocked, 근거가 부족하면 TBD로 판정한다.
- 문서·기계적 변경처럼 경계 검토가 필요 없으면 N/A와 이유를 쓴다.
결과는 판정 / 허용 범위 / 제외 범위 / 차단 ID·담당 / 해소 증거 / 다음 행동이다. 기록 요청 범위에서 카드와 진행 대시보드를 갱신한다. Readiness를 출시 승인으로 해석하지 않는다.

## 출처와 적용 의도

더라운지에서 추가한 프로젝트 지침이며 Matt 원본 스킬의 1:1 이식이 아니다. 이번 카드에서 착수 가능한 범위와 증거를 판단한다. 기획·계약이 일부 미정이어도 독립 작업은 진행하고 필수 연동은 기다리기 위해.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
