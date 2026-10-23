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
| 앱 내부 WebView | Flutter 앱에서 WebView로 실행되는 웹 화면. 현재 APP IA의 대부분 업무 화면은 WebView | 아래 웹 애플리케이션 기술 스택 적용. `front-end/web/`의 단일 앱이 브라우저와 앱 WebView에서 함께 실행되며, 앱 환경 판별과 Native 기능 사용은 아래 기준을 따름 |
| FO 웹(PC WEB·반응형 홈페이지) | `01.FO_WEB_IA.html`의 사용자 웹 영역. AS-IS 홈페이지를 참고 | 앱 내부 WebView와 동일한 단일 웹 애플리케이션(`front-end/web/`)에서 실행. 공통 스타일·토큰·기본 UI는 `front-end/packages/ui/`에서 공유 |
| PO(파트너오피스) | `03.PO_IA.html`의 파트너 업무 영역 | 스택·지원 환경·공유 범위·담당은 `TBD` |
| OO(현장운영시스템) | `04.OO_IA.html`의 현장 운영 영역 | 스택·지원 환경·공유 범위·담당은 `TBD` |

### 미정 사항

- 회원·결제의 상세 업무 규칙과 화면별 기능 범위: `TBD`
- API·인증·데이터 계약과 Native Bridge 계약: `TBD`
- 앱 환경 값의 이름·형식·전달 방식·수신 시점·실패 처리와 Native 기능별 지원 계약: `TBD` ([결정 기록 DEC-005](../workflow/decisions.md) 연결)
- 통합 앱의 도메인·접속 주소·환경변수·배포 단위와 Flutter에서 여는 주소: `TBD`
- 배포·보안 정책: `TBD`

미정 사항은 승인된 기획과 계약을 확인한 뒤 구체화합니다. 기존 서비스 소개나 홈페이지에서 라운지 3.0의 기능·정책·API를 추정하지 않습니다.

## 현재 범위

- Front-end 소스는 `front-end/`에서 관리합니다. `front-end/web/`는 PC·모바일 브라우저와 Flutter 앱 내부 WebView에서 함께 실행되는 단일 Next.js 웹 애플리케이션이며, 과거 `front-end/webview/`와 `front-end/website/`로 분리돼 있던 앱은 하나의 앱으로 통합됐습니다. PO(파트너오피스)·OO(현장운영시스템)도 필요 시 `front-end/`에 둡니다. Flutter Native 앱 소스는 별도 위치에서 관리합니다.
- Native 기능은 화면에서 직접 구현하지 않고, 필요한 경우 타입이 정의된 Bridge adapter를 통해 요청합니다.
- Android와 iOS의 전역 객체 차이를 화면 컴포넌트에 노출하지 않습니다.
- 인증 토큰, 카드정보와 불필요한 개인정보를 브라우저 저장소에 보관하지 않습니다.

## 웹 애플리케이션 공통 기술 스택

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

이 표는 `front-end/web/`의 기술 기준입니다. 실제 설치 버전과 사용 여부는 `front-end/web/`의 `package.json`, 잠금 파일과 import를 우선 확인합니다. TanStack Query, Zustand, React Hook Form은 각 책임이 실제로 필요할 때 사용하며, 기존 UI 기준에는 Base UI와 Lucide도 포함됩니다.

## 웹 애플리케이션과 UI 패키지의 공통 기반

### 결정 근거와 변경 이유

웹 화면의 공통 요소·디자인 시스템·공통 컴포넌트는 하나로 관리합니다. 같은 UI를 앱마다 따로 보유하면 동일한 디자인 수정이 중복되고 스타일·Props·동작·검수 결과가 서로 달라질 수 있으므로, 공통 소스를 `front-end/packages/ui/`의 독립 패키지로 유지합니다.

과거에는 앱 내부 WebView와 FO 반응형 홈페이지를 `front-end/webview/`와 `front-end/website/`의 두 Next.js 앱으로 분리해 운영했습니다. 두 앱의 설정과 제품 화면이 사실상 동일하고 하나의 디자인 시스템을 공유하므로, 2026-10-23에 브라우저와 앱 WebView에서 함께 실행되는 단일 앱 `front-end/web/`으로 통합했습니다. 화면 너비에 따른 반응형 배치와 앱 실행 환경 판별은 별개의 기준으로 다루며, 통합 근거와 검증 기록은 [웹 애플리케이션 통합 작업 카드](../workflow/tasks/phase-0-web-integration.md)에 있습니다.

공통 UI의 소유 위치는 하나로 유지하고 앱은 이를 의존성으로 사용합니다. 공통화 대상은 토큰·스타일·기본 UI와 그 Storybook이며, 앱의 페이지·라우트·레이아웃·환경별 동작·Native 연동은 앱이 관리합니다. 실제 소비자가 하나의 앱으로 줄었어도 디자인 시스템과 앱의 경계, Story·테스트·검수 코드의 제외 설정은 패키지 경계를 기준으로 성립하므로 패키지는 유지합니다.

### 공유 범위와 현재 상태

- `front-end/web/`은 PC·모바일 브라우저와 Flutter 앱 내부 WebView에서 함께 실행되는 단일 웹 애플리케이션입니다. 기존 홈페이지 https://theloungemembers.com/renew/ 는 콘텐츠·서비스 안내의 참고 자료이며 리뉴얼의 회원·주문·결제 정책을 대신하지 않습니다.
- 하나의 디자인 시스템을 사용합니다. 색상·폰트·간격·라운드 등 디자인 토큰, 기본 스타일과 Button·Input·Card·Dialog 등 기본 UI는 `front-end/packages/ui/`에서 단일 소스로 관리하고 앱이 사용합니다. 생성된 토큰은 Tokens Studio 원본에서 관리하며 직접 수정하지 않습니다.
- 공통 UI Storybook은 공통 패키지를 기준으로 한곳에서 관리합니다. 앱의 Feature·Screen Story는 실제 구현 가까이에 두고 검수 환경에서 탐색할 수 있도록 구성합니다. Story·테스트·검수 전용 코드는 제품 배포에서 제외합니다.
- 페이지·라우트·레이아웃은 앱에서 조합합니다. PC 메뉴·반응형 배치는 화면 너비에 따라 결정되고, 앱 헤더·하단 메뉴·Safe Area·키보드 대응은 앱 환경 판별에 따라 결정됩니다. 공통 UI는 특정 환경의 라우터·인증·API·Native Bridge에 의존하지 않습니다.
- 빌드 입력에는 앱과 공통 UI 패키지를 함께 포함하고 배포 결과물은 앱 단위로 생성합니다. 패키지 연결·CSS 검색·외부 소스 추적·검수 코드 제외와 standalone 실행 경로는 [공용 빌드 기준](../guides/architecture/build-boundary.md#공통-ui를-사용하는-앱의-빌드)에 따라 확인합니다.
- 이번 FO 공통 구현 초안에서는 실기기 검증을 완료 조건으로 요구하지 않습니다. 기존 지원 환경과 Safari 15 CSS 하한은 유지하며, 타입·린트·해당 테스트·빌드 및 브라우저 검수 결과와 실기기 미검증 상태를 구분합니다.

## 앱 환경 판별과 Native 기능 사용 기준

- 화면 너비에 따른 반응형 배치와 앱 실행 환경 판별은 별개의 기준입니다. 같은 화면이 PC·모바일 배치를 선택하는 기준과, 앱 환경·일반 웹 환경을 구분하는 기준은 독립적으로 적용합니다.
- 앱 환경은 Flutter 앱이 Bridge로 전달하는 환경 값을 기준으로 판별합니다. 앱 환경으로 확인된 경우에만 합의된 Native 기능을 사용하고, UI 노출뿐 아니라 실제 Native 기능 실행 지점에서도 사용 가능 여부를 확인합니다.
- 앱이 아닌 것으로 판별되면 일반 웹 브라우저 환경으로 처리하며 Native 영역과 Bridge 기능을 사용하지 않습니다.
- Bridge 값 수신 전의 초기 상태와 일반 웹으로 판별된 상태를 구분합니다. 값이 없다는 이유만으로 즉시 일반 웹이라고 확정하거나, 임의의 시간 제한으로 환경을 확정하지 않습니다.
- 환경 값의 이름·형식·전달 방식·수신 시점·실패 처리와 Native 기능별 지원 계약은 `TBD`입니다. 미정 Bridge command, 전역 객체, 메시지 handler와 parser를 추측해서 구현하지 않으며, 실제 Bridge 연결은 계약이 확인된 범위에서만 구현합니다.
- 카메라·OCR·권한 요청 등 Native 의존 기능은 일반 웹에서 제공할 대체 동작 또는 안내가 필요하며, 구체적인 업무 동작은 기획 확정 전까지 `TBD`로 둡니다.
- 클라이언트의 앱 환경 값은 UI와 기능 실행 경로를 선택하는 기준이며 서버 인증·권한 검증을 대신하지 않습니다.
- 브라우저 뒤로가기, Native 뒤로가기, 직접 URL 접근, 새로고침, 딥링크·푸시 진입의 차이는 환경 판별 계약과 함께 카드에서 정리합니다. 로그인·세션·만료·로그아웃·캐시 초기화의 공통 책임과 Native 연계 부분은 [결정 기록 DEC-002](../workflow/decisions.md)의 인증 계약 확정 후 명세합니다.
- 공개 페이지와 개인·회원 페이지의 검색 노출·metadata 기준은 승인 전까지 통합 앱의 기존 noindex 설정을 유지하며 일괄 해제하지 않습니다.

## 저장소 구조

이 저장소는 Front-end 애플리케이션과 모든 가이드를 함께 관리합니다. Flutter Native 앱만 별도 위치에서 관리합니다.

```text
<repository-root>/
├── AGENTS.md
├── front-end/              # Front-end 소스 (웹 애플리케이션 · PO · OO)
│   ├── AGENTS.md
│   ├── web/               # 브라우저·앱 WebView 공용 단일 Next.js 앱
│   │   ├── AGENTS.md
│   │   └── src/
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

이 문서는 `docs/ai/project.md`, 상세 HTML 가이드는 `docs/guides/`에서 관리합니다. 웹 애플리케이션의 소스와 설정은 `front-end/web/`에 있으며 현재 package·실행·UI 검수 기반이 있습니다. 초기 구성·라우트·개발 검수·빌드 설정 변경 전에는 [앱·개발 화면·배포 경계 필수 기준](../guides/architecture/build-boundary.md)을 반드시 확인합니다. 실제 앱, Storybook, 개발용 preview와 `dist/runtime/` 배포 결과물을 구분합니다.

```text
front-end/web/src/
├── app/          # 라우트, 레이아웃, Provider
├── components/   # UI와 기능 컴포넌트
├── lib/          # 프레임워크와 무관한 유틸리티 및 adapter
└── test/         # 테스트 공통 설정
```

Storybook 설정은 `front-end/packages/ui/.storybook/`, 공통 컴포넌트와 Story는 `front-end/packages/ui/src/components/`에서 관리합니다. 앱의 Feature·Screen Story는 구현 가까이에 유지하며 공통 Storybook에서 함께 수집합니다. 실행·빌드 명령은 [Front-end README](../../front-end/README.md)를 확인합니다.

## 구현 원칙

- 단순한 컴포넌트는 한 파일로 시작합니다.
- 파일과 컴포넌트는 줄 수나 Figma 레이어가 아니라 책임과 재사용 범위로 분리합니다. [TSX 구조 기준](../guides/frontend/component-structure.md)에 따라 긴 고정 데이터·복잡한 처리·큰 UI가 누적되지 않게 작성 중에 분리하고, 약 200줄 초과는 구조 검토 신호로 사용합니다.
- 한 곳에서만 쓰는 코드를 미리 공통 패키지로 이동하지 않습니다.
- 가까운 UI 상태는 React 지역 상태를 우선합니다.
- 서버 데이터와 전역 UI 상태를 같은 저장소에 섞지 않습니다.
- import는 `@/*` alias를 사용할 수 있으며, 불필요한 배럴 파일은 만들지 않습니다.
