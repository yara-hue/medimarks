"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/data/site";

const contactDetails = [
  { icon: MapPin, title: "Location", value: siteConfig.location },
  { icon: Phone, title: "Phone", value: siteConfig.phone },
  { icon: Mail, title: "Email", value: siteConfig.email },
  { icon: Clock, title: "Working Hours", value: siteConfig.hours },
];

export function ContactSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Let's Build Something Together"
          subtitle="Have a project in mind? We'd love to discuss how MediMarks can help bring it to life."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label="Full Name" placeholder="Your name" required />
                <Input label="Email Address" type="email" placeholder="your@email.com" required />
              </div>
              <Input label="Subject" placeholder="How can we help?" />
              <Textarea label="Message" placeholder="Tell us about your project..." rows={4} />
              <Button type="submit" size="md">Send Message</Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-navy-900/50 rounded-2xl p-8 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-navy-500 dark:text-navy-200" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-6 rounded-2xl border border-gray-200/60 dark:border-navy-700">
              <div className="aspect-[16/9] bg-gray-100 dark:bg-navy-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-300 dark:text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 dark:text-gray-500 text-xs">Map Placeholder</p>
                  <p className="text-gray-300 dark:text-gray-400 text-[10px] mt-1">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
