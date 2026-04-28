
import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Expose the Lenis instance globally so other components (Navbar, etc.) can use it
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // --- Merged ScrollObserver logic into Lenis's own rAF ---

    // 1. Intersection Observer for scroll-animate (fires only on intersection, no rAF cost)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px'
    });

    requestAnimationFrame(() => {
      document.querySelectorAll('.scroll-animate').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    });

    // 2. Cache scroll-linked elements for CSS var updates
    let scrollElements: HTMLElement[] | null = null;
    let lastScrollUpdate = 0;

    const cacheElements = () => {
      scrollElements = Array.from(
        document.querySelectorAll('.title-bar, .tier-line, .timeline-rift, .timeline-connector')
      ) as HTMLElement[];
    };

    setTimeout(cacheElements, 2000);

    // 3. Use Lenis's scroll event instead of a separate rAF loop
    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      const now = performance.now();
      // Throttle CSS var updates to ~20fps — they don't need 60fps
      if (now - lastScrollUpdate < 50) return;
      lastScrollUpdate = now;

      document.documentElement.style.setProperty('--scroll-y', `${scroll}`);

      if (scrollElements) {
        const windowHeight = window.innerHeight;
        for (let i = 0; i < scrollElements.length; i++) {
          const rect = scrollElements[i].getBoundingClientRect();
          const progress = Math.max(0, windowHeight - rect.top);
          scrollElements[i].style.setProperty('--local-scroll', `${progress}`);
        }
      }
    });

    // Single rAF loop — only Lenis, no second loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      observer.disconnect();
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
