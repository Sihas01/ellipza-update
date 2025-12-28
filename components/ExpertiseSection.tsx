"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Smartphone, Monitor, Database, Brain } from "lucide-react";

// Mock Data
const expertiseList = [
    {
        id: "software",
        title: "Software Engineers",
        role: "Software Engineers",
        description: "Our engineers develop robust, scalable applications that combine technical expertise with creativity to transform complex ideas into functional software.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
        icon: Code2,
    },
    {
        id: "data",
        title: "Data Scientists",
        role: "Data Scientists",
        description: "Unlocking insights from complex datasets to drive business decisions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        icon: Database,
    },
    {
        id: "mobile",
        title: "Mobile App Developers",
        role: "Mobile App Developers",
        description: "Creating seamless mobile experiences for iOS and Android platforms.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        icon: Smartphone,
    },
    {
        id: "uiux",
        title: "UI/UX Designers",
        role: "UI/UX Designers",
        description: "Designing intuitive and beautiful interfaces that users love.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        icon: Monitor,
    },
    {
        id: "ai",
        title: "AI Specialists",
        role: "AI Specialists",
        description: "Pushing the boundaries of what's possible with artificial intelligence.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        icon: Brain,
    },
];

export default function ExpertiseSection() {
    const [activeId, setActiveId] = useState("software");

    const handleNext = () => {
        const currentIndex = expertiseList.findIndex((item) => item.id === activeId);
        const nextIndex = (currentIndex + 1) % expertiseList.length;
        setActiveId(expertiseList[nextIndex].id);
    };

    const handlePrev = () => {
        const currentIndex = expertiseList.findIndex((item) => item.id === activeId);
        const prevIndex = (currentIndex - 1 + expertiseList.length) % expertiseList.length;
        setActiveId(expertiseList[prevIndex].id);
    };

    const activeItem = expertiseList.find((item) => item.id === activeId);

    return (
        <section id="resources" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-[#59257A] font-bold tracking-widest text-xs mb-4 uppercase border-l-2 border-[#59257A] pl-3"
                        >
                            Meet Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-[#0f172a]"
                        >
                            Solving Challenges With <br />
                            Proven <span className="inline-block align-middle bg-yellow-100 p-1 rounded-lg"><div className="w-8 h-8 bg-yellow-400 rounded rotate-12"></div></span> Expertise
                        </motion.h2>
                    </div>

                    <div className="max-w-md text-gray-500 text-sm leading-relaxed">
                        At Ellipza Technologies, our strength lies in the diversity and expertise of our team. We bring together a group of dedicated professionals with a shared passion for innovation and a commitment to delivering exceptional results.
                    </div>
                </div>

                {/* Expanding Gallery */}
                <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
                    {expertiseList.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                layout
                                onClick={() => setActiveId(item.id)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${isActive ? "lg:flex-[3] flex-[3]" : "lg:flex-[1] flex-[1] grayscale hover:grayscale-0"
                                    }`}
                            >
                                <motion.img
                                    layoutId={`image-${item.id}`}
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                {/* Content for Active State */}
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="absolute bottom-0 left-0 p-8 w-full"
                                    >
                                        <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                                        <p className="text-white/80 text-sm max-w-md hidden md:block">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                )}

                                {/* Content for Inactive State (Label at bottom) */}
                                {!isActive && (
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center px-2">
                                        <span className="text-white/90 font-medium text-xs uppercase tracking-wider block truncate">
                                            {item.role}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Controls / Active Detail (Bottom) */}
                <div className="mt-8 flex items-center justify-between">
                    <div className="max-w-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="block lg:hidden" // Show description below on mobile if active item text is hidden
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{activeItem?.title}</h3>
                                <p className="text-gray-500 text-sm">{activeItem?.description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex gap-4 ml-auto">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
