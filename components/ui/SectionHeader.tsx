'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  headline: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ eyebrow, headline, align = 'left', className = '' }: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: align === 'center' ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`flex items-center gap-4 mb-6 ${align === 'center' ? 'justify-center' : ''}`}
      >
        {align === 'center' && <div className="h-[1px] w-8 bg-accent" />}
        <div className="h-[1px] w-8 bg-accent" />
        <span className="text-accent text-[11px] uppercase tracking-[0.4em] font-medium leading-none">{eyebrow}</span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9]"
      >
        {headline}
      </motion.h2>
    </div>
  );
}
