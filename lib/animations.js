// 🕷 SPIDER-VERSE + DOCTOR STRANGE CINEMATIC ANIMATIONS 🕷
// Framer Motion variants for premium web experience

// ⚙️ EASING FUNCTION
const SMOOTH_EASING = [0.22, 1, 0.36, 1]; // Premium easing

// 🌈 CONTAINER ANIMATIONS
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: SMOOTH_EASING,
    },
  },
};

// 🎬 HERO ENTRANCE ANIMATIONS
export const heroTitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: SMOOTH_EASING,
    },
  },
  hover: {
    scale: 1.05,
    textShadow: '0px 0px 20px rgba(255,0,60,0.8)',
  },
};

export const heroSubtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: SMOOTH_EASING,
    },
  },
};

export const heroCTAVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: SMOOTH_EASING,
    },
  },
};

// 🌀 PORTAL ENTRANCE EFFECT
export const portalEntranceVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: SMOOTH_EASING,
    },
  },
};

export const portalPulseVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// 🔴 FADE IN UP (STANDARD REVEAL)
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: SMOOTH_EASING,
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: SMOOTH_EASING },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: SMOOTH_EASING },
  },
};

// 🎯 SLIDE ANIMATIONS
export const slideInFromLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: SMOOTH_EASING },
  },
};

export const slideInFromRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: SMOOTH_EASING },
  },
};

// 🧱 PROJECT CARD ANIMATIONS
export const projectCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: SMOOTH_EASING },
  },
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: '0 0 40px rgba(255,0,60,0.4)',
    transition: { duration: 0.3, ease: SMOOTH_EASING },
  },
  tap: {
    scale: 0.98,
  },
};

export const projectCardHoverVariants = {
  hover: {
    rotateY: 10,
    rotateX: 5,
    scale: 1.03,
    transition: { duration: 0.3, ease: SMOOTH_EASING },
  },
};

// 🌀 GLITCH EFFECT
export const glitchVariants = {
  glitch: {
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// ✨ STAGGERED ANIMATIONS
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: SMOOTH_EASING },
  },
};

// 📝 BUTTON ANIMATIONS
export const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(255,0,60,0.6)',
  },
  tap: {
    scale: 0.98,
  },
};

export const buttonGlowVariants = {
  initial: { 
    boxShadow: '0 0 10px rgba(255,0,60,0.3)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(255,0,60,0.6), 0 0 50px rgba(255,0,60,0.3)',
    transition: { duration: 0.3 },
  },
};

// 📤 SCROLL TRIGGERED ANIMATIONS
export const scrollAnimationSettings = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

// 🌫 SECTION TRANSITION ANIMATIONS
export const sectionEnterVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: SMOOTH_EASING,
    },
  },
};

// 🎞 PAGE TRANSITION ANIMATIONS
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// 🌀 ROTATING ANIMATIONS
export const rotateVariants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// 🫧 FLOATING ANIMATIONS
export const floatVariants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// 💫 PULSE ANIMATIONS
export const pulseVariants = {
  pulse: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// 🔥 ENTRANCE ANIMATIONS FOR TEXT
export const textEnterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: SMOOTH_EASING,
    },
  }),
};

// 🎬 CONTACT FORM ANIMATIONS
export const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: SMOOTH_EASING },
  },
  focus: {
    boxShadow: '0 0 10px rgba(255,0,60,0.3)',
  },
};

// ✅ SUCCESS ANIMATION
export const successVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
