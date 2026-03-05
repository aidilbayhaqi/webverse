import Image from "next/image";

const portfolios = [
  {
    title: "AI Sales Dashboard",
    description: "Dashboard pintar untuk meningkatkan konversi penjualan bisnis Anda.",
    image: "/porto2.png",
  },
  {
    title: "Smart CRM Automation",
    description: "Kelola pelanggan dan leads secara otomatis dan efisien.",
    image: "/porto2.png",
  },
  {
    title: "Financial Analytics System",
    description: "Pantau laporan keuangan bisnis secara real-time dan akurat.",
    image: "/porto2.png",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#0d0d0d] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-20">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent">
            Futuristic AI Portfolio
          </h2>
          <p className="text-gray-400">
            Teknologi generasi terbaru untuk mempercepat transformasi digital bisnis Anda.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-16">

          {portfolios.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-3xl
                p-[1px]
                bg-gradient-to-r from-green-400 via-green-900 to-green-800
                transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-2 hover:scale-[1.01]
                will-change-transform
                reveal
              "
              data-reveal='fade'
            >
              {/* INNER GLASS CARD */}
              <div className="
                relative
                rounded-3xl
                bg-[#121212]/80
                backdrop-blur-xl
                border border-white/5
                overflow-hidden
              ">

                {/* IMAGE */}
                <div className="relative h-[340px] md:h-[440px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                     transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      hover:-translate-y-2 hover:scale-[1.01]
                      will-change-transform
                      reveal
                    "
                    data-reveal='up'
                  />

                  {/* Neon Overlay */}
                  <div className="
                    absolute inset-0
                    bg-gradient-to-t from-black/80 via-transparent to-transparent
                  " />
                </div>

                {/* CONTENT */}
                <div className="p-10 relative">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-green-400 group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 truncate">
                    {item.description}
                  </p>
                </div>

                {/* Animated Shine Effect */}
                <div className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-700
                  pointer-events-none
                ">
                  <div className="
                    absolute -left-1/2 top-0
                    w-[200%] h-full
                    bg-gradient-to-r
                    from-transparent via-white/10 to-transparent
                    rotate-12
                    translate-x-[-100%]
                    group-hover:translate-x-[100%]
                    transition-transform duration-1200 ease-out
                  " />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}