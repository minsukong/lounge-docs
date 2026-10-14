import { cp, mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appRoot = path.resolve(process.cwd(), process.argv[2] ?? ".");
const appName = path.basename(appRoot);
if (!["webview", "website"].includes(appName) || path.dirname(appRoot) !== workspaceRoot) throw new Error("Unexpected app root");
const nextRoot = path.join(appRoot, ".next");
const standaloneRoot = path.join(nextRoot, "standalone");
const outputRoot = path.join(appRoot, "dist", "runtime");
if (path.relative(appRoot, outputRoot) !== path.join("dist", "runtime")) throw new Error("Unexpected runtime output path");
await stat(path.join(standaloneRoot, appName, "server.js"));

function allowedFile(file) {
  const name = path.basename(file);
  const relative = path.relative(standaloneRoot, file).split(path.sep);
  if ([".git", ".github", ".storybook", "docs", "work", "coverage", "test-results", "playwright-report", "storybook-static"].includes(name) || name.startsWith(".env")) return false;
  if ((relative[0] === "webview" || relative[0] === "website") && relative[0] !== appName) return false;
  if (relative.slice(0, 4).join("/") === "packages/ui/src/dev") return false;
  if (relative.slice(0, 3).join("/") === `${appName}/src/dev` || relative.slice(0, 3).join("/") === `${appName}/src/test`) return false;
  return !/^(AGENTS|README|LINT|BUILD)\.md$/i.test(name)
    && !/\.(stories|test|spec)\.[cm]?[jt]sx?$/i.test(name)
    && !/^(eslint|vitest|postcss)\.config\./.test(name)
    && !/^tsconfig.*\.json$/.test(name);
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(standaloneRoot, outputRoot, { recursive: true, dereference: true, filter: allowedFile });
const runtimeAppRoot = path.join(outputRoot, appName);
await cp(path.join(nextRoot, "static"), path.join(runtimeAppRoot, ".next", "static"), { recursive: true });
try {
  await readdir(path.join(appRoot, "public"));
  await cp(path.join(appRoot, "public"), path.join(runtimeAppRoot, "public"), { recursive: true, filter: allowedFile });
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
await writeFile(path.join(outputRoot, "server.js"), `require("./${appName}/server.js");\n`);
console.log(`${appName}: dist/runtime prepared. Start with node dist/runtime/server.js`);
