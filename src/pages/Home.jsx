import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaRocket, FaCode, FaLightbulb } from "react-icons/fa";
import Scene3D from "../components/Scene3D";
import TypeWriter from "../components/TypeWriter";
import CountUp from "../components/CountUp";
import AnimatedSection, { AnimatedItem } from "../components/AnimatedSection";
import GlowCard from "../components/GlowCard";

export default function Home() {
  const roles = [
    "Founder & CEO of SkyCodex",
    "Tech Entrepreneur",
    "Full Stack Architect",
    "Digital Innovator",
  ];

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
        {/* 3D Background */}
        <Scene3D />

        {/* Ambient glow orbs */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="badge mb-6"
            >
              <FaRocket className="text-xs" />
              <span>Building the Future of Digital Innovation</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="gradient-text">Suraj</span>{" "}
              <span className="text-white">Vishwakarma</span>
            </h1>

            {/* Typewriter */}
            <div className="mt-4 text-xl md:text-2xl text-gray-300 font-medium h-10">
              <TypeWriter words={roles} typingSpeed={80} deletingSpeed={50} pauseDuration={2500} />
            </div>

            {/* Description */}
            <p className="text-gray-400 max-w-lg text-lg leading-loose tracking-wide">
              Entrepreneur and technology architect crafting premium digital
              experiences. I build scalable, high-performance solutions that
              help businesses stand out and grow in the digital landscape.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-6">
              <NavLink to="/contact" className="btn-primary">
                <span>Let's Build Together</span>
                <FaArrowRight className="relative z-10" />
              </NavLink>
              <NavLink to="/projects" className="btn-outline">
                View My Work
              </NavLink>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  <CountUp end={9} suffix="+" />
                </h2>
                <p className="text-gray-500 text-sm tracking-wider uppercase">Projects Delivered</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  <CountUp end={2} suffix="K+" />
                </h2>
                <p className="text-gray-500 text-sm tracking-wider uppercase">Hours of Coding</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  <CountUp end={95} suffix="%" />
                </h2>
                <p className="text-gray-500 text-sm tracking-wider uppercase">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 rounded-3xl opacity-30 animate-pulse-glow" style={{ background: 'var(--gradient)', filter: 'blur(40px)', transform: 'scale(1.1)' }} />

              <img
                src="/Images/image.png"
                alt="Suraj Vishwakarma — Founder & CEO of SkyCodex"
                className="relative w-80 h-80 object-cover rounded-3xl border border-white/10 shadow-2xl"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
              />

              {/* Floating Tags */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 glass px-4 py-2 rounded-full text-sm font-medium text-[#00d4ff]"
              >
                🚀 Entrepreneur
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-16 -right-6 glass px-4 py-2 rounded-full text-sm font-medium text-[#7c3aed]"
              >
                ⚡ Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-20 -left-8 glass px-4 py-2 rounded-full text-sm font-medium text-[#f59e0b]"
              >
                💡 Innovator
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -bottom-2 -right-4 glass px-4 py-2 rounded-full text-sm font-medium text-green-400"
              >
                🎯 Problem Solver
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#00d4ff]" />
          </div>
        </motion.div>
      </section>

      {/* ===== ABOUT SKYCODEX TEASER ===== */}
      <section className="py-32 relative" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="grid md:grid-cols-3 gap-12" stagger>
            {[
              {
                icon: <FaRocket className="text-3xl text-[#00d4ff]" />,
                title: "Visionary Leadership",
                desc: "As Founder of SkyCodex, I lead innovative projects that push the boundaries of what's possible in digital technology.",
              },
              {
                icon: <FaCode className="text-3xl text-[#7c3aed]" />,
                title: "Technical Excellence",
                desc: "Full stack expertise in React, Node.js, MongoDB, and modern cloud architecture — building systems that scale.",
              },
              {
                icon: <FaLightbulb className="text-3xl text-[#f59e0b]" />,
                title: "Innovation First",
                desc: "Every project is an opportunity to innovate. I blend clean design with powerful engineering for extraordinary results.",
              },
            ].map((card, i) => (
              <AnimatedItem key={i}>
                <GlowCard className="p-12 h-full flex flex-col items-start gap-6">
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center glass">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">{card.title}</h3>
                  <p className="text-gray-400 leading-loose text-lg">{card.desc}</p>
                </GlowCard>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}