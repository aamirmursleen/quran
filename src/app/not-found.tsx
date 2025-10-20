import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#FEFDF8] px-6 py-16 text-center text-[#2C3E50]">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-white/80 bg-white/95 p-10 shadow-[var(--shadow-lg)]">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0D7377]/10 text-4xl">
          🧭
        </span>
        <h1 className="text-3xl font-semibold text-[#0D7377]">Page not found</h1>
        <p className="text-base text-[#2C3E50]/70">
          We couldn&apos;t find the resource you were looking for. It may have been moved or renamed.
          Try exploring the Qur&apos;an downloads, audio recitations, or head back to the homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
          <Link
            href="/"
            className="rounded-full bg-[#0D7377] px-5 py-3 text-white transition hover:bg-[#095c60]"
          >
            ⛺ Return home
          </Link>
          <Link
            href="/download"
            className="rounded-full border border-[#0D7377]/30 bg-white px-5 py-3 text-[#0D7377] transition hover:border-[#0D7377]/50 hover:bg-[#0D7377]/10"
          >
            📥 Browse downloads
          </Link>
        </div>
      </div>
    </main>
  );
}
