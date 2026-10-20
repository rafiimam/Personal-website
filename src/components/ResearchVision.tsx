import React from 'react';
import { Compass, ShieldCheck, Gauge, Telescope } from 'lucide-react';
import { RESEARCH_VISION } from '../data/content';

const ICONS = [Compass, ShieldCheck, Gauge];

export const ResearchVision: React.FC = () => {
  const v = RESEARCH_VISION;

  return (
    <section id="vision" className="py-20 sm:py-24 bg-paper-200/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="eyebrow">Research Vision</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Where this work goes next
        </h2>

        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-slate-600 font-serif text-lg">
          {v.statement}
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {v.directions.map((d, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article key={d.title} className="card card-hover p-6">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brass-50 text-brass-700">
                  <Icon className="w-[18px] h-[18px]" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 card p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-4 border-l-4 border-l-brass-500">
          <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-accent-50 text-accent-700">
            <Telescope className="w-[18px] h-[18px]" />
          </span>
          <div>
            <h3 className="font-serif text-lg font-bold text-ink-900">Seeking a Fall 2027 Ph.D. position</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{v.seeking}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
