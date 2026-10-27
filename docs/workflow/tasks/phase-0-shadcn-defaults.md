# TASK-P0-SHADCN-001 base-nova 기본 컴포넌트와 neutral 토큰

## 범위와 근거

- 상태: Done / Ready-UI. 2026-10-27 사용자가 코드 선반영과 이전 토큰·팔레트·CSS 삭제를 명시 승인했습니다. DEC-014에 연결합니다.
- 적용: 공식 base-nova 컴포넌트 10종과 neutral 의미 색상 31개, light·dark, radius 7단계. Button 크기는 24·28·32·36px로 복원하며 일괄 44px 보정을 제거합니다.
- 삭제: 기존 Figma 색상 원본·샘플 토큰, 원시 색상 생성기, lounge-* CSS·색상표 데이터와 전용 스타일. StatusPanel과 실제 검수용 폼·팝업 조합은 해당 기본 컴포넌트를 사용합니다.
- 단일 원본: tokens/shadcn/neutral.tokens.json. CSS·개발 참조 생성기는 front-end/scripts/sync-theme-tokens.mjs. Figma 변경·디자인 일치 검수·API·인증·Bridge는 범위 밖입니다.
- 현재 기본값은 디자인팀과 공유할 출발점이며 전체 Phase 0나 서비스 화면 완료가 아닙니다.

## 구조와 적용 기준

- 공통 UI와 토큰은 packages/ui, 상태는 기존 feature·검수 컴포넌트에서 유지합니다. 새 전역 Store나 wrapper를 만들지 않습니다.
- 공식 registry 응답을 검토한 뒤 import·Lucide·한국어 닫기 문구를 연결했습니다. Badge에는 client 경계를 명시했습니다. Textarea의 field-sizing은 지원 환경에서 일반 resize로 대체했습니다.
- 공식 OKLCH 값과 sRGB 대체값을 함께 생성합니다. 스크롤·Safe Area·reduced-motion과 구형 엔진의 핵심 정보 fallback만 공통 CSS에 남겼습니다. Safari 15의 픽셀 일치·실기기 검증은 별도입니다.
- Storybook 테마를 문서 root에 적용해 Portal로 열린 Dialog·Sheet에도 반영합니다. 제품 CSS는 Story·테스트·개발 색상표를 검색하지 않습니다.
- project·UI·토큰·접근성·Storybook·품질 요약, component-structure, build-boundary와 web/BUILD.md를 적용했습니다. 공식 컴포넌트 원형은 불필요하게 분리하지 않았고 직접 작성한 색상표·생성기·Story는 단일 책임으로 유지합니다.

## 검증과 다음 행동

- 토큰 생성·최신 검사 통과. 생성기 테스트 3개 통과: 공식 값·sRGB 대체, stale 감지·dark 독립 반영, 누락 모드·잘못된 alpha 거부.
- 두 workspace 타입·린트 통과. 공통 폼 2개와 Dialog·Sheet의 Escape/포커스 복귀 2개, 총 행동 테스트 4개 통과. web 앱 자체 테스트 파일은 없어 검증 완료로 표시하지 않음.
- Storybook 정적 빌드 통과, 31개 Story 수집. 기존 use client·sourcemap·큰 chunk 경고는 남음.
- 운영 빌드·런타임 패키징 통과. 운영 라우트는 홈·기본 404이며 단독 실행에서 홈·CSS 200, /preview 404, 개발 문서·Story·테스트·src/dev 파일 0건 확인.
- Chromium 브라우저: 버튼 높이 xs 24px·sm 28px·default 32px·lg 36px 실측, dark 테마의 Portal Dialog 배경과 Escape 후 trigger 포커스 복귀 확인. 의미 색상 31개 표시·dark 전환과 데스크톱 가로 넘침 없음, 320px Story 화면의 대표 배치 확인.
- 문서 링크·HTML 구조·변경분 인코딩·공백, 문서 검색 색인을 확인. IA는 예정된 수정 범위이므로 이번 작업에서 변경·재추출하지 않음.
- 미검증: Safari 15·실기기·스크린 리더·Figma 시각 일치. 기본화는 완료됐지만 이 결과를 전체 지원 환경이나 서비스 기능 완료로 확대하지 않음.
- 배포·commit·push는 수행하지 않습니다. Figma 파일은 수정하지 않았습니다.
