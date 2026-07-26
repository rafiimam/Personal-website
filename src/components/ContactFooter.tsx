import React from 'react';
import { Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { assetUrl } from '../utils/assetUrl';

interface ContactFooterProps {
  onViewPdf: (title: string, url: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onViewPdf }) => {
  return (
    <footer className="relative border-t border-base-700/30 bg-base-950 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Professor outreach banner — the most important CTA on the entire site */}
        <div className="card p-8 sm:p-10 border-gold-400/15 bg-gradient-to-br from-base-800/80 to-base-850/80 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-mono text-gold-400/80 uppercase tracking-wider mb-3">
                Fall 2027 — Ph.D. & GRA Inquiries
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
                Interested in discussing research alignment or open positions?
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                I am actively seeking doctoral advisors working on parameter-efficient adaptation, multimodal foundation models, and robust ML systems. I would welcome the opportunity to discuss how my research on SALLoRA and production AI experience could contribute to your group's work.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Re:%20Fall%202027%20Ph.D.%20Inquiry%20—%20MD.%20Rafi%20Imam&body=Dear%20Professor%2C%0A%0AI%20am%20writing%20regarding...`}
                className="flex items-center justify-center gap-2 px-5 py-3 bg-gold-400 hover:bg-gold-300 text-base-900 font-bold text-sm rounded-lg transition-all shadow-lg shadow-gold-400/10"
              >
                <Mail className="w-4 h-4" />
                Contact via Email
              </a>

              <button
                onClick={() => onViewPdf("Curriculum Vitae", assetUrl("./Assets/MD_RAFI_IMAM_CV.pdf"))}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-base-800 hover:bg-base-750 text-slate-200 text-sm font-medium rounded-lg border border-base-700 transition"
              >
                View Complete CV
              </button>
            </div>
          </div>
        </div>

        {/* Footer columns — minimal, functional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-base-700/30">
          
          {/* Bio */}
          <div>
            <p className="font-serif text-base font-bold text-white mb-3">MD. Rafi Imam</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Multimodal AI researcher and production systems engineer. RUET ECE graduate. Seeking Fall 2027 Ph.D. position in CS / AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">Navigation</p>
            <div className="space-y-1.5 text-xs">
              {[
                ["Research Vision", "#research"],
                ["SALLoRA Framework", "#sallora"],
                ["Publications", "#publications"],
                ["Industry Experience", "#industry"],
                ["Credentials", "#credentials"],
                ["Documents", "#documents"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="block text-slate-400 hover:text-white transition">{label}</a>
              ))}
            </div>
          </div>

          {/* Academic Profiles */}
          <div>
            <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">Academic Profiles</p>
            <div className="space-y-1.5 text-xs">
              <a href={PERSONAL_INFO.scholarUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-gold-300 transition">
                Google Scholar <ExternalLink className="w-3 h-3" />
              </a>
              <a href={PERSONAL_INFO.researchGateUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-gold-300 transition">
                ResearchGate <ExternalLink className="w-3 h-3" />
              </a>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-gold-300 transition">
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a href={PERSONAL_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-gold-300 transition">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3">Contact</p>
            <div className="space-y-1.5 text-xs text-slate-400">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block hover:text-gold-300 transition font-mono">
                {PERSONAL_INFO.email}
              </a>
              <p className="font-mono">{PERSONAL_INFO.phone}</p>
              <p>{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Copyright & scroll to top */}
        <div className="pt-8 flex items-center justify-between text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} MD. Rafi Imam</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 text-slate-500 hover:text-white transition"
          >
            Back to top <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
