# Lounge DOCS

## 공통 가이드

- [가이드 검색](./search/index.html)
- [Front-end 구축 가이드 브리핑](./briefing/index.html) · [PC 발표용](./briefing/presentation.html)
- [html template](./init/index.html)
- [Front-End Monorepo 공통 기준](./monorepo/index.html)
- [APP 개발 표준](./app/app.html)
- [Front-End 개발 가이드](./frontend_guide/index.html)
- [Front-end 구축 일정 산정 보고서](./schedule/web.html)
- [Flutter APP 구축 일정 산정 보고서](./schedule/app.html)
- [반응형 웹 브라우저 지원 가이드](./browser_support_guide/index.html)
- [Front-End 보안과 개인정보 가이드](./security_guide/index.html)
- [AI 협업 기반 Front-End 성장 가이드](./ai_frontend_growth_guide/index.html)
- [Front-End 다국어 및 로컬 LLM 번역 가이드](./i18n_guide/index.html)
- [typescript 가이드](./typescript_guide/index.html)
- [Lint 가이드](./lint_guide/index.html)
- [테스트 가이드](./test_guide/index.html)
- [Storybook 운영 가이드](./storybook_guide/index.html)
- [Zustand UI 상태 관리 가이드](./ui_guide/zustand.html)
- [React Code Exports 가이드](./ui_guide/react_code_exports.html)
- [디자인 토큰 가이드](./ui_guide/design_tokens.html)

---

## 실제 Front-end 저장소 통합 구조 (예정)

현재 루트의 상세 가이드와 `reference/front-end` 문서는 가이드 작성 단계의 임시 배치입니다. 공통 소스 구현을 시작하는 새 브랜치에서는 별도 `common_docs` 폴더를 만들지 않고 모든 가이드를 저장소 루트의 `docs/` 아래에서 관리합니다.

```text
front-end-repository/
├── AGENTS.md                   # 실제 구현 작업용 AI 최상위 지침
├── README.md
├── apps/
│   └── app-webview/
│       ├── AGENTS.md           # WebView 앱 전용 지침
│       ├── .storybook/
│       └── src/
└── docs/
    ├── AGENTS.md               # 가이드 작성과 HTML 검증 규칙
    ├── index.html              # 전체 가이드 진입점
    ├── assets/                 # HTML 공통 스타일·스크립트·이미지
    ├── guides/                 # 사람이 읽는 상세 HTML 가이드와 원본
    ├── ai/                     # AI 작업별 핵심 요약
    └── common-source/          # 실제 코드 적용 조건과 파일 단위 구현 기준
```

통합 전에는 위의 현재 링크를 사용합니다. 실제 이동 시에는 `frontend_guide`, `monorepo`, `ui_guide`, `app/webView`, Storybook·Test·Lint·Security·Performance 등의 상세 가이드를 `docs/guides/` 아래의 주제별 폴더로 옮기고, `reference/front-end/docs/ai`와 `reference/front-end/docs/common-source`는 각각 `docs/ai`와 `docs/common-source`로 올립니다. 문서 이동과 내부 링크 변경은 같은 브랜치에서 함께 처리합니다.
