# 반응형 웹 브라우저 지원 가이드

## 1. 문서 목적과 적용 범위

이 문서는 회사 웹사이트의 PC, 태블릿, 모바일 브라우저 최소 지원 기준과 그 근거를 정리합니다.

브라우저 지원은 화면 크기가 아니라 렌더링 엔진과 브라우저 버전을 기준으로 판단합니다. PC, 태블릿, 모바일 구분은 필수 검증 환경을 정하는 데 사용합니다.

결제, 제휴카드, 인증과 외부 앱 연결의 기능별 정책은 이 문서의 범위에 포함하지 않습니다.

## 2. 기본 지원 원칙

- Tailwind CSS v4를 사용하므로 공식 핵심 호환 기준보다 낮은 브라우저는 지원하지 않습니다.
- Chromium 계열의 기술 하한은 Chromium 111입니다.
- Safari와 iOS·iPadOS WebKit의 기술 하한은 Safari 16.4입니다.
- Firefox의 기술 하한은 Firefox 128입니다.
- 같은 Chromium 계열이어도 브라우저별 수정과 엔진 반영 시점이 다를 수 있으므로 주요 브라우저는 각각 확인합니다.
- 최소 버전에서 레이아웃과 핵심 기능을 검증하고, 최신 안정 버전에서도 회귀를 확인합니다.
- Internet Explorer는 지원하지 않습니다.

### 자동 업데이트를 고려한 기준

Chrome, Edge와 Firefox 같은 현대 브라우저는 기본적으로 백그라운드에서 새 버전을 확인하고 자동 업데이트합니다. 모바일의 Chrome, Samsung Internet 등도 일반적으로 앱 스토어의 자동 업데이트 설정을 따릅니다. Safari는 브라우저만 독립적으로 갱신하기보다 macOS, iOS와 iPadOS의 시스템 업데이트를 통해 함께 갱신됩니다.

따라서 2023년에 출시된 Chrome 111과 Safari 16.4를 기술 하한으로 두는 것은 일반 사용자 환경에서 과도하게 높은 기준이 아닙니다. 다만 자동 업데이트가 모든 사용자의 최신 버전을 보장하지는 않습니다. 브라우저를 오랫동안 재시작하지 않은 경우, 기기의 저장 공간이나 네트워크가 부족한 경우, 구형 OS가 최신 브라우저를 지원하지 않는 경우와 회사·학교 관리 정책으로 버전이 고정된 경우에는 업데이트가 지연되거나 중단될 수 있습니다.

자동 업데이트는 최소 버전을 선택하는 현실성의 근거로 사용하되, 최소 버전 검증과 운영 사용자 버전 확인을 생략하는 근거로 사용하지 않습니다. Chrome의 기본 자동 업데이트와 재실행 후 적용 방식은 [Google Chrome 업데이트 안내](https://support.google.com/chrome/answer/95414)에서, 기업 관리 환경의 업데이트 중지·버전 고정 가능성은 [Chrome Enterprise 업데이트 관리](https://support.google.com/chrome/a/answer/6350036)에서 확인합니다. Edge의 자동 업데이트와 기업용 장기 주기는 [Microsoft Edge 채널 안내](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-channels), Safari 갱신 방식은 [Apple Safari 업데이트 안내](https://support.apple.com/102665)를 참고합니다.

Tailwind CSS v4는 핵심 기능에 `@property`, `color-mix()` 등 최신 CSS 기능을 사용합니다. 선택적인 최신 Utility를 사용하지 않는 것만으로 핵심 최소 버전을 낮출 수 없습니다. 더 낮은 브라우저 지원이 필요하면 Tailwind CSS 3.4 유지 또는 기술 구성 변경을 별도로 검토합니다.

근거: [Tailwind CSS 공식 호환성 문서](https://tailwindcss.com/docs/compatibility), [Tailwind CSS v4 업그레이드 가이드](https://tailwindcss.com/docs/upgrade-guide)

## 3. 최소 지원 버전

### PC

| 운영체제 | 브라우저 | 최소 버전 | 적용 기준 |
| --- | --- | ---: | --- |
| Windows | Chrome | 111 이상 | Tailwind CSS v4의 Chromium 하한 |
| Windows | Edge | 111 이상 | Chromium 111 계열 이상 |
| Windows | Firefox | 128 이상 | Tailwind CSS v4의 Firefox 하한 |
| macOS | Safari | 16.4 이상 | Tailwind CSS v4의 WebKit 하한 |
| macOS | Chrome | 111 이상 | Tailwind CSS v4의 Chromium 하한 |
| macOS | Edge | 111 이상 | Chromium 111 계열 이상 |
| macOS | Firefox | 128 이상 | Tailwind CSS v4의 Firefox 하한 |

한국에서 비중이 있는 Whale과 중국의 360 Safe, UC, QQ 등 Chromium 계열 브라우저는 제품 버전 숫자 대신 **Chromium 111 이상 엔진을 탑재한 최신 안정 버전**을 호환 대상으로 둡니다. 제품 버전과 Chromium 엔진 버전의 대응이 일정하지 않으므로 이 브라우저들을 Chrome과 동일하다고 간주하지 않습니다.

### 태블릿

| 운영체제 | 브라우저 | 최소 버전 | 적용 기준 |
| --- | --- | ---: | --- |
| iPadOS | Safari | 16.4 이상 | Safari 16.4와 iPadOS 16.4가 함께 제공됨 |
| Android | Chrome | 111 이상 | Tailwind CSS v4의 Chromium 하한 |
| Android | Samsung Internet | 23 이상 | Chromium 115 기반으로 Chromium 111 하한 충족 |
| Android | Edge | 111 이상 | Chromium 111 계열 이상 |
| Android | Firefox | 128 이상 | Tailwind CSS v4의 Firefox 하한 |

### 모바일

| 운영체제 | 브라우저 | 최소 버전 | 적용 기준 |
| --- | --- | ---: | --- |
| iOS | Safari | 16.4 이상 | Tailwind CSS v4의 WebKit 하한 |
| Android | Chrome | 111 이상 | Tailwind CSS v4의 Chromium 하한 |
| Android | Samsung Internet | 23 이상 | Chromium 115 기반으로 Chromium 111 하한 충족 |
| Android | Edge | 111 이상 | Chromium 111 계열 이상 |
| Android | Firefox | 128 이상 | Tailwind CSS v4의 Firefox 하한 |

iOS와 iPadOS의 Chrome, Edge, Firefox 등 Safari 이외의 브라우저는 브라우저 이름과 별개로 해당 OS의 WebKit 영향을 받습니다. 따라서 iOS·iPadOS 16.4 이상에서 각 브라우저의 최신 안정 버전을 확인합니다.

Samsung Internet 23의 Chromium 115 기반 정보는 [Samsung Internet 개발팀 안내](https://medium.com/samsung-internet-dev/samsung-internet-v23-0-stable-coming-with-enhanced-security-and-convenience-1839a1af5dd3)와 [Samsung Developer User-Agent 안내](https://developer.samsung.com/internet/user-agent-string-format.html)를 근거로 합니다. Safari 16.4와 iOS·iPadOS 16.4의 관계는 [Apple Safari 16.4 릴리스 노트](https://developer.apple.com/documentation/safari-release-notes/safari-16_4-release-notes)에서 확인합니다.

## 4. 반응형 화면 너비 기준

반응형 구분은 기기의 물리 해상도나 제품 이름이 아니라 브라우저의 **CSS pixel 기준 viewport 너비**로 판단합니다. 고해상도 기기도 Device Pixel Ratio에 따라 CSS viewport가 작게 계산될 수 있으므로 하드웨어 해상도를 breakpoint로 사용하지 않습니다.

| 구분 | Viewport 너비 | Tailwind CSS v4 기준 | 대표 검증 너비 |
| --- | --- | --- | --- |
| Mobile | 320~767px | 기본 구간, `sm` 640px 포함 | 320, 360, 390, 430px |
| Tablet | 768~1023px | `md` 768px 이상 | 768, 820px |
| PC | 1024px 이상 | `lg` 1024px 이상 | 1024, 1280, 1440, 1920px |

`sm`, `md`, `lg`는 특정 기기 이름이 아니라 최소 너비 조건입니다. 1024px 너비의 태블릿 가로 화면에는 PC 구간의 레이아웃이 적용될 수 있으며, 브라우저 창을 좁힌 PC에는 Tablet 또는 Mobile 구간이 적용될 수 있습니다.

화면 구간 도식은 Mobile에서 Tablet, PC로 전환되는 흐름과 768px·1024px 경계값을 보여줍니다. 각 노드의 실제 표시 크기는 viewport 너비 비율을 의미하지 않습니다.

### 경계값 검증

- Mobile과 Tablet 전환은 767px과 768px을 함께 확인합니다.
- Tablet과 PC 전환은 1023px과 1024px을 함께 확인합니다.
- 320px 미만은 정식 레이아웃 기준에 포함하지 않지만, 핵심 콘텐츠가 잘리거나 조작 불가능해지지 않는지 확인합니다.
- 1920px보다 넓은 화면에서는 콘텐츠 최대 너비, 여백과 긴 행 길이를 확인합니다.
- 세로·가로 전환, 브라우저 확대, OS 글자 크기 변경에서도 가로 스크롤과 UI 겹침을 확인합니다.

Tailwind CSS v4의 기본 breakpoint는 [Tailwind CSS 반응형 디자인 문서](https://tailwindcss.com/docs/responsive-design)를 기준으로 합니다. 프로젝트에서 breakpoint를 변경하면 디자인 토큰, Figma와 이 문서의 구간을 함께 변경합니다.

## 5. 점유율을 근거로 한 브라우저 선정

아래 수치는 StatCounter의 2026년 7월 PC·모바일·태블릿 통합 웹 사용량 기준입니다. 설치 대수나 당사 고객 수가 아니며, 각 국가에서 우선 검증할 브라우저 제품군을 정하는 보조 근거로 사용합니다.

| 지역 | 주요 브라우저 점유율 | 표에 표시한 제품군 합계 | 근거 |
| --- | --- | ---: | --- |
| 한국 | Chrome 57.99%, Safari 11.76%, Samsung Internet 10.40%, Edge 8.99%, Whale 8.37%, Firefox 0.83% | 98.34% | [StatCounter 한국](https://gs.statcounter.com/browser-market-share/desktop-mobile-tablet/south-korea) |
| 중국 | Chrome 51.59%, Edge 16.35%, Safari 14.44%, 360 Safe 4.88%, UC 4.85%, QQ 3.69% | 95.80% | [StatCounter 중국](https://gs.statcounter.com/browser-market-share/desktop-mobile-tablet/china) |
| 일본 | Chrome 55.96%, Safari 23.21%, Edge 14.42%, Firefox 2.84%, Brave 1.12%, Samsung Internet 0.70% | 98.25% | [StatCounter 일본](https://gs.statcounter.com/browser-market-share/desktop-mobile-tablet/japan) |
| 미국 | Chrome 51.55%, Safari 29.83%, Edge 7.14%, Firefox 6.78%, Samsung Internet 1.69%, Brave 1.10% | 98.09% | [StatCounter 미국](https://gs.statcounter.com/browser-market-share/desktop-mobile-tablet/united-states-of-america/) |
| 전 세계 | Chrome 68.25%, Safari 16.48%, Edge 5.34%, Firefox 3.34%, Samsung Internet 2.06%, Opera 1.88% | 97.35% | [StatCounter 전 세계](https://gs.statcounter.com/browser-market-share/desktop-mobile-tablet/worldwide) |

이 점유율은 Chrome, Safari, Edge 등 **브라우저 제품군의 비중**입니다. Chrome 111 이상 또는 Safari 16.4 이상 사용자의 정확한 비율을 뜻하지 않습니다. 공개된 상위 버전 목록 일부만 합산해 최소 버전 지원률로 표현하지 않습니다.

한국은 Chromium 계열뿐 아니라 Safari, Samsung Internet과 Whale을 포함해야 주요 사용 환경을 대부분 확인할 수 있습니다. 일본과 미국은 Safari 비중이 높아 macOS, iPhone, iPad의 Safari 검증을 Chromium 검증으로 대체할 수 없습니다. 중국은 360 Safe, UC, QQ의 비중을 고려해 최신 안정 버전의 별도 호환 확인이 필요합니다.

## 6. 기기 구분별 필수 검증 환경

| 구분 | 최소 버전 검증 | 최신 버전 검증 | 국가별 추가 검증 |
| --- | --- | --- | --- |
| PC | Chrome 111, Edge 111, Firefox 128, Safari 16.4 | 각 브라우저 최신 안정 버전 | 한국 Whale, 중국 360 Safe·UC·QQ 최신 안정 버전 |
| 태블릿 | iPadOS Safari 16.4, Android Chrome 111, Samsung Internet 23 | iPadOS·Android 주요 브라우저 최신 안정 버전 | 주요 서비스 국가에서 비중이 높은 실제 태블릿 1종 이상 |
| 모바일 | iOS Safari 16.4, Android Chrome 111, Samsung Internet 23 | iOS·Android 주요 브라우저 최신 안정 버전 | 한국·중국·일본·미국의 주요 실제 단말 |

반응형 검증은 브라우저 최소 버전 검증과 별개로 수행합니다. 프로젝트가 확정한 breakpoint의 경계값 전후, 세로·가로 화면, 확대와 글자 크기 변화에서 레이아웃을 확인합니다. 기기 이름만으로 Desktop, Tablet, Mobile 레이아웃을 고정하지 않습니다.

## 7. 지원과 호환 확인의 구분

- **정식 지원:** 위 최소 버전 이상이며 출시 전 필수 검증 환경에 포함합니다. 문제 발생 시 수정 대상입니다.
- **호환 확인:** 점유율은 있으나 엔진 버전 대응이 불명확한 Whale, 360 Safe, UC, QQ 등의 최신 안정 버전입니다. 주요 흐름을 확인하되 제품별 모든 버전을 보장하지 않습니다.
- **미지원:** 최소 버전보다 낮은 브라우저와 Internet Explorer입니다. 정상 동작을 보장하지 않으며 심각한 오류가 발생하지 않도록 업데이트 안내를 제공합니다.

## 8. 근거 갱신

- 출시 전에는 StatCounter의 최근 3개월 추세와 실제 기기 검증 결과를 함께 확인합니다.
- 출시 후에는 당사 서비스의 국가·기기·브라우저·브라우저 버전별 활성 사용자 비율을 우선 근거로 사용합니다.
- 자동 업데이트를 전제로 사용자 버전을 추정하지 않고 실제 운영 데이터에서 최소 버전 미만 사용자를 확인합니다.
- 최소 버전 미만 사용자 비율, 오류율과 고객 문의를 확인해 지원 기준을 조정합니다.
- 점유율 자료에는 출처와 기준 월을 기록하고 분기마다 다시 확인합니다.
- 브라우저 최소 버전을 변경할 때는 Tailwind CSS와 실제 사용 Web API의 호환성, 주요 국가의 사용자 비율을 함께 검토합니다.

## 9. 우선 확정 항목

- 브라우저 최소 버전 미만 사용자를 허용할 비율
- 국가별 실제 검증 기기와 브라우저 목록
- Whale, 360 Safe, UC, QQ를 정식 지원 또는 호환 확인 중 어디까지 둘지
- 브라우저 업데이트 안내 방식
- 운영 데이터 기준의 재검토 주기와 승인 담당자
