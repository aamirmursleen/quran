import Link from "next/link";
import type { CSSProperties } from "react";

const reciters = [
  {
    name: "Sheikh Mishary Rashid",
    description: "Beautiful voice. Very popular worldwide.",
    icon: "🎙️",
    href: "/audio/mishary-rashid",
  },
  {
    name: "Abdul Rahman Al-Sudais",
    description: "Imam of Masjid al-Haram. Clear pronunciation.",
    icon: "🕌",
    href: "/audio/abdul-rahman-sudais",
  },
  {
    name: "Saad Al-Ghamdi",
    description: "Emotional recitation. Great for beginners.",
    icon: "💝",
    href: "/audio/saad-ghamdi",
  },
  {
    name: "More Reciters",
    description: "Explore 50+ famous Quran reciters.",
    icon: "🎧",
    href: "/reciters",
  },
];

export function AudioRecitationSection() {
  return (
    <section
      id="audio"
      className="px-6 py-16 sm:px-12 bg-white"
      data-animate="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D7377] mb-4 font-display">
            🎧 Listen to Qur&apos;an recitations right away
          </h2>
          <p className="text-lg text-[#2C3E50]/70 max-w-2xl mx-auto">
            Stream beautiful tilawah from world-renowned reciters, save high-quality MP3s, and follow tajweed-friendly guides.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {reciters.map((reciter, idx) => (
            <Link
              key={idx}
              href={reciter.href}
              className="group p-6 bg-gradient-to-br from-[#0D7377]/5 to-[#4DB8B8]/5 rounded-xl border-2 border-transparent hover:border-[#0D7377] transition-all hover:shadow-lg"
              data-animate="scale"
              style={{ "--reveal-delay": `${0.1 + idx * 0.08}s` } as CSSProperties}
            >
              <div className="text-5xl mb-4 text-center">{reciter.icon}</div>
              <h3 className="text-lg font-bold text-[#0D7377] mb-2 text-center group-hover:text-[#4DB8B8]">
                {reciter.name}
              </h3>
              <p className="text-sm text-[#2C3E50]/70 text-center">
                {reciter.description}
              </p>
            </Link>
          ))}
        </div>

        <div
          className="bg-gradient-to-r from-[#0D7377]/10 to-[#4DB8B8]/10 rounded-2xl p-8 text-center"
          data-animate="fade-up"
          data-delay="2"
        >
          <h3 className="text-2xl font-bold text-[#0D7377] mb-3 font-display">
            🎵 What you can do here
          </h3>
          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto mt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl">🔊</div>
              <p className="text-sm font-semibold text-[#2C3E50]">Listen online</p>
              <p className="text-xs text-[#2C3E50]/60">Stream instantly in your browser</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl">⬇️</div>
              <p className="text-sm font-semibold text-[#2C3E50]">Download MP3</p>
              <p className="text-xs text-[#2C3E50]/60">Keep recitations for offline use</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-3xl">📿</div>
              <p className="text-sm font-semibold text-[#2C3E50]">Learn tajweed</p>
              <p className="text-xs text-[#2C3E50]/60">Follow along with pronunciation tips</p>
            </div>
          </div>
          <Link
            href="/audio"
            className="inline-flex items-center gap-2 px-8 py-4 mt-6 bg-[#0D7377] text-white rounded-full font-semibold hover:bg-[#4DB8B8] transition-all hover:scale-105 shadow-lg"
          >
            <span>🎼</span>
            Explore All Audio
          </Link>
        </div>
      </div>
    </section>
  );
}
