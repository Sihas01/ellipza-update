"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.png";

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "Solution", id: "solution" },
  { name: "Why Us", id: "why-us" },
  { name: "Resources", id: "resources" },
  { name: "Contact Us", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 64; // h-16 navbar height
    const targetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setIsMenuOpen(false); // Close mobile menu immediately 
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm py-2">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center px-4">
          {/* Desktop Logo */}
          <div className="hidden md:flex items-center z-10">
            <img src={logo.src} alt="Ellipza Logo" />
          </div>

          {/* Center Nav (Desktop) */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-2 bg-white p-1.25 rounded-full shadow-[0_0_14px_0_rgba(0,0,0,0.16)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative h-9.5 rounded-full px-4 text-sm font-medium tracking-[0.02em]"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-black rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Button (Desktop) */}
          <div className="hidden md:block ml-auto z-10">
            <button className="px-6 py-2.5 rounded-full bg-[#59257A] text-white text-sm font-medium hover:bg-[#6b2e8f] transition-colors">
              Get Started
            </button>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="md:hidden flex items-center justify-between w-full z-10">
            {/* Hamburger Left */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo Center */}
            <img src={logo.src} alt="Ellipza Logo" className="h-10 mx-auto" />

            {/* Placeholder for right */}
            <div className="w-6" />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button className="w-full mt-2 px-4 py-3 rounded-lg bg-[#59257A] text-white text-sm font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PAGE SECTIONS (demo) */}
      <div className="pt-20">
        {navItems.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className="min-h-screen flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${
                ["#f0f9ff", "#faf5ff", "#fff7ed", "#f0fdf4", "#fef2f2"][index]
              }, white)`,
            }}
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {item.name}
              </h2>
              <p className="text-gray-600">
                Scroll to see the navbar update
              </p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
