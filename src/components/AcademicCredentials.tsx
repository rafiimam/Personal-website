import React from 'react';
import { FileText, GraduationCap, Award } from 'lucide-react';
import { ACADEMIC_CREDENTIALS } from '../data/content';

interface AcademicCredentialsProps {
  onViewPdf: (title: string, pdfUrl: string) => void;
}

export const AcademicCredentials: React.FC<AcademicCredentialsProps> = ({ onViewPdf }) => {
  const c = ACADEMIC_CREDENTIALS;

  return (
    <section id="credentials" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />
        <p className="eyebrow">Academic Credentials</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Education &amp; standardized tests
        </h2>

        <div className="mt-10 grid lg:grid-cols-5 gap-4">
          {/* Degree */}
          <div className="card card-hover p-6 sm:p-7 lg:col-span-3">
            <div className="flex items-start gap-3.5">
              <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-accent-50 text-accent-700">
                <GraduationCap className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-ink-900 leading-snug">{c.degree}</h3>
                <p className="mt-0.5 text-sm font-medium text-slate-600">{c.institution}</p>
                <p className="text-[13px] text-slate-400">{c.period} · {c.division}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-paper-100 border border-ink-100 px-4 py-3">
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">CGPA</div>
                <div className="font-serif text-xl font-bold text-ink-900">{c.cgpa}</div>
              </div>
              <div className="rounded-xl bg-paper-100 border border-ink-100 px-4 py-3">
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Last 60 credit hours</div>
                <div className="font-serif text-xl font-bold text-ink-900">{c.last60Gpa}</div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {c.awards.map((a) => (
                <p key={a} className="flex items-center gap-2 text-sm text-slate-600">
                  <Award className="w-4 h-4 text-brass-600 shrink-0" /> {a}
                </p>
              ))}
            </div>

            <div className="mt-5">
              <p className="eyebrow mb-2.5">Relevant coursework</p>
              <div className="flex flex-wrap gap-1.5">
                {c.coursework.map((course) => (
                  <span key={course} className="badge badge-subtle">{course}</span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onViewPdf('RUET Academic Transcript', c.transcriptPdfUrl)}
              className="btn-secondary mt-6"
            >
              <FileText className="w-4 h-4" /> View transcript
            </button>
          </div>

          {/* Test scores */}
          <div className="lg:col-span-2 grid gap-4">
            <div className="card card-hover p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-lg font-bold text-ink-900">GRE General Test</h3>
                <span className="font-mono text-xs text-slate-400">{c.gre.testDate}</span>
              </div>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-serif text-4xl font-bold text-ink-900">{c.gre.totalScore}</span>
                <span className="text-sm text-slate-400 pb-1">total</span>
              </div>
              <div className="mt-4 space-y-1.5 text-sm">
                <p className="flex justify-between"><span className="text-slate-500">Quantitative</span><span className="font-semibold text-ink-900">{c.gre.quantScore} · {c.gre.quantPercentile}</span></p>
                <p className="flex justify-between"><span className="text-slate-500">Verbal</span><span className="font-semibold text-ink-900">{c.gre.verbalScore} · {c.gre.verbalPercentile}</span></p>
                <p className="flex justify-between"><span className="text-slate-500">Analytical Writing</span><span className="font-semibold text-ink-900">{c.gre.awaScore} · {c.gre.awaPercentile}</span></p>
              </div>
              <button onClick={() => onViewPdf('Official GRE Score Report', c.gre.pdfUrl)} className="mt-4 text-[13px] font-semibold text-accent-700 hover:text-accent-600 inline-flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> Official report
              </button>
            </div>

            <div className="card card-hover p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-lg font-bold text-ink-900">IELTS Academic</h3>
                <span className="font-mono text-xs text-slate-400">{c.ielts.testDate}</span>
              </div>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-serif text-4xl font-bold text-ink-900">{c.ielts.overallBand}</span>
                <span className="text-sm text-slate-400 pb-1">overall · CEFR {c.ielts.cefrLevel}</span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                {([
                  ['Listening', c.ielts.listening],
                  ['Reading', c.ielts.reading],
                  ['Writing', c.ielts.writing],
                  ['Speaking', c.ielts.speaking],
                ] as const).map(([label, score]) => (
                  <div key={label} className="rounded-lg bg-paper-100 border border-ink-100 py-2">
                    <div className="font-serif text-base font-bold text-ink-900">{score.toFixed(1)}</div>
                    <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => onViewPdf('Official IELTS Score Report', c.ielts.pdfUrl)} className="mt-4 text-[13px] font-semibold text-accent-700 hover:text-accent-600 inline-flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> Official report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
