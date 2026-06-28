"use client";

import { cn } from "@/lib/utils";

interface ProjectsFilterProps {
  divisions: string[];
  industries: string[];
  activeDivision: string;
  activeIndustry: string;
  onDivisionChange: (d: string) => void;
  onIndustryChange: (i: string) => void;
}

export function ProjectsFilter({
  divisions,
  industries,
  activeDivision,
  activeIndustry,
  onDivisionChange,
  onIndustryChange,
}: ProjectsFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {divisions.map((division) => (
          <button
            key={division}
            onClick={() => onDivisionChange(division)}
            className={cn(
              "px-4 py-2 text-sm rounded-lg border transition-colors",
              activeDivision === division
                ? "bg-navy-600 text-white border-navy-600 dark:bg-navy-500 dark:border-navy-500"
                : "bg-white text-gray-600 border-gray-200 hover:border-navy-300 dark:bg-navy-900 dark:text-gray-300 dark:border-navy-700 dark:hover:border-navy-500"
            )}
          >
            {division}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => onIndustryChange(industry)}
            className={cn(
              "px-4 py-2 text-xs rounded-lg border transition-colors font-medium tracking-wide",
              activeIndustry === industry
                ? "bg-navy-100 text-navy-700 border-navy-200 dark:bg-navy-800 dark:text-navy-200 dark:border-navy-600"
                : "bg-transparent text-gray-400 border-gray-200 hover:text-gray-700 hover:border-gray-300 dark:text-gray-500 dark:border-navy-700 dark:hover:text-gray-300"
            )}
          >
            {industry}
          </button>
        ))}
      </div>
    </div>
  );
}
