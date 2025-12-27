import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const quickInfo = [
    { label: 'Education', value: 'B.Tech CSE, SIT Pune (2023–2027)' },
    { label: 'Location', value: 'India' },
    { label: 'Focus', value: 'Full-Stack, Problem Solving, Systems Design' },
  ];

  return (
    <SectionWrapper id="about" className="bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" subtitle="01. About" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              Computer Science undergraduate focused on building responsive, offline-ready, and secure web experiences. I work across the stack with React/Next.js, Node.js, and databases, and I pay close attention to authentication, payments, and real-time data flows.
            </p>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              I’m actively strengthening data structures, backend architecture, and scalable design while shipping projects that solve practical problems—like offline-first syncing, fraud detection, and donation platforms.
            </p>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
              I enjoy collaborating, running workshops, and explaining concepts clearly so teams can move faster together.
            </p>
          </motion.div>

          {/* Right side - Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-6">
              Quick Info
            </h3>
            <div className="space-y-4">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex justify-between items-center py-3 border-b border-light-border dark:border-dark-border last:border-0"
                >
                  <span className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary">
                    {info.label}
                  </span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                    {info.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

