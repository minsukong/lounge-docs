import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { themeTokens } from "./theme-tokens";

function ThemeColors({ mode = "light" }: { mode?: "light" | "dark" }) {
  return (
    <main className="min-h-screen space-y-8 bg-background p-6 text-foreground">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">shadcn Neutral</h1>
        <p className="text-sm text-muted-foreground">base-nova · 의미 토큰 · {mode}</p>
        <p className="text-sm text-muted-foreground">Figma에서도 아래 이름을 사용합니다. 상단 테마 메뉴로 light·dark를 비교하세요.</p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {themeTokens.map((token) => (
          <li key={token.name} className="overflow-hidden rounded-xl border bg-card text-card-foreground">
            <div className="h-20 border-b" style={{ backgroundColor: `var(${token.variable})` }} aria-hidden="true" />
            <div className="space-y-1 p-4">
              <h2 className="text-sm font-medium">{token.name}</h2>
              <p className="break-all text-xs text-muted-foreground">{token[mode]}</p>
              <code className="text-xs text-muted-foreground">{token.variable}</code>
            </div>
          </li>
        ))}
      </ul>
      <section className="space-y-3" aria-label="라운드 단계">
        <h2 className="text-lg font-medium">Radius · 기본 0.625rem</h2>
        <div className="flex flex-wrap gap-4">
          {(["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const).map((size) => (
            <div key={size} className="grid size-20 place-items-center border bg-muted text-sm" style={{ borderRadius: `var(--radius-${size})` }}>{size}</div>
          ))}
        </div>
      </section>
    </main>
  );
}

const meta = {
  title: "Foundations/Colors",
  component: ThemeColors,
  render: (args, context) => <ThemeColors {...args} mode={context.globals.theme === "dark" ? "dark" : "light"} />,
  parameters: { layout: "fullscreen", controls: { disable: true } },
} satisfies Meta<typeof ThemeColors>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Neutral: Story = { name: "의미 토큰과 라운드" };
