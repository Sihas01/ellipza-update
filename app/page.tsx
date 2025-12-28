"use client";

import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9FC]">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
