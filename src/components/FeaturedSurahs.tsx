import Link from "next/link";
import { featuredSurahs } from "@/data/content";

export function FeaturedSurahs() {
  return (
    <section
      id="surahs"
      className="section-fade mx-auto mt-24 max-w-6xl px-6 sm:px-12"
      data-delay="1"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Featured Quranic chapters
          </p>
          <h2 className="text-3xl font-semibold text-[#0D7377] sm:text-[2.5rem]">
            Daily favorites ready to read, download, or listen
          </h2>
          <p className="max-w-2xl text-base text-[#2C3E50]/70">
            Hand-picked surahs with verified translations, transliteration, and quick links to matching recitations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSurahs.map((surah) => (
            <Link
              key={surah.id}
              href={`/surah/${surah.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white p-6 shadow-[var(--shadow-md)] transition hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]"
            >
              <div
                className={`absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br ${surah.accent}`}
              />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#0D7377]/70">
                      Surah
                    </p>
                    <h3 className="text-2xl font-semibold text-[#0D7377]">
                      {surah.name}
                    </h3>
                    <p className="text-sm text-[#2C3E50]/60">{surah.transliteration}</p>
                  </div>
                  <span className="rounded-full bg-[#0D7377]/10 px-3 py-1 text-xs font-semibold text-[#0D7377]">
                    {surah.ayahCount} Ayahs
                  </span>
                </div>

                <p className="text-sm text-[#2C3E50]/70">{surah.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-[#2C3E50]/70">
                    <span className="text-lg">⬇️</span>
                    {surah.downloads} downloads
                  </span>
                  <span className="rounded-full bg-white/0 px-3 py-1 text-xs font-semibold text-[#0D7377] transition group-hover:bg-white group-hover:text-[#0D7377]">
                    Quick actions →
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-[#2C3E50]/60">
                  <span className="rounded-full bg-white/60 px-3 py-1">Preview</span>
                  <span className="rounded-full bg-white/60 px-3 py-1">Download</span>
                  <span className="rounded-full bg-white/60 px-3 py-1">Listen</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <Link
            href="/surah"
            className="inline-flex items-center gap-3 rounded-full border border-[#0D7377]/30 bg-white px-5 py-3 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/60 hover:bg-[#0D7377]/10"
          >
            View all 114 Surahs →
          </Link>
        </div>
      </div>
    </section>
  );
}
