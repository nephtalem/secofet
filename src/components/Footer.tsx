import Logo from "./Logo";

const Footer = () => (
  <footer className="w-full bg-[#171717] text-white pt-10 pb-4 px-4 mt-12">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo centered on mobile, left on desktop */}
      <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
        <Logo />
      </div>
      {/* Minimal Quick Links */}
      <nav className="flex-1 flex justify-center gap-6 text-white/80 text-sm font-medium flex-wrap">
        <a href="#about" className="hover:text-[#5A8C4A] transition-colors">
          About
        </a>
        <a
          href="#businesses"
          className="hover:text-[#5A8C4A] transition-colors"
        >
          Businesses
        </a>
        <a
          href="#sustainability"
          className="hover:text-[#5A8C4A] transition-colors"
        >
          Sustainability
        </a>
        <a
          href="#exhibition"
          className="hover:text-[#5A8C4A] transition-colors"
        >
          Exhibition
        </a>
        <a href="#contact" className="hover:text-[#5A8C4A] transition-colors">
          Contact
        </a>
      </nav>
      {/* Contact Info */}
      <div className="flex-1 flex flex-col items-center md:items-end text-white/60 text-sm">
        <span>info@secofet.com</span>
        <span>Gurd Shola, Addis Ababa, Ethiopia</span>
      </div>
    </div>
    <div className="max-w-4xl mx-auto mt-6 pt-4 border-t border-white/10 text-center text-xs text-white/40">
      &copy; {new Date().getFullYear()} Secofet Trading PLC. All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
