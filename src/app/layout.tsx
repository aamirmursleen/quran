import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Scheherazade_New,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Islamic PDF Library",
  description:
    "Discover, read, and download Quranic surahs and Islamic literature with an elegant, effortless experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${scheherazade.variable} antialiased bg-[#FEFDF8] text-[#2C3E50]`}
      >
        {children}
      </body>
    </html>
  );
}
