import React from 'react';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/content';
import { assetUrl } from '../utils/assetUrl';

interface HeroProps {
  onViewPdf: (title: string, url: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPdf }) => {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20">
      {/* Subtle warm glow — not flashy, just ambient depth */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-400/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-teal-400/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Admissions context — subtle, not a flashy badge */}
        <p className="text-xs font-mono tracking-widest uppercase text-gold-400/80 mb-6">
          Prospective Ph.D. Candidate — Fall 2027
        </p>

        {/* Name & identity */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] tracking-tight mb-4">
          MD. Rafi Imam
        </h1>

        <p className="text-lg sm:text-xl text-slate-300/90 font-light max-w-2xl leading-relaxed mb-3">
          <span className="text-gold-300 font-medium">Researcher in Multimodal AI & Autonomous Systems</span>
        </p>

        <p className="text-[15px] text-slate-400 max-w-2xl leading-relaxed mb-8">
          Investigating how artificial intelligence perceives, adapts, and reasons over time. My work focuses on multimodal foundation models, vision-language reasoning, and developing parameter-efficient frameworks to empower self-evolving AI agents.
        </p>

        {/* Compact affiliation & context — what professors scan first */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-slate-400 mb-10">
          <span>
            <span className="text-slate-500 font-mono text-xs">Current:</span>{' '}
            <span className="text-slate-300">Software Dev. Officer, AI & Automation — Jamuna Bank PLC</span>
          </span>
          <span>
            <span className="text-slate-500 font-mono text-xs">Degree:</span>{' '}
            <span className="text-slate-300">B.Sc. ECE, RUET (First Class | 3.55 Last-60 GPA)</span>
          </span>
        </div>

        {/* Primary CTAs — what a professor would click */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href="#sallora"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-400 hover:bg-gold-300 text-base-900 font-semibold text-sm rounded-lg transition-all shadow-lg shadow-gold-400/10 hover:shadow-gold-400/20"
          >
            Read My Research
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onViewPdf("Curriculum Vitae", assetUrl("./Assets/MD_RAFI_IMAM_CV.pdf"))}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-base-800 hover:bg-base-750 text-slate-200 font-medium text-sm rounded-lg border border-base-700 transition-all"
          >
            <FileText className="w-4 h-4 text-gold-400" />
            View CV
          </button>

          <a
            href={PERSONAL_INFO.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-400 hover:text-white text-sm rounded-lg hover:bg-base-800 transition-all"
          >
            Google Scholar
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.researchGateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-400 hover:text-white text-sm rounded-lg hover:bg-base-800 transition-all"
          >
            ResearchGate
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* At-a-glance metrics — the numbers professors want to see instantly */}
        <div className="section-divider mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
          {METRICS.map((m, i) => (
            <div key={i} className="group">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {m.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
