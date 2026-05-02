'use client';

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

export default function Retail() {
  return (
    <div className="py-32 px-10 bg-surface group">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left Side: Content */}
        <div>
          <SectionHeader 
            eyebrow="The Avenue" 
            headline={<>Luxury <br /><span className="italic">Redefined.</span></>} 
            className="mb-12"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <p className="text-secondary text-xl font-light leading-relaxed">
              From flagship boutiques to exclusive limited runs, The Avenue provides a theatrical backdrop for legacy houses including Hermès, Tiffany & Co., and Saint Laurent.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: 'Total Retail Area', value: '3,000,000 SQ FT' },
                { label: 'Category mix', value: '450+ CURATED SHOPS' },
                { label: 'Average Spend', value: '2.4X NATIONAL AVG' }
              ].map((item, i) => (
                <div key={item.label} className="flex justify-between items-end border-b border-accent/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-secondary">{item.label}</span>
                  <span className="font-mono text-accent text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image Grid/Feature */}
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-square bg-background relative overflow-hidden"
          >
            <img 
              src="/assets/images/american_dream_luxury_retail.png" 
              alt="Luxury Retail" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            
            {/* Context tag */}
            <div className="absolute top-10 left-10 p-6 border border-white/10 backdrop-blur-md bg-black/40">
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white">The Avenue • Level 1</span>
            </div>
          </motion.div>

          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
