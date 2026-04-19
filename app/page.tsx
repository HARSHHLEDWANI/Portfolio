'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ZoneName } from '@/lib/cameraPositions';
import BootSplash from '@/components/ui/BootSplash';
import NavBar from '@/components/ui/NavBar';
import HeroOverlay from '@/components/ui/HeroOverlay';
import ZonePanel from '@/components/ui/ZonePanel';
import StatsBar from '@/components/ui/StatsBar';
import ProjectsSection from '@/components/ui/ProjectsSection';
import SkillsSection from '@/components/ui/SkillsSection';
import AboutSection from '@/components/ui/AboutSection';
import ContactSection from '@/components/ui/ContactSection';
import FloatingTerminal from '@/components/ui/FloatingTerminal';

const CourtScene = dynamic(
  () => import('@/components/three/CourtScene'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        width: '100%', height: '100vh', background: '#080B14',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ color: '#00FF88', fontFamily: 'monospace', fontSize: 14 }}>
          Initialising court...
        </span>
      </div>
    ),
  }
);

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [activeZone, setActiveZone] = useState<ZoneName | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const handleZoneClick = (zone: ZoneName) => {
    setActiveZone(zone);
    setPanelOpen(true);
    const sectionMap: Partial<Record<ZoneName, string>> = {
      PROJECTS: '#projects',
      SKILLS:   '#skills',
      ABOUT:    '#about',
      CONTACT:  '#contact',
    };
    setTimeout(() => {
      const id = sectionMap[zone];
      if (id) document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 2200);
  };

  const handlePanelClose = () => {
    setPanelOpen(false);
    setActiveZone(null);
  };

  return (
    <main>
      <BootSplash onComplete={() => setBooted(true)} />

      {booted && (
        <>
          <NavBar />

          {/* 3D Hero — full viewport height */}
          <section style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <CourtScene onZoneClick={handleZoneClick} />
            <HeroOverlay />
            <ZonePanel
              zone={activeZone}
              open={panelOpen}
              onClose={handlePanelClose}
            />
          </section>

          <StatsBar />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />

          <FloatingTerminal />
        </>
      )}
    </main>
  );
}
