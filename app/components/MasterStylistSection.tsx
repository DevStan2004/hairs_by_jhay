"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/19.png", label: "CRAFT" },
  { id: 2, src: "/10.png", label: "STUDIO" },
  { id: 3, src: "/16.png", label: "ARTISTRY" },
  { id: 4, src: "/5.png", label: "RESULTS" },
];

export default function MasterStylistsSection() {
  return (
    <section className="w-full bg-[#f4ebe1] pb-20 pt-16 text-[#4a0e0e] md:pb-28 md:pt-24">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 lg:px-[72px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <div className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-wider">
            <span className="text-[#8b1a1a]">4.9/5</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[#8b1a1a] text-[#8b1a1a]" />
              ))}
            </div>
            <span className="text-[#6b5a5a]">(986+ Reviews)</span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] max-w-[800px] text-2xl font-medium uppercase leading-[1.3] tracking-wide md:text-[32px]">
            Master stylists. Premium products. Zero compromise. This is what great hair actually looks like.
          </h2>

          <div className="mt-8 flex items-center gap-6">
            <div className="h-1 w-1 bg-[#8b1a1a]" />
            <button className="flex items-center gap-2 bg-[#8b1a1a] px-6 py-3 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#6b1313]">
              Book Appointment <ArrowRight size={14} />
            </button>
            <div className="h-1 w-1 bg-[#8b1a1a]" />
          </div>
        </motion.div>

        <div className="mt-8 grid w-full grid-cols-2 md:grid-cols-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[3/4] w-full overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-6 left-0 w-full text-center">
                <span className="text-xl font-bold uppercase tracking-widest text-white drop-shadow-lg md:text-2xl">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}