import Image from "next/image";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#121212] p-10">

          {/* LEFT - CARA LAMA */}
          <div className="space-y-8">

            {/* BADGE */}
            <div className="flex justify-center">
              <span className="px-6 py-2 bg-gray-300 text-black rounded-full font-semibold text-sm">
                Cara Lama
              </span>
            </div>

            {/* IMAGE */}
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/comparison.png"
                alt="Cara Lama"
                fill
                className="object-contain"
              />
              
            </div>

            {/* LIST */}
            <div className="space-y-6">
              {[
                "Website hanya menampilkan informasi",
                "Semua pertanyaan masuk tanpa penyaringan",
                "Respon tergantung pada ketersediaan tim",
                "Tidak ada prioritas yang jelas",
                "Tools terpisah dan tidak terintegrasi",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-red-500 p-1 rounded">
                    <X size={16} />
                  </div>
                  <p className="text-gray-200 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - SMART LEAD */}
          <div className="space-y-8">

            {/* BADGE */}
            <div className="flex justify-center">
              <span className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold text-sm">
                Smart Lead System
              </span>
            </div>

            {/* IMAGE */}
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/comparison.png"
                alt="Smart Lead"
                fill
                className="object-contain"
              />
             
            </div>

            {/* LIST */}
            <div className="space-y-6">
              {[
                "Respon pintar, instant, otomatis 24/7",
                "Penyaringan pertanyaan secara otomatis",
                "Fokus ke calon pelanggan siap ditindaklanjuti",
                "Respon customer konsisten tanpa beban manual",
                "Satu sistem yang terintegrasi",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-green-500 p-1 rounded">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-200 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}