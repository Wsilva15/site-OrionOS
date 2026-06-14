import type { Metadata } from "next";
import { Rajdhani, Montserrat } from "next/font/google";
import "./globals.css";
import GlobalStarField from "./components/GlobalStarField";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "OrionOS — Sites, Sistemas e IA para empresas",
  description:
    "Desenvolvemos sites premium, sistemas sob medida e agentes de IA no WhatsApp. Tecnologia que trabalha enquanto você foca no que importa.",
  keywords: ["sites premium", "agente whatsapp ia", "sistemas web", "gestão de clientes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${rajdhani.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <GlobalStarField />
        <div style={{ position: "relative", zIndex: 2 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
