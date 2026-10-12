# 앱 빌드와 배포 범위

공용 필수 원칙은 [앱·개발 화면·배포 경계](../../docs/guides/architecture/build-boundary.md)를 따릅니다. 이 문서는 현재 WebView의 실제 명령과 결과물 경로를 설명합니다. 설정·경로가 바뀌면 두 문서를 함께 갱신합니다.

## 명령과 결과물

```bash
npm run build
```

Next.js 운영 빌드가 성공하면 `postbuild`가 필요한 실행 파일만 `dist/runtime/`에 모읍니다. 배포 대상은 이 폴더입니다. 저장소 전체와 원본 앱 폴더를 배포하지 않습니다.

```bash
node dist/runtime/server.js
```

배포 서버에서는 `dist/runtime/` 내용만 옮기고 그 위치에서 `node server.js`로 실행합니다. 포트와 호스트는 실행 환경의 `PORT`·`HOSTNAME`으로 지정합니다. 생성된 런타임에 플랫폼별 패키지가 포함될 수 있으므로 실제 서버 OS에 맞는 환경에서 빌드합니다.

## 앱과 개발 화면

| 범위 | 위치·처리 |
| --- | --- |
| 실제 앱 라우트 | `src/app/`의 일반 `page.tsx`, `layout.tsx`, `route.ts` 등 |
| 공통 UI·일반 앱 코드 | `src/components/`, `src/features/`, `src/lib/`. 앱에서 사용하는 모듈만 번들에 연결 |
| 개발용 검수 화면 | `src/dev/`와 `src/app/preview/`. 개발 서버에서만 `*.dev.tsx` 라우트 인식 |
| Storybook | `.storybook/`와 각 `*.stories.tsx`. 별도의 개발·검수 결과물 |
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
- `scripts/package-runtime.mjs`는 standalone 실행 파일과 `.next/static`, 필요한 `public` 자산만 배포 폴더에 복사합니다. 빌드 캐시는 복사하지 않습니다.

## 확인 결과

- 운영 빌드 및 운영 타입 검사 통과.
- 앱 라우트 목록: `/`, 기본 404. 내부 전체 오류 경계도 Next.js가 생성.
- `dist/runtime/`에서 개발 문서·AGENTS·Story·테스트·Storybook·Vitest·Testing Library 패키지 파일 미검출.
- 린트 통과. Storybook의 공통 UI 화면은 파일 이동 후 재시작해서 정상 표시 확인.
- 실제 서비스 연동·실기기·전체 테스트·Storybook 정적 빌드는 이번 작업에서 확인하지 않음.
