"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4",
  "/video4.mp4",
];

export default function VideoSlider() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev < videos.length - 1 ? prev + 1 : prev));
  };

  const prev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="relative w-full min-h-screen bg-[#121212] text-white overflow-hidden flex items-center justify-center">

      {/* VIDEO CONTAINER */}
      <div className="relative w-full max-w-6xl px-4">

        {videos.map((video, index) => {
          const isActive = index === active;

          return (
            <video
              key={index}
              src={video}
              controls
              className={`
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-full max-h-[80vh]
                rounded-3xl shadow-2xl
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isActive
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 pointer-events-none"
                }
              `}
            />
          );
        })}

      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        disabled={active === 0}
        className={`
          absolute left-6 md:left-12
          p-4 rounded-full
          bg-white/10 backdrop-blur
          transition
          hover:bg-white/20
          disabled:opacity-30 disabled:cursor-not-allowed
        `}
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        disabled={active === videos.length - 1}
        className={`
          absolute right-6 md:right-12
          p-4 rounded-full
          bg-white/10 backdrop-blur
          transition
          hover:bg-white/20
          disabled:opacity-30 disabled:cursor-not-allowed
        `}
      >
        <ChevronRight size={28} />
      </button>

      {/* INDICATOR */}
      <div className="absolute bottom-10 flex gap-3">
        {videos.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition
              ${i === active ? "bg-white scale-125" : "bg-white/40"}
            `}
          />
        ))}
      </div>

    </section>
  );
}