'use client';

import { Line, Text, MeshReflectorMaterial } from '@react-three/drei';

function arcPoints(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, segments: number): [number, number, number][] {
  return Array.from({ length: segments }, (_, i) => {
    const angle = startAngle + (endAngle - startAngle) * (i / (segments - 1));
    return [cx + Math.cos(angle) * radius, 0.01, cy + Math.sin(angle) * radius] as [number, number, number];
  });
}

const GOLD = '#FFD700';
const LW = 2;

export default function Court() {
  // Wood grain z positions
  const grainZ = Array.from({ length: 60 }, (_, i) => -7.5 + i * 0.25);

  // Three-point arcs
  const leftArc = arcPoints(-11, 0, 6.75, -Math.PI / 2, Math.PI / 2, 40);
  const rightArc = arcPoints(11, 0, 6.75, Math.PI / 2, (3 * Math.PI) / 2, 40);

  // Court boundary
  const boundary: [number,number,number][] = [[-13,0.01,-7],[13,0.01,-7],[13,0.01,7],[-13,0.01,7],[-13,0.01,-7]];

  // Left paint box
  const leftPaint: [number,number,number][] = [[-13,0.01,-2.45],[-7.2,0.01,-2.45],[-7.2,0.01,2.45],[-13,0.01,2.45],[-13,0.01,-2.45]];
  // Right paint box
  const rightPaint: [number,number,number][] = [[13,0.01,-2.45],[7.2,0.01,-2.45],[7.2,0.01,2.45],[13,0.01,2.45],[13,0.01,-2.45]];

  return (
    <group>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[28, 15]} />
        <MeshReflectorMaterial
          color="#7B3F00"
          roughness={0.9}
          metalness={0.1}
          mirror={0.15}
          blur={[300, 100]}
          mixBlur={0.8}
          mixStrength={0.4}
          resolution={512}
          depthScale={1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
        />
      </mesh>

      {/* Wood grain lines */}
      {grainZ.map((z, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, z]}>
          <planeGeometry args={[28, 0.02]} />
          <meshBasicMaterial color="#5C2E00" transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Court boundary */}
      <Line points={boundary} color={GOLD} lineWidth={LW} />

      {/* Half-court line */}
      <Line points={[[0,0.01,-7],[0,0.01,7]]} color={GOLD} lineWidth={LW} />

      {/* Centre circle */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.9, 3, 64]} />
        <meshBasicMaterial color={GOLD} />
      </mesh>

      {/* Three-point arcs */}
      <Line points={leftArc} color={GOLD} lineWidth={LW} />
      <Line points={rightArc} color={GOLD} lineWidth={LW} />

      {/* Three-point corner lines */}
      <Line points={[[-13,0.01,-3],[-11,0.01,-3]]} color={GOLD} lineWidth={LW} />
      <Line points={[[-13,0.01,3],[-11,0.01,3]]} color={GOLD} lineWidth={LW} />
      <Line points={[[13,0.01,-3],[11,0.01,-3]]} color={GOLD} lineWidth={LW} />
      <Line points={[[13,0.01,3],[11,0.01,3]]} color={GOLD} lineWidth={LW} />

      {/* Paint boxes */}
      <Line points={leftPaint} color={GOLD} lineWidth={LW} />
      <Line points={rightPaint} color={GOLD} lineWidth={LW} />

      {/* Free-throw circles */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-8.2, 0.01, 0]}>
        <ringGeometry args={[1.8, 2, 64]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[8.2, 0.01, 0]}>
        <ringGeometry args={[1.8, 2, 64]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.6} />
      </mesh>

      {/* Left hoop */}
      <mesh position={[-14, 3.05, 0]}>
        <boxGeometry args={[0.1, 1.1, 1.8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-13.3, 2.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.23, 0.02, 8, 24]} />
        <meshStandardMaterial color="#FF6B35" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-14.5, 1.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="#888888" metalness={0.9} />
      </mesh>

      {/* Right hoop */}
      <mesh position={[14, 3.05, 0]}>
        <boxGeometry args={[0.1, 1.1, 1.8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[13.3, 2.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.23, 0.02, 8, 24]} />
        <meshStandardMaterial color="#FF6B35" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[14.5, 1.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="#888888" metalness={0.9} />
      </mesh>

      {/* Centre court HL text */}
      <Text
        position={[0, 0.02, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={2.5}
        color="rgba(255,215,0,0.1)"
        anchorX="center"
        anchorY="middle"
      >
        HL
      </Text>

      {/* Bench area (Contact zone) */}
      {[10, 11.5, 13].map((x, i) => (
        <mesh key={i} position={[x, 0.2, 4]}>
          <boxGeometry args={[1.2, 0.15, 0.4]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}
