import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals, ...nextTypescript,
  { rules: { "@next/next/no-html-link-for-pages": "off" } },
  { files: ["src/**/*.{ts,tsx}"], ignores: ["**/*.stories.*", "**/*.test.*", "src/test/**"], rules: { "no-restricted-imports": ["error", { patterns: ["next", "next/*", "@/dev/*", "**/webview/**", "**/website/**", "@storybook/*", "vitest"] }] } },
  globalIgnores(["node_modules/**", "storybook-static/**"]),
]);
