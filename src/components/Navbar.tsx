import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { assetUrl } from '../utils/assetUrl';

interface NavbarProps {
  onOpenDocHub?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Research", href: "#research" },
    { label: "DocXAR", href: "#sallora" },
    { label: "Publications", href: "#publications" },
    { label: "Industry", href: "#industry" },
    { label: "Enterprise AI", href: "#enterprise-ai" },
    { label: "Credentials", href: "#credentials" },
    { label: "Documents", href: "#documents" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled
        ? 'bg-base-900/95 backdrop-blur-md border-b border-base-700/40 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Name mark */}
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="font-serif text-lg font-bold text-white tracking-tight group-hover:text-gold-300 transition-colors">
              Rafi Imam
            </span>
            <span className="hidden sm:inline text-[11px] font-mono text-gold-400/80 tracking-wide">
              Ph.D. Applicant '27
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-slate-400 hover:text-white rounded-lg hover:bg-base-800/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={assetUrl('./docs/MD_RAFI_IMAM_CV.pdf')}
              download
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-gold-300 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/25 rounded-lg transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white bg-base-800 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-base-850/98 backdrop-blur-xl border-b border-base-700/40 mt-1 px-5 py-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-base-800/60 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-base-700/40 flex gap-3">
            <a href={PERSONAL_INFO.scholarUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-gold-300 transition">Scholar</a>
            <a href={PERSONAL_INFO.researchGateUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-gold-300 transition">ResearchGate</a>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-gold-300 transition">GitHub</a>
          </div>
        </div>
      )}
    </header>
  );
};
