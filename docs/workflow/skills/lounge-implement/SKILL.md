---
name: lounge-implement
description: Ready가 확인된 더라운지 작업 카드 하나를 front-end/의 앱에서 구현·검증·재개 기록한다. 기능 구현이나 승인된 수정에 사용한다.
---

# lounge-implement

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## 작업

카드의 코드 위치와 가까운 AGENTS.md, package·기존 코드·승인된 근거를 확인한다. Front-end 구현 위치는 lounge-docs의 front-end/이며 WebView 화면은 front-end/webview/다. package가 아직 없으면 새 저장소를 만들지 않고 이 위치에 앱을 만들고, 앱 생성이나 npm 명령을 추측하지 않는다.
1. 카드 범위와 Ready 근거·선행 조건을 검증한다. 미정 계약은 해당 연동을 보류하되 독립적으로 허용된 UI·문서 범위는 진행한다.
2. 변경 영향과 기존 컴포넌트·폼·상태 패턴을 확인해 최소 범위로 구현한다. Ready-UI에서 fake 업무 성공을 만들지 않는다.
3. 중요한 분기·폼·상태·사용자 행동은 카드에 적힌 관찰 경계에서 한 실패 테스트 → 최소 구현 → 검증을 반복한다. 단순 표시·클래스·라이브러리 내부를 테스트하지 않는다. 승인 계약 전 API mock·fixture·handler를 만들지 않는다.
4. 실제 scripts에 따라 타입·린트·필요 테스트, Story 변경의 정적 Build, 통합 영향의 앱 Build를 수행한다. 실기기·브라우저 미실행은 분리 보고한다.
5. diff를 규칙 적합성과 카드 명세 적합성으로 검토한다. 검증 실패·잔여 차단을 Done에 숨기지 않는다.
6. 카드에 변경·검증·미완료·다음 행동을, progress 작업 대시보드에 요약을 기록한다.
구현 요청만으로 commit·push·Issue/PR 게시·merge·배포를 실행하지 않는다. 현재 카드의 결과와 전체 기능의 출시 상태를 구분한다.

## 출처와 적용 의도

[implement](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md) · [tdd](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md)의 역할을 참고해 더라운지에 맞게 재작성한 스킬이다. 명세·티켓 범위를 구현하고 관찰 가능한 행동을 테스트한 뒤 리뷰한다. Ready와 실제 코드 위치를 확인한다. 필요한 행동 테스트, Storybook·앱 build와 미검증 환경·재개 기록을 연결한다. commit은 자동 수행하지 않는다.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
