'use client'
import React, { useState } from "react";

const services = [
  {
    title: "Website",
    description:
      "Build high-converting websites integrated with AI automation and lead generation systems.",
    image: "/website.png",
    features: [
      "Custom design",
      "SEO optimized",
      "Fast performance",
      "Lead capture system",
    ],
  },
  {
    title: "Social Media",
    description:
      "Automate your content, engagement, and audience growth with AI-powered tools.",
    image: "/social.png",
    features: [
      "Content automation",
      "AI caption generator",
      "Auto scheduling",
      "Analytics tracking",
    ],
  },
  {
    title: "AI Agent",
    description:
      "Deploy AI chatbot for sales, customer support, and lead qualification 24/7.",
    image: "/ai-agent.png",
    features: [
      "AI chatbot",
      "WhatsApp integration",
      "Auto reply system",
      "Lead qualification",
    ],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Basic");

  const tabs = ["Basic", "Premium", "Custom"];

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1),transparent_40%)]"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-white/60">
            Smart solutions powered by AI to grow your business
          </p>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col gap-28">

          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={service.image}
                  className="w-[320px] rounded-xl shadow-2xl"
                />

                {/* GLOW */}
                <div className="absolute inset-0 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.25)] pointer-events-none"></div>
              </div>

              {/* CONTENT */}
              <div className="w-full">

                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                  Paket {service.title}
                </h3>

                {/* TABS */}
                <div className="flex gap-3 mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1 rounded-full text-sm transition ${
                        activeTab === tab
                          ? "bg-green-500 text-white"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <p className="text-white/70 mb-6">
                  {service.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="px-5 py-2 bg-green-500 hover:bg-green-400 rounded-lg text-sm font-semibold transition shadow-lg shadow-green-500/20">
                  Get Started
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
}