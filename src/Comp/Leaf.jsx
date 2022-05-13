import React from "react";
import { motion } from "framer-motion";
const Leaf = ({ style, imageUrl }) => {
  return (
    <motion.div
      initial={{
        y: -1800,
      }}
      animate={{
        y: 0,
        transition: {
          delay: 2.3,
          duration: 1,
          type: "spring",
        },
      }}
      style={style}
    >
      <motion.img
        initial={{
          x: 0,
        }}
        animate={{
          x: [20, 0, 20],
        }}
        transition={{
          delay: 2,
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
        src={imageUrl}
        className="object-contain w-20 h-28"
        alt="leaves"
      ></motion.img>
    </motion.div>
  );
};

export default Leaf;
