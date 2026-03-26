"use client";
import Image from "next/image";
import React from "react";
import { FiCheckCircle, FiClock, FiZap } from "react-icons/fi";
import ErpDashboard from "./AIandERPAbout";
import PortofolioAbout from "./PortofolioAbout";
import ScrollShowcase from "../ScrollShowcase/ScrollShowcase";

type BenefitPoint = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Benefit = {
  id: number;
  title: string;
  points: BenefitPoint[];
  image: string;
};

const benefits: Benefit[] = [
    {
    id: 1,
    title: "Respons Otomatis 24/7",
    points: [
      {
        title: "Balasan Instan",
        description: "AI langsung membalas pesan pelanggan tanpa menunggu admin.",
        icon: <FiZap />,
      },
      {
        title: "Aktif di Luar Jam Kerja",
        description: "Tetap melayani customer meskipun bisnis sedang offline.",
        icon: <FiClock />,
      },
      {
        title: "Tidak Kehilangan Lead",
        description: "Setiap pesan tercatat dan ditangani otomatis oleh AI.",
        icon: <FiCheckCircle />,
      },
    ],
    image: "/edukasi-ai.png",
  },
  {
    id: 2,
    title: "AI Human-Like Conversation",
    points: [
      {
        title: "Bahasa Natural",
        description: "Percakapan terasa seperti customer service manusia.",
        icon: <FiZap />,
      },
      {
        title: "Paham Konteks",
        description: "AI memahami kebutuhan pelanggan dari setiap pertanyaan.",
        icon: <FiCheckCircle />,
      },
      {
        title: "Lebih Meyakinkan",
        description: "Meningkatkan kepercayaan dan kenyamanan customer.",
        icon: <FiClock />,
      },
    ],
    image: "/edukasi-ai.png",
  },
  {
    id: 3,
    title: "AI Human-Like Conversation",
    points: [
      {
        title: "Bahasa Natural",
        description: "Percakapan terasa seperti customer service manusia.",
        icon: <FiZap />,
      },
      {
        title: "Paham Konteks",
        description: "AI memahami kebutuhan pelanggan dari setiap pertanyaan.",
        icon: <FiCheckCircle />,
      },
      {
        title: "Lebih Meyakinkan",
        description: "Meningkatkan kepercayaan dan kenyamanan customer.",
        icon: <FiClock />,
      },
    ],
    image: "/edukasi-ai.png",
  },
];

const About = () => {
  return (
    <>
    <div className="">
      <ScrollShowcase/>
    </div>

    <section className="bg-[#121212] text-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 reveal" data-reveal='up'>
          Diciptakan untuk Pengalaman Customer dari Awal hingga Akhir
        </h2>

        {/* Benefit Rows */}
        <div className="space-y-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
             {/* LEFT CARD — CONTENT (Title 1/2 + List 1/2) */}
              <div
                className="md:col-span-8 border border-green-900/60 rounded-2xl
                bg-[#0f0f0f] p-8 reveal" data-reveal='left'
              >
                <div className="flex flex-col md:flex-row gap-6 h-full">

                  {/* TITLE — 1/2 */}
                  <div className="md:w-1/2 m-auto">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-green-400 leading-tight text-center justify-center">
                      {benefit.title}
                    </h3>
                  </div>

                 {/* LIST — 1/2 (Icon + Title + Description) */}
                <div className="md:w-1/2 flex flex-col justify-center gap-4">
                  {benefit.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      
                      {/* Icon */}
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-md
                        bg-green-500/10 text-green-400">
                        {point.icon}
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="font-semibold text-white">
                          {point.title}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {point.description}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
                </div>
              </div>

              {/* RIGHT CARD — IMAGE (2/3) */}
              <div
                className="md:col-span-4 border border-green-900/40 rounded-2xl
                bg-[#0f0f0f] p-6 flex items-center justify-center reveal" data-reveal='left'
              >
                <div className="relative w-full h-[220px] md:h-[300px]">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section>
      <ErpDashboard></ErpDashboard>
    </section>
    <section>
      <PortofolioAbout></PortofolioAbout>
    </section>
    
    </>
  );
};

export default About;
