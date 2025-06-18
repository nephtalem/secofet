"use client";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { motion, easeOut } from "framer-motion";

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};
const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut, delay: 0.2 },
  },
};

const AboutSection = () => (
  <section id="about" className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Text content */}
      <motion.div
        className="flex flex-col gap-6"
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          The Coffee Story
        </motion.h2>
        <p className="text-lg text-gray-700 mb-4">
          Secofet Trading PLC is a diversified company specializing in coffee,
          import/export, and garment sectors, committed to quality and
          innovation. Our journey is rooted in passion, sustainability, and a
          drive to deliver excellence across industries.
        </p>
        <Button
          as="button"
          className="w-fit px-8 py-3 rounded-full border-2 border-[#5A8C4A] text-[#5A8C4A] font-semibold text-lg hover:bg-[#5A8C4A] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2"
          onClick={() => alert("Read more about us!")}
        >
          Read More
        </Button>
      </motion.div>
      {/* Right: Image and features */}
      <motion.div
        className="flex flex-col gap-6 items-center md:items-start"
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg mb-6">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
            alt="Coffee Story"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">What We Do</h3>
            <p className="text-gray-600 text-base">
              Import, export, and process the finest coffee, construction
              materials, and garments for a global market.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Dedication</h3>
            <p className="text-gray-600 text-base">
              Driven by quality, sustainability, and a commitment to our
              partners and communities.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
