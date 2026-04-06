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
          <div className="footer-left-col">
            <div className="footer-brand">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(0, 100%, 45%)" strokeWidth="1.5">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
              <span className="footer-logo">DEVSUMMIT <span className="text-primary">2026</span></span>
            </div>
            <div className="footer-copyright">
              <p>© 2026 DevSummit. All rights reserved.</p>
              <p>Made with ❤️ by DevSummit 2026 Team</p>
            </div>
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

          <div className="footer-quick-links">
            <h5 className="footer-subtitle">Quick Links</h5>
            <div className="quick-links-list">
              <a href={`${import.meta.env.BASE_URL}brochure.pdf`} target="_blank" rel="noopener noreferrer" className="quick-link">Brochure</a>
              <a href={`${import.meta.env.BASE_URL}poster.pdf`} target="_blank" rel="noopener noreferrer" className="quick-link">Poster</a>
            </div>
          </div>

          <div className="footer-links">
            <a href="https://x.com/Devsummit2026?s=20" className="social-link"><img src={`${import.meta.env.BASE_URL}x.png`} alt="X (Twitter)" className="footer-social-icon icon-x" loading="lazy" /></a>
            <a href="https://www.linkedin.com/company/devsummit-2026/" className="social-link"><img src={`${import.meta.env.BASE_URL}ln.png`} alt="LINKEDIN" className="footer-social-icon icon-linkedin" loading="lazy" /></a>
            <a href="https://www.instagram.com/devsummit2026/" className="social-link"><img src={`${import.meta.env.BASE_URL}ig.png`} alt="INSTAGRAM" className="footer-social-icon icon-instagram" loading="lazy" /></a>
            <a href="https://discord.gg/rmcpwX27MG" className="social-link"><img src={`${import.meta.env.BASE_URL}ds.png`} alt="DISCORD" className="footer-social-icon icon-discord" loading="lazy" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
