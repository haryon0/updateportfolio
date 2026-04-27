
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

const CertificationItem = ({ name, issuer, year, category, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="group relative p-4 border border-border/40 bg-muted/20 hover:bg-muted/40 transition-all duration-300"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-3.5 h-3.5 text-primary/70" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary/60">{category}</span>
        </div>
        <h4 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
          {name}
        </h4>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[11px] text-muted-foreground font-medium">{issuer}</p>
          <span className="text-[10px] font-mono bg-muted px-1.5 py-0.5 border border-border/40 text-muted-foreground">
            {year}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  if (!resumeData.certifications) return null;

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Professional Certifications</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeData.certifications.map((cert, index) => (
            <CertificationItem
              key={index}
              {...cert}
              delay={0.2 + index * 0.05}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
