
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const projects = [
  {
    name: "HackSprint: All-in-One Hackathon Platform",
    shortName: "HackSprint",
    desc: "A comprehensive, AI-powered SaaS platform designed to streamline the organization and management of internal college hackathons. It features dedicated portals for students, judges, and admins, AI-powered idea generation and code review, real-time leaderboards, and automated certificate generation.",
    image: "/hacksprint-portfolio.mp4",
    github: "https://github.com/PDR-Dhanu/hacksprint_",
    demo: "https://hacksprint-rouge.vercel.app/",
    tech: ["Next.js", "React", "TypeScript", "Genkit", "Google Gemini", "Tailwind CSS", "ShadCN UI", "Zod"],
    url: "hacksprint-rouge.vercel.app"
  },
  {
    name: "Personal Portfolio Website",
    shortName: "Portfolio",
    desc: "A modern, responsive portfolio website built with React and TypeScript, featuring Firebase-inspired design, smooth animations, and automatic video demos. Showcases projects, skills, and achievements with a professional dark theme.",
    image: "/my_portfolio.mp4",
    github: "https://github.com/PDReddyDhanu/My_Portfolio",
    demo: "https://dhanunportfolio.netlify.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "dhanunjay-portfolio.vercel.app"
  },
  {
    name: "AI Chatbot Assistant",
    shortName: "AI Assistant",
    desc: "A smart chatbot that helps students with instant answers and explanations, built using HTML, CSS, JavaScript, and Google AI Studio (Gemini API). Features natural language processing and real-time responses for educational support.",
    image: "/chat_bot.mp4",
    github: "https://github.com/PDReddyDhanu/AI-ChatBot-Assistant-PDR",
    demo: "https://pdreddy-dhanu-chat-bot.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "Google AI", "Gemini API", "Netlify"],
    url: "pdreddy-dhanu-chat-bot.netlify.app"
  },
  {
    name: "Short Music Tunes",
    shortName: "Music Tunes",
    desc: "Built a responsive web app using HTML, CSS, and JavaScript that lets users search and play short music previews using the iTunes API. Features real-time search, music previews, and a modern user interface.",
    image: "/short_music_tunes.mp4",
    github: "https://github.com/PDReddyDhanu/Short-Music-Tunes",
    demo: "https://pdr-tunes.netlify.app/",
    tech: ["JavaScript", "HTML", "CSS", "iTunes API", "Netlify", "Responsive Design"],
    url: "pdr-tunes.netlify.app"
  },
  {
    name: "Hostel Food Feedback System",
    shortName: "Food Feedback",
    desc: "A web app for students to submit daily food feedback and for admins to manage menus and complaints using a user-friendly dashboard. Includes real-time notifications and analytics.",
    image: "/hostel_food.mp4",
    github: "https://github.com/PDReddyDhanu/hostel-food-feedback",
    demo: "https://pdreddydhanu.github.io/hostel-food-feedback/#/login",
    tech: ["React", "JavaScript", "CSS", "GitHub Pages", "Local Storage"],
    url: "pdreddydhanu.github.io/hostel-food-feedback"
  }
];

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <span className="text-4xl md:text-5xl mr-4">{icon}</span>
        {children}
    </motion.h2>
);

const BrowserFrame = ({ children, url }: { children: React.ReactNode; url: string }) => (
    <div className="bg-[#2D3748] rounded-lg overflow-hidden shadow-2xl border border-[#4A5568] browser-frame">
        {/* Browser Header */}
        <div className="bg-[#1A202C] px-4 py-2 flex items-center space-x-2">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 mx-4">
                <div className="bg-[#2D3748] rounded px-3 py-1 text-xs text-[#E2E8F0] font-mono">
                    {url}
                </div>
          </div>
        </div>
        {/* Browser Content */}
        <div className="relative">
            {children}
          </div>
        </div>
);

const SortableProjectCard = ({ project, index, isReversed }: { project: any; index: number; isReversed: boolean }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: project.name });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <motion.div
            ref={setNodeRef}
            style={style}
            className="project-card cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            {...attributes}
            {...listeners}
        >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Info */}
                <motion.div
                    className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}
                    initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h3 className="text-xs sm:text-sm font-medium text-[#FFCA28] mb-2">{project.name}</h3>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{project.shortName}</h2>
                    </div>
                    
                    <p className="text-[#F7FAFC]/80 text-sm sm:text-base md:text-lg leading-relaxed">
                        {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string, techIndex: number) => (
                            <motion.span
                                key={techIndex}
                                className="px-3 py-1 bg-[#2D3748] text-white text-sm font-medium rounded-full border border-[#4A5568] tech-badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + techIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-[#FF6B35] hover:bg-[#FF8A50] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                                viewport={{ once: true }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
                                </svg>
                                GitHub
                            </motion.a>
                        )}

                        {project.demo && (
                            <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-[#039BE5] hover:bg-[#29B6F6] text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                                whileHover={{ y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                                viewport={{ once: true }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Watch Demo
                            </motion.a>
                        )}
          </div>
                </motion.div>

                {/* Project Video */}
                <motion.div
                    className={`${isReversed ? 'lg:col-start-1' : ''}`}
                    initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                >
                    <BrowserFrame url={project.url}>
                        <video
                            className="w-full h-auto rounded-b-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={`${project.image.replace('.mp4', '-poster.jpg')}`}
                        >
                            <source src={project.image} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </BrowserFrame>
                </motion.div>
        </div>
        </motion.div>
    );
};

const Projects = () => {
    const [items, setItems] = useState(projects);
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.name === active.id);
                const newIndex = items.findIndex((item) => item.name === over?.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <section id="projects" className="py-20 px-4 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#039BE5]/5 rounded-full blur-3xl"></div>
          </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <SectionTitle icon="💻">Projects</SectionTitle>
                
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4"></h3>
                    <p className="text-[#F7FAFC]/60 text-lg max-w-2xl mx-auto">
                     
                    </p>
                </motion.div>

                {/* Draggable Projects Grid */}
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext items={items.map(item => item.name)} strategy={verticalListSortingStrategy}>
                        <div className="space-y-16">
                            {items.map((project, index) => (
                                <SortableProjectCard 
                                    key={project.name} 
                                    project={project} 
                                    index={index} 
                                    isReversed={index % 2 === 1}
                                />
                            ))}
        </div>
                    </SortableContext>
                </DndContext>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/PDReddyDhanu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#039BE5] text-[#039BE5] hover:bg-[#039BE5] hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
                        </svg>
                        View All Projects
                    </a>
                </motion.div>
    </div>
  </section>
);
};

export default Projects;
