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
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">Accomplishments</span>
      <h2 className="section-title-unfold mb-12">Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex space-x-4 items-start hover:border-white/10 transition-colors"
          >
            <span className="text-3xl shrink-0">{item.icon}</span>
            <div>
              <h3 className="text-base font-bold text-white mb-2 font-serif-heading">{item.title}</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
