'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GoldButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'circle' | 'text';
}

export default function GoldButton({ label, onClick, type = 'circle' }: GoldButtonProps) {
  if (type === 'text') {
    return (
      <button 
        onClick={onClick}
        className="flex items-center gap-4 group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent group-hover:pr-2 transition-all duration-300">
          {label}
        </span>
        <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-6 group cursor-pointer"
    >
      <div className="w-20 h-20 rounded-full border border-accent/30 flex items-center justify-center relative group-hover:border-accent transition-colors duration-500">
        <motion.div
           animate={{ x: [0, 5, 0] }}
           transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={28} className="text-accent" />
        </motion.div>
        
        {/* Animated ring */}
        <div className="absolute inset-[-4px] border border-accent/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
      </div>
      <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent opacity-80 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </button>
  );
}
