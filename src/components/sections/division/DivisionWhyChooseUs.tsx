"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getIcon } from "@/lib/icons";

interface Reason {
  title: string;
  description: string;
  icon: string;
}

interface DivisionWhyChooseUsProps {
  title: string;
  subtitle?: string;
  reasons: Reason[];
}

export function DivisionWhyChooseUs({
  title,
  subtitle,
  reasons,
}: DivisionWhyChooseUsProps) {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reasons.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <Card variant="feature" className="p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-navy-600 dark:text-navy-200" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
