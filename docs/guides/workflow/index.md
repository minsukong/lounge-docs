# 더라운지 3.0 팀 공용 개발 워크플로

## 1. 이 문서를 읽는 방법

이 가이드는 사람이 공용 개발 기준을 이해하고 실제 업무에 쓰기 위한 설명입니다. 운영 기준은 docs/workflow의 원본입니다. IA·미완성 기획을 질문과 결정 → 명세 → 카드 → Ready → 구현·검증·리뷰 → 인수인계로 연결합니다. Cline·Claude Code·Codex·다른 AI 중 도구는 팀원이 선택합니다. Strata와 Qwen Flash는 개인 환경 사례입니다.

## 2. 계층 구조와 생성 이유

루트에 상세 내용을 모두 복사하면 규칙이 중복되고 달라지기 쉽습니다. 공통 규칙은 루트, 문서 기준은 docs, 운영 절차는 docs/workflow, 실행 지침은 skills에 둡니다. 자동 계층 읽기를 지원하지 않는 AI에는 필요한 경로를 직접 알려줍니다.

### [AGENTS.md](../../../AGENTS.md)

저장소 공통 규칙과 상세 영역의 진입 경로. 모든 작업에서 먼저 확인합니다.

### [docs/AGENTS.md](../../AGENTS.md)

문서 편집 기준과 workflow 영역 안내. 문서 작업에서 먼저 확인합니다.

### [docs/workflow/AGENTS.md](../../workflow/AGENTS.md)

질문별로 읽을 문서와 사용할 스킬을 연결합니다. 기록 책임도 안내합니다.

### [docs/workflow/skills/AGENTS.md](../../workflow/skills/AGENTS.md)

스킬 선택과 공용 원본 편집 기준. 스킬 추가·수정 시 읽습니다.

### [docs/workflow/scripts/AGENTS.md](../../workflow/scripts/AGENTS.md)

검사·IA 대조·내보내기의 실행 범위를 설명합니다. 실행 전에 읽습니다.

## 3. 운영 안내 파일

기준·사용법·도구 연결·적용 이력을 구분하여 각 문서가 한 가지 책임을 갖게 했습니다.

### [docs/workflow/README.md](../../workflow/README.md)

팀 공통 운영 기준. 흐름·Phase·Ready·진행·계약·검증을 정의합니다. 착수와 완료 판단 시 읽습니다.

### [docs/workflow/usage-guide.md](../../workflow/usage-guide.md)

새 팀원의 실제 사용 안내. 읽는 순서·작업 위치·요청 예시를 설명합니다. 처음 참여할 때 읽습니다.

### [docs/workflow/agent-adapters.md](../../workflow/agent-adapters.md)

AI 도구별 선택적 연결 안내. 직접 파일 읽기가 기본이며 스킬 내보내기는 선택 사항입니다.

### [docs/workflow/implementation-report.md](../../workflow/implementation-report.md)

생성·변경 이유와 적용·검증 이력. 초기 Cline 구성부터 도구 중립 전환과 전용 폴더 제거까지 기록합니다. 과거 검사 수치는 당시 결과입니다.

## 4. 작업 양식과 실제 기록

템플릿은 양식이며 실제 업무 기록과 구분합니다. TASK-모듈-번호와 IA 화면 ID는 서로 다른 식별자입니다. 하나의 화면이 여러 카드로 나뉠 수 있습니다.

### [docs/workflow/task-card.md](../../workflow/task-card.md)

생성 이유: 한 작업의 범위와 완료 조건을 검토 가능하게 하기 위해서입니다. 내용: 근거·담당·실제 코드 위치·Ready·차단 조건·영향·완료 조건·검증·재개 지점. 사용: 필요할 때 tasks/에 실제 카드를 만들고 작업자가 갱신합니다.

### [docs/workflow/spec-template.md](../../workflow/spec-template.md)

생성 이유: 여러 카드에 걸친 큰 기능의 합의를 묶기 위해서입니다. 내용: 흐름·정책·계약·책임·검증·연결 카드. 사용: 필요할 때 specs/에 실제 명세를 만듭니다. 작은 수정은 생략합니다.

### [docs/workflow/decisions.md](../../workflow/decisions.md)

생성 이유: 미정 질문을 대화 밖에서 담당과 근거로 추적하기 위해서입니다. 내용: TBD·Proposed·Confirmed·Rejected·Superseded. 사용: 결정이 생길 때 갱신하며 AI 제안만으로 Confirmed로 바꾸지 않습니다.

### [docs/workflow/contract-review.md](../../workflow/contract-review.md)

생성 이유: FE·BE·Native 협의 누락을 드러내기 위해서입니다. 내용: API 필드·인증·오류·재시도·중복 요청·캐시와 Bridge 메시지·준비·취소·권한·뒤로가기·기기 검증. 사용: 계약 협의와 변경 시 활용합니다. 체크 완료가 계약 승인은 아닙니다.

### [docs/workflow/progress.md](../../workflow/progress.md)

생성 이유: 팀의 현재 작업과 다음 행동을 보여주기 위해서입니다. 실제 카드 요약과 기존 IA 후보를 구분합니다. 시작·차단·리뷰·완료 시 갱신합니다. 기존 135개 후보는 승인된 개발량이나 완료 목록이 아닙니다.

## 5. IA 자료의 역할과 신뢰도

IA는 화면과 메뉴의 뼈대이며 확정 정책을 대신하지 않습니다. 더라운지_IA FO_v0.2.xlsx는 HTML 내보내기 폴더입니다. 원본은 보존합니다. 현재 587개 추출 레코드는 작업 수가 아니며 병합 셀 의미를 자동 추론하지 않습니다.

### [docs/workflow/ia-baseline.md](../../workflow/ia-baseline.md)

IA 활용 범위·원본·충돌 처리·추출 제한을 설명합니다. 기능 선정 전에 읽습니다.

### [docs/workflow/ia-inventory.csv](../../workflow/ia-inventory.csv)

원본 파일·행·화면 ID·문맥·해시를 기록한 생성 자료입니다. 검색과 추적에 사용하며 직접 고치지 않습니다.

### [docs/workflow/ia-audit.md](../../workflow/ia-audit.md)

파일별 ID와 progress 후보의 대조 자료입니다. ID 존재가 이름·담당·정책의 정확성을 보장하지 않습니다.

원본 역할: 00_FO 메뉴구조도는 메뉴 구조, MO_WEB은 모바일 웹 후보, APP은 Native·웹뷰 후보, WEB은 반응형 홈페이지, 판매채널은 추가 협의가 필요한 범위입니다. PO는 파트너오피스, OO는 운영 영역 후보로 담당과 과업 포함 여부를 확인합니다. 화면ID_규격·표지·승인내역은 배경 자료이며 개별 API 계약 승인을 대신하지 않습니다.

## 6. 공용 스킬 9개: 선택 기준

Matt 방식의 질문·명세·작업 분해·구현·리뷰를 프로젝트 범위에 맞게 적용하고 Ready·API·Bridge·영향 분석을 보완했습니다. 스킬은 실행 지침이며 승인자나 자동 실행 프로그램이 아닙니다. 매번 전부 실행할 필요는 없습니다.

### [docs/workflow/skills/lounge-grill/SKILL.md](../../workflow/skills/lounge-grill/SKILL.md)

기획이 모호할 때 질문·용어·결정 후보를 정리합니다. grill-with-docs와 domain-modeling의 역할입니다.

### [docs/workflow/skills/lounge-spec/SKILL.md](../../workflow/skills/lounge-spec/SKILL.md)

큰 기능의 합의된 흐름·정책을 개발 가능한 명세로 묶습니다. to-spec의 역할입니다.

### [docs/workflow/skills/lounge-tickets/SKILL.md](../../workflow/skills/lounge-tickets/SKILL.md)

검증 가능한 작은 작업과 실제 선행 조건·담당을 나눕니다. to-tickets의 역할입니다.

### [docs/workflow/skills/lounge-ready/SKILL.md](../../workflow/skills/lounge-ready/SKILL.md)

이번 카드의 근거·계약·차단 조건을 확인하고 착수 범위를 판단합니다.

### [docs/workflow/skills/lounge-api-review/SKILL.md](../../workflow/skills/lounge-api-review/SKILL.md)

API 필드·인증·오류·캐시·중복 요청 등 계약 누락을 검토합니다.

### [docs/workflow/skills/lounge-bridge-review/SKILL.md](../../workflow/skills/lounge-bridge-review/SKILL.md)

웹뷰·Flutter 메시지·책임·생명주기·권한·플랫폼별 검증을 확인합니다.

### [docs/workflow/skills/lounge-impact/SKILL.md](../../workflow/skills/lounge-impact/SKILL.md)

변경이 화면·상태·API·Bridge·플랫폼과 검증에 미치는 영향을 찾습니다.

### [docs/workflow/skills/lounge-implement/SKILL.md](../../workflow/skills/lounge-implement/SKILL.md)

Ready가 확인된 카드 범위를 실제 코드 저장소에서 구현·검증하고 재개 기록을 남깁니다. 필요한 행동 테스트에 TDD를 적용합니다.

### [docs/workflow/skills/lounge-review/SKILL.md](../../workflow/skills/lounge-review/SKILL.md)

저장소 규칙과 카드·명세 충족을 각각 검토합니다. 리뷰만 요청하면 임의 수정하지 않습니다.

improve-codebase-architecture는 별도 상시 스킬로 추가하지 않았습니다. 실제 코드에서 반복되는 문제가 확인될 때 검토 범위를 정하며 미사용 추상화를 미리 만들지 않습니다.

## 7. Ready와 진행 상태

Ready는 착수 가능한 범위이고 진행 상태는 현재 위치입니다. TBD는 근거 부족, Ready-UI는 명시된 UI만 가능, Ready-Integration은 필요한 정책·계약·선행 조건 합의, Blocked는 필수 조건 미해소, N/A는 해당 경계가 없으며 이유를 기록하는 상태입니다.

진행은 Backlog → In Progress → Review → Done이며 막히면 Blocked, 보류하면 Deferred입니다. Ready-UI의 Done은 UI 범위 완료입니다. Phase는 분류이며 출시 순서나 계약 독립성을 뜻하지 않습니다. API 계약은 TBD / Draft / Agreed / N/A이고 Mocked는 계약 상태가 아닙니다. 계약과 Mock 책임 합의 전 endpoint·parser·fixture·handler·API Mock을 임의로 만들지 않습니다.

## 8. 회원가입 기능의 실제 사용 흐름

아래 순서는 사용 방법의 예시이며 확정된 회원가입 정책이 아닙니다.

① IA 파일·행·ID와 플랫폼 경계를 확인합니다. ② lounge-grill로 본인인증·약관·실패·재가입 질문을 decisions에 기록합니다. ③ API·Bridge 담당과 계약을 검토합니다. ④ 큰 흐름이면 명세를 만듭니다. ⑤ UI·협의·연동·검증을 실제 카드로 나눕니다. ⑥ 변경 영향을 확인합니다. ⑦ 카드별 Ready를 판단합니다. ⑧ 실제 코드 저장소에서 구현합니다. ⑨ 필요한 검사·테스트·기기 검증과 리뷰를 수행합니다. ⑩ 카드·progress에 결과와 다음 행동을 남깁니다.

## 9. AI에게 요청하기

AI가 달라도 문서 위치·실제 코드 위치·작업 카드·필요한 지침을 전달합니다. 파일 읽기가 불가능한 환경에서는 원본 내용을 제공해야 합니다.

```text
문서 저장소: <팀원의 lounge-docs 위치>
코드 저장소: <실제 FE 또는 Flutter 위치>
AGENTS.md → docs/AGENTS.md → docs/workflow/AGENTS.md를 읽어줘.
회원가입 IA 근거를 확인하고 lounge-grill로 미정 질문을 정리해줘.
정책·API·Bridge를 추측해서 구현하지 마.

구현 요청 시: 실제 카드 경로를 제공하고 lounge-ready로 착수 범위를 확인한 뒤 lounge-implement로 구현·검증·재개 지점을 기록해줘.
```

## 10. 보조 스크립트와 선택적 연결

스크립트는 기계적 검사를 돕습니다. 정책의 정확성이나 AI가 실제로 지침을 따랐는지를 증명하지는 않습니다.

### [docs/workflow/scripts/refresh_ia.py](../../workflow/scripts/refresh_ia.py)

원본 HTML에서 ID·근거를 추출해 inventory와 audit를 재생성합니다. IA 변경 시 실행하며 원본은 수정하지 않습니다.

### [docs/workflow/scripts/validate_workflow.py](../../workflow/scripts/validate_workflow.py)

대상 Markdown 링크·스킬 메타데이터·인코딩·IA 근거·해시를 검사합니다. 공용 문서 변경 후 실행합니다.

### [docs/workflow/scripts/export_skills.py](../../workflow/scripts/export_skills.py)

선택한 기존 workspace에 스킬을 연결합니다. 기본 미리보기, --apply가 실제 내보내기입니다. 사용자 파일 충돌을 보호합니다.

```text
문서 저장소 루트에서:
python docs/workflow/scripts/validate_workflow.py
python docs/workflow/scripts/refresh_ia.py

선택적 미리보기:
python docs/workflow/scripts/export_skills.py --workspace "<기존 코드 폴더>" --agent codex
실제 내보내기는 위 명령에 --apply 추가

--agent: cline / claude-code / codex / manual
각 위치: .cline/skills / .claude/skills / .agents/skills / docs/workflow/skills
lounge-workflow.json: 문서 위치 연결
.lounge-skills-export.json: 관리한 복사본의 해시 기록
```

## 11. 팀 인수인계와 현재 적용 범위

기획·운영은 정책, BE는 서버 계약, Native는 Bridge·기기 동작, FE는 UI·웹 상태·웹뷰 사용 경계를 담당합니다. 작업자는 카드와 검증을 갱신하고 리뷰어는 범위·완료 조건을 확인합니다. AI는 질문·초안·허용된 구현을 지원합니다.

카드에는 변경 결과·실제 파일·검증 Pass / Fail / Not Run / N/A·남은 차단 조건·다음 행동을 남깁니다. decisions에는 결정 담당과 근거, progress에는 카드 링크와 현재 상태를 남깁니다. Cline 전용 .cline/과 .clinerules/는 공용 저장소에서 제거했습니다. 도구별 연결은 각자 선택합니다. 제품 카드·기능 구현은 아직 자동으로 시작된 것이 아닙니다. 실제 저장소 위치·인증·회원·결제 정책·계약·판매채널·PO·OO 범위는 관련 작업에서 확인해야 합니다. 문서 검사와 모델 실행·제품 Build·실기기 검증은 별개입니다. 첫 참여자는 usage-guide를 읽고 작은 기능 하나의 근거·질문·카드를 만든 뒤 Ready 판단부터 시작합니다.
