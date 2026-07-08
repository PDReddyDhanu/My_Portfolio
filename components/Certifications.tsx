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
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">Credentials</span>
      <h2 className="section-title-unfold mb-12">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            viewport={{ once: true }}
            className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:border-white/15 hover:shadow-lg group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{cert.icon}</span>
                <span className="text-[10px] text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full font-mono">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF6B35] transition-colors leading-tight mb-1 font-serif-heading">
                {cert.title}
              </h3>
              <p className="text-[#039BE5] text-xs font-semibold truncate">{cert.issuer}</p>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mt-6 flex items-center group-hover:text-[#FF6B35] transition-colors">
              View Certificate
              <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
