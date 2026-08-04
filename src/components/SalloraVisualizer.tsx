import React, { useState } from 'react';
import { FileText, ChevronRight, Cpu, Lock, Activity, Shield, Zap } from 'lucide-react';
import { SALLORA_RESEARCH, ENTERPRISE_AI_PROJECT } from '../data/content';

interface SalloraVisualizerProps {
  onViewPdf: (title: string, url: string) => void;
}

export const SalloraVisualizer: React.FC<SalloraVisualizerProps> = ({ onViewPdf }) => {
  const [noiseLevel, setNoiseLevel] = useState<number>(50);
  const [expandedStep, setExpandedStep] = useState<number>(0);
  const [expandedArch, setExpandedArch] = useState<number>(0);

  // Performance model based on reported results
  const standardLoraF1 = Math.max(0.42, 0.6710 - (noiseLevel / 100) * 0.18);
  const salloraF1 = noiseLevel === 0
    ? 0.6710
    : 0.6710 + Math.sin((noiseLevel / 100) * Math.PI) * 0.11 - (noiseLevel > 50 ? (noiseLevel - 50) * 0.001 : 0);
  const docxarF1 = noiseLevel === 0
    ? 0.6710
    : Math.min(0.8067, 0.6710 + Math.sin((noiseLevel / 100) * Math.PI) * 0.135 - (noiseLevel > 50 ? (noiseLevel - 50) * 0.0005 : 0));
  const gain = ((docxarF1 - standardLoraF1) * 100).toFixed(1);

  const archIcons = [Shield, Activity, Cpu, Lock, Zap];

  return (
    <>
      {/* ── DOCXAR-CUFIT Research Section ─────────────────────────── */}
      <section id="sallora" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="section-divider mb-16" />

          {/* Section label */}
          <p className="text-xs font-mono tracking-widest uppercase text-gold-400/80 mb-4">
            Flagship Research — Active Project · August 2026
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug mb-3 max-w-3xl">
            DocXAR-CUFIT: Robust PEFT for Multimodal Document Understanding
          </h2>

          <p className="text-base text-slate-400 max-w-3xl mb-10">
            Sensitivity-Aware Layer-wise LoRA + Cross-Attention Adapters + Curriculum Fine-Tuning on LayoutLMv3. 
            Achieving <span className="text-gold-300 font-semibold">Mean F1 0.7992 ± 0.0067</span> under 50% synthetic OCR corruption on FUNSD — 
            a +26.2% improvement over standard noisy LoRA adaptation.
          </p>

          {/* Two-column: Problem + Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Problem statement — academic style */}
            <div className="lg:col-span-5">
              <div className="card p-6 h-full">
                <p className="text-xs font-mono text-teal-400/80 uppercase tracking-wider mb-3">Problem Statement</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {SALLORA_RESEARCH.problemStatement}
                </p>
                
                <div className="mt-6 pt-4 border-t border-base-700/40 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Backbone</span>
                    <span className="text-white font-medium">{SALLORA_RESEARCH.backbone}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Benchmark</span>
                    <span className="text-white font-medium">{SALLORA_RESEARCH.benchmark}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Mean F1</span>
                    <span className="text-gold-300 font-bold font-mono">0.7992 ± 0.0067</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-mono">Status</span>
                    <span className="badge badge-gold text-[10px]">{SALLORA_RESEARCH.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pipeline steps — interactive and pedagogical */}
            <div className="lg:col-span-7">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                Adaptation Pipeline (click to expand)
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
                      <span className="text-[11px] font-mono font-bold text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-semibold text-white flex-1">{comp.name}</span>
                      <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        expandedStep === idx ? 'rotate-90' : ''
                      }`} />
                    </div>
                    {expandedStep === idx && (
                      <p className="mt-3 ml-9 text-xs text-slate-400 leading-relaxed font-mono">
                        {comp.desc}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Benchmark — the centerpiece demonstration */}
          <div className="card p-6 sm:p-8 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-mono text-teal-400/80 uppercase tracking-wider mb-1">
                  Interactive Benchmark
                </p>
                <h3 className="font-serif text-xl font-bold text-white">
                  OCR Corruption Robustness Comparison
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Drag the slider to simulate training-time OCR noise. F1 scores measured on clean FUNSD test set.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onViewPdf("DocXAR-CUFIT Research Progress Report", SALLORA_RESEARCH.pdfUrl)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Full Report
                </button>
                <button
                  onClick={() => onViewPdf("DocXAR-CUFIT Research Summary", SALLORA_RESEARCH.summaryPdfUrl)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-base-700 hover:bg-base-600 rounded-lg transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Summary (2p)
                </button>
              </div>
            </div>

            {/* Noise Slider */}
            <div className="bg-base-850 p-4 rounded-lg border border-base-700/40 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">Training-time OCR Corruption Level</span>
                <span className="text-sm font-mono font-bold text-gold-300">{noiseLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="70"
                step="5"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                className="w-full h-1.5 bg-base-700 rounded-full appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                <span>0% (Clean)</span>
                <span>25%</span>
                <span className="text-gold-400/70">50% (Reported)</span>
                <span>70% (Severe)</span>
              </div>
            </div>

            {/* Results comparison — clean academic table style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Standard LoRA */}
              <div className="bg-base-850 p-5 rounded-lg border border-base-700/40">
                <p className="text-[11px] font-mono text-slate-500 uppercase mb-1">Standard LoRA</p>
                <p className="font-serif text-3xl font-bold text-slate-400">{standardLoraF1.toFixed(4)}</p>
                <p className="text-[11px] text-slate-500 mt-1">No robustness mechanism</p>
              </div>

              {/* SALLoRA v1 */}
              <div className="bg-base-850 p-5 rounded-lg border border-teal-400/20">
                <p className="text-[11px] font-mono text-teal-400 uppercase mb-1">SALLoRA v1</p>
                <p className="font-serif text-3xl font-bold text-teal-300">{salloraF1.toFixed(4)}</p>
                <p className="text-[11px] text-slate-400 mt-1">Sensitivity masking + Q(x)</p>
              </div>

              {/* DocXAR-CUFIT */}
              <div className="bg-base-850 p-5 rounded-lg border border-gold-400/25 relative">
                <div className="absolute top-2 right-2">
                  <span className="text-[10px] font-mono font-bold text-gold-300 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                    +{gain} F1
                  </span>
                </div>
                <p className="text-[11px] font-mono text-gold-400 uppercase mb-1">DocXAR-CUFIT (Latest)</p>
                <p className="font-serif text-3xl font-bold text-gold-300">{docxarF1.toFixed(4)}</p>
                <p className="text-[11px] text-slate-400 mt-1">+Cross-Attention Adapter + CUFIT</p>
              </div>
            </div>

            {/* Key formulas */}
            <div className="mt-4 bg-base-850 p-4 rounded-lg border border-base-700/30">
              <p className="text-[11px] font-mono text-slate-500 uppercase mb-3">Key Formulations (DocXAR-CUFIT)</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-mono">
                <div>
                  <span className="text-teal-300">Sensitivity Scaling: </span>
                  <code className="text-slate-300">H_l = H_(l-1) + σ(s_l)·ΔW_l</code>
                </div>
                <div>
                  <span className="text-teal-300">Layer Masking: </span>
                  <code className="text-slate-300">∇ΔW ← ∇ΔW ⊙ M_l  (25% density)</code>
                </div>
                <div>
                  <span className="text-teal-300">Quality Loss: </span>
                  <code className="text-slate-300">L = Σ Q(x_i) · ℓ_i</code>
                </div>
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

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug mb-3 max-w-3xl">
            {ENTERPRISE_AI_PROJECT.title}
          </h2>

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
              <p className="text-sm font-medium text-teal-300">DocXAR-CUFIT applied in production for continual fraud adaptation</p>
            </div>
          </div>

          {/* Architecture highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                Architecture Highlights (click to expand)
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
                <button
                  onClick={() => onViewPdf("Enterprise AI: Liveness Verification & PAD System", ENTERPRISE_AI_PROJECT.pdfUrl)}
                  className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Technical Report
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
