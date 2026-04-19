'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

function CrowdRow({ zPos, side }: { zPos: number; side: 1 | -1 }) {
  const COUNT = 22
  return (
    <group position={[0, 0, zPos]}>
      {Array.from({ length: COUNT }, (_, i) => {
        const x = -10.5 + i * 1.0
        return (
          <group key={i} position={[x, 0, 0]}>
            {/* Seat */}
            <mesh position={[0, 0.2, 0]}>
              <boxGeometry args={[0.7, 0.15, 0.5]} />
              <meshStandardMaterial color={i % 3 === 0 ? '#1a0a00' : '#0d0600'} />
            </mesh>
            {/* Body */}
            <mesh position={[0, 0.85, 0]}>
              <boxGeometry args={[0.45, 0.7, 0.3]} />
              <meshStandardMaterial
                color={i % 4 === 0 ? '#0B1E3D' : i % 4 === 1 ? '#1a1a1a' : '#111'}
              />
            </mesh>
            {/* Head */}
            <mesh position={[0, 1.4, 0]}>
              <sphereGeometry args={[0.18, 8, 8]} />
              <meshStandardMaterial color="#F5CBA7" />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function ShotClock({ x, z }: { x: number; z: number }) {
  const clockRef = useRef<any>(null)
  const timeRef = useRef(24)
  const elapsed = useRef(0)

  useFrame((_, delta) => {
    elapsed.current += delta
    if (elapsed.current >= 1) {
      elapsed.current = 0
      timeRef.current -= 1
      if (timeRef.current < 0) timeRef.current = 24
      if (clockRef.current) {
        clockRef.current.text = String(timeRef.current).padStart(2, '0')
      }
    }
  })

  return (
    <group position={[x, 0, z]}>
      {/* Pole */}
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 6]} />
        <meshStandardMaterial color="#555" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Clock display box */}
      <mesh position={[0, 6.2, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
      {/* Clock number */}
      <Text
        ref={clockRef}
        position={[0, 6.2, 0.06]}
        fontSize={0.28}
        color="#FF3D3D"
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        24
      </Text>
    </group>
  )
}

function CeilingRig() {
  const positions: [number, number, number][] = [[-6, 13, -3], [-6, 13, 3], [6, 13, -3], [6, 13, 3]]
  return (
    <group>
      {positions.map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          {/* Truss box */}
          <mesh>
            <boxGeometry args={[2.5, 0.3, 0.3]} />
            <meshStandardMaterial color="#222" metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Hanging cable */}
          <mesh position={[0, -2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 4]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          {/* Light cone */}
          <mesh position={[0, -4.2, 0]}>
            <coneGeometry args={[0.3, 0.6, 8]} />
            <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
          </mesh>
          <pointLight
            position={[0, -5, 0]}
            intensity={30}
            color="#fff8e7"
            distance={15}
          />
        </group>
      ))}
    </group>
  )
}

export default function ArenaExtras() {
  return (
    <>
      <CrowdRow zPos={9.5}  side={1}  />
      <CrowdRow zPos={-9.5} side={-1} />
      <ShotClock x={-13} z={4} />
      <ShotClock x={13}  z={-4} />
      <CeilingRig />
    </>
  )
}
