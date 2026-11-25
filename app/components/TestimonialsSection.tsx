"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Yoga Instructor",
    image: "/4.png",
    quote:
      "Professional, caring, and incredibly talented. My highlights have never looked this good!",
    position: "top-0 left-0 md:top-[10%] md:left-[5%]",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    image: "/15.png",
    quote:
      "Hairs by Jhay completely transformed my hair. The attention to detail is unmatched.",
    position: "top-0 left-1/2 -translate-x-1/2 md:top-[0%] md:left-[40%]",
  },
  {
    id: 3,
    name: "Isabella Marchetti",
    role: "Creative Director",
    image: "/7.png",
    quote:
      "My style never looked so shiny and healthy. Highly recommend this place.",
    position: "top-[40%] right-0 md:top-[35%] md:right-[5%]",
  },
  {
    id: 4,
    name: "Chloe Dupont",
    role: "Fashion Blogger",
    image: "/8.png",
    quote:
      "The atmosphere is luxurious, the team is phenomenal, and the results are stunning.",
    position: "bottom-0 left-0 md:bottom-[10%] md:left-[10%]",
  },
  {
    id: 5,
    name: "Naavya Reddi",
    role: "Graphic Designer",
    image: "/1.png",
    quote:
      "Every single visit leaves me feeling like a million bucks. Absolute perfection.",
    position: "bottom-0 left-1/2 -translate-x-1/2 md:bottom-[5%] md:left-[45%]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative flex min-h-[900px] w-full items-center justify-center overflow-hidden bg-[#f4ebe1] py-20 font-[family-name:var(--font-poppins)] md:py-32">
      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[72px]">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center lg:w-1/2">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#8b1a1a]">
              <span>4.9/5</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-[#8b1a1a] text-[#8b1a1a]"
                  />
                ))}
              </div>
              <span className="text-[#4a0e0e]/60">(986+ Reviews)</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium uppercase leading-[1.3] tracking-wide text-[#4a0e0e] md:text-4xl">
              The attention to detail at Hairs by Jhay is unlike anything I have
              ever experienced at a salon.
            </h2>
            <div className="mt-6">
              <h4 className="text-lg font-bold text-[#4a0e0e]">
                Isabella Marchetti
              </h4>
              <p className="text-sm text-[#4a0e0e]/60">Creative Director</p>
            </div>
          </div>

          <div className="relative mt-16 grid w-full grid-cols-2 gap-4 md:mt-0 md:block md:h-[700px] md:w-1/2 lg:h-[800px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`w-full md:absolute md:w-[260px] ${testimonial.position}`}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className="flex flex-col bg-white p-3 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div className="relative mb-4 aspect-square w-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="mb-1 flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            className="fill-white text-white"
                          />
                        ))}
                      </div>
                      <p className="line-clamp-3 text-[11px] leading-snug">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>

                  <div className="px-1 pb-1">
                    <h4 className="text-sm font-bold text-[#4a0e0e]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[11px] text-[#4a0e0e]/60">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
