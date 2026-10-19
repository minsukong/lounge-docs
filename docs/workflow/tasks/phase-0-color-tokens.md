# TASK-P0-COLOR-001: Figma 색상 export와 공통 CSS 연결

## 범위와 상태

- Phase 0 / Shared / Ready-UI / In Progress
- 사용자 지정 순서: 디자인 토큰·CSS부터 진행하며 서비스 셸·인증·API·통합 검수 등 후속 2~5번 작업은 이후 진행합니다.
- 근거: 사용자가 제공한 light.tokens.json·dark.tokens.json. 현재 두 파일의 표시 색상은 같으며 dark는 디자이너가 이후 변경합니다. 임의의 dark 색상은 만들지 않습니다.
- 이번 허용 범위: 원시 색상 팔레트 27개·투명도·테마 구분, 공통 CSS 변수·Tailwind 연결과 개발 색상표 갱신.
- 현재 필요한 입력: 버튼·본문·배경 등 의미 토큰 연결 근거. 제공된 파일에는 원시 색상만 있으므로 의미 토큰 적용과 디자인 전체 완료는 대기합니다. 폰트·간격·라운드도 이번 export에 없습니다.

## 원본과 생성 경로

- [light 원본](../../../tokens/figma/color/light.tokens.json)·[dark 원본](../../../tokens/figma/color/dark.tokens.json)은 받은 파일의 바이트를 그대로 보존합니다. 기존 tokens/tokens.json은 변경하지 않습니다.
- [변환 스크립트](../../../front-end/scripts/sync-color-tokens.mjs): front-end/에서 npm run tokens:colors. 원본을 재수정하지 않고 CSS·개발 색상표만 생성합니다. --check는 파생 파일의 최신 여부를 쓰기 없이 검사합니다.
- [공통 색상 CSS](../../../front-end/packages/ui/src/color-tokens.css): :root·.dark별 원시 변수와 Tailwind 색상 연결. [공통 스타일](../../../front-end/packages/ui/src/styles.css)에서 가져오며 두 앱과 Storybook이 사용합니다.
- [색상표 Story](../../../front-end/packages/ui/src/dev/colors/color-palette.stories.tsx): 이전 스냅샷의 Gray 400·Blue 500·Blue 600을 최신 export 값으로 바꾸고 Dim 투명도와 테마별 값 표시를 연결합니다.
- CSS에서는 sRGB 8비트 색상과 alpha를 유지합니다. 일부 원본 RGB 소수점 정밀도 차이는 있으며, 원본 파일은 보존합니다.

## 적용 기준과 완료 조건

- [토큰 기준](../../ai/design-tokens.md): 원본과 생성물을 구분하고 의미 토큰을 추측하지 않습니다.
- [UI 기준](../../ai/ui.md)·[Storybook 기준](../../ai/storybook.md): 기존 공통 CSS와 색상표를 재사용하고 개발 전용 데이터가 제품 import로 연결되지 않게 합니다.
- [품질 기준](../../ai/quality.md): 생성 일치·타입·린트·관련 테스트·Storybook 및 두 앱 빌드에서 이번 변경의 영향을 확인합니다. Figma 화면과의 시각적 일치 검수는 실제 디자인을 확인한 뒤 진행합니다.
- 이번 결과만으로 디자인 토큰·CSS 전체 완료나 Phase 0 전체 완료를 표시하지 않습니다.

## 검증과 재개

- 원본 보존·파생 파일 일치: Pass. 두 export를 바이트 그대로 보존했고 27개 원시 CSS 변수·sRGB 색상·Dim alpha를 대조했습니다.
- 변환 동작: Pass. 격리한 임시 자료에서 dark만 변경할 때 light 유지, 잘못된 alpha의 출력 전 거부, --check의 파생 파일 변경 감지를 확인했습니다.
- 타입·린트: Pass — 세 workspace.
- 관련 행동 테스트: Pass — 공통 폼 2개. WebView·홈페이지는 테스트 파일 없음으로 종료했으며 화면 테스트 통과로 해석하지 않습니다.
- Storybook 정적 빌드: Pass. 기존 use client·sourcemap·chunk 경고는 남아 있습니다.
- 두 앱 운영 빌드·패키징: Pass — 운영 라우트는 홈·기본 404.
- 브라우저 표시: Pass — 전체 색상표·브랜드 Story, light·dark 각각의 32개 스와치(회색 조합 중복 포함) 렌더링 값 동일, Dim 60%·Toast 80% 확인. 원본 Figma 화면과의 시각적 일치·모바일·실기기 검증은 미실행.
- 의미 토큰·폰트·간격·라운드: 필요한 원본·매핑 입력 대기
- 다음 행동: 현재 색상 적용 검증 후, 용도별 토큰 근거를 확인해 실제 UI의 의미 변수에 연결합니다.
