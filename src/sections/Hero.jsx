import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tags = ['Full-Stack', 'Offline-first', 'AI/ML', 'Node.js', 'Next.js', 'Payments'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-light-border/70 dark:border-dark-border/70 bg-light-surface/80 dark:bg-dark-surface/70 px-4 py-2 shadow-sm backdrop-blur">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-light-textSecondary dark:text-dark-textSecondary">
                Building thoughtful products
              </span>
            </div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-light-text dark:text-dark-text leading-tight"
              >
                Full-stack dev crafting calm, resilient web experiences.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl leading-relaxed"
              >
                I design and build responsive, offline-capable products with clean architecture, careful UX, and a focus on authentication, payments, and real-time data.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="primary" onClick={() => handleScrollTo('#projects')}>
                View Projects
              </Button>
              <Button variant="ghost" onClick={() => navigate('/resume')}>
                View Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-3 py-2 rounded-full border border-light-border/70 dark:border-dark-border/70 bg-light-surface dark:bg-dark-surface text-sm text-light-textSecondary dark:text-dark-textSecondary"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content card */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-light-border/80 dark:border-dark-border/70 bg-light-surface dark:bg-dark-surface shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 rounded-2xl bg-light-accent/90 flex items-center justify-center text-slate-900 font-bold">
                    H
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-light-textSecondary dark:text-dark-textSecondary">
                      Currently building
                    </p>
                    <p className="text-lg font-semibold text-light-text dark:text-dark-text">ReplicaSync</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-light-bg/90 dark:bg-dark-bg/70 border border-light-border/70 dark:border-dark-border/70 text-light-textSecondary dark:text-dark-textSecondary">
                  Offline-first
                </span>
              </div>

              <p className="text-sm md:text-base text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-6">
                Building an offline-first sync engine with deterministic conflict resolution and smooth UX for note-taking across devices.
              </p>

              <div className="space-y-3 text-sm text-light-text dark:text-dark-text">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Field-level merge with LWW strategy to keep devices consistent.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-cyan-300" />
                  <span>Queues ops offline in IndexedDB, syncs to a PostgreSQL backend.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent" />
                  <span>Designed for calm UI with predictable, resilient flows.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Next.js', 'TypeScript', 'IndexedDB', 'PostgreSQL', 'Tailwind'].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-light-bg/90 dark:bg-dark-bg/70 border border-light-border/70 dark:border-dark-border/70 text-light-textSecondary dark:text-dark-textSecondary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

