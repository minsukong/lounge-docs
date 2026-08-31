# Tailwind CSS와 UI 공통 설정

## 적용 목적

디자인 시안이 없어도 컴포넌트가 색상값이나 radius 값에 직접 묶이지 않도록 공통 설정을 준비할 때 사용합니다. 적용 후 화면 코드는 `bg-primary`, `text-muted-foreground`, `border-input`처럼 역할 이름만 사용하고, 디자인 확정 후에는 토큰 값만 교체할 수 있습니다.

적용 파일은 다음 네 개입니다.

```text
apps/app-webview/
├── components.json
├── postcss.config.mjs
└── src/
    ├── app/globals.css
    └── lib/utils.ts
```

필요한 패키지는 `tailwindcss`, `@tailwindcss/postcss`, `tw-animate-css`, `clsx`, `tailwind-merge`입니다. shadcn 컴포넌트를 생성한다면 프로젝트가 선택한 Base UI·Lucide 관련 패키지도 실제 registry 결과에 맞춰 설치합니다.

## 1단계: Tailwind CSS 4 연결

검증된 Tailwind CSS v4.1 이상의 버전을 사용하고 잠금 파일에 고정합니다. 공통 CSS 하한은 Safari 15이며, 이 환경에서 지원되지 않는 최신 CSS 기능이나 Utility를 기본 구현에 사용하지 않습니다. Android와 다른 브라우저는 Safari 15에 특정 제품 버전을 대응시키지 않고 프로젝트가 정한 구형 검증 환경에서 실제 사용 기능을 확인합니다.

### `apps/app-webview/postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}

export default config
```

기존 PostCSS 플러그인이 있다면 제거하지 말고 Tailwind 플러그인만 병합합니다. Tailwind CSS 4에서는 이 설정만을 위해 `tailwind.config.js`를 새로 만들지 않습니다.

## 2단계: shadcn 생성 경로 고정

### `apps/app-webview/components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

`style`, `baseColor`, alias는 이미 설치된 프로젝트 설정을 우선합니다. 이 파일의 목적은 컴포넌트 생성 위치와 토큰 사용 방식을 정하는 것입니다. Button, Input, Dialog 등을 한 번에 생성하지 않고 실제 화면에서 필요한 항목만 추가합니다.

## `base-nova`가 의미하는 것

`base-nova`는 설치할 패키지 이름이나 색상 테마 이름이 아닙니다. shadcn CLI가 컴포넌트 코드를 생성할 때 참고하는 **컴포넌트 구현 방식과 시각 스타일의 조합**입니다.

| 이름 | 의미 | 생성 코드에 미치는 영향 |
| --- | --- | --- |
| `base` | Dialog, Select 같은 동작을 Base UI로 구현 | Base UI에 맞는 import, prop과 컴포넌트 구조 생성 |
| `nova` | padding과 margin을 줄인 간결한 시각 스타일 | 컴포넌트의 기본 크기, 간격과 Tailwind 클래스 구성 |

예를 들어 `shadcn add dialog`를 실행하면 CLI는 `components.json`의 `style`을 읽고 Base UI를 사용하는 Nova 스타일의 Dialog 코드를 생성합니다. 생성된 코드는 패키지 내부에 숨겨지지 않고 프로젝트의 `src/components/ui`에 추가되므로 필요한 부분을 직접 수정할 수 있습니다.

### 다른 설정과의 차이

| 설정 | 결정하는 내용 |
| --- | --- |
| `style: "base-nova"` | 컴포넌트가 사용할 UI 라이브러리와 기본 구조·간격 |
| `tailwind.baseColor: "neutral"` | 처음 생성하는 중립 색상 계열 |
| `tailwind.cssVariables: true` | `primary`, `background` 같은 의미 기반 토큰 사용 여부 |
| `iconLibrary: "lucide"` | 생성 코드에서 사용할 아이콘 라이브러리 |

`base-nova`를 선택해도 브랜드 색상과 다크 모드 값이 확정되는 것은 아닙니다. 브랜드 색상, 배경색과 radius는 `globals.css`의 토큰으로 별도 관리합니다. 따라서 디자인이 바뀌더라도 Base UI와 Nova 구조를 유지하면서 토큰 값만 교체할 수 있습니다.

### 나중에 변경할 때 주의할 점

shadcn은 컴포넌트 코드를 프로젝트에 복사하는 방식입니다. 이미 Button이나 Dialog를 생성한 뒤 `components.json`의 `style`만 바꿔도 기존 파일은 자동으로 변경되지 않습니다.

다른 UI 라이브러리나 시각 스타일로 바꾸려면 새 생성 결과와 기존 파일의 차이를 확인하고, 프로젝트에서 수정한 내용과 함께 병합해야 합니다. 따라서 실제 저장소를 만들 때 Base UI 사용 여부와 Nova 스타일 적용 여부를 먼저 확인한 뒤 첫 컴포넌트를 생성합니다.

현재 가이드의 예시 코드는 `base-nova`를 기준으로 작성되어 있습니다. 실제 프로젝트에서 다른 값을 선택하면 `components.json`, shadcn 컴포넌트 import와 관련 예시를 선택한 값에 맞게 함께 갱신합니다.

## 3단계: 디자인 전 사용할 토큰 정의

### `apps/app-webview/src/app/globals.css`

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.625rem;
  --background: #ffffff;
  --foreground: #171717;
  --card: #ffffff;
  --card-foreground: #171717;
  --popover: #ffffff;
  --popover-foreground: #171717;
  --primary: #262626;
  --primary-foreground: #fafafa;
  --secondary: #f5f5f5;
  --secondary-foreground: #262626;
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --accent: #f5f5f5;
  --accent-foreground: #262626;
  --destructive: #dc2626;
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #a3a3a3;
}

.dark {
  --background: #171717;
  --foreground: #fafafa;
  --card: #262626;
  --card-foreground: #fafafa;
  --popover: #262626;
  --popover-foreground: #fafafa;
  --primary: #e5e5e5;
  --primary-foreground: #262626;
  --secondary: #404040;
  --secondary-foreground: #fafafa;
  --muted: #404040;
  --muted-foreground: #a3a3a3;
  --accent: #404040;
  --accent-foreground: #fafafa;
  --destructive: #ef4444;
  --border: rgba(255, 255, 255, 0.1);
  --input: rgba(255, 255, 255, 0.15);
  --ring: #737373;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

`:root`와 `.dark`는 실제 색상값을 정의하고, `@theme inline`은 그 값을 `bg-background`, `text-primary` 같은 Tailwind 클래스와 연결합니다. 위 값은 화면 개발을 시작할 수 있게 하는 중립 색상 임시값이므로 브랜드 확정값으로 보지 않습니다. 디자인이 나오면 연결 구조나 컴포넌트 클래스를 먼저 바꾸지 말고 `:root`와 `.dark`의 값부터 교체합니다.

## 4단계: 클래스 병합 함수

### `apps/app-webview/src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

`cn`은 조건부 클래스를 모으고 같은 Tailwind 속성의 충돌을 해결합니다. 아래처럼 기본 배치 규칙은 유지하면서 호출자가 폭이나 간격을 바꿀 수 있습니다.

```tsx
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto w-full max-w-screen-md px-4 py-6", className)}
      {...props}
    />
  )
}
```

```tsx
<Section className="max-w-screen-lg py-10">
  <h1 className="text-2xl font-semibold">내 정보</h1>
</Section>
```

이 `Section`은 실제 페이지 둘 이상에서 동일한 너비와 여백 규칙이 확인될 때만 공통 컴포넌트로 둡니다. 아직 화면 배치가 정해지지 않았다면 사용 화면 가까이에 둔 채 반복 여부를 확인합니다.

## 실제 화면 작성 예시

의미 기반 토큰을 사용한 컴포넌트는 디자인 값이 바뀌어도 화면 구조를 다시 작성하지 않습니다.

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ProfilePanel() {
  return (
    <section className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      <div className="mb-4 space-y-1">
        <h2 className="text-lg font-semibold">프로필</h2>
        <p className="text-sm text-muted-foreground">
          앱에 표시할 이름을 입력하세요.
        </p>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="display-name">표시 이름</Label>
        <Input id="display-name" name="displayName" autoComplete="name" />
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" variant="secondary">취소</Button>
        <Button type="submit">저장</Button>
      </div>
    </section>
  )
}
```

여기서 `bg-white`, `text-gray-500`, `border-gray-200`, `bg-blue-600`처럼 역할이 드러나지 않는 색상 클래스를 섞지 않습니다. `p-4`, `gap-2` 같은 간격은 디자인 확정 후 컴포넌트 구조와 함께 조정할 수 있습니다.

## WebView viewport 기본 확인

모바일 WebView의 기본 화면 높이는 Safari 15에서 동작하는 `vh` 기반 `min-h-screen`을 사용합니다. `dvh`처럼 Safari 15 전체 범위에서 보장되지 않는 단위를 핵심 레이아웃에 사용하지 않습니다. 상태바와 홈 표시 영역까지 콘텐츠를 확장하는 구성이면 Next.js viewport에 `viewportFit: "cover"`를 지정하고 실제로 가려지는 화면 경계에만 safe area를 적용합니다.

### `apps/app-webview/src/app/layout.tsx`

```tsx
import type { Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}
```

```tsx
import type { ReactNode } from "react"

export function ScreenLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      {children}
    </main>
  )
}
```

Native container가 이미 inset을 적용한다면 WebView에서 같은 padding을 다시 넣지 않습니다. `100vh` 고정 높이, 모든 컴포넌트의 개별 safe area와 임의의 기기별 숫자를 피하고 실제 iOS·Android container에서 키보드가 열린 상태까지 확인합니다.

## 디자인 값 교체 예시

브랜드 주색이 확정되면 사용처의 `bg-primary`를 모두 찾는 대신 토큰 값만 바꿉니다.

```css
:root {
  --primary: #2563eb;
  --primary-foreground: #fafafa;
  --ring: #3b82f6;
}

.dark {
  --primary: #60a5fa;
  --primary-foreground: #172554;
  --ring: #60a5fa;
}
```

이 값도 교체 방법을 보여 주는 코드일 뿐 Lounge 브랜드 값이 아닙니다. 실제 값은 디자인 토큰 원본에서 가져옵니다.

## 상태별 확인 목록

| 상태 | 확인할 클래스 또는 동작 |
| --- | --- |
| 기본 면 | `bg-background`, `bg-card`, 대응 `*-foreground` |
| 마우스 올림·선택 | `bg-accent`, `text-accent-foreground` |
| 입력 | `border-input`, 잘못된 입력 표시, placeholder 대비 |
| 키보드 포커스 | `ring-ring`, 포커스가 배경과 구분되는지 |
| 비활성화 | 색상만이 아니라 실제 `disabled` 속성이 있는지 |
| 위험 동작 | `destructive`가 일반 primary와 구분되는지 |
| 어두운 화면 | `.dark` 상위에서 모든 의미 기반 토큰이 적용되는지 |

## 미확정 항목

글자 크기 체계, 간격 체계, 화면 너비 기준, 테마 저장 방식, 차트와 사이드바 토큰은 실제 디자인이나 사용할 컴포넌트가 정해진 뒤 추가합니다. Native container의 inset 처리와 키보드 resize 방식은 WebView 계약이 확인되면 viewport 예시와 함께 갱신합니다. Button, Input, Dialog 같은 기본 UI 컴포넌트는 shadcn이 생성한 코드를 우선하며 같은 기능을 다시 감싸는 컴포넌트를 미리 만들지 않습니다.
