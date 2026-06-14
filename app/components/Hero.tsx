"use client";

import { motion } from "framer-motion";
import { HERO } from "@/app/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050505)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 w-full">
        {/* Content block — full width on mobile, constrained on desktop */}
        <div className="w-full lg:max-w-[56%]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 text-white/50"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {HERO.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-none tracking-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "-0.02em" }}
          >
            {HERO.headline.map((line, i) => (
              <span key={i} className="block">
                {i === 2 ? (
                  <>
                    {line.split("IA")[0]}
                    <span
                      style={{
                        background: "linear-gradient(90deg, #4f8ef7, #7c3aed)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      IA
                    </span>
                    {line.split("IA")[1]}
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-white/55 mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={HERO.cta.primary.href}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-montserrat)",
                background: "linear-gradient(90deg, #4f8ef7, #7c3aed)",
                boxShadow: "0 0 24px rgba(79,142,247,0.2)",
              }}
            >
              {HERO.cta.primary.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={HERO.cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white/70 border border-white/15 transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-white/5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {HERO.cta.secondary.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
