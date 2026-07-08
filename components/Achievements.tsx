import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

const achievements: Achievement[] = [
  {
    title: "Internshala Student Partner (ISP 20)",
    description: "Selected as student partner for Vidya Jyothi Institute of Technology, promoting internships and learning programs.",
    icon: "🤝"
  },
  {
    title: "Spoken Tutorial Coordinator",
    description: "Coordinated Spoken Tutorial training programs by IIT Bombay at VJIT, organizing coding courses for classmates.",
    icon: "🎓"
  },
  {
    title: "Edunet Foundation AI/ML",
    description: "Completed virtual internship and project presentation on Artificial Intelligence and Machine Learning.",
    icon: "🤖"
  },
  {
    title: "Salesforce Virtual Intern",
    description: "Successfully built custom Apex/LWC modules in Salesforce Developer sandbox environments.",
    icon: "☁️"
  }
];

export const Achievements = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-2xl sm:text-3xl mr-3">🏆</span>
          Achievements
        </h2>

        {/* Vertical list */}
        <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#30363D] scrollbar-track-transparent">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#1A202C]/40 border border-[#30363D] rounded-2xl p-3 flex space-x-3 items-start"
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-xs font-bold text-white leading-tight mb-1">{item.title}</h3>
                <p className="text-[10px] text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
