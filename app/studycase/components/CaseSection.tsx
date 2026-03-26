'use client'
import { useScrollReveal } from "@/app/lib/useScrollReveal";
import React from "react";

export default function CaseStudyHero() {
    useScrollReveal()
  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden px-15 py-10">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* GLOW BLOBS */}
      <div className="absolute pointer-events-none w-[500px] h-[500px] bg-green-500/20 blur-[140px] top-[-120px] left-[-120px]"></div>
      <div className="absolute pointer-events-none w-[400px] h-[400px] bg-green-400/10 blur-[120px] bottom-[-100px] right-[-100px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <div className="max-w-xl reveal" data-reveal='left'>

          <p className="text-green-400 tracking-widest mb-4 text-sm">
            CASE STUDIES
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Turning Business Problems
            <br />
            Into Smart AI Solutions
          </h1>

          <p className="text-white/70 mb-8 leading-relaxed">
            Discover how we help companies automate workflows, capture leads,
            and scale operations using AI chatbot, smart websites, and ERP systems.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-400 rounded-xl font-semibold transition shadow-lg shadow-green-500/20">
              View Case Studies
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative reveal" data-reveal='right'>

          <img
            src="/dashboard.png"
            className="w-[380px] rounded-xl shadow-2xl rotate-[-6deg]"
          />

          <img
            src="/chatbot.png"
            className="absolute top-10 -right-10 w-[220px] rounded-xl shadow-2xl rotate-[10deg]"
          />

          <div className="absolute inset-0 rounded-xl shadow-[0_0_60px_rgba(34,197,94,0.3)] pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}