export const projects = [
  {
    id: 1,
    title: 'SecureFlow — ML Fraud Detection',
    slug: 'secureflow',
    tagline: 'Real-time fraud prevention for digital payments',
    problem:
      'Digital payment platforms lose billions annually to fraud that bypasses static, rule-based detection systems — by the time anomalies surface, funds are already gone.',
    solution:
      'Built a real-time ML pipeline combining gradient-boosted anomaly detection with blockchain-inspired audit trails. Every transaction is scored in under 50ms, flagged before settlement, not after.',
    impact: ['99.2% detection accuracy', '<50ms inference latency', '40% fewer false positives'],
    tags: ['ML', 'Python', 'Security', 'Backend'],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    liveLink: '#',
    githubLink: 'https://github.com/HARSHHLEDWANI',
    ongoing: false,
    featured: true,
  },
  {
    id: 2,
    title: 'Neuro-Adaptive AI Learning',
    slug: 'neuro-adaptive',
    tagline: 'An AI that learns how you learn',
    problem:
      'One-size-fits-all digital education ignores individual learning velocity, comprehension gaps, and session fatigue.',
    solution:
      'Adaptive platform that tracks interaction patterns and knowledge state, dynamically adjusting curriculum difficulty in real time using ML.',
    impact: ['Real-time personalization', 'Knowledge-state tracking', 'Group + solo modes'],
    tags: ['AI / ML', 'EdTech', 'Full Stack'],
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'ML Models'],
    image:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    liveLink: '#',
    githubLink: 'https://github.com/HARSHHLEDWANI',
    ongoing: true,
    featured: false,
  },
  {
    id: 3,
    title: 'F1 Race Analytics Platform',
    slug: 'f1-analytics',
    tagline: 'Full-stack Formula 1 intelligence',
    problem:
      'Public F1 data is rich but fragmented — cross-season performance analysis requires hours of manual aggregation.',
    solution:
      'Interactive dashboards with D3.js that surface lap times, pit strategies, and standings across seasons in milliseconds.',
    impact: ['Multi-season data viz', 'Live race telemetry', 'Deployed on Vercel'],
    tags: ['React', 'Node.js', 'Data Viz'],
    techStack: ['React.js', 'Node.js', 'REST APIs', 'D3.js', 'TailwindCSS'],
    image:
      'https://images.unsplash.com/photo-1617386214930-dae6126db84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    liveLink: 'https://f1-prediction.vercel.app',
    githubLink: 'https://github.com/HARSHHLEDWANI/F1',
    ongoing: false,
    featured: false,
  },
  {
    id: 4,
    title: 'Zunj Divyang — NGO Platform',
    slug: 'zunj-divyang',
    tagline: 'Payments + volunteerism for social impact',
    problem:
      'NGOs lack reliable, low-cost digital infrastructure for donations and volunteer coordination at scale.',
    solution:
      'Full-stack donation + volunteer platform with Cashfree Payments integration, webhook-driven receipts, and real-time campaign tracking.',
    impact: ['Live payment integration', 'Auto donor receipts', 'Real-time campaign stats'],
    tags: ['Full Stack', 'Payments', 'Social Impact'],
    techStack: ['Next.js', 'React.js', 'Cashfree API', 'MongoDB', 'Node.js'],
    image:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    liveLink: '#',
    githubLink: 'https://github.com/HARSHHLEDWANI',
    ongoing: false,
    featured: false,
  },
  {
    id: 5,
    title: 'Phishing Website Detector',
    slug: 'phishing-detector',
    tagline: 'ML-powered URL threat classification',
    problem:
      'Phishing is the #1 vector for credential theft, yet most users have no real-time browser-level protection.',
    solution:
      'Trained an ML classifier on URL patterns and domain features, wrapped in a Chrome extension with live confidence scoring.',
    impact: ['94%+ accuracy', 'Real-time URL scanning', 'Chrome extension shipped'],
    tags: ['ML', 'Cybersecurity', 'Python'],
    techStack: ['Python', 'Scikit-learn', 'React', 'FastAPI', 'Chrome APIs'],
    image:
      'https://images.unsplash.com/photo-1550439062-61a15eec98d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    liveLink: '#',
    githubLink: 'https://github.com/HARSHHLEDWANI',
    ongoing: false,
    featured: false,
  },
];
