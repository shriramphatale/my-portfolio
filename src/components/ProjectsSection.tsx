import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from './SectionHeading';
import { ProjectItem } from './ProjectItem';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="w-full">
      <SectionHeading
        number="03"
        title="Selected Projects"
        subtitle="Full-stack web applications, vector search architectures, and AI product implementations."
      />

      <div>
        {projects.map((project, idx) => (
          <ProjectItem
            key={project.id}
            project={project}
            isLast={idx === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
