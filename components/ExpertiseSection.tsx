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
    },
    {
        id: "data",
        title: "Data Scientists",
        role: "Data Scientists",
        description: "Unlocking insights from complex datasets to drive business decisions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "mobile",
        title: "Mobile App Developers",
        role: "Mobile App Developers",
        description: "Creating seamless mobile experiences for iOS and Android platforms.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "uiux",
        title: "UI/UX Designers",
        role: "UI/UX Designers",
        description: "Designing intuitive and beautiful interfaces that users love.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "ai",
        title: "AI Specialists",
        role: "AI Specialists",
        description: "Pushing the boundaries of what's possible with artificial intelligence.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
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
            <div className="container mx-auto px-6 md:px-16 lg:px-24 ">

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

                {/* Content Area */}
                <div className="flex flex-col gap-8 mb-8">
                    {/* Images Row */}
                    <div
                        className="flex flex-row items-start gap-4 lg:gap-6 min-h-[400px] lg:h-[450px] overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {/* Featured / Active Card */}
                        <div className="flex-none w-[70vw] md:flex-1 lg:flex-[1.5] h-[400px] lg:h-full snap-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeItem?.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full relative rounded-[2.5rem] overflow-hidden group shadow-lg"
                                >
                                    <motion.img
                                        src={activeItem?.image}
                                        alt={activeItem?.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Side / Peeking Cards (Sequential Order) */}
                        {(() => {
                            const currentIndex = expertiseList.findIndex(item => item.id === activeId);
                            const galleryItems = [
                                ...expertiseList.slice(currentIndex + 1),
                                ...expertiseList.slice(0, currentIndex)
                            ];

                            return galleryItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    onClick={() => setActiveId(item.id)}
                                    className="relative flex-none w-24 md:w-28 lg:w-32 h-[400px] lg:h-full rounded-[2rem] md:rounded-[2rem] overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 snap-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center px-2">
                                        <span className="text-gray-400 font-medium text-[8px] md:text-[10px] uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis">
                                            {item.role}
                                        </span>
                                    </div>
                                </motion.div>
                            ));
                        })()}
                    </div>

                    {/* Active Text Description */}
                    <div className="space-y-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem?.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
                                    {activeItem?.title}
                                </h3>
                                <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
                                    {activeItem?.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center md:justify-end gap-4 mt-4">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        className="w-14 h-14 rounded-full bg-[#93c5fd]/30 text-[#1d4ed8] flex items-center justify-center hover:bg-[#1d4ed8] hover:text-white transition-all duration-300 shadow-sm"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="w-14 h-14 rounded-full bg-[#93c5fd]/30 text-[#1d4ed8] flex items-center justify-center hover:bg-[#1d4ed8] hover:text-white transition-all duration-300 shadow-sm"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>

            </div>
        </section>
    );
}
