'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import BootSplash from '../components/BootSplash';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ProjectsSection from '../components/ProjectsSection';
import ScrollProgressBar from '../components/ScrollProgressBar';
import FloatingTerminal from '../components/FloatingTerminal';

// Lazy-load heavier sections
const SkillsSection = dynamic(() => import('../components/SkillsSection'), { ssr: false });
const AboutSection = dynamic(() => import('../components/AboutSection'), { ssr: false });
const ContactSection = dynamic(() => import('../components/ContactSection'), { ssr: false });

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('harsh-sys-booted');
    if (!seen) {
      setShowBoot(true);
    } else {
      setBooted(true);
    }
  }, []);

  const handleBootDone = () => {
    sessionStorage.setItem('harsh-sys-booted', '1');
    setShowBoot(false);
    setBooted(true);
  };

  return (
    <>
      {showBoot && <BootSplash onDone={handleBootDone} />}

      {booted && (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
          <ScrollProgressBar />
          <NavBar />
          <main>
            <HeroSection />
            <StatsBar />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
          </main>
          <FloatingTerminal />
        </div>
      )}
    </>
  );
}
