import { spawn } from "node:child_process";
import { copyFile, readFile, readdir, stat } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appRoot = path.resolve(process.cwd(), process.argv[2] ?? ".");
const appName = path.basename(appRoot);
if (appName !== "web" || path.dirname(appRoot) !== workspaceRoot) throw new Error("Unexpected preview app root");
const require = createRequire(import.meta.url);
const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "build"], { cwd: appRoot, env: { ...process.env, LOUNGE_PREVIEW_BUILD: "1" }, stdio: "inherit" });
const code = await new Promise((resolve, reject) => { child.on("error", reject); child.on("exit", (code) => resolve(code ?? 1)); });
if (code !== 0) process.exit(code);
await stat(path.join(appRoot, "dist", "preview", "preview", "index.html"));
// Next.js 16.2.12 exports nested segment names with Windows separators.
// The browser requests flat __next.*.txt names. Keep originals and add aliases.
async function repairWindowsSegmentNames(directory, routeRoot = null, segments = []) {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const source = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const root = routeRoot ?? (entry.name.startsWith("__next.") ? directory : null);
      count += await repairWindowsSegmentNames(source, root, root ? [...segments, entry.name] : []);
    } else if (routeRoot && entry.isFile() && entry.name.endsWith(".txt")) {
      const destination = path.join(routeRoot, [...segments, entry.name].join("."));
      try {
        const existing = await readFile(destination);
        if (!existing.equals(await readFile(source))) throw new Error(`Conflicting preview segment: ${destination}`);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        await copyFile(source, destination);
        count += 1;
      }
    }
  }
  return count;
}
if (process.platform === "win32") {
  const count = await repairWindowsSegmentNames(path.join(appRoot, "dist", "preview"));
  console.log(`${appName}: normalized ${count} static preview segment filenames.`);
}
console.log(`${appName}: static review build ready in dist/preview. Publish this folder separately from dist/runtime.`);
