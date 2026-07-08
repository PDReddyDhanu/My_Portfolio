import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const servicesList: Service[] = [
  {
    title: "Full Stack Development",
    description: "Building responsive, robust, and scalable web applications using React, Next.js, Node.js, and modern CSS frameworks like Tailwind CSS.",
    icon: "🌐"
  },
  {
    title: "AI & GenAI Integration",
    description: "Developing intelligent agents and integrating large language models (LLMs) like Google Gemini using Genkit to build smart AI chatbots.",
    icon: "🤖"
  },
  {
    title: "CRM & Cloud Solutions",
    description: "Designing workflows and custom dashboards in Salesforce Developer sandboxes, using Apex, SOQL, and Lightning Web Components (LWC).",
    icon: "☁️"
  },
  {
    title: "Database Architecture",
    description: "Designing and managing secure, relational and non-relational database architectures using MongoDB, Firebase, and MySQL.",
    icon: "🍃"
  },
  {
    title: "AI Content Creation",
    description: "Creating AI-automated news and media content for Instagram (20K+ followers) and YouTube (3K+ subscribers). Specialized in AI voice synthesis, smart scripting, and video editing workflows.",
    icon: "🎥"
  }
];

export const Services = () => {
  return (
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">Focus Areas</span>
      <h2 className="section-title-unfold mb-12">Capabilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:border-white/10 transition-all duration-300 group ${
              index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-serif-heading">{service.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
