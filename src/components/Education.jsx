
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';

const EducationItem = ({ degree, field, school, location, period, gpa, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-6 last:mb-0"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{degree}</h3>
        <p className="text-sm text-muted-foreground">{field}</p>
        <p className="text-sm text-muted-foreground">{school}</p>
        {location && <p className="text-sm text-muted-foreground">{location}</p>}
        {gpa && <p className="text-sm text-muted-foreground mt-1">{gpa}</p>}
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Education</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        {resumeData.education.map((edu, index) => (
          <EducationItem
            key={index}
            {...edu}
            delay={0.2 + index * 0.1}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
