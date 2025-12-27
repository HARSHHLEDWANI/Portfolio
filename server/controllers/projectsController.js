export const getProjects = (req, res) => {
  const projects = [
    {
      title: 'ReplicaSync – Offline-First Sync Engine',
      description: 'Offline-first notes app with operation-based sync, conflict resolution, and eventual consistency.',
      bullets: [
        'Built with Next.js (App Router), TypeScript, Tailwind, and IndexedDB for full CRUD offline.',
        'Queues local operations and syncs to a PostgreSQL-backed backend with versioning.',
        'Field-level merge plus deterministic LWW strategy to resolve conflicts across devices.',
      ],
      tags: ['Next.js', 'TypeScript', 'IndexedDB', 'PostgreSQL', 'Sync'],
      status: 'in-progress',
    },
    {
      title: 'SecureFlow – Fraud Detection System',
      description: 'Fraud detection for digital payments combining anomaly detection with transparent records.',
      bullets: [
        'Processes transactions to spot suspicious patterns and trigger near real-time alerts.',
        'Explores blockchain concepts to improve transparency and immutability of transaction records.',
        'Iterating on detection strategies, model optimization, and scalability improvements.',
      ],
      tags: ['Machine Learning', 'Blockchain', 'Fintech', 'Security'],
      status: 'in-progress',
    },
    {
      title: 'E-commerce CRUD App',
      description: 'A basic full-stack store built to learn React and Node, covering product CRUD and ordering.',
      bullets: [
        'Product catalog with add/edit/delete plus simple image handling.',
        'Cart and checkout flow that creates orders and tracks status.',
        'REST APIs with Node/Express + MongoDB; React frontend for admin and shopper views.',
      ],
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CRUD'],
      status: 'completed',
    },
    {
      title: 'Website for Zunj Divyang Sanstha',
      description: 'Donation and volunteer management site for an NGO supporting differently-abled individuals.',
      bullets: [
        'Led React frontend to deliver responsive donation and volunteer flows.',
        'Integrated Cashfree Payments API and webhooks for secure online donations.',
        'Added campaign-wise donation tracking for transparency and real-time insights.',
      ],
      tags: ['React', 'Payments Integration', 'NGO', 'Frontend'],
      status: 'completed',
    },
  ];

  res.json(projects);
};


