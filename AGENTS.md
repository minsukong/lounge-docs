# Lounge Front-end AI 작업 지침

이 파일은 저장소 전체에 항상 적용되는 최소 규칙만 담습니다. 사용자가 지정한 파일과 가장 가까운 `AGENTS.md`, 실제 소스와 설정을 먼저 확인하고, 세부 가이드는 구현 판단에 필요할 때만 선택해서 읽습니다.

## 작업 범위와 우선순위

- 사용자가 파일, 선택자, 함수 또는 문구를 지정하면 해당 위치와 필요한 주변 범위부터 확인합니다. 작은 수정에 프로젝트 전체 구조나 관련 문서를 먼저 조사하지 않습니다.
- 애플리케이션 기본 작업 범위는 `apps/app-webview/`입니다. `apps/mobile/`은 사용자가 Flutter 작업을 명시한 경우에만 수정합니다.
- 실제 package, 잠금 파일, 설정, import와 기존 소스를 문서 예시보다 우선합니다. 확인되지 않은 기술 선택과 구조는 추측하지 않습니다.
- 요청하지 않은 기능, 상태, 공통화, Wrapper, Adapter, Store 또는 package를 미리 추가하지 않습니다.
- Front-end가 독립적으로 정할 수 없는 기획, 업무 규칙, API·인증·데이터 계약, Native Bridge, 배포·보안 정책은 승인되기 전까지 `TBD`로 둡니다. endpoint, parser, fixture, handler와 Mock을 임의로 구현하지 않습니다.
- `docs/`는 문서 전용 영역이며 애플리케이션 Build 입력, 정적 자산 또는 배포 Artifact에 포함하지 않습니다.
- 한국어 문서·주석·사용자 문구에는 자연스러운 표준 한국어를 사용하고, 의도하지 않은 한자·중국어 문자, `U+FFFD`와 깨진 문자를 남기지 않습니다. 번역 예시, 고유명사와 코드 식별자는 예외입니다.

## 지침과 참고 문서 선택

- 작업 대상 아래에 `AGENTS.md`가 있으면 해당 지침을 함께 적용합니다. 하위 지침은 루트 규칙을 반복하지 않고 해당 영역의 규칙만 보완합니다.
- 현재 작업과 직접 관련 없는 문서를 연쇄적으로 읽지 않습니다. 같은 내용의 Markdown과 HTML이 있으면 Markdown만 읽습니다.
- 브리핑, 교육 자료, 변경 기록과 초안은 그 자료가 작업 대상일 때만 확인합니다.
- `docs/ai/` 요약은 실제 소스만으로 판단하기 어려울 때 다음 표에서 필요한 항목만 읽습니다.

| 작업 | 필요한 요약 |
| --- | --- |
| 프로젝트 구조·상태 관리 | `docs/ai/project.md` |
| UI·컴포넌트·스타일 | `docs/ai/ui.md`, 필요 시 `design-tokens.md` |
| 접근성 | `docs/ai/accessibility.md` |
| Figma 구현 | `docs/ai/figma.md`, `ui.md`, `design-tokens.md` |
| Storybook | `docs/ai/storybook.md` |
| Lint·Test·Build | `docs/ai/quality.md` |
| 네트워크·성능 | `docs/ai/performance.md` |
| 인증·외부 입력·보안 | `docs/ai/security.md` |
| 공통 소스·설정 | `docs/ai/common-source.md` |
| 로컬 LLM | `docs/ai/local-llm.md` |

- `docs/common-source/`와 `docs/guides/`는 요약이나 실제 소스만으로 부족한 세부 기준이 있을 때 직접 관련된 문서 하나부터 확인합니다. 예시 코드는 현재 저장소와 비교해 선별 적용합니다.

## 앱 구현 핵심

- `apps/app-webview/`에서는 Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4와 프로젝트의 shadcn/ui 및 의미 기반 토큰을 사용합니다.
- 공통 CSS 하한은 Safari 15입니다. 최신 CSS 표현보다 핵심 정보, 입력, 이동과 업무 흐름의 동작을 우선하고 필요한 경우 호환 표현으로 대체합니다.
- 디자인 토큰은 Figma Tokens Studio에서만 생성·수정·삭제합니다. 저장소의 생성된 토큰 파일을 직접 수정하지 않습니다.
- 기존 feature 구현과 `src/components/ui`를 새 컴포넌트보다 우선하며, import, Props와 variant를 실제 코드에서 확인합니다.
- 공통 UI, 독립 검수 가치가 있는 Feature 또는 사용자 노출 Screen을 추가하거나 공개 Props·주요 상태·화면 구조를 바꾸면 관련 Storybook 대상도 확인합니다. Storybook을 위해 제품에 필요 없는 Props나 Mock을 추가하지 않습니다.
- 세부 앱 규칙과 검증은 `apps/app-webview/AGENTS.md`를 따릅니다.

## 작업과 편집 방식

- 한 번에 하나의 명확하고 검증 가능한 작업 단위를 완료합니다. 여러 목적이 섞인 요청은 조사, 구현, 검증처럼 확인 가능한 단계로 나눕니다.
- 필요한 범위를 확인한 뒤 수정하며, 같은 파일의 관련 변경은 가능한 한 한 번의 `apply_patch` 또는 실제 다중 편집 호출로 묶습니다.
- 기존 파일 전체를 다시 쓰거나 전체 formatter를 실행하지 말고 요청된 범위와 기존 인코딩·줄바꿈·서식을 보존합니다. 파일 전체 개편이 요청된 경우에만 예외로 합니다.
- 작은 수정마다 같은 파일을 반복해서 읽지 않습니다. 수정 후 영향 범위와 간결한 diff를 한 번 확인합니다.
- 설명과 로그를 길게 출력하지 말고 실제 수정과 검증을 우선합니다. 도구 호출 전에 장문의 추론을 생성하지 않습니다.
- 중단 또는 재시도 뒤에는 현재 파일 상태를 먼저 확인합니다. 같은 편집이 두 번 실패하면 같은 방식의 반복을 멈추고 오류와 대안을 보고합니다.
- 도구 형식 오류, 일반 텍스트로 나온 도구 호출 또는 같은 출력 반복이 발생하면 범위를 줄여 한 번만 다시 시도합니다. 출력 한도를 늘려 우회하지 않습니다.

## Windows PowerShell

- 기본 Shell은 PowerShell 7입니다. 이미 활성화된 Shell 안에서 `pwsh -Command`, `powershell -Command` 또는 `pwsh -File NUL -Command`로 PowerShell을 중첩 실행하지 않습니다.
- `$변수`, 따옴표, 정규식 또는 여러 줄 Script가 포함된 명령을 중첩 Shell 문자열로 감싸지 않습니다. 복잡한 파일 변경은 `Get-Content`·`Set-Content` 문자열 치환 대신 `apply_patch` 또는 승인된 편집 도구를 사용합니다.
- 터미널이 busy 상태로 남거나 quoting·parser 오류가 발생하면 다른 Shell Wrapper로 반복하지 않습니다. 명령을 중단하고 상태를 확인한 뒤 더 작은 직접 명령으로 한 번만 다시 시도합니다.
- `&&`, `||`, CMD의 `2>nul`과 PowerShell 문법을 섞지 않습니다. 명령을 별도로 실행하고 알려진 경로에는 `-LiteralPath`를 우선합니다.

## 검증과 완료 보고

- 편집 후 `git diff --numstat`과 관련 diff를 확인합니다. 파일 대부분이 예상 밖으로 바뀌면 추가 쓰기나 formatter를 중단하고 줄바꿈·인코딩 변동을 조사합니다.
- 완료 전에 `git diff --check`를 실행하고 현재 작업에서 만든 관련 없는 변경이 없는지 확인합니다.
- 앱 변경은 실제 `package.json`에 정의된 script만 사용합니다. 기본 순서는 typecheck, lint, test이며 Story 변경은 Storybook 정적 Build, 통합 영향은 production Build를 추가합니다.
- 검증할 수 없는 환경이나 실행하지 못한 검사가 있으면 완료 보고에 짧게 명시합니다.
- 기존 사용자 변경은 수정하거나 되돌리지 않습니다.
