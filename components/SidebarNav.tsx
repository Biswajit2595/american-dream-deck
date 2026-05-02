'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface SidebarNavProps {
  activeSection: number;
  sections: { id: string; label: string; }[];
}

export default function SidebarNav({ activeSection, sections }: SidebarNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="relative flex items-center group cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => scrollToSection(section.id)}
        >
          {/* Label */}
          <AnimatePresence>
            {(hoveredIndex === index) && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-10 text-[10px] uppercase tracking-[0.3em] font-medium text-accent whitespace-nowrap"
              >
                {section.label}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Dot */}
          <div className="relative flex items-center justify-center w-6 h-6">
            {activeSection === index && (
              <motion.div
                layoutId="active-dot-ring"
                className="absolute inset-0 border border-accent/40 rounded-full"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <motion.div
              animate={{
                scale: activeSection === index ? 1.5 : 1,
                backgroundColor: activeSection === index ? 'var(--color-accent)' : 'var(--color-secondary)'
              }}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
            />
          </div>
        </div>
      ))}
    </nav>
  );
}
