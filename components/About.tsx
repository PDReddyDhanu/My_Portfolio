const About = () => (
    <div className="w-full h-full flex flex-col justify-between py-2">
        <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">👨‍💻</span>
                About Me
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        Hi! I'm <span className="text-[#FF6B35] font-semibold">Palakolanu Dhanunjay Reddy</span>, a B.Tech student in Information Technology at Vidya Jyothi Institute of Technology, Hyderabad (CGPA: 8.8/10).
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        I specialize in <span className="text-[#039BE5] font-semibold">Full Stack Web Development</span> and <span className="text-[#FFCA28] font-semibold">AI-powered solutions</span>, building real-world applications like dynamic web portals and educational AI chatbots.
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                        Driven by curiosity and a passion for technology, I am always seeking new challenges and opportunities to learn and build impactful software.
                    </p>
                </div>

                {/* Stats/Highlights */}
                <div className="lg:col-span-5 bg-[#1F2937]/50 border border-[#30363D] rounded-2xl p-4 w-full">
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-3 tracking-wide uppercase text-white/60">Quick Facts</h3>
                    <div className="space-y-2">
                        {[
                            { label: "Education", value: "B.Tech IT", icon: "🎓" },
                            { label: "Experience", value: "2+ Years", icon: "💼" },
                            { label: "Projects", value: "7+", icon: "🚀" },
                            { label: "Tech Mastered", value: "10+ Skills", icon: "⚡" },
                            { label: "Certifications", value: "6+ Org", icon: "🏆" }
                        ].map((stat) => (
                            <div key={stat.label} className="flex justify-between items-center text-xs">
                                <span className="text-white/60 flex items-center">
                                    <span className="mr-2 text-sm">{stat.icon}</span>
                                    {stat.label}
                                </span>
                                <span className="text-[#FF6B35] font-semibold">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;
