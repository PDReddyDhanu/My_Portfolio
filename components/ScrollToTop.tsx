import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showScrollBottom, setShowScrollBottom] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            const scrollBottom = scrollHeight - scrollTop - clientHeight;

            // Show scroll-to-top button when scrolled down more than 300px
            setShowScrollTop(scrollTop > 300);

            // Show scroll-to-bottom button when not at the bottom (more than 300px from bottom)
            setShowScrollBottom(scrollBottom > 300);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="fixed bottom-24 right-8 z-40 p-4 bg-gradient-to-r from-[#FF6B35] to-[#039BE5] rounded-full shadow-2xl hover:shadow-[#FF6B35]/50 transition-shadow duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                        {/* Pulse animation */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-white"
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ scale: [0, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        {/* Tooltip */}
                        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1A202C] text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            Scroll to Top
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Scroll to Bottom Button */}
            <AnimatePresence>
                {showScrollBottom && (
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        whileHover={{ scale: 1.1, y: 2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToBottom}
                        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-[#039BE5] to-[#FFCA28] rounded-full shadow-2xl hover:shadow-[#039BE5]/50 transition-shadow duration-300 group"
                        aria-label="Scroll to bottom"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                        {/* Pulse animation */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-white"
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ scale: [0, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        />
                        {/* Tooltip */}
                        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1A202C] text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            Scroll to Bottom
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollToTop;
