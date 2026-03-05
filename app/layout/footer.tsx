import React from "react";
import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-14 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Tentang Kami */}
        <div>
          <h3 className="text-lg font-bold mb-4">Tentang Kami</h3>
          <p className="text-gray-300 leading-relaxed">
            Webverse adalah jasa pengembangan website, 
            AI automation, dan Sosial Media Branding dengan 
            tujuan pengembangan bisnis.
          </p>
        </div>

        {/* Informasi Kontak */}
        <div>
          <h3 className="text-lg font-bold mb-4">Informasi Kontak</h3>

          <div className="flex items-center gap-3 mb-3">
            <Mail size={18} />
            <a href="mailto:webersee@gmail.com" className="hover:text-green-400">
              Webersee@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Instagram size={18} />
            <a href="https://instagram.com/webverse.id" className="hover:text-green-400">
              @webverse.id
            </a>
          </div>
        </div>

        {/* Menu Utama */}
        <div>
          <h3 className="text-lg font-bold mb-4">Menu Utama</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-green-400">Beranda</a></li>
            <li><a href="#" className="hover:text-green-400">Layanan</a></li>
            <li><a href="#" className="hover:text-green-400">Portofolio</a></li>
            <li><a href="#" className="hover:text-green-400">Artikel</a></li>
            <li><a href="#" className="hover:text-green-400">Kontak</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Webverse — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
