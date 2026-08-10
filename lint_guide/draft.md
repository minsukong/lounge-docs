# Front-End Lint 가이드 초안

> 제안 경로: `lounge-docs/lint_guide/draft.md`  
> 문서 상태: 초안 — HTML에는 아직 반영하지 않습니다.

## 1. 문서 목적

이 문서는 사람이 작성한 코드와 LLM이 생성한 코드에 같은 정적 검사 기준을 적용하기 위한 핵심 원칙을 정리합니다.

lint가 접근성, 화면 구조와 디자인 의도를 모두 판단할 수는 없습니다. 자동으로 확실하게 판단할 수 있는 항목만 lint로 강제하고 나머지는 코드 리뷰와 테스트에서 확인합니다.

## 2. 현재 프로젝트 기준

현재 `apps/app-webview/eslint.config.mjs`는 다음 구성을 사용합니다.

- ESLint 9 Flat Config
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- 빌드 결과물과 `next-env.d.ts` 제외

기본 검증 명령은 다음과 같습니다.

```bash
npm run typecheck
npm run lint
npm run build
```

로컬 변경 중에는 `typecheck`와 `lint`를 우선 실행합니다. production build는 병합 또는 통합 검증이 필요할 때 별도로 실행합니다.

## 3. 적용 원칙

- 코드 오류를 정적으로 확실하게 판단할 수 있는 규칙만 `error`로 둡니다.
- 새 규칙은 기존 코드 영향과 실행 시간을 확인한 뒤 적용합니다.
- `eslint-disable`로 오류를 먼저 우회하지 않습니다.
- 자동 수정 후에는 diff를 확인하고 `typecheck`와 `lint`를 다시 실행합니다.
- 사용되지 않는 disable 지시문은 경고 이상으로 유지합니다.

## 4. 접근성 규칙

현재 Next.js 설정에 포함된 규칙 중 다음 항목을 우선 오류 후보로 검토합니다.

| 검사 목적 | 규칙 |
| --- | --- |
| 올바른 `aria-*` 속성명 | `jsx-a11y/aria-props` |
| role의 필수 ARIA 속성 | `jsx-a11y/role-has-required-aria-props` |
| label과 입력 요소 연결 | `jsx-a11y/label-has-associated-control` |
| 이미지 대체 텍스트 | `jsx-a11y/alt-text` |
| 클릭 요소의 키보드 지원 | `jsx-a11y/click-events-have-key-events` |

ARIA를 추가하기 전에 목적에 맞는 HTML 요소를 먼저 사용합니다.

```tsx
// 권장
<button type="button" onClick={openDialog}>
  상세 보기
</button>

// 지양
<div onClick={openDialog}>상세 보기</div>
```

lint는 `aria-labelledby`와 실제 ID의 연결, 제목 구조, 포커스 이동과 실제 키보드 사용성을 완전히 보장하지 못합니다. 해당 항목은 코드 리뷰나 관련 테스트에서 확인합니다.

## 5. TypeScript와 비동기 코드

`typecheck`는 타입 오류를 검사하고 ESLint는 잘못된 코드 패턴을 검사합니다. 둘 중 하나만 통과했다고 검증이 끝난 것은 아닙니다.

API와 Bridge 요청의 실패가 사라지지 않도록 `@typescript-eslint/no-floating-promises`를 type-aware lint의 첫 도입 후보로 검토합니다.

```tsx
// 지양: Promise 실패가 처리되지 않습니다.
saveReservation();

// 권장
await saveReservation();

// 기다리지 않는 작업도 실패를 처리합니다.
void sendAnalytics().catch(reportError);
```

`void`는 오류 처리를 대신하지 않습니다. 함수 내부에서 실패를 처리하거나 `catch`를 연결한 경우에만 기다리지 않는 작업에 사용합니다.

`TBD`: type-aware lint 실행 시간과 기존 코드 영향을 확인한 뒤 `no-floating-promises` 도입 여부를 확정합니다. 다른 type-aware 규칙은 실제 문제가 확인될 때 추가합니다.

React Hooks는 현재 설정을 유지합니다.

- `react-hooks/rules-of-hooks`: 오류
- `react-hooks/exhaustive-deps`: 경고

`exhaustive-deps`의 오류 승격은 기존 코드 영향을 확인한 뒤 결정합니다. 경고를 없애기 위해 Effect 동작을 임의로 바꾸거나 disable 주석을 먼저 추가하지 않습니다.

## 6. 디자인 토큰

컴포넌트에서는 원시 색상이나 임의 색상값보다 프로젝트의 의미 기반 Tailwind 토큰을 사용합니다.

```tsx
// 권장
<div className="border-border bg-card text-card-foreground" />

// 지양
<div className="border-gray-200 bg-[#ffffff] text-gray-900" />
```

현재는 코드 리뷰에서 확인합니다. 동적 class와 예외를 안정적으로 구분할 수 없는 단순 문자열 검색은 CI 차단 규칙으로 사용하지 않습니다.

`TBD`: 같은 위반이 반복되면 허용 토큰과 예외 정책을 먼저 정한 뒤 자동 검사를 검토합니다.

## 7. 적용 범위와 예외

애플리케이션의 TypeScript와 TSX 파일을 기본 검사 대상으로 둡니다. 테스트, 설정과 생성 코드에는 같은 규칙을 일괄 적용하지 않습니다.

`TBD`: 파일 유형별 검사 범위와 완화 규칙을 실제 파일이 생긴 뒤 확정합니다.

`eslint-disable`이 꼭 필요한 경우 규칙 이름과 사유를 남기고 한 줄 등 최소 범위에만 적용합니다. 파일 전체 비활성화와 규칙 이름이 없는 비활성화는 사용하지 않습니다.

## 8. CI 적용 기준

- CI 구성이 확정되면 `typecheck`와 `lint`를 PR 필수 검사 후보로 적용합니다.
- 새 규칙은 기존 오류 수와 실행 시간을 확인한 뒤 CI 차단 조건으로 전환합니다.
- warning 허용 여부와 모노레포 검사 범위는 CI 환경이 정해진 뒤 확정합니다.

LLM이 생성한 코드도 같은 기준을 적용합니다. 모델의 설명을 검증 결과로 간주하지 않고 실제 명령 결과를 확인합니다.

## 9. 리뷰 체크리스트

- [ ] `npm run typecheck` 통과
- [ ] `npm run lint` 통과
- [ ] lint 오류를 disable 주석으로 우회하지 않음
- [ ] Promise의 성공과 실패 처리 방식이 명확함
- [ ] label, 키보드 조작과 포커스 구조가 올바름
- [ ] 프로젝트 디자인 토큰을 사용함
- [ ] 자동 검사로 확인하지 못한 위험을 변경 설명에 남김

## 10. 도입 순서 제안

1. 현재 Next.js 설정의 실제 오류와 경고를 확인합니다.
2. 필요한 접근성 규칙만 오류로 승격합니다.
3. `no-floating-promises`의 실행 시간과 기존 코드 영향을 확인합니다.
4. 합의된 규칙만 CI 필수 검사로 연결합니다.

## 참고 자료

- [Next.js ESLint 설정](https://nextjs.org/docs/app/api-reference/config/eslint)
- [typescript-eslint no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises/)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
