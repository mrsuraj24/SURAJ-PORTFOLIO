export default function Home() {
    return (
        <>
            <section className="max-w-full mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 bg-gray-300/40 items-center">
                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Hi, I’m Suraj Vishwakarma <br />
                        <span className="text-indigo-600 dark:text-indigo-400">
                            Full-Stack Developer (MERN)
                        </span>
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Let’s Work Together <br />
                        to Create <span className="text-indigo-600">Amazing Products</span>
                    </h1>


                    <p className="mt-6 text-gray-600 max-w-lg text-lg">
                        I’m a full-stack developer focused on building clean, scalable,
                        and user-friendly web applications using modern technologies that help businesses
                        look professional online.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
                            Get Started
                        </button>
                        <button className="border bg-indigo-600  border-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition">

                            View Projects
                        </button>
                        <a href="https://wa.me/917376731077" target="_blank" className="border bg-indigo-600  border-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition" >
                            Contact on WhatsApp
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex gap-10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">9+</h2>
                            <p className="text-gray-500 text-sm">Projects</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">2K+</h2>
                            <p className="text-gray-500 text-sm">Hours Coding</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">95%</h2>
                            <p className="text-gray-500 text-sm">Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="relative flex justify-center">
                    <img
                        src="./image.png"
                        alt="profile"
                        className=" w-full max-w-md rounded-2xl shadow-xl"
                    />

                    {/* Floating Tags */}
                    <span className="absolute top-10 -left-6 bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                        MERN Developer
                    </span>
                    <span className="absolute top-25 -left-7 bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                        Full-Stack Developer
                    </span>
                    <span className="absolute top-40 -left-6 bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                        Ethical Hacker
                    </span>
                    <span className="absolute bottom-30 -right-6 bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                        Frontend Expert
                    </span>
                    <span className="absolute bottom-45 -right-6 bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                        Responsive Design
                    </span>
                    <span className="absolute bottom-15 -right-6 bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
                        Backend Expert
                    </span>
                </div>
            </section>
        </>
    )
}