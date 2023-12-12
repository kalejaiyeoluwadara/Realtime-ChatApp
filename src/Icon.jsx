import React from 'react';
import { motion } from 'framer-motion';

const Icon = () => {
  const iconPath =
    'M10 1 L2 10 L10 19 L18 10 L10 1 Z M10 4 L6 10 L10 16 L14 10 L10 4 Z';

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="50"
      height="50"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    >
      <motion.path fill="#0077cc" d={iconPath} />
    </motion.svg>
  );
};

export default Icon;
