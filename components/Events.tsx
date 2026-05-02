// 'use client';

// import { motion } from 'framer-motion';
// import { Calendar } from 'lucide-react';
// import SectionHeader from './ui/SectionHeader';
// import GoldButton from './ui/GoldButton';

// export default function Events() {

//   const highlights = [
//     {
//       title: 'Fashion Week Activations',
//       category: 'Live Event',
//       img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
//     },
//     {
//       title: 'NHL Hockey Showcases',
//       category: 'Sports',
//       img: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?auto=format&fit=crop&w=1200&q=80',
//     },
//     {
//       title: 'Luxury Brand Pop-ups',
//       category: 'Retail',
//       img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
//     },
//     {
//       title: 'Global Artist Concerts',
//       category: 'Music',
//       img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
//     },
//   ];

//   return (
//     <div className="py-32 bg-surface overflow-hidden">
//       <div className="max-w-[1440px] mx-auto px-10 mb-20 flex flex-col md:flex-row justify-between items-end gap-12">
//         <SectionHeader
//           eyebrow="Market Activation"
//           headline={<>A Platform for <br /><span className="italic">Cultural Impact.</span></>}
//           className="max-w-2xl"
//         />

//         <div className="flex flex-col items-start gap-8">
//             <p className="text-secondary text-lg max-w-sm">
//                 From full-scale stadium concerts to intimate luxury pop-ups,
//                 our venues are built for the world’s biggest moments.
//             </p>
//             <GoldButton label="Book This Venue" />
//         </div>
//       </div>

//       <div className="relative">
//         <motion.div
//             style={{ x: "-10%" }}
//             className="flex gap-8 px-10"
//         >
//             {highlights.map((h, i) => (
//                 <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: 100 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: i * 0.1 }}
//                     className="min-w-[450px] aspect-[4/3] bg-background relative overflow-hidden group"
//                 >
//                     <img
//                       src={h.img}
//                       alt={h.title}
//                       className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
//                     />
//                     <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
//                         <div>
//                             <span className="text-accent text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">{h.category}</span>
//                             <h3 className="text-2xl font-display">{h.title}</h3>
//                         </div>
//                         <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                             <Calendar size={14} className="text-white" />
//                         </div>
//                     </div>
//                 </motion.div>
//             ))}
//         </motion.div>

//         {/* Horizontal Progress or Gradient? Let's add a subtle edge fade */}
//         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
//         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import GoldButton from "./ui/GoldButton";
import Image from "next/image";

export default function Events() {
  const highlights = [
    {
      title: "Fashion Week Activations",
      category: "Live Event",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "NHL Hockey Showcases",
      category: "Sports",
      img: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Luxury Brand Pop-ups",
      category: "Retail",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Global Artist Concerts",
      category: "Music",
      img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="py-32 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 mb-20 flex flex-col md:flex-row justify-between items-end gap-12">
        <SectionHeader
          eyebrow="Market Activation"
          headline={
            <>
              A Platform for <br />
              <span className="italic">Cultural Impact.</span>
            </>
          }
          className="max-w-2xl"
        />

        <div className="flex flex-col items-start gap-8">
          <p className="text-secondary text-lg max-w-sm">
            From full-scale stadium concerts to intimate luxury pop-ups, our
            venues are built for the world’s biggest moments.
          </p>

          <GoldButton label="Book This Venue" />
        </div>
      </div>

      <div className="relative overflow-x-auto scrollbar-hide">
        {/* draggable row */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-8 px-10 cursor-grab w-max"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="w-[450px] aspect-[4/3] bg-background relative overflow-hidden group shrink-0 rounded-2xl"
            >
              <Image
                src={h.img}
                alt={h.title}
                fill
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />

              <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                <div>
                  <span className="text-accent text-[9px] uppercase tracking-[0.3em] font-bold block mb-2">
                    {h.category}
                  </span>
                  <h3 className="text-2xl font-display">{h.title}</h3>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Calendar size={14} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* edge fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
