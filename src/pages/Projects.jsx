import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
            image:
                "https://images.unsplash.com/photo-1557821552-17105176677c",
            github: "#",
            demo: "#",
        },
        {
            id: 2,
            title: "Portfolio Website",
            description:
                "Personal portfolio with modern UI, responsive design, and smooth routing.",
            longDescription:
                "Built using React and Tailwind CSS with reusable components, dark mode, and SEO-friendly structure.",
            tech: ["React", "Tailwind"],
            image:
                "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
            github: "#",
            demo: "#",
        },
        {
            id: 3,
            title: "Employee Management System",
            description:
                "System to manage donors, inventory, camps, and blood requests.",
            longDescription:
                "Includes donor registration, blood stock tracking, request approval, and secure backend APIs.",
            tech: ["React", "Node.js", "MongoDB"],
            image:
                "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
            github: "#",
            demo: "#",
        },
        {
            id: 3,
            title: "Learning Management System",
            description:
                "System to manage donors, inventory, camps, and blood requests.",
            longDescription:
                "Includes donor registration, blood stock tracking, request approval, and secure backend APIs.",
            tech: ["React", "Node.js", "MongoDB"],
            image:
                "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
            github: "#",
            demo: "#",
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
        <section className="pt-28 pb-20 bg-gray-300/40">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        My <span className="text-indigo-600">Projects</span>
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Real-world projects showcasing my full stack development skills.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {techList.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setSelectedTech(tech)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition ${selectedTech === tech
                                ? "bg-indigo-600 text-white"
                                : "bg-white border hover:bg-indigo-50"
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-57 w-full object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    <button
                                        onClick={() => setActiveProject(project)}
                                        className="ml-auto text-sm font-medium text-indigo-600 hover:scale-110"
                                    >
                                        Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activeProject && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white max-w-lg w-full rounded-2xl p-6 relative">
                        <button
                            onClick={() => setActiveProject(null)}
                            className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-gray-800"
                        >
                            ×
                        </button>

                        <h2 className="text-3xl font-extrabold mb-4">
                            {activeProject.title}
                        </h2>

                        <p className="text-gray-700 mb-6">
                            {activeProject.longDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {activeProject.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={activeProject.github}
                                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href={activeProject.demo}
                                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
