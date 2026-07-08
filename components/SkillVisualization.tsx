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
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">Expertise</span>
      <h2 className="section-title-unfold mb-12">My Skills</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 rounded-full font-medium text-xs transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#039BE5] text-white shadow-md'
                : 'bg-white/[0.03] text-white/60 border border-white/5 hover:border-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.01 }}
            viewport={{ once: true }}
            className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-white/10 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{skill.icon}</span>
                <h3 className="text-white font-bold text-sm sm:text-base">{skill.name}</h3>
              </div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
                {getSkillRating(skill.level)}
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] text-white/30 font-mono">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
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

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.03]">
        {[
          { label: 'Skills', value: skills.length, icon: '🎯' },
          { label: 'Expert', value: skills.filter(s => s.level >= 90).length, icon: '⭐' },
          { label: 'Categories', value: categories.length - 1, icon: '📚' },
          { label: 'Avg Proficiency', value: `${Math.round(skills.reduce((sum, s) => sum + s.level, 0) / skills.length)}%`, icon: '📊' }
        ].map((stat) => (
          <div
            key={stat.label}
            className="border border-white/5 bg-white/[0.01] rounded-2xl p-4 text-center"
          >
            <div className="text-xl font-bold text-white mb-1 font-mono">
              {stat.value}
            </div>
            <div className="text-white/40 text-[10px] uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillVisualization;
