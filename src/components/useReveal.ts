import { useEffect } from "react";

/**
 * Adds `.reveal-visible` to `.reveal` blocks as they enter the viewport,
 * with a short fallback so content is never left hidden.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    // Safety net in case IntersectionObserver never fires (e.g. hidden tab
    // with reduced resources): never leave content invisible.
    const fallback = window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("reveal-visible"));
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}
