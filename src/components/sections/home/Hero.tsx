"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14 md:pt-16">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute top-0 right-0 bottom-0 overflow-hidden" style={{ left: "700px" }}>
        <BeforeAfterSlider
          beforeSrc="/images/Gemini_Generated_Image_fcsl4efcsl4efcsl.png"
          afterSrc="/images/Gemini_Generated_Image_7svq3d7svq3d7svq.png"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: "linear-gradient(to right, #0A1628 0%, #0A1628 750px, rgba(10,22,40,0.97) 800px, rgba(10,22,40,0.7) 950px, rgba(10,22,40,0.2) 1200px, transparent 1400px)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/75 to-navy-900/30 z-[2]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-bold text-white leading-snug md:leading-[1.05] tracking-tight"
          >
            Innovation by Design for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              {" "}Healthcare, Infrastructure,
            </span>
            {" "}and Modern Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-gray-300 dark:text-gray-400 leading-relaxed max-w-xl"
          >
            Specialized products engineered for healthcare, infrastructure, and modern spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/solutions" size="lg" className="bg-white text-navy-900 hover:bg-gray-100 dark:bg-white dark:text-navy-900">
              Explore Our Solutions
            </Button>
            <Button href="/contact" size="lg" variant="secondary" className="border-white/40 text-white hover:bg-white/15 dark:border-white/40 dark:text-white">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy-900 to-transparent" />
    </section>
  );
}
