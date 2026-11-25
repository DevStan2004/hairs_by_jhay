"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BookingSection() {
  return (
    <section id="booking" className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]">
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
                [ Get Started ]
              </span>
            </div>
            <h2 className="mb-4 text-6xl font-bold uppercase tracking-tighter md:text-[100px]">
              Booking
            </h2>
            <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
              Book your appointment today for professional hair cutting, styling, and premium salon beauty services.
            </p>
          </div>
          
          <button className="flex h-12 w-fit items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
            Contact us <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full bg-[#fcf8f5] p-8 md:p-12 lg:w-[60%]"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">First Name *</label>
                  <input 
                    type="text" 
                    placeholder="Michael" 
                    className="h-12 w-full bg-white px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#8b1a1a]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Last Name *</label>
                  <input 
                    type="text" 
                    placeholder="Jackson" 
                    className="h-12 w-full bg-white px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#8b1a1a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Email *</label>
                  <input 
                    type="email" 
                    placeholder="test@gmail.com" 
                    className="h-12 w-full bg-white px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#8b1a1a]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Phone no *</label>
                  <input 
                    type="tel" 
                    placeholder="+123 456 789 00" 
                    className="h-12 w-full bg-white px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#8b1a1a]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Select Service *</label>
                <div className="relative">
                  <select className="h-12 w-full appearance-none bg-white px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#8b1a1a]">
                    <option value="">Precision Haircut</option>
                    <option value="balayage">Balayage & Colour</option>
                    <option value="keratin">Keratin Treatment</option>
                    <option value="blowout">Silk Blowout</option>
                    <option value="extensions">Hair Extensions</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg className="h-4 w-4 fill-[#8b1a1a]" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Message *</label>
                <textarea 
                  rows={5}
                  placeholder="Enter message here..." 
                  className="w-full resize-none bg-white p-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-[#8b1a1a]"
                />
              </div>

              <button 
                type="submit"
                className="mt-2 flex h-14 w-full items-center justify-center bg-[#8b1a1a] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#6b1313]"
              >
                Submit Form
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative min-h-[400px] w-full lg:min-h-full lg:w-[40%]"
          >
            <Image
              src="/4.png"
              alt="Model portrait"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}