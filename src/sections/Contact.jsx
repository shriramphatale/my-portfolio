import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Send, Loader2, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      onShowToast(
        'Message Sent!',
        `Thank you ${formData.name}! Shriram will reply to your message shortly.`
      );
    }, 1000);
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label}!`, text);
  };

  return (
    <section id="contact" className="py-8 sm:py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Minimal Section Header */}
        <div className="mb-6 sm:mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ef233c] font-mono text-sm font-bold">§ 04</span>
            <span className="text-zinc-500 font-mono text-sm">—</span>
            <h2 className="text-xl sm:text-2xl font-bold font-manrope text-white tracking-tight">
              Get in touch
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            [CONTACT]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Direct Channels */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Open for full-time software engineering roles, project inquiries, or technical collaborations.
            </p>

            <div className="space-y-3 pt-1">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#ef233c] transition-colors truncate"
                  >
                    {profileData.email}
                  </a>
                  <button
                    onClick={() => handleCopy(profileData.email, 'Email')}
                    className="text-zinc-500 hover:text-white p-1 transition-colors shrink-0"
                    aria-label="Copy email"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  Location
                </div>
                <div className="text-xs sm:text-sm font-mono text-zinc-300">
                  {profileData.location}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 flex items-center gap-4 text-xs font-mono">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Minimal Message Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ef233c] transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ef233c] transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950/60 border border-zinc-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ef233c] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-[#ef233c] hover:bg-[#d90429] text-white font-bold font-manrope text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
