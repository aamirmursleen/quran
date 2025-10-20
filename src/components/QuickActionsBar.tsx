"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const actions = [
  { label: "Download PDFs", icon: "📥", href: "#download" },
  { label: "Listen Audio", icon: "🎧", href: "#audio" },
  { label: "Explore Library", icon: "🧭", href: "#library" },
  { label: "Ask the AI", icon: "🤖", href: "#ask-ai" },
];

export function QuickActionsBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setVisible(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-6 z-30 flex justify-center transition duration-500 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-12 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <nav className="glass-panel flex items-center gap-4 rounded-full px-4 py-2 text-sm font-medium text-[#2C3E50]/80 shadow-[var(--shadow-md)]">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-[#0D7377]/10 hover:text-[#0D7377]"
          >
            <span>{action.icon}</span>
            <span className="hidden sm:inline">{action.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
