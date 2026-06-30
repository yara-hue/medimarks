"use client";

import { motion } from "framer-motion";
import { Hospital, Warehouse, Lamp, Sparkles, Cog, Zap, Shield, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { divisions } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Hospital,
  Warehouse,
  Lamp,
  Sparkles,
  Cog,
  Zap,
  Shield,
};

const cardImages: Record<string, string> = {
  "medical-furniture": "/images/products/Medical Furniture/Refractive unit Model T3000/Refractive Unit Model T3000.jpg",
  "storage-solutions": "/images/products/product-shelf-model-1.jpg",
  "decorative-light-poles": "/images/products/product-garden-light-pole.jpg",
  "art-sculptures": "/images/products/product-star-alliance-2.jpg",
  "automation": "/images/products/Automation/4 Axis CNC Router Machine 1530.jpg",
  "electrical-enclosures": "/images/products/Electrical Enclosures/Electrical Box 1.jpg",
  "fire-resistant-doors": "/images/products/Fire Resistant Metal Doors/MH.Door 100x220.jpg",
};

const cardGradients: Record<string, string> = {
  "medical-furniture": "from-navy-900/85 via-navy-800/80 to-navy-700/75",
  "storage-solutions": "from-navy-800/85 to-navy-600/75",
  "decorative-light-poles": "from-navy-700/85 to-navy-500/75",
  "art-sculptures": "from-navy-900/85 via-navy-800/80 to-slate-800/75",
  "automation": "from-navy-900/85 via-navy-700/80 to-slate-700/75",
  "electrical-enclosures": "from-navy-800/85 to-navy-500/75",
  "fire-resistant-doors": "from-navy-900/85 via-navy-800/80 to-navy-600/75",
};

export function Capabilities() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Our Areas of Expertise"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((division, index) => {
            const Icon = iconMap[division.icon] || Hospital;
            const bgImage = cardImages[division.id];
            const gradient = cardGradients[division.id];
            return (
              <motion.div
                key={division.id}
                initial={{ y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative rounded-xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30">
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-125 blur-3xl opacity-20"
                    style={{ backgroundImage: `url("${bgImage}")` }}
                  />
                  <img
                    src={bgImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                      maskComposite: "intersect",
                      WebkitMaskComposite: "source-in",
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-3 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-white mb-2">
                      {division.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4">
                      {division.description}
                    </p>
                    <Button
                      href={division.href}
                      variant="ghost"
                      size="sm"
                      className="group/link p-0 text-white/80 hover:text-white hover:bg-transparent self-start"
                    >
                      <span className="flex items-center gap-2">
                        Explore
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
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
