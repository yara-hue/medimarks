import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/Hero";
import { ContactFormSection } from "@/components/sections/contact/FormSection";
import { ContactFAQ } from "@/components/sections/contact/FAQ";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MediMarks for inquiries about medical furniture, storage solutions, decorative lighting, and custom fabrication. We're here to help with your next project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactFAQ />
    </>
  );
}
