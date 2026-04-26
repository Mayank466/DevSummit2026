
import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
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
        // If element is already in the viewport, make it visible immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    });

    // 2. Scroll Position tracking (for tagline expanding)
    // Cache DOM queries — these don't change after mount
    let scrollElements: HTMLElement[] | null = null;
    let animationFrameId: number;
    let lastUpdate = 0;

    const cacheElements = () => {
      scrollElements = Array.from(
        document.querySelectorAll('.title-bar, .tier-line, .timeline-rift, .timeline-connector')
      ) as HTMLElement[];
    };

    // Initial cache after a short delay to let lazy components load
    setTimeout(cacheElements, 2000);

    const onScrollLoop = () => {
      const now = performance.now();
      // Throttle to ~20fps (50ms) — scroll CSS vars don't need 60fps
      if (now - lastUpdate < 50) {
        animationFrameId = requestAnimationFrame(onScrollLoop);
        return;
      }
      lastUpdate = now;

      const currentScrollY = window.scrollY;

      // Update CSS variables for global use
      document.documentElement.style.setProperty('--scroll-y', `${currentScrollY}`);

      // Update local scroll for bars, tier lines, and timeline lines
      if (scrollElements) {
        const windowHeight = window.innerHeight;
        for (let i = 0; i < scrollElements.length; i++) {
          const rect = scrollElements[i].getBoundingClientRect();
          const progress = Math.max(0, windowHeight - rect.top);
          scrollElements[i].style.setProperty('--local-scroll', `${progress}`);
        }
      }

      animationFrameId = requestAnimationFrame(onScrollLoop);
    };

    animationFrameId = requestAnimationFrame(onScrollLoop);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
}
