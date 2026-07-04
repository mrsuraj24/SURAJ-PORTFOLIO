import { motion } from "framer-motion";
import AnimatedSection, { AnimatedItem } from "../components/AnimatedSection";
import GlowCard from "../components/GlowCard";
import {
  FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJs,
  FaShieldAlt, FaGraduationCap, FaRocket, FaCode, FaBriefcase
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <FaReact />, color: "#61dafb", level: 90 },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68a063", level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47a248", level: 80 },
    { name: "Express", icon: <SiExpress />, color: "#ffffff", level: 85 },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", level: 92 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", level: 88 },
    { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26", level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6", level: 90 },
    { name: "Cyber Security", icon: <FaShieldAlt />, color: "#00d4ff", level: 70 },
  ];

  const timeline = [
    {
      icon: <FaGraduationCap />,
      title: "B.Tech Computer Science",
      subtitle: "Engineering Student",
      desc: "Pursuing CSE with focus on full stack development and modern web technologies.",
      color: "#00d4ff",
    },
    {
      icon: <FaCode />,
      title: "Full Stack Developer",
      subtitle: "MERN Stack Specialist",
      desc: "Mastered the MERN stack and built multiple production-ready web applications.",
      color: "#7c3aed",
    },
    {
      icon: <FaRocket />,
      title: "Founded SkyCodex",
      subtitle: "Founder & CEO",
      desc: "Launched SkyCodex to build innovative digital solutions and transform businesses through technology.",
      color: "#f59e0b",
    },
    {
      icon: <FaBriefcase />,
      title: "Building the Future",
      subtitle: "Entrepreneur & Innovator",
      desc: "Leading SkyCodex while continuing to architect premium software and deliver exceptional client results.",
      color: "#00d4ff",
    },
  ];

  return (
    <section className="pt-40 pb-32" style={{ background: 'var(--bg-deep)' }}>
      {/* Ambient background */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20" stagger={false}>
          <span className="badge mb-4 inline-flex">
            <FaRocket className="text-xs" /> About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            The <span className="gradient-text">Vision</span> Behind SkyCodex
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Entrepreneur, architect, and builder — turning bold ideas into digital reality.
          </p>
        </AnimatedSection>

        {/* Profile Section */}
        <AnimatedSection className="grid md:grid-cols-2 gap-20 items-center mb-32">
          {/* Image */}
          <AnimatedItem>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-72 h-72 rounded-full opacity-20 animate-spin-slow" style={{ border: '2px dashed rgba(0,212,255,0.3)' }} />
              </div>
              <img
                src="/Images/image.png"
                alt="Suraj Vishwakarma"
                className="relative w-72 h-72 object-cover rounded-3xl border border-white/10"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.1)' }}
              />
            </div>
          </AnimatedItem>

          {/* Content */}
          <AnimatedItem>
            <h2 className="text-3xl font-bold text-white mb-2">
              Suraj Vishwakarma
            </h2>
            <p className="gradient-text font-semibold text-lg mb-6">Founder & CEO, SkyCodex</p>

            <p className="text-gray-400 leading-relaxed mb-4">
              I'm an entrepreneur and full-stack architect with a passion for building
              technology that matters. As the founder of SkyCodex, I lead the charge
              in creating innovative digital solutions that transform how businesses
              operate and engage with their audiences.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              My expertise spans the entire development lifecycle — from ideation
              and architecture to deployment and scaling. I specialize in the MERN
              stack and modern cloud technologies, always pushing for clean code,
              exceptional UX, and robust performance.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Suraj Vishwakarma" },
                { label: "Role", value: "Founder & CEO" },
                { label: "Company", value: "SkyCodex" },
                { label: "Location", value: "Uttar Pradesh, India" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-3">
                  <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <a href="/Images/SURAJ_VISHWAKARMA.pdf" className="btn-primary">
                <span>Download CV</span>
              </a>
              <a href="/contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        {/* Journey Timeline */}
        <AnimatedSection stagger={false} className="mb-24">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            My <span className="gradient-text">Journey</span>
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, #00d4ff, #7c3aed, transparent)' }} />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10" style={{ background: item.color, boxShadow: `0 0 15px ${item.color}40` }} />

                {/* Content */}
                <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? 'md:pr-20 md:text-right md:w-1/2' : 'md:pl-20 md:text-left md:ml-auto md:w-1/2'}`}>
                  <GlowCard className="p-8" glowColor={`${item.color}20`}>
                    <div className={`flex items-center gap-4 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span style={{ color: item.color }} className="text-2xl">{item.icon}</span>
                      <h3 className="text-xl font-bold text-white tracking-wide">{item.title}</h3>
                    </div>
                    <p className="text-sm font-medium mb-3 tracking-wider uppercase" style={{ color: item.color }}>{item.subtitle}</p>
                    <p className="text-gray-400 text-base leading-loose">{item.desc}</p>
                  </GlowCard>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection stagger>
          <AnimatedItem>
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </AnimatedItem>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <AnimatedItem key={skill.name}>
                <GlowCard className="p-8" glowColor={`${skill.color}15`}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-3xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-white font-semibold">{skill.name}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">{skill.level}%</p>
                </GlowCard>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}