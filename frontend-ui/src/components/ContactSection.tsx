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
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  try {
    console.log(formData);

    if (!formData.name || !formData.email) {
      throw new Error("Name and Email are required");
    }

    // …submit to API here
  } catch (err) {
    console.error("Submission error:", err);
  }
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

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border p-2 rounded text-white bg-black border-white appearance-none"
          >
            <option className="bg-black text-white" value="">
              Select Project Type
            </option>
            <option className="bg-black text-white" value="Website">
              Website
            </option>
            <option className="bg-black text-white" value="E-commerce">
              E-commerce
            </option>
            <option className="bg-black text-white" value="Portfolio">
              Portfolio
            </option>
            <option className="bg-black text-white" value="Other">
              Other
            </option>
          </select>


          {/* Show textarea only if 'Other' is selected */}
          {formData.projectType === "Other" && (
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Please describe your project"
              rows={4}
            />
          )}

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
