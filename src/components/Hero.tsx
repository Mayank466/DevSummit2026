export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden isolate">
      {/* 1. Underlying gradients (must be behind the image explicitly) */}
      <div className="hero-bg -z-10">
        <div className="hero-gradient-top"></div>
        <div className="hero-gradient-sides"></div>
      </div>
      {/* 2. The background image itself with smooth edge blending */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(4px)',
        opacity: 1,
        transform: 'scale(1.05)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskComposite: 'destination-in',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskComposite: 'intersect',
      }}>
        {/* Hidden img for fetch priority */}
        <img
          src={`${import.meta.env.BASE_URL}/bg.png`}
          alt=""
          style={{ display: 'none' }}
          fetchPriority="high"
        />
      </div>

      <div className="hero-content z-10">
        <div className="hero-title-block animate-on-load relative">
          {/* Text Spotlight to detach from background */}
          <div className="absolute inset-x-[-20%] inset-y-[-50%] bg-[radial-gradient(circle,rgba(255,0,0,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl z-0"></div>

          <div className="hero-titles relative z-10 flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}/logo.png`}
              alt="DEVSUMMIT 2026"
              className="hero-logo animate-on-load"
              fetchPriority="high"
            />
          </div>
          <div className="hero-tagline relative z-10">
            <div className="tagline-line"></div>
            <p className="tagline-text">HACK UPSIDE DOWN</p>
            <div className="tagline-line"></div>
          </div>
        </div>
        <div className="hero-cta animate-on-load delay-1">
          <div className="hero-button-stack flex flex-col items-center gap-6">
            <a href="https://vision.hack2skill.com/event/devsummit?utm_source=hack2skill&utm_medium=homepage&sectionid=69c7a84ee339f97e64d585e6" target="_blank" rel="noopener noreferrer" className="hero-register-btn group inline-block">
              <div className="btn-fill"></div>
              <span className="btn-text">REGISTER NOW</span>
            </a>

            {/* Registration status div */}
            <div className="registration-status-box animate-on-load delay-2">
              <div className="status-badge">
                <span className="status-dot"></span>
                <span className="status-text">REGISTRATION CLOSING SOON</span>
              </div>
              <p className="status-subtext">15th April, 2026</p>
            </div>

            {/* Venue & Date info bar moved from Countdown */}
            <div className="hero-info-bar animate-on-load delay-2">
              <a
                href="https://maps.app.goo.gl/VRfJ5w9cmkNZdLP19"
                target="_blank"
                rel="noopener noreferrer"
                className="info-item venue-link"
              >
                <div className="info-icon-small">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="info-content-small">
                  <span className="info-label-small">VENUE</span>
                  <span className="info-value-small underline-hover">Jagannath University (Sitapura Campus), Jaipur</span>
                </div>
              </a>

              <div className="info-separator-vertical"></div>

              <div className="info-item">
                <div className="info-icon-small">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </div>
                <div className="info-content-small">
                  <span className="info-label-small">DATE</span>
                  <span className="info-value-small">1-2 MAY 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-fade-bottom -z-10"></div>
    </section>
  );
}
