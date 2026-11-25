"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Droplets,
  Leaf,
  User,
  ShieldCheck,
} from "lucide-react";

function AnimatedCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const benefits = [
  { icon: Droplets, label: "Hydrating" },
  { icon: ShieldCheck, label: "Salon Grade" },
  { icon: Sparkles, label: "Nourishing" },
];

const careTags = [
  { icon: Leaf, label: "Maintain" },
  { icon: Droplets, label: "Nourish" },
  { icon: Sparkles, label: "Elevate" },
];

export default function WhyUsSection() {
  return (
    <section
      id="solutions"
      className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8b1a1a]">
                [ Benefits ]
              </span>
            </div>
            <h2 className="mb-4 text-6xl font-bold uppercase tracking-tighter md:text-[100px]">
              Why Us?
            </h2>
            <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
              Elevate your hair with bespoke styling, premium products, and
              unmatched luxury salon care.
            </p>
          </div>

          <button className="flex h-12 w-fit items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
            Book now <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex min-h-[400px] flex-col justify-end overflow-hidden bg-[#d4b49d] p-8 md:row-span-2 lg:col-span-1 lg:min-h-[600px]"
          >
            <Image
              src="/15.png"
              alt="Woman with blonde hair"
              fill
              className="object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1410]/90 via-[#2a1410]/20 to-transparent" />
            <div className="relative z-10">
              <h3 className="mb-3 text-2xl font-bold uppercase leading-tight text-white">
                Crafted with
                <br />
                Passion
              </h3>
              <p className="text-sm text-white/80">
                Precision, passion, & genuine expertise in every single
                appointment always.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between bg-white p-8 md:col-span-2 lg:col-span-2"
          >
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[280px]">
                <h3 className="mb-3 text-xl font-bold uppercase">
                  Pure Products
                </h3>
                <p className="text-sm text-[#4a0e0e]/70">
                  Only professional-grade brands trusted by top stylists
                  worldwide for results.
                </p>
              </div>
              <div className="relative h-[180px] w-[200px] shrink-0">
                <Image
                  src="/2.png"
                  alt="Hair care products"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.label}
                    className="flex items-center gap-1.5 rounded-full border border-[#4a0e0e]/10 bg-[#f4ebe1] px-3 py-1.5"
                  >
                    <Icon size={12} className="text-[#4a0e0e]/60" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4a0e0e]/70">
                      {benefit.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col justify-between overflow-hidden bg-white p-8 lg:col-span-1"
          >
            <div className="relative z-10">
              <h3 className="text-5xl font-bold tracking-tight text-[#4a0e0e] md:text-6xl">
                <AnimatedCounter value={400} />+
              </h3>
              <p className="mt-2 text-sm text-[#4a0e0e]/70">
                Signature styles completed by our expert team each & every month
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 h-[140px] w-[160px] rotate-[-10deg]">
              <Image
                src="/16.png"
                alt="Style results"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex min-h-[250px] flex-col justify-end overflow-hidden bg-[#a37a61] p-8 md:col-span-1 lg:col-span-1"
          >
            <Image
              src="/17.png"
              alt="Woman touching neck"
              fill
              className="object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1410]/90 to-transparent" />
            <div className="relative z-10 flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M7 3h13l-3 7H4l3-7Z" />
                <path d="M7 14h13l-3 7H4l3-7Z" opacity="0.9" />
              </svg>
              <span className="text-lg font-bold tracking-widest text-white">
                Hairs by Jhay&reg;
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-between bg-white p-8 md:col-span-1 lg:col-span-2"
          >
            <div>
              <h3 className="mb-3 text-xl font-bold uppercase">
                Care Continues
              </h3>
              <p className="max-w-[280px] text-sm text-[#4a0e0e]/70">
                Your hair journey continues at home with our expert
                recommendations always.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {careTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <div
                    key={tag.label}
                    className="flex items-center gap-1.5 rounded-full border border-[#4a0e0e]/10 bg-[#f4ebe1] px-3 py-1.5"
                  >
                    <Icon size={12} className="text-[#4a0e0e]/60" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4a0e0e]/70">
                      {tag.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative flex flex-col justify-between overflow-hidden bg-white p-8 md:col-span-2 lg:col-span-1"
          >
            <div className="mb-8 relative mx-auto h-[140px] w-full max-w-[200px]">
              <Image
                src="/2.png"
                alt="Hair Mask"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-5xl font-bold tracking-tight text-[#4a0e0e] md:text-6xl">
                <AnimatedCounter value={99} />%
              </h3>
              <p className="mt-2 text-sm text-[#4a0e0e]/70">
                Client satisfaction rate across every service we have ever
                offered.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
