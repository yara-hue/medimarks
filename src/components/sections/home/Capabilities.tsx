"use client";

import { motion } from "framer-motion";
import { Hospital, Warehouse, Lamp, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { divisions } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Hospital,
  Warehouse,
  Lamp,
  Sparkles,
};

export function Capabilities() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Our Areas of Expertise"
          subtitle="Four specialized divisions delivering engineering-driven solutions across multiple industries."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((division, index) => {
            const Icon = iconMap[division.icon] || Hospital;
            return (
              <motion.div
                key={division.id}
                initial={{ y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center mb-5 group-hover:bg-navy-100 dark:group-hover:bg-navy-800 transition-colors">
                    <Icon className="w-6 h-6 text-navy-500 dark:text-navy-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-navy-900 dark:text-white mb-3">
                    {division.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {division.description}
                  </p>
                  <Button
                    href={division.href}
                    variant="ghost"
                    size="sm"
                    className="group/link p-0 text-navy-500 hover:bg-transparent"
                  >
                    <span className="flex items-center gap-2">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
