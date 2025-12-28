"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

export default function AboutUsSection() {
    return (
        <section id="about" className="py-20 bg-[#F7F9FC] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Area */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-sm mb-4 uppercase"
                        >
                            | About Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight"
                        >
                            Ellipza Always Provides <br />
                            <span className="text-[#0f172a]">Powerful ⚛️ Solutions</span>
                        </motion.h2>
                    </div>

                    <div className="lg:w-1/3">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-[#0f172a] mb-4 uppercase text-sm tracking-wide"
                        >
                            Our Mission
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-500 leading-relaxed text-sm lg:text-base"
                        >
                            "To revolutionize the digital landscape by delivering innovative, reliable, and user-centric technology solutions that empower businesses and individuals worldwide."
                        </motion.p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">

                    {/* Column 1 (Revenue & Open Collaboration) */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        {/* Revenue Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 bg-gray-50 rounded-3xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden"
                        >
                            {/* Decoration Icon */}
                            <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-6 mx-auto relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-sm font-semibold text-gray-900 mb-2">Powered by smart integrations</p>
                                <h3 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-2">$ 3.2 <span className="text-2xl text-gray-500">M+</span></h3>
                                <p className="text-xs text-gray-400">Revenue optimized for our clients</p>
                            </div>
                        </motion.div>

                        {/* Open for Collab Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="h-24 bg-white rounded-3xl p-6 flex items-center justify-center gap-3 border border-gray-200 shadow-sm"
                        >
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                <CheckCircle2 size={16} fill="currentColor" className="text-green-500" />
                            </div>
                            <span className="font-semibold text-gray-600">Open for collaboration</span>
                        </motion.div>
                    </div>

                    {/* Column 2 (Trusted & Performance) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Trusted Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="h-24 bg-white rounded-3xl p-6 flex items-center gap-4 border border-gray-200 shadow-sm"
                        >
                            {/* Avatar Stack */}
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" />
                                    </div>
                                ))}
                            </div>
                            <span className="font-semibold text-gray-600 text-sm">Trusted by 500+ CEOs</span>
                        </motion.div>

                        {/* Performance Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="flex-1 bg-gray-50 rounded-3xl p-8 flex flex-col justify-end border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-auto">
                                <p className="text-sm font-semibold text-gray-800 mb-1">Seamless and</p>
                                <p className="text-sm font-semibold text-gray-800">Reliable performance</p>
                            </div>

                            <div>
                                <h3 className="text-5xl lg:text-7xl font-bold text-[#0f172a] mb-2">98<span className="text-4xl">%</span></h3>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Performance up time</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Column 3 (Purple Description Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="lg:col-span-5 bg-[#59257A] rounded-3xl p-10 flex flex-col justify-between text-white relative overflow-hidden group"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                        <div className="relative z-10">
                            <p className="text-purple-100 leading-relaxed mb-6 text-sm lg:text-base">
                                At Ellipza Technologies, our mission is to transform ideas into impactful solutions by combining cutting-edge technology with exceptional design and development expertise. We strive to exceed expectations, foster innovation, and provide tailored software, mobile, and web solutions that drive growth and efficiency for our clients.
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center justify-between mt-auto pt-8 border-t border-purple-400/30">
                            <div>
                                <h3 className="text-5xl font-bold mb-1">49+</h3>
                                <p className="text-purple-200 text-sm font-medium">Projects completed <br /> successfully</p>
                            </div>

                            <button className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                                More <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
