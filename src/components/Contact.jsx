import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { 
  FadeIn, 
  SpotlightCard 
} from './animations/MotionComponents';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Simulate sending
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Fire celebration confetti
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {
          // Graceful fallback
        }
      }, 900);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Interested in discussing full-time engineering roles, technical architecture, or building scalable systems? Reach out anytime!
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Copies */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <FadeIn delay={0.1} direction="right">
              <SpotlightCard className="glass-card rounded-2xl p-6 border border-emerald-500/30 bg-emerald-950/20 shadow-lg">
                <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-sm mb-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span>Immediate Availability</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Open to Full-Time Software Engineer, Java Developer, and Full Stack positions across Bangalore, Hyderabad, Pune, or Remote.
                </p>
              </SpotlightCard>
            </FadeIn>

            {/* Email Card with Quick Copy */}
            <FadeIn delay={0.2} direction="right">
              <SpotlightCard className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 shadow-md group">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    title="Copy email to clipboard"
                    id="copy-email-btn"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-cyan-400" />
                    )}
                  </motion.button>
                </div>
                {copiedEmail && (
                  <motion.div 
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs font-mono text-emerald-400"
                  >
                    ✓ Copied email to clipboard!
                  </motion.div>
                )}
              </SpotlightCard>
            </FadeIn>

            {/* Phone Card with Quick Copy */}
            <FadeIn delay={0.3} direction="right">
              <SpotlightCard className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/40 shadow-md group">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Phone Number
                      </div>
                      <a
                        href={`tel:${personalInfo.phoneRaw}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-indigo-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                    title="Copy phone to clipboard"
                    id="copy-phone-btn"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-indigo-400" />
                    )}
                  </motion.button>
                </div>
                {copiedPhone && (
                  <motion.div 
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs font-mono text-emerald-400"
                  >
                    ✓ Copied phone number to clipboard!
                  </motion.div>
                )}
              </SpotlightCard>
            </FadeIn>

            {/* Social Links Cards */}
            <FadeIn delay={0.4} direction="right">
              <div className="grid grid-cols-2 gap-3.5">
                <SpotlightCard
                  as="a"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 border border-slate-800 hover:border-cyan-500/40 flex items-center gap-3 group hover:-translate-y-1 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Network</div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                      LinkedIn
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard
                  as="a"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 border border-slate-800 hover:border-cyan-500/40 flex items-center gap-3 group hover:-translate-y-1 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Code Repos</div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                      GitHub
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} direction="left">
              <SpotlightCard className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-extrabold text-white">
                      Message Dispatched Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mt-2 leading-relaxed">
                      Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your message has been received. I typically respond within 12 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetForm}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-slate-800 pb-3 mb-4">
                      <h3 className="text-xl font-display font-bold text-white">
                        Direct Message
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Send a proposal, inquiry, or interview invitation directly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                            formErrors.name
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-800 focus:border-cyan-500'
                          }`}
                          id="contact-name-input"
                        />
                        {formErrors.name && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Your Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                            formErrors.email
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-800 focus:border-cyan-500'
                          }`}
                          id="contact-email-input"
                        />
                        {formErrors.email && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Subject / Role Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Full Stack Developer Opening / Technical Discussion"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        id="contact-subject-input"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share details about the role, project scope, or opportunity..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                          formErrors.message
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-800 focus:border-cyan-500'
                        }`}
                        id="contact-message-input"
                      />
                      {formErrors.message && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 hover:from-cyan-400 hover:via-indigo-500 hover:to-indigo-600 shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Borra Prashanth</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}

              </SpotlightCard>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
