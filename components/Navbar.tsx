"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Lightbulb, Terminal, ArrowUpRight, Sun, Moon, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenTerminal?: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Themes", href: "#themes" },
  { name: "Problems", href: "#problems" },
  { name: "Timeline", href: "#timeline" },
  { name: "Map", href: "#map" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem("sih-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator
      const sections = ["hero", "about", "themes", "problems", "timeline", "map", "sponsors", "faq"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("sih-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--header-bg)] backdrop-blur-md border-b border-[#3E5C76]/30 py-3 shadow-xl shadow-black/20"
          : "bg-transparent py-5"
      )}
    >
      {/* Patriotic Top Hairline Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E7962B] via-[#ECEEE7]/80 to-[#2FAE82] opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7962B]"
        >
          <div className="relative w-10 h-10 rounded-lg bg-[var(--ink-2)] border border-[#3E5C76]/50 flex items-center justify-center text-[#E7962B] group-hover:border-[#E7962B] transition-colors overflow-hidden shadow-md">
            <Lightbulb className="w-5 h-5 text-[#E7962B] group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E7962B]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-wide text-[var(--chalk)] font-['Instrument_Sans'] uppercase">
              Smart India <span className="text-[#E7962B]">Hackathon</span>
            </span>
            <span className="text-[10px] tracking-wider text-[#3E5C76] font-mono uppercase">
              Innovation · Collaboration · Impact
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[var(--ink-2)]/70 backdrop-blur-sm border border-[#3E5C76]/30 px-3 py-1.5 rounded-full shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-1 text-xs lg:text-sm font-medium rounded-full transition-all duration-200",
                  isActive
                    ? "text-[var(--chalk)] bg-[#3E5C76]/40 shadow-sm font-semibold"
                    : "text-[var(--subtle-text)] hover:text-[var(--chalk)] hover:bg-[#3E5C76]/20"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher Toggle (Light / Dark Mode) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--ink-2)] hover:bg-[#3E5C76]/25 border border-[#3E5C76]/40 text-[#E7962B] transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center"
            title={theme === "dark" ? "Switch to Light Blueprint mode" : "Switch to Dark Navy mode"}
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#E7962B] transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#3E5C76] transition-transform rotate-0 hover:-rotate-12" />
            )}
          </button>

          {/* Terminal Easter Egg Trigger */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-2 text-[#3E5C76] hover:text-[#2FAE82] bg-[var(--ink-2)] hover:bg-[#3E5C76]/20 border border-[#3E5C76]/40 rounded-lg transition-colors text-xs font-mono flex items-center gap-1.5 shadow-sm"
              title="Open Terminal (Shortcut: ~)"
              aria-label="Open developer terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[11px]">sys_log</span>
            </button>
          )}

          {/* Portal Login Link */}
          <Link
            href="/login"
            className="px-3.5 py-1.5 rounded-full border border-[#3E5C76]/50 bg-[var(--ink-2)] text-[var(--chalk)] hover:border-[#E7962B] hover:text-[#E7962B] font-mono text-xs transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <LogIn className="w-3.5 h-3.5 text-[#E7962B]" />
            <span>Portal Login</span>
          </Link>

          <a
            href="#registration"
            className="relative group overflow-hidden px-4 py-2 rounded-full bg-[#E7962B] text-[#0B1622] font-medium text-xs lg:text-sm transition-all hover:shadow-[0_0_20px_rgba(231,150,43,0.4)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-semibold">
              Register Now
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="/login"
            className="p-2 rounded-lg bg-[var(--ink-2)] border border-[#3E5C76]/40 text-[#E7962B]"
            title="Portal Login"
          >
            <LogIn className="w-4 h-4" />
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--ink-2)] border border-[#3E5C76]/40 text-[#E7962B]"
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[var(--chalk)] hover:text-[#E7962B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E7962B] rounded-lg"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--header-bg)] border-b border-[#3E5C76]/40 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-[var(--chalk)]/80 hover:text-[#E7962B] py-2 border-b border-[#3E5C76]/20 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#3E5C76] font-mono">0{NAV_LINKS.indexOf(link) + 1}</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg border border-[#E7962B]/60 bg-[var(--ink-2)] text-[#E7962B] font-semibold text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Portal Login (All Roles)
              </Link>
              <a
                href="#registration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-[#E7962B] text-[#0B1622] font-semibold text-sm shadow-md"
              >
                Register Now (SPOC Portal)
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="flex-1 py-2 rounded-lg bg-[var(--ink-2)] text-[var(--chalk)] border border-[#3E5C76]/40 font-mono text-xs flex items-center justify-center gap-2"
                >
                  {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-[#E7962B]" /> : <Moon className="w-3.5 h-3.5 text-[#3E5C76]" />}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>
                {onOpenTerminal && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenTerminal();
                    }}
                    className="flex-1 py-2 rounded-lg bg-[var(--ink-2)] text-[#2FAE82] border border-[#3E5C76]/40 font-mono text-xs flex items-center justify-center gap-2"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    sys_log
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
