# 프로젝트 핵심 정보

> 기준 원본: [Front-End 개발 가이드](../guides/frontend/index.html), [Front-End 저장소 구조 기준](../guides/architecture/index.html)
>
> 이 문서는 AI 코딩용 요약입니다. 충돌하거나 세부 판단이 필요하면 기준 원본을 확인합니다.

## 현재 범위

- `apps/app-webview`는 앱 내부 WebView에서 서비스 UI와 업무 흐름을 제공하는 Next.js 애플리케이션입니다.
- Native 기능은 화면에서 직접 구현하지 않고, 필요한 경우 타입이 정의된 Bridge adapter를 통해 요청합니다.
- Android와 iOS의 전역 객체 차이를 화면 컴포넌트에 노출하지 않습니다.
- 인증 토큰, 카드정보와 불필요한 개인정보를 브라우저 저장소에 보관하지 않습니다.

## 기술과 구조

- Next.js 16 App Router
- React 19와 TypeScript 6
- Tailwind CSS 4
- shadcn/ui, Base UI, Lucide
- TanStack Query, Zustand, React Hook Form은 각 책임이 실제로 필요할 때 사용

현재 저장소는 애플리케이션과 모든 가이드를 다음처럼 함께 관리합니다.

```text
<repository-root>/
├── AGENTS.md
├── apps/
│   ├── mobile/          # Flutter Native 앱
│   └── app-webview/     # WebView Front-end
└── docs/
    ├── AGENTS.md
    ├── assets/
    ├── guides/
    ├── ai/
    └── common-source/
```

이 문서는 `docs/ai/project.md`, 상세 HTML 가이드는 `docs/guides/`, 실제 애플리케이션 소스는 `apps/app-webview/`에서 관리합니다.

```text
apps/app-webview/src/
├── app/          # 라우트, 레이아웃, Provider
├── components/   # UI와 기능 컴포넌트
├── lib/          # 프레임워크와 무관한 유틸리티 및 adapter
└── test/         # 테스트 공통 설정
```

Storybook 애플리케이션 설정은 `apps/app-webview/.storybook`에 두고, Story 파일은 실제 컴포넌트 가까이에 둡니다.

```text
apps/app-webview/
├── .storybook/           # Storybook 실행과 전역 렌더링 설정
└── src/
    ├── components/ui/
    │   ├── button.tsx
    │   └── button.stories.tsx
    └── features/         # 독립 검증 가치가 있는 기능 컴포넌트만 Story 작성
```

Storybook 설정은 `apps/app-webview/.storybook`, Story는 실제 컴포넌트 가까이에서 관리합니다. 실제 파일에서 확인되지 않는 별도 Storybook 앱이나 공통 package 구성을 추측하지 않습니다.

## 구현 원칙

- 단순한 컴포넌트는 한 파일로 시작합니다.
- 파일과 컴포넌트는 줄 수나 Figma 레이어가 아니라 책임과 재사용 범위로 분리합니다.
- 한 곳에서만 쓰는 코드를 미리 공통 패키지로 이동하지 않습니다.
- 가까운 UI 상태는 React 지역 상태를 우선합니다.
- 서버 데이터와 전역 UI 상태를 같은 저장소에 섞지 않습니다.
- import는 `@/*` alias를 사용할 수 있으며, 불필요한 배럴 파일은 만들지 않습니다.
