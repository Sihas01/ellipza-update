"use client";

import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, duration = 1.5, decimals = 0 }: { from?: number, to: number, duration?: number, decimals?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "0px" }); // Fixed execution margin for mobile

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                if (node) node.textContent = value.toFixed(decimals);
            }
        });

        return () => controls.stop();
    }, [from, to, duration, inView, decimals]);

    return <span ref={nodeRef}>{from.toFixed(decimals)}</span>;
}

export default function AboutUsSection() {
    return (
        <section id="about" className="py-2 md:py-20 bg-[#F7F9FC] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
                    <div className="lg:col-span-7">
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
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400 leading-tight"
                        >
                            Ellipza Always Provides <br />
                            <span className="text-[#0f172a]">Powerful ⚛️ Solutions</span>
                        </motion.h2>
                    </div>

                    <div className="lg:col-span-5">
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
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 h-auto lg:h-[450px]">

                    {/* Column 1 (Revenue & Open Collaboration) */}
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 lg:gap-6">
                        {/* Revenue Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 bg-white rounded-3xl p-4 md:p-5 flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-shadow relative overflow-hidden h-[180px] md:h-auto"
                        >
                            {/* Decoration Icon */}
                            <div className="absolute -top-6 md:-top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32">
                                <img src="/about-gear.png" alt="Gear" className="w-full h-full object-contain" />
                            </div>

                            <div className="mt-14 md:mt-20">
                                <p className="text-[10px] md:text-sm font-bold text-gray-900 mb-1 leading-tight">Powered by smart integrations</p>
                                <h3 className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-1">$ <Counter from={0} to={3.2} decimals={1} /> <span className="text-lg md:text-2xl text-gray-400 font-medium">M+</span></h3>
                                <p className="text-[10px] md:text-xs text-gray-400 font-medium leading-tight">Revenue optimized for our clients</p>
                            </div>
                        </motion.div>

                        {/* Open for Collab Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="min-h-[3rem] md:h-16 bg-white rounded-2xl md:rounded-3xl px-3 md:px-5 py-2 flex items-center justify-center gap-2 md:gap-3 border border-gray-300 shadow-sm"
                        >
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                                <CheckCircle2 size={10} strokeWidth={4} className="text-white md:w-3 md:h-3" />
                            </div>
                            <span className="font-bold text-gray-600 text-[10px] md:text-sm leading-tight">Open for collaboration</span>
                        </motion.div>
                    </div>

                    {/* Column 2 (Trusted & Performance) */}
                    <div className="col-span-1 lg:col-span-4 flex flex-col gap-4 lg:gap-6">
                        {/* Trusted Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="min-h-[3rem] md:h-16 bg-white rounded-2xl md:rounded-3xl px-3 md:px-5 py-2 flex items-center gap-2 md:gap-3 border border-gray-300 shadow-sm"
                        >
                            {/* Avatar Stack */}
                            <div className="flex -space-x-1.5 md:-space-x-2 shrink-0">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" />
                                    </div>
                                ))}
                            </div>
                            <span className="font-bold text-gray-600 text-[10px] md:text-sm whitespace-normal leading-tight">Trusted by 500+ CEOs</span>
                        </motion.div>

                        {/* Performance Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="flex-1 bg-white rounded-3xl p-4 md:p-5 flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-shadow h-[180px] md:h-auto"
                        >
                            <div>
                                <p className="text-[10px] md:text-sm font-bold text-gray-800 leading-snug">
                                    Seamless and <br />
                                    Reliable performance
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-1"><Counter from={0} to={98} /> <span className="text-2xl md:text-3xl">%</span></h3>
                                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-bold">Performance up time</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Column 3 (Purple Description Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="col-span-2 lg:col-span-5 bg-[#59257A] rounded-3xl p-10 flex flex-col justify-between text-white relative overflow-hidden group"
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
                                <h3 className="text-5xl font-bold mb-1"><Counter from={0} to={49} /> +</h3>
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
