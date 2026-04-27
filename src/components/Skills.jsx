
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="h-full"
  >
    <h3 className="text-base font-semibold text-foreground mb-3">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-sm text-muted-foreground flex items-start">
          <span className="mr-2 mt-0.5">•</span>
          <span className="leading-relaxed">{skill}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Skills & Competencies</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {resumeData.skills.map((skillGroup, index) => (
            <SkillCategory
              key={index}
              title={skillGroup.category}
              skills={skillGroup.items}
              delay={0.2 + index * 0.05}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
