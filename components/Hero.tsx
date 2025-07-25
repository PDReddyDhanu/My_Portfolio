
import React from 'react';
import { motion } from 'framer-motion';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const Hero = () => (
  <motion.section
    className="text-center py-12 md:py-20 bg-[#181f36] rounded-3xl shadow-2xl shadow-blue-900 relative overflow-hidden"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 60, damping: 12 }}
    style={{ boxShadow: '0 8px 32px 0 rgba(58, 97, 255, 0.25)' }}
  >
    <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
      <motion.div
        className="relative mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-60 animate-pulse z-0" style={{ filter: 'blur(16px)' }}></span>
        <img
          src="/profile.jpg"
          alt="Palakolanu Dhanunjay Reddy profile"
          className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-blue-400 shadow-lg relative z-10"
          style={{ boxShadow: '0 0 32px 4px #6366f1, 0 0 0 8px #181f36' }}
        />
      </motion.div>
      <motion.h1
        className="text-2xl md:text-6xl font-extrabold text-white tracking-tight md:whitespace-nowrap drop-shadow-lg"
        whileHover={{ scale: 1.04, textShadow: '0 0 16px #6366f1' }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        Dhanunjay Reddy Palakolanu
      </motion.h1>
        <h2 className="mt-4 text-lg md:text-xl font-semibold text-blue-400">B.Tech in IT | Aspiring Full Stack Developer</h2>
        <h3 className="mt-1 text-lg md:text-xl font-semibold text-blue-300">Open Source Enthusiastic</h3>
        <p className="mt-6 text-lg text-slate-300">
Engineer by training,innovator by mindset.Building intelligent systems for real users.
        </p>
        <a
            href="/Palakolanu-Dhanunjay-Reddy-Entry-Level-Web-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
            <DownloadIcon />
            Download Resume
        </a>
    </div>
  </motion.section>
);

export default Hero;
