'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GoldButton from '../ui/GoldButton';

interface LeasingPath {
  category: string;
  title: string;
  description: string;
  sqFt: string;
}

const paths: LeasingPath[] = [
  {
    category: "Luxury Flagship",
    title: "The Ultimate Statement",
    description: "Position your brand alongside the world's most coveted names in an architectural setting unlike any other.",
    sqFt: "3,000–15,000 sq ft"
  },
  {
    category: "Retail & Mid-Tier",
    title: "High-Traffic Visibility",
    description: "Capture 40 million annual visitors with premium positioning in our high-traffic retail corridors.",
    sqFt: "800–5,000 sq ft"
  },
  {
    category: "Food & Beverage",
    title: "Culinary Destination",
    description: "Join 100+ dining concepts drawing guests who stay longer and spend more.",
    sqFt: "500–8,000 sq ft"
  },
  {
    category: "Pop-Up & Experiential",
    title: "Flexible Activation",
    description: "Test, launch, or activate with flexible short-term formats in the highest-footfall zones.",
    sqFt: "200–2,000 sq ft"
  }
];

export default function Leasing() {
  return (
    <div className="py-32 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          eyebrow="Commercial Opportunity" 
          headline={<>Find Your Place <br /><span className="italic">in the Dream.</span></>}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {paths.map((path, i) => (
            <motion.div
              key={path.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-accent/10 p-10 flex flex-col group hover:border-accent/40 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="mb-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent border border-accent/30 px-4 py-1.5 rounded-full font-bold">
                  {path.category}
                </span>
              </div>
              
              <h3 className="text-3xl mb-4 font-display text-primary group-hover:text-accent transition-colors">
                {path.title}
              </h3>
              
              <p className="text-secondary text-base leading-relaxed mb-8 flex-grow">
                {path.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-8 border-t border-accent/5">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-secondary mb-1">Available Area</span>
                  <span className="font-mono text-accent text-sm">{path.sqFt}</span>
                </div>
                <GoldButton label="Request Information" type="text" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-accent p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 group gold-glow"
        >
          <div className="text-background">
            <h3 className="text-4xl md:text-5xl font-display mb-4">Ready to Secure Your Space?</h3>
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold opacity-80">
              Our leasing team responds within 24 hours.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <button className="flex flex-col items-center group/btn">
              <div className="w-20 h-20 rounded-full border-2 border-background flex items-center justify-center mb-4 bg-background group-hover/btn:bg-transparent transition-all duration-500">
                <motion.div 
                   animate={{ x: [0, 5, 0] }} 
                   transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent group-hover/btn:text-background transition-colors">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.div>
              </div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-background font-bold">
                Begin Leasing Conversation
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
