# Lounge Front-end

Front-end 개발 가이드·팀 업무 지침과 Front-end 소스를 한 저장소에서 관리합니다. Front-end 화면의 구현·빌드·배포는 `front-end/`에서 진행하며, Flutter Native 앱은 별도 위치에서 관리합니다. FO 웹(PC WEB·반응형 홈페이지)과 PO(파트너오피스)·OO(현장운영시스템)까지 이 폴더에 포함됩니다.

## 시작 위치

- 실제 애플리케이션: [`front-end`](./front-end/README.md)
- 팀 업무 지침: [업무 지침 안내](./docs/workflow/index.html) · [AI 작업 진입](./docs/workflow/AGENTS.md)
- 개발 가이드·업무 지침 목록: [`docs/index.html`](./docs/index.html) · [`docs/README.md`](./docs/README.md)
- AI 구현 지침: [`AGENTS.md`](./AGENTS.md)
- 문서 작성 지침: [`docs/AGENTS.md`](./docs/AGENTS.md)

모든 상세 HTML 가이드, AI 요약, 공통 소스 적용 기준과 문서 자산은 `docs/` 아래에서 관리합니다. Front-end 애플리케이션 소스와 설정은 `front-end/`에서 관리합니다. `docs/`에는 애플리케이션 소스를 넣지 않습니다.

## 빌드 범위

애플리케이션 Build와 배포는 `front-end/`의 각 앱에서 수행합니다. `front-end/webview/`에는 아직 package와 설정이 없으므로, 첫 착수 시 이 위치에 앱을 만든 뒤 Build를 추가합니다. `docs/`는 개발·검토용 문서이므로 제품 Bundle, 정적 자산과 배포 Artifact에 포함하지 않습니다. 문서 검색 데이터 생성과 링크 검사는 애플리케이션 Build와 분리해 문서 변경 검증으로만 실행합니다.

## 기준 구조

```text
.
├── AGENTS.md
├── README.md
├── front-end/                   # Front-end 소스 (WebView · FO 웹 · PO · OO)
│   ├── AGENTS.md
│   ├── README.md
│   └── webview/
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
    ├── guides/                  # 개발 방법·기준 참고
    ├── workflow/                # 실제 업무 절차·기록·AI 작업 지침
    ├── ai/
    └── common-source/
```
