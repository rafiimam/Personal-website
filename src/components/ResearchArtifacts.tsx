import React from 'react';
import { FileText, Github, FlaskConical, Scale, SearchX, GitBranch } from 'lucide-react';
import { FLAGSHIP_RESEARCH } from '../data/content';

interface ResearchArtifactsProps {
  onViewPdf: (title: string, pdfUrl: string) => void;
}

const FINDING_ICONS = [SearchX, GitBranch, Scale, FlaskConical];

export const ResearchArtifacts: React.FC<ResearchArtifactsProps> = ({ onViewPdf }) => {
  const r = FLAGSHIP_RESEARCH;

  return (
    <section id="research" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        <p className="eyebrow">Flagship Research</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 max-w-2xl leading-tight">
            {r.title}
          </h2>
          <span className="badge badge-brass">{r.status}</span>
        </div>
        <p className="mt-2 font-mono text-[13px] text-slate-500">{r.subtitle}</p>

        {/* Research question */}
        <div className="card mt-8 p-6 sm:p-8 border-l-4 border-l-accent-600">
          <p className="eyebrow mb-2">The question</p>
          <p className="text-[15px] leading-relaxed text-slate-600">{r.question}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={() => onViewPdf(r.title, r.pdfUrl)} className="btn-primary">
              <FileText className="w-4 h-4" /> Read the manuscript
            </button>
            <a href={r.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github className="w-4 h-4" /> Code &amp; full results
            </a>
          </div>
        </div>

        {/* Findings */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {r.findings.map((f, i) => {
            const Icon = FINDING_ICONS[i % FINDING_ICONS.length];
            return (
              <article key={f.title} className="card card-hover p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-50 text-accent-700">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-slate-400">FINDING {i + 1}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-bold text-ink-900 leading-snug">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </article>
            );
          })}
        </div>

        {/* Locked protocol */}
        <div className="mt-8 card p-6 sm:p-8">
          <p className="eyebrow mb-4">Locked evaluation protocol — identical for every method</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
            {r.protocol.map((p) => (
              <div key={p.label}>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">{p.label}</div>
                <div className="mt-0.5 text-sm font-medium text-ink-900">{p.value}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-400">
            Backbone: {r.backbone} · Benchmark: {r.benchmark}. Reporting follows the study’s own rule:
            no claim without a capacity-matched control.
          </p>
        </div>
      </div>
    </section>
  );
};
