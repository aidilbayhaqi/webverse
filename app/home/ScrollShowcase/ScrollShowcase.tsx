"use client";

import { useState } from "react";
import CaseItem from "./CaseItem";
import PreviewPanel from "./PreviewPanel";
import type { ShowcaseCase } from "./ShowcaseTypes";

import {
  FiGlobe,
  FiMessageCircle,
  FiBarChart2,
} from "react-icons/fi";

const cases: ShowcaseCase[] = [
  {
    id: 0,
    icon: FiGlobe,
    title: "AI Website Assistant",
    description:
      "AI membantu menjawab pertanyaan pengunjung website secara otomatis dan mengarahkan mereka ke layanan yang tepat.",
    image: "/ai-chat.png",
    testimonial: {
      quote:
        "AI ini membuat website kami aktif 24 jam dan jauh lebih responsif.",
      author: "Andi Pratama",
      role: "Founder, RetailHub",
    },
  },
  {
    id: 1,
    icon: FiMessageCircle,
    title: "AI Chatbot Automation",
    description:
      "Chatbot AI melayani customer melalui chat dengan bahasa natural seperti customer service manusia.",
    image: "/property-ai.png",
    testimonial: {
      quote:
        "Customer kami tidak menyadari ini AI karena percakapannya sangat natural.",
      author: "Dewi Lestari",
      role: "Head of Sales, PropertyPro",
    },
  },
  {
    id: 2,
    icon: FiBarChart2,
    title: "AI Analytics & Dashboard",
    description:
      "AI mencatat interaksi, menganalisis data, dan menyajikan insight bisnis secara real-time.",
    image: "/edukasi-ai.png",
    testimonial: {
      quote:
        "Keputusan bisnis jadi lebih cepat karena data langsung tersaji.",
      author: "Budi Santoso",
      role: "Operations Manager, EduTech",
    },
  },
];

export default function ScrollShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT – TEXT SCROLL */}
       <div className="space-y-40">
          {cases.map((item, index) => (
            <CaseItem
              key={item.id}
              item={item}
              index={index}
              onActive={setActiveIndex}
            />
          ))}
        </div>

        {/* RIGHT – IMAGE STICKY */}
         <PreviewPanel cases={cases} activeIndex={activeIndex} />
      </div>
    </section>
  );
}
