import type { Metadata } from "next";
import { ProjectsContent } from "@/components/sections/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore MediMarks portfolio — healthcare facilities, infrastructure, commercial spaces, and custom fabrication projects across the Middle East and Africa.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
