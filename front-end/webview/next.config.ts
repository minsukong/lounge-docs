import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  const development = phase === PHASE_DEVELOPMENT_SERVER;
  return {
    poweredByHeader: false,
    reactStrictMode: true,
    // Preview routes are recognized only by the development server.
    pageExtensions: development ? ["dev.tsx", "dev.ts", "tsx", "ts"] : ["tsx", "ts"],
    output: "standalone",
    typescript: { tsconfigPath: development ? "tsconfig.json" : "tsconfig.build.json" },
    outputFileTracingExcludes: {
      "/*": [
        "./src/dev/**", "./src/test/**", "./src/app/preview/**",
        "./**/*.stories.*", "./**/*.test.*", "./.storybook/**",
        "./docs/**", "./work/**", "./**/AGENTS.md", "./README.md", "./LINT.md",
      ],
    },
  };
}
