"use client";

import { motion } from "framer-motion";
import { karla, tektur } from "@/fonts";

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center
    bg-[url('/background-mobile.jpg')] 
    md:bg-[url('/background.jpg')]"
        
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-600/50" />

      {/* Transparent black overlay */}
      <div className="absolute inset-0 bg-black/40" />

      

      {/* Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className={` ${tektur.className} text-6xl font-bold`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We Build Beautiful, Effective Websites
        </motion.h1>

        <motion.p
          className={`${karla.className} mt-4 text-2xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Fast. Responsive. Affordable.
        </motion.p>

        <motion.button
          className={`${karla.className} mt-6 bg-white text-black font-extrabold py-2 px-4 rounded shadow `}
          whileHover={{ scale: 1.1 }}
        >
          Get a Free Quote
        </motion.button>
      </div>
    </section>
  );
}
