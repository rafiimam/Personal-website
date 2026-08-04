import React, { useState } from 'react';
import { Copy, Check, FileText, BookOpen } from 'lucide-react';
import { PUBLICATIONS } from '../data/content';

interface PublicationsProps {
  onViewPdf: (title: string, url: string) => void;
}

// Layman summaries per paper — professor-targeted "what did you actually do?"
const LAYMAN_SUMMARIES: Record<string, string> = {
  "docxar-2026": "In plain terms: standard LoRA fine-tuning doesn't know that some of its inputs are garbage. If an OCR engine misreads text, the model still tries to learn from it — corrupting its understanding. I built DocXAR-CUFIT to give the model a 'quality sensor': it identifies which parts of the input are corrupted, down-weights them during training, and uses a cross-attention bridge to route question context to the cleanest document regions. The result is a model that is robust to real-world document noise without needing clean OCR as a prerequisite.",
  "iccit-suicidal-nlp": "We wanted to build an AI that could flag Reddit posts showing signs of suicidal ideation before a crisis escalates. The challenge: there was no dataset. I scraped and curated original Reddit data from the SuicideWatch and depression subreddits using the Pushshift API, then trained LSTM (for sequence patterns) and Random Forest (for TF-IDF term importance) classifiers side-by-side. Getting to 93% accuracy on a dataset I built from scratch — while ensuring this isn't a false-negative system — was the core engineering challenge.",
  "iccit-federated-cancer": "Hospitals can't share patient CT scans across institutions for privacy reasons, but an AI trained on just one hospital's data is too narrow. Federated learning solves this: each hospital trains locally, then only sends model weight updates (not patient data) to a central aggregator. I engineered the client-side InceptionV3 feature extractors and the federated aggregation protocol, validating that the global model converged even when each hospital's data distribution was different (non-IID) — exactly the real-world condition federated systems face.",
  "iccit-yolov8-driving": "Self-driving cars must detect pedestrians, vehicles, and obstacles in real-time — even in the rain or at night. I contributed to adapting YOLOv8 (the state-of-the-art detection architecture) specifically for adverse conditions and benchmarked its inference latency on embedded hardware. The key finding: there's a clear accuracy-latency trade-off that depends heavily on anchor configuration and augmentation strategy in low-light regimes.",
  "iccit-pcos-ml": "Polycystic Ovary Syndrome (PCOS) is underdiagnosed in emerging healthcare systems because standard diagnosis requires specialist equipment. I applied a comparative ML framework (XGBoost, Random Forest, SVM) to classify PCOS from routine blood test results and hormonal markers. The contribution wasn't just the classifier — it was the feature importance analysis, which identified which biomarkers matter most, giving clinicians a prioritized diagnostic checklist even without the ML model running.",
};

export const Publications: React.FC<PublicationsProps> = ({ onViewPdf }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedBibtex, setExpandedBibtex] = useState<string | null>(null);
  const [expandedSummary, setExpandedSummary] = useState<string | null>(null);

  const categories = ['All', 'Multimodal PEFT', 'NLP', 'Computer Vision', 'Federated Learning', 'Medical AI'];

  const filtered = activeCategory === 'All'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => p.category === activeCategory);

  const handleCopy = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-teal-400/80 mb-3">
              Peer-Reviewed & Preprint Research
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
              Selected Publications
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              4 IEEE ICCIT 2023 conference papers and active DocXAR-CUFIT multimodal PEFT research. Each entry includes a plain-language summary and individual contribution breakdown.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gold-400 text-base-900 font-bold'
                    : 'bg-base-800 text-slate-400 hover:text-white hover:bg-base-750 border border-base-700/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Publications list — academic paper listing style */}
        <div className="space-y-4">
          {filtered.map((pub) => (
            <article
              key={pub.id}
              className={`card p-6 sm:p-7 transition-all ${
                pub.highlight ? 'border-gold-400/20' : ''
              }`}
            >
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`badge text-[10px] ${
                  pub.role === 'First Author' || pub.role === 'Lead Author'
                    ? 'badge-gold'
                    : 'badge-subtle'
                }`}>
                  {pub.role}
                </span>
                <span className="badge badge-subtle text-[10px]">{pub.category}</span>
                {pub.highlight && (
                  <span className="badge badge-teal text-[10px]">Flagship Project</span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug mb-2">
                {pub.title}
              </h3>

              {/* Authors & venue */}
              <p className="text-xs font-mono text-gold-400/70 mb-1">{pub.authors}</p>
              <p className="text-xs text-slate-500 mb-4">{pub.venue}</p>

              {/* Abstract */}
              <p className="text-sm text-slate-300/90 leading-relaxed mb-4">
                {pub.abstract}
              </p>

              {/* Layman Summary — collapsible */}
              {LAYMAN_SUMMARIES[pub.id] && (
                <div className="mb-4">
                  <button
                    onClick={() => setExpandedSummary(expandedSummary === pub.id ? null : pub.id)}
                    className="flex items-center gap-2 text-[11px] font-mono text-teal-400/80 hover:text-teal-300 transition mb-2"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    {expandedSummary === pub.id ? 'Hide' : 'Show'} Layman Summary
                  </button>
                  {expandedSummary === pub.id && (
                    <div className="bg-teal-400/[0.04] rounded-lg p-4 border border-teal-400/15">
                      <p className="text-[11px] font-mono text-teal-400/60 uppercase tracking-wider mb-2">Plain-Language Explanation</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{LAYMAN_SUMMARIES[pub.id]}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Contributions — what professors care about */}
              <div className="bg-base-850 rounded-lg p-4 border border-base-700/30 mb-4">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                  Individual Contributions
                </p>
                <ul className="space-y-1.5">
                  {pub.contributions.map((c, i) => (
                    <li key={i} className="text-xs text-slate-300 flex gap-2">
                      <span className="text-gold-400/60 mt-0.5">›</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => onViewPdf(pub.title, pub.pdfUrl)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View PDF
                </button>

                <button
                  onClick={() => setExpandedBibtex(expandedBibtex === pub.id ? null : pub.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 bg-base-700/60 hover:bg-base-700 rounded-lg transition"
                >
                  BibTeX
                </button>

                {copiedId === pub.id && (
                  <span className="text-[11px] text-teal-300 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                )}
              </div>

              {/* Expandable BibTeX */}
              {expandedBibtex === pub.id && (
                <div className="mt-4 relative">
                  <pre className="bg-base-950 text-[11px] font-mono text-slate-400 p-4 rounded-lg border border-base-700/40 overflow-x-auto whitespace-pre-wrap">
                    {pub.bibtex}
                  </pre>
                  <button
                    onClick={() => handleCopy(pub.id, pub.bibtex)}
                    className="absolute top-2 right-2 p-1.5 bg-base-800 hover:bg-base-700 text-slate-400 hover:text-white rounded transition"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
