import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hi! I'm Dhanunjay's AI assistant. Ask me about his skills, projects, or experience! 👋"
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Knowledge base about the portfolio owner
    const getResponse = (question: string): string => {
        const q = question.toLowerCase();

        // Skills
        if (q.includes('skill') || q.includes('technology') || q.includes('tech stack')) {
            return "Dhanunjay is proficient in:\n\n🎨 Frontend: React, TypeScript, Next.js, Tailwind CSS, HTML/CSS\n⚙️ Backend: Node.js, Express, REST APIs\n🤖 AI/ML: Google Gemini API, Genkit, AI Integration\n🗄️ Database: MongoDB, Firebase\n☁️ Cloud: Vercel, Netlify, GitHub Pages\n🛠️ Tools: Git, GitHub, VS Code";
        }

        // Projects
        if (q.includes('project') || q.includes('hacksprint')) {
            return "His notable projects include:\n\n🏆 HackSprint - An AI-powered SaaS platform for hackathon management with real-time leaderboards and automated certificate generation.\n\n💬 AI Chatbot Assistant - A smart educational chatbot using Google Gemini API.\n\n🎵 Short Music Tunes - A music preview app using iTunes API.\n\n🍽️ Hostel Food Feedback System - A feedback management platform.\n\nWant to know more about a specific project?";
        }

        // Contact
        if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
            return "You can reach Dhanunjay at:\n\n📧 Email: palakolanudhanunjayreddy@gmail.com\n💼 LinkedIn: linkedin.com/in/palakolanu-dhanunjay-reddy\n🐙 GitHub: github.com/PDReddyDhanu\n\nFeel free to connect!";
        }

        // Experience
        if (q.includes('experience') || q.includes('internship') || q.includes('work')) {
            return "Dhanunjay has experience as:\n\n💼 Salesforce Developer Intern @ SmartBridge & AICTE\n🎓 B.Tech IT Graduate from Vidya Jyothi Institute of Technology, Hyderabad (CGPA: 8.82/10)\n🏆 Multiple certifications in AI, Python, and Web Development\n\nHe's passionate about building innovative solutions!";
        }

        // Education
        if (q.includes('education') || q.includes('college') || q.includes('university')) {
            return "🎓 Education:\n\nB.Tech in Information Technology (IT)\nVidya Jyothi Institute of Technology, Hyderabad\nCGPA: 8.82/10 (2022-2026 Batch)\n\nIntermediate (MPC)\nSri Kakatiya Junior College, Nizamabad\n87.7% (2020-2022)\n\nSSC\nZ.P. High School, Binola\nCGPA: 10/10 (2020)\n\nHe's also completed various certifications from Google, Microsoft, and IIT Bombay!";
        }

        // Achievements
        if (q.includes('achievement') || q.includes('award') || q.includes('certification')) {
            return "🏆 Key Achievements:\n\n✅ Google AI Essentials Certified\n✅ Microsoft Certified Professional\n✅ IIT Bombay Python Certification\n✅ Salesforce Developer Certified\n✅ Multiple hackathon participations\n✅ Published research work\n\nHe's constantly learning and growing!";
        }

        // About
        if (q.includes('about') || q.includes('who') || q.includes('introduce')) {
            return "Dhanunjay Reddy is a passionate Full Stack Developer, AI enthusiast, and Content Creator! 🚀\n\nHe specializes in building modern web applications with React, TypeScript, and AI integrations. Alongside coding, he hosts a content creator channel (Instagram 20K+ followers, YouTube 3K+ subscribers) focused on automated tech news using generative AI workflows (AI scripting, voiceovers, video editing).\n\nHe's particularly interested in AI/ML, SaaS platforms, and creative digital workflows!";
        }

        // Creator / Social Reach
        if (q.includes('creator') || q.includes('instagram') || q.includes('youtube') || q.includes('followers') || q.includes('channel') || q.includes('subscriber')) {
            return "Dhanunjay is a digital content creator with a strong audience: 🎥\n\n📱 Instagram: 20K+ Followers\n🎥 YouTube: 3K+ Subscribers\n\nHe leverages AI voice generation, automated scriptwriting, and advanced video editing to publish updated news and tech info!";
        }

        // Job Seeking / Hiring
        if (q.includes('hire') || q.includes('hiring') || q.includes('job') || q.includes('opportunity') || q.includes('work') || q.includes('career') || q.includes('seeking') || q.includes('position')) {
            return "Yes! Dhanunjay Reddy is actively seeking job opportunities and internships! 💼\n\n🎯 Target Roles: Full Stack Developer, AI Engineer, Salesforce Developer\n📈 Status: Open to Work (B.Tech IT 2022-2026 Batch)\n📍 Location: Hyderabad (Open to Relocation / Remote)\n\nFeel free to reach out directly via the Contact section, email at palakolanudhanunjayreddy@gmail.com, or download his resume from the Hero section!";
        }

        // Default responses
        const defaultResponses = [
            "That's an interesting question! You can ask me about:\n\n• Dhanunjay's skills and technologies\n• His projects and achievements\n• How to contact him\n• His education and experience\n\nWhat would you like to know?",
            "I'm here to help! Try asking about:\n\n✨ Technical skills\n💼 Work experience\n🚀 Projects\n📧 Contact information\n🎓 Education",
            "Great question! I can tell you about Dhanunjay's:\n\n🎯 Skills & expertise\n🏆 Achievements\n💻 Projects\n📬 Contact details\n\nWhat interests you most?"
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate AI thinking time
        setTimeout(() => {
            const response = getResponse(input);
            const assistantMessage: Message = { role: 'assistant', content: response };
            setMessages(prev => [...prev, assistantMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chatbot Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#039BE5] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="fixed bottom-28 left-8 z-50 w-96 h-[600px] bg-[#1A202C]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#FF6B35]/20 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#FF6B35] to-[#039BE5] p-4 flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold">AI Assistant</h3>
                                <p className="text-white/80 text-xs">Ask me anything!</p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white/80 text-xs">Online</span>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#FF6B35]/20 scrollbar-track-transparent">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${message.role === 'user'
                                            ? 'bg-gradient-to-r from-[#FF6B35] to-[#039BE5] text-white'
                                            : 'bg-[#2D3748] text-white/90'
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-[#2D3748] p-3 rounded-2xl">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-[#FF6B35]/20">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-[#2D3748] text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 placeholder-white/40 text-sm"
                                />
                                <motion.button
                                    onClick={handleSend}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-[#FF6B35] to-[#039BE5] p-3 rounded-xl hover:shadow-lg transition-shadow duration-300"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
