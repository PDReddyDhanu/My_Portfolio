import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Centered Profile Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 relative"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/10 shadow-2xl relative z-10 mx-auto">
          <img
            src="/profile.jpg"
            alt="Palakolanu Dhanunjay Reddy"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#039BE5] opacity-20 blur-md"></div>
      </motion.div>

      {/* Spacious Typography */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl space-y-4 relative z-10"
      >
        <span className="text-xs font-bold tracking-[0.25em] text-[#FF6B35] uppercase block">
          Full Stack Developer & AI Innovator
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif-heading text-white tracking-wide">
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
