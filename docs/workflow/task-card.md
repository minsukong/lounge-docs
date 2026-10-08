# 작업 카드 템플릿

아래 본문을 복사해 실제 카드로 작성합니다. 예시·빈 칸은 결정된 근거로 채우며 승인 자료가 없으면 TBD로 둡니다. 화면 ID와 작업 ID는 다릅니다.

기록 연결은 [문서 간 연결 안내](index.md)를 참고합니다. 실제 카드에는 [결정 기록](decisions.md)·[계약 검토](contract-review.md)·부모 명세를 연결하고, 요약 상태는 [진행 현황](progress.md)에 반영합니다.

---

# [카드 ID]: [제목]

## 요약

| 필드 | 내용 |
| --- | --- |
| 카드 ID | 예: TASK-MEM-001. 하나의 검증 가능한 작업에 하나의 ID |
| 종류 | UI / Integration / Contract / Infrastructure / Document |
| 부모 명세 | 해당 문서 링크 / N/A |
| IA 근거 | 원본 파일명 + HTML 원본 행 + 화면 ID. 없으면 N/A |
| Phase | 0 / 1 / 2 / 3 / 4. 작업 순서와 별개 |
| 플랫폼 | App-WebView / Responsive-Web / Flutter-Native / Sales-Channel / PO / OO / Shared |
| 담당·협의자 | FE / BE / Native / 기획·운영. 미정은 TBD |
| 우선순위 | P0 / P1 / P2 + 이유 |
| 코드 위치 | `front-end/` 기준 경로. 예: `front-end/webview/src/components/ui` |
| 문서 저장소 | lounge-docs의 절대 경로 |
| 진행 상태 | Backlog / In Progress / Blocked / Review / Done / Deferred |
| Ready | TBD / Ready-UI / Ready-Integration / Blocked / N/A |
| API·Bridge 계약 | 각각 TBD / Draft / Agreed / N/A + 근거 링크 |
| 테스트 데이터 전략 | None / Contract-Mock / Backend + 담당·허용 범위 |

## 사용자 목표와 이번 범위

- 완료하면 사용자가 확인할 수 있는 동작:
- 이번에 구현하는 부분:
- 제외하는 부분:
- 입력·검증·성공·실패·취소·로딩·빈 상태·오프라인 중 적용할 상태:
- 라우트: 승인된 값 / TBD. IA ID로 라우트를 추정하지 않음.

## 출처·결정·가정

| 항목 | 내용 | 상태 | 근거·결정자 |
| --- | --- | --- | --- |
| 기획·정책 | | Confirmed / Candidate / TBD | |
| 화면·동작 | | Confirmed / Candidate / TBD | |
| 데이터·API | | Confirmed / Candidate / TBD | |
| Native 경계 | | Confirmed / Candidate / TBD | |

가정은 구현 근거가 아닙니다. Ready-UI의 표시 범위에 허용된 가정이 있다면 제한과 교체 영향도 적습니다.

## 선행 조건과 질문

| 차단 ID | 필요한 결과·결정 | 담당·협의자 | 해소 증거 | 영향 범위 |
| --- | --- | --- | --- | --- |
| 카드 ID 또는 DEC-번호 | | TBD | TBD | UI / 연동 / 전체 |

- 작업 간 관계: Blocked by / Blocks / Related. 단순 관련 화면은 blocker로 만들지 않음.
- 대기 중 진행할 수 있는 독립 범위:
- 외부 확인에 보낼 질문과 선택지:

## Ready 판정

- 이번 범위와 완료 조건을 재현할 수 있는가:
- 필요한 입력·정책·API·Bridge의 근거가 있는가:
- 선행 카드와 계약 차단이 해소되었는가:
- 실제 구현 위치와 검증 방법을 확인했는가:
- 판정 / 허용 범위 / 제외 범위 / 남은 차단 조건 / 판정 근거:

## 영향 분석

- 영향 화면·공유 컴포넌트·폼·Query·Store:
- WebView·웹 차이와 Native 담당 경계:
- 계약·보안·접근성·기존 흐름 영향 중 해당 항목:
- IA·명세·카드·Story·테스트 갱신 대상:

## 완료 조건

- [ ] Given … When … Then … 형태의 사용자 결과
- [ ] 실패·취소 등 이번 범위에 필요한 결과
- [ ] Ready-UI라면 서버·Native 연동이 동작한다고 표현하지 않음

## 검증 계획과 결과

| 검사 | 대상·실제 명령 또는 확인 절차 | 결과·근거 |
| --- | --- | --- |
| typecheck / lint | 실제 package 확인 | 미실행 |
| test | 사용자 행동·분기·폼·상태 전환 중 필요한 것 | 미실행 |
| Storybook | 기본·실패·로딩·빈 상태·긴 문구·viewport 중 필요한 것 | 미실행 |
| 앱 Build | 통합 영향이 있는 경우 | 미실행 |
| 실기기·브라우저 | 이번 변경의 Android/iOS WebView·웹 대상 | 미실행 |
| diff 리뷰 | 규칙 적합성 / 명세 적합성 | 미실행 |

각 검사는 Pass / Fail / Not Run / N/A 중 하나와 사유를 씁니다. 실행하지 않은 검사를 Pass로 바꾸지 않습니다. TDD 대상이면 한 행동의 실패 테스트 → 최소 구현 → 검증을 반복합니다.

## 결과·재개 기록

- 실제 변경 파일:
- 카드 범위에서 완료된 동작:
- 미완료·차단·잔여 위험:
- 다음 세션의 첫 행동:
- 확인할 diff 기준·마지막 오류:
- Issue·PR·commit: 실제로 존재할 때만 연결

---

## ID 원칙

- IA 원본 화면 ID는 보존합니다. 서로 다른 파일의 동일 ID는 파일명·원본 행으로 구분합니다.
- 작업 ID는 TASK-[모듈]-[번호], 인프라는 INFRA-[번호], 결정은 DEC-[번호]를 사용할 수 있습니다.
- 하나의 카드가 여러 IA 화면을 연결하거나 하나의 화면이 UI·연동 카드로 나뉠 수 있습니다.
- FO·MO 접두어만으로 플랫폼을 결정하지 않습니다. APP IA는 대부분 WebView이며 Native는 현재 원본 View가 Native인 항목으로 구분합니다. 화면 구현 구분과 Native 지원 기능·Bridge 계약을 별도로 확인합니다.
