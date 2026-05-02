'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  activeSection: number;
  sections: { id: string; label: string; }[];
}

export default function MobileNav({ activeSection, sections }: MobileNavProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-surface/80 backdrop-blur-xl border-t border-accent/10 px-2 pb-safe"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto h-20 px-2">
        {sections.map((section, index) => {
          const isActive = activeSection === index;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative flex flex-col items-center justify-center flex-1 min-w-[36px] h-full transition-opacity active:opacity-70 px-1"
            >
              {/* Background Highlight */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-bg"
                    className="absolute inset-x-0.5 h-12 bg-accent/10 rounded-xl -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              {/* Dot indicator */}
              <motion.div 
                animate={{ 
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-secondary)'
                }}
                className={`w-1.5 h-1.5 rounded-full mb-2 transition-colors duration-500`} 
              />
              
              {/* Dynamic Label */}
              <div className="h-4 flex items-center justify-center px-1">
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-[7px] min-[380px]:text-[8px] uppercase tracking-[0.1em] font-bold text-accent whitespace-nowrap block"
                    >
                      {section.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Line Indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobile-active-line"
                  className="absolute bottom-2 w-4 h-[2px] bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
