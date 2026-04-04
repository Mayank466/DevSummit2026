import { footerContacts } from "@/constants/data";

export default function Footer() {
  const ContactItem = ({ name, phone }: { name: string; phone: string }) => (
    <div className="contact-item">
      <div className="contact-icon-wrapper">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
      <div className="contact-info">
        <p className="contact-name">{name}</p>
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-phone">{phone}</a>
      </div>
    </div>
  );

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
          <div className="footer-contact-grid">
            {/* Faculties Column */}
            <div className="footer-contact-col">
              <h5 className="footer-subtitle">Faculties</h5>
              <div className="footer-contact-list">
                {footerContacts.faculties.map((contact, i) => (
                  <ContactItem key={i} {...contact} />
                ))}
              </div>
            </div>

            {/* Title between columns */}
            <h4 className="footer-contact-title middle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-title-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              CONTACT US
            </h4>

            {/* Students Column */}
            <div className="footer-contact-col">
              <h5 className="footer-subtitle">Students</h5>
              <div className="footer-contact-list">
                {footerContacts.students.map((contact, i) => (
                  <ContactItem key={i} {...contact} />
                ))}
              </div>
            </div>
          </div>

          <div className="footer-links">
            <a href="https://x.com/Devsummit2026?s=20" className="social-link"><img src={`${import.meta.env.BASE_URL}x.png`} alt="X (Twitter)" className="footer-social-icon icon-x" loading="lazy" /></a>
            <a href="https://www.linkedin.com/company/devsummit-2026/" className="social-link"><img src={`${import.meta.env.BASE_URL}ln.png`} alt="LINKEDIN" className="footer-social-icon icon-linkedin" loading="lazy" /></a>
            <a href="https://www.instagram.com/devsummit2026/" className="social-link"><img src={`${import.meta.env.BASE_URL}ig.png`} alt="INSTAGRAM" className="footer-social-icon icon-instagram" loading="lazy" /></a>
            <a href="https://discord.gg/rmcpwX27MG" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="footer-social-icon icon-discord" style={{ width: '28px', height: '28px' }}>
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2026 DevSummit. All rights reserved.</p>
          <p>Made with ❤️ by DevSummit 2026 Team</p>
        </div>
      </div>
    </footer>
  );
}
