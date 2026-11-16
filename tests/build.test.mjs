import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { resolve } from "node:path";

test("every sitemap route has meaningful prerendered content and unique metadata", async () => {
  const sitemap = await readFile("dist/sitemap.xml", "utf8");
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(urls.length >= 19);
  const titles = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const html = await readFile(
      path === "/" ? "dist/index.html" : "dist" + path + "/index.html",
      "utf8",
    );
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), "Unique title: " + path);
    titles.add(title);
    assert.equal(
      [...html.matchAll(/<h1[\s>]/g)].length,
      1,
      "Exactly one h1: " + path,
    );
    assert.ok(
      html.includes('data-prerendered="true"') &&
        !html.includes("Loading page"),
      "Rendered content: " + path,
    );
    assert.ok(
      html.includes('<link rel="canonical" href="' + url + '"'),
      "Canonical: " + path,
    );
    assert.ok(
      html.includes('property="og:title"') &&
        html.includes('name="twitter:title"'),
    );
    for (const match of html.matchAll(
      /<a\b[^>]*href="(\/[^"#]*)(?:#[^"]*)?"/g,
    )) {
      const targetPath = match[1].replace(/\/+$/, "") || "/";
      await access(
        targetPath === "/"
          ? "dist/index.html"
          : "dist" + targetPath + "/index.html",
      );
    }
    const schema = JSON.parse(
      html.match(/id="page-schema">(.*?)<\/script>/s)[1],
    );
    assert.equal(schema["@graph"][0]["@type"], "Organization");
    if (path.startsWith("/services/"))
      assert.ok(schema["@graph"].some((item) => item["@type"] === "Service"));
    for (const match of html.matchAll(/<img[^>]+src="([^"?]+)"/g))
      if (match[1].startsWith("/"))
        await access(resolve("dist", "." + decodeURIComponent(match[1])));
  }
});
test("legacy aliases canonicalize to the primary pages and are not indexed", async () => {
  for (const [alias, canonical] of [
    ["projects", "portfolio"],
    ["terms-of-service", "terms"],
    ["data-deletion", "account-deletion"],
    ["data-deletion-instructions", "account-deletion"],
  ]) {
    const html = await readFile("dist/" + alias + "/index.html", "utf8");
    assert.ok(
      html.includes('href="https://www.trovixtech.com/' + canonical + '"'),
    );
    assert.ok(html.includes('name="robots" content="noindex, follow"'));
  }
});
test("unapproved portfolio drafts, private inventory, and tracking placeholders stay out of production", async () => {
  const inventory = await readFile(".trovix-review/portfolio.json", "utf8")
    .then(JSON.parse)
    .catch(() => ({ projects: [] }));
  const privateSlugs = [
    ...inventory.projects,
    ...(inventory.groupedDrafts ?? []),
  ]
    .filter((project) => project.publication !== "approved")
    .map((project) => project.slug);
  for (const file of await readdir("dist/assets")) {
    if (!file.endsWith(".js")) continue;
    const source = await readFile("dist/assets/" + file, "utf8");
    for (const marker of [
      "sales-workspace-concept",
      "school-workspace-concept",
      "automation-workspace-concept",
      ".trovix-review",
      "LOCAL DRAFT REVIEW",
      ...privateSlugs,
      ...Object.keys(inventory.draftAliases ?? {}),
    ])
      assert.ok(!source.includes(marker), "Draft leak: " + file);
  }
  await assert.rejects(access("dist/.trovix-review"));
  const home = await readFile("dist/index.html", "utf8");
  for (const placeholder of [
    "G-XXXXXXXXXX",
    "YOUR_CLARITY_ID",
    "REPLACE_WITH",
    "10+ Projects",
  ])
    assert.ok(!home.includes(placeholder));
  const card = await readFile("dist/og-image.png");
  assert.equal(card.readUInt32BE(16), 1200);
  assert.equal(card.readUInt32BE(20), 630);
});
