

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const Hero = () => (
  <div className="flex flex-col items-center justify-center text-center relative z-10 w-full py-4">
    <motion.div
      className="text-center w-full"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 12 }}
    >
      {/* Profile Image */}
      <motion.div
        className="relative mb-6 flex justify-center"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] blur-xl opacity-30 animate-pulse"></div>

          {/* Profile image */}
          <img
            src="/profile.jpg"
            alt="Palakolanu Dhanunjay Reddy profile"
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#FF6B35] shadow-2xl"
            style={{
              boxShadow: '0 0 30px rgba(255, 107, 53, 0.25), 0 0 60px rgba(3, 155, 229, 0.15)'
            }}
          />

          {/* Status indicator */}
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#4CAF50] rounded-full border-4 border-[#161B22] animate-pulse"></div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight"
        initial={{ opacity: 0, y: 15 }}
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
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-lg md:text-xl font-semibold text-[#039BE5] mb-1">
          B.Tech in Information Technology
        </h2>
        <h3 className="text-base md:text-lg font-medium text-[#FFCA28] mb-3">
          Full Stack Developer
        </h3>
        <div className="text-white/80 text-sm md:text-base max-w-xl mx-auto min-h-[50px] leading-relaxed">
          <TypeAnimation
            sequence={[
              'Engineer by training, innovator by mindset.',
              2000,
              'Building intelligent systems for real users.',
              2000,
              'Creating amazing web experiences with modern tech.',
              2000,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="/Palakolanu-Dhanunjay-Reddy-Entry-Level-Web-Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="firebase-button inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
        >
          <DownloadIcon />
          Download Resume
        </a>

        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold rounded-xl border-2 border-[#039BE5] text-[#039BE5] hover:bg-[#039BE5] hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Tech Stack Preview */}
      <motion.div
        className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {['React', 'Node.js', 'Python', 'JavaScript', 'Git & GitHub', 'Vercel'].map((tech, index) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-[#2D3748]/40 backdrop-blur-sm border border-[#FF6B35]/20 rounded-full text-xs font-medium text-white/90"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </motion.div>
  </div>
);

export default Hero;
