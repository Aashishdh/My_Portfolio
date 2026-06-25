import { TypeAnimation } from "react-type-animation";
import Profile from './Profileicon'

export default function Hero() {

    return (

        <section
            id="home"
            className="min-h-screen bg-slate-950 flex items-center justify-center px-8 mt-30"
        >

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center mb-12">

                {/* LEFT SIDE */}
                <div>

                    <p className="text-cyan-400 text-xl mb-4">

                        Hello 👋

                    </p>

                    <h2 className="text-2xl md:text-7xl font-bold text-white">

                        I'm

                    </h2>

                    <h1 className="text-2xl md:text-7xl font-extrabold mt-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

                        Aashish Dhungana

                    </h1>

                    <div className="text-2xl md:text-4xl mt-8 font-semibold text-white">

                        <TypeAnimation

                            sequence={[

                                "Software Developer",
                                1500,

                                "React Developer",
                                1500,

                                ".NET Developer",
                                1500,

                                "Problem Solver",
                                1500,

                            ]}

                            speed={40}

                            repeat={Infinity}

                        />

                    </div>

                    <p className="text-gray-400 mt-8 text-lg leading-8">

                        Passionate Software Developer focused on building
                        modern web applications using React, Tailwind CSS,
                        C#, and .NET. I enjoy creating clean, responsive,
                        and user-friendly interfaces.

                    </p>

                    <div className="flex gap-6 mt-10">

                        <button className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 duration-300">

                            Download Resume

                        </button>

                        <a href="#projects">

                            <button className="px-8 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500 duration-300">

                                View Projects

                            </button>

                        </a>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="flex justify-center">

                    <Profile/>

                </div>

            </div>

        </section>

    );

}