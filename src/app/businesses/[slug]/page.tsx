"use client";
import { useParams, useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import ImportImage from "@/assets/import.jpg";
import ExportImage from "@/assets/export.jpg";
import ProcessedCoffeeImage from "@/assets/processed-coffee.jpg";
import GarmentImage from "@/assets/garment.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Business = {
  title: string;
  desc: string;
  image: StaticImageData;
};

const businessData: Record<string, Business & { desc2?: string }> = {
  import: {
    title: "Import",
    desc: "Bringing quality construction materials and stationary products from around the world. We ensure only the best products reach our clients, supporting Ethiopia's growth.",
    desc2:
      "Our import division leverages a global network to source reliable, innovative, and cost-effective materials, ensuring our partners always have access to the best the world has to offer.",
    image: ImportImage,
  },
  export: {
    title: "Export",
    desc: "Exporting the finest Ethiopian raw coffee to the global market. Our export division is renowned for reliability, quality, and a deep connection to Ethiopia's coffee heritage.",
    desc2:
      "We work closely with farmers and international buyers to maintain the highest standards, delivering Ethiopian coffee that is celebrated worldwide for its unique flavor and quality.",
    image: ExportImage,
  },
  "processed-coffee": {
    title: "Processed Coffee",
    desc: "Premium processed coffee under our Brook Roots brand, crafted for excellence. We combine tradition and innovation to deliver unique flavors to coffee lovers worldwide.",
    desc2:
      "Our state-of-the-art processing facilities and expert team ensure every batch meets rigorous quality standards, bringing the best of Ethiopian coffee to your cup.",
    image: ProcessedCoffeeImage,
  },
  garment: {
    title: "Garment",
    desc: "Innovative garment and textile solutions for a modern world. Our garment division blends Ethiopian creativity with global standards for quality and style.",
    desc2:
      "From design to production, we focus on sustainability, comfort, and fashion-forward thinking, making us a trusted partner in the textile industry.",
    image: GarmentImage,
  },
};

export default function BusinessDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const biz = businessData[slug];

  if (!biz) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Business Not Found</h1>
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
              src={biz.image}
              alt={biz.title}
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
              {biz.title}
            </h1>
            <p className="text-lg text-gray-700 mb-4 max-w-xl">{biz.desc}</p>
            {biz.desc2 && (
              <p className="text-lg text-gray-600 mb-4 max-w-xl">{biz.desc2}</p>
            )}
            <button
              className="px-8 py-3 rounded-full bg-[#5A8C4A] text-white font-semibold text-lg shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2"
              onClick={() => router.back()}
            >
              Back to Businesses
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
