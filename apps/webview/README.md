# app-webview

WebView에서 실행될 Front-end 애플리케이션의 위치입니다.

애플리케이션의 package, 설정과 source는 이 폴더에서 관리합니다. 구현할 때는 실제 설치 버전, 기존 source와 저장소 가이드를 확인하며, 존재하지 않는 API·인증·Bridge 계약이나 업무 화면을 추측하지 않습니다.

## 기본 영역

```text
app-webview/
├── AGENTS.md
├── README.md
├── .storybook/
└── src/
    ├── app/
    ├── components/ui/
    ├── features/
    ├── lib/
    └── test/
```
