"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Let's Build Something Together"
          subtitle="Have a project in mind? We'd love to discuss how MediMarks can help bring it to life."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 focus:border-navy-400 dark:focus:border-navy-500 focus:ring-2 focus:ring-navy-100 dark:focus:ring-navy-700 outline-none transition-all text-sm bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 focus:border-navy-400 dark:focus:border-navy-500 focus:ring-2 focus:ring-navy-100 dark:focus:ring-navy-700 outline-none transition-all text-sm bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 focus:border-navy-400 dark:focus:border-navy-500 focus:ring-2 focus:ring-navy-100 dark:focus:ring-navy-700 outline-none transition-all text-sm bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-600 focus:border-navy-400 dark:focus:border-navy-500 focus:ring-2 focus:ring-navy-100 dark:focus:ring-navy-700 outline-none transition-all text-sm bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" size="md">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-navy-900/50 rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-navy-500 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 dark:text-white text-sm">Location</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{siteConfig.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-navy-500 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 dark:text-white text-sm">Phone</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-navy-500 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 dark:text-white text-sm">Email</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-navy-500 dark:text-blue-300" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 dark:text-white text-sm">Working Hours</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{siteConfig.hours}</p>
                </div>
              </div>
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
