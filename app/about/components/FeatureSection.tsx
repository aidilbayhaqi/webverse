import { FiFileText, FiTruck, FiCreditCard, FiZap, FiMessageSquare, FiClock } from "react-icons/fi";

export default function FeaturesSection() {

  const featureGroups = [
    {
      title: "Close Sales",
      icon: <FiCreditCard />,
      features: [
        "Kirim invoice otomatis ke customer",
        "Cek ongkir pengiriman otomatis",
        "Verifikasi pembayaran secara real-time",
      ],
    },
    {
      title: "Fast Response",
      icon: <FiZap />,
      features: [
        "Balas chat pelanggan dalam hitungan detik",
        "Auto reply pertanyaan umum",
        "Prioritas respon untuk lead potensial",
      ],
    },
    {
      title: "Customer Support",
      icon: <FiMessageSquare />,
      features: [
        "Menjawab FAQ secara otomatis",
        "Support 24/7 tanpa downtime",
        "Routing ke admin jika diperlukan",
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CARD */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12">

            {/* glow */}
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-400/20 blur-3xl rounded-full"></div>

            <div className="space-y-10">

              {featureGroups.map((group, index) => (
                <div key={index} className="space-y-4">

                  {/* HEADER */}
                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-green-400">
                      {group.icon}
                    </div>

                    <h3 className="text-lg font-semibold">
                      {group.title}
                    </h3>

                  </div>

                  {/* FEATURES */}
                  <ul className="space-y-2 pl-14 text-gray-400 text-sm">

                    {group.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>
              ))}

            </div>

          </div>


          {/* RIGHT CHAT */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-xl">

            <div className="space-y-4 text-sm">

              <div className="bg-white/10 p-3 rounded-xl max-w-xs text-gray-200">
                Pengiriman Kursi Ergonomis, 100 pax ke Jakarta Selatan berapa ya pak?
              </div>

              <div className="bg-white/10 p-3 rounded-xl max-w-xs text-gray-200">
                Estimasi biaya pengiriman ke Jakarta Selatan Rp215.000 untuk layanan standar.
              </div>

              <div className="bg-green-500 text-black p-3 rounded-xl ml-auto max-w-xs">
                Oke pak tolong dijadwalkan ya
              </div>

              <div className="bg-white/10 p-3 rounded-xl max-w-xs text-gray-200">
                Baik pak, pembayaran sudah kami terima dan akan diproses.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}