
import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onNavigate: (href: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={() => onNavigate('/')}
        >
          <div className="relative">
            <Hexagon className="w-10 h-10 text-[#f5a623] fill-[#f5a623]/20 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white tracking-tighter uppercase">Pchela</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5a623]/80 hidden sm:block">Build a hive. Not a heap.</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = (currentPage === 'home' && link.href.startsWith('#')) || (currentPage === link.href.replace('/', ''));
            return (
              <a 
                key={link.label} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs font-black transition-all uppercase tracking-[0.2em] relative group ${
                  isActive ? 'text-[#f5a623]' : 'text-[#f5a623]/80 hover:text-[#f5a623]'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#f5a623] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#f5a623] hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
        <div className="px-6 py-10 flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xl font-black text-[#f5a623] hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
