# website 빌드와 배포 기준

## 공통 UI와 앱별 책임

공통 스타일·디자인 시스템·기본 컴포넌트는 `../packages/ui/`의 단일 소스를 사용합니다. 앱별 중복 수정과 스타일·동작 차이를 방지하고, website의 페이지·라우트·반응형 레이아웃·배포 결과물은 이 앱에서 관리합니다.

## 설치와 명령

의존성 설치는 `front-end/`의 `npm ci`로 수행합니다. 빌드 환경에 `website/`, `packages/ui/`, workspace package·잠금 파일과 `scripts/package-runtime.mjs`를 함께 제공합니다.

이 앱 폴더에서 실행합니다.

```bash
npm run dev
npm run build
npm run start
```

개발 주소는 http://127.0.0.1:3001 이며 `/preview`에서 공통 UI 검수 화면을 확인합니다. 운영 `/`는 준비 안내 화면입니다.

## 테스트 실행

이 앱에서 `npm run test`를 실행하거나 `front-end/`에서 `npm run test`를 실행하면 홈페이지 테스트도 검사합니다. `src/**/*.test.ts`·`src/**/*.test.tsx`를 찾고 jsdom, React 변환, `@/` 경로와 공용 Testing Library 정리 설정을 적용합니다.

현재 홈페이지 전용 테스트는 없습니다. 실행 결과에 `No test files found`를 표시하고 성공 종료하며, 이는 테스트 검증 완료를 뜻하지 않습니다. 공통 UI 테스트는 `packages/ui`에서, 홈페이지 화면 테스트는 이 앱에서 관리합니다. 테스트·설정·개발 의존성은 운영 화면에서 가져오지 않습니다.

## 빌드와 배포 경계

- 공통 UI는 `@lounge/ui/*`, 스타일은 `@lounge/ui/styles.css`로 가져옵니다. `transpilePackages`에 `@lounge/ui`를 지정하고 파일 추적·Turbopack 루트는 `front-end/`로 둡니다.
- 운영은 일반 `page.tsx`·`layout.tsx`만 라우트로 인식합니다. 개발용 `*.dev.tsx` preview·`src/dev/`·Story·테스트·전용 CSS는 운영 라우트·타입 검사·CSS 입력·배포에서 제외합니다.
- standalone 진입점은 `.next/standalone/website/server.js`입니다. `postbuild`가 `../scripts/package-runtime.mjs`로 필요한 파일을 `dist/runtime/`에 모읍니다. CSS·정적 자산은 `dist/runtime/website/.next/static/`에 포함합니다.
- 배포 서버에는 `dist/runtime/` 전체를 옮기고 그 위치에서 `node server.js`를 실행합니다. 호스트·포트는 `HOSTNAME`·`PORT`로 지정합니다. 실행 대상 OS에 맞는 환경에서 빌드합니다.
- 공통 UI의 제품 코드·CSS·필요한 런타임 의존성은 이 앱 결과물에 포함합니다. WebView 라우트·Native 연동·문서·Story·테스트·검수 도구는 포함하지 않습니다. 공통 UI Storybook은 별도 검수 결과물입니다.

공통 상세 기준은 [앱·개발 화면·배포 경계](../../docs/guides/architecture/build-boundary.md#공통-ui를-사용하는-앱의-빌드)를 따릅니다.


일반 `typecheck`는 `tsconfig.check.json`으로 앱·개발 화면·테스트 소스를 검사하고 자동 생성된 개발/운영 라우트 validator를 혼합하지 않습니다. 운영 빌드는 `tsconfig.build.json`으로 실제 운영 라우트 타입과 제품 소스를 별도로 검사합니다. 오류를 무시하는 설정은 사용하지 않습니다.

## 확인 결과

- 전체 타입·린트·운영 빌드·패키징 통과. 운영 라우트는 `/`와 기본 404이며 `/preview`는 생성되지 않습니다.
- 배포 결과물 단독 실행에서 홈·CSS 200, `/preview` 404 확인. 개발 문서·Story·테스트·Storybook·검수 도구 파일 미검출.
- 개발 preview의 모바일·데스크톱 배치와 버튼·다이얼로그 동작을 확인했습니다. 실제 서비스 연동·실기기는 미검증이며 실기기 검증은 이번 초안 완료 조건에서 제외합니다.

## 임시 공유용 정적 preview

운영 서버 배포와 별도로 `npm run build:preview`를 실행하면 개발용 검수 라우트를 포함한 정적 결과물이 `dist/preview/`에 생성됩니다. 이 폴더만 임시 검수 저장소에 게시하며, 운영 배포에는 기존 `dist/runtime/`를 사용합니다.

GitHub Pages의 하위 경로에 게시할 때는 빌드 전에 `LOUNGE_PREVIEW_BASE_PATH`를 `/buildTest/website`로 지정합니다. 이 값은 preview 빌드에만 적용되며 링크와 정적 자산 경로를 맞춥니다. 검수 화면 주소는 `https://minsukong.github.io/buildTest/website/preview/`입니다.

```powershell
$env:LOUNGE_PREVIEW_BASE_PATH = "/buildTest/website"
npm run build:preview
Remove-Item Env:LOUNGE_PREVIEW_BASE_PATH
```

공통 UI를 수정하면 두 앱과 Storybook을 각각 다시 빌드합니다. `buildTest`의 `main` 루트에서 앱 결과물은 `website/`, 공통 Storybook 결과물은 `storybook/`에 둡니다. 저장소 루트의 `.nojekyll`로 Next.js의 `_next/` 자산도 그대로 제공합니다. 원본 소스·환경 파일·운영 런타임·개발 문서는 복사하지 않습니다.
