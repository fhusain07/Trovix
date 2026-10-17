import { build } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

// Build-time rendering only. No server, hosting settings, or credentials required.
const serverDirectory = resolve("node_modules/.cache/trovix-ssr");
await build({
  configFile: resolve("vite.config.ts"),
  build: {
    ssr: "src/entry-server.tsx",
    outDir: serverDirectory,
    emptyOutDir: true,
    rollupOptions: {
      output: { entryFileNames: "entry-server.mjs", manualChunks: undefined },
    },
  },
});
const { render, getPageMetadata, getStructuredData, renderPaths, publicPaths } =
  await import(
    pathToFileURL(resolve(serverDirectory, "entry-server.mjs")).href
  );
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
for (const path of renderPaths) {
  const meta = getPageMetadata(path);
  let html = template.replace(
    /<title>.*?<\/title>/s,
    "<title>" + escape(meta.title) + "</title>",
  );
  const tags = [
    ["name", "description", meta.description],
    ["name", "robots", meta.noindex ? "noindex, follow" : "index, follow"],
    ["property", "og:title", meta.title],
    ["property", "og:description", meta.description],
    ["property", "og:url", meta.canonical],
    ["name", "twitter:title", meta.title],
    ["name", "twitter:description", meta.description],
  ];
  for (const [attribute, key, value] of tags)
    html = html.replace(
      new RegExp(
        "<meta " + attribute + '="' + key + '" content="[^"]*"\\s*/?>',
      ),
      "<meta " +
        attribute +
        '="' +
        key +
        '" content="' +
        escape(value) +
        '" />',
    );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    '<link rel="canonical" href="' + escape(meta.canonical) + '" />',
  );
  html = html.replace(
    "<!--page-schema-->",
    '<script type="application/ld+json" id="page-schema">' +
      JSON.stringify(getStructuredData(path)).replaceAll("<", "\\u003c") +
      "</script>",
  );
  html = html.replace(
    '<div id="root"></div>',
    '<div id="root" data-prerendered="true" data-page-path="' +
      escape(path) +
      '">' +
      (await render(path)) +
      "</div>",
  );
  const target =
    path === "/"
      ? "dist/index.html"
      : path === "/404"
        ? "dist/404.html"
        : "dist" + path + "/index.html";
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  publicPaths
    .map(
      (path) =>
        "  <url><loc>" + getPageMetadata(path).canonical + "</loc></url>",
    )
    .join("\n") +
  "\n</urlset>\n";
await writeFile("dist/sitemap.xml", sitemap);
await writeFile("public/sitemap.xml", sitemap);
console.log(
  "Prerendered " +
    renderPaths.length +
    " pages with metadata, JSON-LD, and sitemap.",
);
