import { allSurahs } from "./surahs";
import { downloadVariants } from "./downloadManifest";

export type Surah = {
  id: number;
  slug: string;
  name: string;
  transliteration: string;
  ayahCount: number;
  downloads: string;
  description: string;
  accent?: string;
};

export type Category = {
  id: number;
  title: string;
  description: string;
  count: number;
  accent: string;
};

export type PopularItem = {
  id: number;
  title: string;
  subtitle: string;
  downloads: string;
  rating: string;
  actions: string[];
};

export type SurahDetail = {
  slug: string;
  title: string;
  arabicTitle: string;
  chapter: number;
  verses: number;
  downloads: string;
  rating: string;
  size: string;
  pages: number;
  languages: string[];
  formats: string[];
  description: string;
  highlights: string[];
  related: { title: string; href: string }[];
};

export const heroQuickLinks = [
  {
    label: "Surah Yasin",
    href: "/surah/yasin",
  },
  {
    label: "Al-Mulk",
    href: "/surah/al-mulk",
  },
  {
    label: "Ayat al-Kursi",
    href: "/surah/ayat-al-kursi",
  },
];

export const featuredSurahs: Surah[] = [
  {
    id: 1,
    slug: "al-fatiha",
    name: "Al-Fatiha",
    transliteration: "The Opening",
    ayahCount: 7,
    downloads: "45K",
    description: "The opener that sets the tone for the entire Quran.",
    accent: "from-[#0D7377] to-[#4DB8B8]",
  },
  {
    id: 2,
    slug: "al-baqara",
    name: "Al-Baqara",
    transliteration: "The Cow",
    ayahCount: 286,
    downloads: "38K",
    description: "Comprehensive guidance covering creed, law, and stories.",
    accent: "from-[#4DB8B8] to-[#D4AF37]",
  },
  {
    id: 3,
    slug: "ali-imran",
    name: "Aali-Imran",
    transliteration: "The Family of Imran",
    ayahCount: 200,
    downloads: "29K",
    description: "A chapter of steadfastness, mercy, and divine love.",
    accent: "from-[#D4AF37] to-[#0D7377]",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    title: "Complete Quran",
    description: "High-quality mushafs and 12 translations",
    count: 12,
    accent: "from-[#0D7377]/15 to-[#4DB8B8]/20",
  },
  {
    id: 2,
    title: "Hadith Collections",
    description: "Sahih Bukhari, Muslim, Tirmidhi, and more",
    count: 45,
    accent: "from-[#D4AF37]/15 to-[#0D7377]/15",
  },
  {
    id: 3,
    title: "Dua & Dhikr",
    description: "Morning & evening adhkar, 40 Rabbana duas",
    count: 28,
    accent: "from-[#4DB8B8]/15 to-[#D4AF37]/20",
  },
  {
    id: 4,
    title: "Fiqh & Jurisprudence",
    description: "Classical manuals across the madhahib",
    count: 34,
    accent: "from-[#2C3E50]/10 to-[#0D7377]/10",
  },
  {
    id: 5,
    title: "Seerah & History",
    description: "Prophetic biography and golden age chronicles",
    count: 18,
    accent: "from-[#D4AF37]/18 to-[#4DB8B8]/18",
  },
  {
    id: 6,
    title: "Children's Books",
    description: "Illustrated stories and learning guides",
    count: 22,
    accent: "from-[#4DB8B8]/18 to-[#0D7377]/18",
  },
];

export const popularDownloads: PopularItem[] = [
  {
    id: 1,
    title: "Surah Yasin - Full Arabic",
    subtitle: "Chapter 36 • Makkan Revelation",
    downloads: "12,459",
    rating: "4.9",
    actions: ["Quick Download", "Preview"],
  },
  {
    id: 2,
    title: "Ayat al-Kursi - Translation",
    subtitle: "Verse 255 • Protection & Mercy",
    downloads: "9,234",
    rating: "5.0",
    actions: ["Quick Download", "Preview"],
  },
  {
    id: 3,
    title: "40 Rabbana Duas",
    subtitle: "Essential supplications from the Quran",
    downloads: "8,891",
    rating: "4.8",
    actions: ["Quick Download", "Preview"],
  },
];

export const recommendedAfterDownload = [
  {
    title: "Surah Al-Waqi'ah - Sustenance",
    href: "/surah/al-waqiah",
  },
  {
    title: "Hisnul Muslim - Fortress of the Muslim",
    href: "/books/hisnul-muslim",
  },
  {
    title: "Morning & Evening Adhkar",
    href: "/dua/morning-evening",
  },
];

export const inspirationalQuotes = [
  {
    quote:
      "The best of you are those who learn the Qur'an and teach it.",
    source: "Prophet Muhammad ﷺ",
  },
  {
    quote:
      "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise.",
    source: "Sunan Abu Dawud",
  },
  {
    quote: "Knowledge is a light that Allah places in the heart.",
    source: "Imam Malik",
  },
];

export const viewerShortcuts = [
  { combo: "← →", label: "Navigate pages" },
  { combo: "+ / -", label: "Zoom in & out" },
  { combo: "F", label: "Toggle fullscreen" },
  { combo: "N", label: "Night mode" },
];

const downloadNumberFormatter = new Intl.NumberFormat("en-US");

const languagesAvailable = Array.from(
  new Set(downloadVariants.map((variant) => variant.language)),
);

export const surahDetails: Record<string, SurahDetail> = allSurahs.reduce(
  (acc, surah, index) => {
    const estimatedDownloads = 9000 + (114 - surah.number) * 85;
    const estimatedPages = Math.max(4, Math.ceil(surah.verses / 12) + 2);
    const estimatedSize = (downloadVariants[0]?.approximateSizeMB ?? 1.5) + surah.verses * 0.01;
    const relatedItems = [1, 2, 3]
      .map((offset) => allSurahs[(index + offset) % allSurahs.length])
      .map((relatedSurah) => ({
        title: `Surah ${relatedSurah.transliteration}`,
        href: `/surah/${relatedSurah.slug}`,
      }));

    acc[surah.slug] = {
      slug: surah.slug,
      title: `Surah ${surah.transliteration}`,
      arabicTitle: `سورة ${surah.arabic}`,
      chapter: surah.number,
      verses: surah.verses,
      downloads: downloadNumberFormatter.format(estimatedDownloads),
      rating: (4.6 + ((surah.number % 7) * 0.05)).toFixed(1),
      size: `~${estimatedSize.toFixed(1)} MB`,
      pages: estimatedPages,
      languages: languagesAvailable,
      formats: downloadVariants.map((variant) => variant.label),
      description: `A ${surah.revelation.toLowerCase()} chapter of ${surah.verses} verses focusing on ${surah.english.toLowerCase()}. Download the Qur'an text and supporting translations instantly for study or memorisation.`,
      highlights: [
        `${surah.revelation} revelation • ${surah.verses} verses`,
        `Includes ${downloadVariants.length} curated PDF formats (Arabic & English).`,
        `Ideal for printing, tablet reading, and pairing with audio recitation.`,
      ],
      related: relatedItems,
    };

    return acc;
  },
  {} as Record<string, SurahDetail>,
);
