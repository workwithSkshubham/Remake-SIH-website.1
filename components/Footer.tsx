"use client";

import { Lightbulb } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] border-t border-[#3E5C76]/30 pt-16 pb-12 overflow-hidden text-xs text-[var(--subtle-text)] font-['Instrument_Sans'] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row matching Prototype */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#3E5C76]/20">
          {/* Left: Brand Logo & Subtext */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--ink-2)] border border-[#3E5C76]/50 flex items-center justify-center text-[#E7962B] shadow-sm">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-base tracking-wide text-[var(--chalk)] uppercase">
                Smart India <span className="text-[#E7962B]">Hackathon</span>
              </span>
              <span className="text-[10px] tracking-wider text-[#3E5C76] font-mono uppercase">
                Innovation | Collaboration | Impact
              </span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center gap-5 text-xs font-medium text-[var(--subtle-text)]">
            <a href="#hero" className="hover:text-[var(--chalk)] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[var(--chalk)] transition-colors">
              About
            </a>
            <a href="#themes" className="hover:text-[var(--chalk)] transition-colors">
              Themes
            </a>
            <a href="#journey" className="hover:text-[var(--chalk)] transition-colors">
              Timeline
            </a>
            <a href="#sponsors" className="hover:text-[var(--chalk)] transition-colors">
              Sponsors
            </a>
            <a href="#faq" className="hover:text-[var(--chalk)] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right: Social Media Icons matching Prototype */}
          <div className="flex items-center gap-4 text-[var(--subtle-text)]">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E7962B] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66 1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E7962B] transition-colors"
              aria-label="X Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E7962B] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E7962B] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* #SIH Tag Badge */}
            <span className="text-[11px] font-mono text-[#E7962B] bg-[var(--ink-2)] border border-[#3E5C76]/30 px-2 py-0.5 rounded font-bold">
              #SIH
            </span>
          </div>
        </div>

        {/* Sub-footer Row matching Prototype */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--subtle-text)]">
          <p>© 2026 Smart India Hackathon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--chalk)] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#3E5C76]">|</span>
            <a href="#" className="hover:text-[var(--chalk)] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
