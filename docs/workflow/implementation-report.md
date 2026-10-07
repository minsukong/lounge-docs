# 더라운지 3.0 워크플로 적용 보고서

## 팀 공용 구조로 보완

사용자 요청에 따라 특정 AI 도구를 기본으로 삼던 초기 구성을 보완했습니다. 공용 스킬 원본은 docs/workflow/skills/이며 Cline·Claude Code·Codex 또는 다른 AI가 같은 Markdown을 읽습니다. 자동 발견과 전용 호출은 선택적 도구 연결로 분리합니다.

루트 AGENTS.md에는 진입 링크 두 개만 추가했습니다. docs/workflow/AGENTS.md, docs/workflow/AGENTS.md, docs/workflow/skills/AGENTS.md, docs/workflow/scripts/AGENTS.md에 영역별 선택·문서·스킬·검증 안내를 배치했습니다.

사용자의 후속 요청에 따라 Cline 전용 복사본·룰·호환 설치 명령은 제거했습니다. 공용 원본과 계층 안내만 유지합니다. 새 export_skills.py는 선택한 도구의 프로젝트 위치 또는 manual 위치로 내보내고, 문서 연결을 상대 경로 중심으로 기록하며 기존 사용자 변경을 보호합니다. 현재 도구 독립 구조의 검증은 아래 최종 검증에 별도로 기록합니다.

## 적용 범위
기준 저장소는 C:/Users/mansu/Desktop/lounge/lounge-docs입니다. docs/workflow의 세 기존 문서를 개편하고, 도구 독립적인 프로젝트 스킬 아홉 개와 운영·계약·IA 근거·검증 도구를 추가했습니다.

Strata·Qwen·Cline 설정이나 실제 제품 코드는 변경하지 않았습니다. 원본 Matt 번들 전체 설치, 외부 Issue/PR 게시, commit·push·merge·배포는 수행하지 않았습니다.

## 기존 자료에서 확인한 문제와 적용 결과

| 기존 내용 | 문제 | 적용 |
| --- | --- | --- |
| 카드 입력 후 즉시 코드 구현 | 기획·계약·의존성 누락을 확인할 단계 없음 | 질문·명세·Ready·영향 분석 추가 |
| Phase 0은 API 계약 불필요 | 인증 가드·API wrapper·token·오류 처리는 계약 영향 가능 | Phase 대신 카드 목표로 계약 필요 판단 |
| Phase 1은 구조 + mock | 루트·quality 규칙의 계약 전 mock 금지와 충돌 | 독립 UI 범위와 후속 연동 분리 |
| API 상태 TBD/Agreed/Mocked | 계약 합의와 테스트 전략이 섞임 | 계약 상태와 mock/Backend 전략 분리 |
| README와 progress의 Phase | 제휴카드·마이페이지 분류 불일치 | progress의 분류로 정합. 출시 순서는 별도 |
| 화면 ID가 원본 그대로라는 표현 | MO 원본에 없는 ID 2개와 이름 대조 미완료 | 기존 목록 보존 + 자동 대조 + 재확인 |
| MO 134 + 웹 134 ≈ 확정 270 | ID·화면·기능·작업 카드 수가 혼재 | 확정 개발량 표현 제거 |
| OO IA 미확인 | 실제 OO HTML 존재 | 존재 확인과 담당 TBD 분리 |
| FO=공통 또는 PW 웹 자동 구분 | APP·WEB·판매채널은 모두 FO ID 사용 | 원본 파일·행·ID로 구분 |
| 작업 상태 세 가지 | 정책 대기·리뷰·부분 UI 완료 구분 부족 | Ready와 진행 상태 분리 |
| 새 세션에서 다음 것 | 순서·미정 계약을 잘못 해석할 가능성 | 실제 카드·diff·차단·재개 기준 |
| ../.. /ai 링크 | 현재 실제 위치 docs/ai와 불일치 | 실제 문서·새 워크플로 연결 |
| 토큰 저장 예시·auth store 골격 | 인증 책임·보안 계약을 미리 확정할 수 있음 | 방식 TBD, 근거·책임 확인 |

## 산출물

| 위치 | 역할 |
| --- | --- |
| docs/workflow/README.md | 공통 기준·Phase·Ready·진행·검증 |
| docs/workflow/task-card.md | 실제 작업 단위·근거·담당·차단·검수·재개 |
| docs/workflow/progress.md | 실제 작업 대시보드와 보존된 IA 후보 |
| docs/workflow/usage-guide.md | 팀 공용 시작·스킬 읽기·기록·재개 안내 |
| docs/workflow/spec-template.md | 여러 카드의 기능 명세 |
| docs/workflow/contract-review.md | API·Bridge 협의 양식 |
| docs/workflow/decisions.md | 현재 확인이 필요한 DEC-001~010 |
| docs/workflow/ia-baseline.md | IA 신뢰도·파일 역할·대조 원칙 |
| docs/workflow/ia-audit.md | 자동 대조·원본 해시 |
| docs/workflow/ia-inventory.csv | 원본 파일·행·화면 ID·원본 텍스트 |
| docs/workflow/scripts/refresh_ia.py | 원본을 보존한 파생 ID 추출 |
| docs/workflow/scripts/validate_workflow.py | 링크·스킬 메타데이터·인코딩·IA 근거 검사 |
| docs/workflow/skills/lounge-*/SKILL.md | 도구 독립 공용 스킬 원본 아홉 개 |
| docs/workflow/AGENTS.md와 하위 AGENTS.md | 요청별 상세 문서·스킬 안내 |
| docs/workflow/agent-adapters.md | 선택적 도구 발견·호출·내보내기 |
| docs/workflow/scripts/export_skills.py | 도구 선택과 관리 해시 기반 내보내기 |

## 스킬 설계

기획에는 lounge-grill, 합의 내용을 보존할 때 lounge-spec, 작업 분해에 lounge-tickets를 사용합니다. 착수 직전에는 lounge-ready를 사용하고 실제 경계가 있을 때 lounge-api-review·lounge-bridge-review·lounge-impact를 추가합니다. 구현은 lounge-implement, 마무리 검토는 lounge-review입니다.

TDD는 구현의 핵심 분기·폼·상태·사용자 결과에 적용하고 단순 표시·Tailwind 문자열·라이브러리 내부 동작에 강제하지 않습니다. 용어와 결정은 실제로 합의될 때 기록하며 빈 용어집·ADR부터 만들지 않습니다.

Matt의 작은 지침 조합, 명세 보존, 검수 가능한 작업, 실제 blocking edge, 행동 중심 테스트, 규칙/명세 리뷰 관점을 참고했습니다. 특정 AI의 전용 호출 없이 필요한 Markdown 지침을 읽어 사용할 수 있게 작성했습니다. 원본 코드나 SKILL.md를 복사한 번들이 아닙니다.

원본의 자동 commit·tracker 게시·하위 Skill tool 호출·병렬 리뷰는 그대로 적용하지 않았습니다. 프로젝트 범위와 실제 도구가 제공하는 기능에 맞춰 명시적 요청과 필요한 문서 읽기를 기준으로 합니다.

## Ready와 완료의 차이

- Ready-UI: 승인·확인된 UI 범위에 한해 시작 가능.
- Ready-Integration: 이번 카드에 필요한 계약과 선행 조건이 해소됨.
- Blocked: 현재 카드 목표를 달성할 필수 결정이나 작업이 남음.
- TBD: 착수 판단의 근거가 부족함.
- N/A: 경계 판정이 해당하지 않는 문서·기계적 변경 등. 이유 기록.

진행 상태는 Backlog / In Progress / Blocked / Review / Done / Deferred입니다. UI 카드 Done은 서버·Native 연동 완료나 출시 승인과 다릅니다. 검증 실패·미완료를 숨겨 Done으로 바꾸지 않습니다.

## IA 해석

사용자 설명에 따라 MO_WEB은 앱 WebView, WEB은 FO 웹(PC WEB·반응형 홈페이지), 판매채널은 추가 정보가 필요한 범위, PO는 파트너오피스로 연결했습니다. APP 원본 제목은 Native 영역 정의이지만 Native·webview 행이 섞여 있음을 확인했습니다.

추출은 정확한 ID 패턴의 셀 텍스트 기준입니다. 병합 셀의 메뉴 의미·취소선·기획 승인·서비스 공유·최종 담당을 자동 판정하지 않습니다. 이 제한 때문에 파생 수치를 개발량으로 사용하지 않습니다.

MO 후보의 미일치 ID 두 개는 MO-MEM-A000000, MO-PMT-A010000입니다. 기존 후보 행을 삭제하거나 임의 ID로 변경하지 않았습니다. 같은 ID의 화면명 차이는 별도 확인해야 합니다. 전체 후보와 계약을 개발 Ready로 만들었다고 주장하지 않습니다.

## 현재 남은 결정

DEC-001은 Front-end 구현 위치와 AI 작업 루트입니다. 사용자 확인으로 구현 위치는 `front-end/`, 앱 WebView는 `front-end/webview/`로 확정했습니다. 해당 위치에 package·설정이 아직 없다는 점은 앱 초기 구성이 필요하다는 뜻이며, 구현 위치가 미정이라는 뜻은 아닙니다. Flutter Native 소스는 별도 위치에서 관리합니다.

DEC-002~005는 인증·회원 정책·주문/결제·Bridge 계약입니다. DEC-006~007은 판매채널·PO/OO 담당과 범위입니다. DEC-008은 IA 매핑, DEC-009는 반응형 웹의 공유 전략, DEC-010은 mock 관리 책임입니다.

이 미정 항목을 전부 해결해야 모든 일을 시작할 수 있다는 뜻은 아닙니다. 이번 카드 목표에 실제로 필요한 결정만 차단 조건으로 연결합니다.

## 초기 구성의 검증 결과

다음은 앞선 초기 Cline 호환 구성 단계의 검사 기록입니다. 현재 공용 구조의 추가 검사는 최종 검증에 구분합니다.

| 검증 | 결과 |
| --- | --- |
| 관련 Markdown 20개: 내부 링크·메타데이터·인코딩·공백 | Pass |
| 아홉 스킬: 이름/폴더 일치·필수 메타데이터·설명 길이 | Pass |
| helper 스크립트 세 개 구문 | Pass |
| 원본 IA HTML·자원 11개 SHA-256 보존 | Pass |
| 기존 후보 135행 보존 | Pass. INFRA-05 토큰 정책 문구만 의도대로 수정 |
| 기존 워크플로 세 파일의 BOM·줄바꿈 보존 | Pass |
| IA 추출·재실행 동일 결과 | Pass. 기록 587개 |
| 스킬 복사: 미리보기 쓰기 없음 | Pass |
| 스킬 복사: 적용 시 아홉 스킬 + 연결 규칙 | Pass. 별도 임시 workspace에서 확인 |
| 스킬 복사: 같은 내용 재실행은 건너뜀 | Pass |
| 스킬 복사: 다른 기존 내용은 덮어쓰기 차단 | Pass |
| git diff --check | Pass. 새 파일은 별도 문서 검사와 백업 대조로 확인 |
| skill-creator의 quick_validate.py | 실행 시 PyYAML 미설치로 중단. 자체 검사 결과와 구분 |
| 실제 Cline 확장의 발견·활성·호출 | Not Run |
| Strata/Qwen 도구 호출과 실제 작업 행동 | Not Run |
| 앱 typecheck·lint·test·Storybook·Build | N/A. 제품 코드 변경 없음, 실제 package 미확인 |
| Android/iOS 실기기 통합 | Not Run. 제품 기능 구현 없음 |

파생 ID 수는 MO 127, APP 226, WEB 167, 판매채널 14, PO 9, OO 44입니다. 이는 각 파일에서 추출한 고유 ID 수이며 파일 간 중복과 기능의 관계를 보정한 개발량이 아닙니다.

기존 원본 세 문서 백업: C:/Users/Public/Documents/ESTsoft/CreatorTemp/lounge-workflow-backup-q9guh5pq/
복사 도구 검증용 임시 workspace: C:/Users/Public/Documents/ESTsoft/CreatorTemp/lounge-cline-smoke-3juv87x8/

저장소에는 작업 시작 전부터 일곱 tracked 파일의 삭제 상태가 있었습니다. 이 상태를 되돌리거나 추가로 삭제하지 않았습니다. 이번 변경은 기존 workflow 세 문서 개편과 관련 추가 파일에 한정했습니다. 기존 workflow와 IA는 시작 시 untracked였으므로 git diff만으로 변경 내용을 검증하지 않고 원본 백업·직접 파일·해시를 함께 확인했습니다.

공식 quick_validate 의존성만을 위해 package를 설치하지 않았습니다. 자체 검사와 helper 동작 검증은 실제 통과했지만, 스킬의 의미적 동작을 Cline/Qwen에서 실행 검증한 것으로 해석하지 않습니다.

## 첫 사용 순서

1. docs/workflow/AGENTS.md에서 요청에 맞는 하위 안내와 스킬을 선택합니다. AGENTS를 자동으로 읽지 않는 AI에는 경로를 명시합니다.
2. 자동 스킬 기능을 원하는 팀원만 export_skills.py로 cline / claude-code / codex / manual 중 선택해 미리보기 후 적용합니다.
3. 실제 코드 위치를 결정 기록과 첫 카드에 작성합니다.
4. 기능 하나를 골라 관련 IA·승인 자료만 읽고 핵심 질문을 정리합니다.
5. 큰 기능이면 명세·카드 분해, 작은 수정이면 카드 하나로 시작합니다.
6. Ready와 필요한 API·Bridge·영향 검토 후 허용된 카드만 구현합니다.
7. 검증·두 관점 리뷰·progress·재개 기록을 함께 갱신합니다.

## 근거 문서

- [Cline Skills](https://docs.cline.bot/customization/skills): workspace 스킬 위치, frontmatter, 선택 로딩과 명시 호출.
- [Matt skills](https://github.com/mattpocock/skills): 작은 지침 조합과 관련 원본.
- [grill-with-docs](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)
- [to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md)
- [to-tickets](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md)
- [implement](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md)
- [domain-modeling](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md)
- [tdd](https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md)
- [code-review](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md)
- [improve-codebase-architecture](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md)

기존 루트 AGENTS.md, docs/ai/project.md·quality.md·local-llm.md와 IA HTML을 로컬 기준 자료로 확인했습니다.

## 공용 구조 도입 당시 검증 — 도구 독립·계층 구조

| 검사 | 실제 결과 |
| --- | --- |
| 계층 안내·공용 원본·호환본 포함 Markdown 35개 | 링크·메타데이터·인코딩·공백 Pass |
| 공용 원본 아홉 개와 기존 Cline 호환본 | 바이트 일치 Pass |
| 공용 SKILL.md의 Cline 발견 경로 의존 제거 | Pass |
| 루트 AGENTS.md 변경량 | 진입 링크 2줄 추가, 기존 내용 삭제 없음 |
| IA HTML·자원 원본 11개 | SHA-256 동일, 변경 없음 |
| helper 네 파일 | Python 구문 Pass |
| cline / claude-code / codex / manual 내보내기 | 네 선택 모두 미리보기 무쓰기·실제 적용·재실행 Pass |
| 관리된 이전 복사본 갱신 | 네 선택 모두 Pass |
| 사용자가 수정한 복사본 보호 | 네 선택 모두 덮어쓰기 차단 Pass |
| 이전 Cline 명령 호환 | 미리보기 실행·무쓰기 Pass |
| git diff --check | Pass |
| 각 제품에서의 실제 자동 발견·모델 실행 | Not Run. 내보내기 검증과 구분 |

최종 작업 백업: C:/Users/Public/Documents/ESTsoft/CreatorTemp/lounge-portable-backup-k91t101i/
도구별 테스트 workspace: C:/Users/Public/Documents/ESTsoft/CreatorTemp/lounge-portable-smoke-vh4du5o0/

원본은 docs/workflow/skills에서 관리하고 도구별 복사본은 선택적으로 내보냅니다. native 자동 발견이 없어도 docs/workflow/AGENTS → 하위 안내 → SKILL.md를 직접 읽는 공통 방식으로 사용할 수 있습니다. 실제 도구·모델마다 파일 접근과 지침 수행은 별도 확인합니다.

## 현재 최종 상태 — Cline 전용 파일 제거

사용자 요청으로 .cline/와 .clinerules/ 및 install_cline_skills.py를 제거했습니다. 삭제 전에 파일 구성을 확인하고 공용 원본과 동일한 복사본만 있는지 검증했습니다. 관련 안내와 검사 도구의 필수 호환본 의존도 제거했습니다.

공용 원본 아홉 개와 계층 안내를 포함한 Markdown 25개 검사가 통과했습니다. IA 원본 11개는 해시가 동일합니다. 도구별 자동 스킬 내보내기는 선택 사항이며 Cline 룰은 사용자가 직접 연결할 수 있습니다. 이전 검증 표는 해당 단계의 기록입니다.

제거 전 백업: C:/Users/Public/Documents/ESTsoft/CreatorTemp/lounge-remove-cline-backup-ljb4zgn0/

## 운영 원본 위치 통합

현재 기준은 docs/workflow/입니다. 공용 스킬은 skills/, 보조 도구는 scripts/에서 관리합니다. 사람용 설명·HTML은 같은 폴더의 index.md·index.html에 통합하며 IA 원본은 work/에 보존합니다. 기존 코드 workspace의 내보내기본은 같은 명령으로 미리보기 후 갱신할 수 있습니다.

## Matt 원본 출처와 도입 의도 보강

사람용 index.md·index.html에 원본 출처, 아홉 스킬의 대응과 프로젝트 추가 구분, 도구 호출·tracker·Ready·UI/통합 분해·commit·리뷰 실행 방식의 변경 이유를 보강했다. 각 SKILL.md와 skills/AGENTS.md에는 출처와 적용 의도 및 공용 설명 링크를 연결했다. 기존 실행 절차·메타데이터·Ready 정의와 사용자 권한은 변경하지 않았다.

현재 공개 main의 참고 스킬과 로컬 지침을 대조했으며, 최초 참고 시점의 upstream commit·원문 스냅샷은 확인되지 않았다. 원본의 최신 내용과 당시 참고 내용을 동일하게 주장하지 않고, 자동 동기화가 없는 프로젝트 재작성본임을 명시했다. 원본 전체 번들 설치나 실제 제품 구현·모델 실행은 수행하지 않았다.
