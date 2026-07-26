import React from 'react';
import { FileText } from 'lucide-react';
import { ACADEMIC_CREDENTIALS } from '../data/content';

interface AcademicCredentialsProps {
  onViewPdf: (title: string, url: string) => void;
}

export const AcademicCredentials: React.FC<AcademicCredentialsProps> = ({ onViewPdf }) => {
  const { gre, ielts } = ACADEMIC_CREDENTIALS;

  return (
    <section id="credentials" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        <p className="text-xs font-mono tracking-widest uppercase text-gold-400/80 mb-4">
          Standardized Tests & Academic Record
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug mb-3">
          Academic Credentials
        </h2>

        <p className="text-sm text-slate-400 max-w-2xl mb-10">
          Verified test scores, degree classification, and academic record for graduate admissions evaluation.
        </p>

        {/* Test scores — side by side, clean academic presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* GRE */}
          <div className="card p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[11px] font-mono text-gold-400/80 uppercase tracking-wider mb-1">
                  ETS GRE General Test
                </p>
                <p className="text-xs text-slate-500 font-mono">Tested: {gre.testDate}</p>
              </div>
              <button
                onClick={() => onViewPdf("GRE Score Report", gre.pdfUrl)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/20 rounded-md transition"
              >
                <FileText className="w-3 h-3" />
                Report
              </button>
            </div>

            <div className="space-y-4">
              {/* Quant — the highlight */}
              <div className="bg-base-850 p-4 rounded-lg border border-base-700/30">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm font-medium text-white">Quantitative Reasoning</span>
                  <span className="font-serif text-2xl font-bold text-gold-300">{gre.quantScore}<span className="text-sm text-slate-500">/170</span></span>
                </div>
                <div className="w-full h-1.5 bg-base-700 rounded-full overflow-hidden mb-1.5">
                  <div className="h-full bg-gradient-to-r from-gold-500 to-gold-300 rounded-full" style={{ width: `${(gre.quantScore - 130) * 2.5}%` }} />
                </div>
                <p className="text-[11px] font-mono text-teal-300">{gre.quantPercentile}</p>
              </div>

              {/* Verbal & AWA */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-base-850 p-3 rounded-lg border border-base-700/30">
                  <p className="text-[11px] text-slate-500 mb-0.5">Verbal Reasoning</p>
                  <p className="font-serif text-lg font-bold text-white">{gre.verbalScore}<span className="text-xs text-slate-500">/170</span></p>
                  <p className="text-[10px] text-slate-500 font-mono">{gre.verbalPercentile}</p>
                </div>
                <div className="bg-base-850 p-3 rounded-lg border border-base-700/30">
                  <p className="text-[11px] text-slate-500 mb-0.5">Analytical Writing</p>
                  <p className="font-serif text-lg font-bold text-white">{gre.awaScore}<span className="text-xs text-slate-500">/6.0</span></p>
                  <p className="text-[10px] text-slate-500 font-mono">{gre.awaPercentile}</p>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between pt-2 border-t border-base-700/30 text-sm">
                <span className="text-slate-500">Combined Score</span>
                <span className="font-serif font-bold text-white text-lg">{gre.totalScore}</span>
              </div>
            </div>
          </div>

          {/* IELTS */}
          <div className="card p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[11px] font-mono text-teal-400/80 uppercase tracking-wider mb-1">
                  IELTS Academic
                </p>
                <p className="text-xs text-slate-500 font-mono">Tested: {ielts.testDate} • CEFR {ielts.cefrLevel}</p>
              </div>
              <button
                onClick={() => onViewPdf("IELTS Score Report", ielts.pdfUrl)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-teal-300 bg-teal-400/10 hover:bg-teal-400/20 border border-teal-400/20 rounded-md transition"
              >
                <FileText className="w-3 h-3" />
                Report
              </button>
            </div>

            {/* Overall band */}
            <div className="bg-base-850 p-4 rounded-lg border border-base-700/30 mb-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-white">Overall Band Score</span>
                <span className="font-serif text-2xl font-bold text-teal-300">{ielts.overallBand}</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">CEFR Level {ielts.cefrLevel} — Proficient User</p>
            </div>

            {/* Band breakdown */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Listening", score: ielts.listening },
                { label: "Reading", score: ielts.reading },
                { label: "Writing", score: ielts.writing },
                { label: "Speaking", score: ielts.speaking },
              ].map((band, i) => (
                <div key={i} className="bg-base-850 p-3 rounded-lg border border-base-700/30">
                  <p className="text-[11px] text-slate-500 mb-0.5">{band.label}</p>
                  <p className="font-serif text-lg font-bold text-white">{band.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Degree & transcript */}
        <div className="card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-[11px] font-mono text-gold-400/80 uppercase tracking-wider mb-1">
                Undergraduate Degree
              </p>
              <h3 className="font-serif text-xl font-bold text-white">{ACADEMIC_CREDENTIALS.degree}</h3>
              <p className="text-sm text-slate-400 mt-1">{ACADEMIC_CREDENTIALS.institution} • {ACADEMIC_CREDENTIALS.period}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] font-mono text-slate-500 uppercase">Last 60 GPA</p>
                <p className="font-serif text-xl font-bold text-gold-300">{ACADEMIC_CREDENTIALS.last60Gpa}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-slate-500 uppercase">Overall CGPA</p>
                <p className="font-serif text-xl font-bold text-white">{ACADEMIC_CREDENTIALS.cgpa}</p>
              </div>
              <button
                onClick={() => onViewPdf("Academic Transcript", ACADEMIC_CREDENTIALS.transcriptPdfUrl)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition"
              >
                <FileText className="w-3.5 h-3.5" />
                Transcript
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Awards */}
            <div className="bg-base-850 p-4 rounded-lg border border-base-700/30">
              <p className="text-[10px] font-mono text-gold-400/70 uppercase tracking-wider mb-2">Honors & Awards</p>
              <div className="space-y-1.5">
                {ACADEMIC_CREDENTIALS.awards.map((a, i) => (
                  <p key={i} className="text-xs text-slate-300 flex gap-2">
                    <span className="text-gold-400/50">›</span> {a}
                  </p>
                ))}
              </div>
            </div>

            {/* Relevant coursework */}
            <div className="bg-base-850 p-4 rounded-lg border border-base-700/30">
              <p className="text-[10px] font-mono text-teal-400/70 uppercase tracking-wider mb-2">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ACADEMIC_CREDENTIALS.coursework.map((c, i) => (
                  <span key={i} className="badge badge-subtle text-[10px]">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
