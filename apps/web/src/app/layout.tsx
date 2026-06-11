import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Concierge",
  description:
    "Beri AI sebuah budget dan izin terbatas — ia merencanakan, mendelegasikan, dan membayar layanan sendiri, dalam batas yang kamu kontrol.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
