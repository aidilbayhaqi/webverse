'use client'
import React, { useState } from "react";

const faqs = [
  {
    question: "What is AI automation and how can it help my business?",
    answer:
      "AI automation helps streamline your business processes such as customer support, lead generation, and operations using intelligent systems like chatbots and automation tools.",
  },
  {
    question: "Do you provide AI chatbot for WhatsApp?",
    answer:
      "Yes, we provide AI chatbot integration for WhatsApp, allowing your business to automatically respond, qualify leads, and manage customer interactions 24/7.",
  },
  {
    question: "Can I request a custom solution?",
    answer:
      "Absolutely. We offer custom solutions tailored to your business needs, including website, chatbot, and ERP systems.",
  },
  {
    question: "How long does the project take?",
    answer:
      "Project duration depends on complexity, but typically ranges from 1–4 weeks for standard implementations.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60">
            Everything you need to know about our AI solutions
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-lg overflow-hidden transition-all"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium">
                  {faq.question}
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}