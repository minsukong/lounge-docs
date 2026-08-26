# 공통 소스 적용 항목

## 문서 사용법

현재는 실제 `apps/app-webview` 저장소와 기획·Backend 계약이 준비되기 전에 참고 가이드를 정리하는 단계입니다. 이 문서는 계약 확정 후 사용할 예시와 아직 결정되지 않은 항목을 한곳에서 확인할 때 사용합니다.

기획 흐름과 API 계약에 의존하는 항목은 `TBD` 표시 여부와 관계없이 승인된 계약이 전달되기 전에는 구현하지 않습니다. Swagger 또는 OpenAPI 제공도 미리 가정하지 않습니다.

## 현재 작성할 수 있는 예시 코드

다음 항목은 화면 기획과 관계없이 현재 기술 기준으로 참고 구현을 준비할 수 있습니다. 실제 파일이 생성되었다는 의미는 아니며, 저장소 생성 후 기존 구조와 설치 버전을 확인하고 적용합니다.

| 참고 문서 | 권장 대상 경로 | 책임 | 저장소 생성 후 확인 |
| --- | --- | --- | --- |
| [Tailwind CSS와 UI 설정](./tailwind.md) | `postcss.config.mjs` | Tailwind CSS 4 PostCSS 연결 | 설치된 Tailwind 주 버전과 CSS 빌드 |
| [Tailwind CSS와 UI 설정](./tailwind.md) | `components.json` | shadcn 생성 위치와 alias | 실제 `style`, alias와 생성 결과 비교 |
| [Tailwind CSS와 UI 설정](./tailwind.md) | `src/app/globals.css` | 의미 기반 토큰 연결 | 실제 토큰 값, 밝은 화면·어두운 화면·포커스 |
| [Tailwind CSS와 UI 설정](./tailwind.md) | `src/lib/utils.ts` | 조건부 클래스와 충돌 병합 | 기존 `cn` 존재 여부와 클래스 병합 |
| [TypeScript 공통 설정과 검사 함수](./typescript.md) | `tsconfig.base.json` | 저장소 공통 strict 기준 | workspace 전체 오류 범위 |
| [TypeScript 공통 설정과 검사 함수](./typescript.md) | `apps/app-webview/tsconfig.json` | Next 설정과 alias | Next가 생성한 설정과 app typecheck |
| [API 요청 기반 구현 예시](./network.md) | `src/lib/http/http-error.ts` | 계약 확정 후 HTTP 상태와 응답 본문 보존 | 승인된 오류 type과 상태 처리 방식 |
| [API 요청 기반 구현 예시](./network.md) | `src/lib/http/request.ts` | 계약 확정 후 본문 읽기와 기능별 parser 연결 | 기존 fetch wrapper와 runtime 지원 범위 |
| [테스트 공통 설정](./test.md) | `vitest.config.ts` | Client Component 테스트 환경 | 기존 테스트 실행 도구, alias와 테스트 실행 |
| [테스트 공통 설정](./test.md) | `src/test/setup.ts` | DOM matcher와 테스트 종료 후 정리 | jest-dom matcher 실행 |
| [API Mock 도입 판단 기준](./api-mocking.md) | Front-end 범위에서 결정 | 승인된 계약 이후 필요할 때 선택 | 실제 환경으로 재현하기 어려운 상태와 관리 책임 |

## 실제 사용처와 함께 적용할 코드

다음 소스는 구현 방법을 미리 참고할 수 있지만, 실제 저장소에서는 표에 적힌 사용처가 생길 때 추가합니다. 사용처 없이 파일만 미리 생성하지 않습니다.

| 내보내는 함수·컴포넌트 | 권장 대상 경로 | 적용 조건 | 최초 사용 예 |
| --- | --- | --- | --- |
| `getQueryClient` | `src/lib/query/get-query-client.ts` | TanStack Query를 처음 사용할 때 | `AppProviders` |
| `AppProviders` | `src/app/providers.tsx` | 앱 전체에 Client Provider가 필요할 때 | 최상위 `layout.tsx` |
| `createTestQueryClient` | `src/test/render-with-providers.tsx` | Query Component 테스트를 작성할 때 | `ProfileScreen` 테스트 |
| `SubmitButton` | `src/components/common/submit-button.tsx` | 둘 이상의 폼에서 같은 제출 처리 중 동작이 반복될 때 | 저장·신청 폼 |
| `FormField` | `src/components/common/form-field.tsx` | `label`, `hint`, `error` 연결이 반복될 때 | Input·Textarea 폼 |
| `isRecord`, `hasOwn` | `src/lib/type-guards.ts` | 외부 입력 검증에서 같은 객체 검사가 반복될 때 | API·Bridge 응답 검증 |
| `getErrorMessage` | `src/lib/errors.ts` | `unknown` 오류의 기본 문구 처리가 반복될 때 | query·mutation 오류 |
| `assertNever` | `src/lib/exhaustiveness.ts` | 구분 가능한 union의 모든 분기를 검사할 때 | 화면 상태 `switch` |
| `parseSession`, `getSession` | `src/features/session/` | 로그인 상태를 처음 확인할 때 | 계정 요약·보호 화면 |
| `useLogoutMutation` | `src/features/session/queries/session-queries.ts` | 로그아웃과 사용자 cache 초기화가 필요할 때 | 계정 메뉴 |
| API 요청 함수와 parser | 기능 API와 `src/lib/http/` | Backend가 승인한 계약과 개발 환경이 제공됐을 때 | 첫 확정 API 기능 |
| `handlers`, fixture | 계약 확정 후 결정 | 실제 환경으로 필요한 상태를 재현하기 어렵고 Front-end 테스트 범위와 관리 책임을 정했을 때 | 승인된 계약 기반 API 상태 테스트 |

## 함께 적용할 파일

| 구현 예시 | 함께 확인할 파일 | 적용할 때 확인할 차이 |
| --- | --- | --- |
| Tailwind 설정 | `postcss.config.mjs`, `components.json`, `globals.css`, `utils.ts` | alias, shadcn `style`과 실제 디자인 토큰 |
| QueryClient·Provider | `get-query-client.ts`, `providers.tsx`, layout 연결 | Query 정책과 추가 Provider |
| 폼 공통 컴포넌트 | `submit-button.tsx`, `form-field.tsx`, 두 테스트 | 기존 shadcn import와 실제 반복 동작 |
| 외부 입력 검증 | `type-guards.ts`, 기능별 응답 검증 함수와 테스트 | 실제 응답 형식과 오류 타입 |
| API 요청 경계 | `http-error.ts`, `request.ts`, 기능별 API와 parser | 기본 URL, 인증, timeout과 공통 오류 계약 |
| 세션 경계 | 세션 model·parser·API·Query | 인증 방식, 세션 응답과 로그아웃 뒤 이동 |
| 테스트 설정 | `vitest.config.ts`, `setup.ts`, `render-with-providers.tsx` | 기존 테스트 실행 도구, alias와 전역 mock |
| API Mock | Front-end 범위에서 선택한 도구와 승인된 계약 기반 데이터 | 실제 환경 우선, 승인 계약과 관리 책임 |
| 프로필 통합 예시 | 프로필 기능 파일 전체, API Mock handler | 실제 API 경로, 응답 형식, 입력값 검증, 문구와 화면 경로 |

코드 파일만 복사하고 사용 예와 테스트를 생략하면 내보낸 함수와 컴포넌트가 실제 요구에 맞는지 확인할 수 없습니다. 실제 적용 시에는 최소 한 개의 사용처와 해당 동작 테스트를 같은 변경에 포함합니다.

## 필요한 패키지

`TBD`: 패키지 관리자, 정확한 패키지 버전과 설치 명령은 실제 저장소를 생성할 때 결정합니다. 다음 표는 각 구현 예시에 필요한 패키지만 보여 줍니다.

| 용도 | 패키지 |
| --- | --- |
| Tailwind CSS 4 | `tailwindcss`, `@tailwindcss/postcss`, `tw-animate-css` |
| 클래스 조합 | `clsx`, `tailwind-merge` |
| shadcn `base-nova` | registry가 지정하는 Base UI 관련 패키지 |
| 아이콘 | `lucide-react` |
| 서버 상태 | `@tanstack/react-query` |
| 테스트 실행 | `vitest`, `jsdom`, `@vitejs/plugin-react` |
| 컴포넌트 테스트 | `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom` |
| API Mock | 프로젝트 기본 package가 아니며 승인된 계약 이후 Front-end 테스트 필요에 따라 도구 결정 |

## 미확정 항목

다음 항목은 구현 예시만으로 공통 규칙을 정하지 않습니다. 결정해야 할 내용을 확정한 뒤 관련 예제, 이 문서와 실제 코드를 함께 갱신합니다.

| 항목 | 결정해야 할 내용 | 확정 후 작업 |
| --- | --- | --- |
| 브랜드와 UI 토큰 | 색상, 글자 체계, 간격, 화면 너비 기준과 테마 저장 방식 | `globals.css` 토큰 값과 UI 예제 갱신 |
| API 연결 정책 | 기본 URL, 인증 전달, 공통 오류 형식과 제한 시간 | `request` 연결 경계와 기능별 오류 처리 갱신 |
| 세션 계약 | 세션 path·응답, 만료·갱신과 로그아웃 뒤 이동 | 계약 확정 후 세션 parser·Query와 cache 초기화 범위 구현 |
| 개발 API Mock | 도입 필요성, 대상 상태와 Front-end 관리 책임 | 승인된 API 계약 이후 Front-end 범위에서 production 제외 조건과 선택 도구 연결 |
| WebView Bridge 연동 | 호출 이름, 전달 값, 버전, 제한 시간과 플랫폼 오류 | 승인된 Bridge 계약으로 타입과 연동 코드 구현 |
| Query 기본 정책 | 캐시, 재시도, 다시 조회하는 시점과 오프라인 동작 | `QueryClient` 기본 설정과 테스트 갱신 |
| 폼 입력값 검증 도구 | schema 도구, 브라우저·서버 검증 범위와 오류 형식 | 실제 폼에서 입력값 검증 연결 |
| Zustand와 상태 저장 | 실제 공유 상태, 저장 범위와 초기화 정책 | 여러 컴포넌트에서 공유하는 첫 상태를 store로 구현 |
| 알림·확인 창 공통 처리 | 문구, 표시 순서, 포커스와 중복 처리 | 반복되는 사용 흐름이 확인된 뒤 공통 컴포넌트 검토 |
| 공통 로딩·빈 결과·오류 화면 | 화면들이 공유할 문구, 동작과 접근성 규칙 | 둘 이상의 동일한 상태 표현을 공통화 |
| `packages/ui` | 두 번째 실제 앱의 소비 범위와 회귀 테스트 | 복수 앱 소비가 확인된 뒤 패키지 분리 |

예를 들어 API가 정해지지 않았는데 `ApiResponse<T>`를 먼저 만들면 API마다 선택 속성과 예외 분기가 쌓입니다. 통합 예시의 응답 검증 함수처럼 기능별 응답 형식에서 시작하고, 둘 이상의 API가 같은 형식을 실제로 공유할 때만 공통화합니다.

## TBD가 확정되었을 때

1. 결정된 기준의 원본 문서를 먼저 갱신합니다.
2. 해당 항목의 `TBD` 표시를 제거합니다.
3. 관련 참고 코드와 통합 사용 예시를 결정된 계약에 맞게 수정합니다.
4. 실제 저장소가 있으면 적용 코드와 테스트를 함께 갱신합니다.
5. 이 문서의 경로, 내보내는 항목과 검증 내용을 실제 상태와 맞춥니다.

## 실제 적용 기록 양식

실제 저장소를 생성하고 예시 코드를 반영한 뒤 다음 내용을 PR이나 작업 기록에 남깁니다.

```text
책임:
추가 또는 변경한 실제 파일:
최초 사용처:
기존 구현과 병합한 내용:
추가 dependency:
가이드에서 교체한 지점:
검증 명령과 결과:
남아 있는 TBD:
```

## 현재 문서 검토 항목

```text
[ ] 실제 애플리케이션 소스를 문서 저장소에 만들지 않았다.
[ ] 미확정 기술과 제품 계약에 TBD를 표시했다.
[ ] 기획과 API 계약 확정 전에 요청 함수, parser, fixture와 handler를 구현하지 않았다.
[ ] 예제의 API 경로, 토큰 값과 문구를 확정값으로 표현하지 않았다.
[ ] 참고 코드마다 적용 조건과 교체 지점을 작성했다.
[ ] Markdown과 HTML의 내용이 일치한다.
```

## 저장소 생성 후 검증 항목

```text
[ ] 같은 기능의 기존 파일과 내보내는 항목을 먼저 검색했다.
[ ] 실제 사용처가 없는 컴포넌트나 도우미 함수를 추가하지 않았다.
[ ] 업무 계약 type을 전역 common 폴더에 올리지 않았다.
[ ] 사용처와 테스트를 함께 추가했다.
[ ] API 테스트가 요청 함수와 parser를 우회하지 않는다.
[ ] 세션과 회원 상세 데이터를 하나의 전역 상태로 합치지 않았다.
[ ] typecheck, lint와 test를 통과했다.
[ ] 통합 영향이 있으면 build까지 확인했다.
```
