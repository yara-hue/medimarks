"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const timeline = [
  { year: "2015", title: "Founded", description: "Established in Jeddah with a focus on manufacturing medical furniture for regional markets." },
  { year: "2016–2019", title: "Growth & Development", description: "Expanded manufacturing capabilities and product range. Built expertise in fabrication and quality control." },
  { year: "2020–2023", title: "Diversification", description: "Entered additional sectors including storage solutions, decorative lighting, and custom fabrication." },
  { year: "Present", title: "Multi-Division Manufacturer", description: "Operating across four divisions with continued investment in engineering, products, and market expansion." },
];

export function AboutStory() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-navy-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
            className="max-w-3xl mb-20"
          >
            <span className="text-navy-500 dark:text-navy-300 font-medium text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
            From a single vision to
            <span className="block text-navy-500">four specialized divisions</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-navy-700 -translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-right pr-12" : "pl-12"}`}>
                  <span className="font-heading font-bold text-4xl text-navy-200 dark:text-navy-600">{item.year}</span>
                </div>

                <div className="relative flex items-center justify-center shrink-0">
                  <div className="w-8 h-8 rounded-full bg-navy-500 dark:bg-navy-400 border-4 border-white dark:border-navy-900 shadow-md" />
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <span className="md:hidden font-heading font-bold text-lg text-navy-500 dark:text-navy-300">{item.year}</span>
                  <h3 className="mt-1 font-heading font-semibold text-xl text-navy-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
