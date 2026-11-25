"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stylists = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Master Colorist",
    image: "/16.png",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Creative Director",
    image: "/18.png",
  },
  {
    id: 3,
    name: "Sophia Laurent",
    role: "Senior Stylist",
    image: "/20.png",
  },
];

export default function MeetStylists() {
  return (
    <section className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)] border-t border-[#4a0e0e]/10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
             <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8b1a1a]">
              [ The Experts ]
            </span>
            <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
          </div>
          <h2 className="mb-4 text-5xl font-bold uppercase tracking-tighter md:text-[80px]">
            Meet The Team
          </h2>
          <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
            Behind every great look is a team of passionate artists dedicated to their craft. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stylists.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden bg-[#e8dfd5]">
                <Image
                  src={stylist.image}
                  alt={stylist.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 translate-y-8 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  
                  {/* Instagram Icon */}
                  <a href="#" className="flex h-10 w-10 items-center justify-center bg-white text-[#4a0e0e] transition-colors hover:bg-[#8b1a1a] hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  
                  {/* Facebook Icon */}
                  <a href="#" className="flex h-10 w-10 items-center justify-center bg-white text-[#4a0e0e] transition-colors hover:bg-[#8b1a1a] hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>

                  {/* Share/Link Icon */}
                  <a href="#" className="flex h-10 w-10 items-center justify-center bg-white text-[#4a0e0e] transition-colors hover:bg-[#8b1a1a] hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </a>

                </div>
              </div>

              <div className="text-center">
                <h3 className="mb-1 text-2xl font-bold uppercase tracking-wide">
                  {stylist.name}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#8b1a1a]">
                  {stylist.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}