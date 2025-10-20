"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AIAssistant } from "./AIAssistant";

const megaMenuData = {
  quran: {
    title: "Holy Quran",
    icon: "📖",
    sections: [
      {
        title: "Read & Study",
        items: [
          { label: "Read Quran Online", href: "/surah", icon: "📱" },
          { label: "Surah Index", href: "/surah", icon: "📚" },
          { label: "Juz (Parts)", href: "/juz", icon: "📋" },
          { label: "Tafsir (Commentary)", href: "/tafsir", icon: "💡" },
        ],
      },
      {
        title: "Download",
        items: [
          { label: "PDF Downloads", href: "/download", icon: "📄" },
          { label: "Complete Quran", href: "/download/complete-quran", icon: "📦" },
          { label: "Individual Surahs", href: "/download", icon: "📑" },
          { label: "Translation PDFs", href: "/download/translations", icon: "🌍" },
        ],
      },
      {
        title: "Audio & Recitation",
        items: [
          { label: "Listen Online", href: "/audio", icon: "🎧" },
          { label: "Famous Reciters", href: "/reciters", icon: "🎙️" },
          { label: "MP3 Downloads", href: "/audio/downloads", icon: "⬇️" },
          { label: "Tajweed Lessons", href: "/tajweed", icon: "📿" },
        ],
      },
    ],
  },
  hadith: {
    title: "Hadith Collections",
    icon: "📜",
    sections: [
      {
        title: "Authentic Collections",
        items: [
          { label: "Sahih Bukhari", href: "/hadith/bukhari", icon: "⭐" },
          { label: "Sahih Muslim", href: "/hadith/muslim", icon: "⭐" },
          { label: "Sunan Abu Dawud", href: "/hadith/abu-dawud", icon: "📖" },
          { label: "Jami' at-Tirmidhi", href: "/hadith/tirmidhi", icon: "📖" },
        ],
      },
      {
        title: "More Collections",
        items: [
          { label: "Sunan an-Nasa'i", href: "/hadith/nasai", icon: "📖" },
          { label: "Sunan Ibn Majah", href: "/hadith/ibn-majah", icon: "📖" },
          { label: "Muwatta Malik", href: "/hadith/malik", icon: "📖" },
          { label: "40 Hadith Nawawi", href: "/hadith/nawawi", icon: "💎" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Hadith Search", href: "/hadith/search", icon: "🔍" },
          { label: "Download PDFs", href: "/hadith/downloads", icon: "📥" },
          { label: "Hadith Studies", href: "/hadith/studies", icon: "🎓" },
          { label: "Authenticity Guide", href: "/hadith/authenticity", icon: "✅" },
        ],
      },
    ],
  },
  library: {
    title: "Islamic Library",
    icon: "📚",
    sections: [
      {
        title: "Islamic Books",
        items: [
          { label: "Aqeedah (Belief)", href: "/books/aqeedah", icon: "🕋" },
          { label: "Fiqh (Jurisprudence)", href: "/books/fiqh", icon: "⚖️" },
          { label: "Seerah (Biography)", href: "/books/seerah", icon: "👤" },
          { label: "Islamic History", href: "/books/history", icon: "🏛️" },
        ],
      },
      {
        title: "Learning Resources",
        items: [
          { label: "Arabic Learning", href: "/learn/arabic", icon: "🔤" },
          { label: "Islamic Studies", href: "/learn/islamic-studies", icon: "📖" },
          { label: "Video Lectures", href: "/lectures", icon: "🎬" },
          { label: "Audio Books", href: "/audiobooks", icon: "🎧" },
        ],
      },
      {
        title: "Collections",
        items: [
          { label: "Scholar Works", href: "/scholars", icon: "👨‍🏫" },
          { label: "Research Papers", href: "/research", icon: "📝" },
          { label: "Children's Books", href: "/books/children", icon: "👶" },
          { label: "New Releases", href: "/books/new", icon: "✨" },
        ],
      },
    ],
  },
};

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState<string | null>(null);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const closeMegaMenuTimeout = useRef<number | null>(null);

  const openMegaMenu = (menu: string | null) => {
    if (closeMegaMenuTimeout.current) {
      window.clearTimeout(closeMegaMenuTimeout.current);
      closeMegaMenuTimeout.current = null;
    }
    setActiveMegaMenu(menu);
  };

  const scheduleMegaMenuClose = () => {
    if (closeMegaMenuTimeout.current) {
      window.clearTimeout(closeMegaMenuTimeout.current);
    }
    closeMegaMenuTimeout.current = window.setTimeout(() => {
      setActiveMegaMenu(null);
      closeMegaMenuTimeout.current = null;
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (closeMegaMenuTimeout.current) {
        window.clearTimeout(closeMegaMenuTimeout.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FEFDF8]/95 border-b border-[#0D7377]/10 shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#0D7377] to-[#4DB8B8] text-2xl shadow-md transition-transform group-hover:scale-110">
              🕌
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-[#0D7377] font-display">
                Islamic Library
              </p>
              <p className="text-xs text-[#2C3E50]/60 -mt-0.5">
                Knowledge & Guidance
              </p>
            </div>
          </Link>

          {/* Desktop Navigation with Mega Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
            >
              Home
            </Link>

            {/* Quran Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => openMegaMenu("quran")}
              onMouseLeave={scheduleMegaMenuClose}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                onClick={() =>
                  activeMegaMenu === "quran" ? scheduleMegaMenuClose() : openMegaMenu("quran")
                }
                onFocus={() => openMegaMenu("quran")}
                onBlur={scheduleMegaMenuClose}
              >
                {megaMenuData.quran.icon} Quran
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Hadith Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => openMegaMenu("hadith")}
              onMouseLeave={scheduleMegaMenuClose}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                onClick={() =>
                  activeMegaMenu === "hadith" ? scheduleMegaMenuClose() : openMegaMenu("hadith")
                }
                onFocus={() => openMegaMenu("hadith")}
                onBlur={scheduleMegaMenuClose}
              >
                {megaMenuData.hadith.icon} Hadith
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Library Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => openMegaMenu("library")}
              onMouseLeave={scheduleMegaMenuClose}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                onClick={() =>
                  activeMegaMenu === "library"
                    ? scheduleMegaMenuClose()
                    : openMegaMenu("library")
                }
                onFocus={() => openMegaMenu("library")}
                onBlur={scheduleMegaMenuClose}
              >
                {megaMenuData.library.icon} Library
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAIAssistantOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#4DB8B8] to-[#0D7377] rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105"
              aria-label="AI Assistant"
            >
              <span className="text-lg">🤖</span>
              <span className="hidden xl:inline">Ask AI</span>
            </button>

            <Link
              href="/donate"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0D7377] to-[#4DB8B8] rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              <span className="text-base">💝</span>
              Donate
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#2C3E50] rounded-lg hover:bg-[#0D7377]/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeMegaMenu && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-[#0D7377]/10 shadow-xl"
            onMouseEnter={() => openMegaMenu(activeMegaMenu)}
            onMouseLeave={scheduleMegaMenuClose}
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-12 py-8">
              <div className="grid grid-cols-3 gap-8">
                {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold text-[#0D7377] uppercase tracking-wider mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 text-sm text-[#2C3E50]/80 hover:text-[#0D7377] transition-colors group"
                          >
                            <span className="text-base group-hover:scale-110 transition-transform">{item.icon}</span>
                            <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured Section */}
              <div className="mt-8 pt-8 border-t border-[#0D7377]/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0D7377]">
                        {megaMenuData[activeMegaMenu as keyof typeof megaMenuData].title}
                      </p>
                      <p className="text-xs text-[#2C3E50]/60">
                        Explore our comprehensive collection
                      </p>
                    </div>
                  </div>
                  <Link
                    href={activeMegaMenu === "quran" ? "/surah" : activeMegaMenu === "hadith" ? "/hadith" : "/library"}
                    className="px-6 py-2 text-sm font-medium text-[#0D7377] border border-[#0D7377] rounded-full hover:bg-[#0D7377] hover:text-white transition-all"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#0D7377]/10 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
              >
                Home
              </Link>

              {/* Mobile Quran Submenu */}
              <div>
                <button
                  onClick={() => setIsMobileSubmenuOpen(isMobileSubmenuOpen === "quran" ? null : "quran")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                >
                  <span className="flex items-center gap-2">
                    {megaMenuData.quran.icon} Quran
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileSubmenuOpen === "quran" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileSubmenuOpen === "quran" && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#0D7377]/20 pl-4">
                    {megaMenuData.quran.sections.map((section, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-xs font-semibold text-[#0D7377] uppercase tracking-wider">{section.title}</p>
                        {section.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-[#2C3E50]/70 rounded-lg hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Hadith Submenu */}
              <div>
                <button
                  onClick={() => setIsMobileSubmenuOpen(isMobileSubmenuOpen === "hadith" ? null : "hadith")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                >
                  <span className="flex items-center gap-2">
                    {megaMenuData.hadith.icon} Hadith
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileSubmenuOpen === "hadith" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileSubmenuOpen === "hadith" && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#0D7377]/20 pl-4">
                    {megaMenuData.hadith.sections.map((section, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-xs font-semibold text-[#0D7377] uppercase tracking-wider">{section.title}</p>
                        {section.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-[#2C3E50]/70 rounded-lg hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Library Submenu */}
              <div>
                <button
                  onClick={() => setIsMobileSubmenuOpen(isMobileSubmenuOpen === "library" ? null : "library")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                >
                  <span className="flex items-center gap-2">
                    {megaMenuData.library.icon} Library
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isMobileSubmenuOpen === "library" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileSubmenuOpen === "library" && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#0D7377]/20 pl-4">
                    {megaMenuData.library.sections.map((section, idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-xs font-semibold text-[#0D7377] uppercase tracking-wider">{section.title}</p>
                        {section.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-[#2C3E50]/70 rounded-lg hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-[#2C3E50]/80 rounded-lg transition-all hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
              >
                Contact
              </Link>

              <div className="mt-2 pt-2 border-t border-[#0D7377]/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAIAssistantOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#4DB8B8] to-[#0D7377] rounded-full shadow-md"
                  aria-label="AI Assistant"
                >
                  <span className="text-lg">🤖</span>
                  Ask AI Assistant
                </button>
                <Link
                  href="/donate"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#0D7377] to-[#4DB8B8] rounded-full shadow-md"
                >
                  <span className="text-base">💝</span>
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIAssistantOpen} onClose={() => setIsAIAssistantOpen(false)} />
    </header>
  );
}
