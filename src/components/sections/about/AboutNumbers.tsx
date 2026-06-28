"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: 2015, suffix: "", label: "Founded" },
  { value: 7, suffix: "", label: "Divisions" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Team Members" },
];

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    setCount(0);

    const duration = 2000;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-heading font-bold text-navy-500 dark:text-navy-200 leading-none tabular-nums">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
    </div>
  );
}

export function AboutNumbers() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-navy-800/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16"
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
