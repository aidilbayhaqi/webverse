// import React from "react";
// import Navbar from "../layout/navbar";
// import Image from "next/image";
// import InfiniteLogoCarousel from "./aboutComponents/carouselIcon";
// import LayananWeb from "./aboutComponents/LayananWeb";
// import LayananAi from "./aboutComponents/LayananAi";
// import LayananSosmed from "./aboutComponents/LayananSosmed";
// import LayananBundling from "./aboutComponents/LayananBundling";
// import KelebihanLayanan from "./aboutComponents/KelebihanLayanan";
// import LayananSlider from "./aboutComponents/LayananSlider";
// import Footer from "../layout/footer";

// const Page = () => {
//   return (
//     <>
//       <Navbar />

//       {/* SECTION HERO */}
//       <section className="relative grid-bg bg-black text-white px-6 md:px-16 py-24 md:py-32 overflow-hidden">

//         {/* Text Content */}
//         <div className="text-center relative z-20">
//           <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
//             <span className="text-green-500">LAYANAN</span> KAMI
//           </h1>

//           <p className="max-w-2xl mx-auto mb-6 text-gray-300 leading-relaxed text-sm md:text-base">
//             Layanan terbaik dalam digitaliasi bisnis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque veritatis quasi illo sit unde quam facere assumenda illum nulla officia.
//           </p>

//           <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition">
//             Konsultasi Sekarang
//           </button>
//         </div>

//         {/* HERO IMAGE */}
//         <div className="relative flex justify-center mt-10 md:mt-16 z-10">
//           <Image
//             src="/layanan-hero.png"
//             alt="layanan"
//             width={600}
//             height={600}
//             className="w-64 sm:w-80 md:w-[450px] lg:w-[550px] drop-shadow-2xl animate-float-fast"
//           />
//         </div>

//         {/* BOTTOM GLOW */}
//         <div
//           className="absolute bottom-0 left-0 w-full h-64 bg-green-500 opacity-70 blur-2xl
//           [mask-image:linear-gradient(to_top,black,transparent)]"
//         ></div>
//       </section>
//       <div className="">
//         <InfiniteLogoCarousel/>
//       </div>

//       <div className="">
//         <LayananWeb/>
//         <LayananAi/>
//         <LayananSosmed/>
//         <LayananBundling/>
//       </div>

//       <div className="">
//         <KelebihanLayanan/>
//         <LayananSlider/>
//       </div>

//       <Footer/>
//     </>
//   );
// };

// export default Page;
'use client'
import Image from "next/image";
import Navbar from "../layout/navbar";
import ComparisonSection from "./components/ComparasionAbout";
import VideoSlider from "../home/components/aboutHome/VideoAbout";
import AboutSolution from "./components/AboutSolution";
import AboutStats from "./components/AboutStats";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import FeaturesSection from "./components/FeatureSection";
import AboutDescription from "./components/AboutDescription";
import Footer from "../layout/footer";
import { useScrollReveal } from "../lib/useScrollReveal";
import AboutSection from "./components/AboutSection";
import Contact from "../Contact";

export default function page() {
  useScrollReveal()
  
  return (
    <>
    <Navbar/>
    <section
      className="relative w-full min-h-screen text-white"
      style={{
        backgroundImage: "url('/about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-32 
        grid md:grid-cols-2 gap-12 items-center

        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        p-12
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

        {/* LEFT CONTENT */}
        <div className="reveal" data-reveal='left'>

          <div className="flex items-center gap-2 text-sm mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-white/80">
              INDONESIA #1 AI SALES
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-6">
            What is
            <span className="text-green-400"> Smart Lead System?</span>
          </h1>

          <p className="text-white/80 text-lg max-w-xl mb-10">
           Smart Lead System adalah sistem terintegrasi yang menggabungkan website, alur interaksi, dan otomatisasi cerdas untuk mengelola calon pelanggan secara lebih efektif.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-12">

            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              <FaWhatsapp />
              Konsultasi via WhatsApp
            </button>

            <button className="flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full hover:bg-white/30 transition">
              Konsultasi dengan AI Expert
              <FiArrowRight />
            </button>

          </div>

          {/* Integrations */}
          <div className="flex items-center gap-4 text-white/70">

            <span>Terintegrasi dengan</span>

            <img src="/whatsapp.png" className="h-6" />
            <img src="/gmail.png" className="h-6" />
            <img src="/telegram.png" className="h-6" />

            <span className="ml-6">Official Partner</span>

            <img src="/meta.png" className="h-6" />

          </div>

        </div>

        {/* RIGHT CHAT MOCKUP */}
        <div className="relative reveal" data-reveal='right'>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-full max-w-md ml-auto">

            <div className="space-y-4">

              <div className="bg-white text-black p-3 rounded-xl text-sm max-w-xs">
                Oke kak, alamat ke Jl Sudirman No 50 Jakarta Selatan.
              </div>

              <div className="bg-white text-black p-3 rounded-xl text-sm max-w-xs">
                Ongkir pakai J&T Rp 10.000 ya kak.
              </div>

              <div className="bg-green-400 text-black p-3 rounded-xl text-sm ml-auto max-w-xs">
                okeee
              </div>

              <div className="bg-white text-black p-3 rounded-xl text-sm max-w-xs">
                Baik Kak Andi, berikut invoice pesanan 🙏
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    <section>
      <AboutDescription/>
    </section>

     <section>
      <AboutSection/>
    </section>

    <section>
      <AboutStats/>
    </section>

    <section>
      <ComparisonSection/>
    </section>
  
    <section>
      <FeaturesSection/>
    </section>

    <section>
      <AboutSolution/>
    </section>
    <section>
      <Contact/>
    </section>

    <Footer/>

    
    </>
  );
}