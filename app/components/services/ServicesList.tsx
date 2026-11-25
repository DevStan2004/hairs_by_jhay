"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "01",
    title: "SILK BLOWOUT",
    tags: ["Wash & Prep", "Blow Dry", "Silk Finish"],
    subtitle: "HAIR STYLING",
    description: "Our most-booked treatment for glossy, frizz-free finish that looks like glass. Lasts for days with the right aftercare.",
    price: "$65 – $120",
    image: "/10.png",
    imageLeft: true,
  },
  {
    id: "02",
    title: "HAIR EXTENSIONS",
    tags: ["Consultation", "Application", "Blend & Cut"],
    subtitle: "LENGTH & VOLUME",
    description: "Ethically sourced, 100% human hair extensions meticulously applied for seamless length and volume that looks completely natural.",
    price: "$300 – $600",
    image: "/9.png",
    imageLeft: false,
  },
  {
    id: "03",
    title: "BRIDAL STYLING",
    tags: ["Trial Session", "Day Of Styling", "Final Touch"],
    subtitle: "SPECIAL OCCASION",
    description: "Complete wedding day hair with a complimentary trial session, so you feel absolutely perfect when it matters most.",
    price: "$150 – $450",
    image: "/6.png",
    imageLeft: true,
  },
  {
    id: "04",
    title: "PRECISION HAIRCUT",
    tags: ["Consultation", "Hair Cutting", "Final Touch"],
    subtitle: "CUT & STYLE",
    description: "A tailored haircut precision-crafted and engineered to your unique face shape, natural hair texture, and daily lifestyle.",
    price: "$55 – $120",
    image: "/18.png",
    imageLeft: false,
  },
  {
    id: "05",
    title: "BALAYAGE & COLOUR",
    tags: ["Consultation", "Colour Apply", "Toning"],
    subtitle: "COLOUR SERVICES",
    description: "Seamless, sun-kissed color that grows out beautifully. Hand-painted by our master colorists for a natural, dimensional finish.",
    price: "$120 – $280",
    image: "/19.png",
    imageLeft: true,
  },
  {
    id: "06",
    title: "KERATIN TREATMENT",
    tags: ["Consultation", "Treatment", "Blow Dry"],
    subtitle: "SMOOTHING TREATMENT",
    description: "Restore strength, shine, and smoothness. This intensive treatment eliminates frizz and leaves hair remarkably soft.",
    price: "$180 – $320",
    image: "/24.png",
    imageLeft: false,
  },
];

export default function ServicesList() {
  return (
    <section className="w-full bg-[#f4ebe1] pb-24 pt-8 font-[family-name:var(--font-poppins)] text-[#4a0e0e]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 lg:px-[72px]">
        
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col overflow-hidden bg-[#fcf8f5] ${
              service.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="relative h-[300px] w-full lg:h-auto lg:w-1/2 min-h-[400px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="flex w-full flex-col justify-center p-8 md:p-12 lg:w-1/2 lg:p-16">
              
              <div className="mb-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 rounded-full border border-[#4a0e0e]/20 bg-white px-3 py-1.5">
                    <Check size={12} className="text-[#8b1a1a]" />
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[#4a0e0e]/80">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-2 flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-[#8b1a1a]" />
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#8b1a1a]">
                  [ {service.subtitle} ]
                </span>
              </div>
              
              <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
                {service.title}
              </h2>
              
              <p className="mb-8 text-base leading-relaxed text-[#4a0e0e]/70 md:text-lg">
                {service.description}
              </p>
              
              <div className="mb-8 flex items-center gap-3 text-sm font-semibold">
                <span className="text-[#4a0e0e]/60">Price range:</span>
                <span className="text-lg text-[#8b1a1a]">{service.price}</span>
              </div>

              <button className="flex h-12 w-full max-w-[300px] items-center justify-between bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
                Book Session <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}