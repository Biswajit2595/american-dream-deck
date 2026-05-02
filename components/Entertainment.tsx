'use client';

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

export default function Entertainment() {
  const attractions = [
    { title: 'DreamWorks Water Park', description: 'North America\'s largest indoor water park.' },
    { title: 'Nickelodeon Universe', description: 'The western hemisphere\'s largest indoor theme park.' },
    { title: 'Big SNOW', description: 'North America\'s first indoor real-snow ski resort.' },
    { title: 'Angry Birds World', description: 'Premier mini-golf and interactive center.' }
  ];

  return (
    <div className="py-32 px-10 bg-background relative group">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-24">
          <SectionHeader 
            eyebrow="Immersive Experiences" 
            headline={<>A Universe of <br /><span className="italic">Entertainment.</span></>} 
            className="flex-1"
          />
          <div className="flex-1">
             <p className="text-secondary text-lg leading-relaxed max-w-xl">
              We&apos;ve integrated global IP with world-first engineering to create an entertainment anchor that draws 40+ million annual visitors who come for the attractions and stay for the retail.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {attractions.map((item, i) => (
             <motion.div
               key={item.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1 }}
               className="p-8 border border-accent/10 bg-surface group hover:border-accent/40 transition-all"
             >
                <div className="w-12 h-[1px] bg-accent mb-6 group-hover:w-20 transition-all" />
                <h3 className="text-xl font-display mb-4">{item.title}</h3>
                <p className="text-secondary text-xs uppercase tracking-widest leading-relaxed opacity-60">
                   {item.description}
                </p>
             </motion.div>
           ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 aspect-[21/9] overflow-hidden bg-surface relative grayscale  group-hover:grayscale-0"
        >
           <img 
              src="/assets/images/american_dream_ski_slope.png" 
              alt="Big SNOW" 
              className="w-full h-full object-cover group-hover:scale-105  transition-all duration-1000"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
           <div className="absolute bottom-10 left-10">
              <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">Big SNOW American Dream • 16 Stories of Real Snow</span>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
