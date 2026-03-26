import React from "react";

export default function PortfolioHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none 
      bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.1),transparent_50%)]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]
      bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
      bg-[size:40px_40px]" />

      {/* GLOW BLOBS */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[140px] top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-green-400/10 blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* RIGHT VISUAL */}
        <div className="relative">

          {/* MAIN IMAGE */}
          <img
            src="/dashboard.png"
            className="w-[400px] rounded-xl shadow-2xl rotate-[-6deg]"
          />

          {/* FLOATING 1 */}
          <img
            src="/chatbot.png"
            className="absolute top-10 -right-10 w-[220px] rounded-xl shadow-2xl rotate-[10deg]"
          />

          {/* FLOATING 2 */}
          <img
            src="/webverse.png"
            className="absolute -bottom-10 left-10 w-[200px] rounded-xl shadow-2xl rotate-[-8deg]"
          />

          {/* GLOW */}
          <div className="absolute inset-0 rounded-xl shadow-[0_0_80px_rgba(34,197,94,0.3)] pointer-events-none" />

        </div>

         {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <p className="text-green-400 tracking-widest mb-4 text-sm">
            PORTFOLIO
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Real AI Solutions
            <br />
            Built for Real Business Impact
          </h1>

          <p className="text-white/70 mb-8 leading-relaxed">
            Explore how we help businesses automate operations, generate leads,
            and scale faster using AI chatbot, smart websites, and ERP systems.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-400 rounded-xl font-semibold transition shadow-lg shadow-green-500/20">
              Explore Projects
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}