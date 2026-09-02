# Lounge Front-end

WebView 기반 Front-end 애플리케이션과 구현 가이드를 한 저장소에서 관리합니다.

## 시작 위치

- 실제 애플리케이션: [`apps/app-webview`](./apps/app-webview/README.md)
- 전체 가이드: [`docs/index.html`](./docs/index.html)
- 가이드 목록: [`docs/README.md`](./docs/README.md)
- AI 구현 지침: [`AGENTS.md`](./AGENTS.md)
- 문서 작성 지침: [`docs/AGENTS.md`](./docs/AGENTS.md)

## 현재 상태

`apps/app-webview`에는 실제 프로젝트 초기화를 위한 빈 골격만 있습니다. Next.js, Tailwind CSS, shadcn/ui, Storybook과 테스트 설정은 구현 작업을 시작할 때 실제 package를 설치하고 검증하면서 생성합니다.

모든 상세 HTML 가이드, AI 요약, 공통 소스 적용 기준과 문서 자산은 `docs/` 아래에서 관리합니다. 애플리케이션 소스는 `docs/`에 넣지 않습니다.

## 기준 구조

```text
.
├── AGENTS.md
├── README.md
├── apps/
│   └── app-webview/
│       ├── AGENTS.md
│       ├── README.md
│       ├── .storybook/
│       └── src/
└── docs/
    ├── AGENTS.md
    ├── README.md
    ├── index.html
    ├── assets/
    ├── search/
    ├── templates/
    ├── guides/
    ├── ai/
    └── common-source/
```
