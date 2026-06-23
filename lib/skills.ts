export type Level = 'EXPERT' | 'ADVANCED' | 'PROFICIENT' | 'LEARNING';
export type SkillLevel = Level;

export const LEVEL_FILL: Record<Level, number> = {
  EXPERT: 0.90, ADVANCED: 0.72, PROFICIENT: 0.55, LEARNING: 0.30,
};

export const LEVEL_COLOR: Record<Level, string> = {
  EXPERT: '#00FF88', ADVANCED: '#00CFFF',
  PROFICIENT: '#FFB347', LEARNING: '#8892A4',
};

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

export const SKILLS = [
  { cat: 'Languages', items: [
    { name: 'Python',            level: 'ADVANCED'   as Level },
    { name: 'JavaScript / TS',   level: 'ADVANCED'   as Level },
    { name: 'C++',               level: 'PROFICIENT' as Level },
    { name: 'Java',              level: 'PROFICIENT' as Level },
    { name: 'C',                 level: 'PROFICIENT' as Level },
    { name: 'SQL',               level: 'ADVANCED'   as Level },
  ]},
  { cat: 'Frontend', items: [
    { name: 'React.js',          level: 'ADVANCED'   as Level },
    { name: 'Next.js',           level: 'ADVANCED'   as Level },
    { name: 'Tailwind CSS',      level: 'ADVANCED'   as Level },
    { name: 'HTML5 / CSS3',      level: 'EXPERT'     as Level },
    { name: 'Framer Motion',     level: 'PROFICIENT' as Level },
  ]},
  { cat: 'Backend', items: [
    { name: 'Node.js / Express', level: 'ADVANCED'   as Level },
    { name: 'FastAPI',           level: 'PROFICIENT' as Level },
    { name: 'REST API Design',   level: 'ADVANCED'   as Level },
    { name: 'API Integration',   level: 'ADVANCED'   as Level },
    { name: 'Microservices',     level: 'PROFICIENT' as Level },
  ]},
  { cat: 'Databases', items: [
    { name: 'MongoDB',           level: 'PROFICIENT' as Level },
    { name: 'PostgreSQL',        level: 'PROFICIENT' as Level },
    { name: 'MySQL',             level: 'PROFICIENT' as Level },
    { name: 'Redis',             level: 'PROFICIENT' as Level },
    { name: 'Supabase',          level: 'LEARNING'   as Level },
  ]},
  { cat: 'ML & AI', items: [
    { name: 'TensorFlow',        level: 'PROFICIENT' as Level },
    { name: 'Scikit-learn',      level: 'PROFICIENT' as Level },
    { name: 'Pandas / NumPy',    level: 'ADVANCED'   as Level },
    { name: 'Data Modeling',     level: 'PROFICIENT' as Level },
    { name: 'PyTorch',           level: 'LEARNING'   as Level },
  ]},
  { cat: 'Cloud & DevOps', items: [
    { name: 'Git / GitHub',      level: 'ADVANCED'   as Level },
    { name: 'Docker',            level: 'PROFICIENT' as Level },
    { name: 'CI/CD Pipelines',   level: 'PROFICIENT' as Level },
    { name: 'Linux / Ubuntu',    level: 'PROFICIENT' as Level },
    { name: 'AWS EC2',           level: 'LEARNING'   as Level },
  ]},
  { cat: 'Core CS', items: [
    { name: 'Data Structures & Algorithms', level: 'ADVANCED'   as Level },
    { name: 'Object-Oriented Programming',  level: 'ADVANCED'   as Level },
    { name: 'DBMS',                         level: 'ADVANCED'   as Level },
    { name: 'Operating Systems',            level: 'PROFICIENT' as Level },
    { name: 'Computer Networks',            level: 'PROFICIENT' as Level },
    { name: 'System Design',                level: 'PROFICIENT' as Level },
    { name: 'Distributed Systems',          level: 'LEARNING'   as Level },
  ]},
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 'ADVANCED' },
      { name: 'JavaScript / TypeScript', level: 'ADVANCED' },
      { name: 'C++', level: 'PROFICIENT' },
      { name: 'Java', level: 'PROFICIENT' },
      { name: 'C', level: 'PROFICIENT' },
      { name: 'SQL', level: 'ADVANCED' },
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
      { name: 'API Integration', level: 'ADVANCED' },
      { name: 'Microservices', level: 'PROFICIENT' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 'PROFICIENT' },
      { name: 'PostgreSQL', level: 'PROFICIENT' },
      { name: 'MySQL', level: 'PROFICIENT' },
      { name: 'Redis', level: 'PROFICIENT' },
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
      { name: 'Data Modeling', level: 'PROFICIENT' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 'ADVANCED' },
      { name: 'Docker', level: 'PROFICIENT' },
      { name: 'CI/CD Pipelines', level: 'PROFICIENT' },
      { name: 'Linux / Ubuntu', level: 'PROFICIENT' },
      { name: 'AWS EC2', level: 'LEARNING' },
    ],
  },
  {
    category: 'Core CS',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'ADVANCED' },
      { name: 'Object-Oriented Programming', level: 'ADVANCED' },
      { name: 'DBMS', level: 'ADVANCED' },
      { name: 'Operating Systems', level: 'PROFICIENT' },
      { name: 'Computer Networks', level: 'PROFICIENT' },
      { name: 'System Design', level: 'PROFICIENT' },
      { name: 'Distributed Systems', level: 'LEARNING' },
    ],
  },
];
