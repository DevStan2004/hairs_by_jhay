"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

const navLinks = [
  "HOME",
  "ABOUT",
  "SERVICES",
  "SOLUTIONS",
  "BENEFITS",
  "CONTACT",
];

// Custom Monogram Logo Component
const Logo = ({ className = "text-white" }: { className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M28 6V26C28 32 23 36 16 36C11 36 7 33 6 28H13C14 30 15.5 31 17.5 31C20.5 31 22 29 22 26V6H28Z"
      fill="currentColor"
    />
    <path d="M12 14V20H25V14H12Z" fill="currentColor" opacity="0.5" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: "0%" },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-10 lg:px-[72px] transition-colors duration-300 ${
          isScrolled ? "bg-[#4a0e0e] shadow-md" : "bg-transparent"
        }`}
      >
        <a href="/" className="flex items-center gap-3 text-white group">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Logo />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold uppercase tracking-widest leading-none">
              Hairs by Jhay
            </span>
            <span className="text-[9px] font-medium tracking-[0.3em] text-white/70 uppercase mt-1">
              Luxury Salon
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <a
            onClick={() => setIsOpen(false)}
            href={"#booking"}
            className="flex h-11 items-center gap-2 bg-[#8b1a1a] px-5 text-[15px] font-medium text-white transition-colors hover:bg-[#6b1313]"
          >
            Book now <ArrowRight size={16} />
          </a>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="flex h-11 w-11 items-center justify-center bg-white/25 text-white backdrop-blur-md transition-colors hover:bg-white/35"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#f8efe6] text-[#4a0e0e]"
          >
            <div className="flex items-center justify-between px-6 py-6 md:px-10 lg:px-[72px]">
              <a href="/" className="flex items-center gap-3 text-[#4a0e0e]">
                <Logo className="text-[#4a0e0e]" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold uppercase tracking-widest leading-none">
                    Hairs by Jhay
                  </span>
                  <span className="text-[9px] font-medium tracking-[0.3em] text-[#4a0e0e]/70 uppercase mt-1">
                    Luxury Salon
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2">
                <a
                  onClick={() => setIsOpen(false)}
                  href={"#booking"}
                  className="flex h-11 items-center gap-2 bg-[#8b1a1a] px-5 text-[15px] font-medium text-white transition-colors hover:bg-[#6b1313]"
                >
                  Book now <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                  className="flex h-11 w-11 items-center justify-center bg-white text-black shadow-sm transition-colors hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 pb-20">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={
                    link === "SOLUTIONS" || link === "BENEFITS"
                      ? `/#${link.toLowerCase()}`
                      : link === "HOME"
                        ? "/"
                        : `/${link.toLowerCase()}`
                  }
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center text-3xl font-semibold tracking-wide transition-colors hover:bg-[#4a0e0e] hover:text-white md:text-4xl"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
