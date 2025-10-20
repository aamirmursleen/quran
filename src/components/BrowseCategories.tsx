import Link from "next/link";
import { categories } from "@/data/content";
import type { CSSProperties } from "react";

export function BrowseCategories() {
  return (
    <section
      id="categories"
      className="section-fade mx-auto mt-24 max-w-6xl px-6 sm:px-12"
      data-delay="2"
      data-animate="fade-up"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3" data-animate="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#0D7377]">
            Explore Islamic literature
          </p>
          <h2 className="text-3xl font-semibold text-[#0D7377] sm:text-[2.5rem]">
            Curated collections for every learner
          </h2>
          <p className="max-w-2xl text-base text-[#2C3E50]/70">
            Tap into classical and contemporary works, from authenticated hadith to modern reflections, with categories built for quick discovery.
          </p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6">
          <div className="flex min-w-full gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/category/${category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`gradient-card relative inline-flex w-64 shrink-0 flex-col justify-between rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]`}
                data-animate="fade-up"
                style={{ "--reveal-delay": `${0.1 + index * 0.06}s` } as CSSProperties}
              >
                <div className="space-y-3">
                  <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#0D7377]">
                    📖 {category.count} works
                  </span>
                  <h3 className="text-xl font-semibold text-[#0D7377]">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#2C3E50]/70">{category.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0D7377]">
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-3 rounded-full border border-[#0D7377]/30 bg-white px-5 py-3 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/60 hover:bg-[#0D7377]/10"
          >
            See all categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
