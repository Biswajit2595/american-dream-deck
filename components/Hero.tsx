"use client";

import { motion } from "framer-motion";
import StatItem from "./ui/StatItem";
import GoldButton from "./ui/GoldButton";

export default function Hero() {
  const stats = [
    { value: "3M", label: "Sq Ft Luxury Space" },
    { value: "40M+", label: "Annual Visitors" },
    { value: "500+", label: "Global Brands" },
    { value: "$5B", label: "Total Investment" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between py-24 text-center px-4 overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover brightness-[0.35]"
          poster="/assets/images/american_dream_exterior_night.png"
        >
          <source src="/assets/video/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
      </div>

      {/* EYEBROW & MAIN CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto z-10 w-full">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] w-8 bg-accent" />
          <span className="text-accent text-[11px] uppercase tracking-[0.4em] font-medium">
            East Rutherford, New Jersey
          </span>
          <div className="h-[1px] w-8 bg-accent" />
        </div>

        <motion.h1
          initial={{ opacity: 0.1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[100px] lg:text-[130px] leading-[0.85] mb-8 max-w-5xl mx-auto"
        >
          Where 40 Million <br />
          <span className="italic">Visitors Choose to Be</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-16"
        >
          North America&apos;s premier destination for luxury retail, global
          dining, and world-class entertainment at an unprecedented scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <GoldButton label="Discover the Dream" />
        </motion.div>
      </div>

      {/* Hero Stats - Fixed Positioning & Spacing */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-accent/20">
          {stats.map((stat, i) => (
            <StatItem key={i} index={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 hidden xl:flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent"
        />
        <span className="mt-4 text-[9px] uppercase tracking-[0.3em] text-accent rotate-90 origin-right whitespace-nowrap">
          Scroll to explore
        </span>
      </div>
    </div>
  );
}
