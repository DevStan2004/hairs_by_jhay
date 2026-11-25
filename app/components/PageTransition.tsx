"use client";

import React, { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// The Logo is now split into two paths for the drawing animation
const Logo = ({ className = "text-[#4a0e0e]" }: { className?: string }) => (
  <svg 
    width="120" 
    height="120" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* The "J" path */}
    <motion.path 
      d="M28 6V26C28 32 23 36 16 36C11 36 7 33 6 28H13C14 30 15.5 31 17.5 31C20.5 31 22 29 22 26V6H28Z" 
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
    {/* The "H" crossbar path */}
    <motion.path 
      d="M12 14V20H25V14H12Z" 
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
    />
  </svg>
);

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // 1. Handle the initial page load
  useEffect(() => {
    // Wait for the SVG animation to finish (1.2s + 0.3s delay = 1.5s)
    // Then wait another 0.5s before sliding the curtain up.
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000); // 2 seconds total wait for first load

    return () => clearTimeout(timer);
  }, []);

  // 2. Handle the page transition logic
  useEffect(() => {
    if (isTransitioning) {
      // Wait for the new page to render, then slide the curtain away
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1200); // Wait 1.2 seconds before revealing new page
      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning]);

  // 3. Intercept link clicks
  const navigateTo = useCallback((href: string) => {
    if (href === pathname) return;
    setIsTransitioning(true); 

    // Wait for the curtain to cover the screen before navigating
    setTimeout(() => {
      router.push(href);
    }, 1000); 
  }, [pathname, router]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const href = anchor.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
          e.preventDefault();
          navigateTo(href);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [navigateTo]);

  return (
    <>
      {children}

      <AnimatePresence>
        {(isFirstLoad || isTransitioning) && (
          <motion.div
            key="curtain"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }} 
            exit={{ y: "100%" }} 
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8efe6]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo className="text-[#4a0e0e]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}