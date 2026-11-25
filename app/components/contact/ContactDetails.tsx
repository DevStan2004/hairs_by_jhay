"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// Custom SVG icons since Lucide removed brand icons
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socials = [
  { name: "Twitter", icon: XIcon },
  { name: "Instagram", icon: InstagramIcon },
  { name: "Tiktok", icon: TikTokIcon },
];

const contactCards = [
  { id: 1, title: "EMAIL ADDRESS", value: "testing@gmail.com", icon: Mail },
  { id: 2, title: "PHONE NUMBER", value: "+123 456 789 00", icon: Phone },
  { id: 3, title: "LOCATION", value: "Albany, New York", icon: MapPin },
];

export default function ContactDetails() {
  return (
    <section className="w-full bg-[#f4ebe1] pb-24 font-[family-name:var(--font-poppins)] text-[#4a0e0e]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        
        <div className="flex flex-col gap-4 lg:flex-row">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[400px] w-full lg:w-1/2"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/26.png"
                alt="Model showing hair"
                fill
                className="object-cover object-top"
              />
              <div className="absolute left-[20%] top-[15%] hidden h-2 w-2 bg-[#8b1a1a] md:block" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex w-full flex-col bg-[#fcf8f5] p-8 lg:w-1/2 lg:p-14"
          >
            <div className="mb-10">
              <h3 className="mb-6 text-xl font-bold uppercase tracking-wide">
                Opening Hours
              </h3>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                <li className="flex items-center justify-between border-b border-[#4a0e0e]/10 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#4a0e0e]/40" />
                    <span>Monday – Tuesday</span>
                  </div>
                  <span>9:00 AM – 7:00 PM</span>
                </li>
                <li className="flex items-center justify-between border-b border-[#4a0e0e]/10 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#4a0e0e]/40" />
                    <span>Wednesday – Thursday</span>
                  </div>
                  <span>9:00 AM – 8:00 PM</span>
                </li>
                <li className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#4a0e0e]/40" />
                    <span>Friday – Sunday</span>
                  </div>
                  <span>9:00 AM – 9:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wide">
                Find Us:
              </h3>
              <p className="mb-2 text-sm text-[#4a0e0e]/70">
                123 Luxury Lane, Downtown<br />
                New York, NY 10001
              </p>
              <p className="text-sm font-semibold">
                Near Central Station - parking available
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-wide">
                Socials
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href="#"
                      className="flex items-center gap-2 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#8b1a1a] hover:text-white"
                    >
                      <Icon />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col bg-[#fcf8f5] p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white text-[#8b1a1a] shadow-sm">
                  <Icon size={24} />
                </div>
                <h4 className="mb-2 text-lg font-bold uppercase tracking-wide">
                  {card.title}
                </h4>
                <p className="text-sm font-medium text-[#4a0e0e]/70">
                  {card.value}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}