"use client";

import { motion } from "framer-motion";
import { markazi, karla } from "@/fonts";

export default function ServiceSection() {
  const services = ["Custom Sites", "E-Commerce", "Landing Pages", "SEO"];

  return (
    <section className="py-16 px-6 bg-gray-100">
      {/* Heading animation */}
      <motion.h2
        className={` ${markazi.className} text-5xl font-bold mb-8 text-black flex justify-center`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex">
          {"Our Services".split("").map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay:
                  0.05 *
                  Math.abs(idx - Math.floor("Our Services".length / 2)),
                duration: 0.5,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {services.map((service, index) => (
          <motion.div
            key={service}
            className="bg-white rounded border border-black p-4 text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}

            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
          >
            <h3 className={` ${karla.className} font-semibold text-lg`}>{service}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
