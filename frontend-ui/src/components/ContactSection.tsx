"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { markazi, karla } from "@/fonts";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    
    projectType: "",
    plan: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.name || !formData.email) {
      setError("Name and Email are required.");
      return;
    }

    if (formData.projectType === "Other" && !formData.message.trim()) {
      setError("Message is required when Project Type is 'Other'.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://crafted-t0q4.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccess("Your message was sent successfully! We’ll be in touch.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        
        projectType: "",
        plan: "",
        message: "",
      });
    } catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message);
    setError(err.message || "An error occurred. Please try again.");
  } else {
    console.error(err);
    setError("An unexpected error occurred.");
  }
}
 finally {
      setLoading(false);
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

          {error && (
            <p className={`${karla.className} text-red-500 text-sm mb-2`}>{error}</p>
          )}
          {success && (
            <p className={`${karla.className} text-green-500 text-md mb-2`}>{success}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="bg-white text-black py-2 px-4 rounded w-full font-bold disabled:opacity-50"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
