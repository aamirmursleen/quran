"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { heroQuickLinks } from "@/data/content";

const placeholderOptions = [
  "Download Surah Yasin PDF",
  "Find Mishary Rashid recitations",
  "Ask for hadith about patience",
];

export function HeroSection() {
  const router = useRouter();
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
      <div className="hero-content mx-auto flex min-h-screen max-w-6xl flex-col gap-14 px-6 pb-36 pt-12 sm:px-12">
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

          <div id="search" className="w-full max-w-4xl space-y-3" data-animate="fade-up">
            <div className="search-glow relative overflow-hidden rounded-[2.5rem] border border-[#0D7377]/10 bg-white/95 p-6 shadow-[var(--shadow-lg)]">
              <div
                className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#0D7377]/8 via-white to-[#4DB8B8]/5"
                aria-hidden
              />
              <div className="relative flex flex-col gap-5">
                <form
                  className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!query.trim()) return;
                    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
                  }}
                >
                  <div className="flex flex-1 items-center gap-4 rounded-[2rem] bg-white/80 px-6 py-5 text-lg text-[#2C3E50] shadow-[var(--shadow-sm)]">
                    <span className="text-3xl text-[#0D7377]">🔍</span>
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={placeholderOptions[placeholderIndex]}
                      className="w-full bg-transparent text-lg text-[#2C3E50] placeholder:text-[#2C3E50]/40 focus:outline-none"
                      aria-label="Search the Islamic PDF Library"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-[2rem] bg-[#0D7377] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#095c60]"
                  >
                    <span className="text-xl">🔎</span>
                    <span>Search</span>
                  </button>
                </form>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[#2C3E50]/60">
                    Press enter to search across 5,000+ PDFs, audio recitations, and study resources. Need help? Jump to the AI guide below.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <Link
                      href="#ask-ai"
                      className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0D7377] transition hover:border-[#0D7377]/60 hover:bg-[#0D7377]/10"
                    >
                      ✨ Ask AI
                    </Link>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
                      Popular now
                    </span>
                    {heroQuickLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-full border border-[#0D7377]/15 bg-white/70 px-4 py-2 text-[#2C3E50]/70 transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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
