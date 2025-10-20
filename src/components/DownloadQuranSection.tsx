import Link from "next/link";
import type { CSSProperties } from "react";

const downloadOptions = [
  {
    title: "Complete Quran PDF",
    description: "Download the full Quran in one PDF file. Perfect for reading offline.",
    size: "8.5 MB",
    icon: "📦",
    href: "/download/complete-quran",
  },
  {
    title: "Individual Surahs",
    description: "Download any Surah separately. Choose what you need.",
    size: "Various",
    icon: "📑",
    href: "/download",
  },
  {
    title: "With Translation",
    description: "Get Quran with English translation. Understand as you read.",
    size: "12 MB",
    icon: "🌍",
    href: "/download/translations",
  },
  {
    title: "With Tafsir",
    description: "Download Quran with detailed explanations and commentary.",
    size: "25 MB",
    icon: "💡",
    href: "/download/tafsir",
  },
];

export function DownloadQuranSection() {
  return (
    <section
      id="download"
      className="px-6 py-16 sm:px-12 bg-gradient-to-b from-white to-[#0D7377]/5"
      data-animate="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-animate="fade-up">
          <h2 className="font-display text-3xl font-bold text-[#0D7377] sm:text-4xl">
            📥 Download high-quality Qur&apos;an PDFs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[#2C3E50]/70">
            Choose the complete Mushaf, individual surahs, or translations. Every PDF is free, lightweight, and ready to read offline.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {downloadOptions.map((option, idx) => (
            <Link
              key={idx}
              href={option.href}
              className="group p-6 bg-white rounded-xl border-2 border-[#0D7377]/10 hover:border-[#0D7377] transition-all hover:shadow-lg"
              data-animate="fade-up"
              style={{ "--reveal-delay": `${0.1 + idx * 0.08}s` } as CSSProperties}
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-lg font-bold text-[#0D7377] mb-2 group-hover:text-[#4DB8B8]">
                {option.title}
              </h3>
              <p className="text-sm text-[#2C3E50]/70 mb-3">
                {option.description}
              </p>
              <div className="flex items-center justify-between text-xs text-[#2C3E50]/60">
                <span className="font-medium">Size: {option.size}</span>
                <span className="flex items-center gap-1 text-[#0D7377] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  <span>⬇️</span>
                  Free download
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white rounded-full font-semibold hover:bg-[#4DB8B8] transition-all hover:scale-105 shadow-lg"
          >
            <span>📚</span>
            See All Download Options
          </Link>
        </div>
      </div>
    </section>
  );
}
