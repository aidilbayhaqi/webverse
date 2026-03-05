"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/app/lib/useScrollReveal";
import Image from "next/image";

type CardItem = {
  title: string;
  img: string;
};

export default function InfiniteLogoCarousel() {
  useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);

  const cards: CardItem[] = [
    {
      title: "Web Development",
      img: "/icons/web.png",
    },
    {
      title: "AI Automation",
      img: "/icons/ai.png",
    },
    {
      title: "Brand Design",
      img: "/icons/design.png",
    },
    {
      title: "Marketing",
      img: "/icons/marketing.png",
    },
  ];

  const loopCards = [...cards, ...cards];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;

    const animate = () => {
      position -= 0.4;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
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
        className="flex gap-10 px-4 items-center"
        style={{ width: `${loopCards.length * 260}px` }}
      >
        {loopCards.map((item, i) => (
          <div
            key={i}
            className="min-w-[200px] md:min-w-[240px] backdrop-blur-md border
                       rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg
                       hover:shadow-green-500/30 transition-all duration-300"
          >
            {/* Logo Bulat */}
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
             
              <Image width={100} height={100} src={item.img} alt={item.title} className="w-14 h-14 object-contain" />
            </div>

            {/* Judul */}
            <h3 className="text-lg font-semibold text-white mt-4">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
