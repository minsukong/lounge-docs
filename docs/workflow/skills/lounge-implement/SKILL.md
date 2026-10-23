---
name: lounge-implement
description: Ready가 확인된 더라운지 작업 카드 하나를 front-end/의 앱에서 구현·검증·재개 기록한다. 기능 구현이나 승인된 수정에 사용한다.
---

# lounge-implement

## 시작 위치
사용자가 지정한 문서 저장소에서 루트 AGENTS.md, docs/AGENTS.md와 docs/workflow/AGENTS.md의 해당 항목을 확인한다. 실제 코드 workspace의 lounge-workflow.json이 있으면 docs_root를 workspace 기준으로 해석해 문서 저장소를 찾는다. 설정이 없고 현재 저장소에 docs/workflow/가 있으면 그 위치를 사용한다. 그 외에는 문서 위치를 먼저 확인하고 임의 경로를 만들지 않는다. 자동 스킬 호출이 없어도 이 SKILL.md를 직접 읽어 수행할 수 있다.
가까운 AGENTS.md와 이번 카드·근거를 우선한다. 참고 문서는 이번 판단에 필요한 것만 읽는다. IA는 후보 자료이며, 승인 없는 정책·endpoint·parser·API mock·fixture·handler·Bridge command를 만들지 않는다.

## docs 적용

이번 작업에 해당하는 항목만 읽고 아래 기준을 판단에 적용한다. 아래 상대 링크는 공용 원본 SKILL.md 위치 기준이며, 내보낸 복사본에서는 시작 위치에서 찾은 문서 저장소의 `docs/workflow/skills/[스킬 이름]/`를 기준으로 해석한다.

- 플랫폼·상태 책임·공통 기반을 구현할 때 [프로젝트 핵심 정보](../../../ai/project.md)를 실제 코드·설정과 비교한다. UI 변경에는 [UI 기준](../../../ai/ui.md), 색상·간격·테마·토큰에는 [디자인 토큰 기준](../../../ai/design-tokens.md), 입력·탐색·Dialog에는 [접근성 기준](../../../ai/accessibility.md)을 적용한다. Figma 기반 구현은 [Figma 작업 기준](../../../ai/figma.md)을 추가로 확인한다.
- 컴포넌트·Provider, 스타일, 타입·외부 값 검증의 세부 구현이 필요하면 각각 [React](../../../common-source/react.md)·[Tailwind](../../../common-source/tailwind.md)·[TypeScript 참고 구현](../../../common-source/typescript.md)의 해당 부분을 실제 설치 버전·기존 사용처와 비교해 선별 적용한다. 예시 파일·패키지를 그대로 생성하지 않는다.
- 계약이 합의된 API·세션 구현은 해당하는 [네트워크](../../../common-source/network.md)·[세션 참고 구현](../../../common-source/session.md)을 확인한다. 로딩·재시도·오프라인은 [네트워크·성능 기준](../../../ai/performance.md), 인증·외부 입력·저장소는 [보안 기준](../../../ai/security.md)을 구현·검증에 적용한다. 참고 코드가 미정 계약의 구현 허용 근거가 되지는 않는다.
- Native 연동이면 [WebView 가이드](../../../guides/platform/webview/app_webview_guide.html), 외부 결제이면 [외부 결제 기준](../../../ai/app_external_payment.md)으로 이번 Web 책임과 합의된 Bridge·서버 계약을 대조한다.
- 검증에는 [품질 기준](../../../ai/quality.md)을, 공통 UI·Feature·Screen의 Props·주요 상태·구조 변경에는 [Storybook 기준](../../../ai/storybook.md)을 적용한다. 테스트·Story 세부 작성이 필요할 때 [테스트](../../../common-source/test.md)·[Storybook 참고 구현](../../../common-source/storybook.md)을 추가로 확인한다.
- 카드의 적용 문서·항목을 구현 판단·완료 조건·검증 결과와 연결한다. 요약만으로 판단할 수 없거나 문서 간 충돌이 있으면 요약의 기준 원본 링크에서 해당 세부 항목을 확인하고 차이·미정·미검증을 기록한다.

## 작업

카드의 코드 위치와 가까운 AGENTS.md, package·기존 코드·승인된 근거를 확인한다. Front-end 구현 위치는 lounge-docs의 front-end/이며 브라우저·앱 WebView 공용 단일 웹 애플리케이션은 front-end/web/, 공통 UI·스타일·Storybook은 front-end/packages/ui/다. 기존 workspace·공용 잠금 파일과 대상 package·사용처를 확인해 이어서 구현한다. 실제로 package가 없는 새 영역의 초기 구성이 요청된 경우에만 생성 범위를 확인하며, 새 저장소·앱 생성이나 npm 명령을 추측하지 않는다.
앱 초기 구성·라우트 추가·개발용 preview·Storybook 설정·빌드·배포 설정 변경 전에는 [앱·개발 화면·배포 경계 필수 기준](../../../guides/architecture/build-boundary.md)과 해당 앱의 BUILD.md를 반드시 확인한다. 변경 코드의 앱·검수 범위와 최종 배포 경로를 정하고, 운영 라우트·import·스타일·결과물의 제외 설정을 구현과 함께 반영한다. 검증 생략은 기록하되 검증 완료로 표시하지 않는다.

1. 카드 범위와 Ready 근거·선행 조건을 검증한다. 미정 계약은 해당 연동을 보류하되 독립적으로 허용된 UI·문서 범위는 진행한다.
2. 변경 영향과 기존 컴포넌트·폼·상태 패턴을 확인해 최소 범위로 구현한다. 화면·Feature 신규 구현과 데이터·상태·주요 UI 확장에는 [TSX 구조 기준](../../../guides/frontend/component-structure.md)을 반드시 적용한다. 카드에 필요한 파일 역할·상태 소유자를 적고, 긴 고정 데이터·복잡한 처리·독립 UI가 커지는 동안 분리한다. 직접 작성한 TSX 약 200줄 초과는 구조 검토 신호이며 분리 또는 유지 이유를 기록한다. Ready-UI에서 fake 업무 성공을 만들지 않는다.
3. 중요한 분기·폼·상태·사용자 행동은 카드에 적힌 관찰 경계에서 한 실패 테스트 → 최소 구현 → 검증을 반복한다. 단순 표시·클래스·라이브러리 내부를 테스트하지 않는다. 승인 계약 전 API mock·fixture·handler를 만들지 않는다.
4. 실제 scripts에 따라 타입·린트·필요 테스트, Story 변경의 정적 Build, 통합 영향의 앱 Build를 수행한다. 실기기·브라우저 미실행은 분리 보고한다.
5. diff를 규칙 적합성과 카드 명세 적합성으로 검토한다. 검증 실패·잔여 차단을 Done에 숨기지 않는다.
6. 카드에 변경·검증·미완료·다음 행동을, progress 작업 대시보드에 요약을 기록한다.
구현 요청만으로 commit·push·Issue/PR 게시·merge·배포를 실행하지 않는다. 현재 카드의 결과와 전체 기능의 출시 상태를 구분한다.

## 출처와 적용 의도

[implement](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md) · [tdd](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md)의 역할을 참고해 더라운지에 맞게 재작성한 스킬이다. 명세·티켓 범위를 구현하고 관찰 가능한 행동을 테스트한 뒤 리뷰한다. Ready와 실제 코드 위치를 확인한다. 필요한 행동 테스트, Storybook·앱 build와 미검증 환경·재개 기록을 연결한다. commit은 자동 수행하지 않는다.

[출처·대응·변경 이유 안내](../../index.md#6-공용-스킬-9개-선택-기준)는 참고 자료다. 원본 번들 설치·자동 갱신을 전제로 하지 않으며, 실행 기준은 이 스킬과 적용 지침·카드다.
