
import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <span className="text-4xl md:text-5xl mr-4">{icon}</span>
        {children}
    </motion.h2>
);

const About = () => (
    <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <SectionTitle icon="👨‍💻">About Me</SectionTitle>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="firebase-card p-8">
                        <p className="text-lg text-[#F7FAFC]/90 leading-relaxed mb-6">
                            Hi! I'm <span className="text-[#FF6B35] font-semibold">Palakolanu Dhanunjay Reddy</span>, a passionate and driven final-year B.Tech student in Information Technology at VJIT Hyderabad.
                        </p>
                        <p className="text-lg text-[#F7FAFC]/90 leading-relaxed mb-6">
                            I specialize in <span className="text-[#039BE5] font-semibold">Full Stack Web Development</span> and <span className="text-[#FFCA28] font-semibold">AI-powered solutions</span>, with hands-on experience building real-world applications—from responsive music preview platforms to intelligent AI chatbots for education.
                        </p>
                        <p className="text-lg text-[#F7FAFC]/90 leading-relaxed">
                            I'm deeply motivated by a love for continuous learning, emerging technologies like <span className="text-[#4CAF50] font-semibold">Generative AI</span>, and open-source contribution. My goal is to create impactful, user-centric software that bridges innovation and practicality.
                        </p>
                    </div>
                </motion.div>

                {/* Stats/Highlights */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="firebase-card p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
                        <div className="space-y-4">
                            {[
                                { label: "Education", value: "B.Tech IT", icon: "🎓" },
                                { label: "Project Experience", value: "2+ Years", icon: "💼" },
                                { label: "Projects", value: "7+ Completed", icon: "🚀" },
                                { label: "Technologies", value: "10+ Skills", icon: "⚡" },
                                { label: "Certifications", value: "6+ Industry-Recognized", icon: "🏆" }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    className="flex items-center justify-between p-4 bg-[#2D3748]/50 rounded-lg border border-[#FF6B35]/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, borderColor: '#FF6B35' }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="text-white font-medium">{item.label}</span>
                                    </div>
                                    <span className="text-[#FF6B35] font-bold">{item.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <a 
                    href="/Palakolanu-Dhanunjay-Reddy-Entry-Level-Web-Developer.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="firebase-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Resume
                </a>
            </motion.div>
        </div>
    </section>
);

export default About;
