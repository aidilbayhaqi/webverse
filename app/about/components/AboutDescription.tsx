import { FiZap, FiShield, FiTrendingUp } from "react-icons/fi";

export default function AboutDescription() {
  const cards = [
    {
      icon: <FiZap size={24} />,
      title: "Automation",
      desc: "Mengotomatisasi berbagai proses bisnis sehingga pekerjaan dapat diselesaikan lebih cepat dan efisien.",
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: "Business Growth",
      desc: "Membantu bisnis meningkatkan penjualan, mempercepat respon pelanggan, dan memperluas jangkauan pasar.",
    },
    {
      icon: <FiShield size={24} />,
      title: "Reliable System",
      desc: "Sistem yang stabil, aman, dan dapat diandalkan untuk mendukung operasional bisnis secara berkelanjutan.",
    },
  ];

  return (
    <section className="w-full py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 text-center reveal" data-reveal='up'>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6" >
          Apa itu <span className="text-green-400">Webverse?</span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed mb-16">
          Webverse adalah platform teknologi yang dirancang untuk membantu bisnis
          bertransformasi secara digital melalui solusi berbasis kecerdasan buatan
          dan otomatisasi sistem. Dengan memanfaatkan teknologi modern, Webverse
          memungkinkan perusahaan meningkatkan efisiensi operasional, mempercepat
          interaksi dengan pelanggan, serta mengoptimalkan proses penjualan dan
          layanan secara lebih cerdas dan terintegrasi.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-8
              hover:bg-white/10
              hover:border-green-400/40
              transition-all duration-300
              "
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl text-green-400 mb-6 mx-auto">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}