import { mkdir, writeFile } from "node:fs/promises";

// Original vector interface illustrations; not screenshots of shipped software.
await mkdir("public/images", { recursive: true });
await mkdir(".trovix-review/images", { recursive: true });
const text = (x, y, value, size = 12, fill = "#9ea996", weight = 400) =>
  `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${fill}" font-weight="${weight}">${value}</text>`;
const rect = (x, y, w, h, fill, rx = 7, stroke = "none") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}"/>`;
for (const [kind, accent, title, labels, values] of [
  [
    "sales",
    "#d8bd6b",
    "Pipeline overview",
    ["Open opportunities", "Active leads", "Follow-ups"],
    ["24", "128", "12"],
  ],
  [
    "school",
    "#99bea2",
    "School overview",
    ["Students", "Classes", "Attendance"],
    ["420", "18", "94%"],
  ],
  [
    "automation",
    "#9ab6d1",
    "Workflow overview",
    ["Active flows", "Events today", "Needs review"],
    ["08", "246", "03"],
  ],
]) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640"><defs><radialGradient id="bg"><stop stop-color="${accent}" stop-opacity=".25"/><stop offset="1" stop-color="#1b221b"/></radialGradient></defs><rect width="960" height="640" fill="#1a201a"/><rect width="960" height="640" fill="url(#bg)"/>`;
  svg += `<circle cx="750" cy="100" r="280" stroke="${accent}" opacity=".08" fill="none"/><circle cx="750" cy="100" r="230" stroke="${accent}" opacity=".08" fill="none"/>`;
  svg += `<g transform="translate(65 75) rotate(-2 420 250)">${rect(0, 0, 830, 495, "#131912", 12, "#3b4432")}${rect(0, 0, 830, 31, "#242c20", 12)}${rect(0, 20, 830, 12, "#242c20", 0)}`;
  for (let i = 0; i < 3; i++)
    svg += `<circle cx="${16 + i * 11}" cy="16" r="3" fill="${i === 0 ? accent : "#58604e"}"/>`;
  svg += text(330, 20, "WORKSPACE / INTERFACE CONCEPT", 8, "#a9b39e");
  svg +=
    rect(0, 32, 151, 463, "#1a2217", 0) +
    text(22, 68, "◈  workspace", 16, accent, 600);
  svg +=
    rect(15, 95, 120, 32, "#2e3926", 5) +
    text(28, 116, "Overview", 10, "#e0e8d7");
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
    text(174, 101, title, 24, "#e8eee0", 500) +
    text(174, 122, "Fictional sample data • Illustrative interface only", 9);
  labels.forEach((label, i) => {
    svg +=
      rect(174 + i * 213, 145, 198, 91, "#1c2618", 6, "#333e2a") +
      text(188 + i * 213, 168, label, 9) +
      text(188 + i * 213, 205, values[i], 27, "#e6eddc", 500);
  });
  if (kind === "automation") {
    svg += text(177, 274, "Lead intake flow", 12, "#e1e8d8", 500);
    [0, 1, 2].forEach((i) => {
      const x = 185 + i * 207;
      svg +=
        rect(x, 300, 167, 80, "#222f20", 6, "#41523c") +
        `<circle cx="${x + 22}" cy="324" r="8" fill="${accent}" fill-opacity=".2"/>` +
        text(
          x + 38,
          328,
          ["New lead", "Assign owner", "Notify team"][i],
          11,
          "#dce9d9",
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
      rect(174, 400, 624, 55, "#1b2518", 6, "#333e2a") +
      text(190, 422, "Recent activity", 10, "#dce9d9") +
      text(
        190,
        442,
        "Sample event received → workflow illustrated → no live service connected",
        9,
      );
  } else {
    svg +=
      rect(174, 255, 624, 125, "#1b2518", 6, "#333e2a") +
      text(
        190,
        279,
        kind === "sales" ? "Opportunity activity" : "Attendance by class",
        10,
        "#dde7d5",
      );
    for (let i = 0; i < 15; i++) {
      const height = 22 + ((i * 23 + 17) % 57);
      svg += rect(195 + i * 39, 360 - height, 23, height, accent, 3);
    }
    ["Sample record A", "Sample record B"].forEach((name, i) => {
      svg +=
        rect(174, 396 + i * 40, 624, 32, "#20291c", 4) +
        text(190, 417 + i * 40, name, 9, "#cbd8c1") +
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
  `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="300" viewBox="0 0 560 300"><defs><radialGradient id="g"><stop stop-color="#43452c"/><stop offset="1" stop-color="#191f17"/></radialGradient></defs><rect width="560" height="300" fill="url(#g)"/><g fill="none" stroke="#d8bd6b" opacity=".16"><circle cx="280" cy="150" r="120"/><circle cx="280" cy="150" r="95"/><circle cx="280" cy="150" r="70"/><path d="M0 150h560M280 0v300" stroke-dasharray="4 9"/></g><g transform="translate(100 61) rotate(-7 180 90)"><rect width="280" height="170" rx="8" fill="#1c2519" stroke="#66734d"/><path d="M0 28h280M65 28v142" stroke="#39452d"/><circle cx="13" cy="14" r="3" fill="#d8bd6b"/><circle cx="24" cy="14" r="3" fill="#66734d"/><rect x="12" y="43" width="40" height="7" rx="3" fill="#48563a"/><rect x="12" y="61" width="30" height="5" rx="2" fill="#34412b"/><rect x="12" y="77" width="34" height="5" rx="2" fill="#34412b"/><rect x="82" y="45" width="67" height="37" rx="4" fill="#34412b"/><rect x="160" y="45" width="101" height="37" rx="4" fill="#2b3823"/><path d="M84 141l30-16 23 7 28-31 30 11 26-21 35 4" stroke="#d8bd6b" stroke-width="2" fill="none"/></g><g transform="translate(355 135) rotate(7)"><rect width="110" height="95" rx="8" fill="#2d3824" stroke="#738355"/><circle cx="25" cy="25" r="10" fill="#d8bd6b" fill-opacity=".2"/><path d="M20 25l4 4 7-8" fill="none" stroke="#d8bd6b"/><rect x="15" y="50" width="80" height="6" rx="3" fill="#69744f"/><rect x="15" y="65" width="60" height="5" rx="2" fill="#485536"/></g><path d="M379 100l31-15 24 23" stroke="#d8bd6b" fill="none" stroke-width="1.5" stroke-dasharray="4 4"/></svg>`,
);
console.log("Created original portfolio illustrations.");
