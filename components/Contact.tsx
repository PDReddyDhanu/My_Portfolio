import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { label: "Email Address", value: "palakolanudhanunjayreddy@gmail.com", href: "mailto:palakolanudhanunjayreddy@gmail.com" },
    { label: "LinkedIn Profile", value: "linkedin.com/in/palakolanu-dhanunjay-reddy", href: "https://linkedin.com/in/palakolanu-dhanunjay-reddy" },
    { label: "GitHub Workspace", value: "github.com/PDReddyDhanu", href: "https://github.com/PDReddyDhanu" },
    { label: "Instagram Channel", value: "instagram.com/telugustates_official", href: "https://www.instagram.com/telugustates_official/" }
  ];

  return (
    <div className="w-full relative z-10">
      <span className="section-subtitle-unfold">Get In Touch</span>
      <h2 className="section-title-unfold mb-12">Contact Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            I am <strong className="text-[#FF6B35]">actively seeking full-time job opportunities and internships</strong> in Full Stack Web Development, Generative AI engineering, and Salesforce Development. If you have an open role, want to collaborate on a project, or just say hello, feel free to shoot me a message!
          </p>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label}>
                <span className="text-[10px] uppercase tracking-wider text-white/30 block mb-1 font-mono">{info.label}</span>
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF6B35] transition-colors text-sm sm:text-base font-semibold break-all"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Line-styled Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="unfold-input-field"
              />
            </div>
            
            <div>
              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="unfold-input-field"
              />
            </div>

            <div>
              <textarea
                required
                rows={4}
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="unfold-input-field resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-3.5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full cursor-pointer"
              >
                {isSubmitted ? 'Message Sent! ✨' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
