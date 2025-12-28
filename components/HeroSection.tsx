"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image from "../public/Group.png"

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-transparent overflow-hidden isolate">
      <div className="container mx-auto px-4">

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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-auto md:h-64">
              <motion.div className="md:col-span-1 rounded-3xl overflow-hidden relative bg-gray-200 min-h-[200px]">
                <div className="absolute inset-0 bg-indigo-900"></div> {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg mb-1">AI Solutions</h3>
                  <p className="text-white/60 text-xs leading-snug">Automate workflows with smart AI integration.</p>
                </div>
              </motion.div>

              <motion.div className="md:col-span-2 rounded-3xl overflow-hidden relative bg-gray-800 min-h-[200px]">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  {/* Abstract chart */}
                  <div className="flex items-end gap-1 h-20">
                    <div className="w-4 bg-blue-500 h-10 rounded-t"></div>
                    <div className="w-4 bg-purple-500 h-16 rounded-t"></div>
                    <div className="w-4 bg-pink-500 h-12 rounded-t"></div>
                    <div className="w-4 bg-blue-500 h-20 rounded-t"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Real Time Deployment</h3>
                    <p className="text-white/60 text-xs leading-snug">Track performance metrics instantly.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="md:col-span-1 rounded-3xl overflow-hidden relative bg-gray-200 min-h-[200px]">
                <div className="absolute inset-0 bg-cyan-800"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg mb-1">Security</h3>
                  <p className="text-white/60 text-xs leading-snug">Enterprise-grade data protection.</p>
                </div>
              </motion.div>

              <motion.div className="md:col-span-1 rounded-3xl overflow-hidden relative bg-gray-200 min-h-[200px]">
                <div className="absolute inset-0 bg-teal-800"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg mb-1">Modern Look</h3>
                  <p className="text-white/60 text-xs leading-snug">Clean and intuitive UI design.</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row: API (2), Marketing (1), Remote (2) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-auto md:h-64">
              <motion.div className="md:col-span-2 rounded-3xl overflow-hidden relative bg-gray-900 min-h-[200px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 text-6xl font-black">API</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg mb-1">200+ API Ready</h3>
                  <p className="text-white/60 text-xs leading-snug">Seamless integration with your favorite tools.</p>
                </div>
              </motion.div>

              <motion.div className="md:col-span-1 rounded-3xl overflow-hidden relative bg-blue-600 min-h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg mb-1">Marketing</h3>
                  <p className="text-white/60 text-xs leading-snug">Strategies that convert.</p>
                </div>
              </motion.div>

              <motion.div className="md:col-span-2 rounded-3xl overflow-hidden relative bg-orange-800 min-h-[200px] group">
                {/* Placeholder Image Effect */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Remote First Culture</h3>
                    <p className="text-white/60 text-xs leading-snug">Building teams across borders.</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-green-400 text-xs font-bold">HR</span>
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
