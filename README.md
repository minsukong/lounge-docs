# Lounge Front-end

WebView 기반 Front-end 애플리케이션의 구현 가이드·문서와 참고용 앱 골격을 한 저장소에서 관리합니다. 실제 WebView 애플리케이션의 소스·빌드·배포는 별도 저장소에서 진행하며, 이 저장소 `apps/webview/`는 참고 골격입니다.

## 시작 위치

- 실제 애플리케이션: [`apps/webview`](./apps/webview/README.md)
- 전체 가이드: [`docs/index.html`](./docs/index.html)
- 가이드 목록: [`docs/README.md`](./docs/README.md)
- AI 구현 지침: [`AGENTS.md`](./AGENTS.md)
- 문서 작성 지침: [`docs/AGENTS.md`](./docs/AGENTS.md)

모든 상세 HTML 가이드, AI 요약, 공통 소스 적용 기준과 문서 자산은 `docs/` 아래에서 관리합니다. 참고용 앱 골격은 `apps/webview/`에 두며, 실제 애플리케이션 소스와 설정은 별도 저장소에서 관리합니다. `docs/`에는 애플리케이션 소스를 넣지 않습니다.

## 빌드 범위

애플리케이션 Build와 배포는 별도 저장소의 실제 WebView 애플리케이션에서 수행합니다. `apps/webview/`는 참고 골격이며 `docs/`는 개발·검토용 문서이므로 제품 Bundle, 정적 자산과 배포 Artifact에 포함하지 않습니다. 문서 검색 데이터 생성과 링크 검사는 애플리케이션 Build와 분리해 문서 변경 검증으로만 실행합니다.

## 기준 구조

```text
.
├── AGENTS.md
├── README.md
├── apps/                        # 참고 골격 (실제 앱은 별도 저장소)
│   ├── mobile/                  # Flutter Native 앱
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
    ├── guides/
    ├── ai/
    └── common-source/
```
