import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchVision } from './components/ResearchVision';
import { SalloraVisualizer } from './components/SalloraVisualizer';
import { Publications } from './components/Publications';
import { SystemsEngineering } from './components/SystemsEngineering';
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
    <div className="min-h-screen bg-base-900 text-slate-200 selection:bg-gold-400/30 selection:text-gold-100">
      <Navbar />

      <main>
        <Hero onViewPdf={handleViewPdf} />
        <ResearchVision />
        <SalloraVisualizer onViewPdf={handleViewPdf} />
        <Publications onViewPdf={handleViewPdf} />
        <SystemsEngineering />
        <AcademicCredentials onViewPdf={handleViewPdf} />
        <DocumentHub onViewPdf={handleViewPdf} />
      </main>

      <ContactFooter onViewPdf={handleViewPdf} />

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
