"use client";
import Image from "next/image";
import { UserGroupIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Button } from "@headlessui/react";
import { motion, easeOut } from "framer-motion";

const partners = [
  {
    name: "CoffeeWorld",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  },
  {
    name: "BuildPro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  },
  {
    name: "TextileX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "GlobalTrade",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "EcoPartners",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
];

const testimonials = [
  {
    quote:
      "Secofet Trading PLC has been a reliable partner, always delivering quality and innovation.",
    name: "Jane Doe",
    company: "CoffeeWorld",
    logo: partners[0].logo,
  },
  {
    quote:
      "Their commitment to sustainability and excellence is unmatched in the industry.",
    name: "John Smith",
    company: "EcoPartners",
    logo: partners[4].logo,
  },
  {
    quote:
      "A forward-thinking company that truly values its partners and clients.",
    name: "Emily Chen",
    company: "BuildPro",
    logo: partners[1].logo,
  },
];

const logoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.11, ease: easeOut },
  }),
};

const PartnersSection = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const nextTestimonial = () =>
    setTestimonialIdx((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIdx(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="partners"
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-amber-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Partners & Clients
        </motion.h2>
        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center mb-12">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              className="bg-white rounded-xl shadow p-4 flex items-center justify-center w-32 h-20 hover:scale-105 transition-transform duration-300"
              custom={i}
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={80}
                height={40}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
        {/* Testimonial Carousel */}
        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-4 relative mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <UserGroupIcon className="w-10 h-10 text-[#5A8C4A] mb-2" />
          <blockquote className="text-xl italic text-gray-700 text-center">
            “{testimonials[testimonialIdx].quote}”
          </blockquote>
          <div className="flex items-center gap-3 mt-2">
            <Image
              src={testimonials[testimonialIdx].logo}
              alt={testimonials[testimonialIdx].company}
              width={32}
              height={32}
              className="object-contain rounded-full bg-gray-100"
            />
            <span className="font-semibold text-gray-900">
              {testimonials[testimonialIdx].name}
            </span>
            <span className="text-gray-500 text-sm">
              ({testimonials[testimonialIdx].company})
            </span>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={prevTestimonial}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5A8C4A] hover:text-white text-gray-700 flex items-center justify-center transition-colors"
            >
              &#8592;
            </button>
            <button
              onClick={nextTestimonial}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5A8C4A] hover:text-white text-gray-700 flex items-center justify-center transition-colors"
            >
              &#8594;
            </button>
          </div>
        </motion.div>
        {/* Call to Action */}
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Want to partner with us?
          </h3>
          <Button
            as="button"
            className="px-8 py-3 rounded-full bg-[#5A8C4A] text-white font-semibold text-lg shadow-lg hover:bg-[#47703a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A8C4A] focus:ring-offset-2 flex items-center gap-2"
            onClick={() => alert("Contact us for partnership!")}
          >
            Become a Partner <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
