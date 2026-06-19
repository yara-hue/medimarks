"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white/10 tracking-tight select-none">
              MediMarks
            </h1>
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight select-none">
                MediMarks
              </h1>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-4 text-xs text-gray-500 tracking-[0.3em] uppercase"
          >
            Engineering Solutions
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
