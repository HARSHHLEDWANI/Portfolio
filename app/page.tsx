'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
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
import SectionDivider from '@/components/ui/SectionDivider';

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
  const lastZoneClickTime = useRef(0);

  const handleZoneClick = (zone: ZoneName) => {
    lastZoneClickTime.current = Date.now();
    setActiveZone(zone);
    setPanelOpen(true);
  };

  const handlePanelClose = () => {
    setPanelOpen(false);
    setActiveZone(null);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && panelOpen) handlePanelClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [panelOpen]);

  return (
    <main>
      <BootSplash onComplete={() => setBooted(true)} />

      {booted && (
        <>
          <NavBar />

          {/* 3D Hero — full viewport height */}
          <section
            style={{ position: 'relative', width: '100%', height: '100vh' }}
            onClick={() => {
              if (panelOpen && Date.now() - lastZoneClickTime.current > 200) {
                handlePanelClose();
              }
            }}
          >
            <CourtScene onZoneClick={handleZoneClick} />
            <HeroOverlay />
            <ZonePanel
              zone={activeZone}
              open={panelOpen}
              onClose={handlePanelClose}
            />
          </section>

          <SectionDivider />
          <StatsBar />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <SkillsSection />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <ContactSection />

          <FloatingTerminal />
        </>
      )}
    </main>
  );
}
