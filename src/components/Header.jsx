import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Loader2 } from 'lucide-react';
import { useExportPDF } from '@/hooks/useExportPDF';
import { resumeData } from '@/lib/resumeData';
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  const { exportPDF, isExporting } = useExportPDF();
  const { personal } = resumeData;

  const handleDownload = () => {
    exportPDF('resume-content', `${personal.name} - ${personal.title}.pdf`);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 py-4 border-b border-border/40"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">HY</span>
            </div>
            <span className="text-sm font-semibold tracking-tight hidden sm:block">PORTFOLIO</span>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              {isExporting ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <FileDown className="w-3 h-3" />
              )}
              {isExporting ? 'Generating...' : 'Download Resume'}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;