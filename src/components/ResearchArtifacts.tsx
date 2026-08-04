import React from 'react';
import { Download, FileText, Shield, Beaker } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

interface ResearchArtifactsProps {
  onViewPdf: (title: string, url: string) => void;
}

const artifacts = [
  {
    icon: Beaker,
    iconColor: "text-gold-400",
    iconBg: "bg-gold-400/10",
    badge: "1 Page",
    badgeColor: "text-gold-400 bg-gold-400/10 border-gold-400/20",
    title: "Research Interest Summary",
    description: "5-year doctoral vision and primary research thrusts — robust PEFT, multimodal foundation model adaptation, and distributed learning. Written for direct alignment with target faculty research agendas.",
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_ResearchSummary.pdf"),
    fileName: "MD_Rafi_Imam_ResearchSummary.pdf",
    accent: "border-gold-400/20 hover:border-gold-400/40",
  },
  {
    icon: FileText,
    iconColor: "text-teal-400",
    iconBg: "bg-teal-400/10",
    badge: "2 Pages",
    badgeColor: "text-teal-400 bg-teal-400/10 border-teal-400/20",
    title: "DocXAR-CUFIT Progress Report",
    description: "Detailed algorithmic summary of Layer-Wise Sensitivity Masking, Cross-Attention Adapters, and Curriculum Fine-Tuning. Multi-seed benchmark: Mean F1 0.7992 ± 0.0067 on FUNSD under 50% OCR corruption.",
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_DocXAR_CUFIT_Research_Summary.pdf"),
    fileName: "MD_Rafi_Imam_DocXAR_CUFIT_Research_Summary.pdf",
    accent: "border-teal-400/20 hover:border-teal-400/40",
  },
  {
    icon: Shield,
    iconColor: "text-slate-300",
    iconBg: "bg-slate-700/60",
    badge: "2 Pages",
    badgeColor: "text-slate-400 bg-base-800 border-base-600",
    title: "Enterprise AI: Liveness & PAD System",
    description: "Production-grade systems architecture — Swin-B Transformer, ArcFace identity verification, physics-informed screen replay detection, and decoupled async GPU inference. 5.0 s → 800 ms end-to-end latency.",
    pdfUrl: assetUrl("./docs/Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf"),
    fileName: "Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf",
    accent: "border-base-700/40 hover:border-slate-500/40",
  },
];

export const ResearchArtifacts: React.FC<ResearchArtifactsProps> = ({ onViewPdf }) => {
  return (
    <section id="artifacts" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-12" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-teal-400/80 mb-2">
              Research Portfolios & Technical Artifacts
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Key Documents for Faculty Review
            </h2>
            <p className="text-sm text-slate-400 mt-1.5 max-w-xl">
              Concise, high-fidelity research summaries and engineering profiles — written for professors evaluating doctoral candidates.
            </p>
          </div>
          <a
            href={assetUrl("./docs/MD_RAFI_IMAM_CV.pdf")}
            download
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
          >
            <Download className="w-3.5 h-3.5" />
            Download Full CV
          </a>
        </div>

        {/* 3-column artifact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {artifacts.map((art, i) => {
            const Icon = art.icon;
            return (
              <div
                key={i}
                className={`card p-6 flex flex-col justify-between border transition-all duration-300 ${art.accent}`}
              >
                <div>
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-2.5 rounded-lg ${art.iconBg}`}>
                      <Icon className={`w-5 h-5 ${art.iconColor}`} />
                    </div>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${art.badgeColor}`}>
                      {art.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{art.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{art.description}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-6 pt-4 border-t border-base-700/40">
                  <button
                    onClick={() => onViewPdf(art.title, art.pdfUrl)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-300 bg-base-800 hover:bg-base-750 rounded-lg transition"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Preview
                  </button>
                  <a
                    href={art.pdfUrl}
                    download={art.fileName}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/20 rounded-lg transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
