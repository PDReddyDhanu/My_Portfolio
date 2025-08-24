
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

const ContactCard = ({ href, title, subtitle, icon, color, delay }: { 
    href: string; 
    title: string; 
    subtitle: string; 
    icon: React.ReactNode; 
    color: string;
    delay: number;
}) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="firebase-card p-6 group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
    >
        <div className="flex items-center space-x-4">
            <div 
                className="flex items-center justify-center w-14 h-14 rounded-xl text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: color }}
            >
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-white text-lg group-hover:text-[#FF6B35] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-[#F7FAFC]/70 text-sm mt-1">
                    {subtitle}
                </p>
            </div>
            <div className="text-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
        </div>
    </motion.a>
);

const Contact = () => (
    <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <SectionTitle icon="📬">Get In Touch</SectionTitle>
            
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="text-lg text-[#F7FAFC]/80 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <ContactCard
                    href="mailto:palakolanudhanunjayreddy@gmail.com"
                    title="Email"
                    subtitle="palakolanudhanunjayreddy@gmail.com"
                    icon="📧"
                    color="#FF6B35"
                    delay={0.1}
                />
                <ContactCard
                    href="https://www.linkedin.com/in/dhanunjay-reddy-palakolanu-pdr"
                    title="LinkedIn"
                    subtitle="dhanunjay-reddy-palakolanu-pdr"
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                        </svg>
                    }
                    color="#039BE5"
                    delay={0.2}
                />
                <ContactCard
                    href="https://github.com/PDReddyDhanu"
                    title="GitHub"
                    subtitle="PDReddyDhanu"
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    }
                    color="#FFCA28"
                    delay={0.3}
                />
                <ContactCard
                    href="https://youtube.com/@pdreddy?si=klmkcECfuBRXST-i"
                    title="YouTube"
                    subtitle="@pdreddy"
                    icon="▶️"
                    color="#F44336"
                    delay={0.4}
                />
                <ContactCard
                    href="https://x.com/PDReddyDhanu"
                    title="X (Twitter)"
                    subtitle="@PDReddyDhanu"
                    icon="𝕏"
                    color="#4CAF50"
                    delay={0.5}
                />
            </div>

            {/* Location Info */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="firebase-card p-8 max-w-md mx-auto">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <span className="text-2xl">📍</span>
                        <h3 className="text-xl font-bold text-white">Location</h3>
                    </div>
                    <p className="text-[#F7FAFC]/80 text-lg">Hyderabad, India</p>
                    <p className="text-[#F7FAFC]/60 text-sm mt-2">Available for remote opportunities worldwide</p>
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
            >
                <a
                    href="mailto:palakolanudhanunjayreddy@gmail.com"
                    className="firebase-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                </a>
            </motion.div>
        </div>
    </section>
);

export default Contact;
