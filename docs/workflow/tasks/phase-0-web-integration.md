# TASK-P0-WEB-INTEGRATION-001: WebView·website 단일 웹 애플리케이션 통합

## 범위와 착수 근거

- 상태: Done — 요청한 구조 통합·설정 정리·문서 갱신과 코드 검증 완료. 실제 서비스 기능·연동·출시와 구분합니다.
- Ready: N/A — 사용자 인계로 확정된 방향(DEC-012)에 따른 구조·설정·문서 변경입니다. 새 업무 기능이나 계약 구현을 포함하지 않습니다.
- 위치: `front-end/web/`(기존 `front-end/webview/`에서 `git mv`), `front-end/website/`(삭제), `front-end/package.json`, `front-end/scripts/`, `front-end/packages/ui/.storybook/`, 관련 문서.
- API·인증·Native 계약: 이번 범위는 N/A. 환경 값과 Native 기능 계약은 DEC-005와 함께 `TBD`로 유지하며 Bridge code를 추측 구현하지 않았습니다.

## 구조 결정과 이유

- 최종 앱: `front-end/web/`(package `lounge-web`). 기준 앱은 webview로 정했습니다. 두 앱의 next/tsconfig/eslint/vitest/postcss/components.json 설정은 동일하고 소스도 사실상 같았으며, webview 쪽이 preview 4화면·Safe Area 스타일·use-online을 포함한 superset이었습니다. 브라우저와 앱 WebView를 함께 지원하므로 어느 한쪽 환경으로 치우치지 않는 이름을 선택했습니다. 이동은 `git mv`로 이력을 보존했습니다.
- website 정리: 중복된 루트 레이아웃·진입·오류·로딩·404 화면과 preview를 삭제했습니다. website preview는 같은 `@lounge/ui/preview` FoundationPreview 본문에 데스크톱 폭 셸을 씌운 변형이었고, webview preview의 AppShell이 반응형(max-w + sm: breakpoint)이라 기존 검수 기능은 보존됩니다. Story `Screens/WebsitePreview`도 같은 본문 중복으로 삭제했습니다.
- `packages/ui` 유지: 실제 소비자는 앱의 `@lounge/ui/*` import, 패키지 기준 Storybook(`.storybook/`과 Story 수집), `scripts/sync-color-tokens.mjs`의 출력 경로입니다. 디자인 시스템과 앱의 경계, Story·테스트·검수 코드 제외 설정은 패키지 경계를 기준으로 성립하므로 앱 내부로 옮기지 않았습니다. PO·OO 재사용 여부는 `TBD`이며 이 이유를 근거로 삼지 않았습니다.
- 환경 판별: Bridge 환경 값 기준 판별 원칙(값 수신 전/앱/일반 웹 구분, Native 실행 지점 확인, 시간 제한 확정 금지)을 루트·front-end·앱 AGENTS.md와 `docs/ai/project.md`에 반영했습니다. 계약이 없어 Bridge code·parser·adapter는 추가하지 않았습니다.

## 구현과 구조

- workspace를 `["web", "packages/ui"]`로 정리하고 `dev`·`build`·`build:preview` 단일 script로 통합했습니다. `typecheck`·`lint`·`test`는 `--workspaces --if-present` 유지.
- `scripts/build-preview.mjs`·`package-runtime.mjs`의 앱 이름 검사를 `web`으로 바꾸고, 두 앱 교차 제외 분기(죽은 코드)를 제거했습니다. standalone 진입점·정적 자산 경로는 `.next/standalone/web/server.js`, `dist/runtime/web/.next/static/` 실제 출력과 일치합니다.
- Storybook Story 수집 경로와 `@` alias를 `../../web/src`(구 `webview/src`)로, `preview.css`의 `@source`를 `web/src/dev`로 변경했습니다. UI 패키지 lint의 앱 경로 금지 패턴도 `**/web/**`로 갱신했습니다.
- root layout의 metadata description을 통합 앱 중립 문구로 바꾸고, WebView 쪽 viewport(`viewportFit: cover`, `interactiveWidget: resizes-content`)와 Safe Area 기본 스타일을 유지했습니다. 환경별 viewport 분기는 서버 렌더링 시점 환경 판별 계약과 함께 보류합니다. metadata noindex는 전 앱 유지(일괄 해제 없음).
- `sync-color-tokens.mjs`는 `packages/ui` 유지로 변경 없습니다. 생성된 토큰 값은 수정하지 않았습니다.

## 검증 결과

| 검사 | 결과 |
| --- | --- |
| `npm run typecheck`(web, packages/ui) | Pass |
| `npm run lint`(web, packages/ui) | Pass |
| `npm run test` | packages/ui 폼 행동 테스트 2개 Pass. `web/`는 테스트 파일 없음(`No test files found`, `passWithNoTests: true`) — 테스트 검증 완료 아님 |
| `npm run build-storybook` | Pass — Story 34개 수집(공통 UI + `Screens/Foundation` 6종) 확인 |
| `npm run build`(production) | Pass — 운영 라우트 `/`, 기본 404만 |
| `dist/runtime/` 단독 실행 | Pass — 홈 200, CSS 200, `/preview` 404 |
| 운영 결과물 제외 검사 | Pass — Story·테스트·preview·AGENTS/README/BUILD·Storybook 파일 0건 |
| `npm run build:preview` | Pass — `/preview` 4화면 정적 생성 |
| 브라우저·실기기 | 미검증 — 이번 통합 완료 조건에서 제외 |
| Bridge 환경 판별 동작 | 미구현 — DEC-005 계약 대기 |

## 미정·잔여와 다음 행동

- Bridge 환경 값 이름·형식·전달·수신 시점·실패 처리와 Native 기능별 지원 계약: `TBD`(DEC-005). 계약 확정 후 값 수신 전/앱/일반 웹 상태와 일반 웹 Native 호출 차단을 실제 코드로 구현·검증해야 합니다.
- APP IA와 WEB IA의 공통 기능·환경별 차이·전용 화면 대조, 뒤로가기·딥링크·세션·복귀 동작, 공개/개인 페이지 metadata 기준: 원본 IA 구분과 식별자를 보존하며 후속 카드에서 정리합니다.
- 통합 앱의 도메인·접속 주소·환경변수·배포 단위와 Flutter에서 여는 주소: `TBD`.
- GitHub Pages preview는 새 기준 `/buildTest/web`로 게시해야 하며 기존 `buildTest/webview` 경로는 후속 게시 시 대체됩니다.
- commit·push·배포는 수행하지 않았습니다.

## 후속 검수 지점

- `web/`의 tsconfig 4종과 next.config.ts가 단일 앱 기준인데도 유효한지, `outputFileTracingExcludes`의 `../packages/ui/**` 제외가 유지되는지.
- website에 있던 `src/dev/preview-screen.*`와 Story 삭제에 이의가 없는지(대신 `Screens/Foundation`의 Mobile/Desktop viewport Story로 검증 가능).
- root layout viewport의 `interactiveWidget`이 일반 모바일 브라우저에서 수용 가능한지 — 실브라우저 검증 후 필요 시 환경별 분기 설계.
- `web/README.md`의 Phase 0 범위 서술과 LINT.md는 과거 기록 성격을 보존합니다.


## Codex 후속 검수와 보완

- 사용자 재개 요청으로 staged·unstaged·신규 파일을 함께 확인하고 기존 변경과 Git index를 보존했습니다. 이번 범위는 단일 앱 구조 통합·설정·문서의 검수와 확인된 누락 보완입니다.
- 앱·Front-end 가이드의 구조도에 남은 webview 폴더와 앱 내부 Storybook 표기를 수정하고, 토큰·프로젝트 요약의 두 앱 표현을 정리했습니다. 과거 구현 카드와 브리핑 이력은 소급 변경하지 않았습니다.
- 제품 metadata에서 구현 구조 설명을 제거했습니다. 공통 preview의 두 앱 설명을 단일 웹 검수 문구로 바꾸고 실제 Bridge·Native 연결이 아직 없음을 표시했습니다.
- 추가 토큰 검사에서 CRLF와 LF만 달라도 불일치로 실패하는 문제를 재현했습니다. 검사 시 줄바꿈만 정규화하도록 수정한 뒤 light/dark 27개 색상 일치를 확인했습니다. 토큰 원본과 생성 파일·색상값은 변경하지 않았습니다.
- 실제 재실행: web·ui 타입/린트 통과, 기존 폼 테스트 2개 통과, Storybook 34 Story 빌드 통과, production 빌드·패키징 통과, 정적 preview 4화면 빌드 통과. web 앱 자체 테스트 파일은 여전히 없으므로 업무 기능 테스트 완료를 뜻하지 않습니다. Storybook 빌드의 use client 지시문·청크 크기 경고는 남아 있으며 빌드는 성공했습니다.
- 배포 결과물 단독 실행: 홈·CSS 200, /preview와 /preview/settings 404, 개발 문서·Story·테스트·preview 소스 미검출. 검수용 정적 서버에서 preview 4경로와 Storybook iframe 응답을 확인했습니다.
- 브라우저 부분 검수: preview 390/1280 너비에서 가로 넘침 없음, 필수 입력 오류와 첫 입력란 포커스, 다이얼로그 열기·Escape 닫기, 오류 상태 전환, Storybook Screens/Foundation 대표 화면 렌더링을 확인했습니다. Android/iOS 실기기·인증·결제·Native 기능·전체 Story 상호작용은 미검증입니다.
- 문서 검증: 이번 변경으로 새로 생긴 로컬 파일 링크 누락 0건, workflow 검증 통과(문서 27개·IA 550행), 검색 색인 재생성(가이드 45개·섹션 435개). 기존 링크 문제와 과거 이력은 이번 구조 변경 결함으로 간주하지 않았습니다.
- 적용 기준: 프로젝트 핵심 정보·품질·Storybook·디자인 토큰 요약, build-boundary, 각 영역 AGENTS.md, lounge-review·lounge-implement. Bridge 계약 미정 사항과 APP/WEB IA 대조·환경별 업무 동작·배포 정책은 위 잔여 항목대로 남습니다. commit·push·배포는 수행하지 않았습니다.

- 정적 preview 후속 수정: Next.js 16.2.12의 Windows export가 중첩 RSC segment를 역슬래시 경로로 생성해 브라우저의 점 구분 파일명 요청과 어긋나는 문제를 실제 HTTP 404로 확인했습니다. 설치된 Next export/index.js와 segment-value-encoding.js에서 생성·요청 이름을 대조했습니다. build-preview.mjs에서 Windows에 한해 원본을 보존하고 점 구분 alias 파일을 생성하도록 보완했습니다. 기존 alias와 내용이 다르면 덮어쓰지 않고 실패합니다. 운영 빌드와 Native 계약은 변경하지 않았습니다.
- 수정 검증: lint·preview 빌드 통과, alias 8개 생성, 문제가 있던 segment URL 5개 모두 HTTP 200, 실제 브라우저에서 둘러보기 → 공통 UI → 설정의 링크 이동·화면 갱신 정상, 브라우저 error 로그 0건을 확인했습니다. Linux에서는 후처리를 실행하지 않으며 Linux 직접 실행은 미검증입니다.

## website 잔여 삭제와 최종 전수 점검

- 사용자 요청에 따라 절대 경로·링크 폴더 여부·잔여 항목을 확인한 뒤 front-end/website의 .next와 next-env.d.ts를 삭제했습니다. Git 추적 소스는 이미 이전된 상태였으며 webview·website 폴더가 모두 없음을 확인했습니다. 기존 사용자 변경이나 index는 변경하지 않았습니다.
- Git 추적 텍스트·설정 279개, 문서 183개와 로컬 링크 1,117개를 검사했습니다. UTF-8/깨진 문자·JSON 문법 오류 0건, workspace·잠금 파일 일치, UI 공개 export 18개 대상 파일 존재를 확인했습니다. 실행 코드·설정에서 옛 앱 의존성은 발견되지 않았습니다.
- 현재 가이드·작업 이력의 끊긴 링크 7개를 현행 파일로 연결하고 브리핑 본문·발표 자료의 단일 앱·공통 UI 위치를 보완했습니다. 초기 카드의 과거 구현 기록은 보존하고 현재 상태 안내만 통합 카드에 연결했습니다. 검색 색인 45개 가이드·435개 섹션을 재생성했습니다.
- 남은 링크 누락 6개는 work/inspect_briefing의 보존된 검토 HTML 내부 참조입니다. 현재 제품·개발 가이드·작업 지침의 링크 누락과 구분하며 원본 자료는 수정하지 않았습니다. IA·WBS 내용과 원본도 갱신하지 않았습니다.
- 재실행 통과: 두 workspace 타입·린트, 폼 행동 테스트 2개, 색상 27개 검사, 의존성 연결 검사, Storybook 빌드, /buildTest/web 하위 주소 preview 빌드, production 빌드·패키징, workflow 문서 27개·IA 550행 해시 검증. web 자체 테스트 파일은 없어 업무 기능 테스트 완료로 간주하지 않습니다.
- 브라우저에서 34개 Story 전부 렌더링 확인(렌더링 실패 0), 하위 주소 preview의 공통 UI·설정 링크 이동과 aria-current 표시, 320 너비에서 가로 넘침 없음·error 로그 0건을 확인했습니다. 수정 브리핑과 발표 구조도도 표시를 확인했습니다. 전체 Story의 모든 상호작용·실기기·Bridge·인증·결제는 검증하지 않았습니다.
- 배포 결과물 단독 실행에서 홈·CSS 200, preview·하위 preview 404, 개발 파일 미검출을 재확인했고, 정적 preview 4화면·문제가 있던 segment URL 5개는 200을 확인했습니다. preview 결과물은 이번 검사에서 /buildTest/web 기준으로 생성했습니다.
- 현재 통합 기반에서 추가 실행 결함은 발견하지 못했습니다. Bridge 계약 미정·앱 테스트 부재·실기기 미검증과 기존 Storybook 빌드 경고는 위 범위대로 남아 있습니다. commit·push·배포는 수행하지 않았습니다.
