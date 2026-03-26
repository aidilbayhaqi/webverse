'use client'
import React, { useState } from "react";

const topProjects = [
  {
    title: "AI Chatbot Lead System",
    image: "/chatbot.png",
  },
  {
    title: "Smart ERP Dashboard",
    image: "/dashboard.png",
  },
  {
    title: "AI Landing Page Funnel",
    image: "/webverse.png",
  },
  {
    title: "Automation Website",
    image: "/ecommerce.jpg",
  },
  {
    title: "AI Customer Support",
    image: "/chatbot.png",
  },
];

export function TopPortfolioSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % topProjects.length);
  const prev = () =>
    setIndex((index - 1 + topProjects.length) % topProjects.length);

  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="relative group">

          {/* IMAGE */}
          <img
            src={topProjects[index].image}
            className="w-full h-[400px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl" />

          {/* TITLE */}
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-semibold text-green-400">
              {topProjects[index].title}
            </h3>
          </div>

          {/* BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-500 p-3 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-500 p-3 rounded-full"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}