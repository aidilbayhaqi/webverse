'use client'
import React, { useEffect, useRef } from "react";

const projects = [
  "/dashboard.png",
  "/chatbot.png",
  "/webverse.png",
  "/ecommerce.jpg",
  "/landing-page.jpg",
  "/dashboard.png",
  "/chatbot.png",
  "/webverse.png",
  "/ecommerce.jpg",
  "/landing-page.jpg",
];

export default function ServiceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const slide = () => {
      if (!container) return;

      scrollAmount += 1; // kecepatan (ubah di sini)

      container.scrollLeft = scrollAmount;

      // looping infinite
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(slide, 20); // makin kecil makin cepat

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Projects
        </h2>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden p-5"
        >
          {/* DUPLICATE biar loop halus */}
          {[...projects, ...projects].map((img, i) => (
            <div
              key={i}
              className="
                min-w-[280px] overflow-hidden
                bg-white/5 border border-white/10
                backdrop-blur-md
                hover:scale-105 transition
                hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
              "
            >
              <img
                src={img}
                className="w-full h-[180px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-white text-sm font-semibold">
                  AI Project {i + 1}
                </h3>
                <p className="text-green-400 text-xs">
                  AI / ERP / Web App
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}