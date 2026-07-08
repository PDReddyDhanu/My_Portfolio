import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "Genkit ProStudio",
    desc: "GenKit ProStudio is an all-in-one, AI-powered SaaS platform built with Next.js and Firebase to streamline the lifecycle of college academic projects. It provides a seamless, transparent, and efficient experience for students, guides, HoDs, and administrators—from proposal and team formation to final evaluation and automated reporting.",
    video: "/genkitprostudio.mp4",
    github: "", // Left empty to hide the link as no repo was provided
    demo: "https://genkit-prostudio.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "Firebase", "Genkit", "Tailwind CSS"],
    url: "genkit-prostudio.vercel.app"
  },
  {
    name: "HackSprint: All-in-One Hackathon Platform",
    desc: "A SaaS platform designed to streamline internal college hackathons. Features dedicated portals for students, judges, and admins, Google Gemini-powered idea generation, automated certificate distribution, and interactive live leaderboards.",
    video: "/hacksprint-portfolio.mp4",
    github: "https://github.com/PDReddyDhanu/hacksprint_",
    demo: "https://hacksprint-rouge.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "Genkit", "Google Gemini", "Tailwind CSS"],
    url: "hacksprint-rouge.vercel.app"
  },
  {
    name: "Personal Portfolio Workspace",
    desc: "A responsive portfolio workspace built with React and TypeScript. Formatted with background vertical grid lines, dynamic scroll spy, and full-screen browser frame video playbacks.",
    video: "/my_portfolio.mp4",
    github: "https://github.com/PDReddyDhanu/My_Portfolio",
    demo: "https://dhanunportfolio.netlify.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "dhanunportfolio.netlify.app"
  },
  {
    name: "AI Chatbot Assistant",
    desc: "An intelligent study bot that answers questions and solves queries in real-time. Built using HTML, CSS, JavaScript, and Google AI Studio (Gemini API) to support students with personalized explanations.",
    video: "/chat_bot.mp4",
    github: "https://github.com/PDReddyDhanu/AI-ChatBot-Assistant-PDR",
    demo: "https://pdreddy-dhanu-chat-bot.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "Google AI", "Gemini API", "Netlify"],
    url: "pdreddy-dhanu-chat-bot.netlify.app"
  },
  {
    name: "Short Music Tunes App",
    desc: "A responsive music discovery web app powered by the iTunes Search API. Allows users to query tracks, list albums, and play short previews within a sleek, custom-built player interface.",
    video: "/short_music_tunes.mp4",
    github: "https://github.com/PDReddyDhanu/Short-Music-Tunes",
    demo: "https://pdr-tunes.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "iTunes API", "Netlify"],
    url: "pdr-tunes.netlify.app"
  },
  {
    name: "Hostel Food Feedback System",
    desc: "A dedicated web application for hostel students to submit daily meal ratings and report issues. Admins manage menus and track complaint analytics through a secure dashboard.",
    video: "/hostel_food.mp4",
    github: "https://github.com/PDReddyDhanu/hostel-food-feedback",
    demo: "https://pdreddydhanu.github.io/hostel-food-feedback/#/login",
    tech: ["React", "JavaScript", "CSS", "Local Storage", "GitHub Pages"],
    url: "pdreddydhanu.github.io"
  }
];

const BrowserFrame = ({ children, url }: { children: React.ReactNode; url: string }) => (
  <div className="bg-[#1A202C] rounded-2xl overflow-hidden shadow-2xl border border-white/5 h-full flex flex-col group-hover:border-white/10 transition-colors">
    {/* Browser Header */}
    <div className="bg-[#0b0c10] px-4 py-3 flex items-center space-x-2 shrink-0 border-b border-white/[0.03]">
      <div className="flex space-x-1.5">
        <div className="w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full opacity-60"></div>
      </div>
      <div className="flex-1 mx-4">
        <div className="bg-[#1A202C] rounded px-3 py-0.5 text-[9px] text-white/45 font-mono truncate text-center">
          {url}
        </div>
      </div>
    </div>
    {/* Browser Content */}
    <div className="relative flex-1 bg-[#0e1013] aspect-video">
      {children}
    </div>
  </div>
);

export const Projects = () => {
  return (
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">Portfolio</span>
      <h2 className="section-title-unfold mb-12">Featured Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group flex flex-col space-y-5"
          >
            {/* Video Preview Block */}
            <div className="overflow-hidden rounded-2xl">
              <BrowserFrame url={project.url}>
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  key={project.video}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </BrowserFrame>
            </div>

            {/* Project Details */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-white/[0.03] border border-white/5 rounded text-[10px] font-mono text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white font-serif-heading group-hover:text-[#FF6B35] transition-colors leading-tight">
                {project.name}
              </h3>

              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Minimalist Text Links */}
              <div className="flex space-x-6 pt-2 text-xs font-semibold uppercase tracking-wider">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF6B35] hover:text-white transition-colors flex items-center"
                  >
                    Source Code <span className="ml-1 text-[10px]">→</span>
                  </a>
                )}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#039BE5] hover:text-white transition-colors flex items-center"
                >
                  Live Demo <span className="ml-1 text-[10px]">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
