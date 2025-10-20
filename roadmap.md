# Islamic Library Roadmap

_Keep this roadmap up to date. When a task is completed, change its checkbox to `[x]` **and** append `— Completed YYYY-MM-DD` so we can audit history easily._

## 0. Launch Readiness (Blockers)
- [x] Wire real download assets for each surah (populate URLs, file sizes, language variants) and update `/download/[slug]` actions. — Completed 2025-10-20
- [x] Expand `surahDetails` in `src/data/content.ts` to cover all 114 surahs with accurate metadata. — Completed 2025-10-20
- [x] Implement the hero search + `/download` search to query an actual index/API instead of static filtering only. — Completed 2025-10-20
- [x] Create dedicated `/audio` hub and `/audio/[slug]` pages that stream MP3s (current links 404). — Completed 2025-10-20
- [x] Stand up `/hadith`, `/library`, `/learn`, etc., or reroute buttons to working destinations. — Completed 2025-10-20
- [x] Production-ready OpenAI integration: secure the API route, add rate limiting, error UI, and redact the dummy build key. — Completed 2025-10-20
- [x] Add 404 / fallback experiences for unknown slugs across download, surah, viewer routes. — Completed 2025-10-20
- [ ] Implement real analytics + consent banner (e.g., Plausible/Umami) for usage tracking.
- [x] Draft privacy policy / terms copy that matches actual data usage and embed into `/privacy`. — Completed 2025-10-20

## 1. Content & Data Enhancements
- [ ] Enrich `allSurahs` with ayah counts and juz/section info for faceted filtering.
- [ ] Import verified translations & transliterations for preview snippets.
- [ ] Seed Hadith collections (e.g., Bukhari, Muslim) with metadata & download links.
- [ ] Build structured data sets for Islamic books, learning resources, and duas (currently marketing-only shells).
- [ ] Add language toggle content (Urdu/Arabic) once translations are prepared.
- [ ] Maintain a changelog of newly added PDFs or media releases.

## 2. AI, Search & Personalisation
- [ ] Connect hero search to unified index (Algolia/Meilisearch/Postgres full-text) with ranking tuned for Qur'an/Hadith.
- [ ] Expand `/api/chat` to support citations + deep links to resources.
- [ ] Cache AI responses per session to reduce token spend and accelerate follow-ups.
- [ ] Add guardrails for sensitive questions with scholar-backed responses.
- [ ] Log anonymised prompts/responses for quality review.
- [ ] Auto-suggest surahs/hadiths as the user types (typeahead component).

## 3. UX, Accessibility & Responsiveness
- [ ] Implement mobile reflow for the hero search (ensure Ask AI button doesn’t wrap on <=360px screens).
- [ ] Add accessible skip links and focus outlines for keyboard navigation.
- [ ] Provide high-contrast theme toggle beyond night mode (WCAG AA compliance audit).
- [ ] Lazy-load heavy sections/images to improve initial render (hero, cards, backgrounds).
- [ ] Add toast/feedback when copy/download/share actions occur.
- [ ] Provide inline loaders/skeleton states for mega menu and download cards.
- [ ] Localise numerals/dates if locale changes (i18n wiring).

## 4. Performance, QA & DevOps
- [ ] Configure image optimisation (Next Image or external CDN) for hero/illustrations when added.
- [ ] Set up automated lint + typecheck in CI.
- [ ] Add end-to-end smoke tests (Playwright/Cypress) covering hero search, download flow, and AI chat.
- [ ] Install error monitoring (Sentry or similar) and configure DSN env vars.
- [ ] Create preview deployments for PR review (Vercel/Netlify).
- [ ] Profile bundle size; code-split large components (AI modal, viewer) if needed.
- [ ] Document environment variable requirements (`OPENAI_API_KEY`, upcoming storage/S3 keys).

## 5. Marketing & Community
- [ ] Prepare launch blog post + email newsletter draft.
- [ ] Set up social share images/OG tags for main routes (`/`, `/download`, key surahs).
- [ ] Build feedback form / contact route that stores submissions securely.
- [ ] Offer donation impact section backed by stats/testimonials.
- [ ] Plan content calendar for weekly featured surah/hadith promotions.

## 6. Nice-to-Have Enhancements
- [ ] Multi-language UI switcher (Urdu, Arabic, English).
- [ ] User accounts for personal reading lists and download history.
- [ ] Offline-friendly Progressive Web App (install prompt, caching strategy).
- [ ] Integration with popular Quran apps via export/share.
- [ ] Real-time recitation playlist builder with queue control.

_Keep iterating on this roadmap; break tasks into smaller issues as soon as work begins. Always mark completion with date stamps so progress is transparent._
