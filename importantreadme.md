# Islamic Library Platform – Working Notes

This repository hosts a Next.js 15 (App Router) experience for the Islamic Library. The goal is to provide a serene, AI-assisted hub for Qur'an PDFs, audio recitations, hadith collections, and wider Islamic learning resources. This document captures the layout, data contracts, interaction patterns, and project conventions so future contributors (and AI agents) can orient themselves quickly.

## Stack & Tooling
- **Framework**: Next.js 15 with the App Router, running React 19 client components where needed.
- **Styling**: Tailwind CSS 4 (via the `@tailwindcss/postcss` preset) plus custom utility classes in `src/app/globals.css`.
- **Language**: TypeScript throughout the app and component tree.
- **Linting**: ESLint (`npm run lint`). No dedicated formatting tool configured yet.
- **Scripts**: `npm run dev` (port 4000, Turbopack), `npm run build`, `npm run start`, `npm run lint`.

## Directory Highlights
```
src/
  app/
    layout.tsx         // Root layout & fonts
    page.tsx           // Homepage composition
    download/
      page.tsx         // Directory of all 114 surahs (NEW)
      [slug]/page.tsx  // Download flow for a specific surah
  components/
    SiteHeader.tsx     // Sticky navigation + mega menu
    QuickActionsBar.tsx
    HeroSection.tsx
    GetStartedSection.tsx
    DownloadQuranSection.tsx
    AudioRecitationSection.tsx
    FeaturedSurahs.tsx
    AISearchPanel.tsx
    HadithCollectionsSection.tsx
    IslamicBooksSection.tsx
    LearningResourcesSection.tsx
    BrowseCategories.tsx
    PopularDownloads.tsx
    ScrollReveal.tsx   // IntersectionObserver logic for scroll animations
  data/
    content.ts         // Featured surahs, popular downloads, quotes, etc.
    surahs.ts          // Comprehensive metadata for all 114 surahs (NEW)
```

## Homepage Flow (src/app/page.tsx)
1. `QuickActionsBar` – floating buttons that mirror the primary journeys (download, audio, library, Ask AI).
2. `HeroSection` – welcoming hero with larger search panel, “Popular now” shortcuts, and CTA buttons for download/audio.
3. `GetStartedSection` – three-card strip guiding users to the main hubs.
4. Primary sections sequenced as: Downloads → Audio → Featured Surahs → AI guide → Hadith → Islamic Books → Learning Resources → Browse Categories → Popular Downloads.
5. Scroll animations triggered via data attributes and `ScrollReveal` client hook.

## ScrollReveal System
- `ScrollReveal.tsx` adds `reveal-ready` to `<html>` and uses an IntersectionObserver to toggle `is-visible`.
- Any element with `data-animate` (`fade-up`, `scale`, `slide-left`, etc.) transitions in when observed.
- `data-delay="n"` or inline `style={{ "--reveal-delay": "..." }}` staggers animations.
- Honors `prefers-reduced-motion` by immediately showing content without transitions.

## Data Sources
- `content.ts` holds curated lists (featured surahs, categories, quotes, etc.). Extend this for more hero quick links or download recommendations.
- `surahs.ts` (added) enumerates all surahs with: number, slug, Arabic, transliteration, English meaning, revelation type. This powers the `/download` directory and can be reused for other indexes.

## Download Experience
- `/download` now surfaces a modern directory:
  - Search box filters by number, transliteration, English meaning, or Arabic script.
  - Filter chips for Makki / Madani breakdowns.
  - Each surah card exposes quick actions: download, preview, listen, Ask AI.
  - Summary stats (total, Makki, Madani) auto-computed from `allSurahs`.
- `/download/[slug]` remains the progress-and-success flow for the actual PDF download, pulling metadata from `surahDetails`. Extend `surahDetails` whenever a new slug needs rich copy.

## Mega Menu Notes (SiteHeader)
- Hover intent is managed through a small delay so the menu does not collapse instantly when moving between trigger and panel.
- Click and keyboard focus also open the panel, keeping navigation accessible.
- `megaMenuData` embeds the hard-coded structure for Qur'an / Hadith / Library columns. Update there when adding new sections.

## Styling & Animations
- Global CSS (`src/app/globals.css`) defines repeated gradients, glass effects, and animation keyframes. Custom classes: `search-glow`, `glass-panel`, `section-fade`, etc.
- Hero search has a gradient overlay plus enlarged input/button for clarity.
- Animations respect reduce-motion preferences.

## Testing & Verification
- Run `npm run lint` before pushing; no unit tests yet.
- Manual smoke tests recommended:
  1. `npm run dev` (port 4000) → verify homepage scroll animations and hero search.
  2. Hover/click top-level mega menu items to ensure panels stay open.
  3. Visit `/download` → search/filter, click through download/preview/audio links.
  4. Open `/download/yasin` (or other slugs once added) to confirm progress UX.

## Future Opportunities / TODOs
- Expand `surahDetails` to cover all surahs so the download page can show richer context per slug.
- Plug in real download URLs, preview readers, and audio routes (currently placeholder links for many actions).
- Add automated testing (Playwright or Cypress) for navigation and animations.
- Consider extracting repeated “chip” button styles into shared components.
- Document deployment process once hosting is chosen.

## Quick Reference
- **Dev server**: `npm run dev` (http://localhost:4000)
- **Lint**: `npm run lint`
- **Primary data files**: `src/data/content.ts`, `src/data/surahs.ts`
- **Key UI hooks**: `ScrollReveal`, hero search state, mega menu state machine
- **Design language**: teal/gold palette, rounded corners, glassmorphism, minimal drop shadows.

Keep this document updated whenever significant data structures, navigation flows, or tooling change. It should serve as the onboarding cheat sheet for any future AI/helper stepping into the project.
