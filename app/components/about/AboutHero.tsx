"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="w-full bg-[#f4ebe1] pt-32 font-[family-name:var(--font-poppins)] text-[#4a0e0e] md:pt-40">
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
              [ Who We Are ]
            </span>
          </div>

          <h1 className="mb-6 md:text-[100px] font-bold uppercase leading-none tracking-tighter text-5xl">
            About Us
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[#4a0e0e]/80 md:text-xl">
            Hairs by Jhay was built for people who take their hair seriously and
            expect nothing less than exceptional every time.
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

            <div className="hidden flex-col items-center gap-2 md:flex">
              <div className="mb-2 h-2 w-2 bg-[#8b1a1a]" />
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#4a0e0e]">
                Scroll Down <ArrowDown size={16} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="relative mt-16 w-full"
      >
        <div className="relative h-[50vh] w-full overflow-hidden md:h-[70vh] lg:h-[85vh]">
          <Image
            src="/16.png"
            alt="Close up portrait of a model"
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
