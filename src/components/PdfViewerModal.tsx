import React from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  pdfUrl
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-5xl h-[90vh] bg-base-900 border border-base-700/60 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-base-850 border-b border-base-700/40">
          <div className="flex items-center gap-2.5 min-w-0">
            <FileText className="w-4 h-4 text-gold-400 shrink-0" />
            <h3 className="font-serif font-bold text-white text-sm truncate">{title}</h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-base-800 hover:bg-base-750 rounded-md border border-base-700/40 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 rounded-md border border-gold-400/20 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-1 text-slate-500 hover:text-white bg-base-800 hover:bg-base-750 rounded-md transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 bg-base-950">
          <iframe
            src={pdfUrl}
            title={title}
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};
