import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZAAI — веб-разработка и дизайн",
  description: "Создаю современные лендинги, интернет-магазины и сайты-визитки для проектов и бизнеса.",
};

export const viewport: Viewport = {
  themeColor: "#FAF9F7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className={`${manrope.variable} min-h-screen overflow-x-hidden bg-background font-manrope text-foreground`}>
        {children}
      </body>
    </html>
  );
}