"use client";

import { motion } from "framer-motion";
import { markazi, karla } from "@/fonts";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="py-16 px-6">
      <motion.h2
  className={`${markazi.className} text-5xl font-bold text-center mb-8 tracking-wide`}
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Our Work
</motion.h2>


      <div className="grid md:grid-cols-3 gap-6">
        {["Clothing Brand Website","Client Portfolio Website", "Course Platform Website"].map((item) => (
          <motion.div
            key={item}
            className="bg-[#F5F5DC] rounded shadow p-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-50 relative mb-4 rounded overflow-hidden">
              <Image
                src={`/${item}.png`}
                alt={`Screenshot ${item}`}
                fill
                className="object-cover"
              />
            </div>
            <p className={`${karla.className} text-center text-lg text-black`}>
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
