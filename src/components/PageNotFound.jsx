import { NavLink } from "react-router-dom";

export default function PageNotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-300/40 px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-7xl md:text-8xl font-extrabold text-indigo-600">
                    404
                </h1>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                    Page Not Found
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                    You can return to the homepage or explore my projects.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <NavLink
                        to="/"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                    >
                        Back to Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="border border-indigo-600 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition"
                    >
                        View Projects
                    </NavLink>
                    <a
                        href="https://wa.me/917376731077"
                        target="_blank"
                        rel="noreferrer"
                        className="border border-indigo-600 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition"
                    >
                        Contact on WhatsApp
                    </a>
                </div>
                <p className="mt-10 text-gray-500 text-md">
                    Suraj Vishwakarma • MERN Stack Developer
                </p>
            </div>
        </section>
    )
}