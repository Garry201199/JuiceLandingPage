
export const fadeIn = (direction = "up" | "down" , delay) => ({
  initial: {
    y: direction === "up" ? 60 : -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1,
      ease: "easeInOut",
      delay:  delay || 0
    },
  },
});

export const staggeredContainer = (variants) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
});

export const BootleContainer = (variants) => ({
    initial: {
        y:-1000
    },
    animate: {
        y:0,
      transition: {
        delay:2.6,
        duration:0.8,
        type:'spring'
      },
    },
  });

  export const LeavesContainer = () => ({
    initial: {},
    animate: {
      transition: {
        delayChildren: 3,
        staggerChildren: 0.2,
      },
    },
  });

  export const LeafWrapper = () => ({
    initial: {
      y:-800
    },
    animate: {
      y:0,
      transition: {
    
        duration: 0.5,
        type:'spring'
      },
    },
  });