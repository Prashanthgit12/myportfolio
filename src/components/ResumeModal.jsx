import React, { useRef } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, experienceData, projectsData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function ResumeModal({ isOpen, onClose }) {
  const resumeRef = useRef();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl rounded-2xl bg-[#0b0f19] border border-slate-700 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Modal Top Bar */}
          <div className="px-6 py-4 bg-[#080c14] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <FileCheck className="w-4 h-4 text-cyan-400" />
              <span>RESUME PREVIEW • BORRA PRASHANTH (ATS FORMAT)</span>
            </div>

            <div className="flex items-center gap-2.5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-sm"
                id="print-resume-modal-btn"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Resume Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900/60 text-slate-200 print:bg-white print:text-black">
            <div 
              ref={resumeRef}
              className="max-w-3xl mx-auto bg-[#0d1322] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-inner print:border-none print:shadow-none print:bg-white print:text-black print:p-0"
            >
              {/* Header */}
              <div className="border-b border-slate-700/80 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/50 p-0.5 bg-slate-800 shrink-0">
                    <img 
                      src={profileImg} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white print:text-black">
                      {personalInfo.name}
                    </h1>
                    <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5 print:text-blue-800">
                      {personalInfo.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Computer Science & Engineering Graduate • SVEC (CGPA 9.1/10.0)
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono space-y-1 text-slate-300 sm:text-right print:text-black">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>linkedin.com/in/{personalInfo.linkedinUsername}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>github.com/{personalInfo.githubUsername}</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2 print:text-blue-900">
                  Professional Summary
                </h2>
                <p className="text-xs leading-relaxed text-slate-300 print:text-black">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2 print:text-blue-900">
                  Technical Skills
                </h2>
                <div className="text-xs space-y-1.5 text-slate-300 print:text-black">
                  <div>
                    <span className="font-semibold text-white print:text-black">Languages:</span> Java, JavaScript (ES6+), SQL, HTML5, CSS3
                  </div>
                  <div>
                    <span className="font-semibold text-white print:text-black">Frameworks & Backend:</span> Spring Boot, React.js, Node.js, Express.js, Hibernate/JPA, Bootstrap, Material-UI, Axios
                  </div>
                  <div>
                    <span className="font-semibold text-white print:text-black">Databases & Storage:</span> MySQL, PostgreSQL (Neon DB), MongoDB Atlas
                  </div>
                  <div>
                    <span className="font-semibold text-white print:text-black">Tools & Infrastructure:</span> Git, GitHub, Docker, Postman, Vercel, Render, Maven, npm
                  </div>
                  <div>
                    <span className="font-semibold text-white print:text-black">Methodologies:</span> Agile/Scrum, RESTful Microservices, Real-Time WebSockets
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2 print:text-blue-900">
                  Work Experience
                </h2>
                <div className="space-y-4">
                  {experienceData.map((exp, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex justify-between items-baseline font-semibold">
                        <span className="text-white print:text-black font-bold">
                          {exp.role} — <span className="text-cyan-400 print:text-blue-800">{exp.company}</span>
                        </span>
                        <span className="text-slate-400 font-mono text-[11px] print:text-black">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-1.5 list-disc list-inside space-y-1 text-slate-300 print:text-black">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2 print:text-blue-900">
                  Key Engineering Projects
                </h2>
                <div className="space-y-3.5">
                  {projectsData.map((p, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex justify-between items-baseline">
                        <span className="text-white font-bold print:text-black">
                          {p.title} — {p.subtitle}
                        </span>
                        <span className="text-[11px] font-mono text-cyan-400 print:text-blue-700">
                          {p.tech.slice(0, 4).join(', ')}
                        </span>
                      </div>
                      <ul className="mt-1 list-disc list-inside space-y-1 text-slate-300 print:text-black">
                        {p.highlights.slice(0, 3).map((h, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 border-b border-slate-800 pb-1 mb-2 print:text-blue-900">
                  Education & Credentials
                </h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold">
                      <span className="text-white print:text-black">
                        B.Tech in Computer Science and Engineering — Sree Vidyanikethan Engineering College
                      </span>
                      <span className="font-mono text-cyan-400 print:text-blue-800 font-bold">CGPA: 9.1 / 10.0</span>
                    </div>
                    <div className="text-[11px] text-slate-400 print:text-black">2021 – 2025 • First Class with Distinction</div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold">
                      <span className="text-white print:text-black">
                        Java Full Stack Development Certification — Elearn Info Tech
                      </span>
                      <span className="font-mono text-slate-400 print:text-black">600+ Hours Coursework</span>
                    </div>
                    <div className="text-[11px] text-slate-400 print:text-black">Nov 2023 – Apr 2024 • Built 4 full-stack applications</div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span>Intermediate MPC — Sri Chaitanya Junior College</span>
                      <span className="font-mono font-semibold">96.0%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span>Secondary School Certificate (SSC) — Vishnu Vidya Mandir High School</span>
                      <span className="font-mono font-semibold">GPA: 9.5 / 10.0</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-[#080c14] border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
            <span>Ready to hire Borra Prashanth?</span>
            <a
              href="mailto:prashanth9392557522@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              Email directly &rarr;
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
