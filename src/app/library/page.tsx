import { IslamicBooksSection } from "@/components/IslamicBooksSection";
import { BrowseCategories } from "@/components/BrowseCategories";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#FEFDF8] pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-12 sm:px-12">
        <header className="rounded-3xl border border-white/80 bg-white/95 p-10 shadow-[var(--shadow-lg)]" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#0D7377]">
            📚 Islamic Library
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-[#0D7377] sm:text-[2.75rem]">
            Books, research, and curated study paths
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-[#2C3E50]/70 sm:text-base">
            Explore classical and contemporary works across Aqeedah, Fiqh, Seerah, history, and children&apos;s education. Download PDFs or jump into topic-based collections handpicked by scholars.
          </p>
        </header>
        <IslamicBooksSection />
        <BrowseCategories />
      </div>
    </main>
  );
}
