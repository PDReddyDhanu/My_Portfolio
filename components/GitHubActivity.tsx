import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GitHubEvent {
    id: string;
    type: string;
    repo: {
        name: string;
        url: string;
    };
    created_at: string;
    payload: any;
}

interface ContributionDay {
    date: string;
    count: number;
}

const GitHubActivity = () => {
    const [events, setEvents] = useState<GitHubEvent[]>([]);
    const [stats, setStats] = useState({
        totalRepos: 0,
        totalCommits: 0,
        totalStars: 0,
        streak: 0
    });
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const [loading, setLoading] = useState(true);

    const username = 'PDReddyDhanu'; // GitHub username

    useEffect(() => {
        fetchGitHubData();
    }, []);

    const fetchGitHubData = async () => {
        try {
            // Fetch recent events
            const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=10`);
            const eventsData = await eventsResponse.json();

            // Fetch user stats
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userResponse.json();

            // Fetch repositories for stars count
            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
            const reposData = await reposResponse.json();

            const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

            setEvents(eventsData.slice(0, 5));
            setStats({
                totalRepos: userData.public_repos,
                totalCommits: eventsData.filter((e: any) => e.type === 'PushEvent').length * 3, // Approximate
                totalStars: totalStars,
                streak: 15 // This would need GitHub GraphQL API for accurate data
            });

            // Generate mock contribution data for the last 12 weeks
            generateContributions();

            setLoading(false);
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
            setLoading(false);
        }
    };

    const generateContributions = () => {
        const days: ContributionDay[] = [];
        const today = new Date();

        for (let i = 84; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            days.push({
                date: date.toISOString().split('T')[0],
                count: Math.floor(Math.random() * 8) // Random contributions for demo
            });
        }

        setContributions(days);
    };

    const getEventIcon = (type: string) => {
        switch (type) {
            case 'PushEvent':
                return '📝';
            case 'CreateEvent':
                return '✨';
            case 'PullRequestEvent':
                return '🔀';
            case 'IssuesEvent':
                return '🐛';
            case 'WatchEvent':
                return '⭐';
            case 'ForkEvent':
                return '🍴';
            default:
                return '💻';
        }
    };

    const getEventDescription = (event: GitHubEvent) => {
        const repoName = event.repo.name.split('/')[1];
        switch (event.type) {
            case 'PushEvent':
                return `Pushed ${event.payload.commits?.length || 1} commit(s) to ${repoName}`;
            case 'CreateEvent':
                return `Created ${event.payload.ref_type} in ${repoName}`;
            case 'PullRequestEvent':
                return `${event.payload.action} pull request in ${repoName}`;
            case 'WatchEvent':
                return `Starred ${repoName}`;
            case 'ForkEvent':
                return `Forked ${repoName}`;
            default:
                return `Activity in ${repoName}`;
        }
    };

    const getContributionColor = (count: number) => {
        if (count === 0) return 'bg-[#2D3748]';
        if (count <= 2) return 'bg-[#039BE5]/30';
        if (count <= 4) return 'bg-[#039BE5]/60';
        if (count <= 6) return 'bg-[#039BE5]/80';
        return 'bg-[#039BE5]';
    };

    const getTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (seconds < 60) return 'just now';
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
        return `${Math.floor(seconds / 86400)}d ago`;
    };

    if (loading) {
        return (
            <section className="py-20 px-4 relative">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35]"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 px-4 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#039BE5]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-4xl md:text-5xl mr-4">📡</span>
                    Live GitHub Activity
                </motion.h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Repositories', value: stats.totalRepos, icon: '📦', color: 'from-[#FF6B35]' },
                        { label: 'Total Stars', value: stats.totalStars, icon: '⭐', color: 'from-[#FFCA28]' },
                        { label: 'Contributions', value: stats.totalCommits, icon: '📝', color: 'from-[#039BE5]' },
                        { label: 'Day Streak', value: stats.streak, icon: '🔥', color: 'from-[#FF6B35]' }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1A202C]/60 backdrop-blur-sm border border-[#4A5568] rounded-xl p-6 hover:border-[#FF6B35]/40 transition-all duration-300"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} to-[#039BE5] bg-clip-text text-transparent mb-1`}>
                                {stat.value}+
                            </div>
                            <div className="text-white/60 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contribution Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#1A202C]/60 backdrop-blur-sm border border-[#4A5568] rounded-xl p-6"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="mr-2">📊</span>
                            Contribution Activity
                        </h3>
                        <div className="grid grid-cols-12 gap-1">
                            {contributions.map((day, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.01 }}
                                    viewport={{ once: true }}
                                    className={`w-full aspect-square rounded-sm ${getContributionColor(day.count)} hover:ring-2 hover:ring-[#FF6B35] transition-all cursor-pointer`}
                                    title={`${day.date}: ${day.count} contributions`}
                                />
                            ))}
                        </div>
                        <div className="flex items-center justify-between mt-4 text-xs text-white/60">
                            <span>Less</span>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-[#2D3748] rounded-sm"></div>
                                <div className="w-3 h-3 bg-[#039BE5]/30 rounded-sm"></div>
                                <div className="w-3 h-3 bg-[#039BE5]/60 rounded-sm"></div>
                                <div className="w-3 h-3 bg-[#039BE5] rounded-sm"></div>
                            </div>
                            <span>More</span>
                        </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#1A202C]/60 backdrop-blur-sm border border-[#4A5568] rounded-xl p-6"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="mr-2">⚡</span>
                            Recent Activity
                        </h3>
                        <div className="space-y-3">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3 p-3 bg-[#2D3748]/50 rounded-lg hover:bg-[#2D3748] transition-colors duration-200"
                                >
                                    <span className="text-2xl">{getEventIcon(event.type)}</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white/90 text-sm">{getEventDescription(event)}</p>
                                        <p className="text-white/40 text-xs mt-1">{getTimeAgo(event.created_at)}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center text-[#039BE5] hover:text-[#FF6B35] transition-colors duration-200 text-sm font-medium"
                        >
                            View full profile
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
