import Link from "next/link";
import { notFound } from "next/navigation";
import { reciters } from "@/data/audio";
import { allSurahs } from "@/data/surahs";
import { surahDetails } from "@/data/content";

export default async function AudioSurahPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ reciter?: string }>;
}) {
  const { slug } = await params;
  const { reciter } = await searchParams;
  const surahMeta = allSurahs.find((item) => item.slug === slug);
  if (!surahMeta) {
    notFound();
  }

  const detail = surahDetails[surahMeta.slug];
  const activeReciter = reciters.find((item) => item.id === reciter) ?? reciters[0];

  return (
    <main className="min-h-screen bg-[#FEFDF8] px-6 py-16 text-[#2C3E50] sm:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <header className="rounded-3xl border border-white/80 bg-white/95 p-8 shadow-[var(--shadow-lg)]" data-animate="fade-up">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <Link
                href={`/surah/${surahMeta.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D7377] transition hover:text-[#095c60]"
              >
                ← Back to surah overview
              </Link>
              <Link
                href={`/download/${surahMeta.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-4 py-2 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
              >
                📥 Download PDF
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0D7377]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
                Surah {surahMeta.transliteration}
              </span>
              <span className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
                {surahMeta.revelation} • {surahMeta.verses} verses
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-[#0D7377]">Listen to {detail.title}</h1>
            <p className="text-sm text-[#2C3E50]/70">
              Stream directly below or save the MP3 to your device. Each recording is sourced from the Quran.com CDN and is free to distribute.
            </p>
          </div>
        </header>

        <section className="space-y-6" data-animate="fade-up" data-delay="1">
          <header className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#0D7377]">Choose a reciter</h2>
            <p className="text-sm text-[#2C3E50]/60">
              Currently playing: <strong className="text-[#0D7377]">{activeReciter.name}</strong>
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            {reciters.map((reciter) => (
              <Link
                key={reciter.id}
                href={`/audio/${surahMeta.slug}?reciter=${reciter.id}`}
                className={`rounded-2xl border px-4 py-3 text-sm transition ${
                  reciter.id === activeReciter.id
                    ? "border-[#0D7377] bg-[#0D7377]/10 text-[#0D7377]"
                    : "border-[#0D7377]/20 bg-white text-[#2C3E50]/70 hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                }`}
              >
                <p className="font-semibold">{reciter.name}</p>
                <p className="text-xs uppercase tracking-[0.3em]">{reciter.style}</p>
                <p className="mt-1 text-xs">{reciter.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4" data-animate="fade-up" data-delay="2">
          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-[var(--shadow-md)]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-lg font-semibold text-[#0D7377]">{activeReciter.name}</p>
                <span className="rounded-full bg-[#0D7377]/10 px-3 py-1 text-xs font-semibold text-[#0D7377]">
                  {activeReciter.qualityKbps} kbps MP3
                </span>
              </div>
              <audio
                controls
                preload="metadata"
                src={activeReciter.getStreamUrl(surahMeta)}
                className="w-full"
              >
                Your browser does not support the audio element.
              </audio>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <a
                  href={activeReciter.getStreamUrl(surahMeta)}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-4 py-2 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
                >
                  ⬇️ Download MP3
                </a>
                <Link
                  href={`/audio/${allSurahs[(surahMeta.number % allSurahs.length)].slug}?reciter=${activeReciter.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-4 py-2 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
                >
                  Next surah →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3" data-animate="fade-up" data-delay="3">
          <h2 className="text-lg font-semibold text-[#0D7377]">Continue exploring</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href={`/surah/${surahMeta.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-4 py-2 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
            >
              👁️ Read translation
            </Link>
            <Link
              href={`/download/${surahMeta.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-4 py-2 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
            >
              📥 Download PDFs
            </Link>
            <Link
              href={`/download/${surahMeta.slug}?ai=1`}
              className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/30 bg-white px-4 py-2 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
            >
              🤖 Ask AI about this surah
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
