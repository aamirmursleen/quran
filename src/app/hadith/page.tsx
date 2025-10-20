import { HadithCollectionsSection } from "@/components/HadithCollectionsSection";

export default function HadithPage() {
  return (
    <main className="min-h-screen bg-[#FEFDF8] pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-12 sm:px-12">
        <header className="rounded-3xl border border-white/80 bg-white/95 p-10 shadow-[var(--shadow-lg)]" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#0D7377]">
            📜 Hadith Library
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-[#0D7377] sm:text-[2.75rem]">
            Authentic Hadith collections in one place
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-[#2C3E50]/70 sm:text-base">
            Download trusted compilations such as Sahih Bukhari, Sahih Muslim, and Sunan collections. Read online, filter by topics, and pair with scholar-approved study resources.
          </p>
        </header>
        <HadithCollectionsSection />
      </div>
    </main>
  );
}
