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
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
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

위 값은 화면 개발을 시작할 수 있게 하는 중립 색상 임시값입니다. 브랜드 확정값으로 보지 않습니다. 디자인이 나오면 `@theme inline`이나 컴포넌트 클래스를 먼저 바꾸지 말고 `:root`와 `.dark`의 값부터 교체합니다.

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

## 디자인 값 교체 예시

브랜드 주색이 확정되면 사용처의 `bg-primary`를 모두 찾는 대신 토큰 값만 바꿉니다.

```css
:root {
  --primary: oklch(0.55 0.19 255);
  --primary-foreground: oklch(0.985 0 0);
  --ring: oklch(0.62 0.16 255);
}

.dark {
  --primary: oklch(0.72 0.14 255);
  --primary-foreground: oklch(0.16 0.03 255);
  --ring: oklch(0.72 0.14 255);
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

글자 크기 체계, 간격 체계, 화면 너비 기준, 테마 저장 방식, 차트와 사이드바 토큰은 실제 디자인이나 사용할 컴포넌트가 정해진 뒤 추가합니다. Button, Input, Dialog 같은 기본 UI 컴포넌트는 shadcn이 생성한 코드를 우선하며 같은 기능을 다시 감싸는 컴포넌트를 미리 만들지 않습니다.
