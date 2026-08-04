import React from 'react';
import { ExternalLink } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/content';

export const SystemsEngineering: React.FC = () => {
  const exp = WORK_EXPERIENCE[0];

  const systems = [
    {
      name: "Enterprise eKYC Digital Onboarding",
      stack: ".NET Core · React · Python · FastAPI",
      capabilities: [
        "National ID OCR & biometric face matching via Polygon APIs",
        "Document understanding & address extraction via Google Vision APIs",
        "Real-time AML screening, deduplication, and transaction profiling",
        "WebSocket push notification & Firebase integration"
      ]
    },
    {
      name: "Bancassurance Distributed Workflow Platform",
      stack: "Node.js · Apache Kafka · MongoDB · Netflix Conductor",
      capabilities: [
        "Event-driven microservice architecture with Kafka streaming",
        "Asynchronous workflow orchestration via Netflix Conductor",
        "Fault-tolerant retry with exponential backoff handling",
        "Multi-provider insurance API integrations & settlement engine"
      ]
    }
  ];

  return (
    <section id="industry" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        <p className="text-xs font-mono tracking-widest uppercase text-teal-400/80 mb-4">
          Production Engineering Experience
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug mb-3 max-w-3xl">
          Industrial AI & Distributed Systems
        </h2>

        <p className="text-sm text-slate-400 max-w-2xl mb-10">
          Designing and deploying production AI systems in Linux environments — combining Swin-B Transformers, ArcFace, and physics-informed models with event-driven architectures at enterprise scale. The Face Liveness & PAD system is detailed in the <a href="#enterprise-ai" className="text-gold-300 hover:text-gold-200 transition">Enterprise AI section ↓</a>
        </p>

        {/* Current role card */}
        <div className="card p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-mono text-gold-400/80 mb-1">{exp.period}</p>
              <h3 className="font-serif text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-sm text-slate-400">{exp.company} — {exp.division}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {exp.techStack.map((t, i) => (
                <span key={i} className="badge badge-subtle text-[10px]">{t}</span>
              ))}
            </div>
          </div>

          {/* Key highlights — what shows research engineering ability */}
          <div className="space-y-2">
            {exp.highlights.map((h, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-300/90 leading-relaxed">
                <span className="text-gold-400/50 mt-0.5 shrink-0">›</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Production systems breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((sys, i) => (
            <div key={i} className="card p-6 card-hover">
              <div className="mb-4">
                <h4 className="text-sm font-bold text-white mb-1">{sys.name}</h4>
                <p className="text-[11px] font-mono text-slate-500">{sys.stack}</p>
              </div>

              <div className="space-y-2">
                {sys.capabilities.map((cap, j) => (
                  <div key={j} className="flex gap-2 text-xs text-slate-400">
                    <span className="text-teal-400/50 mt-0.5 shrink-0">•</span>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why this matters callout */}
        <div className="mt-8 bg-base-850 rounded-lg p-5 border border-base-700/30">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
            Why This Matters for Research
          </p>
          <p className="text-sm text-slate-300/90 leading-relaxed">
            This production experience directly informs my research perspective: I understand the real-world noise conditions (OCR degradation, network latency, mobile capture artifacts, OOD physical attacks) that motivate robust adaptation methods. My ability to implement, benchmark, and deploy ML systems end-to-end — including the Face Liveness & PAD system described below — makes me a self-sufficient and immediately productive research contributor.
          </p>
          <a
            href="#enterprise-ai"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gold-300 hover:text-gold-200 transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            See Face Liveness & PAD System details ↓
          </a>
        </div>
      </div>
    </section>
  );
};
