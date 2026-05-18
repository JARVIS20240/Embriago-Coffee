"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import businessData from "@/data/business.json";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-5xl rounded-full bg-[#3B2B20]/40 backdrop-blur-xl border border-white/10 shadow-2xl z-50 px-4 md:px-6 py-2 md:py-3 flex justify-between items-center text-[#F9F6F0]"
    >
      {/* Logo */}
      <a href="#" className="font-serif text-lg md:text-xl font-bold tracking-tight truncate mr-2">
        {businessData.name}
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-gold-amber transition-colors">Home</a>
        <a href="#menu" className="hover:text-gold-amber transition-colors">Menu</a>
        <a href="#reviews" className="hover:text-gold-amber transition-colors">Reviews</a>
        <a href="#location" className="hover:text-gold-amber transition-colors">Contact</a>
      </nav>

      {/* Action Button */}
      <a 
        href="#location" 
        className="px-4 py-1.5 md:px-5 md:py-2 bg-[#D4A373] text-[#3B2B20] rounded-full font-medium text-xs md:text-sm hover:bg-[#D4A373]/90 transition-colors whitespace-nowrap flex-shrink-0"
      >
        Visit Now
      </a>
    </header>
  );
}
