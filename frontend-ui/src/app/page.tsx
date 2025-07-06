"use client";

import dynamic from "next/dynamic";

// hero is already client-only
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });

// all other sections — you can choose `ssr: false` if needed
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"), { ssr: false });
const ServiceSection = dynamic(() => import("@/components/ServiceSection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), { ssr: false });
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServiceSection />
      <ProcessSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
