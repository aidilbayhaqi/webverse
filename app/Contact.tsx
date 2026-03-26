'use client'
export default function Contact() {
  return (
    <section className="relative py-28 px-4 md:px-8 bg-black text-white overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent">
          Siap Meningkatkan Performa Bisnis Anda?
        </h2>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Konsultasikan kebutuhan bisnis Anda bersama tim kami dan temukan solusi
          berbasis AI & ERP yang dirancang untuk meningkatkan efisiensi,
          produktivitas, dan pertumbuhan bisnis secara signifikan.
        </p>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="
            group inline-flex items-center justify-center
            px-10 py-4
            rounded-xl
            bg-gradient-to-r from-green-500 to-green-900
            font-semibold
            text-lg
            transition-all duration-300
            hover:scale-105
          "
        >
          Konsultasi Sekarang via WhatsApp
        </a>

      </div>
    </section>
  );
}