export const projects = [
  {
    title: 'ReplicaSync — Offline-First Sync Engine',
    desc: 'Designing and developing an offline-first notes application with an operation-based synchronization engine that queues create/update/delete operations in IndexedDB and syncs to a PostgreSQL backend. Features field-level merge with deterministic Last-Write-Wins (LWW) resolution, backend versioning APIs, and unit tests that validate conflict-resolution logic under concurrent updates.',
    tech: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'IndexedDB'],
    live: '#',
    repo: '#',
    status: 'Ongoing'
  },
  {
    title: 'SecureFlow — Fraud Detection for Payments',
    desc: 'A fraud detection pipeline that analyzes payment transaction streams, applies anomaly detection to surface suspicious behavior in near-real time, and generates alerts. Prototype exploration of blockchain-backed audit trails and ongoing improvements to models and scalability.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Node.js'],
    live: '#',
    repo: '#',
    status: 'Completed'
  },
  {
    title: 'Zunj Divyang Sanstha — Donations & Volunteer Platform',
    desc: 'Led frontend development to build a responsive site with donation and volunteer management. Integrated Cashfree Payments and secure webhooks, implemented campaign-wise donation tracking, and provided real-time insights for fundraising transparency.',
    tech: ['React.js', 'Cashfree API'],
    live: '#',
    repo: '#',
    status: 'Completed'
  },
  {
    title: 'my personal portfolio',
    desc: 'This portfolio site — built with Next.js and Tailwind CSS, optimized for accessibility, performance, and recruiter-friendly presentation. Includes resume download, case-study style project listings, and a contact form with server-side form handling.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: '#',
    repo: '#',
    status: 'Ongoing'
  }
]
