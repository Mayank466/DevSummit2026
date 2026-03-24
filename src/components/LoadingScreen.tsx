import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { text: "INITIALIZING UPSIDE DOWN PROTOCOL...", delay: 100 },
  { text: "BYPASSING HAWKINS FIREWALL", delay: 550 },
  { text: "SIGNAL DETECTED — FREQ: 18.4 Hz", delay: 950 },
  { text: "SCANNING SECTOR: HAWKINS, INDIANA", delay: 1300 },
  { text: "ENCRYPTED CHANNEL: ESTABLISHED", delay: 1650 },
  { text: "PARTICIPANT COUNT: 2,048 // RISING", delay: 2000 },
  { text: "UPSIDE DOWN ACCESS: GRANTED", delay: 2400 },
  { text: "LAUNCHING DEVSUMMIT_2026.exe", delay: 2750 },
];

const GLITCH_CHARS = "01アイウエオカキクケコ#%@!&*█▓▒░";

function randomGlitch(length = 6) {
  return Array.from({ length }, () =>
    GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
  ).join("");
}

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(randomGlitch(8));
  const [exitStarted, setExitStarted] = useState(false);
  const [numbers, setNumbers] = useState(() =>
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 99))
  );
  const doneRef = useRef(false);

  useEffect(() => {
    // Glitch numbers cycling rapidly
    const glitchInterval = setInterval(() => {
      setGlitch(randomGlitch(8));
      setNumbers(Array.from({ length: 6 }, () => Math.floor(Math.random() * 99)));
    }, 80);

    // Reveal lines
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });

    // Progress counter
    let p = 0;
    const progressInterval = setInterval(() => {
      const increment = Math.floor(Math.random() * 6) + 2;
      p = Math.min(p + increment, 100);
      setProgress(p);
      if (p >= 100) clearInterval(progressInterval);
    }, 60);

    // Trigger exit
    const exitTimer = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        clearInterval(glitchInterval);
        setExitStarted(true);
        setTimeout(onComplete, 900);
      }
    }, 3500);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exitStarted && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-black flex flex-col justify-center px-8 md:px-24 overflow-hidden"
        >
          {/* Scan line overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
            }}
          />

          {/* Top status bar */}
          <div className="absolute top-6 left-8 right-8 flex justify-between text-primary/60 text-xs font-mono tracking-widest">
            <span>SYS_DIAG v2.026</span>
            <span className="animate-pulse">● REC</span>
            <span>LAT: 70.9381 N // LON: 74.2522 E</span>
          </div>

          {/* Cycling numbers grid (top-right ambient) */}
          <div className="absolute top-14 right-8 grid grid-cols-3 gap-x-4 gap-y-1 text-primary/30 text-xs font-mono">
            {numbers.map((n, i) => (
              <span key={i}>{String(n).padStart(2, "0")}</span>
            ))}
          </div>

          {/* Main terminal block */}
          <div className="relative z-20 max-w-2xl w-full space-y-1">
            {/* Glitch header */}
            <div className="text-primary/40 text-xs font-mono tracking-widest mb-6 flex gap-4">
              <span>{glitch}</span>
              <span className="text-primary/20">//</span>
              <span className="text-primary/40">INIT_SEQ_99</span>
            </div>

            {/* Boot lines */}
            {BOOT_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  visibleLines.includes(i)
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 font-mono text-sm md:text-base"
              >
                <span className="text-primary/50">&gt;&gt;</span>
                <span
                  className={
                    i === BOOT_LINES.length - 1
                      ? "text-primary font-bold tracking-widest"
                      : "text-white/70"
                  }
                >
                  {line.text}
                </span>
                {visibleLines.includes(i) && i === visibleLines.length - 1 && (
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
                )}
              </motion.div>
            ))}

            {/* Progress bar */}
            <div className="pt-6 space-y-2">
              <div className="flex justify-between text-xs font-mono text-primary/60">
                <span>SIGNAL STRENGTH</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-[3px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
                {/* Shimmer */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    animation: "shimmer 1.2s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom corner watermarks */}
          <div className="absolute bottom-6 left-8 text-primary/30 text-xs font-mono tracking-widest">
            SECURE_GRID_99 // UPSIDE_DOWN_ACCESS
          </div>
          <div className="absolute bottom-6 right-8 text-primary/30 text-xs font-mono">
            {String(progress).padStart(3, "0")}% COMPLETE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
