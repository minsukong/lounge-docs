# AI 도구 연결 안내

## 공통 사용과 자동 발견의 차이

공통 기준은 [문서 영역 안내](../AGENTS.md) → [업무 지침 — AI 작업 진입](AGENTS.md) → 관련 문서와 [공용 스킬](skills/AGENTS.md)입니다. 도구의 이름·모델·명령 문법은 업무 기준을 바꾸지 않습니다.

어떤 AI든 필요한 Markdown을 읽을 수 있으면 아래처럼 요청할 수 있습니다.

```text
문서 저장소의 docs/workflow/AGENTS.md를 읽어 현재 요청에 맞는 안내를 선택해줘.
docs/workflow/AGENTS.md에서 관련 문서와 스킬을 확인하고,
이번 작업에 필요한 SKILL.md만 읽어 수행해줘.
실제 코드 위치와 작업 카드는 별도로 확인해줘.
```

AGENTS를 자동으로 읽지 않는 도구에는 위 읽기를 명시합니다. 파일 접근이 없는 AI에는 관련 파일 본문을 제공하고 문서 분석·초안 범위로 사용합니다. 파일 접근과 실행 도구 없이 실제 코드 수정·검증을 했다고 보고하지 않습니다.

## 선택적 native skill 연결

아래는 현재 공식 문서에서 확인한 프로젝트 발견 위치입니다. 모든 도구에 동시에 설치할 필요는 없습니다.

| 도구 | 선택적 복사 위치 | 명시 호출 |
| --- | --- | --- |
| Cline | .cline/skills/ | / 명령 목록에서 스킬 선택 |
| Claude Code | .claude/skills/ | /lounge-ready 등 |
| Codex | .agents/skills/ | $lounge-ready 등 |
| 기타 AI | 사용자가 지정한 위치 또는 공용 원본 직접 읽기 | 해당 파일을 읽으라고 요청 |

설치 버전·workspace·권한·설정에 따라 발견 여부를 확인해야 합니다. 자동 스킬이 없거나 보이지 않으면 공용 SKILL.md 경로를 직접 지정합니다. 같은 이름의 글로벌·프로젝트 스킬이나 여러 발견 위치는 중복·우선순위 문제가 생길 수 있으므로 사용하는 도구에 필요한 복사본만 둡니다.

- [Cline 공식 스킬 안내](https://docs.cline.bot/customization/skills)
- [Claude Code 공식 스킬 안내](https://code.claude.com/docs/en/skills)
- [Codex 공식 스킬 안내](https://learn.chatgpt.com/docs/build-skills)

## 내보내기

문서 저장소 루트에서 실행합니다. 대상 workspace는 팀원이 실제로 연 로컬 폴더로 바꿉니다. Front-end와 문서가 같은 저장소에 있으므로 보통은 lounge-docs 루트를 사용합니다. 기본은 미리보기이며 --apply가 있어야 저장합니다.

```text
python docs/workflow/scripts/export_skills.py --workspace "lounge-docs 경로" --agent codex
python docs/workflow/scripts/export_skills.py --workspace "lounge-docs 경로" --agent codex --apply
```

--agent는 cline / claude-code / codex / manual 중 선택합니다. manual은 대상의 docs/workflow/skills/로 복사하며 자동 발견을 주장하지 않습니다. 공용 원본은 문서 저장소의 docs/workflow/skills/입니다.

공용 명령은 export_skills.py이며 자동 스킬을 원하는 경우에만 도구를 선택합니다. Cline의 룰 추가 기능에서는 docs/workflow/AGENTS.md를 읽도록 직접 연결할 수 있습니다. 이 저장소에는 Cline 전용 룰·복사본·호환 설치 명령을 두지 않습니다.

## 파일과 경로

내보내기는 아홉 SKILL.md와 lounge-workflow.json, .lounge-skills-export.json을 만듭니다.

- lounge-workflow.json: 문서 저장소 위치와 계층 진입점. docs_root는 코드 workspace 기준이며 가능한 경우 상대 경로를 사용합니다.
- .lounge-skills-export.json: exporter가 관리한 파일의 해시. 재실행 때 사용자 변경을 보호합니다.
- 실제 제품 코드·package·provider 설정·글로벌 스킬은 수정하지 않습니다.
- 기존 다른 파일이나 사용자가 수정한 관리 파일은 덮어쓰지 않고 중단합니다.
- 원본 변경 뒤 같은 명령으로 관리 중 복사본을 갱신할 수 있습니다. 파일 해시가 이전 내보내기 값과 일치해야 합니다.

개인 PC의 경로를 팀 공통 설정으로 확정하지 않습니다. 상대 폴더 배치가 팀원마다 다르면 각자의 workspace에서 내보내기를 실행합니다. 다른 드라이브로 인해 절대 경로가 생성되면 팀 공통 값으로 사용하지 않고 각 환경에서 다시 생성합니다. 문서 저장소를 이동하면 미리보기로 경로 변경을 확인합니다.

## 루트 설정 파일은 진입점만

Codex에서 AGENTS.md를 읽거나 Claude Code에서 CLAUDE.md를 읽는 등 도구마다 자동 규칙 로딩이 다릅니다. 필요한 도구용 진입 파일에는 “docs/workflow/AGENTS.md를 읽고 관련 하위 안내로 이동”하는 연결만 둡니다.

exporter는 기존 AGENTS.md·CLAUDE.md를 덮어쓰거나 긴 업무 지침을 추가하지 않습니다. 기존 진입 파일을 연결하고 싶다면 사용자 요청 범위에서 짧은 링크만 추가합니다. 자동 진입 연결 없이도 공통 읽기 요청으로 사용할 수 있습니다.

## 팀의 구축·운영 작업에 적용

같은 카드·명세·결정 기록을 팀원이 사용합니다. 사용하는 모델·도구는 달라도 Ready와 완료 조건은 동일합니다. 작업 담당과 마지막 diff·검증·재개 상태를 기록합니다. 동시 작업은 카드·파일 소유 범위를 나누고 상대 작업을 되돌리지 않습니다.

자동 발견·모델의 파일 읽기·검증 명령 실행·Native 실기기 확인은 각각 별도 확인합니다. 내보내기 성공만으로 모든 AI에서 올바른 행동을 한다고 보증하지 않습니다.
