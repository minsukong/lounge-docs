# 더라운지 3.0 업무 지침 사용법

## 1. 목적과 도구 선택

업무 지침은 IA·미정 기획을 명세·작업·검증으로 연결하는 팀 공통 기준입니다. 이 문서는 사람이 실제 사용 순서를 이해할 때 참고합니다. AI는 [AI 작업 진입](AGENTS.md)에서 요청별 읽기 경로를 선택하며, 이 사용법 전체를 먼저 읽을 필요는 없습니다. Cline·Claude Code·Codex·다른 AI 중 무엇을 사용할지는 각 팀원이 선택합니다.

사용자의 현재 Strata·Qwen Flash 계열·VSCode Cline은 개인 환경 사례입니다. 팀 필수 스택이나 모델·endpoint·context 설정으로 확정하지 않습니다. 이번 구성은 provider 설정이나 제품 코드를 변경하지 않습니다.

## 2. 계층을 따라 읽기

```text
AGENTS.md                         저장소 공통 규칙
└─ docs/AGENTS.md                  문서 편집과 영역 안내
   └─ workflow/AGENTS.md           상세 문서와 스킬 선택
      ├─ index.md / index.html      전체 문서의 역할과 연결
      ├─ README.md                 운영 기준
      ├─ usage-guide.md            실제 사용 순서
      ├─ 양식·결정·진행·IA 문서    근거와 기록
      ├─ skills/AGENTS.md          공용 스킬 선택·관리
      │  └─ lounge-*/SKILL.md       실제 작업 지침
      └─ scripts/AGENTS.md         검사·대조·내보내기

work/                             IA 원본·업무·검토 자료
```

전체 문서의 연결은 [업무 지침 안내](index.md), 운영 기준은 [README](README.md)를 참고합니다.

루트에는 이 세부 내용을 복사하지 않습니다. 상세 질문이 생기면 관련 하위 안내와 필요한 파일만 읽습니다. 자동 계층 로딩을 지원하지 않는 AI에도 파일 경로를 직접 알려줄 수 있습니다.

## 3. 작업 위치와 공용 기준

lounge-docs는 문서·스킬 기준과 Front-end 소스를 함께 관리하는 저장소입니다. WebView 화면은 `front-end/webview/`, FO 웹·PO·OO는 `front-end/`에서 영역별로 관리하고, Flutter Native는 별도 위치에서 구현합니다. `front-end/webview/`에는 아직 package와 설정이 없습니다.

팀원별 절대 경로를 정책으로 고정하지 않습니다. 카드에는 `front-end/` 기준 작업 위치를 적습니다. 다른 폴더에서 AI를 여는 경우를 위해 스킬을 내보내면 lounge-workflow.json이 문서 위치를 연결합니다.

IA·정책·계약·Ready·완료·검증은 AI와 모델이 달라도 같습니다. 명세·카드·progress·decisions가 인수인계 기준이며 대화 기억에만 의존하지 않습니다.

## 4. 공용 스킬

기준 원본은 docs/workflow/skills/입니다. 각 스킬은 name·description과 Markdown 지침으로 구성하고 특정 AI의 Skill tool·provider·slash 문법을 요구하지 않습니다.

| 스킬 | 역할 | Matt 방식과 대응 |
| --- | --- | --- |
| lounge-grill | 기획 질문·용어·결정 | grill-with-docs + domain-modeling |
| lounge-spec | 합의 내용 명세 | to-spec |
| lounge-tickets | 작은 작업·책임·차단 | to-tickets |
| lounge-ready | UI·연동 착수 판정 | 프로젝트 추가 |
| lounge-api-review | API 계약 누락·영향 | 프로젝트 추가 |
| lounge-bridge-review | Native/Web 책임·검증 | 프로젝트 추가 |
| lounge-impact | 변경의 실제 소비자·영향 | 프로젝트 추가 |
| lounge-implement | 카드 하나 구현·필요 TDD·검증 | implement + tdd |
| lounge-review | 규칙·명세 두 관점 리뷰 | code-review |

용어는 합의될 때 기록하고 큰 대안 결정만 ADR로 남깁니다. TDD는 중요한 행동·분기·폼·상태에 사용하며 단순 표시·라이브러리 내부를 형식적으로 테스트하지 않습니다. 실제 코드의 반복된 변경 비용이 확인될 때만 별도 아키텍처 개선을 검토합니다.

## 5. 어떤 AI에서든 시작하기

다음처럼 요청합니다.

```text
문서 저장소의 docs/workflow/AGENTS.md를 읽어줘.
이번 요청은 회원가입 기획 검토야.
workflow/AGENTS.md에서 해당 문서와 스킬을 찾아 필요한 파일만 읽고,
확정 내용과 질문·차단 조건을 구분해줘.
```

필요한 스킬을 알고 있으면 docs/workflow/skills/lounge-ready/SKILL.md처럼 경로를 직접 지정합니다. 파일 접근이 없는 AI에는 필요한 본문을 제공하고 문서 정리·검토 범위로 사용합니다.

어떤 AI가 스킬 파일을 읽었다고 해서 코드 실행·실기기 확인까지 가능한 것은 아닙니다. 수행한 행동과 미실행 검증을 분리하게 합니다.

## 6. 자동 스킬 기능은 선택

각 도구가 자체 스킬 발견을 지원한다면 [도구 연결 안내](agent-adapters.md)의 위치로 공용 원본을 내보냅니다. 사용하는 도구만 선택하면 됩니다.

```text
python docs/workflow/scripts/export_skills.py --workspace "lounge-docs 경로" --agent codex
```

cline / claude-code / codex / manual 중 선택합니다. 기본은 미리보기이며 실제 저장할 때 --apply를 붙입니다. 파일·관리 기록이 변경되었으면 사용자 내용을 보호하며 중단합니다.

운영 기준·스킬 원본은 docs/workflow/ 아래에 있습니다. IA 원본과 기획 검토 자료는 work/에 둡니다. 도구별 룰은 각 팀원이 직접 연결할 수 있으며 이 저장소에는 Cline 전용 룰·스킬 복사본을 두지 않습니다. 자동 스킬 내보내기도 선택 사항입니다.

## 7. 첫 기능을 시작하는 예

아직 기획이 부족한 회원가입을 시작한다면 다음 순서입니다.

### A. 질문 정리

```text
lounge-grill을 사용해 회원가입 IA와 관련 기획을 읽어줘.
IA는 후보 자료야. 결정된 내용과 미정을 구분하고,
이번 착수를 막는 핵심 질문부터 확인해줘.
정책을 임의로 확정하거나 API·mock을 만들지 말고 decisions에 기록해줘.
```

여기서 부모 동의·소셜 종류·약관 버전 등의 정책 답이 없으면 TBD로 남습니다. 실제 운영 정책을 결정할 담당에게 확인할 질문이 결과입니다.

### B. 큰 기능의 명세

```text
lounge-spec으로 지금 합의된 회원가입 내용을 명세로 작성해줘.
미정은 결정 ID와 연결하고, WebView·웹·Native 책임을 구분해줘.
이 요청에서는 코드 구현과 외부 tracker 게시를 하지 않아.
```

### C. 작업 카드 분해

```text
lounge-tickets으로 명세를 작은 카드로 나눠줘.
각 카드에 검수할 결과·담당·Blocked by와 해소 증거를 써줘.
정책이나 API가 미정이면 독립 UI 작업과 연동 작업을 구분해줘.
```

### D. Ready 확인

```text
lounge-ready로 TASK-MEM-001을 확인해줘.
Ready-UI / Ready-Integration / Blocked 중 근거 있는 판정과
허용 범위·차단 ID·다음 행동을 카드에 기록해줘.
```

폼 모양이 준비됐더라도 본인인증·세션·약관 계약이 없으면 연동 완료를 목표로 하는 카드는 Blocked일 수 있습니다. UI 카드가 독립적이면 그 범위만 Ready-UI가 됩니다.

### E. 구현

```text
lounge-implement로 Ready가 확인된 TASK-MEM-001만 구현해줘.
카드에 지정한 front-end/ 위치에서 기존 패턴을 확인하고,
필요 검증과 규칙·명세 리뷰까지 끝낸 뒤 카드와 progress를 갱신해줘.
```

카드에 코드 위치가 없으면 `front-end/`의 어느 앱인지부터 확인합니다. package가 아직 없는 영역은 앱 설정을 만드는 작업부터 시작하며, 정의되지 않은 script와 설정을 추측하지 않습니다.

## 8. Ready-UI를 이해하는 예

API 계약이 없는 로그인 기능 전체를 “완료”하려고 하지 않습니다. 합의된 버튼·입력 표시와 지역 폼 상태만 독립적으로 검수할 수 있다면 별도 UI 카드에 그 결과를 적습니다.

- 가능한 완료 표현: “합의된 입력·표시 상태와 검수 범위 완료.”
- 부정확한 완료 표현: “로그인 완료.” 또는 “가짜 토큰을 저장하고 성공 화면 이동.”
- 후속 연동 카드: 승인된 인증 계약, Native 책임과 오류 처리 합의가 차단 조건.

합의되지 않은 입력 검증 규칙도 UI라는 이유로 정하지 않습니다. API mock과 UI의 단순 표시 예시는 다르며, 표시 예시도 업무 정책으로 오해되지 않게 범위를 정합니다.

## 9. API·Native 협의에 사용하는 예

```text
lounge-api-review로 이 API 문서와 결제 카드를 대조해줘.
요청·응답 의미, 업무 실패·전송 실패, 중복 제출·재시도,
캐시 갱신과 상태 조회의 누락을 담당별 질문으로 정리해줘.
```

```text
lounge-bridge-review로 PG 복귀 흐름을 검토해줘.
Web과 Flutter의 책임, 요청·응답·취소·timeout,
Android/iOS 차이와 실기기에서 확인할 절차를 적어줘.
합의 없는 command나 fallback은 만들지 마.
```

리뷰 결과는 질문·영향·차단 조건입니다. 책임자가 계약을 합의한 기록이 있어야 Agreed로 바꿉니다.

## 10. 변경·리뷰·재개

공통 버튼이나 인증·Query 계약을 바꿀 때는 lounge-impact로 실제 사용처와 필요한 회귀 검증을 먼저 봅니다. 검토 요청만으로 전체 구조를 리팩터링하지 않습니다.

lounge-review는 규칙 적합성과 카드 요구사항 적합성을 분리합니다. 코드 스타일이 맞아도 카드 동작이 빠질 수 있고, 동작이 맞아도 보안·상태 책임 기준을 어길 수 있기 때문입니다.

중단 뒤에는 다음처럼 요청합니다.

```text
progress의 실제 작업 대시보드와 TASK-MEM-001을 읽어줘.
마지막 변경과 실패 검증을 확인하고, 다음 세션의 첫 행동부터 이어가줘.
이미 완료한 부분을 반복하지 말고 미정 계약은 그대로 유지해줘.
```

“다음 것 해줘”라고 할 때도 전체 IA 첫 줄부터 진행하지 않습니다. 차단 조건이 해소된 실제 카드 후보를 확인합니다.

## 11. 상태를 유지하는 방법

- 카드: 상세 범위·결정 근거·검증 결과·잔여 작업.
- progress 대시보드: 카드 링크·Ready·진행 상태·차단·재개 요약.
- decisions: 담당에게 확인할 질문과 결정 상태.
- 명세: 기능의 합의된 흐름과 이유. 각 카드에서 반복 복사하지 않음.

타입 검사·lint가 통과해도 사용자 결과와 필요한 검증을 충족하지 못하면 Done으로 표시하지 않습니다. 기능 전체의 완료·출시 검증과 UI 카드의 Done을 구분합니다.

## 12. IA가 변경될 때

HTML 원본을 새로 받은 뒤 아래 스크립트를 실행하면 원본 ID 목록·대조 결과를 다시 만듭니다.

```powershell
python docs/workflow/scripts/refresh_ia.py
python docs/workflow/scripts/validate_workflow.py
```

스크립트는 IA HTML을 읽기만 하며 inventory와 audit 파생 파일을 갱신합니다. Ready와 작업 상태를 자동 변경하지 않습니다. 화면명이 변경됐거나 ID가 재사용됐는지는 사람이 근거를 확인하고 영향받는 카드만 재판정합니다.

## 13. 작업 크기와 모델 전환

한 번에 카드 하나, 필요한 스킬 하나부터 시작합니다. 전체 IA HTML·상세 가이드·모든 스킬을 통째로 context에 넣지 않습니다. 모델 이름만으로 큰 기능을 한 번에 처리할 수 있다고 가정하지 않습니다.

두 번 같은 편집·도구 오류가 반복되면 범위를 줄이고 상태를 확인합니다. 장기 반복·잘못된 계약 추측·검증 누락이 지속되면 관련 카드·오류·diff만 묶어 다른 모델이나 사람의 검토로 넘깁니다. 모델을 바꿔도 프로젝트 기준과 결정 근거는 유지합니다.

첫 운영 확인은 “스킬 발견 → 필요한 파일 읽기 → Ready 판정 → 허용된 작은 작업 → 검증·재개 기록”이 실제로 되는지 보는 것입니다. 파일 설치와 모델의 올바른 행동은 별도의 확인 대상입니다.
