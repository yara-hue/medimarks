"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dismiss = () => setIsLoading(false);

    const timer = setTimeout(dismiss, 3200);
    window.addEventListener("load", dismiss);
    window.addEventListener("pageshow", dismiss);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", dismiss);
      window.removeEventListener("pageshow", dismiss);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative px-12 py-10">
            <motion.div
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-navy-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-navy-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-navy-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-navy-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            />

            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white/10 tracking-tight select-none">
                MediMarks
              </h1>
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight select-none">
                  MediMarks
                </h1>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-6 text-xs text-gray-500 tracking-[0.3em] uppercase"
          >
            Engineering Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="mt-2 text-[10px] text-gray-600 tracking-widest uppercase"
          >
            Since 2015
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
