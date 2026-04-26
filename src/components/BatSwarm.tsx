
import React, { useEffect, useState } from "react";

interface BatProps {
  id: number;
  startX: number;
  delay: number;
  duration: number;
  size: number;
}

function Bat({ startX, delay, duration, size }: BatProps) {
  const tx = (Math.random() - 0.5) * 400; // random horizontal drift
  const tr = (Math.random() - 0.5) * 90;  // random rotation
  return (
    <div
      className="demobat"
      style={{
        left: `${startX}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size * 0.6}px`,
        "--tx": `${tx}px`,
        "--tr": `${tr}deg`,
      } as React.CSSProperties}
    >
      <svg viewBox="0 0 100 60" fill="currentColor">
        <path d="M50 20 C60 10, 80 10, 95 30 C85 25, 75 35, 70 45 C65 35, 55 35, 50 40 C45 35, 35 35, 30 45 C25 35, 15 25, 5 30 C20 10, 40 10, 50 20 Z" />
        <path className="wing-flap-l" d="M30 45 C20 50, 10 45, 5 30 C15 25, 25 35, 30 45 Z" opacity="0.8" />
        <path className="wing-flap-r" d="M70 45 C80 50, 90 45, 95 30 C85 25, 75 35, 70 45 Z" opacity="0.8" />
      </svg>
    </div>
  );
}

export default function BatSwarm({ active }: { active: boolean }) {
  const [bats, setBats] = useState<BatProps[]>([]);

  useEffect(() => {
    if (active) {
      const newBats = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        startX: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 2 + Math.random() * 3,
        size: 15 + Math.random() * 40,
      }));
      setBats(newBats);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="demobat-swarm-overlay">
      {bats.map((bat) => (
        <Bat key={bat.id} {...bat} />
      ))}
    </div>
  );
}
