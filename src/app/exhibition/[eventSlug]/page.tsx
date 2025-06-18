"use client";
import { useRouter, useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EthiopicaCoffeeShow from "@/assets/expo.jpg";

const eventData: Record<
  string,
  {
    title: string;
    date: string;
    location: string;
    image: StaticImageData;
    desc: string;
  }
> = {
  "ethiopica-coffee-show": {
    title: "Ethiopica Coffee Show (part of agrofood Ethiopia)",
    date: "June 19 - 21, 2025",
    location: "Millennium Hall, Addis Ababa",
    image: EthiopicaCoffeeShow,
    desc: `Global participation from 16 countries, showcasing coffee products and solutions tailored for the Ethiopian market.\n\nOther highlights include a GIZ-special initiative providing advice and support for investments, and a conference by the Ethiopian Beverages Manufacturing Industries Association.\n\nThis three-day event brings together industry leaders, innovators, and coffee enthusiasts to explore the latest trends, technologies, and opportunities in the Ethiopian and global coffee sectors.`,
  },
};

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const event = eventData[params.eventSlug as string];

  if (!event) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <button
              className="mt-4 px-6 py-2 rounded-full bg-[#5A8C4A] text-white font-semibold text-base shadow hover:bg-[#47703a] transition-colors"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-amber-50 to-green-50 overflow-hidden px-0 md:px-8 py-0 md:py-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            width="100%"
            height="100%"
            className="opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="#5A8C4A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center py-16 md:py-0 px-4 md:px-0">
          {/* Left: Image with gradient overlay */}
          <motion.div
            className="relative w-full h-64 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </motion.div>
          {/* Right: Content */}
          <motion.div
            className="flex flex-col gap-6 items-start md:items-start mt-8 md:mt-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#5A8C4A] mb-2">
              {event.title}
            </h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-700 text-lg mb-2">
              <span className="font-semibold">{event.date}</span>
              <span className="font-semibold">{event.location}</span>
            </div>
            <p className="text-lg text-gray-700 mb-4 max-w-xl whitespace-pre-line">
              {event.desc}
            </p>
            <button
              className="px-8 py-3 rounded-full bg-[#5A8C4A] text-white font-semibold text-lg shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2"
              onClick={() => router.back()}
            >
              Back to Exhibition
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
