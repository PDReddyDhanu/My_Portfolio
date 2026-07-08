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
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="firebase-card p-6 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <motion.div
                            className="text-4xl md:text-5xl mb-3"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                        >
                            {stat.icon}
                        </motion.div>
                        <div
                            className="text-3xl md:text-4xl font-bold mb-2"
                            style={{ color: stat.color }}
                        >
                            <Counter target={stat.value} suffix={stat.suffix} inView={isInView} />
                        </div>
                        <p className="text-white/70 text-sm md:text-base font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;
