import React, { useState } from 'react';
import { FileText, ChevronRight, Github, ExternalLink, Cpu, Lock, Activity, Shield, Zap } from 'lucide-react';
import { SALLORA_RESEARCH, ENTERPRISE_AI_PROJECT } from '../data/content';

interface SalloraVisualizerProps {
  onViewPdf: (title: string, url: string) => void;
}

export const SalloraVisualizer: React.FC<SalloraVisualizerProps> = ({ onViewPdf }) => {
  const [noiseLevel, setNoiseLevel] = useState<50 | 70 | 80>(50);
  const [expandedStep, setExpandedStep] = useState<number>(0);
  const [expandedArch, setExpandedArch] = useState<number>(0);
  const [showAblation, setShowAblation] = useState<boolean>(false);

  // Actual reported results from v2 report
  const results = {
    50: { standard: { mean: 0.7738, std: 0.0042 }, sallora: { mean: 0.7996, std: 0.0031 }, p: 0.008, delta: 0.0258 },
    70: { standard: { mean: 0.7479, std: 0.0062 }, sallora: { mean: 0.7935, std: 0.0121 }, p: 0.015, delta: 0.0456 },
    80: { standard: { mean: 0.7292, std: 0.0106 }, sallora: { mean: 0.7786, std: 0.0064 }, p: 0.011, delta: 0.0494 },
  };

  const current = results[noiseLevel];
  const gain = (current.delta * 100).toFixed(2);

  const archIcons = [Shield, Activity, Cpu, Lock, Zap];

  return (
    <>
      {/* ── SALLORA Research Section ─────────────────────────── */}
      <section id="sallora" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="section-divider mb-16" />

          {/* Section label */}
          <p className="text-xs font-mono tracking-widest uppercase text-gold-400/80 mb-4">
            Independent Research — Active Project · August 2026
          </p>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug max-w-3xl">
              SALLoRA: Sensitivity-Aware Layer-wise LoRA
            </h2>
            {/* GitHub link */}
            <a
              href={SALLORA_RESEARCH.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 bg-base-800 hover:bg-base-750 border border-base-700/60 hover:border-gold-400/30 rounded-lg transition"
            >
              <Github className="w-3.5 h-3.5" />
              SALLoRA Notebook
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          <p className="text-base text-slate-400 max-w-3xl mb-10">
            Robust PEFT on LayoutLMv3 under OCR corruption — combining linear probing warm-up, layer-wise learnable scaling, token-level quality weighting, and soft sensitivity masking. Evaluated on FUNSD across 50%–80% OCR corruption levels with full statistical validation.
          </p>

          {/* Two-column: Problem + Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

            {/* Problem statement */}
            <div className="lg:col-span-5">
              <div className="card p-6 h-full">
                <p className="text-xs font-mono text-teal-400/80 uppercase tracking-wider mb-3">Problem Statement</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {SALLORA_RESEARCH.problemStatement}
                </p>

                <div className="mt-6 pt-4 border-t border-base-700/40 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Backbone</span>
                    <span className="text-white font-medium text-right max-w-[55%]">{SALLORA_RESEARCH.backbone}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Benchmark</span>
                    <span className="text-white font-medium">FUNSD</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Seeds</span>
                    <span className="text-white font-mono">42, 123, 2024</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Status</span>
                    <span className="badge badge-gold text-[10px]">{SALLORA_RESEARCH.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pipeline steps */}
            <div className="lg:col-span-7">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                SALLoRA Components (click to expand)
              </p>
              <div className="space-y-2">
                {SALLORA_RESEARCH.components.map((comp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
                    className={`w-full text-left card p-4 transition-all duration-300 ${
                      expandedStep === idx
                        ? 'border-gold-400/30 bg-base-750/90'
                        : 'card-hover'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                        idx === 4
                          ? 'text-slate-400 bg-slate-700/40'
                          : 'text-gold-400 bg-gold-400/10'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-sm font-semibold flex-1 ${idx === 4 ? 'text-slate-400' : 'text-white'}`}>
                        {comp.name}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        expandedStep === idx ? 'rotate-90' : ''
                      }`} />
                    </div>
                    {expandedStep === idx && (
                      <p className="mt-3 ml-9 text-xs text-slate-400 leading-relaxed">
                        {comp.desc}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Benchmark — corruption level selector */}
          <div className="card p-6 sm:p-8 mb-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-mono text-teal-400/80 uppercase tracking-wider mb-1">
                  Benchmark Results (v2 Report — Rerun from Scratch)
                </p>
                <h3 className="font-serif text-xl font-bold text-white">
                  SALLoRA vs Standard LoRA — FUNSD Weighted F1
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  All values: mean ± std over 3 seeds [42, 123, 2024]. Paired t-tests confirm statistical significance.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onViewPdf("SALLoRA Research Progress Report v2", SALLORA_RESEARCH.pdfUrl)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Full Report (v2)
                </button>
                <a
                  href={SALLORA_RESEARCH.notebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-base-700 hover:bg-base-600 rounded-lg transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
              </div>
            </div>

            {/* Corruption level selector */}
            <div className="bg-base-850 p-4 rounded-lg border border-base-700/40 mb-6">
              <p className="text-xs font-mono text-slate-400 mb-3">Select OCR Corruption Level (training-time noise)</p>
              <div className="flex gap-2">
                {([50, 70, 80] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setNoiseLevel(level)}
                    className={`flex-1 py-2 rounded-lg text-sm font-mono font-bold transition-all ${
                      noiseLevel === level
                        ? 'bg-gold-400 text-base-900'
                        : 'bg-base-800 text-slate-400 hover:text-white hover:bg-base-750 border border-base-700/40'
                    }`}
                  >
                    {level}%
                  </button>
                ))}
              </div>
            </div>

            {/* Results comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {/* Standard LoRA */}
              <div className="bg-base-850 p-5 rounded-lg border border-base-700/40">
                <p className="text-[11px] font-mono text-slate-500 uppercase mb-1">Standard LoRA</p>
                <p className="font-serif text-3xl font-bold text-slate-400">
                  {current.standard.mean.toFixed(4)}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 font-mono">±{current.standard.std.toFixed(4)}</p>
                <p className="text-[10px] text-slate-600 mt-1">No robustness mechanism</p>
              </div>

              {/* SALLoRA */}
              <div className="bg-base-850 p-5 rounded-lg border border-gold-400/25 relative">
                <div className="absolute top-2 right-2">
                  <span className="text-[10px] font-mono font-bold text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded border border-teal-400/20">
                    +{gain} F1
                  </span>
                </div>
                <p className="text-[11px] font-mono text-gold-400 uppercase mb-1">SALLoRA (Ours)</p>
                <p className="font-serif text-3xl font-bold text-gold-300">
                  {current.sallora.mean.toFixed(4)}
                </p>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">±{current.sallora.std.toFixed(4)}</p>
                <p className="text-[10px] text-slate-500 mt-1">4-component framework</p>
              </div>

              {/* Stats */}
              <div className="bg-base-850 p-5 rounded-lg border border-base-700/40 space-y-3">
                <p className="text-[11px] font-mono text-slate-500 uppercase">Statistical Significance</p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">p-value</span>
                    <span className="text-teal-300 font-bold">{current.p.toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Significant (α=0.05)?</span>
                    <span className="text-teal-300 font-bold">Yes ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Test</span>
                    <span className="text-slate-300">Paired t-test</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Seeds</span>
                    <span className="text-slate-300">[42, 123, 2024]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ablation Study toggle */}
            <button
              onClick={() => setShowAblation(!showAblation)}
              className="w-full flex items-center justify-between text-xs font-mono text-slate-400 hover:text-white bg-base-850 hover:bg-base-800 border border-base-700/30 rounded-lg px-4 py-2.5 transition"
            >
              <span>Ablation Study — 50% Corruption Level</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${showAblation ? 'rotate-90' : ''}`} />
            </button>

            {showAblation && (
              <div className="mt-3 bg-base-850 rounded-lg border border-base-700/30 overflow-hidden">
                <table className="w-full text-xs font-mono">
                  <thead>
                    <tr className="border-b border-base-700/30">
                      <th className="text-left px-4 py-2.5 text-slate-500 uppercase text-[10px] tracking-wider">Configuration</th>
                      <th className="text-right px-4 py-2.5 text-slate-500 uppercase text-[10px] tracking-wider">F1 (mean±std)</th>
                      <th className="text-right px-4 py-2.5 text-slate-500 uppercase text-[10px] tracking-wider">Δ F1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SALLORA_RESEARCH.ablation.map((row, i) => (
                      <tr key={i} className={`border-b border-base-700/20 ${i === SALLORA_RESEARCH.ablation.length - 1 ? 'bg-gold-400/[0.04]' : ''}`}>
                        <td className="px-4 py-2.5 text-slate-300">{row.config}</td>
                        <td className="px-4 py-2.5 text-right text-white font-bold">
                          {row.f1.toFixed(4)} <span className="text-slate-500 font-normal">±{row.std.toFixed(4)}</span>
                        </td>
                        <td className={`px-4 py-2.5 text-right font-bold ${row.delta === '—' ? 'text-slate-500' : 'text-teal-300'}`}>
                          {row.delta}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Key formulas */}
          <div className="bg-base-850 rounded-lg p-4 border border-base-700/30 mb-4">
            <p className="text-[11px] font-mono text-slate-500 uppercase mb-3">Key Formulations</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-mono">
              <div>
                <span className="text-teal-300">Layer Scaling: </span>
                <code className="text-slate-300">H_l = H_(l-1) + r_l · ΔW_l(H_(l-1))</code>
              </div>
              <div>
                <span className="text-teal-300">Soft Masking: </span>
                <code className="text-slate-300">∇θ ← ∇θ⊙M + ∇θ⊙(1-M)·0.15</code>
              </div>
              <div>
                <span className="text-teal-300">Quality Loss: </span>
                <code className="text-slate-300">L = Σ ℓᵢ·q_i / Σ q_i</code>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── ENTERPRISE AI SYSTEM ──────────────────────────────────── */}
      <section id="enterprise-ai" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="section-divider mb-16" />

          <p className="text-xs font-mono tracking-widest uppercase text-teal-400/80 mb-4">
            Production AI Engineering — Industry Deployment
          </p>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug max-w-3xl">
              {ENTERPRISE_AI_PROJECT.title}
            </h2>
            <a
              href={ENTERPRISE_AI_PROJECT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 bg-base-800 hover:bg-base-750 border border-base-700/60 hover:border-teal-400/30 rounded-lg transition"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub Repo
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          <p className="text-base text-slate-400 max-w-3xl mb-3">
            {ENTERPRISE_AI_PROJECT.subtitle}
          </p>
          <p className="text-sm text-slate-500 max-w-3xl mb-8">
            {ENTERPRISE_AI_PROJECT.context}
          </p>

          {/* Key metric callout */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-gold-400/10 border border-gold-400/25 rounded-xl px-6 py-4">
              <p className="text-[11px] font-mono text-gold-400/70 uppercase tracking-wider mb-1">Key Metric</p>
              <p className="text-lg font-bold text-gold-300">{ENTERPRISE_AI_PROJECT.keyMetric}</p>
            </div>
            <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl px-6 py-4">
              <p className="text-[11px] font-mono text-teal-400/70 uppercase tracking-wider mb-1">Research Link</p>
              <p className="text-sm font-medium text-teal-300">SALLoRA online micro-batch updates deployed in production for continual fraud-pattern adaptation</p>
            </div>
          </div>

          {/* Architecture highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                System Architecture (click to expand)
              </p>
              <div className="space-y-2">
                {ENTERPRISE_AI_PROJECT.architectureHighlights.map((arch, idx) => {
                  const Icon = archIcons[idx] || Shield;
                  return (
                    <button
                      key={idx}
                      onClick={() => setExpandedArch(expandedArch === idx ? -1 : idx)}
                      className={`w-full text-left card p-4 transition-all duration-300 ${
                        expandedArch === idx ? 'border-teal-400/30 bg-base-750/90' : 'card-hover'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-teal-400/70 shrink-0" />
                        <span className="text-sm font-semibold text-white flex-1">{arch.name}</span>
                        <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                          expandedArch === idx ? 'rotate-90' : ''
                        }`} />
                      </div>
                      {expandedArch === idx && (
                        <p className="mt-3 ml-7 text-xs text-slate-400 leading-relaxed">
                          {arch.detail}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tech stack + relevance */}
            <div className="space-y-4">
              <div className="card p-6">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Technology Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {ENTERPRISE_AI_PROJECT.techStack.map((t, i) => (
                    <span key={i} className="badge badge-subtle text-[10px]">{t}</span>
                  ))}
                </div>
              </div>

              <div className="card p-6 border-gold-400/15">
                <p className="text-xs font-mono text-gold-400/70 uppercase tracking-wider mb-2">Why This Matters for PhD</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {ENTERPRISE_AI_PROJECT.researchRelevance}
                </p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => onViewPdf("Enterprise AI: Liveness Verification & PAD System", ENTERPRISE_AI_PROJECT.pdfUrl)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Technical Report
                  </button>
                  <a
                    href={ENTERPRISE_AI_PROJECT.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-base-700 hover:bg-base-600 rounded-lg transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
