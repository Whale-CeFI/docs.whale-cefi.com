import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const releaseManifest = JSON.parse(
  fs.readFileSync(path.join(root, "data", "release-manifest.json"), "utf8"),
);
const generatedAt = releaseManifest.effective_at;
const releaseDateLabel = "10 August 2026";
const summary = fs.readFileSync(path.join(root, "SUMMARY.md"), "utf8");
const links = [...summary.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)].map((match) => match[1]);

function frontmatterValue(frontmatter, key) {
  const lines = frontmatter.split(/\r?\n/);
  const index = lines.findIndex((line) =>
    new RegExp(`^${key}:\\s*`).test(line),
  );
  if (index < 0) throw new Error(`Missing ${key} in frontmatter`);

  const raw = lines[index].replace(new RegExp(`^${key}:\\s*`), "").trim();
  if ([">", ">-", ">+", "|", "|-", "|+"].includes(raw)) {
    const values = [];
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const line = lines[cursor];
      if (line && !/^\s/.test(line)) break;
      if (line.trim()) values.push(line.trim());
    }
    return raw.startsWith(">") ? values.join(" ") : values.join("\n");
  }
  if (raw.startsWith('"') && raw.endsWith('"')) return JSON.parse(raw);
  if (raw.startsWith("'") && raw.endsWith("'")) {
    return raw.slice(1, -1).replaceAll("''", "'");
  }
  if (!raw) throw new Error(`Empty ${key} in frontmatter`);
  return raw;
}

function searchableText(markdown) {
  return markdown
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\{%[^%]+%\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[`*_#>|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function optionalFrontmatterValue(frontmatter, key) {
  return new RegExp(`^${key}:\\s*`, "m").test(frontmatter)
    ? frontmatterValue(frontmatter, key)
    : null;
}

function routeFor(source, canonical) {
  const body = fs.readFileSync(path.join(root, source), "utf8");
  const frontmatterMatch = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatterMatch) throw new Error(`${source} has no frontmatter`);
  const frontmatter = frontmatterMatch[1];
  const text = searchableText(body);
  const title = frontmatterValue(frontmatter, "title");
  const description = optionalFrontmatterValue(frontmatter, "description");
  return {
    source,
    path: canonical,
    title,
    ...(description ? { description } : {}),
    indexable: true,
    schema_type: "TechArticle",
    last_modified: frontmatterValue(frontmatter, "last_reviewed"),
    words: text ? text.split(/\s+/).length : 0,
    text,
    markdown: body.replace(/^---\n[\s\S]*?\n---\n/, "").trim(),
  };
}

const routes = links.map((source) => {
  const body = fs.readFileSync(path.join(root, source), "utf8");
  const frontmatter = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatter) throw new Error(`${source} has no frontmatter`);
  return routeFor(source, frontmatterValue(frontmatter[1], "canonical"));
});

const outputs = new Map();
outputs.set(
  "seo/routes.json",
  JSON.stringify(
    {
      origin: "https://whale-cefi.com/docs",
      generated_at: generatedAt,
      routes: routes.map(({ text, markdown, ...route }) => route),
    },
    null,
    2,
  ) + "\n",
);
outputs.set(
  "content-index.json",
  JSON.stringify(
    {
      generated_at: generatedAt,
      documents: routes.map((route) => ({
        source: route.source,
        url: route.path,
        title: route.title,
        ...(route.description ? { description: route.description } : {}),
      })),
    },
    null,
    2,
  ) + "\n",
);
outputs.set(
  "source-manifest.json",
  JSON.stringify(
    {
      project: "Whale CeFi Canonical Documentation",
      version: releaseManifest.version,
      status: "official-release",
      canonical_origin: "https://whale-cefi.com/docs",
      generated_at: generatedAt,
      page_count: routes.length,
      pages: routes.map(({ text, markdown, ...route }) => route),
    },
    null,
    2,
  ) + "\n",
);
outputs.set(
  "search-index.json",
  JSON.stringify(
    routes.map((route) => ({
      url: route.path,
      title: route.title,
      ...(route.description ? { description: route.description } : {}),
      text: route.text,
    })),
    null,
    2,
  ) + "\n",
);
outputs.set(
  "llms.txt",
  [
    "# Whale CeFi Documentation",
    "",
    `> Official Whale CeFi documentation release ${releaseManifest.version}, effective ${releaseDateLabel}, at https://whale-cefi.com/docs.`,
    "",
    ...routes.map((route) => `- [${route.title}](${route.path})`),
    "",
  ].join("\n"),
);
outputs.set(
  "llms-full.txt",
  routes
    .map((route) => `SOURCE: ${route.path}\n\n${route.markdown}\n`)
    .join("\n---\n\n"),
);
outputs.set(
  "sitemap.xml",
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(
      (route) =>
        `  <url><loc>${route.path}</loc><lastmod>${route.last_modified}</lastmod></url>`,
    ),
    "</urlset>",
    "",
  ].join("\n"),
);

const checkOnly = process.argv.includes("--check");
const differences = [];
for (const [relative, expected] of outputs) {
  const target = path.join(root, relative);
  if (checkOnly) {
    const actual = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
    if (actual !== expected) differences.push(relative);
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, expected);
  }
}

if (checkOnly && differences.length) {
  console.error(`Derived files are stale: ${differences.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log(
    checkOnly
      ? `Derived files match ${routes.length} canonical pages.`
      : `Rebuilt derived files for ${routes.length} canonical pages.`,
  );
}
