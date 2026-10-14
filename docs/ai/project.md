# 프로젝트 핵심 정보

> 구현 기준 원본: [Front-End 개발 가이드](../guides/frontend/index.html), [Front-End 저장소 구조 기준](../guides/architecture/index.html)
>
> 이 문서는 라운지 3.0의 기본 프로젝트 정보와 AI 코딩용 요약입니다. 서비스 소개 자료는 배경 참고용이며, 이번 과업의 범위는 아래 내용을 기준으로 합니다. 구현 기준이 충돌하거나 세부 판단이 필요하면 기준 원본과 실제 소스를 확인합니다.

## 서비스 배경

더라운지는 이브릿지의 여행 서비스 모바일 플랫폼입니다. 공항라운지와 제휴카드 기반 서비스를 중심으로 다양한 여행 편의 서비스를 제공합니다.

- [공식 서비스 소개](https://www.ebridge.co.kr/bbs/content.php?co_id=lounge): 기존 서비스의 배경과 소개 참고
- [FO 웹 AS-IS 홈페이지](https://theloungemembers.com/renew/): FO 웹(PC WEB·반응형 홈페이지)의 기존 콘텐츠와 서비스 안내 참고. PO·OO의 AS-IS로 사용하지 않습니다.

## 라운지 3.0 과업

- 하이브리드 앱: 기존 Android·iOS 앱을 Flutter 기반 하이브리드 앱으로 전면 리뉴얼합니다.
- FO 웹(PC WEB·반응형 홈페이지): AS-IS 홈페이지를 참고하되 실제 기능 범위는 `01.FO_WEB_IA.html`과 승인된 기획으로 확인합니다. 회원·주문·결제 등을 포함한 사용자 웹 영역이며 브랜드 소개만을 뜻하지 않습니다.
- PO(파트너오피스)·OO(현장운영시스템): 각각 `03.PO_IA.html`, `04.OO_IA.html`에 정의된 별도 영역입니다. 세부 과업·담당·검수 책임은 관련 결정과 카드에서 확인합니다.

### 플랫폼별 범위

| 구분 | 범위 | 기술 기준 |
| --- | --- | --- |
| Flutter Native | 하이브리드 앱의 Native 영역과 WebView 연동 | Flutter 기반. Native 화면 후보는 현재 APP IA의 Native View 항목을 따름. 지원 기능의 상세 범위와 Bridge 계약은 `TBD` |
| 앱 내부 WebView | Flutter 앱에서 WebView로 실행되는 웹 화면. 현재 APP IA의 대부분 업무 화면은 WebView | 아래 WebView 기술 스택 적용 |
| FO 웹(PC WEB·반응형 홈페이지) | `front-end/website/`. `01.FO_WEB_IA.html`의 사용자 웹 영역. AS-IS 홈페이지를 참고 | WebView와 동일한 웹 기술 스택·디자인 시스템 적용. 공통 스타일·토큰·기본 UI는 `front-end/packages/ui/`에서 공유 |
| PO(파트너오피스) | `03.PO_IA.html`의 파트너 업무 영역 | 스택·지원 환경·공유 범위·담당은 `TBD` |
| OO(현장운영시스템) | `04.OO_IA.html`의 현장 운영 영역 | 스택·지원 환경·공유 범위·담당은 `TBD` |

### 미정 사항

- 회원·결제의 상세 업무 규칙과 화면별 기능 범위: `TBD`
- API·인증·데이터 계약과 Native Bridge 계약: `TBD`
- 배포·보안 정책: `TBD`

미정 사항은 승인된 기획과 계약을 확인한 뒤 구체화합니다. 기존 서비스 소개나 홈페이지에서 라운지 3.0의 기능·정책·API를 추정하지 않습니다.

## 현재 범위

- Front-end 소스는 `front-end/`에서 관리합니다. `front-end/webview/`는 Flutter 앱에서 WebView로 실행되는 웹 화면이고, FO 웹(PC WEB·반응형 홈페이지)과 PO(파트너오피스)·OO(현장운영시스템)까지 `front-end/`에 둡니다. Flutter Native 앱 소스는 별도 위치에서 관리합니다.
- Native 기능은 화면에서 직접 구현하지 않고, 필요한 경우 타입이 정의된 Bridge adapter를 통해 요청합니다.
- Android와 iOS의 전역 객체 차이를 화면 컴포넌트에 노출하지 않습니다.
- 인증 토큰, 카드정보와 불필요한 개인정보를 브라우저 저장소에 보관하지 않습니다.

## WebView·website 공통 기술 스택

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

이 표는 WebView와 website의 공통 기술 기준입니다. 실제 설치 버전과 사용 여부는 `front-end/webview/`의 `package.json`, 잠금 파일과 import를 우선 확인합니다. TanStack Query, Zustand, React Hook Form은 각 책임이 실제로 필요할 때 사용하며, 기존 UI 기준에는 Base UI와 Lucide도 포함됩니다.

## WebView와 website의 공통 기반

### 결정 근거와 변경 이유

WebView와 website의 공통 요소·디자인 시스템·공통 컴포넌트는 하나로 관리합니다. 앱별로 같은 UI를 따로 보유하면 동일한 디자인 수정이 두 곳에 필요하고 스타일·Props·동작·검수 결과가 서로 달라질 수 있으므로, 공통 소스를 `front-end/packages/ui/`로 모아 두 앱이 같은 구현을 사용합니다.

공통 UI의 소유 위치는 하나로 유지하고 각 앱은 이를 의존성으로 사용합니다. 공통화 대상은 토큰·스타일·기본 UI와 그 Storybook이며, 앱별 페이지·라우트·레이아웃·Native 연동은 각 앱이 관리합니다.

### 공유 범위와 현재 상태

- `front-end/webview/`는 Flutter 앱 내부 웹 화면, `front-end/website/`는 PC·모바일 브라우저용 FO 반응형 홈페이지입니다. 기존 홈페이지 https://theloungemembers.com/renew/ 는 콘텐츠·서비스 안내의 참고 자료이며 리뉴얼의 회원·주문·결제 정책을 대신하지 않습니다.
- 하나의 디자인 시스템을 사용합니다. 색상·폰트·간격·라운드 등 디자인 토큰, 기본 스타일과 Button·Input·Card·Dialog 등 기본 UI는 `front-end/packages/ui/`에서 단일 소스로 관리하고 두 앱이 함께 사용합니다. 생성된 토큰은 Tokens Studio 원본에서 관리하며 직접 수정하지 않습니다.
- 공통 UI Storybook은 공통 패키지를 기준으로 한곳에서 관리합니다. 각 앱의 Feature·Screen Story는 실제 구현 가까이에 두고 검수 환경에서 탐색할 수 있도록 구성합니다. Story·테스트·검수 전용 코드는 제품 배포에서 제외합니다.
- 페이지·라우트·앱별 레이아웃은 각 앱에서 조합합니다. website의 PC 메뉴·반응형 배치와 WebView의 하단 메뉴·Safe Area·Native 연동은 해당 앱이 소유합니다. 공통 UI는 특정 앱의 라우터·인증·API·Native Bridge에 의존하지 않습니다.
- 공통 UI는 단일 소스로 관리합니다. 공통 패키지의 위치는 `front-end/packages/ui/`입니다. 공통 UI 11종·스타일·유틸리티·공통 Story를 이전했고 두 앱은 `@lounge/ui/*`로 가져옵니다. website에는 Next.js 기반과 개발용 `/preview`를 구성했습니다. 의존성·잠금 파일은 `front-end/`의 npm workspace에서 함께 관리합니다. 실제 서비스 화면과 연동은 별도 범위입니다.
- 각 앱의 빌드 입력에는 해당 앱과 공통 UI 패키지를 함께 포함하고 배포 결과물은 앱별로 생성합니다. 패키지 연결·CSS 검색·외부 소스 추적·검수 코드 제외와 standalone 실행 경로는 [공용 빌드 기준](../guides/architecture/build-boundary.md#공통-ui를-사용하는-앱의-빌드)에 따라 확인합니다.
- 이번 FO 공통 구현 초안에서는 실기기 검증을 완료 조건으로 요구하지 않습니다. 기존 지원 환경과 Safari 15 CSS 하한은 유지하며, 타입·린트·해당 테스트·빌드 및 브라우저 검수 결과와 실기기 미검증 상태를 구분합니다.

## 저장소 구조

이 저장소는 Front-end 애플리케이션과 모든 가이드를 함께 관리합니다. Flutter Native 앱만 별도 위치에서 관리합니다.

```text
<repository-root>/
├── AGENTS.md
├── front-end/              # Front-end 소스 (WebView · FO 웹 · PO · OO)
│   ├── AGENTS.md
│   ├── webview/
│   │   ├── AGENTS.md
│   │   └── src/
│   ├── website/           # FO 반응형 홈페이지 소스 위치
│   │   └── AGENTS.md
│   └── packages/ui/       # 공통 UI·스타일·Storybook 실제 소스
│       ├── .storybook/
│       └── src/
└── docs/
    ├── AGENTS.md
    ├── assets/
    ├── guides/
    ├── ai/
    └── common-source/
```

이 문서는 `docs/ai/project.md`, 상세 HTML 가이드는 `docs/guides/`에서 관리합니다. WebView 애플리케이션의 소스와 설정은 `front-end/webview/`에 있으며 현재 package·실행·UI 검수 기반이 있습니다. 초기 구성·라우트·개발 검수·빌드 설정 변경 전에는 [앱·개발 화면·배포 경계 필수 기준](../guides/architecture/build-boundary.md)을 반드시 확인합니다. 실제 앱, Storybook, 개발용 preview와 `dist/runtime/` 배포 결과물을 구분합니다.

```text
front-end/webview/src/
├── app/          # 라우트, 레이아웃, Provider
├── components/   # UI와 기능 컴포넌트
├── lib/          # 프레임워크와 무관한 유틸리티 및 adapter
└── test/         # 테스트 공통 설정
```

Storybook 설정은 `front-end/packages/ui/.storybook/`, 공통 컴포넌트와 Story는 `front-end/packages/ui/src/components/`에서 관리합니다. 각 앱의 Feature·Screen Story는 구현 가까이에 유지하며 공통 Storybook에서 함께 수집합니다. 실행·빌드 명령은 [Front-end README](../../front-end/README.md)를 확인합니다.

## 구현 원칙

- 단순한 컴포넌트는 한 파일로 시작합니다.
- 파일과 컴포넌트는 줄 수나 Figma 레이어가 아니라 책임과 재사용 범위로 분리합니다. [TSX 구조 기준](../guides/frontend/component-structure.md)에 따라 긴 고정 데이터·복잡한 처리·큰 UI가 누적되지 않게 작성 중에 분리하고, 약 200줄 초과는 구조 검토 신호로 사용합니다.
- 한 곳에서만 쓰는 코드를 미리 공통 패키지로 이동하지 않습니다.
- 가까운 UI 상태는 React 지역 상태를 우선합니다.
- 서버 데이터와 전역 UI 상태를 같은 저장소에 섞지 않습니다.
- import는 `@/*` alias를 사용할 수 있으며, 불필요한 배럴 파일은 만들지 않습니다.
