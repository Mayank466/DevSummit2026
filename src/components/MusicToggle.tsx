"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userToggledOffRef = useRef(false);

  useEffect(() => {
    const audio = new Audio("/strangerthings_theme.mp3");
    audio.loop = true;
    audio.volume = 0.65;
    audioRef.current = audio;

    // Try autoplay immediately
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Browser blocked — start on first interaction anywhere ONCE
      const startOnce = () => {
        if (!userToggledOffRef.current && audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true));
        }
        // Remove after first trigger — never fires again
        document.removeEventListener("click", startOnce, true);
        document.removeEventListener("keydown", startOnce, true);
        document.removeEventListener("touchstart", startOnce, true);
      };
      document.addEventListener("click", startOnce, true);
      document.addEventListener("keydown", startOnce, true);
      document.addEventListener("touchstart", startOnce, true);
    });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      userToggledOffRef.current = true;
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      userToggledOffRef.current = false;
    }
  };

  return (
    <button id="music-toggle" onClick={toggleMusic} title={isPlaying ? "Mute" : "Play music"}>
      <div className="music-toggle-container">
        <img
          src={isPlaying ? "/s on.jpeg" : "/s off.jpeg"}
          alt="Music Toggle"
          className="music-toggle-icon"
        />
      </div>
    </button>
  );
}
