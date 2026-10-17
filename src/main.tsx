import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import App from "./App";
import "./globals.css";

// Preserve the editor's existing route-change integration.
function setupRouteChangeBridge() {
  const notifyParent = () => {
    if (window.parent !== window)
      window.parent.postMessage(
        {
          type: "coderocket-route-change",
          path:
            window.location.pathname +
            window.location.search +
            window.location.hash,
        },
        "*",
      );
  };
  for (const method of ["pushState", "replaceState"] as const) {
    const original = window.history[method];
    window.history[method] = function (
      ...args: Parameters<History["pushState"]>
    ) {
      const result = original.apply(this, args);
      notifyParent();
      return result;
    };
  }
  window.addEventListener("popstate", notifyParent);
  window.addEventListener("hashchange", notifyParent);
  notifyParent();
}
setupRouteChangeBridge();
const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";
if (
  root.dataset.prerendered &&
  normalizePath(root.dataset.pagePath ?? "") ===
    normalizePath(window.location.pathname)
)
  hydrateRoot(root, app);
else createRoot(root).render(app);
