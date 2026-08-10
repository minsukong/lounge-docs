# React Code Exports 가이드 추가 초안

## 적용 위치

- `react_code_exports.html`의 `4.1 Code Connect 도입 시 장점` 다음에 주요 영역으로 추가합니다.
- 추가 영역은 `5. VS Code, Continue 및 로컬 LLM을 이용한 구현`으로 두고 이후 영역은 현재 번호를 유지합니다.
- 아래 원고와 HTML의 5장 내용을 함께 관리합니다.

## 5. VS Code, Continue 및 로컬 LLM을 이용한 구현

VS Code에서 [Continue](https://docs.continue.dev/ide-extensions/agent/quick-start)와 Ollama 기반 로컬 LLM을 사용해 React와 Tailwind CSS 구현 초안을 작성할 수 있습니다. LLM은 프로젝트 소스와 전달받은 디자인 정보를 분석하고 파일 변경안을 만들지만, 컴포넌트 구조와 최종 품질을 결정하는 주체는 프론트엔드 개발자입니다.

사람과 LLM이 작성한 코드의 공통 품질 기준은 [Front-End Lint 가이드 초안](../lint_guide/draft.md)을 따릅니다. 이 문서에서는 모델 선택과 React Code Exports 작업 흐름을 설명하고, 접근성·TypeScript·디자인 토큰의 세부 검사 기준은 Lint 가이드에서 관리합니다.

### 5.1 도구와 책임

- VS Code는 프로젝트 탐색, 코드 편집, Diff 확인과 명령 실행에 사용합니다.
- Continue는 프로젝트 컨텍스트를 LLM에 전달하고 Chat, Plan 및 Agent 작업을 연결합니다.
- Ollama는 로컬에서 모델을 실행합니다.
- [Gemma 4](https://ollama.com/library/gemma4)는 일반 개발 PC에서 로컬 실행 가능성을 확인하기 위한 후보 모델로 사용합니다. 팀 기본 모델로 확정하지 않습니다.
- 모델이 생성한 코드와 실행 요청은 자동으로 승인하지 않고 변경 범위와 Diff를 확인합니다.

Chat은 구현 방향이나 오류 원인을 논의할 때 사용합니다. Plan은 파일을 수정하기 전에 기존 컴포넌트, 토큰과 영향 범위를 읽기 전용으로 확인할 때 사용합니다. Agent는 범위가 합의된 뒤 파일 변경과 검증 명령 실행이 필요할 때 사용합니다.

### 5.2 Ollama와 Gemma 4 설치

Windows 10 22H2 이상에서 PowerShell을 열고 Ollama 공식 설치 스크립트를 실행합니다. 조직의 보안 정책상 원격 스크립트 직접 실행이 허용되지 않으면 [Ollama Windows 설치 파일](https://ollama.com/download/windows)을 내려받아 설치합니다.

```powershell
irm https://ollama.com/install.ps1 | iex
ollama --version
```

Linux에서는 공식 설치 스크립트를 사용합니다.

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama --version
```

설치가 끝나면 Gemma 4를 내려받고 실행 여부를 확인합니다.

```bash
ollama pull gemma4
ollama list
ollama run gemma4
```

최소 사양 PC에서 더 작은 모델을 검증할 때는 `gemma4:e2b`를 사용할 수 있습니다. 팀 기본 모델 태그는 성능 검증 후 하나로 고정합니다.

```bash
ollama pull gemma4:e2b
ollama show gemma4:e2b
```

실행 중인 모델이 CPU와 GPU 중 어디에 적재되었는지는 다음 명령으로 확인합니다.

```bash
ollama ps
```

### 5.3 Continue 설정

VS Code에 Continue 확장을 설치한 뒤 `config.yaml`을 설정합니다. `AUTODETECT`를 사용하면 로컬 `ollama list`에 있는 모델을 Continue의 모델 선택기에서 확인할 수 있습니다.

```yaml
name: Main Config
version: 1.0.0
schema: v1
models:
  - name: Autodetect
    provider: ollama
    model: AUTODETECT
    roles:
      - chat
      - edit
      - apply
    defaultCompletionOptions:
      contextLength: 32768
      temperature: 0.2
```

Agent가 모델의 도구 사용 기능을 인식하지 못하면 Gemma 4를 명시적으로 등록하고 `tool_use` capability를 설정합니다. `model` 값은 `ollama list`에 표시되는 실제 모델 태그와 일치해야 합니다.

```yaml
name: Main Config
version: 1.0.0
schema: v1
models:
  - name: Gemma 4
    provider: ollama
    model: gemma4
    roles:
      - chat
      - edit
      - apply
    capabilities:
      - tool_use
    defaultCompletionOptions:
      contextLength: 32768
      temperature: 0.2
```

`contextLength`는 Continue가 모델에 전달하는 최대 컨텍스트 기준입니다. 모델의 실제 지원 범위와 사용 가능한 메모리를 넘지 않도록 설정하고, 메모리 부족이나 응답 지연이 발생하면 먼저 값을 낮춥니다.

CPU Thread, Ollama Context와 생성 길이를 고정해야 하는 환경에서는 Continue의 HTTP 요청 옵션보다 Ollama `Modelfile`로 실행 설정을 분리합니다.

```text
FROM gemma4
PARAMETER num_thread 16
PARAMETER num_ctx 32768
PARAMETER num_predict -1
PARAMETER temperature 0.2
```

위 값은 현재 검증 환경을 설명하는 설정이며 모든 개발 장비의 공통 기본값이 아닙니다. `num_predict -1`은 생성 길이를 제한하지 않으므로 긴 응답과 작업 중단 가능성을 확인한 뒤 사용합니다.

`TBD`: 팀에서 사용할 Gemma 4의 정확한 모델 태그, Continue와 Ollama의 지원 버전, 장비별 Context 및 Thread 기준은 실제 개발 장비 검증 후 확정합니다.

### 5.4 일반 개발 PC 기준

이 가이드는 특정 검증 장비가 아니라 VS Code, 브라우저와 Next.js 개발 서버를 함께 사용하는 일반 개발자 PC를 기준으로 합니다. 아래 사양은 Ollama 또는 Gemma 4가 공식적으로 보장하는 절대 최소 사양이 아니며, 로컬 LLM을 어디까지 사용할지 판단하기 위한 운영 기준입니다.

| 개발 PC 구분 | 일반적인 구성 | 로컬 LLM 권장 범위 | React Code Exports 기본 경로 |
| --- | --- | --- | --- |
| 최소 업무 PC | 최근 4~6 Core CPU, RAM 16GB, 내장 GPU 또는 GPU 없음, 여유 공간 20GB | 짧은 설명, 코드 요약과 작은 코드 조각. 긴 Agent 작업은 사용하지 않음 | Codex 또는 Claude Code 사용 |
| 권장 개발 PC | 최근 6~8 Core CPU, RAM 32GB, 내장 GPU 또는 6~8GB VRAM, 여유 공간 30GB | 4B~8B급 모델로 한 컴포넌트 초안. Context는 8K부터 시작 | 로컬 초안 후 사람이 검수하거나 Codex·Claude Code 사용 |
| 로컬 Agent용 PC | RAM 32~64GB, 12~16GB 이상 VRAM 또는 충분한 Unified Memory, 여유 공간 40GB 이상 | 더 큰 코딩 모델과 16K~32K Context를 검증할 수 있음 | 로컬 Agent 사용 가능, 복잡한 작업은 외부 Agent로 전환 |

RAM 16GB와 GPU가 없는 PC도 Ollama를 실행할 수 있지만, VS Code와 개발 서버를 함께 사용하는 환경에서 전체 화면 변환을 안정적으로 처리하는 기준으로 삼지 않습니다. 이런 PC에서는 Ollama 설치를 필수로 요구하지 않습니다.

Gemma 4를 사용할 경우 최소 업무 PC에서는 `gemma4:e2b`로 짧은 작업만 확인합니다. `gemma4:latest`를 포함한 더 큰 모델은 메모리와 응답 시간을 측정한 뒤 선택합니다. 모델이 GPU에 완전히 적재되지 않으면 CPU와 GPU를 함께 사용해 느려질 수 있으므로 `ollama ps`의 `PROCESSOR`와 실제 응답 시간을 함께 기록합니다.

일반 개발 PC에서 실행 가능하면서 복잡한 화면을 높은 정확도로 한 번에 변환하는 로컬 모델을 공통 기본값으로 가정하지 않습니다. 더 큰 모델은 품질이 나아질 수 있지만 RAM, VRAM과 저장 공간 요구가 높아져 일반 PC 기준을 벗어날 수 있습니다.

#### 모델 선택 기준

| 환경 | 모델 선택 | 운영 판단 |
| --- | --- | --- |
| RAM 16GB, 별도 GPU 없음 | `gemma4:e2b` 등 소형 모델 | 요약과 작은 코드 조각만 사용하고 전체 화면 변환은 Codex 또는 Claude Code로 처리 |
| RAM 32GB, 6~8GB VRAM | 4B~8B급 모델 | 한 컴포넌트 초안까지만 허용하고 프로젝트 규칙 준수 여부를 사람이 확인 |
| 12~16GB 이상 VRAM | `gpt-oss:20b`를 Gemma 4보다 높은 중간 수준의 로컬 후보로 검증 | 일반 PC 공통 기준이 아니라 선택 가능한 로컬 Agent 환경으로 취급 |

모델을 교체할 때는 벤치마크나 모델 소개만으로 승인하지 않습니다. 동일한 React Code Exports 검증 과제를 실행해 디자인 토큰, 접근성, TypeScript, Tailwind CSS 4, 기존 컴포넌트 재사용과 Continue tool call 성공 여부를 비교합니다. 소형 모델보다 수정 횟수가 줄지 않으면 더 큰 모델을 기본값으로 지정하지 않습니다.

### 5.5 로컬 LLM 사용 기준

로컬 LLM은 다음 작업에 우선 검토할 수 있습니다.

- 외부 모델로 전달하기 어려운 소스의 요약과 제한된 범위의 코드 초안
- 반복되는 JSX와 Tailwind CSS 구조 정리
- 기존 컴포넌트 사용법 탐색과 단순 변환
- 한두 파일 범위의 이름 변경, 주석, 문서와 테스트 초안
- 네트워크 연결 없이 수행해야 하는 작업
- 호출량 과금이나 외부 서비스 한도 없이 반복해야 하는 실험

Ollama에서 로컬 추론을 사용하면 프롬프트와 모델 실행을 개발 PC 안에서 처리할 수 있습니다. 다만 Continue에 외부 MCP, 검색 도구, 원격 모델 또는 원격 로그 전송을 연결하면 해당 데이터까지 로컬에만 머문다고 간주하지 않습니다.

다음 작업은 로컬 LLM의 결과만으로 완료하지 않습니다.

- 결제, 인증, 권한, 개인정보와 Secret을 다루는 구현
- Native Bridge, API 계약과 하위 호환성 변경
- 여러 애플리케이션 또는 공통 패키지에 영향을 주는 구조 변경
- 대규모 마이그레이션, 복잡한 디버깅과 성능·보안 분석
- 요구사항이나 Figma 동작이 불명확한 상태의 추측 구현
- 최신 Framework 동작과 보안 정책을 공식 문서 확인 없이 판단하는 작업
- 오류 영향이 사용자, 금액, 권한 또는 데이터 무결성에 연결되는 작업

한두 파일 안에서 요구사항과 수정 범위가 명확하면 검증된 소형 로컬 모델을 사용할 수 있습니다. 여러 영역의 의존 관계를 추적해야 하거나 실패 비용이 큰 작업은 프로젝트에서 승인한 Codex 또는 Claude Code로 전환합니다. 도구를 전환해도 사람의 리뷰, TypeScript 검사, lint, production build와 필요한 테스트는 생략하지 않습니다.

### 5.6 모델 호환성과 프로젝트 적합성 확인

Ollama가 function calling을 지원하더라도 Continue Agent에서 같은 모델의 tool call이 정상 처리된다고 단정하지 않습니다. 다음 항목을 실제 조합으로 확인합니다.

- Agent 모드가 `Not Supported` 상태가 아닌가?
- 모델 응답이 일반 텍스트 형태의 호출문이 아니라 Continue가 실행할 수 있는 구조화된 tool call로 전달되는가?
- 파일 읽기 결과가 모델에 다시 전달되고 다음 단계가 이어지는가?
- 파일 변경 전 사용자 승인과 변경 후 Diff 확인이 가능한가?
- 명령 실행 오류가 모델에 반환되고 수정 또는 중단으로 이어지는가?

현재 검증 환경에서는 일부 Qwen 계열 모델이 Ollama에서 tool calling을 지원하더라도 Continue가 호출 형식을 실행하지 못하고 일반 텍스트로 출력한 뒤 종료하는 현상이 확인되었습니다. 이 결과를 Qwen 계열 전체의 일반적인 제한으로 확대하지 않고, Continue·Ollama·모델 태그 조합의 호환성 문제로 기록합니다. Chat 용도와 Agent 용도는 동일 모델을 강제하지 않으며, Agent에는 위 왕복 검증을 통과한 모델만 사용합니다.

#### Gemma 4 코드 생성 검증 결과

텍스트로 전달한 카드 디자인을 현재 프로젝트의 Next.js 16, React 19, TypeScript 6, Tailwind CSS 4와 기존 shadcn/ui `Button`에 맞춰 변환하도록 `gemma4:latest`에 요청했습니다. 실제 Figma 파일이나 이미지는 제공되지 않았으므로 시각적 일치 여부는 검증 범위에 포함하지 않았습니다.

| 검증 항목 | 결과 | 확인 내용 |
| --- | --- | --- |
| 검증 범위 | 확인 | 텍스트 디자인 명세를 한 개의 React 컴포넌트로 변환 |
| React·TypeScript 코드 | 통과 | 생성 파일이 프로젝트 TypeScript 검사를 통과함 |
| 현재 ESLint 설정 | 통과 | 생성 파일 대상에서 현재 활성화된 ESLint 규칙을 통과함 |
| 기존 컴포넌트 사용 | 통과 | 지정한 `@/components/ui/button`을 사용함 |
| 상태 문구와 Button 조건 | 통과 | 요구한 한글 문구와 `available` 상태의 활성 조건을 반영함 |
| 디자인 토큰 준수 | 실패 | 금지한 `green`, `yellow`, `red` 색상 클래스를 임의로 생성함 |
| 접근성과 의미 구조 | 실패 | 요구한 `aria-labelledby`와 의미 있는 Section 구조를 누락함 |
| 불필요한 코드 억제 | 보완 필요 | 필요하지 않은 `async`, 상태 보조 타입과 설명성 주석을 추가함 |
| Figma 시각 비교 | 미검증 | Figma 원본 화면 또는 캡처가 없어 비교하지 않음 |

현재 결과는 작은 React·TypeScript·Tailwind CSS 4 컴포넌트의 구현 초안으로는 사용할 수 있지만, 프로젝트 기준을 자동으로 모두 지키는 병합 가능 코드로 간주할 수 없습니다. 이 결과는 특정 고사양 PC를 최소 또는 권장 사양으로 정하는 근거로 사용하지 않습니다. 실제 Figma 화면, 디자인 토큰과 관련 프로젝트 파일을 함께 제공하고 Diff를 사람이 검수해야 합니다.

현재 ESLint 통과는 [Front-End Lint 가이드 초안](../lint_guide/draft.md)의 모든 후보 규칙을 통과했다는 뜻이 아닙니다. 디자인 토큰 검사와 type-aware `no-floating-promises`가 실제 설정에 적용되기 전에는 Lint 가이드의 수동 검토 항목을 함께 확인합니다. 접근성 규칙을 적용한 뒤에도 `aria-labelledby`의 참조 대상과 화면의 의미 구조는 사람이 검토합니다.

팀 기본 모델로 승인하려면 서로 다른 화면 유형을 최소 세 개 이상 반복 검증합니다.

1. 단순 표시 카드에서 토큰, Props와 의미 구조를 확인합니다.
2. React Hook Form 입력 화면에서 label, 오류, 제출 상태와 중복 제출 방지를 확인합니다.
3. loading, error, empty 상태가 있는 TanStack Query 화면에서 서버 상태를 Zustand에 복제하지 않는지 확인합니다.
4. 각 결과의 TypeScript 검사, lint와 production build를 실행합니다.
5. Figma 화면을 Mobile과 필요한 Desktop 너비에서 비교합니다.

### 5.7 React Code Exports 작업 흐름

1. 구현할 Figma 화면 또는 영역과 대상 애플리케이션을 지정합니다.
2. Plan에서 관련 컴포넌트, Tailwind 토큰, shadcn/ui 사용처, 기능 가까이의 파일 구조와 [Front-End Lint 가이드 초안](../lint_guide/draft.md)을 먼저 확인합니다.
3. 분석 결과에서 재사용할 요소, 새로 만들 요소, 불명확한 동작과 데이터 의미를 구분합니다.
4. 불명확한 항목은 담당자에게 확인하고 임의의 API, 상태 또는 공통 컴포넌트를 만들지 않습니다.
5. Agent에 합의된 범위만 구현하도록 요청하고 파일 변경과 명령 실행을 단계별로 승인합니다.
6. 생성된 Diff를 Lint 가이드의 자동 검사와 사람이 확인할 항목으로 나누어 검수합니다.
7. `typecheck`와 `lint`를 실행하고, 병합 또는 통합 영향이 있는 변경은 production build를 추가로 확인합니다.
8. 구현 화면을 Figma와 비교하고 차이를 수정한 뒤 프론트엔드 개발자가 승인합니다.

Continue에 요청할 때는 목표만 전달하지 않고 대상과 제약, 검증 기준을 함께 제공합니다.

```text
대상은 apps/app-webview의 이용권 상세 화면이다.
먼저 Front-End Lint 가이드, 관련 컴포넌트와 Tailwind 토큰을 읽고 재사용할 항목을 정리해라.
새 공통 패키지, store, wrapper는 만들지 마라.
동작이나 데이터 의미가 불명확하면 구현 전에 질문해라.
계획이 확인된 뒤 승인한 파일만 수정하고 typecheck, lint 결과를 보고해라.
자동 검사로 확인할 수 없는 접근성, 의미 구조와 디자인 토큰 항목을 가이드와 다시 대조해 별도로 보고해라.
복잡한 의존 관계나 보안 영향이 확인되면 구현을 멈추고 Codex 또는 Claude Code로 전환이 필요하다고 보고해라.
```

### 5.8 검수 기준

- LLM이 Lint 가이드, 기존 컴포넌트와 Tailwind 토큰을 먼저 조사했는가?
- 작업 범위를 벗어난 파일, 의존성 또는 설정을 변경하지 않았는가?
- Figma 레이어 수를 그대로 React 컴포넌트 수로 옮기지 않았는가?
- 확인되지 않은 API, 상태 관리 구조 또는 공통화를 추가하지 않았는가?
- Agent의 파일 변경과 명령 실행 내용을 사용자가 확인했는가?
- Lint 가이드의 자동 검사와 사람이 확인할 항목을 모두 검토했는가?
- 로컬 모델로 처리하기 어려운 범위에서 Codex 또는 Claude Code 전환을 검토했는가?
- 최종 Diff를 사람이 검토하고 `typecheck`와 `lint`를 통과했는가?

LLM과 Agent는 구현 속도를 높이는 작업 도구이며 승인 주체가 아닙니다. 생성된 코드는 사람이 작성한 코드와 같은 리뷰 및 검증 기준을 적용합니다.
