"use client";

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

const mentors = [
  { id: 'm1', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'm2', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'm3', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'm4', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'm5', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'm6', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
];

const judges = [
  { id: 'j1', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'j2', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'j3', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'j4', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'j5', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
  { id: 'j6', name: 'Coming Soon', role: 'Coming Soon', company: 'Coming Soon', imageUrl: '' },
];

const party = [
  { id: 't1', name: 'Yogesh Khandelwal', role: 'Lead', imageUrl: '' },
  { id: 't2', name: 'Dev Sharan', role: 'Co-Lead', imageUrl: '' },
  { id: 't3', name: 'Mayank Biswas', role: 'Technical Head', imageUrl: '' },
  { id: 't4', name: 'Anup', role: 'Technical Head', imageUrl: '' },
  { id: 't5', name: 'Jaydeep', role: 'Treasurer', imageUrl: '' },
  { id: 't6', name: 'Abhinay Yadav', role: 'Operation Head', imageUrl: '' },
  { id: 't7', name: 'Rehan Kumar Singh', role: 'Logistics Head', imageUrl: '' },
  { id: 't8', name: 'Mihir', role: 'Social Media Head', imageUrl: '' },
  { id: 't9', name: 'Ayush', role: 'Social Media Head', imageUrl: '' },
  { id: 't10', name: 'Priyanshu Kumar', role: 'Marketing & Outreach', imageUrl: '' },
  { id: 't11', name: 'Ashish', role: 'Marketing & Outreach', imageUrl: '' },
  { id: 't12', name: 'Milan Singh', role: 'Marketing & Outreach', imageUrl: '' },
  { id: 't13', name: 'Deepika Kumari', role: 'Decoration Head', imageUrl: '' },
];
const programChair = {
  id: 'pc1',
  name: "Prof. Dr. Om Prakash Sharma",
  description: "PVC, Jagan Nath University, Jaipur\n" + "Dean, Faculty of Engineering and Technology",
  imageUrl: ""
};

const conveyners = [
  { id: 'c1', name: "Dr. Renu Bagoria", description: "Assistant Professor", imageUrl: "" },
  { id: 'c2', name: "Dr. Rahul Misra", description: "Assistant Professor", imageUrl: "" },
  { id: 'c3', name: "Dr. Rishi Kumar Sharma", description: "Assistant Professor", imageUrl: "" },
  { id: 'c4', name: "Mr. Raghu Nandan Singh Hada", description: "Assistant Professor", imageUrl: "" },
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

        <Suspense fallback={null}>
          <ScrollObserver />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Countdown />
            <Themes />
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
