"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, ShieldCheck, Zap, Monitor } from "lucide-react";

const features = [
    {
        icon: Database,
        title: "Big Data Analysis",
        description: "We analyze large data sets to reveal patterns and trends.",
        stats: "500+ Projects",
        iconBg: "bg-[#F43F5E]", // Pinkish red
        iconColor: "text-white",
    },
    {
        icon: ShieldCheck,
        title: "Secure Systems",
        description: "Ensuring your infrastructure is safe from modern threats.",
        stats: "500+ Projects",
        iconBg: "bg-[#10B981]", // Emerald
        iconColor: "text-white",
    },
    {
        icon: Zap,
        title: "Fast Performance",
        description: "Optimized solutions for maximum speed and efficiency.",
        stats: "500+ Projects",
        iconBg: "bg-[#6366F1]", // Indigo
        iconColor: "text-white",
    },
    {
        icon: Monitor,
        title: "Tech Support",
        description: "24/7 technical assistance for all your business needs.",
        stats: "500+ Projects",
        iconBg: "bg-[#F97316]", // Orange
        iconColor: "text-white",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 bg-[#59257A] relative overflow-hidden">
            {/* Background Wave */}
            <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
                <img src="/why-us-wave.png" alt="" className="w-full h-auto opacity-20" />
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10 max-w-7xl">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <span className="w-1 h-6 bg-white/30 block"></span>
                        <span className="text-white font-bold tracking-widest text-sm uppercase">
                            Why Choose Us
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Why Choose <span className="text-[#38bdf8]">Ellipza</span> <br className="md:hidden" /> Technologies?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-100 text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed opacity-90"
                    >
                        "To revolutionize the digital landscape by delivering innovative, reliable, and user-centric technology solutions that empower businesses and individuals worldwide."
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pt-6 pl-4 md:pt-8 md:pl-8"
                        >
                            {/* Floating Icon in Notch */}
                            <div className="absolute top-0 left-0 z-20">
                                <div className={`w-10 h-10 md:w-16 md:h-16 ${feature.iconBg} rounded-full flex items-center justify-center shadow-lg border-[3px] md:border-4 border-[#59257A]`}>
                                    <feature.icon className={`${feature.iconColor} w-5 h-5 md:w-7 md:h-7`} />
                                </div>
                            </div>

                            {/* Card Body with Cutout */}
                            <div
                                className="bg-[#DCCAE9] rounded-3xl md:rounded-[2.5rem] rounded-tl-none p-4 pt-10 md:p-8 md:pt-12 pb-6 h-full flex flex-col min-h-[200px] md:min-h-[320px] relative hover:-translate-y-2 transition-transform duration-300"
                                style={{
                                    // Defines the notch shape: a circle cut out at the top-left corner
                                    // Responsive mask size is tricky in inline styles, using a clamp or standard size that fits both or media query style if needed.
                                    // For simplicity and effectiveness, we can use a smaller fixed cut for mobile if we could, 
                                    // OR we can just use the larger cut which might look okay.
                                    // Let's try to simulate responsive mask via CSS variable or simple duplicate logic if needed, 
                                    // but CSS variables are cleaner. However, inline styles don't support media queries.
                                    // We will stick to a size that works for the 10-16 unit difference essentially.
                                    maskImage: "radial-gradient(circle at 0 0, transparent 1.6rem, black 1.7rem)",
                                    WebkitMaskImage: "radial-gradient(circle at 0 0, transparent 1.6rem, black 1.7rem)"
                                }}
                            >
                                <h3 className="text-sm md:text-2xl font-bold text-black mb-2 md:mb-4 mt-2 md:mt-6 leading-tight">{feature.title}</h3>
                                <p className="text-gray-700 text-[10px] md:text-sm leading-relaxed mb-auto opacity-80 line-clamp-4 md:line-clamp-none">
                                    {feature.description}
                                </p>

                                <div className="mt-4 md:mt-8 pt-2 md:pt-4">
                                    <span className="text-gray-800 font-bold text-[10px] md:text-sm tracking-wide block opacity-70">
                                        {feature.stats}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between pt-8 md:pt-10 px-4 text-center md:text-left gap-6 md:gap-0">
                    <h3 className="text-white font-bold uppercase tracking-wide text-sm md:text-lg">
                        You might be like to join with us
                    </h3>
                    <button className="px-8 py-3 rounded-full bg-[#3b82f6] text-white font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg text-sm md:text-base">
                        Contact <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
