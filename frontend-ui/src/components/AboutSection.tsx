"use client";
import { motion } from "framer-motion";
import { markazi ,karla} from "@/fonts";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 text-black bg-white text-center">
      <motion.h2 
        className={`${markazi.className} text-5xl font-bold mb-4`}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Why Choose Us?
      </motion.h2>
      <p className={` ${karla.className} max-w-xl mx-auto`}>
        We specialize in delivering fast, responsive, SEO-friendly websites tailored to your needs.
      </p>
    </section>
  );
}
