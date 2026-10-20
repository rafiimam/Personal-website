import React from 'react';
import { ExternalLink, FileText, CheckCircle2, XCircle, MinusCircle } from 'lucide-react';
import { ENTERPRISE_AI_PROJECT } from '../data/content';

interface SystemsEngineeringProps {
  onViewPdf: (title: string, pdfUrl: string) => void;
}

const outcomeBadge = (outcome: string) => {
  if (outcome.startsWith('Promoted')) {
    return (
      <span className="badge bg-emerald-50 text-emerald-700 border border-emerald-100">
        <CheckCircle2 className="w-3.5 h-3.5" /> {outcome}
      </span>
    );
  }
  if (outcome.startsWith('Rolled')) {
    return (
      <span className="badge bg-red-50 text-red-700 border border-red-100">
        <XCircle className="w-3.5 h-3.5" /> {outcome}
      </span>
    );
  }
  return (
    <span className="badge badge-subtle">
      <MinusCircle className="w-3.5 h-3.5" /> {outcome}
    </span>
  );
};

export const SystemsEngineering: React.FC<SystemsEngineeringProps> = ({ onViewPdf }) => {
  const p = ENTERPRISE_AI_PROJECT;

  return (
    <section id="enterprise-ai" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        <p className="eyebrow">Production AI · Industry Research</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink-900 max-w-3xl leading-tight">
          {p.title}
        </h2>
        <p className="mt-2 font-mono text-[13px] text-slate-500">{p.subtitle}</p>

        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-slate-600">{p.context}</p>

        {/* Key metric band */}
        <div className="mt-7 rounded-2xl bg-ink-900 text-white px-6 py-5 flex flex-wrap items-center gap-x-8 gap-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">Locked evaluation set</span>
          <span className="font-serif text-lg sm:text-xl font-semibold">{p.keyMetric}</span>
        </div>

        {/* Adaptation campaign */}
        <h3 className="mt-12 font-serif text-2xl font-bold text-ink-900">
          The adaptation campaign — measured, not assumed
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
          The first deployment failed on live traffic in an instructive way. Each candidate fix was evaluated
          against the same locked set (33 replay sessions, 32 live sessions) and promoted only under a
          pre-registered ship rule: FAR ≤ 0% and FRR ≤ 15%.
        </p>

        <div className="mt-6 overflow-x-auto card">
          <table className="w-full text-left text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-ink-100 bg-paper-50">
                <th className="px-5 py-3.5 font-semibold text-ink-900">Stage</th>
                <th className="px-5 py-3.5 font-semibold text-ink-900">What changed</th>
                <th className="px-5 py-3.5 font-semibold text-ink-900 whitespace-nowrap">FAR (replay)</th>
                <th className="px-5 py-3.5 font-semibold text-ink-900 whitespace-nowrap">FRR (live)</th>
                <th className="px-5 py-3.5 font-semibold text-ink-900">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {p.campaign.map((c) => (
                <tr key={c.stage} className="border-b border-ink-100/70 last:border-0 align-top">
                  <td className="px-5 py-4 font-semibold text-ink-900 whitespace-nowrap">{c.stage}</td>
                  <td className="px-5 py-4 text-slate-600 leading-relaxed">{c.detail}</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-ink-900 whitespace-nowrap">{c.far}</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-ink-900 whitespace-nowrap">{c.frr}</td>
                  <td className="px-5 py-4 whitespace-nowrap">{outcomeBadge(c.outcome)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Architecture highlights */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.architectureHighlights.map((h) => (
            <article key={h.name} className="card card-hover p-6">
              <h4 className="font-serif text-[17px] font-bold text-ink-900 leading-snug">{h.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.detail}</p>
            </article>
          ))}
          <article className="card p-6 bg-accent-50/60 border-accent-100">
            <h4 className="font-serif text-[17px] font-bold text-ink-900 leading-snug">Why it matters for research</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.researchRelevance}</p>
          </article>
        </div>

        {/* Stack + links */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {p.techStack.map((t) => (
            <span key={t} className="badge badge-subtle font-mono">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => onViewPdf('Liveness Verification & PAD — Research Profile', p.pdfUrl)} className="btn-primary">
            <FileText className="w-4 h-4" /> Read the full system report
          </button>
          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Project repository <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
