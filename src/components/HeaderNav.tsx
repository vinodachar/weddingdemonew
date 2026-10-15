import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

interface HeaderNavProps {
  layoutMode: 'scroll' | 'panels';
  setLayoutMode: (mode: 'scroll' | 'panels') => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ layoutMode, setLayoutMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Welcome', href: '#hero' },
    { label: 'Invitation', href: '#invitation' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Venue', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Dress Code', href: '#dresscode' },
    { label: 'Save the Date', href: '#savethedate' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-sm border-b border-[#B8A477]/30 py-2.5'
          : 'bg-[#FAF7F0]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-left"
          aria-label="Home"
        >
          <div className="w-9 h-9 rounded-full border border-[#B8A477] bg-[#FAF7F0] flex items-center justify-center text-[#303B26] font-serif font-bold text-lg group-hover:bg-[#303B26] group-hover:text-[#FAF7F0] transition-colors shadow-xs">
            <span>N</span>
            <span className="font-script text-xs text-[#B8A477] mx-[-1px]">&</span>
            <span>V</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-sm tracking-widest uppercase text-[#303B26] block font-semibold">
              {weddingConfig.couple.bride.firstName} & {weddingConfig.couple.groom.firstName}
            </span>
            <span className="text-[10px] tracking-wider text-[#626B48] uppercase block">
              14 & 15 August 2026 • Bangalore
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest text-[#37352F] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#303B26] transition-colors py-1 border-b border-transparent hover:border-[#B8A477]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions: Layout switch + RSVP CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Layout switcher (Desktop only) */}
          <div className="hidden md:flex items-center bg-[#EDE6D6] p-0.5 rounded-full border border-[#B8A477]/40 text-[11px]">
            <button
              onClick={() => setLayoutMode('panels')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                layoutMode === 'panels'
                  ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                  : 'text-[#37352F] hover:text-[#303B26]'
              }`}
              title="Editorial 3-Panel View (Reference layout)"
            >
              3-Panel View
            </button>
            <button
              onClick={() => setLayoutMode('scroll')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                layoutMode === 'scroll'
                  ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                  : 'text-[#37352F] hover:text-[#303B26]'
              }`}
              title="Full Story Scroll"
            >
              Full Scroll
            </button>
          </div>

          <a
            href="#rsvp"
            className="px-4 py-2 bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs uppercase tracking-widest font-medium rounded-full shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 border border-[#B8A477]/40 cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 text-[#B8A477] fill-current" />
            <span>RSVP</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#303B26] hover:text-[#626B48] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F0] border-b border-[#B8A477]/30 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-[#37352F] hover:text-[#303B26] py-1 font-serif text-base"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#B8A477]/20 flex justify-center gap-4 text-xs text-[#626B48]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#B8A477]" /> Aug 14 & 15, 2026
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B8A477]" /> JP Nagar, Bangalore
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
