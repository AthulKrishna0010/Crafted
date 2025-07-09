"use client";

import { motion } from "framer-motion";
import { karla, markazi, tektur } from "@/fonts";
import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "lite",
    title: "Crafted Lite",
    price: "₹5,000+",
    description: "A clean, simple online presence to showcase your work.",
    features: [
      { label: "Responsive design", included: true },
      { label: "SEO optimization", included: true },
      { label: "Basic hosting & deployment", included: true },
      { label: "Shopping cart & payments", included: false },
      { label: "Advanced scalability (Docker/Kubernetes)", included: false },
      { label: "Priority support & maintenance", included: false },
    ],
  },
  {
    id: "plus",
    title: "Crafted Plus",
    price: "₹12,000+",
    description: "Sell your products with a professional online store.",
    features: [
      { label: "Responsive design", included: true },
      { label: "SEO optimization", included: true },
      { label: "Basic hosting & deployment", included: true },
      { label: "Shopping cart & payments", included: true },
      { label: "Advanced scalability (Docker/Kubernetes)", included: false },
      { label: "Priority support & maintenance", included: false },
    ],
  },
  {
    id: "premium",
    title: "Crafted Premium",
    price: "₹20,000+",
    description: "For businesses that need scalability & advanced features.",
    features: [
      { label: "Responsive design", included: true },
      { label: "SEO optimization", included: true },
      { label: "Basic hosting & deployment", included: true },
      { label: "Shopping cart & payments", included: true },
      { label: "Advanced scalability (Docker/Kubernetes)", included: true },
      { label: "Priority support & maintenance", included: true },
    ],
  },
];

export default function ServicesPage() {
  const [highlight, setHighlight] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      setHighlight(hash);
    }
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-[url('/background-mobile.jpg')] md:bg-[url('/background.jpg')]"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative z-10 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`${markazi.className} text-5xl mb-4 drop-shadow pt-20`}
          >
            Our Services
          </h1>
          <p
            className={`${tektur.className} text-2xl font-bold max-w-2xl mx-auto text-gray-200`}
          >
            Choose a plan that matches your needs. Upgrade any time as your
            business grows.
          </p>
        </motion.div>
      </section>

      {/* Services Cards Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              id={service.id}
              key={service.title}
              className="bg-white/5 rounded-xl border border-gray-700 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{
                opacity: 0,
                y: 50,
                scale: highlight === service.id ? 1.1 : 1,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                boxShadow:
                  highlight === service.id
                    ? "0 0 30px rgba(0, 150, 255, 0.5)"
                    : "none",
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div>
                <h2 className={`${karla.className} text-2xl font-semibold mb-2`}>
                  {service.title}
                </h2>
                <div className="text-3xl font-bold mb-4 text-blue-400">
                  {service.price}
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-200"
                    >
                      {feat.included ? (
                        <span className="text-green-400">✔</span>
                      ) : (
                        <span className="text-red-500">✖</span>
                      )}
                      {feat.label}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
              <motion.button
                className={`${karla.className} mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition`}
                whileHover={{ scale: 1.05 }}
              >
                Request Quote
              </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
