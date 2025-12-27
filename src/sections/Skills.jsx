import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { getSkills } from '../utils/api';

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await getSkills();
        setSkillCategories(data.categories || []);
        setError(null);
      } catch (err) {
        setError('Failed to load skills');
        console.error(err);
        setSkillCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const defaultSkillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'C++', 'C'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'REST APIs'],
    },
    {
      category: 'Databases & OS',
      skills: ['MySQL', 'MongoDB', 'Linux', 'Ubuntu', 'Windows'],
    },
    {
      category: 'Libraries (ML / Data)',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Google Colab', 'Visual Studio Code'],
    },
    {
      category: 'Core CS',
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Critical Thinking', 'Team Collaboration'],
    },
  ];

  const displayCategories = skillCategories.length > 0 ? skillCategories : defaultSkillCategories;

  if (loading) {
    return (
      <SectionWrapper id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-light-textSecondary dark:text-dark-textSecondary">Loading skills...</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Skills" subtitle="02. Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-xs font-medium text-light-text dark:text-dark-text hover:border-light-accent dark:hover:border-dark-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;

