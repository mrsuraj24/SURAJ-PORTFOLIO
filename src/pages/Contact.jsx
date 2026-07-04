import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedSection, { AnimatedItem } from "../components/AnimatedSection";
import GlowCard from "../components/GlowCard";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (replace with EmailJS integration)
    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "suraj24tech@gmail.com",
      href: "mailto:suraj24tech@gmail.com",
      color: "#00d4ff",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 7376731077",
      href: "tel:+917376731077",
      color: "#7c3aed",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Uttar Pradesh, India",
      href: null,
      color: "#f59e0b",
    },
  ];

  const socials = [
    { icon: <FaWhatsapp />, href: "https://wa.me/917376731077", label: "WhatsApp", color: "#25d366" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/surajv24/", label: "LinkedIn", color: "#0077b5" },
    { icon: <FaGithub />, href: "https://github.com/mrsuraj24", label: "GitHub", color: "#ffffff" },
  ];

  return (
    <section className="pt-40 pb-32 min-h-screen" style={{ background: 'var(--bg-deep)' }}>
      {/* Ambient glow */}
      <div className="absolute top-60 right-0 w-[500px] h-[500px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', filter: 'blur(100px)' }} />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20" stagger={false}>
          <span className="badge mb-4 inline-flex">
            <FaEnvelope className="text-xs" /> Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project, idea, or opportunity? I'd love to hear from you.
            Let's build something extraordinary together.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — Contact Info */}
          <AnimatedSection className="lg:col-span-2 space-y-8" stagger>
            {/* Contact Cards */}
            {contactInfo.map((item, i) => (
              <AnimatedItem key={i}>
                <GlowCard className="p-8" glowColor={`${item.color}15`}>
                  <div className="flex items-center gap-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1 tracking-widest uppercase">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-lg font-bold hover:text-[#00d4ff] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg font-bold">{item.value}</p>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </AnimatedItem>
            ))}

            {/* Availability badge */}
            <AnimatedItem>
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-base font-bold tracking-wide uppercase">Available for Work</span>
                </div>
                <p className="text-gray-400 text-base leading-loose">
                  Open for freelance projects, collaborations, and full-time opportunities.
                </p>
              </div>
            </AnimatedItem>

            {/* Social Links */}
            <AnimatedItem>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center glass text-gray-400 transition-all duration-300 text-lg"
                    style={{ '--hover-color': social.color }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = social.color; e.currentTarget.style.borderColor = `${social.color}40`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.borderColor = ''; }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right — Contact Form */}
          <AnimatedSection className="lg:col-span-3" stagger={false}>
            <GlowCard className="p-10 md:p-14 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
              <p className="text-gray-400 text-base mb-10 leading-loose">Fill in the form and I'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-3 tracking-wider uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-dark text-lg py-4"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-3 tracking-wider uppercase">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-dark text-lg py-4"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3 tracking-wider uppercase">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell me about your project, idea, or how we can work together..."
                    className="input-dark text-lg py-4 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full !justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5 relative z-10" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span className="relative z-10">Sending...</span>
                    </span>
                  ) : submitted ? (
                    <span className="relative z-10 flex items-center gap-2">✓ Message Sent!</span>
                  ) : (
                    <span className="relative z-10 flex items-center gap-2">
                      <FaPaperPlane /> Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}