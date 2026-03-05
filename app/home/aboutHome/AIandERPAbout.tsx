import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "AI Lead Automation",
    description:
      "Otomatisasi distribusi dan follow-up leads menggunakan AI untuk meningkatkan konversi bisnis Anda.",
    image: "/porto2.png",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Pantau performa penjualan, marketing, dan operasional secara real-time dalam satu dashboard terpadu.",
    image: "/porto2.png",
  },
  {
    title: "Integrated CRM & WhatsApp",
    description:
      "Kelola komunikasi pelanggan langsung dari sistem ERP dengan integrasi WhatsApp dan CRM.",
    image: "/porto2.png",
  },
  {
    title: "Smart Financial Reporting",
    description:
      "Laporan keuangan otomatis, akurat, dan mudah dipahami untuk pengambilan keputusan yang lebih cepat.",
    image: "/porto2.png",
  },
];

export default function ErpFeatures() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black text-white">

         {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-block px-4 py-2 mb-4 rounded-full bg-green-500/10 border border-green-500/30">
          <p className="text-sm font-semibold text-green-400">
            #1 Indonesia’s Smart Lead System For Business
          </p>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          AI Agent & ERP Dashboard Untuk Optimasi Bisnis Modern
        </h2>

        <p className="text-gray-400">
          Kelola leads, transaksi, laporan keuangan, hingga performa tim dalam satu dashboard pintar berbasis AI.
        </p>
      </div>

      {/* FEATURED */}
      <div className="max-w-4xl mx-auto space-y-32">

        {features.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`
                grid grid-cols-1 md:grid-cols-2 gap-12 items-center
                ${isReverse ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* IMAGE */}
              <div
                className={`relative w-full h-[280px] md:h-[380px] reveal ${
                  isReverse ? "md:order-2" : ""
                }`} data-reveal='up'
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* CONTENT */}
              <div className={`${isReverse ? "md:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={18} />
                    <span>Optimasi workflow bisnis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={18} />
                    <span>Integrasi sistem tanpa ribet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={18} />
                    <span>Efisiensi waktu & biaya operasional</span>
                  </li>
                </ul>

                <button className="mt-8 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}