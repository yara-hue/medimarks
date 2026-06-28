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
  certifications?: string[];
}

export function DivisionCapabilities({
  title = "Technical Capabilities",
  subtitle,
  capabilities,
  certifications,
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

        {certifications && certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white tracking-widest uppercase mb-4 text-center">
              Certifications & Standards
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs text-navy-600 dark:text-navy-200 bg-navy-50 dark:bg-navy-800 px-3 py-1.5 rounded-md font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
