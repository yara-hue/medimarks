"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cog, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectOverviewProps {
  challenge: string;
  solution: string;
  result: string;
}

const sections = [
  { key: "challenge", title: "The Challenge", icon: Lightbulb },
  { key: "solution", title: "Our Solution", icon: Cog },
  { key: "result", title: "The Result", icon: Target },
] as const;

export function ProjectOverview({ challenge, solution, result }: ProjectOverviewProps) {
  const content: Record<string, string> = { challenge, solution, result };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {sections.map(({ key, title, icon: Icon }) => (
            <motion.div
              key={key}
              variants={staggerItem}
              className="bg-gray-50 dark:bg-navy-800/50 rounded-xl p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-navy-600 dark:text-blue-300" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-900 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {content[key]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
