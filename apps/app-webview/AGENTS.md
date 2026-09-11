# app-webview 작업 지침

## 구현 기준

- 저장소 루트 `AGENTS.md`와 현재 작업에 해당하는 `docs/ai/` 문서를 먼저 확인합니다.
- package, script, 설정, import 경로와 설치 버전은 이 앱에 존재하는 실제 파일과 잠금 파일을 기준으로 사용하며, 확인되지 않은 구성을 추측하지 않습니다.
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.1 이상과 shadcn/ui `base-nova`를 프로젝트 기술 기준으로 사용합니다.
- 공통 CSS 하한은 Safari 15이며, iOS 15 WKWebView에서 핵심 흐름을 실제 검증합니다.
- 기존 `src/components/ui`와 feature 내부 구현을 새 공통화보다 우선합니다.
- 공통 UI, 독립 검수 가치가 있는 Feature와 사용자 노출 Screen은 Storybook 대상을 함께 확인합니다.
- 기획과 승인된 Backend·Native 계약이 없는 API, 인증, 세션, Bridge, fixture와 Mock은 구현하지 않습니다.
- 실제 반복과 같은 변경 이유가 확인되기 전에는 Wrapper, Adapter, 공통 Store와 package를 선행하지 않습니다.

## 검증

실제로 정의된 script만 실행합니다. 기본 확인 순서는 typecheck, lint, test이며 Story 변경은 Storybook 정적 build, 통합 영향은 production build를 추가합니다. 필요한 script가 없으면 존재하는 것처럼 추측하지 않고 확인 결과를 보고합니다.

Production build와 배포 Artifact에는 이 앱의 source와 런타임에 필요한 자산만 포함합니다. 저장소의 `docs/`를 Build 입력, 정적 자산 또는 배포 결과물로 복사하지 않습니다.
