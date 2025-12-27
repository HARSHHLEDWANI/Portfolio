import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';

const Certifications = () => {
  const certifications = [
    {
      title: 'UX Design Certification',
      issuer: 'Coursera',
    },
    {
      title: 'Fundamentals of JavaScript and DOM',
      issuer: 'Alison',
    },
  ];

  return (
    <SectionWrapper id="certifications">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Certifications" subtitle="07. Certifications" />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-light-accent dark:text-dark-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;

