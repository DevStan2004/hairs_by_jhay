"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "PRECISION HAIRCUT",
    subtitle: "CUT & STYLE",
    description: "A tailored haircut precision-crafted and engineered to your unique face shape, natural hair texture, and daily lifestyle.",
    price: "$55 – $120",
    tags: ["Consultation", "Hair Cutting", "Final Touch"],
    image: "/10.png",
  },
  {
    id: "02",
    title: "BALAYAGE & COLOUR",
    subtitle: "COLOUR",
    description: "Seamless, sun-kissed color that grows out beautifully. Hand-painted by our master colorists for a natural, dimensional finish.",
    price: "$150 – $300",
    tags: ["Consultation", "Colour Apply", "Toning"],
    image: "/19.png",
  },
  {
    id: "03",
    title: "KERATIN TREATMENT",
    subtitle: "TREATMENT",
    description: "Restore strength, shine, and smoothness. This intensive treatment eliminates frizz and leaves hair remarkably soft.",
    price: "$200 – $350",
    tags: ["Consultation", "Treatment", "Blow Dry"],
    image: "/5.png",
  },
  {
    id: "04",
    title: "SILK BLOWOUT",
    subtitle: "STYLING",
    description: "A luxurious, long-lasting blowout that adds incredible volume, bounce, and a mirror-like shine to your hair.",
    price: "$65 – $95",
    tags: ["Wash & Prep", "Blow Dry", "Silk Finish"],
    image: "/1.png",
  },
  {
    id: "05",
    title: "HAIR EXTENSIONS",
    subtitle: "EXTENSIONS",
    description: "Premium, ethically sourced hair extensions meticulously applied for length and volume that looks completely natural.",
    price: "$400+",
    tags: ["Colour Match", "Application", "Blend & Cut"],
    image: "/9.png",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = services[activeTab];

  return (
    <section className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#8b1a1a]">
                [ What We Offer ]
              </span>
            </div>
            <h2 className="mb-4 text-6xl font-bold uppercase tracking-tighter md:text-[100px]">
              Services
            </h2>
            <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
              Six signature services, each carefully crafted to give you results that genuinely last, impress, and keep you coming back.
            </p>
          </div>
          
          <button className="flex h-12 w-fit items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
            Book now <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative w-full bg-[#fcf8f5]">
            <div className="flex flex-col md:flex-row">
              <div className="relative aspect-square w-full md:aspect-auto md:w-[45%] min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex w-full flex-col justify-center p-8 md:w-[55%] md:p-16">
                <div className="mb-8 flex flex-wrap gap-2">
                  {activeService.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1.5 rounded-full border border-[#4a0e0e]/20 bg-white px-3 py-1.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#4a0e0e]/80">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#8b1a1a]">
                        [ {activeService.subtitle} ]
                      </span>
                    </div>
                    <h3 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
                      {activeService.title}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-[#4a0e0e]/70 md:text-lg">
                      {activeService.description}
                    </p>
                    
                    <div className="mb-6 flex items-center gap-3 text-sm font-semibold">
                      <span className="text-[#4a0e0e]/60">Price range:</span>
                      <span className="text-[#8b1a1a]">{activeService.price}</span>
                    </div>

                    <button className="flex h-12 w-full max-w-[300px] items-center justify-between bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
                      Book Session <ArrowRight size={16} />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`group flex w-full items-center justify-between bg-[#fcf8f5] px-6 py-5 transition-colors md:px-8 ${
                  activeTab === index ? "border-l-4 border-[#8b1a1a]" : "border-l-4 border-transparent hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-sm font-bold text-[#8b1a1a]">
                    [ {service.id} ]
                  </span>
                  <span className="text-lg font-bold uppercase tracking-wide md:text-xl">
                    {service.title}
                  </span>
                </div>

                <div className="hidden items-center gap-2 lg:flex">
                  {service.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-1 rounded-full border border-[#4a0e0e]/10 bg-white/50 px-3 py-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4a0e0e]/60">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}