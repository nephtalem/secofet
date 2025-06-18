"use client";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#businesses", label: "Businesses" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#exhibition", label: "Exhibition/Events" },
  { href: "#partners", label: "Partners" },
  { href: "#blog", label: "Blog" },
 
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full py-4 px-6 flex justify-between items-center shadow bg-white sticky top-0 z-50 backdrop-blur-md bg-opacity-90"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <Logo />
      </motion.div>
      {/* Desktop Nav */}
      <nav className="space-x-4 hidden md:flex">
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="relative px-1 py-1 font-medium text-gray-700 hover:text-[#5A8C4A] transition-colors"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={(e) => handleSmoothScroll(e, link.href)}
          >
            <span className="relative z-10">{link.label}</span>
            <motion.div
              className="absolute left-0 -bottom-1 w-full h-0.5 rounded bg-[#5A8C4A]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredIdx === idx ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </motion.a>
        ))}
      </nav>
      {/* Hamburger for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[#5A8C4A]"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#5A8C4A] mb-1 transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#5A8C4A] mb-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#5A8C4A] transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block w-full text-center py-3 text-lg font-medium text-gray-700 hover:text-[#5A8C4A] transition-colors"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
