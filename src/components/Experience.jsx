
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';

const ExperienceItem = ({ title, company, location, period, responsibilities, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8 mb-12 last:mb-0"
  >
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-border/60"></div>
    
    {/* Timeline Marker (Sharp Square) */}
    <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] bg-primary border border-primary-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"></div>

    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
      <div>
        <h3 className="text-xl font-bold text-foreground tracking-tight">{title}</h3>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">{company}</p>
        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
          <span>{location}</span>
        </p>
      </div>
      <span className="text-xs font-mono bg-muted px-2 py-1 border border-border/40 whitespace-nowrap self-start">
        {period}
      </span>
    </div>
    <ul className="space-y-3">
      {responsibilities.map((item, index) => (
        <li key={index} className="text-sm text-muted-foreground flex items-start gap-3 text-justify">
          <span className="w-1 h-1 bg-primary/40 mt-2 flex-shrink-0"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="resume" className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Professional Experience</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        {resumeData.experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            delay={0.2 + index * 0.1}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
