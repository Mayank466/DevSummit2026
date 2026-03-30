import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { text: "INITIALIZING UPSIDE DOWN PROTOCOL...", delay: 60 },
  { text: "BYPASSING HAWKINS FIREWALL", delay: 280 },
  { text: "SIGNAL DETECTED — FREQ: 18.4 Hz", delay: 480 },
  { text: "SCANNING SECTOR: JAIPUR, RAJASTHAN", delay: 680 },
  { text: "ENCRYPTED CHANNEL: ESTABLISHED", delay: 880 },
  { text: "PARTICIPANT COUNT: 2,048 // RISING", delay: 1080 },
  { text: "UPSIDE DOWN ACCESS: GRANTED", delay: 1300 },
  { text: "LAUNCHING DEVSUMMIT_2026.exe", delay: 1500 },
];

const GLITCH_CHARS = "01アイウエオカキクケコ#%@!&*█▓▒░";

function randomGlitch(length = 6) {
  return Array.from({ length }, () =>
    GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
  ).join("");
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
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
      p = Math.min(p + 1, 100);
      setProgress(p);
      if (p >= 100) clearInterval(progressInterval);
    }, 20);

    // Trigger exit
    const exitTimer = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        clearInterval(glitchInterval);
        setExitStarted(true);
        // Sync with exit animation duration
        setTimeout(onComplete, 800);
      }
    }, 2500);

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
          initial={{ opacity: 1, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="fixed inset-3 sm:inset-6 md:inset-12 lg:inset-16 z-[200] bg-black/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex flex-col justify-between px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-6 sm:py-10 md:py-14 overflow-hidden"
        >
          {/* Scan line overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
            }}
          />

          {/* Top section */}
          <div className="relative z-20 flex flex-row justify-between items-start text-primary/60 text-[10px] sm:text-xs font-mono tracking-widest w-full">
            <div className="flex flex-col gap-1 w-1/3">
              <span>SYS_DIAG v2.026</span>
              <span className="animate-pulse md:hidden mt-1 inline-block">● REC</span>
            </div>

            <div className="hidden md:flex text-center mt-0 justify-center w-1/3">
              <span className="animate-pulse">● REC</span>
            </div>

            <div className="flex flex-col items-end gap-2 w-1/3">
              <span className="text-right">LAT: 70.9381 N<br className="sm:hidden" /> // LON: 74.2522 E</span>
              {/* Cycling numbers grid */}
              <div className="grid grid-cols-3 gap-x-3 gap-y-1 text-primary/30 text-[10px] sm:text-xs font-mono">
                {numbers.map((n, i) => (
                  <span key={i} className="text-right">{String(n).padStart(2, "0")}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Main terminal block */}
          <div className="relative z-20 w-full max-w-2xl space-y-1 my-auto bg-black/40 p-4 sm:p-8 rounded-lg backdrop-blur-sm border border-primary/10 mx-auto">
            {/* Glitch header */}
            <div className="text-primary/40 text-[10px] sm:text-xs font-mono tracking-widest mb-4 sm:mb-6 flex gap-2 sm:gap-4 items-center">
              <span className="inline-block min-w-[70px] sm:min-w-[90px]">{glitch}</span>
              <span className="text-primary/20">//</span>
              <span className="text-primary/40">INIT_SEQ_99</span>
            </div>

            {/* Boot lines */}
            <div className="space-y-1 sm:space-y-2">
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
                  className="flex items-start sm:items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-sm md:text-base"
                >
                  <span className="text-primary/50 shrink-0">&gt;&gt;</span>
                  <span
                    className={`leading-relaxed ${i === BOOT_LINES.length - 1
                        ? "text-primary font-bold tracking-widest"
                        : "text-white/70"
                      }`}
                  >
                    {line.text}
                  </span>
                  {visibleLines.includes(i) && i === visibleLines.length - 1 && (
                    <span className="inline-block w-2 h-3 sm:h-4 bg-primary animate-pulse ml-1 shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="pt-6 sm:pt-8 space-y-2 sm:space-y-3">
              <div className="flex justify-between text-[10px] sm:text-xs font-mono text-primary/60">
                <span>SIGNAL STRENGTH</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-[2px] sm:h-[3px] bg-white/10 relative overflow-hidden rounded-full">
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
                    animation: "shimmer 1.8s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0 text-primary/30 text-[10px] sm:text-xs font-mono tracking-widest w-full mt-auto">
            <div>
              SECURE_GRID_99 <br className="sm:hidden" />
              <span className="hidden sm:inline"> // </span>
              UPSIDE_DOWN_ACCESS
            </div>
            <div className="text-left sm:text-right text-primary/50 font-bold min-w-[120px]">
              {String(progress).padStart(3, "0")}% COMPLETE
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
