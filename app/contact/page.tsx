'use client'
import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import Contact from "../Contact";

export default function ContactPage() {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-black text-white px-6 py-28">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Get In Touch
          </h1>
          <p className="text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            We’re ready to help you build smarter systems and grow your business through AI automation.
          </p>
        </div>

        {/* CONTACT LIST */}
        <div className="flex flex-col divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="flex items-center justify-between px-6 py-6 hover:bg-white/[0.04] transition group"
          >
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-xl text-white/70 group-hover:text-white transition" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-xs text-white/40">Fastest response</p>
              </div>
            </div>
            <span className="text-sm text-white/40 group-hover:text-white transition">
              Open →
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            className="flex items-center justify-between px-6 py-6 hover:bg-white/[0.04] transition group"
          >
            <div className="flex items-center gap-4">
              <FaInstagram className="text-xl text-white/70 group-hover:text-white transition" />
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-xs text-white/40">Latest updates & works</p>
              </div>
            </div>
            <span className="text-sm text-white/40 group-hover:text-white transition">
              Visit →
            </span>
          </a>

          {/* TIKTOK */}
          <a
            href="https://tiktok.com/@yourusername"
            target="_blank"
            className="flex items-center justify-between px-6 py-6 hover:bg-white/[0.04] transition group"
          >
            <div className="flex items-center gap-4">
              <FaTiktok className="text-xl text-white/70 group-hover:text-white transition" />
              <div>
                <p className="font-medium">TikTok</p>
                <p className="text-xs text-white/40">AI content & insights</p>
              </div>
            </div>
            <span className="text-sm text-white/40 group-hover:text-white transition">
              Watch →
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:your@email.com"
            className="flex items-center justify-between px-6 py-6 hover:bg-white/[0.04] transition group"
          >
            <div className="flex items-center gap-4">
              <MdEmail className="text-xl text-white/70 group-hover:text-white transition" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-xs text-white/40">For business inquiries</p>
              </div>
            </div>
            <span className="text-sm text-white/40 group-hover:text-white transition">
              Send →
            </span>
          </a>

        </div>

      </div>
    </section>
    <Contact/>
    <Footer/>
    
    </>
  );
}