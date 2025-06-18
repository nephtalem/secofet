"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { motion, easeOut, easeInOut } from "framer-motion";
import { useRouter } from "next/navigation";
import Coffee from "@/assets/hero-coffee.jpg";

const slides = [
  {
    image: Coffee,
    headline: "Ethiopian Coffee Excellence",
    desc: "Experience the finest coffee, sourced and processed with passion. Discover the rich heritage and unique flavors that set Ethiopian coffee apart on the world stage.",
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=1200&q=80",
  //   headline: "Importing Quality Construction Materials",
  //   desc: "Supplying the best materials for your next big project.",
  // },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    headline: "Garment & Textile Innovation",
    desc: "Modern garment solutions for a global market. Our commitment to quality and innovation ensures you always get the best in style and durability.",
  },
];

const heroMinHeight = { minHeight: "calc(100vh - 5rem)" };

const contentVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.8, ease: easeOut },
  },
  pulse: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatDelay: 1.5,
      ease: easeInOut,
    },
  },
  whileHover: { scale: 1.07 },
  whileTap: { scale: 0.97 },
};

const headlineStagger = {
  animate: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const HeroSlider = () => {
  const router = useRouter();
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={heroMinHeight}
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        effect="fade"
        speed={1200}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full flex items-center justify-center"
              style={{ minHeight: "calc(100vh - 5rem)" }}
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={idx === 0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"
                style={{ zIndex: 10 }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                style={{ zIndex: 20 }}
              >
                <motion.h1
                  className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg flex flex-wrap justify-center gap-x-2"
                  variants={headlineStagger}
                  initial="initial"
                  animate="animate"
                  key={slide.headline}
                >
                  {slide.headline.split(" ").map((word, i) => (
                    <motion.span
                      key={word + i}
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.p
                  className="text-gray-100 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow mb-6"
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.2 }}
                  key={slide.desc}
                >
                  {slide.desc}
                </motion.p>
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  animate={["animate", "pulse"]}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Button
                    as="button"
                    className="mt-2 px-8 py-3 rounded-full bg-[#5A8C4A] text-white font-semibold text-lg shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2"
                    onClick={() => router.push("/book-meeting")}
                  >
                    Book a Meeting
                  </Button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
