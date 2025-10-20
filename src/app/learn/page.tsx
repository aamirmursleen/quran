import { LearningResourcesSection } from "@/components/LearningResourcesSection";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#FEFDF8] pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-12 sm:px-12">
        <header className="rounded-3xl border border-white/80 bg-white/95 p-10 shadow-[var(--shadow-lg)]" data-animate="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#0D7377]">
            🎓 Learn & Grow
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-[#0D7377] sm:text-[2.75rem]">
            Structured Islamic learning at your pace
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-[#2C3E50]/70 sm:text-base">
            Access Arabic courses, Islamic studies curricula, and video lectures—all free and curated with scholar oversight. Mix and match resources to build your learning path.
          </p>
        </header>
        <LearningResourcesSection />
      </div>
    </main>
  );
}
