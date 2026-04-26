export interface Person {
  id: string;
  name: string;
  role: string;
  company?: string;
  imageUrl?: string;
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
          <div className="title-block">
            <h2 className="section-title people-title">{title}</h2>
            <div className={`title-bar ${titleGlowClass}`}></div>
          </div>
          <p className="people-subtitle">{subtitle}</p>
        </div>
        <div className="people-marquee-wrapper scroll-animate">
          <div className="people-marquee-track">
            {/* Original Set */}
            <div className="people-marquee-content">
              {people.map((p, i) => {
                const isComingSoon = p.name === 'Coming Soon';
                return (
                <div key={p.id} className="person-card">
                  <div className="person-avatar-wrap">
                    <div className="person-avatar">
                      {p.imageUrl ? (
                        <img src={p.imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${p.imageUrl.slice(1)}` : p.imageUrl} alt={p.name} className="avatar-img" loading="lazy" width="128" height="128" />
                      ) : (
                        <div className="avatar-inner"><span className="avatar-placeholder">{isComingSoon ? 'Coming Soon' : '?'}</span></div>
                      )}
                      <div className="avatar-scanline"></div>
                    </div>
                    <div className="avatar-glow"></div>
                  </div>
                  {!isComingSoon && (
                    <>
                      <h3 className="person-name">{p.name}</h3>
                      <p className="person-role">{p.role}</p>
                      {p.company && <p className="person-company">@ {p.company}</p>}
                    </>
                  )}
                </div>
                );
              })}
            </div>
            {/* Cloned Set for Infinite Marquee */}
            <div className="people-marquee-content" aria-hidden="true">
              {people.map((p, i) => {
                const isComingSoon = p.name === 'Coming Soon';
                return (
                <div key={`${p.id}-clone`} className="person-card" aria-hidden="true">
                  <div className="person-avatar-wrap">
                    <div className="person-avatar">
                      {p.imageUrl ? (
                        <img src={p.imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${p.imageUrl.slice(1)}` : p.imageUrl} alt={p.name} className="avatar-img" loading="lazy" width="128" height="128" />
                      ) : (
                        <div className="avatar-inner"><span className="avatar-placeholder">{isComingSoon ? 'Coming Soon' : '?'}</span></div>
                      )}
                      <div className="avatar-scanline"></div>
                    </div>
                    <div className="avatar-glow"></div>
                  </div>
                  {!isComingSoon && (
                    <>
                      <h3 className="person-name">{p.name}</h3>
                      <p className="person-role">{p.role}</p>
                      {p.company && <p className="person-company">@ {p.company}</p>}
                    </>
                  )}
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
