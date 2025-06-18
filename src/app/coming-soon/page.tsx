"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComingSoonPage() {
  const router = useRouter();
  return (
    <>
      <Header />
      <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-green-50 px-4 py-20">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-xl w-full"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[#5A8C4A] mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            🚧 Coming Soon 🚧
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            We&#39;re working on something amazing! Our blog and articles will
            be live soon. Stay tuned for insights, stories, and updates from
            Secofet Trading PLC.
          </motion.p>
          <motion.button
            className="px-8 py-3 rounded-full bg-[#5A8C4A] text-white font-semibold text-lg shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/")}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
