import type { SurahListItem } from "./surahs";

export type Reciter = {
  id: string;
  name: string;
  style: string;
  description: string;
  location: string;
  qualityKbps: number;
  getStreamUrl: (surah: SurahListItem) => string;
};

const padSurahNumber = (number: number) => number.toString().padStart(3, "0");

export const reciters: Reciter[] = [
  {
    id: "alafasy",
    name: "Mishary Rashid Alafasy",
    style: "Murattal",
    description: "Popular recitation with warm tone and precise tajweed.",
    location: "Kuwait",
    qualityKbps: 128,
    getStreamUrl: (surah) =>
      `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${padSurahNumber(surah.number)}.mp3`,
  },
  {
    id: "husary",
    name: "Mahmoud Khalil Al-Husary",
    style: "Murattal",
    description: "Classic recording ideal for memorisation and tajweed study.",
    location: "Egypt",
    qualityKbps: 128,
    getStreamUrl: (surah) =>
      `https://cdn.islamic.network/quran/audio/128/ar.husary/${padSurahNumber(surah.number)}.mp3`,
  },
  {
    id: "minshawi",
    name: "Mohamed Siddiq El-Minshawi",
    style: "Mu'jawwad",
    description: "Melodic and emotive recitation that emphasises meaning.",
    location: "Egypt",
    qualityKbps: 192,
    getStreamUrl: (surah) =>
      `https://cdn.islamic.network/quran/audio/192/ar.minshawi/${padSurahNumber(surah.number)}.mp3`,
  },
];
