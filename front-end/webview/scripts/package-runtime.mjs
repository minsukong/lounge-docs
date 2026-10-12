import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextRoot = path.join(appRoot, ".next");
const outputRoot = path.join(appRoot, "dist", "runtime");
const relativeOutput = path.relative(appRoot, outputRoot);
if (relativeOutput !== path.join("dist", "runtime")) throw new Error("Unexpected runtime output path");

const standaloneRoot = path.join(nextRoot, "standalone");
await stat(path.join(standaloneRoot, "server.js"));

function allowedFile(file) {
  const name = path.basename(file);
  const forbiddenDirectories = new Set([
    ".git", ".github", ".storybook", "docs", "work", "coverage", "test-results", "playwright-report",
  ]);
  if (forbiddenDirectories.has(name) || name.startsWith(".env")) return false;
  return !/^(AGENTS|README|LINT|BUILD)\.md$/i.test(name)
    && !/\.(stories|test|spec)\.[cm]?[jt]sx?$/i.test(name)
    && !/^(eslint|vitest|postcss)\.config\./.test(name)
    && !/^tsconfig.*\.json$/.test(name);
}

// Only the verified generated dist/runtime directory is replaced.
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(standaloneRoot, outputRoot, { recursive: true, dereference: true, filter: allowedFile });
await cp(path.join(nextRoot, "static"), path.join(outputRoot, ".next", "static"), { recursive: true });
try {
  const publicRoot = path.join(appRoot, "public");
  await readdir(publicRoot);
  await cp(publicRoot, path.join(outputRoot, "public"), { recursive: true, filter: allowedFile });
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
console.log("App runtime prepared at dist/runtime. Start with: node dist/runtime/server.js");
