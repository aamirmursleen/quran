import Link from "next/link";

const hadithBooks = [
  {
    title: "Sahih Bukhari",
    description: "The most authentic Hadith book. 7,563 hadiths.",
    icon: "⭐",
    tag: "Most Authentic",
    href: "/hadith/bukhari",
  },
  {
    title: "Sahih Muslim",
    description: "Second most authentic collection. 7,190 hadiths.",
    icon: "⭐",
    tag: "Highly Authentic",
    href: "/hadith/muslim",
  },
  {
    title: "Sunan Abu Dawud",
    description: "Focus on legal rulings. 5,274 hadiths.",
    icon: "📖",
    tag: "Fiqh Focused",
    href: "/hadith/abu-dawud",
  },
  {
    title: "Jami' at-Tirmidhi",
    description: "Easy to understand. 3,956 hadiths.",
    icon: "📖",
    tag: "Beginner Friendly",
    href: "/hadith/tirmidhi",
  },
  {
    title: "Sunan an-Nasa'i",
    description: "Well organized chapters. 5,758 hadiths.",
    icon: "📖",
    tag: "Well Organized",
    href: "/hadith/nasai",
  },
  {
    title: "40 Hadith Nawawi",
    description: "Essential hadiths every Muslim should know.",
    icon: "💎",
    tag: "Must Read",
    href: "/hadith/nawawi",
  },
];

export function HadithCollectionsSection() {
  return (
    <section id="library" className="px-6 py-16 sm:px-12 bg-gradient-to-b from-[#0D7377]/5 to-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D7377] mb-4 font-display">
            📜 Hadith books ready to download
          </h2>
          <p className="text-lg text-[#2C3E50]/70 max-w-2xl mx-auto">
            Access authentic Sahih, Sunan, and Musnad collections in Arabic and English. Preview online or save the full PDFs for study.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hadithBooks.map((book, idx) => (
            <Link
              key={idx}
              href={book.href}
              className="group p-6 bg-white rounded-xl border-2 border-[#0D7377]/10 hover:border-[#0D7377] transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-4xl">{book.icon}</div>
                <span className="px-3 py-1 text-xs font-semibold bg-[#D4AF37]/20 text-[#D4AF37] rounded-full">
                  {book.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0D7377] mb-2 group-hover:text-[#4DB8B8]">
                {book.title}
              </h3>
              <p className="text-sm text-[#2C3E50]/70">
                {book.description}
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm text-[#0D7377]/80">
                <span className="inline-flex items-center gap-1 text-[#0D7377] font-semibold">
                  <span>⬇️</span>
                  Download PDF
                </span>
                <span className="inline-flex items-center gap-1">
                  <span>👁️</span>
                  Preview online
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-2 border-[#0D7377]/20 bg-white p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-[#0D7377] mb-2">Search Hadiths</h3>
              <p className="text-sm text-[#2C3E50]/70">
                Find hadiths by topic, keyword, or chapter
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📥</div>
              <h3 className="font-bold text-[#0D7377] mb-2">Download PDFs</h3>
              <p className="text-sm text-[#2C3E50]/70">
                Get complete books in PDF format
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-[#0D7377] mb-2">Authenticity Check</h3>
              <p className="text-sm text-[#2C3E50]/70">
                Learn about hadith grading and chains
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/hadith"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D7377] text-white rounded-full font-semibold hover:bg-[#4DB8B8] transition-all hover:scale-105 shadow-lg"
            >
              <span>📚</span>
              Browse All Hadith Books
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
