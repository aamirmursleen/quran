import { allSurahs } from "@/data/surahs";
import { surahDetails } from "@/data/content";

const normalise = (value: string) => value.normalize("NFKD").toLowerCase();

export type SurahSearchResult = {
  type: "surah";
  number: number;
  slug: string;
  transliteration: string;
  english: string;
  arabic: string;
  revelation: string;
  verses: number;
  title: string;
  subtitle: string;
  url: string;
  downloadUrl: string;
  previewUrl: string;
  description: string;
};

export function searchSurahs(
  query: string,
  revelation: string | null = "all",
  limit = 114,
): SurahSearchResult[] {
  const searchTerm = normalise(query ?? "");

  return allSurahs
    .filter((surah) => {
      const matchesRevelation =
        revelation === null || revelation === "all"
          ? true
          : surah.revelation.toLowerCase() === revelation.toLowerCase();

      if (!matchesRevelation) return false;
      if (!searchTerm.trim()) return true;

      const haystack = normalise(
        `${surah.number} ${surah.slug} ${surah.transliteration} ${surah.english} ${surah.arabic}`,
      );
      return haystack.includes(searchTerm);
    })
    .slice(0, limit)
    .map((surah) => {
      const detail = surahDetails[surah.slug];
      return {
        type: "surah" as const,
        number: surah.number,
        slug: surah.slug,
        transliteration: surah.transliteration,
        english: surah.english,
        arabic: surah.arabic,
        revelation: surah.revelation,
        verses: surah.verses,
        title: `Surah ${surah.transliteration}`,
        subtitle: `${surah.revelation} • ${surah.verses} verses`,
        url: `/surah/${surah.slug}`,
        downloadUrl: `/download/${surah.slug}`,
        previewUrl: `/viewer/${surah.slug}`,
        description: detail.description,
      };
    });
}
