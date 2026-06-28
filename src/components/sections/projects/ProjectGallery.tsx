"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title="Project Gallery" subtitle="Visual highlights from this project." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={i === 0 && images.length > 2 ? "md:col-span-2" : ""}
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-navy-800">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url("${img}")` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
