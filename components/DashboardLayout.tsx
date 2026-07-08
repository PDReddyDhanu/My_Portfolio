import React from 'react';
import { motion } from 'framer-motion';

export interface TabItem {
  id: string;
  label: string;
  icon: string;
  svgIcon: React.ReactNode;
}

interface DashboardLayoutProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  children: React.ReactNode;
}

export const DashboardLayout = ({
  tabs,
  activeTab,
  setActiveTab,
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0D1117] text-white overflow-x-hidden relative">
      {/* Sidebar - Desktop only */}
      <aside className="hidden md:flex flex-col w-64 bg-[#161B22]/90 backdrop-blur-md border-r border-[#30363D] sticky top-0 h-screen z-30 shrink-0">
        {/* Logo area */}
        <div className="p-6 border-b border-[#30363D] flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] via-[#039BE5] to-[#FFCA28] rounded-xl p-0.5 shadow-lg">
            <div className="w-full h-full bg-[#0D1117] rounded-xl flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] font-black text-base">PDR</span>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-white tracking-wide text-sm leading-none">Dhanunjay Reddy</h1>
            <span className="text-[10px] text-white/50 font-mono">Full Stack Portfolio</span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left relative group ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {/* Active Background Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/15 to-[#039BE5]/15 rounded-xl border border-[#FF6B35]/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Icon */}
                <div className={`relative z-10 p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'text-[#FF6B35]' : 'text-white/60 group-hover:text-white'
                }`}>
                  {tab.svgIcon}
                </div>

                <span className="relative z-10 text-sm font-medium">{tab.label}</span>
                
                {/* Left Active border indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-[#FF6B35] to-[#039BE5] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[#30363D] text-center text-xs text-white/40 font-mono">
          © {new Date().getFullYear()} Dhanunjay Reddy
        </div>
      </aside>

      {/* Top bar - Mobile only */}
      <header className="md:hidden flex items-center justify-between p-4 bg-[#161B22]/95 backdrop-blur-md border-b border-[#30363D] sticky top-0 z-30 w-full">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] via-[#039BE5] to-[#FFCA28] rounded-lg p-0.5 shadow-lg">
            <div className="w-full h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#039BE5] to-[#FFCA28] font-black text-xs">PDR</span>
            </div>
          </div>
          <span className="text-white font-bold text-base">Dhanunjay Reddy</span>
        </div>
      </header>

      {/* Bottom Nav Bar - Mobile only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#161B22]/95 backdrop-blur-md border-t border-[#30363D] px-2 py-1 flex justify-around items-center z-30 pb-safe">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-lg transition-colors ${
                isActive ? 'text-[#FF6B35]' : 'text-white/50 hover:text-white'
              }`}
            >
              <div className="p-1">{tab.svgIcon}</div>
              <span className="text-[10px] font-medium leading-none mt-0.5">{tab.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0 bg-[#0D1117] pb-16 md:pb-0">
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
};
