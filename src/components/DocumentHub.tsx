import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import { DOCUMENT_ASSETS } from '../data/content';

interface DocumentHubProps {
  onViewPdf: (title: string, url: string) => void;
}

export const DocumentHub: React.FC<DocumentHubProps> = ({ onViewPdf }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'CV', 'Research', 'Test Scores', 'Transcript'];

  const filtered = selectedCategory === 'All'
    ? DOCUMENT_ASSETS
    : DOCUMENT_ASSETS.filter(d => d.category === selectedCategory);

  return (
    <section id="documents" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-gold-400/80 mb-3">
              Complete Application Materials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
              Document Repository
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              All academic documents available for review and download.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold-400 text-base-900 font-bold'
                    : 'bg-base-800 text-slate-400 hover:text-white hover:bg-base-750 border border-base-700/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Document grid — compact, functional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((doc) => (
            <div key={doc.id} className="card p-5 card-hover group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="badge badge-gold text-[10px]">{doc.category}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{doc.fileSize}</span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors mb-2 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-[12px] text-slate-400 leading-relaxed mb-4">
                  {doc.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-base-700/30">
                <button
                  onClick={() => onViewPdf(doc.title, doc.fileUrl)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-gold-300 hover:text-gold-200 transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </button>
                <a
                  href={doc.fileUrl}
                  download
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
