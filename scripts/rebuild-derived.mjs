import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const generatedAt = "2026-07-29T00:00:00+03:00";
const summary = fs.readFileSync(path.join(root, "SUMMARY.md"), "utf8");
const links = [...summary.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)].map((match) => match[1]);

function unquote(value) {
  return JSON.parse(`"${value}"`);
}

function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(
    new RegExp(`^${key}:\\s*"((?:\\\\.|[^"])*)"$`, "m"),
  );
  if (!match) throw new Error(`Missing ${key} in frontmatter`);
  return unquote(match[1]);
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

function routeFor(source, canonical) {
  const body = fs.readFileSync(path.join(root, source), "utf8");
  const frontmatterMatch = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatterMatch) throw new Error(`${source} has no frontmatter`);
  const frontmatter = frontmatterMatch[1];
  const text = searchableText(body);
  return {
    source,
    path: canonical,
    title: frontmatterValue(frontmatter, "title"),
    description: frontmatterValue(frontmatter, "description"),
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
      origin: "https://docs.whale-cefi.com",
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
        description: route.description,
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
      version: "5.0.0",
      status: "official-release",
      canonical_origin: "https://docs.whale-cefi.com",
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
      description: route.description,
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
    "> Official Whale CeFi documentation released on 29 July 2026 at https://docs.whale-cefi.com.",
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
