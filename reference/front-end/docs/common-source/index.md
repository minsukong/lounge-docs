# Front-End 공통 소스 구현 예시

## 이 문서 묶음에서 얻는 것

상위 Front-end 가이드가 기술 선택과 작성 방향을 설명한다면, 이 폴더는 실제 구현에 옮길 수 있는 **파일 단위 예시 코드**를 제공합니다. 모든 예제는 Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui `base-nova`, TanStack Query 기준입니다.

이 폴더에는 애플리케이션 파일을 직접 저장하지 않습니다. 코드 블록의 경로대로 실제 `apps/app-webview`에 옮기되, 같은 책임의 기존 파일이 있으면 새 파일을 만들지 말고 필요한 부분만 병합합니다.

기획 흐름과 Backend API 계약이 확정되기 전에는 API·세션 구현 예시와 Mock을 실제 코드로 옮기지 않습니다. Backend 확인 질문과 `TBD`만 정리하고, 승인된 계약과 개발 환경이 전달된 뒤 필요한 문서만 적용합니다.

## 작업별 문서

| 필요한 작업 | 열어 볼 문서 | 확인할 파일과 코드 |
| --- | --- | --- |
| 디자인 전에 색상과 모서리 값 설정하기 | [Tailwind CSS와 UI 설정](./tailwind.md) | `globals.css`, `components.json`, `postcss.config.mjs`, `cn` |
| 앱 전체에서 TanStack Query 사용하기 | [React 공통 코드](./react.md) | `get-query-client.ts`, `providers.tsx` |
| 폼의 제출 처리·label·오류 표현 통일하기 | [React 공통 코드](./react.md) | `SubmitButton`, `FormField` |
| 외부의 `unknown` 값을 안전하게 읽기 | [TypeScript 공통 설정과 검사 함수](./typescript.md) | 객체 검사, 오류 변환, 분기 누락 검사 |
| API 요청과 오류 처리를 한 경계로 모으기 | [API 요청 기반 구현 예시](./network.md) | `HttpError`, `request`, 기능별 parser 연결 |
| 로그인 확인·비로그인·로그아웃 상태 나누기 | [세션과 회원 경계 구현 예시](./session.md) | 세션 model·parser·Query와 cache 초기화 |
| 공통 컴포넌트를 실제 동작으로 검증하기 | [테스트 공통 설정](./test.md) | Vitest 설정, setup, `renderWithProviders` |
| Component·Feature·Screen UI를 독립적으로 개발·검수하기 | [Storybook 적용 가이드](./storybook.md) | `.storybook`, `*.stories.tsx`, 상태·Viewport, Figma Embed와 정적 Build |
| 계약 확정 후 API Mock 필요성 판단하기 | [API Mock 도입 판단 기준](./api-mocking.md) | Backend 환경 우선, Front-end 범위·책임과 선택 도구 기준 |
| 공통 코드를 한 기능에서 함께 쓰기 | [통합 사용 예시](./recipes.md) | 조회·상태·수정 폼을 연결한 프로필 예시 |
| 적용 대상과 교체 지점만 빠르게 확인하기 | [공통 소스 적용 항목](./catalog.md) | 파일별 적용 조건과 점검 목록 |
| 가이드의 준비 수준과 실제 적용 순서 확인하기 | [공통 소스 가이드 활용 브리핑](./briefing.md) | 시작 가능한 범위, 한계와 저장소 생성 후 적용 순서 |

## 구현 예시 적용 순서

1. 문서의 **사용 조건**에서 현재 기능과 책임이 같은지 확인합니다.
2. **적용 파일**에서 실제 저장소에 같은 파일이나 내보내는 항목이 있는지 검색합니다.
3. 첫 API는 Backend가 승인한 계약과 개발 환경이 전달된 뒤 공통 요청 함수와 기능별 parser에 연결합니다.
4. 세션이 필요한 첫 화면에서 로그인 상태와 회원 데이터를 분리해 적용합니다.
5. **완성 코드**를 기존 구현과 비교해 새 파일 생성 또는 병합을 선택합니다.
6. **사용 예시**까지 연결해 import만 되고 실제로는 쓰이지 않는 공통 코드를 남기지 않습니다.
7. **프로젝트에서 바꿀 부분**만 실제 계약과 디자인 값으로 교체합니다.
8. 공통 컴포넌트, 독립 검수 가치가 있는 Feature 또는 사용자 노출 Screen을 만들거나 공개 API, 주요 상태와 화면 구조를 변경했다면 Story를 작성 또는 갱신하고 Storybook 정적 Build를 확인합니다.
9. 예제 테스트와 `typecheck`, `lint`, `test`를 통과시킵니다.

## 권장 파일 구조

```text
apps/app-webview/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── components.json
├── postcss.config.mjs
├── vitest.config.ts
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── providers.tsx
    ├── components/
    │   ├── common/
    │   │   ├── form-field.tsx
    │   │   └── submit-button.tsx
    │   └── ui/
    │       ├── button.tsx
    │       ├── button.stories.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       └── spinner.tsx
    ├── features/session/
    │   ├── api/
    │   ├── model/
    │   └── queries/
    ├── lib/
    │   ├── http/
    │   │   ├── http-error.ts
    │   │   └── request.ts
    │   ├── query/get-query-client.ts
    │   ├── errors.ts
    │   ├── type-guards.ts
    │   └── utils.ts
    └── test/
        ├── render-with-providers.tsx
        └── setup.ts
```

이 구조를 한 번에 만들 필요는 없습니다. 예를 들어 서버 상태가 없는 화면이라면 Query 관련 파일은 만들지 않습니다. 폼이 하나뿐이라면 `SubmitButton`과 `FormField`는 기능 폴더에서 먼저 사용하고, 같은 동작이 반복될 때 `components/common`으로 이동합니다.

## 그대로 써도 되는 부분과 바꿔야 하는 부분

| 구분 | 그대로 사용할 수 있는 부분 | 적용 전에 바꿀 부분 |
| --- | --- | --- |
| Tailwind 설정 | 의미 기반 토큰 이름과 `@theme inline` 연결 | `:root`, `.dark`의 실제 브랜드 값 |
| shadcn 설정 | alias 구조와 CSS 변수 방식 | 실제 `components.json`의 기존 `style`과 경로 |
| QueryClient | 서버 생성·브라우저 재사용 생명주기 | 재시도, `staleTime`, 다시 조회하는 시점 등 제품 정책 |
| 폼 공통 코드 | 표준 HTML 속성 전달과 접근성 연결 | 업무 문구, 입력값 검증, mutation |
| TypeScript 검사 함수 | `unknown`에서 객체를 확인하는 공통 함수 | API·Bridge별 상세 응답 검증 |
| API 요청 함수 | 본문 읽기, `HttpError`와 parser 연결 | 기본 URL, 인증 전달, timeout과 공통 오류 계약 |
| 세션 경계 | 로그인 확인 상태와 회원 상세 데이터의 분리 | 실제 세션 응답, 만료·갱신과 이동 정책 |
| 테스트 도구 | DOM 환경, jest-dom, Provider 포함 렌더링 함수 | 기존 실행 도구, alias, 전역 mock 정책 |
| Storybook | Component·Feature·Screen 구현 가까이 Story를 두고 실제 공개 API, 상태와 Viewport를 확인하는 원칙 | 실제 Framework, Addon, Script, Provider와 Story 검색 범위 |
| API Mock | 승인된 계약 이후 Front-end 테스트 범위에서 선택적으로 적용 | 실제 환경으로 재현하기 어려운 상태와 관리 책임 |

## 공통 폴더에 둘 기준

다음 중 하나라면 바로 공통 위치에 둘 수 있습니다.

- `globals.css`, Provider, 테스트 setup처럼 애플리케이션 전체에서 사용하는 설정입니다.
- 둘 이상의 실제 사용처가 동일한 입력, 상태, 접근성 동작을 요구합니다.
- 구현이 달라도 함께 바뀌어야 하는 하나의 명확한 계약이 있습니다.

다음이라면 기능 가까이에 둡니다.

- API 경로, 성공 문구, 권한, 화면 이동처럼 업무 정책이 포함됩니다.
- 두 화면이 모양만 비슷하고 상태나 변경 이유는 다릅니다.
- 선택 prop을 계속 늘려야만 재사용할 수 있습니다.
- shadcn 또는 설치한 라이브러리가 같은 기능을 이미 제공합니다.

## 적용 완료 기준

```text
[ ] 코드가 실제 사용처에서 import되고 있다.
[ ] 호출자가 className, 표준 HTML 속성, 접근 가능한 이름을 전달할 수 있다.
[ ] 디자인 값은 의미 기반 토큰에 있고 컴포넌트에 원시 색상값이 없다.
[ ] 외부 입력은 unknown에서 검증한 뒤 애플리케이션 데이터 타입으로 변환한다.
[ ] loading, disabled, invalid, empty, error 중 해당 상태를 확인했다.
[ ] 프로젝트가 추가한 동작을 사용자 관점의 테스트로 검증했다.
[ ] npm run typecheck, npm run lint, npm run test가 통과한다.
[ ] Component·Feature·Screen UI 변경 시 관련 Story와 Storybook 정적 Build를 확인했다.
```

빌드 경계나 Server/Client Component 구성이 바뀌는 적용이라면 `npm run build`까지 확인합니다.
