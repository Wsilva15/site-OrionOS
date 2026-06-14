"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { CONTACT } from "@/app/lib/constants";

export default function Contact() {
  return (
    <section id="contato" className="py-28 md:py-36 border-t border-white/6">
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
            Contato
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-rajdhani)", letterSpacing: "-0.02em" }}
          >
            {CONTACT.heading}
          </h2>
          <p
            className="text-white/40 mt-3 text-base max-w-lg"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {CONTACT.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs text-white/40 font-medium"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {CONTACT.fields.name}
                </label>
                <input
                  type="text"
                  placeholder="Wesley"
                  className="w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#4f8ef7]/50 transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs text-white/40 font-medium"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {CONTACT.fields.company}
                </label>
                <input
                  type="text"
                  placeholder="Sua empresa"
                  className="w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#4f8ef7]/50 transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-xs text-white/40 font-medium"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {CONTACT.fields.whatsapp}
              </label>
              <input
                type="tel"
                placeholder="+55 (11) 99999-9999"
                className="w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#4f8ef7]/50 transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-xs text-white/40 font-medium"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {CONTACT.fields.message}
              </label>
              <textarea
                rows={5}
                placeholder="Quero um site para..."
                className="w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#4f8ef7]/50 transition-colors resize-none"
                style={{ fontFamily: "var(--font-montserrat)" }}
              />
            </div>

            <button
              type="submit"
              className="self-start px-8 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(79,142,247,0.3)]"
              style={{
                fontFamily: "var(--font-montserrat)",
                background: "linear-gradient(90deg, #4f8ef7, #7c3aed)",
              }}
            >
              {CONTACT.submit}
            </button>
          </motion.form>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* WhatsApp */}
            <div className="p-6 rounded-xl bg-[#0d0d0d] border border-white/8">
              <p
                className="text-xs text-white/35 mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {CONTACT.whatsapp.label}
              </p>
              <a
                href={CONTACT.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white font-semibold text-sm transition-colors hover:text-[#4f8ef7]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <MessageCircle size={18} strokeWidth={1.5} className="text-[#4f8ef7]" />
                {CONTACT.whatsapp.text}
                <span className="transition-transform duration-200 group-hover:translate-x-1 text-white/40">
                  →
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl bg-[#0d0d0d] border border-white/8">
              <p
                className="text-xs text-white/35 mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Email
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-center gap-3 text-white font-semibold text-sm transition-colors hover:text-[#4f8ef7]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <Mail size={18} strokeWidth={1.5} className="text-[#4f8ef7]" />
                {CONTACT.email}
              </a>
            </div>

            {/* Response time */}
            <p
              className="text-xs text-white/25 leading-relaxed px-1"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Respondemos em até 24h. Para urgências, prefira o WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
