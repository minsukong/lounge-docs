# webview

Flutter 앱에서 WebView로 실행되는 웹 화면의 소스를 두는 폴더입니다.

이 폴더의 package, 설정과 source를 여기서 관리합니다. 아직 package와 설정이 생성되지 않았으므로, 첫 착수 시 아래 구조에 앱을 만든 뒤 구현을 시작합니다. 구현 기준을 확인할 때는 실제 설치 버전과 기존 source를 우선하며, 존재하지 않는 API·인증·Bridge 계약이나 업무 화면은 추측하지 않습니다. Flutter Native 앱은 별도 위치에서 관리합니다.

## 기본 영역

```text
webview/
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
