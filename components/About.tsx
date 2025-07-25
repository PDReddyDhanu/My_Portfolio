
import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';

const SectionTitle = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
        <span className="text-4xl mr-4">{icon}</span>
        {children}
    </h2>
);

const About = () => (
  <ParallaxTilt glareEnable={true} glareMaxOpacity={0.12} scale={1.03} transitionSpeed={1200} className="rounded-3xl">
    <section id="about" className="max-w-4xl mx-auto bg-[#181f36] p-8 md:p-12 rounded-3xl shadow-lg shadow-blue-900">
      <SectionTitle icon="👨‍💻"><span className="text-white">About Me</span></SectionTitle>
      <div className="text-lg text-slate-300 leading-relaxed space-y-4">
        <p>
            Hi! I'm Palakolanu Dhanunjay Reddy, a passionate and driven final-year B.Tech student in Information Technology at VJIT Hyderabad.
        </p>
        <p>
            I specialize in Full Stack Web Development and AI-powered solutions, with hands-on experience building real-world applications—from responsive music preview platforms to intelligent AI chatbots for education.
        </p>
        <p>
            I'm deeply motivated by a love for continuous learning, emerging technologies like Generative AI, and open-source contribution. My goal is to create impactful, user-centric software that bridges innovation and practicality.
        </p>
        <a href="/Palakolanu-Dhanunjay-Reddy-Entry-Level-Web-Developer.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </section>
  </ParallaxTilt>
);

export default About;
