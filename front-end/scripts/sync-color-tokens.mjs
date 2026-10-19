import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../../", import.meta.url);
const modes = ["light", "dark"];
const tokens = {};

function collect(node, parts = [], result = []) {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith("$")) continue;
    const path = [...parts, key];
    if (!value || typeof value !== "object") throw new Error(`Invalid token: ${path.join("/")}`);
    if (!("$value" in value)) { collect(value, path, result); continue; }
    const color = value.$value;
    if (value.$type !== "color" || color.colorSpace !== "srgb" ||
        !/^#[0-9a-f]{6}$/i.test(color.hex) || color.components.length !== 3 ||
        !color.components.every((n) => Number.isFinite(n) && n >= 0 && n <= 1) ||
        !Number.isFinite(color.alpha) || color.alpha < 0 || color.alpha > 1) {
      throw new Error(`Unsupported color: ${path.join("/")}`);
    }
    const hex = color.hex.toUpperCase();
    const rgb = color.components.map((n) => Math.round(n * 255));
    if (rgb.some((n, i) => n !== parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16))) {
      throw new Error(`Conflicting hex and components: ${path.join("/")}`);
    }
    // Exported sRGB values are retained; trim only float noise in alpha.
    const alpha = Number(color.alpha.toFixed(6));
    const cssValue = alpha === 1 ? hex : `rgba(${rgb.join(", ")}, ${alpha})`;
    const name = path.join("-").replace(/([a-z])([0-9])/g, "$1-$2")
      .replace(/%/g, "").toLowerCase().replace(/^gray-gray-/, "gray-");
    if (!/^[a-z0-9-]+$/.test(name)) throw new Error(`Invalid CSS token name: ${name}`);
    result.push({ path: path.join("/"), group: parts[0] ?? key, name: key, variable: `--lounge-${name}`, hex, alpha, cssValue });
  }
  return result;
}

for (const mode of modes) {
  const source = JSON.parse(await readFile(new URL(`tokens/figma/color/${mode}.tokens.json`, root), "utf8"));
  if (source.$extensions?.["com.figma.modeName"] !== mode) throw new Error(`Unexpected mode: ${mode}`);
  tokens[mode] = collect(source);
  if (new Set(tokens[mode].map((token) => token.variable)).size !== tokens[mode].length) {
    throw new Error(`Duplicate CSS token names in ${mode}`);
  }
}
if (tokens.light.length !== tokens.dark.length || tokens.light.some((t, i) => t.path !== tokens.dark[i].path)) {
  throw new Error("Light/dark token paths must match");
}
const declarations = (mode) => tokens[mode].map((t) => `  ${t.variable}: ${t.cssValue};`).join("\n");
const aliases = tokens.light.map((t) => `  --color-${t.variable.slice(2)}: var(${t.variable});`).join("\n");
const css = `/* Generated from tokens/figma/color/*.tokens.json. Run npm run tokens:colors from front-end/. */
:root {
${declarations("light")}
}

.dark {
${declarations("dark")}
}

@theme inline {
${aliases}
}
`;
const preview = `// Generated palette data for Storybook; not imported by product components.\nexport const colorTokens = ${JSON.stringify(tokens.light, null, 2)} as const;\nexport const darkColorTokens = ${JSON.stringify(tokens.dark, null, 2)} as const;\n`;
const outputs = [
  ["front-end/packages/ui/src/color-tokens.css", css],
  ["front-end/packages/ui/src/dev/colors/color-tokens.ts", preview],
];
for (const [relative, content] of outputs) {
  const destination = new URL(relative, root);
  if (process.argv.includes("--check")) {
    if (await readFile(destination, "utf8") !== content) throw new Error(`Generated file out of date: ${relative}`);
  } else {
    await writeFile(destination, content, "utf8");
  }
}
console.log(`${process.argv.includes("--check") ? "Checked" : "Generated"} ${tokens.light.length} color tokens for light/dark: ${fileURLToPath(root)}`);
