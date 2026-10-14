import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import { fileURLToPath } from "node:url";

export default function nextConfig(phase: string): NextConfig {
  const previewBuild = process.env.LOUNGE_PREVIEW_BUILD === "1";
  const development = phase === PHASE_DEVELOPMENT_SERVER;
  const workspaceRoot = fileURLToPath(new URL("..", import.meta.url));
  return {
    poweredByHeader: false,
    reactStrictMode: true,
    pageExtensions: development || previewBuild ? ["dev.tsx", "dev.ts", "tsx", "ts"] : ["tsx", "ts"],
    output: previewBuild ? "export" : "standalone",
    ...(previewBuild ? { basePath: process.env.LOUNGE_PREVIEW_BASE_PATH ?? "", distDir: "dist/preview", trailingSlash: true, images: { unoptimized: true } } : {}),
    outputFileTracingRoot: workspaceRoot,
    turbopack: { root: workspaceRoot },
    transpilePackages: ["@lounge/ui"],
    typescript: { tsconfigPath: previewBuild ? "tsconfig.preview.json" : development ? "tsconfig.json" : "tsconfig.build.json" },
    outputFileTracingExcludes: {
      "/*": [
        "./src/dev/**", "./src/test/**", "./src/app/preview/**",
        "./**/*.stories.*", "./**/*.test.*", "./.storybook/**",
        "../packages/ui/src/dev/**", "../packages/ui/.storybook/**", "../packages/ui/storybook-static/**",
        "../packages/ui/**/*.stories.*", "../packages/ui/**/*.test.*",
        "../**/AGENTS.md", "../**/README.md", "../**/BUILD.md",
      ],
    },
  };
}
