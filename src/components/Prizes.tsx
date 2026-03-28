import React from "react";

export default function Prizes() {
  return (
    <section id="prizes" className="section prizes-section">
      <div className="section-container">
        <div className="section-header scroll-animate">
          <div className="title-block center">
            <h2 className="section-title">PRIZES & <span className="text-primary text-glow">REWARDS</span></h2>
            <div className="title-bar"></div>
          </div>
        </div>

        <div className="prize-main-banner scroll-animate">
          <div className="prize-banner-content">
            <span className="prize-label">TOTAL PRIZE POOL WORTH</span>
            <h3 className="prize-amount">₹5,00,000</h3>
          </div>
          <div className="prize-banner-glow"></div>
        </div>

        <p className="prize-description scroll-animate">
          Compete for exciting prizes, goodies, and industry recognition. Every participant goes home with something special!
        </p>

        <div className="prizes-grid">
          <div className="prize-card scroll-animate" style={{ "--delay": "0.1s" } as React.CSSProperties}>
            <div className="prize-card-header">
              <div className="prize-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
              </div>
              <h4 className="prize-card-title">CASH PRIZES</h4>
            </div>
            <div className="prize-card-body">
              <p className="prize-card-desc">Attractive cash rewards for top performing teams</p>
              <span className="prize-card-value">(₹50,000)</span>
            </div>
          </div>

          <div className="prize-card scroll-animate" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            <div className="prize-card-header">
              <div className="prize-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
              </div>
              <h4 className="prize-card-title">GOODIES & SWAG KITS</h4>
            </div>
            <div className="prize-card-body">
              <p className="prize-card-desc">Exciting goodies and swag kits for top performers</p>
            </div>
          </div>

          <div className="prize-card scroll-animate" style={{ "--delay": "0.3s" } as React.CSSProperties}>
            <div className="prize-card-header">
              <div className="prize-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4 className="prize-card-title">PARTICIPATION CERTIFICATES</h4>
            </div>
            <div className="prize-card-body">
              <p className="prize-card-desc">Official certificates for all participating teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
