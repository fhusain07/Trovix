import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { BrandLogo } from "@/theme/BrandLogo";

const navLinks = [
  ["Services", "/services"],
  ["Our Work", "/portfolio"],
  ["About", "/about"],
  ["Technologies", "/technologies"],
  ["For Agencies", "/partners"],
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const elements = [
          toggle.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1100) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isOpen]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" aria-label="Trovix home" onClick={() => setIsOpen(false)}>
          <BrandLogo size={34} wordmarkClassName="brand-wordmark" />
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navLinks.map(([label, to]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/contact" className="header-cta">
            Let’s Talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            ref={toggle}
            type="button"
            className="icon-button menu-toggle"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          ref={panel}
          aria-label="Mobile navigation"
        >
          {[...navLinks, ["Contact", "/contact"]].map(([label, to]) => (
            <NavLink key={to} to={to} onClick={() => setIsOpen(false)}>
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
