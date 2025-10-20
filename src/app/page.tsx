import { AISearchPanel } from "@/components/AISearchPanel";
import { BrowseCategories } from "@/components/BrowseCategories";
import { FeaturedSurahs } from "@/components/FeaturedSurahs";
import { HeroSection } from "@/components/HeroSection";
import { PopularDownloads } from "@/components/PopularDownloads";
import { QuickActionsBar } from "@/components/QuickActionsBar";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FEFDF8] text-[#2C3E50]">
      <QuickActionsBar />
      <HeroSection />
      <main className="relative z-10 flex flex-col gap-12 pb-24">
        <AISearchPanel />
        <FeaturedSurahs />
        <BrowseCategories />
        <PopularDownloads />
      </main>
      <SiteFooter />
    </div>
  );
}
