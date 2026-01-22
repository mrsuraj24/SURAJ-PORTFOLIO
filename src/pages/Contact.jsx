export default function Contact() {

    return (
        <section className="pt-28 pb-20 bg-gray-300/40">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Get in <span className="text-indigo-600">Touch</span>
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Have a project, idea, or opportunity in mind?
                        Feel free to reach out. I’d love to talk.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Let’s build something together
                        </h2>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Whether you’re looking for a developer, want to collaborate,
                            or just want to say hello, my inbox is always open.
                        </p>

                        <div className="space-y-5 text-gray-700">
                            <p>
                                <span className="font-bold">Email:</span>{" "}
                                s24-technologies@gmail.com
                            </p>
                            <p>
                                <span className="font-bold">Location:</span>{" "}
                                Uttar Pradesh, India
                            </p>
                            <p>
                                <span className="font-bold">Availability:</span>{" "}
                                Open for Internships & Feelancing
                            </p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                        <form className="space-y-6">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}