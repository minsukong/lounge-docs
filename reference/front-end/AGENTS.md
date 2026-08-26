# Lounge Front-end AI 지침

이 문서는 저장소 전체에 적용되는 AI 작업 진입점입니다. 긴 가이드를 모두 읽지 말고 현재 작업에 해당하는 `docs/ai/` 문서만 추가로 읽습니다.

## 프로젝트 기준

- 실제 애플리케이션은 추후 `apps/app-webview`에 생성할 예정입니다.
- 현재는 애플리케이션 저장소 생성 전에 구현 가이드와 참고 소스를 선행 작성하는 단계입니다.
- 화면 코드는 React 19와 TypeScript로 작성합니다.
- 스타일은 Tailwind CSS 4와 `src/app/globals.css`의 의미 기반 토큰을 사용합니다.
- 실제 저장소가 생성된 이후 Next.js 16 App Router 규칙은 `apps/app-webview/AGENTS.md`와 설치된 Next.js 문서를 따릅니다.
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

AI는 작업을 시작할 때 이 `AGENTS.md`를 먼저 읽습니다. 이후 작업 종류를 판단해 필요한 `docs/ai/` 요약만 확인하고, 요약만으로 세부 기준을 판단하기 어려울 때 연결된 상세 가이드로 이동합니다.

### 작업별 AI 요약 문서

| 필요한 작업 | 확인할 문서 | 문서 내용 |
| --- | --- | --- |
| 프로젝트 구조, 기능과 상태 관리 기준 확인 | [Markdown](./docs/ai/project.md) · [HTML](./docs/ai/project.html) | 앱 범위, 기술 스택, 디렉터리 구조와 상태 배치 원칙 |
| UI, 컴포넌트와 스타일 구현 | [Markdown](./docs/ai/ui.md) · [HTML](./docs/ai/ui.html) | React·TypeScript 출력, Tailwind CSS, 컴포넌트 재사용과 접근성 기준 |
| 디자인 토큰과 스타일 값 연결 | [Markdown](./docs/ai/design-tokens.md) · [HTML](./docs/ai/design-tokens.html) | 의미 기반 토큰, shadcn/ui 설정, Figma Variables와 Tokens Studio 기준 |
| Figma 화면을 애플리케이션 코드로 구현 | [Markdown](./docs/ai/figma.md) · [HTML](./docs/ai/figma.html) | 구현 전 조사, 기존 코드 매핑, React 구현과 시각·품질 확인 흐름 |
| TypeScript, Lint, Test와 Build 품질 확인 | [Markdown](./docs/ai/quality.md) · [HTML](./docs/ai/quality.html) | 검사 도구의 역할, 테스트 범위와 기본 검증 명령 |
| 네트워크 지연, 비동기 UI와 성능 검증 | [Markdown](./docs/ai/performance.md) · [HTML](./docs/ai/performance.html) | Loading·Timeout·Offline 처리, 요청 안전성과 저속 네트워크 검증 |
| 인증·권한, 외부 입력, 개인정보와 보안 검토 | [Markdown](./docs/ai/security.md) · [HTML](./docs/ai/security.html) | XSS, URL, Client 저장소, Cookie·CSRF, Secret, Bridge, 파일과 의존성 기준 |
| 공통 설정, 컴포넌트와 유틸리티 가이드 작성 | [Markdown](./docs/ai/common-source.md) · [HTML](./docs/ai/common-source.html) | 공통 소스 상세 가이드 진입점, 작성 원칙과 실제 저장소 적용 기준 |
| Ollama, Continue와 로컬 LLM 활용 | [Markdown](./docs/ai/local-llm.md) · [HTML](./docs/ai/local-llm.html) | 로컬 모델에 맡길 범위, 검토 방식과 외부 모델 전환 기준 |

### 문서 계층과 적용 기준

```text
AGENTS.md
└─ 프로젝트 전체 원칙과 작업별 문서 선택
   └─ docs/ai/*.md
      └─ 현재 작업에 필요한 핵심 판단 요약
         └─ docs/common-source/*.md
            └─ 실제 파일에 가까운 구현 예시와 적용 절차
               └─ apps/app-webview/*
                  └─ 저장소 생성 후 확인된 실제 소스와 설정
```

이 계층은 문서를 확인하는 흐름입니다. 실제 애플리케이션 저장소가 생성된 뒤에는 설치된 package, 기존 source와 app 내부 `AGENTS.md`를 먼저 확인하고, `docs/common-source/`의 코드를 그대로 덮어쓰지 않고 비교·병합합니다. 예시의 API, 브랜드 값, 업무 문구와 상태 정책은 확정된 제품 계약으로 교체합니다.

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TD
  accTitle: AI의 Front-end 가이드 확인 흐름
  accDescr: AI는 작업 요청을 받으면 AGENTS.md를 먼저 읽고 작업 종류에 맞는 docs/ai 요약 문서를 선택한 뒤, 세부 기준이 필요할 때만 연결된 상세 가이드를 확인합니다.
  A([작업 요청]) --> B["AGENTS.md 먼저 읽기"]
  B --> C{"어떤 작업인가?"}
  C -->|"프로젝트 구조·기능·상태"| P["docs/ai/project.md"]
  C -->|"UI·컴포넌트·스타일"| U["docs/ai/ui.md + design-tokens.md"]
  C -->|"Figma 구현"| F["docs/ai/figma.md + ui.md + design-tokens.md"]
  C -->|"Lint·Test·품질"| Q["docs/ai/quality.md"]
  C -->|"네트워크 지연·비동기 UI·성능"| N["docs/ai/performance.md"]
  C -->|"인증·권한·외부 입력·보안"| S["docs/ai/security.md"]
  C -->|"공통 소스·설정·유틸리티"| CS["docs/ai/common-source.md"]
  C -->|"Ollama·Continue·로컬 LLM"| L["docs/ai/local-llm.md"]
  P -->|"세부 기준이 필요할 때"| PH["frontend_guide/index.html + monorepo/index.html"]
  U -->|"세부 기준이 필요할 때"| UH["frontend_guide/index.html + UI 상세 가이드"]
  F -->|"세부 기준이 필요할 때"| FH["react_code_exports.html + design_tokens.html"]
  Q -->|"세부 기준이 필요할 때"| QH["lint_guide/index.html + test_guide/index.html"]
  N -->|"세부 기준이 필요할 때"| NH["performance_guide/draft.md + network.md + api-mocking.md"]
  S -->|"세부 기준이 필요할 때"| SH["security_guide/index.html + 실제 인증·배포 설정"]
  CS --> CSR{"apps/app-webview가 존재하는가?"}
  CSR -->|"예"| CSS["기존 소스와 설치 package 확인"]
  CSR -->|"아니오"| CSH["docs/common-source 실전 가이드 확인"]
  CSS -->|"구현 기준 확인"| CSH
  L -->|"세부 기준이 필요할 때"| LH["react_code_exports.html"]
  </div>
  <figcaption>AGENTS.md에서 작업별 요약과 상세 가이드로 이동하는 흐름</figcaption>
</figure>

처음부터 모든 문서를 컨텍스트에 넣지 않습니다. 현재 작업과 직접 관련된 요약 문서만 읽고, 구현 판단의 배경이나 구체적인 예시가 필요한 경우에만 다음 상세 가이드를 확인합니다.

- 프로젝트 구조와 공통 기준: [Front-End 개발 가이드](../../frontend_guide/index.html), [Front-End Monorepo 공통 기준](../../monorepo/index.html)
- UI와 Figma 구현: [React Code Exports 가이드](../../ui_guide/react_code_exports.html), [디자인 토큰 가이드](../../ui_guide/design_tokens.html)
- 품질 확인: [Lint 가이드](../../lint_guide/index.html), [Test 가이드](../../test_guide/index.html)
- 네트워크 지연과 성능: [네트워크 지연 대응 및 성능 검증 가이드](../../performance_guide/draft.md)
- 보안과 개인정보: [Front-End 보안과 개인정보 가이드](../../security_guide/index.html)
- 공통 소스 구현: [공통 소스 가이드](./docs/common-source/index.md), [API 요청 기반](./docs/common-source/network.md), [세션 경계](./docs/common-source/session.md), [API Mock](./docs/common-source/api-mocking.md), [테스트 공통 소스](./docs/common-source/test.md), [통합 사용 예시](./docs/common-source/recipes.md), [공통 소스 카탈로그](./docs/common-source/catalog.md)

### 공통 소스 구현 문서

`docs/common-source/`는 작업 지침을 반복하는 문서가 아니라 실제 저장소에 적용할 파일 단위 예시, 적용 조건과 교체 지점을 제공합니다. 공통 소스 작업에서는 먼저 진입 문서를 확인하고 현재 작업 영역에 해당하는 문서만 추가로 읽습니다.

| 필요한 작업 | 확인할 문서 | 문서 내용 |
| --- | --- | --- |
| 공통 소스 문서의 범위와 적용 순서 확인 | [Markdown](./docs/common-source/index.md) · [HTML](./docs/common-source/index.html) | 문서별 역할, 권장 파일 구조, 적용 순서와 완료 기준 |
| Tailwind CSS와 shadcn/ui 공통 설정 | [Markdown](./docs/common-source/tailwind.md) · [HTML](./docs/common-source/tailwind.html) | PostCSS, `components.json`, 디자인 토큰, `globals.css`와 `cn` 구현 예시 |
| React Provider와 반복되는 폼 동작 구현 | [Markdown](./docs/common-source/react.md) · [HTML](./docs/common-source/react.html) | QueryClient 생명주기, Provider, `SubmitButton`과 `FormField` 구현 예시 |
| TypeScript 설정과 외부 입력 검증 | [Markdown](./docs/common-source/typescript.md) · [HTML](./docs/common-source/typescript.html) | 공통 compiler 설정, type guard, 오류 변환과 union 분기 검사 예시 |
| API 요청과 기능별 응답 검증 연결 | [Markdown](./docs/common-source/network.md) · [HTML](./docs/common-source/network.html) | HTTP 오류, 공통 요청 함수와 기능별 parser 연결 예시 |
| 로그인 상태와 회원 데이터 경계 | [Markdown](./docs/common-source/session.md) · [HTML](./docs/common-source/session.html) | 세션 model·parser·Query와 로그아웃 cache 초기화 기준 |
| Client Component와 Query 테스트 환경 구성 | [Markdown](./docs/common-source/test.md) · [HTML](./docs/common-source/test.html) | Vitest, Testing Library, 공통 렌더링 함수와 사용자 동작 테스트 예시 |
| Backend 없이 API 상태 재현 | [Markdown](./docs/common-source/api-mocking.md) · [HTML](./docs/common-source/api-mocking.html) | MSW fixture·handler와 개발·테스트 연결 예시 |
| 공통 소스를 한 기능에 연결 | [Markdown](./docs/common-source/recipes.md) · [HTML](./docs/common-source/recipes.html) | 프로필 조회·검증·수정·상태 처리와 테스트를 연결한 통합 예시 |
| 적용 조건, package와 미확정 항목 확인 | [Markdown](./docs/common-source/catalog.md) · [HTML](./docs/common-source/catalog.html) | 파일별 도입 조건, 함께 적용할 코드, 필요한 package, TBD와 검증 목록 |
| 현재 준비 수준과 저장소 생성 후 순서 확인 | [Markdown](./docs/common-source/briefing.md) · [HTML](./docs/common-source/briefing.html) | 가이드의 활용 범위, 한계, 실제 적용 순서와 다음 검토 시점 |

## 작업별 필수 문서

```text
docs/
├─ ai/
│  ├─ project.md        # 프로젝트 구조, 기능 및 상태 작업
│  ├─ ui.md             # UI, 컴포넌트 및 스타일 작업
│  ├─ design-tokens.md  # 디자인 토큰 및 스타일 기준
│  ├─ figma.md          # Figma URL 및 디자인 구현 작업
│  ├─ quality.md        # Lint, Test 및 품질 확인
│  ├─ performance.md    # 네트워크 지연, 비동기 UI 및 성능 검증
│  ├─ security.md       # 인증·권한, 외부 입력, 개인정보 및 보안 검토
│  ├─ common-source.md  # 공통 소스 가이드 작업 진입점
│  └─ local-llm.md      # Ollama, Continue 및 로컬 LLM 작업
└─ common-source/
   ├─ index.md          # 가이드 범위와 적용 절차
   ├─ tailwind.md       # Tailwind CSS 기반 구현 가이드
   ├─ react.md          # React 공통 소스 구현 가이드
   ├─ typescript.md     # TypeScript 설정과 유틸리티 가이드
   ├─ network.md        # API 요청과 응답 검증 경계 가이드
   ├─ session.md        # 세션과 회원 데이터 경계 가이드
   ├─ test.md           # Vitest와 Testing Library 공통 테스트 가이드
   ├─ api-mocking.md    # MSW 기반 API Mock 가이드
   ├─ recipes.md        # 공통 소스를 연결한 기능 단위 통합 예시
   ├─ catalog.md        # 구현 항목과 도입 조건 체크리스트
   └─ briefing.md       # 준비 수준과 저장소 생성 후 적용 순서
```

- UI 작업에서는 `docs/ai/ui.md`와 `docs/ai/design-tokens.md`를 함께 읽습니다.
- Figma 구현 작업에서는 `docs/ai/figma.md`, `docs/ai/ui.md`, `docs/ai/design-tokens.md`를 함께 읽습니다.
- API, Query, Loading, Timeout, Offline, 이미지·폰트 로딩 또는 성능에 영향을 주는 작업에서는 `docs/ai/performance.md`를 함께 읽습니다.
- 인증·권한, 외부 HTML·URL, 개인정보, Client 저장소, Bridge, 파일 또는 새 의존성이 포함된 작업에서는 `docs/ai/security.md`를 함께 읽습니다.
- 공통 소스 작업에서는 `docs/ai/common-source.md`를 먼저 읽고 작업 영역에 해당하는 `docs/common-source/` 상세 가이드와 카탈로그를 확인합니다.
- `apps/app-webview`가 존재하면 기존 소스와 설치 package를 먼저 조사합니다. 아직 존재하지 않으면 문서의 참고 구현과 교체 지점을 기준으로 가이드를 작성하며, 실제 적용이나 검증이 끝난 것처럼 표현하지 않습니다.

현재 작업과 관련 없는 문서는 읽지 않습니다. 문서에 없는 요구는 기존 소스와 사용자 요청을 우선 확인하고 임의로 확대하지 않습니다.

## 가이드 원본과 동기화

- **_기존 프로젝트 상세 가이드의 기준 원본은 형제 폴더 `lounge-docs`입니다._**
- `docs/ai/`는 코딩에 필요한 핵심 결정만 담은 요약입니다.
- 두 내용이 충돌하면 `lounge-docs`를 따릅니다.
- 원본 가이드 변경이 구현 규칙에 영향을 주면 관련 `docs/ai/` 문서도 함께 갱신합니다.
- 배경 설명, 설치 과정과 긴 검증 결과를 `docs/ai/`에 중복 복사하지 않습니다.
- 현재 실제 애플리케이션 저장소는 생성 전이며, `docs/common-source/*.md`는 저장소 생성 후 빠르게 적용하기 위한 구현 기준과 참고 코드입니다. 같은 이름의 HTML은 사람이 읽기 위한 보기입니다.
- `lounge-docs`에는 실제 애플리케이션 `.ts`, `.tsx`, CSS 또는 package 설정 파일을 추가하지 않습니다.
- 실제 앱 저장소의 경로와 공개 API가 확정되거나 바뀌면 `docs/common-source/catalog.md`와 관련 가이드를 실제 상태에 맞게 갱신합니다.

## 기본 확인

변경 범위에 맞춰 다음 순서로 확인합니다.

```bash
npm run typecheck
npm run lint
npm run test
```

병합 또는 통합 영향이 있는 변경에서는 `npm run build`도 확인합니다.
