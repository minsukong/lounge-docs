import type { StorybookConfig } from "@storybook/nextjs-vite";
import { fileURLToPath } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)", "../../../webview/src/**/*.stories.@(ts|tsx)", "../../../website/src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, { resolve: { alias: { "@": fileURLToPath(new URL("../../../webview/src", import.meta.url)) } } });
  },
};

export default config;
