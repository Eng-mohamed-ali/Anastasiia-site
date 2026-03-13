export const premiumEase = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: premiumEase,
    },
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: premiumEase,
    },
  },
  exit: {
    opacity: 0,
    x: -16,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: premiumEase,
    },
  },
  exit: {
    opacity: 0,
    x: 16,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: premiumEase,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};