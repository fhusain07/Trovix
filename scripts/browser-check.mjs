import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import assert from "node:assert/strict";
const require = createRequire(import.meta.url);
const {
  chromium,
} = require("../node_modules/.cache/trovix-qa/node_modules/playwright");
const AxeBuilder =
  require("../node_modules/.cache/trovix-qa/node_modules/@axe-core/playwright").default;
const directory = ".trovix-review/qa";
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await page.goto(pathToFileURL(resolve("public/og-card.svg")).href);
await page.setViewportSize({ width: 1200, height: 630 });
await page.screenshot({ path: "public/og-image.png" });
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle" });
for (const image of await page.locator("img").all()) {
  await image.scrollIntoViewIfNeeded();
  await image.evaluate((element) => element.decode());
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.screenshot({
  path: directory + "/home-desktop.png",
  fullPage: true,
});
const results = [];
for (const [width, height] of process.argv.includes("--interactions-only")
  ? []
  : [
      [1440, 1000],
      [1024, 900],
      [768, 1000],
      [390, 844],
      [320, 740],
    ]) {
  await page.setViewportSize({ width, height });
  for (const path of [
    "/",
    "/services",
    "/services/saas-development",
    "/portfolio",
    "/about",
    "/technologies",
    "/partners",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/__review/portfolio",
  ]) {
    await page.goto("http://127.0.0.1:5173" + path, {
      waitUntil: "networkidle",
    });
    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    assert.equal(
      horizontalOverflow,
      false,
      "Horizontal overflow: " + path + " at " + width,
    );
    assert.equal(
      await page.locator("main").count(),
      1,
      "Single main landmark: " + path,
    );
    assert.equal(await page.locator("h1").count(), 1, "Single h1: " + path);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => element.decode());
    }
    assert.equal(
      await page
        .locator("img")
        .evaluateAll(
          (images) =>
            images.filter((image) => !image.complete || !image.naturalWidth)
              .length,
        ),
      0,
      "Broken image: " + path,
    );
  }
  results.push({ viewport: width, routesChecked: 11, overflow: false });
}
await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://127.0.0.1:5173/");
await page.screenshot({ path: directory + "/home-mobile.png", fullPage: true });
await page.getByRole("button", { name: "Open navigation" }).click();
await page.getByRole("navigation", { name: "Mobile navigation" }).waitFor();
await page.keyboard.press("Escape");
assert.equal(
  await page
    .getByRole("button", { name: "Open navigation" })
    .getAttribute("aria-expanded"),
  "false",
);
await page.getByRole("button", { name: "Open navigation" }).click();
await page
  .getByRole("navigation", { name: "Mobile navigation" })
  .getByRole("link", { name: "Services", exact: true })
  .click();
await page.waitForURL("**/services");
await page.locator("#mobile-navigation").waitFor({ state: "detached" });
assert.equal(await page.locator("#mobile-navigation").count(), 0);
await page.goto("http://127.0.0.1:5173/contact");
await page.getByRole("button", { name: "Prepare Email Draft" }).click();
assert.equal(await page.locator("[aria-invalid=true]").count(), 4);
await page.getByLabel("Full name *").fill("Alex Example");
await page.getByLabel("Business email *").fill("alex@example.com");
await page.getByLabel("Service required *").selectOption({ index: 1 });
await page
  .getByLabel("Project description *")
  .fill("We need a custom application for our sales operations.");
await page.getByRole("button", { name: "Prepare Email Draft" }).click();
await page.getByText("Your email draft is ready.", { exact: false }).waitFor();
assert.ok(
  (
    await page
      .getByRole("link", { name: "Open inquiry in your email app" })
      .getAttribute("href")
  ).startsWith("mailto:info@trovixtech.com"),
);
assert.equal(await page.getByText("Your inquiry was accepted.").count(), 0);
await page.goto("http://127.0.0.1:5173/__review/portfolio");
await page.getByRole("button", { name: "Education", exact: true }).click();
assert.equal(await page.locator(".project-card").count(), 1);
await page.locator(".project-image-link").click();
await page.waitForURL("**/school-workspace-concept");
assert.ok((await page.locator("h1").innerText()).includes("School operations"));
const accessibility = [];
await page.setViewportSize({ width: 1440, height: 1000 });
for (const path of [
  "/",
  "/contact",
  "/partners",
  "/services/saas-development",
  "/portfolio",
  "/privacy-policy",
]) {
  await page.goto("http://127.0.0.1:5173" + path, { waitUntil: "networkidle" });
  const report = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  accessibility.push({
    path,
    violations: report.violations.map((item) => ({
      id: item.id,
      impact: item.impact,
      nodes: item.nodes.map((node) => node.target),
    })),
  });
}
await page.goto("http://127.0.0.1:5173/");
await page.getByRole("button", { name: "Switch to light theme" }).click();
await page.screenshot({ path: directory + "/home-light.png", fullPage: true });
const lightReport = await new AxeBuilder({ page })
  .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
  .analyze();
accessibility.push({
  path: "/ (light)",
  violations: lightReport.violations.map((item) => ({
    id: item.id,
    impact: item.impact,
    nodes: item.nodes.map((node) => node.target),
  })),
});
await writeFile(
  directory + "/browser-report.json",
  JSON.stringify({ results, accessibility, errors }, null, 2),
);
await browser.close();
console.log(JSON.stringify({ results, accessibility, errors }, null, 2));
assert.equal(errors.length, 0, "Browser runtime errors");
assert.equal(
  accessibility.flatMap((item) => item.violations).length,
  0,
  "Accessibility violations",
);
