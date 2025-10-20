import Link from "next/link";
import type { CSSProperties } from "react";

const bookCategories = [
  {
    title: "Aqeedah (Belief)",
    description: "Learn about Islamic faith and core beliefs.",
    icon: "🕋",
    count: "150+ Books",
    href: "/books/aqeedah",
    color: "from-[#0D7377]/10 to-[#0D7377]/5",
  },
  {
    title: "Fiqh (Islamic Law)",
    description: "Understand prayer, fasting, and daily rulings.",
    icon: "⚖️",
    count: "200+ Books",
    href: "/books/fiqh",
    color: "from-[#4DB8B8]/10 to-[#4DB8B8]/5",
  },
  {
    title: "Seerah (Prophet's Life)",
    description: "Read about Prophet Muhammad's inspiring life.",
    icon: "👤",
    count: "80+ Books",
    href: "/books/seerah",
    color: "from-[#D4AF37]/10 to-[#D4AF37]/5",
  },
  {
    title: "Islamic History",
    description: "Explore 1400 years of Muslim civilization.",
    icon: "🏛️",
    count: "120+ Books",
    href: "/books/history",
    color: "from-[#0D7377]/10 to-[#0D7377]/5",
  },
  {
    title: "Children's Books",
    description: "Islamic stories and lessons for kids.",
    icon: "👶",
    count: "90+ Books",
    href: "/books/children",
    color: "from-[#4DB8B8]/10 to-[#4DB8B8]/5",
  },
  {
    title: "Scholar Works",
    description: "Books by famous Islamic scholars.",
    icon: "👨‍🏫",
    count: "300+ Books",
    href: "/scholars",
    color: "from-[#D4AF37]/10 to-[#D4AF37]/5",
  },
];

export function IslamicBooksSection() {
  return (
    <section
      id="books"
      className="px-6 py-16 sm:px-12 bg-white"
      data-animate="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D7377] mb-4 font-display">
            📚 Explore trusted Islamic books
          </h2>
          <p className="text-lg text-[#2C3E50]/70 max-w-2xl mx-auto">
            Browse by topic to find classic texts, contemporary works, and children’s titles with instant previews and downloads.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {bookCategories.map((category, idx) => (
            <Link
              key={idx}
              href={category.href}
              className={`group p-6 bg-gradient-to-br ${category.color} rounded-xl border-2 border-transparent hover:border-[#0D7377] transition-all hover:shadow-lg`}
              data-animate="fade-up"
              style={{ "--reveal-delay": `${0.1 + idx * 0.08}s` } as CSSProperties}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-[#0D7377] mb-2 group-hover:text-[#4DB8B8]">
                {category.title}
              </h3>
              <p className="text-sm text-[#2C3E50]/70 mb-3">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0D7377]/70">
                  {category.count}
                </span>
                <span className="text-[#0D7377] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Browse →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0D7377] to-[#4DB8B8] text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
          >
            <span>📖</span>
            Explore Full Library
          </Link>
        </div>
      </div>
    </section>
  );
}
