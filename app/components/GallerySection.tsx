"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  "/6.png",
  "/18.png",
  "/15.png",
  "/17.png",
  "/4.png",
  "/16.png",
  "/8.png",
];

export default function GallerySection() {
  return (
    <section className="w-full overflow-hidden bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]">
      
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="relative">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8b1a1a]">
                [ Real Results ]
              </span>
            </div>
            <h2 className="mb-4 text-6xl font-bold uppercase tracking-tighter md:text-[100px]">
              Gallery
            </h2>
            <div className="absolute right-0 top-0 hidden h-3 w-3 bg-[#8b1a1a] md:block" />
            <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
              Real results from real clients — every image in this gallery is unedited and completely unfiltered always.
            </p>
          </div>
          
          <button className="flex h-12 w-fit items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
            Book now <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      <div className="relative mt-8 flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 px-6"
        >
          {[...galleryImages, ...galleryImages].map((src, index) => (
            <div
              key={index}
              className="relative h-[350px] w-[280px] shrink-0 overflow-hidden bg-[#e8dfd5] md:h-[500px] md:w-[400px]"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}