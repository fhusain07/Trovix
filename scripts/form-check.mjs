import { createRequire } from "node:module";
import assert from "node:assert/strict";
const require = createRequire(import.meta.url);
const {
  chromium,
} = require("../node_modules/.cache/trovix-qa/node_modules/playwright");
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(page.url() + ": " + error.message));
let reply = {
  status: 200,
  contentType: "application/json",
  body: '{"ok":true}',
};
let calls = 0;
await page.route("**/api/inquiry-test", async (route) => {
  calls++;
  assert.equal(route.request().method(), "POST");
  await route.fulfill(reply);
});
async function fill(kind) {
  const partner = kind === "partnership";
  await page.goto(
    "http://127.0.0.1:5174" + (partner ? "/partners#inquiry" : "/contact"),
  );
  await page
    .getByLabel(partner ? "Name *" : "Full name *", { exact: true })
    .fill("Alex Example");
  await page
    .getByLabel("Business email *", { exact: true })
    .fill("alex@example.com");
  if (partner) {
    await page
      .getByLabel("Company name *", { exact: true })
      .fill("Example Agency");
    await page
      .getByLabel("Project requirements *", { exact: true })
      .fill("A scoped workflow integration.");
  }
  await page
    .getByLabel(partner ? "Partnership type *" : "Service required *", {
      exact: true,
    })
    .selectOption({ index: 1 });
  await page
    .getByLabel(partner ? "Message *" : "Project description *", {
      exact: true,
    })
    .fill("We need help with a custom sales application and workflows.");
}
for (const kind of ["project", "partnership"]) {
  await fill(kind);
  await page.getByRole("button", { name: "Send Inquiry" }).click();
  await page
    .getByText("Your inquiry was accepted.", { exact: false })
    .waitFor();
}
reply = {
  status: 500,
  contentType: "application/json",
  body: '{"error":"Unavailable"}',
};
await fill("project");
await page.getByRole("button", { name: "Send Inquiry" }).click();
await page
  .getByText("We could not confirm your submission.", { exact: false })
  .waitFor();
assert.equal(await page.getByLabel("Full name *").inputValue(), "Alex Example");
assert.equal(await page.getByText("Your inquiry was accepted.").count(), 0);
reply = {
  status: 200,
  contentType: "text/html",
  body: "<html>SPA fallback</html>",
};
await fill("project");
await page.getByRole("button", { name: "Send Inquiry" }).click();
await page
  .getByText("We could not confirm your submission.", { exact: false })
  .waitFor();
reply = { status: 200, contentType: "application/json", body: '{"ok":false}' };
await fill("project");
await page.getByRole("button", { name: "Send Inquiry" }).click();
await page
  .getByText("We could not confirm your submission.", { exact: false })
  .waitFor();
const beforeBot = calls;
await fill("project");
await page.locator("[name=website_confirmation]").evaluate((element) => {
  element.value = "spam";
});
await page.getByRole("button", { name: "Send Inquiry" }).click();
assert.equal(calls, beforeBot, "Honeypot must not call a receiving service");
assert.equal(await page.getByText("Your inquiry was accepted.").count(), 0);
await page.goto("http://127.0.0.1:4173/services/saas-development");
await page.getByRole("heading", { level: 1 }).waitFor();
await page.getByRole("link", { name: "Discuss Your Project" }).first().click();
await page.waitForURL("**/contact");
await page
  .getByRole("heading", {
    level: 1,
    name: "Your next step starts with a conversation.",
  })
  .waitFor();
assert.ok((await page.title()).includes("Contact Trovix"));
// Existing SPA hosts may return homepage HTML for deep routes. The client must
// render the requested page without attempting to hydrate the wrong document.
const fallbackHtml = await (await fetch('http://127.0.0.1:4173/')).text();
await page.route('http://127.0.0.1:4173/services/saas-development', route => route.fulfill({ contentType: 'text/html', body: fallbackHtml }));
await page.goto('http://127.0.0.1:4173/services/saas-development');
await page.getByRole('heading', { level: 1, name: 'From product idea to a platform built to evolve.' }).waitFor();
assert.equal(
  errors.length,
  0,
  "Hydration and runtime errors: " + errors.join("; "),
);
const noJs = await browser.newContext({ javaScriptEnabled: false });
const staticPage = await noJs.newPage();
await staticPage.goto("http://127.0.0.1:4173/services/saas-development");
assert.equal(await staticPage.locator("h1").count(), 1);
await browser.close();
console.log(
  "Passed: accepted project/partnership responses, server error, HTML fallback, negative acknowledgement, spam trap, production hydration/navigation, and JavaScript-free page content. All submissions were intercepted locally.",
);
