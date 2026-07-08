

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ParticleCursor from './components/ParticleCursor';
import Timeline from './components/Timeline';
import AIChatbot from './components/AIChatbot';
import GitHubActivity from './components/GitHubActivity';
import InteractiveTerminal from './components/InteractiveTerminal';
import SkillVisualization from './components/SkillVisualization';
import { DashboardLayout, TabItem } from './components/DashboardLayout';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const tabs: TabItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: '📊',
    svgIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
      </svg>
    )
  },
  {
    id: 'skills',
    label: 'Skills & Stats',
    icon: '💻',
    svgIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '📂',
    svgIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: '💼',
    svgIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '📬',
    svgIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Show loading screen first
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <ScrollProgress />
      <ParticleCursor />
      <AnimatedBackground />
      <ScrollToTop />
      <AIChatbot />
      
      <DashboardLayout
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-12 pb-12"
          >
            {activeTab === 'overview' && (
              <>
                <Hero />
                <About />
              </>
            )}
            {activeTab === 'skills' && (
              <>
                <SkillVisualization />
                <Skills />
                <GitHubActivity />
              </>
            )}
            {activeTab === 'projects' && (
              <>
                <Projects />
                <InteractiveTerminal />
              </>
            )}
            {activeTab === 'experience' && (
              <>
                <Internships />
                <Timeline />
                <Certifications />
                <Achievements />
              </>
            )}
            {activeTab === 'contact' && (
              <Contact />
            )}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default App;
