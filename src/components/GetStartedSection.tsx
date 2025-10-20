import Link from "next/link";
import type { CSSProperties } from "react";

const steps = [
  {
    title: "Download Qur&apos;an PDFs",
    description: "Grab the complete Mushaf or individual surahs in seconds.",
    icon: "📥",
    href: "#download",
    cta: "Go to downloads",
  },
  {
    title: "Listen to Recitations",
    description: "Stream beautiful recitations or save MP3s for offline listening.",
    icon: "🎧",
    href: "#audio",
    cta: "Open audio hub",
  },
  {
    title: "Explore the Library",
    description: "Browse hadith, Islamic books, and curated learning resources.",
    icon: "🧭",
    href: "#library",
    cta: "See learning paths",
  },
];

export function GetStartedSection() {
  return (
    <section
      className="relative z-20 -mt-24 px-6 sm:px-12"
      aria-label="Quick start"
      data-animate="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel grid gap-4 rounded-3xl p-6 shadow-[var(--shadow-lg)] sm:grid-cols-3 sm:gap-6 sm:p-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/40 bg-white/80 p-5 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              data-animate="scale"
              style={{
                // Reveal cards sequentially without extra JS logic
                "--reveal-delay": `${0.15 + index * 0.12}s`,
              } as CSSProperties}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0D7377]/10 text-2xl">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#0D7377]">{step.title}</h3>
                <p className="text-sm text-[#2C3E50]/70">{step.description}</p>
              </div>
              <Link
                href={step.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0D7377]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
              >
                <span>{step.cta}</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
