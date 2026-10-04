import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060910] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1.5px]">
                <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center font-display font-extrabold text-cyan-400 text-base">
                  BP
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg tracking-tight">
                  {personalInfo.name}
                </div>
                <div className="text-xs font-mono text-cyan-400">
                  {personalInfo.title}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering high-performance web applications, sub-second real-time engines, and distributed microservices with Java, Spring Boot, and React.js.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Immediate Joining</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Tech Stack</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience Timeline</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education & Credentials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Connect & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors break-all">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a href={`tel:${personalInfo.phoneRaw}`} className="text-slate-300 hover:text-indigo-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="pt-2 flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Borra Prashanth. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            id="back-to-top-btn"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
