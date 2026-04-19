'use client'
import { motion } from 'framer-motion'

const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: 'linear' as const,
    },
  },
}

const baseStyle = {
  background: 'linear-gradient(90deg, #0D1117 25%, #1a2030 50%, #0D1117 75%)',
  backgroundSize: '400% 100%',
  borderRadius: '3px',
}

export function SkeletonLine({
  width = '100%',
  height = 14,
  mb = 8,
}: {
  width?: string | number
  height?: number
  mb?: number
}) {
  return (
    <motion.div
      variants={shimmer}
      animate="animate"
      style={{ ...baseStyle, width, height, marginBottom: mb }}
    />
  )
}

export function SkeletonBlock({ height = 60, mb = 12 }: { height?: number; mb?: number }) {
  return (
    <motion.div
      variants={shimmer}
      animate="animate"
      style={{ ...baseStyle, width: '100%', height, marginBottom: mb }}
    />
  )
}

export function ProjectRowSkeleton() {
  return (
    <div style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <SkeletonLine width={24} height={12} mb={0} />
        <div style={{ flex: 1 }}>
          <SkeletonLine width="55%" height={16} mb={8} />
          <div style={{ display: 'flex', gap: 8 }}>
            <SkeletonLine width={60} height={10} mb={0} />
            <SkeletonLine width={50} height={10} mb={0} />
            <SkeletonLine width={70} height={10} mb={0} />
          </div>
        </div>
        <SkeletonLine width={60} height={20} mb={0} />
      </div>
    </div>
  )
}

export function SkillCardSkeleton() {
  return (
    <div style={{
      background: '#0D1117',
      border: '1px solid rgba(255,255,255,0.05)',
      borderTop: '3px solid #1a2030',
      padding: '20px 24px',
    }}>
      <SkeletonLine width="40%" height={10} mb={16} />
      {[1, 2, 3, 4].map(i => (
        <div key={i} style={{
          padding: '8px 0',
          borderBottom: '1px solid rgba(255,255,255,0.03)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <SkeletonLine width="45%" height={12} mb={0} />
          <SkeletonLine width={80} height={8} mb={0} />
        </div>
      ))}
    </div>
  )
}

export function GitHubSkeleton() {
  return (
    <div>
      <SkeletonLine width="35%" height={10} mb={16} />
      <SkeletonBlock height={160} mb={12} />
      <SkeletonBlock height={80} mb={0} />
    </div>
  )
}
