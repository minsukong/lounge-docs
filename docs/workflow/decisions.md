# 결정·질문 기록

결정은 TBD → Proposed → Confirmed / Rejected / Superseded로 기록합니다. Proposed는 구현 승인으로 취급하지 않습니다. 질문이 여러 개면 기능의 착수를 막는 순서로 확인합니다.

실제 업무에서 확인할 질문은 출처·원본 근거를 함께 기록합니다. 관련 [계약 검토](contract-review.md)와 [작업 카드](task-card.md)에 결정 ID를 연결하고, 합의 결과는 영향받는 명세·카드에 반영합니다. [전체 연결 안내](index.md)를 참고합니다.

## 현재 확인이 필요한 항목

IA 관련 수치·View 분류는 기존 추출 기록이며 현재 원본과 추출 해시가 불일치합니다. [IA 신뢰도와 재대조 기준](ia-baseline.md)을 따르고, 필요한 원본 행을 확인한 뒤 해당 결정의 근거를 갱신합니다.

| ID | 결정할 내용 | 상태 | 담당·협의 상대 | 차단되는 범위 | 현재 근거 |
| --- | --- | --- | --- | --- | --- |
| DEC-001 | Front-end 구현 위치와 AI 작업 루트 | Confirmed | 사용자 | 앱 구현 착수·실행 검증 | 사용자 결정: Front-end는 lounge-docs의 `front-end/`에서 구현한다. 초기 결정 뒤 WebView·홈페이지·공통 UI의 실행 기반을 구성했고, 이후 단일 웹 애플리케이션 `front-end/web/`으로 통합했다(DEC-012). [프로젝트 기준](../ai/project.md), [workspace 설정](../../front-end/package.json), [후속 완료 카드](tasks/common-ui-workspaces.md), [통합 카드](tasks/phase-0-web-integration.md) 참조 |
| DEC-002 | 인증 세션·저장·갱신·로그아웃과 Web/Native 책임 | TBD | BE·Native·FE | 인증 가드·로그인 연동 | project.md에서 계약 TBD |
| DEC-003 | 회원가입·약관·미성년자·소셜 연결·탈퇴 정책 | TBD | 기획·운영·BE·Native | 해당 회원 업무 연동 | MO IA에 미성년자 정책·소셜 추가 확정 필요 표시 |
| DEC-004 | 주문·결제·할인·취소와 PG 복귀·실패·중복 처리 | TBD | 기획·BE·Native·FE | 구매·결제·취소 연동 | 승인 계약 미확인 |
| DEC-005 | Bridge 명령·응답·버전·수명 주기·플랫폼 차이 | TBD | Native·FE | Native 기능 호출 | 계약 TBD |
| DEC-006 | 판매채널 기능·사용자·서비스 구분·담당 | TBD | 사용자·기획·BE | 판매채널 착수 범위 | 사용자: 추가 정보 필요 |
| DEC-007 | PO·OO의 과업 포함 여부·담당·검수 책임 | TBD | 사용자·프로젝트 담당 | PO·OO 구현 착수 | 담당 미정. OO HTML은 존재 |
| DEC-008 | MO/APP/WEB 중복 화면·ID 충돌과 실제 메뉴 범위 | TBD | 기획·FE·Native | 영향받는 카드의 화면 매핑 | ia-audit와 ia-inventory. `FO_APP`(193)·`FO_WEB`(161)는 MO 목록과 다른 절단면이며 APP은 대부분 WebView이며 Native 잔여 5개 ID는 원본 View 기준. 상품·일부 사용처·WEB 이벤트의 ID 공백/수식 오류와 사용처 중복 ID·재편을 확인해야 함. `FO-MEM-C10*` 9개는 내 여정 관리로 확인됨. 과거 ID를 현재 ID로 임의 대응시키거나 ID 미추출을 기능 제외로 확정하지 않음 |
| DEC-009 | FO 웹·PO·OO의 스택·기능 공유·화면별 환경 차이 | TBD | FE·프로젝트 담당 | 미정인 업무 기능 공유·PO/OO 구성·환경 차이의 판단 | FO 웹과 앱 WebView는 `front-end/web/`의 단일 웹 애플리케이션에서 실행되고 같은 웹 스택·디자인 시스템을 사용하며 `front-end/packages/ui/`를 공유함. [확정된 공통 기반](../ai/project.md#웹-애플리케이션과-ui-패키지의-공통-기반)·[통합 카드](tasks/phase-0-web-integration.md) 참조. 화면별 환경 차이(APP/WEB IA 대조)는 원본 구분과 식별자를 보존하며 카드에서 확인하고, 업무 기능 공유와 PO·OO의 스택·담당은 별도 확인 |
| DEC-010 | API mock 필요 여부·계약 버전·관리 책임 | TBD | FE·BE·프로젝트 담당 | Contract-Mock 사용 | 계약 전 생성 금지 |
| DEC-011 | Front-end WBS 중 IA에 근거가 없는 항목의 범위 포함 여부 | TBD | 사용자·기획·프로젝트 담당 | 해당 항목의 착수·견적 | 경영진 대시보드, K리무진 본사운영·홈페이지 구분, 결함 수정·안정화 공수는 IA v0.2와 `docs/` 어디에도 검색되지 않음. eSIM(`FO-SCM-C05*`)과 K공항리무진(`FO-SCM-C07*`, `OO-OOS-J*`~`O*`)은 원본에 존재 |
| DEC-012 | WebView·website 두 앱의 단일 웹 애플리케이션 통합 | Confirmed | 사용자 | front-end 구조·실행·빌드·배포 명령 | 사용자 인계 방향으로 확정: 하나의 Next.js 앱(`front-end/web/`, package `lounge-web`)이 PC·모바일 브라우저와 Flutter 앱 내부 WebView를 함께 지원한다. 기준 앱은 superset인 webview이고(`git mv`로 이력 보존), website의 preview는 같은 FoundationPreview 본문 기반 중복으로 정리했다. `packages/ui`는 실제 소비자(앱 import·패키지 기준 Storybook·토큰 생성 출력)와 디자인 시스템 경계를 근거로 독립 패키지로 유지한다. 화면 너비 반응형 배치와 앱 환경 판별은 별개 기준이며, 환경 값·Native 기능 계약은 DEC-005와 함께 `TBD`로 남긴다. 구현과 검증은 [통합 카드](tasks/phase-0-web-integration.md) 참조 |

| DEC-013 | shadcn 기반 디자인과 코드 반영 시점 | Confirmed · 반영 유예는 DEC-014로 대체 | 사용자·디자인·FE | 디자인 확정 전 공통 UI·토큰의 디자인 변경 반영 | 사용자 결정: 디자인도 프로젝트의 `base-nova` 컴포넌트·variant·size·의미 토큰명을 공유하고 기존 구성을 조합한다. 필요한 확장은 함께 정한다. 이번 단계는 문서·기준 변경이며 `front-end/` 수정은 디자인 확정 후 별도 작업으로 진행한다. [상세 근거](#dec-013-shadcn-기반-디자인과-코드-반영-시점) 참조 |

| DEC-014 | 공식 base-nova·neutral 기본값 즉시 적용과 기존 자산 삭제 | Confirmed | 사용자·디자인·FE | 기본화 검증 범위 | 디자인 확정 전 소스 적용 승인. DEC-013의 코드 반영 유예 해제. [작업 카드](tasks/phase-0-shadcn-defaults.md) 참조 |

모든 항목이 모든 카드를 막지는 않습니다. 예를 들어 합의된 버튼 표시 작업은 결제 정책 결정에 종속되지 않습니다.

## DEC-013 shadcn 기반 디자인과 코드 반영 시점

- 상태: Confirmed
- 근거: 2026-10-27 사용자 지시. 기존 자체 공통 디자인 중심의 접근에서 프로젝트 shadcn 기반으로 디자인하는 방향으로 전환하고, 현재는 문서만 변경하며 front-end 반영은 디자인 이후로 지정함.
- 결정: 디자인팀은 `base-nova`를 출발점으로 프로젝트 컴포넌트·variant·size·의미 토큰명을 공유한다. 필요한 공통 확장은 디자인·개발이 함께 정한다.
- 공유 문서: [shadcn 기반 디자인 작업 기준](../../work/design_tobe.md). 디자인 전달 문서이며 개발 기준은 project·UI·Figma·토큰·상세 가이드에 함께 반영한다.
- 적용 경계: 이번 변경은 문서에 한정한다. 실제 컴포넌트·스타일·토큰·설정·Story 수정과 검증은 디자인 확정 후 별도 작업으로 진행한다.
- 미확정: 브랜드 팔레트와 의미 토큰의 연결, 최종 폰트·수치·추가 variant·dark 디자인 범위. 현재 neutral 초안의 최종 승인이나 Phase 0 완료를 뜻하지 않는다.

## DEC-014 공식 base-nova 기본값 즉시 적용

- 상태: Confirmed. 2026-10-27 사용자가 디자인 확정 전 소스 반영과 필요 없는 토큰·CSS·팔레트 삭제를 명시 승인함.
- DEC-013의 shadcn 공유 체계는 유지하며, 코드 반영 유예는 이번 결정으로 해제함. 기본값은 공식 base-nova 컴포넌트와 neutral light·dark 테마로 통일함.
- 디자인팀도 이 코드·이름·값을 기준으로 작업함. 기존 Figma 팔레트 보존·추가 매핑 대기를 현재 착수 조건으로 사용하지 않음.
- 토큰 원본은 tokens/shadcn/neutral.tokens.json. Figma·Tokens Studio도 이 원본에 맞춤. 실제 Figma 동기화나 업무 계약은 이번 작업에서 수행하지 않음.
- 실행과 검증: [TASK-P0-SHADCN-001](tasks/phase-0-shadcn-defaults.md).

## 개별 결정 기록 양식

### DEC-번호: 제목
- 상태:
- 질문과 실제 선택지:
- 결정을 필요로 하는 카드:
- 책임자·협의 상대:
- 근거·대화·회의·계약 링크:
- 결정 내용과 적용 범위:
- 선택한 이유·대안:
- 변경 시 영향:
- 해소 증거·관련 카드 갱신:

역전 비용이 크고 대안 선택 이유를 남겨야 하는 결정만 별도 ADR로 승격합니다. ADR은 기술 결정 기록이지 승인되지 않은 업무 정책을 확정하는 수단이 아닙니다. 용어집은 실제 정의가 합의될 때 작성하며 결정 대기 목록으로 사용하지 않습니다.
