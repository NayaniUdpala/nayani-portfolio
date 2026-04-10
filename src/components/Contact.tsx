import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5niee15',
        'template_v45r4bj',
        form.current,
        'stUsRk5_KqKq0pHJW'
      )
      .then(() => {
        alert('✅ Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.log('EmailJS Error:', error);
        alert('❌ Message failed. Please try again!');
      });
  };

  const socialLinks = [
    { icon: ExternalLink, href: 'https://www.behance.net/nayaniudpala', label: 'Behance' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nayani-wickramaarachchi-156711316/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/NayaniUdpala', label: 'GitHub' },
    { icon: Mail, href: 'mailto:nayaniwickramaarachchi74@gmail.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="pt-28 md:pt-36 pb-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let’s design <br />
              <span className="text-accent-light">impactful experiences.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              I’m a UI/UX & Graphic Designer focused on creating modern, user-centered digital experiences.
              Open to new opportunities and collaborations.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                const gradientId = `grad-${i}`;

                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-300"
                    style={{
                      boxShadow: '0 2px 6px rgba(0,0,0,0.25)'
                    }}
                    title={social.label}
                  >
                    {/* Gradient Definition per icon */}
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <Icon
                      size={20}
                      stroke={`url(#${gradientId})`}
                      strokeWidth={2}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your full name"
                    className="glass-input w-full px-4 py-3 rounded-lg outline-none text-white placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="Your email address"
                    className="glass-input w-full px-4 py-3 rounded-lg outline-none text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Freelance / Full-time UI/UX Opportunity"
                  className="glass-input w-full px-4 py-3 rounded-lg outline-none text-white placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project, goals, or design needs..."
                  className="glass-input w-full px-4 py-3 rounded-lg outline-none text-white placeholder-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Nayani Wickramaarachchi. UI/UX & Graphic Designer. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}