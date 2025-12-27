import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, href, type = 'button', className = '' }) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent';

  const variants = {
    primary:
      'px-6 py-3 bg-light-accent dark:bg-dark-accent text-[#0B1220] dark:text-[#0B1220] shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary:
      'px-6 py-3 bg-light-surface dark:bg-dark-surface border border-light-border/70 dark:border-dark-border/70 text-light-text dark:text-dark-text hover:-translate-y-0.5 hover:border-light-accent/60 dark:hover:border-dark-accent/60',
    ghost:
      'px-5 py-2.5 text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text border border-transparent hover:border-light-border dark:hover:border-dark-border bg-transparent',
  };

  const buttonClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;

