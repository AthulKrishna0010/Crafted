"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { markazi, karla, tektur } from "@/fonts";

export default function ContactPage() {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      setError("Message is required when selecting 'Other' as Project Type.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://crafted-cqso.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSuccess("Your message has been sent! We’ll get back to you soon.");
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
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-[url('/contact.jpg')]"
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
            Let’s Work Together
          </h1>
          <p
            className={`${tektur.className} text-2xl font-bold max-w-2xl mx-auto text-gray-200`}
          >
            Tell us about your project, and we’ll get back to you shortly.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black text-white py-20 px-6 min-h-[50vh]">
        <div className="max-w-lg mx-auto">
          <motion.div
            className="bg-white/5 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${karla.className} text-3xl mb-6 text-center`}>
              Contact Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className={`${karla.className} text-lg space-y-4`}
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-black p-3 rounded"
                placeholder="Name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-black p-3 rounded"
                placeholder="Email"
                type="email"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-black p-3 rounded"
                placeholder="WhatsApp Number (Optional)"
                type="tel"
              />

              <div className="relative">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full border border-gray-700 bg-black p-3 rounded text-white appearance-none pr-10"
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

              <div className="relative mt-4">
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full border border-gray-700 bg-black p-3 rounded text-white appearance-none pr-10"
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

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-black p-3 rounded"
                placeholder={
                  formData.projectType === "Other"
                    ? "Please describe your project (required)"
                    : "Additional details (optional)"
                }
                rows={4}
              />

              {error && (
                <p className={`${karla.className} text-red-500 text-md mb-2`}>{error}</p>
              )}
              {success && (
                <p className={`${karla.className} text-[#006D2c] text-md mb-2`}>{success}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="bg-blue-600 text-white py-2 px-4 rounded w-full font-bold mt-4 disabled:opacity-50"
                type="submit"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
