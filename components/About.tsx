import { motion } from 'framer-motion';

export const About = () => {
  const details = [
    { label: "Full Name", value: "Palakolanu Dhanunjay Reddy" },
    { label: "Education", value: "B.Tech in Information Technology" },
    { label: "Institution", value: "Vidya Jyothi Institute of Technology" },
    { label: "CGPA", value: "8.82 / 10 (2022-2026)" },
    { label: "Location", value: "Hyderabad, India" },
    { label: "Languages", value: "English, Telugu, Hindi" }
  ];

  return (
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">About Me</span>
      <h2 className="section-title-unfold mb-12">My Story</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Narrative Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-white/70 text-sm sm:text-base leading-relaxed"
        >
          <p>
            Hello! I'm <span className="text-[#FF6B35] font-semibold">Palakolanu Dhanunjay Reddy</span>, a developer and IT graduate (2022-2026 Batch) from Vidya Jyothi Institute of Technology, Hyderabad. 
          </p>
          <p>
            My engineering journey is driven by a deep curiosity about how intelligent platforms are designed, built, and optimized. I focus heavily on **Full Stack Web Development** and **Artificial Intelligence integrations**, combining clean frontend interfaces with scalable server and database backends.
          </p>
          <p>
            Over the past few years, I've built real-world applications including hackathon management platforms, AI-powered chatbots, and feedback systems. I enjoy solving complex logic problems and turning ideas into responsive, user-friendly software products.
          </p>
        </motion.div>

        {/* Right: Key Facts Table */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 border border-white/5 bg-white/[0.01] rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-lg font-bold text-white mb-6 font-serif-heading">Personal Details</h3>
          <div className="space-y-4">
            {details.map((detail) => (
              <div key={detail.label} className="flex justify-between items-start border-b border-white/5 pb-3 last:border-0 last:pb-0 text-xs sm:text-sm">
                <span className="text-white/40 font-mono shrink-0 mr-4">{detail.label}</span>
                <span className="text-white font-medium text-right">{detail.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
