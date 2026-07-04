import { motion } from "framer-motion";
import {
  FaLaptopCode, FaServer, FaProjectDiagram,
  FaPaintBrush, FaPlug, FaTools, FaRocket, FaCheckCircle
} from "react-icons/fa";
import AnimatedSection, { AnimatedItem } from "../components/AnimatedSection";
import GlowCard from "../components/GlowCard";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Building blazing-fast, responsive interfaces using React, Next.js, and Tailwind CSS with pixel-perfect attention to detail.",
      color: "#00d4ff",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Developing secure, scalable REST APIs using Node.js, Express, MongoDB, and JWT-based authentication systems.",
      color: "#7c3aed",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Full Stack Solutions",
      desc: "End-to-end web applications from idea to deployment with clean architecture, testing, and performance optimization.",
      color: "#f59e0b",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      desc: "Crafting premium user interfaces focused on clarity, accessibility, and delightful user experience with modern design trends.",
      color: "#00d4ff",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      desc: "Seamlessly integrating third-party services — payment gateways, authentication providers, cloud platforms, and more.",
      color: "#7c3aed",
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      desc: "Ongoing performance improvements, bug fixes, security patches, and feature enhancements to keep your application thriving.",
      color: "#f59e0b",
    },
  ];

  const whyChoose = [
    "Production-grade code quality",
    "24/7 communication & updates",
    "Scalable architecture design",
    "On-time project delivery",
    "Post-launch support included",
    "Modern tech stack expertise",
  ];

  return (
    <section className="pt-40 pb-32 min-h-screen" style={{ background: 'var(--bg-deep)' }}>
      {/* Ambient glow */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20" stagger={false}>
          <span className="badge mb-4 inline-flex">
            <FaRocket className="text-xs" /> Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            What <span className="gradient-text">SkyCodex</span> Offers
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Premium development services focused on performance, scalability,
            and extraordinary user experiences.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32" stagger>
          {services.map((service, i) => (
            <AnimatedItem key={i}>
              <GlowCard className="p-10 h-full group flex flex-col" glowColor={`${service.color}15`}>
                {/* Number badge */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="w-16 h-16 rounded-3xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                      boxShadow: `0 0 20px ${service.color}10`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-loose text-base flex-grow">
                  {service.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-8 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500" style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }} />
              </GlowCard>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Why Choose SkyCodex */}
        <AnimatedSection stagger={false} className="mb-32">
          <div className="glass-strong rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', filter: 'blur(80px)' }} />

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Why Choose <span className="gradient-text">SkyCodex</span>?
                </h2>
                <p className="text-gray-400 leading-loose text-lg">
                  We don't just write code — we architect digital experiences that
                  drive results. Every project is a testament to our commitment
                  to excellence, innovation, and client success.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {whyChoose.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5"
                  >
                    <FaCheckCircle className="text-[#00d4ff] flex-shrink-0 text-xl" />
                    <span className="text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection stagger={false}>
          <div className="text-center relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', filter: 'blur(80px)' }} />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Let's discuss how SkyCodex can help you bring your vision to life
                with cutting-edge technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/917376731077"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a href="/contact" className="btn-outline">
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}