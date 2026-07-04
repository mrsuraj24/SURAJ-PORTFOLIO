import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import WhatsApp from "./Whatsapp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative" style={{ background: 'var(--bg-surface)' }}>
      {/* Gradient top border */}
      <div className="gradient-divider" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <NavLink to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center font-bold text-white text-sm">
                SC
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="gradient-text">Sky</span>
                <span className="text-white">Codex</span>
              </span>
            </NavLink>
            <p className="text-gray-400 leading-relaxed text-sm mt-4 max-w-xs">
              Building the future of digital innovation. We craft premium software
              solutions that transform businesses and create extraordinary digital experiences.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/mrsuraj24"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center glass text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/surajv24/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center glass text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://wa.me/917376731077"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center glass text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#00d4ff] transition-all duration-300" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#00d4ff] mt-0.5">✉</span>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Email</p>
                  <a href="mailto:suraj24tech@gmail.com" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                    suraj24tech@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00d4ff] mt-0.5">📞</span>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                  <a href="tel:+917376731077" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                    +91 7376731077
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00d4ff] mt-0.5">📍</span>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Location</p>
                  <p className="text-gray-300">Uttar Pradesh, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gradient-divider mt-12" />
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} SkyCodex. All rights reserved. Built with ❤️ by Suraj Vishwakarma.
          </p>
          <p className="text-gray-600 text-xs">
            Entrepreneur • Full Stack Architect • Innovator
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-7 right-6 w-11 h-11 rounded-xl flex items-center justify-center glass text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/30 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>

      <WhatsApp />
    </footer>
  );
}