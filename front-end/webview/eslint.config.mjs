import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    name: "lounge/lint-policy",
    linterOptions: { reportUnusedDisableDirectives: "error" },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    name: "lounge/application-accessibility",
    files: ["src/**/*.{ts,tsx}"],
    // Story, test and primitive implementations keep the Next.js baseline.
    // Project checks apply where the UI is composed and used.
    ignores: [
      "src/**/*.stories.{ts,tsx}",
      "src/**/*.test.{ts,tsx}",
      "src/test/**",
    ],
    settings: {
      "jsx-a11y": {
        components: { Link: "a", Button: "button", Label: "label", Input: "input", Textarea: "textarea" },
      },
    },
    rules: {
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/alt-text": ["error", { img: ["Image"] }],
      "jsx-a11y/label-has-associated-control": [
        "error",
        { assert: "htmlFor", depth: 3, labelComponents: ["Label"], controlComponents: ["Input", "Textarea", "Checkbox"] },
      ],
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-static-element-interactions": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/tabindex-no-positive": "error",
      "jsx-a11y/html-has-lang": "error",
    },
  },
  {
    name: "lounge/production-import-boundary",
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/dev/**", "src/test/**", "src/app/preview/**", "src/**/*.stories.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: ["@lounge/ui/preview", "@lounge/ui/preview/*", "@/dev", "@/dev/**", "@/test", "@/test/**", "**/dev/**", "**/test/**", "**/docs/**", "@storybook/**", "storybook", "storybook/**", "vitest", "vitest/**", "@testing-library/**", "**/*.stories.*", "**/*.test.*", "**/*.dev.*"],
          message: "앱 코드에서 개발용 화면·Story·테스트·개발 도구를 가져올 수 없습니다.",
        }],
      }],
    },
  },
  globalIgnores([
    ".next/**", "out/**", "build/**", "dist/**", "storybook-static/**",
    "next-env.d.ts", "coverage/**", "playwright-report/**", "test-results/**",
  ]),
]);
