# 아키텍처 다이어그램

> ⚠️ **TBD** — 이 다이어그램들은 인터페이스 설계서 v0.8.1 기반 **예상 시나리오**입니다.
> Backend 확인 및 기획 승인 전까지 참고용입니다.

## 파일 목록

| 파일 | 내용 | 상태 |
|------|------|------|
| `[TBD]_architecture-overview.md` | 전체 시스템 아키텍처 (앱, API, 외부 시스템) | TBD |
| `[TBD]_api-layers.md` | API 레이어별 통신 구조 및 인증 | TBD |
| `[TBD]_webview-bridge.md` | WebView ↔ Native(Bridge) 통신 흐름 | TBD |
| `[TBD]_frontend-internal.md` | Front-end(app-webview) 내부 구조 | TBD |

## Archify 활용

### 왜 쓰는가

| 구분 | Mermaid (현재) | Archify (향후) |
|------|---------------|----------------|
| 목적 | "이렇게 될 **계획**이야" 문서화 | "실제로 이렇게 **구현**됐다" 검증 |
| 근거 | 작성자의 지식/설계서 | **실제 코드 파일 분석** |
| 검증 | ❌ 없음 | ✅ 노드·연결이 코드에 실제로 존재하는지 타입드 검증 |
| 산출물 | Markdown 내 인라인 다이어그램 | 셀프컨테이널 HTML (브라우저에서 바로 열림) |
| 변경 추적 | 수동 | Architecture Delta (Before/After diff) |
| 사용 대상 | 개발/기획/리뷰 | 개발/운영/온보딩/외부 공유 |

**핵심 가치:** AI가 저장소를 읽어서 "이 컴포넌트가 실제로 존재하는가, 이 import가 실제로 있는가"를 기계적으로 검증한 뒤 다이어그램을 만들어 줍니다. 문서와 코드가 어긋나면 검증 단계에서 에러가 납니다.

### 현재 상태

| 항목 | 상태 |
|------|------|
| `apps/app-webview/` | 초기화 전 (코드 없음) |
| 다이어그램 | **초기 계획용** — 예상 시나리오 기반, 실제 코드 검증 불가 |
| Archify 적용 | ⏳ 코드 구현 후 (Phase 1~2 완료 시점) |

### 언제 적용하는가

| 시점 | Archify 용도 |
|------|-------------|
| Phase 1 완료 (UI 컴포넌트 + API adapter 구현 후) | 초기 아키텍처 맵 생성 + 검증 |
| Feature 추가/변경 시 | Delta 다이어그램 (무엇이 바뀌었는지) |
| 운영 이관 시 | 최종 아키텍처 HTML 산출물 전달 |
| 온보딩 시 | "저장소 아키텍처 맵 만들어줘" |

### 어떻게 쓰는가

```bash
# 설치 (AI IDE 사용자만, 한 번만)
npx skills add tt-a1i/archify -g
```

AI IDE (Cursor, Claude Code 등)에서:

```
"docs/diagrams/[TBD]_architecture-overview.md의 내용을 archify로
검증 가능한 아키텍처 다이어그램으로 만들어줘.
apps/app-webview 실제 코드 기준으로 확인하고,
코드에 없는 컴포넌트나 연결은 제외해줘."
```

**출력물:** 이 폴더에 `*.html` 파일로 저장. 별도 서버/호스팅 불필요, 브라우저로 열면 됩니다.

**빌드 관계 없음:** Archify는 프로젝트 내 패키지가 아닙니다. AI Agent Skill이고, 산출물은 정적 HTML 파일이라 `next build`에 포함되지 않습니다.