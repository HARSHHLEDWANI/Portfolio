export type ProjectStatus = 'BUILDING' | 'COMPLETED' | 'LIVE';

export interface Project {
  id: string;
  number: string;
  name: string;
  stack: string[];
  status: ProjectStatus;
  problem: string;
  solution: string;
  impact: string;
  github: string | null;
  live: string | null;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'secureflow',
    number: '01',
    name: 'SecureFlow — ML Fraud Detection',
    stack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis'],
    status: 'BUILDING',
    problem: 'Digital payment platforms lose money to fraud that bypasses rule-based systems.',
    solution: 'Built an ML pipeline combining gradient-boosted anomaly detection with audit trails. Transactions scored in under 100ms.',
    impact: '~94% detection accuracy in testing, ~35% reduction in false positives vs baseline.',
    github: 'https://github.com/HARSHHLEDWANI',
    live: null,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=320&h=200&fit=crop',
  },
  {
    id: 'neuro-adaptive',
    number: '02',
    name: 'Neuro-Adaptive AI Learning',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    status: 'BUILDING',
    problem: 'One-size-fits-all digital education ignores individual learning gaps and fatigue.',
    solution: 'Adaptive curriculum engine with ML knowledge-state tracking that adjusts content in real time.',
    impact: 'In active development — targeting 30% improvement in learner retention vs static curricula.',
    github: 'https://github.com/HARSHHLEDWANI',
    live: null,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=320&h=200&fit=crop',
  },
  {
    id: 'f1-analytics',
    number: '03',
    name: 'F1 Race Analytics Platform',
    stack: ['React.js', 'Node.js', 'REST APIs', 'Chart.js'],
    status: 'LIVE',
    problem: 'Cross-season F1 performance data is fragmented and hard to compare.',
    solution: 'Built a unified analytics dashboard pulling from public F1 APIs with multi-season visualizations.',
    impact: 'Interactive data viz across 5+ seasons, live and usable.',
    github: 'https://github.com/HARSHHLEDWANI/F1',
    live: 'https://f1-prediction.vercel.app',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=320&h=200&fit=crop',
  },
  {
    id: 'zunj-divyang',
    number: '04',
    name: 'Zunj Divyang — NGO Platform',
    stack: ['Next.js', 'React.js', 'Cashfree API', 'MongoDB'],
    status: 'COMPLETED',
    problem: 'NGOs lacked reliable, low-cost infrastructure for donations and volunteer coordination.',
    solution: 'Full-stack platform with live payment integration via Cashfree API, donation tracking, volunteer management.',
    impact: 'Completed and deployed. Handles real donations for a registered NGO.',
    github: 'https://github.com/HARSHHLEDWANI',
    live: null,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=320&h=200&fit=crop',
  },
  {
    id: 'bouquet-designer',
    number: '05',
    name: 'Bouquet Designer',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'],
    status: 'COMPLETED',
    problem: 'No simple browser-based tool for designing custom floral arrangements visually.',
    solution: 'Interactive canvas application where users drag, arrange, and customize bouquet elements in real time.',
    impact: 'Fully functional creative tool — demonstrates front-end canvas skills and UX thinking.',
    github: 'https://github.com/HARSHHLEDWANI/bouquet-designer',
    live: null,
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=320&h=200&fit=crop',
  },
  {
    id: 'phishing-detector',
    number: '06',
    name: 'Phishing Website Detector',
    stack: ['Python', 'Scikit-learn', 'React', 'Flask'],
    status: 'BUILDING',
    problem: 'Phishing is the top credential theft vector with no real-time browser-level protection.',
    solution: 'ML classifier analyzing URL patterns and page features to detect phishing sites.',
    impact: '~90% accuracy on test dataset. In active development.',
    github: 'https://github.com/HARSHHLEDWANI',
    live: null,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=320&h=200&fit=crop',
  },
];
