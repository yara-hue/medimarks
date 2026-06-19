"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featured = [
  {
    title: "Medical Furniture",
    description:
      "Our flagship division — precision-engineered medical equipment designed for clinics, hospitals, and healthcare professionals who demand reliability.",
    href: "/solutions/medical-furniture",
    size: "large",
    gradient: "from-navy-900 via-navy-800 to-navy-700",
    accent: "bg-navy-500",
  },
  {
    title: "Storage Solutions",
    description:
      "Engineered storage systems for commercial and industrial environments. Functional, durable, and adaptable shelving solutions.",
    href: "/solutions/storage-solutions",
    size: "small",
    gradient: "from-navy-800 to-navy-600",
    accent: "bg-navy-400",
  },
  {
    title: "Decorative Light Poles",
    description:
      "Architectural lighting solutions for urban and public spaces. Combining functional illumination with elegant design.",
    href: "/solutions/decorative-light-poles",
    size: "small",
    gradient: "from-navy-700 to-navy-500",
    accent: "bg-navy-400",
  },
  {
    title: "Art & Sculptures",
    description:
      "Custom artistic fabrication and decorative engineering solutions for public and private spaces.",
    href: "/solutions/art-sculptures",
    size: "large",
    gradient: "from-navy-900 via-navy-800 to-slate-800",
    accent: "bg-navy-500",
  },
];

export function FeaturedDivisions() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Our Divisions"
          subtitle="Four specialized areas of expertise, one engineering standard."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item, index) => {
            const isLarge = item.size === "large";
            return (
              <motion.div
                key={item.title}
                initial={{ y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isLarge ? "md:col-span-2" : ""}
              >
                <Link
                  href={item.href}
                  className={`group relative block rounded-2xl overflow-hidden ${
                    isLarge ? "min-h-[320px] md:aspect-[4/1] md:min-h-0" : "aspect-[4/3] md:aspect-[3/2]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div
                      className={`inline-block w-12 h-1 rounded-full ${item.accent} mb-4`}
                    />
                    <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-3">
                      {item.title}
                    </h3>
                    <p className={`text-gray-300 dark:text-gray-400 leading-relaxed max-w-xl ${isLarge ? "" : "text-sm"}`}>
                      {item.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors text-sm font-medium">
                      Explore Division
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
