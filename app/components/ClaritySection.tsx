"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, X, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "HOW DO I BOOK?",
    answer: "Simply visit our booking page online, choose your service, pick a time that suits you, and confirm.",
  },
  {
    question: "IS CONSULTATION REALLY FREE ALWAYS?",
    answer: "Yes, we offer complimentary consultations for all new clients to discuss your hair goals and history before any service is performed.",
  },
  {
    question: "WHAT HAPPENS IF I NEED CHANGES?",
    answer: "Your satisfaction is our priority. If you need any adjustments, please contact us within 7 days of your appointment and we will gladly make it right.",
  },
  {
    question: "HOW LONG DO APPOINTMENTS TAKE?",
    answer: "It depends on the service. A standard cut takes 45-60 minutes, while colour or treatment services can take 2-3 hours.",
  },
  {
    question: "CAN I BRING A PHOTO FOR REFERENCE?",
    answer: "Absolutely! We highly encourage bringing photos of styles you love. It helps our stylists understand exactly what you have in mind.",
  },
  {
    question: "DO YOU TAKE WALK-INS?",
    answer: "While we accept walk-ins when availability allows, we highly recommend booking in advance to guarantee your preferred stylist and time.",
  },
  {
    question: "WHAT PRODUCTS DO YOU USE EXACTLY?",
    answer: "We exclusively use professional-grade salon products from premium brands like Olaplex, Kérastase, and Redken to ensure the best results.",
  },
];

export default function ClaritySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f4ebe1] py-16 text-[#4a0e0e] md:py-24 font-[family-name:var(--font-poppins)]">
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
                [ Common Questions ]
              </span>
            </div>
            <h2 className="mb-4 text-6xl font-bold uppercase tracking-tighter md:text-[100px]">
              Clarity
            </h2>
            <p className="max-w-xl text-base text-[#4a0e0e]/80 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore dolore
            </p>
          </div>
          
          <button className="flex h-12 w-fit items-center gap-2 bg-[#8b1a1a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#6b1313]">
            Book now <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex w-full flex-col overflow-hidden lg:w-[40%]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/12.jpg"
                alt="Woman in red suit"
                fill
                className="object-cover object-top"
              />
            </div>
            <button className="flex w-full items-center justify-center gap-2 bg-white py-4 text-sm font-bold uppercase tracking-wider text-[#4a0e0e] transition-colors hover:bg-[#4a0e0e] hover:text-white">
              Contact us <ArrowRight size={16} />
            </button>
          </motion.div>

          <div className="flex w-full flex-col gap-3 lg:w-[60%]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#fcf8f5]"
                  >
                    <span className="text-sm font-bold uppercase tracking-wide md:text-base">
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-[#8b1a1a] text-white" : "bg-[#4a0e0e] text-white"
                      }`}
                    >
                      {isOpen ? <X size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-[#4a0e0e]/70">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}