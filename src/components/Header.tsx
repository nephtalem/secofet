"use client";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#businesses", label: "Businesses" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#exhibition", label: "Exhibition/Events" },
  { href: "#partners", label: "Partners" },
  { href: "#blog", label: "Blog" },
  { href: "#careers", label: "Careers" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
      <nav className="space-x-4 flex">
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="relative px-1 py-1 font-medium text-gray-700 hover:text-[#5A8C4A] transition-colors"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
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
    </motion.header>
  );
};

export default Header;
