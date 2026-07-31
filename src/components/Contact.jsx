import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Phone, MessageSquare, Loader2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/shriramphatale833@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto if endpoint fails
        window.location.href = `mailto:shriramphatale833@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${encodeURIComponent(formData.email)}`;
        setSubmitted(true);
      }
    } catch (err) {
      window.location.href = `mailto:shriramphatale833@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${encodeURIComponent(formData.email)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      label: 'EMAIL ADDRESS',
      value: 'shriramphatale833@gmail.com',
      href: 'mailto:shriramphatale833@gmail.com',
      icon: Mail,
      isExternal: false,
    },
    {
      label: 'PHONE NUMBER',
      value: '+91-8329787090',
      href: 'tel:+918329787090',
      icon: Phone,
      isExternal: false,
    },
    {
      label: 'LINKEDIN PROFILE',
      value: 'linkedin.com/in/shriram-phatale',
      href: 'https://linkedin.com',
      icon: Linkedin,
      isExternal: true,
    },
    {
      label: 'GITHUB PROFILE',
      value: 'github.com/shriramphatale',
      href: 'https://github.com',
      icon: Github,
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 relative bg-dark text-white border-b-8 border-black py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-volt text-black font-mono text-xs font-bold px-3 py-1 uppercase border-2 border-black rotate-[-1deg]">
            SECTION // 05
          </div>
          <div className="h-1 bg-white/20 flex-1" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="font-ranchers text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wide text-white drop-shadow-[5px_5px_0px_#000000]">
            GET IN TOUCH
          </h2>
          <p className="font-mono text-xs sm:text-sm uppercase text-gray-400 mt-1 tracking-wider flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-volt" />
            // CONNECT WITH SHRIRAM PHATALE — OPEN TO OPPORTUNITIES
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Real Functional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white text-black border-4 border-black p-6 shadow-[6px_6px_0px_0px_#CCFF00]"
          >
            <div className="flex items-center justify-between border-b-4 border-black pb-3 mb-5">
              <span className="font-mono text-base font-extrabold uppercase tracking-tight flex items-center gap-2">
                <Send className="w-5 h-5 text-black" />
                SEND DIRECT MESSAGE
              </span>
              <span className="font-mono text-xs font-bold bg-volt px-2 py-0.5 border border-black uppercase">
                STATUS: ONLINE
              </span>
            </div>

            {submitted ? (
              <div className="bg-volt border-4 border-black p-8 text-center text-black font-mono space-y-3">
                <CheckCircle2 className="w-12 h-12 mx-auto text-black" />
                <h3 className="text-2xl font-extrabold uppercase">MESSAGE TRANSMITTED!</h3>
                <p className="text-sm font-bold">
                  Thank you for reaching out! Your message has been dispatched directly to shriramphatale833@gmail.com.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-black text-white font-mono text-xs font-bold uppercase px-4 py-2 border-2 border-black hover:bg-white hover:text-black"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Input */}
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-1.5 text-black">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name..."
                    className="w-full bg-gray-50 border-3 border-black p-3 font-mono text-xs sm:text-sm focus:outline-none focus:bg-volt/20 shadow-[3px_3px_0px_0px_#000000]"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-1.5 text-black">
                    YOUR EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 border-3 border-black p-3 font-mono text-xs sm:text-sm focus:outline-none focus:bg-volt/20 shadow-[3px_3px_0px_0px_#000000]"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider mb-1.5 text-black">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    className="w-full bg-gray-50 border-3 border-black p-3 font-mono text-xs sm:text-sm focus:outline-none focus:bg-volt/20 shadow-[3px_3px_0px_0px_#000000]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="brutalist-btn w-full bg-black text-white font-mono text-sm sm:text-base font-extrabold uppercase py-3.5 border-3 border-black shadow-[5px_5px_0px_0px_#CCFF00] hover:bg-volt hover:text-black flex items-center justify-center gap-2.5 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-volt" />
                      <span>TRANSMITTING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="font-mono text-xs font-bold uppercase text-volt tracking-widest mb-1">
              // DIRECT CONTACT DETAILS
            </div>

            {/* Mobile View (< sm): Compact fixed-size icons (w-12 h-12) */}
            <div className="flex sm:hidden items-center gap-3">
              {contactLinks.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noreferrer' : undefined}
                    aria-label={item.label}
                    className="brutalist-btn w-12 h-12 bg-white text-black border-3 border-black shadow-[3px_3px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#CCFF00] hover:bg-volt flex items-center justify-center shrink-0"
                  >
                    <IconComp className="w-5 h-5 text-black" />
                  </a>
                );
              })}
            </div>

            {/* Desktop / Tablet View (>= sm): Full Contact Cards */}
            <div className="hidden sm:space-y-4 sm:block">
              {contactLinks.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noreferrer' : undefined}
                    className="bg-white text-black border-3 border-black p-4 shadow-[4px_4px_0px_0px_#000000] flex items-center gap-3.5 hover:shadow-[6px_6px_0px_0px_#CCFF00] hover:bg-volt transition-all block mb-4"
                  >
                    <div className="w-10 h-10 bg-black text-white border-2 border-black flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="font-mono text-[10px] font-bold text-gray-600 uppercase block">{item.label}</span>
                      <span className="font-mono text-xs sm:text-sm font-extrabold uppercase truncate block">
                        {item.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location Info */}
            <div className="bg-white text-black border-3 border-black p-4 shadow-[4px_4px_0px_0px_#000000] flex items-center gap-3.5 mt-4">
              <div className="w-10 h-10 bg-black text-white border-2 border-black flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="font-mono text-[10px] font-bold text-gray-600 uppercase block">LOCATION</span>
                <span className="font-mono text-xs sm:text-sm font-extrabold uppercase truncate block">
                  PUNE, MAHARASHTRA, INDIA
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
