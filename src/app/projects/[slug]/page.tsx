import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/site";
import { ProjectDetailHero } from "@/components/sections/projects/ProjectDetailHero";
import { ProjectOverview } from "@/components/sections/projects/ProjectOverview";
import { ProjectGallery } from "@/components/sections/projects/ProjectGallery";
import { ProjectProducts } from "@/components/sections/projects/ProjectProducts";
import { ProjectTestimonial } from "@/components/sections/projects/ProjectTestimonial";
import { ProjectRelated } from "@/components/sections/projects/ProjectRelated";
import { ProjectCTA } from "@/components/sections/projects/ProjectCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) notFound();

  const relatedProjects = (project.relatedSlugs || [])
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean) as Project[];

  return (
    <>
      <ProjectDetailHero
        title={project.title}
        client={project.client}
        industry={project.industry}
        division={project.division}
        location={project.location}
        heroImage={project.images[0] || ""}
      />
      <ProjectOverview
        challenge={project.challenge}
        solution={project.solution}
        result={project.result}
      />
      <ProjectGallery images={project.images} title={project.title} />
      <ProjectProducts divisionIds={project.productsUsed || []} />
      {project.testimonial && (
        <ProjectTestimonial
          quote={project.testimonial.quote}
          author={project.testimonial.author}
          role={project.testimonial.role}
        />
      )}
      <ProjectRelated projects={relatedProjects} />
      <ProjectCTA />
    </>
  );
}
