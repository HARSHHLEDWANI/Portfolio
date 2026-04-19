'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ZoneName } from '@/lib/cameraPositions';
import Court from './Court';
import Avatar from './Avatar';
import ZoneHitbox from './ZoneHitbox';
import Scoreboard from './Scoreboard';
import CourtLights from './CourtLights';
import CameraRig from './CameraRig';
import Particles from './Particles';

interface Props {
  onZoneClick: (zone: ZoneName) => void;
}

export default function CourtScene({ onZoneClick }: Props) {
  const [activeZone, setActiveZone] = useState<ZoneName | null>(null);

  const handleZoneClick = (zone: ZoneName) => {
    setActiveZone(zone);
    onZoneClick(zone);
  };

  return (
    <Canvas
      camera={{ fov: 50, near: 0.1, far: 200, position: [0, 18, 12] }}
      gl={{ antialias: true, alpha: false }}
      shadows
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%', background: '#080B14' }}
    >
      <fog attach="fog" args={['#080B14', 30, 80]} />
      <Suspense fallback={null}>
        <CourtLights />
        <Court />
        <Avatar />
        <Scoreboard />
        <Particles />
        <ZoneHitbox zone="PROJECTS" onZoneClick={handleZoneClick} />
        <ZoneHitbox zone="SKILLS"   onZoneClick={handleZoneClick} />
        <ZoneHitbox zone="ABOUT"    onZoneClick={handleZoneClick} />
        <ZoneHitbox zone="CONTACT"  onZoneClick={handleZoneClick} />
      </Suspense>
      <CameraRig targetZone={activeZone} />
    </Canvas>
  );
}
