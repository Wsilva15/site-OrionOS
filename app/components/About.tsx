"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Bot, Headphones } from "lucide-react";
import { ABOUT } from "@/app/lib/constants";

const icons: Record<string, React.ReactNode> = {
  Zap: <Zap size={18} strokeWidth={1.5} />,
  Layers: <Layers size={18} strokeWidth={1.5} />,
  Bot: <Bot size={18} strokeWidth={1.5} />,
  Headphones: <Headphones size={18} strokeWidth={1.5} />,
};

export default function About() {
  return (
    <section id="sobre" className="py-28 md:py-36 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Sobre
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "-0.02em" }}
            >
              {ABOUT.heading}
            </h2>
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-white/50 text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {p}
              </p>
            ))}

            {/* Accent stat */}
            <div className="mt-10 inline-flex items-center gap-3 border border-white/10 rounded-lg px-5 py-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#4f8ef7", boxShadow: "0 0 8px #4f8ef7" }}
              />
              <span
                className="text-sm text-white/60"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Projetos entregues com acompanhamento contínuo
              </span>
            </div>
          </motion.div>

          {/* Right — Differentials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ABOUT.differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#0d0d0d] border border-white/7"
              >
                <div
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md mb-4 text-[#4f8ef7]"
                  style={{ background: "rgba(79,142,247,0.1)" }}
                >
                  {icons[d.icon]}
                </div>
                <h4
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {d.title}
                </h4>
                <p
                  className="text-xs text-white/45 leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
