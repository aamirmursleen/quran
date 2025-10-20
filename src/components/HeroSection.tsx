"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroQuickLinks } from "@/data/content";

const placeholderOptions = [
  "Download Surah Yasin PDF",
  "Find Mishary Rashid recitations",
  "Ask for hadith about patience",
];

export function HeroSection() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderOptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero-pattern relative overflow-hidden bg-[#FEFDF8]">
      <div className="hero-content mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-36 pt-8 sm:px-12">
        <nav className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-6 py-4 shadow-sm backdrop-blur" aria-label="Primary">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0D7377]/10 text-[#0D7377] text-xl font-semibold shadow-sm">
              🕌
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#0D7377]">Islamic PDF Library</p>
              <p className="text-sm text-[#2C3E50]/70">Gateway to timeless knowledge</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/donate"
              className="rounded-full border border-[#D4AF37]/50 bg-white px-5 py-2 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-white"
            >
              Donate
            </Link>
            <button
              type="button"
              className="rounded-full border border-transparent bg-[#0D7377] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#095c60]"
            >
              Language
            </button>
          </div>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center md:items-start md:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0D7377]/20 bg-white/60 px-4 py-2 text-sm text-[#0D7377] shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D7377]/10 text-base">✨</span>
            Start with the exact resource you need.
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-[2.75rem] leading-[1.05] text-[#0D7377] sm:text-[3.5rem]">
              Download, listen, and explore Islamic knowledge in minutes
            </h1>
            <p className="text-lg text-[#2C3E50]/75 sm:text-xl">
              A calm home for the Qur&apos;an, hadith collections, duas, and timeless Islamic books—with PDFs, audio, and guided study tools all in one place.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D7377] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#095c60]"
            >
              <span>📥</span>
              Download Qur&apos;an PDFs
            </Link>
            <Link
              href="#audio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-6 py-3 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/60 hover:bg-[#0D7377]/10"
            >
              <span>🎧</span>
              Listen to Recitations
            </Link>
          </div>

          <div id="search" className="w-full max-w-3xl space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-transparent bg-white/90 px-4 py-3 shadow-[var(--shadow-lg)] search-glow">
              <span className="text-2xl text-[#0D7377]">🔍</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={placeholderOptions[placeholderIndex]}
                className="w-full bg-transparent text-base text-[#2C3E50] placeholder:text-[#2C3E50]/40 focus:outline-none"
                aria-label="Search the Islamic PDF Library"
              />
              <button
                type="button"
                className="group flex items-center gap-2 rounded-full bg-[#0D7377] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#095c60]"
              >
                <span className="text-lg">✨</span>
                <span className="hidden sm:inline">Ask AI</span>
              </button>
            </div>
            <p className="text-xs text-[#2C3E50]/60">
              Press enter to search across 5,000+ PDFs, audio recitations, and study resources. Need help? Jump to the AI guide below.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#2C3E50]/70">
              <span className="text-xs uppercase tracking-widest text-[#0D7377]/70">Popular:</span>
              {heroQuickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[#0D7377]/10 bg-white/70 px-4 py-2 transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-[#0D7377]/80">
            <span className="scroll-indicator text-lg">↓</span>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </header>
  );
}
