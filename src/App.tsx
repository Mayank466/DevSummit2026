"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Countdown from "@/components/Countdown";
import Themes from "@/components/Themes";
import People from "@/components/People";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BatSwarm } from "@/components/BatSwarm";
import MusicToggle from "@/components/MusicToggle";

const mentors = [
  { id: 'm1', name: 'Alex Chen', role: 'AI Research Lead', company: 'Google AI' },
  { id: 'm2', name: 'Sarah Voss', role: 'Senior Engineer', company: 'OpenAI' },
  { id: 'm3', name: 'Dev Kumar', role: 'Staff Developer', company: 'Meta' },
  { id: 'm4', name: 'Aria Patel', role: 'Cloud Architect', company: 'Microsoft' },
  { id: 'm5', name: 'Jason Lee', role: 'Principal Engineer', company: 'AWS' },
  { id: 'm6', name: 'Nina Torres', role: 'Systems Architect', company: 'Tesla' },
];

const party = [
  { id: 't1', name: 'Marcus', role: 'Lead Organizer' },
  { id: 't2', name: 'Eleven', role: 'Hacker Experience' },
  { id: 't3', name: 'Dustin', role: 'Tech Logistics' },
  { id: 't4', name: 'Lucas', role: 'Sponsorships' },
  { id: 't5', name: 'Will', role: 'Design Lead' },
  { id: 't6', name: 'Max', role: 'Operations' },
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
          <People id="mentors" title="The Masters" subtitle="Gurus who have survived the void" people={mentors} titleGlowClass="primary-glow" />
          <People id="members" title="The Party" subtitle="The architects behind the madness" people={party} titleGlowClass="white-glow" />
          <Sponsors />
          <FAQ />
        </main>

        <Footer />
      </div>
      <MusicToggle />
    </>
  );
}
