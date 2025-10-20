import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const categories = [
  { label: "Quran", href: "/surah" },
  { label: "Hadith", href: "/category/hadith" },
  { label: "Books", href: "/library" },
];

const supportLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Share", href: "/share" },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-[#0D7377]/5 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-12">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                🕌
              </div>
              <div>
                <p className="text-lg font-semibold text-[#0D7377]">
                  Islamic PDF Library
                </p>
                <p className="text-sm text-[#2C3E50]/70">
                  Spreading knowledge, earning rewards.
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm text-[#2C3E50]/60">
              Curated digital library dedicated to providing authentic, accessible Islamic resources to every seeker around the globe.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[#2C3E50]/70">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-[#0D7377]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
              Categories
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[#2C3E50]/70">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-[#0D7377]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
              Support
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[#2C3E50]/70">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-[#0D7377]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#0D7377]/10 pt-6 text-sm text-[#2C3E50]/60 md:flex-row">
          <p>© 2025 • Made with ❤️ for the Ummah</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <span className="text-lg">🔒</span> SSL Protected
            </span>
            <Link className="transition hover:text-[#0D7377]" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
