"use client";
import { Button } from "@headlessui/react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import Map from "@/assets/map.jpg";

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

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSubmitted(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to send message");
      } else {
        setError("Failed to send message");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-amber-50"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Form */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Contact Us
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5A8C4A] focus:ring-2 focus:ring-[#5A8C4A]/30 outline-none text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5A8C4A] focus:ring-2 focus:ring-[#5A8C4A]/30 outline-none text-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5A8C4A] focus:ring-2 focus:ring-[#5A8C4A]/30 outline-none text-lg"
            />
            <Button
              as="button"
              type="submit"
              className="w-fit px-8 py-3 rounded-full bg-[#5A8C4A] text-white font-semibold text-lg shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2 mt-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {submitted && !error && (
              <div className="text-green-700 font-semibold mt-2">
                Thank you for contacting us!
              </div>
            )}
            {error && (
              <div className="text-red-600 font-semibold mt-2">{error}</div>
            )}
          </form>
        </motion.div>
        {/* Right: Contact Info & Map */}
        <motion.div
          className="flex flex-col gap-8 items-start"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <EnvelopeIcon className="w-6 h-6 text-[#5A8C4A]" />{" "}
              info@secofettradingplc.com
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <PhoneIcon className="w-6 h-6 text-[#5A8C4A]" /> +251 979 321 414
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <MapPinIcon className="w-6 h-6 text-[#5A8C4A]" /> Gurd Shola,
              Addis Ababa, Ethiopia
            </div>
          </div>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Map}
              alt="Map of Gurd Shola, Addis Ababa, Ethiopia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
