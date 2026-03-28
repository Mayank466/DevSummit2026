"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Countdown from "@/components/Countdown";
import Themes from "@/components/Themes";
import Prizes from "@/components/Prizes";
import People from "@/components/People";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import LoadingScreen from "@/components/LoadingScreen";
import BatSwarm from "@/components/BatSwarm";
import MusicToggle from "@/components/MusicToggle";

const mentors = [
  { id: 'm1', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon' },
  { id: 'm2', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon' },
  { id: 'm3', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon' },
  { id: 'm4', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon' },
  { id: 'm5', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon' },
  { id: 'm6', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon' },
];

const party = [
  { id: 't1', name: 'Coming Soon', role: 'Coming Soon' },
  { id: 't2', name: 'Coming Soon', role: 'Coming Soon' },
  { id: 't3', name: 'Coming Soon', role: 'Coming Soon' },
  { id: 't4', name: 'Coming Soon', role: 'Coming Soon' },
  { id: 't5', name: 'Coming Soon', role: 'Coming Soon' },
  { id: 't6', name: 'Coming Soon', role: 'Coming Soon' },
];

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

        <ScrollObserver />

        <Navbar />

        <main>
          <Hero />
          <About />
          <Countdown />
          <Themes />
          <Prizes />
          <Sponsors />
          <People id="mentors" title="The Masters" subtitle="Gurus who have survived the void" people={mentors} titleGlowClass="primary-glow" />
          <People id="members" title="The Party" subtitle="The architects behind the madness" people={party} titleGlowClass="white-glow" />
          <FAQ />
        </main>

        <Footer />
      </div>
      <MusicToggle />
    </>
  );
}
