import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
              SC
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Sky</span>
            <span className="text-white">Codex</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full glass">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 btn-primary !py-2.5 !px-6 !text-sm"
        >
          <span>Let's Talk</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg glass"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block h-0.5 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {links.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 text-white border border-white/10"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.08 }}
              >
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block mt-2 text-center btn-primary !py-3"
                >
                  <span>Let's Talk</span>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;