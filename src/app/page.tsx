import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/AboutSection";
import BusinessesSection from "../components/BusinessesSection";
import SustainabilitySection from "../components/SustainabilitySection";
import ExhibitionSection from "../components/ExhibitionSection";
import PartnersSection from "../components/PartnersSection";
import BlogSection from "../components/BlogSection";
// import CareersSection from "@/components/CareersSection";
// import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";

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
        {/* <CareersSection />
        <FAQSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
