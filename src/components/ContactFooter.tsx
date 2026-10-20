import React from 'react';
import { Mail, ArrowUp, Github, Linkedin, GraduationCap, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-ink-900 text-ink-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-500">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white leading-tight">
              Open to research conversations<br className="hidden sm:block" /> for Fall 2027.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-200">
              I welcome email from prospective advisors and research groups working on robust and
              efficient machine learning, trustworthy AI, and foundation-model adaptation.
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ink-100 transition"
            >
              <Mail className="w-4 h-4" /> {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="md:justify-self-end">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-300">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-ink-100 hover:text-white transition">
                  <Github className="w-[18px] h-[18px] text-ink-300" /> github.com/rafiimam
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-ink-100 hover:text-white transition">
                  <Linkedin className="w-[18px] h-[18px] text-ink-300" /> linkedin.com/in/rafiimam
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.scholarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-ink-100 hover:text-white transition">
                  <GraduationCap className="w-[18px] h-[18px] text-ink-300" /> Google Scholar
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.researchGateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-ink-100 hover:text-white transition">
                  <Globe className="w-[18px] h-[18px] text-ink-300" /> ResearchGate
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-300">
              {PERSONAL_INFO.affiliation}
              <br />{PERSONAL_INFO.location} · {PERSONAL_INFO.phone}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink-700 pt-6">
          <p className="text-[13px] text-ink-300">
            © 2026 {PERSONAL_INFO.name} · Research portfolio for Ph.D. applications — Fall 2027
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-200 hover:text-white transition">
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
