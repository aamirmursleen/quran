import Link from "next/link";
import { surahDetails } from "@/data/content";

export default function SurahDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const detail =
    surahDetails[params.slug as keyof typeof surahDetails] ||
    surahDetails.yasin;

  return (
    <div className="min-h-screen bg-[#FEFDF8] pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-10 sm:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D7377] transition hover:text-[#095c60]"
          >
            ← Back
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="rounded-full border border-[#0D7377]/30 bg-white px-4 py-2 text-sm font-medium text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
            >
              🔍 Search
            </Link>
            <Link
              href="/share"
              className="rounded-full border border-[#D4AF37]/40 bg-white px-4 py-2 text-sm font-medium text-[#D4AF37] transition hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"
            >
              🔗 Share
            </Link>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="group relative flex flex-col gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#0D7377]/12 via-white to-[#D4AF37]/12 p-8 shadow-[var(--shadow-lg)] transition duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(13,115,119,0.35), rgba(212,175,55,0.25))",
              }} />
              <div className="relative flex h-full flex-col items-start justify-between text-left">
                <div className="space-y-3">
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
                    Chapter {detail.chapter}
                  </span>
                  <h1 className="text-3xl font-semibold text-[#0D7377]">
                    {detail.title}
                  </h1>
                  <p className="font-arabic text-3xl text-[#2C3E50]">{detail.arabicTitle}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-[#2C3E50]/70">
                  <span>High-resolution calligraphy</span>
                  <span>Optimised for Retina display</span>
                  <span>Includes recitation guide</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#2C3E50]/60">
              Hover to preview the intricate calligraphy. Rotate the PDF gently on desktop for a live preview effect.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 rounded-3xl border border-white/80 bg-white p-8 shadow-[var(--shadow-md)]">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-semibold text-[#0D7377]">{detail.title}</h2>
                <p className="font-arabic text-2xl text-[#2C3E50]">{detail.arabicTitle}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#2C3E50]/70">
                  <span className="rounded-full bg-[#0D7377]/10 px-3 py-1 font-semibold text-[#0D7377]">
                    {detail.verses} Verses
                  </span>
                  <span className="flex items-center gap-2">
                    <span>⬇️</span>
                    {detail.downloads} downloads
                  </span>
                  <span className="flex items-center gap-2">
                    <span>⭐</span>
                    {detail.rating} (verified)
                  </span>
                </div>
              </div>

              <div className="grid gap-4 text-sm text-[#2C3E50]/80 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#0D7377]/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
                    Format
                  </p>
                  <p className="mt-2 text-base text-[#2C3E50]">{detail.formats[0]}</p>
                  <p className="text-xs text-[#2C3E50]/60">Perfect for mobile, tablet, and desktop reading.</p>
                </div>
                <div className="rounded-2xl bg-[#D4AF37]/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]/80">
                    Specification
                  </p>
                  <div className="mt-2 space-y-1">
                    <p>Pages: {detail.pages}</p>
                    <p>File Size: {detail.size}</p>
                    <p>Languages: {detail.languages.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/download/${detail.slug}`}
                  className="flex-1 rounded-2xl bg-[#0D7377] px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#095c60]"
                >
                  ⬇️ Download PDF
                </Link>
                <Link
                  href={`/viewer/${detail.slug}`}
                  className="flex-1 rounded-2xl border border-[#0D7377]/30 bg-white px-6 py-4 text-center text-lg font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
                >
                  👁️ Read Online
                </Link>
                <Link
                  href={`/share/${detail.slug}`}
                  className="rounded-2xl border border-[#D4AF37]/40 bg-white px-6 py-4 text-center text-lg font-semibold text-[#D4AF37] transition hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"
                >
                  🔗 Share
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white p-8 shadow-[var(--shadow-md)]">
              <h3 className="text-2xl font-semibold text-[#0D7377]">About this Surah</h3>
              <p className="mt-4 text-base leading-relaxed text-[#2C3E50]/80">
                {detail.description}
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-[#2C3E50]/80 sm:grid-cols-2">
                {detail.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl bg-[#0D7377]/5 px-4 py-3">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white p-8 shadow-[var(--shadow-md)]">
              <h3 className="text-xl font-semibold text-[#0D7377]">Also available</h3>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-[#0D7377]">
                {detail.formats.slice(1).map((format) => (
                  <span
                    key={format}
                    className="rounded-2xl border border-[#0D7377]/20 bg-[#0D7377]/10 px-4 py-2"
                  >
                    + {format}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-[#0D7377]/40 bg-[#0D7377]/5 p-8">
              <h3 className="text-xl font-semibold text-[#0D7377]">
                Users also downloaded
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {detail.related.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex flex-col gap-2 rounded-2xl border border-[#0D7377]/15 bg-white px-4 py-4 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                  >
                    {item.title}
                    <span className="text-xs text-[#2C3E50]/60">Continue learning →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
