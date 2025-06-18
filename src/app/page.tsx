import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import BusinessesSection from "../components/BusinessesSection";
import SustainabilitySection from "../components/SustainabilitySection";
import ExhibitionSection from "../components/ExhibitionSection";
import PartnersSection from "../components/PartnersSection";
import BlogSection from "../components/BlogSection";

import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Secofet Trading PLC | Ethiopian Coffee, Construction, Garment & More",
  description:
    "Secofet Trading PLC is a leading Ethiopian company in coffee, construction materials, processed coffee, garments, and more. Discover our businesses, sustainability efforts, and upcoming exhibitions.",
  keywords: [
    "Secofet Trading PLC",
    "Ethiopian Coffee",
    "Construction Materials",
    "Garment",
    "Export",
    "Processed Coffee",
    "Sustainability",
    "Exhibition",
    "Partners",
    "Ethiopia",
    "Trading Company",
  ],
  openGraph: {
    title: "Secofet Trading PLC",
    description:
      "Ethiopian excellence in coffee, construction, garments, and more.",
    url: "http://secofettrading.com/", // Replace with your actual domain
    siteName: "Secofet Trading PLC",
    images: [
      {
        url: "/Secofet-Logo.jpg",
        width: 800,
        height: 600,
        alt: "Secofet Trading PLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <BusinessesSection />
        <SustainabilitySection />
        <ExhibitionSection />
        <PartnersSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
