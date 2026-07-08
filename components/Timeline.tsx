import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'experience';
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2022 - Present',
    title: 'B.Tech in Information Technology',
    organization: 'Vidya Jyothi Institute of Technology (VJIT), Hyderabad',
    description: 'Pursuing undergraduate degree with a current CGPA of 8.8/10. Specialized coursework in Web Development, Software Engineering, AI & Machine Learning, and Databases.',
    type: 'education',
    icon: '🎓',
  },
  {
    year: 'Jun 2024 - Jul 2024',
    title: 'Salesforce Developer Virtual Intern',
    organization: 'Salesforce / AICTE',
    description: 'Hands-on training in Salesforce CRM, Apex programming, Lightning Web Components (LWC), and platform security, building custom developer workflows.',
    type: 'experience',
    icon: '☁️',
  },
  {
    year: '2020 - 2022',
    title: 'Board of Intermediate Education (MPC)',
    organization: 'Sri Kakatiya Junior College, Nizamabad',
    description: 'Completed Intermediate education with Mathematics, Physics, and Chemistry (MPC) stream, achieving 87.7%. Developed strong analytical skills.',
    type: 'education',
    icon: '📖',
  },
  {
    year: '2020',
    title: 'Board of Secondary Education (SSC)',
    organization: 'Z.P. High School, Binola',
    description: 'Completed Secondary School Certificate with an outstanding CGPA of 10/10.',
    type: 'education',
    icon: '🏆',
  },
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="relative pl-8 pb-8 last:pb-0">
      {/* Vertical line connector */}
      <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-[#30363D]"></div>

      {/* Bullet dot */}
      <motion.div
        className="absolute left-[3px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#161B22] border-2 border-[#FF6B35] z-10 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div>
      </motion.div>

      {/* Content box */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-[#1A202C]/30 border border-[#30363D] rounded-2xl p-4 hover:border-[#FF6B35]/30 transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-bold text-[#FFCA28] bg-[#FFCA28]/10 px-2 py-0.5 rounded-full font-mono">
            {item.year}
          </span>
          <span className="text-sm shrink-0">{item.icon}</span>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-white leading-tight mb-0.5">{item.title}</h3>
        <p className="text-[#039BE5] font-semibold text-xs mb-2 leading-none">{item.organization}</p>
        <p className="text-white/60 text-xs leading-relaxed">{item.description}</p>
      </motion.div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-2xl sm:text-3xl mr-3">📅</span>
          Education & Journey
        </h2>

        {/* Scrollable container */}
        <div className="max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#30363D] scrollbar-track-transparent">
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
