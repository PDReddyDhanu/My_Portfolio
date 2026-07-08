import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  pdf: string;
}

const certifications: Certification[] = [
  {
    title: "Python 3.4.3 Training",
    issuer: "IIT Bombay Spoken Tutorial",
    date: "2024",
    icon: "🐍",
    pdf: "/iit_bombay_python.pdf"
  },
  {
    title: "Salesforce Developer Internship",
    issuer: "Salesforce & AICTE",
    date: "2024",
    icon: "☁️",
    pdf: "/salesforce_cer.pdf"
  },
  {
    title: "Google GenAI Course",
    issuer: "Google Cloud",
    date: "2024",
    icon: "🤖",
    pdf: "/google_gen_ai.pdf"
  },
  {
    title: "Microsoft Career Essentials",
    issuer: "Microsoft & LinkedIn",
    date: "2023",
    icon: "💻",
    pdf: "/microsoft.pdf"
  },
  {
    title: "Full Stack Web Development",
    issuer: "AICTE Virtual Internship",
    date: "2023",
    icon: "🌐",
    pdf: "/web_full_stack.pdf"
  },
  {
    title: "AI/ML Virtual Internship",
    issuer: "Edunet Foundation",
    date: "2023",
    icon: "🧠",
    pdf: "/aiml.pdf"
  }
];

export const Certifications = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-2xl sm:text-3xl mr-3">🎓</span>
          Credentials & Certifications
        </h2>

        {/* Horizontal scroll container */}
        <div className="flex space-x-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-[#30363D] scrollbar-track-transparent">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: '#039BE5' }}
              className="w-56 shrink-0 bg-[#1A202C]/40 border border-[#30363D] rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between hover:shadow-lg group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <span className="text-[10px] text-white/50 bg-[#30363D]/40 px-2 py-0.5 rounded-full font-mono">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#039BE5] transition-colors leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-[#039BE5] text-[10px] font-semibold truncate">{cert.issuer}</p>
              </div>

              <span className="text-[10px] text-white/40 mt-4 flex items-center group-hover:text-white/80 transition-colors">
                View Certificate
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
