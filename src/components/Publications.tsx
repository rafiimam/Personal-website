import React, { useState } from 'react';
import { Copy, Check, FileText, BookOpen, ChevronDown } from 'lucide-react';
import { PUBLICATIONS, type Publication } from '../data/content';

interface PublicationsProps {
  onViewPdf: (title: string, pdfUrl: string) => void;
}

const PublicationCard: React.FC<{ pub: Publication; onViewPdf: PublicationsProps['onViewPdf'] }> = ({ pub, onViewPdf }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <article className={`card card-hover p-6 sm:p-7 ${pub.highlight ? 'border-l-4 border-l-accent-600' : ''}`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="badge badge-accent">{pub.category}</span>
        <span className="badge badge-subtle">{pub.role}</span>
        <span className="badge badge-brass">{pub.year}</span>
        {pub.highlight && <span className="badge bg-ink-900 text-white border border-ink-900">Featured</span>}
      </div>

      <h3 className="mt-4 font-serif text-xl font-bold text-ink-900 leading-snug">{pub.title}</h3>
      <p className="mt-1.5 text-sm text-slate-500">{pub.authors}</p>
      <p className="mt-1 text-[13px] font-medium text-slate-400 flex items-center gap-1.5">
        <BookOpen className="w-3.5 h-3.5" /> {pub.venue}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">{pub.abstract}</p>

      {expanded && (
        <div className="mt-4 rounded-xl bg-paper-100 border border-ink-100 p-5 animate-fade-in">
          <p className="eyebrow mb-3">Key contributions</p>
          <ul className="space-y-2">
            {pub.contributions.map((c) => (
              <li key={c.slice(0, 30)} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="eyebrow mb-2">BibTeX</p>
            <pre className="overflow-x-auto rounded-lg bg-ink-900 text-ink-100 text-xs leading-relaxed p-4 font-mono">{pub.bibtex}</pre>
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2.5">
        <button onClick={() => onViewPdf(pub.title, pub.pdfUrl)} className="btn-secondary !px-4 !py-2 text-[13px]">
          <FileText className="w-4 h-4" /> Read PDF
        </button>
        <button onClick={() => setExpanded(!expanded)} className="btn-secondary !px-4 !py-2 text-[13px]" aria-expanded={expanded}>
          {expanded ? 'Hide details' : 'Contributions & BibTeX'}
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
        <button onClick={copyBibtex} className="btn-secondary !px-4 !py-2 text-[13px]">
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied' : 'Copy BibTeX'}
        </button>
      </div>
    </article>
  );
};

export const Publications: React.FC<PublicationsProps> = ({ onViewPdf }) => {
  return (
    <section id="publications" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="section-divider mb-16" />
        <p className="eyebrow">Publications &amp; Manuscripts</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          Published and ongoing work
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          One independent research manuscript (2026) and four peer-reviewed papers at IEEE ICCIT 2023,
          spanning NLP, federated learning, medical AI, and computer vision.
        </p>

        <div className="mt-10 space-y-5">
          {PUBLICATIONS.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} onViewPdf={onViewPdf} />
          ))}
        </div>
      </div>
    </section>
  );
};
