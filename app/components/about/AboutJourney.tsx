"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  {
    id: 1,
    value: 12,
    suffix: "+",
    label: "Years Serving",
    image: "/3.png",
    gradient: "from-black/80 via-black/40",
  },
  {
    id: 2,
    value: 30,
    suffix: "K+",
    label: "Happy Clients",
    image: "/10.png",
    gradient: "from-[#6b1313]/90 via-[#6b1313]/40",
  },
  {
    id: 3,
    value: 5,
    suffix: "",
    label: "Master Stylists",
    image: "/20.png",
    gradient: "from-black/80 via-black/40",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Satisfaction",
    image: "/15.png",
    gradient: "from-[#6b1313]/90 via-[#6b1313]/40",
  },
];

export default function AboutJourney() {
  return (
    <section className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#8b1a1a]">
              [ Our Journey ]
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium uppercase leading-[1.3] tracking-wide text-[#4a0e0e] md:text-[32px]">
            The numbers tell the story of a studio that has never stopped caring about the people it serves.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden md:min-h-[400px]"
            >
              <Image
                src={stat.image}
                alt={stat.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t ${stat.gradient} to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="relative z-10 p-8 md:p-10">
                <h3 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-white/90 md:text-base">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}