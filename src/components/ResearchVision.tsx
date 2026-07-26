import React from 'react';
import { PERSONAL_INFO } from '../data/content';

export const ResearchVision: React.FC = () => {
  const directions = [
    {
      area: "Parameter-Efficient Fine-Tuning",
      detail: "Layer-wise LoRA, dynamic rank allocation, and gradient sensitivity masking for adapting frozen foundation models with minimal trainable parameters.",
      relevance: "Core contribution: SALLoRA framework"
    },
    {
      area: "Robustness under Structured Input Corruption",
      detail: "Moving beyond noisy-label assumptions to structured noisy-input paradigms — OCR degradation, missing modalities, and sensor noise during adaptation.",
      relevance: "Novel problem formulation"
    },
    {
      area: "Multimodal Vision-Language Models",
      detail: "Adapting LayoutLM, CLIP, and LLaVA-style backbones for document understanding, visual reasoning, and cross-modal alignment in uncurated data.",
      relevance: "Direct application to document AI"
    },
    {
      area: "Efficient & Deployable AI Systems",
      detail: "Low-rank adaptation pipelines, memory-efficient training, and hardware-aware inference. Bridging fundamental research with production deployment.",
      relevance: "Industry + research bridge"
    },
  ];

  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — research narrative (what professors read) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono tracking-widest uppercase text-teal-400/80">
              Research Direction & Doctoral Vision
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
              Building Robust, Efficient Adaptation for{' '}
              <span className="text-gold-300">Multimodal Foundation Models</span>
            </h2>

            <div className="space-y-4 text-[15px] text-slate-300/90 leading-relaxed">
              <p>
                Large multimodal models reason jointly over text, layout, and vision — but real-world deployment surfaces a fundamental challenge: <em className="text-white not-italic font-medium">structured input corruption</em>. OCR systems introduce character-level noise. Scanned layouts lose spatial fidelity. Vision streams degrade under variable capture conditions.
              </p>
              <p>
                Classical robust learning assumes clean inputs with corrupted labels. My research inverts this paradigm: I study how to adapt frozen foundation models when the <em className="text-white not-italic font-medium">multimodal inputs themselves</em> are structurally degraded — without requiring clean reference data at training time.
              </p>
              <p>
                This has led to <span className="text-gold-300 font-semibold">SALLoRA</span> (Sensitivity-Aware Layer-wise LoRA), a parameter-efficient fine-tuning framework that combines gradient sensitivity masking, learnable layer scaling, and decoupled quality estimation to maintain adaptation quality under up to 50% structured OCR corruption.
              </p>
            </div>

            {/* Research interests as clean list */}
            <div className="pt-4">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                Core Research Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.researchInterests.map((interest, i) => (
                  <span key={i} className="badge badge-subtle text-[11px]">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — structured research areas */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-2">
              Doctoral Research Areas
            </p>
            {directions.map((d, i) => (
              <div key={i} className="card p-5 card-hover">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-bold text-white leading-tight">{d.area}</h3>
                  <span className="badge badge-gold text-[10px] shrink-0">{d.relevance}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
