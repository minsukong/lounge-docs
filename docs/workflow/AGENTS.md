# 더라운지 3.0 업무 지침 — AI 작업 진입

이 파일은 AI가 실제 업무를 시작할 때 읽는 진입 지침입니다. 사람용 설명은 [업무 지침 안내](index.md)와 [사용법](usage-guide.md)에 있습니다. **사람용 설명·전체 README·모든 스킬·IA 전체를 먼저 읽지 않습니다.** 적용되는 상위·하위 AGENTS.md와 선택한 스킬의 필수 지침은 따릅니다.

## 최소 실행 기준

1. 사용자 요청의 대상·행동·결과를 확인하고 아래 표에서 해당 경로만 선택합니다. 작은 문구·스타일 수정에는 명세·카드·전체 절차를 추가하지 않습니다.
2. 정책·API·인증·Bridge·담당을 추측하지 않습니다. 기획 확인과 Backend·앱 계약 협의를 구분하고, 미확인 부분은 근거와 질문으로 남깁니다.
3. 구현은 실제 카드·소스·설정에서 허용 범위와 코드 위치를 확인합니다. docs와 참고 골격을 실제 제품 구현 위치로 가정하지 않습니다.
4. Ready는 이번 범위의 착수 조건, 진행 상태는 실제 작업 상태입니다. 질문 해소·UI 완료·계약 검토만으로 기능 통합 완료를 표시하지 않습니다. 판정이 필요할 때 [운영 기준](README.md)의 해당 섹션을 읽습니다.
5. 기존 변경·ID·결정 이력을 보존하고 요청된 범위만 수정합니다. 외부 요청·게시·원본 변경은 사용자에게 허용된 범위에서만 수행합니다.
6. 수행한 작업·검증·미확인 범위·다음 행동을 대상 문서나 실제 카드에 남깁니다. 확인하지 않은 원본·계약·실행 결과를 확인 완료로 기록하지 않습니다.

## 요청별로 읽을 경로

| 이번 요청 | 먼저 읽을 문서·범위 | 사용할 스킬·추가 기준 |
| --- | --- | --- |
| 기획 리뷰 A/B 작성·검수 | [기획 검토 지침](../../work/inspect_sb/AGENTS.md) + 지정 A/B·Figma 근거 | 해당 폴더의 REST API·토큰·OLD 제외·Backend 협의 기준 적용. 구현 절차로 확대하지 않음 |
| 요구사항·정책 질문 정리 | [결정 기록](decisions.md)의 관련 항목 + 지정 IA·기획 | [lounge-grill](skills/lounge-grill/SKILL.md) |
| 여러 카드의 기능 명세 | [명세 양식](spec-template.md) + 관련 합의·결정 근거 | [lounge-spec](skills/lounge-spec/SKILL.md) |
| 작업 분해·담당·의존성 | [작업 카드 양식](task-card.md) + 관련 명세 | [lounge-tickets](skills/lounge-tickets/SKILL.md) |
| UI·연동 착수 판단 | 실제 카드 + [운영 기준](README.md)의 “Ready와 진행 상태는 별도”, “API·Bridge 미정 시” | [lounge-ready](skills/lounge-ready/SKILL.md) |
| API 계약 확인 | [계약 검토](contract-review.md)의 API·공통 기록 + 해당 실제 계약·카드 | [lounge-api-review](skills/lounge-api-review/SKILL.md) |
| Flutter/WebView 경계 | [계약 검토](contract-review.md)의 Bridge·공통 기록 + 실제 계약·카드 | [lounge-bridge-review](skills/lounge-bridge-review/SKILL.md) |
| 변경 영향 확인 | 지정 변경 + 실제 소비자·카드·계약 | [lounge-impact](skills/lounge-impact/SKILL.md) |
| Ready 카드 구현 | 지정 실제 카드의 범위·Ready·코드 위치·검증 계획 + 해당 소스 지침 | [lounge-implement](skills/lounge-implement/SKILL.md). Ready가 미확인이면 착수 판단 경로부터 확인 |
| diff 검토 | 지정 diff + 실제 카드·명세·비교 기준 | [lounge-review](skills/lounge-review/SKILL.md). 검토 요청만으로 수정하지 않음 |
| 중단 작업 재개 | 지정 카드의 재개 기록부터. 카드 미지정이면 [진행 현황](progress.md)의 관련 행만 확인 | 해당 작업 종류의 스킬. IA 후보를 실제 진행 카드로 가정하지 않음 |
| IA 원본 대조 | [IA 기준](ia-baseline.md) + [대조 결과](ia-audit.md)의 해당 시트 + 필요한 inventory 행 | 원본 보존. 시트+코드 식별과 이름·담당·정책의 확인을 구분 |
| 도구 연결·자료 내보내기 | [도구 연결 안내](agent-adapters.md)의 해당 도구·목적 | 실행할 때 [스크립트 지침](scripts/AGENTS.md) 추가 확인 |
| 단순 문구·링크·스타일 수정 | 지정 파일·관련 주변 범위 + 적용 지침 | 별도 스킬·명세·카드가 필요하지 않으면 추가하지 않음 |

읽기는 요청에 필요한 경로부터 시작하고, 선택한 스킬이 요구하는 필수 근거는 확인합니다. 자료가 없으면 그 부분의 한계를 남기고 가능한 독립 범위를 진행합니다. 문서 링크만으로 전체 자료를 연쇄적으로 읽지 않습니다.

표의 문서는 이 폴더 기준입니다. 실제 tasks/specs 항목은 필요할 때 생성합니다. 자동 스킬 기능이 없어도 해당 SKILL.md를 직접 읽어 수행할 수 있습니다.

## 기록 책임

- 카드에 상세 범위·근거·Ready·완료 조건·검증·다음 행동을 기록합니다.
- progress는 카드 링크·상태·차단 조건 요약과 보존된 IA 후보입니다.
- decisions에는 담당과 근거가 있는 결정·질문을 기록합니다.
- 명세는 여러 카드의 합의된 흐름과 이유를 보존합니다.
- agent-adapters는 선택적 도구 사용법입니다. 워크플로 정책을 여기서 변경하지 않습니다.

새 AI 세션도 같은 카드와 기록으로 이어갑니다. 자동 스킬 호출이 없는 도구는 SKILL.md를 직접 읽고 수행할 수 있습니다. 자동 발견·파일 읽기·실행 검증은 각각 다른 확인 항목입니다.

## 영역과 계층

루트 AGENTS.md → docs/AGENTS.md → 이 안내 → 필요한 문서·skills 또는 scripts의 하위 안내 순서로 확인합니다. docs의 편집 규칙은 문서 파일에 적용합니다. 이 영역은 운영 기준·명세·카드·결정·검증 기록을 관리하며 제품 구현은 카드에 명시한 실제 코드 저장소에서 수행합니다. IA 원본과 검토 자료는 work/에 보존합니다.
