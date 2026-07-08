import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Stat {
    icon: string;
    value: number;
    label: string;
    suffix?: string;
    color: string;
}

const stats: Stat[] = [
    { icon: '💼', value: 5, label: 'Projects Completed', suffix: '+', color: '#FF6B35' },
    { icon: '🛠️', value: 15, label: 'Technologies Mastered', suffix: '+', color: '#039BE5' },
    { icon: '🏆', value: 8, label: 'Certifications Earned', suffix: '+', color: '#FFCA28' },
    { icon: '⭐', value: 100, label: 'Commitment Level', suffix: '%', color: '#4CAF50' },
];

const Counter = ({ target, suffix = '', inView }: { target: number; suffix?: string; inView: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, inView]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
};

const StatsCounter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div ref={ref} className="w-full h-full flex flex-col justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">Highlights</h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="bg-[#1A202C]/40 border border-[#30363D] rounded-2xl p-3 text-center flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                        <div className="text-xl mb-1">{stat.icon}</div>
                        <div
                            className="text-lg sm:text-xl font-bold leading-none mb-1 font-mono"
                            style={{ color: stat.color }}
                        >
                            <Counter target={stat.value} suffix={stat.suffix} inView={isInView} />
                        </div>
                        <p className="text-white/60 text-[10px] sm:text-xs leading-none font-medium text-center">{stat.label.split(' ')[0]} {stat.label.split(' ').slice(1).join(' ')}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatsCounter;
