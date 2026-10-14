import { spawn } from "node:child_process";
import { stat } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appRoot = path.resolve(process.cwd(), process.argv[2] ?? ".");
const appName = path.basename(appRoot);
if (!["webview", "website"].includes(appName) || path.dirname(appRoot) !== workspaceRoot) throw new Error("Unexpected preview app root");
const require = createRequire(import.meta.url);
const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "build"], { cwd: appRoot, env: { ...process.env, LOUNGE_PREVIEW_BUILD: "1" }, stdio: "inherit" });
const code = await new Promise((resolve, reject) => { child.on("error", reject); child.on("exit", (code) => resolve(code ?? 1)); });
if (code !== 0) process.exit(code);
await stat(path.join(appRoot, "dist", "preview", "preview", "index.html"));
console.log(`${appName}: static review build ready in dist/preview. Publish this folder separately from dist/runtime.`);
