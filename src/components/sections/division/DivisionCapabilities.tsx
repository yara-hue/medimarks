"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getIcon } from "@/lib/icons";

interface Capability {
  title: string;
  description: string;
  icon: string;
}

interface DivisionCapabilitiesProps {
  title?: string;
  subtitle?: string;
  capabilities: Capability[];
}

export function DivisionCapabilities({
  title = "Technical Capabilities",
  subtitle,
  capabilities,
}: DivisionCapabilitiesProps) {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {capabilities.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-navy-600 dark:text-navy-200" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
