"use client";

import { useEffect, useRef } from "react";
import type { ShowcaseCase } from "./ShowcaseTypes";

type CaseItemProps = {
  item: ShowcaseCase;
  index: number;
  onActive: (index: number) => void;
};

export default function CaseItem({
  item,
  index,
  onActive,
}: CaseItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const Icon = item.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActive(index);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, onActive]);

  return (
    <div
      ref={ref}
      className="min-h-[70vh] flex flex-col justify-center gap-6"
    >
      {/* ICON (React Icon) */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl
        bg-green-500/10 text-green-400">
        <Icon size={24} />
      </div>

      {/* TITLE — FITUR AI */}
      <h3 className="text-3xl font-extrabold text-white leading-tight">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 max-w-md">
        {item.description}
      </p>

      {/* TESTIMONIAL */}
      <div className="border-l-4 border-green-500 pl-5 mt-4 max-w-lg">
        <p className="text-gray-300 italic">
          “{item.testimonial.quote}”
        </p>

        <div className="mt-3">
          <p className="font-semibold text-white">
            {item.testimonial.author}
          </p>
          <p className="text-sm text-gray-500">
            {item.testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
