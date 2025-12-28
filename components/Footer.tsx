"use client";

import { Facebook, Instagram, Send, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#f8f9fc] pt-20 pb-10 relative overflow-hidden">

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10">

                    {/* Brand Column (Span 5) */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            {/* Logo Icon (Infinity Loop approx) */}
                            <div className="relative w-12 h-8">
                                <div className="absolute inset-0 border-2 border-blue-500 rounded-full skew-x-12"></div>
                                <div className="absolute inset-0 border-2 border-purple-500 rounded-full -skew-x-12 ml-4"></div>
                            </div>
                            <span className="text-2xl font-bold tracking-widest text-[#0f172a] uppercase">ELLIPZA</span>
                        </div>

                        <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-sm">
                            The first free end-to-end analytics service for the site, designed to work with enterprises of various levels and business segments.
                        </p>

                        <div className="pt-2">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">More about us</span>
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                            </div>

                            <div className="flex flex-wrap gap-3 max-w-[200px]">
                                {/* Top Row */}
                                <div className="flex gap-3 w-full">
                                    <div className="w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center text-gray-600 hover:bg-gray-400/50 transition-colors cursor-pointer">
                                        <Facebook size={14} className="fill-current" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center text-gray-600 hover:bg-gray-400/50 transition-colors cursor-pointer">
                                        <Instagram size={14} />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center text-gray-600 hover:bg-gray-400/50 transition-colors cursor-pointer">
                                        {/* Telegram icon approx */}
                                        <Send size={12} className="-rotate-12 translate-x-[1px]" />
                                    </div>
                                </div>
                                {/* Bottom Row */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center text-gray-600 hover:bg-gray-400/50 transition-colors cursor-pointer">
                                        <span className="font-bold text-[10px]">ox</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center text-gray-600 hover:bg-gray-400/50 transition-colors cursor-pointer">
                                        <span className="font-bold text-[10px]">vK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="md:col-span-2"></div>

                    {/* Info Column (Span 2) */}
                    <div className="md:col-span-2 pt-2">
                        <h4 className="text-[#0f172a] font-bold uppercase mb-6 tracking-wide text-sm">INFO</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Why Ellipza ?', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 text-xs font-bold hover:text-gray-900 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column (Span 3) */}
                    <div className="md:col-span-3 pt-2">
                        <h4 className="text-[#0f172a] font-bold uppercase mb-6 tracking-wide text-sm">CONTACT US</h4>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-gray-400 text-xs font-bold">+11 - 13134324134</p>
                                <p className="text-gray-400 text-xs font-bold">example@domain.com</p>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-[#0f172a] font-bold uppercase mb-2 tracking-wide text-sm">LOCATION</h4>
                                <p className="text-gray-400 text-xs font-bold leading-relaxed">
                                    12, ABC Main Street, Colombo<br />
                                    Sri Lanka
                                </p>
                            </div>

                            <div className="flex gap-3 pt-1">
                                {/* Flags */}
                                <div className="w-8 h-5 bg-yellow-400 rounded-sm shadow-sm relative overflow-hidden flex items-center justify-center">
                                    <span className="text-[10px]">🇱🇰</span>
                                </div>
                                <div className="w-8 h-5 bg-red-600 rounded-sm shadow-sm relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-y-0 bg-white w-1/2 left-1/4"></div>
                                    <span className="relative text-[10px] z-10">🍁</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Large Watermark (Block) */}
                <div className="w-full flex justify-center items-center opacity-[0.04] select-none pointer-events-none mt-10 mb-4">
                    <h1 className="text-[15vw] md:text-[180px] lg:text-[240px] font-bold text-black tracking-tighter leading-none text-center">
                        Ellipza
                    </h1>
                </div>

                {/* Bottom Rights */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] text-gray-500 font-bold tracking-wider uppercase">
                    <span>ELLIPZA TECHNOLOGIES PVT</span>
                    <span>ALL RIGHTS RESERVED</span>
                    <span>© 2025 — COPYRIGHT</span>
                </div>
            </div>
        </footer>
    );
}
