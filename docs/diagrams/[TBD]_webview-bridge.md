# [TBD] WebView ↔ Native (Bridge) 통신

> 예상 시나리오 기반. Bridge 계약은 Flutter 담당자와 Front-end가 합의해야 합니다.

## 통신 구조

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
flowchart TB
  accTitle: WebView와 Native 앱 간 Bridge 통신 구조 (예상)
  accDescr: Flutter Native 앱이 WebView를 로드하고 Bridge 채널을 제공합니다. WebView는 Bridge를 통해 기기 기능에 접근하고, API 서명 값을 얻습니다.
  
  subgraph NATIVE["Flutter Native 앱"]
    WV["WebView<br/>(WKWebView / Android WebView)"]
    BRIDGE["Bridge Manager<br/>(메서드 채널 등록)"]
    DEVICE["기기 기능<br/>- device_sn<br/>- 푸시 토큰<br/>- OS 권한<br/>- 생체 인증"]
    BRIDGE <--> DEVICE
    WV <--> BRIDGE
  end

  subgraph WEBVIEW["WebView Front-end (Next.js)"]
    ADAPTER["Bridge Adapter<br/>(src/lib/bridge/)"]
    APP["앱 화면/기능"]
    APP --> ADAPTER
  end

  WV -- "JS Injection / MessageHandler" --> ADAPTER
  </div>
  <figcaption>Native 앱이 WebView에 Bridge 전역 객체를 주입하고, WebView는 그 객체를 통해 Native 기능을 호출합니다.</figcaption>
</figure>

## Bridge 통신 시나리오 (예상)

<figure class="diagram-frame">
  <!-- prettier-ignore -->
  <div class="mermaid">
sequenceDiagram
  accTitle: Bridge 통신 시나리오
  accDescr: Web→Native 호출과 Native→Web 이벤트의 양방향 통신 흐름입니다.
  
  participant W as WebView (Front-end)
  participant B as Bridge Adapter
  participant N as Native (Flutter)
  participant D as 기기/OS
  
  Note over W,D: === Web → Native ===
  
  W->>B: bridge.call('getDeviceInfo')
  B->>N: JS → Native (messageHandler)
  N->>D: device_sn, pushToken 조회
  D-->>N: 값 반환
  N-->>B: JSON 응답
  B-->>W: { deviceSn: "xxx", pushToken: "yyy" }
  
  W->>B: bridge.call('openCamera', { purpose: "id_verify" })
  B->>N: 카메라 권한 요청
  N->>D: OS 권한 확인
  D-->>N: permission granted
  N-->>B: { permission: "granted" }
  B-->>W: 결과 전달
  
  Note over W,D: === Native → Web (이벤트) ===
  
  N->>B: emitEvent('appResumed')
  B->>W: window.dispatchEvent(new Event('app:resumed'))
  W->>W: 상태 갱신 (토큰 리프레시 등)
  
  N->>B: emitEvent('pushReceived', { title, body })
  B->>W: window.dispatchEvent(pushEvent)
  W->>W: 알림 UI 표시
  </div>
  <figcaption>Web→Native는 Bridge adapter를 통해, Native→Web은 이벤트 디스패치로 통신합니다.</figcaption>
</figure>

## Bridge 계약 (TBD)

> ⚠️ 아래 계약은 Flutter 담당자와 협의 후 확정해야 합니다.

| 항목 | 내용 | 상태 |
|------|------|------|
| **채널명/전역 객체명** | `window.NativeBridge`? `window.FlutterBridge`? | 🔴 TBD |
| **iOS 접근 방식** | `window.webkit.messageHandlers.{channel}.postMessage()` | 예상 |
| **Android 접근 방식** | `window.FlutterStandardMessageCodec`? Custom JS interface? | 🔴 TBD |
| **호출 방식** | Promise 기반 (async/await)? Callback? | 🔴 TBD |
| **이벤트 수신** | `window.addEventListener`? CustomEvent? | 🔴 TBD |
| **버전 호환** | Bridge API 버전 관리 방식 | 🔴 TBD |
| **에러 처리** | Native 미응답 타임아웃, 잘못된 파라미터 | 🔴 TBD |

## Front-end Bridge Adapter 구조 (예상)

```
src/lib/bridge/
├── types.ts           # BridgeRequest, BridgeResponse, BridgeEvent 타입
├── adapter.ts         # 환경 감지 + 전역 객체 접근 추상화
├── detect.ts          # WebView 환경 vs 브라우저 감지
└── index.ts           # export
```

```typescript
// adapter.ts (예상 구조)
class BridgeAdapter {
  private isWebView: boolean;
  
  async call<T>(method: string, params?: object): Promise<T> {
    if (!this.isWebView) {
      throw new BridgeError("NOT_IN_WEBVIEW");
    }
    // iOS: window.webkit.messageHandlers[method].postMessage(...)
    // Android: window.FlutterBridge?.[method](...)
  }
  
  on(event: string, handler: (data: unknown) => void): () => void {
    // window.addEventListener(`bridge:${event}`, handler)
  }
}
```

## 테스트 시나리오

| 시나리오 | 확인 사항 |
|----------|-----------|
| WebView 환경에서 Bridge 호출 | 정상 왕복 (request → response) |
| 브라우저에서 Bridge 호출 | `NOT_IN_WEBVIEW` 에러 + graceful fallback |
| Native 미응답 | 타임아웃 후 에러 처리 |
| 잘못된 파라미터 | 에러 코드 반환 |
| Native → Web 이벤트 | 이벤트 수신 후 상태 갱신 |
| 앱 background → foreground | `appResumed` 이벤트 수신 |
| 토큰 만료 시 | Bridge를 통한 새 토큰 획득 |

## TBD 요약

| 항목 | 필요 결정 | 담당 |
|------|-----------|------|
| 전역 객체명/채널명 | iOS·Android 각각 | Flutter + Front-end |
| 호출 API 형식 | Promise / Callback | Flutter + Front-end |
| 이벤트 API 형식 | CustomEvent / 직접 호출 | Flutter + Front-end |
| 서명 값 전달 | device_sn, secret을 Bridge로 받는 방식 | Flutter + Front-end + Backend |
| 버전 호환 정책 | Bridge API 버전 관리 | Flutter + Front-end |