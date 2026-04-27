
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Globe, MapPin } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

const Contact = () => {
  const { personal } = resumeData;

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="py-12"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Contact</h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="flex items-start gap-4 p-4 bg-muted/30 border border-border/40"
        >
          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Address</p>
            <p className="text-sm text-foreground">{personal.location}</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }} 
          className="flex items-center gap-4 p-4 bg-muted/30 border border-border/40"
        >
          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Phone / WhatsApp</p>
            <a href={`https://wa.me/${personal.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors hover:underline">
              {personal.phone}
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
          className="flex items-center gap-4 p-4 bg-muted/30 border border-border/40"
        >
          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Email</p>
            <a href={`mailto:${personal.email}`} className="text-sm text-foreground hover:text-primary transition-colors hover:underline">
              {personal.email}
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }} 
          className="flex items-center gap-4 p-4 bg-muted/30 border border-border/40"
        >
          <Linkedin className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">LinkedIn</p>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors hover:underline">
              {personal.linkedin.replace('https://www.', '').replace('https://', '')}
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }} 
          className="flex items-center gap-4 p-4 bg-muted/30 border border-border/40 md:col-span-2"
        >
          <Globe className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Website</p>
            <a href={personal.website} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors hover:underline">
              {personal.website.replace('https://', '')}
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.footer 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.7 }} 
        className="mt-16 pt-8 border-t border-border/60 text-center"
      >
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary/80 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={personal.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary/80 transition-colors">
            <Globe className="w-4 h-4" />
          </a>
        </div>
      </motion.footer>
    </motion.section>
  );
};

export default Contact;
