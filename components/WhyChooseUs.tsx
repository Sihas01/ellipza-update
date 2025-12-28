"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart, Database, Monitor, ShieldCheck, Zap } from "lucide-react";

const features = [
    {
        icon: Database,
        title: "Big Data Analysis",
        description: "We analyze large data sets to reveal patterns and trends.",
        stats: "500+ Projects",
        color: "bg-pink-500",
    },
    {
        icon: ShieldCheck,
        title: "Secure Systems",
        description: "Ensuring your infrastructure is safe from modern threats.",
        stats: "500+ Projects",
        color: "bg-emerald-500",
    },
    {
        icon: Zap,
        title: "Fast Performance",
        description: "Optimized solutions for maximum speed and efficiency.",
        stats: "500+ Projects",
        color: "bg-indigo-500",
    },
    {
        icon: Monitor,
        title: "Tech Support",
        description: "24/7 technical assistance for all your business needs.",
        stats: "500+ Projects",
        color: "bg-orange-500",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 bg-[#59257A] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZD0iTTAuOTksMTI3LjVDMjIuMTcsMTE3LjUsMTY1LjE3LDcxLjUsMzM1LjE3LDk1LjVDNTQ2LjY3LDEyNC44Myw2ODEuNSwxNTQuNSw4NDEuNSwxMzIuNUMxMDAxLjUsMTEwLjUsMTE4Ni41LDM2LjUsMTQzNy41LDQ5LjVWMzIwSDAuOTlWMTI3LjVaIj48L3BhdGg+PC9zdmc+')] bg-no-repeat bg-cover pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-white/80 font-bold tracking-widest text-xs mb-4 uppercase border-l-2 border-white pl-3"
                    >
                        Why Choose Us
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why Choose <span className="text-[#bfdbfe]">Ellipza</span> Technologies?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-100 text-sm md:text-base max-w-2xl mx-auto"
                    >
                        "To revolutionize the digital landscape by delivering innovative, reliable, and user-centric technology solutions that empower businesses and individuals worldwide."
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 pt-12 hover:-translate-y-2 transition-transform duration-300"
                        >
                            {/* Notched Icon Container */}
                            <div className="absolute -top-6 left-8">
                                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3`}>
                                    <feature.icon size={24} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">{feature.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed mb-8">
                                {feature.description}
                            </p>

                            <div className="border-t border-gray-100 pt-4">
                                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{feature.stats}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-10">
                    <h3 className="text-white font-bold uppercase tracking-wide text-lg mb-6 md:mb-0">You might be like to join wiht us</h3>
                    <button className="px-8 py-3 rounded-full bg-[#3b82f6] text-white font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                        Contact <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
