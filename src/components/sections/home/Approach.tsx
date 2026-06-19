"use client";

import { motion } from "framer-motion";
import { PenTool, Cog, Shield, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Design",
    description: "Transforming ideas into practical engineered solutions.",
    icon: PenTool,
  },
  {
    title: "Manufacturing",
    description: "Precision production using modern fabrication methods.",
    icon: Cog,
  },
  {
    title: "Quality",
    description: "Commitment to reliability, durability, and performance.",
    icon: Shield,
  },
  {
    title: "Growth",
    description: "Continuous investment in new products and opportunities.",
    icon: TrendingUp,
  },
];

export function Approach() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-navy-900 border-b border-gray-100 dark:border-navy-800">
      <Container>
        <SectionHeading
          title="Our Approach"
          subtitle="How we deliver engineering excellence across every project."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-navy-500 dark:text-blue-300" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="h-px bg-gray-200 dark:bg-navy-700 mb-8" />
          <p className="text-gray-400 dark:text-gray-500 text-sm italic">
            From concept to completion — every product reflects our commitment to
            engineering excellence and practical innovation.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
