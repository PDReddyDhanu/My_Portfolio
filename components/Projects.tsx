
import React from 'react';
import type { Project } from '../types';
import ParallaxTilt from 'react-parallax-tilt';

const projects: Project[] = [
  {
    name: "Short Music Tunes",
    desc: "A web-based music preview app using the iTunes API, allowing users to explore and play song snippets in a responsive, user-friendly interface.",
    live: "https://pdr-tunes.netlify.app/",
    github: "https://github.com/PDReddyDhanu",
  },
  {
    name: "AI Chat-BOT Assistant",
    desc: "Academic support chatbot powered by Google Generative AI, designed for students to get real-time answers to academic/project questions in a minimalist web UI.",
    live: "https://pdreddy-dhanu-chat-bot.netlify.app/",
    github: "https://github.com/PDReddyDhanu",
  },
];

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
        <span className="text-4xl mr-4">{icon}</span>
        {children}
    </h2>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);


const Projects = () => (
  <section id="projects" className="max-w-5xl mx-auto bg-[#181f36] p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900">
    <SectionTitle icon="💻"><span className="text-white">Projects</span></SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {/* Portfolio Website Project */}
      <ParallaxTilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={1500} className="rounded-xl">
        <div className="bg-[#232b47] rounded-xl p-6 shadow-md flex flex-col items-start h-full">
          <img src="/my_portfolio.jpeg" alt="Portfolio Website" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
          <p className="text-slate-300 mb-4">A personal portfolio to showcase my projects, skills, and achievements, built with React and Tailwind CSS.</p>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/PDReddyDhanu/My_Portfolio" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">GitHub</a>
            <a href="https://dhanunportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-900 transition">Live Demo</a>
          </div>
        </div>
      </ParallaxTilt>
      {/* AI Chatbot Project */}
      <ParallaxTilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={1500} className="rounded-xl">
        <div className="bg-[#232b47] rounded-xl p-6 shadow-md flex flex-col items-start h-full">
          <img src="/chat_bot.jpeg" alt="AI Chatbot" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">AI Chatbot</h3>
          <p className="text-slate-300 mb-4">A smart chatbot that helps students with instant answers and explanations, built using HTML, CSS, JavaScript, and Google AI Studio (Gemini API).</p>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/PDReddyDhanu/AI-ChatBot-Assistant-PDR" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">GitHub</a>
            <a href="https://pdreddy-dhanu-chat-bot.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-900 transition">Live Demo</a>
          </div>
        </div>
      </ParallaxTilt>
      {/* Short Music Tunes Project */}
      <ParallaxTilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={1500} className="rounded-xl">
        <div className="bg-[#232b47] rounded-xl p-6 shadow-md flex flex-col items-start h-full">
          <img src="/short_music_tunes.jpeg" alt="Short Music Tunes" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Short Music Tunes</h3>
          <p className="text-slate-300 mb-4">Built a responsive web app using HTML, CSS, and JavaScript that lets users search and play short music previews using the iTunes API.</p>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/PDReddyDhanu/Short-Music-Tunes" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">GitHub</a>
            <a href="https://pdr-tunes.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-900 transition">Live Demo</a>
          </div>
        </div>
      </ParallaxTilt>
      {/* Hostel Food Feedback System Project */}
      <ParallaxTilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={1500} className="rounded-xl">
        <div className="bg-[#232b47] rounded-xl p-6 shadow-md flex flex-col items-start h-full">
          <img src="/hostel_food.jpeg" alt="Hostel Food Feedback System" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Hostel Food Feedback System</h3>
          <p className="text-slate-300 mb-4">A web app for students to submit daily food feedback and for admins to manage menus and complaints using a user-friendly dashboard.</p>
          <div className="flex gap-3 mt-auto">
            <a href="https://github.com/PDReddyDhanu/hostel-food-feedback" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">GitHub</a>
            <a href="https://pdreddydhanu.github.io/hostel-food-feedback/#/login" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-900 transition">Live Demo</a>
          </div>
        </div>
      </ParallaxTilt>
    </div>
  </section>
);

export default Projects;
