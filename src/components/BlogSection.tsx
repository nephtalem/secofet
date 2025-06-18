"use client";
import Image from "next/image";
import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@headlessui/react";
import { motion, easeOut } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blogs = [
  {
    title: "The Journey of Ethiopian Coffee",
    date: "May 10, 2024",
    excerpt:
      "Discover the rich history and unique flavors that make Ethiopian coffee world-renowned.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Sustainable Sourcing: Our Commitment",
    date: "April 22, 2024",
    excerpt:
      "How Secofet Trading PLC leads the way in ethical and sustainable sourcing.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Garment Innovation for a Modern World",
    date: "March 30, 2024",
    excerpt:
      "Exploring the latest trends and technologies in the garment sector.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Expanding Horizons: Import & Export Insights",
    date: "March 15, 2024",
    excerpt:
      "Insights into the global trade landscape and Secofet's role in it.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.13, ease: easeOut },
  }),
};

const BlogSection = () => (
  <section
    id="blog"
    className="py-20 px-4 bg-gradient-to-br from-amber-50 to-green-50"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Blog & Insights
      </motion.h2>
      <div className="rounded-3xl bg-gradient-to-br from-[#5A8C4A]/20 to-[#4e6b3c]/80 px-2 py-8 md:px-8 md:py-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={32}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          {blogs.map((blog, idx) => (
            <SwiperSlide key={blog.title}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg group h-[380px] flex flex-col justify-end bg-white"
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 transition-all duration-500 group-hover:from-black/80" />
                <div className="relative z-20 p-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <CalendarDaysIcon className="w-4 h-4" /> {blog.date}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {blog.title}
                  </h3>
                  <p className="text-white/90 text-base mb-4 line-clamp-2 drop-shadow">
                    {blog.excerpt}
                  </p>
                  <Button
                    as="button"
                    className="px-6 py-2 rounded-full bg-[#5A8C4A] text-white font-semibold text-base shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2 flex items-center gap-2"
                    onClick={() => alert("Read full article!")}
                  >
                    Read More <ArrowRightIcon className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          as="button"
          className="px-8 py-3 rounded-full bg-[#5A8C4A] text-white font-semibold text-lg shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2 flex items-center gap-2"
          onClick={() => alert("View all articles!")}
        >
          View All Articles <ArrowRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </section>
);

export default BlogSection;
