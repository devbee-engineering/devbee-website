// src/motionVariants.js

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    x: -80,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};
