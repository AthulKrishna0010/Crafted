"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { karla, markazi, tektur } from "@/fonts";

const plans = [
  { name: "Crafted Lite", description: "A clean, simple online presence.", link: "/services#lite" },
  { name: "Crafted Plus", description: "Professional e-commerce & more.", link: "/services#plus" },
  { name: "Crafted Premium", description: "Full-scale, scalable solution with advanced support.", link: "/services#premium" },
];

const questions = [
  {
    question: "What is the primary goal of your website?",
    options: [
      "Showcase my portfolio or work",
      "Sell products or services online",
      "Establish a strong, professional brand presence",
    ],
  },
  {
    question: "What level of traffic do you anticipate on your website?",
    options: [
      "Low — a small audience to start with",
      "Moderate — expecting steady growth over time",
      "High — prepared for large volumes from day one",
    ],
    note: "Don’t worry if you’re unsure — we just need an estimate to recommend the right infrastructure.",
  },
  {
    question: "Do you require advanced features such as logins, dashboards, or payment integration?",
    options: [
      "No — a simple, straightforward site",
      "Some — a few interactive features would be useful",
      "Yes — fully equipped with advanced functionality",
    ],
    note: "This helps us understand how feature-rich and interactive your website needs to be.",
  },
  {
    question: "What level of ongoing support and maintenance do you expect?",
    options: [
      "Minimal — occasional check-ins",
      "Moderate — regular updates and assistance",
      "Comprehensive — priority support and proactive maintenance",
    ],
    note: "We’ll recommend a maintenance plan that aligns with your needs.",
  },
  {
    question: "Which aspect is most important for your website?",
    options: [
      "Simplicity and ease of use",
      "Driving sales and business growth",
      "Scalability and a strong corporate image",
    ],
  },
];


export default function QAWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultPlan, setResultPlan] = useState<number | null>(null);

  const handleAnswer = (choice: number) => {
    const updated = [...answers];
    updated[currentStep] = choice;
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculatePlan(updated);
    }
  };

  const calculatePlan = (responses: number[]) => {
    const score = responses.reduce((sum, val) => sum + val, 0);
    if (score <= 4) setResultPlan(0); // Lite
    else if (score <= 8) setResultPlan(1); // Plus
    else setResultPlan(2); // Premium
  };

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
            Find Your Perfect Plan
          </h1>
          <p
            className={`${tektur.className} text-2xl font-bold max-w-2xl mx-auto text-gray-200`}
          >
            Answer a few quick questions and we’ll recommend the best plan for you.
          </p>
        </motion.div>
      </section>

      {/* Wizard Section */}
      <section className="bg-black text-white py-20 px-6 min-h-[50vh]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            {resultPlan === null ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className={`${karla.className} text-3xl mb-6`}>
                  Question {currentStep + 1} of {questions.length}
                </h2>

                <p className="text-xl mb-4">{questions[currentStep].question}</p>

                {questions[currentStep].note && (
                  <p className="text-sm text-gray-400 mb-8 max-w-lg mx-auto">
                    {questions[currentStep].note}
                  </p>
                )}

                <div className="grid gap-4 md:grid-cols-1">
                  {questions[currentStep].options.map((opt, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className="bg-white/5 border border-gray-700 rounded-lg py-3 px-6 hover:bg-white/10 transition text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-gray-700 rounded-xl p-6 shadow-lg"
              >
                <h2 className={`${karla.className} text-3xl mb-4`}>
                  Recommended Plan:
                </h2>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {plans[resultPlan].name}
                </div>
                <p className="text-gray-300">{plans[resultPlan].description}</p>

                <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                  <motion.button
                    className={`${karla.className} bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setCurrentStep(0);
                      setAnswers([]);
                      setResultPlan(null);
                    }}
                  >
                    Start Over
                  </motion.button>

                  <Link href={plans[resultPlan].link}>
                    <motion.button
                      className={`${karla.className} bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Go to Plan
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </main>
  );
}
