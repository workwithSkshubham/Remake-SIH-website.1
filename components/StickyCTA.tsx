"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 600px), hide near registration section
      const scrollY = window.scrollY;
      const regSection = document.getElementById("registration");
      let nearBottom = false;

      if (regSection) {
        const rect = regSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          nearBottom = true;
        }
      }

      if (scrollY > 600 && !nearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="#registration"
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#121C2B]/95 border border-[#E7962B]/70 shadow-2xl backdrop-blur-md text-xs font-semibold text-[#ECEEE7] hover:border-[#E7962B] hover:shadow-[0_0_20px_rgba(231,150,43,0.3)] transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[#2FAE82] animate-ping" />
            <span className="font-['Instrument_Sans']">Register via SPOC</span>
            <span className="p-1 rounded-full bg-[#E7962B] text-[#0B1622] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
