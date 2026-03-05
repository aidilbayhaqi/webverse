"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/app/lib/useScrollReveal";

type CardItem = {
  title: string;
  desc: string;
  icon?: string;
};

export default function InfiniteCardCarousel() {
  useScrollReveal()
  const trackRef = useRef<HTMLDivElement>(null);

  const cards: CardItem[] = [
    {
      title: "Custom Website",
      desc: "Website modern dengan performa optimal dan desain profesional."
    },
    {
      title: "SEO Optimization",
      desc: "Optimasi mesin pencari agar bisnis lebih mudah ditemukan."
    },
    {
      title: "Website Maintenance",
      desc: "Perawatan lengkap untuk menjaga performa website Anda."
    },
    {
      title: "Website Maintenance",
      desc: "Perawatan lengkap untuk menjaga performa website Anda."
    },
  ];

  // Gandakan card untuk efek infinite
  const loopCards = [...cards, ...cards];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;

    const animate = () => {
      position -= 0.4; // kecepatan
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0; // reset ketika sudah setengah panjang (loop)
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="overflow-hidden w-full py-10 bg-black reveal" data-reveal="right">
      <div
        ref={trackRef}
        className="flex gap-6 px-4"
        style={{ width: `${loopCards.length * 300}px` }}
      >
        {loopCards.map((card, i) => (
          <div
            key={i}
            className="min-w-[260px] md:min-w-[300px] bg-gradient-to-b from-green-500 to-green-800 border rounded-2xl p-6 shadow-lg hover:shadow-green-500/20 transition "
          >
            <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
            <p className="text-black text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
