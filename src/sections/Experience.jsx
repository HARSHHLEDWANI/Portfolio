import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { getEducation } from '../utils/api';

const Experience = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        const data = await getEducation();
        setEducation(data);
      } catch (err) {
        console.error(err);
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
    },
    {
      institution: 'Greenway Modern Sr. Sec. School, New Delhi',
      degree: '12th CBSE',
      duration: 'Score: 73%',
    },
    {
      institution: 'Symbiosis Institute of Technology, Pune',
      degree: 'B.Tech CSE',
      duration: 'In progress',
    },
  ];

  const displayEducation = education.length > 0 ? education : defaultEducation;

  const activities = [
    {
      title: 'Workshops on C Programming & Linux',
      description: 'Ran introductory sessions covering core C concepts, command-line usage, and problem-solving approaches.',
      type: 'Workshop',
    },
    {
      title: 'Robotics Workshop for School Students',
      description: 'Volunteered to introduce robotics fundamentals and hands-on activities to government school students.',
      type: 'Volunteering',
    },
    {
      title: 'Design Team – College Technical Fest',
      description: 'Contributed to visual design and coordination for the college technical festival.',
      type: 'Leadership',
    },
  ];

  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Experience & Activities" subtitle="04. Experience" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
              Education
            </h3>
            <div className="space-y-6 relative pl-8 border-l-2 border-light-border dark:border-dark-border">
              {displayEducation.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-11 w-4 h-4 rounded-full bg-light-accent dark:bg-dark-accent border-4 border-light-bg dark:border-dark-bg" />
                  <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-light-accent dark:text-dark-accent mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
                      {edu.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
              Activities
            </h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">
                      {activity.title}
                    </h4>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-light-bg dark:bg-dark-bg text-light-textSecondary dark:text-dark-textSecondary border border-light-border dark:border-dark-border">
                      {activity.type}
                    </span>
                  </div>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
