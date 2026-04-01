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
                <div className="sponsor-item">
                  <div className="sponsor-logo sponsor-lg"><span>Coming Soon</span></div>
                  <p className="sponsor-desc"></p>
                </div>
              </div>
            </div>

            {/* Official Platform Partner */}
            <div className="sponsor-tier sponsor-tier--half" style={{ "--delay": "0.15s" } as React.CSSProperties}>
              <div className="tier-header">
                <h3 className="tier-label">
                  <span className="tier-label-text">OFFICIAL PLATFORM<br />PARTNER</span>
                  <div className="tier-line"></div>
                </h3>
              </div>
              <div className="sponsor-logos">
                <div className="sponsor-item">
                  <div className="sponsor-logo sponsor-lg sponsor-logo--image">
                    <img src="/sponsor/h2s.png" alt="H2S Media" className="sponsor-img" loading="lazy" />
                  </div>
                  <p className="sponsor-desc">Premium platform provider</p>
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
                <div className="sponsor-item">
                  <div className="sponsor-logo sponsor-md sponsor-logo--image" style={{ padding: '1rem' }}>
                    <img src="/sponsor/prabony.png" alt="Prabony" className="sponsor-img" style={{ objectFit: 'contain' }} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sponsors */}
          <div className="sponsor-tier scroll-animate" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            <div className="tier-header">
              <h3 className="tier-label">
                <span className="tier-label-text">SPONSORS</span>
                <div className="tier-line"></div>
              </h3>
            </div>
            <div className="sponsor-logos">
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md">
                  <img src="/sponsor/xyz.png" alt="xyz" className="sponsor-img" loading="lazy" />
                </div>
                <p className="sponsor-desc">Domain Sponsor</p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md"><span>Coming Soon</span></div>
                <p className="sponsor-desc"></p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md"><span>Coming Soon</span></div>
                <p className="sponsor-desc"></p>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="sponsor-tier scroll-animate" style={{ "--delay": "0.4s" } as React.CSSProperties}>
            <div className="tier-header">
              <h3 className="tier-label">
                <span className="tier-label-text">PARTNERS</span>
                <div className="tier-line"></div>
              </h3>
            </div>
            <div className="sponsor-logos">
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
                <p className="sponsor-desc"></p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
                <p className="sponsor-desc"></p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
                <p className="sponsor-desc"></p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-sm"><span>Coming Soon</span></div>
                <p className="sponsor-desc"></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
