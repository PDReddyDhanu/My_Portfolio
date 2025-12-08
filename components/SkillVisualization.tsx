import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
    name: string;
    level: number;
    category: string;
    icon: string;
    color: string;
}

const SkillVisualization = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const skills: Skill[] = [
        // Frontend
        { name: 'React', level: 95, category: 'Frontend', icon: '⚛️', color: '#61DAFB' },
        { name: 'TypeScript', level: 90, category: 'Frontend', icon: '📘', color: '#3178C6' },
        { name: 'Next.js', level: 88, category: 'Frontend', icon: '▲', color: '#000000' },
        { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '🎨', color: '#06B6D4' },
        { name: 'HTML/CSS', level: 95, category: 'Frontend', icon: '🌐', color: '#E34F26' },
        { name: 'JavaScript', level: 93, category: 'Frontend', icon: '📜', color: '#F7DF1E' },

        // Backend
        { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢', color: '#339933' },
        { name: 'Express', level: 82, category: 'Backend', icon: '🚂', color: '#000000' },
        { name: 'REST APIs', level: 88, category: 'Backend', icon: '🔌', color: '#FF6B35' },

        // AI/ML
        { name: 'Google Gemini', level: 90, category: 'AI/ML', icon: '🤖', color: '#4285F4' },
        { name: 'Genkit', level: 85, category: 'AI/ML', icon: '🧠', color: '#FBBC04' },
        { name: 'AI Integration', level: 87, category: 'AI/ML', icon: '✨', color: '#34A853' },

        // Database
        { name: 'MongoDB', level: 83, category: 'Database', icon: '🍃', color: '#47A248' },
        { name: 'Firebase', level: 86, category: 'Database', icon: '🔥', color: '#FFCA28' },
        { name: 'MySQL', level: 80, category: 'Database', icon: '🐬', color: '#4479A1' },

        // Cloud & Tools
        { name: 'Git', level: 90, category: 'Tools', icon: '📦', color: '#F05032' },
        { name: 'GitHub', level: 92, category: 'Tools', icon: '🐙', color: '#181717' },
        { name: 'Vercel', level: 88, category: 'Tools', icon: '▲', color: '#000000' },
        { name: 'Netlify', level: 85, category: 'Tools', icon: '🌊', color: '#00C7B7' },
    ];

    const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Database', 'Tools'];

    const filteredSkills = selectedCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    const getSkillColor = (level: number) => {
        if (level >= 90) return 'from-[#FFCA28] to-[#FF6B35]';
        if (level >= 80) return 'from-[#039BE5] to-[#4285F4]';
        return 'from-[#34A853] to-[#00C7B7]';
    };

    const getSkillRating = (level: number) => {
        if (level >= 90) return 'Expert';
        if (level >= 80) return 'Advanced';
        if (level >= 70) return 'Intermediate';
        return 'Beginner';
    };

    return (
        <section className="py-20 px-4 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFCA28]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#039BE5]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-4xl md:text-5xl mr-4">🎯</span>
                    Skills & Expertise
                </motion.h2>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#039BE5] text-white shadow-lg scale-105'
                                    : 'bg-[#2D3748]/50 text-white/70 border border-[#4A5568] hover:border-[#FF6B35]/40 hover:text-white'
                                }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: selectedCategory === category ? 1.05 : 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-[#1A202C]/60 backdrop-blur-sm border border-[#4A5568] rounded-xl p-6 hover:border-[#FF6B35]/40 transition-all duration-300 group"
                        >
                            {/* Skill Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <motion.div
                                        className="text-4xl"
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{skill.name}</h3>
                                        <p className="text-white/60 text-xs">{skill.category}</p>
                                    </div>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getSkillColor(skill.level)} text-white`}>
                                    {getSkillRating(skill.level)}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/60 text-sm">Proficiency</span>
                                    <span className="text-white font-bold text-sm">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-[#2D3748] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full relative overflow-hidden`}
                                    >
                                        {/* Shimmer Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                            animate={{
                                                x: ['-100%', '100%']
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'linear',
                                                delay: index * 0.1
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Circular Progress Indicator */}
                            <div className="mt-4 flex justify-center">
                                <svg className="w-20 h-20 transform -rotate-90">
                                    {/* Background Circle */}
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        stroke="#2D3748"
                                        strokeWidth="6"
                                        fill="none"
                                    />
                                    {/* Progress Circle */}
                                    <motion.circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        stroke={`url(#gradient-${index})`}
                                        strokeWidth="6"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: skill.level / 100 }}
                                        transition={{ duration: 1.5, delay: index * 0.05, ease: 'easeOut' }}
                                        viewport={{ once: true }}
                                        strokeDasharray="220"
                                    />
                                    <defs>
                                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#FF6B35" />
                                            <stop offset="100%" stopColor="#039BE5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: 'Total Skills', value: skills.length, icon: '🎯' },
                        { label: 'Expert Level', value: skills.filter(s => s.level >= 90).length, icon: '⭐' },
                        { label: 'Categories', value: categories.length - 1, icon: '📚' },
                        { label: 'Avg Proficiency', value: `${Math.round(skills.reduce((sum, s) => sum + s.level, 0) / skills.length)}%`, icon: '📊' }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1A202C]/60 backdrop-blur-sm border border-[#4A5568] rounded-xl p-6 text-center hover:border-[#FF6B35]/40 transition-all duration-300"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#039BE5] bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-white/60 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillVisualization;
