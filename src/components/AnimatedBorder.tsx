"use client";

import { motion } from "framer-motion";

function AnimatedBorder({ timeout }: { timeout?: number }) {
  return (
    <motion.div
      className="border-1 border-t border-gray-300 dark:border-gray-500 mb-6"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: timeout, ease: "easeOut" }}
    ></motion.div>
  );
}
export default AnimatedBorder;
