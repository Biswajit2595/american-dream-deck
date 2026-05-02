'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import WhyHere from '@/components/WhyHere';
import Retail from '@/components/Retail';
import Entertainment from '@/components/Entertainment';
import Dining from '@/components/Dining';
import Events from '@/components/Events';
import Leasing from '@/components/modules/Leasing';
import Sponsorship from '@/components/modules/Sponsorship';
import SidebarNav from '@/components/SidebarNav';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'hero', label: 'Arrival' },
    { id: 'why-here', label: 'Destination' },
    { id: 'retail', label: 'Retail' },
    { id: 'entertainment', label: 'Experience' },
    { id: 'dining', label: 'Dining' },
    { id: 'events', label: 'Events' },
    { id: 'leasing', label: 'Leasing' },
    { id: 'sponsorship', label: 'Sponsorship' },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((el, index) => {
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return <div className="bg-background min-h-screen" />;

  return (
    <div className="relative bg-background min-h-screen selection:bg-accent selection:text-background text-primary">
      {/* Film Grain Texture */}
      <div className="film-grain" />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Systems */}
      <SidebarNav activeSection={activeSection} sections={sections} />
      <MobileNav activeSection={activeSection} sections={sections} />

      <main className="relative">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="why-here" className="min-h-screen">
          <WhyHere />
        </section>
        
        <section id="retail" className="min-h-screen">
          <Retail />
        </section>
        
        <section id="entertainment" className="min-h-screen">
          <Entertainment />
        </section>
        
        <section id="dining" className="min-h-screen">
          <Dining />
        </section>
        
        <section id="events" className="min-h-screen">
          <Events />
        </section>

        {/* Phase 2 Expandable Modules */}
        <section id="leasing" className="min-h-screen">
          <Leasing />
        </section>

        <section id="sponsorship" className="min-h-screen">
          <Sponsorship />
        </section>
      </main>

      {/* Luxury Footer */}
      <footer className="py-32 px-10 border-t border-accent/10 bg-surface text-center">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-display mb-8"
          >
            American Dream
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary uppercase tracking-[0.4em] text-[10px]"
          >
            The New Standard of Experience
          </motion.p>
          
          <div className="mt-20 flex flex-wrap justify-center gap-10 text-secondary text-[10px] uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-accent transition-all duration-300">Contact Leasing</a>
            <a href="#" className="hover:text-accent transition-all duration-300">Partnership Inquiries</a>
            <a href="#" className="hover:text-accent transition-all duration-300">Press Bureau</a>
            <a href="#" className="hover:text-accent transition-all duration-300">Privacy & Terms</a>
          </div>
          
          <div className="mt-20 pt-10 border-t border-accent/5 max-w-md mx-auto">
            <p className="text-[9px] text-secondary/40 leading-relaxed uppercase tracking-[0.1em]">
              &copy; 2026 American Dream Mall. East Rutherford, NJ. <br />
              All Rights Reserved. Architectural design by Triple Five Group.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
