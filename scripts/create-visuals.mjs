import { mkdir, writeFile } from "node:fs/promises";
import { readBrandColors } from "./lib/brand-colors.mjs";
const palette = await readBrandColors();

// Original vector interface illustrations; not screenshots of shipped software.
await mkdir("public/images", { recursive: true });
await mkdir(".trovix-review/images", { recursive: true });
const text = (x, y, value, size = 12, fill = palette.muted, weight = 400) =>
  `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${fill}" font-weight="${weight}">${value}</text>`;
const rect = (x, y, w, h, fill, rx = 7, stroke = "none") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}"/>`;
for (const [kind, accent, title, labels, values] of [
  [
    "sales",
    palette.gold,
    "Pipeline overview",
    ["Open opportunities", "Active leads", "Follow-ups"],
    ["24", "128", "12"],
  ],
  [
    "school",
    palette.success,
    "School overview",
    ["Students", "Classes", "Attendance"],
    ["420", "18", "94%"],
  ],
  [
    "automation",
    palette.info,
    "Workflow overview",
    ["Active flows", "Events today", "Needs review"],
    ["08", "246", "03"],
  ],
]) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640"><defs><radialGradient id="bg"><stop stop-color="${accent}" stop-opacity=".25"/><stop offset="1" stop-color="${palette.dark}"/></radialGradient></defs><rect width="960" height="640" fill="${palette.dark}"/><rect width="960" height="640" fill="url(#bg)"/>`;
  svg += `<circle cx="750" cy="100" r="280" stroke="${accent}" opacity=".08" fill="none"/><circle cx="750" cy="100" r="230" stroke="${accent}" opacity=".08" fill="none"/>`;
  svg += `<g transform="translate(65 75) rotate(-2 420 250)">${rect(0, 0, 830, 495, palette.dark, 12, palette.line)}${rect(0, 0, 830, 31, palette.raised, 12)}${rect(0, 20, 830, 12, palette.raised, 0)}`;
  for (let i = 0; i < 3; i++)
    svg += `<circle cx="${16 + i * 11}" cy="16" r="3" fill="${i === 0 ? accent : palette.line}"/>`;
  svg += text(330, 20, "WORKSPACE / INTERFACE CONCEPT", 8, palette.muted);
  svg +=
    rect(0, 32, 151, 463, palette.surface, 0) +
    text(22, 68, "◈  workspace", 16, accent, 600);
  svg +=
    rect(15, 95, 120, 32, palette.soft, 5) +
    text(28, 116, "Overview", 10, palette.text);
  const nav =
    kind === "sales"
      ? ["Customers", "Sales pipeline", "Activity", "Reports"]
      : kind === "school"
        ? ["Students", "Attendance", "Fees", "Classes"]
        : ["Workflows", "Connections", "Activity", "Logs"];
  nav.forEach((name, i) => {
    svg += text(28, 155 + i * 35, name, 10);
  });
  svg +=
    text(24, 456, "TROVIX / DESIGN STUDY", 7, accent) +
    text(174, 69, "YOUR WORKSPACE", 8, accent) +
    text(174, 101, title, 24, palette.text, 500) +
    text(174, 122, "Fictional sample data • Illustrative interface only", 9);
  labels.forEach((label, i) => {
    svg +=
      rect(174 + i * 213, 145, 198, 91, palette.surface, 6, palette.line) +
      text(188 + i * 213, 168, label, 9) +
      text(188 + i * 213, 205, values[i], 27, palette.text, 500);
  });
  if (kind === "automation") {
    svg += text(177, 274, "Lead intake flow", 12, palette.text, 500);
    [0, 1, 2].forEach((i) => {
      const x = 185 + i * 207;
      svg +=
        rect(x, 300, 167, 80, palette.raised, 6, palette.line) +
        `<circle cx="${x + 22}" cy="324" r="8" fill="${accent}" fill-opacity=".2"/>` +
        text(
          x + 38,
          328,
          ["New lead", "Assign owner", "Notify team"][i],
          11,
          palette.text,
        ) +
        text(
          x + 17,
          356,
          ["Webhook trigger", "Routing rule", "Message action"][i],
          8,
        );
      if (i < 2)
        svg += `<path d="M${x + 167} 340h40" stroke="${accent}" stroke-width="2" stroke-dasharray="4 4"/>`;
    });
    svg +=
      rect(174, 400, 624, 55, palette.surface, 6, palette.line) +
      text(190, 422, "Recent activity", 10, palette.text) +
      text(
        190,
        442,
        "Sample event received → workflow illustrated → no live service connected",
        9,
      );
  } else {
    svg +=
      rect(174, 255, 624, 125, palette.surface, 6, palette.line) +
      text(
        190,
        279,
        kind === "sales" ? "Opportunity activity" : "Attendance by class",
        10,
        palette.text,
      );
    for (let i = 0; i < 15; i++) {
      const height = 22 + ((i * 23 + 17) % 57);
      svg += rect(195 + i * 39, 360 - height, 23, height, accent, 3);
    }
    ["Sample record A", "Sample record B"].forEach((name, i) => {
      svg +=
        rect(174, 396 + i * 40, 624, 32, palette.raised, 4) +
        text(190, 417 + i * 40, name, 9, palette.muted) +
        text(620, 417 + i * 40, "Illustrative record", 8);
    });
  }
  svg +=
    "</g>" +
    text(
      67,
      610,
      "DEMO / ORIGINAL INTERFACE ILLUSTRATION / NOT CLIENT WORK",
      10,
      accent,
    ) +
    "</svg>";
  await writeFile(".trovix-review/images/" + kind + "-workspace.svg", svg);
}
await writeFile(
  "public/images/portfolio-abstract.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="300" viewBox="0 0 560 300"><defs><radialGradient id="g"><stop stop-color="${palette.soft}"/><stop offset="1" stop-color="${palette.dark}"/></radialGradient></defs><rect width="560" height="300" fill="url(#g)"/><g fill="none" stroke="${palette.gold}" opacity=".16"><circle cx="280" cy="150" r="120"/><circle cx="280" cy="150" r="95"/><circle cx="280" cy="150" r="70"/><path d="M0 150h560M280 0v300" stroke-dasharray="4 9"/></g><g transform="translate(100 61) rotate(-7 180 90)"><rect width="280" height="170" rx="8" fill="${palette.surface}" stroke="${palette.line}"/><path d="M0 28h280M65 28v142" stroke="${palette.line}"/><circle cx="13" cy="14" r="3" fill="${palette.gold}"/><circle cx="24" cy="14" r="3" fill="${palette.line}"/><rect x="12" y="43" width="40" height="7" rx="3" fill="${palette.line}"/><rect x="12" y="61" width="30" height="5" rx="2" fill="${palette.soft}"/><rect x="12" y="77" width="34" height="5" rx="2" fill="${palette.soft}"/><rect x="82" y="45" width="67" height="37" rx="4" fill="${palette.soft}"/><rect x="160" y="45" width="101" height="37" rx="4" fill="${palette.soft}"/><path d="M84 141l30-16 23 7 28-31 30 11 26-21 35 4" stroke="${palette.gold}" stroke-width="2" fill="none"/></g><g transform="translate(355 135) rotate(7)"><rect width="110" height="95" rx="8" fill="${palette.raised}" stroke="${palette.line}"/><circle cx="25" cy="25" r="10" fill="${palette.gold}" fill-opacity=".2"/><path d="M20 25l4 4 7-8" fill="none" stroke="${palette.gold}"/><rect x="15" y="50" width="80" height="6" rx="3" fill="${palette.line}"/><rect x="15" y="65" width="60" height="5" rx="2" fill="${palette.line}"/></g><path d="M379 100l31-15 24 23" stroke="${palette.gold}" fill="none" stroke-width="1.5" stroke-dasharray="4 4"/></svg>`,
);
console.log("Created original portfolio illustrations.");
