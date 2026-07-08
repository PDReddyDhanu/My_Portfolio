import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'orange' | 'blue' | 'yellow' | 'green' | 'default';
  delay?: number;
}

export const BentoCard = ({
  children,
  className = '',
  glowColor = 'default',
  delay = 0,
}: BentoCardProps) => {
  // Map color names to Tailwind style variables
  const glowShadows = {
    orange: 'hover:border-[#FF6B35]/40 hover:shadow-[0_0_25px_rgba(255,107,53,0.15)]',
    blue: 'hover:border-[#039BE5]/40 hover:shadow-[0_0_25px_rgba(3,155,229,0.15)]',
    yellow: 'hover:border-[#FFCA28]/40 hover:shadow-[0_0_25px_rgba(255,202,40,0.15)]',
    green: 'hover:border-[#4CAF50]/40 hover:shadow-[0_0_25px_rgba(76,175,80,0.15)]',
    default: 'hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`h-full ${className}`}
    >
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        scale={1.01}
        transitionSpeed={1200}
        className="h-full"
      >
        <div
          className={`h-full w-full bg-[#161B22]/60 backdrop-blur-md border border-[#30363D] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${glowShadows[glowColor]}`}
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className={`absolute -top-12 -left-12 w-40 h-40 rounded-full blur-[60px] opacity-20 ${
              glowColor === 'orange' ? 'bg-[#FF6B35]' :
              glowColor === 'blue' ? 'bg-[#039BE5]' :
              glowColor === 'yellow' ? 'bg-[#FFCA28]' :
              glowColor === 'green' ? 'bg-[#4CAF50]' : 'bg-white'
            }`} />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            {children}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
