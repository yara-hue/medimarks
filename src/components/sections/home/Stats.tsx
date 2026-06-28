"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 7, suffix: "", label: "Specialized Divisions" },
  { value: 200, suffix: "+", label: "Products Manufactured" },
  { value: 50, suffix: "+", label: "Partner Organizations" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    setCount(0);

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
}

function StatCard({ item, index }: { item: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(item.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-heading font-bold text-navy-600 dark:text-navy-200 leading-none tabular-nums">
        {count}{item.suffix}
      </div>
      <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
        {item.label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-navy-900">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((item, index) => (
            <StatCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
