'use client'
import Image from "next/image";
import { useScrollReveal } from "@/app/lib/useScrollReveal";
import ScrollShowcase from "../../home/components/ScrollShowcase/ScrollShowcase";

export default function AboutSection() {
  useScrollReveal()
  return (
    <>  
    <section className="relative flex flex-col md:flex-row bg-[#121212] text-white px-6 md:px-16 py-16 md:py-28 w-full">

      {/* Kiri */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12 reveal" data-reveal="left">
        <h3 className="text-lg md:text-xl font-light mb-3">Mengapa Webverse?</h3>

        <h1 className="text-3xl md:text-4xl font-black leading-snug">
          BUILDING{" "}
          <span className="text-green-500">SMART LEAD SYSTEM</span>
        </h1>

        {/* Grid gambar responsive */}
        <div className="pt-10 grid gap-5">
          <Image
            src="/preview-ai.png"
            width={500}
            height={500}
            alt=""
            className="rounded-md animate-float-slow reveal z-10"
            data-reveal="right"
          />
         
        </div>
      </div>

      {/* Kanan */}
      <div className="w-full md:w-1/2 leading-relaxed reveal" data-reveal="right">
        <h2 className="text-2xl md:text-3xl font-black mb-4">WEBVERSE</h2>

        <p className="text-gray-300 mb-4">
          Bukan sekedar jasa pembuatan website,
          kami adalah sahabat pertumbuhan bisnis anda melalui digitalisasi.
        </p>

        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Berpengalaman menghandle pembuatan website</li>
          <li>Komunikatif dan solutif menyelesaikan masalah</li>
          <li>Portofolio yang kuat menjamin kualitas produk</li>
          <li>Profesional dalam dunia bisnis digital</li>
        </ul>

        <div className="pt-6">
          <button className="border border-green-500 text-green-500 px-5 py-2 rounded-xl hover:bg-green-500 hover:text-black transition">
            Hubungi Kami
          </button>
        </div>
      </div>
      
    </section>

     

   {/* Bagian bawah icon
<div className="bg-black text-white text-center text-sm w-full grid grid-cols-2 md:grid-cols-4 gap-8 px-10 md:px-16 pb-16 reveal" data-reveal="left">

  <div className="flex flex-col items-center">
    <Image src="/webdev.png" width={150} height={150} alt="" />
    <p className="pt-3 text-gray-300">Lorem ipsum</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/aiagent.jpg" width={150} height={150} alt="" className="rounded-full" />
    <p className="pt-3 text-gray-300">Lorem ipsum</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/content.png" width={150} height={150} alt="" />
    <p className="pt-3 text-gray-300">Lorem ipsum</p>
  </div>

  <div className="flex flex-col items-center">
    <Image src="/prodigi.png" width={150} height={150} alt="" />
    <p className="pt-3 text-gray-300">Lorem ipsum</p>
  </div>

</div> */}

    {/* carousel */}
   
    </>
  );
}
