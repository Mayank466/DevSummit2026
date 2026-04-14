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
                  <div className="sponsor-logo sponsor-logo--image sponsor-hero">
                    <img src={`${import.meta.env.BASE_URL}sponsor/h2s.png`} alt="H2S Media" className="sponsor-img" style={{ objectFit: 'contain', width: '100%', height: '100%' }} loading="lazy" />
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
                  <div className="sponsor-logo sponsor-logo--image sponsor-hero">
                    <img src={`${import.meta.env.BASE_URL}sponsor/prabony.png`} alt="Prabony" className="sponsor-img" style={{ objectFit: 'contain', width: '100%', height: '100%' }} loading="lazy" />
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
                  <img src={`${import.meta.env.BASE_URL}sponsor/xyz.png`} alt="xyz" className="sponsor-img" loading="lazy" />
                </div>
                <p className="sponsor-desc">Domain Sponsor</p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md">
                  <img src={`${import.meta.env.BASE_URL}sponsor/ea.png`} alt="Engineers Academy" className="sponsor-img" loading="lazy" />
                </div>
                <p className="sponsor-desc">Technical Partner</p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md">
                  <img src={`${import.meta.env.BASE_URL}sponsor/nimbus.png`} alt="NIMBUS" className="sponsor-img" loading="lazy" />
                </div>
                <p className="sponsor-desc">Technical Partner</p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md">
                  <img src={`${import.meta.env.BASE_URL}sponsor/upflairs.png`} alt="Upflairs" className="sponsor-img" loading="lazy" />
                </div>
                <p className="sponsor-desc">Technical Partner</p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md">
                  <img src={`${import.meta.env.BASE_URL}sponsor/pedestal.png`} alt="Pedestal" className="sponsor-img" loading="lazy" />
                </div>
                <p className="sponsor-desc">Technical Partner</p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md">
                  <span>Coming Soon</span>
                </div>
                <p className="sponsor-desc"></p>
              </div>
              <div className="sponsor-item">
                <div className="sponsor-logo sponsor-md">
                  <span>Coming Soon</span>
                </div>
                <p className="sponsor-desc"></p>
              </div>
            </div>
          </div>
        </div>

        {/* Join as a Sponsor Button */}
        <div className="sponsor-join-container scroll-animate" style={{ "--delay": "0.6s" } as React.CSSProperties}>
          <a
            href="https://forms.gle/8De2H2LQSftnpvL5A"
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-join-btn"
          >
            <svg
              className="sponsor-mail-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Join as a Sponsor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
