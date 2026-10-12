# 린트 적용 기준

기준 문서는 `docs/guides/lint/index.html`, `docs/guides/ui/accessibility.html`, `docs/ai/quality.md`, `docs/ai/accessibility.md`입니다.

## 실행

```bash
npm run lint
```

오류가 있으면 실패합니다. 경고는 표시하되 실패 조건으로 삼지 않습니다. Hooks 의존성은 프로젝트 가이드대로 경고를 유지합니다. 경고까지 실패 처리해야 하는 검수에서는 `npm run lint:strict`를 선택합니다. 이번 변경에서는 CI를 추가하지 않습니다.

## 검사 범위

| 대상 | 적용 |
| --- | --- |
| 앱·Feature·화면 조합·일반 공통 코드 | Next.js·React·TypeScript 기본 규칙 + 프로젝트 접근성 규칙 |
| Story·테스트·테스트 설정 | 기본 규칙 유지, 프로젝트 접근성 승격은 적용하지 않음 |
| `src/components/ui/` | 수정 가능한 primitive 구현. 기본 규칙 유지, 사용하는 화면에서 라벨 등 프로젝트 규칙 적용 |
| Next.js·ESLint·Storybook 등의 설정 | 기본 규칙 유지, 제품 화면의 접근성 규칙은 적용하지 않음 |
| 설치 패키지·생성 선언·빌드·커버리지 결과물 | 제외 |

Primitive 구현은 소비자에게서 label, children, id 등의 속성을 전달받습니다. JSX의 한 파일만으로 완성된 UI를 판정할 수 없으므로 사용하는 화면에서 검사합니다. UI 폴더의 기본 린트 자체를 제외하지는 않습니다.

## 접근성 자동 검사

- `aria-*` 속성명·값, ARIA role의 유효성·필수 속성·지원 속성.
- 이미지와 Next.js `Image`의 대체 텍스트.
- `Label`의 `htmlFor` 연결 표기, `Input`·`Textarea`·`Checkbox` 사용처.
- 클릭 이벤트의 키보드 지원, 비의미 요소의 상호작용, 포커스 가능한 요소.
- 양수 `tabIndex` 금지와 HTML 언어 지정.

`Link`, `Button`, `Label`, `Input`, `Textarea`는 해당 HTML 의미로 매핑해 사용처를 검사합니다. Checkbox·Dialog·Sheet의 내부 role과 포커스 처리는 Base UI 책임과 실제 화면 검수로 확인하며 임의의 HTML 요소로 단순 매핑하지 않습니다.

Next.js에 포함된 `jsx-a11y` 플러그인을 사용하므로 별도 중복 플러그인을 등록하지 않습니다. Hooks 호출 규칙은 오류, 의존성 누락은 경고입니다. 사용하지 않는 disable 지시문은 오류로 처리합니다. 코드 오류를 피하기 위한 무조건적인 disable이나 전체 파일 비활성화를 추가하지 않습니다.

## 자동 검사로 보장하지 않는 항목

- `htmlFor`와 실제 DOM의 `id`가 같은 요소로 연결되는지, 모든 입력의 접근 가능한 이름이 올바른지.
- 버튼·아이콘의 실제 낭독 이름, 제목 순서, 화면 전환 시 포커스.
- Dialog 포커스 트랩·복귀·Escape, 키보드와 터치 동작.
- 색상 대비, 44×44pt 터치 영역, 200% 글자 확대와 모션 감소.
- 오류 메시지와 `aria-describedby` 연결, 필수 표시와 입력 정책.
- iOS 15 WKWebView·Android System WebView 실제 지원과 VoiceOver·TalkBack.

이 항목은 코드 리뷰와 실제 화면에서 확인합니다. 의미 기반 디자인 토큰도 가이드대로 리뷰 항목이며 단순 색상 문자열 검색으로 차단하지 않습니다.

## 비동기 검사 도입

`no-floating-promises`는 가이드에서 type-aware lint의 첫 도입 후보로 정합니다. 아직 API·Bridge 요청이 없는 이번 범위에서는 강제하지 않습니다. 실제 비동기 연동이 생기면 실행 시간과 기존 코드 영향을 확인한 뒤 범위를 정해 도입합니다. `void`만 붙여 실패를 숨기지 않습니다.

## 운영 코드와 개발 코드의 경계

앱 코드에서는 `src/dev/`, 검수 라우트, Story·테스트 및 Storybook·Vitest·Testing Library를 정적으로 import할 수 없습니다. `no-restricted-imports`로 검사하며 개발 화면·Story·테스트 자체는 이 경계 규칙에서 제외합니다.
