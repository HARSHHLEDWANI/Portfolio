import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-3"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-light-accent dark:bg-dark-accent shadow-[0_0_0_6px_rgba(14,165,233,0.12)]" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-light-textSecondary dark:text-dark-textSecondary">
          {subtitle || title}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-light-border/80 via-light-border/40 to-transparent dark:from-dark-border/80 dark:via-dark-border/40" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-light-text dark:text-dark-text leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;


