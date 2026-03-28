"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-01T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="section">
      <div className="section-container">
        <div className="section-header scroll-animate visible">
          <h2 className="section-title">THE COUNTDOWN <span className="text-primary text-glow">BEGINS</span></h2>
          <div className="title-bar center"></div>
        </div>

        <div className="countdown-info-container scroll-animate">
          <div className="countdown-combined-box">
            <a 
              href="https://maps.app.goo.gl/VRfJ5w9cmkNZdLP19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="info-item venue-link"
            >
              <div className="info-icon-small">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="info-content-small">
                <span className="info-label-small">VENUE</span>
                <span className="info-value-small underline-hover">Jagannath University (Sitapura Campus), Jaipur</span>
              </div>
            </a>
            
            <div className="info-separator"></div>

            <div className="info-item">
              <div className="info-icon-small">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </div>
              <div className="info-content-small">
                <span className="info-label-small">DATE</span>
                <span className="info-value-small">1-2 MAY 2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="countdown-bar box-glow-strong scroll-animate">
          <div className="countdown-unit">
            <span className="countdown-num" id="cd-days">{formatNumber(timeLeft.days)}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num" id="cd-hours">{formatNumber(timeLeft.hours)}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num" id="cd-mins">{formatNumber(timeLeft.mins)}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num" id="cd-secs">{formatNumber(timeLeft.secs)}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
