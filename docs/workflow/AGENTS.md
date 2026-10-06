# workflow 작업 안내

여기는 개발 프로세스·명세·카드·계약·진행·결정의 관리 영역입니다. 공통 규칙은 [README](README.md), 사람용 상세 운영은 [사용 가이드](usage-guide.md)에 있습니다.

## 요청별 문서와 스킬

| 요청 | 확인할 파일 | 사용할 스킬 |
| --- | --- | --- |
| 요구사항·정책 질문 정리 | decisions.md + 관련 IA·기획 | [lounge-grill](skills/lounge-grill/SKILL.md) |
| 여러 카드의 기능 명세 | spec-template.md + 합의 근거 | [lounge-spec](skills/lounge-spec/SKILL.md) |
| 작업 분해·담당·의존성 | task-card.md + 관련 명세 | [lounge-tickets](skills/lounge-tickets/SKILL.md) |
| UI·연동 착수 판단 | README.md의 Ready + 실제 카드 | [lounge-ready](skills/lounge-ready/SKILL.md) |
| API 계약 확인 | contract-review.md의 API + 실제 계약 | [lounge-api-review](skills/lounge-api-review/SKILL.md) |
| Flutter/WebView 경계 | contract-review.md의 Bridge + 실제 계약 | [lounge-bridge-review](skills/lounge-bridge-review/SKILL.md) |
| 변경 영향 확인 | 실제 카드·소비자·계약 | [lounge-impact](skills/lounge-impact/SKILL.md) |
| Ready 카드 구현 | 실제 카드·코드 위치·검증 계획 | [lounge-implement](skills/lounge-implement/SKILL.md) |
| diff 검토 | 실제 카드·명세·규칙·비교 기준 | [lounge-review](skills/lounge-review/SKILL.md) |
| 중단 작업 재개 | progress.md의 대시보드 → 해당 카드의 재개 기록 | 카드 종류에 맞는 위 스킬 |
| IA 원본 대조 | ia-baseline.md → ia-audit.md → 필요한 inventory 행 | ID 존재와 이름·담당 일치를 분리 |
| 도구 연결·자료 내보내기 | agent-adapters.md | [스크립트 안내](scripts/AGENTS.md) |

표에서 언급한 파일은 모두 이 workflow 폴더 기준입니다. 실제 tasks/specs 경로는 항목이 생길 때 생성하며 빈 작업부터 만들지 않습니다.

## 기록 책임

- 카드에 상세 범위·근거·Ready·완료 조건·검증·다음 행동을 기록합니다.
- progress는 카드 링크·상태·차단 조건 요약과 보존된 IA 후보입니다.
- decisions에는 담당과 근거가 있는 결정·질문을 기록합니다.
- 명세는 여러 카드의 합의된 흐름과 이유를 보존합니다.
- agent-adapters는 선택적 도구 사용법입니다. 워크플로 정책을 여기서 변경하지 않습니다.

새 AI 세션도 같은 카드와 기록으로 이어갑니다. 자동 스킬 호출이 없는 도구는 SKILL.md를 직접 읽고 수행할 수 있습니다. 자동 발견·파일 읽기·실행 검증은 각각 다른 확인 항목입니다.

## 영역과 계층

루트 AGENTS.md → docs/AGENTS.md → 이 안내 → 필요한 문서·skills 또는 scripts의 하위 안내 순서로 확인합니다. docs의 편집 규칙은 문서 파일에 적용합니다. 이 영역은 운영 기준·명세·카드·결정·검증 기록을 관리하며 제품 구현은 카드에 명시한 실제 코드 저장소에서 수행합니다. IA 원본과 검토 자료는 work/에 보존합니다.
