"use client";

import { useState, useEffect, useRef } from "react";

const faqData = [
  { q: "Who can participate?", a: "Anyone brave enough. Students, professionals, and entities from parallel dimensions are all welcome. You must be at least 18 years old to enter the portal." },
  { q: "How many members in a party?", a: "Your squad can have 2 to 4 members. Solo adventurers are allowed, but it's dangerous to go alone." },
  { q: "Is there an entry fee?", a: "No. The Department of Energy covers all costs. Registration, food, and survival gear are completely free." },
  { q: "What if I don't have a team?", a: "We will have a team-building session before the hackathon begins. You'll find your party there." },
  { q: "What should I bring?", a: "Your rig (laptop), chargers, sleeping bag, personal hygiene items, and a flashlight. We provide the rest." },
  { q: "Are we allowed to use AI?", a: "Yes. Taming synthetic intelligence is highly encouraged. Just don't let it tame you." },
  { q: "Can we build on past projects?", a: "No. All code must be written during the 48-hour window. Existing libraries and frameworks are fine." },
  { q: "Where do we sleep?", a: "Designated safe zones will be provided. Sleeping is optional, but hallucinations due to sleep deprivation will not grant you extra points." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-faq-index'));
          if (!isNaN(index)) {
            setVisibleItems(prev => new Set(prev).add(index));
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px'
    });

    requestAnimationFrame(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleItems(prev => new Set(prev).add(i));
        } else {
          observer.observe(el);
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="section faq-section">
      <div className="faq-radial-bg"></div>
      <div className="section-container faq-container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">CLASSIFIED <span className="text-primary text-glow">INTEL</span></h2>
          <div className="title-bar center"></div>
        </div>
        <div className="faq-list">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            const isVisible = visibleItems.has(i);
            return (
              <div
                key={i}
                ref={el => { itemRefs.current[i] = el; }}
                data-faq-index={i}
                className={`faq-item scroll-animate ${isVisible ? "visible" : ""} ${isOpen ? "open" : ""}`}
                style={{ "--delay": `${i * 0.05}s` } as React.CSSProperties}
              >
                <button className="faq-question" onClick={() => toggleFAQ(i)}>
                  <span className="faq-question-text">{item.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div 
                  className="faq-answer" 
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
