
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';

const ProjectCard = ({ title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-muted/50 rounded-xl p-6 border border-border/60 hover:shadow-md transition-all duration-200"
  >
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Key Projects</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        <div className="grid gap-4">
          {resumeData.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              delay={0.2 + index * 0.05}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
