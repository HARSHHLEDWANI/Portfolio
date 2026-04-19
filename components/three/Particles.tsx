'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 60;

export default function Particles() {
  const groupRef = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 26; // x: -13 to 13
      arr[i * 3 + 1] = 0.5 + Math.random() * 7.5;  // y: 0.5 to 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12; // z: -6 to 6
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.03;

    const pos = (groupRef.current.geometry as THREE.BufferGeometry).attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < COUNT; i++) {
      pos.array[i * 3 + 1] += delta * 0.15;
      if (pos.array[i * 3 + 1] > 8) {
        pos.array[i * 3 + 1] = 0.5;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={groupRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#FFD700"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}
