
import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Salesforce Developer with Agentblazer Champion Program",
    issuer: "SmartBridge & AICTE",
    date: "May 2025 - July 2025",
    description: "Completed an 8-week virtual internship program covering Salesforce fundamentals including organizational setup, data management, security management, developer fundamentals, process automation, and user interface. Achieved multiple superbadges including Apex Specialist, Object Relationships, and Lightning Web Components Basics.",
    pdf: "/salesforce_cer.pdf",
    color: "#00A1E0"
  },
  {
    title: "Microsoft AI Certificate (AI-102 & AI-900)",
    issuer: "Infosys Finishing School Employability Training",
    date: "July 2025",
    description: "Completed foundational (AI-900) and intermediate (AI-102) level courses on Artificial Intelligence, covering core AI concepts, Azure AI services, and real-world AI solution development under Infosys's employability training program.",
    pdf: "/microsoft.pdf",
    color: "#FF6B35"
  },
  {
    title: "Google Generative AI",
    issuer: "Google Cloud & AICTE",
    date: "September 2024",
    description: "Focused on understanding and building generative AI models using Google's platforms like Gemini and Vertex AI. Jointly certified by Google Cloud and AICTE.",
    pdf: "/google_gen_ai.pdf",
    color: "#039BE5"
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "Google & AICTE",
    date: "March 2025",
    description: "An advanced certification covering machine learning algorithms, AI implementation strategies, and real-world applications—demonstrating a strong foundation in core AI/ML concepts.",
    pdf: "/aiml.pdf",
    color: "#FFCA28"
  },
  {
    title: "Python Programming",
    issuer: "IIT Bombay – Spoken Tutorial",
    date: "March 2024",
    description: "Introductory to intermediate-level training in core Python concepts, endorsed by IIT Bombay, with hands-on coding and assessments under the Spoken Tutorial initiative.",
    pdf: "/iit_bombay_python.pdf",
    color: "#4CAF50"
  },
  {
    title: "Web Full Stack Development",
    issuer: "EduSkill Academy",
    date: "June 2025",
    description: "Comprehensive training across front-end (HTML, CSS, JavaScript) and back-end technologies. Complements hands-on projects like the Short Music Tunes and AI Chatbot Assistant web apps.",
    pdf: "/web_full_stack.pdf",
    color: "#F44336"
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

const CertificationCard = ({ cert, index }: { cert: any; index: number }) => (
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
                style={{ backgroundColor: cert.color }}
            >
                🎓
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                        {cert.title}
                    </h3>
                    <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
                    </a>
                </div>
                <p className="text-[#039BE5] font-semibold text-sm mb-1">{cert.issuer}</p>
                <p className="text-[#FFCA28] text-xs mb-3">{cert.date}</p>
                <p className="text-[#F7FAFC]/80 text-sm leading-relaxed">{cert.description}</p>
            </div>
        </div>
    </motion.div>
);

const Certifications = () => (
    <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <SectionTitle icon="🎓">Certifications & Achievements</SectionTitle>
            
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="text-lg text-[#F7FAFC]/80 max-w-2xl mx-auto">
                    Continuous learning and professional development through industry-recognized certifications and training programs.
                </p>
            </motion.div>

            <div className="space-y-6">
                {certifications.map((cert, index) => (
                    <CertificationCard key={cert.title} cert={cert} index={index} />
                ))}
            </div>

            {/* Stats Section */}
            <motion.div
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
            >
                {[
                    { label: "Certifications", value: "6+", icon: "🏆" },
                    { label: "Training Hours", value: "250+", icon: "⏱️" },
                    { label: "Organizations", value: "5+", icon: "🏢" }
                ].map((stat) => (
                    <div key={stat.label} className="firebase-card p-6 text-center">
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold text-[#FF6B35] mb-1">{stat.value}</div>
                        <div className="text-[#F7FAFC]/70 text-sm">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
      </div>
    </section>
);

export default Certifications;
