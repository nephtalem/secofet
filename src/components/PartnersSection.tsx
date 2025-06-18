"use client";

import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  ShoppingBagIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@headlessui/react";
import { motion, easeOut } from "framer-motion";

const genericPartners = [
  {
    name: "Coffee Industry",
    icon: <SparklesIcon className="w-10 h-10 text-[#5A8C4A]" />,
  },
  {
    name: "Construction",
    icon: <BuildingOffice2Icon className="w-10 h-10 text-[#5A8C4A]" />,
  },
  {
    name: "Textile & Garment",
    icon: <ShoppingBagIcon className="w-10 h-10 text-[#5A8C4A]" />,
  },
  {
    name: "Global Trade",
    icon: <GlobeAltIcon className="w-10 h-10 text-[#5A8C4A]" />,
  },
];

const logoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.11, ease: easeOut },
  }),
};

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-amber-50 relative overflow-hidden"
    >
      {/* Animated background gradient blob */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-[#5A8C4A]/30 to-[#b7e4c7]/60 rounded-full blur-3xl opacity-60 animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-gradient-to-tr from-[#5A8C4A]/20 to-[#ffe082]/40 rounded-full blur-3xl opacity-60 animate-pulse z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 text-center drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Partners & Opportunities
        </motion.h2>
        {/* Modern Glassmorphism Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center mb-16">
          {genericPartners.map((p, i) => (
            <motion.div
              key={p.name}
              className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center w-48 h-52 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(90,140,74,0.18)] transition-all duration-300 group relative overflow-hidden"
              custom={i}
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-flex items-center justify-center mb-4 rounded-full bg-[#5A8C4A]/10 w-20 h-20 group-hover:bg-[#5A8C4A]/20 transition-colors duration-300">
                {p.icon}
              </span>
              <span className="mt-2 text-lg md:text-xl font-bold text-gray-800 text-center group-hover:text-[#5A8C4A] transition-colors duration-300 drop-shadow">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
        {/* Partnership Invitation */}
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center drop-shadow-lg">
            We&#39;re seeking new partners and collaborators!
          </h3>
          <p className="text-gray-700 mb-6 text-center max-w-2xl text-lg">
            Secofet Trading PLC is open to partnerships across coffee,
            construction, garment, and global trade sectors. If you&#39;re
            interested in working with us, let&#39;s connect and create value
            together.
          </p>
          <Button
            as="button"
            className="px-10 py-4 rounded-full bg-[#5A8C4A] text-white font-bold text-xl shadow-xl hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2 flex items-center gap-3 animate-bounce"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Become a Partner <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
