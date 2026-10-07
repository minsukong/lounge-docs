# Lounge Front-end 개발 가이드와 업무 지침

이 폴더는 개발 참고 문서와 실제 업무 지침을 관리합니다. **guides/는 기술·구현 방법과 기준을 참고하는 개발 가이드, workflow/는 협의·작업·검증·기록에 사용하는 업무 지침입니다.** 상세 HTML 가이드는 `guides/`, AI 작업별 요약은 `ai/`, 파일 단위 적용 기준은 `common-source/`, 공통 문서 자산은 `assets/`에 둡니다. 팀 운영 기준·작업 기록·공용 스킬·보조 스크립트는 `workflow/`에서 관리합니다.

## 업무 지침

- 사람이 시작할 곳: [더라운지 3.0 업무 지침 안내](./workflow/index.html) · [Markdown](./workflow/index.md)
- AI가 시작할 곳: [AI 작업 진입](./workflow/AGENTS.md) — 요청별로 필요한 문서·섹션만 선택
- 세부 기준과 사용법: [업무 운영 기준](./workflow/README.md) · [업무 지침 사용법](./workflow/usage-guide.md)

## 개발 참고 가이드

- [문서 검색](./search/index.html)
- [Front-end 구축 가이드 브리핑](./guides/briefing/index.html) · [PC 발표용](./guides/briefing/presentation.html)
- [html template](./templates/index.html)
- [Front-End 저장소 구조 기준](./guides/architecture/index.html) · [GitLab Pages와 Confluence 운영](./guides/architecture/index.html#document-pages)
- [APP 개발 표준](./guides/app/app.html)
- [Flutter 카드 스캔 기술 가이드](./guides/platform/webview/card_scan.html)
- [Front-End 개발 가이드](./guides/frontend/index.html)
- [Front-end 구축 일정 산정 보고서](./guides/planning/web.html)
- [Flutter APP 구축 일정 산정 보고서](./guides/planning/app.html)
- [반응형 웹 브라우저 지원 가이드](./guides/browser-support/index.html)
- [Front-End 보안과 개인정보 가이드](./guides/security/index.html)
- [AI 협업 기반 Front-End 성장 가이드](./guides/learning/ai-frontend-growth/index.html)
- [Front-End 다국어 및 로컬 LLM 번역 가이드](./guides/i18n/index.html)
- [typescript 가이드](./guides/typescript/index.html)
- [Lint 가이드](./guides/lint/index.html)
- [테스트 가이드](./guides/testing/index.html)
- [Storybook 운영 가이드](./guides/storybook/index.html)
- [Zustand UI 상태 관리 가이드](./guides/ui/zustand.html)
- [React Code Exports 가이드](./guides/ui/react_code_exports.html)
- [디자인 토큰 가이드](./guides/ui/design_tokens.html)
- [UI 접근성 준수 가이드](./guides/ui/accessibility.html)

---

## 문서 구조

```text
<repository-root>/
├── AGENTS.md                   # 실제 구현 작업용 AI 최상위 지침
├── README.md
├── front-end/                  # Front-end 소스 (WebView · FO 웹 · PO · OO)
│   ├── AGENTS.md
│   ├── README.md
│   └── webview/
│       ├── AGENTS.md           # WebView 앱 전용 지침
│       ├── .storybook/
│       └── src/
└── docs/
    ├── AGENTS.md               # 가이드 작성과 HTML 검증 규칙
    ├── index.html              # 전체 가이드 진입점
    ├── assets/                 # HTML 공통 스타일·스크립트·이미지
    ├── guides/                 # 분야별 상세 HTML 가이드와 원본
    ├── workflow/               # 업무 지침·운영 기록·양식·스킬·스크립트
    ├── ai/                     # AI 작업별 핵심 요약
    └── common-source/          # 실제 코드 적용 조건과 파일 단위 구현 기준
```

분야별 상세 가이드의 기준 원본은 `guides/`이며, 업무 지침과 운영 기록은 `workflow/`에 함께 둡니다. 구현 작업은 저장소 루트 `AGENTS.md`에서 시작해 필요한 `ai/` 요약을 읽고, 세부 배경이나 적용 예시가 필요할 때 `guides/` 또는 `common-source/`로 이동합니다.

Front-end 애플리케이션 `.ts`, `.tsx`, CSS와 package 설정은 `front-end/`에서 관리합니다. 아직 앱이 생성되지 않은 영역은 첫 착수 시 그 위치에 앱을 만든 뒤 구현하며, `docs/`에는 애플리케이션 소스를 복사하지 않습니다.

## HTML 발표자 모드

브리핑용 HTML은 공통 발표자 모드를 선택적으로 사용할 수 있습니다. 일반 문서에는 자동으로 적용되지 않으며, 필요한 문서에서 다음 순서로 연결합니다.

1. 공통 스타일 `docs/assets/style/briefing-presenter.css`를 연결합니다.
2. 문서 가까이에 `window.LoungeBriefingPresenterConfig`를 정의하는 노트 파일을 둡니다.
3. 노트 파일 다음에 공통 실행 파일 `docs/assets/js/briefing-presenter.js`를 연결합니다.

```html
<link rel="stylesheet" href="../docs/assets/style/briefing-presenter.css" />

<script src="./example-briefing-notes.js"></script>
<script src="../docs/assets/js/briefing-presenter.js"></script>
```

노트 파일은 문서의 `main > section` 순서와 같은 순서로 `notes`를 정의합니다. 각 노트는 `key`, `say`, `avoid`, `question`을 사용합니다. 기본 명령은 `Ctrl + Shift + .`로 명령창을 열고 `/briefing`을 입력하는 방식이며, `Esc`로 종료합니다. URL의 `?briefing=1`로 바로 시작할 수도 있습니다.
