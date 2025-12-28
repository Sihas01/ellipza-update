"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function ServicesSection() {
    return (
        <section id="solution" className="py-24 bg-white relative overflow-hidden">
            {/* Background Wave */}
            <div className="absolute top-0 left-0 w-full pointer-events-none opacity-100 z-0">
                <img src="/services-wave.png" alt="" className="w-full h-auto opacity-60" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-sm mb-4 uppercase pl-3 border-l-4 border-[#59257A]"
                        >
                            Our Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-[#b4b4b4] leading-tight"
                        >
                            Accelerate Business with <br />
                            <span className="text-[#0f172a] inline-flex items-center gap-2">
                                Premium
                                <span className="inline-flex items-center justify-center p-1.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg rotate-6 shadow-md text-white mx-2">
                                    <Code2 size={24} strokeWidth={2.5} />
                                </span>
                                Services
                            </span>
                        </motion.h2>
                    </div>

                    <div className="max-w-md pt-2">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm text-gray-500 leading-relaxed"
                        >
                            Ellipza Technologies is a forward-thinking IT company dedicated to crafting high-quality technology solutions tailored to the unique needs of our clients. We specialize in the following key areas:
                        </motion.p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col gap-8">

                    {/* Top Row: Mobile (Left) + Software/Web (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Mobile App Development - Vertical Tall Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-5 bg-gray-50 rounded-[2.5rem] p-10 pb-0 flex flex-col justify-between overflow-hidden relative group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-[#0f172a] mb-6">Mobile App <br /> Development</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                                    Our team creates feature-rich iOS and Android applications that combine advanced functionality with intuitive design for an engaging user experience.
                                </p>
                            </div>

                            {/* Fixed: Use margin-top (mt-12) instead of translate-y-12 to strictly occupy layout space and prevent overlap */}
                            <div className="relative w-full flex justify-center mt-auto pt-8">
                                <div className="w-[85%] mt-12 group-hover:-translate-y-4 transition-transform duration-500">
                                    <img src="/service-mobile-new.png" alt="Mobile App" className="w-full h-auto object-contain drop-shadow-2xl" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Software + Web */}
                        <div className="lg:col-span-7 flex flex-col gap-8">

                            {/* Software Development - Text Top, Image Bottom */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex-1 bg-gray-50 rounded-[2.5rem] p-10 pb-0 flex flex-col justify-between gap-6 overflow-hidden relative group"
                            >
                                <div className="w-full relative z-10">
                                    <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Software Development</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                                        We deliver robust, scalable, and secure software solutions—from enterprise applications to custom builds—ensuring high performance and seamless integration.
                                    </p>
                                </div>
                                <div className="w-full flex justify-center items-end mt-auto">
                                    <img src="/service-web-new.png" alt="Software Development" className="h-48 lg:h-52 w-auto object-contain" />
                                </div>
                            </motion.div>

                            {/* Web Development - Text Top, Image Bottom */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex-1 bg-gray-50 rounded-[2.5rem] p-10 pb-0 flex flex-col justify-between gap-6 overflow-hidden relative group"
                            >
                                <div className="w-full relative z-10">
                                    <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Web Development</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                                        We develop responsive, SEO-friendly websites ranging from high-speed static pages to dynamic web applications and comprehensive e-commerce platforms.
                                    </p>
                                </div>
                                <div className="w-full flex justify-center items-end mt-auto">
                                    <img src="/service-laptop.png" alt="Web Development" className="h-48 lg:h-52 w-auto object-contain" />
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Bottom Grid: 2x2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Networking */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-full relative z-10">
                                <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Networking & Infrastructure</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                    We provide expert physical infrastructure solutions, including professional firewall installations and AP switch configurations to ensure secure, high-speed connectivity.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/service-marketing.png" alt="Networking" className="w-full h-auto object-contain max-h-[200px]" />
                            </div>
                        </motion.div>

                        {/* Artificial Intelligence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Artificial  Intelligence</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                    We leverage machine learning and natural language processing to build smart systems that enhance decision-making and provide predictive business insights.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/service-ai-new.png" alt="AI" className="w-full h-auto object-contain max-h-[200px]" />
                            </div>
                        </motion.div>

                        {/* UI/UX Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-[#0f172a] mb-4">UI/UX  Design</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                    Our design-first approach ensures every interface is visually appealing and user-friendly, aligning with your brand to maximize satisfaction and engagement.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/service-screens.png" alt="UI/UX" className="w-full h-auto object-contain max-h-[200px]" />
                            </div>
                        </motion.div>

                        {/* Digital Marketing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                            className="bg-gray-50 rounded-[2.5rem] p-10 pb-0 min-h-[340px] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative z-10 ">
                                <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Digital Marketing</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                    Our data-driven marketing strategies focus on SEO and brand identity to amplify your online presence and drive measurable growth for your business.
                                </p>
                            </div>
                            <div className="w-full flex justify-center items-end mt-auto">
                                <img src="/service-uiux.png" alt="Marketing" className="w-full h-auto object-contain opacity-90 max-h-[200px]" />
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
