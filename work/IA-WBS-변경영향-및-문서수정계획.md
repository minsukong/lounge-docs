# IA·WBS 변경에 따른 파일 수정 계획

IA와 WBS 개정본을 받은 뒤 저장소에서 무엇을 바꿔야 하는지 정리한 문서다. 이번에는 수정 대상과 작업 순서만 정리하며 기존 IA·일정·결정·진행 기록은 변경하지 않는다.

## 1. 현재 확인한 상태

| 구분 | 확인 결과 | 작업에 미치는 영향 |
| --- | --- | --- |
| IA 원본 | `work/더라운지_IA FO_v0.2.xlsx/`는 실제 엑셀 파일이 아닌 HTML 내보내기 폴더 | 새 파일의 형식·폴더명·시트 구성을 먼저 확인해야 함 |
| 파생 목록 | 저장된 inventory는 550개 레코드. 현재 원본 6개와 저장 해시가 모두 일치하며 workflow 검사 통과 | 여러 문서의 ‘현재 원본과 해시 불일치’ 안내는 현 파일 상태와 다르므로 수정 필요 |
| ID 수 | MO 127, APP 193, WEB 161, 판매채널 14, PO 9, OO 44 | 파일별 고유 ID 수이며 개발 화면 수·WBS 작업 수로 합산하지 않음 |
| 기존 진행표 | `MO-MEM-A000000`, `MO-PMT-A010000`은 추출 스크립트 기준 IA 6개에서 찾지 못함 | 새 IA에서 확인하고, 삭제·대체 근거 없이 진행표에서 제거하지 않음 |
| WBS | `work/` 및 연결된 문서에서 WBS 관련 설명은 확인했으나 저장소 파일명 검색으로 WBS 원본은 찾지 못함 | WBS 원본 위치·개정본·작업 ID 체계·승인 여부는 TBD. 실제 행별 변경 대조는 개정본 수령 후 수행 |
| 웹 구조 | 현재 루트 지침·프로젝트 기준·DEC-012는 `front-end/web/` 단일 Next.js 앱, `front-end/packages/ui/` 공통 UI 기준 | WBS에서 브라우저와 앱 WebView의 공통 구현을 중복 계산하지 않고 환경별 차이를 따로 산정 |
| 기존 일정 자료 | 웹·앱 산정 보고서는 작성 당시 IA에 따른 조건부 검토 자료. APP 보고서에는 당시 Native 60개 가정이 남아 있음 | 새 View 분류를 확인한 뒤 범위·공수·의존성부터 재산정. 과거 기간을 그대로 승계하지 않음 |

이 확인은 현재 로컬 파일 기준이다. 최신 외부 IA·WBS, 승인 상태, Figma, 실제 서비스 기능 동작까지 확인한 결과는 아니다.

## 2. 우선 수정할 파일

경로는 `C:/Users/mansu/Desktop/lounge/lounge-docs/` 기준이다. ‘수정’은 개정본 수령 후 수행할 작업을 뜻한다.

| 대상 파일 | 수정할 내용 | 완료 확인 |
| --- | --- | --- |
| `work/더라운지_IA FO_v0.2.xlsx/` 및 새 IA 보관 위치 | 기존 export는 보존하고 개정본을 구분해 수령. 파일·시트·화면 ID·화면명·메뉴·View·포함 범위의 변경을 비교. 새 보관 경로는 실제 개정본에 맞춰 결정 | 기존 자료 보존, 새 기준 파일·버전·수령일·승인 근거 식별 |
| WBS 원본 — 위치 TBD | 기능 영역 → 세부 기능 → 구현 대상 → 작업으로 정리. IA 매핑, 담당, 선행조건, 제공 일정, 공수, 완료 기준과 검증 작업 반영 | 각 작업의 출처·담당·선후행 관계·완료 조건 추적 가능 |
| `docs/workflow/ia-baseline.md` | 적용할 IA 파일과 신뢰도·검증 상태 갱신. MO/APP/WEB 관계, View 분류, ID 공백·오류·중복 처리 기준 확인. 오래된 해시 불일치 안내 수정 | 현재 원본·inventory·audit 설명이 일치. IA가 승인 정책·일정 자체는 아니라는 구분 유지 |
| `docs/workflow/ia-inventory.csv` | 개정본 기준으로 재생성. 파일명·원본 행·ID·원본 텍스트·해시 보존 | 원본 행 역추적 가능. 시트 간 동일 ID와 파일 내 중복 보존 |
| `docs/workflow/ia-audit.md` | 개정본의 ID·View·오류·중복·진행표 대조·해시 재생성 | inventory와 같은 기준본 사용. 진행표 수정 후 최종 재대조 |
| `docs/workflow/progress.md` | 후보 목록·APP/WEB 화면군·범위·수치·주의 문구 갱신. 새 WBS와 실제 카드 연결, 상태·다음 행동·차단 조건 반영 | 기존 완료·검증 이력 보존. 후보·Ready·실제 진행 상태 구분 |
| `docs/workflow/decisions.md` | DEC-008의 중복·ID 대응, DEC-009의 환경별 차이, DEC-011의 IA 밖 WBS 범위를 새 근거로 검토. 판매채널·PO·OO 변경 시 DEC-006·007도 확인 | 근거·담당·합의 여부 기록. IA 개정만으로 TBD를 Confirmed로 바꾸지 않음 |
| `docs/guides/planning/web.html` | 새 IA의 FO 웹·앱 WebView 공통/차이, 공유 구현 범위, 상태·API·검증 난이도, 인력·가동률·선행 제공 일정을 반영해 재산정 | 단일 앱 공통 구현 중복 제거. 공수·대기·기간·완료일 근거 구분 |
| `docs/guides/planning/app.html` | 당시 Native 60개 가정을 새 분류와 비교. Flutter 화면 외 앱 Shell·Bridge·기기 기능·인증·결제 복귀·배포·검증 범위를 확인해 재산정 | Native 화면 수만으로 Flutter 전체 업무량 산정하지 않음. FE와 Native 책임 중복·누락 확인 |

IA의 View가 바뀌면 **화면 구현 담당 변경**과 **기기 기능·Bridge 지원 작업 변경**을 나눠 본다. WebView 화면으로 바뀌어도 Native 지원 작업이 남을 수 있다. 반대로 IA에 Native 표기가 있다고 해서 계약·담당·일정이 자동 확정되는 것은 아니다.

## 3. 변경 내용에 따라 수정할 파일

| 대상 파일 | 수정이 필요한 조건 | 수정할 내용 |
| --- | --- | --- |
| `docs/workflow/scripts/refresh_ia.py` | IA 폴더·시트명·ID 형식·열 구조·View 표기가 변경됨 | 고정된 IA 경로·SOURCES·ID 패턴·행/셀 추출과 View 분류 수정. 원본 무변경과 누락·중복 보존 확인 |
| `docs/workflow/scripts/validate_workflow.py` | IA 보관 경로·inventory 형식·검사 대상 변경 | 고정 IA 경로와 검사 조건 수정. refresh와 같은 기준본을 참조하도록 맞춤 |
| `docs/workflow/tasks/*.md` 중 영향받는 실제 카드 | 화면 대응·WBS 작업·담당·범위·의존성·완료 조건 변경 | IA 근거와 WBS 작업 ID 연결, 선행조건·Ready·상태·검증·재개 기록 갱신. Done 카드의 과거 결과는 보존하고 추가 작업은 후속 카드로 분리 |
| `docs/workflow/spec-template.md`, `task-card.md` | 새 WBS와 연결할 필드가 현재 양식으로 부족함 | 기존 IA 근거·플랫폼·의존성 필드를 우선 사용. 필요할 때만 WBS ID·기준 버전·산정 근거 등 추가 |
| `docs/workflow/contract-review.md` 및 관련 명세 | 새 범위가 API·인증·결제·Bridge 계약에 영향을 줌 | 영향 계약·상태·실패/복구 흐름·검토 책임·제공 조건 갱신. 미확정 계약은 TBD 유지 |
| `docs/ai/project.md`와 `AGENTS.md` | 확정된 과업·담당·플랫폼 경계 자체가 바뀜 | 새 합의 범위만 반영. IA 개정만으로 단일 웹 앱 구조나 기술 스택 변경을 가정하지 않음 |
| `docs/workflow/README.md`, `index.md` 및 `index.html` | IA 경로·설명·집계·WBS 연결 방법 변경 | 오래된 550/587 등 수치의 사용 맥락, 해시 불일치 안내, 파일 안내·작업 흐름·링크 정합성 확인 |
| `docs/workflow/usage-guide.md`, `agent-adapters.md`, `AGENTS.md`, `work/AGENTS.md` | 실제 경로·운영 절차·진입 안내 변경 | 바뀐 안내만 수정. IA 내용 변경을 이유로 전체 지침 개편하지 않음 |
| `docs/workflow/available-work.html` | 착수 가능 작업·상태·안내가 달라짐 | 실제 카드의 Ready·차단 조건과 표시를 대조. WBS 날짜만으로 착수 가능 표시하지 않음 |
| `work/기획figma구조.txt`, `work/design_tobe.md` | Figma 페이지·화면 대응 또는 디자인 전달 기준도 변경됨 | 실제 변경과 연결되는 부분만 갱신. IA 개정만으로 Figma나 디자인 기준이 바뀌었다고 가정하지 않음 |
| `docs/CHANGELOG.md`, `docs/CHANGELOG.html` | 기준 IA·업무 흐름·여러 문서 구조를 실제로 전환함 | 변경 목적·기준·미확정 사항·검증 결과 기록. 이번 수정 계획 문서 추가만으로 갱신하지 않음 |
| `docs/assets/js/search-data.js` | 검색 대상 HTML을 실제 수정함 | `node docs/search/build-search-index.mjs`로 생성. 수기 수정하지 않음. 현재 검색 대상은 guides HTML과 workflow의 index·available-work |
| `docs/index.html`, `docs/README.md`, `docs/diagrams/*` | 링크 대상·소개·실제 구조 그림이 달라짐 | 해당 링크·설명·구조만 확인. 일정 변경만으로 전체 다이어그램 재작성하지 않음 |

## 4. 보존할 자료와 구현 변경 경계

- `work/inspect_sb/`의 A/B는 조사 시점의 독립 기록으로 보존한다. 새 IA에 맞춰 과거 관찰을 덮어쓰거나 WBS의 확정 요구사항으로 자동 전환하지 않는다. 재조사가 필요하면 새 근거와 시점을 구분해 기록한다.
- `work/inspect_briefing/`은 당시 상태와 설명을 남긴 자료다. 새 브리핑 요청이 있을 때 새 기준과 해소된 항목을 반영하며 과거의 미확정을 소급해서 지우지 않는다.
- `docs/workflow/implementation-report.md`와 완료 카드의 과거 검사 결과·수치는 당시 기록으로 보존한다. 현재 상태 설명이 필요하면 후속 결과를 구분해 추가한다.
- `01.FO_WEB_IA(old).html`, 이전 IA export, 승인내역은 최신 기준과 구분해 보존한다. 신규 추출 대상에 자동 포함하지 않는다.
- IA·WBS 갱신만으로 `front-end/` 제품 코드를 일괄 수정하지 않는다. 실제 메뉴·라우트·화면·API·환경별 동작에 변경이 확인되면 해당 카드에서 소비 코드·Story·테스트를 찾아 별도 구현한다. 지금은 구체적인 제품 파일을 확정할 근거가 없다.

## 5. 새 IA·WBS에서 대조할 내용

| 대조 항목 | 기록할 내용 |
| --- | --- |
| 기준 자료 | IA·WBS 파일/버전·수령일·승인 여부·변경 근거 |
| 화면 대응 | 구 IA 파일+ID+행 ↔ 신 IA 파일+ID+행. ID 변경·분리·통합·삭제·추가 구분 |
| 업무 범위 | 기능·사용자 목표·주요 상태·이번 포함/제외·미확정 사유 |
| 구현 대상 | 공통 웹 구현 / 반응형 차이 / 앱 WebView 차이 / Flutter Native / 판매채널 / PO / OO |
| 작업 연결 | WBS ID ↔ 하나 이상의 IA 근거 ↔ 실제 작업 카드. 화면 ID와 WBS/카드 ID 구분 |
| IA 밖 작업 | 공통 기반·환경·연동·검증·배포·결함 수정 등은 별도 업무 근거 기록. IA ID가 없다는 이유로 제외하지 않음 |
| 담당 | 작업 책임·협의 파트·검수 책임. TBD의 확인 담당과 결정 시점 |
| 선행조건 | 필요한 기획·디자인·API·Bridge·환경·데이터와 제공 일정, 선행/후행 작업 ID |
| 산정 | 작업 공수·역할별 실제 가동률·병행 가능 범위·대기·재작업 가정·산정 근거 |
| 일정 | 착수·완료·기준일·후속 영향. 필요한 제공 일정이 없으면 조건부/TBD 표시 |
| 완료·검증 | UI·연동·기능 통합·QA/UAT·출시를 구분해 검증 결과와 미검증 기록 |

특히 다음을 새 IA·WBS에서 확인한다.

- MO·APP·WEB에 같은 기능이 여러 번 적혔는지, 공통 구현과 환경별 차이를 어떻게 대응시킬지.
- ID 공백·수식 오류·중복·취소 표시가 새 기준에서 어떻게 처리됐는지.
- 기존 DEC-011의 경영진 대시보드·K리무진 본사운영/홈페이지·결함 수정·안정화가 포함되는지와 근거가 있는지.
- 판매채널·PO·OO가 이번 과업에 포함되는지, 담당과 검수 책임이 정해졌는지.
- 선행 결과가 있어야 시작할 수 있는 연동과 독립 진행 가능한 UI 작업이 구분됐는지.
- 공통 기반의 기존 완료 작업이 신규 공수로 중복 반영되지 않았는지. 실제 수정·추가 검증 공수는 별도인지.

## 6. 적용 순서

1. **기준본 수령:** 새 IA·WBS의 위치·버전·승인 상태와 변경 내역을 확인하고 이전 자료를 보존한다.
2. **차이표 작성:** 추가·삭제·분리·통합·ID/View/범위 변경과 미확인 대응을 정리한다. 행 번호만으로 같은 항목이라고 판단하지 않는다.
3. **추출 대응:** 필요할 때만 두 스크립트의 경로·형식을 수정하고 IA 파생 목록을 재생성한다.
4. **범위·결정 정리:** ia-baseline과 관련 DEC를 갱신한다. 새 IA 내용과 확정 합의는 구분한다.
5. **WBS·카드 반영:** 공통/환경별 작업·담당·의존성·공수·완료 조건을 연결하고 progress를 갱신한다.
6. **일정 재산정:** 파트별 제공 일정과 실제 투입을 반영해 웹·앱 보고서를 갱신한다. 이전 가정과 새 산정 근거를 구분한다.
7. **안내 동기화:** 필요한 Markdown·대응 HTML·링크·검색 색인을 갱신한다.
8. **최종 대조:** progress 변경 뒤 IA 대조를 다시 생성하고 검사한다. 영향받는 카드만 Ready를 재판정한다.

## 7. 완료 체크

- [ ] 새 IA·WBS의 기준본과 승인 상태를 식별할 수 있다.
- [ ] 구/신 화면 대응과 IA 밖 WBS 작업의 근거가 남아 있다.
- [ ] inventory·audit·baseline·progress가 동일 기준을 설명한다.
- [ ] 공통 구현 중복, 환경별 작업 누락, 담당·의존성 누락을 확인했다.
- [ ] 실제 카드의 완료 이력과 기존 사용자 변경을 보존했다.
- [ ] 변경한 Markdown·HTML·링크·집계가 일치한다.
- [ ] 저장소 루트에서 `python docs/workflow/scripts/validate_workflow.py` 통과를 확인했다.
- [ ] IA 파생 목록은 `python docs/workflow/scripts/refresh_ia.py`로 생성하고 원본 무변경을 확인했다.
- [ ] 검색 대상 HTML 변경 시 공식 스크립트로 색인을 갱신했다.
- [ ] 관련 diff와 `git diff --check`를 확인하고, 미검증 사항을 기록했다.

## 확인 근거

- [IA 기준](../docs/workflow/ia-baseline.md), [자동 대조](../docs/workflow/ia-audit.md), [원본 ID 목록](../docs/workflow/ia-inventory.csv)
- [결정 기록](../docs/workflow/decisions.md), [진행 현황](../docs/workflow/progress.md), [작업 카드 양식](../docs/workflow/task-card.md)
- [프로젝트 기준](../docs/ai/project.md), [웹 일정 산정](../docs/guides/planning/web.html), [앱 일정 산정](../docs/guides/planning/app.html)
- [프로젝트 정상화 검토의 IA·WBS 항목](inspect_briefing/더라운지3.0_프로젝트현황및정상화필요사항.md)
- [변경 영향 검토 기준](../docs/workflow/skills/lounge-impact/SKILL.md)

이번 조사에서는 추출 스크립트의 `build()`를 읽기 전용으로 호출해 현재 550개 레코드와 파일별 ID 수·저장 해시를 대조했다. `validate_workflow.py`는 Markdown 27개·IA 레코드 550개 검사에 통과했다. 파생 파일 재생성이나 기존 문서 갱신은 수행하지 않았다. 최종 권한 확인 후 Git 상태를 다시 조회했고, 이번에 추가한 계획 문서 한 개 외에 변경은 없었다. 기존 추적 파일의 diff와 새 문서의 공백 검사에서 오류는 없었으며, Git의 LF→CRLF 전환 안내만 확인됐다.
