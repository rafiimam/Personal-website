import React, { useState } from 'react';
import { Download, Eye, FileText } from 'lucide-react';
import { DOCUMENT_ASSETS, type DocumentAsset } from '../data/content';

interface DocumentHubProps {
  onViewPdf: (title: string, pdfUrl: string) => void;
}

const CATEGORIES: Array<'All' | DocumentAsset['category']> = ['All', 'CV', 'Research', 'Test Scores', 'Transcript'];

export const DocumentHub: React.FC<DocumentHubProps> = ({ onViewPdf }) => {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');
  const docs = DOCUMENT_ASSETS.filter((d) => filter === 'All' || d.category === filter);

  return (
    <section id="documents" className="py-20 sm:py-24 bg-paper-200/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="eyebrow">Document Hub</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Application documents
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          Everything an admissions committee or prospective advisor needs, in one place — current versions only.
        </p>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-2 rounded-lg text-[13px] font-medium border transition-all ${
                filter === cat
                  ? 'bg-ink-900 text-white border-ink-900'
                  : 'bg-white text-slate-600 border-ink-100 hover:border-ink-300 hover:text-ink-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((doc) => (
            <article key={doc.id} className="card card-hover p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-50 text-accent-700">
                  <FileText className="w-[18px] h-[18px]" />
                </span>
                <span className="badge badge-subtle">{doc.category}</span>
              </div>
              <h3 className="mt-4 font-serif text-[17px] font-bold text-ink-900 leading-snug">{doc.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500 flex-1">{doc.description}</p>
              <p className="mt-3 font-mono text-[11px] text-slate-400">{doc.fileSize} · {doc.date}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => onViewPdf(doc.title, doc.fileUrl)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-ink-900 px-3 py-2 text-[13px] font-semibold text-white hover:bg-ink-800 transition"
                >
                  <Eye className="w-4 h-4" /> View
                </button>
                <a
                  href={doc.fileUrl}
                  download
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 py-2 text-[13px] font-semibold text-ink-900 hover:border-ink-300 hover:bg-paper-50 transition"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
