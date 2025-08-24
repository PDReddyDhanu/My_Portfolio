import React from 'react';
import { motion } from 'framer-motion';

const internships = [
  {
    title: "Salesforce Developer with Agentblazer Champion Program",
    company: "SmartBridge & AICTE",
    date: "May 2025 - July 2025",
    description: "8-week virtual internship program covering Salesforce fundamentals including organizational setup, data management, security management, developer fundamentals, process automation, and user interface. Achieved multiple superbadges including Apex Specialist, Object Relationships Superbadge Unit, Lightning Web Components Basics, and became an Agentblazer Champion.",
    certificate: "/salesforce_cer.pdf",
    color: "#00A1E0"
  },
  {
    title: "Google Generative AI Internship",
    company: "Google Cloud & AICTE via EduSkill",
    date: "September 2024",
    description: "Learned to build and deploy generative AI solutions using tools like Gemini, Vertex AI, and Google Cloud Console. Completed hands-on labs focused on text and image generation, prompt engineering, and ethical AI practices.",
    certificate: "/google_gen_ai.pdf",
    color: "#FF6B35"
  },
  {
    title: "Artificial Intelligence & Machine Learning Internship",
    company: "Google & AICTE via EduSkill",
    date: "March 2025",
    description: "Gained practical exposure to supervised and unsupervised learning, NLP, computer vision, and real-time ML applications. Designed basic models and evaluated performance metrics as part of the final project.",
    certificate: "/aiml.pdf",
    color: "#039BE5"
  },
  {
    title: "Web Full Stack Development Internship",
    company: "EduSkill Academy",
    date: "June 2025",
    description: "Built end-to-end web apps using HTML5, CSS3, JavaScript, and introduction to backend concepts. Explored Git, version control, and deployment on platforms like Netlify and Vercel. Reinforced concepts through mini-projects and weekly tasks.",
    certificate: "/web_full_stack.pdf",
    color: "#FFCA28"
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

const InternshipCard = ({ internship, index }: { internship: any; index: number }) => (
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
                style={{ backgroundColor: internship.color }}
            >
                💼
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                        {internship.title}
                    </h3>
                    <a
                        href={internship.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
                <p className="text-[#039BE5] font-semibold text-sm mb-1">{internship.company}</p>
                <p className="text-[#FFCA28] text-xs mb-3">{internship.date}</p>
                <p className="text-[#F7FAFC]/80 text-sm leading-relaxed">{internship.description}</p>
            </div>
        </div>
    </motion.div>
);

const Internships = () => (
    <section id="internships" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <SectionTitle icon="🧑‍💼">Virtual Internships</SectionTitle>
            
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="text-lg text-[#F7FAFC]/80 max-w-2xl mx-auto">
                    Hands-on experience through virtual internships with leading technology companies and organizations.
                </p>
            </motion.div>

            <div className="space-y-6">
                {internships.map((internship, index) => (
                    <InternshipCard key={internship.title} internship={internship} index={index} />
                ))}
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
                    href="#contact"
                    className="firebase-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    Explore Opportunities
                </a>
            </motion.div>
        </div>
    </section>
);

export default Internships; 