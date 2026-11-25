"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { ArrowRight, Plus } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const slides = [
  { id: 1, bgImage: "/10.png", position: "70% center" },
  { id: 2, bgImage: "/9.png", position: "70% center" },
  { id: 3, bgImage: "/12.jpg", position: "75% center" },
];

const SLIDE_DURATION = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setCurrent((p) => (p + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearTimeout(t);
  }, [current]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section
      className={`${poppins.className} relative h-screen min-h-[640px] w-full overflow-hidden bg-[#140d08] text-white`}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={slide.bgImage}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.position }}
            />
          </motion.div>
        ))}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,12,6,0.88) 0%, rgba(20,12,6,0.55) 35%, rgba(20,12,6,0.1) 65%, transparent 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-between px-6 py-6 md:px-10 lg:px-[72px]">
        <div className="flex flex-1 flex-col justify-center py-10">
          <motion.div
            {...fadeUp(0.1)}
            className="mb-6 flex w-fit items-center gap-2 bg-white/15 p-[3px] pr-3 backdrop-blur-sm"
          >
            <span className="bg-white px-2 py-[3px] text-[13px] font-semibold text-[#2a1410]">
              #01
            </span>
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em]">
              Premium Hair Salon
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.25)}
            className="mb-5 text-[clamp(50px,7.5vw,100px)] font-medium uppercase leading-[1.05] tracking-[-0.03em]"
          >
            Hairs by Jhay
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mb-8 max-w-[460px] text-base font-medium leading-relaxed text-white/75"
          >
            Premium hair artistry tailored entirely to your texture, lifestyle,
            face shape, and the exact look you have always wanted.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-3">
            <button className="flex h-11 items-center gap-2 bg-white px-5 text-[15px] font-medium text-[#2a1410] transition-colors hover:bg-white/85">
              Explore Services <ArrowRight size={16} />
            </button>
            <button className="flex h-11 items-center gap-2 border border-white/10 bg-white/15 px-5 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/25">
              Contact <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        <div className="flex items-end justify-between">
          <motion.div
            {...fadeUp(0.7)}
            className="relative flex w-full max-w-[350px] gap-4 bg-white/15 p-2 backdrop-blur-md"
          >
            <div className="relative h-[115px] w-[127px] shrink-0">
              <Image
                src="/1.png"
                alt="Silk blowout"
                fill
                sizes="127px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-1 text-xl font-semibold uppercase leading-tight">
                Silk Blowout
              </h3>
              <p className="text-sm font-medium leading-snug text-white/75">
                Most-booked treatment
              </p>
              <p className="text-sm font-medium leading-snug text-white">
                Starting from $65 &rarr;
              </p>
            </div>

            <button
              aria-label="Add Silk Blowout"
              className="absolute right-3 top-3 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
            >
              <Plus size={12} strokeWidth={3} />
            </button>
          </motion.div>

          <div className="hidden gap-2 sm:flex">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-1 w-8 transition-colors duration-300 ${
                  i === current ? "bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}