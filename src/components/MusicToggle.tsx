
import { useState, useRef, useEffect } from "react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userToggledOffRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}strangerthings_theme.mp3`);
    audio.loop = true;
    audio.volume = 0.65;
    audioRef.current = audio;

    const handleInteraction = () => {
      if (!userToggledOffRef.current && audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      removeInteractionListeners();
    };

    const addInteractionListeners = () => {
      document.addEventListener("click", handleInteraction, true);
      document.addEventListener("keydown", handleInteraction, true);
      document.addEventListener("touchstart", handleInteraction, true);
    };

    const removeInteractionListeners = () => {
      document.removeEventListener("click", handleInteraction, true);
      document.removeEventListener("keydown", handleInteraction, true);
      document.removeEventListener("touchstart", handleInteraction, true);
    };

    const tryPlay = () => {
      if (document.visibilityState !== "visible" || userToggledOffRef.current) return;
      
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Browser blocked — wait for interaction
        removeInteractionListeners();
        addInteractionListeners();
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        audio.pause();
        setIsPlaying(false);
      } else {
        tryPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial play attempt
    tryPlay();

    return () => {
      removeInteractionListeners();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
          src={isPlaying ? `${import.meta.env.BASE_URL}s-on.webp` : `${import.meta.env.BASE_URL}s-off.webp`}
          alt="Music Toggle"
          className="music-toggle-icon"
        />
      </div>
    </button>
  );
}
