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
    year: '2022 - 2026',
    title: 'B.Tech in Information Technology',
    organization: 'Vidya Jyothi Institute of Technology (VJIT), Hyderabad',
    description: 'Completed B.Tech undergraduate degree (2022 - 2026 Batch) with a CGPA of 8.82/10. Specialized coursework in Web Development, Software Engineering, AI & Machine Learning, and Databases.',
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
      <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-white/5"></div>

      {/* Bullet dot */}
      <motion.div
        className="absolute left-[3px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#0e1013] border border-white/10 z-10 flex items-center justify-center"
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
        className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[#FFCA28] bg-[#FFCA28]/10 px-2 py-0.5 rounded-full font-mono">
            {item.year}
          </span>
          <span className="text-sm shrink-0">{item.icon}</span>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-white leading-tight mb-1 font-serif-heading">{item.title}</h3>
        <p className="text-[#039BE5] font-semibold text-xs mb-3 leading-none">{item.organization}</p>
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.description}</p>
      </motion.div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">Journey</span>
      <h2 className="section-title-unfold mb-12">Education & Experience</h2>

      <div className="space-y-2">
        {timelineData.map((item, index) => (
          <TimelineCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
