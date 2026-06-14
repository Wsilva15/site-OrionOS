"use client";

import Image from "next/image";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";
import { NAV } from "@/app/lib/constants";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image src={NAV.logo} alt="OrionOS" width={36} height={36} className="object-contain" />
          <span
            className="font-display font-bold text-lg tracking-tight text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            OrionOS
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={NAV.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-lg border border-white/20 text-white transition-all duration-200 hover:bg-[#4f8ef7] hover:border-[#4f8ef7] hover:text-white"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {NAV.cta.label}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/8 bg-[#050505]/95 backdrop-blur-md"
        >
          <ul className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
            {NAV.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={NAV.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold px-5 py-2 rounded-lg bg-[#4f8ef7] text-white"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {NAV.cta.label}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
