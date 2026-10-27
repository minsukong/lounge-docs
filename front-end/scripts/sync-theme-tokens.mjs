import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../../", import.meta.url);
const source = JSON.parse(await readFile(new URL("tokens/shadcn/neutral.tokens.json", root), "utf8"));
const modes = ["light", "dark"];
const keys = Object.keys(source.light);
if (!keys.length || JSON.stringify(keys) !== JSON.stringify(Object.keys(source.dark))) {
  throw new Error("Light/dark token names and order must match");
}
if (source.radius.$type !== "dimension" || !/^\d*\.?\d+rem$/.test(source.radius.$value)) {
  throw new Error("Expected a rem radius");
}

// sRGB fallback for the existing Safari 15 support boundary; modern browsers use the exact upstream OKLCH.
function srgb(value) {
  const match = /^oklch\(([\d.]+) ([\d.]+) ([\d.]+)(?: \/ ([\d.]+)%)?\)$/.exec(value);
  if (!match) throw new Error(`Unsupported theme color: ${value}`);
  const [, l, c, h, alpha] = match;
  const L = Number(l), C = Number(c), H = Number(h) * Math.PI / 180;
  if (![L, C, H].every(Number.isFinite) || L < 0 || L > 1 || C < 0 || (alpha !== undefined && (Number(alpha) < 0 || Number(alpha) > 100))) {
    throw new Error(`Invalid theme color: ${value}`);
  }
  const a = C * Math.cos(H), b = C * Math.sin(H);
  const ll = (L + .3963377774 * a + .2158037573 * b) ** 3;
  const mm = (L - .1055613458 * a - .0638541728 * b) ** 3;
  const ss = (L - .0894841775 * a - 1.291485548 * b) ** 3;
  const linear = [4.0767416621 * ll - 3.3077115913 * mm + .2309699292 * ss,
    -1.2684380046 * ll + 2.6097574011 * mm - .3413193965 * ss,
    -.0041960863 * ll - .7034186147 * mm + 1.707614701 * ss];
  const rgb = linear.map((n) => Math.round(Math.max(0, Math.min(1, n <= .0031308 ? 12.92 * n : 1.055 * n ** (1 / 2.4) - .055)) * 255));
  return alpha === undefined ? `#${rgb.map((n) => n.toString(16).padStart(2, "0")).join("")}`
    : `rgba(${rgb.join(", ")}, ${Number(alpha) / 100})`;
}

for (const mode of modes) {
  for (const [name, token] of Object.entries(source[mode])) {
    if (!/^[a-z][a-z0-9-]*$/.test(name) || token.$type !== "color") throw new Error(`Invalid token: ${name}`);
    srgb(token.$value);
  }
}
const declaration = (mode, convert) => Object.entries(source[mode])
  .map(([name, token]) => `  --${name}: ${convert ? srgb(token.$value) : token.$value};`).join("\n");
const aliases = keys.map((name) => `  --color-${name}: var(--${name});`).join("\n");
const radii = { sm: .6, md: .8, lg: 1, xl: 1.4, "2xl": 1.8, "3xl": 2.2, "4xl": 2.6 };
const radiusAliases = Object.entries(radii).map(([name, scale]) => `  --radius-${name}: ${scale === 1 ? "var(--radius)" : `calc(var(--radius) * ${scale})`};`).join("\n");
const css = `/* Generated from tokens/shadcn/neutral.tokens.json. Run npm run tokens:sync. */
:root {
  color-scheme: light;
  --radius: ${source.radius.$value};
${declaration("light", true)}
}
.dark {
  color-scheme: dark;
${declaration("dark", true)}
}
@supports (color: oklch(1 0 0)) {
  :root {
${declaration("light", false)}
  }
  .dark {
${declaration("dark", false)}
  }
}
@theme inline {
${aliases}
${radiusAliases}
}
`;
const rows = keys.map((name) => ({ name, variable: `--${name}`, light: source.light[name].$value, dark: source.dark[name].$value }));
const data = `// Generated from tokens/shadcn/neutral.tokens.json; development reference only.\nexport const themeTokens = ${JSON.stringify(rows, null, 2)} as const;\n`;
for (const [path, content] of [["front-end/packages/ui/src/theme-tokens.css", css], ["front-end/packages/ui/src/dev/colors/theme-tokens.ts", data]]) {
  const target = new URL(path, root);
  if (process.argv.includes("--check")) {
    if ((await readFile(target, "utf8")).replace(/\r\n/g, "\n") !== content) throw new Error(`Generated file out of date: ${path}`);
  } else await writeFile(target, content, "utf8");
}
console.log(`${process.argv.includes("--check") ? "Checked" : "Generated"} ${keys.length} semantic colors, light/dark, and radius scale`);
