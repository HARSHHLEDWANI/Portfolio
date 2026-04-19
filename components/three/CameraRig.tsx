'use client';

import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { CAM, ZONE_NUDGES, ZoneName } from '@/lib/cameraPositions';

interface Props {
  targetZone: ZoneName | null;
}

export default function CameraRig({ targetZone }: Props) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    gsap.killTweensOf(camera.position);

    if (!targetZone || targetZone === 'DEFAULT') {
      gsap.to(camera.position, {
        x: CAM.DEFAULT.position[0],
        y: CAM.DEFAULT.position[1],
        z: CAM.DEFAULT.position[2],
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (controlsRef.current) {
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
          }
        },
        onComplete: () => {
          if (controlsRef.current) controlsRef.current.enabled = true;
        },
      });
      return;
    }

    // Subtle overhead nudge — keeps court visible
    const nudge = ZONE_NUDGES[targetZone as keyof typeof ZONE_NUDGES] ?? CAM.DEFAULT;

    gsap.to(camera.position, {
      x: nudge.position[0],
      y: nudge.position[1],
      z: nudge.position[2],
      duration: 1.0,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (controlsRef.current) {
          controlsRef.current.target.set(...nudge.target);
          controlsRef.current.update();
        }
      },
      onComplete: () => {
        if (controlsRef.current) controlsRef.current.enabled = true;
      },
    });
  }, [targetZone, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      minDistance={8}
      maxDistance={40}
      maxPolarAngle={Math.PI / 2.1}
      minPolarAngle={0.2}
      makeDefault
    />
  );
}
