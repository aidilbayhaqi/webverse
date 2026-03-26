'use client'
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: 6.5,
      suffix: "M++",
      desc: "Percakapan ditangani oleh Halo AI. Secara otomatis.",
    },
    {
      value: 42,
      suffix: "%",
      label: "sales",
      desc: "Setelah menggunakan Halo AI dalam 3 bulan.",
    },
    {
      value: 96,
      suffix: "%",
      desc: "Lebih suka jawaban Halo AI dibanding manusia.",
    },
    {
      value: 20,
      suffix: "X",
      desc: "Lebih hemat biaya dibanding CS manual.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Label */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
          <span className="uppercase text-gray-400 font-medium">
            Berdasarkan Angka
          </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl font-bold mb-16">
          Hasil <span className="text-green-500">Webverse</span>
        </h2>

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 border-t border-white/10"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="py-12 pr-10 border-r last:border-r-0 border-white/10 
              transition-all duration-300 hover:bg-white/5 hover:translate-y-[-4px]"
            >
              <div className="text-5xl font-semibold flex items-start gap-2">

                {inView && (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    decimals={item.value % 1 !== 0 ? 1 : 0}
                  />
                )}

                <span>{item.suffix}</span>

                {item.label && (
                  <span className="text-sm text-gray-400 mt-3">
                    {item.label}
                  </span>
                )}
              </div>

              <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-[240px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}