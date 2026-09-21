# Lounge Front-end 작업 계획

> 작성일: 2026-09-17
> 상태: 계획

## 🔄 현재 프로젝트 상태

| 항목 | 상태 |
|------|------|
| `apps/app-webview/` | 디렉터리 골격만 존재 (`.gitkeep`), `package.json` 없음 |
| `apps/mobile/` | 존재하지 않음 (Flutter 앱은 별도 담당) |
| `tokens/tokens.json` | ✅ 디자인 토큰 세트 준비 완료 (color, spacing, typography, shadows, components) |
| `docs/` | ✅ 상세 가이드·AI 요약·공통 소스 문서 준비 완료 |
| CI/CD | 미구성 |

> **핵심 전제**: 모든 작업이 Next.js 앱 초기화(Phase 0)를 전제로 합니다. 현재 `package.json`과 코드 파일이 전혀 없으므로, 앱 기반 설정부터 선행해야 합니다.

---

## Phase 0: 앱 초기화 (공통 전제)

| 순서 | 작업 | 산출물 |
|------|------|--------|
| 0-1 | `apps/app-webview/`에 Next.js 16 App Router 앱 생성 | `package.json`, `next.config.ts`, `tsconfig.json`, `src/app/layout.tsx` |
| 0-2 | 핵심 의존성 설치: React 19, TypeScript, Tailwind CSS 4.1+, `@tailwindcss/postcss`, `clsx`, `tailwind-merge`, `lucide-react` | lock file |
| 0-3 | `postcss.config.mjs` 작성 | Tailwind CSS 4 PostCSS 연결 |
| 0-4 | `src/lib/utils.ts`에 `cn` 함수 작성 | 클래스 병합 유틸리티 |
| 0-5 | `components.json` (shadcn/ui `base-nova`, neutral, cssVariables: true) 작성 | shadcn 생성 경로 고정 |
| 0-6 | WebView viewport 설정 (`viewportFit: "cover"`, safe area) | `src/app/layout.tsx`에 viewport export |

**기술 스택:**

| 기술 | 버전 기준 |
|------|----------|
| Next.js | 16 App Router |
| React | 19 |
| TypeScript | 6 |
| Tailwind CSS | 4.1+ (잠금 파일 고정) |
| shadcn/ui | `base-nova` style, Lucide icons |
| CSS 하한 | Safari 15 (iOS 15 WKWebView) |

---

## Phase 1: UI/디자인 시스템 기초 작업

> 기준: `docs/ai/design-tokens.md`, `docs/common-source/tailwind.md`

| 순서 | 작업 | 산출물 |
|------|------|--------|
| 1-1 | `tokens/tokens.json`의 semantic 토큰을 `globals.css`의 `:root`/`.dark` CSS Variables로 변환 | `src/app/globals.css` |
| 1-2 | `@theme inline`으로 Tailwind CSS 4가 CSS Variables를 Utility 이름에 연결 | `globals.css` 내 `@theme` 블록 |
| 1-3 | `tw-animate-css` 추가 (shadcn 애니메이션) | `package.json` |
| 1-4 | shadcn/ui 기본 컴포넌트 추가: Button, Input, Label, Card, Dialog, Select | `src/components/ui/*` |
| 1-5 | `Icon` 공통 컴포넌트 작성 (Lucide 기반, Inline SVG 금지) | `src/components/ui/icon.tsx` |
| 1-6 | WebView 기본 Layout (safe area, `min-h-screen`) | `src/app/layout.tsx` |
| 1-7 | Safari 15 호환성 확인: 사용 Utility 검증, `dvh` 대신 `vh`, `@starting-style` 등 미사용 확인 | 검증 기록 |

**디자인 토큰 매핑 기준:**

```
tokens/tokens.json
├── core/
│   ├── dimension      → Tailwind 간격 scale (4, 8, 16, 32, 64px)
│   ├── spacing        → p/m/gap
│   ├── borderRadius   → rounded-*
│   ├── colors         → CSS Variables
│   └── typography     → font-size, line-height, font-family
├── light/
│   └── semantic tokens → :root CSS Variables
└── dark/
    └── semantic tokens → .dark CSS Variables
```

**Safari 15 호환 주의사항:**

- `dvh`, `svh`, `lvh` → `vh` 사용
- `@starting-style` 미사용
- `text-wrap: balance/pretty` 미사용
- `field-sizing` 미사용
- 최신 `:has()` 변형, container query, mask 미사용
- `100dvh` → `100vh` + `min-h-screen` 사용

---

## Phase 2: Storybook 세팅

> 기준: `docs/ai/storybook.md`, `docs/common-source/storybook.md`

| 순서 | 작업 | 산출물 |
|------|------|--------|
| 2-1 | Storybook 설치: `@storybook/react-vite` 또는 `@storybook/nextjs` (앱 구조에 맞게 선택) | `package.json` |
| 2-2 | `.storybook/main.ts` 작성: Story 검색 glob(`src/**/*.stories.tsx`), addon 등록, staticDirs(globals.css) | `.storybook/main.ts` |
| 2-3 | `.storybook/preview.ts` 작성: 전역 CSS import, Provider, viewport 프리셋(mobile), Controls/Autodocs | `.storybook/preview.ts` |
| 2-4 | addon 구성: `addon-essentials`(controls, actions, docs), `addon-a11y`, `addon-viewport` | 설치 |
| 2-5 | 사이드바 분류 구성: `Components` / `Features` / `Screens` | `main.ts` tags |
| 2-6 | Phase 1의 shadcn/ui 컴포넌트 기본 Story 작성 (Button variants, Input states) | `*.stories.tsx` |
| 2-7 | Storybook 정적 Build 검증 (`npm run build-storybook`) | 산출물 확인 |

**Storybook 구조:**

```text
apps/app-webview/
├── .storybook/
│   ├── main.ts          # story glob, framework, addons
│   └── preview.ts       # globals.css, providers, viewport, params
└── src/
    ├── components/ui/
    │   ├── button.tsx
    │   └── button.stories.tsx
    ├── features/
    │   └── (기능별 Story)
    └── app/
        └── (Screen Story)
```

**Story 작성 원칙:**

- 사이드바에서 `Components`, `Features`, `Screens` 구분
- 실제 export, Props, variant와 기능 상태를 사용
- Loading, Empty, Error, 권한, Viewport 등 주요 상태를 표현
- Storybook 전용 Props/Wrapper/Mock 추가 금지
- Figma Frame URL을 parameters에 연결

---

## Phase 3: 브릿지 통신 테스트

> 기준: `docs/guides/platform/webview/app_webview_guide.html` §10
> ⚠️ **TBD 의존**: Bridge 계약(채널명, 요청·응답·오류 규격)은 Flutter 담당자와 Front-end가 합의해야 합니다.

| 순서 | 작업 | 산출물 |
|------|------|--------|
| 3-1 | **Bridge 계약 정의** (TBD → 확정): 호출 이름, 파라미터 타입, 응답 형식, 오류 코드, 버전 관리 | 계약 문서 |
| 3-2 | TypeScript 타입 정의: `BridgeRequest`, `BridgeResponse`, `BridgeError` | `src/lib/bridge/types.ts` |
| 3-3 | Bridge Adapter 작성: WebView 전역 객체 접근 추상화 | `src/lib/bridge/adapter.ts` |
| 3-4 | 환경 분기 로직: 실제 WebView 환경 vs Desktop/Storybook 환경 감지 | `src/lib/bridge/detect.ts` |
| 3-5 | **Mock Bridge** 구현: Storybook과 테스트에서 Native 응답 시뮬레이션 | `src/test/bridge-mock.ts` |
| 3-6 | Storybook에 Bridge 연동 스토리 작성 (Native 호출 요청/응답/오류 상태) | `bridge.stories.tsx` |
| 3-7 | Vitest 단위 테스트: Adapter 메시지 파싱, 오류 처리, 타임아웃 | `bridge.test.ts` |
| 3-8 | **실기기 통합 테스트** (Flutter 앱 준비 후) | 테스트 결과 기록 |

**Bridge 테스트 시나리오:**

```text
1. Web → Native 호출
   - 요청 메시지 전송
   - 응답 수신 (성공/실패/타임아웃)

2. Native → Web 이벤트
   - 화면 복귀 시 상태 전달
   - 앱 전 background/foreground 전환 알림

3. 오류 경계
   - Bridge 미존재 (브라우저에서 직접 실행)
   - Native 측 비응답 (타임아웃)
   - 잘못된 파라미터 형식

4. 보안 검증
   - 허용 도메인 외에서 Bridge 호출 차단
   - 메시지 원본 로그에 민감정보 미노출
```

**플랫폼별 Bridge 접근 방식:**

| 플랫폼 | 접근 객체 |
|--------|----------|
| iOS WKWebView | `window.webkit.messageHandlers.{name}.postMessage()` |
| Android System WebView | `window.{BridgeName}.{method}()` 또는 `window.AndroidBridge` |

**TBD (확정 전 구현 불가):**

- Bridge 채널명
- 요청·응답·오류 규격
- Flutter 측 `webview_flutter` JS Bridge 구현
- 허용 기능 목록 (카메라, 위치, 파일 등)

---

## Phase 4: 빌드 시나리오 계획

> 기준: `docs/guides/architecture/index.html` §6
> ⚠️ **TBD**: 배포 플랫폼, CI Runner, 환경 구성은 담당자 승인 필요

| 순서 | 작업 | 산출물 |
|------|------|--------|
| 4-1 | **Build 환경 매트릭스 정의** | 문서 |
| 4-2 | `package.json` scripts 설계: `dev`, `build`, `typecheck`, `lint`, `test`, `build:storybook`, `build:docs` | `package.json` |
| 4-3 | Next.js Production Build 구성 (SSR vs SSG, WebView 환경 최적화) | `next.config.ts` |
| 4-4 | **GitLab CI Pipeline 설계** (Application Job / Documentation Job 분리) | `.gitlab-ci.yml` |
| 4-5 | Storybook 정적 Build Job | CI stage |
| 4-6 | 문서 게시 Job (GitLab Pages → Confluence iframe) | CI stage |
| 4-7 | 환경별 설정 (dev/qa/prod): API endpoint, Base URL | 환경 변수 정책 |
| 4-8 | Flutter App과의 배포 시나리오: WebView URL 전달, 버전 호환 정책 | 문서 |

**CI/CD Pipeline 설계:**

```text
Pipeline:
├── Application Job (apps/app-webview)
│   ├── typecheck
│   ├── lint
│   ├── test (Vitest)
│   ├── build (Next.js production)
│   ├── build:storybook (정적 산출물)
│   └── deploy (환경별)
│
└── Documentation Job (docs/)
    ├── search index 생성
    ├── 링크/HTML 검증
    └── GitLab Pages 게시
```

**Build 시나리오 매트릭스:**

| 시나리오 | 입력 | 산출물 | 사용처 |
|----------|------|--------|--------|
| Development | `npm run dev` | Dev Server | 로컬 개발 |
| Storybook Dev | `npm run storybook` | Storybook Dev Server | UI 개발·검수 |
| Storybook Static | `npm run build:storybook` | 정적 HTML | CI 검수, 배포 |
| Production Web | `npm run build` | `next build` → `.next/` | WebView/웹 배포 |
| Documentation | `node docs/search/build-search-index.mjs` | 검색 데이터 | GitLab Pages |
| App Bundle (Flutter) | Flutter build | APK/IPA + WebView URL | 앱 마켓 |

**배포 환경:**

| 환경 | 목적 | URL 기준 |
|------|------|----------|
| dev | 개발 중 확인 | TBD |
| qa | QA/UAT | TBD |
| prod | 운영 | TBD |

---

## 📅 작업 순서와 의존 관계

```text
Phase 0 (앱 초기화)
    ├──→ Phase 1 (UI/디자인 시스템)
    │       ├──→ Phase 2 (Storybook)
    │       │       └──→ Phase 3 (Bridge 테스트 - Mock 기준)
    │       └──→ Phase 4 (빌드 시나리오)
    │
    └──→ Phase 3 (Bridge - 실제 통합 테스트는 Flutter 앱 준비 후)
```

**추진 순서 권장:**

1. **Phase 0 + Phase 1** (일괄 수행): 앱 초기화와 디자인 시스템은 하나의 작업으로 묶는 것이 효율적
2. **Phase 2**: Phase 1의 컴포넌트가 준비되면 Storybook에 바로 연결
3. **Phase 3 (Mock)**: Bridge 타입과 Adapter를 먼저 만들고, Storybook에서 Mock으로 검증
4. **Phase 4**: 빌드 설정과 CI 파이프라인은 Phase 0~2 완료 후 구체화
5. **Phase 3 (실기기)**: Flutter 앱이 준비된 후 최종 통합 테스트

---

## ⚠️ 미확정 항목 (TBD)

| 항목 | 필요한 결정 | 담당 |
|------|------------|------|
| 패키지 관리자 | npm / pnpm / yarn 선택 | Front-end |
| Storybook 프레임워크 | `react-vite` vs `nextjs` | Front-end (성능/적합성 확인) |
| 배포 플랫폼 | Hosting, CDN, Docker 여부 | 운영/DevOps |
| Bridge 계약 | 채널명, 규격, 버전 정책 | Front-end + Flutter + 기획 |
| CI Runner | GitLab Runner 환경, Container | DevOps |
| 환경 URL | dev/qa/prod WebView Base URL | Front-end + Backend + App |
| Flutter WebView URL 전달 방식 | Hardcode vs 설정 vs Bridge | Flutter + Front-end |
| Next.js Output | `standalone` vs static export | Front-end (WebView 환경) |
| SSR vs SSG | WebView에서 서버 렌더링 필요 여부 | Front-end + Backend |

---

## ✅ 완료 기준 (Phase별)

### Phase 0 완료
- [ ] `npm run dev`로 Next.js 앱이 실행된다
- [ ] TypeScript strict mode가 적용된다
- [ ] Tailwind CSS 유틸리티가 반응한다
- [ ] `cn()` 함수가 동작한다

### Phase 1 완료
- [ ] `globals.css`에 semantic token이 CSS Variable로 연결되어 있다
- [ ] shadcn/ui 기본 컴포넌트가 `src/components/ui`에 존재한다
- [ ] `npm run typecheck` 통과
- [ ] `npm run lint` 통과
- [ ] Safari 15에서 미지원 CSS 기능이 사용되지 않는다

### Phase 2 완료
- [ ] `npm run storybook`으로 Storybook이 실행된다
- [ ] `npm run build-storybook` 정적 Build가 성공한다
- [ ] 사이드바에 Components/Features/Screens 분류가 보인다
- [ ] 전역 스타일(globals.css)이 Storybook에 적용된다
- [ ] 기본 컴포넌트 Story가 렌더링된다

### Phase 3 완료 (Mock 기준)
- [ ] Bridge 타입이 정의되어 있다
- [ ] Adapter가 WebView/비WebView 환경을 구분한다
- [ ] Mock Bridge로 Storybook에서 Bridge 호출을 시뮬레이션할 수 있다
- [ ] 단위 테스트가 통과한다
- [ ] 실제 Flutter 연동은 TBD (별도 통합 테스트)

### Phase 4 완료
- [ ] `npm run build`로 production build가 생성된다
- [ ] CI Pipeline이 typecheck → lint → test → build 순서로 실행된다
- [ ] Storybook 정적 Build가 CI에서 실행된다
- [ ] 문서 게시가 애플리케이션 Build와 분리된다
- [ ] 환경별 설정이 분리되어 있다
