"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ArrowLine from "@/components/ArrowLine";
import { karla, markazi } from "@/fonts";


export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-50px", once: false });

  const fullText = "Our Process";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!isInView) return;

    setTypedText(""); // reset
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [isInView]);

  const steps = ["Consult", "Design", "Build", "Launch"];

  // Hardcoded arrow positions (in %)
  const arrowPositions = [
    { x1: "25", x2: "50" },
    { x1: "50", x2: "75" },
    { x1: "75", x2: "100" },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6 relative bg-black">
      {/* Header with typewriter */}
      <h2 className={`${markazi.className} text-5xl font-bold text-center mb-12 text-white min-h-[2.5rem]`}>
        {typedText}
        <span className="animate-pulse">|</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-around gap-4 relative">
        {/* Boxes */}
        {steps.map((step, index) => (
          <motion.div
            key={step}
            className="bg-white min-w-[120px] min-h-[120px] flex flex-col justify-center items-center p-4 rounded shadow text-center relative z-10 border border-black"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className={`${karla.className} text-2xl font-bold mb-2 text-black`}>
              {index + 1}
            </div>
            <p className="text-black">{step}</p>
          </motion.div>
        ))}

        {/* Hardcoded arrows */}
        <svg
          className="absolute top-1/2 left-0 w-full h-[4px] hidden md:block z-0"
          viewBox="0 0 100 4"
          preserveAspectRatio="none"
        >
          {arrowPositions.map((pos, index) => (
            <ArrowLine
              key={index}
              x1={pos.x1}
              x2={pos.x2}
              delay={0.8 + index * 0.3}
            />
          ))}
        </svg>

      </div>
    </section>
  );
}
