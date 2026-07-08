import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const socials = [
    {
      name: 'Email',
      icon: '✉️',
      href: 'mailto:palakolanudhanunjayreddy@gmail.com',
      color: 'bg-[#FF6B35]/15 text-[#FF6B35] border-[#FF6B35]/25 hover:bg-[#FF6B35]/25'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://linkedin.com/in/palakolanu-dhanunjay-reddy',
      color: 'bg-[#039BE5]/15 text-[#039BE5] border-[#039BE5]/25 hover:bg-[#039BE5]/25'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      href: 'https://github.com/PDReddyDhanu',
      color: 'bg-[#FFCA28]/15 text-[#FFCA28] border-[#FFCA28]/25 hover:bg-[#FFCA28]/25'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-2xl sm:text-3xl mr-3">📬</span>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Quick Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              I'm open to discussing opportunities, collaborations, or tech topics. Feel free to reach out directly:
            </p>
            
            <div className="space-y-2.5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-3 rounded-2xl border text-xs font-semibold transition-all duration-300 ${social.color}`}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span>Connect via {social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#1A202C]/40 border border-[#30363D] rounded-xl text-white outline-none focus:border-[#FF6B35]/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#1A202C]/40 border border-[#30363D] rounded-xl text-white outline-none focus:border-[#FF6B35]/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  required
                  rows={3}
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#1A202C]/40 border border-[#30363D] rounded-xl text-white outline-none focus:border-[#FF6B35]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-[#FF6B35] to-[#039BE5] text-white rounded-xl text-xs font-bold shadow-md hover:opacity-90 active:scale-98 transition-all"
              >
                {isSubmitted ? 'Message Sent! ✨' : 'Send Message 🚀'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
