"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  inspirationalQuotes,
  recommendedAfterDownload,
  surahDetails,
} from "@/data/content";

export default function DownloadFlowPage({
  params,
}: {
  params: { slug: string };
}) {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const detail =
    surahDetails[params.slug as keyof typeof surahDetails] || surahDetails.yasin;

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const next = Math.min(prev + Math.random() * 12, 100);
        if (next >= 100) {
          setCompleted(true);
        }
        return next;
      });
    }, 700);

    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 6000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(quoteTimer);
    };
  }, []);

  const currentQuote = useMemo(
    () => inspirationalQuotes[quoteIndex],
    [quoteIndex],
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-[#FEFDF8] px-6 py-16 text-center text-[#2C3E50]">
      <Link
        href={`/surah/${detail.slug}`}
        className="absolute left-6 top-6 text-sm font-semibold text-[#0D7377] hover:text-[#095c60]"
      >
        ← Back to Surah
      </Link>

      <div className="flex w-full max-w-3xl flex-col items-center gap-8 rounded-3xl border border-white/80 bg-white/90 p-10 shadow-[var(--shadow-lg)]">
        {!completed ? (
          <>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#0D7377]/30">
              <div className="h-16 w-16 animate-spin-slow rounded-full border-4 border-[#0D7377]/20 border-t-[#0D7377]" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-[#0D7377]">
                Preparing your download...
              </p>
              <div className="h-3 w-64 overflow-hidden rounded-full bg-[#0D7377]/10">
                <div
                  className="h-full rounded-full bg-[#0D7377] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-[#2C3E50]/60">
                {Math.round(progress)}% complete
              </p>
            </div>
            <div className="rounded-2xl bg-[#0D7377]/5 px-6 py-4 text-sm text-[#0D7377]">
              <p className="italic">“{currentQuote.quote}”</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#0D7377]/80">
                {currentQuote.source}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="relative flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 animate-pop-burst rounded-full bg-[#0D7377]/10" />
              <div className="absolute inset-0 animate-pop-burst-delayed rounded-full bg-[#D4AF37]/10" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0D7377] text-3xl text-white">
                ✅
              </div>
            </div>
            <p className="text-2xl font-semibold text-[#0D7377]">
              Download complete! 🎉
            </p>
            <p className="max-w-xl text-sm text-[#2C3E50]/70">
              Your PDF has been saved to your downloads folder. May this benefit you in this life and the Hereafter.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-full bg-[#0D7377] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#095c60]"
              >
                📂 Open file
              </a>
              <Link
                href={`/download/${detail.slug}?retry=1`}
                className="rounded-full border border-[#0D7377]/30 bg-white px-5 py-3 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
              >
                🔄 Download again
              </Link>
            </div>
            <div className="grid gap-3 text-sm text-[#2C3E50]/70">
              <p className="font-semibold text-[#0D7377]">Continue learning:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {recommendedAfterDownload.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-full border border-[#0D7377]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-5 text-sm text-[#2C3E50]/70">
              <p className="text-base font-semibold text-[#D4AF37]">
                Love this service? Support the library
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm font-semibold">
                <Link
                  href="/donate"
                  className="rounded-full bg-[#D4AF37] px-4 py-2 text-white transition hover:bg-[#b7922d]"
                >
                  💝 Donate
                </Link>
                <Link
                  href="/share"
                  className="rounded-full border border-[#D4AF37]/40 bg-white px-4 py-2 text-[#D4AF37] transition hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"
                >
                  📣 Share
                </Link>
                <Link
                  href="/reviews"
                  className="rounded-full border border-[#0D7377]/20 bg-white px-4 py-2 text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                >
                  ⭐ Leave a review
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
