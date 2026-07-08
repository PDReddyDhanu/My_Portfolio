import { motion } from 'framer-motion';

interface ProjectFilterProps {
    technologies: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const ProjectFilter = ({ technologies, activeFilter, onFilterChange }: ProjectFilterProps) => {
    const allFilters = ['All', ...technologies];

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allFilters.map((filter, index) => (
                <motion.button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activeFilter === filter
                            ? 'bg-gradient-to-r from-[#FF6B35] to-[#039BE5] text-white shadow-lg'
                            : 'bg-[#2D3748]/50 text-white/70 border border-[#4A5568] hover:border-[#FF6B35]/40 hover:text-white'
                        }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {filter}
                </motion.button>
            ))}
        </div>
    );
};

export default ProjectFilter;
