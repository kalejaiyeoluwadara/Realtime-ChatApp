import { motion } from "framer-motion";
import React from "react";

function Wrapper({ children }) {
  return (
    <motion.div
      className="h-auto w-auto"
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "100vw",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Wrapper;
