import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
type Theme = "light" | "dark";
const ThemeContext = createContext<
  { theme: Theme; toggleTheme: () => void } | undefined
>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {
      /* Storage may be unavailable. */
    }
    if (saved === "light" || saved === "dark") {
      document.documentElement.classList.toggle("dark", saved === "dark");
      requestAnimationFrame(() => setTheme(saved));
    }
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* In-memory preference still works. */
    }
  };
  useEffect(() => {
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
