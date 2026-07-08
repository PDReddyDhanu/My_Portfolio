import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandOutput {
    command: string;
    output: string | React.ReactElement;
    timestamp: Date;
}

const InteractiveTerminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandOutput[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Show welcome message
        setHistory([{
            command: '',
            output: (
                <div className="space-y-2">
                    <div className="text-[#FFCA28] font-bold">Welcome to Dhanunjay's Interactive Terminal! 🚀</div>
                    <div className="text-white/80">Type <span className="text-[#FF6B35]">help</span> to see available commands.</div>
                </div>
            ),
            timestamp: new Date()
        }]);
    }, []);

    useEffect(() => {
        // Auto-scroll to bottom
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const commands: { [key: string]: () => string | React.ReactElement } = {
        help: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">Available Commands:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div><span className="text-[#FF6B35]">about</span> - Learn about me</div>
                    <div><span className="text-[#FF6B35]">skills</span> - View my technical skills</div>
                    <div><span className="text-[#FF6B35]">projects</span> - See my projects</div>
                    <div><span className="text-[#FF6B35]">experience</span> - View work experience</div>
                    <div><span className="text-[#FF6B35]">education</span> - My educational background</div>
                    <div><span className="text-[#FF6B35]">contact</span> - Get contact information</div>
                    <div><span className="text-[#FF6B35]">github</span> - Open GitHub profile</div>
                    <div><span className="text-[#FF6B35]">linkedin</span> - Open LinkedIn profile</div>
                    <div><span className="text-[#FF6B35]">resume</span> - Download resume</div>
                    <div><span className="text-[#FF6B35]">creator</span> - View content creator stats</div>
                    <div><span className="text-[#FF6B35]">hire</span> - View hiring status</div>
                    <div><span className="text-[#FF6B35]">clear</span> - Clear terminal</div>
                    <div><span className="text-[#FF6B35]">whoami</span> - Display current user</div>
                    <div><span className="text-[#FF6B35]">date</span> - Show current date/time</div>
                </div>
            </div>
        ),
        creator: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">🎥 AI Content Creator Details</div>
                <div className="mt-2 text-white/90">
                    Host and maintain digital channels using automated workflows:
                </div>
                <div className="text-white/70 mt-1 pl-4 space-y-1">
                    <div>📱 <span className="text-[#039BE5] font-semibold">Instagram:</span> 20K+ Followers</div>
                    <div>🎥 <span className="text-[#FF6B35] font-semibold">YouTube:</span> 3K+ Subscribers</div>
                </div>
                <div className="text-white/60 text-xs mt-2 pl-4">
                    Workflow: Uses LLMs for scriptwriting, Generative AI for voice synthesis, and Premiere/CapCut for video editing to post updated tech news.
                </div>
            </div>
        ),
        hire: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">💼 Job Search Status</div>
                <div className="mt-2 text-white/90">
                    Dhanunjay is actively seeking full-time opportunities and internships:
                </div>
                <div className="text-white/70 mt-1 pl-4 space-y-1">
                    <div>🎯 <span className="text-[#039BE5] font-semibold">Target Roles:</span> Full Stack Developer, AI Engineer, Salesforce Developer</div>
                    <div>📈 <span className="text-[#FF6B35] font-semibold">Availability:</span> Immediate (2022-2026 Graduated Batch)</div>
                    <div>📍 <span className="text-[#4CAF50] font-semibold">Location:</span> Hyderabad (Open to Remote & Relocation)</div>
                </div>
                <div className="text-white/60 text-xs mt-2 pl-4">
                    Run the command <span className="text-[#FFCA28] font-semibold">contact</span> to get details on how to get in touch.
                </div>
            </div>
        ),
        about: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">👨‍💻 About Dhanunjay Reddy</div>
                <div className="text-white/90">
                    Full Stack Developer & AI Enthusiast passionate about building innovative web applications.
                    Specializing in React, TypeScript, Next.js, and AI integration with Google Gemini.
                </div>
                <div className="text-white/70 mt-2">
                    🎓 B.Tech in IT | CGPA: 8.82/10<br />
                    💼 Salesforce Developer Intern @ SmartBridge & AICTE<br />
                    🏆 Multiple certifications from Google, Microsoft, IIT Bombay
                </div>
            </div>
        ),
        skills: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">🛠️ Technical Skills</div>
                <div className="mt-2 space-y-1">
                    <div><span className="text-[#039BE5]">Frontend:</span> React, TypeScript, Next.js, Tailwind CSS, HTML/CSS</div>
                    <div><span className="text-[#039BE5]">Backend:</span> Node.js, Express, REST APIs</div>
                    <div><span className="text-[#039BE5]">AI/ML:</span> Google Gemini API, Genkit, AI Integration</div>
                    <div><span className="text-[#039BE5]">Database:</span> MongoDB, Firebase, MySQL</div>
                    <div><span className="text-[#039BE5]">Cloud:</span> Vercel, Netlify, GitHub Pages</div>
                    <div><span className="text-[#039BE5]">Tools:</span> Git, GitHub, VS Code, Figma</div>
                </div>
            </div>
        ),
        projects: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">🚀 Featured Projects</div>
                <div className="mt-2 space-y-3">
                    <div>
                        <div className="text-[#FF6B35]">1. Genkit ProStudio</div>
                        <div className="text-white/80 text-sm">AI-powered SaaS platform for academic project lifecycle management</div>
                        <div className="text-white/60 text-xs">Tech: Next.js, Firebase, TypeScript, Genkit, Tailwind CSS</div>
                    </div>
                    <div>
                        <div className="text-[#FF6B35]">2. HackSprint</div>
                        <div className="text-white/80 text-sm">AI-powered SaaS platform for hackathon management</div>
                        <div className="text-white/60 text-xs">Tech: Next.js, TypeScript, Gemini API, Tailwind CSS</div>
                    </div>
                    <div>
                        <div className="text-[#FF6B35]">3. AI Chatbot Assistant</div>
                        <div className="text-white/80 text-sm">Smart educational chatbot with Google Gemini</div>
                        <div className="text-white/60 text-xs">Tech: JavaScript, HTML, CSS, Gemini API</div>
                    </div>
                    <div>
                        <div className="text-[#FF6B35]">4. Short Music Tunes</div>
                        <div className="text-white/80 text-sm">Music preview app using iTunes API</div>
                        <div className="text-white/60 text-xs">Tech: JavaScript, HTML, CSS, iTunes API</div>
                    </div>
                </div>
            </div>
        ),
        experience: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">💼 Internship Experience</div>
                <div className="mt-2">
                    <div className="text-[#FF6B35]">Salesforce Developer Virtual Intern</div>
                    <div className="text-white/80">SmartBridge & AICTE (May 2025 - July 2025)</div>
                    <div className="text-white/60 text-sm mt-1">
                        • Gained hands-on experience with Salesforce CRM, Apex, and LWC<br />
                        • Earned Salesforce Superbadges including Apex Specialist<br />
                        • Achieved Agentblazer Champion status for outstanding performance
                    </div>
                </div>
            </div>
        ),
        education: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">🎓 Education</div>
                <div className="mt-2">
                    <div className="text-[#FF6B35]">B.Tech in Information Technology (IT)</div>
                    <div className="text-white/80">Vidya Jyothi Institute of Technology, Hyderabad</div>
                    <div className="text-white/60 text-sm">CGPA: 8.82/10 (2022-2026 Batch)</div>
                </div>
                <div className="mt-2">
                    <div className="text-[#FF6B35]">Intermediate (MPC)</div>
                    <div className="text-white/80">Sri Kakatiya Junior College, Nizamabad</div>
                    <div className="text-white/60 text-sm">87.7% (2020-2022)</div>
                </div>
                <div className="mt-2">
                    <div className="text-[#FF6B35]">SSC</div>
                    <div className="text-white/80">Z.P. High School, Binola</div>
                    <div className="text-white/60 text-sm">CGPA: 10/10 (2020)</div>
                </div>
                <div className="mt-3 text-white/80">
                    <div className="text-[#039BE5]">Certifications:</div>
                    <div className="text-sm text-white/70 mt-1">
                        ✓ Google AI Essentials<br />
                        ✓ Microsoft Certified Professional<br />
                        ✓ IIT Bombay Python Certification<br />
                        ✓ Salesforce Developer Certified
                    </div>
                </div>
            </div>
        ),
        contact: () => (
            <div className="space-y-2">
                <div className="text-[#FFCA28] font-bold">📧 Contact Information</div>
                <div className="mt-2 space-y-1 text-white/80">
                    <div>📧 Email: palakolanudhanunjayreddy@gmail.com</div>
                    <div>💼 LinkedIn: linkedin.com/in/palakolanu-dhanunjay-reddy</div>
                    <div>🐙 GitHub: github.com/PDReddyDhanu</div>
                    <div>🌐 Portfolio: dhanunportfolio.netlify.app</div>
                </div>
            </div>
        ),
        github: () => {
            window.open('https://github.com/PDReddyDhanu', '_blank');
            return '🐙 Opening GitHub profile...';
        },
        linkedin: () => {
            window.open('https://www.linkedin.com/in/palakolanu-dhanunjay-reddy', '_blank');
            return '💼 Opening LinkedIn profile...';
        },
        resume: () => {
            return '📄 Resume download feature coming soon!';
        },
        whoami: () => 'guest@dhanunjay-portfolio',
        date: () => new Date().toString(),
        clear: () => ''
    };

    const executeCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (trimmedCmd === 'clear') {
            setHistory([]);
            return;
        }

        let output: string | React.ReactElement;

        if (trimmedCmd === '') {
            return;
        } else if (commands[trimmedCmd]) {
            output = commands[trimmedCmd]();
        } else {
            output = (
                <div>
                    <span className="text-red-400">Command not found: {trimmedCmd}</span>
                    <div className="text-white/60 text-sm mt-1">Type 'help' to see available commands.</div>
                </div>
            );
        }

        setHistory(prev => [...prev, {
            command: cmd,
            output,
            timestamp: new Date()
        }]);

        setCommandHistory(prev => [...prev, cmd]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            executeCommand(input);
            setInput('');
            setHistoryIndex(-1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-between py-2">
            <div>
                {/* Section Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="text-2xl sm:text-3xl mr-3">📟</span>
                    Terminal Workspace
                </h2>

                {/* Terminal Window */}
                <div className="bg-[#1A202C] rounded-2xl overflow-hidden shadow-2xl border border-[#30363D]">
                    {/* Terminal Header */}
                    <div className="bg-[#2D3748]/40 px-4 py-2.5 flex items-center space-x-2 border-b border-[#30363D]">
                        <div className="flex space-x-1.5">
                            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center text-white/50 text-[10px] sm:text-xs font-mono">
                            guest@dhanunjay-portfolio: ~
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={terminalRef}
                        className="p-4 h-64 overflow-y-auto font-mono text-xs sm:text-sm scrollbar-thin scrollbar-thumb-[#30363D] scrollbar-track-transparent"
                        onClick={() => inputRef.current?.focus()}
                    >
                        <AnimatePresence>
                            {history.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mb-4"
                                >
                                    {item.command && (
                                        <div className="flex items-center space-x-2 mb-2">
                                            <span className="text-[#FF6B35]">➜</span>
                                            <span className="text-[#039BE5]">~</span>
                                            <span className="text-white">{item.command}</span>
                                        </div>
                                    )}
                                    <div className="text-white/90 ml-6">{item.output}</div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Input Line */}
                        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                            <span className="text-[#FF6B35]">➜</span>
                            <span className="text-[#039BE5]">~</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent text-white outline-none font-mono"
                                autoFocus
                                spellCheck={false}
                            />
                        </form>
                    </div>
                </div>

                {/* Hint */}
                <p className="text-center text-white/40 text-[10px] sm:text-xs mt-2">
                    💡 Tip: Use ↑ ↓ arrow keys to navigate command history
                </p>
            </div>
        </div>
    );
};

export default InteractiveTerminal;
