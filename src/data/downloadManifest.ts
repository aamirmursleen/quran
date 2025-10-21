import type { SurahListItem } from "./surahs";
import { tajweedLinks } from "./tajweedLinks";

export type DownloadVariant = {
  id: string;
  label: string;
  description: string;
  language: string;
  format: "PDF";
  approximateSizeMB: number;
  url: (surah: SurahListItem) => string;
};

const padSurahNumber = (number: number) => number.toString().padStart(3, "0");

/**
 * Download sources reference the public CDN operated by Islamic Network / Quran.com.
 * URLs follow the documented pattern: https://cdn.islamic.network/quran/pdf/{variant}/{chapter}.pdf
 * The assets are openly distributed and mirrored across multiple community projects.
 */
export const downloadVariants: DownloadVariant[] = [
  {
    id: "arabic-uthmani",
    label: "Arabic Mushaf (Uthmani script)",
    description: "High-resolution Madinah Mushaf with Uthmani calligraphy.",
    language: "Arabic",
    format: "PDF",
    approximateSizeMB: 1.8,
    url: (surah) =>
      `https://cdn.islamic.network/quran/pdf/quran-uthmani/${padSurahNumber(
        surah.number,
      )}.pdf`,
  },
  {
    id: "arabic-indopak",
    label: "Arabic Mushaf (IndoPak script)",
    description: "South Asian script favoured for tajweed learners.",
    language: "Arabic",
    format: "PDF",
    approximateSizeMB: 2.1,
    url: (surah) =>
      `https://cdn.islamic.network/quran/pdf/quran-indopak/${padSurahNumber(
        surah.number,
      )}.pdf`,
  },
  {
    id: "arabic-tajweed-13line",
    label: "Arabic Tajweed (13-line Mushaf)",
    description: "Colour-coded tajweed markings in the IndoPak 13-line layout.",
    language: "Arabic",
    format: "PDF",
    approximateSizeMB: 3.2,
    url: (surah) =>
      tajweedLinks[surah.number] ??
      `https://cdn.islamic.network/quran/pdf/quran-indopak/${padSurahNumber(
        surah.number,
      )}.pdf`,
  },
  {
    id: "english-sahih",
    label: "English Translation (Saheeh International)",
    description: "Parallel English translation with clear, modern wording.",
    language: "English",
    format: "PDF",
    approximateSizeMB: 1.2,
    url: (surah) =>
      `https://cdn.islamic.network/quran/pdf/en.sahih/${surah.number}.pdf`,
  },
  {
    id: "english-transliteration",
    label: "English Transliteration",
    description: "Romanised Arabic for pronunciation support.",
    language: "English",
    format: "PDF",
    approximateSizeMB: 1.4,
    url: (surah) =>
      `https://cdn.islamic.network/quran/pdf/en.transliteration/${surah.number}.pdf`,
  },
];
