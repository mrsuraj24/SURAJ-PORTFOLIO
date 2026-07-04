import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaStar } from "react-icons/fa";
import AnimatedSection, { AnimatedItem } from "../components/AnimatedSection";
import GlowCard from "../components/GlowCard";

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "AI Powered E-Commerce Platform",
      description:
        "A full stack e-commerce platform with AI-based recommendations, authentication, and admin dashboard.",
      longDescription:
        "This project includes user authentication, product management, cart, checkout, admin dashboard, and AI-powered product suggestions based on user behavior.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Personal portfolio with modern UI, responsive design, and smooth routing.",
      longDescription:
        "Built using React and Tailwind CSS with reusable components, dark mode, and SEO-friendly structure.",
      tech: ["React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Employee Management System",
      description:
        "Comprehensive system to manage employees, attendance, inventory, and organizational data.",
      longDescription:
        "Includes employee registration, attendance tracking, inventory management, task assignment, and secure backend APIs with role-based access control.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Learning Management System",
      description:
        "Full-featured LMS for course management, student enrollment, and content delivery.",
      longDescription:
        "Includes course creation, video lectures, quizzes, student progress tracking, and instructor dashboards with analytics.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  const [selectedTech, setSelectedTech] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const techList = ["All", "React", "Node.js", "MongoDB", "Tailwind"];

  const filteredProjects =
    selectedTech === "All"
      ? allProjects
      : allProjects.filter((p) => p.tech.includes(selectedTech));

  return (
    <section className="pt-40 pb-32 min-h-screen" style={{ background: 'var(--bg-deep)' }}>
      {/* Ambient glow */}
      <div className="absolute top-60 left-0 w-[500px] h-[500px] rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', filter: 'blur(100px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20" stagger={false}>
          <span className="badge mb-4 inline-flex">
            <FaStar className="text-xs" /> Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world solutions crafted with precision. Each project represents
            a unique challenge solved with modern technology.
          </p>
        </AnimatedSection>

        {/* Filter Pills */}
        <AnimatedSection stagger={false} className="flex justify-center gap-3 mb-12 flex-wrap">
          {techList.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTech === tech
                  ? "bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white shadow-lg shadow-cyan-500/20"
                  : "glass text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tech}
            </button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedSection className="grid md:grid-cols-2 gap-12" stagger>
          {filteredProjects.map((project) => (
            <AnimatedItem key={project.id}>
              <GlowCard className="overflow-hidden group flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden shrink-0">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 badge !bg-amber-500/20 !text-amber-400 !border-amber-500/30">
                      <FaStar className="text-xs" /> Featured
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors tracking-wide">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-base mb-8 leading-loose flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag text-xs px-3 py-1.5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00d4ff] transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00d4ff] transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="ml-auto text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </GlowCard>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="glass-strong max-w-lg w-full rounded-3xl p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>

              <h2 className="text-2xl font-bold text-white mb-2">
                {activeProject.title}
              </h2>

              <p className="gradient-text text-sm font-medium mb-4">SkyCodex Project</p>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {activeProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={activeProject.github}
                  className="btn-outline !py-2.5 !px-5 !text-sm"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={activeProject.demo}
                  className="btn-primary !py-2.5 !px-5 !text-sm"
                >
                  <span className="flex items-center gap-2"><FaExternalLinkAlt /> Live Demo</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
