'use client';

import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { CAM, ZoneName } from '@/lib/cameraPositions';

interface Props {
  targetZone: ZoneName | null;
}

export default function CameraRig({ targetZone }: Props) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const target = targetZone ? CAM[targetZone] : CAM.DEFAULT;

    if (controlsRef.current) controlsRef.current.enabled = false;

    gsap.killTweensOf(camera.position);
    gsap.to(camera.position, {
      x: target.position[0],
      y: target.position[1],
      z: target.position[2],
      duration: 1.8,
      ease: 'power3.inOut',
      onUpdate: () => {
        if (controlsRef.current) {
          controlsRef.current.target.set(...target.target);
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
      minDistance={5}
      maxDistance={35}
      maxPolarAngle={Math.PI / 2.2}
      makeDefault
    />
  );
}
