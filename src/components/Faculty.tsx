import React from 'react';

export interface Organizer {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

interface FacultyProps {
  programChair: Organizer;
  conveyners: Organizer[];
}

export default function Faculty({ programChair, conveyners }: FacultyProps) {
  return (
    <section id="faculty" className="section faculty-section">
      <div className="section-container">

        <div className="section-header scroll-animate">
          <div className="title-block center">
            <h2 className="section-title">THE ORGANIZER'S</h2>
            <div className="title-bar"></div>
          </div>
        </div>

        <div className="faculty-layout scroll-animate" style={{ "--delay": "0.15s" } as React.CSSProperties}>

          {/* Left Column: Program Chair */}
          <div className="faculty-col-left">
            <h3 className="faculty-sublabel">PROGRAM CHAIR</h3>
            <div className="faculty-chair-card">
              <div className="faculty-avatar-wrap-lg">
                <div className="faculty-avatar-lg">
                  {programChair.imageUrl ? (
                    <img src={programChair.imageUrl} alt={programChair.name} />
                  ) : (
                    <div className="avatar-inner"><span className="avatar-placeholder">image</span></div>
                  )}
                </div>
                <div className="avatar-glow"></div>
              </div>

              <div className="faculty-chair-info">
                <h4 className="faculty-name">{programChair.name}</h4>
                <p className="faculty-desc">{programChair.description}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Conveyners Grid */}
          <div className="faculty-col-right">
            <h3 className="faculty-sublabel">CONVENERS</h3>
            <div className="faculty-conveyners-grid">
              {conveyners.map((person) => (
                <div key={person.id} className="faculty-conveyner-card">
                  <div className="faculty-avatar-wrap-sm">
                    <div className="faculty-avatar-sm">
                      {person.imageUrl ? (
                        <img src={person.imageUrl} alt={person.name} />
                      ) : (
                        <div className="avatar-inner"><span className="avatar-placeholder">image</span></div>
                      )}
                    </div>
                  </div>
                  <div className="faculty-conveyner-info">
                    <h4 className="faculty-name">{person.name}</h4>
                    <p className="faculty-desc">{person.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
