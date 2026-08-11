# Lounge Front-end AI 지침

이 문서는 저장소 전체에 적용되는 AI 작업 진입점입니다. 긴 가이드를 모두 읽지 말고 현재 작업에 해당하는 `docs/ai/` 문서만 추가로 읽습니다.

## 프로젝트 기준

- 실제 애플리케이션은 `apps/app-webview`입니다.
- 화면 코드는 React 19와 TypeScript로 작성합니다.
- 스타일은 Tailwind CSS 4와 `src/app/globals.css`의 의미 기반 토큰을 사용합니다.
- Next.js 16 App Router 규칙은 `apps/app-webview/AGENTS.md`와 설치된 Next.js 문서를 따릅니다.
- 기존 `src/components/ui`의 shadcn/ui와 프로젝트 컴포넌트를 새 코드보다 우선합니다.
- 요청하지 않은 기능, 상태, 공통화 또는 패키지를 미리 추가하지 않습니다.

## AI 생성 코드 기준

- Figma나 화면 설명에서 코드를 만들 때 React 함수 컴포넌트와 TSX로 구현합니다.
- 일반적인 UI 스타일은 Tailwind CSS 4 유틸리티로 작성합니다.
- 별도 CSS 파일, CSS Module, CSS-in-JS 또는 인라인 `style`은 기존 코드나 명확한 요구가 있을 때만 사용합니다.
- 원시 색상값보다 `bg-background`, `text-foreground`, `border-border` 같은 프로젝트 토큰을 사용합니다.
- 단순 정적 HTML 결과로 끝내지 말고 현재 Next.js 애플리케이션에 동작하는 컴포넌트로 구현합니다.
- Figma export와 AI 생성 결과는 초안으로 보고 구조, 토큰, 접근성 및 반응형 동작을 검토합니다.

## AI 문서 확인 흐름

AI는 작업을 시작할 때 이 `AGENTS.md`를 먼저 읽습니다. 이후 작업 종류를 판단해 필요한 `docs/ai/` 요약만 확인하고, 요약만으로 세부 기준을 판단하기 어려울 때 연결된 HTML 상세 가이드로 이동합니다.

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TD
  accTitle: AI의 Front-end 가이드 확인 흐름
  accDescr: AI는 작업 요청을 받으면 AGENTS.md를 먼저 읽고 작업 종류에 맞는 docs/ai 요약 문서를 선택한 뒤, 세부 기준이 필요할 때만 연결된 HTML 상세 가이드를 확인합니다.
  A([작업 요청]) --> B["AGENTS.md 먼저 읽기"]
  B --> C{"어떤 작업인가?"}
  C -->|"프로젝트 구조·기능·상태"| P["docs/ai/project.md"]
  C -->|"UI·컴포넌트·스타일"| U["docs/ai/ui.md + design-tokens.md"]
  C -->|"Figma 구현"| F["docs/ai/figma.md + ui.md + design-tokens.md"]
  C -->|"Lint·Test·품질"| Q["docs/ai/quality.md"]
  C -->|"Ollama·Continue·로컬 LLM"| L["docs/ai/local-llm.md"]
  P -->|"세부 기준이 필요할 때"| PH["frontend_guide/index.html + monorepo/index.html"]
  U -->|"세부 기준이 필요할 때"| UH["frontend_guide/index.html + UI 상세 가이드"]
  F -->|"세부 기준이 필요할 때"| FH["react_code_exports.html + design_tokens.html"]
  Q -->|"세부 기준이 필요할 때"| QH["lint_guide/index.html + test_guide/index.html"]
  L -->|"세부 기준이 필요할 때"| LH["react_code_exports.html"]
  </div>
  <figcaption>AGENTS.md에서 작업별 요약과 상세 HTML 가이드로 이동하는 흐름</figcaption>
</figure>

처음부터 모든 문서를 컨텍스트에 넣지 않습니다. 현재 작업과 직접 관련된 요약 문서만 읽고, 구현 판단의 배경이나 구체적인 예시가 필요한 경우에만 다음 상세 가이드를 확인합니다.

- 프로젝트 구조와 공통 기준: [Front-End 개발 가이드](../../frontend_guide/index.html), [Front-End Monorepo 공통 기준](../../monorepo/index.html)
- UI와 Figma 구현: [React Code Exports 가이드](../../ui_guide/react_code_exports.html), [디자인 토큰 가이드](../../ui_guide/design_tokens.html)
- 품질 확인: [Lint 가이드](../../lint_guide/index.html), [Test 가이드](../../test_guide/index.html)

## 작업별 필수 문서

```text
docs/
└─ ai/
   ├─ project.md        # 프로젝트 구조, 기능 및 상태 작업
   ├─ ui.md             # UI, 컴포넌트 및 스타일 작업
   ├─ design-tokens.md  # 디자인 토큰 및 스타일 기준
   ├─ figma.md          # Figma URL 및 디자인 구현 작업
   ├─ quality.md        # Lint, Test 및 품질 확인
   └─ local-llm.md      # Ollama, Continue 및 로컬 LLM 작업
```

- UI 작업에서는 `docs/ai/ui.md`와 `docs/ai/design-tokens.md`를 함께 읽습니다.
- Figma 구현 작업에서는 `docs/ai/figma.md`, `docs/ai/ui.md`, `docs/ai/design-tokens.md`를 함께 읽습니다.

현재 작업과 관련 없는 문서는 읽지 않습니다. 문서에 없는 요구는 기존 소스와 사용자 요청을 우선 확인하고 임의로 확대하지 않습니다.

## 가이드 원본과 동기화

- **_상세 가이드의 기준 원본은 형제 폴더 `lounge-docs`입니다._**
- `docs/ai/`는 코딩에 필요한 핵심 결정만 담은 요약입니다.
- 두 내용이 충돌하면 `lounge-docs`를 따릅니다.
- 원본 가이드 변경이 구현 규칙에 영향을 주면 관련 `docs/ai/` 문서도 함께 갱신합니다.
- 배경 설명, 설치 과정과 긴 검증 결과를 `docs/ai/`에 중복 복사하지 않습니다.

## 기본 확인

변경 범위에 맞춰 다음 순서로 확인합니다.

```bash
npm run typecheck
npm run lint
npm run test
```

병합 또는 통합 영향이 있는 변경에서는 `npm run build`도 확인합니다.
