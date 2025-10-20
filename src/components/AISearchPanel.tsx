import Link from "next/link";

export function AISearchPanel() {
  return (
    <section className="section-fade mx-auto -mt-24 max-w-5xl px-6" data-delay="1">
      <div className="glass-panel rounded-3xl p-8 sm:p-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="ai-avatar flex h-12 w-12 items-center justify-center rounded-2xl text-xl">
              🤖
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D7377]">
                AI Qur&rsquo;an Guide
              </p>
              <p className="text-sm text-[#2C3E50]/70">
                Understands natural language in English, Arabic, and Urdu.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="max-w-xl rounded-2xl border border-[#0D7377]/15 bg-white px-5 py-4">
              <p className="text-sm font-medium text-[#2C3E50]/60">You</p>
              <p className="text-base text-[#2C3E50]">I need Surah Yaseen in Arabic.</p>
            </div>

            <div className="rounded-3xl border border-[#0D7377]/15 bg-[#0D7377]/5 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">
                  🤖
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0D7377]">AI Guide</p>
                  <p className="text-sm text-[#2C3E50]/60">Responding instantly...</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-[#2C3E50]">
                <p className="text-base font-medium text-[#2C3E50]">
                  I found Surah Yaseen for you. How would you like to access it?
                </p>

                <div className="grid gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#0D7377]/10 px-3 py-1 text-xs font-semibold tracking-widest text-[#0D7377]">
                        Surah Yaseen • Chapter 36
                      </span>
                      <span className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37]">
                        83 verses
                      </span>
                    </div>
                    <p className="text-2xl font-semibold text-[#0D7377]">
                      سورة يس
                    </p>
                    <p className="text-sm text-[#2C3E50]/70">
                      Available in Arabic only, with English translation, and with transliteration.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <Link
                      href="/surah/yasin"
                      className="flex items-center justify-between rounded-2xl border border-[#0D7377]/15 bg-white px-4 py-3 text-sm font-medium text-[#2C3E50] transition hover:border-[#0D7377]/40 hover:text-[#0D7377]"
                    >
                      <span>📄 Preview</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href="/download/yasin"
                      className="flex items-center justify-between rounded-2xl border border-[#0D7377] bg-[#0D7377] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#095c60]"
                    >
                      <span>⬇️ Download PDF</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href="/viewer/yasin"
                      className="flex items-center justify-between rounded-2xl border border-[#0D7377]/15 bg-white px-4 py-3 text-sm font-medium text-[#0D7377] transition hover:border-[#0D7377]/40"
                    >
                      <span>👁️ Read Online</span>
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="rounded-2xl border border-dashed border-[#0D7377]/30 bg-[#0D7377]/5 p-4">
                    <p className="text-sm font-semibold text-[#0D7377]">
                      Also available:
                    </p>
                    <ul className="mt-2 grid gap-2 text-sm text-[#2C3E50]/80 sm:grid-cols-2">
                      <li>• With English translation</li>
                      <li>• With transliteration</li>
                      <li>• Audio recitation guide</li>
                      <li>• Tafsir summary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
