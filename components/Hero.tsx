

import { motion } from 'framer-motion';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#039BE5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFCA28]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>

    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.div
        className="text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative mb-8 flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] blur-xl opacity-30 animate-pulse"></div>
            
            {/* Profile image */}
            <img
              src="/profile.jpg"
              alt="Palakolanu Dhanunjay Reddy profile"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#FF6B35] shadow-2xl"
              style={{ 
                boxShadow: '0 0 40px rgba(255, 107, 53, 0.3), 0 0 80px rgba(3, 155, 229, 0.2)' 
              }}
            />
            
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#4CAF50] rounded-full border-4 border-[#0D1117] animate-pulse"></div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] bg-clip-text text-transparent">
            Dhanunjay Reddy
          </span>
          <br />
          <span className="text-white">Palakolanu</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-[#039BE5] mb-2">
            B.Tech in Information Technology
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-[#FFCA28] mb-2">
            Full Stack Developer
          </h3>
          <p className="text-[#F7FAFC]/80 text-base md:text-lg max-w-2xl mx-auto">
            Engineer by training, innovator by mindset. Building intelligent systems for real users with modern technologies.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="/Palakolanu-Dhanunjay-Reddy-Entry-Level-Web-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="firebase-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            <DownloadIcon />
            Download Resume
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#039BE5] text-[#039BE5] hover:bg-[#039BE5] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {['React', 'Node.js', 'Python', 'JavaScript', 'Git & GitHub ', 'Vercel'].map((tech, index) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-2 bg-[#2D3748]/50 backdrop-blur-sm border border-[#FF6B35]/20 rounded-full text-xs sm:text-sm font-medium text-white/90"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
