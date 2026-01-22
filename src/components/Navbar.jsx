import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-indigo-900/70 backdrop-blur border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    <img src="itlogo3.png" alt="IT" className="h-11 w-15" />
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden sm:flex items-center gap-2 p-1 rounded-full">
                    {links.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-full text-sm font-medium transition ${isActive
                                    ? "bg-white/10 text-white shadow"
                                    : "text-white hover:bg-white/50 hover:text-indigo-600"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Contact */}
                <NavLink
                    to="/contact"
                    className="hidden sm:inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 transition shadow"
                >
                    Contact Me
                </NavLink>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="sm:hidden text-white text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="sm:hidden bg-indigo-900/70 border-t border-indigo-700">
                    <div className="flex flex-col px-6 py-4 gap-3">
                        {links.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg text-sm font-medium transition ${isActive
                                        ? "bg-indigo-500 text-white"
                                        : "text-white hover:bg-indigo-700"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <NavLink
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 bg-white text-indigo-700 text-center px-4 py-2 rounded-lg font-semibold"
                        >
                            Contact Me
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;