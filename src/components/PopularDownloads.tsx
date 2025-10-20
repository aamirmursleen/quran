import Link from "next/link";
import { popularDownloads } from "@/data/content";

export function PopularDownloads() {
  return (
    <section className="section-fade mx-auto mt-24 max-w-5xl px-6 sm:px-12" data-delay="3">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Most Downloaded This Week
          </p>
          <h2 className="text-3xl font-semibold text-[#0D7377] sm:text-[2.5rem]">
            Loved by seekers around the world
          </h2>
          <p className="max-w-2xl text-base text-[#2C3E50]/70">
            Real-time trends showcasing what the community is engaged with right now.
          </p>
        </div>

        <div className="space-y-5">
          {popularDownloads.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[var(--shadow-md)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0D7377] to-[#4DB8B8]" />
              <div className="relative grid gap-4 sm:grid-cols-[80px_1fr_auto] sm:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D7377]/10 text-2xl font-semibold text-[#0D7377]">
                  {index + 1}.
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#0D7377]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2C3E50]/70">{item.subtitle}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#2C3E50]/60">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">⬇️</span> {item.downloads} downloads
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-lg">⭐</span> {item.rating} rating
                    </span>
                    <span className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
                      Verified content
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:items-end">
                  {item.actions.map((action) => (
                    <Link
                      key={action}
                      href="#"
                      className="inline-flex items-center justify-center rounded-full border border-[#0D7377]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/40 hover:bg-[#0D7377]/10"
                    >
                      {action}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/popular"
            className="inline-flex items-center gap-3 rounded-full border border-[#0D7377]/30 bg-white px-5 py-3 text-sm font-semibold text-[#0D7377] transition hover:border-[#0D7377]/60 hover:bg-[#0D7377]/10"
          >
            View all popular →
          </Link>
        </div>
      </div>
    </section>
  );
}
