# Lounge Front-end

Front-end 개발 가이드·팀 업무 지침과 참고용 골격을 한 저장소에서 관리합니다. 실제 Front-end 소스·빌드·배포는 별도 저장소에서 진행하며, 이 저장소 `front-end/`는 참고 골격입니다. 향후 반응형 웹(브랜딩 사이트, 결제, 회원)까지 이 폴더에 포함됩니다.

## 시작 위치

- 실제 애플리케이션: [`front-end`](./front-end/README.md)
- 팀 업무 지침: [업무 지침 안내](./docs/workflow/index.html) · [AI 작업 진입](./docs/workflow/AGENTS.md)
- 개발 가이드·업무 지침 목록: [`docs/index.html`](./docs/index.html) · [`docs/README.md`](./docs/README.md)
- AI 구현 지침: [`AGENTS.md`](./AGENTS.md)
- 문서 작성 지침: [`docs/AGENTS.md`](./docs/AGENTS.md)

모든 상세 HTML 가이드, AI 요약, 공통 소스 적용 기준과 문서 자산은 `docs/` 아래에서 관리합니다. 참고용 Front-end 골격은 `front-end/`에 두며, 실제 애플리케이션 소스와 설정은 별도 저장소에서 관리합니다. `docs/`에는 애플리케이션 소스를 넣지 않습니다.

## 빌드 범위

애플리케이션 Build와 배포는 별도 저장소의 실제 Front-end 애플리케이션에서 수행합니다. `front-end/`는 참고 골격이며 `docs/`는 개발·검토용 문서이므로 제품 Bundle, 정적 자산과 배포 Artifact에 포함하지 않습니다. 문서 검색 데이터 생성과 링크 검사는 애플리케이션 Build와 분리해 문서 변경 검증으로만 실행합니다.

## 기준 구조

```text
.
├── AGENTS.md
├── README.md
├── front-end/                   # Front-end 참고 골격 (실제 소스는 별도 저장소)
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
