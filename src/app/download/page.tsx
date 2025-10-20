"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { allSurahs } from "@/data/surahs";
import { searchSurahs, type SurahSearchResult } from "@/lib/searchSurahs";

const revelationFilters = [
  { label: "All", value: "all" as const },
  { label: "Makki", value: "Makki" as const },
  { label: "Madani", value: "Madani" as const },
];

export default function DownloadIndexPage() {
  const [search, setSearch] = useState("");
  const [revelation, setRevelation] = useState<(typeof revelationFilters)[number]["value"]>(
    "all",
  );
  const [results, setResults] = useState<SurahSearchResult[]>(() => searchSurahs("", "all"));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      setIsLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (search.trim()) params.set("q", search.trim());
      params.set("revelation", revelation);
      params.set("limit", "114");

      fetch(`/api/search?${params.toString()}`, { signal: controller.signal })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error("Failed to search");
          }
          const payload = await response.json();
          setResults(payload.results);
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          setError("Unable to search right now. Please try again shortly.");
        })
        .finally(() => setIsLoading(false));
    }, 250);

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [revelation, search]);

  const totalSurahs = allSurahs.length;
  const makkiCount = allSurahs.filter((item) => item.revelation === "Makki").length;
  const madaniCount = totalSurahs - makkiCount;

  return (
    <main className="min-h-screen bg-[#FEFDF8] px-6 py-16 text-[#2C3E50] sm:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section
          className="rounded-3xl border border-white/80 bg-white/95 p-8 shadow-[var(--shadow-lg)]"
          data-animate="fade-up"
        >
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#0D7377]">
                📚 Individual Surahs Library
              </span>
              <h1 className="text-3xl font-semibold text-[#0D7377] sm:text-[2.75rem]">
                Download any surah in seconds
              </h1>
              <p className="max-w-2xl text-sm text-[#2C3E50]/70 sm:text-base">
                Browse all 114 chapters of the Qur&apos;an. Pick a surah to download the PDF, view it online, or open the AI guide for tailored study tips.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#0D7377]/15 bg-white px-4 py-3 shadow-[var(--shadow-sm)]">
                <span className="text-2xl text-[#0D7377]">🔍</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by surah name, number, or meaning..."
                  className="w-full bg-transparent text-sm text-[#2C3E50] placeholder:text-[#2C3E50]/40 focus:outline-none sm:text-base"
                  aria-label="Search surah list"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by revelation">
                {revelationFilters.map((filter) => {
                  const isActive = revelation === filter.value;
                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => setRevelation(filter.value)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#0D7377] text-white shadow-md"
                          : "border border-[#0D7377]/20 bg-white text-[#0D7377] hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 text-sm text-[#2C3E50]/60 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#0D7377]/10 bg-[#0D7377]/5 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#0D7377]/80">Total Surahs</p>
                <p className="mt-2 text-2xl font-semibold text-[#0D7377]">{totalSurahs}</p>
              </div>
              <div className="rounded-2xl border border-[#0D7377]/10 bg-[#0D7377]/5 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#0D7377]/80">Makki Chapters</p>
                <p className="mt-2 text-2xl font-semibold text-[#0D7377]">{makkiCount}</p>
              </div>
              <div className="rounded-2xl border border-[#0D7377]/10 bg-[#0D7377]/5 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#0D7377]/80">Madani Chapters</p>
                <p className="mt-2 text-2xl font-semibold text-[#0D7377]">{madaniCount}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10" data-animate="fade-up" data-delay="1">
          <div className="flex items-center justify-between text-sm text-[#2C3E50]/60">
            <p>
              Showing <span className="font-semibold text-[#0D7377]">{results.length}</span> of {totalSurahs} surahs
            </p>
            {isLoading && <span className="text-xs uppercase tracking-[0.3em] text-[#0D7377]">Searching…</span>}
            <Link
              href="#top"
              className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0D7377]/70 transition hover:text-[#0D7377] sm:inline-flex"
            >
              Back to top ↑
            </Link>
          </div>

          {error && (
            <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {results.map((surah) => (
              <article
                key={surah.number}
                className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-5 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] ${
                  isLoading ? "opacity-60" : ""
                }`}
                data-animate="fade-up"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#0D7377]/10 to-[#4DB8B8]/10" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D7377]/10 text-sm font-semibold text-[#0D7377]">
                        {surah.number}
                      </span>
                      <div>
                        <p className="text-lg font-semibold text-[#0D7377]">{surah.transliteration}</p>
                        <p className="text-sm text-[#2C3E50]/60">{surah.english}</p>
                      </div>
                    </div>
                    <span className="text-xl font-medium text-[#0D7377]">{surah.arabic}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#2C3E50]/60">
                    <span className="rounded-full bg-[#0D7377]/10 px-3 py-1 font-semibold text-[#0D7377]">
                      {surah.revelation} chapter
                    </span>
                    <Link
                      href={`/download/${surah.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D7377] transition hover:translate-x-1"
                    >
                      Download PDF →
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href={`/surah/${surah.slug}`}
                      className="inline-flex items-center gap-1 rounded-full border border-[#0D7377]/20 bg-white px-3 py-1 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                    >
                      👁️ Preview
                    </Link>
                    <Link
                      href={`/audio/${surah.slug}`}
                      className="inline-flex items-center gap-1 rounded-full border border-[#0D7377]/20 bg-white px-3 py-1 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                    >
                      🎧 Listen
                    </Link>
                    <Link
                      href={`/download/${surah.slug}?ai=1`}
                      className="inline-flex items-center gap-1 rounded-full border border-dashed border-[#0D7377]/30 bg-[#0D7377]/5 px-3 py-1 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
                    >
                      🤖 Ask AI
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!isLoading && results.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#0D7377]/30 bg-[#0D7377]/5 px-6 py-10 text-center text-sm text-[#2C3E50]/70">
              <p className="text-base font-semibold text-[#0D7377]">No matches found</p>
              <p className="mt-2">Try adjusting your search or clearing the revelation filter.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
