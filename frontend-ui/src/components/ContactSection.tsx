"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { markazi, karla } from "@/fonts";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    projectType: "",
    plan: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      console.error("Name and Email are required");
      return;
    }

    if (formData.projectType === "Other" && !formData.message) {
      console.error("Message is required when project type is Other");
      return;
    }

    console.log("Form data submitted:", formData);
    // …submit to API here
  };

  return (
    <section
      className="py-16 px-6 relative text-white"
      style={{
        backgroundImage: "url('/contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <motion.h2
          className={`${markazi.className} text-5xl font-bold mb-8`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className={`${karla.className} text-lg space-y-4 text-white`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Email"
            type="email"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="WhatsApp Number (Optional)"
            type="tel"
          />
          <input
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Budget (Optional)"
          />

          <div className="relative">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full border p-2 rounded text-white bg-black border-white appearance-none"
            >
              <option value="">Select Project Type</option>
              <option value="Website">Website</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              ▼
            </div>
          </div>


          <div className="w-full space-y-1">
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-2">
              
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="flex-1 border p-2 rounded text-white bg-black border-white appearance-none"
                >
                  <option value="">Preferred Plan</option>
                  <option value="Crafted Lite">Crafted Lite</option>
                  <option value="Crafted Plus">Crafted Plus</option>
                  <option value="Crafted Premium">Crafted Premium</option>
                  <option value="Not Yet Decided">Not Yet Decided</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  ▼
                
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Not sure?{" "}
            <a href="/services" className="underline hover:text-white">
              Check our Services page
            </a>
            .
          </p>



          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder={
              formData.projectType === "Other"
                ? "Please describe your project (required for Other)"
                : "Additional details (optional)"
            }
            rows={4}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black py-2 px-4 rounded w-full font-bold"
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
