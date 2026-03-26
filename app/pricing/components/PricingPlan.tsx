'use client'
import React from "react";

const monthlyPlans = [
  {
    title: "Starter",
    price: "$99",
    desc: "Perfect for small businesses starting automation",
    features: [
      "Basic AI Chatbot",
      "Landing Page",
      "Email Support",
      "Basic Analytics",
    ],
  },
  {
    title: "Professional",
    price: "$249",
    desc: "For growing businesses with automation needs",
    features: [
      "Advanced AI Chatbot",
      "Website + Funnel",
      "CRM Integration",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$499",
    desc: "Full-scale automation for large businesses",
    features: [
      "Custom AI System",
      "ERP Integration",
      "Automation Workflow",
      "Dedicated Support",
    ],
  },
];

const yearlyPlans = [
  {
    title: "Starter Yearly",
    price: "$999",
    desc: "Save more with yearly plan for basic needs",
    features: ["AI Chatbot", "Landing Page", "Email Support"],
  },
  {
    title: "Professional Yearly",
    price: "$2499",
    desc: "Best for scaling business automation",
    features: ["Advanced AI", "Full Website", "CRM + Analytics"],
  },
  {
    title: "Enterprise Yearly",
    price: "$4999",
    desc: "Complete automation ecosystem",
    features: ["Custom AI", "ERP System", "Full Integration"],
  },
];

export default function PricingPage() {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">
            Pricing Plans
          </h1>
          <p className="text-white/60">
            Choose the best plan for your business automation needs
          </p>
        </div>

        {/* ===================== */}
        {/* MONTHLY */}
        {/* ===================== */}
        <div className="mb-28">

          <h2 className="text-2xl font-semibold mb-10 text-center text-gray-300">
            Monthly Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {monthlyPlans.map((plan, index) => (
              <div
                key={index}
                className={`
                  relative p-8 rounded-2xl border border-white/10 
                  bg-white/5 backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-2xl
                  ${plan.highlight ? "scale-105 border-white/20 bg-white/10" : ""}
                `}
              >
                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-2">
                  {plan.title}
                </h3>

                {/* PRICE */}
                <p className="text-4xl font-bold mb-4">
                  {plan.price}
                  <span className="text-sm text-gray-400"> /month</span>
                </p>

                <p className="text-gray-400 mb-6">
                  {plan.desc}
                </p>

                {/* FEATURES */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
                  Get Started
                </button>

                {/* HIGHLIGHT BADGE */}
                {plan.highlight && (
                  <div className="absolute top-4 right-4 text-xs bg-white/10 px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

      {/* ===================== */}
{/* YEARLY */}
{/* ===================== */}
<div>

  <h2 className="text-2xl font-semibold mb-12 text-center text-gray-300">
    Yearly Plans
  </h2>

  <div className="flex flex-col gap-8 max-w-4xl mx-auto">

    {yearlyPlans.map((plan, index) => (
      <div
        key={index}
        className="
          p-8 rounded-2xl border border-white/10 
          bg-white/5 backdrop-blur-xl
          transition-all duration-500
          hover:-translate-y-1 hover:shadow-xl
        "
      >

        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* LEFT */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              {plan.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {plan.desc}
            </p>

            {/* FEATURES */}
            <ul className="space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">✔</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT (PRICE + CTA) */}
          <div className="flex flex-col justify-between items-start md:items-end gap-4">

            <p className="text-3xl font-bold">
              {plan.price}
              <span className="text-sm text-gray-400"> /year</span>
            </p>

            <button className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              Choose Plan
            </button>

          </div>

        </div>

      </div>
    ))}

  </div>
</div>

      </div>
    </section>
  );
}