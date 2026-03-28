import React from 'react';

export default function Sponsors() {
  return (
    <section id="sponsors" className="section sponsors-section">
      <div className="section-container sponsors-container">
        <div className="section-header scroll-animate">
          <div className="title-block center">
            <h2 className="section-title">THE <span className="text-primary text-glow">BENEFACTORS</span></h2>
            <div className="title-bar"></div>
          </div>
          <p className="section-subtitle">Entities funding our expedition into the unknown.</p>
        </div>
        <div className="sponsors-tiers">

          {/* Title Sponsors + Official Platform Partner + Powered By — side by side */}
          <div className="sponsor-top-row scroll-animate">

            {/* Title Sponsors */}
            <div className="sponsor-tier sponsor-tier--half">
              <div className="tier-header">
                <h3 className="tier-label">
                  <span className="tier-label-text">TITLE SPONSORS</span>
                  <div className="tier-line"></div>
                </h3>
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo sponsor-lg"><span>Coming Soon</span></div>
              </div>
            </div>

            {/* Official Platform Partner */}
            <div className="sponsor-tier sponsor-tier--half" style={{ "--delay": "0.15s" } as React.CSSProperties}>
              <div className="tier-header">
                <h3 className="tier-label">
                  <span className="tier-label-text">OFFICIAL PLATFORM PARTNER</span>
                  <div className="tier-line"></div>
                </h3>
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo sponsor-lg sponsor-logo--image">
                  <img src="/h2s.png" alt="H2S Media" className="sponsor-img" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Powered By */}
            <div className="sponsor-tier sponsor-tier--half" style={{ "--delay": "0.25s" } as React.CSSProperties}>
              <div className="tier-header">
                <h3 className="tier-label">
                  <span className="tier-label-text">POWERED BY</span>
                  <div className="tier-line"></div>
                </h3>
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-logo sponsor-lg sponsor-logo--image" style={{ padding: '1.5rem' }}>
                  <img src="/prabony.png" alt="Prabony" className="sponsor-img" style={{ objectFit: 'contain' }} loading="lazy" />
                </div>
              </div>
            </div>

          </div>

          {/* Gold Sponsors */}
          <div className="sponsor-tier scroll-animate" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            <div className="tier-header">
              <h3 className="tier-label">
                <span className="tier-label-text">GOLD SPONSORS</span>
                <div className="tier-line"></div>
              </h3>
            </div>
            <div className="sponsor-logos">
              <div className="sponsor-logo sponsor-md"><span>Coming Soon</span></div>
              <div className="sponsor-logo sponsor-md"><span>Coming Soon</span></div>
              <div className="sponsor-logo sponsor-md"><span>Coming Soon</span></div>
            </div>
          </div>

          {/* Community Partners */}
          <div className="sponsor-tier scroll-animate" style={{ "--delay": "0.4s" } as React.CSSProperties}>
            <div className="tier-header">
              <h3 className="tier-label">
                <span className="tier-label-text">COMMUNITY PARTNERS</span>
                <div className="tier-line"></div>
              </h3>
            </div>
            <div className="sponsor-logos">
              <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
              <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
              <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
              <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
