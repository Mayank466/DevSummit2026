export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow-line"></div>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 100%, 45%)" strokeWidth="1.5">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
            <span className="footer-logo">DEVSUMMIT <span className="text-primary">2026</span></span>
          </div>
          <div className="footer-quick-links">
            <h4 className="footer-quick-title">QUICK LINKS</h4>
            <ul className="footer-quick-list">
              <li><a href="#">Register</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#themes">Themes</a></li>
              <li><a href="#mentors">Mentors</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <a href="#"><img src="/x.png" alt="X (Twitter)" style={{ width: '35px', height: '35px', filter: 'invert(1)' }} /></a>
            <a href="#"><img src="/ln.png" alt="LINKEDIN" style={{ width: '35px', height: '35px', filter: 'invert(1)' }} /></a>
            <a href="https://www.instagram.com/devsummit2026/"><img src="/ig.png" alt="INSTAGRAM" style={{ width: '40px', height: '35px', filter: 'invert(1)' }} /></a>
            <a href="https://discord.gg/rmcpwX27MG"><img src="/ds.png" alt="DISCORD" style={{ width: '45px', height: '35px', filter: 'invert(1)' }} /></a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2026 DevSummit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
