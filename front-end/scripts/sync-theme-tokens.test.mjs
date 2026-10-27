import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile, copyFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), "lounge-theme-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const dir of ["tokens/shadcn", "front-end/scripts", "front-end/packages/ui/src/dev/colors"]) await mkdir(path.join(root, dir), { recursive: true });
  const script = path.join(root, "front-end/scripts/sync-theme-tokens.mjs");
  await copyFile(new URL("./sync-theme-tokens.mjs", import.meta.url), script);
  const original = JSON.parse(await readFile(new URL("../../tokens/shadcn/neutral.tokens.json", import.meta.url), "utf8"));
  const input = path.join(root, "tokens/shadcn/neutral.tokens.json");
  await writeFile(input, JSON.stringify(original));
  return { root, input, original, run: (...args) => spawnSync(process.execPath, [script, ...args], { encoding: "utf8" }) };
}

test("공식 light/dark 값과 구형 브라우저 대체값을 생성한다", async (t) => {
  const f = await fixture(t);
  assert.equal(f.run().status, 0);
  const css = await readFile(path.join(f.root, "front-end/packages/ui/src/theme-tokens.css"), "utf8");
  assert.match(css, /--background: #ffffff;/);
  assert.match(css, /--background: #0a0a0a;/);
  assert.match(css, /--border: rgba\(255, 255, 255, 0.1\);/);
  assert.match(css, /--background: oklch\(1 0 0\);/);
  assert.match(css, /--radius: 0.625rem;/);
  assert.equal(f.run("--check").status, 0);
});

test("원본 변경 뒤 오래된 생성물을 감지하고 dark 변경을 독립적으로 반영한다", async (t) => {
  const f = await fixture(t);
  assert.equal(f.run().status, 0);
  f.original.dark.background.$value = "oklch(0.205 0 0)";
  await writeFile(f.input, JSON.stringify(f.original));
  assert.notEqual(f.run("--check").status, 0);
  assert.equal(f.run().status, 0);
  const css = await readFile(path.join(f.root, "front-end/packages/ui/src/theme-tokens.css"), "utf8");
  assert.match(css, /--background: #ffffff;/);
  assert.match(css, /--background: #171717;/);
  assert.equal(f.run("--check").status, 0);
});

test("누락된 모드와 잘못된 alpha를 출력 전에 거부한다", async (t) => {
  const f = await fixture(t);
  delete f.original.dark.background;
  await writeFile(f.input, JSON.stringify(f.original));
  assert.notEqual(f.run().status, 0);
  f.original.dark.background = { $type: "color", $value: "oklch(1 0 0 / 120%)" };
  f.original.light = { background: f.original.light.background };
  f.original.dark = { background: f.original.dark.background };
  await writeFile(f.input, JSON.stringify(f.original));
  assert.notEqual(f.run().status, 0);
  await assert.rejects(readFile(path.join(f.root, "front-end/packages/ui/src/theme-tokens.css")));
});
