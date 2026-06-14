"use client";

import { motion } from "framer-motion";
import { Monitor, MessageSquare } from "lucide-react";
import { SERVICES } from "@/app/lib/constants";

const icons: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={24} strokeWidth={1.5} />,
  MessageSquare: <MessageSquare size={24} strokeWidth={1.5} />,
};

export default function Services() {
  return (
    <section id="servicos" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Serviços
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "-0.02em" }}
          >
            {SERVICES.heading}
          </h2>
          <p
            className="text-white/45 mt-3 text-base"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {SERVICES.subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative p-8 rounded-xl border border-white/8 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-6 text-white/60 group-hover:text-white transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                {icons[item.icon]}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "-0.01em" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-white/50 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/35 font-medium"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg, #4f8ef7, #7c3aed)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
