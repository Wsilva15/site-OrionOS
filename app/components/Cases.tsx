"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CASES } from "@/app/lib/constants";

function CaseGallery({ images, color }: { images: string[]; color: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Main image */}
      <div
        className="relative flex-1 rounded-xl overflow-hidden border border-white/8 bg-[#0a0a0a]"
        style={{ minHeight: "220px" }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0 }}
            draggable={false}
          />
        ))}
        {/* Color overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${color}18, transparent)`,
          }}
        />
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className="relative flex-1 rounded-lg overflow-hidden border transition-all duration-200"
            style={{
              height: "44px",
              borderColor: i === active ? color : "rgba(255,255,255,0.08)",
              boxShadow: i === active ? `0 0 10px ${color}40` : "none",
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
            {i !== active && (
              <div className="absolute inset-0 bg-black/50" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="py-28 md:py-36 border-t border-white/6">
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
            Cases
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "-0.02em" }}
          >
            {CASES.heading}
          </h2>
          <p
            className="text-white/40 mt-3 text-base"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {CASES.subheading}
          </p>
        </motion.div>

        {/* Cases */}
        <div className="flex flex-col gap-10">
          {CASES.items.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8`}
            >
              {/* Gallery — alternates sides */}
              <div
                className={`p-6 bg-[#080808] ${i % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ minHeight: "320px" }}
              >
                <CaseGallery images={c.images} color={c.color} />
              </div>

              {/* Text */}
              <div
                className={`p-10 md:p-14 flex flex-col justify-center bg-[#050505] ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span
                  className="text-xs font-semibold tracking-widest uppercase mb-4 inline-block"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    color: c.color,
                  }}
                >
                  {c.tag}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm text-white/50 leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/35 font-medium"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
