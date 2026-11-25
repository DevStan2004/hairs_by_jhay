"use client";

import React from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Logo = ({ className = "text-white" }: { className?: string }) => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M28 6V26C28 32 23 36 16 36C11 36 7 33 6 28H13C14 30 15.5 31 17.5 31C20.5 31 22 29 22 26V6H28Z" fill="currentColor"/>
    <path d="M12 14V20H25V14H12Z" fill="currentColor" opacity="0.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#4a0e0e] pt-16 pb-8 text-white font-[family-name:var(--font-poppins)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[72px]">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="flex flex-col items-start gap-6">
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
            <p className="max-w-[280px] text-sm leading-relaxed text-white/80">
              A premium hair salon built on craft, trust, & genuine results for every single client always.
            </p>
            <button className="mt-2 flex h-11 items-center gap-2 bg-white px-5 text-sm font-semibold text-[#4a0e0e] transition-colors hover:bg-gray-200">
              Contact Us <ArrowRight size={16} />
            </button>
          </div>

          <div>
            <h4 className="mb-6 text-[13px] font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li><a href="/" className="transition-colors hover:text-white">Home</a></li>
              <li><a href="/about" className="transition-colors hover:text-white">About</a></li>
              <li><a href="/#solutions" className="transition-colors hover:text-white">Solutions</a></li>
              <li><a href="/#benefits" className="transition-colors hover:text-white">Benefits</a></li>
              <li><a href="/#testimonials" className="transition-colors hover:text-white">Testimonials</a></li>
              <li><a href="/#stylists" className="transition-colors hover:text-white">Stylists</a></li>
              <li><a href="/booking" className="transition-colors hover:text-white">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[13px] font-bold uppercase tracking-widest text-white">
              Other Pages
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li><a href="/about" className="transition-colors hover:text-white">About us</a></li>
              <li><a href="/services" className="transition-colors hover:text-white">Service index</a></li>
              <li><a href="/contact" className="transition-colors hover:text-white">Contact us</a></li>
              <li><a href="/404" className="transition-colors hover:text-white">404 error</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[13px] font-bold uppercase tracking-widest text-white">
              Info Links
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:testing@gmail.com" className="transition-colors hover:text-white">
                  testing@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+12345678900" className="transition-colors hover:text-white">
                  +123 456 789 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Albany, New York</span>
              </li>
            </ul>
          </div>

        </div>

                <div className="mt-24 flex w-full items-center justify-center overflow-hidden border-t border-white/10 pt-10">
          <h1 className="flex items-center text-[14vh] font-bold leading-none tracking-tighter text-white whitespace-nowrap">
            <svg 
              className="mr-[2vw] h-[10vh] w-[10vh]" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28 6V26C28 32 23 36 16 36C11 36 7 33 6 28H13C14 30 15.5 31 17.5 31C20.5 31 22 29 22 26V6H28Z" fill="currentColor"/>
              <path d="M12 14V20H25V14H12Z" fill="currentColor" opacity="0.5"/>
            </svg>
            HAIRS BY JHAY
          </h1>
        </div>

      </div>
    </footer>
  );
}