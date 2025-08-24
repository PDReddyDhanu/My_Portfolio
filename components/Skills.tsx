


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

const SkillCard = ({ title, skills, delay }: { title: string; skills: string[]; delay: number }) => (
    <motion.div
        className="firebase-card p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
        <h3 className="font-bold text-[#FF6B35] mb-4 text-lg">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <motion.span
                    key={skill}
                    className="bg-[#2D3748]/80 text-[#F7FAFC] text-sm font-medium px-3 py-2 rounded-lg border border-[#FF6B35]/20 hover:border-[#FF6B35]/40 transition-all duration-200"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 107, 53, 0.1)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                    viewport={{ once: true }}
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => (
    <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <SectionTitle icon="🛠️">Skills & Technologies</SectionTitle>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <SkillCard 
                    title="Programming Languages" 
                    skills={["Java", "Python"]} 
                    delay={0.1}
                />
                <SkillCard 
                    title="Web Development" 
                    skills={["HTML5", "CSS3", "React", "Node.js", "Tailwind CSS", "JavaScript", "Next.js", "TypeScript"]} 
                    delay={0.2}
                />
                <SkillCard 
                    title="Databases" 
                    skills={["SQL", "MySQL", "MongoDB"]} 
                    delay={0.3}
                />
                <SkillCard 
                    title="Tools & Platforms" 
                    skills={["GitHub", "Netlify", "VS Code", "Google Colab"]} 
                    delay={0.4}
                />
                <SkillCard 
                    title="AI & ML" 
                    skills={["Google Generative AI", "Prompt Engineering", "Machine Learning"]} 
                    delay={0.5}
                />
                <SkillCard 
                    title="Additional Skills" 
                    skills={["API Integration", "Version Control", "Deployment", "REST APIs"]} 
                    delay={0.6}
                />
            </div>

            {/* Skills Progress Section */}
            <motion.div
                className="mt-16 firebase-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Skill Proficiency</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                        { skill: "Frontend Development", level: 85, color: "#FF6B35" },
                        { skill: "Backend Development", level: 75, color: "#039BE5" },
                        { skill: "Database Management", level: 70, color: "#FFCA28" },
                        { skill: "AI & ML", level: 65, color: "#4CAF50" }
                    ].map((item, index) => (
                        <div key={item.skill} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-white font-medium">{item.skill}</span>
                                <span className="text-[#F7FAFC]/60 text-sm">{item.level}%</span>
                            </div>
                            <div className="w-full bg-[#2D3748] rounded-full h-2">
                                <motion.div
                                    className="h-2 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.level}%` }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default Skills;
