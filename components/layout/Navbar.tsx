"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-primary/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#hero"
          className="font-playfair font-bold text-base text-text-primary hover:text-text-secondary transition-colors duration-200"
        >
          Krish Kaushik
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-sm border border-border text-text-secondary hover:border-text-secondary transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.18 }} className="w-3.5 h-px bg-current block" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.12 }} className="w-3.5 h-px bg-current block" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.18 }} className="w-3.5 h-px bg-current block" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-bg-elevated border-b border-border"
          >
            <div className="flex flex-col py-4 px-6 gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-inter text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
