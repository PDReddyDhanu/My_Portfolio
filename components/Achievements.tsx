
import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Top 10% Performance",
    description: "Achieved top 10% ranking in AICTE GenAI Virtual Internship, demonstrating exceptional understanding of generative AI concepts and practical implementation skills.",
    icon: "🥇",
    color: "#FF6B35"
  },
  {
    title: "Academic Excellence",
    description: "Consistently maintained 8.76+ CGPA in engineering, showcasing strong academic performance and dedication to learning across all subjects.",
    icon: "🎓",
    color: "#039BE5"
  },
  {
    title: "Project Deployments",
    description: "Successfully deployed multiple live projects on Netlify, including Short Music Tunes and AI Chatbot Assistant, demonstrating practical web development skills.",
    icon: "🚀",
    color: "#FFCA28"
  },
  {
    title: "Industry Certifications",
    description: "Certified in Python by IIT Bombay and Full Stack Web Development, along with Microsoft AI-900 and AI-102 certifications through Infosys Finishing School.",
    icon: "🏆",
    color: "#4CAF50"
  },
  {
    title: "Open Source Contribution",
    description: "Actively contributed to open-source projects and collaborated with peers on GitHub, enhancing teamwork and version control skills.",
    icon: "💻",
    color: "#F44336"
  },
  {
    title: "Real-World Impact",
    description: "Delivered practical impact through real-world AI and web projects that solve actual problems and provide value to users.",
    icon: "🌟",
    color: "#9C27B0"
  }
];

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

const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => (
    <motion.div
        className="firebase-card p-6 group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
    >
        <div className="flex items-start space-x-4">
            <div 
                className="flex items-center justify-center w-12 h-12 rounded-xl text-white text-xl shadow-lg flex-shrink-0"
                style={{ backgroundColor: achievement.color }}
            >
                {achievement.icon}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                    {achievement.title}
                </h3>
                <p className="text-[#F7FAFC]/80 text-sm leading-relaxed">{achievement.description}</p>
            </div>
        </div>
    </motion.div>
);

const Achievements = () => (
    <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <SectionTitle icon="🏆">Achievements & Recognition</SectionTitle>
            
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="text-lg text-[#F7FAFC]/80 max-w-2xl mx-auto">
                    Milestones and accomplishments that reflect dedication, hard work, and continuous growth in technology and development.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {achievements.map((achievement, index) => (
                    <AchievementCard key={achievement.title} achievement={achievement} index={index} />
                ))}
            </div>

            {/* Stats Section */}
            <motion.div
                className="firebase-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "CGPA", value: "8.80+", icon: "📊" },
                        { label: "Projects", value: "7+", icon: "💼" },
                        { label: "Certifications", value: "8+", icon: "🏅" },
                        { label: "Internships", value: "4+", icon: "🎯" }
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-[#FF6B35] mb-1">{stat.value}</div>
                            <div className="text-[#F7FAFC]/70 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default Achievements;
