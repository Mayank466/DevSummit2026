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

const timelineData: TimelineDay[] = [
  {
    day: "Day 1",
    date: "1st May 2026",
    events: [
      { time: "08:30 - 10:00", title: "Registration Starts", description: "Global registration begins on the official platform", side: "left" },
      { time: "09:30 - 10:30", title: "Refreshments", side: "right" },
      { time: "10:00", title: "Inauguration", side: "left" },
      { time: "10:30", title: "Welcome Address", description: "By Program Chair", side: "right" },
      { time: "10:30 - 11:00", title: "Speech by Dignitaries", side: "left" },
      { time: "11:00 - 11:30", title: "Chief Guest Speech", side: "right" },
      { time: "12:00", title: "Hackathon Start", description: "Let the coding begin!", side: "left" },
      { time: "01:00 - 02:00", title: "Mentoring Session 1", side: "right" },
      { time: "02:00 - 03:00", title: "Lunch Break", side: "left" },
      { time: "03:00 - 04:00", title: "Session 1", side: "right" },
      { time: "04:00 - 05:00", title: "Mentoring Session 2", side: "left" },
      { time: "05:00 - 06:00", title: "Session 2", side: "right" },
      { time: "06:00 - 08:30", title: "First Assessment Round", side: "left" },
      { time: "08:30 - 10:00", title: "Dinner", side: "right" },
    ]
  },
  {
    day: "Night Activities",
    date: "1st - 2nd May",
    events: [
      { time: "09:30 - 11:00", title: "Cultural Activity", side: "left" },
      { time: "11:00 - 11:30", title: "Tea & Snacks", side: "right" },
    ]
  },
  {
    day: "Day 2",
    date: "2nd May 2026",
    events: [
      { time: "12:00 - 02:00", title: "Midnight Games", side: "left" },
      { time: "07:30 - 08:30", title: "Breakfast", side: "right" },
      { time: "09:00 - 11:30", title: "Second Round of Assessment", side: "left" },
      { time: "12:00 - 01:30", title: "Power Judging & Final Pitch", description: "Grand Finale", side: "right" },
    ]
  }
];

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
