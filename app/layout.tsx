import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";
import ClaritySection from "./components/ClaritySection";
import GallerySection from "./components/GallerySection";
import BookingSection from "./components/BookingSection";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Hairs by Jhay",
  description: "Premium hair artistry tailored entirely to your texture, lifestyle, face shape, and the exact look you have always wanted.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Check if this is a fresh load (not a client-side route change)
              if (!window.sessionStorage.getItem('hasVisited')) {
                window.sessionStorage.setItem('hasVisited', 'true');
                
                // Create the blocking curtain
                const curtain = document.createElement('div');
                curtain.id = 'initial-preloader';
                curtain.style.cssText = 'position:fixed;inset:0;z-index:99999;background-color:#f8efe6;display:flex;align-items:center;justify-content:center;';
                
                // Insert the static SVG logo (scale 1.5)
                curtain.innerHTML = \`
                  <svg width="120" height="120" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="color:#4a0e0e">
                    <path d="M28 6V26C28 32 23 36 16 36C11 36 7 33 6 28H13C14 30 15.5 31 17.5 31C20.5 31 22 29 22 26V6H28Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14V20H25V14H12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                \`;
                
                document.body.appendChild(curtain);
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <PageTransition>
            <Navbar />
            {children}
            <ClaritySection />
            <GallerySection />
            <BookingSection />
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}