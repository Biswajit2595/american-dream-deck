"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";

export default function WhyHere() {
  return (
    <div className="py-32 px-10 bg-background relative overflow-hidden group">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        {/* IMAGE SIDE */}
        <div className="lg:w-1/2 relative ">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] overflow-hidden bg-surface relative"
          >
            <Image
              src="/assets/images/american_dream_exterior_night.png"
              alt="American Dream Exterior"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            {/* Overlay border */}
            <div className="absolute inset-4 border border-accent/20 pointer-events-none" />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-10 -right-10 bg-accent p-12 hidden md:block gold-glow"
          >
            <div className="text-background">
              <span className="block text-5xl font-display mb-1">94%</span>
              <span className="block text-[8px] uppercase tracking-[0.3em] font-bold opacity-80">
                Brand Recall
              </span>
            </div>
          </motion.div>
        </div>

        {/* TEXT SIDE */}
        <div className="lg:w-1/2">
          <SectionHeader
            eyebrow="The Strategic Choice"
            headline={
              <>
                A Gravity Well <br />
                <span className="italic">for Global Commerce.</span>
              </>
            }
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-secondary text-lg leading-relaxed">
              Located just 4 miles from Manhattan, American Dream is more than a
              destination—it&apos;s a global platform where the world&apos;s
              most innovative brands activate at a scale impossible anywhere
              else.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <span className="text-accent font-display text-4xl block">
                  127K
                </span>
                <span className="text-secondary text-xs uppercase tracking-widest leading-relaxed">
                  Average household income within the primary trade area.
                </span>
              </div>
              <div className="space-y-4">
                <span className="text-accent font-display text-4xl block">
                  4.5 Hrs
                </span>
                <span className="text-secondary text-xs uppercase tracking-widest leading-relaxed">
                  Average dwell time, significantly higher than industry
                  standard.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
