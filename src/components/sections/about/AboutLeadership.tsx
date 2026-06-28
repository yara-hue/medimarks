"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";

const team = [
  {
    name: "Ahmed Al-Mansouri",
    title: "CEO & Founder",
    bio: "20+ years in manufacturing and engineering. Founded MediMarks in 2015 with a vision for regional manufacturing excellence.",
    image: "",
  },
  {
    name: "Dr. Sara Al-Qahtani",
    title: "Chief Operations Officer",
    bio: "Leads operations across all seven divisions. PhD in Industrial Engineering with extensive experience in manufacturing process optimization.",
    image: "",
  },
  {
    name: "Khalid Al-Rashid",
    title: "Director of Engineering",
    bio: "Oversees product design, R&D, and technical quality. 15 years of experience in mechanical engineering and product development.",
    image: "",
  },
  {
    name: "Layla Al-Harbi",
    title: "Director of Business Development",
    bio: "Drives growth across healthcare, commercial, and government sectors. Expert in B2B partnerships and regional market expansion.",
    image: "",
  },
];

export function AboutLeadership() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-800/50">
      <Container>
        <SectionHeading title="Leadership" subtitle="The team driving MediMarks forward." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <Card className="p-6 text-center h-full">
                <div className="w-24 h-24 mx-auto rounded-full bg-navy-100 dark:bg-navy-700 flex items-center justify-center mb-4">
                  <span className="text-2xl font-heading font-bold text-navy-500 dark:text-navy-200">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-navy-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-navy-500 dark:text-navy-200 font-medium mt-1">
                  {member.title}
                </p>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
