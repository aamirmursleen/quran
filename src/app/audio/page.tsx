import Link from "next/link";
import { reciters } from "@/data/audio";
import { allSurahs } from "@/data/surahs";

const featuredSurahs = allSurahs.slice(0, 6);

export default function AudioHubPage() {
  return (
    <main className="min-h-screen bg-[#FEFDF8] px-6 py-16 text-[#2C3E50] sm:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section className="rounded-3xl border border-white/80 bg-white/95 p-10 shadow-[var(--shadow-lg)]" data-animate="fade-up">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#0D7377]">
              🎧 Quran Audio Library
            </span>
            <h1 className="text-3xl font-semibold text-[#0D7377] sm:text-[2.75rem]">
              Stream or download high-quality recitations
            </h1>
            <p className="max-w-2xl text-sm text-[#2C3E50]/70 sm:text-base">
              Choose from world-renowned reciters, listen online in the browser, or save MP3 files for offline study. Each surah page offers multiple narration styles and bitrates.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-5 py-3 text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
              >
                📥 Need PDFs instead?
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-5 py-3 text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
              >
                🔍 Search the library
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-6" data-animate="fade-up" data-delay="1">
          <header className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#0D7377]">Featured reciters</h2>
            <p className="text-sm text-[#2C3E50]/60">
              Open any reciter to browse the entire Qur&apos;an catalogue with direct download links.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            {reciters.map((reciter) => (
              <article
                key={reciter.id}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-6 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#0D7377]/10 to-[#4DB8B8]/10" />
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-[#0D7377]">{reciter.name}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#0D7377]/70">{reciter.style}</p>
                    </div>
                    <span className="rounded-full bg-[#0D7377]/10 px-3 py-1 text-xs font-semibold text-[#0D7377]">
                      {reciter.qualityKbps} kbps
                    </span>
                  </div>
                  <p className="text-sm text-[#2C3E50]/70">{reciter.description}</p>
                  <Link
                    href={`/audio/al-fatiha?reciter=${reciter.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D7377] transition hover:translate-x-1"
                  >
                    Explore surahs →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6" data-animate="fade-up" data-delay="2">
          <header className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#0D7377]">Popular surahs</h2>
            <p className="text-sm text-[#2C3E50]/60">
              Start listening with these frequently played chapters.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredSurahs.map((surah) => (
              <Link
                key={surah.slug}
                href={`/audio/${surah.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-5 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#0D7377]/10 to-[#4DB8B8]/10" />
                <div className="relative flex flex-col gap-2">
                  <span className="inline-flex w-10 items-center justify-center rounded-full bg-[#0D7377]/10 text-sm font-semibold text-[#0D7377]">
                    {surah.number}
                  </span>
                  <p className="text-lg font-semibold text-[#0D7377]">Surah {surah.transliteration}</p>
                  <p className="text-sm text-[#2C3E50]/60">Listen now or save as MP3</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
