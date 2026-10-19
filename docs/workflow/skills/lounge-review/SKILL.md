---
name: lounge-review
description: 더라운지 변경을 저장소 규칙과 작업 명세 두 관점으로 검토한다. 코드·문서 diff 리뷰나 구현 완료 검토에 사용한다.
---

# lounge-review

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## docs 적용

이번 작업에 해당하는 항목만 읽고 아래 기준을 판단에 적용한다. 아래 상대 링크는 공용 원본 SKILL.md 위치 기준이며, 내보낸 복사본에서는 시작 위치에서 찾은 문서 저장소의 `docs/workflow/skills/[스킬 이름]/`를 기준으로 해석한다.

- 카드와 diff의 변경 영역에 해당하는 기준을 선택한다. 플랫폼·공유·상태 책임은 [프로젝트 핵심 정보](../../../ai/project.md), UI는 [UI 기준](../../../ai/ui.md)·[디자인 토큰 기준](../../../ai/design-tokens.md)·[접근성 기준](../../../ai/accessibility.md), Figma 일치 검토는 [Figma 작업 기준](../../../ai/figma.md)과 비교한다.
- API·세션 변경은 [네트워크](../../../common-source/network.md)·[세션 참고 구현](../../../common-source/session.md)과 승인 계약을, 인증·외부 입력·개인정보는 [보안 기준](../../../ai/security.md)을, 비동기 상태·복구는 [네트워크·성능 기준](../../../ai/performance.md)을 대조한다. 참고 예시와 구조가 다르다는 이유만으로 결함을 판정하지 않는다.
- Native·결제 경계는 해당하는 [WebView 가이드](../../../guides/platform/webview/app_webview_guide.html)·[외부 결제 기준](../../../ai/app_external_payment.md), 앱·라우트·검수·빌드·배포 설정은 [빌드 경계 기준](../../../guides/architecture/build-boundary.md)으로 검토한다.
- [품질 기준](../../../ai/quality.md)·[Storybook 기준](../../../ai/storybook.md)으로 필요한 검증·Story 상태와 실제 실행 결과를 대조한다. 카드에 빠진 적용 기준도 변경 영역에서 확인하고, 해당 문서·항목·코드 근거·사용자 영향을 결함 또는 검토 한계에 연결한다.
- 요약만으로 판정하기 어렵거나 문서·코드가 충돌하면 요약이 연결한 상세 원본의 해당 부분을 확인한다. 기획·API·Bridge의 승인 여부와 기술 가이드 준수 여부를 별도로 판단한다.

## 작업

변경 대상·비교 기준·작업 카드·명세·관련 AGENTS.md를 확인한다. 작업 중 변경이면 staged·unstaged·untracked를 구분하고 새 파일도 리뷰한다. branch 리뷰는 제공된 실제 base·merge-base를 확인한다.
- 규칙 관점: 저장소 지침·실제 기존 패턴·상태 책임·계약·접근성·검증 기준과 비교한다.
- 명세 관점: 카드의 허용 범위·완료 조건·플랫폼·실패/취소 처리와 비교한다. 누락·오구현·요청 외 확장을 찾는다.
- 화면·Feature 구현·확장·구조 변경에는 [TSX 구조 기준](../../../guides/frontend/component-structure.md)으로 파일 역할·데이터/동작/UI 분리, 상태 중복·순환 import·과도한 Props·Server/Client 경계와 표시 동작 보존을 확인한다. 약 200줄 초과의 분리 또는 유지 근거를 확인하되 줄 수만으로 결함을 판정하지 않는다.
- API·Bridge 영향이 있으면 해당 계약 근거와 미실행 실기기 검증을 확인한다.
- 근거가 확인되는 결함을 파일·위치·영향·수정 방향으로 보고한다. 추상화 취향을 규칙 위반처럼 보고하지 않는다.
- 명세나 계약이 없으면 해당 검토 불가·TBD를 보고하며 추측으로 통과시키지 않는다.
두 관점을 분리하고 실행한 검사·미실행·잔여 차단을 보고한다. 리뷰 요청만으로 수정·commit·게시하지 않는다. 병렬 에이전트가 없어도 두 관점을 순차 검토할 수 있다.

## 출처와 적용 의도

[code-review](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md)의 역할을 참고해 더라운지에 맞게 재작성한 스킬이다. 저장소 규칙 적합성과 요청 명세 충족을 두 관점으로 나누어 검토한다. API·Bridge·실기기 검증 경계를 추가하고, 병렬 에이전트 없이 순차 검토할 수 있게 한다. 명세가 없으면 해당 검토 한계를 남긴다.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
