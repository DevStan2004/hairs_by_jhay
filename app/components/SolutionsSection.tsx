"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wind, Zap, Scissors } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Wind,
    title: "FRIZZY HAIR",
    description: "Hair that constantly looks dry, puffy, and impossible to control.",
  },
  {
    number: "02",
    icon: Zap,
    title: "DAMAGED HAIR",
    description: "Hair that feels weak, brittle, and looks completely dull always.",
  },
  {
    number: "03",
    icon: Scissors,
    title: "THINNING HAIR",
    description: "Hair that lacks volume and looks painfully flat and limp.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8b1a1a]">
                [ Problems + Solution ]
              </span>
            </div>
            
            <h2 className="mb-6 text-6xl font-bold uppercase tracking-tighter md:text-[100px]">
              Solutions
            </h2>
            
            <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
              Real hair problems deserve real solutions — not temporary fixes, but lasting results that transform how you feel.
            </p>
          </div>

          <button className="mb-2 flex h-12 w-fit items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
            Book now <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col justify-between bg-white p-8 md:p-10"
              >
                <div className="mb-16 flex items-start justify-between">
                  <span className="text-5xl font-bold text-black/5 md:text-6xl">
                    {item.number}
                  </span>
                  <Icon size={32} className="text-[#8b1a1a]" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#4a0e0e]/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}