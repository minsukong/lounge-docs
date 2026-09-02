# app-webview 작업 지침

## 현재 상태

- 이 앱은 아직 package와 source가 초기화되지 않은 빈 골격입니다.
- 초기화 전에는 설치된 것처럼 package, script, 설정 파일과 import 경로를 만들지 않습니다.
- 앱을 초기화하면 이 문서를 실제 package, 실행 명령과 source 구조에 맞게 갱신합니다.

## 구현 기준

- 저장소 루트 `AGENTS.md`와 현재 작업에 해당하는 `docs/ai/` 문서를 먼저 확인합니다.
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.1 이상과 shadcn/ui `base-nova`는 실제 설치 결과와 잠금 파일을 기준으로 사용합니다.
- 공통 CSS 하한은 Safari 15이며, iOS 15 WKWebView에서 핵심 흐름을 실제 검증합니다.
- 기존 `src/components/ui`와 feature 내부 구현을 새 공통화보다 우선합니다.
- 공통 UI, 독립 검수 가치가 있는 Feature와 사용자 노출 Screen은 Storybook 대상을 함께 확인합니다.
- 기획과 승인된 Backend·Native 계약이 없는 API, 인증, 세션, Bridge, fixture와 Mock은 구현하지 않습니다.
- 실제 반복과 같은 변경 이유가 확인되기 전에는 Wrapper, Adapter, 공통 Store와 package를 선행하지 않습니다.

## 검증

package가 초기화된 뒤에는 실제로 정의된 script만 실행합니다. 기본 확인 순서는 typecheck, lint, test이며 Story 변경은 Storybook 정적 build, 통합 영향은 production build를 추가합니다.
