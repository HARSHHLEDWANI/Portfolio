'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Avatar() {
  const playerRef = useRef<THREE.Group>(null!);
  const ballRef = useRef<THREE.Mesh>(null!);
  const t = useRef(0);
  const idleTimer = useRef(0);
  const trickMode = useRef(false);

  useFrame((_, delta) => {
    t.current += delta;
    idleTimer.current += delta;

    if (!ballRef.current || !playerRef.current) return;

    if (!trickMode.current) {
      const bounceY = Math.abs(Math.sin(t.current * 3)) * 0.4;
      ballRef.current.position.y = bounceY + 0.15;
      playerRef.current.position.y = Math.sin(t.current * 3) * 0.03;
    }

    if (idleTimer.current > 12 && !trickMode.current) {
      trickMode.current = true;
      idleTimer.current = 0;
    }

    if (trickMode.current) {
      const trickT = idleTimer.current / 2;
      if (trickT > 1) {
        trickMode.current = false;
        ballRef.current.position.set(0.6, 0.5, 0);
      } else {
        ballRef.current.position.x = 0.6 + Math.sin(trickT * Math.PI) * 2;
        ballRef.current.position.y = 0.5 + Math.sin(trickT * Math.PI) * 3;
      }
    }
  });

  return (
    <group>
      {/* Player group */}
      <group ref={playerRef} position={[-9, 0, 0]}>
        {/* Head */}
        <mesh position={[0, 1.75, 0]} castShadow>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#F5CBA7" />
        </mesh>

        {/* Body */}
        <mesh position={[0, 1.1, 0]} castShadow>
          <boxGeometry args={[0.45, 0.6, 0.25]} />
          <meshStandardMaterial color="#0B1E3D" />
        </mesh>

        {/* Jersey number 3 */}
        <mesh position={[-0.08, 1.15, 0.13]}>
          <boxGeometry args={[0.06, 0.12, 0.01]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0.08, 1.15, 0.13]}>
          <boxGeometry args={[0.1, 0.12, 0.01]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Left arm */}
        <mesh position={[-0.3, 1.1, 0]} castShadow>
          <boxGeometry args={[0.15, 0.5, 0.2]} />
          <meshStandardMaterial color="#F5CBA7" />
        </mesh>

        {/* Right arm */}
        <mesh position={[0.3, 1.1, 0]} castShadow>
          <boxGeometry args={[0.15, 0.5, 0.2]} />
          <meshStandardMaterial color="#F5CBA7" />
        </mesh>

        {/* Shorts */}
        <mesh position={[0, 0.65, 0]} castShadow>
          <boxGeometry args={[0.45, 0.3, 0.25]} />
          <meshStandardMaterial color="#0B1E3D" />
        </mesh>

        {/* Left leg */}
        <mesh position={[-0.12, 0.25, 0]} castShadow>
          <boxGeometry args={[0.18, 0.5, 0.2]} />
          <meshStandardMaterial color="#F5CBA7" />
        </mesh>

        {/* Right leg */}
        <mesh position={[0.12, 0.25, 0]} castShadow>
          <boxGeometry args={[0.18, 0.5, 0.2]} />
          <meshStandardMaterial color="#F5CBA7" />
        </mesh>

        {/* Sneakers */}
        <mesh position={[-0.12, -0.02, 0.04]} castShadow>
          <boxGeometry args={[0.2, 0.1, 0.28]} />
          <meshStandardMaterial color="#FF6B35" />
        </mesh>
        <mesh position={[0.12, -0.02, 0.04]} castShadow>
          <boxGeometry args={[0.2, 0.1, 0.28]} />
          <meshStandardMaterial color="#FF6B35" />
        </mesh>
      </group>

      {/* Basketball */}
      <mesh ref={ballRef} position={[-8.4, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#FF6B35" roughness={0.7} metalness={0.1} />
      </mesh>
    </group>
  );
}
