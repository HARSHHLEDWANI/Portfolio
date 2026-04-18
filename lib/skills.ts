export type SkillLevel = 'EXPERT' | 'ADVANCED' | 'PROFICIENT' | 'LEARNING';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const levelConfig: Record<SkillLevel, { fill: number; color: string }> = {
  EXPERT:    { fill: 90, color: 'var(--neon-green)' },
  ADVANCED:  { fill: 72, color: 'var(--neon-cyan)' },
  PROFICIENT:{ fill: 55, color: 'var(--neon-amber)' },
  LEARNING:  { fill: 30, color: 'var(--text-secondary)' },
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 'ADVANCED' },
      { name: 'JavaScript / TypeScript', level: 'ADVANCED' },
      { name: 'C++', level: 'PROFICIENT' },
      { name: 'Java', level: 'PROFICIENT' },
      { name: 'C', level: 'PROFICIENT' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 'ADVANCED' },
      { name: 'Next.js', level: 'ADVANCED' },
      { name: 'Tailwind CSS', level: 'ADVANCED' },
      { name: 'Framer Motion', level: 'PROFICIENT' },
      { name: 'HTML5 / CSS3', level: 'EXPERT' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js / Express.js', level: 'ADVANCED' },
      { name: 'FastAPI', level: 'PROFICIENT' },
      { name: 'REST API Design', level: 'ADVANCED' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 'PROFICIENT' },
      { name: 'PostgreSQL', level: 'PROFICIENT' },
      { name: 'MySQL', level: 'PROFICIENT' },
      { name: 'Supabase', level: 'LEARNING' },
    ],
  },
  {
    category: 'ML & AI',
    skills: [
      { name: 'TensorFlow', level: 'PROFICIENT' },
      { name: 'Scikit-learn', level: 'PROFICIENT' },
      { name: 'PyTorch', level: 'LEARNING' },
      { name: 'Pandas / NumPy', level: 'ADVANCED' },
    ],
  },
  {
    category: 'Cloud & Security',
    skills: [
      { name: 'AWS EC2', level: 'LEARNING' },
      { name: 'Git / GitHub', level: 'ADVANCED' },
      { name: 'Linux / Ubuntu', level: 'PROFICIENT' },
      { name: 'Cryptography (RSA, AES, SHA)', level: 'PROFICIENT' },
    ],
  },
];
