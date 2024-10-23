"use client";

import { Project } from "@/lib/data";
import { ExternalLink, Lock } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  let divClass = "rounded-xl border bg-card text-card-foreground shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
  if (!project.link) divClass = divClass.replace("cursor-pointer", "cursor");
  return (
    <div
      onClick={() => {
        if (project.link)
        window.open(project.link);
        else 
        null;
      }}
      className={divClass}
    >
      <div className="space-y-2 p-6">
        <div className="flex space-x-1">
          <h3 className="font-semibold leading-none tracking-tight">
            {project.title}
          </h3>
          {(project.link) ? <ExternalLink height={15} width={15} /> : <Lock height={15} width={15} />}
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-opacity-10 rounded-full border border-opacity-20"
            >
              {tag}
            </span>
          ))}
          </div>
      </div>
    </div>
  );
}
