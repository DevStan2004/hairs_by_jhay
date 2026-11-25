"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#f4ebe1] pb-20 pt-32 font-[family-name:var(--font-poppins)] text-[#4a0e0e] md:pb-32 md:pt-40">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[72px]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8b1a1a]">
              [ Get In Touch ]
            </span>
          </div>

          <div className="relative w-fit">
            <h1 className="mb-6 text-[100px] font-bold uppercase leading-none tracking-tighter md:text-[160px] lg:text-[200px]">
              Contact
            </h1>
            <div className="absolute bottom-[35%] left-[22%] hidden h-2.5 w-2.5 bg-[#8b1a1a] md:block" />
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-[#4a0e0e]/80 md:text-xl">
            From bookings to general enquiries — our friendly team is available every day across all of our channels.
          </p>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex h-12 items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
                Explore services <ArrowRight size={16} />
              </button>
              <button className="flex h-12 items-center gap-2 bg-white px-6 text-sm font-semibold text-[#4a0e0e] transition-colors hover:bg-gray-100">
                Our stylists <ArrowRight size={16} />
              </button>
            </div>

            <div className="hidden flex-col items-center gap-2 md:flex">
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#4a0e0e]">
                Scroll Down <ArrowDown size={16} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}