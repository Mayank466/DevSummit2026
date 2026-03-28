"use client";

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
    let animationFrameId: number;

    const onScrollLoop = () => {
      const currentScrollY = window.scrollY;

      // Update CSS variables for global use
      document.documentElement.style.setProperty('--scroll-y', `${currentScrollY}`);

      // Update local scroll for bars, tier lines, and timeline lines
      document.querySelectorAll('.title-bar, .tier-line, .timeline-rift, .timeline-connector').forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Progress starts when the element enters the bottom of the viewport
        const progress = Math.max(0, windowHeight - rect.top);
        (el as HTMLElement).style.setProperty('--local-scroll', `${progress}`);
      });

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
