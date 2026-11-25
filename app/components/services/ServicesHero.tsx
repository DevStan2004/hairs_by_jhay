"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function ServicesHero() {
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
              [ What We Offer ]
            </span>
          </div>

          <h1 className="mb-6 text-[100px] font-bold uppercase leading-none tracking-tighter md:text-[160px] lg:text-[200px]">
            Services
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[#4a0e0e]/80 md:text-xl">
            Every service at Hairs by Jhay is a personalised experience designed
            around your hair type, goals, and lifestyle always.
          </p>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex h-12 items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
                Explore services <ArrowRight size={16} />
              </button>
              <button className="flex h-12 items-center gap-2 bg-white px-6 text-sm font-semibold text-[#4a0e0e] transition-colors hover:bg-gray-100">
                Contact us <ArrowRight size={16} />
              </button>
            </div>

            {/* The floating red square detail from the screenshot */}
            <div className="absolute bottom-12 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 bg-[#8b1a1a] lg:block" />

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
