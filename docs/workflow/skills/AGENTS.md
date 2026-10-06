# 공용 스킬 원본 안내

docs/workflow/skills/[스킬 이름]/SKILL.md가 아홉 프로젝트 스킬의 기준 원본입니다. 특정 AI 제품·모델·전용 도구 호출에 의존하지 않는 Markdown 지침으로 관리합니다.

## 선택

| 상황 | 읽을 스킬 |
| --- | --- |
| 기획·정책·용어·담당 미정 | [lounge-grill](lounge-grill/SKILL.md) |
| 합의 내용을 기능 명세로 정리 | [lounge-spec](lounge-spec/SKILL.md) |
| 검수 가능한 작업·선행 조건 분해 | [lounge-tickets](lounge-tickets/SKILL.md) |
| 이번 카드의 착수 범위 판정 | [lounge-ready](lounge-ready/SKILL.md) |
| API 계약의 누락·충돌·영향 | [lounge-api-review](lounge-api-review/SKILL.md) |
| Native·WebView 책임·계약·검증 | [lounge-bridge-review](lounge-bridge-review/SKILL.md) |
| 변경의 소비자·공유 상태·플랫폼 영향 | [lounge-impact](lounge-impact/SKILL.md) |
| Ready 카드 구현·필요 테스트·기록 | [lounge-implement](lounge-implement/SKILL.md) |
| 규칙과 명세 두 관점 리뷰 | [lounge-review](lounge-review/SKILL.md) |

실행 범위는 사용자의 요청과 카드에 따릅니다. 명세나 리뷰 요청을 자동 구현 권한으로 확대하지 않습니다.

## 편집

- name은 폴더명과 일치하고 description은 실제 적용 상황을 설명합니다.
- 공통 본문에 특정 provider·API·전용 Skill tool·명령 접두어를 요구하지 않습니다.
- 문서 위치는 docs/workflow의 계층 안내와 사용자가 지정한 문서 저장소로 찾습니다.
- 기준 원본을 먼저 수정하고 도구별 복사본을 갱신합니다. 복사본만 수정해 기준을 갈라놓지 않습니다.
- 이 저장소에는 도구 전용 복사본을 두지 않습니다. 팀원은 공용 원본을 직접 읽거나 필요한 도구에만 선택적으로 내보냅니다.
- 내보내기·구문·링크·복사본 일치 검사는 [스크립트 안내](../scripts/AGENTS.md)를 확인합니다.

## 사용

파일을 읽을 수 있는 AI에는 필요한 SKILL.md의 경로를 지정할 수 있습니다. 자체 스킬 기능이 있다면 [도구 연결 안내](../agent-adapters.md)에 따라 같은 원본을 발견 위치로 내보냅니다.

복사 위치와 호출 문법만 도구마다 다릅니다. 작업 카드·Ready·계약·완료·검증 기준은 동일합니다. 여러 도구가 같은 카드를 동시에 수정할 때는 현재 담당을 정하고 최신 상태를 확인합니다.
