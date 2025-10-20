import { AISearchPanel } from "@/components/AISearchPanel";
import { AudioRecitationSection } from "@/components/AudioRecitationSection";
import { BrowseCategories } from "@/components/BrowseCategories";
import { DownloadQuranSection } from "@/components/DownloadQuranSection";
import { FeaturedSurahs } from "@/components/FeaturedSurahs";
import { GetStartedSection } from "@/components/GetStartedSection";
import { HadithCollectionsSection } from "@/components/HadithCollectionsSection";
import { HeroSection } from "@/components/HeroSection";
import { IslamicBooksSection } from "@/components/IslamicBooksSection";
import { LearningResourcesSection } from "@/components/LearningResourcesSection";
import { PopularDownloads } from "@/components/PopularDownloads";
import { QuickActionsBar } from "@/components/QuickActionsBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FEFDF8] text-[#2C3E50]">
      <QuickActionsBar />
      <HeroSection />
      <GetStartedSection />
      <main className="relative z-10 flex flex-col gap-0">
        <DownloadQuranSection />
        <AudioRecitationSection />
        <FeaturedSurahs />
        <AISearchPanel />
        <HadithCollectionsSection />
        <IslamicBooksSection />
        <LearningResourcesSection />
        <BrowseCategories />
        <PopularDownloads />
      </main>
    </div>
  );
}
