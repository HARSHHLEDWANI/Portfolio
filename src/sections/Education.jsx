import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { getEducation } from '../utils/api';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        const data = await getEducation();
        setEducation(data);
        setError(null);
      } catch (err) {
        setError('Failed to load education');
        console.error(err);
        // Fallback to default data
        setEducation([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  const defaultEducation = [
    {
      institution: 'Greenway Modern Sr. Sec. School, New Delhi',
      degree: '10th CBSE',
      duration: 'Score: 90%',
      location: 'Completed',
    },
    {
      institution: 'Greenway Modern Sr. Sec. School, New Delhi',
      degree: '12th CBSE',
      duration: 'Score: 73%',
      location: 'Completed',
    },
    {
      institution: 'Symbiosis Institute of Technology, Pune',
      degree: 'B.Tech CSE',
      duration: 'In progress',
      location: '',
    },
  ];

  // Use API data if available, otherwise fallback to default
  const displayEducation = education.length > 0 ? education : defaultEducation;

  if (loading) {
    return (
      <SectionWrapper id="education" className="bg-light-surface dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-light-textSecondary dark:text-dark-textSecondary">Loading education...</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="education" className="bg-light-surface dark:bg-dark-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-16 text-center"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {displayEducation.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-light-text dark:text-dark-text mb-2">
                {edu.institution}
              </h3>
              <p className="text-lg text-light-accent dark:text-dark-accent mb-2">
                {edu.degree}
              </p>
              <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                {edu.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;

