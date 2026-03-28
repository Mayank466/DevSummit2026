export default function About() {
  return (
    <section id="about" className="section about-section relative overflow-hidden isolate" style={{ background: 'transparent' }}>
      <div className="glow-bg glow-left" style={{ zIndex: -1 }}></div>
      <div className="section-container relative" style={{ zIndex: 10 }}>
        <div className="about-grid">
          <div className="about-text scroll-animate">
            <h2 className="section-title">THE <span className="text-primary text-glow">INITIATION</span></h2>
            <div className="title-bar"></div>
            <div className="about-paragraphs">
              <p>A 48-hour hackathon where the most daring coders enter the Upside Down to build the future. Reality as you know it is just a suggestion.</p>
              <p>Form your party, gather your supplies, and prepare to face complex challenges across AI, Web3, and beyond. The demogorgons of spaghetti code await. Will you survive the night?</p>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card scroll-animate" style={{ "--delay": "0s" } as React.CSSProperties}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 100%, 45%)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <span className="stat-value">400+</span>
              <span className="stat-label">Hackers</span>
            </div>
            <div className="stat-card scroll-animate" style={{ "--delay": "0.1s" } as React.CSSProperties}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 100%, 45%)" strokeWidth="1.5"><path d="M6 3h12l4 6-10 13L2 9z" /></svg>
              <span className="stat-value">₹5,00,000</span>
              <span className="stat-label">Prize Pool</span>
            </div>
            <div className="stat-card scroll-animate" style={{ "--delay": "0.2s" } as React.CSSProperties}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 100%, 45%)" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <span className="stat-value">24</span>
              <span className="stat-label">Hours</span>
            </div>
            <div className="stat-card scroll-animate" style={{ "--delay": "0.3s" } as React.CSSProperties}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 100%, 45%)" strokeWidth="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
              <span className="stat-value">20+</span>
              <span className="stat-label">Mentors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
