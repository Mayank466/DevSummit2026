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
          <div className="sponsor-tier scroll-animate">
            <div className="tier-header">
              <h3 className="tier-label"><span className="tier-label-text">TITLE SPONSORS</span><div className="tier-line"></div></h3>
            </div>
            <div className="sponsor-logos">
              <div className="sponsor-logo sponsor-lg"><span>HAWKINS LABS</span></div>
            </div>
          </div>
          <div className="sponsor-tier scroll-animate" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            <div className="tier-header">
              <h3 className="tier-label"><span className="tier-label-text">GOLD SPONSORS</span><div className="tier-line"></div></h3>
            </div>
            <div className="sponsor-logos">
              <div className="sponsor-logo sponsor-md"><span>SCOOPS AHOY</span></div>
              <div className="sponsor-logo sponsor-md"><span>FAMILY VIDEO</span></div>
              <div className="sponsor-logo sponsor-md"><span>SURFER BOY PIZZA</span></div>
            </div>
          </div>
          <div className="sponsor-tier scroll-animate" style={{ "--delay": "0.4s" } as React.CSSProperties}>
            <div className="tier-header">
              <h3 className="tier-label"><span className="tier-label-text">COMMUNITY PARTNERS</span><div className="tier-line"></div></h3>
            </div>
            <div className="sponsor-logos">
              <div className="sponsor-logo sponsor-sm"><span>MELVALD'S</span></div>
              <div className="sponsor-logo sponsor-sm"><span>BRADLEY'S</span></div>
              <div className="sponsor-logo sponsor-sm"><span>PALACE ARCADE</span></div>
              <div className="sponsor-logo sponsor-sm"><span>ENZO'S</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
