import Image from "next/image";
import { FOOTER } from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={FOOTER.logo}
                alt="OrionOS"
                width={28}
                height={28}
                className="object-contain opacity-80"
              />
              <span
                className="font-bold text-base text-white/70"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                OrionOS
              </span>
            </div>
            <p
              className="text-xs text-white/25"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {FOOTER.tagline}
            </p>
          </div>

          {/* Links */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-white/35 hover:text-white/70 transition-colors"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={FOOTER.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/25 hover:text-white/60 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                  fill="currentColor"
                />
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.402A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.963 7.963 0 01-4.065-1.114l-.29-.173-3.028.851.854-2.963-.19-.303A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={FOOTER.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/25 hover:text-white/60 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5">
          <p
            className="text-xs text-white/20"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
