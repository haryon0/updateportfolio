
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[80px] h-[32px] border border-border/40 bg-muted/20" />;
  }

  return (
    <div className="flex items-center border border-border/40 bg-muted/20 p-0.5 relative">
      <button
        onClick={() => setTheme('light')}
        className={`relative z-10 p-1.5 transition-colors ${
          theme === 'light' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Light theme"
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`relative z-10 p-1.5 transition-colors ${
          theme === 'dark' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Dark theme"
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
      
      {/* Slider Background */}
      <div 
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-primary transition-all duration-300 ease-out ${
          theme === 'light' ? 'left-0.5' : 'left-[50%]'
        }`}
      />
    </div>
  );
};

export default ThemeToggle;
