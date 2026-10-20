import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchArtifacts } from './components/ResearchArtifacts';
import { GateConcatVisualizer } from './components/GateConcatVisualizer';
import { ResearchVision } from './components/ResearchVision';
import { Publications } from './components/Publications';
import { SystemsEngineering } from './components/SystemsEngineering';
import { Experience } from './components/Experience';
import { AcademicCredentials } from './components/AcademicCredentials';
import { DocumentHub } from './components/DocumentHub';
import { ContactFooter } from './components/ContactFooter';
import { PdfViewerModal } from './components/PdfViewerModal';

export const App: React.FC = () => {
  const [activePdfModal, setActivePdfModal] = useState<{
    isOpen: boolean;
    title: string;
    pdfUrl: string;
  }>({
    isOpen: false,
    title: '',
    pdfUrl: '',
  });

  const handleViewPdf = (title: string, pdfUrl: string) => {
    setActivePdfModal({ isOpen: true, title, pdfUrl });
  };

  const handleClosePdfModal = () => {
    setActivePdfModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-paper-100 text-slate-700 selection:bg-accent-100 selection:text-ink-900">
      <Navbar />

      <main>
        <Hero onViewPdf={handleViewPdf} />
        <ResearchArtifacts onViewPdf={handleViewPdf} />
        <GateConcatVisualizer />
        <Publications onViewPdf={handleViewPdf} />
        <SystemsEngineering onViewPdf={handleViewPdf} />
        <Experience />
        <ResearchVision />
        <AcademicCredentials onViewPdf={handleViewPdf} />
        <DocumentHub onViewPdf={handleViewPdf} />
      </main>

      <ContactFooter />

      <PdfViewerModal
        isOpen={activePdfModal.isOpen}
        onClose={handleClosePdfModal}
        title={activePdfModal.title}
        pdfUrl={activePdfModal.pdfUrl}
      />
    </div>
  );
};

export default App;
