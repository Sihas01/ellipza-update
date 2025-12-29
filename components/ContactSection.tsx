"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-5 md:py-24 bg-[#F7F9FC] relative overflow-hidden font-sans">
            {/* Background Decor (Subtle Wave visual approx) */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply">
                <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M-100 600 C 200 400, 400 800, 800 600 S 1200 200, 1600 400" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                    <path d="M-100 650 C 200 450, 400 850, 800 650 S 1200 250, 1600 450" stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.5" />
                    <path d="M-100 700 C 200 500, 400 900, 800 700 S 1200 300, 1600 500" stroke="#e5e7eb" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-16">

                    {/* Left Column: Info */}
                    <div className="lg:w-2/5 pt-10">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-[#59257A] font-bold tracking-widest text-xs mb-4 uppercase border-l-2 border-[#59257A] pl-3"
                        >
                            Contact Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-gray-300">Connect With Our</span> <br />
                            <span className="text-[#0f172a]">Next Gen </span>
                            <span className="inline-flex items-center justify-center bg-green-100 w-10 h-10 rounded-lg align-middle mx-1 shadow-sm rotate-3">
                                <Phone size={20} className="text-green-600 fill-current" />
                            </span>
                            <span className="text-[#0f172a]"> Tech</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-sm leading-relaxed mb-10"
                        >
                            At Ellipza Technologies, our strength lies in the diversity and expertise of our team. We bring together a group of dedicated professionals with a shared passion for innovation and a commitment to delivering exceptional results.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <div className=" items-center gap-5 hidden md:flex">
                                <div className="flex items-center gap-1">
                                    <Phone size={20} className="text-[#0f172a]" />
                                    <span className="text-gray-700 font-bold text-sm">+1012 3456 789</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <Mail size={20} className="text-[#0f172a]" />
                                    <span className="text-gray-700 font-bold text-sm">demo@gmail.com</span>
                                </div>
                            </div>

                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4 mt-8 "
                        >
                            {['facebook', 'twitter', 'instagram'].map((social) => (
                                <div key={social} className="w-8 h-8 rounded-full bg-[#9333ea] text-white hidden md:flex items-center justify-center cursor-pointer hover:bg-[#7e22ce] transition-colors shadow-md">
                                    {/* Simple placeholder icons */}
                                    {social === 'facebook' && <span className="font-bold text-sm">f</span>}
                                    {social === 'twitter' && <span className="font-bold text-sm">t</span>}
                                    {social === 'instagram' && <span className="font-bold text-sm">in</span>}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-3/5"
                    >
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                                    <input type="text" placeholder="John" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                                    <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                                <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                    <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                                    <input type="tel" placeholder="+1 012 3456 789" className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 py-1" />
                                </div>
                            </div>

                            {/* Radio Group */}
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-4">What service you want?</label>
                                <div className="flex flex-wrap gap-6 text-sm">
                                    {['Web Development', 'Mobile App', 'AI Solutions', 'Digital Marketing', 'Other'].map((service, idx) => (
                                        <label key={service} className="flex items-center gap-2 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    defaultChecked={idx === 0}
                                                    className="peer sr-only"
                                                />
                                                <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:bg-black peer-checked:border-black transition-all"></div>
                                                {/* Checkmark specific to image? Standard radio dot usually fine, but image shows 'tick'. */}
                                                <svg className="w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span className="text-gray-500 font-medium group-hover:text-black transition-colors peer-checked:text-black">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="border-b border-gray-300 focus-within:border-black transition-colors pb-1">
                                <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                                <textarea placeholder="Write your message.." rows={1} className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 resize-none py-1"></textarea>
                            </div>

                            <div className="flex justify-center pt-4 md:justify-end">
                                <button type="submit" className="px-8 py-3 rounded-full bg-[#3b82f6] text-white font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                                    <Send size={16} /> <span className="text-sm">Send Message</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
