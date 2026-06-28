"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getIcon } from "@/lib/icons";

interface Industry {
  name: string;
  href: string;
  icon: string;
}

interface DivisionIndustriesProps {
  title?: string;
  subtitle?: string;
  industries: Industry[];
}

export function DivisionIndustries({
  title = "Industries Served",
  subtitle,
  industries,
}: DivisionIndustriesProps) {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {industries.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div key={item.name} variants={staggerItem}>
                <Link
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-xl border border-gray-200/60 dark:border-navy-700 bg-white dark:bg-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-navy-600 dark:text-blue-300" />
                  </div>
                  <span className="font-medium text-sm text-navy-900 dark:text-white">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
