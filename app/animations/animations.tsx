export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.65, 0, 0.35, 1],
      // Se redujo a lo mínimo para un "pop-in" casi instantáneo
      duration: 0.15,
    },
  },
};

export const imageAnimation = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.4,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: `0em`,
    transition: {
      // Retardo y duración casi nulos para la imagen
      delay: 0.15,
      duration: 0.2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      // Retardo entre hijos casi imperceptible
      delayChildren: 0.05,
      staggerChildren: 0.01,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // Retardo y duración mínimos
      delay: 0.1,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 0.15,
    },
  },
};

export const wordAnimation2 = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // Duración ultra-corta
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 0.15,
    },
  },
};

export const bodyAnimation = {
  initial: {
    opacity: 0,
    y: `1em`,
  },
  animate: {
    opacity: 1,
    y: `0em`,
    transition: {
      // Retardo y duración casi nulos
      delay: 0.1,
      duration: 0.2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};