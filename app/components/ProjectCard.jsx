'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = (mouseY - centerY) * 0.1;
    const rotateY = -(mouseX - centerX) * 0.1;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="h-full"
    >
      <div className="relative group h-full overflow-hidden rounded-xl glass hover:shadow-lg hover:shadow-accent-purple/30 transition-all duration-300">
        {/* Image Background */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-dark-text group-hover:text-accent-purple transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-dark-text-secondary text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded bg-dark-bg-secondary text-dark-text-tertiary"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs px-2 py-1 text-dark-text-tertiary">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 items-center">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-accent-cyan hover:text-accent-pink transition-colors text-sm font-semibold"
            >
              <FiExternalLink size={18} />
              Live
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-accent-cyan hover:text-accent-pink transition-colors text-sm font-semibold"
            >
              <FiGithub size={18} />
              Code
            </motion.a>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-accent-purple via-transparent to-accent-cyan" />
      </div>
    </motion.div>
  );
}
