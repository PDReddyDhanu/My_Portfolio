import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-transparent to-transparent pointer-events-none"></div>
      
      {/* Centered Profile Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 relative flex items-center justify-center w-36 h-36 mx-auto"
      >
        {/* Inner Rotating Seal Circle */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-[112px] h-[112px] sm:w-[128px] sm:h-[128px] pointer-events-none z-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <linearGradient id="sealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#039BE5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFCA28" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#sealGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
        </motion.svg>

        {/* Outer Rotating Seal Circle (Counter-Clockwise) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-[124px] h-[124px] sm:w-[140px] sm:h-[140px] pointer-events-none z-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="url(#sealGrad)"
            strokeWidth="1"
            strokeDasharray="12 6 3 6"
            opacity="0.5"
          />
        </motion.svg>

        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/10 shadow-2xl relative z-10">
          <img
            src="/profile.jpg"
            alt="Palakolanu Dhanunjay Reddy"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#039BE5] opacity-20 blur-md z-0"></div>
      </motion.div>

      {/* Spacious Typography */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl space-y-4 relative z-10"
      >
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#4CAF50] bg-[#4CAF50]/10 px-3 py-1 rounded-full border border-[#4CAF50]/20 uppercase">
            Open to Work / Seeking Opportunities
          </span>
        </div>
        <span className="text-xs font-bold tracking-[0.25em] text-[#FF6B35] uppercase block">
          Full Stack Developer & AI Innovator
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-heading text-white tracking-wide leading-tight">
          <span className="block text-xl sm:text-3xl lg:text-4xl font-sans font-light text-white/50 mb-1 tracking-wider">Palakolanu</span>
          Dhanunjay Reddy<span className="text-[#FF6B35]">.</span>
        </h1>
        <p className="text-white/60 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          I build responsive web solutions and AI-driven platforms that connect users with seamless digital experiences. Based in Hyderabad, India.
        </p>
      </motion.div>

      {/* Minimalist CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-10 relative z-10"
      >
        <a
          href="#portfolio"
          className="px-8 py-3.5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
        >
          View Portfolio
        </a>
        <a
          href="/Palakolanu-Dhanunjay-Reddy-Entry-Level-Web-Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 border border-[#FF6B35]/30 text-xs font-bold uppercase tracking-wider text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all duration-300 rounded-full"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Mouse Wheel Scroll Indicator */}
      <a 
        href="#portfolio" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer text-white/40 hover:text-white transition-colors duration-300 z-10"
      >
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1.5 mb-2">
          <div className="w-1 h-1.5 bg-[#FF6B35] rounded-full scroll-wheel"></div>
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
      </a>

    </div>
  );
};

export default Hero;
