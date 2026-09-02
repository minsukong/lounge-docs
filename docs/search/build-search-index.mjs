import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(scriptDirectory, "..");
const outputPath = path.join(docsRoot, "assets", "js", "search-data.js");
const guidesRoot = path.join(docsRoot, "guides");

const decodeEntities = (value) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'");

const toPlainText = (html) =>
  decodeEntities(
    html
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " "),
  ).trim();

const collectHtmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectHtmlFiles(entryPath)));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(entryPath);
  }

  return files;
};

const createRecords = (html, relativePath) => {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const documentTitle = toPlainText(titleMatch?.[1] ?? relativePath);
  const searchableHtml = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ");
  const headingMatches = [...searchableHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];

  return headingMatches.map((headingMatch, index) => {
    const nextHeadingIndex = headingMatches[index + 1]?.index ?? searchableHtml.length;
    const sectionHtml = searchableHtml.slice(headingMatch.index, nextHeadingIndex);
    const numberedTitle = toPlainText(headingMatch[1]);
    const sectionTitle = numberedTitle.replace(/^\d+[.)]?\s*/, "");
    const content = toPlainText(sectionHtml);
    const excerptSource = content.replace(numberedTitle, "").trim();
    const excerpt = excerptSource.length > 220 ? `${excerptSource.slice(0, 220).trim()}…` : excerptSource;
    const urlPath = relativePath.split(path.sep).join("/");

    return {
      document: documentTitle,
      section: sectionTitle || documentTitle,
      excerpt,
      content,
      url: `./../${urlPath}#section-${index + 1}`,
    };
  });
};

const htmlFiles = await collectHtmlFiles(guidesRoot);

const records = [];
for (const htmlPath of htmlFiles) {
  const html = await readFile(htmlPath, "utf8");
  records.push(...createRecords(html, path.relative(docsRoot, htmlPath)));
}

records.sort((a, b) =>
  a.document.localeCompare(b.document, "ko") || a.section.localeCompare(b.section, "ko"),
);

const output = `window.LOUNGE_GUIDE_SEARCH_INDEX = ${JSON.stringify(records, null, 2)};\n`;
await writeFile(outputPath, output, "utf8");

console.log(`Indexed ${records.length} sections from ${htmlFiles.length} guide files.`);
