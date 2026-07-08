

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
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
import SkillVisualization from './components/SkillVisualization';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'capabilities', 'skills', 'journey', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksLeft = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'capabilities', label: 'Capabilities' }
  ];

  const navLinksRight = [
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

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

      {/* Unfold Background Grid Lines */}
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      
      {/* Sticky Unfold Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0e1013]/90 backdrop-blur-md border-b border-white/[0.03] py-5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white/85 text-xs font-semibold uppercase tracking-wider focus:outline-none hover:text-[#FF6B35] transition-colors"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Left Nav (Desktop Only) */}
          <nav className="hidden lg:flex items-center space-x-8 w-5/12 justify-end pr-10">
            {navLinksLeft.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === link.id ? 'text-[#FF6B35]' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="text-center absolute left-1/2 transform -translate-x-1/2 z-10">
            <a href="#home" className="flex items-center gap-2 justify-center group">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-white/10 group-hover:border-[#FF6B35]/50 transition-colors">
                <img src="/profile.jpg" alt="Dhanunjay" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold font-serif-heading text-white tracking-widest group-hover:text-[#FF6B35] transition-colors">
                PDR<span className="text-[#FF6B35]">.</span>
              </span>
            </a>
          </div>

          {/* Right Nav (Desktop Only) */}
          <nav className="hidden lg:flex items-center space-x-8 w-5/12 justify-start pl-10">
            {navLinksRight.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === link.id ? 'text-[#FF6B35]' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Invisible spacer to balance mobile navbar layout */}
          <div className="lg:hidden w-10"></div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0e1013] flex flex-col items-center justify-center space-y-6">
          {[...navLinksLeft, ...navLinksRight].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest transition-colors ${
                activeSection === link.id ? 'text-[#FF6B35]' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Main Single Page Scroll Content */}
      <main className="relative z-10 w-full">
        {/* Section 1: Hero Cover */}
        <section id="home">
          <Hero />
        </section>

        {/* Section 2: Portfolio Grid */}
        <section id="portfolio" className="py-28 px-6 max-w-6xl mx-auto border-b border-white/[0.03]">
          <Projects />
        </section>

        {/* Section 3: About Me */}
        <section id="about" className="py-28 px-6 max-w-6xl mx-auto border-b border-white/[0.03]">
          <About />
        </section>

        {/* Section 4: Capabilities */}
        <section id="capabilities" className="py-28 px-6 max-w-6xl mx-auto border-b border-white/[0.03]">
          <Services />
        </section>
 
        {/* Section 5: Skills */}
        <section id="skills" className="py-28 px-6 max-w-6xl mx-auto border-b border-white/[0.03]">
          <SkillVisualization />
        </section>
 
        {/* Section 6: Journey */}
        <section id="journey" className="py-28 px-6 max-w-6xl mx-auto border-b border-white/[0.03]">
          <Timeline />
        </section>
 
        {/* Section 7: Certifications */}
        <section id="certifications" className="py-28 px-6 max-w-6xl mx-auto border-b border-white/[0.03] space-y-24">
          <Certifications />
          <Achievements />
        </section>

        {/* Section 8: Contact */}
        <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
