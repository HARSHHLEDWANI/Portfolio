'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Scoreboard() {
  const groupRef = useRef<THREE.Group>(null!);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta;
    if (groupRef.current) {
      groupRef.current.position.y = 7 + Math.sin(t.current * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 7, 0]}>
      {/* Gold border behind */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[8.2, 2.7, 0.1]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Board body */}
      <mesh>
        <boxGeometry args={[8, 2.5, 0.15]} />
        <meshStandardMaterial color="#0D1117" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Text */}
      <Text position={[0, 0.7, 0.1]} fontSize={0.5} color="#FFD700" anchorX="center">
        HARSH.SYS
      </Text>
      <Text position={[0, 0.1, 0.1]} fontSize={0.22} color="#00FF88" anchorX="center">
        PROJECTS: 6   |   COMMITS: LIVE   |   STATUS: AVAILABLE
      </Text>
      <Text position={[0, -0.5, 0.1]} fontSize={0.18} color="#8892A4" anchorX="center">
        SIT PUNE · CSE 2027 · OPEN TO INTERNSHIPS
      </Text>

      {/* Hanging cables */}
      <mesh position={[-2, 1.25, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      <mesh position={[2, 1.25, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
    </group>
  );
}
