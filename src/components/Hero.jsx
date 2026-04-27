
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Globe } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const { personal } = resumeData;

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-3 gap-x-12 gap-y-8 items-start"
    >
      <div className="relative md:col-span-1">
        <motion.div 
          variants={itemVariants} 
          className="aspect-square overflow-hidden border-2 border-primary/20 bg-muted grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
        >
           <img alt={`Professional portrait of ${personal.name}, ${personal.title} specialist`} className="w-full h-full object-cover object-top" src={personal.portraitUrl} />
        </motion.div>
      </div>

      <div className="md:col-span-2 flex flex-col justify-center h-full">
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
          {personal.name}
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-2 text-lg text-muted-foreground">
          {personal.title}
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-6 text-sm text-muted-foreground leading-relaxed text-justify">
          <p>
            {personal.summary}
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;
