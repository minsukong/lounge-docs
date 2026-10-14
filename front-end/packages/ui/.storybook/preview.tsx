import type { Preview } from "@storybook/nextjs-vite";
import "../src/styles.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true },
    layout: "padded",
    viewport: {
      options: {
        mobile: { name: "모바일 390", styles: { width: "390px", height: "844px" } },
        narrow: { name: "작은 모바일 320", styles: { width: "320px", height: "640px" } },
        desktop: { name: "데스크톱", styles: { width: "1280px", height: "800px" } },
      },
    },
  },
  globalTypes: {
    theme: {
      description: "색상 모드",
      toolbar: { icon: "circlehollow", items: ["light", "dark"] },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [(Story, context) => (
    <div className={context.globals.theme === "dark" ? "dark" : ""}>
      <Story />
    </div>
  )],
};

export default preview;
