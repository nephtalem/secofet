"use client";
import Image from "next/image";
import {
  GlobeAltIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { motion, easeOut } from "framer-motion";

const features = [
  {
    icon: <SparklesIcon className="w-8 h-8 text-[#5A8C4A]" />,
    title: "Eco-Friendly Practices",
    desc: "We prioritize sustainable farming and ethical sourcing in all our operations.",
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8 text-[#5A8C4A]" />,
    title: "Global Impact",
    desc: "Our initiatives support communities and protect the environment worldwide.",
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-[#5A8C4A]" />,
    title: "Community Focus",
    desc: "We invest in local communities and empower our partners for shared success.",
  },
];

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
const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.13, ease: easeOut },
  }),
};

const SustainabilitySection = () => (
  <section id="sustainability" className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Image */}
      <motion.div
        className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg"
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Sustainability"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
      {/* Right: Content */}
      <motion.div
        className="flex flex-col gap-6"
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Sustainability & Impact
        </motion.h2>
        <p className="text-lg text-gray-700 mb-4">
          We are committed to sustainable practices in all our business areas,
          ensuring a positive impact on communities and the environment. Our
          approach is rooted in responsibility, transparency, and innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 shadow"
              custom={i}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div>{f.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SustainabilitySection;
