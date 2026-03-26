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
    title: "Pembuatan Website Modern",
    description:
      "Hadirkan bisnis Anda di dunia digital tanpa ribet. Kami sediakan solusi end-to-end pembuatan website yang modern, aman, SEO-friendly, dan siap pakai untuk mengembangkan usaha Anda.",
    image: "/ai-chat.png",
    testimonial: {
      quote:
        "Prosesnya sangat cepat dan tim sangat mengerti kebutuhan bisnis kami. Hasil websitenya modern dan mudah dikelola!",
      author: "Andi Pratama",
      role: "Founder, RetailHub",
    },
  },
  {
    id: 1,
    icon: FiMessageCircle,
    title: "Smart AI Chatbot",
    description:
      "Bukan sekadar auto-reply biasa. Berbekal teknologi kecerdasan buatan, chatbot kami memahami konteks percakapan pelanggan dan memberikan solusi yang tepat layaknya Customer Service profesional terbaik Anda.",
    image: "/property-ai.png",
    testimonial: {
      quote:
        "AI ini bukan cuma membalas dengan template, tapi benar-benar bisa merekomendasikan produk sesuai kebutuhan spesifik klien kami dengan sangat akurat.",
      author: "Dewi Lestari",
      role: "Head of Sales, PropertyPro",
    },
  },
  {
    id: 2,
    icon: FiBarChart2,
    title: "Smart CRM & ERP System",
    description:
      "Sistem kami mengotomatisasi pencatatan interaksi pelanggan dan arus kerja internal, memastikan tidak ada data yang terlewat dan operasional tetap berjalan mulus.",
    image: "/edukasi-ai.png",
    testimonial: {
      quote:
        "Sistem ini benar-benar merapikan administrasi kami. Laporan bulanan yang biasanya butuh berhari-hari, kini bisa selesai secara otomatis dalam hitungan detik.",
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
