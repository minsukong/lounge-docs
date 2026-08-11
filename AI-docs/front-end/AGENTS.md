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
