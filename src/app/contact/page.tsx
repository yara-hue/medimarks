import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { ContactMap } from "@/components/sections/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MediMarks for inquiries about medical furniture, storage solutions, decorative lighting, and custom fabrication. We're here to help with your next project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <ContactMap />
    </>
  );
}
