import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const WorkshopsActivities = () => {
  const activities = [
    'Conducted introductory workshops on C programming and Linux fundamentals covering core concepts and command-line usage.',
    'Volunteered in a robotics workshop for government school students with hands-on basic robotics activities.',
    'Member of the Design Team for the college technical fest, supporting planning and visual design.',
  ];

  return (
    <SectionWrapper id="workshops">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-16 text-center"
        >
          Workshops & Activities
        </motion.h2>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl p-6"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent mt-2" />
              <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {activity}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorkshopsActivities;


