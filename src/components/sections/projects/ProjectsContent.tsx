"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsFilter } from "@/components/sections/projects/ProjectsFilter";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { ProjectCTA } from "@/components/sections/projects/ProjectCTA";
import { projects } from "@/data/site";

const allDivisions = [
  "All",
  ...new Set(projects.map((p) => p.division)),
].filter(Boolean) as string[];

const allIndustries = [
  "All",
  ...new Set(projects.map((p) => p.industry)),
].filter(Boolean) as string[];

export function ProjectsContent() {
  const [activeDivision, setActiveDivision] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const divisionMatch = activeDivision === "All" || p.division === activeDivision;
      const industryMatch = activeIndustry === "All" || p.industry === activeIndustry;
      return divisionMatch && industryMatch;
    });
  }, [activeDivision, activeIndustry]);

  return (
    <>
      <ProjectsHero />
      <section className="py-12 md:py-16 bg-white dark:bg-navy-900 border-b border-gray-100 dark:border-navy-800">
        <Container>
          <ProjectsFilter
            divisions={allDivisions}
            industries={allIndustries}
            activeDivision={activeDivision}
            activeIndustry={activeIndustry}
            onDivisionChange={setActiveDivision}
            onIndustryChange={setActiveIndustry}
          />
        </Container>
      </section>
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-navy-900/50">
        <Container>
          <ProjectsGrid projects={filteredProjects} />
        </Container>
      </section>
      <ProjectCTA />
    </>
  );
}
