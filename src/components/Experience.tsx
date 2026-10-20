import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { WORK_EXPERIENCE, SELECTED_SYSTEMS } from '../data/content';

export const Experience: React.FC = () => {
  const job = WORK_EXPERIENCE[0];

  return (
    <section id="industry" className="py-20 sm:py-24 bg-paper-200/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="eyebrow">Industry Experience</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Software engineering in production banking
        </h2>

        <div className="mt-10 card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink-900 flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-accent-700" /> {job.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {job.company} · {job.division}
              </p>
            </div>
            <div className="text-right">
              <span className="badge badge-accent">{job.period}</span>
              <p className="mt-1.5 text-xs text-slate-400 flex items-center gap-1 justify-end">
                <MapPin className="w-3 h-3" /> {job.location}
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {job.highlights.map((h) => (
              <li key={h.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-100 pt-5">
            {job.techStack.map((t) => (
              <span key={t} className="badge badge-subtle font-mono">{t}</span>
            ))}
          </div>
        </div>

        {/* Selected systems */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {SELECTED_SYSTEMS.map((s) => (
            <article key={s.name} className="card card-hover p-6">
              <h3 className="font-serif text-lg font-bold text-ink-900">{s.name}</h3>
              <p className="mt-1 font-mono text-xs text-slate-400">{s.stack}</p>
              <ul className="mt-4 space-y-2.5">
                {s.points.map((pt) => (
                  <li key={pt.slice(0, 28)} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
