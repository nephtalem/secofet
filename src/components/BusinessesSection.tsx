"use client";
import {
  BriefcaseIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import ImportImage from "@/assets/import.jpg";
import ExportImage from "@/assets/export.jpg";
import ProcessedCoffeeImage from "@/assets/processed-coffee.jpg";
import GarmentImage from "@/assets/garment.jpg";
import Link from "next/link";

const businesses = [
  {
    title: "Import",
    desc: "Bringing quality construction materials and stationary products from around the world.",
    icon: <BriefcaseIcon className="w-10 h-10 text-[#5A8C4A]" />,
    image: ImportImage,
    slug: "import",
  },
  {
    title: "Export",
    desc: "Exporting the finest Ethiopian raw coffee to the global market.",
    icon: <ArrowTrendingUpIcon className="w-10 h-10 text-[#5A8C4A]" />,
    image: ExportImage,
    slug: "export",
  },
  {
    title: "Processed Coffee",
    desc: "Premium processed coffee under our Brook Roots brand, crafted for excellence.",
    icon: <SparklesIcon className="w-10 h-10 text-[#5A8C4A]" />,
    image: ProcessedCoffeeImage,
    slug: "processed-coffee",
  },
  {
    title: "Garment",
    desc: "Innovative garment and textile solutions for a modern world.",
    icon: <ShoppingBagIcon className="w-10 h-10 text-[#5A8C4A]" />,
    image: GarmentImage,
    slug: "garment",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.15 + i * 0.13, ease: easeOut },
  }),
};

const BusinessesSection = () => (
  <section
    id="businesses"
    className="py-20 px-4 bg-gradient-to-br from-amber-50 to-green-50"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: easeOut }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Our Businesses
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {businesses.map((biz, idx) => (
          <Link
            key={biz.title}
            href={`/businesses/${biz.slug}`}
            className="contents"
          >
            <motion.div
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center p-6 relative overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-105"
              style={{
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                transitionProperty: "box-shadow, transform",
              }}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={biz.image}
                  alt={biz.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="80px"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="mb-3">{biz.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {biz.title}
              </h3>
              <p className="text-gray-600 text-base text-center mb-2">
                {biz.desc}
              </p>
              <span className="absolute right-4 top-4 bg-[#5A8C4A] text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                Learn More
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessesSection;
