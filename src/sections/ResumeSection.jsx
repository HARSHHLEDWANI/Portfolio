import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const ResumeSection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="resume" className="bg-light-surface dark:bg-dark-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Resume" subtitle="05. Resume" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary mb-8 max-w-2xl mx-auto">
            View my full resume with detailed experience, skills, and projects. You can open it in Google Drive or download it as a PDF.
          </p>
          <Button
            variant="primary"
            onClick={() => navigate('/resume')}
          >
            Open Resume →
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ResumeSection;

