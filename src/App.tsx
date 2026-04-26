
import { useState, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import BatSwarm from "@/components/BatSwarm";
import MusicToggle from "@/components/MusicToggle";



// Lazy load components below the fold
const About = lazy(() => import("@/components/About"));
const Countdown = lazy(() => import("@/components/Countdown"));
const Themes = lazy(() => import("@/components/Themes"));
const Timeline = lazy(() => import("@/components/Timeline"));
const Prizes = lazy(() => import("@/components/Prizes"));
const People = lazy(() => import("@/components/People"));
const Sponsors = lazy(() => import("@/components/Sponsors"));
const Faculty = lazy(() => import("@/components/Faculty"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));
const ScrollObserver = lazy(() => import("@/components/ScrollObserver"));
const Merch = lazy(() => import("@/components/Merch"));

import { mentors, judges, party, programChair, conveyners } from "@/constants/data";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBats, setShowBats] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowBats(true);
    setTimeout(() => {
      setShowBats(false);
    }, 12000);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className={`site-content ${!isLoading ? "loaded" : ""}`}>
        {/* Upside Down Particles Background */}
        <div className="upside-down-particles"></div>
        <BatSwarm active={showBats} />

        <Suspense fallback={null}>
          <ScrollObserver />

          <Navbar />


          <main>
            <Hero />
            <About />
            <Countdown />
            <Themes />
            <Merch />
            <Timeline />
            <Prizes />
            <Sponsors />
            <Faculty programChair={programChair} conveyners={conveyners} />
            <People id="mentors" title="The Masters" subtitle="Gurus who have survived the void" people={mentors} titleGlowClass="primary-glow" />
            <People id="judges" title="The Jury" subtitle="The ones who decide your fate" people={judges} titleGlowClass="primary-glow" />
            <People id="members" title="The Party" subtitle="The architects behind the madness" people={party} titleGlowClass="white-glow" />
            <FAQ />
          </main>

          <Footer />
        </Suspense>
      </div>
      <MusicToggle />
    </>
  );
}
