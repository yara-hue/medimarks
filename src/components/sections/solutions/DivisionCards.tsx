"use client";

import { motion } from "framer-motion";
import { ArrowRight, Hospital, Warehouse, Lamp, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { divisions } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Hospital, Warehouse, Lamp, Sparkles,
};

const gradients = [
  "from-navy-900 via-navy-800 to-navy-700",
  "from-navy-800 to-navy-600",
  "from-navy-700 to-navy-500",
  "from-navy-900 via-navy-800 to-slate-800",
];

export function DivisionCards() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          {divisions.map((division, index) => {
            const Icon = iconMap[division.icon] || Hospital;
            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} transition-transform duration-700 group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <Icon className="w-8 h-8 text-white/60 mb-3" />
                    <h3 className="font-heading font-bold text-2xl text-white mb-2">{division.title}</h3>
                    <p className="text-gray-300 text-sm max-w-md mb-5">{division.description}</p>
                    <Button
                      href={division.href}
                      variant="ghost"
                      size="sm"
                      className="self-start text-white/80 hover:text-white p-0"
                    >
                      <span className="flex items-center gap-2">
                        View Division
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
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
