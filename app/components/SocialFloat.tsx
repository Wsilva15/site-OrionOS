import { SOCIAL } from "@/app/lib/constants";

export default function SocialFloat() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      aria-label="Redes sociais"
    >
      {/* WhatsApp */}
      <a
        href={SOCIAL.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-[#0d0d0d] transition-all duration-200 hover:border-[#25d366]/40 hover:shadow-[0_0_16px_rgba(37,211,102,0.2)] hover:scale-110"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="#25d366"
          />
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.402A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.963 7.963 0 01-4.065-1.114l-.29-.173-3.028.851.854-2.963-.19-.303A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
            fill="#25d366"
          />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href={SOCIAL.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-[#0d0d0d] transition-all duration-200 hover:border-[#e1306c]/40 hover:shadow-[0_0_16px_rgba(225,48,108,0.2)] hover:scale-110"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig-grad)" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="1.8" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="url(#ig-grad)" />
        </svg>
      </a>
    </div>
  );
}
