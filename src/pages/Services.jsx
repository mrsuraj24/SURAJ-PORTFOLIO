export default function Services() {
    return (
        <section className="pt-28 pb-20 bg-gray-300/40">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        My <span className="text-indigo-600">Services</span>
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        I offer end-to-end development services focused on performance,
                        usability, and clean code.
                    </p>
                </div>

                {/* Services Card */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-6">
                            01
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Frontend Development
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Building fast, responsive, and user-friendly interfaces using
                            React, Tailwind CSS, and modern UI practices.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-6">
                            02
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Backend Development
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Developing secure and scalable REST APIs using Node.js,
                            Express, MongoDB, and JWT-based authentication.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-6">
                            03
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Full Stack Projects
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Complete web applications from idea to deployment with clean
                            architecture, testing, and performance optimization.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-6">
                            04
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            UI / UX Design
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Designing clean and modern user interfaces focused on clarity,
                            accessibility, and smooth user experience.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-6">
                            05
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            API Integration
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Integrating third-party APIs like payment gateways,
                            authentication services, and cloud-based tools.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-6">
                            06
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Website Maintenance
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ongoing support, performance improvements, bug fixes,
                            and feature updates to keep your site running smoothly.
                        </p>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Have a project in mind?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Let’s discuss how I can help you build it.
                    </p>

                    <a href="https://wa.me/917376731077" target="_blank" className="inline-block border bg-indigo-600  border-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition" >
                        Contact on WhatsApp
                    </a>
                </div>

            </div>
        </section>
    );
}