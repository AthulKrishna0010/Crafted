"use client";

import { motion } from "framer-motion";
import {markazi,karla} from "@/fonts";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "They designed a beautiful and functional store for my clothing brand. Sales went up 40%!",
      author: "– Fashion Brand Owner",
    },
    {
      text: "My portfolio site now truly reflects my work. Sleek and responsive — love it!",
      author: "– Creative Professional",
    },
    {
      text: "Our course platform is fast, easy to use, and students love it. Great job!",
      author: "– EdTech Founder",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.h2
        className={`${markazi.className} text-5xl font-bold text-black text-center mb-8`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded shadow p-4 text-center max-w-sm mx-auto border border-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
            }}
          >
            <p className="text-gray-700 italic">“{testimonial.text}”</p>
            <p className={`${karla.className} mt-2 font-bold text-black`}>{testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
