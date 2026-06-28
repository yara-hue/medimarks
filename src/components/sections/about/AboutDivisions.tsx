"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Hospital, Warehouse, Lamp, Sparkles, Cog, Zap, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { divisions } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Hospital, Warehouse, Lamp, Sparkles, Cog, Zap, Shield,
};

export function AboutDivisions() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Our Divisions"
          subtitle="Seven specialized areas of expertise, one engineering standard."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {divisions.map((div) => {
            const Icon = iconMap[div.icon] || Hospital;
            return (
              <motion.div key={div.id} variants={staggerItem}>
                <Link
                  href={div.href}
                  className="group block bg-gray-50 dark:bg-navy-800/50 rounded-xl p-6 border border-gray-200/60 dark:border-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md h-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-100 dark:bg-navy-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-navy-600 dark:text-navy-200" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-navy-900 dark:text-white group-hover:text-navy-500 dark:group-hover:text-blue-300 transition-colors">
                    {div.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {div.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-navy-500 dark:text-navy-200">
                    Learn more
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
