export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-gradient-top"></div>
        <div className="hero-gradient-sides"></div>
      </div>
      <div className="hero-content">
        <div className="hero-title-block animate-on-load relative">
          {/* Text Spotlight to detach from background */}
          <div className="absolute inset-x-[-20%] inset-y-[-50%] bg-[radial-gradient(circle,rgba(255,0,0,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl z-0"></div>
          
          <div className="hero-titles relative z-10 stranger-title-wrap">
            <h1 className="hero-title text-3d-lamp glitch-text" data-text="<DEVSUMMIT/>">&lt;DEVSUMMIT/&gt;</h1>
            <div className="stranger-year-wrap">
              <div className="stranger-bar side"></div>
              <p className="hero-year text-3d-lamp glitch-text" data-text="2026">2026</p>
              <div className="stranger-bar side"></div>
            </div>
          </div>
          <div className="hero-tagline relative z-10">
            <div className="tagline-line"></div>
            <p className="tagline-text">HACK UPSIDE DOWN</p>
            <div className="tagline-line"></div>
          </div>
        </div>
        <div className="hero-cta animate-on-load delay-1">
          <button className="hero-register-btn group">
            <div className="btn-fill"></div>
            <span className="btn-text">REGISTER NOW</span>
          </button>
        </div>
      </div>
      <div className="hero-fade-bottom"></div>
    </section>
  );
}
