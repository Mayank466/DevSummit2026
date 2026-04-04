"use client";

import React from 'react';

interface TimelineEvent {
  time: string;
  title: string;
  description?: string;
  side: 'left' | 'right';
}

interface TimelineDay {
  day: string;
  date: string;
  events: TimelineEvent[];
}

import { timelineData } from '@/constants/data';

export default function Timeline() {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="section-container">
        <div className="section-header scroll-animate">
          <div className="title-block center">
            <h2 className="section-title">HACKATHON <span className="text-primary text-glow">TIMELINE</span></h2>
            <div className="title-bar center"></div>
          </div>
          <p className="section-subtitle">The journey from the void to digital supremacy. Mark your calendar for the ultimate challenge.</p>
        </div>

        <div className="timeline-container">
          {timelineData.map((dayGroup, groupIdx) => (
            <div key={groupIdx} className={`timeline-day-group timeline-day-group--${groupIdx}`}>
              {/* Vertical line segment for this day */}
              <div className="timeline-rift"></div>

              <div className="timeline-day-header scroll-animate">
                <h3 className="timeline-day-title">{dayGroup.day}</h3>
                <span className="timeline-day-date">{dayGroup.date}</span>
                <div className="timeline-day-node"></div>
              </div>

              <div className="timeline-events">
                {dayGroup.events.map((event, eventIdx) => (
                  <div
                    key={eventIdx}
                    className={`timeline-item ${event.side} scroll-animate`}
                    style={{ "--delay": `${eventIdx * 0.1}s` } as React.CSSProperties}
                  >
                    <div className="timeline-node"></div>
                    <div className="timeline-connector"></div>
                    <div className="timeline-content">
                      <div className="timeline-time">{event.time}</div>
                      <h4 className="timeline-event-title">{event.title}</h4>
                      {event.description && <p className="timeline-event-desc">{event.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
