"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Award, FileCheck, CheckCircle } from "lucide-react";

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management", icon: Award },
  { name: "ISO 13485", description: "Medical Devices", icon: Shield },
  { name: "CE Marking", description: "European Compliance", icon: FileCheck },
  { name: "SASO", description: "Saudi Standards", icon: CheckCircle },
];

export function TrustBar() {
  return (
    <section className="py-10 md:py-14 border-y border-gray-100 dark:border-navy-800 bg-gray-50/50 dark:bg-navy-900/30">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-navy-500 dark:text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-navy-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
