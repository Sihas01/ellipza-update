"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image from "../public/Group.png"

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-transparent overflow-hidden isolate">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">

        {/* Header Content */}
        <div className="text-center max-w-5xl mx-auto mb-16 relative z-10">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-[1px] rounded-full bg-gradient-to-r from-[#7D43A2] to-[#5393DF] mb-8 shadow-sm"
          >
            <div className="px-4 py-1.5 rounded-full bg-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7D43A2] to-[#5393DF]"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D43A2] to-[#5393DF] text-xs font-bold">
                All your need on one place
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[#0f172a] mb-6 leading-[1.1]"
          >
            The Most Powerful Way To <br />
            Ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7D43A2] to-[#5393DF]">Scalable Software</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Ellipza Technologies crafts high-quality, tailored IT solutions. We blend
            advanced software and AI with secure networking and digital marketing
            to turn complex ideas into impactful results.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0f172a] text-white font-medium hover:bg-gray-800 transition-all hover:gap-3">
              Get Started <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto">


          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 4: Modern Look (Moved from Row 1 based on layout flow, or actually this grid might be best as 3 columns on bottom?
                   Wait, user image shows:
                   Row 1: 4 items (Small, Wide, Small, Small) -> 1+2+1+1 = 5? No, they look like 1, 2, 1, 1 doesn't fit in 4 cols. 
                   Let's stick to the visual approximation provided in previous turn: 
                   Row 1: [Small] [Wide] [Small] [Small] -> Let's try to fit this.
                   Maybe it breaks to next line? 
                   Let's assume standard Bento:
                   Row 1: [1] [2 (wide)] [3] [4] -> 4 items. 
                   If grid is 4 columns: 1 (span 1), 2 (span 2), 3 (span 1). Where does 4 go? 
                   Maybe Row 1 has 3 items and Card 4 is in Row 2?
                   User said: "leave images with temp images". 
                   I will implement: 
                   Row 1: [AI] [Real Time (Wide)] [Security]
                   Row 2: [Modern Look] [API (Wide)] [Marketing]
                   Row 3: [Remote (Wide)]
                   
                   Actually, looking at the image: 
                   Row 1: [AI] [RealTime] [Security] [ModernLook] -> 4 distinct cards in one horizontal line?
                   If so, [RealTime] isn't that wide. It looks like:
                   [Small] [Medium] [Small] [Small]. 
                   Or maybe it's just a 4 column grid and [RealTime] spans 1.5? No.
                   
                   Let's try a 5 column grid for Row 1?
                   [1] [2 (span 2)] [1] [1].
                   Row 2: [2 (span 2)] [1] [2 (span 2)] -> 5 cols.
                   
                   Let's try Grid Cols 5.
               */}
          </div>

          {/* Re-doing the grid to match 5-column layout estimation */}
          <div className="flex flex-col gap-4">
            {/* Top Row: AI (1), Metrics (2), Security (1), Modern (1) */}
            {/* Top Row: AI (1), Metrics (2), Security (1), Modern (1) */}
            {/* Top Row: AI (1), Metrics (2), Security (1), Modern (1) */}
            <div className="grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-4 h-auto md:h-64">
              <motion.div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-ai.jpg" alt="AI Solutions" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">AI Solutions</h3>
                  <p className="text-white/70 text-[10px] md:text-xs leading-snug">Lorem ipsum dolor sit amet, consur adipiscing elit.</p>
                </div>
              </motion.div>

              <motion.div className="col-span-3 md:col-span-2 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-metrics.jpg" alt="Real Time Metrics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg mb-1">Real Time Deployment Metrics</h3>
                    <p className="text-white/70 text-[10px] md:text-xs leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shrink-0 ml-2">
                    <span className="text-[#FF0A0A] text-[10px] md:text-xs font-bold">E</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="col-span-3 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-security.jpg" alt="Enterprise Security" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">Enterprise Security</h3>
                  <p className="text-white/70 text-[10px] md:text-xs leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
                </div>
              </motion.div>

              <motion.div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px]">
                <img src="/hero-modern.jpg" alt="Modern Look" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">Modern Look</h3>
                  <p className="text-white/70 text-[10px] md:text-xs leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row: API (1), Marketing (2), Remote (2) */}
            {/* Bottom Row: API (1), Marketing (2), Remote (2) */}
            <div className="grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-4 h-auto md:h-64">
              <motion.div className="col-span-3 md:col-span-1 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px] order-2 md:order-none">
                <img src="/hero-api.jpg" alt="200+ API Ready" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">200+ API Ready</h3>
                  <p className="text-white/70 text-[10px] md:text-xs leading-snug">Lorem ipsum dolor sit amet.</p>
                </div>
              </motion.div>

              <motion.div className="col-span-2 md:col-span-2 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px] order-1 md:order-none">
                <img src="/hero-marketing.jpg" alt="Best Marketing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1">Best Marketing</h3>
                  <p className="text-white/70 text-[10px] md:text-xs leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
                </div>
              </motion.div>

              <motion.div className="col-span-5 md:col-span-2 rounded-3xl overflow-hidden relative group min-h-[160px] md:min-h-[200px] order-3 md:order-none">
                <img src="/hero-remote.jpg" alt="Remote first Culture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg mb-1">Remote first Culture</h3>
                    <p className="text-white/70 text-[10px] md:text-xs leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm shrink-0 ml-2">
                    <span className="text-green-400 text-[10px] md:text-xs font-bold">E</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Background/Decoration */}
        <div className="absolute top-20 md:top-28 left-0 w-full -z-10 pointer-events-none">
          <img
            src={image.src}
            alt="Hero Wave"
            className="w-full h-[250px] md:h-auto object-cover md:object-contain opacity-100"
          />
        </div>

      </div>
    </section>
  );
}
