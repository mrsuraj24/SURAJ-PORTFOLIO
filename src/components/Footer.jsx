import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import WhatsApp from "./Whatsapp";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-gray-900/90 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <NavLink to="/" className="text-2xl font-bold text-indigo-400">
                            S<span className="text-white">24</span>Tech
                        </NavLink>
                        <p className="mt-4 text-gray-400 leading-relaxed">
                            Full Stack Developer focused on building clean, scalable,
                            and user-friendly web applications.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition">
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition">
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition">
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li><NavLink to="/" className="hover:text-indigo-400">Home</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-indigo-400">About</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-indigo-400">Services</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-indigo-400">Contact</NavLink></li>
                            <li><NavLink to="/projects" className="hover:text-indigo-400">Project</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Email:s24technologies@gmail.com</li>
                            <li>Location: India</li>
                            <li>Open for internships & freelance</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} S24Tech. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with React & Tailwind CSS</p>
                </div>
            </div>
            <button onClick={scrollToTop} className="fixed bottom-7 right-6 bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition" aria-label="Scroll to top">
                <FaArrowUp size={17} />
            </button>
            <WhatsApp />
        </footer>
    );
}