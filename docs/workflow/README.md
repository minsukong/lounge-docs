# 더라운지 3.0 개발 워크플로

이 워크플로는 기획·IA를 검토 가능한 명세와 작은 작업으로 바꾸고, 실제 코드 저장소에서 구현·검증하는 기준입니다. 문서 저장소와 실제 코드 저장소를 구분합니다.

## 시작하기

- 사람이 사용하는 상세 안내: [사용 가이드](usage-guide.md)
- AI에게 전달하는 단위: [작업 카드](task-card.md)
- 화면 후보와 작업 상태: [진행 현황](progress.md)
- IA 근거와 충돌: [IA 기준](ia-baseline.md), [자동 대조 결과](ia-audit.md), [원본 ID 목록](ia-inventory.csv)
- 명세가 여러 작업에 걸칠 때: [명세 양식](spec-template.md)
- API·Native 협의: [계약 검토 양식](contract-review.md)
- 결정 대기 항목: [결정 기록](decisions.md)
- 이번 적용 내용과 검증: [적용 보고서](implementation-report.md)

## 저장소 파일 구성

```text
lounge-docs/
├── AGENTS.md                              ← 루트 공통 규칙
├── docs/
│   ├── AGENTS.md                          ← 문서 영역 규칙
│   ├── ai/                                ← 프로젝트 요약 (project, ui, quality 등)
│   ├── common-source/                     ← 공통 소스 가이드
│   ├── diagrams/                          ← Archify 다이어그램
│   ├── guides/                            ← 상세 가이드 (app, web, testing 등)
│   │   └── workflow/
│   │       └── index.md                   ← 사람용 워크플로 가이드 (HTML 동봉)
│   ├── search/                            ← 검색 인덱스
│   ├── templates/
│   └── workflow/                          ← ★ 운영 원본
│       ├── AGENTS.md                      ← 요청별 문서·스킬 매핑
│       ├── README.md                      ← 이 문서: 공통 기준
│       ├── usage-guide.md                 ← 상세 운영 예시
│       ├── task-card.md                   ← 카드 양식
│       ├── spec-template.md               ← 명세 양식
│       ├── contract-review.md             ← API·Bridge 계약 양식
│       ├── decisions.md                   ← 결정 대기 (DEC-001~)
│       ├── progress.md                    ← IA 후보 + 작업 대시보드
│       ├── ia-baseline.md                 ← IA 신뢰도·충돌 처리
│       ├── ia-audit.md                    ← 자동 대조 결과
│       ├── ia-inventory.csv               ← 원본 ID 추출 (587행)
│       ├── agent-adapters.md              ← 도구 연결 안내
│       ├── implementation-report.md       ← 적용 보고서
│       ├── skills/                        ← 공용 스킬 원본 (9개)
│       │   ├── AGENTS.md
│       │   └── lounge-*/SKILL.md
│       └── scripts/                       ← 검증·IA·내보내기
│           ├── AGENTS.md
│           ├── refresh_ia.py
│           ├── validate_workflow.py
│           └── export_skills.py
├── front-end/                             ← 참고 골격 (webview/)
├── tokens/                                ← design tokens
└── work/                                  ← IA 원본·검토 자료 전용
    ├── AGENTS.md                          ← "운영 기준은 docs/workflow" 명시
    ├── 더라운지_IA FO_v0.2.xlsx/          ← IA HTML 원본 (수정하지 않음)
    └── inspect/                           ← 프로젝트 현황 브리핑·검토
```

### 영역 구분 원칙

| 위치 | 역할 | 비고 |
|------|------|------|
| `docs/workflow/` | 운영 원본: 기준·양식·카드·결정·IA 대조·스킬·스크립트 | AI와 사람이 함께 사용하는 단일 소스 |
| `docs/guides/workflow/` | 사람이 읽는 서술형 가이드 | HTML 포함, 운영 원본을 대체하지 않음 |
| `work/` | IA 원본 HTML, 업무 검토 브리핑 | 읽기 전용. 운영 기준·스크립트 없음 |
| `front-end/` | 참고 골격 | 실제 제품 코드 저장소와 다름 |

### 스크립트 실행

```powershell
# 워크플로 무결성 검사 (링크·메타·인코딩·IA 해시)
python docs/workflow/scripts/validate_workflow.py

# IA 원본 변경 후 파생 목록 재생성
python docs/workflow/scripts/refresh_ia.py

# 선택 AI 도구로 스킬 내보내기 (미리보기 기본)
python docs/workflow/scripts/export_skills.py --workspace "코드 저장소 경로" --agent cline
```

## 기준 자료의 역할

| 자료 | 사용하는 목적 | 그 자료만으로 확정하지 않는 것 |
| --- | --- | --- |
| IA HTML | 화면 ID, 메뉴와 기능 후보의 근거 | 최종 범위, 정책, API, 일정, 플랫폼 담당 |
| 승인된 기획·협의 기록 | 명세와 계약의 결정 근거 | 자료에 없는 세부 동작 |
| 실제 소스·package·잠금 파일 | 설치 버전, 재사용 지점과 실행 명령 | 미정 업무 정책 |
| AGENTS.md·docs/ai | 저장소 구현·품질 기준 | 실제 소스와 다른 예시 구조 |
| 작업 카드 | 이번에 허용된 범위, 완료 조건, 차단 조건 | 다른 카드의 미정 부분 |

자료가 충돌하면 출처와 차이를 기록하고 영향을 받는 부분만 보류합니다. 구현 권한이 있는 사람의 명시적 결정은 문서에 반영하되, BE·Native·운영 계약을 대신 승인한 것으로 해석하지 않습니다.

## 기능 처리 흐름

```text
IA·기획·요청 확인
  → 필요한 질문·용어·결정 기록
  → 명세 작성 (여러 세션에 걸칠 때)
  → 작업 카드 분해 + 실제 차단 조건
  → Ready 판정 + 영향 분석
  → 카드 하나 구현
  → 타입·린트·테스트·Storybook·Build 중 필요한 검증
  → 규칙·명세 두 관점 리뷰
  → 결과와 재개 지점 기록
```

작은 수정은 명세와 티켓 분해를 생략할 수 있습니다. 외부 계약을 건드리지 않는 오타·스타일 수정에도 모든 스킬을 실행하지 않습니다.

## Phase는 정리용 분류

| Phase | 범위 |
| --- | --- |
| 0 | 공통 UI·셸·오류·폼과 기술 기반 |
| 1 | 인증·회원가입·메인·검색 |
| 2 | 사용처·상품·주문·결제·제휴카드·판매채널 후보 |
| 3 | 마이페이지·월렛·프로모션·고객센터 |
| 4 | 반응형 웹 차이·PO·OO 검토 |

Phase는 progress의 분류에 맞췄습니다. 출시 순서나 계약 독립성을 뜻하지 않습니다. 반응형 차이는 공통 UI 설계 시 함께 고려합니다. PO·OO는 담당과 범위가 정해질 때까지 별도 범위 후보로 둡니다. 리무진·다이닝 등은 실제 기능에 따라 사용처·상품·서비스 흐름에 연결하며 별도 개발량을 추정하지 않습니다.

## Ready와 진행 상태는 별도

| Ready | 의미 |
| --- | --- |
| TBD | 근거 또는 검토가 부족함 |
| Ready-UI | 명시된 UI 범위만 착수 가능. 서버·Native 연동은 제외 |
| Ready-Integration | 이번 카드에 필요한 정책·API·Bridge와 선행 조건이 합의됨 |
| Blocked | 이번 카드의 목표를 달성하는 필수 결정·작업이 남아 있음 |
| N/A | 해당 경계가 없는 문서·기계적 수정 등. 이유 기록 |

진행 상태는 Backlog → In Progress → Review → Done이며, 진행 중 막히면 Blocked로 옮깁니다. 보류는 Deferred입니다. Ready-UI 카드 완료는 UI 범위의 Done이며 기능 전체 출시 완료가 아닙니다. 범위를 UI와 연동으로 나눴다면 각각 고유 카드와 완료 조건을 둡니다.

## API·Bridge 미정 시

- 합의된 화면 구조, 지역 UI 상태, UI Props 범위만 먼저 구현할 수 있습니다.
- 업무 의미가 미정인 값은 화면 모델의 후보로 기록하며 서버 DTO처럼 확정하지 않습니다.
- 계약 전 endpoint·응답 parser·API mock·fixture·handler를 만들지 않습니다.
- API 상태는 TBD / Draft / Agreed / N/A입니다. Mocked는 계약 상태가 아닙니다.
- mock 사용은 별도 테스트 전략 None / Contract-Mock / Backend로 기록합니다. 계약 합의와 담당자의 mock 범위·관리 책임 결정 후에만 Contract-Mock을 사용합니다.
- 인증 가드·토큰·API 오류·오프라인 복구·PG·딥링크는 Phase 0이어도 외부 협의가 필요할 수 있습니다.
- UI Story를 위해 가짜 업무 계약을 추가하지 않습니다. 제품과 무관한 표시 예시는 실제 필요와 허용 범위가 있을 때만 사용합니다.

## 검증

실제 코드 저장소의 package에 정의된 명령만 실행합니다. 타입 검사와 린트를 기본으로, 사용자 행동·분기·폼·상태 전환은 필요한 테스트를 수행합니다. 단순 표시와 Tailwind 문자열 검사를 형식적으로 추가하지 않습니다.

Story 대상은 공통 UI, 독립 검수 가치가 있는 Feature, 대표 Screen과 주요 상태입니다. Story 변경 시 정적 Build, 통합 영향 시 앱 Build를 추가합니다. API 실패·로딩은 합의된 계약과 허용된 테스트 전략에서 검증합니다.

자동 검증만으로 Flutter 실기기 동작을 확인했다고 보고하지 않습니다. Android·iOS WebView, 키보드, 뒤로가기, Safe Area, 딥링크 등은 영향이 있는 경우 별도 확인하고 미실행 여부를 기록합니다.

## 작업·기록·재개

카드는 docs/workflow/tasks/에, 여러 카드의 부모 명세는 docs/workflow/specs/에 실제 항목이 생길 때 저장합니다. 경로는 관례이며 빈 파일이나 수백 개의 카드부터 생성하지 않습니다.

진행표의 작업 대시보드는 카드 ID·링크·Ready·상태·차단 조건만 요약합니다. 상세 정책·검증 결과는 카드가 기준입니다. 화면 후보 목록은 IA 대조 전 작업 대시보드로 자동 승격하지 않습니다.

새 세션에서는 작업 카드, 관련 명세와 결정, 실제 코드 저장소, 마지막 diff와 실패 검사를 먼저 확인합니다. “다음 것”은 순번이나 Phase가 아니라 차단 조건이 해소된 카드 중 우선순위로 선택합니다.

GitHub 연동은 선택입니다. 현재는 로컬 Markdown을 기준으로 합니다. Issue·PR·게시·commit·push·merge는 해당 동작을 사용자가 요청한 범위에서만 수행합니다. Merge와 Done, 출시 검증은 팀이 정한 기준에 맞춰 각각 기록합니다.

## 스킬

공용 원본은 docs/workflow/skills/에 있습니다. [스킬 안내](skills/AGENTS.md)에서 필요한 SKILL.md만 선택합니다. [문서 영역 안내](../AGENTS.md) → [workflow 안내](AGENTS.md) → 해당 문서·스킬의 계층으로 읽습니다. Cline·Claude Code·Codex 또는 다른 AI의 선택은 워크플로 기준을 바꾸지 않습니다.

자동 스킬 기능은 선택 사항입니다. [도구 연결 안내](agent-adapters.md)에 도구별 발견 위치와 공용 내보내기를 분리했습니다. 사용법과 Matt 방식의 대응은 [사용 가이드](usage-guide.md)를 확인합니다.
