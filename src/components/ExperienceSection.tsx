import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from './SectionHeading';
import { ExperienceItem } from './ExperienceItem';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="w-full">
      <SectionHeading
        number="02"
        title="Experience"
        subtitle="Work history, production systems engineering, and technical problem-solving."
      />

      <div>
        {experience.map((item, idx) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isLast={idx === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
