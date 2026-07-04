import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageNotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
      {/* Ambient glow background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', filter: 'blur(100px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', filter: 'blur(100px)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-extrabold gradient-text"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <NavLink to="/" className="btn-primary">
            <span>Back to Home</span>
          </NavLink>
          <NavLink to="/projects" className="btn-outline">
            View Projects
          </NavLink>
        </div>

        <p className="mt-12 text-gray-600 text-sm">
          Suraj Vishwakarma • Founder & CEO, SkyCodex
        </p>
      </motion.div>
    </section>
  );
}