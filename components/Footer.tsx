

import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            href: "https://github.com/PDReddyDhanu",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            color: "#FFCA28"
        },
        {
            href: "https://www.linkedin.com/in/dhanunjay-reddy-palakolanu-pdr",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
            ),
            color: "#039BE5"
        },
        {
            href: "https://youtube.com/@pdreddy?si=klmkcECfuBRXST-i",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566a2.994 2.994 0 0 0-2.112 2.12C0 8.357 0 12 0 12s0 3.643.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.643 24 12 24 12s0-3.643-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            ),
            color: "#F44336"
        },
        {
            href: "https://x.com/PDReddyDhanu",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.162 0h-4.327l-5.835 8.228L6.165 0H.003l7.527 11.012L.003 24h4.327l6.003-8.463L17.835 24h4.327l-7.527-11.012L22.162 0zm-2.47 22.285l-5.692-8.06-5.692 8.06H2.64l7.36-10.764L2.64 1.715h2.668l5.692 8.06 5.692-8.06h2.668l-7.36 10.764 7.36 10.764h-2.668z"/>
                </svg>
            ),
            color: "#4CAF50"
        }
    ];

    return (
        <footer className="relative border-t border-[#FF6B35]/20 bg-gradient-to-b from-transparent to-[#0D1117]/50">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                                                 <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                             <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] via-[#039BE5] to-[#FFCA28] rounded-lg p-0.5 shadow-lg">
                                 <div className="w-full h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] font-black text-sm">PDR</span>
                                 </div>
                             </div>
                             <span className="text-white font-bold text-lg">Dhanunjay Reddy</span>
                         </div>
                        <p className="text-[#F7FAFC]/70 text-sm">
                            Full Stack Developer passionate about creating innovative solutions and building the future of web technology.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-[#F7FAFC]/70 hover:text-[#FF6B35] transition-colors duration-300 text-sm"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="text-center md:text-right"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-white font-bold mb-4">Contact</h3>
                        <div className="space-y-2 text-sm">
                            <p className="text-[#F7FAFC]/70">📍 Hyderabad, India</p>
                            <a 
                                href="mailto:palakolanudhanunjayreddy@gmail.com"
                                className="block text-[#F7FAFC]/70 hover:text-[#FF6B35] transition-colors duration-300"
                            >
                                📧 palakolanudhanunjayreddy@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    className="flex justify-center space-x-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.href}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-[#2D3748]/50 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 border border-[#FF6B35]/20 hover:border-[#FF6B35]"
                            style={{ '--hover-color': social.color } as any}
                            whileHover={{ 
                                backgroundColor: 'rgba(45, 55, 72, 0.8)',
                                borderColor: social.color,
                                scale: 1.1
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className="text-center pt-8 border-t border-[#FF6B35]/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[#F7FAFC]/60 text-sm">
                        © {currentYear} Palakolanu Dhanunjay Reddy. All rights reserved. 
                        <span className="text-[#FF6B35]">❤️</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
