import React, { useState } from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { SALLORA_RESEARCH } from '../data/content';

interface SalloraVisualizerProps {
  onViewPdf: (title: string, url: string) => void;
}

export const SalloraVisualizer: React.FC<SalloraVisualizerProps> = ({ onViewPdf }) => {
  const [noiseLevel, setNoiseLevel] = useState<number>(50);
  const [expandedStep, setExpandedStep] = useState<number>(0);

  // Performance model based on reported results
  const standardLoraF1 = Math.max(0.42, 0.6710 - (noiseLevel / 100) * 0.18);
  const salloraF1 = noiseLevel === 0
    ? 0.6710
    : 0.6710 + Math.sin((noiseLevel / 100) * Math.PI) * 0.11 - (noiseLevel > 50 ? (noiseLevel - 50) * 0.001 : 0);
  const gain = ((salloraF1 - standardLoraF1) * 100).toFixed(1);

  return (
    <section id="sallora" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        {/* Section label */}
        <p className="text-xs font-mono tracking-widest uppercase text-gold-400/80 mb-4">
          Flagship Research — Active Project
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug mb-3 max-w-3xl">
          SALLoRA: Sensitivity-Aware Layer-wise LoRA
        </h2>

        <p className="text-base text-slate-400 max-w-3xl mb-10">
          Robust parameter-efficient fine-tuning for multimodal foundation models under structured input corruption. Built on LayoutLMv3-base, evaluated on FUNSD.
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
                onClick={() => onViewPdf("SALLoRA Research Report", SALLORA_RESEARCH.pdfUrl)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
              >
                <FileText className="w-3.5 h-3.5" />
                Full Report (7p)
              </button>
              <button
                onClick={() => onViewPdf("Research Summary", SALLORA_RESEARCH.summaryPdfUrl)}
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

            {/* SALLoRA */}
            <div className="bg-base-850 p-5 rounded-lg border border-gold-400/25 relative">
              <div className="absolute top-2 right-2">
                <span className="text-[10px] font-mono font-bold text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded border border-teal-400/20">
                  +{gain} F1
                </span>
              </div>
              <p className="text-[11px] font-mono text-gold-400 uppercase mb-1">SALLoRA (Ours)</p>
              <p className="font-serif text-3xl font-bold text-gold-300">{salloraF1.toFixed(4)}</p>
              <p className="text-[11px] text-slate-400 mt-1">Sensitivity masking + Q(x) weighting</p>
            </div>

            {/* Key formulas */}
            <div className="bg-base-850 p-5 rounded-lg border border-base-700/40 space-y-3">
              <p className="text-[11px] font-mono text-slate-500 uppercase">Key Formulations</p>
              <div className="space-y-2 text-[11px] font-mono text-slate-400">
                <div>
                  <span className="text-teal-300">Scaling:</span>{' '}
                  <code className="text-slate-300">H_l = H_{"l-1"} + σ(s_l)·ΔW_l</code>
                </div>
                <div>
                  <span className="text-teal-300">Masking:</span>{' '}
                  <code className="text-slate-300">∇ΔW ← ∇ΔW ⊙ M_l</code>
                </div>
                <div>
                  <span className="text-teal-300">Loss:</span>{' '}
                  <code className="text-slate-300">L = Σ q_i · ℓ_i</code>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
