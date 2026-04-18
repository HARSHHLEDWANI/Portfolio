'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0001;
      ref.current.rotation.y -= 0.0002;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={particles} stride={3}>
        <PointMaterial
          transparent
          color="#a78bfa"
          size={6}
          sizeAttenuation={true}
          depthWrite={true}
        />
      </Points>
    </group>
  );
}

function FloatingOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 50;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[100, 20]} />
      <meshStandardMaterial
        color="#a78bfa"
        wireframe={true}
        emissive="#a78bfa"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <pointLight position={[100, 100, 100]} intensity={1.5} color="#a78bfa" />
      <pointLight position={[-100, -100, 100]} intensity={1} color="#22d3ee" />
      <ambientLight intensity={0.5} />
    </>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 300], fov: 75, near: 0.1, far: 10000 }}
      className="absolute inset-0"
      style={{ background: 'transparent' }}
    >
      <Lights />
      <ParticleField />
      <FloatingOrb />
    </Canvas>
  );
}
