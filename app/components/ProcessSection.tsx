"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "CONSULTATION",
    description:
      "We begin with a thorough conversation about your hair history, lifestyle, and the exact look you want to achieve.",
  },
  {
    number: "02",
    title: "CUSTOM PLAN",
    description:
      "Your stylist creates a bespoke treatment and styling plan tailored specifically to your hair type and face shape.",
  },
  {
    number: "03",
    title: "TRANSFORMATION",
    description:
      "Relax and enjoy the process as we bring your vision to life, finishing with expert styling advice for home care.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="benefits"
      className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8b1a1a]">
                [ How It Works ]
              </span>
            </div>
            <h2 className="mb-4 text-6xl font-bold uppercase tracking-tighter md:text-[100px]">
              Process
            </h2>
            <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
              Every Hairs by Jhay appointment follows a simple three step
              process designed entirely around you and your hair.
            </p>
          </div>

          <button className="flex h-12 w-fit items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
            Book now <ArrowRight size={16} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12 h-[40vh] w-full overflow-hidden md:h-[60vh] lg:h-[70vh]"
        >
          <Image
            src="/6.png"
            alt="Salon process"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-[#4a0e0e]/20 text-sm font-bold text-[#8b1a1a]">
                  {step.number}
                </div>
                <div className="h-[1px] flex-1 bg-[#4a0e0e]/10" />
              </div>
              <h3 className="mb-3 text-xl font-bold uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#4a0e0e]/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
