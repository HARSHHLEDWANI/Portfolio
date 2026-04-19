'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

const TECHS = [
  { name: 'React',      color: '#61DAFB', radius: 3.5, speed: 0.3,  yBase: 4.5, phase: 0 },
  { name: 'Python',     color: '#00FF88', radius: 5.0, speed: 0.2,  yBase: 5.0, phase: 1.2 },
  { name: 'FastAPI',    color: '#009688', radius: 3.0, speed: 0.4,  yBase: 3.8, phase: 2.4 },
  { name: 'Next.js',   color: '#FFFFFF', radius: 5.5, speed: 0.18, yBase: 5.5, phase: 0.8 },
  { name: 'TensorFlow', color: '#FF8C00', radius: 4.0, speed: 0.25, yBase: 4.0, phase: 3.5 },
  { name: 'PostgreSQL', color: '#336791', radius: 6.0, speed: 0.15, yBase: 4.8, phase: 1.8 },
  { name: 'Node.js',   color: '#84BA64', radius: 4.5, speed: 0.35, yBase: 4.2, phase: 4.2 },
  { name: 'MongoDB',   color: '#4DB33D', radius: 5.8, speed: 0.22, yBase: 5.2, phase: 2.9 },
]

interface TechOrbProps {
  name: string
  color: string
  radius: number
  speed: number
  yBase: number
  phase: number
}

function TechOrb({ name, color, radius, speed, yBase, phase }: TechOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const t = useRef(phase)

  useFrame((_, delta) => {
    t.current += delta * speed
    if (!meshRef.current) return
    meshRef.current.position.x = Math.cos(t.current) * radius
    meshRef.current.position.z = Math.sin(t.current) * radius
    meshRef.current.position.y = yBase + Math.sin(t.current * 2) * 0.3
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.22, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
      <Html
        center
        distanceFactor={12}
        zIndexRange={[10, 10]}
        style={{
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '9px',
          color: color,
          background: 'rgba(8,11,20,0.8)',
          border: `1px solid ${color}40`,
          padding: '2px 6px',
          borderRadius: '3px',
          marginTop: '8px',
          letterSpacing: '0.05em',
        }}>
          {name}
        </div>
      </Html>
    </mesh>
  )
}

export default function TechOrbs() {
  return (
    <group>
      {TECHS.map((tech) => (
        <TechOrb key={tech.name} {...tech} />
      ))}
    </group>
  )
}
