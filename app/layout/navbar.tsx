"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Why We Exist", href: "/about" },
    { label: "Study Case", href: "/studycase" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Floating container */}
      <div
        className={`pointer-events-auto transition-all duration-500 ease-out
          ${
            isScrolled
              ? "mt-4 max-w-5xl mx-auto rounded-full backdrop-blur-md bg-black/70 border border-white/10 shadow-xl scale-[0.95]"
              : "max-w-7xl mx-auto bg-transparent"
          }
        `}
      >
        {/* Inner */}
        <div
          className={`flex justify-between items-center px-6 transition-all duration-500
            ${isScrolled ? "py-3" : "py-5"}
          `}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-extrabold tracking-wide text-white transition-all duration-500
              ${isScrolled ? "scale-95" : "scale-100"}
            `}
          >
            <Image src={'/Logo.png'} alt="" width={50} height={50}></Image>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center transition-all duration-500
              ${isScrolled ? "space-x-6 scale-95" : "space-x-8 scale-100"}
            `}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white hover:text-green-400 transition duration-300
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1
                after:bg-green-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}

            <button
              className={`ml-4 border border-green-400 text-green-400
                hover:bg-green-400 hover:text-black rounded-full transition-all duration-500
                ${isScrolled ? "px-4 py-1.5 text-sm" : "px-5 py-2"}
              `}
            >
              Konsultasi
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col items-center bg-black/90 backdrop-blur-md overflow-hidden
            transition-all duration-500 ease-in-out
            ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 py-3 w-full text-center
              hover:bg-green-400/10 hover:text-green-400 transition duration-300"
            >
              {link.label}
            </Link>
          ))}

          <button className="my-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-2 rounded-full transition duration-300">
            Konsultasi
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
