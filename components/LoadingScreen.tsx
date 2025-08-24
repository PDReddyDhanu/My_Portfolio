import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Complete loading after progress reaches 100%
    const completeTimer = setTimeout(() => {
      if (loadingProgress >= 100) {
        onLoadingComplete();
      }
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(contentTimer);
      clearTimeout(completeTimer);
    };
  }, [loadingProgress, onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0D1117] via-[#1A1A1A] to-[#2D3748] flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF6B35]/10 to-[#039BE5]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FFCA28]/10 to-[#4CAF50]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 text-center">
          {/* PDR Logo */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <div className="relative">
              {/* Main Logo Container */}
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#FF6B35] via-[#039BE5] to-[#FFCA28] rounded-3xl p-1 shadow-2xl">
                <div className="w-full h-full bg-[#0D1117] rounded-3xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 left-2 w-8 h-8 border-2 border-[#FF6B35] rounded-lg"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-2 border-[#039BE5] rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-[#FFCA28] rounded-lg"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-[#4CAF50] rounded-full"></div>
                  </div>
                  
                  {/* PDR Text */}
                  <motion.span
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    PDR
                  </motion.span>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B35] rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#039BE5] rounded-full shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>

          {/* Loading Text */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 107, 53, 0.5)",
                      "0 0 30px rgba(3, 155, 229, 0.5)",
                      "0 0 20px rgba(255, 107, 53, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Dhanunjay Reddy
                </motion.h1>
                
                <motion.p
                  className="text-lg text-[#F7FAFC]/80 mb-8 max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Full Stack Developer & AI Enthusiast
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Bar */}
          <motion.div
            className="w-64 h-2 bg-[#2D3748] rounded-full mx-auto mb-8 overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Loading Percentage */}
          <motion.div
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {Math.round(loadingProgress)}%
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-[#FF6B35] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-[#F7FAFC]/60 text-sm">
         
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
