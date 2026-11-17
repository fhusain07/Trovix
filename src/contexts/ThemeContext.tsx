import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  startTransition,
  type ReactNode,
} from "react";
type Theme = "light" | "dark";
const ThemeContext = createContext<
  { theme: Theme; toggleTheme: () => void } | undefined
>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let frame = 0;
    const syncPreference = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {
        /* Storage may be unavailable; use the system preference. */
      }
      const next =
        saved === "light" || saved === "dark"
          ? saved
          : systemTheme.matches ? "dark" : "light";
      cancelAnimationFrame(frame);
      // Preserve prerendered content while lazy route modules finish hydrating.
      frame = requestAnimationFrame(() => startTransition(() => setTheme(next)));
    };
    syncPreference();
    systemTheme.addEventListener("change", syncPreference);
    return () => {
      cancelAnimationFrame(frame);
      systemTheme.removeEventListener("change", syncPreference);
    };
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    startTransition(() => setTheme(next));
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* In-memory preference still works. */
    }
  };
  // Apply surface colors, logos, and browser icons in the same paint.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.querySelectorAll<HTMLLinkElement>("link[data-theme-icon]")
      .forEach(link => {
        link.href = `/branding/company/${theme}/${link.dataset.themeIcon}`;
      });
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      getComputedStyle(document.body).backgroundColor,
    );
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
