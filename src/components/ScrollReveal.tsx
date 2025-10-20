"use client";

import { useEffect } from "react";

const intersectionConfig: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
};

export function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );

    if (prefersReducedMotion.matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add("is-visible");
          if (target.dataset.animateOnce !== "false") {
            observer.unobserve(target);
          }
        } else if (target.dataset.animateOnce === "false") {
          target.classList.remove("is-visible");
        }
      });
    }, intersectionConfig);

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
