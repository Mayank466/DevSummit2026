export interface Person {
  id: string;
  name: string;
  role: string;
  company?: string;
}

interface PeopleProps {
  id: string;
  title: string;
  subtitle: string;
  people: Person[];
  titleGlowClass?: string;
}

export default function People({ id, title, subtitle, people, titleGlowClass = "primary-glow" }: PeopleProps) {
  return (
    <section id={id} className="section people-section">
      <div className="section-container">
        <div className="people-header scroll-animate">
          <h2 className="section-title people-title">{title}</h2>
          <div className={`title-bar ${titleGlowClass}`}></div>
          <p className="people-subtitle">{subtitle}</p>
        </div>
        <div className="people-grid">
          {people.map((p, i) => (
            <div key={p.id} className="person-card scroll-animate" style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}>
              <div className="person-avatar-wrap">
                <div className="person-avatar">
                  <div className="avatar-inner"><span className="avatar-placeholder">?</span></div>
                  <div className="avatar-scanline"></div>
                </div>
                <div className="avatar-glow"></div>
              </div>
              <h3 className="person-name">{p.name}</h3>
              <p className="person-role">{p.role}</p>
              {p.company && <p className="person-company">@ {p.company}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
