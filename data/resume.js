export const resume = {
  name: 'Harsh Ledwani',
  title: 'Full Stack Developer & AI Enthusiast',
  contact: {
    email: 'ledwani830@gmail.com',
    phone: '+91 8510 824 637',
    github: 'https://github.com/harshhledwani',
    linkedin: 'https://linkedin.com/in/harshledwani'
  },
  summary: "Computer Science undergraduate focused on full-stack web development and scalable system design. Experienced with React, Next.js, Node.js, and practical ML tools; building resilient apps including payment integrations, real-time systems, and offline-first sync engines.",
  skills: {
    languages: ['C++', 'C', 'Java', 'Python'],
    frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    backend: ['Node.js', 'REST APIs'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
    ml: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'],
    tools: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
    cs: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems']
  },
  projects: [
    {
      title: 'ReplicaSync',
      status: 'Ongoing',
      tagline: 'Offline-first sync engine with deterministic conflict resolution',
      summary: 'Designing and developing an offline-first notes application that queues operations in IndexedDB and syncs them with a PostgreSQL-backed backend. Includes LWW conflict resolution and versioned APIs.',
      tech: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'IndexedDB']
    },
    {
      title: 'SecureFlow',
      status: 'Completed',
      tagline: 'Fraud detection system for digital payments',
      summary: 'A fraud detection system that analyzes digital payment transactions and flags suspicious patterns using ML for near real-time alerts. Continual improvements to models and scalability.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Node.js']
    },
    {
      title: 'Zunj Divyang Sanstha Website',
      status: 'Completed',
      tagline: 'Responsive donation and volunteer management platform',
      summary: 'Frontend development for donation and volunteer management; integrated Cashfree Payments and webhooks and added campaign-wise tracking.',
      tech: ['React.js', 'Cashfree API']
    },
    {
      title: 'my personal portfolio',
      status: 'Ongoing',
      tagline: 'This portfolio website',
      summary: 'Personal portfolio showcasing projects, skills, and contact information. Built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion']
    }
  ],
  experience: [
    { title: 'Workshop Instructor', company: 'College', range: 'Jan 2022 - Present', location: 'Pune, India', responsibilities: ['Introduced C programming and Linux fundamentals to peers.', 'Prepared lab exercises and graded assignments.'] },
    { title: 'Robotics Workshop Volunteer', company: 'Government School', range: 'Jul 2021', location: 'New Delhi, India', responsibilities: ['Ran hands-on robotics sessions for school students.', 'Designed beginner-friendly curriculum.'] },
    { title: 'Design Team Member', company: 'College Tech Fest', range: 'Sep 2020', location: 'Pune, India', responsibilities: ['Contributed to planning and visual design.', 'Coordinated with vendors and volunteers.'] }
  ],
  education: [
    { institution: 'Symbiosis Institute of Technology, Pune', degree: 'B.Tech in Computer Science Engineering', range: '2021 - Present', location: 'Pune, India', details: '' },
    { institution: 'Greenway Modern Senior Secondary School, New Delhi', degree: 'Class XII (CBSE)', range: '2019', location: 'New Delhi, India', details: '73%' },
    { institution: 'Greenway Modern Senior Secondary School, New Delhi', degree: 'Class X (CBSE)', range: '2017', location: 'New Delhi, India', details: '90%' }
  ]
}
