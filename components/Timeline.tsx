import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
        title: 'B.Tech in IT (Information Technology)',
        organization: 'Vidya Jyothi Institute of Technology',
        description: 'Pursuing Bachelor of Technology in Information Technology with a CGPA of 8.8/10. Specializing in Full Stack Development, AI/ML integration, and modern web technologies. Active participant in hackathons and technical projects.',
        type: 'education',
        icon: '🎓',
    },
    {
        year: '2024',
        title: 'Full Stack Developer Intern',
        organization: 'Exposys Data Labs',
        description: 'Developed multiple full-stack applications using React, TypeScript, Node.js, and modern frameworks. Implemented AI-powered features using Google Gemini API and deployed production-ready applications on Vercel and Netlify.',
        type: 'experience',
        icon: '💼',
    },
    {
        year: '2023 - 2024',
        title: 'Advanced Web Development & AI Integration',
        organization: 'Self-Paced Learning & Certifications',
        description: 'Completed comprehensive training in React, TypeScript, Next.js, and AI integration. Earned certifications from Google (AI Essentials), Microsoft, IIT Bombay (Python), and Salesforce. Built multiple portfolio projects including HackSprint and AI Chatbot.',
        type: 'education',
        icon: '📚',
    },
    {
        year: '2020 - 2022',
        title: 'Board of Intermediate Education (MPC)',
        organization: 'Sri Kakatiya Junior College',
        description: 'Completed Intermediate education with Mathematics, Physics, and Chemistry (MPC) stream, achieving 87.7%. Developed strong analytical and problem-solving skills. Located in Nizamabad, Telangana.',
        type: 'education',
        icon: '📖',
    },
    {
        year: '2020',
        title: 'Board of Secondary Education (SSC)',
        organization: 'Z.P. High School',
        description: 'Completed Secondary School Certificate with an outstanding CGPA of 10/10. Built a strong foundation in core subjects and developed a passion for technology and programming. Located in Binola, Telangana.',
        type: 'education',
        icon: '🏆',
    },
];

const TimelineItem = ({ item, index, isLeft }: { item: TimelineItem; index: number; isLeft: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className="relative flex items-center mb-12 md:mb-16">
            {/* Timeline dot */}
            <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#039BE5] border-4 border-[#0D1117] z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-[#FF6B35]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            {/* Content */}
            <motion.div
                className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
            >
                <div className="firebase-card p-6 hover:border-[#FF6B35]/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{item.icon}</span>
                        <span className="text-[#FFCA28] font-bold text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#039BE5] font-semibold mb-3">{item.organization}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    const lineRef = useRef(null);
    const isLineInView = useInView(lineRef, { once: true, amount: 0.1 });

    return (
        <section id="timeline" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-4xl md:text-5xl mr-4">📅</span>
                    My Journey
                </motion.h2>

                <div className="relative mt-16">
                    {/* Timeline line */}
                    <motion.div
                        ref={lineRef}
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF6B35] via-[#039BE5] to-[#FFCA28] h-full origin-top"
                        initial={{ scaleY: 0 }}
                        animate={isLineInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />

                    {/* Timeline items */}
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            item={item}
                            index={index}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
