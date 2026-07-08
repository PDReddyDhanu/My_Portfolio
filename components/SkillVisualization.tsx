import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export const SkillVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 90, category: 'Frontend', icon: '📘' },
    { name: 'Next.js', level: 88, category: 'Frontend', icon: '▲' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '🎨' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend', icon: '🌐' },
    { name: 'JavaScript', level: 93, category: 'Frontend', icon: '📜' },

    // Backend
    { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢' },
    { name: 'Express', level: 82, category: 'Backend', icon: '🚂' },
    { name: 'REST APIs', level: 88, category: 'Backend', icon: '🔌' },

    // AI/ML
    { name: 'Google Gemini', level: 90, category: 'AI/ML', icon: '🤖' },
    { name: 'Genkit', level: 85, category: 'AI/ML', icon: '🧠' },
    { name: 'AI Integration', level: 87, category: 'AI/ML', icon: '✨' },

    // Database
    { name: 'MongoDB', level: 83, category: 'Database', icon: '🍃' },
    { name: 'Firebase', level: 86, category: 'Database', icon: '🔥' },
    { name: 'MySQL', level: 80, category: 'Database', icon: '🐬' },

    // Cloud & Tools
    { name: 'Git', level: 90, category: 'Tools', icon: '📦' },
    { name: 'GitHub', level: 92, category: 'Tools', icon: '🐙' },
    { name: 'Vercel', level: 88, category: 'Tools', icon: '▲' },
    { name: 'Netlify', level: 85, category: 'Tools', icon: '🌊' },
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
    return 'Intermediate';
  };

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-2xl sm:text-3xl mr-3">🎯</span>
          Skills & Expertise
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full font-medium text-xs transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#039BE5] text-white shadow-md'
                  : 'bg-[#2D3748]/30 text-white/70 border border-[#30363D] hover:border-[#FF6B35]/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#30363D] scrollbar-track-transparent">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
              viewport={{ once: true }}
              className="bg-[#1A202C]/40 border border-[#30363D] rounded-2xl p-3.5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <span className="text-lg shrink-0">{skill.icon}</span>
                  <h3 className="text-white font-bold text-xs sm:text-sm truncate">{skill.name}</h3>
                </div>
                <span className="text-[9px] font-bold text-white/50 shrink-0 uppercase tracking-wider">
                  {getSkillRating(skill.level)}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[9px] text-white/40 font-mono">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-[#2D3748] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-5 grid grid-cols-4 gap-2 pt-4 border-t border-[#30363D]">
        {[
          { label: 'Skills', value: skills.length, icon: '🎯' },
          { label: 'Expert', value: skills.filter(s => s.level >= 90).length, icon: '⭐' },
          { label: 'Types', value: categories.length - 1, icon: '📚' },
          { label: 'Avg', value: `${Math.round(skills.reduce((sum, s) => sum + s.level, 0) / skills.length)}%`, icon: '📊' }
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#1A202C]/20 border border-[#30363D] rounded-xl p-2 text-center"
          >
            <div className="text-sm font-bold bg-gradient-to-r from-[#FF6B35] to-[#039BE5] bg-clip-text text-transparent mb-0.5">
              {stat.value}
            </div>
            <div className="text-white/40 text-[9px] uppercase tracking-wide leading-none">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillVisualization;
