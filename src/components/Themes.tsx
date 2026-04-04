import { themes } from '@/constants/data';

const getIcon = (iconName: string) => {
  const stroke = "hsl(0, 100%, 45%)";
  const strokeWidth = "1.5";
  
  switch (iconName) {
    case 'web3':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      );
    case 'bio':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'ai':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M12 2a4 4 0 0 1 4 4c0 1.95-2 3-2 8h-4c0-5-2-6.05-2-8a4 4 0 0 1 4-4z" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
          <path d="M11 22h2" />
        </svg>
      );
    case 'open':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'iot':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'green':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Themes() {
  return (
    <section id="themes" className="section themes-section">
      <div className="section-container">
        <div className="section-header scroll-animate">
          <div className="title-block center">
            <h2 className="section-title">CHOOSE YOUR <span className="text-primary text-glow">WEAPON</span></h2>
            <div className="title-bar"></div>
          </div>
          <p className="section-subtitle">Six dimensions of technology. Pick a track and dominate the competition.</p>
        </div>
        <div className="themes-grid">
          {themes.map((theme, i) => (
            <div key={i} className="theme-card scroll-animate group" style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}>
              <div className={`theme-gradient ${theme.gradient}`}></div>
              <div className="theme-content">
                <div className="theme-icon-box">{getIcon(theme.iconName)}</div>
                <h3 className="theme-title">{theme.title}</h3>
                <p className="theme-desc">{theme.desc}</p>
              </div>
              <div className="scanlines"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
