import Link from "next/link";
import type { RevelationType } from "@/data/surahs";
import { searchSurahs } from "@/lib/searchSurahs";

const revelationFilters: { label: string; value: RevelationType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Makki", value: "Makki" },
  { label: "Madani", value: "Madani" },
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; revelation?: RevelationType | "all" }>;
}) {
  const params = await searchParams;
  const query = params.q ?? "";
  const revelation = (params.revelation ?? "all") as RevelationType | "all";
  const results = searchSurahs(query, revelation);

  return (
    <main className="min-h-screen bg-[#FEFDF8] px-6 py-16 text-[#2C3E50] sm:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="rounded-3xl border border-white/80 bg-white/95 p-8 shadow-[var(--shadow-lg)]" data-animate="fade-up">
          <h1 className="text-3xl font-semibold text-[#0D7377]">Search the library</h1>
          <p className="mt-2 text-sm text-[#2C3E50]/70">
            Find surahs to download, read online, or listen to recitations. Use filters to focus on Makki or Madani chapters.
          </p>
          <form className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center" method="get" action="/search">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#0D7377]/15 bg-white px-4 py-3 shadow-[var(--shadow-sm)]">
              <span className="text-2xl text-[#0D7377]">🔍</span>
              <input
                name="q"
                defaultValue={query}
                placeholder="Type a surah name or number..."
                className="w-full bg-transparent text-sm text-[#2C3E50] placeholder:text-[#2C3E50]/40 focus:outline-none sm:text-base"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by revelation">
              {revelationFilters.map((filter) => (
                <label key={filter.value} className="inline-flex items-center gap-2 rounded-full border border-[#0D7377]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10">
                  <input
                    type="radio"
                    name="revelation"
                    value={filter.value}
                    defaultChecked={revelation === filter.value}
                    className="text-[#0D7377]"
                  />
                  {filter.label}
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#0D7377] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#095c60]"
            >
              Search
            </button>
          </form>
        </header>

        <section className="space-y-6" data-animate="fade-up" data-delay="1">
          <div className="flex items-center justify-between text-sm text-[#2C3E50]/60">
            <p>
              Showing <span className="font-semibold text-[#0D7377]">{results.length}</span> result{results.length === 1 ? "" : "s"}
              {query ? ` for “${query}”` : "."}
            </p>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0D7377]/70 transition hover:text-[#0D7377]"
            >
              Browse downloads →
            </Link>
          </div>

          {results.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#0D7377]/30 bg-[#0D7377]/5 px-6 py-10 text-center text-sm text-[#2C3E50]/70">
              <p className="text-base font-semibold text-[#0D7377]">No matches found</p>
              <p className="mt-2">Try a different keyword or reset the filter to “All”.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((result) => (
                <article
                  key={result.slug}
                  className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-5 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#0D7377]/10 to-[#4DB8B8]/10" />
                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D7377]/10 text-sm font-semibold text-[#0D7377]">
                          {result.number}
                        </span>
                        <div>
                          <p className="text-lg font-semibold text-[#0D7377]">{result.title}</p>
                          <p className="text-sm text-[#2C3E50]/60">{result.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xl font-medium text-[#0D7377]">{result.arabic}</span>
                    </div>
                    <p className="text-sm text-[#2C3E50]/70 line-clamp-3">{result.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Link
                        href={result.url}
                        className="inline-flex items-center gap-1 rounded-full border border-[#0D7377]/20 bg-white px-3 py-1 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                      >
                        👁️ Preview
                      </Link>
                      <Link
                        href={result.previewUrl}
                        className="inline-flex items-center gap-1 rounded-full border border-[#0D7377]/20 bg-white px-3 py-1 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                      >
                        📖 Read online
                      </Link>
                      <Link
                        href={result.downloadUrl}
                        className="inline-flex items-center gap-1 rounded-full border border-[#0D7377]/20 bg-white px-3 py-1 font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                      >
                        ⬇️ Download
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
