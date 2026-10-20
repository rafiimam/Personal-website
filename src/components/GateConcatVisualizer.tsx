import React, { useState } from 'react';
import { FLAGSHIP_RESEARCH } from '../data/content';

// Interactive chart of the study's headline results: noisy-test macro-F1
// (mean of 5 seeds) for LoRA, the constant-gate capacity control, and
// GateConcat, per corruption condition. Bars are scaled to the 0.70–0.77
// window so differences are visible; exact values are printed on each bar.
const MIN = 0.70;
const MAX = 0.77;

const METHODS = [
  { key: 'lora', label: 'Standard LoRA', color: 'bg-ink-300' },
  { key: 'frozen', label: 'Constant gate (g ≡ 0.5) — capacity control', color: 'bg-brass-500' },
  { key: 'gateconcat', label: 'GateConcat (learned gate)', color: 'bg-accent-600' },
] as const;

type MethodKey = typeof METHODS[number]['key'];

export const GateConcatVisualizer: React.FC = () => {
  const results = FLAGSHIP_RESEARCH.results;
  const [activeId, setActiveId] = useState(results[1].id); // OCR 70% by default
  const active = results.find((x) => x.id === activeId) ?? results[0];

  const width = (v: number) => `${Math.max(2, ((v - MIN) / (MAX - MIN)) * 100)}%`;

  return (
    <section id="results" className="pb-20 sm:pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="eyebrow">Results — noisy-test macro-F1</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink-900">
                What the controlled comparison actually shows
              </h3>
            </div>
            <span className="badge badge-accent">5 seeds · paired t-tests</span>
          </div>

          {/* Condition tabs */}
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Corruption condition">
            {results.map((r) => (
              <button
                key={r.id}
                role="tab"
                aria-selected={r.id === activeId}
                onClick={() => setActiveId(r.id)}
                className={`px-3.5 py-2 rounded-lg text-[13px] font-medium border transition-all ${
                  r.id === activeId
                    ? 'bg-ink-900 text-white border-ink-900'
                    : 'bg-white text-slate-600 border-ink-100 hover:border-ink-300 hover:text-ink-900'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Bars */}
          <div className="mt-8 space-y-5">
            {METHODS.map((m) => {
              const v = active[m.key as MethodKey];
              if (v === null || v === undefined) {
                return (
                  <div key={m.key} className="grid grid-cols-[150px_1fr_64px] sm:grid-cols-[240px_1fr_64px] items-center gap-3">
                    <div className="text-[13px] font-medium text-slate-400">{m.label}</div>
                    <div className="text-xs text-slate-300 italic">not run for this condition</div>
                    <div />
                  </div>
                );
              }
              return (
                <div key={m.key} className="grid grid-cols-[150px_1fr_64px] sm:grid-cols-[240px_1fr_64px] items-center gap-3">
                  <div className="text-[13px] font-medium text-slate-600">{m.label}</div>
                  <div className="h-7 rounded-md bg-paper-200/80 overflow-hidden">
                    <div
                      className={`h-full ${m.color} rounded-md transition-all duration-500`}
                      style={{ width: width(v) }}
                    />
                  </div>
                  <div className="font-mono text-sm font-semibold text-ink-900 text-right">{v.toFixed(3)}</div>
                </div>
              );
            })}
          </div>
          <p className="mt-3 font-mono text-[11px] text-slate-400">
            Axis truncated to 0.70–0.77 for readability; values are exact 5-seed means.
          </p>

          {/* Verdict */}
          <div className="mt-6 rounded-xl bg-paper-100 border border-ink-100 px-5 py-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-serif text-lg font-bold text-ink-900">
              GateConcat − LoRA: {active.delta}
              <span className="ml-2 font-mono text-[13px] font-medium text-accent-700">({active.pValue})</span>
            </span>
            <span className="text-sm text-slate-600">{active.note}</span>
          </div>

          <p className="mt-5 text-[13px] leading-relaxed text-slate-500">
            Under the same protocol, the earlier hand-crafted method (SALLoRA) scored below LoRA in every
            condition — worst case −3.09 pp under 70% OCR confusion. Full per-seed results, all 100+
            configurations, and the analysis code are in the{' '}
            <a href={FLAGSHIP_RESEARCH.repoUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-700 underline decoration-accent-100 underline-offset-2 hover:decoration-accent-600">
              gateconcat-peft repository
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};
