# Lint와 Test 핵심 규칙

> 기준 원본: `lounge-docs/lint_guide/index.html`, `lounge-docs/test_guide/index.html`
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 역할

- TypeScript 검사는 타입과 모듈 경계의 오류를 확인합니다.
- Lint는 코드를 실행하지 않고 정적 패턴, Next.js 규칙과 기본 접근성 오류를 확인합니다.
- Test는 코드를 실행해 사용자 동작과 실제 결과를 확인합니다.
- Lint가 디자인 의도와 모든 접근성을 판단한다고 가정하지 않습니다.

## 테스트 범위

- 오류 영향이 큰 순수 로직, 조건 분기, 폼 검증과 핵심 사용자 동작을 우선합니다.
- 컴포넌트 테스트는 구현 세부사항보다 사용자가 보는 역할, 이름, 상태와 결과를 검증합니다.
- 단순 표시 컴포넌트, Tailwind 클래스 문자열과 라이브러리 내부 동작을 형식적으로 테스트하지 않습니다.
- 모든 컴포넌트와 Hook에 테스트를 강제하지 않습니다.
- 실제 운영 토큰, 카드정보와 개인정보를 테스트 데이터로 사용하지 않습니다.
- 보안 관련 변경은 `security.md`에서 외부 입력, 권한, 저장소, Secret, 로그와 통합 검증 범위를 추가로 확인합니다.

## 현재 도구와 명령

- 단위·컴포넌트 테스트: Vitest, React Testing Library, user-event, jest-dom
- 기본 확인 순서:

```bash
npm run typecheck
npm run lint
npm run test
```

- 병합 또는 통합 영향이 있는 변경에서는 `npm run build`도 실행합니다.
- API, Query, 비동기 UI, 이미지, 폰트 또는 초기 전송에 영향을 주는 변경은 `performance.md`에서 저속 네트워크, 연결 중단과 성능 회귀 검증 기준을 추가로 확인합니다.
- E2E와 커버리지 기준은 실제 필요가 생길 때 추가합니다.
- 기획과 Backend API 계약이 확정되기 전에는 API Mock, fixture와 handler를 만들지 않습니다. 계약 확정 후 사용할 수 있는 Backend 환경에서 필요한 상태를 재현하기 어렵다면 Front-end 책임자 또는 프로젝트 담당자와 테스트 범위·관리 책임을 정한 뒤 [API Mock 도입 판단 기준](../common-source/api-mocking.md)에 따라 선택합니다.
