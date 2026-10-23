# 앱 빌드와 배포 범위

공용 필수 원칙은 [앱·개발 화면·배포 경계](../../docs/guides/architecture/build-boundary.md)를 따릅니다. 이 문서는 브라우저와 앱 WebView에서 함께 실행되는 `web` 앱의 실제 명령과 결과물 경로를 설명합니다. 설정·경로가 바뀌면 두 문서를 함께 갱신합니다.

## 명령과 결과물

```bash
npm run build
```

Next.js 운영 빌드가 성공하면 `postbuild`가 필요한 실행 파일만 `dist/runtime/`에 모읍니다. 배포 대상은 이 폴더입니다. 저장소 전체와 원본 앱 폴더를 배포하지 않습니다.

```bash
node dist/runtime/server.js
```

배포 서버에서는 `dist/runtime/` 내용만 옮기고 그 위치에서 `node server.js`로 실행합니다. 포트와 호스트는 실행 환경의 `PORT`·`HOSTNAME`으로 지정합니다. 생성된 런타임에 플랫폼별 패키지가 포함될 수 있으므로 실제 서버 OS에 맞는 환경에서 빌드합니다.

## 공통 UI 패키지를 유지하는 이유

공통 요소·디자인 시스템·공통 컴포넌트는 하나로 관리합니다. 같은 UI를 앱에 복사하면 수정이 중복되고 스타일·Props·동작·검수 결과가 달라질 수 있으므로, 공통 소스를 `front-end/packages/ui/`의 독립 패키지로 유지합니다. 실제 소비자는 `web/` 앱(`@lounge/ui/*` import), 패키지 기준 Storybook과 색상 토큰 생성 스크립트의 출력 경로입니다. 디자인 시스템과 앱의 경계, Story·테스트·검수 코드의 제외 설정은 패키지 경계를 기준으로 성립하므로, 단일 앱으로 통합했어도 앱 내부로 옮기지 않습니다. PO·OO의 재사용 여부는 `TBD`입니다.

### 현재 적용

- 의존성은 `front-end/`의 npm workspace와 `package-lock.json`으로 설치합니다. 빌드 입력에 `web/`, `packages/ui/`, workspace package·잠금 파일과 공용 패키징 스크립트를 함께 제공합니다.
- 공통 UI는 `@lounge/ui/button` 등 공개 export를 사용하고 스타일은 `@lounge/ui/styles.css`를 가져옵니다. App Router는 `transpilePackages: ["@lounge/ui"]`로 공통 TypeScript·TSX를 처리합니다.
- 파일 추적·Turbopack 루트는 `front-end/`입니다. 루트 밖의 `docs/`·`work/`는 빌드 입력에 포함하지 않습니다. 공통 패키지의 Story·테스트·검수 설정은 추적·CSS 입력·패키징에서 제외합니다.
- standalone의 실행 파일은 `.next/standalone/web/server.js`입니다. `../scripts/package-runtime.mjs`가 공통 루트 의존성과 앱 파일을 `dist/runtime/`로 모으고 최상위 `server.js`를 진입점으로 생성합니다. 앱의 CSS·정적 자산은 `dist/runtime/web/.next/static/`에 포함합니다.
- 공통 UI Storybook은 `../packages/ui/.storybook/`에서 별도로 빌드하며 `packages/ui/storybook-static/`는 제품 배포에 포함하지 않습니다.

배포 대상은 이 앱의 `dist/runtime/` 전체입니다. `node server.js`로 실행하며 필요한 공통 UI 코드·CSS·런타임 의존성이 포함됩니다. 상세 기준은 [공용 빌드 경계](../../docs/guides/architecture/build-boundary.md#공통-ui를-사용하는-앱의-빌드)를 따릅니다.

## 앱과 개발 화면

| 범위 | 위치·처리 |
| --- | --- |
| 실제 앱 라우트 | `src/app/`의 일반 `page.tsx`, `layout.tsx`, `route.ts` 등 |
| 공통 UI·일반 앱 코드 | `../packages/ui/src/`의 공통 UI와 앱의 `src/features/`, `src/lib/`. 사용하는 모듈만 연결 |
| 개발용 검수 화면 | `src/dev/`와 `src/app/preview/`. 개발 서버에서만 `*.dev.tsx` 라우트 인식 |
| Storybook | `../packages/ui/.storybook/`와 공통 UI·앱의 `*.stories.tsx`. 별도의 개발·검수 결과물 |
| 테스트 | `*.test.tsx`, `src/test/`, Vitest 설정. 운영 검사·배포에서 제외 |
| 문서·지침 | `docs/`, `work/`, `AGENTS.md`, `README.md`, `LINT.md`, `BUILD.md`. 배포에서 제외 |

개발 검수 화면은 `npm run dev` 실행 후 `/preview`, `/preview/components`, `/preview/states`, `/preview/settings`에서 확인합니다. 기존 검수 링크와 Storybook의 가상 경로도 이 위치로 맞췄습니다. 운영에서는 해당 라우트가 생성되지 않습니다.

현재 실제 서비스 화면은 아직 구현하지 않았습니다. 운영의 `/`는 더라운지 이름과 준비 안내를 표시하는 기본 진입 화면입니다. 검수용 메뉴·입력 폼·상태 선택·테마 설정은 운영 화면에 포함하지 않습니다.

## 제외 방법

- Next.js 설정의 개발 단계에서만 `dev.tsx` 확장자를 등록합니다. 운영 라우트에 notFound 조건만 붙여 숨기는 방식이 아니라 라우트 생성부터 제외합니다.
- 운영 타입 검사는 `tsconfig.build.json`을 사용합니다. Story·테스트·개발 화면을 검사 입력에서 제외하며 타입 오류를 무시하지 않습니다.
- 운영 Tailwind 검색에서도 개발 화면·Story·테스트를 제외합니다. 개발용 스타일은 `src/dev/preview.css`로 분리합니다.
- 앱 코드가 개발 영역·Story·테스트·개발 도구를 정적으로 import하면 린트 오류로 처리합니다. 검수용 코드를 운영 앱에 직접 가져오지 않습니다.
- standalone 파일 추적과 배포 패키징에서 문서·지침·개발 도구·테스트·환경변수 파일을 제외합니다. `public/`에는 실제 앱 정적 자산만 둡니다.
- `../scripts/package-runtime.mjs`는 standalone 실행 파일과 `.next/static`, 필요한 `public` 자산만 배포 폴더에 복사합니다. 빌드 캐시는 복사하지 않습니다.


일반 `typecheck`는 `tsconfig.check.json`으로 앱·개발 화면·테스트 소스를 검사하고 자동 생성된 개발/운영 라우트 validator를 혼합하지 않습니다. 운영 빌드는 `tsconfig.build.json`으로 실제 운영 라우트 타입과 제품 소스를 별도로 검사합니다. 오류를 무시하는 설정은 사용하지 않습니다.

## 확인 결과

웹 애플리케이션 통합(2026-10-23) 후 실행한 검사입니다. 과거 단계의 검증 기록은 각 작업 카드에 남아 있습니다.

- 전체 타입·린트 검사 통과(web, packages/ui).
- 테스트: packages/ui의 폼 행동 테스트 2개 통과. `web/`에는 테스트 파일이 없어 `No test files found`로 성공 종료하며, 이는 테스트 검증 완료가 아닙니다.
- 공통 Storybook 정적 빌드 통과 — 공통 UI와 앱의 `Screens/Foundation` Story 34개 수집 확인.
- 운영 빌드 통과, 운영 라우트는 `/`와 기본 404만 생성. `dist/runtime/`에서 개발 문서·AGENTS·Story·테스트·Storybook 파일 0건.
- `dist/runtime/` 단독 실행에서 홈·CSS 200, `/preview` 404 확인. `npm run build:preview`로 `/preview` 4개 화면 정적 생성 확인.
- 후속 브라우저 부분 검수에서 preview의 모바일·데스크톱 너비, 입력 오류·다이얼로그·오류 상태 전환과 Storybook 대표 화면을 확인했습니다. 상세 결과는 [통합 카드](../../docs/workflow/tasks/phase-0-web-integration.md#codex-후속-검수와-보완)에 있습니다. 실기기와 인증·결제·Native 연동은 미검증입니다.

## 임시 공유용 정적 preview

운영 서버 배포와 별도로 `npm run build:preview`를 실행하면 개발용 검수 라우트를 포함한 정적 결과물이 `dist/preview/`에 생성됩니다. 이 폴더만 임시 검수 저장소에 게시하며, 운영 배포에는 기존 `dist/runtime/`를 사용합니다.

GitHub Pages의 하위 경로에 게시할 때는 빌드 전에 `LOUNGE_PREVIEW_BASE_PATH`를 `/buildTest/web`로 지정합니다. 이 값은 preview 빌드에만 적용되며 링크와 정적 자산 경로를 맞춥니다. 검수 화면 주소는 `https://minsukong.github.io/buildTest/web/preview/`입니다.

```powershell
$env:LOUNGE_PREVIEW_BASE_PATH = "/buildTest/web"
npm run build:preview
Remove-Item Env:LOUNGE_PREVIEW_BASE_PATH
```

Windows에서 Next.js 16.2.12가 생성한 중첩 RSC segment 경로는 브라우저 요청 파일명과 다를 수 있습니다. preview 빌드 스크립트가 원본을 보존하고 점 구분 파일명 alias를 추가하며, 충돌한 기존 파일은 덮어쓰지 않습니다. 이 후처리는 정적 검수 결과물에만 적용됩니다.

공통 UI를 수정하면 앱과 Storybook을 각각 다시 빌드합니다. `buildTest`의 `main` 루트에서 앱 결과물은 `web/`, 공통 Storybook 결과물은 `storybook/`에 둡니다. 저장소 루트의 `.nojekyll`로 Next.js의 `_next/` 자산도 그대로 제공합니다. 원본 소스·환경 파일·운영 런타임·개발 문서는 복사하지 않습니다.
