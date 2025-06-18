"use client";
import Image from "next/image";
import {
  CalendarDaysIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@headlessui/react";
import { motion, easeOut } from "framer-motion";
import EthiopicaCoffeeShow from "@/assets/expo.jpg";
import Link from "next/link";
import GlobalTradeSummit from "@/assets/global-summit.jpg";

const events = [
  {
    title: "Ethiopica Coffee Show (part of agrofood Ethiopia)",
    date: "June 19 - 21, 2025",
    location: "Millennium Hall, Addis Ababa",
    image: EthiopicaCoffeeShow,
    desc: "Global participation from 16 countries, showcasing coffee products and solutions tailored for the Ethiopian market. GIZ-special initiative providing advice and support for investments, and a conference by the Ethiopian Beverages Manufacturing Industries Association.",
    featured: true,
  },
  {
    title: "Global Trade Summit",
    date: "March 10, 2024",
    location: "Dubai, UAE",
    image: GlobalTradeSummit,
    desc: "Showcasing our import/export expertise and building new partnerships.",
    featured: false,
  },
  {
    title: "Textile & Garment Expo",
    date: "September 5, 2024",
    location: "Istanbul, Turkey",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    desc: "Presenting our latest garment and textile innovations to the world stage.",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.13, ease: easeOut },
  }),
};

const ExhibitionSection = () => (
  <section
    id="exhibition"
    className="py-20 px-4 bg-gradient-to-br from-[#5A8C4A]/10 to-amber-100"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Exhibition & Events
      </motion.h2>
      {/* Featured Event Card */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-0 mb-12 bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="relative w-full md:w-1/2 h-64 md:h-[400px] flex-shrink-0">
          <Image
            src={events[0].image}
            alt={events[0].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="flex-1 p-8 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5A8C4A] mb-2 flex items-center gap-2">
            {events[0].title}
          </h3>
          <div className="flex items-center gap-4 text-gray-700 mb-2">
            <span className="flex items-center gap-1">
              <CalendarDaysIcon className="w-5 h-5" /> {events[0].date}
            </span>
            <span className="flex items-center gap-1">
              <MapPinIcon className="w-5 h-5" /> {events[0].location}
            </span>
          </div>
          <p className="text-gray-700 mb-4">{events[0].desc}</p>
          <Button
            as={Link}
            href="/exhibition/ethiopica-coffee-show"
            className="w-fit px-6 py-2 rounded-full bg-[#5A8C4A] text-white font-semibold text-base shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2 flex items-center gap-2"
          >
            Learn More <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
      {/* Timeline/Carousel for other events */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {events.slice(1).map((event, i) => (
          <motion.div
            key={event.title}
            className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-48">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="p-6 flex flex-col gap-2 flex-1">
              <h4 className="text-xl font-bold text-[#5A8C4A] mb-1">
                {event.title}
              </h4>
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                <CalendarDaysIcon className="w-4 h-4" /> {event.date}
                <MapPinIcon className="w-4 h-4" /> {event.location}
              </div>
              <p className="text-gray-600 text-sm flex-1">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExhibitionSection;
