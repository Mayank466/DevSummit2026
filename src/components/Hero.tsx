export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden isolate">
      {/* 1. Underlying gradients (must be behind the image explicitly) */}
      <div className="hero-bg" style={{ zIndex: -1 }}>
        <div className="hero-gradient-top"></div>
        <div className="hero-gradient-sides"></div>
      </div>
      {/* 2. The background image itself with smooth edge blending */}
      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex: 0,
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        opacity: 0.45,
        transform: 'scale(1.05)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 55%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskComposite: 'destination-in',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 55%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskComposite: 'intersect',
      }}></div>

      <div className="hero-content" style={{ zIndex: 10 }}>
        <div className="hero-title-block animate-on-load relative">
          {/* Text Spotlight to detach from background */}
          <div className="absolute inset-x-[-20%] inset-y-[-50%] bg-[radial-gradient(circle,rgba(255,0,0,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl z-0"></div>

          <div className="hero-titles relative z-10 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="DEVSUMMIT 2026"
              className="hero-logo animate-on-load"
            />
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
      <div className="hero-fade-bottom" style={{ zIndex: -1 }}></div>
    </section>
  );
}
