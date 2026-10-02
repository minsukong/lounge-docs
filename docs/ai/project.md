# 프로젝트 핵심 정보

> 구현 기준 원본: [Front-End 개발 가이드](../guides/frontend/index.html), [Front-End 저장소 구조 기준](../guides/architecture/index.html)
>
> 이 문서는 라운지 3.0의 기본 프로젝트 정보와 AI 코딩용 요약입니다. 서비스 소개 자료는 배경 참고용이며, 이번 과업의 범위는 아래 내용을 기준으로 합니다. 구현 기준이 충돌하거나 세부 판단이 필요하면 기준 원본과 실제 소스를 확인합니다.

## 서비스 배경

더라운지는 이브릿지의 여행 서비스 모바일 플랫폼입니다. 공항라운지와 제휴카드 기반 서비스를 중심으로 다양한 여행 편의 서비스를 제공합니다.

- [공식 서비스 소개](https://www.ebridge.co.kr/bbs/content.php?co_id=lounge): 기존 서비스의 배경과 소개 참고
- [기존 홈페이지](https://theloungemembers.com/renew/): 반응형 홈페이지 구축 시 기존 콘텐츠와 서비스 안내 참고

## 라운지 3.0 과업

- 하이브리드 앱: 기존 Android·iOS 앱을 Flutter 기반 하이브리드 앱으로 전면 리뉴얼합니다.
- 반응형 홈페이지: 기존 홈페이지를 참고해 구축하며, 기존 사이트에 없는 결제·회원 기능 등을 추가합니다.

### 플랫폼별 범위

| 구분 | 범위 | 기술 기준 |
| --- | --- | --- |
| Flutter Native | 하이브리드 앱의 Native 영역과 WebView 연동 | Flutter 기반. Native 기능의 상세 범위와 Bridge 계약은 `TBD` |
| 앱 내부 WebView | Flutter 앱에서 WebView로 실행되는 웹 화면 | 아래 WebView 기술 스택 적용 |
| 반응형 홈페이지 | 기존 사이트를 참고한 반응형 웹과 결제·회원 기능 | WebView와 동일한 스택을 적용할지와 기능 공유 범위는 `TBD` |

### 미정 사항

- 회원·결제의 상세 업무 규칙과 화면별 기능 범위: `TBD`
- API·인증·데이터 계약과 Native Bridge 계약: `TBD`
- 배포·보안 정책: `TBD`

미정 사항은 승인된 기획과 계약을 확인한 뒤 구체화합니다. 기존 서비스 소개나 홈페이지에서 라운지 3.0의 기능·정책·API를 추정하지 않습니다.

## 현재 범위

- `front-end/`는 Front-end(웹) 참고 골격으로, 실제 소스는 별도 저장소에서 관리합니다. `front-end/webview/`는 Flutter 앱에서 WebView로 실행되는 웹 화면이고, 향후 반응형 웹(브랜딩 사이트, 결제, 회원)까지 포함됩니다.
- Native 기능은 화면에서 직접 구현하지 않고, 필요한 경우 타입이 정의된 Bridge adapter를 통해 요청합니다.
- Android와 iOS의 전역 객체 차이를 화면 컴포넌트에 노출하지 않습니다.
- 인증 토큰, 카드정보와 불필요한 개인정보를 브라우저 저장소에 보관하지 않습니다.

## WebView 기술 스택

| 구분 | 기술 | 역할 |
| --- | --- | --- |
| Framework | Next.js 16.x (App Router) | 라우팅, 레이아웃, 렌더링과 웹 애플리케이션 구성 |
| UI | React 19.x | 컴포넌트 기반 UI 구성 |
| Language | TypeScript 6.x | 컴포넌트, API, 폼과 외부 경계의 타입 안전성 |
| Styling | Tailwind CSS 4.x | 기본 스타일과 디자인 토큰 적용 |
| Server State | TanStack Query 5.x | 서버 데이터 조회, 캐시, 동기화와 비동기 상태 |
| Client State | Zustand | 필요한 공유 UI·클라이언트 상태 |
| Form | React Hook Form 7.x | 폼 값, 입력 상태, 제출 상태와 오류 연결 |
| UI Component | shadcn/ui | 프로젝트가 소유하고 수정하는 UI 원형의 출발점 |

이 표는 WebView의 기술 기준입니다. 실제 설치 버전과 사용 여부는 실제 소스 저장소의 `package.json`, 잠금 파일과 import를 우선 확인합니다. TanStack Query, Zustand, React Hook Form은 각 책임이 실제로 필요할 때 사용하며, 기존 UI 기준에는 Base UI와 Lucide도 포함됩니다.

## 저장소 구조

이 저장소는 참고용 Front-end 골격과 모든 가이드를 함께 관리하며, 실제 애플리케이션 소스는 별도 저장소에 있습니다.

```text
<repository-root>/
├── AGENTS.md
├── front-end/              # Front-end 참고 골격 (실제 소스는 별도 저장소)
│   ├── AGENTS.md
│   └── webview/
│       ├── AGENTS.md
│       ├── .storybook/
│       └── src/
└── docs/
    ├── AGENTS.md
    ├── assets/
    ├── guides/
    ├── ai/
    └── common-source/
```

이 문서는 `docs/ai/project.md`, 상세 HTML 가이드는 `docs/guides/`에서 관리합니다. 실제 애플리케이션 소스는 별도 저장소에 있으며, 이 저장소 `front-end/webview/`는 참고 골격입니다.

```text
front-end/webview/src/
├── app/          # 라우트, 레이아웃, Provider
├── components/   # UI와 기능 컴포넌트
├── lib/          # 프레임워크와 무관한 유틸리티 및 adapter
└── test/         # 테스트 공통 설정
```

Storybook 애플리케이션 설정은 `front-end/webview/.storybook`에 두고, Story 파일은 실제 컴포넌트 가까이에 둡니다.

```text
front-end/webview/
├── .storybook/           # Storybook 실행과 전역 렌더링 설정
└── src/
    ├── components/ui/
    │   ├── button.tsx
    │   └── button.stories.tsx
    └── features/         # 독립 검증 가치가 있는 기능 컴포넌트만 Story 작성
```

Storybook 설정은 `front-end/webview/.storybook`, Story는 실제 컴포넌트 가까이에서 관리합니다. 실제 파일에서 확인되지 않는 별도 Storybook 앱이나 공통 package 구성을 추측하지 않습니다.

## 구현 원칙

- 단순한 컴포넌트는 한 파일로 시작합니다.
- 파일과 컴포넌트는 줄 수나 Figma 레이어가 아니라 책임과 재사용 범위로 분리합니다.
- 한 곳에서만 쓰는 코드를 미리 공통 패키지로 이동하지 않습니다.
- 가까운 UI 상태는 React 지역 상태를 우선합니다.
- 서버 데이터와 전역 UI 상태를 같은 저장소에 섞지 않습니다.
- import는 `@/*` alias를 사용할 수 있으며, 불필요한 배럴 파일은 만들지 않습니다.
