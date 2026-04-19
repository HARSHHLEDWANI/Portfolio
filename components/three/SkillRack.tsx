'use client'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import * as THREE from 'three'

const SKILLS_ON_RACK = [
  { name: 'React',      level: 'ADVANCED',   color: '#61DAFB' },
  { name: 'Python',     level: 'ADVANCED',   color: '#00FF88' },
  { name: 'Next.js',   level: 'ADVANCED',   color: '#FFFFFF' },
  { name: 'FastAPI',    level: 'PROFICIENT', color: '#009688' },
  { name: 'TensorFlow', level: 'PROFICIENT', color: '#FF8C00' },
  { name: 'Node.js',   level: 'ADVANCED',   color: '#84BA64' },
  { name: 'PostgreSQL', level: 'PROFICIENT', color: '#336791' },
  { name: 'MongoDB',   level: 'PROFICIENT', color: '#4DB33D' },
  { name: 'ML/AI',     level: 'PROFICIENT', color: '#FF3D3D' },
  { name: 'TypeScript', level: 'ADVANCED',   color: '#3178C6' },
  { name: 'Docker',    level: 'LEARNING',   color: '#2496ED' },
  { name: 'AWS',       level: 'LEARNING',   color: '#FFB347' },
]

interface SkillBallProps {
  skill: typeof SKILLS_ON_RACK[0]
  position: [number, number, number]
  onHover: (name: string | null) => void
  isHovered: boolean
}

function SkillBall({ skill, position, onHover, isHovered }: SkillBallProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const bobRef = useRef(Math.random() * Math.PI * 2)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    bobRef.current += delta * (isHovered ? 3 : 0.8)
    meshRef.current.position.y =
      position[1] + Math.sin(bobRef.current) * (isHovered ? 0.12 : 0.04)
    meshRef.current.rotation.y += delta * (isHovered ? 2 : 0.3)
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={e => {
        e.stopPropagation()
        onHover(skill.name)
        document.body.style.cursor = 'pointer'
      }}
      onPointerLeave={e => {
        e.stopPropagation()
        onHover(null)
        document.body.style.cursor = 'auto'
      }}
    >
      <sphereGeometry args={[0.22, 24, 24]} />
      <meshStandardMaterial
        color={isHovered ? skill.color : '#FF6B35'}
        emissive={isHovered ? skill.color : '#FF3300'}
        emissiveIntensity={isHovered ? 0.8 : 0.15}
        roughness={0.6}
        metalness={0.1}
      />

      {/* Basketball seam — vertical ring */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.22, 0.008, 4, 24]} />
        <meshBasicMaterial color="#000" transparent opacity={0.6} />
      </mesh>
      {/* Basketball seam — horizontal ring */}
      <mesh>
        <torusGeometry args={[0.22, 0.008, 4, 24]} />
        <meshBasicMaterial color="#000" transparent opacity={0.6} />
      </mesh>

      {/* Hover tooltip */}
      {isHovered && (
        <Html
          center
          position={[0, 0.45, 0]}
          distanceFactor={8}
          zIndexRange={[10, 10]}
          style={{ pointerEvents: 'none' }}
        >
          <div style={{
            background: 'rgba(8,11,20,0.95)',
            border: `1px solid ${skill.color}`,
            borderRadius: '4px',
            padding: '6px 12px',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              color: skill.color,
            }}>
              {skill.name}
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '2px',
              letterSpacing: '0.08em',
            }}>
              {skill.level}
            </div>
          </div>
        </Html>
      )}
    </mesh>
  )
}

export default function SkillRack({ onRackClick }: { onRackClick: () => void }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // 4 rows × 3 cols = 12 balls
  const ballPositions: [number, number, number][] = []
  const xOffsets = [-0.5, 0, 0.5]
  const yLevels = [1.05, 2.05, 3.05, 4.05]
  yLevels.forEach(y => {
    xOffsets.forEach(dx => {
      ballPositions.push([16 + dx, y, 0])
    })
  })

  return (
    <group onClick={onRackClick}>

      {/* Left pole */}
      <mesh position={[15.4, 3, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 6.2, 8]} />
        <meshStandardMaterial color="#777" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Right pole */}
      <mesh position={[16.6, 3, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 6.2, 8]} />
        <meshStandardMaterial color="#777" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Shelf bars */}
      {[1.0, 2.0, 3.0, 4.0].map(y => (
        <mesh key={y} position={[16, y - 0.18, 0]}>
          <boxGeometry args={[1.5, 0.07, 0.28]} />
          <meshStandardMaterial color="#555" metalness={0.8} roughness={0.25} />
        </mesh>
      ))}

      {/* Back support bar (top) */}
      <mesh position={[16, 6.0, -0.1]}>
        <boxGeometry args={[1.5, 0.07, 0.07]} />
        <meshStandardMaterial color="#555" metalness={0.8} roughness={0.25} />
      </mesh>

      {/* Base plate */}
      <mesh position={[16, 0.04, 0]}>
        <boxGeometry args={[1.8, 0.08, 0.55]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* SKILLS sign background */}
      <mesh position={[16, 6.55, 0]}>
        <boxGeometry args={[2.0, 0.65, 0.12]} />
        <meshStandardMaterial color="#0D1117" />
      </mesh>
      {/* Sign gold border */}
      <mesh position={[16, 6.55, -0.07]}>
        <boxGeometry args={[2.15, 0.8, 0.06]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Sign text */}
      <Text
        position={[16, 6.55, 0.07]}
        fontSize={0.32}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
      >
        SKILLS
      </Text>
      {/* Sign support pole */}
      <mesh position={[16, 5.95, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 1.1, 8]} />
        <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Accent light on the rack */}
      <pointLight position={[14, 4, 0]} intensity={20} color="#FFD700" distance={8} />

      {/* Skill balls */}
      {SKILLS_ON_RACK.map((skill, i) => (
        <SkillBall
          key={skill.name}
          skill={skill}
          position={ballPositions[i]}
          onHover={setHoveredSkill}
          isHovered={hoveredSkill === skill.name}
        />
      ))}
    </group>
  )
}
