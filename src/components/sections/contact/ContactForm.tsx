"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

const infoCards = [
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Hours", value: siteConfig.hours },
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    console.log("Contact form submission:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-800/50">
      <Container>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <SectionHeading
              title="Send Us a Message"
              subtitle="We typically respond within 24 hours."
              align="left"
            />
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center"
              >
                <Send className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-heading font-bold text-green-800 dark:text-green-300">
                  Message Sent!
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-medium text-navy-500 dark:text-navy-200 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Name *"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange("name")}
                    error={errors.name}
                    required
                  />
                  <Input
                    label="Email *"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange("email")}
                    error={errors.email}
                    required
                  />
                </div>
                <Input
                  label="Subject *"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  error={errors.subject}
                  required
                />
                <Textarea
                  label="Message *"
                  placeholder="Tell us about your project, requirements, or questions..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  error={errors.message}
                  required
                />
                <Button type="submit" size="md" variant="primary" className="w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <SectionHeading
              title="Contact Information"
              subtitle="Reach us through any of these channels."
              align="left"
            />
            <div className="space-y-4">
              {infoCards.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 p-5 transition-colors hover:bg-gray-50 dark:hover:bg-navy-800/50">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-navy-600 dark:text-navy-200" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-900 dark:text-white text-sm">{item.label}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
