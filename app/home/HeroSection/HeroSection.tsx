"use client";
import Image from "next/image";
import { useScrollReveal } from "@/app/lib/useScrollReveal";
import { BsWhatsapp } from "react-icons/bs";
import SliderCategory from "./SliderCategory";

export default function HeroSection() {
  useScrollReveal()
  return (

  <>
  
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6 pt-10 grid-bg">
 
   {/* Spacer untuk navbar */}
   <div className="h-20"></div>
 
   {/* Background Glow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-green-500 rounded-full blur-xl opacity-30 animate-glowGreen"></div>
     <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-green-900 rounded-full blur-xl opacity-30 animate-glowCyan"></div>
 
     {/* Lapisan gradasi hitam */}
     <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
   </div> 
 
   {/* === Text Center === */}
   <div className="relative z-10 text-center max-w-3xl reveal" data-reveal='up'>
    <div className="inline-block px-4 py-2 mb-4 rounded-full bg-green-500/10 border border-green-500/30">
    <h1 className="text-sm font-semibold text-green-400">
      #1 Indonesia’s Smart Lead System For Business
    </h1>
  </div>
     <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
      41% Closing Lebih Banyak, Hemat waktu, Biaya Dan Elevate Bisnis  Anda 5X Dengan <span className="text-green-500"> Smart Lead System</span>
     </h1>
 
     <p className="text-gray-300 text-center text-sm md:text-lg mb-8">
      Sistem chatbot otomatis 24/7, Smart Business Website
      Tangani Kerjaan Admin Secara Otomatis  & Human Like
  
     </p>
      {/* Buttons */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  {/* Primary */}
  <button
    className="flex items-center gap-3 bg-green-500 text-black px-8 py-3 rounded-full
    font-semibold hover:bg-green-400 w-full sm:w-auto cursor-pointer hover:scale-105 transition-all "
  >
    <BsWhatsapp className="text-xl" />
    <span>Konsultasi Gratis</span>
  </button>

  {/* Secondary */}
  <button
    className="group flex items-center gap-2 border border-white/80 text-white
    px-8 py-3 rounded-full transition w-full sm:w-auto cursor-pointer
    hover:bg-white hover:text-black"
  >
    <span className="font-bold">Lihat Demo</span>
    <span
      className="inline-block transform transition-transform duration-300
      group-hover:translate-x-2 font-bold"
    >
      →
    </span>
  </button>
</div>
   </div>
 
   {/* Floating Images */}
   <div className="relative w-full flex justify-center z-10 mt-20">
     <SliderCategory/>
   </div>
 </section>
  </>

  );
}
