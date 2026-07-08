import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    name: "HackSprint: All-in-One Hackathon Platform",
    shortName: "HackSprint",
    desc: "A comprehensive, AI-powered SaaS platform designed to streamline the organization and management of internal college hackathons. It features dedicated portals for students, judges, and admins, AI-powered idea generation and code review, real-time leaderboards, and automated certificate generation.",
    image: "/hacksprint-portfolio.mp4",
    github: "https://github.com/PDReddyDhanu/hacksprint_",
    demo: "https://hacksprint-rouge.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "Genkit", "Google Gemini", "Tailwind CSS", "ShadCN UI"],
    url: "hacksprint-rouge.vercel.app",
    metrics: {
      users: "500+",
      performance: "95%",
      stars: 12,
      status: "Active"
    }
  },
  {
    name: "Personal Portfolio Website",
    shortName: "Portfolio",
    desc: "A modern, responsive portfolio website built with React and TypeScript, featuring Firebase-inspired design, smooth animations, and automatic video demos. Showcases projects, skills, and achievements with a professional dark theme.",
    image: "/my_portfolio.mp4",
    github: "https://github.com/PDReddyDhanu/My_Portfolio",
    demo: "https://dhanunportfolio.netlify.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "dhanunjay-portfolio.vercel.app",
    metrics: {
      users: "1000+",
      performance: "98%",
      stars: 8,
      status: "Active"
    }
  },
  {
    name: "AI Chatbot Assistant",
    shortName: "AI Assistant",
    desc: "A smart chatbot that helps students with instant answers and explanations, built using HTML, CSS, JavaScript, and Google AI Studio (Gemini API). Features natural language processing and real-time responses for educational support.",
    image: "/chat_bot.mp4",
    github: "https://github.com/PDReddyDhanu/AI-ChatBot-Assistant-PDR",
    demo: "https://pdreddy-dhanu-chat-bot.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "Google AI", "Gemini API", "Netlify"],
    url: "pdreddy-dhanu-chat-bot.netlify.app",
    metrics: {
      users: "300+",
      performance: "92%",
      stars: 15,
      status: "Active"
    }
  },
  {
    name: "Short Music Tunes",
    shortName: "Music Tunes",
    desc: "Built a responsive web app using HTML, CSS, and JavaScript that lets users search and play short music previews using the iTunes API. Features real-time search, music previews, and a modern user interface.",
    image: "/short_music_tunes.mp4",
    github: "https://github.com/PDReddyDhanu/Short-Music-Tunes",
    demo: "https://pdr-tunes.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "iTunes API", "Netlify", "Responsive"],
    url: "pdr-tunes.netlify.app",
    metrics: {
      users: "200+",
      performance: "90%",
      stars: 6,
      status: "Active"
    }
  },
  {
    name: "Hostel Food Feedback System",
    shortName: "Food Feedback",
    desc: "A web app for students to submit daily food feedback and for admins to manage menus and complaints using a user-friendly dashboard. Includes real-time notifications and analytics.",
    image: "/hostel_food.mp4",
    github: "https://github.com/PDReddyDhanu/hostel-food-feedback",
    demo: "https://pdreddydhanu.github.io/hostel-food-feedback/#/login",
    tech: ["React", "JavaScript", "CSS", "GitHub Pages", "Local Storage"],
    url: "pdreddydhanu.github.io/hostel-food-feedback",
    metrics: {
      users: "150+",
      performance: "88%",
      stars: 5,
      status: "Completed"
    }
  }
];

const BrowserFrame = ({ children, url }: { children: React.ReactNode; url: string }) => (
  <div className="bg-[#2D3748] rounded-xl overflow-hidden shadow-2xl border border-[#4A5568] h-full flex flex-col">
    {/* Browser Header */}
    <div className="bg-[#1A202C] px-4 py-2 flex items-center space-x-2 shrink-0">
      <div className="flex space-x-1.5">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
      </div>
      <div className="flex-1 mx-4">
        <div className="bg-[#2D3748] rounded px-3 py-0.5 text-[10px] text-[#E2E8F0] font-mono truncate text-center">
          {url}
        </div>
      </div>
    </div>
    {/* Browser Content */}
    <div className="relative flex-1 bg-[#0D1117]">
      {children}
    </div>
  </div>
);

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-2xl sm:text-3xl mr-3">💻</span>
          Projects
        </h2>

        {/* Project Selector Tabs */}
        <div className="flex space-x-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#30363D] scrollbar-track-transparent mb-5">
          {projects.map((p, idx) => (
            <button
              key={p.shortName}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-1.5 rounded-xl font-semibold text-xs transition-all duration-300 shrink-0 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#039BE5] text-white shadow-md'
                  : 'bg-[#2D3748]/30 text-white/60 border border-[#30363D] hover:text-white'
              }`}
            >
              {p.shortName}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Project Info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#FFCA28] uppercase tracking-wider">Featured Project</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{project.name}</h3>
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-h-[120px] overflow-y-auto pr-1">
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#2D3748]/40 border border-[#30363D] rounded text-[10px] font-medium text-white/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="bg-[#2D3748]/20 border border-[#30363D] rounded-xl p-2 flex items-center space-x-2">
                    <span className="text-base">👥</span>
                    <div>
                      <div className="text-xs font-bold text-white leading-none">{project.metrics.users}</div>
                      <span className="text-[9px] text-white/40 uppercase">Users</span>
                    </div>
                  </div>
                  <div className="bg-[#2D3748]/20 border border-[#30363D] rounded-xl p-2 flex items-center space-x-2">
                    <span className="text-base">⭐</span>
                    <div>
                      <div className="text-xs font-bold text-white leading-none">{project.metrics.stars}</div>
                      <span className="text-[9px] text-white/40 uppercase">Stars</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Links */}
            <div className="flex space-x-3 pt-2 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#FF6B35] hover:bg-[#FF8A50] text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md"
              >
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                </svg>
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#039BE5] hover:bg-[#29B6F6] text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md"
              >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>

          {/* Project Preview */}
          <div className="lg:col-span-6 h-[220px] sm:h-[260px] lg:h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="h-full w-full"
              >
                <BrowserFrame url={project.url}>
                  <video
                    className="w-full h-full object-cover rounded-b-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={project.image}
                  >
                    <source src={project.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </BrowserFrame>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
