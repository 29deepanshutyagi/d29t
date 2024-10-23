"use client";

import { Project, projects } from "@/lib/data";
import ProjectShowcase from "@/components/project-showcase";

// Function to handle hash change
const handleHashChange = () => {
  if (window.location.hash === "#projects") {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.classList.add("glow-border");
      setTimeout(() => {
        projectsSection.classList.remove("glow-border");
      }, 3000); // Remove the glow effect after 3 seconds
    }
  }
};

// Add event listener for hash changes
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", handleHashChange);
  // Check if the current hash is #projects on initial load
  handleHashChange();
}

export default function Projects() {
  return (
    <section id="projects" key="projects">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div id="projects-section" className="mt-5 rounded-xl bg-card text-card-foreground shadow">
        <div className="space-y-5 mt-5">
          {projects.map((project: Project) => (
            <ProjectShowcase key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
