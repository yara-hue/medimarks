"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function ContactMap() {
  const mapQuery = encodeURIComponent(siteConfig.location);

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-navy-800/50">
      <Container>
        <SectionHeading
          title="Our Location"
          subtitle="Visit us at our facility in Al-Khobar."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[21/9] max-h-[400px] rounded-2xl overflow-hidden border border-gray-200/60 dark:border-navy-700 bg-white dark:bg-navy-900"
        >
          <iframe
            title="MediMarks Location"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm rounded-lg px-4 py-2.5 flex items-center gap-2 shadow-sm border border-gray-200/60 dark:border-navy-700">
            <MapPin className="w-4 h-4 text-navy-500 dark:text-navy-200 shrink-0" />
            <span className="text-xs font-medium text-navy-900 dark:text-white">{siteConfig.location}</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
