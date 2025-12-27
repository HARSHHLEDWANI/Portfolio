import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { getProjects } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default projects used when API fails or returns empty
  const defaultProjects = [
    {
      title: 'ReplicaSync – Offline-First Sync Engine',
      status: 'in-progress',
      description: 'Offline-first notes app with an operation-based sync engine and conflict resolution across devices.',
      bullets: [
        'Built with Next.js (App Router), TypeScript, Tailwind, and IndexedDB for full CRUD without network connectivity.',
        'Queueing local create/update/delete ops and syncing to a PostgreSQL-backed backend with versioning.',
        'Field-level merge plus deterministic Last-Write-Wins strategy to resolve conflicts and ensure eventual consistency.',
      ],
      tags: ['Next.js', 'TypeScript', 'IndexedDB', 'PostgreSQL', 'Sync'],
    },
    {
      title: 'SecureFlow – Fraud Detection System',
      description: 'Fraud detection for digital payments combining anomaly detection with transparent record keeping.',
      bullets: [
        'Processes transaction data to spot suspicious patterns and trigger near real-time alerts.',
        'Explores blockchain concepts to improve transparency and immutability of transaction records.',
        'Iterating on detection strategies, model optimization, and scalability improvements.',
      ],
      tags: ['Machine Learning', 'Blockchain', 'Fintech', 'Security'],
    },
    {
      title: 'E-commerce CRUD App',
      description: 'A basic full-stack store built to learn React and Node, with complete product CRUD and ordering flow.',
      bullets: [
        'Created product catalog with add, edit, and delete actions plus simple image support.',
        'Built cart and checkout flow with order creation and status tracking.',
        'Implemented REST APIs with Node/Express and a MongoDB store; React frontend for admin + shopper views.',
      ],
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'CRUD'],
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
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        // Use API data if present, otherwise fallback to defaults
        setProjects(data && data.length > 0 ? data : defaultProjects);
        setError(null);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
        // Fallback to default data so the UI still renders projects
        setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <SectionWrapper id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-light-textSecondary dark:text-dark-textSecondary">Loading projects...</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  if (error && projects.length === 0) {
    return (
      <SectionWrapper id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-light-textSecondary dark:text-dark-textSecondary">{error}</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  // Use API data if available, otherwise fallback to default
  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <SectionWrapper id="projects" className="bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Projects" subtitle="03. Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                  {project.title}
                </h3>
                {project.status === 'in-progress' && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
                    Ongoing
                  </span>
                )}
              </div>

              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.bullets && project.bullets.length > 0 && (
                <ul className="space-y-2 mb-4 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {project.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span className="text-light-accent dark:text-dark-accent mt-1.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-light-border dark:border-dark-border">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-light-surface dark:bg-dark-surface text-light-textSecondary dark:text-dark-textSecondary border border-light-border dark:border-dark-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;

