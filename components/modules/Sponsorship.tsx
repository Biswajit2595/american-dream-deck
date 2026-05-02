'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import GoldButton from '../ui/GoldButton';

interface SponsorshipTier {
  title: string;
  investment: string;
  benefits: string[];
  isPopular?: boolean;
}

const tiers: SponsorshipTier[] = [
  {
    title: "Presenting Partner",
    investment: "Custom",
    benefits: [
      "Exclusive category rights",
      "Naming rights to key venues",
      "360° media integration",
      "Priority event co-creation"
    ]
  },
  {
    title: "Destination Partner",
    investment: "From $2M/year",
    isPopular: true,
    benefits: [
      "Multi-zone brand presence",
      "Digital + physical integration",
      "Quarterly activation windows",
      "Dedicated brand ambassador program"
    ]
  },
  {
    title: "Activation Partner",
    investment: "From $250K",
    benefits: [
      "Single zone activation",
      "Seasonal campaign windows",
      "Social amplification package",
      "Event co-branding rights"
    ]
  }
];

const audienceStats = [
  { value: "18–44", label: "Primary Audience Age" },
  { value: "$127K", label: "Avg. Household Income" },
  { value: "2.4x", label: "Industry Avg. Dwell Time" },
  { value: "94%", label: "Brand Recall Rate" },
];

export default function Sponsorship() {
  return (
    <div className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader 
          eyebrow="Brand Partnerships" 
          headline={<>Activate Where the <br /><span className="italic">World Watches.</span></>}
          align="center"
          className="mb-24"
        />

        <div className="flex flex-col lg:flex-row gap-8 mb-32 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex-1 flex flex-col p-12 bg-surface border relative transition-all duration-500 ${
                tier.isPopular 
                  ? 'border-accent scale-[1.02] gold-glow z-10' 
                  : 'border-accent/10 hover:border-accent/30'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent px-6 py-1.5 rounded-full">
                  <span className="text-background text-[10px] uppercase tracking-[0.3em] font-bold">Most Popular</span>
                </div>
              )}

              <div className="mb-12">
                <h3 className="text-3xl font-display mb-2">{tier.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-accent font-mono text-sm tracking-widest uppercase">Investment:</span>
                  <span className="text-primary font-medium">{tier.investment}</span>
                </div>
              </div>

              <ul className="space-y-6 mb-16 flex-grow">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-4 items-start text-secondary text-sm">
                    <span className="text-accent flex-shrink-0 mt-1">–</span>
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <GoldButton label="Enquire" type="text" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audience Statistics Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="bg-surface border-y border-accent/10 grid grid-cols-2 md:grid-cols-4"
        >
          {audienceStats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`py-16 px-10 text-center flex flex-col items-center justify-center relative ${
                i < audienceStats.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-12 md:after:w-[1px] md:after:bg-accent/20' : ''
              }`}
            >
              <span className="font-display text-5xl mb-3 text-primary">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
