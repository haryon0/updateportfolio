
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Experience from '@/components/Experience.jsx';
import Education from '@/components/Education.jsx';
import Skills from '@/components/Skills.jsx';
import Certifications from '@/components/Certifications.jsx';
import Projects from '@/components/Projects.jsx';
import Contact from '@/components/Contact.jsx';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeProvider';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="grain-overlay" aria-hidden="true" />
      <Helmet>
        <title>HARYONO - Senior IT Network Infrastructure</title>
        <meta name="description" content="Professional resume of HARYONO - Senior IT Network Infrastructure with over 10 years of experience in network infrastructure management, security systems, and IT operational support." />
      </Helmet>
      <div className="min-h-screen bg-secondary/30">
        <Header />
        <main id="resume-content" className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="p-8 sm:p-12 bg-card rounded-lg border border-border/60 shadow-sm">
            <Hero />
            <div className="space-y-8 mt-8">
              <Experience />
              <Education />
              <Skills />
              <Certifications />
              <Projects />
              <Contact />
            </div>
          </div>
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
