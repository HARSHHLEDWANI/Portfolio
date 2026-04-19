'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { ZoneName } from '@/lib/cameraPositions';
import * as THREE from 'three';

const ZONE_CONFIG: Record<ZoneName, { position: [number,number,number]; args: [number,number,number]; color: string }> = {
  DEFAULT:  { position: [0, 0.5, 0], args: [1, 1, 1], color: '#FFD700' },
  PROJECTS: { position: [-10, 0.5, 0], args: [5, 1, 6], color: '#00FF88' },
  SKILLS:   { position: [10,  0.5, 0], args: [5, 1, 6], color: '#00CFFF' },
  ABOUT:    { position: [0,   0.5, 0], args: [5, 1, 5], color: '#FFD700' },
  CONTACT:  { position: [12,  0.5, 4], args: [4, 1, 4], color: '#FFB347' },
};

interface Props {
  zone: Exclude<ZoneName, 'DEFAULT'>;
  onZoneClick: (zone: ZoneName) => void;
}

export default function ZoneHitbox({ zone, onZoneClick }: Props) {
  const cfg = ZONE_CONFIG[zone];
  const [hovered, setHovered] = useState(false);
  const ringRef = useRef<THREE.Mesh>(null!);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta;
    if (ringRef.current) {
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
        Math.sin(t.current * 2) * 0.15 + 0.2;
    }
  });

  return (
    <group>
      {/* Pulsing floor ring */}
      <mesh
        ref={ringRef}
        position={[cfg.position[0], 0.02, cfg.position[2]]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[1.5, 1.6, 32]} />
        <meshBasicMaterial color={cfg.color} transparent opacity={0.3} />
      </mesh>

      {/* Invisible hitbox */}
      <mesh
        position={cfg.position}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
        onClick={(e) => {
          e.stopPropagation();
          onZoneClick(zone);
        }}
      >
        <boxGeometry args={cfg.args} />
        <meshBasicMaterial
          color={cfg.color}
          transparent
          opacity={hovered ? 0.18 : 0.0}
          depthWrite={false}
        />
      </mesh>

      {/* Hover label */}
      {hovered && (
        <Text
          position={[cfg.position[0], 2.5, cfg.position[2]]}
          fontSize={0.5}
          color={cfg.color}
          anchorX="center"
        >
          {zone}
        </Text>
      )}
    </group>
  );
}
