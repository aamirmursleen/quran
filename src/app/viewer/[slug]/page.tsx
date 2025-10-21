"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useMemo, useState } from "react";
import { surahDetails, viewerShortcuts } from "@/data/content";
import { allSurahs } from "@/data/surahs";

export default function ViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const surahMeta = allSurahs.find((item) => item.slug === slug);

  if (!surahMeta) {
    notFound();
  }

  const detail = surahDetails[surahMeta.slug];

  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [nightMode, setNightMode] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const totalPages = detail.pages;
  const progress = useMemo(() => Math.round((page / totalPages) * 100), [page, totalPages]);

  const themeClasses = nightMode
    ? "bg-[#0B1A1C] text-[#E6F7F8]"
    : "bg-[#FEFDF8] text-[#2C3E50]";
  const controlButtonClass = nightMode
    ? "rounded-full border border-white/20 bg-white/5 px-3 py-2 transition hover:border-white/30 hover:bg-white/10"
    : "rounded-full border border-[#0D7377]/20 bg-white px-3 py-2 transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10 hover:text-[#0D7377]";
  const accentPillClass = nightMode
    ? "rounded-full bg-white/10 px-3 py-1 text-white"
    : "rounded-full bg-[#0D7377]/10 px-3 py-1 text-[#0D7377]";

  return (
    <div className={`min-h-screen transition-colors ${themeClasses}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-8">
        <header
          className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/50 px-4 py-3 shadow-sm backdrop-blur ${
            nightMode ? "bg-[#0D1F21]/80 text-[#E6F7F8]" : "bg-white/80 text-[#2C3E50]"
          }`}
        >
          <div className="flex items-center gap-3">
            <Link
              href={`/surah/${detail.slug}`}
              className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                nightMode
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-[#0D7377]/10 text-[#0D7377] hover:bg-[#0D7377]/20"
              }`}
            >
              ✕ Close
            </Link>
            <div>
              <p className={`text-sm font-semibold ${nightMode ? "text-[#89E0E2]" : "text-[#0D7377]"}`}>
                {detail.title}
              </p>
              <p className={`font-arabic text-lg ${nightMode ? "text-white/80" : "text-[#2C3E50]/70"}`}>
                {detail.arabicTitle}
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-2 text-sm font-medium ${
              nightMode ? "text-[#E6F7F8]/70" : "text-[#2C3E50]/70"
            }`}
          >
            <button
              type="button"
              onClick={() => setSettingsOpen((open) => !open)}
              className={`rounded-full px-4 py-2 transition ${
                nightMode
                  ? "border border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                  : "border border-[#0D7377]/20 bg-white hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
              }`}
            >
              ⚙️ Settings
            </button>
            <Link
              href={`/download/${detail.slug}`}
              className="rounded-full bg-[#0D7377] px-4 py-2 text-white transition hover:bg-[#095c60]"
            >
              ⬇️ Download
            </Link>
          </div>
        </header>

        <div className={`flex flex-col gap-4 rounded-3xl border border-white/60 ${
          nightMode ? "bg-[#061012]" : "bg-white"
        } p-4 shadow-[var(--shadow-lg)] transition-colors sm:p-6 lg:p-8`}>
          <div
            className={`flex items-center justify-between text-sm ${
              nightMode ? "text-white/60" : "text-[#2C3E50]/60"
            }`}
          >
            <span>Page {page} of {totalPages}</span>
            <span>{progress}% complete</span>
          </div>
          <div
            className={`relative flex min-h-[60vh] items-center justify-center overflow-hidden rounded-3xl border border-dashed ${
              nightMode
                ? "border-[#E6F7F8]/20 bg-[#0B1A1C]"
                : "border-[#0D7377]/20 bg-[#FEFDF8]"
            } transition-colors`}
          >
            <div
              className={`w-full max-w-3xl origin-top ${nightMode ? 'text-[#E6F7F8]' : 'text-[#2C3E50]'}`}
              style={{ transform: `scale(${zoom / 100})` }}
            >
              <div className="flex flex-col gap-5 px-6 py-10">
                <p className="text-center text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="font-arabic text-center text-4xl leading-[1.6]">
                  يس ۚ
                </p>
                <p className="font-arabic text-center text-2xl leading-[2]">
                  وَالْقُرْآنِ الْحَكِيمِ
                </p>
                <p
                  className={`text-center text-sm leading-7 ${
                    nightMode ? "text-[#C7E9EA]" : "text-[#2C3E50]/70"
                  }`}
                >
                  Rendered with high fidelity Arabic typography. Use the controls below to switch to dual-page mode, toggle night mode, or enter distraction-free fullscreen.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-wrap items-center justify-between gap-3 text-sm ${
              nightMode ? "text-white/70" : "text-[#2C3E50]/70"
            }`}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage(Math.max(1, page - 1))}
                className={controlButtonClass}
              >
                ◄
              </button>
              <button
                type="button"
                onClick={() => setPage(Math.max(1, page - 5))}
                className={controlButtonClass}
              >
                ◄◄
              </button>
              <span className={accentPillClass}>
                Page {page}
              </span>
              <button
                type="button"
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                className={controlButtonClass}
              >
                ►
              </button>
              <button
                type="button"
                onClick={() => setPage(Math.min(totalPages, page + 5))}
                className={controlButtonClass}
              >
                ►►
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setZoom((value) => Math.max(60, value - 10))}
                className={controlButtonClass}
              >
                ⊖
              </button>
              <span
                className={`w-16 text-center font-semibold ${
                  nightMode ? "text-[#89E0E2]" : "text-[#0D7377]"
                }`}
              >
                {zoom}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((value) => Math.min(160, value + 10))}
                className={controlButtonClass}
              >
                ⊕
              </button>
              <button
                type="button"
                onClick={() => setNightMode((value) => !value)}
                className={`rounded-full px-3 py-2 transition ${
                  nightMode
                    ? "bg-[#0D7377] text-white"
                    : "border border-[#0D7377]/20 bg-white hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                }`}
              >
                {nightMode ? "☀️ Day" : "🌙 Night"}
              </button>
              <button
                type="button"
                className={controlButtonClass}
              >
                ⛶ Fullscreen
              </button>
            </div>
          </div>
        </div>

        <section
          className={`rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-md)] ${
            nightMode ? "bg-[#061012]" : "bg-white"
          }`}
        >
          <h3 className={`text-lg font-semibold ${nightMode ? "text-[#89E0E2]" : "text-[#0D7377]"}`}>
            Keyboard shortcuts
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {viewerShortcuts.map((shortcut) => (
              <div
                key={shortcut.combo}
                className={`flex flex-col gap-2 rounded-2xl border px-4 py-3 text-sm ${
                  nightMode
                    ? "border-white/15 bg-white/5 text-white/80"
                    : "border-[#0D7377]/15 bg-[#0D7377]/5 text-[#2C3E50]/80"
                }`}
              >
                <span
                  className={`text-base font-semibold ${
                    nightMode ? "text-[#89E0E2]" : "text-[#0D7377]"
                  }`}
                >
                  {shortcut.combo}
                </span>
                <span>{shortcut.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside
        className={`fixed inset-y-0 right-0 z-30 w-full max-w-md transform border-l border-[#0D7377]/10 bg-white/95 p-8 shadow-[var(--shadow-lg)] backdrop-blur transition duration-500 ${
          settingsOpen
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!settingsOpen}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[#0D7377]">Viewer settings</h3>
          <button
            type="button"
            onClick={() => setSettingsOpen(false)}
            className="rounded-full bg-[#0D7377]/10 px-3 py-1 text-sm font-semibold text-[#0D7377]"
          >
            Close
          </button>
        </div>
        <div className="mt-6 space-y-6 text-sm text-[#2C3E50]/70">
          <div className="rounded-2xl bg-[#0D7377]/5 px-4 py-3">
            <p className="text-sm font-semibold text-[#0D7377]">Display mode</p>
            <p className="mt-2 text-xs text-[#2C3E50]/60">
              Toggle between single-page, dual-page spread, or continuous scroll (coming soon).
            </p>
          </div>
          <div className="rounded-2xl bg-[#D4AF37]/10 px-4 py-3">
            <p className="text-sm font-semibold text-[#D4AF37]">Background</p>
            <p className="mt-2 text-xs text-[#2C3E50]/70">
              Choose from cream, parchment, or obsidian night mode for optimal comfort.
            </p>
          </div>
          <div className="rounded-2xl bg-[#0D7377]/5 px-4 py-3">
            <p className="text-sm font-semibold text-[#0D7377]">Font size</p>
            <p className="mt-2 text-xs text-[#2C3E50]/60">
              Increase or decrease font size for text-based PDFs. Presets for memorisation and deep study.
            </p>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
            <p className="text-sm font-semibold text-[#0D7377]">Download options</p>
            <p className="mt-2 text-xs text-[#2C3E50]/60">
              Save offline, send to device, or add to reading queue.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
