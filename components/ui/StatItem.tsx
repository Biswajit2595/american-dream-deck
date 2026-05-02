'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  index?: number;
  key?: React.Key;
}

export default function StatItem({ value, label, size = 'md', index = 0 }: StatItemProps) {
  const sizes = {
    sm: 'text-3xl',
    md: 'text-5xl md:text-6xl',
    lg: 'text-7xl md:text-8xl'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      <span className={`${sizes[size]} font-display text-accent mb-2 tracking-tighter`}>
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium leading-relaxed max-w-[120px]">
        {label}
      </span>
    </motion.div>
  );
}
