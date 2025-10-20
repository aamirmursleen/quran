const LAST_UPDATED = "2025-01-01";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FEFDF8] pb-24 text-[#2C3E50]">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pt-12 sm:px-12">
        <header className="rounded-3xl border border-white/80 bg-white/95 p-10 shadow-[var(--shadow-lg)]" data-animate="fade-up">
          <h1 className="text-3xl font-semibold text-[#0D7377] sm:text-[2.5rem]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#2C3E50]/70 sm:text-base">
            This privacy notice explains how the Islamic Library collects, uses, and protects information when you visit our website or use interactive features such as the AI assistant.
          </p>
          <p className="mt-2 text-xs text-[#2C3E50]/50">Last updated: {LAST_UPDATED}</p>
        </header>

        <section className="rounded-3xl border border-white/70 bg-white p-8 shadow-[var(--shadow-md)]" data-animate="fade-up" data-delay="1">
          <h2 className="text-xl font-semibold text-[#0D7377]">1. Information we collect</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#2C3E50]/70">
            <li><strong className="text-[#0D7377]">Usage data:</strong> anonymised analytics about pages visited, downloads triggered, and audio plays. No personal identifiers are stored.</li>
            <li><strong className="text-[#0D7377]">AI assistant prompts:</strong> questions submitted to the assistant are temporarily processed to generate answers and may be logged in aggregate for quality tuning.</li>
            <li><strong className="text-[#0D7377]">Voluntary contact:</strong> information you provide via contact or feedback forms (name, email, message).</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white p-8 shadow-[var(--shadow-md)]" data-animate="fade-up" data-delay="2">
          <h2 className="text-xl font-semibold text-[#0D7377]">2. How we use information</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#2C3E50]/70">
            <li>Deliver Qur&apos;an PDFs, audio streams, and other resources requested by visitors.</li>
            <li>Improve website performance, navigation, and accessibility.</li>
            <li>Respond to support inquiries and content requests.</li>
            <li>Maintain service reliability, prevent misuse, and monitor rate limits on the AI endpoint.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white p-8 shadow-[var(--shadow-md)]" data-animate="fade-up" data-delay="3">
          <h2 className="text-xl font-semibold text-[#0D7377]">3. Data sharing & third parties</h2>
          <p className="mt-3 text-sm text-[#2C3E50]/70">
            We do not sell or trade personal information. Limited data is shared with infrastructure providers:
          </p>
          <ul className="mt-3 list-disc pl-6 text-sm text-[#2C3E50]/70">
            <li>Hosting and CDN services for static assets (PDF/MP3 delivery).</li>
            <li>OpenAI API to generate assistant responses (prompts are transmitted securely and not stored beyond operational requirements).</li>
            <li>Analytics platforms (e.g., Plausible/Umami) using anonymised, cookie-free metrics.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white p-8 shadow-[var(--shadow-md)]" data-animate="fade-up" data-delay="4">
          <h2 className="text-xl font-semibold text-[#0D7377]">4. Your choices</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#2C3E50]/70">
            <li>You may opt out of analytics tracking through the cookie banner (when enabled).</li>
            <li>Contact the team to review or delete feedback submissions associated with your email.</li>
            <li>Avoid using the AI assistant if you prefer not to share prompts with OpenAI.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white p-8 shadow-[var(--shadow-md)]" data-animate="fade-up" data-delay="5">
          <h2 className="text-xl font-semibold text-[#0D7377]">5. Contact</h2>
          <p className="mt-3 text-sm text-[#2C3E50]/70">
            For privacy questions or data requests, email <a className="text-[#0D7377] underline" href="mailto:privacy@islamiclibrary.org">privacy@islamiclibrary.org</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
