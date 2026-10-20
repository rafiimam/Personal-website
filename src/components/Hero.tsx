import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, GraduationCap, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/content';
import { assetUrl } from '../utils/assetUrl';

interface HeroProps {
  onViewPdf: (title: string, pdfUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPdf }) => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      {/* Subtle paper texture: soft radial light + faint grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,184,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,33,61,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,33,61,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="inline-block h-px w-8 bg-brass-500" aria-hidden="true" />
            {PERSONAL_INFO.targetRole}
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-ink-900 leading-[1.05]">
            {PERSONAL_INFO.name}
          </h1>

          <p className="mt-4 font-serif text-xl sm:text-2xl text-ink-700 leading-snug">
            Robust &amp; efficient machine learning —<br className="hidden sm:block" />
            from controlled PEFT research to production banking AI.
          </p>

          <p className="mt-3 text-sm font-medium text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>{PERSONAL_INFO.title}</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5" /> {PERSONAL_INFO.location}
            </span>
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
            {PERSONAL_INFO.bio}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#research" className="btn-primary">
              View flagship research <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => onViewPdf('Curriculum Vitae — MD. Rafi Imam', assetUrl('./docs/MD_RAFI_IMAM_CV.pdf'))}
              className="btn-secondary"
            >
              <FileText className="w-4 h-4" /> Read CV
            </button>
            <div className="flex items-center gap-1.5 ml-1">
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="p-2.5 rounded-lg border border-ink-100 bg-white text-slate-500 hover:text-ink-900 hover:border-ink-200 transition">
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a href={PERSONAL_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="p-2.5 rounded-lg border border-ink-100 bg-white text-slate-500 hover:text-ink-900 hover:border-ink-200 transition">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a href={PERSONAL_INFO.scholarUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"
                 className="p-2.5 rounded-lg border border-ink-100 bg-white text-slate-500 hover:text-ink-900 hover:border-ink-200 transition">
                <GraduationCap className="w-[18px] h-[18px]" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email"
                 className="p-2.5 rounded-lg border border-ink-100 bg-white text-slate-500 hover:text-ink-900 hover:border-ink-200 transition">
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Research interests */}
          <div className="mt-8 flex flex-wrap gap-2">
            {PERSONAL_INFO.researchInterests.map((interest) => (
              <span key={interest} className="badge badge-subtle">{interest}</span>
            ))}
          </div>
        </div>

        {/* Metrics strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3">
          {METRICS.map((m) => (
            <div key={m.label} className="card card-hover px-5 py-4">
              <div className="font-serif text-2xl font-bold text-ink-900">{m.value}</div>
              <div className="mt-0.5 text-[13px] font-semibold text-slate-700">{m.label}</div>
              <div className="text-xs text-slate-400">{m.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
