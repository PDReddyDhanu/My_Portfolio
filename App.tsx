

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ParticleCursor from './components/ParticleCursor';
import Timeline from './components/Timeline';
import AIChatbot from './components/AIChatbot';
import InteractiveTerminal from './components/InteractiveTerminal';
import SkillVisualization from './components/SkillVisualization';
import StatsCounter from './components/StatsCounter';
import { BentoCard } from './components/BentoCard';
import { BentoClockCard } from './components/BentoClockCard';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0D1117]/85 backdrop-blur-md border-b border-[#30363D] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#FF6B35] via-[#039BE5] to-[#FFCA28] rounded-xl p-0.5 shadow-lg">
              <div className="w-full h-full bg-[#0D1117] rounded-xl flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] font-black text-sm">PDR</span>
              </div>
            </div>
            <div>
              <span className="text-white font-bold text-base leading-none block">Dhanunjay Reddy</span>
              <span className="text-[9px] text-[#039BE5] font-mono leading-none block mt-0.5">PORTFOLIO WORKSPACE</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="#contact"
              className="px-4 py-2 bg-[#2D3748]/50 border border-[#30363D] rounded-xl text-xs font-semibold text-white/80 hover:text-white hover:border-[#FF6B35]/40 transition-all duration-300"
            >
              Collaborate
            </a>
          </div>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="relative z-10 w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bento-grid">
          {/* Card 1: Hero Banner */}
          <BentoCard glowColor="orange" className="lg:col-span-2 lg:row-span-2" delay={0.05}>
            <Hero />
          </BentoCard>

          {/* Card 2: About Me */}
          <BentoCard glowColor="blue" className="lg:col-span-2" delay={0.1}>
            <About />
          </BentoCard>

          {/* Card 3: Clock & Status */}
          <BentoCard glowColor="yellow" delay={0.15}>
            <BentoClockCard />
          </BentoCard>

          {/* Card 4: Quick Highlights */}
          <BentoCard glowColor="green" delay={0.2}>
            <StatsCounter />
          </BentoCard>

          {/* Card 5: Skills Grid */}
          <BentoCard glowColor="blue" className="lg:col-span-2 lg:row-span-2" delay={0.25}>
            <SkillVisualization />
          </BentoCard>

          {/* Card 6: Projects Carousel */}
          <BentoCard glowColor="yellow" className="lg:col-span-2 lg:row-span-2" delay={0.3}>
            <Projects />
          </BentoCard>

          {/* Card 7: Terminal Console */}
          <BentoCard glowColor="orange" className="lg:col-span-2 lg:row-span-2" delay={0.35}>
            <InteractiveTerminal />
          </BentoCard>

          {/* Card 8: Education / Timeline */}
          <BentoCard glowColor="green" className="lg:col-span-2 lg:row-span-2" delay={0.4}>
            <Timeline />
          </BentoCard>

          {/* Card 9: Certifications */}
          <BentoCard glowColor="blue" className="lg:col-span-2" delay={0.45}>
            <Certifications />
          </BentoCard>

          {/* Card 10: Achievements */}
          <BentoCard glowColor="orange" delay={0.5}>
            <Achievements />
          </BentoCard>

          {/* Card 11: Contact */}
          <BentoCard glowColor="green" delay={0.55}>
            <Contact />
          </BentoCard>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
