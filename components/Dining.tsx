'use client';

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

export default function Dining() {
  const categories = [
    { label: 'Fine Dining', value: 'White-glove service from Michelin-starred chefs.' },
    { label: 'Casual Bites', value: 'Global fast-casual favorites for high-footfall corridors.' },
    { label: 'Food Hall', value: "The World's largest Kosher food hall and curated markets." },
    { label: 'Specialty', value: 'Dessert boutiques and artisanal coffee experiences.' }
  ];

  return (
    <div className="py-32 px-10 bg-surface group">
       <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left: Stats & Grid */}
        <div className="order-2 lg:order-1">
          <SectionHeader 
            eyebrow="Global Palates" 
            headline={<>A World on <br /><span className="italic">Every Plate.</span></>} 
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-secondary text-[10px] uppercase tracking-[0.3em] mb-4 border-l border-accent/40 pl-4">{cat.label}</div>
                <p className="text-sm leading-relaxed opacity-70">{cat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-accent/10">
             <div className="flex gap-16">
                <div>
                  <span className="block text-4xl font-display text-accent mb-2">100+</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary">Dining Concepts</span>
                </div>
                <div>
                  <span className="block text-4xl font-display text-accent mb-2">2.4x</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary">National Spend Avg.</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Immersive Image Component */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[5/6] bg-background relative overflow-hidden"
          >
             <img 
                src="/assets/images/american_dream_dining_luxury.png" 
                alt="Luxury Dining" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
             />
             {/* Architectural accent */}
             <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 -skew-x-[15deg] translate-x-1/2 pointer-events-none" />
             
             <div className="absolute bottom-12 right-12 text-right">
                <span className="text-white/40 font-mono text-[9px] uppercase tracking-[0.4em]">Curated Culinary • The Avenue</span>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
