# Zustand UI 상태 관리 가이드 초안

> Draft · Version 0.1 · 2026-08-06

## 1. 문서 목적

이 문서는 여러 UI 영역에서 공유하는 클라이언트 상태를 Zustand로 간결하게 관리하는 기준을 제공합니다. Zustand를 모든 상태의 기본 도구로 사용하지 않고, React 지역 상태만으로 관리하기 어려운 UI 상태에 선택적으로 사용합니다.

서버 상태는 TanStack Query, 폼 입력과 제출 상태는 React Hook Form, 주소로 공유하거나 복원할 상태는 URL을 우선 검토합니다.

## 2. Zustand 사용 기준

상태 도구보다 상태의 소유자와 수명을 먼저 판단합니다.

| 상태 | 기본 선택 |
| --- | --- |
| 한 컴포넌트 또는 가까운 트리의 UI 상태 | React 지역 상태 |
| 주소로 공유·복원할 상태 | URL 상태 검토 |
| 폼 입력과 제출 상태 | React Hook Form |
| 서버에서 조회·변경하는 데이터 | TanStack Query |
| 서로 떨어진 여러 UI가 공유하는 클라이언트 상태 | Zustand |

Zustand 사용을 검토할 수 있는 예시는 다음과 같습니다.

- Header와 Sidebar가 공유하는 메뉴 열림 상태
- 서로 떨어진 컴포넌트가 제어하는 공통 Dialog 상태
- 여러 UI 영역이 함께 사용하는 일시적인 화면 모드

다음 상태는 Zustand에 저장하지 않습니다.

- TanStack Query가 관리하는 서버 데이터와 요청 상태
- React Hook Form이 관리하는 폼 값과 필드 오류
- URL로 공유하거나 복원해야 하는 검색·필터 조건
- 한 컴포넌트 안에서 끝나는 Toggle과 Dialog 상태
- 기존 상태에서 계산할 수 있는 파생 값

## 3. 핵심 원칙

1. React 지역 상태로 해결되지 않을 때 Store를 만듭니다.
2. Store는 UI 책임과 수명이 같은 상태만 포함합니다.
3. 컴포넌트는 필요한 상태와 Action만 Selector로 구독합니다.
4. 상태 변경은 의미가 드러나는 Action으로 표현합니다.
5. 서버 상태와 폼 상태를 Zustand에 복제하지 않습니다.
6. 사용자 전환이나 화면 종료 시 남으면 안 되는 상태는 초기화합니다.
7. Persist와 Middleware는 실제 요구가 확인된 후 추가합니다.

## 4. Store 작성

`EXAMPLE`: 아래 Store는 Header와 Sidebar가 공유하는 Navigation UI 상태 예시입니다.

```ts
"use client";

import { create } from "zustand";

type NavigationUiState = {
  isMobileMenuOpen: boolean;
};

type NavigationUiActions = {
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  resetNavigationUi: () => void;
};

type NavigationUiStore = NavigationUiState & NavigationUiActions;

const initialState: NavigationUiState = {
  isMobileMenuOpen: false,
};

export const useNavigationUiStore = create<NavigationUiStore>()((set) => ({
  ...initialState,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  resetNavigationUi: () => set(initialState),
}));
```

이 예시는 요청별 데이터를 포함하지 않는 Client UI Store를 가정합니다. Next.js의 최종 Store 생성 범위는 8장의 `TBD` 기준을 따릅니다.

Action은 `setOpen(value)`처럼 구현 세부사항만 드러내기보다 `openMobileMenu`, `closeMobileMenu`처럼 사용자 동작과 의도를 표현합니다.

## 5. React에서 Store 사용

### 5.1 필요한 값만 구독

컴포넌트는 Store 전체가 아니라 사용하는 값만 구독합니다.

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { useNavigationUiStore } from "./navigation-ui.store";

export function MobileMenuButton() {
  const isOpen = useNavigationUiStore((state) => state.isMobileMenuOpen);
  const toggleMenu = useNavigationUiStore((state) => state.toggleMobileMenu);

  return (
    <Button
      type="button"
      variant="outline"
      aria-expanded={isOpen}
      onClick={toggleMenu}
    >
      메뉴
    </Button>
  );
}
```

```tsx
// 피해야 함: Store의 모든 변경을 구독함
const store = useNavigationUiStore();
```

### 5.2 여러 값을 함께 선택

여러 값을 객체로 묶어 선택해야 할 때는 실제 렌더링 문제가 있는 경우 `useShallow`를 사용합니다.

```tsx
import { useShallow } from "zustand/react/shallow";

const { isOpen, closeMenu } = useNavigationUiStore(
  useShallow((state) => ({
    isOpen: state.isMobileMenuOpen,
    closeMenu: state.closeMobileMenu,
  })),
);
```

값을 하나씩 선택하는 코드가 충분히 명확하면 `useShallow`를 미리 적용하지 않습니다.

### 5.3 파생 값은 Selector에서 계산

기존 상태에서 계산할 수 있는 값은 Store에 중복 저장하지 않습니다.

```ts
const isNavigationVisible = useNavigationUiStore(
  (state) => state.isMobileMenuOpen,
);
```

```ts
// 피해야 함: 같은 의미를 가진 값을 함께 저장함
type NavigationUiState = {
  isMobileMenuOpen: boolean;
  isNavigationVisible: boolean;
};
```

## 6. shadcn/ui와 함께 사용

Dialog가 한 컴포넌트 안에서 열리고 닫히면 React 지역 상태를 사용합니다. 서로 떨어진 여러 컴포넌트가 같은 Dialog를 열거나 닫아야 할 때만 Zustand를 검토합니다.

`EXAMPLE`: 여러 화면 요소가 공유하는 Dialog 상태입니다.

```ts
import { create } from "zustand";

type DialogName = "ticket-detail" | "reservation-cancel";

type OverlayStore = {
  activeDialog: DialogName | null;
  openDialog: (dialog: DialogName) => void;
  closeDialog: () => void;
};

export const useOverlayStore = create<OverlayStore>()((set) => ({
  activeDialog: null,
  openDialog: (activeDialog) => set({ activeDialog }),
  closeDialog: () => set({ activeDialog: null }),
}));
```

Dialog를 여는 컴포넌트는 Action만 구독합니다.

```tsx
import { Button } from "@/components/ui/button";
import { useOverlayStore } from "./overlay.store";

export function TicketDetailButton() {
  const openDialog = useOverlayStore((state) => state.openDialog);

  return (
    <Button onClick={() => openDialog("ticket-detail")}>
      이용권 상세
    </Button>
  );
}
```

Dialog 컴포넌트는 자신의 열림 상태와 닫기 Action만 구독합니다.

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useOverlayStore } from "./overlay.store";

export function TicketDetailDialog() {
  const isOpen = useOverlayStore(
    (state) => state.activeDialog === "ticket-detail",
  );
  const closeDialog = useOverlayStore((state) => state.closeDialog);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeDialog();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>이용권 상세</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

shadcn/ui의 Focus, Keyboard와 ARIA 동작은 유지하고, Zustand는 `open` 상태와 Action의 공유에만 사용합니다.

## 7. Store 분리와 초기화

- 모든 UI 상태를 하나의 거대한 Store에 넣지 않습니다.
- Store 이름은 `useNavigationUiStore`, `useOverlayStore`처럼 책임을 드러냅니다.
- 상태의 사용처와 수명이 같을 때만 같은 Store에 둡니다.
- 사용처가 생기기 전에 Store 파일이나 폴더를 미리 만들지 않습니다.
- 로그아웃, 사용자 전환 또는 기능 종료 시 남으면 안 되는 상태는 Reset Action으로 초기화합니다.

`TBD`: Store의 최종 분리 단위와 파일 배치는 실제 UI 구조와 공유 상태가 확인된 후 결정합니다.

## 8. Next.js App Router 기준

- Zustand Store를 사용하는 컴포넌트는 Client Component로 작성합니다.
- React Server Component에서 Store를 읽거나 수정하지 않습니다.
- 초기 상태는 서버와 클라이언트에서 다르게 계산하지 않습니다.
- 요청 또는 사용자별 데이터를 전역 Module Store에 저장하지 않습니다.

`TBD`: App Router에서 Store를 Module Hook으로 사용할 범위와 요청별 Provider를 적용할 범위는 SSR·Hydration 및 Layout 경계가 확정된 후 결정합니다.

## 9. Persist 사용

UI 상태는 새로고침 시 초기화되는 것을 기본으로 합니다. 단순한 메뉴·Dialog·Toast 상태를 Persist하지 않습니다.

- 인증 토큰, 결제 정보와 개인정보를 Persist Store에 저장하지 않습니다.
- Persist가 필요하면 저장할 필드만 선택합니다.
- 저장 구조가 변경될 가능성이 있으면 Version과 Migration을 함께 검토합니다.
- Hydration 전후의 화면 차이로 인한 UI 깜빡임과 오류를 확인합니다.

`TBD`: Persist 허용 대상, Storage, Key 이름, Version, Migration과 Hydration 처리 기준은 실제 유지 요구가 확인된 후 결정합니다.

## 10. 피해야 할 패턴

```ts
// 서버 데이터를 Zustand에 복제
const useTicketStore = create(() => ({
  tickets: [],
  isLoading: false,
}));
```

```ts
// 모든 UI 상태를 하나의 Store에 추가
type GlobalUiStore = {
  menuOpen: boolean;
  dialogOpen: boolean;
  formValues: Record<string, unknown>;
  tickets: unknown[];
};
```

```tsx
// 컴포넌트가 Store 전체를 구독
const state = useOverlayStore();
```

다음 패턴도 피합니다.

- Store 외부에서 `setState`를 반복 호출해 상태 변경 경로를 숨기는 방식
- 단순 상태에 Slice, Middleware와 Selector Factory를 미리 추가하는 방식
- 모든 Store에 Persist와 Devtools를 일괄 적용하는 방식
- UI 상태를 URL, Query Cache 또는 Form 상태와 양방향으로 중복 동기화하는 방식

## 11. 코드 리뷰 체크리스트

- React 지역 상태로 충분한데 Zustand를 사용하지 않았는가?
- 서버·폼·URL 상태를 Store에 복제하지 않았는가?
- 컴포넌트가 필요한 값과 Action만 Selector로 구독하는가?
- 상태 변경 Action의 이름이 의도를 표현하는가?
- 기존 상태에서 계산할 수 있는 값을 중복 저장하지 않았는가?
- 하나의 Store에 변경 이유가 다른 상태가 섞이지 않았는가?
- 사용자 전환이나 기능 종료 시 필요한 상태를 초기화하는가?
- Persist가 실제 요구보다 넓게 적용되지 않았는가?
- shadcn/ui의 접근성과 기본 동작을 유지하는가?

## 12. 추후 확정 항목

- `TBD`: Store 분리 단위와 파일명 Convention
- `TBD`: App Router의 Provider 및 요청별 Store 적용 범위
- `TBD`: Persist 허용 대상과 Hydration 처리 방식
- `TBD`: Devtools 적용 환경과 Middleware 사용 기준
- `TBD`: Selector 공통화와 테스트 범위

## 참고 문서

- [Zustand 공식 소개](https://zustand.docs.pmnd.rs/learn/getting-started/introduction)
- [Zustand TypeScript 가이드](https://zustand.docs.pmnd.rs/learn/guides/beginner-typescript)
- [Zustand Next.js 가이드](https://zustand.docs.pmnd.rs/learn/guides/nextjs)
- [useShallow 가이드](https://zustand.docs.pmnd.rs/learn/guides/prevent-rerenders-with-use-shallow)
- [Store Reset 가이드](https://zustand.docs.pmnd.rs/learn/guides/how-to-reset-state)
- [Persist Middleware](https://zustand.docs.pmnd.rs/reference/middlewares/persist)
