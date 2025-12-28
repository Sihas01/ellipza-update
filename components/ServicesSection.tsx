"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
    return (
        <section id="solution" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-sm mb-4 uppercase"
                        >
                            | Our Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight"
                        >
                            Accelerate Business with <br />
                            Premium <span className="inline-block bg-teal-100 text-teal-600 px-2 py-1 rounded-lg text-4xl rotate-3 transform shadow-sm">💎</span> Services
                        </motion.h2>
                    </div>

                    <div className="max-w-md">
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

                {/* Grid Layout */}
                <div className="flex flex-col gap-6">

                    {/* Top Section: Mobile (Tall) + Software/Web (Stacked) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

                        {/* Mobile App Development (Tall Card) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-5 bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#0f172a] mb-4">Mobile App Development</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    Our team creates feature-rich iOS and Android applications that combine advanced functionality with intuitive design for an engaging user experience.
                                </p>
                            </div>

                            {/* Phone Mockup Placeholder */}
                            <div className="relative mx-auto w-48 lg:w-56 h-80 lg:h-96 bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                                <div className="w-full h-full bg-slate-800 relative">
                                    {/* Screen UI Placeholder */}
                                    <div className="p-4 space-y-4 pt-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                            <div className="h-2 w-20 bg-white/20 rounded"></div>
                                        </div>
                                        <div className="h-32 w-full bg-white/10 rounded-xl"></div>
                                        <div className="flex gap-2">
                                            <div className="h-20 w-1/2 bg-white/10 rounded-xl"></div>
                                            <div className="h-20 w-1/2 bg-white/10 rounded-xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Stack: Software & Web */}
                        <div className="lg:col-span-7 flex flex-col gap-6 h-full">

                            {/* Software Development */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex-1 bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-center overflow-hidden"
                            >
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Software Development</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        We deliver robust, scalable, and secure software solutions—from enterprise applications to custom builds—ensuring high performance and seamless integration.
                                    </p>
                                </div>
                                <div className="flex-1 relative w-full h-40 lg:h-full flex items-center justify-center">
                                    {/* Desktop/Tablet/Phone illustration */}
                                    <div className="relative">
                                        <div className="w-48 h-32 bg-white border border-gray-200 rounded-lg shadow-lg relative z-10 flex items-center justify-center">
                                            <span className="text-xs text-blue-500 font-bold">Desktop</span>
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 w-16 h-24 bg-white border border-gray-200 rounded-lg shadow-lg z-20 flex items-center justify-center">
                                            <span className="text-[10px] text-purple-500 font-bold">Mobile</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Web Development */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex-1 bg-gray-50 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-center overflow-hidden"
                            >
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Web Development</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        We develop responsive, SEO-friendly websites ranging from high-speed static pages to dynamic web applications and comprehensive e-commerce platforms.
                                    </p>
                                </div>
                                <div className="flex-1 w-full flex items-center justify-center">
                                    {/* Browser Window Mockup */}
                                    <div className="w-full max-w-[280px] h-32 bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden flex flex-col">
                                        <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center gap-1 px-3">
                                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="flex-1 bg-slate-50 p-2">
                                            <div className="w-full h-full border-2 border-dashed border-gray-200 rounded flex items-center justify-center">
                                                <span className="text-xs text-gray-400">Web App</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Bottom Section: Grid of 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Networking */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-gray-50 rounded-3xl p-8 lg:p-10 min-h-[300px] flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Networking & Infrastructure</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                We provide expert physical infrastructure solutions, including professional firewall installations and AP switch configurations to ensure secure, high-speed connectivity.
                            </p>
                            <div className="mt-auto flex justify-center">
                                <div className="w-full h-32 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 relative overflow-hidden flex items-center justify-center">
                                    <div className="flex items-end gap-2">
                                        <div className="w-8 h-12 bg-gray-700/80 rounded-sm"></div>
                                        <div className="w-8 h-16 bg-gray-700/80 rounded-sm"></div>
                                        <div className="w-8 h-10 bg-gray-700/80 rounded-sm"></div>
                                        <div className="w-20 h-1 bg-blue-500 absolute bottom-4 left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* AI */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="bg-gray-50 rounded-3xl p-8 lg:p-10 min-h-[300px] flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Artificial Intelligence</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                We leverage machine learning and natural language processing to build smart systems that enhance decision-making and provide predictive business insights.
                            </p>
                            <div className="mt-auto flex justify-center">
                                <div className="w-32 h-32 rounded-full bg-purple-100 flex items-center justify-center relative">
                                    <div className="w-32 h-32 absolute inset-0 border-4 border-dashed border-purple-300 rounded-full animate-spin-slow"></div>
                                    <span className="text-purple-600 font-bold text-xl">AI</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* UI/UX */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="bg-gray-50 rounded-3xl p-8 lg:p-10 min-h-[300px] flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">UI/UX Design</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                Our design-first approach ensures every interface is visually appealing and user-friendly, aligning with your brand to maximize satisfaction and engagement.
                            </p>
                            <div className="mt-auto relative h-32 w-full overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-40 bg-white shadow-lg rounded-xl border border-gray-100 transform -rotate-12 translate-y-4"></div>
                                <div className="absolute top-4 left-12 w-32 h-40 bg-white shadow-lg rounded-xl border border-gray-100 transform rotate-6 z-10"></div>
                                <div className="absolute top-8 left-28 w-32 h-40 bg-white shadow-lg rounded-xl border border-gray-100 transform -rotate-3 z-20"></div>
                            </div>
                        </motion.div>

                        {/* Marketing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                            className="bg-gray-50 rounded-3xl p-8 lg:p-10 min-h-[300px] flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">Digital Marketing</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                Our data-driven marketing strategies focus on SEO and brand identity to amplify your online presence and drive measurable growth for your business.
                            </p>
                            <div className="mt-auto flex justify-center">
                                <div className="relative w-full h-32 flex items-center justify-center">
                                    {/* Abstract shapes for marketing/doodles */}
                                    <svg viewBox="0 0 200 100" className="w-full h-full opacity-50">
                                        <path d="M20,80 Q50,10 80,80 T140,80" fill="none" stroke="#e11d48" strokeWidth="2" />
                                        <circle cx="160" cy="30" r="10" fill="#facc15" />
                                        <rect x="10" y="20" width="20" height="20" fill="#3b82f6" transform="rotate(15)" />
                                        <path d="M100,20 L120,50 L80,50 Z" fill="#22c55e" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
