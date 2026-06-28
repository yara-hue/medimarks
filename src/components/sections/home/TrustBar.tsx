"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const trustItems = [
  { number: "2015", label: "Founded" },
  { number: "7", label: "Divisions" },
  { number: "100+", label: "Team Members" },
  { number: "500+", label: "Projects Delivered" },
];

export function TrustBar() {
  return (
    <section className="py-10 md:py-14 border-y border-gray-100 dark:border-navy-800 bg-gray-50/50 dark:bg-navy-900/30">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-xl text-navy-900 dark:text-white">
                {item.number}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
