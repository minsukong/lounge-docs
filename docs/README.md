# Lounge Front-end 가이드

이 폴더는 실제 프로젝트에서 사용하는 모든 가이드를 관리하는 기준 위치입니다. 상세 HTML 가이드는 `guides/`, AI 작업별 요약은 `ai/`, 파일 단위 적용 기준은 `common-source/`, 공통 문서 자산은 `assets/`에 둡니다.

## 공통 가이드

- [가이드 검색](./search/index.html)
- [Front-end 구축 가이드 브리핑](./guides/briefing/index.html) · [PC 발표용](./guides/briefing/presentation.html)
- [html template](./templates/index.html)
- [Front-End Monorepo 공통 기준](./guides/architecture/index.html)
- [APP 개발 표준](./guides/app/app.html)
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

---

## 문서 구조

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

상세 가이드의 기준 원본은 `guides/`입니다. 구현 작업은 저장소 루트 `AGENTS.md`에서 시작해 필요한 `ai/` 요약을 읽고, 세부 배경이나 적용 예시가 필요할 때 `guides/` 또는 `common-source/`로 이동합니다.

실제 애플리케이션 `.ts`, `.tsx`, CSS와 package 설정은 저장소의 `apps/app-webview/`에서 관리하며 이 폴더에 복사하지 않습니다.
